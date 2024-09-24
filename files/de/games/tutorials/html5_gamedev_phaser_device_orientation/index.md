---
title: 2D Labyrinthspiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

In diesem Tutorial werden wir den Prozess des Erstellens eines HTML-Mobilspiels durchlaufen, das die [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) **APIs** nutzt, um das Gameplay zu verbessern. Das Spiel wird mithilfe des [Phaser](https://phaser.io/)-Frameworks erstellt. Grundkenntnisse in JavaScript werden empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende dieses Tutorials haben Sie ein voll funktionsfähiges Demospiel: [Cyber Orb](https://orb.enclavegames.com/). Es wird ungefähr so aussehen:

![Ein 2D-Spielbrett mit einem kleinen gelben Ball. Es gibt ein großes schwarzes Loch, in das der Ball entkommen kann, und eine Reihe von Barrieren, die den Ausweg des Balls blockieren.](cyber-orb.png)

## Phaser-Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von Desktop- und mobilen HTML-Spielen. Es ist zwar relativ neu, wächst aber dank der engagierten Community, die am Entwicklungsprozess beteiligt ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) ansehen, wo es Open Source ist, die [Online-Dokumentation lesen](https://phaser.io/docs/) und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser-Framework bietet Ihnen eine Reihe von Tools, die die Entwicklung beschleunigen und bei der Bewältigung allgemeiner Aufgaben helfen, die zur Fertigstellung des Spiels erforderlich sind, damit Sie sich selbst auf die Spielidee konzentrieren können.

## Projekt starten

Sie können den [Cyber Orb Quellcode](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub ansehen. Die Ordnerstruktur ist recht übersichtlich: Der Ausgangspunkt ist die `index.html`-Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, um das Spiel darauf zu rendern.

![Screenshot des GitHub-Repositoriums mit dem Cyber Orb-Spielcode, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und es auszuprobieren. Im Verzeichnis gibt es auch drei Ordner:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten im Spiel definierten Quellcode.
- `audio:` Die Sounddateien, die im Spiel verwendet werden.

## Canvas einrichten

Wir werden unser Spiel auf einem Canvas rendern, aber das machen wir nicht manuell — das wird vom Framework übernommen. Lassen Sie uns es einrichten: Unser Ausgangspunkt ist die `index.html`-Datei mit folgendem Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen möchten:

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

Bislang haben wir eine einfache HTML-Website mit einigen grundlegenden Inhalten im `<head>`-Bereich: Zeichensatz, Titel, CSS-Styles und die Einbindung der JavaScript-Dateien. Der `<body>`-Bereich enthält die Initialisierung des Phaser-Frameworks und die Definition der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile initialisiert die Phaser-Instanz — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Render-Methode (wir verwenden `CANVAS`, aber es gibt auch `WEBGL` und `AUTO` Optionen zur Verfügung) und die optionale ID des DOM-Containers, in dem wir das Canvas platzieren möchten. Wenn im letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird das Canvas dem \<body>-Tag hinzugefügt. Ohne das Framework müsste man zum Hinzufügen des Canvas-Elements zur Seite so etwas im \<body>-Tag schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Das Wichtige ist, dass das Framework hilfreiche Methoden bereitstellt, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die manuell viel schwieriger wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) lesen, um eine detaillierte Einführung in die grundlegenden Phaser-spezifischen Funktionen und Methoden zu erhalten.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die `start`-Methode startet den angegebenen Zustand und macht ihn aktiv. Sehen wir uns an, was die Zustände tatsächlich sind.

## Verwaltung von Spielzuständen

Die Zustände in Phaser sind separate Teile der Spiellogik. In unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die Grundzustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit dem Startknopf, `Howto` zeigt die Anweisungen "Wie man spielt" und der `Game`-Zustand lässt Sie das Spiel tatsächlich spielen. Lassen Sie uns schnell den Inhalt dieser Zustände durchgehen.

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

Das Hauptobjekt `Ball` wird definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und die Höhe des Spielfeldes sind — sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets anzuzeigen. Die `create`-Funktion enthält einige grundlegende Konfigurationen: Wir richten die Skalierung und Ausrichtung des Spielfeldes ein und wechseln zum `Preload`-Zustand, wenn alles bereit ist.

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

Es gibt einzelne Bilder, Spritesheets und Audiodateien, die vom Framework geladen werden. In diesem Zustand zeigt die `preloadBar` den Fortschritt auf dem Bildschirm. Der Fortschritt der geladenen Assets wird vom Framework mithilfe eines Bildes visualisiert. Mit jedem geladenen Asset sehen Sie mehr vom `preloadBar`-Bild: von 0 % bis 100 %, aktualisiert in jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels, in dem Sie durch Klicken auf die Schaltfläche das Spiel starten können.

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

Um einen neuen Button zu erstellen, gibt es die Methode `add.button` mit der folgenden Liste von optionalen Argumenten:

- Obere absolute Position auf dem Spielfeld in Pixel.
- Linke absolute Position auf dem Spielfeld in Pixel.
- Name des Bild-Assets, das der Button verwendet.
- Funktion, die ausgeführt wird, wenn jemand auf den Button klickt.
- Der Ausführungskontext.
- Frame aus dem Bild-Asset, der als "Hover"-Zustand des Buttons verwendet wird.
- Frame aus dem Bild-Asset, der als "Normal"- oder "Out"-Zustand des Buttons verwendet wird.
- Frame aus dem Bild-Asset, der als "Click"- oder "Down"-Zustand des Buttons verwendet wird.

Das `anchor.set` legt den Ankerpunkt auf dem Button fest, auf den alle Positionsberechnungen angewendet werden. In unserem Fall ist er zur Hälfte von der linken Kante und am Anfang der oberen Kante verankert, sodass er ohne Kenntnis seiner Breite leicht horizontal auf dem Bildschirm zentriert werden kann.

Wenn der Start-Button gedrückt wird, anstatt direkt in die Aktion zu springen, wird das Spiel den Bildschirm mit den Informationen darüber anzeigen, wie man das Spiel spielt.

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

Der `Howto`-Zustand zeigt die Spielanleitung auf dem Bildschirm, bevor das Spiel startet. Nach einem Klick auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der `Game.js`-Datei ist der Ort, an dem die gesamte Magie passiert. Die gesamte Initialisierung befindet sich in der `create()`-Funktion (wird einmal zu Beginn des Spiels ausgeführt). Danach erfordert einige Funktionalität weiteren Code zur Steuerung — wir werden eigene Funktionen schreiben, um komplizierte Aufgaben zu handhaben. Beachten Sie insbesondere die `update()`-Funktion (wird in jedem Frame ausgeführt), die Dinge wie die Ballposition aktualisiert.

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

Die `create`- und `update`-Funktionen sind frameworkspezifisch, während andere unsere eigenen Kreationen sind:

- `initLevels` initialisiert die Level-Daten.
- `showLevel` zeigt die Level-Daten auf dem Bildschirm.
- `updateCounter` aktualisiert die während jedes Levels verbrachte Zeit und erfasst die insgesamt im Spiel verbrachte Zeit.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton an und aus.
- `wallCollision` wird ausgeführt, wenn der Ball die Wände oder andere Objekte trifft.
- `handleOrientation` ist die Funktion, die an das Ereignis gebunden ist, das für die Device Orientation API verantwortlich ist und die Bewegungssteuerung bereitstellt, wenn das Spiel auf einem Mobilgerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Gehen wir zuerst zur `create()`-Funktion, initialisieren das Ball-Objekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'`-Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für erforderliche Physikberechnungen in die Mitte des Balls, aktivieren die Arcade-Physik-Engine (die die gesamte Physik für die Ballbewegung behandelt) und legen die Größe des Körpers für die Kollisionsdetektion fest. Die `bounce`-Eigenschaft wird verwendet, um die Sprungkraft des Balls festzulegen, wenn er auf Hindernisse stößt.

#### Steuerung des Balls

Es ist cool, den Ball bereit zu haben, um im Spielbereich herumgeschleudert zu werden, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Nun fügen wir die Möglichkeit hinzu, den Ball mit der Tastatur auf den Desktop-Geräten zu steuern, und dann werden wir zur Umsetzung der Device Orientation API übergehen. Konzentrieren wir uns zuerst auf die Tastatur, indem wir Folgendes zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten zum Spielen gibt: oben, unten, links und rechts.

Als Nächstes fügen wir den folgenden Code in die `update()`-Funktion ein, damit er bei jedem Frame ausgeführt wird. Das `this.keys`-Objekt wird mit der Spielereingabe überprüft, sodass der Ball entsprechend mit der vorgegebenen Kraft reagieren kann:

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

Dadurch können wir überprüfen, welche Taste im gegebenen Frame gedrückt wird, und die definierte Kraft auf den Ball anwenden, wodurch die Geschwindigkeit in die richtige Richtung erhöht wird.

#### Umsetzung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Nutzung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die der Ball rollen soll. Hier ist der Code aus der `create()`-Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Ereignis-Listener für das `"deviceorientation"`-Ereignis hinzu und binden die `handleOrientation`-Funktion daran, die so aussieht:

```js
handleOrientation(e) {
  const x = e.gamma;
  const y = e.beta;
  Ball._player.body.velocity.x += x;
  Ball._player.body.velocity.y += y;
},
```

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf den Ball ausgeübt, daher bewegt er sich schneller (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit der Cyber Orb-Spieldemo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, den Ball von der Startposition zur Endposition zu bewegen: ein Loch im Boden. Die Umsetzung sieht der Stelle, an der wir den Ball erstellt haben, sehr ähnlich aus und wird auch in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass sich der Körper unseres Lochs nicht bewegt, wenn wir es mit dem Ball treffen, und die Kollisionsdetektion berechnet wird (was später in diesem Artikel besprochen wird).

#### Bau des Blocklabyrinths

Um das Spiel schwieriger und interessanter zu machen, fügen wir einige Hindernisse zwischen dem Ball und dem Ausgang ein. Wir könnten einen Level-Editor verwenden, aber für das Beispiel in diesem Tutorial erstellen wir selbst etwas.

Um die Blockinformationen zu speichern, verwenden wir ein Level-Daten-Array: Für jeden Block speichern wir die obere und linke absolute Position in Pixel (`x` und `y`) und den Typ des Blocks — horizontal oder vertikal (`t` mit dem Wert `'w'`, was Breite bedeutet, und `'h'`, was Höhe bedeutet). Dann laden wir das Level, indem wir die Daten analysieren und die spezifischen Blöcke für dieses Level anzeigen. In der `initLevels`-Funktion haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit einer `x`- und `y`-Position und einem `t`-Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels`-Funktion, fügen wir die Blöcke in einem Array in der `for`-Schleife mithilfe einiger frameworkspezifischer Methoden hinzu:

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

Zuerst verwenden wir `add.group()`, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe festgelegt, um Physikberechnungen zu ermöglichen. Die `newLevel.create`-Methode erstellt neue Elemente in der Gruppe mit anfänglicher linker und oberer Position und ihrem eigenen Bild. Wenn Sie keine Schleife durch die Liste der Elemente durchlaufen möchten, um jedem explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um sie auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels`-Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Levels zu laden, stellen wir sicher, dass die vorherigen Levels ausgeblendet sind und das aktuelle angezeigt wird:

```js
showLevel(level) {
  const lvl = level | this.level;
  if (this.levels[lvl - 2]) {
    this.levels[lvl - 2].visible = false;
  }
  this.levels[lvl - 1].visible = true;
}
```

Dank dieser Einstellung bietet das Spiel dem Spieler eine Herausforderung — jetzt müssen sie den Ball über das Spielfeld rollen und ihn durch das Labyrinth aus den Blöcken führen. Es ist nur ein Beispiel für das Laden der Levels, und es gibt nur 5 von ihnen, nur um die Idee zu veranschaulichen, aber Sie können daran arbeiten, dies selbst zu erweitern.

#### Kollisionserkennung

Zu diesem Zeitpunkt haben wir den Ball, der vom Spieler gesteuert wird, das Loch, das erreicht werden muss, und die Hindernisse, die den Weg versperren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionserkennung, sodass nichts passiert, wenn der Ball die Blöcke trifft — er geht einfach hindurch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework sich um die Berechnung der Kollisionserkennung kümmert. Wir müssen nur die kollidierenden Objekte in der `update()`-Funktion spezifizieren:

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

Dies teilt dem Framework mit, die `wallCollision`-Funktion auszuführen, wenn der Ball eine der Wände trifft. Wir können die `wallCollision`-Funktion verwenden, um jede gewünschte Funktionalität hinzuzufügen, wie das Abspielen des Bounce-Sounds und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorab geladenen Assets war ein Audiotrack (in verschiedenen Formaten für die Browserkompatibilität), den wir jetzt verwenden können. Er muss zuerst in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also die Sounds im Spiel aktiviert sind), können wir ihn in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das war's — das Laden und Abspielen von Sounds ist mit Phaser einfach.

#### Implementierung der Vibration API

Wenn die Kollisionserkennung wie erwartet funktioniert, fügen wir einige Spezialeffekte mit Hilfe der Vibration API hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit der Cyber Orb-Spieldemo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, es in unserem Fall zu nutzen, besteht darin, das Telefon jedes Mal vibrieren zu lassen, wenn der Ball die Wände trifft — innerhalb der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt wird und im `window.navigator`-Objekt verfügbar ist, vibriert das Telefon für 100 Millisekunden. Mehr ist nicht nötig!

#### Hinzufügen der vergangenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, speichern wir die vergangene Zeit. Die Spieler können dann versuchen, ihre beste Spieldauer zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, die die tatsächliche Anzahl der Sekunden speichert, die seit Beginn des Spiels vergangen sind, und sie dem Spieler im Spiel anzeigen. Definieren wir zuerst die Variablen in der `create`-Funktion:

```js
this.timer = 0; // vergangene Zeit im aktuellen Level
this.totalTimer = 0; // gesamte vergangene Zeit im Spiel
```

Dann können wir sofort danach die notwendigen Textobjekte initialisieren, um diese Informationen dem Benutzer anzuzeigen:

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

Wir definieren die Ober- und Linkposition des Textes, den Inhalt, der angezeigt wird, und das Styling, das auf den Text angewendet wird. Wir haben dies auf dem Bildschirm ausgedruckt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, ebenfalls in der `create`-Funktion, wird die `updateCounter`-Funktion jede einzelne Sekunde ab dem Start des Spiels ausführen, sodass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter`-Funktion aus:

```js
updateCounter() {
  this.timer++;
  this.timerText.setText(`Time: ${this.timer}`);
  this.totalTimeText.setText(`Total time: ${this.totalTimer+this.timer}`);
},
```

Wie Sie sehen, erhöhen wir die Variable `this.timer` und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten in jedem Durchgang, sodass der Spieler die verstrichene Zeit sieht.

#### Das Level und das Spiel beenden

Der Ball rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Lassen Sie uns jetzt die Möglichkeit einrichten, das Level tatsächlich zu beenden! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn der Ball das Loch erreicht.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die zuvor erklärte `collide`-Methode. Wenn der Ball mit dem Loch überlappt (anstatt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

```js
finishLevel() {
  if (this.level >= this.maxLevels) {
    this.totalTimer += this.timer;
    alert(`Gratulation, Spiel abgeschlossen!\nGesamtspielzeit: ${this.totalTimer} Sekunden!`);
    this.game.state.start('MainMenu');
  } else {
    alert(`Gratulation, Level ${this.level} abgeschlossen!`);
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

Wenn das aktuelle Level der maximalen Anzahl an Levels entspricht (in diesem Fall 5), dann ist das Spiel beendet — Sie erhalten eine Glückwunschmeldung zusammen mit der Anzahl der Sekunden, die im ganzen Spiel vergangen sind, und einem Knopf, der Sie zum Hauptmenü bringt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist nur eine funktionierende Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Wir können beispielsweise Power-ups hinzufügen, die beim Sammeln den Ball schneller rollen lassen, den Timer für ein paar Sekunden anhalten oder dem Ball spezielle Kräfte verleihen, um durch Hindernisse zu gelangen. Es gibt auch Platz für Fallstricke, die den Ball verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Levels mit steigender Schwierigkeit erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Die Möglichkeiten sind endlos — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dass Ihnen dieses Tutorial hilft, in die 2D-Spieleentwicklung einzutauchen und Sie inspiriert, eigene großartige Spiele zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und den [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) überprüfen.

HTML bietet uns rohe Tools, die darauf aufbauenden Frameworks werden immer schneller und besser, sodass jetzt ein großartiger Zeitpunkt ist, um mit der Web-Spielentwicklung zu beginnen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die Sie ebenfalls in Betracht ziehen sollten, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Ihren Programmierkenntnissen (oder deren Fehlen), dem Projektumfang, den Anforderungen und anderen Aspekten ab. Sie sollten sie alle überprüfen und entscheiden, welches Ihren Anforderungen am besten entspricht.
