import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = { _id: number, name: string, priority: string }
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 6, name: 'porn', priority: 'low'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    // switch (filter) {
    //     case 'high':
    //         return affairs.filter(a => a.priority === 'high')
    //     case 'low':
    //         return affairs.filter(a => a.priority === 'low')
    //     case 'middle':
    //         return affairs.filter(a => a.priority === 'middle')
    //     default:
    //         return affairs
    // }
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter)
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id !== _id)
}


function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
      <div>
          <hr/>
          homeworks 2

          {/*should work (должно работать)*/}
          <Affairs
            data={filteredAffairs}
            setFilter={setFilter}
            deleteAffairCallback={deleteAffairCallback}
            filter={filter}
          />

          <hr/>
          {/*для личного творчества, могу проверить*/}
          {/*<AlternativeAffairs/>*/}
          <hr/>
      </div>
    )
}

export default HW2
