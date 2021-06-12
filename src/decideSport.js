import React from 'react';
import './decideSport.css';
import Loader from './loader';


class DecideSport extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude: null,
            error: ''
        }
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                 console.log(position)
                 this.setState({
                    latitude: position.coords.latitude
                 })
            },
            (err)=>{
                  console.log(err)
                  this.setState({
                      error: 'kullanici locationu acmiyib'
                  })
            }
        )
    }



    componentDidMount(){
        console.log('componentDidMount')
       
    }



    componentDidUpdate(){
        console.log('componentDidUpdate')
        
    }


    componentWillUnmount(){
        this.setState({
            latitude: 0
        })
    }

    

    decideSport(lat) {
        const currentMounth=new Date().getMonth();
        const summer={
            text : 'yuzme zamani',
            iconName: 'sun'
        }
        const winter={
            text: 'snowboard gidebilirsen',
            iconName: 'snowflake'
        }
        if(lat <0 ){
           return currentMounth<9 && currentMounth>3 ?  winter :  summer;
            
            //guney yarim kure
        }else{
            return currentMounth>9 || currentMounth<3 ?  winter : summer;
            //kuzey yazim kure
        }
    }

    render(){
        const {latitude , error}=this.state;

        if(latitude && !error){
            const sport =this.decideSport(latitude)
           return(
               <div className={`${sport.iconName}-wrapper decide-sport-container`} >
                   <h2 className='ui header '>
                        <i className={`${sport.iconName} outline icon`}></i>  
                        <div className='context'>
                             {sport.text}
                        </div>
                    </h2>  
              </div>
           )
        }else if( !latitude && error){
            return(
                <div>Hata: {error}</div>
            )
        }



        return(
            <div>
              <Loader /> 
            </div>
        )
    }
}




export default DecideSport;