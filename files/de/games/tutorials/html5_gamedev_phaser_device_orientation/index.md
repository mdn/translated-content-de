---
title: 2D-Labyrinth-Spiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{GamesSidebar}}

In diesem Tutorial werden wir den Prozess zum Erstellen eines mobilen HTML-Spiels durchgehen, das die **APIs** [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) verwendet, um das Gameplay zu verbessern. Es wird mit dem [Phaser](https://phaser.io/) Framework erstellt. Grundlegende JavaScript-Kenntnisse werden empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials haben Sie ein voll funktionsfähiges Demospiel: [Cyber Orb](https://orb.enclavegames.com/). Es wird in etwa so aussehen:

![Ein 2D-Spielbrett mit einer kleinen gelben Kugel. Es gibt ein großes schwarzes Loch, in das die Kugel entkommen kann, und eine Reihe von Barrieren, die die Kugel am Entkommen hindern.](cyber-orb.png)

## Phaser-Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von Desktop- und mobilen HTML-Spielen. Es ist noch relativ neu, wächst aber dank der leidenschaftlichen Community, die am Entwicklungsprozess beteiligt ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) ansehen, wo es Open Source ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und die umfangreiche Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser-Framework bietet Ihnen eine Reihe von Tools, die die Entwicklung beschleunigen und allgemeine Aufgaben, die zum Fertigstellen des Spiels erforderlich sind, erleichtern, sodass Sie sich auf die Spielidee selbst konzentrieren können.

## Projektstart

Den [Quellcode von Cyber Orb](https://github.com/EnclaveGames/Cyber-Orb) finden Sie auf GitHub. Die Ordnerstruktur ist ziemlich einfach: Der Startpunkt ist die Datei `index.html`, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, um das Spiel darauf anzuzeigen.

![Screenshot des GitHub-Repositories mit dem Code des Cyber Orb-Spiels, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und es auszuprobieren. Es gibt auch drei Ordner im Verzeichnis:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien, in denen der gesamte Quellcode des Spiels definiert ist.
- `audio`: Die im Spiel verwendeten Audiodateien.

## Einrichten des Canvas

Wir werden unser Spiel auf dem Canvas rendern, aber dies nicht manuell tun — das wird vom Framework übernommen. Lassen Sie uns das einrichten: Unser Startpunkt ist die `index.html` Datei mit folgendem Inhalt. Sie können diese selbst erstellen, wenn Sie mitmachen möchten:

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

Bis jetzt haben wir eine einfache HTML-Website mit einigen grundlegenden Inhalten im `<head>`-Bereich: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser-Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile wird die Phaser-Instanz initialisieren — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Rendering-Methode (wir verwenden `CANVAS`, aber es gibt auch die Optionen `WEBGL` und `AUTO`) und die optionale ID des DOM-Containers, in den wir das Canvas einfügen möchten. Wenn im letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird das Canvas dem `<body>`-Tag hinzugefügt. Ohne das Framework müssten Sie, um das Canvas-Element zur Seite hinzuzufügen, so etwas innerhalb des `<body>`-Tags schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Es ist wichtig, sich zu merken, dass das Framework nützliche Methoden bereitstellt, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die manuell viel schwieriger zu handhaben wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) lesen, um eine ausführliche Einführung in die grundlegenden Phaser-spezifischen Funktionen und Methoden zu erhalten.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands, und der zweite Wert ist das Objekt, das wir diesem zuweisen möchten. Die `start`-Methode startet den angegebenen Zustand und aktiviert ihn. Sehen wir uns an, was die Zustände tatsächlich sind.

## Verwaltung der Spielzustände

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich darum, einige Einstellungen zu initialisieren, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit der Starttaste, `Howto` zeigt die Anleitungen zum Spielen an und im `Game`-Zustand können Sie das Spiel tatsächlich spielen. Gehen wir kurz durch den Inhalt dieser Zustände.

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

Das Hauptobjekt `Ball` wird definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und Höhe des Spiel-Canvas darstellen — sie werden uns helfen, die Elemente auf dem Bildschirm zu positionieren. Zuerst laden wir zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets anzuzeigen. Die `create`-Funktion enthält einige grundlegende Konfigurationen: Wir richten das Skalieren und die Ausrichtung des Canvas ein und wechseln zum `Preload`-Zustand, wenn alles bereit ist.

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

Es werden einzelne Bilder, Spritesheets und Audiodateien vom Framework geladen. In diesem Zustand zeigt der `preloadBar` den Fortschritt auf dem Bildschirm an. Dieser Fortschritt der geladenen Assets wird vom Framework mit Hilfe eines Bildes visualisiert. Mit jedem geladenen Asset können Sie mehr vom `preloadBar`-Bild sehen: von 0 % bis 100 %, aktualisiert bei jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels an, in dem Sie durch Klicken auf die Schaltfläche spielen können.

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

Um eine neue Schaltfläche zu erstellen, gibt es die Methode `add.button` mit der folgenden Liste optionaler Argumente:

- Obere absolute Position auf dem Canvas in Pixeln.
- Linke absolute Position auf dem Canvas in Pixeln.
- Name des Bild-Assets, das die Schaltfläche verwendet.
- Funktion, die ausgeführt wird, wenn jemand auf die Schaltfläche klickt.
- Ausführungskontext.
- Frame aus dem Bild-Asset, das als "Hover"-Zustand der Schaltfläche verwendet wird.
- Frame aus dem Bild-Asset, das als "Normal"- oder "Out"-Zustand der Schaltfläche verwendet wird.
- Frame aus dem Bild-Asset, das als "Click"- oder "Down"-Zustand der Schaltfläche verwendet wird.

Das `anchor.set` richtet den Ankerpunkt auf der Schaltfläche ein, auf den sich alle Positionsberechnungen beziehen. In unserem Fall ist er horizontal mittig verankert, sodass er einfach horizontal auf dem Bildschirm zentriert werden kann, ohne seine Breite zu kennen.

Wenn die Starttaste gedrückt wird, zeigt das Spiel statt direkt in die Aktion zurückzuspringen den Bildschirm mit den Informationen darüber, wie man das Spiel spielt.

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

Der `Howto`-Zustand zeigt die Spielanleitungen auf dem Bildschirm an, bevor das Spiel beginnt. Nach einem Klick auf den Bildschirm wird das tatsächliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der Datei `Game.js` ist, wo die gesamte Magie passiert. Alle Initialisierungen sind in der `create()`-Funktion (einmalig zu Spielbeginn aufgerufen) enthalten. Danach erfordert einige Funktionalität zusätzlichen Code zur Steuerung — wir werden unsere eigenen Funktionen schreiben, um kompliziertere Aufgaben zu handhaben. Besonders erwähnenswert ist die `update()`-Funktion (bei jedem Frame ausgeführt), die Dinge wie die Ballposition aktualisiert.

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

Die Funktionen `create` und `update` sind framework-spezifisch, während andere unsere eigenen Kreationen sein werden:

- `initLevels` initialisiert die Leveldaten.
- `showLevel` zeigt die Leveldaten auf dem Bildschirm an.
- `updateCounter` aktualisiert die Zeit, die für jedes Level gespielt wurde, und zeichnet die insgesamt für das Spiel aufgewendete Zeit auf.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton ein und aus.
- `wallCollision` wird ausgeführt, wenn der Ball die Wände oder andere Objekte trifft.
- `handleOrientation` ist die Funktion, die an das Ereignis gebunden ist, das für die Device Orientation API verantwortlich ist und die Bewegungssteuerung bereitstellt, wenn das Spiel auf einem mobilen Gerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Zuerst gehen wir zur `create()`-Funktion, initialisieren das Ballobjekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'`-Bild aus den geladenen Grafik-Assets. Wir setzen auch den Ankerpunkt für physikalische Berechnungen in die Mitte des Balls, aktivieren die Arcade-Physik-Engine (die alle physikalischen Bewegungen des Balls handhabt) und legen die Größe des Körpers für die Kollisionsberechnung fest. Die `bounce`-Eigenschaft wird verwendet, um die Sprungkraft des Balls festzulegen, wenn er auf Hindernisse trifft.

#### Steuerung des Balls

Es ist cool, den Ball bereit zu haben, um auf dem Spielfeld herumgeworfen zu werden, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Nun werden wir die Möglichkeit hinzufügen, den Ball mit der Tastatur auf Desktop-Geräten zu steuern, und dann zur Implementierung der Device Orientation API übergehen. Konzentrieren wir uns zuerst auf die Tastatursteuerung, indem wir Folgendes zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen können, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten zur Verfügung stellt: oben, unten, links und rechts.

Als nächstes fügen wir den folgenden Code zur `update()`-Funktion hinzu, der bei jedem Frame ausgeführt wird. Das `this.keys`-Objekt wird mit der Spielereingabe abgeglichen, sodass der Ball entsprechend mit der vordefinierten Kraft reagieren kann:

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

Auf diese Weise können wir überprüfen, welche Taste im gegebenen Frame gedrückt ist, und die definierte Kraft auf den Ball anwenden, um die Geschwindigkeit in die richtige Richtung zu erhöhen.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Nutzung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die der Ball rollen soll. Hier ist der Code, der in der `create()`-Funktion dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Event-Listener für das Ereignis `"deviceorientation"` hinzu und binden die `handleOrientation` Funktion, die so aussieht:

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

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf den Ball ausgeübt, wodurch er sich schneller bewegt (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, den Ball von der Startposition zur Endposition zu bewegen: ein Loch im Boden. Die Implementierung sieht dem Teil, in dem wir den Ball erstellt haben, sehr ähnlich und wird ebenfalls in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass der Körper unseres Lochs sich nicht bewegt, wenn wir ihn mit dem Ball treffen, und die Kollisionsberechnung durchgeführt wird (worüber später in diesem Artikel gesprochen wird).

#### Bau des Blocklabyrinths

Um das Spiel schwieriger und interessanter zu gestalten, werden wir einige Hindernisse zwischen dem Ball und dem Ausgang hinzufügen. Wir könnten einen Level-Editor verwenden, aber für den Zweck dieses Tutorials lassen Sie uns etwas Eigenes erstellen.

Um die Blockinformationen zu speichern, verwenden wir ein Level-Datenarray: Für jeden Block speichern wir die obere und linke absolute Position in Pixeln (`x` und `y`) und die Art des Blocks — horizontal oder vertikal (`t` mit dem `'w'`-Wert für Breite und `'h'` für Höhe). Dann, um das Level zu laden, parsen wir die Daten und zeigen die spezifischen Blöcke für dieses Level an. In der Funktion `initLevels` haben wir:

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

Jedes Arrays-Element enthält eine Sammlung von Blöcken mit einer `x`- und `y`-Position und einem `t`-Wert für jeden. Nachdem `levelData`, aber immer noch in der Funktion `initLevels`, fügen wir die Blöcke in einem Array in der `for`-Schleife unter Verwendung einiger framework-spezifischer Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe festgelegt, um physikalische Berechnungen zu ermöglichen. Die Methode `newLevel.create` erstellt neue Elemente in der Gruppe mit Anfangspositionen links und oben sowie einem eigenen Bild. Wenn Sie nicht durch die Liste der Elemente erneut gehen möchten, um jeder einzelnen explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um es auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im Array `this.levels` gespeichert, welches standardmäßig unsichtbar ist. Um spezifische Level zu laden, vergewissern wir uns, dass die vorherigen Level ausgeblendet sind, und zeigen das aktuelle an:

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

Dank dessen bietet das Spiel dem Spieler eine Herausforderung – jetzt müssen sie den Ball über das Spielfeld rollen und durch das aus Blöcken gebaute Labyrinth führen. Es ist nur ein Beispiel dafür, wie die Level geladen werden, und es gibt nur 5 davon, um die Idee zu veranschaulichen, aber Sie können selbst daran arbeiten, dies zu erweitern.

#### Kollisionsdetektion

Zu diesem Zeitpunkt haben wir den Ball, der vom Spieler gesteuert wird, das Loch, das erreicht werden muss, und die Hindernisse, die den Weg blockieren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionsdetektion, sodass nichts passiert, wenn der Ball die Blöcke trifft — er geht einfach durch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework die Berechnung für die Kollisionsdetektion übernimmt, wir müssen nur die kollidierenden Objekte in der `update()`-Funktion spezifisch festlegen:

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

Das teilt dem Framework mit, die `wallCollision`-Funktion auszuführen, wenn der Ball auf eine der Wände trifft. Wir können die `wallCollision`-Funktion verwenden, um jede gewünschte Funktionalität hinzuzufügen, wie das Abspielen des Aufprallgeräusches und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorgeladenen Assets befand sich eine Audiospur (in verschiedenen Formaten für die Browser-Kompatibilität), die wir jetzt verwenden können. Diese muss zuerst in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (d.h. die Geräusche im Spiel sind aktiviert), können wir sie in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Geräusche ist mit Phaser einfach.

#### Implementierung der Vibration API

Wenn die Kollisionsdetektion wie erwartet funktioniert, lassen Sie uns ein paar spezielle Effekte mit Hilfe der Vibration API hinzufügen.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, diese in unserem Fall zu verwenden, besteht darin, das Telefon jedes Mal vibrieren zu lassen, wenn der Ball die Wände trifft — innerhalb der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt wird und im `window.navigator`-Objekt verfügbar ist, vibriert das Telefon für 100 Millisekunden. Das war's!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, speichern wir die verstrichene Zeit — die Spieler können dann versuchen, ihre beste Spielzeit zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, um die tatsächliche Anzahl der Sekunden zu speichern, die seit Spielbeginn vergangen sind, und diese dem Spieler im Spiel anzeigen. Lassen Sie uns zuerst die Variablen in der `create`-Funktion definieren:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Anschließend können wir die notwendigen Textobjekte initialisieren, um diese Informationen dem Benutzer anzuzeigen:

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

Wir definieren die oberen und linken Positionen des Textes, den Inhalt, der angezeigt wird, und das auf den Text angewendete Styling. Wir haben dies auf dem Bildschirm gedruckt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, auch in der `create`-Funktion, wird die `updateCounter`-Funktion jede Sekunde vom Spielbeginn ausführen, sodass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter`-Funktion aus:

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

Wie Sie sehen, erhöhen wir die Variable `this.timer` und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten bei jeder Iteration, sodass der Spieler die verstrichene Zeit sieht.

#### Abschluss des Levels und des Spiels

Der Ball rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Lassen Sie uns nun die Möglichkeit einrichten, das Level tatsächlich abzuschließen! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn der Ball das Loch erreicht.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die zuvor erklärte `collide`-Methode. Wenn der Ball mit dem Loch überlappt (statt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

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

Wenn das aktuelle Level gleich der maximalen Anzahl von Levels ist (in diesem Fall 5), dann ist das Spiel beendet — Sie erhalten eine Glückwunschmeldung zusammen mit der Anzahl der verstrichenen Sekunden im gesamten Spiel und einer Schaltfläche, die Sie zurück zum Hauptmenü führt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist lediglich eine funktionierende Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Man kann zum Beispiel Power-ups hinzufügen, die man entlang des Weges einsammelt und die den Ball schneller rollen lassen, den Timer für ein paar Sekunden anhalten oder dem Ball besondere Kräfte geben, um durch Hindernisse hindurchzugehen. Es gibt auch Platz für Fallen, die den Ball verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Levels mit steigendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für unterschiedliche Aktionen im Spiel implementieren. Die Möglichkeiten sind endlos – sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial hilft Ihnen dabei, in die 2D-Spieleentwicklung einzusteigen und inspiriert Sie, großartige Spiele selbst zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und sich dessen [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) ansehen.

HTML bietet uns rohe Werkzeuge, die darauf aufgebauten Frameworks werden schneller und besser, daher ist jetzt eine großartige Zeit, um in die Web-Spieleentwicklung einzusteigen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die ebenfalls in Betracht gezogen werden sollten, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Ihren Programmierkenntnissen (oder deren Fehlen), dem Umfang des Projekts, den Anforderungen und anderen Aspekten ab. Sie sollten sie alle ausprobieren und entscheiden, welches am besten zu Ihren Bedürfnissen passt.
