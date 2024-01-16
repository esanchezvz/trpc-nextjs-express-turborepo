'use client'

import { trpc } from "@/trpc/react"

export const Client = () => {
  const {data  = []} = trpc.user.findMany.useQuery()

  return (
    <div>
      <h3>Query From Client</h3>
  
      <ul>
        {data.map((u) => <li key={u.id}>{u.firstName} {u.lastName}</li>)}
      </ul>
    </div>
  )
}