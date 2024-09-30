---
title: Das Ziegel-Feld erstellen
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}

Dies ist der **9. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson09.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson09.html).

Das Erstellen des Ziegel-Feldes ist etwas komplizierter als das Hinzufügen eines einzelnen Objekts zum Bildschirm, obwohl es mit Phaser immer noch einfacher ist als mit reinem JavaScript. Lassen Sie uns erkunden, wie man eine Gruppe von Ziegeln erstellt und sie mit einer Schleife auf dem Bildschirm anzeigt.

## Neue Variablen definieren

Zuerst lassen Sie uns die benötigten Variablen definieren — fügen Sie die folgenden unter Ihren vorherigen Variablendefinitionen hinzu:

```js
let bricks;
let newBrick;
let brickInfo;
```

Die Variable `bricks` wird verwendet, um eine Gruppe zu erstellen, `newBrick` wird ein neues Objekt sein, das bei jeder Iteration der Schleife zur Gruppe hinzugefügt wird, und `brickInfo` wird alle benötigten Daten speichern.

## Das Ziegelbild rendern

Laden Sie als Nächstes das Bild des Ziegels — fügen Sie den folgenden `load.image()`-Aufruf direkt unter den anderen hinzu:

```js
function preload() {
  // …
  game.load.image("brick", "img/brick.png");
}
```

Sie müssen auch [das Ziegelbild von GitHub herunterladen](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/brick.png) und es in Ihrem `/img`-Verzeichnis speichern.

## Die Ziegel zeichnen

Wir werden den gesamten Code zum Zeichnen der Ziegel in eine `initBricks`-Funktion einfügen, um ihn vom Rest des Codes getrennt zu halten. Fügen Sie am Ende der `create()`-Funktion einen Aufruf zu `initBricks` hinzu:

```js
function create() {
  // …
  initBricks();
}
```

Nun zur Funktion selbst. Fügen Sie die `initBricks()`-Funktion am Ende unseres Spielcodes hinzu, direkt vor dem schließenden \</script>-Tag, wie unten gezeigt. Zunächst haben wir das `brickInfo`-Objekt eingeschlossen, da dies bald sehr nützlich sein wird:

```js
function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
}
```

Dieses `brickInfo`-Objekt wird alle Informationen enthalten, die wir benötigen: die Breite und Höhe eines einzelnen Ziegels, die Anzahl der Reihen und Spalten von Ziegeln, die wir auf dem Bildschirm sehen werden, den oberen und linken Versatz (die Position auf der Leinwand, an der wir beginnen, die Ziegel zu zeichnen) und den Abstand zwischen jeder Reihe und Spalte von Ziegeln.

Nun lassen Sie uns anfangen, die Ziegel selbst zu erstellen — fügen Sie zuerst eine leere Gruppe hinzu, um die Ziegel zu enthalten, indem Sie die folgende Zeile am Ende der `initBricks()`-Funktion hinzufügen:

```js
bricks = game.add.group();
```

Wir können durch die Reihen und Spalten iterieren, um bei jeder Iteration einen neuen Ziegel zu erstellen — fügen Sie die folgende verschachtelte Schleife unter der vorherigen Codezeile hinzu:

```js
for (let c = 0; c < brickInfo.count.col; c++) {
  for (let r = 0; r < brickInfo.count.row; r++) {
    // create new brick and add it to the group
  }
}
```

Auf diese Weise werden wir genau die Anzahl an Ziegeln erstellen, die wir benötigen und sie alle in einer Gruppe enthalten haben. Nun müssen wir etwas Code innerhalb der verschachtelten Schleifenstruktur hinzufügen, um jeden Ziegel zu zeichnen. Füllen Sie den Inhalt wie unten gezeigt aus:

```js
for (let c = 0; c < brickInfo.count.col; c++) {
  for (let r = 0; r < brickInfo.count.row; r++) {
    let brickX = 0;
    let brickY = 0;
    newBrick = game.add.sprite(brickX, brickY, "brick");
    game.physics.enable(newBrick, Phaser.Physics.ARCADE);
    newBrick.body.immovable = true;
    newBrick.anchor.set(0.5);
    bricks.add(newBrick);
  }
}
```

Hier iterieren wir durch die Reihen und Spalten, um die neuen Ziegel zu erstellen und sie auf dem Bildschirm zu platzieren. Der neu erstellte Ziegel ist für die Arcade-Physik-Engine aktiviert, sein Körper wird so eingestellt, dass er unbeweglich ist (damit er sich nicht bewegt, wenn er von dem Ball getroffen wird), und wir setzen auch den Anker in der Mitte und fügen den Ziegel zur Gruppe hinzu.

Das Problem ist derzeit, dass wir alle Ziegel an einem Ort malen, bei den Koordinaten (0,0). Was wir tun müssen, ist, jeden Ziegel an seiner eigenen x- und y-Position zu zeichnen. Aktualisieren Sie die Zeilen `brickX` und `brickY` wie folgt:

```js
const brickX =
  c * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
const brickY =
  r * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
```

Jede `brickX`-Position wird als `brickInfo.width` plus `brickInfo.padding`, multipliziert mit der Spaltennummer `c`, plus dem `brickInfo.offset.left` berechnet; die Logik für das `brickY` ist identisch, außer dass es die Werte für die Zeilennummer `r`, `brickInfo.height` und `brickInfo.offset.top` verwendet. Jetzt kann jeder einzelne Ziegel an seiner richtigen Stelle platziert werden, mit Abstand zwischen jedem Ziegel, und versetzt von den linken und oberen Canvasrändern gezeichnet werden.

## Überprüfung des initBricks() Codes

Hier ist der vollständige Code für die `initBricks()` Funktion:

```js
function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  bricks = game.add.group();
  for (let c = 0; c < brickInfo.count.col; c++) {
    for (let r = 0; r < brickInfo.count.row; r++) {
      const brickX =
        c * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
      const brickY =
        r * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
      newBrick = game.add.sprite(brickX, brickY, "brick");
      game.physics.enable(newBrick, Phaser.Physics.ARCADE);
      newBrick.body.immovable = true;
      newBrick.anchor.set(0.5);
      bricks.add(newBrick);
    }
  }
}
```

Wenn Sie `index.html` zu diesem Zeitpunkt neu laden, sollten die Ziegel auf dem Bildschirm angezeigt werden, gleichmäßig voneinander entfernt.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cck2b9e8/","","400")}}

## Nächste Schritte

Allerdings fehlt noch etwas. Der Ball geht durch die Ziegel, ohne zu stoppen — wir benötigen eine ordnungsgemäße [Kollisionserkennung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}
