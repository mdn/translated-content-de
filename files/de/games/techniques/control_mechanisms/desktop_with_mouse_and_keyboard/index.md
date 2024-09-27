---
title: Desktop-Maus- und Tastatursteuerung
slug: Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Nun, da wir unsere mobilen Steuerungen implementiert und das Spiel auf Geräten mit Touch-Funktionalität spielbar gemacht haben, wäre es gut, Maus- und Tastaturunterstützung hinzuzufügen, damit das Spiel auch auf dem Desktop spielbar ist. Auf diese Weise können wir die Liste der unterstützten Plattformen erweitern. Wir werden uns das im Folgenden ansehen.

Es ist auch einfacher, steuerungsunabhängige Funktionen wie das Gameplay auf dem Desktop zu testen, wenn Sie es dort entwickeln, sodass Sie die Dateien nicht jedes Mal auf ein mobiles Gerät übertragen müssen, wenn Sie eine Änderung im Quellcode vornehmen.

> [!NOTE]
> Das [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde mit Phaser erstellt, und die Verwaltung der Steuerungen erfolgt auf Phaser-Basis, könnte aber auch in reinem JavaScript umgesetzt werden. Der Vorteil der Verwendung von Phaser besteht darin, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung anbietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Lassen Sie uns zuerst darüber nachdenken, reine JavaScript-Tastatur-/Maussteuerungen im Spiel zu implementieren, um zu sehen, wie das funktionieren würde. Zuerst würden wir einen Ereignislistener benötigen, um auf die gedrückten Tasten zu hören:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wann immer eine Taste gedrückt wird, führen wir die Funktion `keyDownHandler` aus, und wenn das Drücken endet, die Funktion `keyUpHandler`, damit wir wissen, wann sie nicht mehr gedrückt wird. Dazu speichern wir die Information, ob die Tasten, an denen wir interessiert sind, gedrückt werden oder nicht:

```js
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
```

Dann werden wir auf die Ereignisse `keydown` und `keyup` hören und entsprechend in beiden Handler-Funktionen reagieren. Innerhalb dieser Funktionen können wir den Code der gedrückten Taste über die [`code`](/de/docs/Web/API/KeyboardEvent/code)-Eigenschaft des Ereignisobjekts erhalten, um zu sehen, welche Taste es ist, und dann die richtige Variable setzen. Die Codes sind alle lesbare String-Namen, aber Sie können [sie nachschlagen](/de/docs/Web/API/UI_Events/Keyboard_event_code_values), um sicherzugehen; `"ArrowLeft"` ist der linke Pfeil:

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

Der `keyUpHandler` sieht fast genau gleich aus wie der `keyDownHandler` oben, aber anstatt die gedrückten Variablen auf `true` zu setzen, würden wir sie auf `false` setzen. Wenn der linke Pfeil gedrückt wird (<kbd>⬅︎</kbd>; `"ArrowLeft"`), können wir die Variable `leftPressed` auf `true` setzen und in der `draw`-Funktion die Aktion ausführen, die ihr zugewiesen ist – das Schiff nach links bewegen:

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

Die `draw`-Funktion löscht zuerst das gesamte Canvas – wir zeichnen alles von Grund auf neu in jedem einzelnen Frame. Dann werden die gedrückten Tastenvariablen überprüft und die `playerX` und `playerY` Variablen (die wir zuvor direkt nach `leftPressed` und den anderen definieren), die die Position des Schiffs halten, um einen bestimmten Betrag, sagen wir 5 Pixel, angepasst. Dann wird das Spielerschiff auf dem Bildschirm gezeichnet und der nächste Zeichenvorgang wird aus dem Inneren der [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame) aufgerufen.

![Reines JavaScript-Demo mit Spielerschiff (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann.](controls-purejsgame.png)

Dieses Beispiel können Sie online in Aktion sehen bei [end3r.github.io/JavaScript-Game-Controls](https://end3r.github.io/JavaScript-Game-Controls/) und den vollständigen Quellcode finden Sie unter [github.com/end3r/JavaScript-Game-Controls](https://github.com/end3r/JavaScript-Game-Controls/).

## Phaser-Ansatz

Wie ich bereits erwähnte, können Sie alles selbst schreiben, aber Sie können auch die eingebauten Funktionen in Frameworks wie Phaser nutzen. Diese erleichtern Ihnen das Leben und beschleunigen die Entwicklung erheblich. Alle Randfälle – Unterschiede zwischen Browser-Implementierungen usw. – werden durch das Framework gehandhabt, sodass Sie sich auf die eigentliche Aufgabe konzentrieren können, die Sie erledigen möchten.

### Maus

Die Mausinteraktionen im Spiel konzentrieren sich darauf, die Buttons zu klicken. In Phaser nehmen die von Ihnen erstellten Buttons jede Art von Eingabe entgegen, sei es ein Touch auf mobilen Geräten oder ein Klick auf dem Desktop. Wenn Sie also die Buttons bereits wie im Artikel [Mobile Touch Controls](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) implementiert haben, funktioniert es von selbst auch auf dem Desktop:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Der Button wird zehn Pixel vom oberen linken Bildschirmrand entfernt platziert, verwendet das `logo-enclave`-Bild und führt die Funktion `clickEnclave()` aus, wenn er angeklickt wird. Wir können Aktionen direkt den Buttons zuweisen:

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

Der Button, der für das Schießen verwendet wird, funktioniert sowohl auf mobilen als auch auf Desktop-Geräten einwandfrei.

Wenn Sie die Position des Mauszeigers auf dem Bildschirm verwenden möchten, können Sie dies mit `this.game.input.mousePointer` tun. Angenommen, Sie möchten eine Kugel abschießen, wenn die rechte Bildschirmhälfte mit der Maus angeklickt wird, würde dies ungefähr so aussehen:

```js
if (this.game.input.mousePointer.isDown) {
  if (this.game.input.mousePointer.x > this.world.width * 0.5) {
    // shoot
  }
}
```

Wenn Sie die gedrückten Maustasten unterscheiden möchten, gibt es drei Standardmöglichkeiten, aus denen Sie wählen können:

```js
this.game.input.mousePointer.leftButton.isDown;
this.game.input.mousePointer.middleButton.isDown;
this.game.input.mousePointer.rightButton.isDown;
```

Beachten Sie, dass es besser ist, `activePointer` für plattformunabhängige Eingaben zu verwenden, anstatt `mousePointer`, wenn Sie die Unterstützung für mobile Touch-Interaktionen beibehalten möchten.

### Tastatur

Das gesamte Spiel kann nur mit der Tastatur gesteuert werden, ohne irgendetwas anderes. Das integrierte Objekt `this.game.input.keyboard` verwaltet die Eingaben von der Tastatur und verfügt über [einige hilfreiche Methoden](https://phaser.io/docs/2.6.1/Phaser.Keyboard.html#methods) wie `addKey()` und `isDown()`. Es gibt auch das Objekt [Phaser.KeyCode](https://phaser.io/docs/2.6.1/Phaser.KeyCode.html#members), das alle verfügbaren Tastaturtasten enthält:

![Eine vollständige Liste der verfügbaren Phaser-Tastencodes im Spiel.](controls-keycodes.png)

Im Hauptmenü des Spiels können wir eine zusätzliche Möglichkeit hinzufügen, das Spiel zu beginnen. Der Start-Button kann geklickt werden, um dies zu tun, aber wir können die <kbd>Enter</kbd>-Taste verwenden, um dasselbe zu tun:

```js
const keyEnter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
keyEnter.onDown.add(this.clickStart, this);
```

Sie können `addKey()` verwenden, um jede beliebige Taste hinzuzufügen, die das `Phaser.KeyCode`-Objekt anbietet. Die Funktion `onDown()` wird ausgeführt, wann immer die <kbd>Enter</kbd>-Taste gedrückt wird. Sie startet die Methode `clickStart()`, die ein neues Spiel beginnt.

Es ist praktisch, die Option zu bieten, das Spiel auf dem Desktop zu spielen, ohne eine Maus zu verwenden, sodass Sie die Hände nicht von der Tastatur nehmen müssen.

### Steuerung des Spiels

Wir können die Tastatureingabe in Spielen, die mit Phaser erstellt wurden, unterstützen, indem wir die grundlegenden Pfeiltasten in der Funktion `create()` mit der Funktion `createCursorKeys()` aktivieren:

```js
this.cursors = this.input.keyboard.createCursorKeys();
```

Dies erstellt vier Richtungspfeiltasten für uns:

```js
this.cursors.left;
this.cursors.right;
this.cursors.up;
this.cursors.down;
```

Sie können die Tasten auch selbst definieren und eine alternative Steuermechanik mit <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> anbieten. Zum Beispiel:

```js
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
```

Um sowohl die Pfeil- als auch die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten zu unterstützen, müssen wir dies tun:

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

In der Funktion `update()` können wir jetzt das Spielerschiff in jede Richtung mit einem der beiden Satzes von Bewegungstastenoptionen steuern.

Wir können auch alternative Feuereinstellungen anbieten. Für die Pfeiltasten wäre der natürliche Schussknopf auf der anderen Seite der Tastatur, sodass der Spieler die andere Hand benutzen kann – zum Beispiel die <kbd>X</kbd>-Taste. Für die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten kann es die Leertaste sein:

```js
this.keyFire1 = this.input.keyboard.addKey(Phaser.KeyCode.X);
this.keyFire2 = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
```

In der Funktion `update()` können wir leicht überprüfen, ob eine dieser beiden in jedem Frame gedrückt wurde:

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

Und dann in der `update()`-Funktion, wann immer <kbd>C</kbd> gedrückt wird, werden wir dies tun:

```js
if (this.keyCheat.isDown) {
  this.player.health = this.player.maxHealth;
}
```

Wir können die Gesundheit des Spielers auf das Maximum setzen. Denken Sie daran: es ist ein Geheimnis, also _verraten Sie es niemandem_!

### Anleitung zum Spielen

Wir haben die Steuerungen implementiert und sollten nun den Spieler über seine Optionen zur Steuerung des Spiels informieren. Andernfalls wüsste er nichts davon! Beim Anzeigen des Bildschirms zur Anleitung, wie man spielt, auf dem die verschiedenen Möglichkeiten zur Steuerung des Schiffs im Spiel gezeigt werden, können wir anstatt sie allen zu zeigen, erkennen, ob das Spiel auf einem Desktop oder einem mobilen Gerät gestartet wird und nur die entsprechenden Steuerungen für das jeweilige Gerät anzeigen:

```js
if (this.game.device.desktop) {
  moveText = "Arrow keys or WASD to move";
  shootText = "X or Space to shoot";
} else {
  moveText = "Tap and hold to move";
  shootText = "Tap to shoot";
}
```

Wenn das Spiel auf einem Desktop ausgeführt wird, wird die Nachricht über die Pfeil- und <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>-Tasten angezeigt. Andernfalls wird die Nachricht zur Steuerung per Mobile-Touch angezeigt.

![Anleitung Bildschirm eines Spielerschiffs (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann, und die sichtbare Nachricht: "Pfeiltasten oder WASD zum Bewegen" und "X oder Leertaste zum Schießen".](controls-howtoplay.png)

Um den Bildschirm zur Anleitung zu überspringen, können wir auf eine beliebige gedrückte Taste hören und fortfahren:

```js
this.input.keyboard.onDownCallback = function () {
  if (this.stateStatus === "intro") {
    this.hideIntro();
  }
};
```

Dies blendet das Intro aus und startet das eigentliche Spiel, ohne dass wir eine andere neue Tastensteuerung dafür einrichten müssen.

### Pause- und Game-Over-Bildschirme

Um das Spiel vollständig mit der Tastatur spielbar zu machen, sollte es möglich sein, zum Hauptmenü zurückzukehren, das Spiel fortzusetzen oder vom Pause- und Game-Over-Bildschirm aus neu zu starten. Dies kann genau wie zuvor geschehen, indem wir Tasten-Codes erfassen und Aktionen ausführen. Zum Beispiel können Sie durch das Festlegen von `Phaser.KeyCode.Backspace` oder `Phaser.KeyCode.Delete` eine Aktion verknüpfen, die ausgelöst wird, wenn die `Entf/Backspace`-Taste gedrückt wird.

## Zusammenfassung

Okay, wir haben uns mit Touch-, Tastatur- und Maussteuerungen befasst. Nun lassen Sie uns weiter schauen, wie man das Spiel so einrichtet, dass es mit einem Konsolen-Gamepad unter Verwendung der [Gamepad API](/de/docs/Web/API/Gamepad_API) gesteuert werden kann.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
