import React from 'react';
import './FootNotes.css';

const FootNotes = () => {
  return (
    <div className='footnotes'>
      <ol className='footnote-list'>
        <li className='footnote-item'>
          Requires a 5G data plan (sold separately). 5G service and roaming not
          available on all operator networks or in all areas and may vary by
          country. Contact operator for details. 5G service, speed and
          performance depend on many factors including, but not limited to,
          operator network capabilities, device configuration and capabilities,
          network traffic, location, signal strength and signal obstruction.
          Actual results may vary. Some features are not available in all areas.
          Data rates may apply. Subscriptions may apply. See{' '}
          <a href='/'>g.co/pixel/networkinfo</a> for info.
        </li>
        <li className='footnote-item'>
          Nest Audio requires a Wi-Fi network, a nearby electrical socket, a
          Google Account and a compatible mobile device. See{' '}
          <a href='/'>g.co/home/req</a> for details.
        </li>
        <li className='footnote-item'>
          Chromecast with Google TV requires a TV with an HDMI port, a Wi-Fi
          network, a Google Account, a nearby electrical socket and a compatible
          mobile device. Minimum OS requirements are available at{' '}
          <a href='/'>g.co/cast/req.</a> To view content in 4K, a 4K-capable TV
          and reliable broadband Internet connection are also required.
        </li>
        <li className='footnote-item'>
          Compared to MSRP of unlocked Pixel 5 phone on the Google Store in the
          US
        </li>
        <li className='footnote-item'>
          Home size, materials and layout can affect how a Wi-Fi signal travels.
          Larger homes or homes with thicker walls or long, narrow layouts may
          need extra Wifi points for full coverage. The strength and speed of
          the signal will depend on your Internet provider.
        </li>
        <li className='footnote-item'>
          To see personalised photos, Google Photos is required.
        </li>
        <li className='footnote-item'>As compared to Google Home Mini.</li>
        <li className='footnote-item'>
          Testing based on download speeds for content file sizes between 449MB
          and 749MB at off-peak times. Average download time was twenty seconds
          or less. Download speed depends upon many factors, such as file size,
          content provider and carrier network connection and capabilities.
          Testing conducted by Google on pre-production hardware in the UK in
          August 2020. Actual download speeds may be slower.
        </li>
      </ol>
    </div>
  );
};

export default FootNotes;
