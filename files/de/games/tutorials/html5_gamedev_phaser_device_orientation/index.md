---
title: 2D-Labyrinthspiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: 8b49d68b62c09cf7227a99e866f45005b1a92d9d
---

{{GamesSidebar}}

In diesem Tutorial werden wir den Prozess des Erstellens eines HTML-Mobilspiels durchgehen, das die [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) **APIs** nutzt, um das Gameplay zu verbessern. Es wird mit dem [Phaser](https://phaser.io/) Framework erstellt. Grundkenntnisse in JavaScript werden empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials werden Sie ein voll funktionsfähiges Demo-Spiel haben: [Cyber Orb](https://orb.enclavegames.com/). Es wird ungefähr so aussehen:

![Ein 2D-Spielbrett mit einem kleinen gelben Ball. Es gibt ein großes schwarzes Loch, durch das der Ball entkommen kann, und eine Reihe von Barrieren, die den Ball daran hindern, zu entkommen.](cyber-orb.png)

## Phaser Framework

[Phaser](https://phaser.io/) ist ein Framework für den Bau von Desktop- und mobilen HTML-Spielen. Es ist relativ neu, wächst aber dank der engagierten Community, die an der Entwicklung beteiligt ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) ansehen, wo es als Open Source verfügbar ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser Framework bietet Ihnen eine Reihe von Werkzeugen, die die Entwicklung beschleunigen und dabei helfen, allgemeine Aufgaben zu bewältigen, die für die Fertigstellung des Spiels erforderlich sind, sodass Sie sich auf die Spielidee selbst konzentrieren können.

## Beginn des Projekts

Den [Cyber Orb Quellcode](https://github.com/EnclaveGames/Cyber-Orb) können Sie auf GitHub einsehen. Die Ordnerstruktur ist recht einfach: Der Ausgangspunkt ist die `index.html` Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} zum Rendern des Spiels einrichten.

![Screenshot des GitHub-Repositories mit dem Cyber Orb Spielcode, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und auszuprobieren. Im Verzeichnis gibt es auch drei Ordner:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels.
- `audio`: Die Sounddateien, die im Spiel verwendet werden.

## Einrichtung des Canvas

Wir werden unser Spiel auf Canvas rendern, aber wir werden es nicht manuell tun — das wird vom Framework übernommen. Lassen Sie es uns einrichten: Unser Ausgangspunkt ist die `index.html` Datei mit folgendem Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen möchten:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>Cyber Orb demo</title>
    <style>
      body {
        margin: 0;
        background: #333;
      }
    </style>
    <script src="src/phaser-arcade-physics.2.2.2.min.js"></script>
    <script src="src/Boot.js"></script>
    <script src="src/Preloader.js"></script>
    <script src="src/MainMenu.js"></script>
    <script src="src/Howto.js"></script>
    <script src="src/Game.js"></script>
  </head>
  <body>
    <script>
      (() => {
        const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
        game.state.add("Boot", Ball.Boot);
        game.state.add("Preloader", Ball.Preloader);
        game.state.add("MainMenu", Ball.MainMenu);
        game.state.add("Howto", Ball.Howto);
        game.state.add("Game", Ball.Game);
        game.state.start("Boot");
      })();
    </script>
  </body>
</html>
```

Bisher haben wir eine einfache HTML-Website mit einigen Basisinhalten im `<head>` Bereich: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile wird die Phaser-Instanz initialisieren — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Render-Methode (wir verwenden `CANVAS`, aber es gibt auch `WEBGL` und `AUTO` Optionen) und die optionale ID des DOM-Containers, in den wir das Canvas einfügen möchten. Wenn in diesem letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird das Canvas zum `<body>` Tag hinzugefügt. Ohne das Framework müssten Sie, um das Canvas-Element zur Seite hinzuzufügen, etwas wie dies im `<body>` Tag schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Wichtig ist zu beachten, dass das Framework hilfreiche Methoden bereitstellt, um eine Menge Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die ohne das Framework viel schwieriger manuell zu machen wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) für eine ausführliche Einführung in die grundlegenden Phaser-spezifischen Funktionen und Methoden lesen.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die `start` Methode startet den gegebenen Zustand und macht ihn aktiv. Lassen Sie uns sehen, was die Zustände tatsächlich sind.

## Verwaltung von Spielzuständen

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien, um die Wartbarkeit zu verbessern. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit der Starttaste, `Howto` zeigt die "Anleitung zu spielen" und der `Game` Zustand erlaubt Ihnen, das Spiel tatsächlich zu spielen. Lassen Sie uns schnell den Inhalt dieser Zustände durchgehen.

### Boot.js

Der `Boot` Zustand ist der erste im Spiel.

```js
const Ball = {
  _WIDTH: 320,
  _HEIGHT: 480,
};

Ball.Boot = function (game) {};
Ball.Boot.prototype = {
  preload() {
    this.load.image("preloaderBg", "img/loading-bg.png");
    this.load.image("preloaderBar", "img/loading-bar.png");
  },
  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.state.start("Preloader");
  },
};
```

Das Hauptobjekt `Ball` wird definiert, und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und Höhe des Spiel-Canvas sind — sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload` Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets anzuzeigen. Die `create` Funktion enthält einige grundlegende Konfigurationen: wir richten das Skalieren und die Ausrichtung des Canvas ein und wechseln zum `Preload` Zustand, wenn alles fertig ist.

### Preloader.js

Der `Preloader` Zustand kümmert sich um das Laden aller Assets:

```js
Ball.Preloader = function (game) {};
Ball.Preloader.prototype = {
  preload() {
    this.preloadBg = this.add.sprite(
      (Ball._WIDTH - 297) * 0.5,
      (Ball._HEIGHT - 145) * 0.5,
      "preloaderBg",
    );
    this.preloadBar = this.add.sprite(
      (Ball._WIDTH - 158) * 0.5,
      (Ball._HEIGHT - 50) * 0.5,
      "preloaderBar",
    );
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image("ball", "img/ball.png");
    // …
    this.load.spritesheet("button-start", "img/button-start.png", 146, 51);
    // …
    this.load.audio("audio-bounce", [
      "audio/bounce.ogg",
      "audio/bounce.mp3",
      "audio/bounce.m4a",
    ]);
  },
  create() {
    this.game.state.start("MainMenu");
  },
};
```

Es werden einzelne Bilder, Spritesheets und Audiodateien vom Framework geladen. In diesem Zustand zeigt die `preloadBar` den Fortschritt auf dem Bildschirm an. Dieser Fortschritt der geladenen Assets wird vom Framework mithilfe eines Bildes dargestellt. Mit jedem geladenen Asset sehen Sie mehr vom `preloadBar` Bild: von 0% bis 100%, aktualisiert bei jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu` Zustand gestartet.

### MainMenu.js

Der `MainMenu` Zustand zeigt das Hauptmenü des Spiels, in dem Sie durch Klicken auf die Schaltfläche beginnen können, zu spielen.

```js
Ball.MainMenu = function (game) {};
Ball.MainMenu.prototype = {
  create() {
    this.add.sprite(0, 0, "screen-mainmenu");
    this.gameTitle = this.add.sprite(Ball._WIDTH * 0.5, 40, "title");
    this.gameTitle.anchor.set(0.5, 0);
    this.startButton = this.add.button(
      Ball._WIDTH * 0.5,
      200,
      "button-start",
      this.startGame,
      this,
      2,
      0,
      1,
    );
    this.startButton.anchor.set(0.5, 0);
    this.startButton.input.useHandCursor = true;
  },
  startGame() {
    this.game.state.start("Howto");
  },
};
```

Um eine neue Schaltfläche zu erstellen, gibt es die `add.button` Methode mit der folgenden Liste optionaler Argumente:

- Obere absolute Position auf dem Canvas in Pixeln.
- Linke absolute Position auf dem Canvas in Pixeln.
- Name des Bild-Assets, das von der Schaltfläche verwendet wird.
- Funktion, die ausgeführt wird, wenn jemand auf die Schaltfläche klickt.
- Der Ausführungskontext.
- Frame aus dem Bild-Asset, der als "Hover"-Zustand der Schaltfläche verwendet wird.
- Frame aus dem Bild-Asset, der als "Normal"- oder "Out"-Zustand der Schaltfläche verwendet wird.
- Frame aus dem Bild-Asset, der als "Click"- oder "Down"-Zustand der Schaltfläche verwendet wird.

Die `anchor.set` Methode richtet den Ankerpunkt auf der Schaltfläche ein, für den alle Berechnungen der Position angewendet werden. In unserem Fall ist er in der Mitte von der linken Kante und zu Beginn der oberen Kante verankert, sodass er leicht horizontal auf dem Bildschirm zentriert werden kann, ohne seine Breite zu kennen.

Wenn die Starttaste gedrückt wird, zeigt das Spiel anstelle des direkten Eintritts in die Aktion den Bildschirm mit den Informationen, wie man spielt.

### Howto.js

```js
Ball.Howto = function (game) {};
Ball.Howto.prototype = {
  create() {
    this.buttonContinue = this.add.button(
      0,
      0,
      "screen-howtoplay",
      this.startGame,
      this,
    );
  },
  startGame() {
    this.game.state.start("Game");
  },
};
```

Der `Howto` Zustand zeigt die Spielanweisungen auf dem Bildschirm, bevor das Spiel beginnt. Nach dem Klicken auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game` Zustand aus der `Game.js` Datei ist, wo die ganze Magie passiert. Alle Initialisierungen sind in der `create()` Funktion (einmal zu Beginn des Spiels gestartet). Danach erfordert einige Funktionalität weiteren Code zur Steuerung — wir werden unsere eigenen Funktionen schreiben, um kompliziertere Aufgaben zu bewältigen. Besonders hervorzuheben die `update()` Funktion (die bei jedem Frame ausgeführt wird), die Dinge wie die Ballposition aktualisiert.

```js
Ball.Game = function (game) {};
Ball.Game.prototype = {
  create() {},
  initLevels() {},
  showLevel(level) {},
  updateCounter() {},
  managePause() {},
  manageAudio() {},
  update() {},
  wallCollision() {},
  handleOrientation(e) {},
  finishLevel() {},
};
```

Die `create` und `update` Funktionen sind framework-spezifisch, während andere unsere eigenen Kreationen sein werden:

- `initLevels` initialisiert die Leveldaten.
- `showLevel` gibt die Leveldaten auf dem Bildschirm aus.
- `updateCounter` aktualisiert die Zeit, die in jedem Level gespielt wurde und zeichnet die gesamte im Spiel verbrachte Zeit auf.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet das Audio ein und aus.
- `wallCollision` wird ausgeführt, wenn der Ball die Wände oder andere Objekte trifft.
- `handleOrientation` ist die Funktion, die an das Ereignis gebunden ist, das für die Device Orientation API verantwortlich ist und die Bewegungssteuerung bereitstellt, wenn das Spiel auf einem mobilen Gerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist oder beendet das Spiel, wenn das endgültige Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Lassen Sie uns zuerst in die `create()` Funktion gehen, das Ballobjekt selbst initialisieren und ihm ein paar Eigenschaften zuweisen:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm ein und verwenden das `'ball'` Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für jede physikalische Berechnung in die Mitte des Balls, aktivieren die Arcade-Physik-Engine (die alle Physik für die Ballbewegung behandelt) und legen die Größe des Körpers für die Kollisionserkennung fest. Die `bounce` Eigenschaft wird verwendet, um die Sprungkraft des Balls bei Hinderniskontakten festzulegen.

#### Steuerung des Balls

Es ist cool, den Ball in der Spielzone herumwerfen zu können, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Jetzt werden wir die Möglichkeit hinzufügen, den Ball durch die Tastatur auf den Desktop-Geräten zu steuern, und dann werden wir zur Implementierung der Device Orientation API übergehen. Lassen Sie uns zuerst auf die Tastatur konzentrieren, indem wir Folgendes zur `create()` Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen, gibt es eine spezielle Phaser Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignis-Handlern für die vier Pfeiltasten zum Spielen gibt: hoch, runter, links und rechts.

Als nächstes werden wir den folgenden Code zur `update()` Funktion hinzufügen, damit er bei jedem Frame ausgelöst wird. Das `this.keys` Objekt wird gegen die Benutzereingabe geprüft, sodass der Ball entsprechend mit der vordefinierten Kraft reagieren kann:

```js
if (this.keys.left.isDown) {
  this.ball.body.velocity.x -= this.movementForce;
} else if (this.keys.right.isDown) {
  this.ball.body.velocity.x += this.movementForce;
}
if (this.keys.up.isDown) {
  this.ball.body.velocity.y -= this.movementForce;
} else if (this.keys.down.isDown) {
  this.ball.body.velocity.y += this.movementForce;
}
```

Auf diese Weise können wir überprüfen, welche Taste im gegebenen Frame gedrückt wird, und die definierte Kraft auf den Ball anwenden, wodurch die Geschwindigkeit in die richtige Richtung erhöht wird.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Verwendung der **Device Orientation API** für die Steuerung auf mobilen Geräten. Dank dessen können Sie das Spiel spielen, indem Sie das Gerät in die Richtung kippen, in die der Ball rollen soll. Hier ist der Code aus der `create()` Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Event-Listener zum `"deviceorientation"` Ereignis hinzu und binden die `handleOrientation` Funktion, die so aussieht:

```js
handleOrientation(e) {
  const x = e.gamma;
  const y = e.beta;
  Ball._player.body.velocity.x += x;
  Ball._player.body.velocity.y += y;
},
```

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf den Ball angewendet, daher bewegt es sich schneller (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit der Cyber Orb Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, den Ball von der Startposition zur Endposition zu bewegen: einem Loch im Boden. Die Implementierung sieht sehr ähnlich aus wie der Teil, in dem wir den Ball erstellt haben, und wird auch in der `create()` Funktion unseres `Game` Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass der Körper unseres Lochs sich nicht bewegen wird, wenn wir es mit dem Ball treffen, und die Kollisionserkennung berechnet wird (die später in diesem Artikel behandelt wird).

#### Bau des Blocklabyrinths

Um das Spiel schwieriger und interessanter zu machen, werden wir einige Hindernisse zwischen dem Ball und dem Ausgang hinzufügen. Wir könnten einen Level-Editor verwenden, aber für den Zweck dieses Tutorials erstellen wir etwas Eigenes.

Um die Informationen der Blöcke zu speichern, verwenden wir ein Level-Daten-Array: für jeden Block speichern wir die obere und linke absolute Position in Pixeln (`x` und `y`) und den Typ des Blocks — horizontal oder vertikal (`t` mit dem `'w'` Wert bedeutet Breite und `'h'` bedeutet Höhe). Dann, um das Level zu laden, parsen wir die Daten und zeigen die spezifischen Blöcke für dieses Level an. In der `initLevels` Funktion haben wir:

```js
this.levelData = [
  [{ x: 96, y: 224, t: "w" }],
  [
    { x: 72, y: 320, t: "w" },
    { x: 200, y: 320, t: "h" },
    { x: 72, y: 150, t: "w" },
  ],
  // …
];
```

Jedes Array-Element enthält eine Sammlung von Blöcken mit einer `x` und `y` Position und einem `t` Wert für jeden. Nach `levelData`, aber noch in der `initLevels` Funktion, fügen wir die Blöcke in einem Array in der `for` Schleife mit einigen framework-spezifischen Methoden hinzu:

```js
for (let i = 0; i < this.maxLevels; i++) {
  const newLevel = this.add.group();
  newLevel.enableBody = true;
  newLevel.physicsBodyType = Phaser.Physics.ARCADE;
  for (let e = 0; e < this.levelData[i].length; e++) {
    const item = this.levelData[i][e];
    newLevel.create(item.x, item.y, `element-${item.t}`);
  }
  newLevel.setAll("body.immovable", true);
  newLevel.visible = false;
  this.levels.push(newLevel);
}
```

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE` Körpertyp für diese Gruppe festgelegt, um physikalische Berechnungen zu ermöglichen. Die `newLevel.create` Methode erstellt neue Elemente in der Gruppe mit Start-Links- und Top-Positionen und ihrem eigenen Bild. Wenn Sie nicht die Liste der Elemente erneut durchlaufen möchten, um jedem Einzelnen explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um diese Eigenschaft auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels` Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Levels zu laden, stellen wir sicher, dass die vorherigen Levels ausgeblendet sind und zeigen das aktuelle an:

```js
showLevel(level) {
  const lvl = level | this.level;
  if (this.levels[lvl - 2]) {
    this.levels[lvl - 2].visible = false;
  }
  this.levels[lvl - 1].visible = true;
}
```

Dank dessen bietet das Spiel dem Spieler eine Herausforderung - nun muss er den Ball durch den Spielbereich rollen und ihn durch das Labyrinth führen, das aus den Blöcken gebaut wurde. Dies ist nur ein Beispiel für das Laden der Level, und es gibt nur 5, um die Idee zu demonstrieren, aber Sie können daran arbeiten, es selbst zu erweitern.

#### Kollisionserkennung

An diesem Punkt haben wir den Ball, der vom Spieler kontrolliert wird, das Loch, das erreicht werden muss, und die Hindernisse, die im Weg stehen. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionserkennung, daher passiert nichts, wenn der Ball die Blöcke trifft — er geht einfach durch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework die Kollisionserkennung berechnen wird. Wir müssen nur die kollidierenden Objekte in der `update()` Funktion angeben:

```js
this.physics.arcade.collide(
  this.ball,
  this.borderGroup,
  this.wallCollision,
  null,
  this,
);
this.physics.arcade.collide(
  this.ball,
  this.levels[this.level - 1],
  this.wallCollision,
  null,
  this,
);
```

Dies wird dem Framework mitteilen, die `wallCollision` Funktion auszuführen, wenn der Ball eine der Wände trifft. Wir können die `wallCollision` Funktion nutzen, um jede gewünschte Funktionalität hinzuzufügen, wie das Abspielen des Aufprallsounds und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorab geladenen Assets gab es eine Audiospur (in verschiedenen Formaten für die Browser-Kompatibilität), die wir jetzt verwenden können. Es muss zuerst in der `create()` Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also die Sounds im Spiel aktiviert sind), können wir ihn in der `wallCollision` Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Sounds ist einfach mit Phaser.

#### Implementierung der Vibration API

Wenn die Kollisionserkennung wie erwartet funktioniert, fügen wir einige spezielle Effekte mit Hilfe der Vibration API hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit der Cyber Orb Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, es in unserem Fall zu nutzen, ist, das Handy jedes Mal vibrieren zu lassen, wenn der Ball die Wände trifft — in der `wallCollision` Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate` Methode vom Browser unterstützt wird und im `window.navigator` Objekt verfügbar ist, lassen Sie das Gerät für 100 Millisekunden vibrieren. Das war's!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederholbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, gegeneinander anzutreten, werden wir die verstrichene Zeit speichern — die Spieler können dann versuchen, ihre beste Zeit zur Beendigung des Spiels zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, die die tatsächliche Anzahl der seit Spielbeginn verstrichenen Sekunden speichert, und diese dem Spieler im Spiel anzeigen. Lassen Sie uns zuerst die Variablen in der `create` Funktion definieren:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Dann, direkt danach, können wir die notwendigen Textobjekte initialisieren, um diese Informationen dem Benutzer anzuzeigen:

```js
this.timerText = this.game.add.text(
  15,
  15,
  `Time: ${this.timer}`,
  this.fontBig,
);
this.totalTimeText = this.game.add.text(
  120,
  30,
  `Total time: ${this.totalTimer}`,
  this.fontSmall,
);
```

Wir definieren die oberen und linken Positionen des Textes, den Inhalt, der angezeigt wird, und das angewendete Styling auf den Text. Wir haben dies auf dem Bildschirm angezeigt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Dieser Loop, ebenfalls in der `create` Funktion, wird die `updateCounter` Funktion jede einzelne Sekunde seit Beginn des Spiels ausführen, sodass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter` Funktion aus:

```js
updateCounter() {
  this.timer++;
  this.timerText.setText(`Time: ${this.timer}`);
  this.totalTimeText.setText(`Total time: ${this.totalTimer+this.timer}`);
},
```

Wie Sie sehen, erhöhen wir die `this.timer` Variable und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten bei jeder Iteration, sodass der Spieler die verstrichene Zeit sehen kann.

#### Beenden des Levels und des Spiels

Der Ball rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Lassen Sie uns nun die Möglichkeit einrichten, das Level tatsächlich zu beenden! Die folgende Zeile in der `update()` Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn der Ball das Loch erreicht.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die `collide` Methode, die wir zuvor erklärt haben. Wenn der Ball sich mit dem Loch überschneidet (anstatt zu kollidieren), wird die `finishLevel` Funktion ausgeführt:

```js
finishLevel() {
  if (this.level >= this.maxLevels) {
    this.totalTimer += this.timer;
    alert(`Congratulations, game completed!\nTotal time of play: ${this.totalTimer} seconds!`);
    this.game.state.start('MainMenu');
  } else {
    alert(`Congratulations, level ${this.level} completed!`);
    this.totalTimer += this.timer;
    this.timer = 0;
    this.level++;
    this.timerText.setText(`Time: ${this.timer}`);
    this.totalTimeText.setText(`Total time: ${this.totalTimer}`);
    this.levelText.setText(`Level: ${this.level} / ${this.maxLevels}`);
    this.ball.body.x = this.ballStartPos.x;
    this.ball.body.y = this.ballStartPos.y;
    this.ball.body.velocity.x = 0;
    this.ball.body.velocity.y = 0;
    this.showLevel();
  }
},
```

Wenn das aktuelle Level gleich der maximalen Levelanzahl ist (in diesem Fall 5), dann ist das Spiel beendet — Sie erhalten eine Glückwunschnachricht zusammen mit der Anzahl der verstrichenen Sekunden des gesamten Spiels und einer Taste, die Sie zurück zum Hauptmenü führt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist lediglich eine funktionierende Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Wir könnten zum Beispiel Power-Ups hinzufügen, die unterwegs gesammelt werden, die den Ball schneller rollen lassen, den Timer für ein paar Sekunden anhalten oder dem Ball spezielle Kräfte geben, um durch Hindernisse zu gehen. Es gibt auch Platz für Fallen, die den Ball verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Levels mit zunehmendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Fantasie ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial hilft Ihnen, in die 2D-Spielentwicklung einzutauchen und inspiriert Sie dazu, großartige Spiele selbst zu entwickeln. Sie können das Demo-Spiel [Cyber Orb](https://orb.enclavegames.com/) spielen und seinen [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) überprüfen.

HTML bietet uns grundlegende Werkzeuge, die darauf aufgebauten Frameworks werden immer schneller und besser, also ist jetzt eine großartige Zeit, um mit der Webspielentwicklung zu beginnen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Anzahl von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die ebenfalls in Betracht gezogen werden sollten, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Ihren Programmierkenntnissen (oder deren Fehlen), dem Umfang des Projekts, Anforderungen und anderen Aspekten ab. Sie sollten sie alle überprüfen und entscheiden, welches Ihren Bedürfnissen am besten entspricht.
