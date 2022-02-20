import React from 'react';

const Spacer = ({preHeaderText, viewOnlineText}) => {
  return (
    <table align="center" bgcolor="#ffffff" border="0" cellPadding="0" cellSpacing="0" className="pc100" style={{borderCollapse: 'collapse'}}  width="640">
      <tbody>
        <tr>
          <td height="20" style={{fontSize: '1px', lineHeight: '1px'}}></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Spacer;