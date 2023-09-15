import requests
baseURL='https://api.openweathermap.org/data/2.5/weather?'
API_KEY='2bd80bbbd26a9e424b61ac56d18b4655'
city="Mangalore"
units="&units=metric"
url=baseURL+"q="+city+"&appid="+API_KEY+units
res=requests.get(url)
w_data=res.json()
main=w_data['main']
t=main['temp']
h=main['humidity']
p=main['pressure']
w=w_data['wind']
ws=w['speed']
r=w_data['weather']
c_condn=r[0]['description']
print('Temperature:',t,'\nHumidity:',h,'\nPressure:',p,'\nWindspeed:',ws,'\nCloud Condition:',c_condn)
