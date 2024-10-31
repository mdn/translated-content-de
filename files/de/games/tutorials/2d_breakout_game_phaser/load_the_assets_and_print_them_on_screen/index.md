---
title: Laden der Assets und Anzeige auf dem Bildschirm
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
l10n:
  sourceCommit: c5cba390fe98f5133f2548fde041b30edc0693f7
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}

Dies ist der **3. Schritt** von 16 im [Gamedev Phaser Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson03.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson03.html).

Unser Spiel wird einen Ball umfassen, der über den Bildschirm rollt, von einem Schläger abprallt und Ziegel zerstört, um Punkte zu sammeln—vertraut, oder? In diesem Artikel schauen wir uns an, wie man Sprites in unser Spielwelt hinzufügt.

## Einen Ball haben

Lassen Sie uns mit der Erstellung einer JavaScript-Variable beginnen, die unseren Ball repräsentiert. Fügen Sie die folgende Zeile zwischen dem Spielinitialisierungscode (unserem `const game` Block) und der `preload()` Funktion ein:

```js
let ball;
```

> [!NOTE]
> Für den Zweck dieses Tutorials verwenden wir globale Variablen. Das Ziel des Tutorials ist es, Phaser-spezifische Ansätze für die Spieleentwicklung zu lehren, anstatt sich mit subjektiven Best Practices zu beschäftigen.

## Laden des Ball-Sprites

Das Laden von Bildern und deren Anzeige auf unserem Canvas ist mit Phaser viel einfacher als mit reinem JavaScript. Um das Asset zu laden, verwenden wir das von Phaser erstellte `game` Objekt, indem wir dessen `load.image()` Methode ausführen. Fügen Sie die folgende neue Zeile direkt in die `preload()` Funktion am Ende ein:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
}
```

Der erste Parameter, den wir dem Asset geben möchten, ist der Name, der in unserem gesamten Spielcode verwendet wird—zum Beispiel in unserem `ball` Variablennamen—daher müssen wir sicherstellen, dass er derselbe ist. Der zweite Parameter ist der relative Pfad zum Grafik-Asset. In unserem Fall werden wir das Bild für unseren Ball laden. (Beachten Sie, dass der Dateiname nicht ebenfalls identisch sein muss, aber wir würden es empfehlen, da es alles einfacher zu verfolgen macht.)

Natürlich muss das Bild verfügbar in unserem Codeverzeichnis sein, um es zu laden. [Laden Sie das Ballbild von GitHub herunter](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/ball.png), und speichern Sie es in einem `/img` Verzeichnis am selben Ort wie Ihre `index.html` Datei.

Um es nun auf dem Bildschirm anzuzeigen, verwenden wir eine weitere Phaser-Methode namens `add.sprite()`; fügen Sie die folgende neue Codezeile in die `create()` Funktion ein, wie gezeigt:

```js
function create() {
  ball = game.add.sprite(50, 50, "ball");
}
```

Dies wird den Ball dem Spiel hinzufügen und auf dem Bildschirm rendern. Die ersten beiden Parameter sind die x- und y-Koordinaten des Canvas, wo Sie ihn hinzufügen möchten, und der dritte ist der Name des zuvor definierten Assets. Das war's—wenn Sie Ihre `index.html` Datei laden, sehen Sie das Bild bereits auf dem Canvas geladen und gerendert!

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion selbst im folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/98xrv9x5/","","400")}}

## Nächste Schritte

Das Ausdrucken des Balls war einfach; als Nächstes werden wir versuchen, [den Ball zu bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball) auf dem Bildschirm.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}
