---
title: Mobile-Touch-Steuerungen
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

Die Zukunft des Mobile-Gamings ist definitiv das Web, und viele Entwickler entscheiden sich für den {{Glossary("Mobile_First", "Mobile-First")}}-Ansatz in ihrem Spieleentwicklungsprozess – in der modernen Welt bedeutet das in der Regel auch die Implementierung von Touch-Steuerungen. In diesem Tutorial werden wir mobile Steuerungen in einem HTML-Spiel implementieren und das Spielen auf einem mobilen, touchfähigen Gerät genießen.

> [!NOTE]
> Das Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser erstellt und die Steuerungen werden Phaser-basiert verwaltet, aber es könnte auch mit reinem JavaScript gemacht werden. Der Vorteil der Verwendung von Phaser liegt darin, dass es Hilfsvariablen und -funktionen für eine schnellere Entwicklung bietet, aber es bleibt Ihnen überlassen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Wir könnten Touch-Events selbst implementieren – das Einrichten von Event-Listenern und das Zuweisen relevanter Funktionen zu ihnen wäre recht unkompliziert:

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

Auf diese Weise würde das Berühren des Spiel-{{htmlelement("canvas")}} auf dem mobilen Bildschirm Ereignisse auslösen, und wir könnten das Spiel nach Belieben manipulieren (zum Beispiel das Raumschiff bewegen). Die Ereignisse sind wie folgt:

- [touchstart](/de/docs/Web/API/Element/touchstart_event) wird ausgelöst, wenn der Benutzer einen Finger auf den Bildschirm legt.
- [touchmove](/de/docs/Web/API/Element/touchmove_event) wird ausgelöst, wenn der Finger während der Berührung auf dem Bildschirm bewegt wird.
- [touchend](/de/docs/Web/API/Element/touchend_event) wird ausgelöst, wenn der Benutzer aufhört, den Bildschirm zu berühren.
- [touchcancel](/de/docs/Web/API/Element/touchcancel_event) wird ausgelöst, wenn eine Berührung abgebrochen wird, zum Beispiel, wenn der Benutzer seinen Finger vom Bildschirm weg bewegt.

> [!NOTE]
> Der [Touch-Events](/de/docs/Web/API/Touch_events)-Referenzartikel bietet weitere Beispiele und Informationen.

### Reines JavaScript-Demo

Lassen Sie uns die mobile Unterstützung in einer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) auf GitHub implementieren, damit wir das Schiff des Spielers durch Berühren des Bildschirms auf einem mobilen Gerät bewegen können.

Wir werden zwei Ereignisse verwenden: `touchstart` und `touchmove`, die beide von einer Funktion behandelt werden. Warum? Die Funktion `touchHandler` wird die richtigen Variablen der Schiffsposition zuweisen, sodass wir sie für beide Fälle verwenden können: wenn der Spieler den Bildschirm berührt, ihn aber nicht bewegt (`touchstart`), und wenn der Finger auf dem Bildschirm bewegt wird (`touchmove`):

```js
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
```

Die `touchHandler`-Funktion sieht folgendermaßen aus:

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

Wenn die Berührung auftritt (das `touches`-Objekt nicht leer ist), dann haben wir alle Informationen, die wir in diesem Objekt benötigen. Wir können die erste Berührung erhalten (`e.touches[0]`, unser Beispiel ist nicht multitouch-fähig), die Variablen `pageX` und `pageY` extrahieren und die Position des Spielerschiffs auf dem Bildschirm setzen, indem wir den Canvas-Offset (Abstand vom Canvas zum Bildschirmrand) und die Hälfte der Breite und Höhe des Spielers abziehen.

![Touch-Steuerungen für das Schiff des Spielers, mit sichtbarer Ausgabe der x- und y-Position.](controls-touch.png)

