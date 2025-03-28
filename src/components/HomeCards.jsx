import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
        <Card backgroundColour = 'bg-gray-100' title='For Musicians' desc='Find your perfect job in the music industry today' button='Find Job' href='./list-jobs.html' />
        <Card backgroundColour = 'bg-indigo-100' title='For Employers' desc='List your job to find the perfect musician for the role' button='Add Job' href='./add-job.html' />
    </section>
  )
}

export default HomeCards