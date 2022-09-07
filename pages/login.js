import { useEffect } from 'react';
// import PassageAuth from '@passageidentity/passage-auth'

export default function Home() {

// declare namespace JSX {
//     interface IntrinsicElements {
//         "passage-auth": PassageAuth;
//     }
// }

  useEffect(()=>{
    require('@passageidentity/passage-auth');
  }, []);
  return (
    <>
	    <passage-auth app-id={appID}></passage-auth>
    </>
  )
}