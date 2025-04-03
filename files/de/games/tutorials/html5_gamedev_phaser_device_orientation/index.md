---
title: 2D-Labyrinth-Spiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{GamesSidebar}}

In diesem Tutorial werden wir den Prozess des Erstellens eines HTML-Mobilspiels durchgehen, das die [Geräteorientierung](/de/docs/Web/API/Device_orientation_events) und die [Vibration](/de/docs/Web/API/Vibration_API) **APIs** verwendet, um das Gameplay zu verbessern. Wir nutzen das [Phaser](https://phaser.io/)-Framework. Grundkenntnisse in JavaScript werden empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials werden Sie ein vollständig funktionsfähiges Demospiel haben: [Cyber Orb](https://orb.enclavegames.com/). Es wird ungefähr so aussehen:

![Ein 2D-Spielbrett mit einer kleinen gelben Kugel. Es gibt ein großes schwarzes Loch, in das die Kugel entkommen kann, und eine Reihe von Barrieren, die die Kugel daran hindern, zu entkommen.](cyber-orb.png)

## Phaser Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von Desktop- und Mobil-HTML-Spielen. Es ist ziemlich neu, aber wächst dank der leidenschaftlichen Community, die am Entwicklungsprozess beteiligt ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) ansehen, wo es als Open Source verfügbar ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser-Framework bietet Ihnen eine Reihe von Werkzeugen, die die Entwicklung beschleunigen und allgemeine Aufgaben handhaben, die zum Abschluss des Spiels erforderlich sind, sodass Sie sich auf die Spielidee selbst konzentrieren können.

## Starten mit dem Projekt

Sie können den [Cyber Orb Quellcode](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub sehen. Die Ordnerstruktur ist ziemlich einfach: der Startpunkt ist die `index.html`-Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, um das Spiel darauf zu rendern.

![Screenshot des GitHub-Repositories mit dem Cyber Orb-Spielcode, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und es auszuprobieren. Im Verzeichnis gibt es auch drei Ordner:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels, der darin definiert ist.
- `audio`: Die im Spiel verwendeten Sounddateien.

## Einrichten des Canvas

Wir werden unser Spiel auf Canvas rendern, aber wir werden das nicht manuell machen — dies wird vom Framework übernommen. Lassen Sie uns es einrichten: unser Startpunkt ist die `index.html`-Datei mit folgendem Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen möchten:

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

Bisher haben wir eine einfache HTML-Website mit einigen grundlegenden Inhalten im `<head>`-Bereich: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>`-Bereich enthält die Initialisierung des Phaser-Frameworks und die Definition der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile initialisiert die Phaser-Instanz — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Render-Methode (wir verwenden `CANVAS`, aber es gibt auch die Optionen `WEBGL` und `AUTO`) und die optionale ID des DOM-Containers, in den wir das Canvas einfügen möchten. Wenn im letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird das Canvas dem `<body>`-Tag hinzugefügt. Ohne das Framework, um das Canvas-Element der Seite hinzuzufügen, müssten Sie etwas wie folgendes im `<body>`-Tag schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Das Wichtige ist, sich zu merken, dass das Framework nützliche Methoden bereitstellt, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die ohne das Framework sehr viel schwieriger wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) für eine tiefgehende Einführung in die grundlegende Phaser-spezifische Funktionen und Methoden lesen.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen wollen. Die `start`-Methode startet den angegebenen Zustand und macht ihn aktiv. Schauen wir uns an, was die Zustände tatsächlich sind.

## Verwaltung der Spielzustände

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit dem Startknopf, `Howto` zeigt die Spielanleitung und der `Game`-Zustand lässt Sie das Spiel tatsächlich spielen. Lassen Sie uns schnell den Inhalt dieser Zustände durchgehen.

### Boot.js

Der `Boot`-Zustand ist der erste im Spiel.

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

Das Hauptobjekt `Ball` wird definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und die Höhe des Spiel-Canvas sind — sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets anzuzeigen. Die `create`-Funktion hält einige grundlegende Konfigurationen: wir richten das Skalieren und die Ausrichtung des Canvas ein und wechseln zum `Preload`-Zustand, wenn alles bereit ist.

### Preloader.js

Der `Preloader`-Zustand kümmert sich um das Laden aller Assets:

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

Es werden einzelne Bilder, Spritesheets und Audiodateien vom Framework geladen. In diesem Zustand zeigt der `preloadBar` den Fortschritt des Ladens auf dem Bildschirm an. Der Fortschritt der geladenen Assets wird vom Framework mit der Verwendung eines Bildes visualisiert. Mit jedem geladenen Asset sehen Sie mehr vom `preloadBar`-Bild: von 0 % bis 100 %, aktualisiert bei jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels, wo Sie das Spiel durch Klicken auf den Button starten können.

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

Um einen neuen Button zu erstellen, gibt es die `add.button`-Methode mit der folgenden Liste optionaler Argumente:

- Obere absolute Position auf dem Canvas in Pixel.
- Linke absolute Position auf dem Canvas in Pixel.
- Name des Bild-Assets, das der Button verwendet.
- Funktion, die ausgeführt wird, wenn jemand den Button klickt.
- Der Ausführungskontext.
- Frame aus dem Bild-Asset, das als "Hover"-Zustand des Buttons verwendet wird.
- Frame aus dem Bild-Asset, das als "Normal"- oder "Out"-Zustand des Buttons verwendet wird.
- Frame aus dem Bild-Asset, das als "Klick"- oder "Down"-Zustand des Buttons verwendet wird.

Das `anchor.set` richtet den Ankerpunkt auf dem Button ein, auf den alle Positionsberechnungen angewendet werden. In unserem Fall ist er zur Hälfte von der linken Kante und am Anfang der oberen Kante verankert, sodass er leicht horizontal zentriert auf dem Bildschirm angezeigt werden kann, ohne seine Breite wissen zu müssen.

Wenn der Start-Button gedrückt wird, wird das Spiel stattdessen den Bildschirm mit den Informationen anzeigen, wie man das Spiel spielt.

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

Der `Howto`-Zustand zeigt die Spielanweisungen auf dem Bildschirm an, bevor das Spiel startet. Nach einem Klick auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der `Game.js`-Datei ist, wo die ganze Magie passiert. Alle Initialisierungen befinden sich in der `create()`-Funktion (einmal beim Start des Spiels ausgeführt). Danach erfordert einige Funktionalität weiteren Code zur Steuerung — wir werden unsere eigenen Funktionen schreiben, um kompliziertere Aufgaben zu behandeln. Insbesondere beachten Sie die `update()`-Funktion (bei jedem Frame ausgeführt), die Dinge wie die Ballposition aktualisiert.

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

Die `create`- und `update`-Funktionen sind frameworkspezifisch, während andere unsere eigenen Kreationen sein werden:

- `initLevels` initialisiert die Level-Daten.
- `showLevel` zeigt die Level-Daten auf dem Bildschirm an.
- `updateCounter` aktualisiert die im Spiel verbrachte Zeit und zeichnet die insgesamt im Spiel verbrachte Zeit auf.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton ein und aus.
- `wallCollision` wird ausgeführt, wenn der Ball die Wände oder andere Objekte trifft.
- `handleOrientation` ist die Funktion, die an das Ereignis gebunden ist, das für die Device Orientation API verantwortlich ist und die Bewegungssteuerungen bietet, wenn das Spiel auf einem mobilen Gerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen der Kugel und ihrer Bewegungsmechanik

Zuerst werfen wir einen Blick auf die `create()`-Funktion, initialisieren das Ballobjekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'`-Bild aus den geladenen Grafik-Assets. Wir richten auch den Anker für alle Physikberechnungen in der Mitte der Kugel aus, aktivieren die Arcade-Physik-Engine (die die gesamte Physik für die Ballbewegung behandelt) und legen die Größe des Körpers für die Kollisionsdetektion fest. Die `bounce`-Eigenschaft wird verwendet, um die Sprungkraft der Kugel zu bestimmen, wenn sie die Hindernisse trifft.

#### Steuerung des Balls

Es ist cool, die Kugel bereit zu haben, um im Spielbereich herumgeworfen zu werden, aber es ist auch wichtig, sie tatsächlich bewegen zu können! Jetzt fügen wir die Fähigkeit hinzu, den Ball mit der Tastatur auf den Desktop-Geräten zu steuern, und dann bewegen wir uns zur Implementierung der Device Orientation API. Konzentrieren wir uns zunächst auf die Tastatur, indem wir Folgendes zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen können, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten gibt: hoch, runter, links und rechts.

Als nächstes fügen wir den folgenden Code zur `update()`-Funktion hinzu, damit er bei jedem Frame ausgeführt wird. Das `this.keys`-Objekt wird gegen die Eingaben des Spielers überprüft, sodass der Ball entsprechend mit der vordefinierten Kraft reagiert:

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

Auf diese Weise können wir überprüfen, welche Taste im gegebenen Frame gedrückt wurde, und die definierte Kraft auf die Kugel anwenden, wodurch die Geschwindigkeit in die richtige Richtung erhöht wird.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Verwendung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die die Kugel rollen soll. Hier ist der Code aus der `create()`-Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Ereignislistener zum `"deviceorientation"`-Ereignis hinzu und binden die `handleOrientation`-Funktion, die so aussieht:

```js
Ball.Game.prototype = {
  // …
  handleOrientation(e) {
    const x = e.gamma;
    const y = e.beta;
    Ball._player.body.velocity.x += x;
    Ball._player.body.velocity.y += y;
  },
  // …
};
```

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf die Kugel angewendet, und desto schneller bewegt sie sich (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, die Kugel von der Startposition zur Endposition zu bewegen: ein Loch im Boden. Die Implementierung sieht sehr ähnlich dem Teil aus, in dem wir die Kugel erstellt haben, und es wird auch in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass der Körper unseres Lochs sich nicht bewegt, wenn wir ihn mit der Kugel treffen, und dass die Kollisionsabfrage berechnet wird (was später in diesem Artikel behandelt wird).

#### Bau des Blocklabyrinths

Um das Spiel schwieriger und interessanter zu gestalten, fügen wir einige Hindernisse zwischen der Kugel und dem Ausgang hinzu. Wir könnten einen Level-Editor verwenden, aber für den Zweck dieses Tutorials erstellen wir etwas Eigenes.

Um die Blockinformationen zu halten, verwenden wir ein Leveldaten-Array: für jeden Block speichern wir die oberen und linken absoluten Positionen in Pixel (`x` und `y`) und den Typ des Blocks — horizontal oder vertikal (`t` mit dem `'w'`-Wert für Breite und `'h'`-Wert für Höhe). Dann, um das Level zu laden, parsen wir die Daten und zeigen die für dieses Level spezifischen Blöcke. In der `initLevels`-Funktion haben wir:

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

Jedes Array-Element hält eine Sammlung von Blöcken mit einer `x`- und `y`-Position und einem `t`-Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels`-Funktion, fügen wir die Blöcke in einem Array in der `for`-Schleife mit einigen frameworkspezifischen Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe festgelegt, um Physikberechnungen zu ermöglichen. Die `newLevel.create`-Methode erstellt neue Elemente in der Gruppe mit anfänglichen linken und oberen Positionen und einem eigenen Bild. Wenn Sie nicht durch die Liste der Elemente erneut schleifen möchten, um explizit eine Eigenschaft zu jedem einzelnen hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um es auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels`-Array gespeichert, das standardmäßig unsichtbar ist. Um spezifische Levels zu laden, stellen wir sicher, dass die vorherigen Levels ausgeblendet sind, und zeigen das aktuelle an:

```js
Ball.Game.prototype = {
  // …
  showLevel(level) {
    const lvl = level | this.level;
    if (this.levels[lvl - 2]) {
      this.levels[lvl - 2].visible = false;
    }
    this.levels[lvl - 1].visible = true;
  },
  // …
};
```

Dank dieser Funktion bietet das Spiel dem Spieler eine Herausforderung - jetzt muss er die Kugel über den Spielbereich rollen und sie durch das Labyrinth aus den Blöcken führen. Es ist nur ein Beispiel für das Laden der Levels, und es gibt nur 5 davon, um die Idee zu demonstrieren, aber Sie können daran arbeiten, dies selbst auszubauen.

#### Kollisionsdetektion

In diesem Punkt haben wir die Kugel, die vom Spieler gesteuert wird, das Loch zum Erreichen und die Hindernisse, die den Weg blockieren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionsdetektion, also passiert nichts, wenn die Kugel die Blöcke trifft — sie geht einfach durch. Lassen Sie es uns beheben! Die gute Nachricht ist, dass das Framework die Kollisionsdetektion berechnen wird, wir müssen nur die kollidierenden Objekte in der `update()`-Funktion angeben:

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

Dies wird dem Framework mitteilen, die `wallCollision`-Funktion auszuführen, wenn die Kugel auf eine der Wände trifft. Wir können die `wallCollision`-Funktion verwenden, um jede Funktionalität hinzuzufügen, die wir wollen, wie z.B. das Abspielen des Prallsounds und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorgelegten Assets befand sich ein Audiotrack (in verschiedenen Formaten für Browser-Kompatibilität), den wir jetzt verwenden können. Er muss zuerst in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status der Audiofunktion `true` ist (also die Sounds im Spiel aktiviert sind), können wir sie in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Sounds ist mit Phaser einfach.

#### Implementierung der Vibration API

Wenn die Kollisionsdetektion wie erwartet funktioniert, fügen wir einige spezielle Effekte mit Hilfe der Vibration API hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, sie in unserem Fall zu verwenden, ist, das Telefon jedes Mal vibrieren zu lassen, wenn die Kugel die Wände trifft — in der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt wird und im `window.navigator`-Objekt verfügbar ist, wird das Telefon für 100 Millisekunden vibrieren. Das ist es!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, speichern wir die verstrichene Zeit — die Spieler können dann versuchen, ihre beste Spielzeit zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, um die tatsächliche Anzahl der seit Spielbeginn verstrichenen Sekunden zu speichern, und um sie für den Spieler im Spiel sichtbar zu machen. Definieren wir zuerst die Variablen in der `create`-Funktion:

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

Wir definieren die oberen und linken Positionen des Textes, den Inhalt, der angezeigt wird, und das Styling, das auf den Text angewendet wird. Wir haben dies auf dem Bildschirm gedruckt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, auch in der `create`-Funktion, wird die `updateCounter`-Funktion jede einzelne Sekunde ab Spielbeginn ausführen, so dass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter`-Funktion aus:

```js
Ball.Game.prototype = {
  // …
  updateCounter() {
    this.timer++;
    this.timerText.setText(`Time: ${this.timer}`);
    this.totalTimeText.setText(`Total time: ${this.totalTimer + this.timer}`);
  },
  // …
};
```

Wie Sie sehen, erhöhen wir die `this.timer`-Variable und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten bei jeder Iteration, sodass der Spieler die verstrichene Zeit sieht.

#### Abschließen des Levels und des Spiels

Die Kugel rollt über den Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Jetzt lassen Sie uns die Möglichkeit einrichten, das Level tatsächlich abzuschließen! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn die Kugel zum Loch gelangt.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die zuvor erklärte `collide`-Methode. Wenn die Kugel mit dem Loch überlappt (anstatt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

```js
Ball.Game.prototype = {
  // …
  finishLevel() {
    if (this.level >= this.maxLevels) {
      this.totalTimer += this.timer;
      alert(
        `Congratulations, game completed!\nTotal time of play: ${this.totalTimer} seconds!`,
      );
      this.game.state.start("MainMenu");
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
  // …
};
```

Wenn das aktuelle Level gleich der maximalen Anzahl von Levels ist (in diesem Fall 5), dann ist das Spiel beendet — Sie erhalten eine Glückwunschnachricht zusammen mit der Anzahl der im gesamten Spiel verstrichenen Sekunden, sowie einen Button, der Sie zurück zum Hauptmenü bringt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist lediglich eine funktionierende Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Wir könnten zum Beispiel Power-ups hinzufügen, die man auf dem Weg sammeln kann und die unsere Kugel schneller rollen lassen, den Timer für einige Sekunden anhalten oder der Kugel spezielle Kräfte geben, um durch Hindernisse zu gehen. Es gibt auch Platz für Fallen, die die Kugel verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Levels mit zunehmendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial wird Ihnen helfen, in die 2D-Spielentwicklung einzutauchen und Sie dazu inspirieren, großartige Spiele selbst zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und seinen [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) überprüfen.

HTML gibt uns rohe Werkzeuge, die darauf basierenden Frameworks werden schneller und besser, und jetzt ist eine großartige Zeit, um in die Web-Spieleentwicklung einzusteigen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die ebenfalls in Betracht gezogen werden sollten, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — je nach Ihren Vorlieben, Ihren Programmierkenntnissen (oder deren Fehlen), dem Umfang des Projekts, den Anforderungen und anderen Aspekten. Sie sollten sie alle überprüfen und entscheiden, welches Ihre Bedürfnisse am besten erfüllt.
