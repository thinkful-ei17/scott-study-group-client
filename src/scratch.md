# Data Models:

Session:
  Title: "string"
  Date: Day/Date
  Time: start:
        end:
  Location:  reference Location database?


Location:
  Name: string
  Address: string
  Image: img
  Hours: times
  Notes:[]
  Ratings:[]    
  
          makeList() {
      
      const list = this.props.session
        .sort((a, b) => a[this.props.sessions.startTime] < b[this.state.sessions.startTime])
        .map((session) => {
            <li key={session.id} className='session-list-item' id={session.id} >
            <Link to={`/sessions/${session.id}`}>
                    <p>{session.startTime} - {session.endTime} </p>
                    <p>{session.location}</p>
            </Link>       
            </li>
        });
      return list;
    }

    // Cory Mickelson	6:15 PM
// new Date("2018-02-12")
// array.sort(function(a,b){
//   // Turn your strings into dates, and then subtract them
//   // to get a value that is either negative, positive, or zero.
//   return new Date(b.date) - new Date(a.date);
// });

