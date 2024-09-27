---
title: Mobile-Touch-Steuerungen
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

Die Zukunft des mobilen Gamings liegt definitiv im Web, und viele Entwickler wählen den [Mobile-First](/de/docs/Glossary/Mobile_First)-Ansatz in ihrem Spieleentwicklungsprozess — in der modernen Welt bedeutet dies in der Regel auch die Implementierung von Touch-Steuerungen. In diesem Tutorial werden wir sehen, wie einfach es ist, mobile Steuerungen in ein HTML-Spiel zu implementieren, und es auf einem mobilfähigen Touch-Gerät zu spielen.

> [!NOTE]
> Das Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser entwickelt, und das Steuermanagement basiert auf Phaser, aber es könnte auch in reinem JavaScript umgesetzt werden. Der Vorteil von Phaser ist, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Wir könnten Touch-Events selbst implementieren — das Einrichten von Event-Listenern und das Zuweisen von relevanten Funktionen zu ihnen wäre ziemlich einfach:

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

Auf diese Weise würde das Berühren des Spiels auf der mobilen Canvas-Oberfläche Ereignisse auslösen, und wir könnten das Spiel auf jede gewünschte Weise manipulieren (zum Beispiel, um das Raumschiff zu bewegen). Die Ereignisse sind wie folgt:

- [touchstart](/de/docs/Web/API/Element/touchstart_event) wird ausgelöst, wenn der Benutzer einen Finger auf den Bildschirm legt.
- [touchmove](/de/docs/Web/API/Element/touchmove_event) wird ausgelöst, wenn der Finger auf dem Bildschirm bewegt wird, während er ihn berührt.
- [touchend](/de/docs/Web/API/Element/touchend_event) wird ausgelöst, wenn der Benutzer die Berührung des Bildschirms beendet.
- [touchcancel](/de/docs/Web/API/Element/touchcancel_event) wird ausgelöst, wenn eine Berührung abgebrochen wird, z.B. wenn der Benutzer den Finger vom Bildschirm entfernt.

> [!NOTE]
> Der Artikel [touch events](/de/docs/Web/API/Touch_events) bietet weitere Beispiele und Informationen.

### Demo mit reinem JavaScript

Lassen Sie uns die mobile Unterstützung in einem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) implementieren, das auf GitHub verfügbar ist, sodass wir das Raumschiff des Spielers durch Berühren des Bildschirms auf einem mobilen Gerät bewegen können.

Wir werden zwei Ereignisse verwenden: `touchstart` und `touchmove`, die beide von einer Funktion behandelt werden. Warum? Die Funktion `touchHandler` wird die richtigen Variablen der Position des Schiffs zuweisen, sodass wir sie für beide Fälle nutzen können: Wenn der Spieler den Bildschirm berührt, ihn aber nicht bewegt (`touchstart`), und wenn der Finger auf dem Bildschirm bewegt wird (`touchmove`):

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

Falls die Berührung erfolgt (`touches`-Objekt ist nicht leer), haben wir alle benötigten Informationen in diesem Objekt. Wir können die erste Berührung erhalten (`e.touches[0]`, unser Beispiel unterstützt kein Multitouch), die Variablen `pageX` und `pageY` extrahieren und die Position des Raumschiffs auf dem Bildschirm festlegen, indem der Canvas-Versatz (Abstand zwischen Canvas und Bildschirmrand) und die halbe Breite und Höhe des Spielers abgezogen werden.

![Touch-Steuerung für das Raumschiff des Spielers, mit sichtbarem Output der x- und y-Position.](controls-touch.png)

Um zu überprüfen, ob es korrekt funktioniert, können wir die `x`- und `y`-Positionen mithilfe des `output`-Elements ausgeben. Die Funktion `preventDefault()` ist notwendig, um zu verhindern, dass der Browser sich bewegt — ohne sie würden Sie das Standardverhalten haben, und die Canvas würde auf der Seite herumgezogen werden, was die Bildlaufleisten des Browsers zeigen und chaotisch wirken würde.

