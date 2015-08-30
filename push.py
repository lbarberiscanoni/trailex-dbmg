import time
from selenium import webdriver

browser = webdriver.Firefox()
time.sleep(4)
browser.get("http://lbarberiscanoni.github.io/trailex-dbmg/")
time.sleep(10)

i = 1
while True:
    loopedButton = "//a[" + str(i) + "]"
    buttons = browser.find_element_by_xpath(loopedButton)
    buttons.click()
    i = i + 1
    #time.sleep(2)
#browser.close()
