import { useState } from 'react';
import { Calendar, momentLocalizer,Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from '@mui/material';

import './App.css'

export default function App() {
  const localizer = momentLocalizer(moment);

  const calenderStepSize = 15;
  const SLOTS_IN_CALENDER_STEP = 1;


  const eventsList = [
    {
      title: 'Team Meeting',
      start: moment('01:00', 'HH:mm').toDate(),
      end: moment('01:00', 'HH:mm').add(moment.duration(7.5, 'minutes')).toDate(),
    },
    {
      title: 'Lunch Break',
      start: moment('01:00', 'HH:mm').add(moment.duration(7.5, 'minutes')).toDate(),
      end: moment('01:15', 'HH:mm').toDate(),
    },

  ];

  return (
    <Container className='sessionview'>
      <Calendar
        localizer={localizer}
        defaultView={Views.DAY}
        events={eventsList}
        step={calenderStepSize}
        timeslots={SLOTS_IN_CALENDER_STEP}
        style={{ height: '100%' }}
        views={['day']} 
        startAccessor="start"
        endAccessor="end"
        dayLayoutAlgorithm="no-overlap"
      />
    </Container>
  );
}
