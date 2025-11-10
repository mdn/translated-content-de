---
title: Mobile-Touch-Steuerung
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

Die Zukunft des mobilen Gamings liegt zweifellos im Web, und viele Entwickler wählen den {{Glossary("Mobile_First", "Mobile-First")}}-Ansatz in ihrem Spielentwicklungsprozess. In der modernen Welt bedeutet dies in der Regel auch die Implementierung von Touch-Steuerungen. In diesem Tutorial werden wir sehen, wie einfach es ist, mobile Steuerungen in einem HTML-Spiel zu implementieren und das Spielen auf einem mobilen, touchfähigen Gerät zu genießen.

> [!NOTE]
> Das Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser gebaut, und die Steuerung basiert auf Phaser, könnte aber auch in reinem JavaScript erfolgen. Der Vorteil der Verwendung von Phaser besteht darin, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet. Die Wahl der Methode liegt jedoch ganz bei Ihnen.

## Rein JavaScript-Ansatz

Wir könnten Touch-Events selbst implementieren – das Einrichten von Event-Listenern und das Zuweisen relevanter Funktionen wäre ziemlich einfach:

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

Auf diese Weise würden Berührungen des {{htmlelement("canvas")}} des Spiels auf dem mobilen Bildschirm Ereignisse auslösen, und wir könnten das Spiel auf beliebige Weise manipulieren (zum Beispiel das Raumschiff bewegen). Die Ereignisse sind wie folgt:

- [touchstart](/de/docs/Web/API/Element/touchstart_event) wird ausgelöst, wenn der Benutzer einen Finger auf den Bildschirm legt.
- [touchmove](/de/docs/Web/API/Element/touchmove_event) wird ausgelöst, wenn der Benutzer den Finger auf dem Bildschirm bewegt, während er ihn berührt.
- [touchend](/de/docs/Web/API/Element/touchend_event) wird ausgelöst, wenn der Benutzer den Bildschirm nicht mehr berührt.
- [touchcancel](/de/docs/Web/API/Element/touchcancel_event) wird ausgelöst, wenn ein Berührungsvorgang abgebrochen wird, zum Beispiel, wenn der Benutzer den Finger aus dem Bildschirm bewegt.

> [!NOTE]
> Der Referenzartikel zu [Touch-Events](/de/docs/Web/API/Touch_events) bietet weitere Beispiele und Informationen.

### Demo mit reinem JavaScript

Lassen Sie uns die mobile Unterstützung in einer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) implementieren, die auf GitHub verfügbar ist, sodass wir das Raumschiff des Spielers durch Berühren des Bildschirms auf einem mobilen Gerät bewegen können.

Wir werden zwei Ereignisse verwenden: `touchstart` und `touchmove`, die beide von einer Funktion behandelt werden. Warum? Die Funktion `touchHandler` wird die richtigen Variablen der Position des Schiffs zuweisen, sodass wir sie für beide Fälle verwenden können: wenn der Spieler den Bildschirm berührt, aber nicht bewegt (`touchstart`), und wenn der Finger auf dem Bildschirm bewegt wird (`touchmove`):

```js
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
```

Die `touchHandler`-Funktion sieht wie folgt aus:

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

Wenn die Berührung stattfindet (`touches`-Objekt ist nicht leer), haben wir alle benötigten Informationen in diesem Objekt. Wir können die erste Berührung erhalten (`e.touches[0]`, unser Beispiel unterstützt kein Multitouch), die `pageX`- und `pageY`-Variablen extrahieren und die Position des Spielerschiffs auf dem Bildschirm anpassen, indem wir den Canvas-Versatz (Abstand vom Canvas zur Bildschirmkante) und die halbe Breite und Höhe des Spielers abziehen.

![Touch-Steuerung für das Raumschiff des Spielers, mit sichtbarem Output der x- und y-Position.](controls-touch.png)

