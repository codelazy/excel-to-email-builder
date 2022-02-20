import React from 'react';

const ViewBrowser = ({preHeaderText, viewOnlineText}) => {

  return (
    <table className="ViewBrowser desktopOnly" align="center" border="0" cellPadding="0" cellSpacing="0" style={{borderCollapse: 'collapse'}} width="100%">
      <tbody>
        <tr>
          <td colspan="3" height="10" style={{fontSize: '1px', lineHeight: '1px'}}></td>
        </tr>
        <tr>
          <td>
            <table align="left" border="0" cellPadding="0" cellSpacing="0" style={{borderCollapse: 'collapse'}} >
              <tbody>
                <tr>
                  <td style={{color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', lineHeight: '19px'}}>
                  <div xtms_edit="BASIC" xtms_edit_link_style="color: #000000; text-decoration: none;">{preHeaderText ? preHeaderText : 'insert preHeader'}</div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table align="right" border="0" cellPadding="0" cellSpacing="0" style={{borderCollapse: 'collapse'}} >
              <tbody>
                <tr>
                  <td align="right" style={{color: '#000000', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', fontWeight: 'bold', lineHeight: '19px'}}>
                    <a href="http://x.email.thegoodguys.com.au/ats/msg.aspx?sg1={(URLSignature1)}" style={{color: '#000000', textDecoration: 'none'}} target="_blank" title={viewOnlineText ? viewOnlineText : 'View Online'}>{viewOnlineText ? viewOnlineText : 'View Online'}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="3" height="10" style={{fontSize: '1px', lineHeight: '1px'}}></td>
        </tr>
      </tbody>
    </table>
  );
}

export default ViewBrowser;