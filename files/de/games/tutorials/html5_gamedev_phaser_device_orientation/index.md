---
title: 2D-Labyrinthspiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

In diesem Leitfaden führen wir Sie durch den Prozess der Erstellung eines mobilen HTML-Spiels, das die [Device Orientation](/de/docs/Web/API/Device_orientation_events) und die [Vibration](/de/docs/Web/API/Vibration_API) **APIs** nutzt, um das Spielerlebnis zu verbessern. Das Spiel wird mit dem [Phaser](https://phaser.io/) Framework entwickelt. Grundlegende JavaScript-Kenntnisse sind empfehlenswert, um das Beste aus diesem Leitfaden herauszuholen.

## Beispielspiel

Am Ende des Leitfadens werden Sie ein voll funktionsfähiges Demospiel haben: [Cyber Orb](https://orb.enclavegames.com/). Es wird in etwa so aussehen:

![Ein 2D-Spielebrett mit einer kleinen gelben Kugel. Es gibt ein großes schwarzes Loch, durch das die Kugel entkommen kann, und eine Reihe von Barrieren, die die Kugel am Entkommen hindern.](cyber-orb.png)

## Phaser-Framework

[Phaser](https://phaser.io/) ist ein Framework zur Erstellung von Desktop- und mobilen HTML-Spielen. Es ist relativ neu, aber wächst schnell dank der engagierten Community, die in den Entwicklungsprozess involviert ist. Sie können es sich auf [GitHub](https://github.com/phaserjs/phaser) ansehen, wo es als Open Source verfügbar ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser-Framework bietet Ihnen eine Reihe von Werkzeugen, die die Entwicklung beschleunigen und generische Aufgaben erleichtern, die zur Vervollständigung des Spiels erforderlich sind, sodass Sie sich auf die Spielidee selbst konzentrieren können.

## Projektstart

Sie können den [Quellcode von Cyber Orb](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub einsehen. Die Ordnerstruktur ist recht einfach: Der Ausgangspunkt ist die `index.html` Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, um das Spiel darzustellen.

![Screenshot des GitHub-Repositories mit dem Cyber Orb-Spielcode, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Index-Datei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und auszuprobieren. Im Verzeichnis gibt es außerdem drei Ordner:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels.
- `audio:` Die im Spiel verwendeten Sounddateien.

## Einrichten des Canvas

Wir werden unser Spiel auf Canvas darstellen, aber das nicht manuell tun — das wird vom Framework übernommen. Lassen Sie uns das einrichten: Unser Startpunkt ist die `index.html` Datei mit dem folgenden Inhalt. Sie können diese selbst erstellen, wenn Sie mitmachen möchten:

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

Bis jetzt haben wir eine einfache HTML-Website mit ein wenig Grundinhalt im `<head>` Bereich: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>`-Bereich enthält die Initialisierung des Phaser-Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile initialisiert die Phaser-Instanz — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Render-Methode (wir nutzen `CANVAS`, aber es gibt auch die Optionen `WEBGL` und `AUTO`) und die optionale ID des DOM-Containers, in dem wir das Canvas platzieren möchten. Wenn im letzten Argument nichts angegeben oder das Element nicht gefunden wird, wird das Canvas dem \<body>-Tag hinzugefügt. Ohne das Framework würden Sie, um das Canvas-Element zur Seite hinzuzufügen, etwas wie das Folgende im \<body>-Tag schreiben müssen:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Das Wichtige, das es zu beachten gilt, ist, dass das Framework nützliche Methoden einrichtet, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die manuell viel schwieriger zu handhaben wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) lesen, um eine detaillierte Einführung in die grundlegenden Phaser-spezifischen Funktionen und Methoden zu erhalten.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite das Objekt, das wir ihm zuweisen möchten. Die `start` Methode startet den angegebenen Zustand und macht ihn aktiv. Sehen wir uns an, was die Zustände tatsächlich sind.

## Verwaltung der Spielzustände

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit dem Startknopf, `Howto` zeigt die "Wie man spielt"-Anweisungen und der `Game`-Zustand lässt Sie das Spiel wirklich spielen. Gehen wir schnell durch den Inhalt dieser Zustände.

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

Das Hauptobjekt `Ball` wird definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und Höhe des Spiel-Canvas sind — sie werden uns helfen, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets zu zeigen. Die `create`-Funktion enthält einige grundlegende Konfigurationen: Wir richten das Skalieren und die Ausrichtung des Canvas ein und wechseln zum `Preload`-Zustand, wenn alles bereit ist.

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

Es werden Einzelbilder, Spritesheets und Audiodateien vom Framework geladen. In diesem Zustand zeigt der `preloadBar` den Fortschritt auf dem Bildschirm. Der Fortschritt der geladenen Assets wird vom Framework mit einem Bild visualisiert. Mit jedem geladenen Asset können Sie mehr vom `preloadBar`-Bild sehen: von 0 % bis 100 %, aktualisiert bei jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels, in dem Sie durch Klicken auf den Knopf starten können.

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

Um einen neuen Button zu erstellen, gibt es die Methode `add.button` mit der folgenden Liste optionaler Argumente:

- Obere absolute Position auf dem Canvas in Pixeln.
- Linke absolute Position auf dem Canvas in Pixeln.
- Name des Bildassets, das der Button verwendet.
- Funktion, die ausgeführt wird, wenn jemand auf den Button klickt.
- Kontext der Ausführung.
- Frame aus dem Bildasset, das als "Hover"-Zustand des Buttons verwendet wird.
- Frame aus dem Bildasset, das als "Normal"- oder "Out"-Zustand des Buttons verwendet wird.
- Frame aus dem Bildasset, das als "Click"- oder "Down"-Zustand des Buttons verwendet wird.

Das `anchor.set` richtet den Ankerpunkt auf dem Button ein, für den alle Berechnungen der Position angewendet werden. In unserem Fall ist es in der Mitte von der linken Kante und am Anfang der oberen Kante verankert, sodass es ohne Kenntnis der Breite einfach horizontal auf dem Bildschirm zentriert werden kann.

Wenn der Startknopf gedrückt wird, zeigt das Spiel anstelle des direkten Einstiegs in das Geschehen den Bildschirm mit den Informationen, wie man das Spiel spielt.

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

Der `Howto`-Zustand zeigt vor Spielbeginn die Spielanweisungen auf dem Bildschirm. Nach einem Klick auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der `Game.js`-Datei ist der Ort, an dem die Magie passiert. Die gesamte Initialisierung erfolgt in der `create()`-Funktion (einmalig zu Beginn des Spiels gestartet). Danach erfordert einige Funktionalität weiteren Code zur Kontrolle — wir werden unsere eigenen Funktionen schreiben, um kompliziertere Aufgaben zu bewältigen. Besonders erwähnenswert ist die `update()`-Funktion (bei jedem Frame ausgeführt), die Dinge wie die Position der Kugel aktualisiert.

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

Die `create`- und `update`-Funktionen sind framework-spezifisch, während andere unsere eigenen Kreationen sind:

- `initLevels` initialisiert die Level-Daten.
- `showLevel` zeigt die Level-Daten auf dem Bildschirm an.
- `updateCounter` aktualisiert die beim Spielen jedes Levels verbrachte Zeit und protokolliert die gesamte im Spiel verbrachte Zeit.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton ein und aus.
- `wallCollision` wird ausgeführt, wenn die Kugel die Wände oder andere Objekte trifft.
- `handleOrientation` ist die an das Ereignis gebundene Funktion, die für die `Device Orientation API` verantwortlich ist und die Bewegungssteuerung ermöglicht, wenn das Spiel auf einem mobilen Gerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen der Kugel und ihrer Bewegungsmechanik

Gehen wir zunächst zur `create()`-Funktion, initialisieren das Ball-Objekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'`-Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für jegliche Physikberechnungen in die Mitte der Kugel, aktivieren die Arcade-Physik-Engine (die alle Bewegungsphysik der Kugel verarbeitet) und legen die Größe des Körpers für die Kollisionserkennung fest. Die `bounce`-Eigenschaft wird verwendet, um die Rückprallfähigkeit der Kugel festzulegen, wenn sie die Hindernisse trifft.

#### Steuerung der Kugel

Es ist cool, die Kugel im Spielbereich herumwerfen zu können, aber es ist auch wichtig, sie tatsächlich bewegen zu können! Nun werden wir die Fähigkeit hinzufügen, die Kugel mit der Tastatur auf den Desktop-Geräten zu steuern, und dann gehen wir zur Implementierung der `Device Orientation API` über. Konzentrieren wir uns zunächst auf die Tastatur, indem wir das Folgende zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen können, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten zum Spielen gibt: oben, unten, links und rechts.

Als nächstes fügen wir den folgenden Code zur `update()`-Funktion hinzu, damit er bei jedem Frame ausgelöst wird. Das `this.keys`-Objekt wird gegen die Eingabe des Spielers überprüft, sodass die Kugel entsprechend mit der vordefinierten Kraft reagieren kann:

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

Auf diese Weise können wir überprüfen, welche Taste im gegebenen Frame gedrückt wird, und die definierte Kraft auf die Kugel anwenden, um die Geschwindigkeit in die richtige Richtung zu erhöhen.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist seine Nutzung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die die Kugel rollen soll. Hier ist der Code aus der `create()`-Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Ereignisbeobachter für das `"deviceorientation"`-Ereignis hinzu und binden die `handleOrientation`-Funktion, die so aussieht:

```js
handleOrientation(e) {
  const x = e.gamma;
  const y = e.beta;
  Ball._player.body.velocity.x += x;
  Ball._player.body.velocity.y += y;
},
```

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf die Kugel ausgeübt, sodass sie schneller bewegt wird (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit der Cyber Orb-Demo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, die Kugel von der Startposition zur Endposition zu bringen: ein Loch im Boden. Die Implementierung sieht sehr ähnlich zu dem Teil aus, an dem wir die Kugel erstellt haben, und wird ebenfalls in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass der Körper unseres Lochs nicht bewegt wird, wenn wir es mit der Kugel treffen und die Kollisionserkennung berechnet wird (darüber wird später in diesem Artikel diskutiert).

#### Aufbau des Blocklabyrinths

Um das Spiel schwieriger und interessanter zu gestalten, fügen wir einige Hindernisse zwischen der Kugel und dem Ausgang hinzu. Wir könnten einen Level-Editor verwenden, aber für den Zweck dieses Leitfadens lassen Sie uns etwas Eigenes kreieren.

Um die Blockinformationen zu speichern, verwenden wir ein Level-Daten-Array: Für jeden Block speichern wir die obere und linke absolute Position in Pixeln (`x` und `y`) und den Typ des Blocks - horizontal oder vertikal (`t` mit dem Wert `'w'` für Breite und `'h'` für Höhe). Dann laden wir das Level, indem wir die Daten parsen und die spezifischen Blöcke für dieses Level anzeigen. In der `initLevels`-Funktion haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit einer `x`- und `y`-Position und einem `t`-Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels`-Funktion, fügen wir die Blöcke in einem Array in der `for`-Schleife unter Verwendung einiger framework-spezifischer Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe gesetzt, um physikalische Berechnungen zu ermöglichen. Die `newLevel.create`-Methode erstellt neue Elemente in der Gruppe mit Startpositionen von links und oben und ihrem eigenen Bild. Wenn Sie nicht durch die Liste der Elemente erneut durchgehen möchten, um jedem einzelnen explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` für eine Gruppe verwenden, um sie auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels`-Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Levels zu laden, stellen wir sicher, dass die vorherigen Levels verborgen sind und das aktuelle angezeigt wird:

```js
showLevel(level) {
  const lvl = level | this.level;
  if (this.levels[lvl - 2]) {
    this.levels[lvl - 2].visible = false;
  }
  this.levels[lvl - 1].visible = true;
}
```

Dank dessen bietet das Spiel dem Spieler eine Herausforderung - jetzt müssen sie die Kugel über das Spielfeld rollen und sie durch das aus den Blöcken gebaute Labyrinth führen. Es ist nur ein Beispiel für das Laden der Level, und es gibt nur 5 davon, um die Idee zu veranschaulichen, aber Sie können daran arbeiten, das auf eigene Faust zu erweitern.

#### Kollisionserkennung

An diesem Punkt haben wir die Kugel, die vom Spieler gesteuert wird, das Loch, das erreicht werden muss, und die Hindernisse, die den Weg blockieren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionserkennung, daher passiert nichts, wenn die Kugel die Blöcke trifft — sie geht einfach hindurch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework die Berechnung der Kollisionserkennung übernimmt, wir müssen nur die kollidierenden Objekte in der `update()`-Funktion spezifizieren:

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

Dies teilt dem Framework mit, die `wallCollision`-Funktion auszuführen, wenn die Kugel irgendeine der Wände trifft. Wir können die `wallCollision`-Funktion verwenden, um jede Funktionalität hinzuzufügen, die wir möchten, wie das Abspielen des Aufprallgeräuschs und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorab geladenen Assets befand sich eine Tonspur (in verschiedenen Formaten für die Browser-Kompatibilität), die wir jetzt verwenden können. Zuerst muss sie in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also die Sounds im Spiel aktiviert sind), können wir ihn in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Sounds ist mit Phaser einfach.

#### Implementierung der Vibration API

Wenn die Kollisionserkennung wie erwartet funktioniert, lassen Sie uns einige Spezialeffekte mit Hilfe der Vibration API hinzufügen.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit der Cyber Orb-Demo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, sie in unserem Fall zu nutzen, ist, das Telefon jedes Mal vibrieren zu lassen, wenn die Kugel die Wände trifft — innerhalb der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt wird und im `window.navigator`-Objekt verfügbar ist, vibriert das Telefon für 100 Millisekunden. Das war's!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, werden wir die verstrichene Zeit speichern — Spieler können dann versuchen, ihre beste Spielzeit zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, um die tatsächlich seit Spielbeginn verstrichene Anzahl an Sekunden zu speichern, und sie dem Spieler im Spiel anzeigen. Lassen Sie uns zuerst die Variablen in der `create`-Funktion definieren:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Dann können wir unmittelbar danach die notwendigen Textobjekte initialisieren, um dem Benutzer diese Informationen anzuzeigen:

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

Wir definieren die obere und linke Position der Texte, den Inhalt, der angezeigt wird, und das auf den Text angewendete Styling. Wir haben dies auf dem Bildschirm angezeigt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, ebenfalls in der `create`-Funktion, wird die `updateCounter`-Funktion jede einzelne Sekunde ab Spielbeginn ausführen, sodass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter`-Funktion aus:

```js
updateCounter() {
  this.timer++;
  this.timerText.setText(`Time: ${this.timer}`);
  this.totalTimeText.setText(`Total time: ${this.totalTimer+this.timer}`);
},
```

Wie Sie sehen, erhöhen wir die `this.timer`-Variable und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten bei jeder Iteration, sodass der Spieler die verstrichene Zeit sieht.

#### Abschließen des Levels und des Spiels

Die Kugel rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das erreicht werden muss. Richten wir nun die Möglichkeit ein, das Level tatsächlich abzuschließen! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn die Kugel das Loch erreicht.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die zuvor erklärte `collide`-Methode. Wenn sich die Kugel mit dem Loch überschneidet (anstatt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

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

Wenn das aktuelle Level gleich der maximalen Anzahl an Levels ist (in diesem Fall 5), dann ist das Spiel beendet — Sie erhalten eine Glückwunschmeldung zusammen mit der Anzahl der Sekunden, die während des gesamten Spiels verstrichen sind, und einem Knopf, der Sie zum Hauptmenü führt.

Wenn das aktuelle Level kleiner als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist lediglich eine funktionierende Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Wir könnten beispielsweise Power-Ups zum Einsammeln hinzufügen, die unsere Kugel schneller rollen lassen, den Timer für ein paar Sekunden stoppen oder der Kugel besondere Kräfte verleihen, um Hindernisse zu durchdringen. Es gibt auch Platz für Fallen, die die Kugel verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Levels mit zunehmendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für unterschiedliche Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieser Leitfaden hilft Ihnen, in die 2D-Spieleentwicklung einzutauchen und inspiriert Sie, selbst großartige Spiele zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und sich den [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) ansehen.

HTML bietet uns rohe Werkzeuge, die darauf aufgebauten Frameworks werden immer schneller und besser, daher ist jetzt eine großartige Zeit, um in die Webspiele-Entwicklung einzusteigen. In diesem Leitfaden haben wir Phaser verwendet, aber es gibt eine Reihe [anderer Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die es ebenfalls wert sind, in Erwägung gezogen zu werden, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Ihren Programmierfähigkeiten (oder dem Fehlen davon), dem Umfang des Projekts, Anforderungen und anderen Aspekten ab. Sie sollten sich alle ansehen und entscheiden, welches am besten zu Ihren Bedürfnissen passt.