Um zu überprüfen, ob es korrekt funktioniert, können wir die `x`- und `y`-Positionen mit dem `output`-Element ausgeben. Die `preventDefault()`-Funktion wird benötigt, um zu verhindern, dass der Browser sich bewegt – ohne sie hätten Sie das Standardverhalten, und der Canvas würde über die Seite verschoben, was die Scrollleisten des Browsers anzeigen und unordentlich aussehen würde.

## Touch-Events in Phaser

Wir müssen dies nicht selbst tun; Frameworks wie Phaser bieten Systeme zur Verwaltung von Touch-Events für uns – siehe [Verwaltung der Touch-Events](https://phaser.io/docs/2.6.1/Phaser.Touch.html).

### Zeiger-Theorie

Ein [Zeiger](https://phaser.io/docs/2.6.1/Phaser.Pointer.html) repräsentiert einen einzelnen Finger auf dem Touch-Screen. Phaser startet standardmäßig zwei Zeiger, sodass zwei Finger gleichzeitig eine Aktion ausführen können. Captain Rogers ist ein einfaches Spiel – es kann mit zwei Fingern gesteuert werden, wobei der linke Finger das Schiff bewegt und der rechte die Waffe des Schiffs kontrolliert. Es gibt kein Multitouch oder Gesten – alles wird durch Eingaben von einzelnen Zeigern gehandhabt.

Sie können dem Spiel mehr Zeiger hinzufügen, indem Sie `this.game.input.addPointer` verwenden – bis zu zehn Zeiger können gleichzeitig verwaltet werden. Der zuletzt verwendete Zeiger ist im `this.game.input.activePointer`-Objekt verfügbar – der zuletzt aktive Finger auf dem Bildschirm.

Wenn Sie auf einen bestimmten Zeiger zugreifen müssen, sind sie alle verfügbar unter `this.game.input.pointer1`, `this.game.input.pointer2` usw. Sie werden dynamisch zugewiesen, sodass wenn Sie drei Finger auf den Bildschirm legen, `pointer1`, `pointer2` und `pointer3` aktiv sind. Das Entfernen des zweiten Fingers beispielsweise hat keine Auswirkungen auf die anderen beiden, und wenn dieser wieder platziert wird, wird die erste verfügbare Eigenschaft verwendet, sodass `pointer2` wieder verwendet wird.

Sie können schnell die Koordinaten des zuletzt aktiven Zeigers über die Variablen `this.game.input.x` und `this.game.input.y` abrufen.

### Eingabeveranstaltungen

Anstatt die Zeiger direkt zu verwenden, ist es auch möglich, auf `this.game.input`-Ereignisse zu hören, wie `onDown`, `onUp`, `onTap` und `onHold`:

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // Do something
}
```

Die `itemTouched()`-Funktion wird ausgeführt, wenn das `onDown`-Ereignis durch Berühren des Bildschirms ausgelöst wird. Die Variable `pointer` enthält die Informationen über den Zeiger, der das Ereignis ausgelöst hat.

Dieser Ansatz verwendet das allgemein verfügbare `this.game.input`-Objekt, aber Sie können auch die Aktionen an beliebigen Spielobjekten wie Sprites oder Schaltflächen durch Verwendung von `onInputOver`, `onInputOut`, `onInputDown`, `onInputUp`, `onDragStart` oder `onDragStop` erkennen:

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // Do something
}
```

Auf diese Weise können Sie ein Ereignis mit jedem Objekt im Spiel, wie dem Raumschiff des Spielers, verknüpfen und auf die vom Benutzer ausgeführten Aktionen reagieren.

Ein weiterer Vorteil der Verwendung von Phaser ist, dass die von Ihnen erstellten Schaltflächen jede Art von Eingabe akzeptieren, sei es eine Berührung auf Mobilgeräten oder ein Klick auf dem Desktop – das Framework regelt dies im Hintergrund für Sie.

### Implementierung

Der einfachste Weg, ein interaktives Objekt hinzuzufügen, das auf Benutzereingaben hört, besteht darin, eine Schaltfläche zu erstellen:

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

Diese wird im `MainMenu`-Zustand geformt – sie wird zehn Pixel von der oberen linken Ecke des Bildschirms entfernt platziert, das Bild `logo-enclave` verwenden und die Funktion `clickEnclave()` ausführen, wenn sie berührt wird. Dies funktioniert auf Mobilgeräten und Desktops sofort. Es gibt ein paar Schaltflächen im Hauptmenü, darunter diejenige, die das Spiel startet.

Für das eigentliche Gameplay, anstatt weitere Schaltflächen zu erstellen und den kleinen mobilen Bildschirm mit ihnen zu verdecken, können wir etwas anderes verwenden: Wir erstellen unsichtbare Bereiche, die auf die gegebene Aktion reagieren. Aus gestalterischer Sicht ist es besser, das Tätigkeitsfeld zu vergrößern, ohne die Hälfte des Bildschirms mit Schaltflächenbildern zu überdecken. Beispielsweise wird das Tippen auf die rechte Seite des Bildschirms die Waffe abfeuern:

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

Der obige Code wird eine neue Schaltfläche mit einem transparenten Bild erstellen, das die rechte Hälfte des Bildschirms abdeckt. Sie können Funktionen separat für Eingaben nach unten und oben zuweisen, wenn Sie umfassendere Aktionen durchführen möchten, aber in diesem Spiel werden die Kugeln nach rechts abgefeuert, wenn die rechte Seite des Bildschirms berührt wird – das ist in diesem Fall alles, was wir brauchen.

Das Bewegen des Spielers könnte durch Erstellen der vier Richtungstasten verwaltet werden, aber wir können den Vorteil von Touchscreens nutzen und das Raumschiff des Spielers herumziehen:

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

Wir können das Schiff ziehen und gleichzeitig etwas anderes tun und reagieren, wenn das Ziehen gestoppt wird. Das Ziehen in Phaser funktioniert, wenn es aktiviert ist, sofort – Sie müssen die Position des Sprites nicht selbst manuell festlegen, sodass Sie die Funktion `onDragStart()` leer lassen oder eine Debug-Ausgabe platzieren können, um zu sehen, ob es korrekt funktioniert. Das Element `pointer` enthält die Variablen `x` und `y`, die die aktuelle Position des gezogenen Elements speichern.

### Spezielle Plugins

Sie können spezielle Plugins verwenden, die auf verschiedene Weise Touch-Events behandeln, UI-Steuerelemente rendern und mehr. Hier sind einige Beispiele für Plugins, die ein virtuelles Gamepad und einen Joystick verwenden:

- [phaser-plugin-virtual-gamepad](https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad) (Phaser 2)
- [Virtueller Joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/) (Phaser 3)

Für einfache Plugins wie das virtuelle Gamepad können Sie das Skript herunterladen und auf Ihrer Seite verfügbar machen:

```html
<script src="js/phaser.min.js"></script>
<!-- https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad -->
<script src="js/phaser-plugin-virtual-gamepad.js"></script>
```

Dann binden Sie sie in Ihr Skript ein und verwenden sie ähnlich wie im folgenden Beispiel:

```js
// Add the VirtualGamepad plugin to a Phaser 2 game
this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
// Add a joystick to the game
this.joystick = this.gamepad.addJoystick(100, 420, 1.2, "gamepad");
// Add a button to the game
this.button = this.gamepad.addButton(400, 420, 1.0, "gamepad");
```

Für weitere Informationen durchstöbern Sie den [inoffiziellen Katalog der Phaser-Plugins](https://phaserplugins.com/), um zu sehen, ob etwas Ihren Anforderungen entspricht.

## Zusammenfassung

Damit ist die Hinzufügung von Touch-Steuerung für Mobile abgeschlossen; im nächsten Artikel werden wir sehen, wie man Tastatur- und Mausunterstützung hinzufügt.

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
