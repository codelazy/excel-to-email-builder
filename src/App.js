import React from 'react';
import EmailTemplate from './EmailTemplate';

export default () => {
  return (
    <table align="center" border="0" cellPadding="0" cellSpacing="0" className="App pc100" style={{borderCollapse: 'collapse'}} width="640">
      <tbody>
        <tr>
          <td align="left" className="pc100-min" style={{minWidth: '624px'}}>
            <EmailTemplate />
          </td>
        </tr>
      </tbody>
    </table>
  );
};