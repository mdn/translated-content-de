---
title: Desktop-Maus- und Tastatursteuerungen
slug: Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Jetzt, da wir unsere mobilen Steuerungen implementiert haben und das Spiel auf Touch-Geräten spielbar ist, wäre es gut, Maus- und Tastaturunterstützung hinzuzufügen, damit das Spiel auch auf dem Desktop spielbar ist. Auf diese Weise können wir die Liste der unterstützten Plattformen erweitern. Wir schauen uns das im Folgenden an.

Es ist auch einfacher, plattformunabhängige Funktionen wie das Gameplay auf dem Desktop zu testen, wenn Sie es dort entwickeln, sodass Sie die Dateien nicht jedes Mal auf ein mobiles Gerät übertragen müssen, wenn Sie den Quellcode ändern.

> [!NOTE]
> Das [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser erstellt und die Steuerung wird von Phaser verwaltet, aber es könnte auch in reinem JavaScript erfolgen. Der Vorteil der Verwendung von Phaser ist, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welche Herangehensweise Sie wählen.

## Ansatz mit reinem JavaScript

Lassen Sie uns zunächst über die Implementierung von Tastatur-/Maussteuerungen mit reinem JavaScript im Spiel nachdenken, um zu sehen, wie es funktionieren würde. Zuerst benötigen wir einen Event Listener, um die gedrückten Tasten zu überwachen:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Jedes Mal, wenn eine Taste gedrückt wird, wird die `keyDownHandler`-Funktion ausgeführt, und wenn das Drücken beendet ist, wird die `keyUpHandler`-Funktion ausgeführt, sodass wir wissen, wann sie nicht mehr gedrückt wird. Dazu speichern wir die Information, ob die Tasten, an denen wir interessiert sind, gedrückt sind oder nicht:

```js
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
```

Dann werden wir auf die `keydown`- und `keyup`-Ereignisse hören und entsprechend in beiden Handler-Funktionen reagieren. In diesen können wir den Code der gedrückten Taste vom [`code`](/de/docs/Web/API/KeyboardEvent/code)-Eigenschaft des Ereignisobjekts erhalten, sehen, um welche Taste es sich handelt, und dann die entsprechende Variable setzen. Die Codes sind alle lesbare Zeichenfolgennamen, aber Sie können [sie nachschlagen](/de/docs/Web/API/UI_Events/Keyboard_event_code_values), um sicherzugehen; `"ArrowLeft"` ist der linke Pfeil:

```js
function keyDownHandler(event) {
  if (event.code === "ArrowRight") {
    rightPressed = true;
  } else if (event.code === "ArrowLeft") {
    leftPressed = true;
  }
  if (event.code === "ArrowDown") {
    downPressed = true;
  } else if (event.code === "ArrowUp") {
    upPressed = true;
  }
}
```

Die `keyUpHandler`-Funktion sieht fast genauso aus wie die `keyDownHandler`-Funktion oben, aber anstatt die gedrückten Variablen auf `true` zu setzen, setzen wir sie auf `false`. Wenn der linke Pfeil (<kbd>⬅︎</kbd>; `"ArrowLeft"`) gedrückt wird, können wir die Variable `leftPressed` auf `true` setzen und in der `draw`-Funktion die Aktion ausführen, die ihr zugewiesen ist — das Schiff nach links bewegen:

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (rightPressed) {
    playerX += 5;
  } else if (leftPressed) {
    playerX -= 5;
  }

  if (downPressed) {
    playerY += 5;
  } else if (upPressed) {
    playerY -= 5;
  }

  ctx.drawImage(img, playerX, playerY);
  requestAnimationFrame(draw);
}
```

Die `draw`-Funktion löscht zuerst das gesamte Canvas — wir zeichnen alles in jedem Frame von Grund auf neu. Dann werden die Variablen für die gedrückten Tasten überprüft und die `playerX`- und `playerY`-Variablen (die wir früher direkt nach `leftPressed` und den anderen definiert haben), die die Position des Schiffs halten, um einen bestimmten Betrag, sagen wir 5 Pixel, angepasst. Dann wird das Spielerschiff auf dem Bildschirm gezeichnet und das nächste Zeichnen wird innerhalb der [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame) aufgerufen.

![Reines JavaScript-Demo mit dem Spielerschiff (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann.](controls-purejsgame.png)

Sie können dieses Beispiel online in Aktion sehen unter [end3r.github.io/JavaScript-Game-Controls](https://end3r.github.io/JavaScript-Game-Controls/) und den vollständigen Quellcode finden Sie bei [github.com/end3r/JavaScript-Game-Controls](https://github.com/end3r/JavaScript-Game-Controls/).

## Phaser-Ansatz

Wie ich bereits erwähnt habe, können Sie alles selbst schreiben, aber Sie können auch die integrierten Funktionen von Frameworks wie Phaser nutzen. Diese erleichtern Ihnen das Leben und die Entwicklung wird viel schneller. Alle Randfälle — Unterschiede zwischen Browser-Implementierungen, usw. — werden vom Framework behandelt, sodass Sie sich auf die eigentliche Aufgabe konzentrieren können, die Sie erledigen möchten.

### Maus

Die Mausinteraktionen im Spiel konzentrieren sich auf das Klicken der Schaltflächen. In Phaser nehmen die Schaltflächen, die Sie erstellen, jede Art von Eingaben entgegen, sei es eine Berührung auf einem Mobilgerät oder ein Klick auf dem Desktop. Auf diese Weise funktioniert es, wenn Sie die Schaltflächen bereits wie im Artikel [Mobile touch controls](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) gezeigt implementiert haben, auch auf dem Desktop:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Die Schaltfläche wird zehn Pixel von der oberen linken Ecke des Bildschirms platziert, verwendet das `logo-enclave`-Bild und führt die `clickEnclave()`-Funktion aus, wenn darauf geklickt wird. Wir können Aktionen direkt den Schaltflächen zuweisen:

```js
this.buttonShoot = this.add.button(
  this.world.width * 0.5,
  0,
  "button-alpha",
  null,
  this,
);
this.buttonShoot.onInputDown.add(this.shootingPressed, this);
this.buttonShoot.onInputUp.add(this.shootingReleased, this);
```

Die Schaltfläche, die für das Schießen verwendet wird, funktioniert sowohl auf der mobilen als auch auf der Desktop-Version einwandfrei.

Wenn Sie die Position des Mauszeigers auf dem Bildschirm nutzen möchten, können Sie dies mit `this.game.input.mousePointer` tun. Nehmen wir an, Sie möchten eine Kugel abfeuern, wenn die rechte Hälfte des Bildschirms mit der Maus angeklickt wird, würde dies so getan werden:

```js
if (this.game.input.mousePointer.isDown) {
  if (this.game.input.mousePointer.x > this.world.width * 0.5) {
    // shoot
  }
}
```

Wenn Sie die gedrückten Maustasten unterscheiden möchten, können Sie aus drei Standardtasten wählen:

```js
this.game.input.mousePointer.leftButton.isDown;
this.game.input.mousePointer.middleButton.isDown;
this.game.input.mousePointer.rightButton.isDown;
```

Denken Sie daran, dass anstelle von `mousePointer` besser `activePointer` für plattformunabhängige Eingaben verwendet werden sollte, wenn Sie die Unterstützung für mobile Touch-Interaktionen beibehalten möchten.

### Tastatur

Das gesamte Spiel kann nur mit der Tastatur und sonst nichts gesteuert werden. Das eingebaute `this.game.input.keyboard`-Objekt verwaltet die Eingaben von der Tastatur und verfügt über [ein paar hilfreiche Methoden](https://phaser.io/docs/2.6.1/Phaser.Keyboard.html#methods) wie `addKey()` und `isDown()`. Es gibt auch das [Phaser.KeyCode](https://phaser.io/docs/2.6.1/Phaser.KeyCode.html#members)-Objekt, das alle verfügbaren Tastaturtasten enthält:

![Eine vollständige Liste der Phaser-Tastencodes, die im Spiel verfügbar sind.](controls-keycodes.png)

Im Hauptmenü des Spiels können wir eine zusätzliche Möglichkeit hinzufügen, um das Spielen zu beginnen. Der Startknopf kann geklickt werden, um dies zu tun, aber wir können die <kbd>Enter</kbd>-Taste verwenden, um dasselbe zu tun:

```js
const keyEnter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
keyEnter.onDown.add(this.clickStart, this);
```

Sie können `addKey()` verwenden, um jede Taste hinzuzufügen, die das `Phaser.KeyCode`-Objekt bietet. Die `onDown()`-Funktion wird jedes Mal ausgeführt, wenn die <kbd>Enter</kbd>-Taste gedrückt wird. Sie startet die `clickStart()`-Methode, die ein neues Spiel beginnt.

Es ist nützlich, die Möglichkeit zu bieten, das Spiel auf dem Desktop ohne Verwendung einer Maus zu spielen, sodass Sie Ihre Hände nicht von der Tastatur nehmen müssen.

### Spielsteuerung

Wir können Tastatureingaben in Spielen unterstützen, die mit Phaser erstellt wurden, indem die grundlegenden Cursor-Tasten in der `create()`-Funktion aktiviert werden, indem die `createCursorKeys()`-Funktion verwendet wird:

```js
this.cursors = this.input.keyboard.createCursorKeys();
```

Dies erstellt für uns vier Richtungspfeiltasten:

```js
this.cursors.left;
this.cursors.right;
this.cursors.up;
this.cursors.down;
```

Sie können die Tasten auch selbst definieren und eine alternative <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Steuerung anbieten. Zum Beispiel:

```js
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
```

Um sowohl die Cursor- als auch die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten zu unterstützen, müssen wir dies tun:

```js
if (this.cursors.left.isDown || this.keyLeft.isDown) {
  // move left
} else if (this.cursors.right.isDown || this.keyRight.isDown) {
  // move right
}

