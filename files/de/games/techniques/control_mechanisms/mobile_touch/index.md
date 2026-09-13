---
title: Mobile Touch-Steuerungen
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

Die Zukunft des mobilen Gamings liegt definitiv im Web, und viele Entwickler wählen den {{Glossary("Mobile_First", "mobile-first")}} Ansatz in ihrem Spieleentwicklungsprozess – in der modernen Welt beinhaltet dies generell auch die Implementierung von Touch-Steuerungen. In diesem Tutorial werden wir mobile Steuerungen in einem HTML-Spiel implementieren und das Spielen auf einem mobilen Touch-fähigen Gerät genießen.

> [!NOTE]
> Das Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ist mit Phaser entwickelt, und das Management der Steuerungen basiert auf Phaser, könnte aber auch in reinem JavaScript realisiert werden. Der Vorteil der Nutzung von Phaser besteht darin, dass es Hilfsvariablen und -funktionen für eine schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Reiner JavaScript-Ansatz

Wir können Touch-Ereignisse selbst implementieren – das Einrichten von Event-Listenern und das Zuweisen relevanter Funktionen zu ihnen wäre recht einfach:

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

Auf diese Weise würde das Berühren des {{htmlelement("canvas")}} des Spiels auf dem mobilen Bildschirm Ereignisse auslösen, und wir könnten das Spiel auf jede erdenkliche Weise manipulieren (zum Beispiel das Raumschiff herumbewegen). Die Ereignisse sind wie folgt:

- [touchstart](/de/docs/Web/API/Element/touchstart_event) wird ausgelöst, wenn der Benutzer einen Finger auf den Bildschirm legt.
- [touchmove](/de/docs/Web/API/Element/touchmove_event) wird ausgelöst, wenn der Finger bei Berührung über den Bildschirm bewegt wird.
- [touchend](/de/docs/Web/API/Element/touchend_event) wird ausgelöst, wenn der Benutzer aufhört, den Bildschirm zu berühren.
- [touchcancel](/de/docs/Web/API/Element/touchcancel_event) wird ausgelöst, wenn eine Berührung abgebrochen wird, zum Beispiel wenn der Benutzer den Finger aus dem Bildschirm bewegt.

> [!NOTE]
> Der [Artikel zu Touch-Ereignissen](/de/docs/Web/API/Touch_events) liefert weitere Beispiele und Informationen.

### Reine JavaScript-Demo

Lassen Sie uns die mobile Unterstützung in einer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) implementieren, die auf GitHub verfügbar ist, sodass wir das Raumschiff des Spielers durch Berühren des Bildschirms auf einem mobilen Gerät bewegen können.

Wir werden zwei Ereignisse verwenden: `touchstart` und `touchmove`, beide von einer Funktion behandelt. Warum? Die Funktion `touchHandler` weist dem Raumschiff die richtigen Variablenpositionen zu, sodass wir sie für beide Fälle verwenden können: wenn der Spieler den Bildschirm berührt, ihn aber nicht bewegt (`touchstart`), und wenn der Finger auf dem Bildschirm bewegt wird (`touchmove`):

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

Wenn die Berührung erfolgt (`touches`-Objekt ist nicht leer), haben wir alle benötigten Informationen in diesem Objekt. Wir können die erste Berührung bekommen (`e.touches[0]`, unser Beispiel ist nicht multitouch-fähig), die Variablen `pageX` und `pageY` extrahieren und die Position des Raumschiffs auf dem Bildschirm durch Abzug des Canvas-Offsets (Abstand vom Canvas zum Rand des Bildschirms) und der halben Breite und Höhe des Spielers setzen.

![Touch-Steuerungen für das Raumschiff des Spielers mit sichtbarem Ausgabepunkt der x- und y-Position.](controls-touch.png)

Um zu sehen, ob es korrekt funktioniert, können wir die `x`- und `y`-Positionen mithilfe des `output`-Elements ausgeben. Die Funktion `preventDefault()` ist notwendig, um zu verhindern, dass sich der Browser bewegt – ohne sie hätten Sie das Standardverhalten und das Canvas würde um die Seite gezogen, was die Scrollbalken des Browsers anzeigen und unordentlich aussehen würde.

## Touch-Ereignisse in Phaser

