---
title: Laden Sie die Assets und drucken Sie sie auf dem Bildschirm
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move the ball")}}

Dies ist der **3. Schritt** von 16 im [Gamedev Phaser Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Der Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, ist bei [Gamedev-Phaser-Content-Kit/demos/lesson03.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson03.html) zu finden.

Unser Spiel wird einen Ball zeigen, der über den Bildschirm rollt, von einem Paddle abprallt und Ziegel zerstört, um Punkte zu erzielen — bekannt, nicht wahr? In diesem Artikel werden wir uns ansehen, wie man Sprites in unsere Spielwelt einfügt.

## Einen Ball haben

Beginnen wir mit der Erstellung einer JavaScript-Variablen, um unseren Ball zu repräsentieren. Fügen Sie die folgende Zeile zwischen dem Code zur Spielinitialisierung (unserem `const game` Block) und der `preload()` Funktion hinzu:

```js
let ball;
```

> [!NOTE]
> Für dieses Tutorial werden wir globale Variablen verwenden. Ziel des Tutorials ist es, Phaser-spezifische Ansätze zur Spielentwicklung zu lehren, anstatt sich mit subjektiven Best-Practice-Ansätzen zu befassen.

## Laden des Ball-Sprites

Das Laden von Bildern und das Drucken auf unserer Leinwand ist mit Phaser viel einfacher als mit reinem JavaScript. Um das Asset zu laden, verwenden wir das von Phaser erstellte `game`-Objekt und führen dessen Methode `load.image()` aus. Fügen Sie die folgende neue Zeile direkt in die `preload()` Funktion am Ende ein:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
}
```

Der erste Parameter, den wir dem Asset geben möchten, ist der Name, der im gesamten Spielcode verwendet wird — zum Beispiel im Namen unserer `ball`-Variablen — daher müssen wir sicherstellen, dass es derselbe ist. Der zweite Parameter ist der relative Pfad zum grafischen Asset. In unserem Fall laden wir das Bild für unseren Ball. (Beachten Sie, dass der Dateiname nicht ebenfalls derselbe sein muss, aber wir empfehlen es, da es alles leichter nachvollziehbar macht.)

Um das Bild zu laden, muss es natürlich in unserem Codeverzeichnis verfügbar sein. [Holen Sie sich das Ballbild von GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/ball.png) und speichern Sie es in einem `/img` Verzeichnis am selben Ort wie Ihre `index.html` Datei.

Um es nun auf dem Bildschirm zu zeigen, verwenden wir eine andere Phaser-Methode namens `add.sprite()`; fügen Sie die folgende neue Codezeile in die `create()` Funktion ein, wie gezeigt:

```js
function create() {
  ball = game.add.sprite(50, 50, "ball");
}
```

Dies wird den Ball zum Spiel hinzufügen und ihn auf dem Bildschirm rendern. Die ersten beiden Parameter sind die x- und y-Koordinaten der Leinwand, wo Sie ihn hinzufügen möchten, und der dritte ist der Name des vorher definierten Assets. Das war's — wenn Sie Ihre `index.html` Datei laden, sehen Sie das Bild bereits geladen und auf der Leinwand gerendert!

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/98xrv9x5/","","400")}}

## Nächste Schritte

Das Ausdrucken des Balls war einfach; als nächstes werden wir versuchen, den Ball [auf dem Bildschirm zu bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move the ball")}}
