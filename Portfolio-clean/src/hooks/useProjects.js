import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

export const useProjects = () => {
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('all')

    // ... lógica del hook
}