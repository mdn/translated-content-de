---
title: Desktop-Maus- und Tastatursteuerung
slug: Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Nachdem wir nun unsere mobilen Steuerungen implementiert haben und das Spiel auf touchfähigen Geräten spielbar ist, wäre es gut, Maus- und Tastaturunterstützung hinzuzufügen, damit das Spiel auch auf Desktops spielbar ist. Auf diese Weise können wir die Liste der unterstützten Plattformen erweitern. Wir werden dies im Folgenden betrachten.

Es ist auch einfacher, steuerungsunabhängige Funktionen wie das Gameplay auf dem Desktop zu testen, wenn Sie es dort entwickeln, sodass Sie die Dateien nicht jedes Mal auf ein mobiles Gerät übertragen müssen, wenn Sie eine Änderung im Quellcode vornehmen.

> [!NOTE]
> [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser erstellt und die Steuerungen sind Phaser-basiert, aber es könnte auch in reinem JavaScript gemacht werden. Der Vorteil der Verwendung von Phaser besteht darin, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Lassen Sie uns zunächst überlegen, wie wir reine JavaScript-Tastatur-/Maussteuerungen im Spiel implementieren können, um zu sehen, wie es funktionieren würde. Zuerst bräuchten wir einen Event-Listener, um die gedrückten Tasten zu überwachen:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wann immer eine Taste gedrückt wird, führen wir die `keyDownHandler`-Funktion aus, und wenn das Drücken beendet ist, führen wir die `keyUpHandler`-Funktion aus, sodass wir wissen, wann sie nicht mehr gedrückt wird. Dazu werden wir Informationen darüber aufbewahren, ob die Tasten, die uns interessieren, gedrückt sind oder nicht:

```js
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
```

Dann werden wir die `keydown`- und `keyup`-Ereignisse hören und entsprechend in beiden Handler-Funktionen agieren. Innerhalb dieser können wir den Code der gedrückten Taste aus der [`code`](/de/docs/Web/API/KeyboardEvent/code)-Eigenschaft des Ereignisobjekts erhalten, sehen, welche Taste es ist, und dann die entsprechende Variable setzen. Die Codes sind alle gut lesbare Zeichenfolgen, aber Sie können sie [nachschlagen](/de/docs/Web/API/UI_Events/Keyboard_event_code_values), um sicher zu gehen; `"ArrowLeft"` ist der linke Pfeil:

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

Der `keyUpHandler` sieht fast genauso aus wie der `keyDownHandler` oben, aber anstatt die gedrückten Variablen auf `true` zu setzen, würden wir sie auf `false` setzen. Wenn der linke Pfeil gedrückt ist (<kbd>⬅︎</kbd>; `"ArrowLeft"`), können wir die `leftPressed`-Variable auf `true` setzen und in der `draw`-Funktion die zugewiesene Aktion ausführen – das Schiff nach links bewegen:

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

Die `draw`-Funktion löscht zuerst das gesamte Canvas – wir zeichnen bei jedem einzelnen Frame alles von Grund auf neu. Dann werden die gedrückten Tastvariablen überprüft und die `playerX`- und `playerY`-Variablen (die wir direkt nach `leftPressed` und den anderen definieren), die die Position des Schiffs halten, um einen bestimmten Betrag angepasst, sagen wir 5 Pixel. Dann wird das Schiff des Spielers auf dem Bildschirm gezeichnet und das nächste Zeichnen wird innerhalb des [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame) aufgerufen.

![Reine JavaScript-Demo mit dem Schiff des Spielers (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann.](controls-purejsgame.png)

Dieses Beispiel können Sie online in Aktion sehen unter [end3r.github.io/JavaScript-Game-Controls](https://end3r.github.io/JavaScript-Game-Controls/) und der vollständige Quellcode ist verfügbar unter [github.com/end3r/JavaScript-Game-Controls](https://github.com/end3r/JavaScript-Game-Controls/).

## Phaser-Ansatz

Wie bereits erwähnt, können Sie alles selbst schreiben, aber Sie können auch die integrierten Funktionen in Frameworks wie Phaser nutzen. Diese werden Ihnen das Leben erleichtern und die Entwicklung erheblich beschleunigen. Alle Randfälle – Unterschiede zwischen Browserimplementierungen usw. – werden vom Framework behandelt, sodass Sie sich auf die eigentliche Aufgabe konzentrieren können, die Sie durchführen möchten.

### Maus

Die Mausinteraktionen im Spiel konzentrieren sich auf das Klicken der Buttons. In Phaser akzeptieren die von Ihnen erstellten Buttons jede Art von Eingabe, sei es ein Touch auf mobilen Geräten oder ein Klick auf dem Desktop. Auf diese Weise funktioniert es, wenn Sie die Buttons bereits wie im Artikel [Mobile Touch-Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) gezeigt implementiert haben, auch auf dem Desktop sofort:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Der Button wird zehn Pixel von der oberen linken Ecke des Bildschirms platziert, verwendet das Bild `logo-enclave` und wird die Funktion `clickEnclave()` ausführen, wenn er angeklickt wird. Wir können Aktionen direkt den Buttons zuweisen:

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

Der Button, der zum Schießen verwendet wird, funktioniert sowohl im mobilen als auch im Desktop-Ansatz einwandfrei.

Wenn Sie die Position des Mauszeigers auf dem Bildschirm verwenden möchten, können Sie dies mit `this.game.input.mousePointer` tun. Angenommen, Sie möchten eine Kugel schießen, wenn mit einer Maus auf die rechte Hälfte des Bildschirms geklickt wird, würde es so aussehen:

```js
if (this.game.input.mousePointer.isDown) {
  if (this.game.input.mousePointer.x > this.world.width * 0.5) {
    // shoot
  }
}
```

Wenn Sie die verschiedenen gedrückten Maustasten unterscheiden möchten, gibt es drei Voreinstellungen, aus denen Sie wählen können:

```js
this.game.input.mousePointer.leftButton.isDown;
this.game.input.mousePointer.middleButton.isDown;
this.game.input.mousePointer.rightButton.isDown;
```

Beachten Sie, dass es besser ist, `activePointer` statt `mousePointer` für plattformunabhängige Eingaben zu verwenden, wenn Sie die Unterstützung für mobile Touch-Interaktionen beibehalten möchten.

### Tastatur

Das gesamte Spiel kann nur mit der Tastatur und sonst nichts gesteuert werden. Das eingebaute Objekt `this.game.input.keyboard` verwaltet die Eingaben von der Tastatur und hat [einige hilfreiche Methoden](https://phaser.io/docs/2.6.1/Phaser.Keyboard.html#methods) wie `addKey()` und `isDown()`. Es gibt auch das Objekt [Phaser.KeyCode](https://phaser.io/docs/2.6.1/Phaser.KeyCode.html#members), das alle verfügbaren Tastaturtasten enthält:

![Eine vollständige Liste der Phaser-Tastencodes, die im Spiel verfügbar sind.](controls-keycodes.png)

Im Hauptmenü des Spiels können wir eine zusätzliche Möglichkeit hinzufügen, das Spielen zu beginnen. Der Start-Button kann dazu angeklickt werden, aber wir können die <kbd>Enter</kbd> Taste verwenden, um dasselbe zu tun:

```js
const keyEnter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
keyEnter.onDown.add(this.clickStart, this);
```

Sie können `addKey()` verwenden, um jede Taste hinzuzufügen, die das Objekt `Phaser.KeyCode` zu bieten hat. Die Funktion `onDown()` wird immer dann ausgeführt, wenn die <kbd>Enter</kbd> Taste gedrückt wird. Sie wird die Methode `clickStart()` ausführen, die ein neues Spiel startet.

Es ist nützlich, eine Option bereitzustellen, um das Spiel auf dem Desktop ohne Maus spielen zu können, sodass Sie nicht die Hände von der Tastatur nehmen müssen.

### Steuerung des Spiels

Wir können Tastatureingaben in Spielen, die mit Phaser erstellt wurden, unterstützen, indem wir die grundlegenden Cursortasten in der `create()`-Funktion mit der Funktion `createCursorKeys()` aktivieren:

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

Sie können die Tasten auch selbst definieren und eine alternative Steuerung mit <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> anbieten. Zum Beispiel:

```js
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
```

Um sowohl die Cursortasten als auch die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten zu unterstützen, müssen wir dies tun:

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

In der `update()`-Funktion können wir jetzt das Schiff des Spielers in jede Richtung mit einer der beiden Bewegungstastenoptionen bewegen.

Wir können auch Schießkontrollalternativen anbieten. Für Cursortasten wäre die natürliche Schusstaste auf der gegenüberliegenden Seite der Tastatur, damit der Spieler die andere Hand benutzen kann — zum Beispiel die <kbd>X</kbd> Taste. Für die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten kann es die Leertaste sein:

```js
this.keyFire1 = this.input.keyboard.addKey(Phaser.KeyCode.X);
this.keyFire2 = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
```

In der `update()`-Funktion können wir leicht überprüfen, ob eine dieser beiden Tasten in jedem Frame gedrückt wurde:

```js
if (this.keyFire1.isDown || this.keyFire2.isDown) {
  // fire the weapon
}
```

Wenn ja, dann ist es Zeit, Kugeln abzufeuern!

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

Wir können die Gesundheit des Spielers auf das Maximum setzen. Denken Sie daran: Es ist ein Geheimnis, also _sagen Sie es niemandem_!

### Wie man spielt

Wir haben die Steuerungen implementiert, und jetzt sollten wir den Spieler über seine Optionen informieren, das Spiel zu steuern. Sonst wüssten sie es nicht! Wenn der Bildschirm zur Spielanleitung gezeigt wird, auf dem die verschiedenen Möglichkeiten gezeigt werden, das Schiff im Spiel zu steuern, können wir, anstatt alles jedem zu zeigen, erkennen, ob das Spiel auf einem Desktop oder einem mobilen Gerät gestartet wird, und nur die entsprechenden Steuerungen für das Gerät anzeigen:

```js
if (this.game.device.desktop) {
  moveText = "Arrow keys or WASD to move";
  shootText = "X or Space to shoot";
} else {
  moveText = "Tap and hold to move";
  shootText = "Tap to shoot";
}
```

Wenn das Spiel auf einem Desktop läuft, wird die Nachricht mit den Cursor- und <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten angezeigt. Andernfalls wird die Nachricht zu den mobilen Touch-Steuerungen angezeigt.

![Spielanleitung zum Steuern eines Spielerschiffs (mit Sternen im Hintergrund) mit sichtbarer Nachricht: "Pfeiltasten oder WASD zum Bewegen" und "X oder Leertaste zum Schießen".](controls-howtoplay.png)

Um den Spielanleitung-Bildschirm zu überspringen, können wir auf eine beliebige Tastenanschläge hören und weitermachen:

```js
this.input.keyboard.onDownCallback = function () {
  if (this.stateStatus === "intro") {
    this.hideIntro();
  }
};
```

Dies verbirgt das Intro und startet das eigentliche Spiel, ohne dass wir eine weitere neue Tastensteuerung nur dafür einrichten müssen.

### Pausen- und Spielende-Bildschirme

Um das Spiel vollständig mit der Tastatur spielbar zu machen, sollte es möglich sein, zum Hauptmenü zurückzukehren, weiterzuspielen oder das Spiel von den Pausen- und Spielende-Bildschirmen neu zu starten. Dies kann genau wie zuvor durch Erfassung der Tastencodes und Durchführung von Aktionen geschehen. Zum Beispiel können Sie, indem Sie `Phaser.KeyCode.Backspace` oder `Phaser.KeyCode.Delete` angeben, eine Aktion auslösen, die ausgeführt wird, wenn die `Delete/Backspace` Taste gedrückt wird.

## Zusammenfassung

Okay, wir haben uns mit Touch-, Tastatur- und Maussteuerungen befasst. Nun schauen wir uns an, wie man das Spiel so einrichtet, dass es mit einem Konsolen-Gamepad gesteuert werden kann, unter Verwendung der [Gamepad API](/de/docs/Web/API/Gamepad_API).

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