Um zu überprüfen, ob es korrekt funktioniert, können wir die `x`- und `y`-Positionen mit dem `output`-Element ausgeben. Die `preventDefault()`-Funktion ist nötig, um zu verhindern, dass der Browser sich bewegt — ohne diese hätten Sie das Standardverhalten, und der Canvas würde auf der Seite herumgezogen, was die Browser-Scrollbar anzeigen und chaotisch aussehen würde.

## Touch-Events in Phaser

Wir müssen dies nicht selbst tun; Frameworks wie Phaser bieten Systeme zur Verwaltung von Touch-Events für uns — siehe [Verwalten der Touch-Events](https://phaser.io/docs/2.6.1/Phaser.Touch.html).

### Pointer-Theorie

Ein [Pointer](https://phaser.io/docs/2.6.1/Phaser.Pointer.html) repräsentiert einen einzelnen Finger auf dem Touchscreen. Phaser startet standardmäßig zwei Pointer, sodass mit zwei Fingern gleichzeitig eine Aktion ausgeführt werden kann. Captain Rogers ist ein einfaches Spiel — es kann mit zwei Fingern gesteuert werden, der linke bewegt das Schiff und der rechte steuert die Kanone des Schiffs. Es gibt kein Multitouch oder Gesten — alles wird durch einzelne Pointer-Eingaben gehandhabt.

Sie können dem Spiel bis zu zehn Pointer hinzufügen, indem Sie `this.game.input.addPointer` verwenden, die gleichzeitig verwaltet werden können. Der zuletzt verwendete Pointer ist im `this.game.input.activePointer`-Objekt verfügbar — der zuletzt aktivierte Finger auf dem Bildschirm.

Wenn Sie auf einen bestimmten Pointer zugreifen müssen, sind sie alle verfügbar unter `this.game.input.pointer1`, `this.game.input.pointer2`, usw. Sie werden dynamisch zugewiesen, sodass wenn Sie drei Finger auf den Bildschirm legen, `pointer1`, `pointer2` und `pointer3` aktiv sein werden. Das Entfernen des zweiten Fingers zum Beispiel hat keinen Einfluss auf die anderen beiden, und sein erneutes Auflegen wird die erste verfügbare Eigenschaft nutzen, sodass `pointer2` wieder verwendet wird.

Sie können schnell die Koordinaten des zuletzt aktiven Pointers über die Variablen `this.game.input.x` und `this.game.input.y` abrufen.

### Eingabe-Events

Anstatt die Pointer direkt zu verwenden, ist es auch möglich, auf `this.game.input`-Ereignisse zu hören, wie `onDown`, `onUp`, `onTap` und `onHold`:

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // Do something
}
```

Die `itemTouched()`-Funktion wird ausgeführt, wenn das `onDown`-Ereignis durch Berühren des Bildschirms ausgelöst wird. Die Variable `pointer` wird die Informationen über den Pointer enthalten, der das Ereignis aktiviert hat.

Dieser Ansatz verwendet das allgemein verfügbare `this.game.input`-Objekt, aber Sie können auch Aktionen auf beliebigen Spielobjekten wie Sprites oder Buttons erkennen, indem Sie `onInputOver`, `onInputOut`, `onInputDown`, `onInputUp`, `onDragStart` oder `onDragStop` verwenden:

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // Do something
}
```

Auf diese Weise können Sie ein Ereignis an jedes Objekt im Spiel anhängen, etwa das Schiff des Spielers, und auf die vom Benutzer ausgeführten Aktionen reagieren.

Ein weiterer Vorteil von Phaser ist, dass die von Ihnen erstellten Buttons jede Art von Eingabe akzeptieren, sei es eine Berührung auf einem mobilen Gerät oder ein Klick auf einem Desktop — das Framework kümmert sich im Hintergrund darum.

### Implementierung

Der einfachste Weg, ein interaktives Objekt hinzuzufügen, das auf Benutzereingaben hört, ist das Erstellen eines Buttons:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Dieser wird im `MainMenu`-Zustand geformt – er wird zehn Pixel von der oberen linken Ecke des Bildschirms platziert, das `logo-enclave`-Bild verwenden und die `clickEnclave()`-Funktion ausführen, wenn er berührt wird. Dies wird auf mobilen und Desktop-Geräten ohne weiteres funktionieren. Es gibt einige Buttons im Hauptmenü, einschließlich desjenigen, der das Spiel starten wird.

Für das eigentliche Gameplay, anstatt weitere Buttons zu erstellen und den kleinen mobilen Bildschirm damit zu überladen, können wir etwas anderes verwenden: Wir erstellen unsichtbare Bereiche, die auf die gegebene Aktion antworten. Aus Design-Sicht ist es besser, das Aktivitätsfeld größer zu machen, ohne die Hälfte des Bildschirms mit Button-Bildern zu bedecken. Beispielsweise wird durch Tippen auf die rechte Seite des Bildschirms die Waffe abgefeuert:

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

Der obige Code erstellt einen neuen Button mit einem transparenten Bild, das die rechte Hälfte des Bildschirms abdeckt. Sie können Funktionen separat für Eingabe nach unten und Eingabe nach oben zuweisen, wenn Sie kompliziertere Aktionen ausführen möchten, aber in diesem Spiel wird durch Berühren der rechten Seite des Bildschirms die Kugeln nach rechts abgefeuert — das ist alles, was wir in diesem Fall brauchen.

Die Bewegung des Spielers könnte durch das Erstellen der vier Richtungstasten gehandhabt werden, aber wir können den Vorteil von Touchscreens nutzen und das Schiff des Spielers herumziehen:

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

Wir können das Schiff herumziehen und gleichzeitig etwas tun und reagieren, wenn das Ziehen gestoppt wird. Das Ziehen in Phaser, wenn aktiviert, funktioniert ohne weiteres — Sie müssen die Position des Sprites nicht manuell selbst einstellen, daher könnten Sie die `onDragStart()`-Funktion leer lassen oder einige Debug-Ausgaben hinzufügen, um zu sehen, ob es richtig funktioniert. Das `pointer`-Element enthält die Variablen `x` und `y`, die die aktuelle Position des gezogenen Elements speichern.

### Spezielle Plugins

Sie können spezielle Plugins verwenden, die Touch-Events auf unterschiedliche Weise behandeln, UI-Steuerelemente rendern und mehr.
Hier sind einige Beispiele für Plugins, die ein virtuelles Gamepad und einen Joystick verwenden:

- [phaser-plugin-virtual-gamepad](https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad) (Phaser 2)
- [Virtueller Joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/) (Phaser 3)

Für grundlegende Plugins wie das virtuelle Gamepad können Sie das Skript herunterladen und in Ihrer Seite verfügbar machen:

```html
<script src="js/phaser.min.js"></script>
<!-- https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad -->
<script src="js/phaser-plugin-virtual-gamepad.js"></script>
```

Binden Sie sie dann in Ihr Skript ein und nutzen Sie sie ähnlich dem folgenden Ausschnitt:

```js
// Add the VirtualGamepad plugin to a Phaser 2 game
this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
// Add a joystick to the game
this.joystick = this.gamepad.addJoystick(100, 420, 1.2, "gamepad");
// Add a button to the game
this.button = this.gamepad.addButton(400, 420, 1.0, "gamepad");
```

Für weitere Informationen werfen Sie einen Blick in den [inoffiziellen Katalog der Phaser-Plugins](https://phaserplugins.com/), um zu sehen, ob etwas Ihren Bedürfnissen entspricht.

## Zusammenfassung

Damit haben wir das Hinzufügen von Touch-Steuerungen für mobile Geräte abgedeckt; im nächsten Artikel werden wir sehen, wie man Tastatur- und Mausunterstützung hinzufügt.

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
