import React from 'react';

const HeaderHeroImage = ({headerHeroImageOptions}) => {

  const imgHeroOptions = headerHeroImageOptions.map( (option) => {
    return (
      <td key={option.utmContentValue} style={{fontSize: '0'}}>
        <a data-link-name={option.utmContentValue} href={option.hrefLink + '?utm_source=' + option.utmSource + '&amp;utm_medium=' + option.utmMedium + '&amp;utm_content=' + option.utmContent + '&amp;utm_campaign=' + option.utmCampaign} target="_blank">
          <img border="0" src={option.imgSrcLink + option.imgSrcFilename + '.jpg'} style={{display: 'block'}} width={option.imgSrcWidth} alt={option.utmContentValue}  /> 
        </a>
      </td>
    )
  });

  return (
    
    <table align="center" border="0" cellPadding="0" cellSpacing="0" className="preHeader pc100" style={{borderCollapse: 'collapse'}} width="100%">
      <tbody>
        <tr style={{lineHeight: '1px'}}>
          {imgHeroOptions}
        </tr>
      </tbody>
    </table>
  );

  }

  export default HeaderHeroImage;