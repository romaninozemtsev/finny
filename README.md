## How to use

1. try https://beta.finnyapp.com/
2. drop your credit card statement CSV file or click "try sample"
3. start exploring your spending


## Contribute new rules for categories or merchants 
TBD. for now update files in the `src/components/configs`


## Development

1.  **Start in development mode.**

    ```shell
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## 🧐 Source code organization

* configs
  * description -> merchant configs
  * merchant metdata
  * description -> category configs
  * category metadata 
* UI components:
  * file upload
  * timeline
  * table of merchants
  * table of categories
  * table of all transactions
* utilities:
  * file parsers


## 💫 Deploy

Deployment to Firebase static hosting happens automatically after each commit using Github actions.


## Testing

None so far.