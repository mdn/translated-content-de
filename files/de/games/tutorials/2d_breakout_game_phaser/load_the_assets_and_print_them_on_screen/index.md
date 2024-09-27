---
title: Laden der Assets und auf dem Bildschirm anzeigen
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_breakout_game_Phaser/Move the ball")}}

Dies ist der **3. Schritt** von 16 im [Gamedev Phaser Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson03.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson03.html).

Unser Spiel wird einen Ball zeigen, der über den Bildschirm rollt, von einem Paddle abprallt und Ziegel zerstört, um Punkte zu sammeln — klingt vertraut, oder? In diesem Artikel werden wir uns ansehen, wie man Sprites in unsere Spielwelt einfügt.

## Einen Ball haben

Beginnen wir damit, eine JavaScript-Variable zu erstellen, die unseren Ball darstellt. Fügen Sie die folgende Zeile zwischen dem Spielinitialisierungscode (unserem `const game` Block) und der `preload()` Funktion hinzu:

```js
let ball;
```

> [!NOTE]
> Für den Zweck dieses Tutorials werden wir globale Variablen verwenden. Das Ziel des Tutorials ist es, Phaser-spezifische Ansätze zur Spieleentwicklung zu lehren und sich nicht mit subjektiven besten Ansätzen zu befassen.

## Laden des Ball-Sprites

Bilder zu laden und auf unserer Leinwand darzustellen ist mit Phaser viel einfacher als mit reinem JavaScript. Um das Asset zu laden, verwenden wir das von Phaser erstellte `game`-Objekt und führen dessen Methode `load.image()` aus. Fügen Sie die folgende neue Zeile direkt in der `preload()` Funktion, am Ende, hinzu:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
}
```

Der erste Parameter, den wir dem Asset geben möchten, ist der Name, der in unserem gesamten Spielcode verwendet wird — zum Beispiel in unserem `ball` Variablennamen — also müssen wir sicherstellen, dass er derselbe ist. Der zweite Parameter ist der relative Pfad zum grafischen Asset. In unserem Fall werden wir das Bild für unseren Ball laden. (Beachten Sie, dass der Dateiname nicht unbedingt derselbe sein muss, aber wir empfehlen es, da es alles einfacher nachvollziehbar macht.)

Natürlich muss das Bild verfügbar in unserem Codeverzeichnis sein, um es zu laden. [Holen Sie sich das Ballbild von GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/ball.png), und speichern Sie es in einem `/img` Verzeichnis an derselben Stelle wie Ihre `index.html` Datei.

Um es nun auf dem Bildschirm zu zeigen, verwenden wir eine weitere Phaser-Methode namens `add.sprite()`; fügen Sie die folgende neue Codezeile in die `create()` Funktion, wie gezeigt, hinzu:

```js
function create() {
  ball = game.add.sprite(50, 50, "ball");
}
```

Dies wird den Ball zum Spiel hinzufügen und ihn auf dem Bildschirm rendern. Die ersten beiden Parameter sind die x- und y-Koordinaten der Leinwand, auf der Sie es hinzufügen möchten, und der dritte ist der Name des zuvor definierten Assets. Das ist alles — wenn Sie Ihre `index.html` Datei laden, sehen Sie das Bild bereits geladen und auf der Leinwand gerendert!

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion selbst im folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/98xrv9x5/","","400")}}

## Nächste Schritte

Das Ausdrucken des Balls war einfach; als nächstes werden wir versuchen, [den Ball zu bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball) auf dem Bildschirm.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_breakout_game_Phaser/Move the ball")}}