if (this.cursors.up.isDown || this.keyUp.isDown) {
  // move up
} else if (this.cursors.down.isDown || this.keyDown.isDown) {
  // move down
}
```

In der `update()`-Funktion können wir jetzt das Spielerschiff in jede Richtung bewegen, indem eine der beiden Bewegungstastenoptionen verwendet wird.

Wir können auch alternative Schießsteuerungen anbieten. Für Cursor-Tasten wäre die natürliche Schusstaste auf der anderen Seite der Tastatur, sodass der Spieler die andere Hand verwenden kann — zum Beispiel die <kbd>X</kbd>-Taste. Für <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten kann es die Leertaste sein:

```js
this.keyFire1 = this.input.keyboard.addKey(Phaser.KeyCode.X);
this.keyFire2 = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
```

In der `update()`-Funktion können wir leicht überprüfen, ob eine der beiden bei jedem Frame gedrückt wurde:

```js
if (this.keyFire1.isDown || this.keyFire2.isDown) {
  // fire the weapon
}
```

Wenn ja, dann ist es Zeit, einige Kugeln zu schießen!

Wir können sogar eine geheime Schummel-Taste definieren:

```js
this.keyCheat = this.input.keyboard.addKey(Phaser.KeyCode.C);
```

Und dann in der `update()`-Funktion, wann immer <kbd>C</kbd> gedrückt wird, machen wir dies:

```js
if (this.keyCheat.isDown) {
  this.player.health = this.player.maxHealth;
}
```

Wir können die Gesundheit des Spielers auf das Maximum setzen. Denken Sie daran: es ist ein Geheimnis, also _erzählen Sie es niemandem_!

### Wie man spielt

Wir haben die Steuerungen implementiert, und jetzt sollten wir den Spieler über seine Möglichkeiten informieren, das Spiel zu steuern. Sonst wüsste er nicht davon! Wenn der Bildschirm "Wie man spielt" angezeigt wird, auf dem die verschiedenen Möglichkeiten gezeigt werden, das Schiff im Spiel zu steuern, können wir erkennen, ob das Spiel auf dem Desktop oder mobil gestartet wird und nur die entsprechenden Steuerungen für das Gerät anzeigen:

```js
if (this.game.device.desktop) {
  moveText = "Arrow keys or WASD to move";
  shootText = "X or Space to shoot";
} else {
  moveText = "Tap and hold to move";
  shootText = "Tap to shoot";
}
```

Wenn das Spiel auf dem Desktop ausgeführt wird, wird die Nachricht über die Cursor- und <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten angezeigt. Andernfalls wird die Nachricht über mobile Touch-Steuerungen angezeigt.

![Wie man spielt - Bildschirm eines Spielerschiffs (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann, und die sichtbare Nachricht: "Pfeiltasten oder WASD zum Bewegen" und "X oder Leertaste zum Schießen".](controls-howtoplay.png)

Um den Bildschirm "Wie man spielt" zu überspringen, können wir auf das Drücken einer beliebigen Taste hören und weitermachen:

```js
this.input.keyboard.onDownCallback = function () {
  if (this.stateStatus === "intro") {
    this.hideIntro();
  }
};
```

Dies blendet das Intro aus und startet das eigentliche Spiel, ohne dass wir eine andere neue Tastenkontrolle nur dafür einrichten müssen.

### Pause- und Game-over-Bildschirme

Damit das Spiel vollständig mit der Tastatur spielbar ist, sollte es möglich sein, im Pause- und Game-over-Bildschirm zum Hauptmenü zurückzukehren, das Spiel fortzusetzen oder neu zu starten. Es kann genauso wie zuvor gemacht werden, indem Tastencodes erfasst und Aktionen ausgeführt werden. Zum Beispiel, indem `Phaser.KeyCode.Backspace` oder `Phaser.KeyCode.Delete` spezifiziert wird, können Sie eine Aktion einrichten, die bei Drücken der `Löschen/Rückschritt`-Taste ausgelöst wird.

## Zusammenfassung

Okay, wir haben uns mit Touch-, Tastatur- und Maussteuerungen befasst. Lassen Sie uns nun weitermachen und uns anschauen, wie das Spiel eingerichtet werden kann, um mit einem Konsolenspielpad über die [Gamepad API](/de/docs/Web/API/Gamepad_API) gesteuert zu werden.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
