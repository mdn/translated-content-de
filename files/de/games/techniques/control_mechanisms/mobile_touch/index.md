---
title: Mobile-Touch-Steuerungen
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

Die Zukunft des mobilen Gamings liegt definitiv im Web, und viele Entwickler wählen den [Mobile First](/de/docs/Glossary/Mobile_First)-Ansatz in ihrem Game Development-Prozess. In der modernen Welt bedeutet dies in der Regel auch die Implementierung von Touch-Steuerungen. In diesem Tutorial werden wir sehen, wie einfach es ist, mobile Steuerungen in ein HTML-Spiel zu implementieren und auf einem mobilen Touch-fähigen Gerät zu spielen.

> [!NOTE]
> Das Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde mit Phaser entwickelt, und das Verwalten der Steuerungen basiert auf Phaser, könnte aber auch in reinem JavaScript erfolgen. Der Vorteil der Verwendung von Phaser ist, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Wir könnten Touch-Ereignisse selbst implementieren — das Einrichten von Event-Listenern und das Zuweisen relevanter Funktionen zu ihnen wäre ziemlich einfach:

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

Auf diese Weise würde das Berühren des Spiels auf der {{htmlelement("canvas")}} des mobilen Bildschirms Ereignisse auslösen, und wir könnten das Spiel auf jede gewünschte Weise manipulieren (zum Beispiel das Raumschiff bewegen). Die Ereignisse sind wie folgt:

- [touchstart](/de/docs/Web/API/Element/touchstart_event) wird ausgelöst, wenn der Benutzer einen Finger auf den Bildschirm legt.
- [touchmove](/de/docs/Web/API/Element/touchmove_event) wird ausgelöst, wenn der Benutzer den Finger auf dem Bildschirm bewegt, während er diesen berührt.
- [touchend](/de/docs/Web/API/Element/touchend_event) wird ausgelöst, wenn der Benutzer aufhört, den Bildschirm zu berühren.
- [touchcancel](/de/docs/Web/API/Element/touchcancel_event) wird ausgelöst, wenn eine Berührung abgebrochen wird, zum Beispiel wenn der Benutzer den Finger außerhalb des Bildschirms bewegt.

> [!NOTE]
> Der Artikel zur [Touch-Ereignisse](/de/docs/Web/API/Touch_events) Referenz bietet weitere Beispiele und Informationen.

### Demo mit reinem JavaScript

Lasst uns die mobile Unterstützung in einer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) auf GitHub implementieren, sodass wir das Schiff des Spielers durch Berühren des Bildschirms auf einem mobilen Gerät bewegen können.

Wir werden zwei Ereignisse verwenden: `touchstart` und `touchmove`, beide von einer Funktion gehandhabt. Warum? Die Funktion `touchHandler` weist dem Schiff die richtigen Variablen für die Position zu, sodass wir sie für beide Fälle verwenden können: wenn der Spieler den Bildschirm berührt, ihn aber nicht bewegt (`touchstart`), und wenn der Finger auf dem Bildschirm bewegt wird (`touchmove`):

```js
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
```

Die Funktion `touchHandler` sieht folgendermaßen aus:

```js
function touchHandler(e) {
  if (e.touches) {
    playerX = e.touches[0].pageX - canvas.offsetLeft - playerWidth / 2;
    playerY = e.touches[0].pageY - canvas.offsetTop - playerHeight / 2;
    output.textContent = `Touch:\nx: ${playerX}, y: ${playerY}`;
    e.preventDefault();
  }
}
```

Wenn eine Berührung auftritt (das `touches` Objekt ist nicht leer), dann haben wir alle benötigten Infos in diesem Objekt. Wir können die erste Berührung (`e.touches[0]`, unser Beispiel ist nicht multitouch-fähig) entnehmen, die `pageX`- und `pageY`-Variablen extrahieren und die Position des Spielerschiffs auf dem Bildschirm einstellen, indem wir den Canvas-Offset (Abstand vom Canvas zum Rand des Bildschirms) und die Hälfte der Spielerbreite und -höhe subtrahieren.

![Touch-Steuerungen für das Spielerschiff, mit sichtbarem Ausgabefeld der x- und y-Position.](controls-touch.png)