## Touch-Ereignisse in Phaser

Wir müssen dies nicht selbst tun; Frameworks wie Phaser bieten Systeme zur Verwaltung von Touch-Ereignissen für uns — siehe [Verwaltung der Berührungsereignisse](https://phaser.io/docs/2.6.1/Phaser.Touch.html).

### Pointer-Theorie

Ein [Pointer](https://phaser.io/docs/2.6.1/Phaser.Pointer.html) repräsentiert einen einzelnen Finger auf dem Touchscreen. Phaser startet standardmäßig zwei Pointer, sodass zwei Finger gleichzeitig eine Aktion ausführen können. Captain Rogers ist ein einfaches Spiel — es kann mit zwei Fingern gesteuert werden, wobei der linke das Schiff bewegt und der rechte das Geschütz des Schiffs kontrolliert. Es gibt kein Multitouch oder Gesten — alles wird durch einfache Pointer-Eingaben gesteuert.

Sie können bis zu zehn Pointer gleichzeitig verwalten, indem Sie `this.game.input.addPointer` verwenden. Der zuletzt verwendete Pointer ist im Objekt `this.game.input.activePointer` verfügbar — der zuletzt aktive Finger auf dem Bildschirm.

Wenn Sie auf einen bestimmten Pointer zugreifen müssen, stehen alle unter `this.game.input.pointer1`, `this.game.input.pointer2` usw. zur Verfügung. Sie werden dynamisch zugewiesen, sodass bei Berührung von drei Fingern auf dem Bildschirm `pointer1`, `pointer2` und `pointer3` aktiv sind. Das Entfernen des zweiten Fingers wird die anderen beiden nicht beeinflussen, und wenn er wieder zurückkommt, wird die erste verfügbare Eigenschaft verwendet, sodass `pointer2` erneut verwendet wird.

Die Koordinaten des zuletzt aktiven Pointers können schnell über die Variablen `this.game.input.x` und `this.game.input.y` abgerufen werden.

### Eingabeereignisse

Anstatt die Pointer direkt zu verwenden, ist es auch möglich, auf `this.game.input`-Ereignisse zu hören, wie `onDown`, `onUp`, `onTap` und `onHold`:

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // Do something
}
```

Die Funktion `itemTouched()` wird ausgeführt, wenn das `onDown`-Ereignis durch Berühren des Bildschirms ausgelöst wird. Die Variable `pointer` enthält die Informationen über den Pointer, der das Ereignis aktiviert hat.

Dieser Ansatz verwendet das allgemein verfügbare Objekt `this.game.input`, aber Sie können auch die Aktionen an beliebigen Spielelementen wie Sprites oder Schaltflächen durch Verwendung von `onInputOver`, `onInputOut`, `onInputDown`, `onInputUp`, `onDragStart` oder `onDragStop` erkennen:

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // Do something
}
```

Auf diese Weise können Sie ein Ereignis an jedes Objekt im Spiel anhängen, wie das Raumschiff des Spielers, und auf die vom Benutzer ausgeführten Aktionen reagieren.

Ein zusätzlicher Vorteil der Verwendung von Phaser ist, dass die von Ihnen erstellten Schaltflächen jede Art von Eingabe akzeptieren, sei es eine Berührung auf mobilen Geräten oder ein Klick auf dem Desktop — das Framework erledigt dies im Hintergrund für Sie.

### Implementierung

Der einfachste Weg, um ein interaktives Objekt hinzuzufügen, das auf Benutzereingaben hört, ist das Erstellen einer Schaltfläche:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Diese wird im `MainMenu`-Status erstellt — sie wird zehn Pixel von der linken oberen Ecke des Bildschirms entfernt platziert, verwendet das Bild `logo-enclave` und führt die Funktion `clickEnclave()` aus, wenn sie berührt wird. Dies funktioniert sowohl mobil als auch auf dem Desktop ohne weiteres Zutun. Im Hauptmenü gibt es einige Schaltflächen, einschließlich derjenigen, die das Spiel starten wird.

Für das eigentliche Gameplay, anstatt mehr Schaltflächen zu erstellen und den kleinen mobilen Bildschirm damit zu überladen, können wir etwas anderes verwenden: Wir erstellen unsichtbare Bereiche, die auf eine bestimmte Aktion reagieren. Aus Design-Sicht ist es besser, das Aktionsfeld zu vergrößern, ohne den halben Bildschirm mit Schaltflächenbildern zu überdecken. Zum Beispiel wird das Tippen auf die rechte Seite des Bildschirms die Waffe abfeuern:

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

Der obige Code wird eine neue Schaltfläche erstellen, die ein transparentes Bild verwendet, das die rechte Bildschirmhälfte bedeckt. Sie können separate Funktionen für Eingaben auf und ab zuweisen, wenn Sie komplexere Aktionen ausführen möchten, aber in diesem Spiel wird die Berührung der rechten Bildschirmseite die Geschosse nach rechts abfeuern — das ist alles, was wir in diesem Fall benötigen.

Das Bewegen des Spielers könnte durch das Erstellen der vier Richtungstasten gehandhabt werden, aber wir können die Vorteile von Touchscreens nutzen und das Raumschiff des Spielers ziehen:

```js
const player = this.game.add.sprite(30, 30, "ship");
player.inputEnabled = true;
player.input.enableDrag();
player.events.onDragStart.add(onDragStart, this);
player.events.onDragStop.add(onDragStop, this);

function onDragStart(sprite, pointer) {
  // Do something when dragging
}
```

Wir können das Schiff herumziehen und in der Zwischenzeit etwas tun und reagieren, wenn das Ziehen gestoppt wird. Das Ziehen in Phaser funktioniert, wenn aktiviert, out of the box — Sie müssen die Position des Sprites nicht manuell selbst einstellen, sodass Sie die Funktion `onDragStart()` leer lassen oder einige Debug-Ausgaben platzieren könnten, um zu sehen, ob es korrekt funktioniert. Das Element `pointer` enthält die Variablen `x` und `y`, die die aktuelle Position des gezogenen Elements speichern.

### Spezialisierte Plugins

Sie können spezialisierte Plugins verwenden, die Touch-Ereignisse auf unterschiedliche Weise handhaben, UI-Steuerelemente rendern und mehr. Hier sind einige Plugin-Beispiele, die ein virtuelles Gamepad und Joystick verwenden:

- [phaser-plugin-virtual-gamepad](https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad) (Phaser 2)
- [Virtueller Joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/) (Phaser 3)

Für grundlegende Plugins wie das virtuelle Gamepad können Sie das Skript herunterladen und auf Ihrer Seite verfügbar machen:

```html
<script src="js/phaser.min.js"></script>
<!-- https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad -->
<script src="js/phaser-plugin-virtual-gamepad.js"></script>
```

Dann fügen Sie sie in Ihr Skript ein und verwenden sie ähnlich wie im folgenden Snippet:

```js
// Add the VirtualGamepad plugin to a Phaser 2 game
this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
// Add a joystick to the game
this.joystick = this.gamepad.addJoystick(100, 420, 1.2, "gamepad");
// Add a button to the game
this.button = this.gamepad.addButton(400, 420, 1.0, "gamepad");
```

Für weitere Informationen werfen Sie einen Blick durch den [inoffiziellen Katalog der Phaser-Plugins](https://phaserplugins.com/), um zu sehen, ob etwas Ihren Anforderungen entspricht.

## Zusammenfassung

Damit sind die Touch-Steuerungen für mobile Geräte abgedeckt; im nächsten Artikel werden wir sehen, wie man Tastatur- und Mausunterstützung hinzufügt.

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
