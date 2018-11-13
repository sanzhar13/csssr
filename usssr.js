const {Builder, By, Key, until} = require('selenium-webdriver');

(async function tabClicking() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://blog.csssr.ru/qa-engineer/');
    await driver.findElement(By.xpath("//a[contains(text(),'ВНИКАТЬ В ДЕТАЛИ ПРОЕКТОВ')]")).click();
    await driver.sleep(1000);
    var H1 = await driver.findElement(By.xpath("//div[@class='info-details']//h1"));
    await H1.getText().then(function (text) 
    {
    if (text == 'Работать с описаниями проектов и находить в них информацию.\nПо необходимости дополнять ее.') 
    {
    	console.log(text)
} else { 
	console.log('error')
}
	});
    await driver.findElement(By.xpath("//a[contains(text(),'НАХОДИТЬ НЕСОВЕРШЕНСТВА')]")).click();
    await driver.sleep(1000);
    var H1 = await driver.findElement(By.xpath("//div[@class='info-errors']//h1"));
    await H1.getText().then(function (text) 
    {
    if (text == 'Находить баги и несоответствия исходному дизайну в верстке наших проектов. Тестировать их с точки зрения удобства для пользователя. И указывать разработчикам на несовершенства.') 
    {
    	console.log(text)
} else { 
	console.log('error')
}
	});
    await driver.findElement(By.xpath("//a[contains(text(),'СОПРОВОЖДАТЬ ПРОЕКТЫ')]")).click();
    await driver.sleep(1000);
    var H1 = await driver.findElement(By.xpath("//div[@class='info-support']//h1"));
    await H1.getText().then(function (text) 
    {
    if (text == 'Распределять задачи между разработчиками. Отвечать на вопросы разработчиков. Контролировать выполнение задач. Информировать менеджера проекта о нештатных ситуациях. Связываться с заказчиками и уточнять информацию.') 
    {
    	console.log(text)
} else { 
	console.log('error')
}
	});
    await driver.findElement(By.xpath("//a[contains(text(),'РАБОТАТЬ С ФАЙЛАМИ ПРОЕКТОВ')]")).click();
    await driver.sleep(1000);
    var H1 = await driver.findElement(By.xpath("//div[@class='info-files']//h1"));
    await H1.getText().then(function (text) 
    {
    if (text == 'Иногда нужно будет работать непосредственно с файлами проектов: переименовывать их, или вырезать из них графику при помощи Photoshop.') 
    {
    	console.log(text)
} else { 
	console.log('error')
}
	});
  } finally {
    await driver.quit();
  }
})();