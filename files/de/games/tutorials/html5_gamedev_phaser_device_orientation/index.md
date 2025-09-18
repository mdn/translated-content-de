---
title: 2D-Labyrinthspiel mit Geräteausrichtung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

In diesem Tutorial gehen wir durch den Prozess des Erstellens eines HTML-Mobile-Spiels, das die [Geräte-Orientierungs](/de/docs/Web/API/Device_orientation_events) und [Vibrations](/de/docs/Web/API/Vibration_API) **APIs** nutzt, um das Gameplay zu verbessern, und mit dem [Phaser](https://phaser.io/) Framework erstellt wird. Grundkenntnisse in JavaScript sind empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispiel-Spiel

Am Ende des Tutorials werden Sie ein voll funktionsfähiges Demospiel haben: [Cyber Orb](https://orb.enclavegames.com/). Es wird ungefähr so aussehen:

![Ein Spielfeld in 2D mit einer kleinen gelben Kugel. Es gibt ein großes schwarzes Loch, durch das die Kugel entkommen kann, und eine Anzahl von Barrieren, die die Kugel am Entkommen hindern.](cyber-orb.png)

## Phaser Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von Desktop- und Mobile-HTML-Spielen. Es ist noch ziemlich neu, wächst aber dank der leidenschaftlichen Community, die in den Entwicklungsprozess involviert ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) ansehen, wo es als Open Source zur Verfügung steht, die [Online-Dokumentation](https://phaser.io/docs/) lesen und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser-Framework bietet Ihnen ein Set von Werkzeugen, das die Entwicklung beschleunigt und bei der Handhabung generischer Aufgaben hilft, die zum Abschließen des Spiels erforderlich sind, damit Sie sich auf die Spielidee selbst konzentrieren können.

## Projektstart

Sie können den [Cyber Orb Quellcode](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub ansehen. Die Ordnerstruktur ist ziemlich einfach: Der Ausgangspunkt ist die `index.html` Datei, in der wir das Framework initialisieren und einen {{htmlelement("canvas")}} einrichten, um das Spiel zu rendern.

![Screenshot des GitHub-Repositorys mit dem Cyber Orb-Spielcode, zeigt die Ordner und die Dateien in der Hauptstruktur.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und es auszuprobieren. Im Verzeichnis gibt es auch drei Ordner:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels.
- `audio`: Die im Spiel verwendeten Audiodateien.

## Einrichten der Canvas

Wir werden unser Spiel auf der Canvas rendern, aber wir werden es nicht manuell tun – das wird vom Framework übernommen. Lassen Sie es uns einrichten: Unser Ausgangspunkt ist die `index.html` Datei mit folgendem Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen möchten:

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

Bis jetzt haben wir eine einfache HTML-Webseite mit ein paar grundlegenden Inhalten im `<head>`-Bereich: Zeichensatz, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser-Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile wird die Phaser-Instanz initialisieren – die Argumente sind die Breite der Canvas, die Höhe der Canvas, die Render-Methode (wir verwenden `CANVAS`, es gibt aber auch `WEBGL` und `AUTO` Optionen) und die optionale ID des DOM-Containers, in den wir die Canvas einfügen möchten. Wenn im letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird die Canvas zum `<body>`-Tag hinzugefügt. Ohne das Framework, um das Canvas-Element zur Seite hinzuzufügen, müssten Sie so etwas in das `<body>`-Tag schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Wichtig zu erwähnen ist, dass das Framework hilfreiche Methoden bereitstellt, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die manuell viel schwieriger zu realisieren wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) lesen für eine tiefgehende Einführung in die grundlegenden Phaser-spezifischen Funktionen und Methoden.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die `start`-Methode beginnt den angegebenen Zustand und macht ihn aktiv. Lassen Sie uns sehen, was die Zustände tatsächlich sind.

## Verwaltung der Spielzustände

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` übernimmt die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit dem Startknopf, `Howto` zeigt die "Anleitung" und der `Game` Zustand erlaubt es Ihnen, das Spiel tatsächlich zu spielen. Lassen Sie uns schnell die Inhalte dieser Zustände durchgehen.

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

Das Haupt-`Ball`-Objekt ist definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und Höhe der Spiel-Canvas sind – sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Ladefortschritt aller anderen Assets anzuzeigen. Die `create`-Funktion enthält einige grundlegende Konfigurationen: Wir richten das Skalieren und die Ausrichtung der Canvas ein und wechseln zum `Preload`-Zustand, wenn alles bereit ist.

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

Es gibt Einzelbilder, Spritesheets und Audiodateien, die vom Framework geladen werden. In diesem Zustand zeigt die `preloadBar` den Fortschritt auf dem Bildschirm. Dieser Fortschritt der geladenen Assets wird vom Framework mit einem Bild visualisiert. Mit jedem Asset, das geladen wird, sehen Sie mehr von dem `preloadBar` Bild: von 0% bis 100%, aktualisiert bei jedem Frame. Nach dem Laden aller Assets wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels, wo Sie durch Klicken auf den Button das Spiel starten können.

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

- Obere absolute Position auf der Canvas in Pixeln.
- Linke absolute Position auf der Canvas in Pixeln.
- Name des Bild-Assets, das der Button verwendet.
- Funktion, die ausgeführt wird, wenn jemand auf den Button klickt.
- Der Ausführungskontext.
- Frame aus dem Bild-Asset, der als "hover" Zustand des Buttons verwendet wird.
- Frame aus dem Bild-Asset, der als "normal" oder "out" Zustand des Buttons verwendet wird.
- Frame aus dem Bild-Asset, der als "click" oder "down" Zustand des Buttons verwendet wird.

Das `anchor.set` setzt den Ankerpunkt auf dem Button, auf den alle Berechnungen der Position angewendet werden. In unserem Fall ist er auf halbem Weg von der linken Kante und am Anfang der oberen Kante verankert, sodass er einfach horizontal auf dem Bildschirm zentriert werden kann, ohne die Breite zu kennen.

Wenn der Startknopf gedrückt wird, wird das Spiel anstelle des sofortigen Starts den Bildschirm mit den Anweisungen anzeigen, wie man das Spiel spielt.

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

Der `Howto`-Zustand zeigt die Spielanleitung auf dem Bildschirm, bevor das Spiel startet. Nach einem Klick auf den Bildschirm startet das tatsächliche Spiel.

### Game.js

Der `Game` Zustand aus der `Game.js` Datei ist, wo die ganze Magie passiert. Die gesamte Initialisierung erfolgt in der `create()`-Funktion (die einmal zu Beginn des Spiels aufgerufen wird). Danach erfordert einige Funktionalität weiteren Code zur Steuerung – wir werden unsere eigenen Funktionen schreiben, um kompliziertere Aufgaben zu erledigen. Insbesondere ist die `update()`-Funktion (die in jedem Frame ausgeführt wird) wichtig, da sie Dinge wie die Ballposition aktualisiert.

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

Die `create` und `update` Funktionen sind frameworkspezifisch, während andere unsere eigenen Kreationen sein werden:

- `initLevels` initialisiert die Level-Daten.
- `showLevel` zeigt die Level-Daten auf dem Bildschirm.
- `updateCounter` aktualisiert die Zeit, die für das Spielen jedes Levels aufgewendet wurde, und zeichnet die Gesamtzeit auf, die für das Spielen des Spiels aufgewendet wurde.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet das Audio ein und aus.
- `wallCollision` wird ausgeführt, wenn der Ball die Wände oder andere Objekte trifft.
- `handleOrientation` ist die an das Ereignis gebundene Funktion, die für die Geräte-Orientierungs-API verantwortlich ist und die Bewegungskontrollen bereitstellt, wenn das Spiel auf einem Mobilgerät mit geeigneter Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Zuerst gehen wir zur `create()`-Funktion, initialisieren das Ball-Objekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der angegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'` Bild aus den geladenen Grafiken. Wir setzen auch den Anker für Berechnungen der Physik auf die Mitte des Balls, aktivieren die Arcade-Physik-Engine (die alle Physik für die Ballbewegung handhabt) und stellen die Größe des Körpers für die Kollisionserkennung ein. Die `bounce`-Eigenschaft wird verwendet, um die Sprungkraft des Balls einzustellen, wenn er auf Hindernisse trifft.

#### Kontrolle des Balls

Es ist cool, den Ball bereitzuhaben, um ihn im Spielbereich hin und her zu werfen, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Jetzt fügen wir die Möglichkeit hinzu, den Ball mit der Tastatur auf den Desktop-Geräten zu steuern, und dann werden wir zur Implementierung der Geräte-Orientierungs-API übergehen. Konzentrieren wir uns zuerst auf die Tastatur, indem wir die folgende Zeile in die `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Event-Handlern für die vier Pfeiltasten bereitstellt: oben, unten, links und rechts.

Als Nächstes fügen wir den folgenden Code in die `update()`-Funktion ein, sodass er in jedem Frame ausgeführt wird. Das `this.keys`-Objekt wird mit den Eingaben des Spielers verglichen, sodass der Ball entsprechend mit der vordefinierten Kraft reagiert:

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

Auf diese Weise können wir überprüfen, welche Taste im gegebenen Frame gedrückt wird, und die definierte Kraft auf den Ball anwenden, wodurch die Geschwindigkeit in die entsprechende Richtung erhöht wird.

#### Implementierung der Geräte-Orientierungs-API

Wahrscheinlich der interessanteste Teil des Spiels ist die Verwendung der **Geräte-Orientierungs-API** zur Steuerung auf Mobilgeräten. Dank dieser können Sie das Spiel durch Neigen des Geräts in die Richtung, in die der Ball rollen soll, spielen. Hier ist der Code aus der `create()`-Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation);
```

Wir fügen einen Event-Listener für das `"deviceorientation"` Ereignis hinzu und binden die `handleOrientation` Funktion, die folgendermaßen aussieht:

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

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, den Ball von der Startposition zur Endposition zu bewegen: ein Loch im Boden. Die Implementierung sieht sehr ähnlich aus wie der Teil, in dem wir den Ball erstellt haben, und wird ebenfalls in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied ist, dass der Körper unseres Lochs sich nicht bewegen wird, wenn wir ihn mit dem Ball treffen, und die Kollisionserkennung berechnet wird (die später in diesem Artikel besprochen wird).

#### Aufbau des Block-Labyrinths

Um das Spiel schwieriger und interessanter zu machen, fügen wir einige Hindernisse zwischen dem Ball und dem Ausgang hinzu. Wir könnten einen Leveleditor verwenden, aber der Einfachheit halber erstellen wir etwas Eigenes.

Zum Halten der Blockinformationen verwenden wir ein Level-Daten-Array: Für jeden Block speichern wir die obere und linke absolute Position in Pixeln (`x` und `y`) und den Typ des Blocks – horizontal oder vertikal (`t` mit dem `'w'` Wert, was Breite bedeutet, und `'h'`, was Höhe bedeutet). Um das Level zu laden, werden wir die Daten analysieren und die blockspezifischen Elemente für dieses Level anzeigen. In der `initLevels` Funktion haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit einer `x` und `y` Position und einem `t` Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels` Funktion, fügen wir die Blöcke in einem Array in der `for`-Schleife mit einigen frameworkspezifischen Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe eingestellt, um physikalische Berechnungen zu ermöglichen. Die `newLevel.create` Methode erstellt neue Elemente in der Gruppe mit Startlinks- und -oberen Positionen und ihrem eigenen Bild. Wenn Sie nicht erneut durch die Liste der Elemente schleifen möchten, um jedem explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um es auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels` Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Levels zu laden, stellen wir sicher, dass die vorherigen Levels ausgeblendet sind und das aktuelle angezeigt wird:

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

Dank dessen bietet das Spiel dem Spieler eine Herausforderung – jetzt muss er den Ball über den Spielbereich rollen und ihn durch das Labyrinth aus Blöcken lenken. Dies ist nur ein Beispiel für das Laden der Levels, und es gibt nur 5 davon, um die Idee zu veranschaulichen, aber Sie können daran arbeiten, dies selbst zu erweitern.

#### Kollisionserkennung

An diesem Punkt haben wir den Ball, der vom Spieler gesteuert wird, das Loch, das erreicht werden muss, und die Hindernisse, die den Weg blockieren. Es gibt jedoch ein Problem – unser Spiel hat noch keine Kollisionserkennung, sodass nichts passiert, wenn der Ball die Blöcke trifft – er geht einfach hindurch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework die Kollisionserkennung berechnen wird, wir müssen nur die kollidierenden Objekte in der `update()` Funktion angeben:

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

Dies wird dem Framework mitteilen, die `wallCollision` Funktion auszuführen, wenn der Ball auf eine der Wände trifft. Wir können die `wallCollision` Funktion verwenden, um jede Funktionalität hinzuzufügen, die wir wollen, wie das Abspielen des Auftreffgeräuschs und die Implementierung der **Vibration API**.

#### Hinzufügen des Sounds

Unter den vorab geladenen Assets war ein Audio-Track (in verschiedenen Formaten für die Browser-Kompatibilität), den wir jetzt verwenden können. Er muss zuerst in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also die Sounds im Spiel aktiviert sind), können wir ihn in der `wallCollision` Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles – das Laden und Abspielen der Sounds ist mit Phaser einfach.

#### Implementierung der Vibration-API

Wenn die Kollisionserkennung wie erwartet funktioniert, fügen wir einige spezielle Effekte mit Hilfe der Vibration-API hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, sie in unserem Fall zu verwenden, besteht darin, das Telefon jedes Mal vibrieren zu lassen, wenn der Ball die Wände trifft – innerhalb der `wallCollision` Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt wird und im `window.navigator` Objekt verfügbar ist, lassen Sie das Telefon 100 Millisekunden vibrieren. Das ist es!

#### Hinzufügen der abgelaufenen Zeit

Um die Wiederspielbarkeit zu verbessern und Spielern die Möglichkeit zu geben, gegeneinander anzutreten, speichern wir die vergangene Zeit – Spieler können dann versuchen, ihre beste Spielzeit zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, die die tatsächliche Anzahl der Sekunden speichert, die seit dem Start des Spiels vergangen sind, und sie dem Spieler im Spiel anzeigen. Definieren wir zuerst die Variablen in der `create` Funktion:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Dann können wir direkt danach die notwendigen Textobjekte initialisieren, um diese Informationen für den Nutzer anzuzeigen:

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

Wir definieren die oberen und linken Positionen des Textes, den Inhalt, der angezeigt wird, und das Styling, das auf den Text angewendet wird. Wir haben dies auf dem Bildschirm angezeigt, es wäre jedoch gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, ebenfalls in der `create` Funktion, wird die `updateCounter` Funktion jede einzelne Sekunde ab dem Beginn des Spiels ausführen, damit wir die Änderungen entsprechend anwenden können. So sieht die vollständige `updateCounter` Funktion aus:

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

Wie Sie sehen, erhöhen wir die `this.timer` Variable und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten bei jeder Iteration, sodass der Spieler die vergangene Zeit sieht.

#### Abschluss des Levels und des Spiels

Der Ball rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Jetzt lasst uns die Möglichkeit einrichten, das Level tatsächlich zu beenden! Die folgende Zeile in der `update()` Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn der Ball ins Loch kommt.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die `collide` Methode, die zuvor erklärt wurde. Wenn der Ball sich mit dem Loch überlappt (anstatt zu kollidieren), wird die `finishLevel` Funktion ausgeführt:

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

Wenn das aktuelle Level gleich der Höchstzahl der Levels ist (in diesem Fall 5), dann ist das Spiel beendet – Sie bekommen eine Glückwunschnachricht zusammen mit der Anzahl der abgelaufenen Sekunden durch das gesamte Spiel und einen Button, der Sie zurück ins Hauptmenü führt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level wird geladen.

## Ideen für neue Funktionen

Dies ist lediglich eine funktionierende Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Beispielsweise können wir Power-Ups hinzufügen, die man unterwegs einsammelt, um unsere Kugel schneller rollen zu lassen, den Timer für ein paar Sekunden anzuhalten oder der Kugel spezielle Kräfte zu verleihen, um Hindernisse zu durchdringen. Es gibt auch Platz für Fallen, die die Kugel verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Levels mit steigendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Ranglisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial hilft Ihnen, in die 2D-Spielentwicklung einzusteigen und Sie dazu inspiriert, großartige Spiele eigenständig zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und den [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) ansehen.

HTML gibt uns die rohen Werkzeuge, die auf ihm aufgebauten Frameworks werden schneller und besser, daher ist es jetzt ein großartiger Zeitpunkt, in die Web-Spielentwicklung einzusteigen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die ebenfalls in Betracht gezogen werden sollten, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Programmierkenntnissen (oder deren Fehlen), der Projektgröße, den Anforderungen und anderen Aspekten ab. Sie sollten sie alle ausprobieren und entscheiden, welches Ihren Bedürfnissen am besten entspricht.
