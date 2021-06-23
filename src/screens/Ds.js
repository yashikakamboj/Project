import React, {useContext} from 'react';
import {Text, View, ViewPropTypes} from "react-native";
import AppContext from '../context/AppContext';
//import Pdf from 'react-native-pdf';        plugins={[defaultLayoutPluginInstance]}
import { Worker } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import {Viewer} from '@react-pdf-viewer/core';
//import { Viewer } from '@react-pdf-viewer/core';
//import PDFView from 'react-native-view-pdf';
//import '@react-pdf-viewer/core/lib/styles/index.css';
//import '@react-pdf-viewer/default-layout/lib/styles/index.css';            
import pdf1 from '../../assets/andhra_pradesh.pdf';
import pdf2 from '../../assets/arunachal_pradesh.pdf';
import pdf3 from '../../assets/assam.pdf';
import pdf4 from '../../assets/bihar.pdf';
import pdf5 from '../../assets/chhattisgarh.pdf';
import pdf7 from '../../assets/gujrat.pdf';
import pdf8 from '../../assets/haryana.pdf';
import pdf9 from '../../assets/himachal_pradesh.pdf';
import pdf10 from '../../assets/jammu_kashmir.pdf';
import pdf11 from '../../assets/jharkhand.pdf';
import pdf12 from '../../assets/karnatka.pdf';
import pdf13 from '../../assets/kerala.pdf';
import pdf14 from '../../assets/madhya_pradesh.pdf';
import pdf15 from '../../assets/maharashtra.pdf';
import pdf21 from '../../assets/odisha.pdf';
import pdf22 from '../../assets/punjab.pdf';
import pdf23 from '../../assets/rajasthan.pdf';
import pdf25 from '../../assets/tamil_nadu.pdf';
import pdf28 from '../../assets/uttar_pradesh.pdf';
import pdf29 from '../../assets/uttrakhand.pdf';
import pdf30 from '../../assets/west_bangal.pdf';

import {WebView} from 'react-native-webview';

{/*const resources = {
    file: Platform.OS === 'ios' ? 'test-pdf.pdf' : '/sdcard/Download/test-pdf.pdf',
    url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
    base64: 'JVBERi0xLjMKJcfs...',
  };  */}

const Ds = ({navigation})=>{
    const {data} = useContext(AppContext);
    const item = data.find((item)=> item.id === navigation.getParam('id'));
    //const resourceType = 'base64';
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    let Pdffile;
            if (item.id == 1)
                Pdffile = pdf1
            else if (item.id == 2)
                Pdffile = pdf2  
            else if (item.id == 3)
                Pdffile = pdf3
            else if (item.id == 4)
                Pdffile = pdf4
            else if (item.id == 5)
                Pdffile = pdf5  
            else if (item.id == 7)
                Pdffile = pdf7
            else if (item.id == 8)
                Pdffile = pdf8  
            else if (item.id == 9)
                Pdffile = pdf9
            else if (item.id == 10)
                Pdffile = pdf10
            else if (item.id == 11)
                Pdffile = pdf11  
            else if (item.id == 12)
                Pdffile = pdf12
            else if (item.id == 13)
                Pdffile = pdf13
            else if (item.id == 14)
                Pdffile = pdf14
            else if (item.id == 15)
                Pdffile = pdf15  
            else if (item.id == 21)
                Pdffile = pdf21
            else if (item.id == 22)
                Pdffile = pdf22  
            else if (item.id == 23)
                Pdffile = pdf23
            else if (item.id == 25)
                Pdffile = pdf25
            else if (item.id == 28)
                Pdffile = pdf28
            else if (item.id == 29)
                Pdffile = pdf29
            else if (item.id == 30)
                Pdffile = pdf30
            else
                Pdffile = 'NO Data'
    return (
        
        <View>

            {/*<Pdf source={require("../../assets/andhra_pradesh.pdf")} />
            <Viewer fileUrl="../../assets/andhra_pradesh.pdf" />   
            <PDFView
                fadeInDuration={250.0}
                style={{ flex: 1 }}
                resource={resources[resourceType]}
                resourceType={resourceType}
                onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                onError={() => console.log('Cannot render PDF', error)}
            />  
            <WebView  source={{uri: "../../assets/andhra_pradesh.pdf"}} />
            */}
            {<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl= {Pdffile} />
            </Worker>}    
        
    </View>
    );
};

export default Ds;