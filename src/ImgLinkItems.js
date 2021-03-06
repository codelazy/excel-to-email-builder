import React from 'react';

const ImgLinkItems = ({options, companyUtmSource, companyUtmMedium, companyUtmContent, companyUtmCampaign, companyImgDateFileName, companyImgRealFileName, companyImgSrcLink}) => {

  const imgItem = options.map( (option, index) => {
    
    let initialLink;
    if(option.hrefLink) {
      initialLink = 
      <a  key={index} data-link-name={option.utmContentValue} href={option.hrefLink + '?utm_source=' + companyUtmSource + '&amp;utm_medium=' + companyUtmMedium + '&amp;utm_content=' + companyUtmContent + '&amp;utm_campaign=' + companyUtmCampaign} target="_blank">
        <img border="0" src={companyImgSrcLink + companyImgDateFileName + companyImgRealFileName + option.imgCount + '.jpg'} style={{display: 'block'}} width={option.imgSrcWidth} alt={option.utmContentValue}  /> 
      </a>;
    } else {
      initialLink = <img border="0" src={companyImgSrcLink + companyImgDateFileName + companyImgRealFileName + option.imgCount + '.jpg'} style={{display: 'block'}} width={option.imgSrcWidth} alt={option.utmContentValue}  /> 
    }

    return (
      <table className="ImgLinkItem pc100" align="center" border="0" cellPadding="0" cellSpacing="0" style={{borderCollapse: 'collapse'}} width="100%">
        <tbody>
          <tr>
            <td>
              <table align="center" border="0" cellPadding="0" cellSpacing="0" style={{borderCollapse: 'collapse'}} width="100%">
                <tbody>
                  <tr style={{lineHeight: '1px'}}>
                    <td style={{fontSize: '0'}}>
                      {initialLink}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    )
  });

  return (
    
    {imgItem}
  );

  }

  export default ImgLinkItems;