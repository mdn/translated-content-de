---
title: 2D-Labyrinthspiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

In diesem Tutorial werden wir den Prozess des Erstellens eines HTML-Mobilspiels durchgehen, das die [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) **APIs** verwendet, um das Spielerlebnis zu verbessern. Das Spiel wird mit dem [Phaser](https://phaser.io/) Framework entwickelt. Grundlegende JavaScript-Kenntnisse werden empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials haben Sie ein voll funktionsfähiges Demo-Spiel: [Cyber Orb](https://orb.enclavegames.com/). Es wird etwa so aussehen:

![Ein 2D-Spielbrett mit einer kleinen gelben Kugel. Es gibt ein großes schwarzes Loch, in das die Kugel entkommen kann, und eine Anzahl von Barrieren, die die Kugel am Entkommen hindern.](cyber-orb.png)

## Phaser Framework

[Phaser](https://phaser.io/) ist ein Framework zur Erstellung von Desktop- und mobilen HTML-Spielen. Es ist noch relativ neu, wächst aber dank der engagierten Community, die am Entwicklungsprozess beteiligt ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) ansehen, wo es Open-Source ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und sich die große Sammlung von [Beispielen](https://labs.phaser.io/) ansehen. Das Phaser-Framework bietet Ihnen eine Reihe von Werkzeugen, die die Entwicklung beschleunigen und generische Aufgaben, die zum Fertigstellen des Spiels erforderlich sind, erledigen, sodass Sie sich auf die eigentliche Spielidee konzentrieren können.

## Projektstart

Sie können den [Cyber Orb Quellcode](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub ansehen. Die Ordnerstruktur ist recht übersichtlich: Der Ausgangspunkt ist die `index.html`-Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, um das Spiel darauf zu rendern.

![Screenshot des GitHub-Repositories mit dem Cyber Orb-Spielcode, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Index-Datei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und auszuprobieren. Es gibt auch drei Ordner im Verzeichnis:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels.
- `audio`: Die im Spiel verwendeten Sounddateien.

## Einrichten des Canvas

Wir werden unser Spiel auf dem Canvas rendern, aber wir werden dies nicht manuell tun — das wird vom Framework übernommen. Lassen Sie es uns einrichten: Unser Ausgangspunkt ist die `index.html`-Datei mit dem folgenden Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen wollen:

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

Bisher haben wir eine einfache HTML-Website mit einigen grundlegenden Inhalten im `<head>`-Abschnitt: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser-Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile initialisiert die Phaser-Instanz — die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Rendering-Methode (wir verwenden `CANVAS`, aber es gibt auch `WEBGL` und `AUTO`) und die optionale ID des DOM-Containers, in den wir das Canvas einfügen möchten. Wenn in diesem letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird das Canvas dem `<body>`-Tag hinzugefügt. Ohne das Framework müssten Sie etwas wie dies im `<body>`-Tag schreiben, um das Canvas-Element zur Seite hinzuzufügen:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Wichtig ist zu wissen, dass das Framework hilfreiche Methoden bereitstellt, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die manuell viel schwieriger wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) lesen, um eine detaillierte Einführung in die Basisfunktionen und -methoden von Phaser zu erhalten.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die Methode `start` startet den angegebenen Zustand und macht ihn aktiv. Sehen wir uns nun an, was die Zustände tatsächlich machen.

## Spielzustände verwalten

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audios, `MainMenu` ist das Menü mit der Starttaste, `Howto` zeigt die "Spielanleitung" und der `Game`-Zustand lässt Sie das Spiel tatsächlich spielen. Lassen Sie uns den Inhalt dieser Zustände schnell durchgehen.

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

Das Hauptobjekt `Ball` wird definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, wobei es sich um die Breite und Höhe des Spiel-Canvas handelt — diese helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt des Ladens aller anderen Assets anzuzeigen. Die `create`-Funktion enthält einige grundlegende Konfigurationen: Wir richten die Skalierung und Ausrichtung des Canvas ein und wechseln zum `Preload`-Zustand, wenn alles fertig ist.

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

Es werden einzelne Bilder, Spritesheets und Audiodateien vom Framework geladen. In diesem Zustand zeigt die `preloadBar` den Fortschritt auf dem Bildschirm an. Dieser Fortschritt der geladenen Assets wird vom Framework mit einem Bild visualisiert. Mit jedem geladenen Asset sehen Sie mehr von dem `preloadBar`-Bild: von 0 % bis 100 %, aktualisiert bei jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels, in dem Sie das Spielen durch Klicken auf den Button starten können.

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

Um einen neuen Button zu erstellen, gibt es die `add.button`-Methode mit folgender Liste optionaler Argumente:

- Obere absolute Position auf dem Canvas in Pixeln.
- Linke absolute Position auf dem Canvas in Pixeln.
- Name des Bilder-Assets, das der Button verwendet.
- Funktion, die ausgeführt wird, wenn jemand den Button klickt.
- Der Ausführungskontext.
- Frame aus dem Bilder-Asset, das als "Hover"-Zustand des Buttons verwendet wird.
- Frame aus dem Bilder-Asset, das als "Normal"- oder "Out"-Zustand des Buttons verwendet wird.
- Frame aus dem Bilder-Asset, das als "Klick"- oder "Down"-Zustand des Buttons verwendet wird.

Das `anchor.set` richtet den Ankerpunkt auf dem Button ein, für den alle Berechnungen der Position angewendet werden. In unserem Fall ist es halb ausgehend vom linken Rand und am Anfang des oberen Randes verankert, sodass es leicht horizontal zentriert auf dem Bildschirm ohne Kenntnis seiner Breite sein kann.

Wenn der Start-Button gedrückt wird, zeigt das Spiel statt direkt ins Geschehen zu springen einen Bildschirm mit Informationen zur Spielweise an.

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

Der `Howto`-Zustand zeigt die Spielanweisungen auf dem Bildschirm an, bevor das Spiel gestartet wird. Nach dem Klicken auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der `Game.js`-Datei ist, wo all die Magie passiert. Die gesamte Initialisierung ist in der `create()`-Funktion (einmal zu Beginn des Spiels aufgerufen). Danach erfordert einige Funktionalität weiteren Code zur Steuerung — wir werden unsere eigenen Funktionen schreiben, um kompliziertere Aufgaben zu erledigen. Besonders hervorzuheben ist die `update()`-Funktion (wird bei jedem Frame ausgeführt), die Dinge wie die Position der Kugel aktualisiert.

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

Die `create`- und `update`-Funktionen sind frameworkspezifisch, während andere von uns selbst erstellt werden:

- `initLevels` initialisiert die Leveldaten.
- `showLevel` zeigt die Leveldaten auf dem Bildschirm an.
- `updateCounter` aktualisiert die im Level verbrachte Zeit und zeichnet die insgesamt verbrachte Spielzeit auf.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton ein und aus.
- `wallCollision` wird ausgeführt, wenn die Kugel die Wände oder andere Objekte trifft.
- `handleOrientation` ist die Funktion, die an das Ereignis gebunden ist, das für die Device Orientation API verantwortlich ist und die Steuerung durch Bewegung ermöglicht, wenn das Spiel auf einem mobilen Gerät mit geeigneter Hardware ausgeführt wird.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen der Kugel und ihrer Bewegung

Zuerst gehen wir in die `create()`-Funktion, initialisieren das Ballobjekt selbst und weisen ihm ein paar Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir ein Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'`-Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für alle physikalischen Berechnungen in die Mitte des Balls, aktivieren die Arcade-Physik-Engine (die alle Physik für die Ballbewegung bearbeitet), und setzen die Größe des Körpers für die Kollisionserkennung. Die `bounce`-Eigenschaft wird verwendet, um die Rückpralleigenschaft des Balls zu setzen, wenn er auf die Hindernisse trifft.

#### Steuerung der Kugel

Es ist cool, den Ball bereit zu haben, um im Spielbereich herumgeschleudert zu werden, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Jetzt werden wir die Möglichkeit hinzufügen, die Kugel mit der Tastatur auf den Desktop-Geräten zu steuern, und dann werden wir zur Implementierung der Device Orientation API übergehen. Lassen Sie uns zuerst auf die Tastatur konzentrieren, indem wir die folgende Funktion der `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen können, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten gibt, mit denen wir spielen: oben, unten, links und rechts.

Als nächstes werden wir den folgenden Code zur `update()`-Funktion hinzufügen, sodass sie bei jedem Frame ausgeführt wird. Das `this.keys`-Objekt wird gegen die Eingabe der Spieler überprüft, sodass der Ball entsprechend mit der vordefinierten Kraft reagiert:

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

Auf diese Weise können wir überprüfen, welche Taste in dem gegebenen Frame gedrückt wird, und die definierte Kraft auf den Ball anwenden, um die Geschwindigkeit in die richtige Richtung zu erhöhen.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Nutzung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die Sie die Kugel rollen möchten. Hier ist der Code aus der `create()`-Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Ereignislistener für das `"deviceorientation"`-Ereignis hinzu und binden die `handleOrientation`-Funktion, die so aussieht:

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

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf die Kugel angewendet, sodass sie sich schneller bewegt (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit dem Cyber Orb-Spieledemo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, die Kugel von der Startposition zur Endposition zu bewegen: einem Loch im Boden. Die Implementierung sieht sehr ähnlich aus wie der Teil, in dem wir die Kugel erstellt haben, und wird ebenfalls der `create()`-Funktion unseres `Game`-Zustandes hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass der Körper unseres Lochs sich nicht bewegt, wenn wir es mit der Kugel treffen, und die Kollisionserkennung berechnet wird (worüber später in diesem Artikel gesprochen wird).

#### Erstellung des Blocklabyrinths

Um das Spiel schwieriger und interessanter zu machen, werden wir einige Hindernisse zwischen die Kugel und den Ausgang hinzufügen. Wir könnten einen Level-Editor verwenden, aber um den Zweck dieses Tutorials zu erfüllen, erstellen wir etwas Eigenes.

Um die Blockinformationen zu halten, verwenden wir ein Leveldaten-Array: Für jeden Block speichern wir die oberen und linken absoluten Positionen in Pixeln (`x` und `y`) und den Typ des Blocks — horizontal oder vertikal (`t` mit dem `'w'`-Wert, der Breite bedeutet, und `'h'`, der Höhe bedeutet). Dann parsen wir die Daten, um den Level zu laden, und zeigen die spezifischen Blöcke für diesen Level an. In der `initLevels`-Funktion haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit einer `x` und `y`-Position und einem `t`-Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels`-Funktion, fügen wir die Blöcke in einem Array in der `for`-Schleife unter Verwendung einiger frameworkspezifischer Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe festgelegt, um physikalische Berechnungen zu aktivieren. Die `newLevel.create`-Methode erstellt neue Elemente in der Gruppe mit den Startpositionen links und oben und ihrem eigenen Bild. Wenn Sie nicht die Liste der Elemente erneut durchgehen möchten, um explizit jedem einzelnen eine Eigenschaft hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um es auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels`-Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Level zu laden, stellen wir sicher, dass die vorherigen Level ausgeblendet sind und zeigen das aktuelle an:

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

Dank dessen bietet das Spiel dem Spieler eine Herausforderung - jetzt müssen sie die Kugel über den Spielbereich rollen und durch das Labyrinth aus Blöcken leiten. Es ist nur ein Beispiel für das Laden der Level und es gibt nur 5, um die Idee zu veranschaulichen, aber Sie können daran arbeiten, das selbstständig zu erweitern.

#### Kollisionserkennung

An diesem Punkt haben wir die Kugel, die vom Spieler kontrolliert wird, das Loch zu erreichen und die Hindernisse, die den Weg blockieren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionserkennung, daher passiert nichts, wenn die Kugel die Blöcke trifft — sie geht einfach durch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework die Kollisionserkennung berechnet, wir müssen nur die kollidierenden Objekte in der `update()`-Funktion angeben:

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

Damit wird das Framework angewiesen, die `wallCollision`-Funktion auszuführen, wenn die Kugel eine der Wände trifft. Wir können die `wallCollision`-Funktion verwenden, um jegliche Funktionalität hinzuzufügen, die wir möchten, beispielsweise das Abspielen des Aufprallgeräuschs und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorab geladenen Assets befand sich eine Audio-Tracks (in verschiedenen Formaten für die Browser-Kompatibilität), die wir jetzt verwenden können. Sie muss zuerst in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (d.h. die Geräusche im Spiel sind aktiviert), können wir es in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Geräusche ist mit Phaser einfach.

#### Implementierung der Vibration API

Wenn die Kollisionserkennung erwartungsgemäß funktioniert, fügen wir mit Hilfe der Vibration API einige Spezialeffekte hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit dem Cyber Orb-Spieledemo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, sie in unserem Fall zu nutzen, ist, das Gerät jedes Mal vibrieren zu lassen, wenn die Kugel die Wände trifft — innerhalb der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt wird und im `window.navigator`-Objekt verfügbar ist, lassen Sie das Gerät 100 Millisekunden lang vibrieren. Das war's!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, werden wir die verstrichene Zeit speichern — die Spieler können dann versuchen, ihre beste Spielzeit zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, um die tatsächliche Anzahl der seit Spielbeginn vergangenen Sekunden zu speichern und sie dem Spieler im Spiel anzuzeigen. Lassen Sie uns zuerst die Variablen in der `create`-Funktion definieren:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Dann können wir direkt danach die notwendigen Textobjekte initialisieren, um diese Informationen für den Benutzer anzuzeigen:

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

Wir definieren die oberen und linken Positionen des Textes, den angezeigten Inhalt und das angewendete Styling für den Text. Wir haben dies auf dem Bildschirm angezeigt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, ebenfalls in der `create`-Funktion, führt die `updateCounter`-Funktion jede Sekunde seit Spielbeginn aus, sodass wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter`-Funktion aus:

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

Wie Sie sehen, inkrementieren wir die `this.timer`-Variable und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten bei jeder Iteration, sodass der Spieler die verstrichene Zeit sieht.

#### Beenden des Levels und des Spiels

Die Kugel rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Lassen Sie uns jetzt die Möglichkeit einrichten, das Level tatsächlich zu beenden! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn die Kugel das Loch erreicht.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Das funktioniert ähnlich wie die `collide`-Methode, die zuvor erklärt wurde. Wenn die Kugel mit dem Loch überlappt (anstatt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

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

Wenn das aktuelle Level der maximalen Anzahl von Levels entspricht (in diesem Fall 5), dann ist das Spiel zu Ende — Sie erhalten eine Glückwunschbotschaft zusammen mit der Anzahl der verstrichenen Sekunden im gesamten Spiel, und einen Button, den Sie drücken können, welcher Sie zum Hauptmenü bringt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist lediglich ein funktionierendes Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Wir können zum Beispiel Power-Ups hinzufügen, die unterwegs eingesammelt werden können und die unsere Kugel schneller rollen lassen, den Timer für einige Sekunden anhalten oder der Kugel spezielle Fähigkeiten geben, um Hindernisse zu durchdringen. Es gibt auch Raum für Fallen, die die Kugel verlangsamen oder erschweren, das Loch zu erreichen. Sie können mehr Level mit zunehmend höherem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Ranglisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial hilft Ihnen, in die 2D-Spieleentwicklung einzutauchen und inspiriert Sie, großartige Spiele alleine zu erschaffen. Sie können das Demo-Spiel [Cyber Orb](https://orb.enclavegames.com/) spielen und den [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) überprüfen.

HTML bietet uns rohe Werkzeuge, die darauf aufgebauten Frameworks werden immer schneller und besser, sodass dies eine großartige Zeit ist, um in die Web-Spielentwicklung einzusteigen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die es ebenfalls zu berücksichtigen lohnt, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) – es kommt auf Ihre Vorlieben, Programmierkenntnisse (oder deren Fehlen), den Umfang des Projekts, Anforderungen und andere Aspekte an. Sie sollten sie alle ausprobieren und entscheiden, welches am besten zu Ihren Bedürfnissen passt.
