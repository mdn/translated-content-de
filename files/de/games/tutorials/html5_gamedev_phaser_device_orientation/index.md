---
title: 2D Labyrinthspiel mit Geräteorientierung
slug: Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

In diesem Tutorial gehen wir den Prozess des Erstellens eines HTML-Mobilspiels durch, das die [Device Orientation](/de/docs/Web/API/Device_orientation_events) und [Vibration](/de/docs/Web/API/Vibration_API) **APIs** verwendet, um das Gameplay zu verbessern, und mit dem [Phaser](https://phaser.io/) Framework entwickelt wurde. Grundkenntnisse in JavaScript werden empfohlen, um das Beste aus diesem Tutorial herauszuholen.

## Beispielspiel

Am Ende des Tutorials werden Sie ein voll funktionsfähiges Demospiel haben: [Cyber Orb](https://orb.enclavegames.com/). Es wird ungefähr so aussehen:

![Eine 2D-Spielbrett mit einem kleinen gelben Ball. Es gibt ein großes schwarzes Loch, in das der Ball entkommen kann, und eine Reihe von Barrieren, die den Ball am Entkommen hindern.](cyber-orb.png)

## Phaser-Framework

[Phaser](https://phaser.io/) ist ein Framework zum Erstellen von HTML-Spielen für Desktop und Mobile. Es ist ziemlich neu, wächst aber dank der engagierten Community, die an der Entwicklungsarbeit beteiligt ist, schnell. Sie können es sich [auf GitHub](https://github.com/phaserjs/phaser) ansehen, wo es als Open Source verfügbar ist, die [Online-Dokumentation](https://phaser.io/docs/) lesen und sich die große Sammlung von [Beispielen](https://labs.phaser.io/) durchsehen. Das Phaser-Framework bietet Ihnen eine Reihe von Tools, die die Entwicklung beschleunigen und bei der Handhabung allgemeiner Aufgaben unterstützen, die zur Fertigstellung des Spiels erforderlich sind, sodass Sie sich auf die Spielidee selbst konzentrieren können.

## Starten mit dem Projekt

Den [Quellcode von Cyber Orb](https://github.com/EnclaveGames/Cyber-Orb) können Sie sich auf GitHub ansehen. Die Ordnerstruktur ist recht einfach: Der Startpunkt ist die `index.html` Datei, in der wir das Framework initialisieren und ein {{htmlelement("canvas")}} einrichten, um das Spiel zu rendern.

![Screenshot des GitHub-Repositories mit dem Cyber Orb Spielcode, der die Ordner und Dateien in der Hauptstruktur auflistet.](cyber-orb-github.png)

Sie können die Indexdatei in Ihrem bevorzugten Browser öffnen, um das Spiel zu starten und auszuprobieren. Es gibt auch drei Ordner im Verzeichnis:

- `img`: Alle Bilder, die wir im Spiel verwenden werden.
- `src`: Die JavaScript-Dateien mit dem gesamten Quellcode des Spiels.
- `audio:` Die Sounddateien, die im Spiel verwendet werden.

## Canvas einrichten

Unser Spiel wird auf Canvas gerendert, aber wir werden es nicht manuell tun — das wird vom Framework übernommen. Lassen Sie uns es einrichten: Unser Startpunkt ist die `index.html` Datei mit folgendem Inhalt. Sie können diese selber erstellen, wenn Sie mitmachen möchten:

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

Bisher haben wir eine einfache HTML-Website mit einigen grundlegenden Inhalten im `<head>` Abschnitt: Zeichensatz, Titel, CSS-Styling und die Einbindung von JavaScript-Dateien. Der `<body>` enthält die Initialisierung des Phaser-Frameworks und die Definitionen der Spielzustände.

```js
const game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
```

Die obige Zeile initialisiert die Phaser-Instanz – die Argumente sind die Breite des Canvas, die Höhe des Canvas, die Render-Methode (wir verwenden `CANVAS`, aber es gibt auch `WEBGL` und `AUTO` Optionen) und die optionale ID des DOM-Containers, in den wir das Canvas einfügen möchten. Wenn nichts in diesem letzten Argument spezifiziert ist oder das Element nicht gefunden wird, wird das Canvas dem `<body>`-Tag hinzugefügt. Ohne das Framework müssten Sie, um das Canvas-Element zur Seite hinzuzufügen, im `<body>`-Tag etwa Folgendes schreiben:

```html
<canvas id="game" width="320" height="480"></canvas>
```

Das Wichtige, an das man sich erinnern muss, ist, dass das Framework hilfreiche Methoden bereitstellt, um viele Dinge wie Bildmanipulation oder Asset-Management zu beschleunigen, die ohne das Framework viel schwieriger wären.

> [!NOTE]
> Lesen Sie den Artikel [Building Monster Wants Candy](https://webdesign.tutsplus.com/getting-started-with-phaser-building-monster-wants-candy--cms-21723t) für eine ausführliche Einführung in die Phaser-spezifischen Funktionen und Methoden.

Zurück zu den Spielzuständen: Die folgende Zeile fügt dem Spiel einen neuen Zustand namens `Boot` hinzu:

```js
game.state.add("Boot", Ball.Boot);
```

Der erste Wert ist der Name des Zustands und der zweite ist das Objekt, das wir ihm zuweisen möchten. Die `start` Methode startet den gegebenen Zustand und macht ihn aktiv. Lassen Sie uns sehen, was die Zustände eigentlich sind.

## Spielzustände verwalten

Die Zustände in Phaser sind separate Teile der Spiellogik; in unserem Fall laden wir sie aus unabhängigen JavaScript-Dateien für eine bessere Wartbarkeit. Die in diesem Spiel verwendeten Grundzustände sind: `Boot`, `Preloader`, `MainMenu`, `Howto` und `Game`. `Boot` übernimmt die Initialisierung einiger Einstellungen, `Preloader` lädt alle Assets wie Grafiken und Audio, `MainMenu` ist das Menü mit dem Startknopf, `Howto` zeigt die Anweisungen "wie man spielt" und der `Game`-Zustand ermöglicht es Ihnen tatsächlich, das Spiel zu spielen. Gehen wir schnell den Inhalt dieser Zustände durch.

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

Das Hauptobjekt `Ball` wird definiert und wir fügen zwei Variablen `_WIDTH` und `_HEIGHT` hinzu, die die Breite und die Höhe des Spiel-Canvas sind — sie helfen uns, die Elemente auf dem Bildschirm zu positionieren. Zuerst laden wir zwei Bilder, die später im `Preload`-Zustand verwendet werden, um den Fortschritt des Ladens aller anderen Assets anzuzeigen. Die `create`-Funktion hält einige grundlegende Konfigurationen: Wir richten das Skalieren und die Ausrichtung des Canvas ein und wechseln, wenn alles bereit ist, zum `Preload`-Zustand.

### Preloader.js

Der `Preloader`-Zustand übernimmt das Laden aller Assets:

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

Es gibt Einzelbilder, Spritesheets und Audiodateien, die vom Framework geladen werden. In diesem Zustand zeigt die `preloadBar` den Fortschritt auf dem Bildschirm an. Der Fortschritt der geladenen Assets wird vom Framework mit Hilfe eines Bildes visualisiert. Mit jedem geladenen Asset sehen Sie mehr vom `preloadBar`-Bild: von 0% bis 100%, aktualisiert in jedem Frame. Nachdem alle Assets geladen sind, wird der `MainMenu`-Zustand gestartet.

### MainMenu.js

Der `MainMenu`-Zustand zeigt das Hauptmenü des Spiels, in dem Sie durch Klicken auf den Knopf spielen können.

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

Um einen neuen Knopf zu erstellen, gibt es die `add.button` Methode mit der folgenden Liste optionaler Argumente:

- Obere absolute Position auf dem Canvas in Pixeln.
- Linke absolute Position auf dem Canvas in Pixeln.
- Name des Bild-Assets, das der Knopf verwendet.
- Funktion, die ausgeführt wird, wenn jemand den Knopf klickt.
- Ausführungskontext.
- Frame aus dem Bild-Asset, das als "Hover"-Zustand des Knopfes verwendet wird.
- Frame aus dem Bild-Asset, das als "normaler" oder "außerhalb"-Zustand des Knopfes verwendet wird.
- Frame aus dem Bild-Asset, das als "Klick" oder "unten"-Zustand des Knopfes verwendet wird.

Das `anchor.set` richtet den Ankerpunkt am Knopf ein, auf den alle Berechnungen der Position angewendet werden. In unserem Fall ist er zur Hälfte von der linken Kante und am Anfang der oberen Kante verankert, sodass er leicht horizontal auf dem Bildschirm zentriert werden kann, ohne die Breite zu kennen.

Wenn der Startknopf gedrückt wird, zeigt das Spiel anstelle des direkten Einsteigens in das Spielgeschehen den Bildschirm mit den Informationen, wie das Spiel gespielt werden kann.

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

Der `Howto`-Zustand zeigt die Spielanweisungen auf dem Bildschirm, bevor das Spiel startet. Nach dem Klicken auf den Bildschirm wird das eigentliche Spiel gestartet.

### Game.js

Der `Game`-Zustand aus der `Game.js`-Datei ist, wo die ganze Magie passiert. Alle Initialisierungen erfolgen in der `create()`-Funktion (die einmal zu Beginn des Spiels ausgeführt wird). Danach erfordert einige Funktionalität weiteren Code, um gesteuert zu werden - wir werden unsere eigenen Funktionen schreiben, um komplexere Aufgaben zu bearbeiten. Besonders zu beachten ist die `update()`-Funktion, die bei jedem Frame ausgeführt wird und Dinge wie die Ballposition aktualisiert.

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

- `initLevels` initialisiert die Leveldaten.
- `showLevel` zeigt die Leveldaten auf dem Bildschirm an.
- `updateCounter` aktualisiert die Zeit, die für jedes Level aufgewendet wird und zeichnet die gesamte Zeit auf, die beim Spielen des Spiels aufgewendet wird.
- `managePause` pausiert und setzt das Spiel fort.
- `manageAudio` schaltet den Ton an und aus.
- `wallCollision` wird ausgeführt, wenn der Ball die Wände oder andere Objekte trifft.
- `handleOrientation` ist die Funktion, die an das Ereignis gebunden ist, das für die Device Orientation API verantwortlich ist, und bietet die Bewegungssteuerung, wenn das Spiel auf einem mobilen Gerät mit geeigneter Hardware läuft.
- `finishLevel` lädt ein neues Level, wenn das aktuelle Level abgeschlossen ist, oder beendet das Spiel, wenn das letzte Level abgeschlossen ist.

#### Hinzufügen des Balls und seiner Bewegungsmechanik

Zuerst schauen wir uns die `create()`-Funktion an, initialisieren das Ballobjekt selbst und weisen ihm einige Eigenschaften zu:

```js
this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, "ball");
this.ball.anchor.set(0.5);
this.physics.enable(this.ball, Phaser.Physics.ARCADE);
this.ball.body.setSize(18, 18);
this.ball.body.bounce.set(0.3, 0.3);
```

Hier fügen wir einen Sprite an der gegebenen Stelle auf dem Bildschirm hinzu und verwenden das `'ball'`-Bild aus den geladenen Grafik-Assets. Wir setzen auch den Anker für jegliche physikalische Berechnungen auf die Mitte des Balls, aktivieren die Arcade-Physik-Engine (die alle Physik für die Ballbewegung behandelt) und setzen die Größe des Körpers für die Kollisionserkennung. Die `bounce`-Eigenschaft wird verwendet, um die Sprungkraft des Balls festzulegen, wenn er auf Hindernisse trifft.

#### Steuerung des Balls

Es ist cool, den Ball bereit zu haben, um ins Spielfeld geworfen zu werden, aber es ist auch wichtig, ihn tatsächlich bewegen zu können! Jetzt werden wir die Fähigkeit hinzufügen, den Ball mit der Tastatur auf den Desktop-Geräten zu steuern, und dann werden wir zur Implementierung der Device Orientation API übergehen. Konzentrieren wir uns zuerst auf die Tastatur, indem wir Folgendes zur `create()`-Funktion hinzufügen:

```js
this.keys = this.game.input.keyboard.createCursorKeys();
```

Wie Sie sehen können, gibt es eine spezielle Phaser-Funktion namens `createCursorKeys()`, die uns ein Objekt mit Ereignis-Handlern für die vier Pfeiltasten gibt: hoch, runter, links und rechts.

Als nächstes werden wir den folgenden Code zur `update()`-Funktion hinzufügen, sodass er bei jedem Frame ausgelöst wird. Das `this.keys`-Objekt wird gegen die Benutzereingabe getestet, sodass der Ball entsprechend mit der vordefinierten Kraft reagiert:

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

Wahrscheinlich der interessanteste Teil des Spiels ist die Verwendung der **Device Orientation API** zur Steuerung auf mobilen Geräten. Dank dieser können Sie das Spiel spielen, indem Sie das Gerät in die Richtung neigen, in die sich der Ball rollen soll. Hier ist der Code aus der `create()`-Funktion, die dafür verantwortlich ist:

```js
window.addEventListener("deviceorientation", this.handleOrientation, true);
```

Wir fügen einen Ereignis-Listener für das `"deviceorientation"`-Ereignis hinzu und binden die `handleOrientation`-Funktion, die so aussieht:

```js
handleOrientation(e) {
  const x = e.gamma;
  const y = e.beta;
  Ball._player.body.velocity.x += x;
  Ball._player.body.velocity.y += y;
},
```

Je mehr Sie das Gerät neigen, desto mehr Kraft wird auf den Ball ausgeübt, daher bewegt er sich schneller (die Geschwindigkeit ist höher).

![Eine Erklärung der X-, Y- und Z-Achsen eines Flame Mobilgeräts mit dem Cyber Orb Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-orientation.png)

#### Hinzufügen des Lochs

Das Hauptziel im Spiel ist es, den Ball von der Startposition zur Endposition zu bewegen: ein Loch im Boden. Die Implementierung sieht der Stelle, wo wir den Ball erstellt haben, sehr ähnlich aus und wird ebenfalls in der `create()`-Funktion unseres `Game`-Zustands hinzugefügt:

```js
this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, "hole");
this.physics.enable(this.hole, Phaser.Physics.ARCADE);
this.hole.anchor.set(0.5);
this.hole.body.setSize(2, 2);
```

Der Unterschied ist, dass sich der Körper unseres Lochs nicht bewegt, wenn wir es mit dem Ball treffen, und dass die Kollisionserkennung berechnet wird (die später in diesem Artikel besprochen wird).

#### Aufbau des Block-Labyrinths

Um das Spiel schwieriger und interessanter zu machen, werden wir einige Hindernisse zwischen den Ball und den Ausgang hinzufügen. Wir könnten einen Level-Editor verwenden, aber für den Zweck dieses Tutorials erstellen wir etwas Eigenes.

Um die Blockinformationen zu halten, verwenden wir ein Level-Datenarray: Für jeden Block speichern wir die obere und linke absolute Position in Pixeln (`x` und `y`) und den Blocktyp — horizontal oder vertikal (`t` mit dem `'w'` Wert, der Breite bedeutet, und `'h'`, der Höhe bedeutet). Dann, um das Level zu laden, parsen wir die Daten und zeigen die spezifischen Blöcke für dieses Level an. In der `initLevels`-Funktion haben wir:

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

Jedes Array-Element enthält eine Sammlung von Blöcken mit `x` und `y` Position und `t` Wert für jeden. Nach `levelData`, aber immer noch in der `initLevels`-Funktion, fügen wir die Blöcke in einem Array in der `for`-Schleife unter Verwendung einiger frameworkspezifischer Methoden hinzu:

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

Zuerst wird `add.group()` verwendet, um eine neue Gruppe von Elementen zu erstellen. Dann wird der `ARCADE`-Körpertyp für diese Gruppe festgelegt, um physikalische Berechnungen zu ermöglichen. Die `newLevel.create`-Methode erstellt neue Elemente in der Gruppe mit startenden linken und oberen Positionen und ihrem eigenen Bild. Wenn Sie nicht durch die Liste der Elemente erneut gehen möchten, um einer jeden einmalig eine Eigenschaft hinzuzufügen, können Sie `setAll` auf eine Gruppe anwenden, um sie auf alle Elemente in dieser Gruppe anzuwenden.

Die Objekte werden im `this.levels`-Array gespeichert, das standardmäßig unsichtbar ist. Um bestimmte Level zu laden, stellen wir sicher, dass die vorherigen Level ausgeblendet sind, und zeigen das aktuelle an:

```js
showLevel(level) {
  const lvl = level | this.level;
  if (this.levels[lvl - 2]) {
    this.levels[lvl - 2].visible = false;
  }
  this.levels[lvl - 1].visible = true;
}
```

Dank dessen hat das Spiel den Spielern eine Herausforderung zu bieten - jetzt müssen sie den Ball über den Spielbereich rollen und durch das aus den Blöcken gebaute Labyrinth führen. Es ist nur ein Beispiel für das Laden der Level, und es gibt nur 5 von ihnen, um die Idee zu veranschaulichen, aber Sie können daran arbeiten, dies selbst zu erweitern.

#### Kollisionserkennung

An diesem Punkt haben wir den Ball, der vom Spieler gesteuert wird, das Loch zu erreichen und die Hindernisse, die den Weg versperren. Es gibt jedoch ein Problem — unser Spiel hat noch keine Kollisionserkennung, sodass nichts passiert, wenn der Ball auf die Blöcke trifft — er geht einfach hindurch. Lassen Sie uns das beheben! Die gute Nachricht ist, dass das Framework die Berechnung der Kollisionserkennung übernimmt, wir müssen nur die kollidierenden Objekte in der `update()`-Funktion spezifizieren:

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

Dies wird dem Framework mitteilen, die `wallCollision`-Funktion auszuführen, wenn der Ball auf eine der Wände trifft. Wir können die `wallCollision`-Funktion verwenden, um jede gewünschte Funktionalität hinzuzufügen, wie das Abspielen des Aufprallgeräusches und die Implementierung der **Vibration API**.

#### Hinzufügen des Tons

Unter den vorinstallierten Assets war ein Audiotrack (in verschiedenen Formaten für die Browser-Kompatibilität), den wir jetzt verwenden können. Es muss zuerst in der `create()`-Funktion definiert werden:

```js
this.bounceSound = this.game.add.audio("audio-bounce");
```

Wenn der Status des Audios `true` ist (also die Geräusche im Spiel aktiviert sind), können wir den Ton in der `wallCollision`-Funktion abspielen:

```js
if (this.audioStatus) {
  this.bounceSound.play();
}
```

Das war's — das Laden und Abspielen von Geräuschen ist mit Phaser einfach.

#### Implementierung der Vibration API

Wenn die Kollisionserkennung wie erwartet funktioniert, fügen wir einige Spezialeffekte mit der Hilfe der Vibration API hinzu.

![Eine Darstellung der Vibrationen eines Flame Mobilgeräts mit dem Cyber Orb Spiel-Demo auf dem Bildschirm.](cyber-orb-flame-vibration.png)

Der beste Weg, sie in unserem Fall zu verwenden, ist, das Telefon jedes Mal vibrieren zu lassen, wenn der Ball auf die Wände trifft — innerhalb der `wallCollision`-Funktion:

```js
if ("vibrate" in window.navigator) {
  window.navigator.vibrate(100);
}
```

Wenn die `vibrate`-Methode vom Browser unterstützt und im `window.navigator`-Objekt verfügbar ist, lassen Sie das Telefon 100 Millisekunden vibrieren. Das war's!

#### Hinzufügen der verstrichenen Zeit

Um die Wiederspielbarkeit zu verbessern und Spielern die Möglichkeit zu geben, gegeneinander anzutreten, werden wir die verstrichene Zeit speichern — Spieler können dann versuchen, ihre beste Spielzeit zu verbessern. Um dies umzusetzen, müssen wir eine Variable erstellen, die die tatsächliche Anzahl der seit dem Beginn des Spiels verstrichenen Sekunden speichert, und um sie dem Spieler im Spiel anzuzeigen. Lassen Sie uns zuerst die Variablen in der `create`-Funktion definieren:

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

Wir definieren die oberen und linken Positionen des Textes, den Inhalt, der angezeigt wird, und das angewendete Styling für den Text. Wir haben dies auf dem Bildschirm gedruckt, aber es wäre gut, die Werte jede Sekunde zu aktualisieren:

```js
this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
```

Diese Schleife, auch in der `create`-Funktion, wird die `updateCounter`-Funktion jede einzelne Sekunde ab dem Beginn des Spiels ausführen, damit wir die Änderungen entsprechend anwenden können. So sieht die komplette `updateCounter`-Funktion aus:

```js
updateCounter() {
  this.timer++;
  this.timerText.setText(`Time: ${this.timer}`);
  this.totalTimeText.setText(`Total time: ${this.totalTimer+this.timer}`);
},
```

Wie Sie sehen, inkrementieren wir die `this.timer`-Variable und aktualisieren den Inhalt der Textobjekte bei jeder Iteration mit den aktuellen Werten, sodass der Spieler die verstrichene Zeit sieht.

#### Beenden des Levels und des Spiels

Der Ball rollt über den Bildschirm, der Timer funktioniert und wir haben das Loch erstellt, das wir erreichen müssen. Lassen Sie uns jetzt die Möglichkeit einrichten, das Level tatsächlich zu beenden! Die folgende Zeile in der `update()`-Funktion fügt einen Listener hinzu, der feuert, wenn der Ball das Loch erreicht.

```js
this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
```

Dies funktioniert ähnlich wie die `collide`-Methode, die zuvor erklärt wurde. Wenn der Ball mit dem Loch überlappt (anstatt zu kollidieren), wird die `finishLevel`-Funktion ausgeführt:

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

Wenn das aktuelle Level der maximalen Anzahl von Levels entspricht (in diesem Fall 5), ist das Spiel beendet — Sie erhalten eine Glückwunschnachricht zusammen mit der Anzahl der während des gesamten Spiels verstrichenen Sekunden und einem Knopf, der Sie zurück ins Hauptmenü führt.

Wenn das aktuelle Level unter 5 liegt, werden alle notwendigen Variablen zurückgesetzt und das nächste Level wird geladen.

## Ideen für neue Features

Dies ist lediglich ein funktionierendes Demospiel, das viele zusätzliche Features haben könnte. Wir können zum Beispiel Power-Ups hinzufügen, die auf dem Weg gesammelt werden können und die unseren Ball schneller rollen lassen, den Timer für ein paar Sekunden anhalten oder dem Ball spezielle Kräfte geben, um durch Hindernisse zu gehen. Es gibt auch Raum für Fallen, die den Ball verlangsamen oder es schwieriger machen, das Loch zu erreichen. Sie können mehr Level mit steigendem Schwierigkeitsgrad erstellen. Sie können sogar Erfolge, Bestenlisten und Medaillen für verschiedene Aktionen im Spiel implementieren. Es gibt endlose Möglichkeiten — sie hängen nur von Ihrer Vorstellungskraft ab.

## Zusammenfassung

Ich hoffe, dieses Tutorial wird Ihnen helfen, in die 2D-Spielentwicklung einzutauchen und Sie inspirieren, großartige Spiele selbst zu erstellen. Sie können das Demospiel [Cyber Orb](https://orb.enclavegames.com/) spielen und sich den [Quellcode auf GitHub](https://github.com/EnclaveGames/Cyber-Orb) ansehen.

HTML bietet uns rohe Werkzeuge, die darauf basierenden Frameworks werden schneller und besser, sodass jetzt eine großartige Zeit ist, mit der Entwicklung von Webspielen zu beginnen. In diesem Tutorial haben wir Phaser verwendet, aber es gibt eine Reihe von [anderen Frameworks](https://html5devstarter.enclavegames.com/#frameworks), die ebenfalls in Betracht gezogen werden sollten, wie [ImpactJS](https://impactjs.com/), [Construct 3](https://www.construct.net/en/make-games/games-editor) oder [PlayCanvas](https://playcanvas.com/) — es hängt von Ihren Vorlieben, Ihren Programmierfähigkeiten (oder deren Fehlen), der Projektskala, den Anforderungen und anderen Aspekten ab. Sie sollten sie alle ausprobieren und entscheiden, welches am besten zu Ihren Bedürfnissen passt.
