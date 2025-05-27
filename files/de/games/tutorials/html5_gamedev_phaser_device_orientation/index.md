---
title: 2D Labyrinth-Spiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{GamesSidebar}}

In diesem Tutorial werden wir den Prozess des Erstellens eines HTML-Mobile-Spiels durchgehen, das die **APIs** [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) verwendet, um das Gameplay zu verbessern. Es wird mit dem [Phaser](https://phaser.io/)-Framework erstellt. Grundlegende JavaScript-Kenntnisse sind zu empfehlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials werden Sie ein voll funktionsfähiges Demospiel haben: [Cyber Orb](https://orb.enclavegames.com/). Es wird ungefähr so aussehen:

![Ein 2D-Spielbrett mit einem kleinen gelben Ball. Es gibt ein großes schwarzes Loch, in das der Ball fliehen kann, und eine Anzahl von Barrieren, die den Ball daran hindern, zu entkommen.](cyber-orb.png)

## Phaser Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von Desktop- und mobilen HTML-Spielen. Es ist ziemlich neu, wächst jedoch dank der leidenschaftlichen Community, die an der Entwicklung beteiligt ist, rasant. Sie können einen Blick darauf [auf GitHub](https://github.com/phaserjs/phaser) werfen, wo es als Open Source verfügbar ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und die große Sammlung von [Beispielen](https://labs.phaser.io/) durchgehen. Das Phaser-Framework bietet Ihnen ein Set von Tools, die die Entwicklung beschleunigen und Ihnen dabei helfen, generische Aufgaben zu erledigen, die zum Vervollständigen des Spiels notwendig sind, sodass Sie sich auf die Spielidee selbst konzentrieren können.

## Projektstart

Sie können den [Quellcode von Cyber Orb](https://github.com/EnclaveGames/Cyber-Orb) auf GitHub ansehen. Die Ordnerstruktur ist ziemlich einfach: Der Ausgangspunkt ist die `index.html`-Datei, in der wir das Framework initialisieren und eine {{htmlelement("canvas")}} einrichten, um das Spiel darauf zu rendern.

![Screenshot des GitHub-Repositories mit dem Cyber Orb-Spielcode, der die Ordner und die Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und es auszuprobieren. Es gibt auch drei Ordner im Verzeichnis:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels.
- `audio`: Die im Spiel verwendeten Sounddateien.

## Einrichtung der Canvas

Wir werden unser Spiel auf einer Canvas rendern, aber wir werden es nicht manuell tun — dies wird vom Framework übernommen. Lassen Sie uns es einrichten: Unser Ausgangspunkt ist die `index.html`-Datei mit dem folgenden Inhalt. Sie können dies selbst erstellen, wenn Sie mitmachen möchten:

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

Bisher haben wir eine einfache HTML-Website mit einigen grundlegenden Inhalten im `<head>`-Bereich: Zeichenkodierung, Titel, CSS-Styling und die Einbindung der JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser-Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile initialisiert die Phaser-Instanz — die Argumente sind die Breite der Canvas, die Höhe der Canvas, die Render-Methode (wir verwenden `CANVAS`, aber es sind auch `WEBGL` und `AUTO` Optionen verfügbar) und die optionale ID des DOM-Containers, in den wir die Canvas einfügen möchten. Wenn im letzten Argument nichts angegeben ist oder das Element nicht gefunden wird, wird die Canvas dem `<body>`-Tag hinzugefügt. Ohne das Framework müsste man, um das Canvas-Element zur Seite hinzuzufügen, etwas wie folgt innerhalb des `<body>`-Tags schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Das Wichtigste, woran man sich erinnern sollte, ist, dass das Framework nützliche Methoden bereitstellt, um eine Menge Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die manuell viel schwieriger zu bewerkstelligen wären.

> [!NOTE]
> Sie können den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) für eine ausführliche Einführung in die grundlegenden, Phaser-spezifischen Funktionen und Methoden lesen.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die `start`-Methode startet den angegebenen Zustand und macht ihn aktiv. Schauen wir uns an, was die Zustände tatsächlich sind.

## Verwaltung von Spielzuständen

Die Zustände in Phaser sind separate Teile der Spiel-Logik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die grundlegenden Zustände, die in diesem Spiel verwendet werden, sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` kümmert sich um die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit dem Startknopf, `Howto` zeigt die "wie man spielt"-Anweisungen und der `Game` Zustand lässt Sie das Spiel tatsächlich spielen. Lassen Sie uns schnell den Inhalt dieser Zustände durchgehen.

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

Das Hauptobjekt `Ball` wird definiert und wir fügen zwei Variablen namens `_WIDTH` und `_HEIGHT` hinzu, die die Breite und die Höhe der Spiel-Canvas sind — sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Wir laden zuerst zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt beim Laden aller anderen Assets anzuzeigen. Die `create`-Funktion enthält einige Grundkonfigurationen: Wir richten das Skalieren und die Ausrichtung der Canvas ein und wechseln zum `Preload`-Zustand, wenn alles bereit ist.

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

Es werden einzelne Bilder, Spritesheets und Audiodateien vom Framework geladen. In diesem Zustand zeigt der `preloadBar` den Fortschritt auf dem Bildschirm an. Dieser Fortschritt der geladenen Assets wird vom Framework mit Hilfe eines Bildes visualisiert. Mit jedem geladenen Asset sehen Sie mehr vom `preloadBar` Bild: von 0% bis 100%, aktualisiert in jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels, in dem Sie das Spiel durch Klicken auf die Schaltfläche starten können.

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

Um eine neue Schaltfläche zu erstellen, gibt es die `add.button`-Methode mit der folgenden Liste von optionalen Argumenten:

- Obere absolute Position auf der Canvas in Pixeln.
- Linke absolute Position auf der Canvas in Pixeln.
- Name des Bild-Assets, das die Schaltfläche verwendet.
- Funktion, die ausgeführt wird, wenn jemand auf die Schaltfläche klickt.
- Der Ausführungskontext.
- Rahmen aus dem Bild-Asset, das als "Hover"-Zustand der Schaltfläche verwendet wird.
- Rahmen aus dem Bild-Asset, das als "Normal"- oder "Out"-Zustand der Schaltfläche verwendet wird.
- Rahmen aus dem Bild-Asset, das als "Klick"- oder "Down"-Zustand der Schaltfläche verwendet wird.

Das `anchor.set` richtet den Ankerpunkt an der Schaltfläche ein, für den alle Berechnungen der Position angewendet werden. In unserem Fall ist es auf halbem Weg von der linken Kante und am Anfang der oberen Kante verankert, sodass es einfach horizontal auf dem Bildschirm zentriert werden kann, ohne die Breite zu kennen.

Wenn die Start-Schaltfläche gedrückt wird, zeigt das Spiel nicht direkt auf die Aktion, sondern zeigt den Bildschirm mit den Informationen, wie man das Spiel spielt.

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

Der `Howto`-Zustand zeigt die Spielanweisungen auf dem Bildschirm, bevor das Spiel gestartet wird. Nach einem Klick auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der `Game.js`-Datei ist, wo die ganze Magie passiert. Alle Initialisierungen befinden sich in der `create()`-Funktion (einmalig zu Beginn des Spiels ausgeführt). Danach erfordert einige Funktionalität weiteren Code zur Steuerung — wir werden unsere eigenen Funktionen schreiben, um kompliziertere Aufgaben zu erledigen. Insbesondere beachten Sie die `update()`-Funktion (die bei jedem Frame ausgeführt wird), die Dinge wie die Ballposition aktualisiert.

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
- `updateCounter` aktualisiert die Zeit, die für jedes Level benötigt wird, und verzeichnet die insgesamt für das Spiel benötigte Zeit.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton ein und aus.
- `wallCollision` wird ausgeführt, wenn der Ball die Wände oder andere Objekte trifft.
- `handleOrientation` ist die an das Ereignis gebundene Funktion, die für die Device Orientation API verantwortlich ist und die Bewegungssteuerung bietet, wenn das Spiel auf einem mobilen Gerät mit entsprechender Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Gehen wir zuerst zur `create()`-Funktion, initialisieren wir das Ballobjekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir an der angegebenen Stelle auf dem Bildschirm ein Sprite hinzu und verwenden das `'ball'`-Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für Physikberechnungen in die Mitte des Balls, aktivieren die Arcade-Physik-Engine (die alle Physik für die Ballbewegung verarbeitet) und setzen die Größe des Körpers für die Kollisionsdetektion fest. Die `bounce`-Eigenschaft wird verwendet, um die Sprungkraft des Balls festzulegen, wenn er auf Hindernisse trifft.

#### Steuerung des Balls

Es ist cool, den Ball bereit zu haben, um im Spielbereich herumgeworfen zu werden, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Jetzt werden wir die Fähigkeit hinzufügen, den Ball mit der Tastatur auf Desktop-Geräten zu steuern, und dann zur Implementierung der Device Orientation API übergehen. Konzentrieren wir uns zuerst auf die Tastatur, indem wir das Folgende zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignishandlern für die vier Pfeiltasten zum Spielen gibt: oben, unten, links und rechts.

Als nächstes fügen wir der `update()`-Funktion folgenden Code hinzu, sodass dieser bei jedem Frame ausgeführt wird. Das `this.keys`-Objekt wird gegen die Benutzereingabe geprüft, sodass der Ball entsprechend mit der vordefinierten Kraft reagieren kann:

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

Auf diese Weise können wir überprüfen, welche Taste im aktuellen Frame gedrückt ist und die definierte Kraft auf den Ball anwenden, wodurch die Geschwindigkeit in die richtige Richtung erhöht wird.

#### Implementierung der Device Orientation API

Wahrscheinlich der interessanteste Teil des Spiels ist die Verwendung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die der Ball rollen soll. Hier ist der Code aus der `create()`-Funktion, der dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Ereignis-Listener zum `"deviceorientation"`-Ereignis hinzu und binden die `handleOrientation`-Funktion, die so aussieht:

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

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf den Ball ausgeübt, daher bewegt es sich schneller (die Geschwindigkeit ist höher).

![Eine Erklärung der X, Y und Z Achsen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, den Ball von der Startposition zur Endposition zu bewegen: einem Loch im Boden. Die Implementierung sieht der Erstellung des Balls sehr ähnlich und wird auch in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied besteht darin, dass der Körper unseres Lochs sich nicht bewegt, wenn wir es mit dem Ball treffen, und es wird die Kollisionsdetektion berechnet (die später in diesem Artikel besprochen wird).

#### Bauen des Block-Labyrinths

Um das Spiel schwieriger und interessanter zu machen, werden wir einige Hindernisse zwischen dem Ball und dem Ausgang hinzufügen. Wir könnten einen Level-Editor verwenden, aber für den Zweck dieses Tutorials erstellen wir etwas Eigenes.

Um die Block-Informationen zu halten, verwenden wir ein Level-Daten-Array: Für jeden Block speichern wir die obere und linke absolute Position in Pixeln (`x` und `y`) und den Typ des Blocks — horizontal oder vertikal (`t` mit dem Wert `'w'` für Breite und `'h'` für Höhe). Dann, um das Level zu laden, analysieren wir die Daten und zeigen die spezifischen Blöcke für dieses Level. In der Funktion `initLevels` haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit einer `x`- und `y`-Position und einem `t`-Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels`-Funktion, fügen wir die Blöcke in ein Array in der `for`-Schleife mit einigen frameworkspezifischen Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Einträgen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe gesetzt, um Physikberechnungen zu ermöglichen. Die `newLevel.create`-Methode erstellt neue Einträge in der Gruppe mit Start-Links- und -Oben-Positionen und einem eigenen Bild. Wenn Sie nicht durch die Liste der Elemente gehen wollen, um einer einzelnen explizit eine Eigenschaft hinzuzufügen, können Sie `setAll` auf einer Gruppe verwenden, um ihn allen Elementen in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels`-Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Levels zu laden, stellen wir sicher, dass die vorherigen Levels verborgen sind und das aktuelle angezeigt wird:

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

Dank dessen gibt das Spiel dem Spieler eine Herausforderung - jetzt müssen sie den Ball über das Spielfeld rollen lassen und durch das aus den Blöcken gebaute Labyrinth führen. Es ist nur ein Beispiel zum Laden der Levels, und es gibt nur 5 davon, um die Idee zu demonstrieren, aber Sie können daran arbeiten, dieses selbst zu erweitern.

#### Kollisionsdetektion

An diesem Punkt haben wir den Ball, der vom Spieler gesteuert wird, das Loch, das es zu erreichen gilt, und die Hindernisse, die den Weg blockieren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionsdetektion, daher passiert nichts, wenn der Ball die Blöcke trifft — er geht einfach durch. Lass es uns beheben! Die gute Nachricht ist, dass das Framework die Berechnung der Kollisionsdetektion übernimmt, wir müssen nur die kollidierenden Objekte in der `update()`-Funktion angeben:

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

Dies wird dem Framework mitteilen, die `wallCollision`-Funktion auszuführen, wenn der Ball eines der Wände trifft. Wir können die `wallCollision`-Funktion verwenden, um jede gewünschte Funktionalität hinzuzufügen, wie die Wiedergabe des Sprunggeräuschs und die Implementierung der **Vibration API**.

#### Hinzufügen des Klangs

Unter den vorgeladenen Assets befand sich eine Audiospur (in verschiedenen Formaten für die Browser-Kompatibilität), die wir jetzt verwenden können. Sie muss zuerst in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also die Geräusche im Spiel eingeschaltet sind), können wir es in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das ist alles — das Laden und Abspielen der Geräusche ist mit Phaser einfach.

#### Implementierung der Vibration API

Wenn die Kollisionsdetektion wie erwartet funktioniert, fügen wir mit Hilfe der Vibration API einige Spezialeffekte hinzu.

![Eine Visualisierung der Vibrationen eines Flame-Mobilgeräts mit der Cyber Orb-Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, dies in unserem Fall zu nutzen, ist, das Telefon jedes Mal vibrieren zu lassen, wenn der Ball auf die Wände trifft - innerhalb der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt wird und im `window.navigator`-Objekt verfügbar ist, lassen Sie das Telefon für 100 Millisekunden vibrieren. Das ist es!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederspielbarkeit zu verbessern und den Spielern die Möglichkeit zu geben, miteinander zu konkurrieren, speichern wir die verstrichene Zeit — die Spieler können dann versuchen, ihre beste Spielzeit zu verbessern. Um dies zu implementieren, müssen wir eine Variable erstellen, um die tatsächliche Anzahl der Sekunden zu speichern, die seit dem Start des Spiels vergangen sind, und sie für den Spieler im Spiel anzuzeigen. Lassen Sie uns zuerst die Variablen in der `create`-Funktion definieren:

```js
this.timer = 0; // time elapsed in the current level
this.totalTimer = 0; // time elapsed in the whole game
```

Dann können wir direkt danach die notwendigen Textobjekte initialisieren, um diese Information dem Benutzer anzuzeigen:

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

Diese Schleife, die sich ebenfalls in der `create`-Funktion befindet, wird die `updateCounter`-Funktion jede Sekunde von Beginn des Spiels an ausführen, sodass wir die Änderungen entsprechend anwenden können. So sieht die komplette `updateCounter`-Funktion aus:

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

Wie Sie sehen, erhöhen wir die `this.timer`-Variable und aktualisieren den Inhalt der Textobjekte mit den aktuellen Werten in jeder Iteration, damit der Spieler die verstrichene Zeit sieht.

#### Abschluss des Levels und des Spiels

Der Ball rollt auf dem Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Jetzt lassen Sie uns die Möglichkeit einrichten, das Level tatsächlich zu beenden! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der ausgelöst wird, wenn der Ball zum Loch gelangt.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die zuvor erklärte `collide`-Methode. Wenn der Ball mit dem Loch überlappt (anstatt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

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

Wenn das aktuelle Level gleich der maximalen Anzahl von Levels ist (in diesem Fall 5), dann ist das Spiel zu Ende — Sie erhalten eine Glückwunschmeldung zusammen mit der Anzahl der Sekunden, die das gesamte Spiel gedauert hat, und eine Schaltfläche, die Sie durch Drücken zum Hauptmenü zurückführt.

Wenn das aktuelle Level niedriger als 5 ist, werden alle notwendigen Variablen zurückgesetzt und das nächste Level geladen.

## Ideen für neue Funktionen

Dies ist lediglich ein funktionierendem Demo eines Spiels, das viele zusätzliche Funktionen haben könnte. Wir können zum Beispiel Power-Ups hinzufügen, die auf dem Weg gesammelt werden und unseren Ball schneller rollen lassen, den Timer für ein paar Sekunden anhalten oder dem Ball spezielle Fähigkeiten geben, um durch Hindernisse zu gehen. Es gibt auch Raum für Fallen, die den Ball verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Levels mit zunehmendem Schwierigkeitsgrad erstellen. Sie könnten sogar Erfolge, Bestenlisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial wird Ihnen helfen, in die 2D-Spieleentwicklung einzutauchen und Sie inspirieren, selbst großartige Spiele zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und dessen [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) ansehen.

HTML gibt uns rohe Werkzeuge, die darauf aufgebauten Frameworks werden schneller und besser, daher ist jetzt eine großartige Zeit, in die Web-Spieleentwicklung einzusteigen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die ebenfalls in Betracht gezogen werden sollten, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Codierfähigkeiten (oder deren Fehlen), dem Umfang des Projekts, den Anforderungen und anderen Aspekten ab. Sie sollten sie alle ausprobieren und entscheiden, welches am besten zu Ihren Bedürfnissen passt.
