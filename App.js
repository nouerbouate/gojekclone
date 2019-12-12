import React from 'react';
import {
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	View,
	Text,
} from 'react-native';

const App: () => React$Node = () => {
	return (
	<View style={{flex: 1}}>
	{/* awal header */}
		<ScrollView style={{flex:1, backgroundColor:'white',}}>
		{/* search */}
		<View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 10}}>
		   <View style={{position: 'relative', flex: 1}}>
				<TextInput placeholder="What do you want to eat?" style={{	borderColor: 'grey', borderWidth: 1,borderRadius: 25,height: 40,fontSize: 13,paddingLeft: 45,paddingRight: 20,backgroundColor: 'white',}}/>
				<Image source={require('./icon/search.png')} style={{position: 'absolute', top: 8, left: 12}}/>
				</View>
				<View style={{width: 35,height: 40,alignItems: 'center',justifyContent: 'center',paddingLeft: 18,}}>
					<Image source={require('./icon/promo.png')} />
				</View>
		</View>
		{/* end Search */}

		{/* Gopay */}
		<View style={{marginHorizontal: 17, marginTop: 8}}>
			<View style={{flexDirection: 'row',justifyContent: 'space-between',backgroundColor: '#2C5FBB',borderTopLeftRadius: 4,borderTopRightRadius: 4,padding: 14,}}>
				<Image source={require('./icon/gopay.png')} />
				<Text style={{fontWeight: 'bold', fontSize: 17, color: 'white'}}>Rp. 50.0000</Text>
			</View>
			<View style={{flexDirection:'row',paddingTop:20, paddingBottom:14, backgroundColor:'#2F65BD',borderBottomLeftRadius:4, borderBottomRightRadius:4,}}>
				<View style={{ flex:1,alignItems:'center', marginHorizontal:25}}>
					<Image source={require('./icon/pay.png')} ></Image>
					<Text style={{fontSize:13, color:'white', fontWeight:'bold', marginTop:15,}}> Pay </Text>
				</View>
					<View style={{flex:1,alignItems:'center', marginHorizontal:25}}>
						<Image source={require('./icon/nearby.png' )} ></Image>
						<Text style={{fontSize:13, color:'white', fontWeight:'bold', marginTop:15,}}> Nearby </Text>
					</View>
					<View style={{ flex:1,alignItems:'center', marginHorizontal:25}}>
						<Image source={require('./icon/topup.png')} ></Image>
						<Text style={{fontSize:13, color:'white', fontWeight:'bold', marginTop:15,}}> Top Up </Text>
					</View>
					<View style={{bflex:1,alignItems:'center', marginHorizontal:25}}>
						<Image source={require('./icon/more.png')} ></Image>
						<Text style={{fontSize:13, color:'white', fontWeight:'bold', marginTop:15,}}> More </Text>
					</View>
				</View>
			</View>
		{/* End Gopay */}
		{/* Main feature */}
		<View  style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:17,marginTop:18,}}>
			<View style={{justifyContent:'space-between', flexDirection:'row', width:'100%',marginBottom:18, alignContent:'center', }}>
				<View style ={{width:'25%', alignItems:'center'}}>
 					<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18 , justifyContent: 'center', alignItems:'center'}}>
						<Image source={require('./icon/go-ride.png')}></Image>
 					</View>
						<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> Go-RIDE</Text>
 					</View>
						<View style ={{width:'25%', alignItems:'center'}}>
 					<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18, justifyContent: 'center', alignItems:'center'}}>
						<Image source={require('./icon/go-car.png')}></Image>
 					</View>
						<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> Go-CAR</Text>
 					</View>
 					<View style ={{width:'25%', alignItems:'center'}}>
 						<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18, justifyContent: 'center', alignItems:'center'}}>
							<Image source={require('./icon/go-bluebird.png')}></Image>
 						</View>
							<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> Go-BLUEBIRD</Text>
 					</View>
 					<View style ={{width:'25%', alignItems:'center'}}>
 						<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18, justifyContent: 'center', alignItems:'center'}}>
 							<Image source={require('./icon/go-send.png')}></Image>
	 					</View>
							<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> Go-SEND</Text>
	 				</View>
				</View>
				<View style={{justifyContent:'space-between', flexDirection:'row', width:'100%',marginBottom:18 }}>
					<View style ={{width:'25%', alignItems:'center'}}>
						<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18 , justifyContent: 'center', alignItems:'center'}}>
							<Image source={require('./icon/go-deals.png')}></Image>
					 	</View>
							<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> Go-DEALS</Text>
					</View>
					<View style ={{width:'25%', alignItems:'center'}}>
					 	<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18 , justifyContent: 'center', alignItems:'center'}}>
					 		<Image source={require('./icon/go-pulsa.png')}></Image>
					 	</View>
							<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> Go-PULSA</Text>
					</View>
					<View style ={{width:'25%', alignItems:'center'}}>
						<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18, justifyContent: 'center', alignItems:'center'}}>
							<Image source={require('./icon/go-food.png')}></Image>
						</View>
							<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> Go-FOOD</Text>
					</View>
					<View style ={{width:'25%', alignItems:'center'}}>
						<View style={{width:58, height:58,borderColor:'#EFEFEF', borderWidth:1, borderRadius:18, justifyContent: 'center', alignItems:'center'}}>
							<Image source={require('./icon/go-more.png')}></Image>
					 	</View>
							<Text style={{fontSize:12, fontWeight:'bold', textAlign:'center', marginTop:6}}> MORE</Text>
				</View>
			</View>
		</View>
		{/* END Main feature */}

		{/*Separtor Go new */}
		<View>
			<View style={{height:17, backgroundColor:'#F2F2F4',}}></View>
		</View>
		{/* end Separtor Go new */}
		{/* Go new */}
		<View style={{}}>
			<View style={{paddingTop:16, paddingHorizontal:16, }}>
				<View style={{position:'relative', height:170}}>
					<Image source={require('./dummy/sepak-bola.jpg')} style={{height:'100%', width:'100%', borderRadius:6,}} ></Image>
						<View style={{ width:'100%', height:'100%', position:'absolute', top:0, left:0, backgroundColor:'black', opacity:0.25}}></View>
							<Image source={require('./logo/white.png')} style={{height:15, width:55, position:'absolute', top:16, left:16 }} ></Image>
						</View>
				</View>
			<View style={{paddingTop:16, marginHorizontal:17, paddingBottom:20, borderBottomWidth:1, borderBottomColor:'#E8E9ED',}}>
				<Text style={{ fontSize:16, fontWeight:'bold',color:'#1c1c1c'}} >GO - NEWS</Text>
				<Text style={{ fontSize:14, fontWeight:'normal',color:'#7A7A7A', marginBottom:11}} >Dimas Drajat Selamatkan penalti, Timnas U-23 kalahkan Brunei </Text>
					<TouchableOpacity style={{backgroundColor:'#61A756',paddingHorizontal:12 ,paddingVertical: 3,alignSelf:'flex-end', borderRadius:4,}}>
						<Text style={{fontSize:16, fontWeight:'bold', padding:10, color:'white'}}>READ</Text>
					</TouchableOpacity>
			</View>
		</View>
		{/* End Go new */}
		{/* Go-food baner */}
		<View style={{padding:16, paddingHorizontal:16,borderBottomWidth:1, borderBottomColor:'#E8E9ED', marginBottom:16}}>
			<View style={{position:'relative', height:170}}>
			    <View style={{ width:'100%', height:'100%', position:'absolute', top:0, left:0,backgroundColor:'white', opacity:0.95}}>
					<Image source={require('./dummy/food-banner.jpg')} style={{height:'100%', width:'100%', borderRadius:6,}} ></Image>
				    <Image source={require('./logo/go-food.png')} style={{height:20, width:100, position:'absolute', top:16, left:16 }} ></Image>
						<View style={{position:'absolute', bottom:0, left:0, width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:16,}}>
							<View style={{}}>
					            <Text style={{fontSize:16, fontWeight:'bold', color:'white', marginBottom:8,}}>Free GO-FOOD Voucher</Text>
								<Text style={{fontSize:12, fontWeight:'500', color:'white'}}>Quick, Before they run out!</Text>
							</View>
							<View style={{flex:1}}>
								<TouchableOpacity style={{backgroundColor:'#61A756',paddingHorizontal:12 ,paddingVertical: 3,alignSelf:'flex-end', borderRadius:4,}}>
								<Text style={{fontSize:14, fontWeight:'bold', padding:10, color:'white'}}>GET VOUCHER</Text>
								</TouchableOpacity>
							</View>
						</View>
				</View>
			</View>
		</View>
		{/* Go-food baner */}
		{/* Geser kanan */}
		<View style={{ marginHorizontal:16,borderBottomWidth:1, borderBottomColor:'#E8E9ED',}}>
			<View style={{height:15, width:60}}>
				<Image source={require('./logo/go-food.png')}></Image>
			</View>
			<View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:16}}>
				<Text style={{fontSize:17, fontWeight:'bold', color:'#1c1c1c'}}>Nearby Restourant</Text>
				<Text style={{fontSize:17, fontWeight:'bold', color:'#61A756'}}>See All</Text>
			</View>
			<ScrollView horizontal style={{flexDirection:'row',}}>
				<View style={{ marginRight:16}}>
					<View style={{width:150, height:150,borderRadius:10}}>
						<Image source={require('./dummy/go-food-kfc.jpg')} style={{ height:undefined, width:undefined, resizeMode:'cover', flex:1,}}></Image>
					<Text style={{fontSize:16, fontWeight:'bold', color:'#1c1c1c', marginTop:12}}>Sederhana Minang</Text>
					</View>
				</View>
				<View style={{ marginRight:16}}>
					<View style={{width:150, height:150,borderRadius:10}}>
						<Image source={require('./dummy/go-food-gm.jpg')} style={{ height:undefined, width:undefined, resizeMode:'cover', flex:1,}}></Image>
					<Text style={{fontSize:16, fontWeight:'bold', color:'#1c1c1c', marginTop:12}}>Bakmi GM</Text>
					</View>
				</View>
				<View style={{ marginRight:16}}>
					<View style={{width:150, height:150,borderRadius:10}}>
						<Image source={require('./dummy/go-food-banka.jpg')} style={{ height:undefined, width:undefined, resizeMode:'cover', flex:1,}}></Image>
					<Text style={{fontSize:16, fontWeight:'bold', color:'#1c1c1c', marginTop:12}}>Banka</Text>
					</View>
				</View>
				<View style={{ marginRight:16}}>
					<View style={{width:150, height:150,borderRadius:10}}>
						<Image source={require('./dummy/go-food-orins.jpg')} style={{ height:undefined, width:undefined, resizeMode:'cover', flex:1,}}></Image>
					<Text style={{fontSize:16, fontWeight:'bold', color:'#1c1c1c', marginTop:12}}>Orins</Text>
					</View>
				</View>
				<View style={{ marginRight:16}}>
					<View style={{width:150, height:150,borderRadius:10}}>
						<Image source={require('./dummy/go-food-pak-boss.jpg')} style={{ height:undefined, width:undefined, resizeMode:'cover', flex:1,}}></Image>
					<Text style={{fontSize:16, fontWeight:'bold', color:'#1c1c1c', marginTop:12}}>Pak Boss</Text>
					</View>
				</View>
			</ScrollView>
		</View>
		{/* end Geser kanan */}
		</ScrollView>
		{/* End header */}

		{/* footer */}
		<View style={{height: 54, backgroundColor: 'white', flexDirection: 'row', borderTopColor:'#E8E9ED', borderWidth:1}}>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<View style={{width: 26, height: 26}}>
					<Image source={require('./icon/home-active.png')} />
				</View>
					<Text style={{fontSize: 10, color: 'black', marginTop: 4}}>HOME</Text>
			</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<View style={{width: 26, height: 26}}>
					<Image source={require('./icon/order.png')} />
				</View>
					<Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
						Order
					</Text>
			</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<View style={{width: 26, height: 26}}>
					<Image source={require('./icon/help.png')} />
				</View>
					<Text style={{fontSize: 10, color: 'black', marginTop: 4}}>Help</Text>
			</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<View style={{width: 26, height: 26}}>
					<Image source={require('./icon/inbox.png')} />
				</View>
					<Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
						Inbox
					</Text>
				</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<View style={{width: 26, height: 26}}>
					<Image source={require('./icon/account.png')} />
				</View>
					<Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
						Account
					</Text>
			</View>
		</View>
		{/* end footer */}
	</View>

	);
};

const styles = StyleSheet.create({});

export default App;
