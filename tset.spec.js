// spec.js
describe('tset', function() {
  
  it('Navigating to homepage', function(){
    browser.ignoreSynchronization = true
    browser.driver.manage().window().maximize();
    browser.sleep(1000);
    browser.get('http://localhost:3000');
    browser.sleep(1000);
  });

  it('update base value to 5', function(){
    browser.sleep(1000);
    browser.actions().mouseMove(element(by.xpath('//*[@id="BasePrice"]/div[2]'))).perform();
    browser.element(by.xpath('//*[@id="base-edit-icon"]/i')).click();
    browser.element(by.id("base-value-input")).click().clear().sendKeys('5');
    browser.element(by.xpath('//*[@id="base-check-icon"]/i')).click();
    var foo = element(by.xpath('//*[@id="app"]/div/div/div'));
    expect(foo.getText()).toContain('5.00');
    browser.sleep(500);
  }); 

  it('add all components', function(){
     browser.element(by.id("ghost-label-input")).click().clear().sendKeys('Alloy surcharge');
    browser.element(by.id("ghost-value-input")).click().clear().sendKeys('2.15');
    browser.element(by.xpath('//*[@id="ghost-check-icon"]/i')).click();
    browser.sleep(500);
    browser.element(by.id("ghost-label-input")).click().clear().sendKeys('Scrap surcharge');
    browser.element(by.id("ghost-value-input")).click().clear().sendKeys('3.14');
    browser.element(by.xpath('//*[@id="ghost-check-icon"]/i')).click(); 
    browser.sleep(500);
    browser.element(by.id("ghost-label-input")).click().clear().sendKeys('Internal surcharge');
    browser.element(by.id("ghost-value-input")).click().clear().sendKeys('0.7658');
    browser.element(by.xpath('//*[@id="ghost-check-icon"]/i')).click();
     browser.sleep(500);
    browser.element(by.id("ghost-label-input")).click().clear().sendKeys('External surcharge');
    browser.element(by.id("ghost-value-input")).click().clear().sendKeys('1');
    browser.element(by.xpath('//*[@id="ghost-check-icon"]/i')).click();
    browser.sleep(500);
    browser.element(by.id("ghost-label-input")).click().clear().sendKeys('Storage surcharge');
    browser.element(by.id("ghost-value-input")).click().clear().sendKeys('0.3');
    browser.element(by.xpath('//*[@id="ghost-check-icon"]/i')).click(); 
    browser.sleep(500);
    var foo = element(by.xpath('//*[@id="app"]/div/div/div'));
    expect(foo.getText()).toContain('12.36'); 
    browser.sleep(1000);
  });

 /*  it('Remove price component: Internal surcharge', function(){
    browser.actions().mouseMove(element(By.xpath("//*[text()='Internal surcharge']"))).perform();
    browser.sleep(1000);
    browser.findElement(By.xpath("//*[contains(@id,'trash-icon')]"));
    //browser.actions().mouseMove(element(By.xpath("//*[text()='Internal surcharge']")).element(by.xpath("//*[contains(@id,'trash-icon')]"))).perform();
    browser.sleep(4000);
  }); */
  
});