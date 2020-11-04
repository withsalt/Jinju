# Jinju
金句。一个js库，随机在网页上面显示一句话。

### 开始使用
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>金句</title>
		<style>
			.main{
				text-align: center;
				margin-top: 100px;
				font-size: 30px;
			}
		</style>
	</head>
	<body>
		<div class="main" id="main"></div>
		<script src="dist/jinju.js"></script>
		<script>
			JinJu.start("main");
		</script>
	</body>
</html>

```

### API
```javascript
JinJu.start("main");
//JinJu.start("main",3000);
//JinJu.start("main",3000,'1');  //type参数需要是内容库中已有的类型
```

### 效果
![](https://github.com/withsalt/Jinju/blob/main/img/demo.png)
