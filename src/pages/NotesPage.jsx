import React from 'react'
import GroupsHandler from '../components/Hoc/GroupsHandler'
import NotesArea from '../components/NotesArea/NotesArea'

function NotesPage() {
  return (
    <GroupsHandler>
        <NotesArea/>
    </GroupsHandler>
  )
}
export default NotesPage;