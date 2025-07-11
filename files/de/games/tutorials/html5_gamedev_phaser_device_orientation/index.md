---
title: 2D-Labyrinthspiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

In diesem Tutorial werden wir den Prozess des Erstellens eines HTML-Mobilspiels durchgehen, das die [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) **APIs** verwendet, um das Gameplay zu verbessern. Es wird mit dem [Phaser](https://phaser.io/) Framework entwickelt. Grundlegende JavaScript-Kenntnisse werden empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials haben Sie ein voll funktionsfähiges Demo-Spiel: [Cyber Orb](https://orb.enclavegames.com/). Es wird in etwa so aussehen:

![Ein 2D-Spielbrett mit einem kleinen gelben Ball. Es gibt ein großes schwarzes Loch, in das der Ball entkommen kann, und eine Reihe von Barrieren, die den Ball daran hindern, zu entkommen.](cyber-orb.png)

## Phaser Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von Desktop- und mobilen HTML-Spielen. Es ist relativ neu, wächst jedoch dank der engagierten Community, die am Entwicklungsprozess beteiligt ist, schnell. Sie können es [auf GitHub](https://github.com/phaserjs/phaser) einsehen, wo es quelloffen ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser Framework bietet Ihnen eine Reihe von Tools, die die Entwicklung beschleunigen und allgemeine Aufgaben abwickeln, die zum Abschließen des Spiels erforderlich sind, sodass Sie sich auf die eigentliche Spielidee konzentrieren können.

## Starten des Projekts

Sie können sich den [Cyber Orb Quellcode](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub ansehen. Die Ordnerstruktur ist ziemlich einfach: Der Ausgangspunkt ist die `index.html`-Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, um das Spiel darauf zu rendern.

![Screenshot des GitHub-Repos mit dem Cyber Orb-Spielcode, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Index-Datei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und es auszuprobieren. Es gibt auch drei Ordner im Verzeichnis:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels darin.
- `audio`: Die Sounddateien, die im Spiel verwendet werden.

## Einrichten des Canvas

Wir werden unser Spiel auf dem Canvas rendern, aber wir werden es nicht manuell tun — dies wird vom Framework übernommen. Lassen Sie es uns einrichten: Unser Ausgangspunkt ist die `index.html`-Datei mit folgendem Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen möchten:

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

Bisher haben wir eine einfache HTML-Website mit einigen grundlegenden Inhalten im `<head>`-Abschnitt: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile wird die Phaser-Instanz initialisieren — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Render-Methode (wir verwenden `CANVAS`, aber es gibt auch `WEBGL` und `AUTO` Optionen) und die optionale ID des DOM-Containers, in den wir das Canvas einfügen möchten. Wenn im letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird das Canvas zum `<body>`-Tag hinzugefügt. Ohne das Framework, um das Canvas-Element zur Seite hinzuzufügen, müssten Sie etwas wie das Folgende in das `<body>`-Tag schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Wichtig ist, dass das Framework hilfreiche Methoden einrichtet, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, was manuell deutlich schwieriger wäre.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) für eine ausführliche Einführung in die grundlegenden, Phaser-spezifischen Funktionen und Methoden lesen.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die `start`-Methode startet den gegebenen Zustand und macht ihn aktiv. Lassen Sie uns sehen, was die Zustände eigentlich sind.

## Verwaltung der Spielzustände

Die Zustände in Phaser sind separate Teile der Spielmechanik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für bessere Wartbarkeit. Die grundlegenden im Spiel verwendeten Zustände sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit der Starttaste, `Howto` zeigt die Spielanleitung und der `Game`-Zustand ermöglicht es Ihnen, tatsächlich zu spielen. Lassen Sie uns schnell den Inhalt dieser Zustände durchgehen.

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

Das Hauptobjekt `Ball` ist definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und Höhe des Spiel-Canvas sind — sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets anzuzeigen. Die `create`-Funktion enthält einige grundlegende Konfigurationen: Wir stellen die Skalierung und Ausrichtung des Canvas ein und wechseln zum `Preload`-Zustand, wenn alles bereit ist.

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

Es werden einzelne Bilder, Sprite-Sheets und Audiodateien vom Framework geladen. In diesem Zustand zeigt die `preloadBar` den Fortschritt auf dem Bildschirm an. Dieser Fortschritt der geladenen Assets wird vom Framework mit Hilfe eines Bildes visualisiert. Mit jedem geladenen Asset sehen Sie mehr von dem `preloadBar`-Bild: von 0% bis 100%, aktualisiert bei jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels an, in dem Sie durch Klicken der Schaltfläche spielen können.

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

Um eine neue Schaltfläche zu erstellen, gibt es die `add.button` Methode mit folgender Liste von optionalen Argumenten:

- Obere absolute Position auf dem Canvas in Pixeln.
- Linke absolute Position auf dem Canvas in Pixeln.
- Name des Bildassets, das die Schaltfläche verwendet.
- Funktion, die ausgeführt wird, wenn jemand auf die Schaltfläche klickt.
- Der Ausführungskontext.
- Frame aus dem Bildasset, das als "Hover"-Zustand der Schaltfläche verwendet wird.
- Frame aus dem Bildasset, das als "Normal"- oder "Out"-Zustand der Schaltfläche verwendet wird.
- Frame aus dem Bildasset, das als "Klick"- oder "Down"-Zustand der Schaltfläche verwendet wird.

`anchor.set` richtet den Ankerpunkt auf der Schaltfläche ein, für den alle Berechnungen der Position angewendet werden. In unserem Fall ist es halb von der linken Kante und vom Anfang der oberen Kante verankert, sodass es ohne Kenntnis seiner Breite leicht horizontal zentriert auf dem Bildschirm erscheinen kann.

Wenn die Starttaste gedrückt wird, wird das Spiel anstelle des unmittelbaren Einstieg in die Action den Bildschirm mit den Spielanweisungen anzeigen.

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

Der `Howto`-Zustand zeigt die Gameplay-Anleitung auf dem Bildschirm an, bevor das Spiel startet. Nach dem Klicken auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der `Game.js`-Datei ist der Ort, an dem die gesamte Magie passiert. Die gesamte Initialisierung erfolgt in der `create()`-Funktion (einmalig zu Beginn des Spiels gestartet). Danach erfordert einige Funktionalität weitergehenden Code zur Kontrolle — wir schreiben unsere eigenen Funktionen, um kompliziertere Aufgaben zu handhaben. Insbesondere beachten Sie die `update()`-Funktion (wird in jedem Frame ausgeführt), die Dinge wie die Ballposition aktualisiert.

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
- `showLevel` druckt die Level-Daten auf dem Bildschirm aus.
- `updateCounter` aktualisiert die Zeit, die für jedes Level verbracht wurde, und zeichnet die insgesamt im Spiel verbrachte Zeit auf.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet die Audio-Ausgabe ein und aus.
- `wallCollision` wird ausgeführt, wenn der Ball auf die Wände oder andere Objekte trifft.
- `handleOrientation` ist die Funktion, die an das Ereignis für die Device Orientation API gebunden ist und die Bewegungssteuerung bereitstellt, wenn das Spiel auf einem mobilen Gerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Gehen wir zunächst in die `create()`-Funktion, initialisieren das Ballobjekt selbst und weisen ihm ein paar Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'` Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für alle Physikberechnungen in die Mitte des Balls, aktivieren die Arcade Physik-Engine (die alle Physik für die Ballbewegung behandelt) und setzen die Körpergröße für die Kollisionserkennung. Die `bounce`-Eigenschaft wird verwendet, um die Elastizität des Balls bei Kollisionen mit Hindernissen festzulegen.

#### Steuerung des Balls

Es ist cool, den Ball bereitzuhaben und in der Spielfläche herumzustoßen, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Jetzt werden wir die Möglichkeit hinzufügen, den Ball mit der Tastatur auf Desktop-Geräten zu steuern, und dann zur Implementierung der Device Orientation API übergehen. Konzentrieren wir uns zunächst auf die Tastatur, indem wir das folgende zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten zum Spielen gibt: hoch, runter, links und rechts.

Als nächstes fügen wir den folgenden Code zur `update()`-Funktion hinzu, sodass er in jedem Frame ausgelöst wird. Das `this.keys`-Objekt wird mit der Eingabe des Spielers verglichen, sodass der Ball entsprechend mit der vorgegebenen Kraft reagiert:

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

Auf diese Weise können wir überprüfen, welche Taste im gegebenen Frame gedrückt wird und die definierte Kraft auf den Ball anwenden, wodurch die Geschwindigkeit in die richtige Richtung erhöht wird.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Verwendung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung kippen, in die sich der Ball rollen soll. Hier ist der Code aus der `create()`-Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Event-Listener für das `"deviceorientation"`-Ereignis hinzu und binden die `handleOrientation`-Funktion, die folgendermaßen aussieht:

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

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf den Ball angewendet, daher bewegt er sich schneller (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit dem Cyber Orb-Spieldemo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, den Ball von der Startposition zur Endposition zu bewegen: ein Loch im Boden. Die Implementierung sieht der Stelle, an der wir den Ball erstellt haben, sehr ähnlich und wird ebenfalls in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass sich der Körper unseres Lochs nicht bewegt, wenn wir ihn mit dem Ball treffen, und die Kollisionserkennung berechnet wird (was später in diesem Artikel besprochen wird).

#### Aufbau des Blocklabyrinths

Um das Spiel schwieriger und interessanter zu machen, werden wir einige Hindernisse zwischen dem Ball und dem Ausgang hinzufügen. Wir könnten einen Level-Editor verwenden, aber für den Zweck dieses Tutorials möchten wir selbst etwas erstellen.

Um die Blockinformationen zu speichern, verwenden wir ein Level-Daten-Array: Für jeden Block speichern wir die obere und linke absolute Position in Pixeln (`x` und `y`) und den Typ des Blocks — horizontal oder vertikal (`t` mit dem Wert `'w'` für Breite und `'h'` für Höhe). Dann, um das Level zu laden, analysieren wir die Daten und zeigen die für dieses Level spezifischen Blöcke an. In der `initLevels`-Funktion haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit einer `x`- und `y`-Position und einem `t`-Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels`-Funktion, fügen wir die Blöcke in einem Array in der `for`-Schleife mit einigen frameworkspezifischen Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Objekten zu erstellen. Dann wird der `ARCADE`-Body-Typ für diese Gruppe eingestellt, um Physikberechnungen zu ermöglichen. Die `newLevel.create`-Methode erstellt neue Objekte in der Gruppe mit Startpunkt- und -oberpositionen sowie ihrem eigenen Bild. Wenn Sie nicht durch die Liste der Objekte erneut gehen möchten, um einer einzelnen explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` für eine Gruppe verwenden, um sie auf alle Objekte in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels` Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Level zu laden, stellen wir sicher, dass die vorherigen Level verborgen sind, und zeigen das aktuelle an:

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

Dank dessen bietet das Spiel dem Spieler eine Herausforderung - jetzt muss er die Kugel über die Spielfläche rollen und sie durch das aus den Blöcken gebaute Labyrinth führen. Es ist nur ein Beispiel für das Laden der Level, und es gibt nur 5 von ihnen, um die Idee zu veranschaulichen, aber Sie können daran arbeiten, dies selbst zu erweitern.

#### Kollisionserkennung

An diesem Punkt haben wir den Ball, der vom Spieler kontrolliert wird, das Loch, das erreicht werden muss, und die Hindernisse, die den Weg versperren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionserkennung, sodass nichts passiert, wenn der Ball die Blöcke trifft — er geht einfach durch. Lassen Sie es uns beheben! Die gute Nachricht ist, dass das Framework sich um die Berechnung der Kollisionserkennung kümmert, wir müssen nur die kollidierenden Objekte in der `update()`-Funktion angeben:

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

Dies wird das Framework anweisen, die `wallCollision` Funktion auszuführen, wenn der Ball eine der Wände trifft. Wir können die `wallCollision` Funktion verwenden, um jede gewünschte Funktionalität wie das Abspielen des Abprallgeräusches und die Implementierung der **Vibrations-API** hinzuzufügen.

#### Hinzufügen des Sounds

Unter den vorab geladenen Assets gab es eine Audiospur (in verschiedenen Formaten für die Browser-Kompatibilität), die wir jetzt verwenden können. Es muss zuerst in der `create()` Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also sind die Sounds im Spiel aktiviert), können wir ihn in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Sounds ist mit Phaser einfach.

#### Implementierung der Vibrations-API

Wenn die Kollisionserkennung wie erwartet funktioniert, fügen wir einige Spezialeffekte mit Hilfe der Vibration API hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit dem Cyber Orb-Spieldemo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, es in unserem Fall zu verwenden, ist, das Telefon jedes Mal vibrieren zu lassen, wenn der Ball die Wände trifft — innerhalb der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate` Methode vom Browser unterstützt wird und im `window.navigator`-Objekt verfügbar ist, lassen Sie das Telefon 100 Millisekunden vibrieren. Das ist es!

#### Hinzufügen der abgelaufenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, werden wir die abgelaufene Zeit speichern — Spieler können dann versuchen, ihre beste Spielabschlusszeit zu verbessern. Um dies zu implementieren, müssen wir eine Variable für die tatsächliche Anzahl der vom Spielbeginn an verstrichenen Sekunden erstellen und dem Spieler im Spiel anzeigen lassen. Definieren wir zuerst die Variablen in der `create`-Funktion:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Dann, gleich danach, können wir die notwendigen Textobjekte initialisieren, um diese Informationen dem Benutzer anzuzeigen:

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

Wir definieren die obere und linke Position des Textes, den Inhalt, der angezeigt wird, und das Styling, das auf den Text angewendet wird. Wir haben dies auf dem Bildschirm gedruckt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, auch in der `create`-Funktion, wird die `updateCounter`-Funktion jede einzelne Sekunde ab dem Beginn des Spiels ausführen, sodass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter`-Funktion aus:

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

#### Beenden des Levels und des Spiels

Der Ball rollt über den Bildschirm, der Timer funktioniert und wir haben das erstellte Loch, das wir erreichen müssen. Jetzt stellen wir die Möglichkeit ein, das Level tatsächlich abzuschließen! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn der Ball das Loch erreicht.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die zuvor erklärte `collide`-Methode. Wenn der Ball das Loch überlappt (statt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

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

Wenn das aktuelle Level dem maximalen Levelanzahl entspricht (in diesem Fall 5), dann ist das Spiel beendet — Sie erhalten eine Glückwunschnachricht zusammen mit der Anzahl der Sekunden, die während des gesamten Spiels verstrichen sind, und einer Schaltfläche, die beim Drücken ins Hauptmenü führt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Features

Dies ist lediglich ein funktionales Demo eines Spiels, das viele zusätzliche Features haben könnte. Wir können zum Beispiel Power-Ups hinzufügen, die wir auf dem Weg sammeln können und die unsere Kugel schneller rollen lassen, den Timer für ein paar Sekunden anhalten oder der Kugel besondere Kräfte verleihen, um Hindernisse zu durchdringen. Es besteht auch Raum für Fallen, die die Kugel verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Level mit zunehmendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Fantasie ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial wird Ihnen helfen, in die 2D-Spielentwicklung einzutauchen und Sie dazu inspirieren, großartige Spiele selbst zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und sich den [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) anschauen.

HTML bietet uns rohe Werkzeuge, die darauf aufgebauten Frameworks werden schneller und besser, daher ist jetzt ein großartiger Zeitpunkt, um mit der Webspieleentwicklung zu beginnen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die es ebenfalls wert sind, in Betracht gezogen zu werden, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Ihren Programmierfähigkeiten (oder deren Fehlen), dem Umfang des Projekts, den Anforderungen und anderen Aspekten ab. Sie sollten sie alle ausprobieren und entscheiden, welches am besten zu Ihren Bedürfnissen passt.
