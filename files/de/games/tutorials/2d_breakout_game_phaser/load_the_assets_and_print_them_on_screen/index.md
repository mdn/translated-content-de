---
title: Laden Sie die Assets und zeigen Sie sie auf dem Bildschirm an
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move the ball")}}

Dies ist der **3. Schritt** von 16 im [Gamedev Phaser-Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson03.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson03.html).

Unser Spiel wird einen Ball zeigen, der über den Bildschirm rollt, von einem Paddel abprallt und Ziegel zerstört, um Punkte zu sammeln – klingt vertraut, oder? In diesem Artikel werden wir uns ansehen, wie man Sprites in unsere Spielwelt einfügt.

## Einen Ball haben

Beginnen wir mit der Erstellung einer JavaScript-Variable, die unseren Ball repräsentiert. Fügen Sie die folgende Zeile zwischen dem Spielinitialisierungscode (unserem `const game` Block) und der `preload()`-Funktion hinzu:

```js
let ball;
```

> [!NOTE]
> Im Rahmen dieses Tutorials werden wir globale Variablen verwenden. Das Ziel des Tutorials ist es, Phaser-spezifische Ansätze zur Spieleentwicklung zu lehren und nicht die besten subjektiven Ansätze ausführlich zu behandeln.

## Laden des Ballsprites

Mit Phaser ist das Laden von Bildern und das Anzeigen auf unserer Leinwand viel einfacher als mit reinem JavaScript. Um das Asset zu laden, verwenden wir das `game`-Objekt, das von Phaser erstellt wurde, und führen dessen Methode `load.image()` aus. Fügen Sie die folgende neue Zeile direkt in die `preload()`-Funktion unten ein:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
}
```

Der erste Parameter, den wir dem Asset geben möchten, ist der Name, der in unserem Spielcode verwendet wird — zum Beispiel in unserem `ball` Variablennamen — deshalb müssen wir sicherstellen, dass er derselbe ist. Der zweite Parameter ist der relative Pfad zum grafischen Asset. In unserem Fall werden wir das Bild für unseren Ball laden. (Beachten Sie, dass der Dateiname nicht unbedingt auch derselbe sein muss, aber wir empfehlen dies, da es alles einfacher macht, zu folgen.)

Natürlich muss das Bild, um geladen zu werden, in unserem Codeverzeichnis verfügbar sein. [Holen Sie sich das Ballbild von GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/ball.png), und speichern Sie es in einem `/img` Verzeichnis am selben Ort wie Ihre `index.html` Datei.

Jetzt, um es auf dem Bildschirm zu zeigen, verwenden wir eine andere Phaser-Methode namens `add.sprite()`; fügen Sie die folgende neue Codezeile in die `create()`-Funktion hinzu, wie gezeigt:

```js
function create() {
  ball = game.add.sprite(50, 50, "ball");
}
```

Dies wird den Ball dem Spiel hinzufügen und auf dem Bildschirm rendern. Die ersten beiden Parameter sind die x- und y-Koordinaten der Leinwand, wo Sie ihn hinzufügen möchten, und der dritte ist der Name des Assets, das wir zuvor definiert haben. Das war's — wenn Sie Ihre `index.html` Datei laden, werden Sie sehen, dass das Bild bereits geladen und auf der Leinwand gerendert wird!

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im unten stehenden Live-Demo selbst überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/98xrv9x5/","","400")}}

## Nächste Schritte

Das Ausdrucken des Balls war einfach; als nächstes werden wir versuchen, den Ball auf dem Bildschirm [zu bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move the ball")}}
