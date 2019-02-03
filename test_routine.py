from people import friend
from item import item

a = friend('Zach', 'LaPointe', 'zbot@pointe.la')
b = friend('Sidd', 'Vijay', 'noYou@scarbs.ca')
c = friend('Alex', 'Bogdanal', 'dyslexa@amazon.me')
d = friend('Karen', 'Zhao', 'Shishter@bread.ca')

z = item('Bibimbap', 12.25, 13, 12)
y = item('Eggs Benedict', 9.90, 13, 13)
x = item('Peach Mimosa', 20.00, 15, 13)
w = item('Fully Loaded Poutine', 19.99, 13, 13)

print(w)
print(a)

z.add_friend(b)
y.add_friend([a,d])
x.add_friend([a,b,c,d])
w.add_friend([c,d,b])

# z.assign_prices()
# y.assign_prices()
# x.assign_prices()
# w.assign_prices()

# mass call
map(lambda x:x.assign_prices(), (w, x, y, z))

print(a.out())
print(b.out())
print(c.out())
print(d.out())