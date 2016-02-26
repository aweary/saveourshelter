import React, {Component} from 'react';

export default class StatsSection extends Component {
  render() {
    return (
      <div id='stats' className='section'>
        <div className='content'>
        <h2>Stats</h2>
        <h3>Williamson County Shelter Statistics 2009-2015</h3>
          <ul className="nav nav-tabs" role="tablist">
            <li className='active' role="presentation"><a href="#williams-dogs" aria-controls="williams-dogs" role="tab" data-toggle="tab">Dogs</a></li>
            <li role="presentation"><a href="#williams-cats" aria-controls="williams-cats" role="tab" data-toggle="tab">Cats</a></li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="williams-dogs">
              <div className='table-responsive'>
              <table className="table shelter-stats">
              <thead>
                <tr>
                  <th></th>
                  <th>2009 - 2010</th>
                  <th>2010 - 2011</th>
                  <th>2011 - 2012</th>
                  <th>2012 - 2013</th>
                  <th>2013 - 2014</th>
                  <th>2014 - 2015</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Stray</th>
                  <td>755</td>
                  <td>811</td>
                  <td>1064</td>
                  <td>1044</td>
                  <td>1091</td>
                  <td>1202</td>
                </tr>
                <tr>
                  <th scope="row">Owner Surrender</th>
                  <td>579</td>
                  <td>734</td>
                  <td>1048</td>
                  <td>1111</td>
                  <td>907</td>
                  <td>1059</td>
                </tr>
                <tr>
                  <th scope="row">Transfer In</th>
                  <td>30</td>
                  <td>36</td>
                  <td>73</td>
                  <td>35</td>
                  <td>76</td>
                  <td>56</td>
                </tr>
                <tr>
                  <th scope="row">Born In Shelter</th>
                  <td>43</td>
                  <td>49</td>
                  <td>26</td>
                  <td>15</td>
                  <td>29</td>
                  <td>69</td>
                </tr>
                <tr>
                  <th scope="row">ACO Agency</th>
                  <td>2355</td>
                  <td>2497</td>
                  <td>2243</td>
                  <td>1934</td>
                  <td>1587</td>
                  <td>1358</td>
                </tr>
                <tr className='emphasis-row'>
                  <th scope="row">Total Incoming</th>
                  <td>3762</td>
                  <td>4127</td>
                  <td>4454</td>
                  <td>4139</td>
                  <td>3690</td>
                  <td>3744</td>
                </tr>
                <tr>
                  <th scope="row">Adopted</th>
                  <td>1329</td>
                  <td>1710</td>
                  <td>2543</td>
                  <td>2316</td>
                  <td>2143</td>
                  <td>2462</td>
                </tr>
                <tr>
                  <th scope="row">Reclaimed</th>
                  <td>943</td>
                  <td>1138</td>
                  <td>1093</td>
                  <td>1023</td>
                  <td>956</td>
                  <td>885</td>
                </tr>
                <tr>
                  <th scope="row">Transferred</th>
                  <td>774</td>
                  <td>955</td>
                  <td>561</td>
                  <td>620</td>
                  <td>419</td>
                  <td>349</td>
                </tr>
                <tr>
                  <th scope="row">Died</th>
                  <td>44</td>
                  <td>25</td>
                  <td>34</td>
                  <td>21</td>
                  <td>26</td>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">Admin Missing</th>
                  <td>6</td>
                  <td>0</td>
                  <td>15</td>
                  <td>1</td>
                  <td>8</td>
                  <td>7</td>
                </tr>
                <tr className='negative-stat-row'>
                  <th scope="row">Euthanized</th>
                  <td>672</td>
                  <td>227</td>
                  <td>203</td>
                  <td>186</td>
                  <td>106</td>
                  <td>49</td>
                </tr>
                <tr className='emphasis-row'>
                  <th scope="row">Total Outgoing</th>
                  <td>3768</td>
                  <td>4055</td>
                  <td>4449</td>
                  <td>4167</td>
                  <td>3658</td>
                  <td>3767</td>
                </tr>

              </tbody>
              </table>
              </div>
            </div>
              <h3 className='section-title'>Pflugerville Animal Shelter, 2014-2015</h3>
            <div role="tabpanel" className="tab-pane" id="williams-cats">
                    <div className='table-responsive'>
                      <table className="table shelter-stats">
                      <thead>
                        <tr>
                          <th></th>
                          <th>2009 - 2010</th>
                          <th>2010 - 2011</th>
                          <th>2011 - 2012</th>
                          <th>2012 - 2013</th>
                          <th>2013 - 2014</th>
                          <th>2014 - 2015</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Stray</th>
                          <td>1514</td>
                          <td>1281</td>
                          <td>1573</td>
                          <td>1558</td>
                          <td>1663</td>
                          <td>1895</td>
                        </tr>
                        <tr>
                          <th scope="row">Owner Surrender</th>
                          <td>350</td>
                          <td>461</td>
                          <td>576</td>
                          <td>604</td>
                          <td>578</td>
                          <td>387</td>
                        </tr>
                        <tr>
                          <th scope="row">Transfer In</th>
                          <td>7</td>
                          <td>1</td>
                          <td>7</td>
                          <td>1</td>
                          <td>1</td>
                          <td>7</td>
                        </tr>
                        <tr>
                          <th scope="row">Born In Shelter</th>
                          <td>73</td>
                          <td>4</td>
                          <td>7</td>
                          <td>54</td>
                          <td>11</td>
                          <td>132</td>
                        </tr>
                        <tr>
                          <th scope="row">ACO Agency</th>
                          <td>663</td>
                          <td>912</td>
                          <td>793</td>
                          <td>708</td>
                          <td>420</td>
                          <td>411</td>
                        </tr>
                <tr className='emphasis-row'>
                          <th scope="row">Total Incoming</th>
                          <td>2607</td>
                          <td>2707</td>
                          <td>3020</td>
                          <td>2942</td>
                          <td>2788</td>
                          <td>2832</td>
                        </tr>
                        <tr>
                          <th scope="row">Adopted</th>
                          <td>1159</td>
                          <td>1417</td>
                          <td>1637</td>
                          <td>2014</td>
                          <td>1859</td>
                          <td>1965</td>
                        </tr>
                        <tr>
                          <th scope="row">Reclaimed</th>
                          <td>45</td>
                          <td>7</td>
                          <td>3</td>
                          <td>44</td>
                          <td>41</td>
                          <td>82</td>
                        </tr>
                        <tr>
                          <th scope="row">Transferred</th>
                          <td>420</td>
                          <td>568</td>
                          <td>750</td>
                          <td>513</td>
                          <td>535</td>
                          <td>391</td>
                        </tr>
                        <tr>
                          <th scope="row">Died</th>
                          <td>282</td>
                          <td>278</td>
                          <td>246</td>
                          <td>219</td>
                          <td>123</td>
                          <td>176</td>
                        </tr>
                        <tr>
                          <th scope="row">Admin Missing</th>
                          <td>41</td>
                          <td>7</td>
                          <td>4</td>
                          <td>79</td>
                          <td>29</td>
                          <td>19</td>
                        </tr>
                        <tr className='negative-stat-row'>
                          <th scope="row">Euthanized</th>
                          <td>504</td>
                          <td>363</td>
                          <td>191</td>
                          <td>206</td>
                          <td>123</td>
                          <td>125</td>
                        </tr>
                <tr className='emphasis-row'>
                          <th scope="row">Total Outgoing</th>
                          <td>2431</td>
                          <td>2698</td>
                          <td>2907</td>
                          <td>3075</td>
                          <td>2710</td>
                          <td>2758</td>
                        </tr>

                      </tbody>
                      </table>
                      </div>
            </div>
          </div>

      <ul className="nav nav-tabs" role="tablist">
        <li className='active' role="presentation"><a href="#williams-dogs" aria-controls="williams-dogs" role="tab" data-toggle="tab">All Animals</a></li>
      </ul>
    <div className='table-responsive'>
   <table className="table shelter-stats">
   <thead>
     <tr>
       <th></th>
       <th>2013 - 2014</th>
       <th>2014 - 2015</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">Clinic</th>
       <td>2</td>
       <td>1</td>
     </tr>
     <tr>
       <th scope="row">Owner/Guardian Surrender</th>
       <td>169</td>
       <td>113</td>
     </tr>
     <tr>
       <th scope="row">Return</th>
       <td>40</td>
       <td>27</td>
     </tr>
     <tr>
       <th scope="row">Seized/Custody</th>
       <td>14</td>
       <td>14</td>
     </tr>
     <tr>
       <th scope="row">Stray</th>
       <td>854</td>
       <td>933</td>
     </tr>
     <tr>
       <th scope="row">Transfer In</th>
       <td>4</td>
       <td>1</td>
     </tr>
     <tr className='emphasis-row'>
       <th scope="row">Total Incoming</th>
       <td>1083</td>
       <td>1089</td>
     </tr>
     <tr>
       <th scope="row">Adopted</th>
       <td>518</td>
       <td>480</td>
     </tr>
     <tr>
       <th scope="row">Return to Owner/Guardian</th>
       <td>394</td>
       <td>456</td>
     </tr>
     <tr>
       <th scope="row">Transferred</th>
       <td>126</td>
       <td>85</td>
     </tr>
     <tr>
       <th scope="row">Died</th>
       <td>14</td>
       <td>35</td>
     </tr>
     <tr>
       <th scope="row">Admin Missing</th>
       <td>3</td>
       <td>3</td>
     </tr>
     <tr>
       <th scope="row">Clinic Out</th>
       <td>2</td>
       <td>1</td>
     </tr>
     <tr className='positive-stat-row'>
       <th scope="row">Euthanized *</th>
       <td>18</td>
       <td>15</td>
     </tr>
     <tr className='emphasis-row'>
       <th scope="row">Total Outgoing</th>
       <td>1075</td>
       <td>1075</td>
     </tr>

   </tbody>
 </table>
 <i>* All animals euthanized were due to severe illness or injury</i>
 </div>
 </div>

      </div>
    )
  }
}
