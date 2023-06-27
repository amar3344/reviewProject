import { Text, View ,FlatList,StyleSheet,Image} from 'react-native'
import React, { Component } from 'react'


interface IProps{
  navigation:{
    navigate:(arg:string)=>void
  }
}

interface IState{
  dataList:{
    id:number,
    employee_age:number,
    employee_name:string,
    employee_salary:number,
    profile_image:string,
  }[]
}

export class Home extends Component<IProps,IState>{

  state:IState = {dataList:[]}

  fetchDataFromUrl=async()=>{ 
     try{
    const response = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    const responsedData = await response.json()
    // console.log(responsedData.data)
    this.setState({dataList:responsedData.data})
    }
    catch{
      console.log(Error)
    }
    
  }

  componentDidMount(): void {
    this.fetchDataFromUrl()
  }
  
  render() {
    return (
      <View style={styles.homeCont}>
        <Text style={styles.employeeDetailsText}>Employee Details:</Text>
        <FlatList
        data = {this.state.dataList}
        renderItem={({item})=>(
          <View style={styles.eachItem}>
            <View>
              <Text style={styles.employeeName}>Employee Name:{"  "}<Text style={styles.nameText}>{item.employee_name}</Text></Text>
              <Text style={styles.employeeAge}>Employee Age : {"   "}<Text style={styles.ageText}>{item.employee_age}</Text></Text>
              <Text style={styles.employeesalary}>Employee Salary:{"  "}<Text style={styles.salaryText}>{item.employee_salary}</Text></Text>
            </View>
            <Image source={require('../assets/avatar.png')} />
          </View>
        )}
        />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({

  salaryText:{
    fontSize:16,
    fontFamily:'Roboto',
    fontWeight:'800',
    fontStyle:'normal',
    color:'#fff',
  },


  employeesalary:{
    fontSize:14,
    fontFamily:'Roboto',
    fontWeight:'800',
    fontStyle:'normal',
    color:'#000',
  },

  ageText:{
    fontSize:16,
    fontFamily:'Roboto',
    fontWeight:'800',
    fontStyle:'normal',
    color:'#fff',
  },

  employeeAge:{
    fontSize:14,
    fontFamily:'Roboto',
    fontWeight:'800',
    fontStyle:'normal',
    color:'#000',
  },

  nameText:{
    fontSize:16,
    fontFamily:'Roboto',
    fontWeight:'800',
    fontStyle:'normal',
    color:'#fff',
  },

  employeeName:{
    fontSize:14,
    fontFamily:'Roboto',
    fontWeight:'800',
    fontStyle:'normal',
    color:'#000',
  },

  employeeDetailsText:{
    fontSize:16,
    fontFamily:'Roboto',
    fontWeight:'800',
    fontStyle:'normal',
    color:'#fff',
    backgroundColor:'#05B8CC',
    padding:10,
    borderRadius:5,
  },

  homeCont:{
    backgroundColor:'#fff',
    flex:1,
    padding:10
  },

  eachItem:{
    backgroundColor:'#70DBDB',
    marginTop:20,
    borderRadius:8,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
})