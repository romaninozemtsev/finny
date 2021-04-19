import React from 'react';
import Timeline, {formatDate} from './spent_timeline';
import TxTable from './transactions_table';
import CategoriesDonut from './category_donut';
import TopMerchantsTable from './top_merchants';
import FileUpload from './file_upload';
import Filters from './filters';
import Files from './files'; 
import './finance.css';

//const f = '/Users/roman/src/finance-desktop/private/February2021_8366.csv';
//const f2 = '/Users/roman/src/finance-desktop/private/Chase7826_Activity20201218_20210117_20210216.CSV'
// '/Users/roman/src/personal_finance/bofa_sample_february.csv'

export default class StatementExplorer extends React.Component {
    /**
     * 
     * @param {{path: String}} props 
     */
    constructor(props) {
        super(props)
        this.onDataLoaded = this.onDataLoaded.bind(this);
        this.onDaySelected = this.onDaySelected.bind(this);
        this.onRootCategorySelected = this.onRootCategorySelected.bind(this);
        this.onMerchantSelected = this.onMerchantSelected.bind(this);
        this.onFilterRemove = this.onFilterRemove.bind(this);
        this.onFilterAdded = this.onFilterAdded.bind(this);
        this.updateWithFilters = this.updateWithFilters.bind(this);
        this.getFullData = this.getFullData.bind(this);
        this.state = {
            data: [],
            fullData: [],
            activeFilters: []
        }
        this.knownIds = new Set();

    }

    /**
     * 
     * @param {[{name: String, results: [{id, description}]}]} newData 
     */
    onDataLoaded(newData) {
        const newFilteredData = newData.map(x => {
            const {name, results, ...others} = x;
            let filteredResults = results.filter(res => {
                if (!this.knownIds.has(res.id)) {
                    this.knownIds.add(res.id);
                    return true;
                }
                return false;
            });
            return {
                name, 
                results: filteredResults,
                ...others
            }
        }).filter(x => {
            const {name, results} = x;
            return results?.length > 0;
        })
        
        const fullData = this.state.fullData.concat(newFilteredData);
        console.log("fullData", fullData);

        this.setState({fullData}, () => {
            this.updateWithFilters(this.state.activeFilters);
        })
    }

    getFullData() {
        let flatData = [];
        this.state.fullData.forEach(x => {
            const {name, results} = x;
            flatData = flatData.concat(results);
        });
        return flatData;
    }

    onDaySelected(selectedDate) {
        this.onFilterAdded("date", selectedDate);
    }

    onRootCategorySelected(rootCategory) {
        this.onFilterAdded("category", rootCategory);
    }

    updateWithFilters(activeFilters) {
        const merchants = activeFilters.filter(x => x.name === 'merchant').map(x => x.value);
        const categories = activeFilters.filter(x => x.name === 'category').map(x => x.value);
        const dates = activeFilters.filter(x => x.name === 'date').map(x => x.value);
        const data = this.getFullData().filter(x => {
            return (categories.length === 0 || categories.includes(x.rootCategory)) &&
                (merchants.length === 0 || merchants.includes(x.merchant)) &&
                (dates.length === 0 || dates.includes(formatDate(x.date)));
        });
        this.setState({data, activeFilters});
    }

    onFilterRemove(filter) {
        const {name, value} = filter;
        const activeFilters = this.state.activeFilters.slice().filter(x => {
            return !(x.name === name && x.value === value)
        });
        this.updateWithFilters(activeFilters);
    }

    onFilterAdded(name, value) {
        const activeFilters = this.state.activeFilters.slice();
        activeFilters.push({name, value});
        this.updateWithFilters(activeFilters);
    }

    onMerchantSelected(merchant) {
        this.onFilterAdded("merchant", merchant);
    }
    
    render() {
        // TODO: make flex layout here.
        // 1/ drop file area
        // 2/ list of files (so we can exclude some)
        // 3/ small timeline view
        // 4/ month / week selector
        // 5/ table on the bottom
        // 6/ categories on one side
        // 7/ merchants on another

        // remove tables from each component and make them propagate 'filter' up through action.
        // on selected.


        return <div className="flex flex-column flex-1">
            <div className="flex flex-row">
                <div className="w-1/3">
                <Filters
                    onFilterRemove={this.onFilterRemove}
                    filters={this.state.activeFilters} />
                </div>
                <div className="w-1/3">
                    <FileUpload key={'upload'} onFileUploaded={this.onDataLoaded}/>
                </div>
                <div className="w-1/3">
                    <Files fullData={this.state.fullData} />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <Timeline onDaySelected={this.onDaySelected} data={this.state.data} key={`timeline-${this.state.data.length}`} />
                </div>
                <div className="w-1/2">
                    <CategoriesDonut
                        onRootCategorySelected={this.onRootCategorySelected}
                        data={this.state.data}
                        key={`categories-${this.state.data.length}`} />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2">
                <TopMerchantsTable onMerchantSelected={this.onMerchantSelected} data={this.state.data} key={`merchants-${this.state.data.length}`} />
            </div>
            <div className="w-1/2">
                <TxTable data={this.state.data} key={`table-${this.state.data.length}`} />
            </div>
            </div>
        </div>

    //     return <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    //     <Tab eventKey="upload" title="upload">
    //         <FileUpload key={'upload'} onFileUploaded={this.onDataLoaded}/>
    //     </Tab>
    //     <Tab eventKey="timeline" title="Timeline">
    //         <Timeline data={this.state.data} key={`timeline-${this.state.data.length}`} />
    //     </Tab>
    //     <Tab eventKey="txTable" title="Table">
    //         <TxTable data={this.state.data} key={`table-${this.state.data.length}`} />
    //     </Tab>
    //     <Tab eventKey="categories" title="Categories">
    //         <CategoriesDonut data={this.state.data} key={`categories-${this.state.data.length}`} />
    //     </Tab>
    //     <Tab eventKey="merchants" title="Merchants">
    //         <TopMerchantsTable data={this.state.data} key={`merchants-${this.state.data.length}`} />
    //     </Tab>
    //   </Tabs>
            
    }
}