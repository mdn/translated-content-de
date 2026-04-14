---
title: 2D Labyrinthspiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

In diesem Tutorial werden wir den Prozess des Aufbaus eines HTML-Mobilspiels durchgehen, das die [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) **APIs** verwendet, um das Gameplay zu verbessern und mit dem [Phaser](https://phaser.io/) Framework erstellt wird. Grundlegende JavaScript-Kenntnisse sind empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials werden Sie ein voll funktionsfähiges Demospiel haben: [Cyber Orb](https://orb.enclavegames.com/). Es wird in etwa so aussehen:

![Ein 2D-Spielbrett mit einer kleinen gelben Kugel. Es gibt ein großes schwarzes Loch, in das die Kugel entkommen kann, und eine Anzahl von Barrieren, die die Kugel daran hindern zu entkommen.](cyber-orb.png)

## Phaser Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von Desktop- und Mobil-HTML-Spielen. Es ist relativ neu, wächst jedoch dank der leidenschaftlichen Gemeinschaft, die am Entwicklungsprozess beteiligt ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) anschauen, wo es als Open Source verfügbar ist, die [Online-Dokumentation](https://docs.phaser.io/) lesen und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser-Framework bietet Ihnen eine Sammlung von Werkzeugen, die die Entwicklung beschleunigen und bei der Bearbeitung allgemeiner Aufgaben helfen, die zum Abschließen des Spiels notwendig sind, sodass Sie sich auf die Spielidee selbst konzentrieren können.

## Start des Projekts

Sie können den [Cyber Orb Quellcode](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub sehen. Die Ordnerstruktur ist ziemlich einfach: Der Ausgangspunkt ist die `index.html` Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, auf dem das Spiel gerendert wird.

![Screenshot des GitHub-Repositories mit dem Cyber Orb Spielcode, zeigt die Ordner und die Dateien in der Hauptstruktur auf.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und es auszuprobieren. Im Verzeichnis gibt es auch drei Ordner:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels.
- `audio`: Die im Spiel verwendeten Sounddateien.

## Einrichten des Canvas

Wir werden unser Spiel auf einem Canvas rendern, jedoch nicht manuell — das übernimmt das Framework. Lassen Sie uns es einrichten: Unser Ausgangspunkt ist die `index.html` Datei mit dem folgenden Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen möchten:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>Cyber Orb demo</title>
    <style>
      body {
        margin: 0;
        background: #333333;
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

Bisher haben wir eine einfache HTML-Webseite mit etwas Grundinhalt im `<head>` Abschnitt: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser-Frameworks und die Definition der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile initialisiert die Phaser-Instanz — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Render-Methode (wir verwenden `CANVAS`, aber es gibt auch `WEBGL` und `AUTO` Optionen) und die optionale ID des DOM-Containers, in den wir das Canvas einfügen möchten. Wenn im letzten Argument nichts angegeben oder das Element nicht gefunden wird, wird das Canvas dem `<body>` Tag hinzugefügt. Ohne das Framework, um das Canvas-Element der Seite hinzuzufügen, müssten Sie so etwas im `<body>` Tag schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Das Wichtige, an das man sich erinnern muss, ist, dass das Framework hilfreiche Methoden bereitstellt, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die manuell viel schwieriger wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) lesen, um eine tiefgehende Einführung in die grundlegenden Phaser-spezifischen Funktionen und Methoden zu erhalten.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die `start`-Methode startet den angegebenen Zustand und macht ihn aktiv. Lassen Sie uns sehen, was die Zustände eigentlich sind.

## Verwaltung der Spielzustände

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit dem Startknopf, `Howto` zeigt die "Wie man spielt"-Anleitung und der `Game` Zustand lässt Sie das Spiel tatsächlich spielen. Lassen Sie uns schnell den Inhalt dieser Zustände durchgehen.

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

Das Haupt-`Ball`-Objekt wird definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, das sind die Breite und die Höhe des Spielfelds auf dem Canvas — sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload` Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets anzuzeigen. Die `create`-Funktion enthält einige grundlegende Konfigurationen: Wir stellen das Skalieren und Ausrichten des Canvas ein und gehen zum `Preload` Zustand über, wenn alles bereit ist.

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

Es gibt einzelne Bilder, Spritesheets und Audiodateien, die vom Framework geladen werden. In diesem Zustand zeigt die `preloadBar` den Fortschritt auf dem Bildschirm an. Dieser Fortschritt der geladenen Assets wird vom Framework mit der Verwendung eines Bildes visualisiert. Mit jedem geladenen Asset können Sie mehr vom `preloadBar` Bild sehen: von 0% bis 100%, aktualisiert bei jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu` Zustand gestartet.

### MainMenu.js

Der `MainMenu` Zustand zeigt das Hauptmenü des Spiels, wo Sie durch Klicken auf den Knopf mit dem Spielen beginnen können.

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

Um einen neuen Knopf zu erstellen, gibt es die `add.button` Methode mit der folgenden Liste von optionalen Argumenten:

- Absolute Position oben auf dem Canvas in Pixeln.
- Absolute Position links auf dem Canvas in Pixeln.
- Name des Bild-Assets, das der Knopf verwendet.
- Funktion, die ausgeführt wird, wenn jemand auf den Knopf klickt.
- Der Ausführungskontext.
- Frame aus dem Bild-Asset, das als "Hover"-Zustand des Knopfs verwendet wird.
- Frame aus dem Bild-Asset, der als "Normal"- oder "Out"-Zustand des Knopfs verwendet wird.
- Frame aus dem Bild-Asset, der als "Klick"- oder "Down"-Zustand des Knopfs verwendet wird.

Das `anchor.set` richtet den Ankerpunkt auf dem Knopf ein, für den alle Berechnungen der Position angewendet werden. In unserem Fall ist es zur Hälfte von der linken Kante und am Beginn der oberen Kante verankert, sodass es leicht horizontal ohne die Notwendigkeit, seine Breite zu kennen, zentriert werden kann.

Wenn der Startknopf gedrückt wird, zeigt das Spiel anstelle des direkten Sprungs in die Aktion den Bildschirm mit Informationen darüber an, wie man das Spiel spielt.

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

Der `Howto` Zustand zeigt die Spielanweisungen auf dem Bildschirm, bevor das Spiel gestartet wird. Nach einem Klick auf den Bildschirm wird das tatsächliche Spiel gestartet.

### Game.js

Der `Game` Zustand aus der `Game.js` Datei ist dort, wo die ganze Magie passiert. Die gesamte Initialisierung erfolgt in der `create()`-Funktion (die einmal am Anfang des Spiels gestartet wird). Danach erfordert einige Funktionalität weiteren Code zur Steuerung — wir werden eigene Funktionen schreiben, um kompliziertere Aufgaben zu bewältigen. Insbesondere beachten Sie die `update()`-Funktion (die bei jedem Frame ausgeführt wird), die Dinge wie die Position des Balls aktualisiert.

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

Die `create` und `update` Funktionen sind spezifisch für das Framework, während andere unsere eigenen Kreationen sein werden:

- `initLevels` initialisiert die Level-Daten.
- `showLevel` zeigt die Level-Daten auf dem Bildschirm.
- `updateCounter` aktualisiert die Zeit, die für jedes Level aufgewendet wird, und zeichnet die gesamte Spielzeit auf.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton ein und aus.
- `wallCollision` wird ausgeführt, wenn der Ball auf die Wände oder andere Objekte trifft.
- `handleOrientation` ist die an das Ereignis gebundene Funktion, die für die Device Orientation API verantwortlich ist und die Bewegungskontrollen bereitstellt, wenn das Spiel auf einem mobilen Gerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Gehen wir zuerst zur `create()`-Funktion, initialisieren das Ballobjekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'` Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für alle Physikberechnungen in die Mitte des Balls, aktivieren die Arcade-Physikengine (die alle Physik für die Bewegung des Balls behandelt) und legen die Größe des Körpers für die Kollisionsdetektion fest. Die `bounce` Eigenschaft wird verwendet, um die Elastizität des Balls einzustellen, wenn er auf Hindernisse trifft.

#### Steuerung des Balls

Es ist cool, den Ball bereit zu haben, um im Spielbereich herumgeworfen zu werden, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Nun werden wir die Fähigkeit hinzufügen, den Ball mit der Tastatur auf Desktop-Geräten zu steuern, und dann gehen wir zur Implementierung der Device Orientation API über. Konzentrieren wir uns zunächst auf die Tastatur, indem wir das folgende zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten gibt: hoch, runter, links und rechts.

Als nächstes werden wir den folgenden Code zur `update()` Funktion hinzufügen, damit er bei jedem Frame ausgeführt wird. Das `this.keys` Objekt wird gegen Benutzereingaben geprüft, sodass der Ball entsprechend mit der vordefinierten Kraft reagieren kann:

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

Auf diese Weise können wir prüfen, welche Taste im gegebenen Frame gedrückt wird, und die definierte Kraft auf den Ball anwenden, um somit die Geschwindigkeit in die richtige Richtung zu erhöhen.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Verwendung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die Sie den Ball rollen lassen möchten. Hier ist der Code aus der `create()` Funktion, die dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation);
```

Wir fügen einen Ereignis-Listener zum `"deviceorientation"` Ereignis hinzu und binden die `handleOrientation` Funktion, die folgendermaßen aussieht:

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

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf den Ball ausgeübt, daher bewegt er sich schneller (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit dem Cyber Orb-Spiel auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist, den Ball von der Startposition zur Endposition zu bewegen: ein Loch im Boden. Die Implementierung sieht dem Teil, in dem wir den Ball erstellt haben, sehr ähnlich und wird auch in der `create()` Funktion unseres `Game` Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass sich der Körper unseres Lochs nicht bewegt, wenn wir ihn mit dem Ball treffen und die Kollisionsdetektion berechnet wird (worüber später in diesem Artikel noch gesprochen wird).

#### Bau des Block-Labyrinths

Um das Spiel schwieriger und interessanter zu machen, fügen wir einige Hindernisse zwischen dem Ball und dem Ausgang hinzu. Wir könnten einen Level-Editor verwenden, aber im Sinne dieses Tutorials erstellen wir etwas Eigenes.

Um die Blockinformationen zu halten, verwenden wir ein Level-Datenarray: Für jeden Block speichern wir die absolute Position oben und links in Pixeln (`x` und `y`) und den Blocktyp — horizontal oder vertikal (`t` mit dem Wert `'w'` für Breite und `'h'` für Höhe). Dann werden wir beim Laden des Levels die Daten analysieren und die für dieses Level spezifischen Blöcke zeigen. In der `initLevels` Funktion haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit jeweils einer `x`- und `y`-Position und einem `t`-Wert. Nach `levelData`, aber immer noch in der `initLevels` Funktion, fügen wir die Blöcke in einem `for` Schleife-Array mit einigen frameworkspezifischen Methoden hinzu:

```js
for (let i = 0; i < this.maxLevels; i++) {
  const newLevel = this.add.group();
  newLevel.enableBody = true;
  newLevel.physicsBodyType = Phaser.Physics.ARCADE;
  for (const item of this.levelData[i]) {
    newLevel.create(item.x, item.y, `element-${item.t}`);
  }
  newLevel.setAll("body.immovable", true);
  newLevel.visible = false;
  this.levels.push(newLevel);
}
```

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE` Körper typ für diese Gruppe gesetzt, um Physikberechnungen zu aktivieren. Die `newLevel.create` Methode erstellt neue Elemente in der Gruppe mit Startpositionen links und oben und eigenem Bild. Wenn Sie nicht durch die Liste von Elementen nochmal durchlaufen wollen, um einer jeden explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um diese auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels` Array gespeichert, das standardmäßig unsichtbar ist. Um spezifische Levels zu laden, stellen wir sicher, dass die vorherigen Levels ausgeblendet und das aktuelle Level angezeigt wird:

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

Dank dessen gibt das Spiel dem Spieler eine Herausforderung - jetzt müssen sie den Ball über den Spielbereich rollen und durch das aus den Blöcken gebaute Labyrinth führen. Es ist nur ein Beispiel für das Laden der Levels, und es gibt nur 5 von ihnen, um die Idee zu veranschaulichen, aber Sie können daran arbeiten, das selbst zu erweitern.

#### Kollisionsdetektion

An dieser Stelle haben wir den Ball, der vom Spieler kontrolliert wird, das Ziel, das es zu erreichen gilt, und die Hindernisse, die den Weg blockieren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionsdetektion, sodass nichts passiert, wenn der Ball die Blöcke trifft — er geht einfach durch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework die Berechnung der Kollisionsdetektion übernimmt, wir müssen nur die kollidierenden Objekte in der `update()` Funktion angeben:

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

Dies wird dem Framework mitteilen, die `wallCollision`-Funktion auszuführen, wenn der Ball auf eine der Wände trifft. Wir können die `wallCollision` Funktion verwenden, um jede gewünschte Funktionalität hinzuzufügen, wie z.B. das Abspielen des Abpralltons und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorab geladenen Assets befand sich ein Audiotrack (in verschiedenen Formaten für die Browser-Kompatibilität), den wir jetzt verwenden können. Er muss zuerst in der `create()` Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also die Sounds im Spiel aktiviert sind), können wir es in der `wallCollision` Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Sounds wird mit Phaser erreicht.

#### Implementierung der Vibration API

Wenn die Kollisionsdetektion wie erwartet funktioniert, fügen wir einige Spezialeffekte mit Hilfe der Vibration API hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit dem Cyber Orb-Spiel auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Die beste Möglichkeit, sie in unserem Fall zu verwenden, ist, das Telefon jedes Mal vibrieren zu lassen, wenn der Ball die Wände trifft — innerhalb der `wallCollision` Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate` Methode vom Browser unterstützt wird und im `window.navigator` Objekt verfügbar ist, lassen Sie das Telefon für 100 Millisekunden vibrieren. Das war's!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, speichern wir die verstrichene Zeit — die Spieler können dann versuchen, ihre beste Spieldauer zu verbessern. Dazu müssen wir eine Variable erstellen, um die tatsächliche Anzahl der Sekunden, die seit Beginn des Spiels verstrichen sind, zu speichern und sie dem Spieler im Spiel zu zeigen. Lassen Sie uns die Variablen zuerst in der `create` Funktion definieren:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Dann, direkt danach, können wir die notwendigen Textobjekte initialisieren, um diese Informationen für den Benutzer anzuzeigen:

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

Wir definieren die oberen und linken Positionen des Textes, den Inhalt, der angezeigt wird, und das Styling, das auf den Text angewendet wird. Wir haben dies auf dem Bildschirm ausgedruckt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, ebenfalls in der `create` Funktion, führt die `updateCounter` Funktion jede einzelne Sekunde ab Spielbeginn aus, sodass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter` Funktion aus:

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

Wie Sie sehen, inkrementieren wir die `this.timer` Variable und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten bei jeder Iteration, sodass der Spieler die verstrichene Zeit sieht.

#### Beenden des Levels und des Spiels

Der Ball rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Jetzt richten wir die Möglichkeit ein, das Level tatsächlich zu beenden! Die folgende Zeile in der `update()` Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn der Ball zum Loch gelangt.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die `collide` Methode, die bereits oben erklärt wurde. Wenn der Ball das Loch überlappt (anstatt darauf zu stoßen), wird die `finishLevel` Funktion ausgeführt:

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

Wenn das aktuelle Level gleich der maximalen Anzahl von Levels ist (in diesem Fall 5), dann ist das Spiel beendet — Sie erhalten eine Glückwunschnachricht zusammen mit der Anzahl der verstrichenen Sekunden durch das ganze Spiel, und einer Taste, die Sie zum Hauptmenü bringt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist lediglich ein funktionierendes Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Wir können zum Beispiel Power-ups hinzufügen, die wir unterwegs einsammeln können, die unseren Ball schneller rollen lassen, den Timer für ein paar Sekunden anhalten oder dem Ball spezielle Kräfte geben, um durch Hindernisse zu gehen. Es gibt auch Raum für Fallen, die den Ball verlangsamen oder es schwieriger machen werden, das Loch zu erreichen. Sie können mehr Levels mit steigendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial hilft Ihnen, in die 2D-Spielentwicklung einzutauchen und inspiriert Sie, großartige Spiele auf eigene Faust zu erstellen. Sie können das Demo-Spiel [Cyber Orb](https://orb.enclavegames.com/) spielen und seinen [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) überprüfen.

HTML gibt uns rohe Werkzeuge, die darauf aufgebauten Frameworks werden immer schneller und besser, also ist jetzt die perfekte Zeit, um in die Web-Spieleentwicklung einzusteigen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Anzahl von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die auch einen Blick wert sind, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Ihren Programmierkenntnissen (oder deren Mangel), dem Projektausmaß, den Anforderungen und anderen Aspekten ab. Sie sollten sie alle überprüfen und entscheiden, welches am besten zu Ihren Bedürfnissen passt.
