---
title: Desktop-Maus- und Tastatursteuerung
slug: Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Jetzt, da wir unsere mobilen Steuerungen implementiert haben und das Spiel auf berührungsfähigen Geräten spielbar ist, wäre es gut, Maus- und Tastaturunterstützung hinzuzufügen, damit das Spiel auch auf dem Desktop spielbar ist. Auf diese Weise können wir die Liste der unterstützten Plattformen erweitern. Wir werden uns das unten ansehen.

Es ist auch einfacher, steuerungsunabhängige Funktionen wie das Gameplay auf dem Desktop zu testen, wenn Sie es dort entwickeln, sodass Sie die Dateien nicht jedes Mal auf ein mobiles Gerät übertragen müssen, wenn Sie eine Änderung im Quellcode vornehmen.

> [!NOTE]
> [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser erstellt, und die Steuerung wird auf Phaser-Basis verwaltet, könnte aber auch in reinem JavaScript erfolgen. Der Vorteil von Phaser ist, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welche Methode Sie wählen.

## Ansatz mit reinem JavaScript

Lassen Sie uns zunächst überlegen, wie wir die Tastatur- und Maussteuerung mit reinem JavaScript im Spiel implementieren, um zu sehen, wie das funktionieren würde. Zunächst benötigen wir einen Event-Listener, um die gedrückten Tasten zu überwachen:

```js
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
```

Wann immer eine Taste gedrückt wird, führen wir die `keyDownHandler`-Funktion aus, und wenn der Druck endet, führen wir die `keyUpHandler`-Funktion aus, sodass wir wissen, wann sie nicht mehr gedrückt wird. Dazu werden wir die Information speichern, ob die Tasten, die uns interessieren, gedrückt werden oder nicht:

```js
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
```

Dann werden wir auf die `keydown`- und `keyup`-Events hören und entsprechend in beiden Handler-Funktionen handeln. Darin können wir den Code der gedrückten Taste aus der [`code`](/de/docs/Web/API/KeyboardEvent/code)-Eigenschaft des Ereignisobjekts abrufen, sehen, welche Taste es ist, und dann die entsprechende Variable setzen. Die Codes sind alle lesbare Zeichenketten, aber Sie können [sie nachschlagen](/de/docs/Web/API/UI_Events/Keyboard_event_code_values), um sicherzugehen; `"ArrowLeft"` ist der linke Pfeil:

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

Der `keyUpHandler` sieht fast genauso aus wie der `keyDownHandler` oben, aber anstatt die gedrückten Variablen auf `true` zu setzen, würden wir sie auf `false` setzen. Wenn der linke Pfeil (<kbd>⬅︎</kbd>; `"ArrowLeft"`) gedrückt wird, können wir die `leftPressed`-Variable auf `true` setzen und in der `draw`-Funktion die zugewiesene Aktion ausführen — das Schiff nach links bewegen:

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

Die `draw`-Funktion löscht zuerst das gesamte Canvas — wir zeichnen alles von Grund auf in jedem einzelnen Frame neu. Dann werden die gedrückten Tastenzustandsvariablen überprüft, und die `playerX`- und `playerY`-Variablen (die wir früher direkt nach `leftPressed` und den anderen definieren), die die Position des Schiffs halten, werden um einen bestimmten Betrag, sagen wir 5 Pixel, angepasst. Dann wird das Spieler-Schiff auf dem Bildschirm gezeichnet und das nächste Zeichnen wird innerhalb von [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame) aufgerufen.

![Reines JavaScript-Demo mit dem Schiff des Spielers (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann.](controls-purejsgame.png)

Dieses Beispiel können Sie online in Aktion sehen unter [end3r.github.io/JavaScript-Game-Controls](https://end3r.github.io/JavaScript-Game-Controls/), und der vollständige Quellcode ist auf [github.com/end3r/JavaScript-Game-Controls](https://github.com/end3r/JavaScript-Game-Controls/) zu finden.

## Phaser-Ansatz

Wie bereits erwähnt, können Sie alles selbst schreiben, Sie können jedoch auch die integrierten Funktionen von Frameworks wie Phaser nutzen. Diese erleichtern Ihnen die Arbeit erheblich und beschleunigen die Entwicklung. Alle Sonderfälle – Unterschiede zwischen Browser-Implementierungen usw. – werden vom Framework behandelt, sodass Sie sich auf die eigentliche Aufgabe konzentrieren können, die Sie erledigen möchten.

### Maus

Die Mausinteraktionen im Spiel konzentrieren sich auf das Klicken der Schaltflächen. In Phaser werden die erstellten Schaltflächen jede Art von Eingabe entgegennehmen, egal ob es sich um eine Berührung auf einem Mobilgerät oder einen Klick auf einem Desktop handelt. Wenn Sie die Schaltflächen wie im Artikel [Mobile Touch-Steuerung](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) gezeigt bereits implementiert haben, funktioniert dies auch auf dem Desktop ohne weiteres:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Die Schaltfläche wird zehn Pixel vom oberen linken Bildschirmrand entfernt platziert, verwendet das Bild `logo-enclave` und führt die Funktion `clickEnclave()` aus, wenn sie angeklickt wird. Wir können Aktionen direkt den Schaltflächen zuweisen:

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

Die Schaltfläche zum Schießen funktioniert perfekt sowohl im mobilen als auch im Desktop-Ansatz.

Wenn Sie die Position des Mauszeigers auf dem Bildschirm verwenden möchten, können Sie dies mit `this.game.input.mousePointer` tun. Angenommen, Sie möchten eine Kugel abschießen, wenn die rechte Hälfte des Bildschirms mit der Maus angeklickt wird, würde dies etwa so aussehen:

```js
if (this.game.input.mousePointer.isDown) {
  if (this.game.input.mousePointer.x > this.world.width * 0.5) {
    // shoot
  }
}
```

Wenn Sie unterschieden möchten, welche Maustasten gedrückt wurden, stehen Ihnen drei Standardoptionen zur Auswahl:

```js
this.game.input.mousePointer.leftButton.isDown;
this.game.input.mousePointer.middleButton.isDown;
this.game.input.mousePointer.rightButton.isDown;
```

Beachten Sie, dass es besser ist, `activePointer` anstelle von `mousePointer` zu verwenden, wenn Sie plattformunabhängige Eingaben ermöglichen möchten, um die Unterstützung für mobile Touch-Interaktionen beizubehalten.

### Tastatur

Das ganze Spiel kann ausschließlich mit der Tastatur und nichts anderem gesteuert werden. Das eingebaute `this.game.input.keyboard`-Objekt verwaltet die Eingabe von der Tastatur und verfügt über [einige hilfreiche Methoden](https://phaser.io/docs/2.6.1/Phaser.Keyboard.html#methods) wie `addKey()` und `isDown()`. Es gibt auch das [Phaser.KeyCode](https://phaser.io/docs/2.6.1/Phaser.KeyCode.html#members)-Objekt, das alle verfügbaren Tastaturtasten enthält:

![Eine vollständige Liste der in einem Spiel verfügbaren Phaser-Tastencodes.](controls-keycodes.png)

Im Hauptmenü des Spiels können wir eine zusätzliche Möglichkeit hinzufügen, um das Spiel zu starten. Die Start-Schaltfläche kann angeklickt werden, aber wir können die <kbd>Enter</kbd>-Taste verwenden, um dasselbe zu tun:

```js
const keyEnter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
keyEnter.onDown.add(this.clickStart, this);
```

Sie können `addKey()` verwenden, um jede Taste des `Phaser.KeyCode`-Objekts hinzuzufügen. Die `onDown()`-Funktion wird immer dann ausgeführt, wenn die <kbd>Enter</kbd>-Taste gedrückt wird. Sie führt die `clickStart()`-Methode aus, die ein neues Spiel startet.

Es ist nützlich, eine Möglichkeit anzubieten, das Spiel auf dem Desktop ohne Verwendung einer Maus zu spielen, damit Sie die Hände nicht von der Tastatur nehmen müssen.

### Spielsteuerung

Wir können die Tastatureingabe in Spielen, die mit Phaser erstellt wurden, unterstützen, indem wir die grundlegenden Richtungstasten in der `create()`-Funktion mithilfe der `createCursorKeys()`-Funktion aktivieren:

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

Sie können die Tasten auch selbst definieren und ein alternatives Steuermechanismus mit <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> anbieten. Zum Beispiel:

```js
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
```

Um sowohl die Pfeiltasten als auch die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten zu unterstützen, müssen wir Folgendes tun:

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

In der `update()`-Funktion können wir jetzt das Spielerschiff in jede Richtung mit einem der beiden Bewegungsetzentastenoptionen bewegen.

Wir können auch alternative Feuersteuerungen anbieten. Für die Pfeiltasten wäre die natürliche Schusstaste auf der anderen Seite der Tastatur, damit der Spieler die andere Hand verwenden kann — zum Beispiel die <kbd>X</kbd>-Taste. Für die <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten kann es die Leertaste sein:

```js
this.keyFire1 = this.input.keyboard.addKey(Phaser.KeyCode.X);
this.keyFire2 = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
```

In der `update()`-Funktion können wir leicht prüfen, ob eine dieser beiden Tasten in jedem Frame gedrückt wurde:

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

Und dann in der `update()`-Funktion, wann immer <kbd>C</kbd> gedrückt wird, würden wir Folgendes tun:

```js
if (this.keyCheat.isDown) {
  this.player.health = this.player.maxHealth;
}
```

Wir können die Gesundheit des Spielers auf das Maximum setzen. Denken Sie daran: Es ist ein Geheimnis, also _sagen Sie es niemandem_!

### Anleitung zum Spielen

Wir haben die Steuerelemente implementiert, und jetzt sollten wir den Spieler über die Möglichkeiten zur Steuerung des Spiels informieren. Sonst würden sie nicht davon wissen! Wenn wir den Anleitung-zum-Spielen-Bildschirm zeigen, auf dem die verschiedenen Möglichkeiten zur Steuerung des Schiffs im Spiel gezeigt werden, anstelle sie alle jedem zu zeigen, können wir erkennen, ob das Spiel auf einem Desktop oder einem Mobilgerät gestartet wird und einfach die entsprechenden Steuerelemente für das Gerät anzeigen:

```js
if (this.game.device.desktop) {
  moveText = "Arrow keys or WASD to move";
  shootText = "X or Space to shoot";
} else {
  moveText = "Tap and hold to move";
  shootText = "Tap to shoot";
}
```

Wenn das Spiel auf einem Desktop läuft, wird die Nachricht mit den Pfeiltasten und <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> Tasten angezeigt. Wenn nicht, dann die Nachrichten zu den mobilen Touch-Steuerelementen.

![Anleitung-zum-Spielen-Bildschirm eines Spielerschiffs (mit Sternen im Hintergrund), das mit Tastatur und Maus gesteuert werden kann, und die sichtbare Nachricht: "Pfeiltasten oder WASD zum Bewegen" und "X oder Leertaste zum Schießen".](controls-howtoplay.png)

Um den Anleitung-zum-Spielen-Bildschirm zu überspringen, können wir auf jede gedrückte Taste hören und weitermachen:

```js
this.input.keyboard.onDownCallback = function () {
  if (this.stateStatus === "intro") {
    this.hideIntro();
  }
};
```

Dies verbirgt die Einleitung und startet das eigentliche Spiel, ohne dass wir eine andere neue Tastenkontrolle nur dafür einrichten müssen.

### Pause- und Game-Over-Bildschirme

Um das Spiel vollständig mit der Tastatur spielbar zu machen, sollte es möglich sein, über die Pause- und Game-Over-Bildschirme zum Hauptmenü zurückzukehren, weiterzuspielen oder das Spiel neu zu starten. Es kann genauso wie zuvor gemacht werden, indem Tastencodes erfasst und Aktionen ausgeführt werden. Beispielsweise können Sie durch Spezifizierung von `Phaser.KeyCode.Backspace` oder `Phaser.KeyCode.Delete` eine Aktion verknüpfen, die beim Drücken der `Delete/Backspace`-Taste ausgelöst wird.

## Zusammenfassung

Ok, wir haben uns mit Touch-, Tastatur- und Maussteuerung beschäftigt. Jetzt wollen wir uns ansehen, wie man das Spiel so einrichtet, dass es mit einem Konsolenspiel-Controller gesteuert werden kann, indem man die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwendet.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
