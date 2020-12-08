import names, moment,random
from datetime import datetime, timedelta
from pymongo import MongoClient

try:
    client = MongoClient("mongodb+srv://pie31267:31267@cluster0.x3dkn.mongodb.net/YeemTung?retryWrites=true&w=majority")
    db = client.YeemTung.all_data
    print('Connected to database sucessfully, Congratulations.')

except pymongo.errors.ConnectionFailure as e:
    print('Connected to database error, please try again later.',e)

min_year=2019
max_year=datetime.now().year

start = datetime(min_year, 1, 1, 00, 00, 00)
years = max_year - min_year+1
end = start + timedelta(days=365 * years)

date_list = list()
date_sort = list()
for i in range(100):
    random_date = start + (end - start) * random.random()
    # print('------------------')
    # print(str(random_date)[:19] )
    # print(str(random_date.timestamp())[:10])
    # print(datetime.fromtimestamp(int(str(random_date.timestamp())[:10])))
    date_list.append(int(str(random_date.timestamp())[:10]))

date_list.sort()

# print(date_list)

for i in date_list:
    date_sort.append(str(datetime.fromtimestamp(i)))
# print(date_sort)



for i in range(len(date_sort)):
    data_sameple = dict()
    data_sameple['time'] = date_sort[i]
    data_sameple['lender'] = names.get_first_name()
    data_sameple['borrower'] = names.get_first_name()
    data_sameple['money'] = random.randint(0, 5000)
    db.insert_one(data_sameple)
    print('This data has been inserted: ', data_sameple)