import React from 'react'
import {Chip}  from './btn'

export default function Filters({filters, onFilterRemove}) {
  return (
    <div>
      {filters.map(x => <Chip text={x.value} type={x.name}
      onDelete={e => onFilterRemove(x)} />)}
    </div>
  )
}