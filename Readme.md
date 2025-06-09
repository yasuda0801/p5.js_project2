# Interactive Circle Drawing

このプロジェクトは、p5.js を使ってマウスの動きに応じたインタラクティブなビジュアルを描画する作品です。

マウスの位置によって円の色や大きさが変化し、背景に蓄積されていくことでグラフィカルな効果が生まれます。

---

使っている技術:
- JavaScript
- p5.js

実行方法:
1. ブラウザで index.html を開くと自動で描画が始まります。
2. マウスを動かすことで色や形が変化します。

備考:
- `fill(mouseX, mouseY, mouseX - mouseY, 20)` によって色と透明度を設定しています。
- `circle(mouseX, mouseY, mouseX - mouseY)` によってマウス位置に応じたサイズの円を描いています。
- `background(0)` は一度だけ呼ばれて、描画は蓄積されていきます。
