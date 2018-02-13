import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import SessionForm from '../session-form/session-form';
import SessionsList from '../sessions-list/sessions-list';
import LocationsBar from '../locations-bar/locations-bar';
import {getSessions} from '../../actions/sessions';



export class GroupPage extends React.Component{

    componentDidMount(){
      console.log('component did mount');
      this.props.dispatch(getSessions());
    }

    render(){
      let loading;
      if(this.props.loading){
        loading = <div> Loading... </div>
      }
      return (
        <div>  
          <header>
            <h1>Study Group</h1>
            <h2>Group Name</h2>
          </header>
          {loading}
          <main>
            < SessionForm className='add-session' />
            < SessionsList className='sessions-list'/>
            < LocationsBar className='locations-bar'/>
          </main>
         </div>  
      );
    };  
}

const mapStateToProps = (state) => ({
  loading: state.session.loading
})
export default connect(mapStateToProps)(GroupPage)