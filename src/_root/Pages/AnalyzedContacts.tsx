import React from 'react'
import { columns, Payment } from '@/components/AnalyzedContacts/columns'
import { DataTable } from '@/components/AnalyzedContacts/data-table'
import { getOrders } from '@/data'

const AnalyzedContacts = () => {
  
  const data : Payment[] = getOrders()


  return (
    <div className="container mx-auto py-10">
    <DataTable columns={columns} data={data} />
  </div>
  )
}

export default AnalyzedContacts