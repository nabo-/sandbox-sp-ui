## スマホサイト フロントエンド 開発環境

##### 作業環境構築
```
$ git clone レポジトリ名
$ npm install
$ grunt
```


---

### Gruntfile.js
同一環境での作業をするためにこちらのGruntfileを使用してください。
適切じゃない記述や誤りがあればお知らせください。
基本的にに管理者が修正し、ソースレビューを行いコミットします。

### package.json
こちらもGruntfileと同様です。

### config.rb
こちらもGruntfileと同様です。



---

### ASSEMBLE

* **layouts**
 * default.hbs
ページのベースとなる大枠を記述

* **partials**
 * common_header.hbs
 * common_footer.hbs
 * common_javascript.hbs
 * common_analysis.hbs
 * contents_stylesheet.hbs
 * contents_javascript.hbs
 * body_attribute.hbs
出し分けが必要となる共通パーツ

* **pages**
コンテンツの詳細の内容を記述（各ページのベースとなる部分）

---

### SASS

* format
旧環境のcommon.cssにあたる部分。必要とされる内容が記述されているがコンテンツによって不必要な記述があれば削除。


---
