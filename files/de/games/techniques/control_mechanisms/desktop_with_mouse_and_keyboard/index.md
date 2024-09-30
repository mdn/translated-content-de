---
title: Desktop Maus- und Tastatursteuerung
slug: Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Da wir jetzt unsere mobilen Steuerungen eingerichtet haben und das Spiel auf touchfähigen Geräten spielbar ist, wäre es gut, Maus- und Tastaturunterstützung hinzuzufügen, damit das Spiel auch auf dem Desktop spielbar ist. Auf diese Weise können wir die Liste der unterstützten Plattformen erweitern. Dies schauen wir uns im Folgenden an.

Es ist auch einfacher, plattformunabhängige Funktionen wie das Gameplay auf dem Desktop zu testen, wenn Sie es dort entwickeln, sodass Sie die Dateien nicht jedes Mal auf ein mobiles Gerät übertragen müssen, wenn Sie eine Änderung am Quellcode vornehmen.

> [!NOTE]
> Das Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde mit Phaser entwickelt und die Steuerung ist Phaser-basiert, aber sie könnte auch in reinem JavaScript implementiert werden. Der Vorteil der Verwendung von Phaser besteht darin, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Beginnen wir damit, zu überlegen, wie wir die Steuerung in reinem JavaScript implementieren können, um zu sehen, wie es funktionieren würde. Zunächst benötigen wir einen Event-Listener, um auf die gedrückten Tasten zu hören:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Immer wenn eine Taste gedrückt wird, führen wir die Funktion `keyDownHandler` aus, und wenn das Drücken beendet ist, führen wir die Funktion `keyUpHandler` aus, sodass wir wissen, wann sie nicht mehr gedrückt wird. Dazu werden wir die Information festhalten, ob die Tasten, an denen wir interessiert sind, gedrückt sind oder nicht:

```js
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
```

Dann lauschen wir auf die `keydown`- und `keyup`-Ereignisse und handeln entsprechend in beiden Handler-Funktionen. Innerhalb dieser Funktionen können wir den Code der gedrückten Taste aus der [`code`](/de/docs/Web/API/KeyboardEvent/code)-Eigenschaft des Ereignisobjekts abrufen, sehen, welche Taste es ist, und dann die entsprechende Variable setzen. Die Codes sind alle lesbare Zeichenfolgen, aber Sie können sie [nachschlagen](/de/docs/Web/API/UI_Events/Keyboard_event_code_values), um sicherzugehen; `"ArrowLeft"` ist der linke Pfeil:

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

Der `keyUpHandler` sieht fast genauso aus wie der `keyDownHandler` oben, aber anstatt die gedrückten Variablen auf `true` zu setzen, würden wir sie auf `false` setzen. Wenn der linke Pfeil gedrückt wird (<kbd>⬅︎</kbd>; `"ArrowLeft"`), können wir die Variable `leftPressed` auf `true` setzen und in der `draw`-Funktion die ihr zugeordnete Aktion ausführen — das Schiff nach links bewegen:

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

Die `draw`-Funktion löscht zuerst das gesamte Canvas — wir zeichnen alles bei jedem einzelnen Frame von Grund auf neu. Dann werden die Variablen für die gedrückten Tasten überprüft und die Variablen `playerX` und `playerY` (die wir zuvor direkt nach `leftPressed` und den anderen definieren), die die Position des Schiffs halten, um einen bestimmten Betrag, sagen wir 5 Pixel, angepasst. Dann wird das Spielerschiff auf dem Bildschirm gezeichnet und der nächste Zeichenvorgang wird von innerhalb der [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame) aufgerufen.

