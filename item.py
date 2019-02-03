class item:
    def __init__(self, name, price, tax, tip):
        #tax and tip are in actual numbers 15% -> 15
        self.name = name
        self.price = float(price)*(1+tax/100)*(1+tip/100)
        self.split = []


    def __str__(self):
        return "Member of item class with name '%s', price $%f" % (self.name, self.price)


    def __repr__(self):
        return "<item name:%s price:%s>" % (self.name, self.price)


    def add_friend(self,friends):
        #friends can be a single object or a list of objects
        if isinstance(friends, list):
            for friend in friends:
                self.split.append(friend)
        else:
            self.split.append(friends)
        return 1


    def assign_prices(self):
        num = len(self.split)
        cost = self.price / num
        percent = int(100 / num)
        message = str(percent) + "% of " + self.name + "; "
        for friend in self.split:
            friend.add_amount(cost, message)
        return 1
