---
title: Erstellen des Ziegelspielfelds
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}

Dies ist der **9. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie auf [Gamedev-Phaser-Content-Kit/demos/lesson09.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson09.html).

Das Erstellen des Ziegelspielfelds ist etwas komplizierter als das Hinzufügen eines einzelnen Objekts auf den Bildschirm, obwohl es mit Phaser immer noch einfacher ist als mit reinem JavaScript. Lassen Sie uns erkunden, wie man eine Gruppe von Ziegeln erstellt und sie mit einer Schleife auf dem Bildschirm anzeigt.

## Definieren neuer Variablen

Zuerst definieren wir die benötigten Variablen — fügen Sie die folgenden Zeilen unter Ihren bisherigen Variablendefinitionen hinzu:

```js
let bricks;
let newBrick;
let brickInfo;
```

Die Variable `bricks` wird verwendet, um eine Gruppe zu erstellen, `newBrick` wird bei jeder Iteration der Schleife ein neues Objekt sein, das zur Gruppe hinzugefügt wird, und `brickInfo` wird alle benötigten Daten speichern.

## Rendering des Ziegelbilds

Laden Sie als Nächstes das Bild des Ziegels — fügen Sie den folgenden `load.image()`-Aufruf direkt unter den anderen hinzu:

```js
function preload() {
  // …
  game.load.image("brick", "img/brick.png");
}
```

Sie müssen auch das [Ziegelbild von GitHub herunterladen](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/brick.png) und in Ihrem `/img` Verzeichnis speichern.

## Zeichnen der Ziegel

Wir werden den gesamten Code zum Zeichnen der Ziegel in eine `initBricks`-Funktion einfügen, um ihn vom Rest des Codes zu trennen. Fügen Sie einen Aufruf zu `initBricks` am Ende der `create()`-Funktion hinzu:

```js
function create() {
  // …
  initBricks();
}
```

Nun zur Funktion selbst. Fügen Sie die `initBricks()`-Funktion am Ende unseres Spielcodes hinzu, direkt vor dem schließenden \</script>-Tag, wie unten gezeigt. Zuerst haben wir das `brickInfo`-Objekt aufgenommen, da dies bald nützlich sein wird:

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

Dieses `brickInfo`-Objekt enthält alle benötigten Informationen: die Breite und Höhe eines einzelnen Ziegels, die Anzahl der Ziegelreihen und -spalten, die Sie auf dem Bildschirm sehen werden, den oberen und linken Versatz (die Position auf dem Canvas, an der wir beginnen, die Ziegel zu zeichnen) und den Abstand zwischen jeder Ziegelreihe und -spalte.

Nun, lassen Sie uns beginnen, die Ziegel selbst zu erstellen — fügen Sie zunächst eine leere Gruppe hinzu, um die Ziegel zu enthalten, indem Sie die folgende Zeile am unteren Ende der `initBricks()`-Funktion hinzufügen:

```js
bricks = game.add.group();
```

Wir können durch die Reihen und Spalten iterieren, um bei jeder Iteration neue Ziegel zu erstellen — fügen Sie die folgende verschachtelte Schleife unter der vorherigen Zeile Code hinzu:

```js
for (let c = 0; c < brickInfo.count.col; c++) {
  for (let r = 0; r < brickInfo.count.row; r++) {
    // neuen Ziegel erstellen und der Gruppe hinzufügen
  }
}
```

Auf diese Weise erstellen wir die exakt benötigte Anzahl an Ziegeln und haben sie alle in einer Gruppe. Nun müssen wir etwas Code in die verschachtelte Schleifenstruktur einfügen, um jeden Ziegel zu zeichnen. Füllen Sie den Inhalt wie unten gezeigt:

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

Hier durchlaufen wir die Reihen und Spalten, um die neuen Ziegel zu erstellen und auf dem Bildschirm zu platzieren. Der neu erstellte Ziegel wird für die Arcade-Physik-Engine aktiviert, sein Körper wird als unbeweglich festgelegt (damit er sich nicht bewegt, wenn er vom Ball getroffen wird), und wir setzen auch den Anker in die Mitte und fügen den Ziegel der Gruppe hinzu.

Das Problem ist derzeit, dass wir alle Ziegel an einem Ort, bei den Koordinaten (0,0) malen. Wir müssen jeden Ziegel an seiner eigenen x- und y-Position zeichnen. Aktualisieren Sie die `brickX` und `brickY` Zeilen wie folgt:

```js
const brickX =
  c * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
const brickY =
  r * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
```

Jede `brickX`-Position wird als `brickInfo.width` plus `brickInfo.padding`, multipliziert mit der Spaltennummer, `c`, plus dem `brickInfo.offset.left` berechnet; die Logik für das `brickY` ist identisch, verwendet jedoch die Werte für die Zeilennummer, `r`, `brickInfo.height` und `brickInfo.offset.top`. Nun kann jeder einzelne Ziegel an seiner richtigen Stelle mit Abständen zwischen jedem Ziegel platziert und versetzt von den linken und oberen Canvasrändern gezeichnet werden.

## Überprüfen des `initBricks()`-Codes

Hier ist der komplette Code für die `initBricks()`-Funktion:

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

Wenn Sie `index.html` an diesem Punkt neu laden, sollten Sie die Ziegel gleichmäßig voneinander auf dem Bildschirm sehen.

## Vergleichen Sie Ihren Code

Sie können den fertiggestellten Code für diese Lektion im folgenden Live-Demo prüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cck2b9e8/","","400")}}

## Nächste Schritte

Etwas fehlt allerdings. Der Ball geht durch die Ziegel, ohne zu stoppen — wir brauchen eine richtige [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}