Wir müssen dies nicht selbst tun; Frameworks wie Phaser bieten Systeme, um Touch-Ereignisse für uns zu verwalten – siehe [Verwaltung der Touch-Ereignisse](https://phaser.io/docs/2.6.1/Phaser.Touch.html).

### Theorie zu Zeigern

Ein [Zeiger](https://phaser.io/docs/2.6.1/Phaser.Pointer.html) repräsentiert einen einzelnen Finger auf dem Touchscreen. Phaser startet standardmäßig zwei Zeiger, sodass zwei Finger gleichzeitig eine Aktion ausführen können. Captain Rogers ist ein einfaches Spiel – es kann mit zwei Fingern gesteuert werden, der linke bewegt das Raumschiff und der rechte kontrolliert die Kanone des Schiffes. Es gibt kein Multitouch oder Gesten – alles wird durch Eingaben eines einzelnen Zeigers gesteuert.

Sie können weitere Zeiger zum Spiel hinzufügen, indem Sie `this.game.input.addPointer` bis zu zehn Zeiger gleichzeitig verwalten. Der zuletzt verwendete Zeiger ist im `this.game.input.activePointer`-Objekt verfügbar – der zuletzt aktive Finger auf dem Bildschirm.

Wenn Sie auf einen speziellen Zeiger zugreifen müssen, sind sie alle unter `this.game.input.pointer1`, `this.game.input.pointer2` usw. verfügbar. Sie werden dynamisch zugewiesen, sodass, wenn Sie drei Finger auf den Bildschirm legen, `pointer1`, `pointer2` und `pointer3` aktiv sein werden. Das Entfernen des zweiten Fingers beeinträchtigt beispielsweise die anderen beiden nicht, und das erneute Setzen verwendet die zuerst verfügbare Eigenschaft, sodass `pointer2` erneut verwendet wird.

Sie können schnell die Koordinaten des zuletzt aktiven Zeigers über die `this.game.input.x` und `this.game.input.y` Variablen abrufen.

### Eingabeereignisse

Statt die Zeiger direkt zu verwenden, ist es auch möglich, auf `this.game.input` Ereignisse zu hören, wie `onDown`, `onUp`, `onTap` und `onHold`:

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // Do something
}
```

Die `itemTouched()`-Funktion wird ausgeführt, wenn das `onDown`-Ereignis durch Berühren des Bildschirms ausgelöst wird. Die `pointer`-Variable enthält die Informationen über den Zeiger, der das Ereignis aktiviert hat.

Dieser Ansatz verwendet das allgemein verfügbare `this.game.input`-Objekt, aber Sie können auch die Aktionen auf allen Spielobjekten wie Sprites oder Schaltflächen durch die Verwendung von `onInputOver`, `onInputOut`, `onInputDown`, `onInputUp`, `onDragStart` oder `onDragStop` erkennen:

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // Do something
}
```

Auf diese Weise können Sie ein Ereignis an jedes Objekt im Spiel anhängen, wie das Raumschiff des Spielers, und auf die Aktionen reagieren, die der Benutzer ausführt.

Ein zusätzlicher Vorteil der Verwendung von Phaser ist, dass die von Ihnen erstellten Schaltflächen jede Art von Eingabe akzeptieren, sei es eine Berührung auf dem Mobilgerät oder ein Klick auf dem Desktop – das Framework erledigt diesen Schritt im Hintergrund für Sie.

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

Diese wird im `MainMenu`-Zustand gebildet – sie wird zehn Pixel von der oberen linken Ecke des Bildschirms platziert, das `logo-enclave`-Bild verwenden und die `clickEnclave()`-Funktion ausführen, wenn sie berührt wird. Dies funktioniert sofort auf Mobilgeräten und Desktops. Es gibt einige Schaltflächen im Hauptmenü, einschließlich derjenigen, die das Spiel starten wird.

Für das eigentliche Gameplay können wir anstelle der Erstellung weiterer Schaltflächen und der Abdeckung des kleinen mobilen Bildschirms mit ihnen etwas anderes verwenden: Wir erstellen unsichtbare Bereiche, die auf die jeweilige Aktion reagieren. Aus gestalterischer Sicht ist es besser, das Aktionsfeld zu vergrößern, ohne die Hälfte des Bildschirms mit Schaltflächenbildern abzudecken. Zum Beispiel wird das Tippen auf die rechte Seite des Bildschirms die Waffe abfeuern:

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

Der obige Code erstellt eine neue Schaltfläche mithilfe eines transparenten Bildes, das die rechte Hälfte des Bildschirms abdeckt. Sie können Funktionen separat bei Eingabe nach unten und Eingabe nach oben zuweisen, wenn Sie mehr komplizierte Aktionen ausführen möchten, aber in diesem Spiel wird durch Berühren der rechten Seite des Bildschirms die Kugeln nach rechts abgefeuert – dies ist alles, was wir in diesem Fall benötigen.

Das Bewegen des Spielers könnte durch die Erstellung der vier Richtungstasten verwaltet werden, aber wir können den Vorteil von Touchscreens nutzen und das Raumschiff des Spielers herumziehen:

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

Wir können das Schiff herumschieben und in der Zwischenzeit etwas tun und reagieren, wenn das Ziehen gestoppt wird. Ziehen in Phaser, wenn aktiviert, funktioniert von selbst – Sie müssen die Position des Sprites nicht manuell setzen, sodass Sie die `onDragStart()`-Funktion leer lassen oder eine Debug-Ausgabe platzieren können, um zu sehen, ob es korrekt funktioniert. Das `pointer`-Element enthält die `x`- und `y`-Variablen, die die aktuelle Position des gezogenen Elements speichern.

### Dedizierte Plugins

Sie können dedizierte Plugins verwenden, die Touch-Ereignisse auf unterschiedliche Weise verarbeiten, UI-Steuerungen rendern und mehr. Hier sind einige Plugin-Beispiele, die ein virtuelles Gamepad und Joystick verwenden:

- [phaser-plugin-virtual-gamepad](https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad) (Phaser 2)
- [Virtueller Joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/) (Phaser 3)

Für grundlegende Plugins wie das virtuelle Gamepad können Sie das Skript herunterladen und auf Ihrer Seite verfügbar machen:

```html
<script src="js/phaser.min.js"></script>
<!-- https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad -->
<script src="js/phaser-plugin-virtual-gamepad.js"></script>
```

Dann binden Sie sie in Ihr Skript ein und verwenden sie ähnlich wie im folgenden Code-Snippet:

```js
// Add the VirtualGamepad plugin to a Phaser 2 game
this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
// Add a joystick to the game
this.joystick = this.gamepad.addJoystick(100, 420, 1.2, "gamepad");
// Add a button to the game
this.button = this.gamepad.addButton(400, 420, 1.0, "gamepad");
```

Weitere Informationen finden Sie im [inoffiziellen Katalog von Phaser-Plugins](https://phaserplugins.com/), um zu sehen, ob etwas Ihren Bedürfnissen entspricht.

## Zusammenfassung

Das deckt die Hinzufügung von Touch-Steuerungen für mobile Geräte ab; im nächsten Artikel werden wir sehen, wie man Tastatur- und Mausunterstützung hinzufügt.

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
