import React from 'react';
import './components.css';
import VideoUrl from './videourl';
import {Link} from "react-router-dom";

class VideoInp extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { url: '' };
    }

    statechange = (event) => {
        event.preventDefault();
        var vidurl = event.target.value
        vidurl = vidurl.replace("watch?v=", "embed/")
        vidurl = vidurl.concat("?enablejsapi=1")
        VideoUrl['url'] = vidurl

    }
    render() {
        return(
        <form>
            <div className="container youtube-uri">
              <div className="form-group row">
                  <label htmlFor="youtubelink" className="col-sm-2 col-form-label">Video Link: </label>
                  <div className="col-sm-10">
                      <input className="form-control" type="text" placeholder="YouTube link" name="inp"
                             id="youtubelink" onChange={this.statechange}/>
                  </div>
              </div>
              <div className="submit-button">
                  <Link to='/tagging'>
                    <input type="submit" className="btn btn-primary" />
                  </Link>
              </div>
            </div>
        </form>
        );
    }


}
export default VideoInp;