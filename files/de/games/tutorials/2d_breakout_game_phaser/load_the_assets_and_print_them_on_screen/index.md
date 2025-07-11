---
title: Laden Sie die Assets und drucken Sie sie auf dem Bildschirm aus
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}

Dies ist der **3. Schritt** von 16 im [Gamedev Phaser Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson03.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson03.html) finden.

Unser Spiel wird einen Ball zeigen, der sich auf dem Bildschirm bewegt, von einem Schläger abprallt und Ziegel zerstört, um Punkte zu sammeln — klingt vertraut, oder? In diesem Artikel schauen wir uns an, wie man Sprites in unsere Spielwelt einfügt.

## Einen Ball haben

Beginnen wir damit, eine JavaScript-Variable zu erstellen, die unseren Ball repräsentiert. Fügen Sie die folgende Zeile zwischen dem Spielinitialisierungscode (unserem `const game` Block) und der `preload()` Funktion hinzu:

```js
let ball;
```

> [!NOTE]
> Für den Zweck dieses Tutorials werden wir globale Variablen verwenden. Das Ziel des Tutorials ist es, Phaser-spezifische Ansätze zur Spielentwicklung zu lehren, anstatt sich mit subjektiv besten Ansätzen zu befassen.

## Laden des Ball-Sprites

Das Laden von Bildern und deren Darstellung auf unserer Leinwand ist mit Phaser viel einfacher als mit reinem JavaScript. Um das Asset zu laden, verwenden wir das durch Phaser erstellte `game`-Objekt und führen dessen `load.image()`-Methode aus. Fügen Sie die folgende neue Zeile innerhalb der `preload()` Funktion am Ende hinzu:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
}
```

Der erste Parameter, den wir dem Asset geben möchten, ist der Name, der im gesamten Spielcode verwendet wird — zum Beispiel in unserem `ball` Variablennamen — daher müssen wir sicherstellen, dass er derselbe ist. Der zweite Parameter ist der relative Pfad zum grafischen Asset. In unserem Fall werden wir das Bild für unseren Ball laden. (Beachten Sie, dass der Dateiname nicht auch gleich sein muss, aber wir empfehlen es, da es alles einfacher macht, zu folgen.)

Natürlich muss das Bild, um geladen zu werden, in unserem Codeverzeichnis vorhanden sein. [Holen Sie sich das Ballbild von GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/ball.png) und speichern Sie es in einem `/img` Verzeichnis am selben Ort wie Ihre `index.html` Datei.

Um es nun auf dem Bildschirm anzuzeigen, verwenden wir eine weitere Phaser-Methode namens `add.sprite()`; fügen Sie die folgende neue Codezeile innerhalb der `create()` Funktion hinzu, wie gezeigt:

```js
function create() {
  ball = game.add.sprite(50, 50, "ball");
}
```

Dies fügt den Ball dem Spiel hinzu und rendert ihn auf dem Bildschirm. Die ersten beiden Parameter sind die x- und y-Koordinaten der Leinwand, wo Sie ihn hinzufügen möchten, und der dritte ist der Name des vorher definierten Assets. Das war's — wenn Sie Ihre `index.html` Datei laden, sehen Sie das Bild bereits geladen und auf der Leinwand gerendert!

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der Live-Demo unten selbst überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/98xrv9x5/","","400")}}

## Nächste Schritte

Den Ball zu drucken war einfach; als nächstes werden wir versuchen, [den Ball zu bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball) auf dem Bildschirm.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}