Um zu sehen, ob es korrekt funktioniert, können wir die `x`- und `y`-Positionen über das `output`-Element ausgeben. Die Funktion `preventDefault()` ist erforderlich, um zu verhindern, dass der Browser scrollt — ohne diese, hätten Sie das Standardverhalten, und das Canvas würde auf der Seite herumgezogen werden, was die Scrollbalken des Browsers anzeigen und es unordentlich aussehen lassen würde.

## Touch-Ereignisse in Phaser

Wir müssen das nicht selbst tun; Frameworks wie Phaser bieten Systeme zur Verwaltung von Touch-Ereignissen für uns — siehe [Verwaltung der Touch-Ereignisse](https://phaser.io/docs/2.6.1/Phaser.Touch.html).

### Pointer-Theorie

Ein [Pointer](https://phaser.io/docs/2.6.1/Phaser.Pointer.html) steht für einen einzelnen Finger auf dem Touchscreen. Phaser startet standardmäßig mit zwei Zeigern, sodass zwei Finger gleichzeitig eine Aktion ausführen können. Captain Rogers ist ein einfaches Spiel — es kann mit zwei Fingern gesteuert werden, der linke bewegt das Schiff und der rechte steuert die Kanone des Schiffs. Es gibt kein Multitouch oder Gesten — alles wird mit einfachen Zeigereingaben gehandhabt.

Sie können dem Spiel mehr Zeiger hinzufügen, indem Sie `this.game.input.addPointer` verwenden, bis zu zehn Zeiger können gleichzeitig verwaltet werden. Der zuletzt verwendete Zeiger ist im Objekt `this.game.input.activePointer` verfügbar — der zuletzt aktive Finger auf dem Bildschirm.

Wenn Sie auf einen bestimmten Zeiger zugreifen müssen, sind alle unter `this.game.input.pointer1`, `this.game.input.pointer2` usw. verfügbar. Diese werden dynamisch zugewiesen, sodass, wenn Sie drei Finger auf den Bildschirm legen, `pointer1`, `pointer2` und `pointer3` aktiv sein werden. Wenn Sie beispielsweise den zweiten Finger entfernen, wirkt sich das nicht auf die anderen beiden aus, und wenn Sie ihn wieder zurücksetzen, wird die zuerst verfügbare Eigenschaft verwendet, sodass `pointer2` wiederverwendet wird.

Sie können schnell die Koordinaten des zuletzt aktiven Zeigers über die Variablen `this.game.input.x` und `this.game.input.y` abrufen.

### Eingabeevents

Anstatt die Zeiger direkt zu verwenden, ist es auch möglich, auf `this.game.input` Ereignisse zu hören, wie `onDown`, `onUp`, `onTap` und `onHold`:

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // Machen Sie etwas
}
```

Die Funktion `itemTouched()` wird ausgeführt, wenn das `onDown`-Ereignis durch Berühren des Bildschirms ausgelöst wird. Die Variable `pointer` enthält die Informationen über den Zeiger, der das Ereignis aktiviert hat.

Dieser Ansatz verwendet das allgemein verfügbare Objekt `this.game.input`, aber Sie können die Aktionen auch bei beliebigen Spielobjekten wie Sprites oder Schaltflächen erkennen, indem Sie `onInputOver`, `onInputOut`, `onInputDown`, `onInputUp`, `onDragStart` oder `onDragStop` verwenden:

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // Machen Sie etwas
}
```

Auf diese Weise können Sie ein Ereignis an jedes Objekt im Spiel anhängen, wie das Spielerschiff, und auf die vom Benutzer ausgeführten Aktionen reagieren.

Ein zusätzlicher Vorteil von Phaser ist, dass die von Ihnen erstellten Schaltflächen jede Art von Eingaben annehmen, sei es ein Touch auf einem mobilen Gerät oder ein Klick auf einem Desktop — das Framework sortiert dies im Hintergrund für Sie.

### Implementierung

Der einfachste Weg, ein interaktives Objekt hinzuzufügen, das auf Benutzereingaben hört, ist, eine Schaltfläche zu erstellen:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Diese wird im `MainMenu`-State gebildet — sie wird zehn Pixel vom oberen linken Rand des Bildschirms platziert, das `logo-enclave`-Bild verwenden und die Funktion `clickEnclave()` ausführen, wenn sie berührt wird. Dies funktioniert sowohl auf mobilen Geräten als auch auf Desktops direkt aus der Box. Es gibt ein paar Schaltflächen im Hauptmenü, einschließlich derjenigen, die das Spiel starten wird.

Für das eigentliche Gameplay, anstatt mehr Schaltflächen zu erstellen und den kleinen mobilen Bildschirm mit ihnen zu überdecken, können wir etwas anderes verwenden: Wir erstellen unsichtbare Bereiche, die auf die gegebene Aktion reagieren. Aus gestalterischer Sicht ist es besser, das Aktionsfeld größer zu machen, ohne die Hälfte des Bildschirms mit Schaltflächenbildern zu bedecken. Zum Beispiel wird durch Tippen auf die rechte Seite des Bildschirms die Waffe abgefeuert:

```js
this.buttonShoot = this.add.button(
  this.world.width * 0.5,
  0,
  "button-alpha",
  null,
  this,
);
this.buttonShoot.onInputDown.add(this.goShootPressed, this);
this.buttonShoot.onInputUp.add(this.goShootReleased, this);
```

Der obige Code erstellt eine neue Schaltfläche mit einem transparenten Bild, die die rechte Hälfte des Bildschirms abdeckt. Sie können Funktionen bei Eingabedown und Eingabeup separat zuweisen, wenn Sie kompliziertere Aktionen durchführen möchten, aber in diesem Spiel wird durch Berühren der rechten Seite des Bildschirms nach rechts geschossen — das ist alles, was wir in diesem Fall benötigen.

Die Bewegung des Spielers könnte durch das Erstellen von vier Richtungsknöpfen verwaltet werden, aber wir können die Vorteile von Touchscreens nutzen und das Spielerschiff umherziehen:

```js
const player = this.game.add.sprite(30, 30, "ship");
player.inputEnabled = true;
player.input.enableDrag();
player.events.onDragStart.add(onDragStart, this);
player.events.onDragStop.add(onDragStop, this);

function onDragStart(sprite, pointer) {
  // Machen Sie etwas beim Ziehen
}
```

Wir können das Schiff herumziehen und dabei etwas tun und reagieren, wenn das Ziehen gestoppt wird. Ziehen in Phaser, wenn aktiviert, funktioniert sofort — Sie müssen die Position des Sprites nicht selbst manuell einstellen, sodass Sie die Funktion `onDragStart()` leer lassen oder einige Debug-Ausgaben platzieren könnten, um zu sehen, ob es korrekt funktioniert. Das Element `pointer` enthält die `x`- und `y`-Variablen, die die aktuelle Position des gezogenen Elements speichern.

### Dedizierte Plugins

Sie können dedizierte Plugins verwenden, die Touch-Ereignisse auf unterschiedliche Weise verarbeiten, UI-Steuerelemente rendern und mehr. Hier sind einige Plugin-Beispiele, die ein virtuelles Gamepad und einen Joystick verwenden:

- [phaser-plugin-virtual-gamepad](https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad) (Phaser 2)
- [Virtuelles Joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/) (Phaser 3)

Für grundlegende Plugins wie das virtuelle Gamepad können Sie das Skript herunterladen und auf Ihrer Seite verfügbar machen:

```html
<script src="js/phaser.min.js"></script>
<!-- https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad -->
<script src="js/phaser-plugin-virtual-gamepad.js"></script>
```

Dann binden Sie sie in Ihr Skript ein und verwenden sie ähnlich wie im folgenden Snippet:

```js
// Fügen Sie das Virtuelle Gamepad-Plugin zu einem Phaser 2-Spiel hinzu
this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
// Fügen Sie einen Joystick zum Spiel hinzu
this.joystick = this.gamepad.addJoystick(100, 420, 1.2, "gamepad");
// Fügen Sie eine Schaltfläche zum Spiel hinzu
this.button = this.gamepad.addButton(400, 420, 1.0, "gamepad");
```

Für mehr Informationen schauen Sie durch den [inoffiziellen Katalog der Phaser-Plugins](https://phaserplugins.com/), um zu sehen, ob etwas Ihren Bedürfnissen entspricht.

## Zusammenfassung

Das deckt das Hinzufügen von Touch-Steuerungen für mobile Geräte ab; im nächsten Artikel werden wir sehen, wie man Tastatur- und Mausunterstützung hinzufügt.

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
