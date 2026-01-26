---
title: Desktop-Maus- und Tastatursteuerung
slug: Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Nun, da wir unsere mobilen Steuerelemente implementiert haben und das Spiel auf touch-fähigen Geräten spielbar ist, wäre es gut, Maus- und Tastaturunterstützung hinzuzufügen, damit das Spiel auch auf dem Desktop gespielt werden kann. Auf diese Weise können wir die Liste der unterstützten Plattformen erweitern. Wir werden uns dies im Folgenden ansehen.

Es ist auch einfacher, kontrollunabhängige Funktionen wie das Gameplay auf dem Desktop zu testen, wenn Sie es dort entwickeln. Dann müssen Sie nicht jedes Mal die Dateien auf ein mobiles Gerät übertragen, wenn Sie Änderungen im Quellcode vornehmen.

> [!NOTE]
> Das [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser gebaut und die Steuerung basiert auf Phaser, aber es könnte auch in reinem JavaScript gemacht werden. Der Vorteil der Verwendung von Phaser ist, dass es Hilfsvariablen und -funktionen für eine schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Überlegen wir zuerst, wie wir die Steuerung mit reinem JavaScript über Tastatur/Maus im Spiel implementieren können, um zu sehen, wie es funktionieren würde. Zuerst brauchen wir einen Ereignis-Listener, um auf die gedrückten Tasten zu hören:

```js
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
```

Jedes Mal, wenn eine Taste gedrückt wird, führen wir die Funktion `keyDownHandler` aus, und wenn das Drücken beendet wird, führen wir die Funktion `keyUpHandler` aus, sodass wir wissen, wann sie nicht mehr gedrückt ist. Dazu speichern wir die Information, ob die Tasten, die uns interessieren, gedrückt sind oder nicht:

```js
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
```

Dann werden wir auf die `keydown` und `keyup` Ereignisse hören und entsprechend in beiden Handler-Funktionen handeln. Innerhalb dieser Funktionen können wir den Code der gedrückten Taste aus der [`code`](/de/docs/Web/API/KeyboardEvent/code) Eigenschaft des Ereignisobjekts erhalten, sehen, welche Taste es ist, und dann die entsprechende Variable setzen. Die Codes sind alle lesbare String-Namen, aber Sie können [sie nachschlagen](/de/docs/Web/API/UI_Events/Keyboard_event_code_values), um sicher zu sein; `"ArrowLeft"` ist die linke Pfeiltaste:

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

Der `keyUpHandler` sieht fast genau so aus wie der obige `keyDownHandler`, aber anstatt die gedrückten Variablen auf `true` zu setzen, würden wir sie auf `false` setzen. Wenn die linke Pfeiltaste gedrückt wird (<kbd>⬅︎</kbd>; `"ArrowLeft"`), können wir die Variable `leftPressed` auf `true` setzen und in der `draw` Funktion die zugeordnete Aktion ausführen — das Schiff nach links bewegen:

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

Die `draw` Funktion löscht zuerst das gesamte Canvas — wir zeichnen jedes einzelne Frame alles von Grund auf neu. Dann werden die Variablen der gedrückten Tasten überprüft, und die Variablen `playerX` und `playerY` (die wir zuvor direkt nach `leftPressed` und den anderen definieren), die die Position des Schiffs halten, werden um einen gegebenen Betrag angepasst, sagen wir 5 Pixel. Dann wird das Spieler-Schiff auf dem Bildschirm gezeichnet und das nächste Zeichnen wird von innerhalb der [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame) aufgerufen.

![Reine JavaScript-Demo mit dem Schiff des Spielers (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann.](controls-purejsgame.png)

Sie können dieses Beispiel online in Aktion sehen bei [end3r.github.io/JavaScript-Game-Controls](https://end3r.github.io/JavaScript-Game-Controls/) und der vollständige Quellcode ist zu finden unter [github.com/end3r/JavaScript-Game-Controls](https://github.com/end3r/JavaScript-Game-Controls/).

## Phaser-Ansatz

Wie ich bereits erwähnt habe, können Sie alles selbst schreiben, aber Sie können auch Vorteile von eingebauten Funktionen in Frameworks wie Phaser nutzen. Diese sollten die Entwicklung erheblich beschleunigen. Alle Randfälle — Unterschiede zwischen den Browserimplementierungen etc. — werden durch das Framework behandelt, sodass Sie sich auf die eigentliche Aufgabe konzentrieren können, die Sie erledigen möchten.

### Maus

Die Maus-Interaktionen im Spiel konzentrieren sich auf das Klicken der Tasten. In Phaser nehmen die von Ihnen erstellten Tasten jede Art von Eingabe an, sei es eine Berührung auf Mobilgeräten oder ein Klick auf dem Desktop. Auf diese Weise funktioniert es direkt aus der Kiste auf dem Desktop, wenn Sie die Tasten bereits wie im Artikel [Mobile touch controls](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) gezeigt implementiert haben:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Die Taste wird zehn Pixel von der oberen linken Ecke des Bildschirms platziert, verwendet das Bild `logo-enclave` und wird die Funktion `clickEnclave()` beim Klicken ausführen. Wir können Aktionen direkt den Tasten zuweisen:

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

Die für das Schießen verwendete Taste funktioniert einwandfrei sowohl beim mobilen als auch beim Desktop-Ansatz.

Wenn Sie die Position des Mauszeigers auf dem Bildschirm verwenden möchten, können Sie dies mit `this.game.input.mousePointer` tun. Angenommen, Sie möchten ein Projektil abschießen, wenn die rechte Hälfte des Bildschirms mit einer Maus geklickt wird, würde dies wie folgt gemacht:

```js
if (this.game.input.mousePointer.isDown) {
  if (this.game.input.mousePointer.x > this.world.width * 0.5) {
    // shoot
  }
}
```

Wenn Sie die verschiedenen gedrückten Maustasten unterscheiden möchten, gibt es drei Vorgaben, die Sie auswählen können:

```js
this.game.input.mousePointer.leftButton.isDown;
this.game.input.mousePointer.middleButton.isDown;
this.game.input.mousePointer.rightButton.isDown;
```

Beachten Sie, dass es besser ist, `activePointer` anstelle von `mousePointer` für plattformunabhängige Eingaben zu verwenden, wenn Sie die Unterstützung für mobile Berührungsinteraktionen beibehalten möchten.

### Tastatur

Das ganze Spiel kann nur mit der Tastatur und nichts anderem gesteuert werden. Das eingebaute Objekt `this.game.input.keyboard` verwaltet die Eingaben von der Tastatur und hat [einige hilfreiche Methoden](https://phaser.io/docs/2.6.1/Phaser.Keyboard.html#methods) wie `addKey()` und `isDown()`. Es gibt auch das [Phaser.KeyCode](https://phaser.io/docs/2.6.1/Phaser.KeyCode.html#members) Objekt, das alle verfügbaren Tastaturtasten enthält:

![Eine vollständige Liste der innerhalb des Spiels verfügbaren Phaser-Tastencodes.](controls-keycodes.png)

Im Hauptmenü des Spiels können wir eine zusätzliche Möglichkeit hinzufügen, das Spiel zu starten. Die Starttaste kann angeklickt werden, um dies zu tun, aber wir können die <kbd>Enter</kbd>-Taste verwenden, um dasselbe zu tun:

```js
const keyEnter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
keyEnter.onDown.add(this.clickStart, this);
```

Sie können `addKey()` verwenden, um jede Taste hinzuzufügen, die das `Phaser.KeyCode` Objekt zu bieten hat. Die Funktion `onDown()` wird immer ausgeführt, wenn die <kbd>Enter</kbd>-Taste gedrückt wird. Sie startet die Methode `clickStart()`, die ein neues Spiel beginnt.

Es ist nützlich, eine Option bereitzustellen, das Spiel auf dem Desktop zu spielen, ohne eine Maus zu verwenden, sodass Sie Ihre Hände nicht von der Tastatur nehmen müssen.

### Steuerung des Spiels

Wir können die Tastatureingabe in Spielen, die mit Phaser gebaut wurden, unterstützen, indem wir die grundlegenden Richtungspfeiltasten in der `create()` Funktion mit der `createCursorKeys()` Funktion aktivieren:

```js
this.cursors = this.input.keyboard.createCursorKeys();
```

Dies erzeugt vier Richtungspfeiltasten für uns:

```js
this.cursors.left;
this.cursors.right;
this.cursors.up;
this.cursors.down;
```

Sie können auch die Tasten selbst definieren und eine alternative <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Steuermechanik anbieten. Zum Beispiel:

```js
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
```

Um sowohl die Pfeil- als auch die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten zu unterstützen, müssen wir dies tun:

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

In der `update()` Funktion können wir jetzt das Schiff des Spielers in jede Richtung mithilfe eines der beiden Bewegungstastenoptionen bewegen.

Wir können auch alternative Schießsteuerungen anbieten. Für Pfeiltasten wäre die natürliche Schusstaste auf der anderen Seite der Tastatur, sodass der Spieler die andere Hand benutzen kann — zum Beispiel die Taste <kbd>X</kbd>. Für <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten könnte es die Leertaste sein:

```js
this.keyFire1 = this.input.keyboard.addKey(Phaser.KeyCode.X);
this.keyFire2 = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
```

In der `update()` Funktion können wir leicht überprüfen, ob eine dieser beiden bei jedem Frame gedrückt wurde:

```js
if (this.keyFire1.isDown || this.keyFire2.isDown) {
  // fire the weapon
}
```

Wenn ja, dann ist es Zeit, einige Schüsse abzugeben!

Wir können sogar eine geheime Cheat-Taste definieren:

```js
this.keyCheat = this.input.keyboard.addKey(Phaser.KeyCode.C);
```

Und dann in der `update()` Funktion, wann immer <kbd>C</kbd> gedrückt wird, machen wir Folgendes:

```js
if (this.keyCheat.isDown) {
  this.player.health = this.player.maxHealth;
}
```

Wir können die Gesundheit des Spielers auf das Maximum setzen. Denken Sie daran: Es ist ein Geheimnis, also _sagen Sie es niemandem_!

### Wie zu spielen

Wir haben die Steuerungen implementiert, und jetzt sollten wir den Spieler über ihre Optionen zur Steuerung des Spiels informieren. Sie würden sonst nichts darüber wissen! Wenn wir den Anleitung-Bildschirm zeigen, auf dem die verschiedenen Möglichkeiten zur Steuerung des Schiffs im Spiel angezeigt werden, können wir anstatt allen alles zu zeigen, erkennen, ob das Spiel auf dem Desktop oder mobil gestartet wird, und nur die entsprechenden Steuerungen für das Gerät zeigen:

```js
if (this.game.device.desktop) {
  moveText = "Arrow keys or WASD to move";
  shootText = "X or Space to shoot";
} else {
  moveText = "Tap and hold to move";
  shootText = "Tap to shoot";
}
```

Wenn das Spiel auf dem Desktop läuft, wird die Meldung über die Cursor- und <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten angezeigt. Andernfalls wird die Meldung über die mobilen Berührungssteuerungen angezeigt.

![Anleitung-Bildschirm eines Spielerschiffs (mit Sternen im Hintergrund), das sich über Tastatur und Maus steuern lässt, mit der sichtbaren Nachricht: "Pfeiltasten oder WASD zum Bewegen" und "X oder Space zum Schießen".](controls-howtoplay.png)

Um den Anleitung-Bildschirm zu überspringen, können wir auf eine gedrückte Taste hören und weitermachen:

```js
this.input.keyboard.onDownCallback = function () {
  if (this.stateStatus === "intro") {
    this.hideIntro();
  }
};
```

Dies verbirgt das Intro und startet das eigentliche Spiel, ohne dass wir eine weitere neue Tastensteuerung nur dafür einrichten müssen.

### Pause- und Spielende-Bildschirme

Um das Spiel vollständig mit der Tastatur spielbar zu machen, sollte es möglich sein, zum Hauptmenü zurückzukehren, weiterzuspielen oder das Spiel von den Pause- und Spielende-Bildschirmen neu zu starten. Dies kann genau wie zuvor gemacht werden, indem Tastencodes erfasst und Aktionen ausgeführt werden. Zum Beispiel, indem `Phaser.KeyCode.Backspace` oder `Phaser.KeyCode.Delete` angegeben wird, können Sie eine Aktion einhaken, die ausgeführt wird, wenn die `Delete/Backspace`-Taste gedrückt wird.

## Zusammenfassung

Ok, wir haben uns mit Touch-, Tastatur- und Maussteuerungen beschäftigt. Jetzt schauen wir uns an, wie man das Spiel so einrichtet, dass es mit einem Konsolengamepad gesteuert werden kann, unter Verwendung der [Gamepad API](/de/docs/Web/API/Gamepad_API).

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