![Reines JavaScript-Demo mit dem Spielerschiff (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann.](controls-purejsgame.png)

Sie können dieses Beispiel online in Aktion sehen unter [end3r.github.io/JavaScript-Game-Controls](https://end3r.github.io/JavaScript-Game-Controls/) und den vollständigen Quellcode finden Sie bei [github.com/end3r/JavaScript-Game-Controls](https://github.com/end3r/JavaScript-Game-Controls/).

## Phaser Ansatz

Wie ich bereits erwähnt habe, können Sie alles selbst schreiben, aber Sie können auch die in Frameworks wie Phaser eingebauten Funktionen nutzen. Diese erleichtern Ihnen das Leben und beschleunigen die Entwicklung erheblich. Alle Randfälle – Unterschiede zwischen Browser-Implementierungen, etc. – werden vom Framework behandelt, sodass Sie sich auf die eigentliche Aufgabe konzentrieren können, die Sie erledigen möchten.

### Maus

Die Mausinteraktionen im Spiel konzentrieren sich auf das Klicken der Schaltflächen. In Phaser akzeptieren die von Ihnen erstellten Schaltflächen jede Art von Eingabe, sei es ein Touch auf einem Mobilgerät oder ein Klick auf dem Desktop. Auf diese Weise funktioniert es direkt auf dem Desktop, wenn Sie die Schaltflächen bereits wie im Artikel [Mobile-Touch-Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) gezeigt haben implementiert haben:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Die Schaltfläche wird zehn Pixel von der oberen linken Ecke des Bildschirms entfernt platziert, verwendet das Bild `logo-enclave` und führt die Funktion `clickEnclave()` aus, wenn sie angeklickt wird. Wir können Aktionen direkt den Schaltflächen zuweisen:

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

Die für das Schießen verwendete Schaltfläche funktioniert sowohl im mobilen als auch im Desktop-Ansatz einwandfrei.

Wenn Sie die Position des Mauszeigers auf dem Bildschirm verwenden möchten, können Sie dies mit `this.game.input.mousePointer` tun. Angenommen, Sie möchten eine Kugel abschießen, wenn die rechte Hälfte des Bildschirms mit der Maus angeklickt wird, würde das folgendermaßen aussehen:

```js
if (this.game.input.mousePointer.isDown) {
  if (this.game.input.mousePointer.x > this.world.width * 0.5) {
    // shoot
  }
}
```

Wenn Sie die gedrückten Maustasten unterscheiden möchten, stehen Ihnen drei Standardoptionen zur Auswahl:

```js
this.game.input.mousePointer.leftButton.isDown;
this.game.input.mousePointer.middleButton.isDown;
this.game.input.mousePointer.rightButton.isDown;
```

Beachten Sie, dass es besser ist, anstelle von `mousePointer` `activePointer` für plattformunabhängige Eingaben zu verwenden, wenn Sie die Unterstützung für mobile Touch-Interaktionen beibehalten möchten.

### Tastatur

Das gesamte Spiel kann nur mit der Tastatur gesteuert werden und sonst nichts. Das eingebaute Objekt `this.game.input.keyboard` verwaltet die Eingaben von der Tastatur und verfügt über [einige nützliche Methoden](https://phaser.io/docs/2.6.1/Phaser.Keyboard.html#methods) wie `addKey()` und `isDown()`. Es gibt auch das [Phaser.KeyCode](https://phaser.io/docs/2.6.1/Phaser.KeyCode.html#members)-Objekt, das alle verfügbaren Tastaturtasten enthält:

![Eine vollständige Liste der Phaser-Tastencodes, die im Spiel verfügbar sind.](controls-keycodes.png)

Im Hauptmenü des Spiels können wir eine zusätzliche Möglichkeit hinzufügen, um zu spielen zu beginnen. Die Start-Schaltfläche kann geklickt werden, um dies zu tun, aber wir können auch die <kbd>Enter</kbd> Taste verwenden, um das Gleiche zu tun:

```js
const keyEnter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
keyEnter.onDown.add(this.clickStart, this);
```

Sie können `addKey()` verwenden, um jede Taste hinzuzufügen, die das `Phaser.KeyCode`-Objekt bietet. Die `onDown()`-Funktion wird immer dann ausgeführt, wenn die <kbd>Enter</kbd>-Taste gedrückt wird. Sie wird die Methode `clickStart()` ausführen, die ein neues Spiel startet.

Es ist nützlich, eine Option bereitzustellen, das Spiel auf dem Desktop zu spielen, ohne eine Maus zu verwenden, damit Sie die Hände nicht von der Tastatur nehmen müssen.

### Steuerung des Spiels

Wir können die Tastatureingabe in Spielen, die mit Phaser erstellt wurden, unterstützen, indem wir die grundlegenden Cursortasten in der `create()`-Funktion mit der `createCursorKeys()`-Funktion aktivieren:

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

Sie können die Tasten auch selbst definieren und eine alternative Steuerungsmöglichkeit mit <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> anbieten. Zum Beispiel:

```js
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
```

Um sowohl die Cursor als auch die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten zu unterstützen, müssen wir dies tun:

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

In der `update()`-Funktion können wir das Spielerschiff nun mit einer der beiden Bewegungstastenkombinationen in jede Richtung bewegen.

Wir können auch alternative Schießsteuerungen anbieten. Bei den Cursortasten wäre die natürliche Schusstaste auf der anderen Seite der Tastatur, damit der Spieler die andere Hand verwenden kann — zum Beispiel die <kbd>X</kbd>-Taste. Bei den <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten kann es die Leertaste sein:

```js
this.keyFire1 = this.input.keyboard.addKey(Phaser.KeyCode.X);
this.keyFire2 = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
```

In der `update()`-Funktion können wir leicht überprüfen, ob eine dieser beiden bei jedem Frame gedrückt wurde:

```js
if (this.keyFire1.isDown || this.keyFire2.isDown) {
  // fire the weapon
}
```

Wenn ja, dann ist es Zeit, einige Kugeln abzufeuern!

Wir können sogar eine geheime Cheat-Taste definieren:

```js
this.keyCheat = this.input.keyboard.addKey(Phaser.KeyCode.C);
```

Und dann in der `update()`-Funktion, wenn <kbd>C</kbd> gedrückt wird, machen wir Folgendes:

```js
if (this.keyCheat.isDown) {
  this.player.health = this.player.maxHealth;
}
```

Wir können die Gesundheit des Spielers auf das Maximum setzen. Denken Sie daran: Es ist ein Geheimnis, also _sagen Sie es niemandem_!

### Anleitung zum Spiel

Wir haben die Steuerungen implementiert, und jetzt sollten wir den Spieler über seine Optionen zur Steuerung des Spiels informieren. Sonst wüsste er nichts davon! Wenn Sie den Bildschirm "Wie man spielt" anzeigen, auf dem die verschiedenen Möglichkeiten zur Steuerung des Schiffs im Spiel gezeigt werden, können wir, anstatt sie allen zu zeigen, erkennen, ob das Spiel auf einem Desktop oder einem Mobilgerät gestartet wird und nur die entsprechenden Steuerungen für das Gerät anzeigen:

```js
if (this.game.device.desktop) {
  moveText = "Arrow keys or WASD to move";
  shootText = "X or Space to shoot";
} else {
  moveText = "Tap and hold to move";
  shootText = "Tap to shoot";
}
```

Wenn das Spiel auf dem Desktop läuft, wird die Nachricht über die Cursortasten und <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten angezeigt. Wenn nicht, wird die Nachricht über die mobilen Touch-Steuerungen angezeigt.

![Bildschirm "Wie man spielt" eines Spielerschiffs (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann, und die sichtbare Nachricht: "Pfeiltasten oder WASD, um sich zu bewegen" und "X oder Leertaste, um zu schießen".](controls-howtoplay.png)

Um den "Wie man spielt"-Bildschirm zu überspringen, können wir auf eine beliebige Taste hören, die gedrückt wird, und weitermachen:

```js
this.input.keyboard.onDownCallback = function () {
  if (this.stateStatus === "intro") {
    this.hideIntro();
  }
};
```

Dies blendet das Intro aus und startet das eigentliche Spiel, ohne dass wir eine weitere neue Tastensteuerung nur dafür einrichten müssen.

### Pause- und Game-Over-Bildschirme

Um das Spiel vollständig mit der Tastatur spielbar zu machen, sollte es möglich sein, vom Pause- und Game-Over-Bildschirm zum Hauptmenü zurückzukehren, weiterzuspielen oder das Spiel neu zu starten. Dies kann genau wie zuvor geschehen, indem Tastencodes erfasst und Aktionen ausgeführt werden. Zum Beispiel können Sie durch die Angabe von `Phaser.KeyCode.Backspace` oder `Phaser.KeyCode.Delete` eine Aktion anschließen, die ausgelöst wird, wenn die `Löschen/Rücktaste` gedrückt wird.

## Zusammenfassung

Okay, wir haben Touch-, Tastatur- und Maussteuerungen behandelt. Sehen wir uns nun an, wie das Spiel so eingerichtet werden kann, dass es mit einem Konsolen-Gamepad gesteuert werden kann, indem die [Gamepad-API](/de/docs/Web/API/Gamepad_API) verwendet wird.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
