---
title: Mobile Touch-Bedienungen
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

Die Zukunft des mobilen Spielens liegt definitiv im Web, und viele Entwickler wählen den {{Glossary("Mobile_First", "Mobile First")}}-Ansatz in ihrem Spieleentwicklungsprozess — in der modernen Welt umfasst dies in der Regel auch die Implementierung von Touch-Bedienungen. In diesem Tutorial werden wir sehen, wie einfach es ist, mobile Steuerungen in ein HTML-Spiel zu implementieren und auf einem mobilen Touch-fähigen Gerät zu genießen.

> [!NOTE]
> Das Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde mit Phaser entwickelt, und die Steuerung erfolgt Phaser-basiert, aber es könnte auch in reinem JavaScript gemacht werden. Der Vorteil der Verwendung von Phaser besteht darin, dass es Hilfsvariablen und -funktionen für eine einfachere und schnellere Entwicklung bietet, aber es liegt ganz bei Ihnen, welchen Ansatz Sie wählen.

## Ansatz mit reinem JavaScript

Wir könnten Touch-Ereignisse selbst implementieren — das Einrichten von Ereignis-Listenern und das Zuweisen relevanter Funktionen zu ihnen wäre ziemlich einfach:

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

Auf diese Weise würde das Berühren des Spiel-{{htmlelement("canvas")}} auf dem mobilen Bildschirm Ereignisse auslösen, und wir könnten das Spiel auf jede gewünschte Weise manipulieren (zum Beispiel das Raumschiff bewegen). Die Ereignisse sind wie folgt:

- [touchstart](/de/docs/Web/API/Element/touchstart_event) wird ausgelöst, wenn der Benutzer einen Finger auf den Bildschirm legt.
- [touchmove](/de/docs/Web/API/Element/touchmove_event) wird ausgelöst, wenn der Finger auf dem Bildschirm bewegt wird, während er berührt wird.
- [touchend](/de/docs/Web/API/Element/touchend_event) wird ausgelöst, wenn der Benutzer aufhört, den Bildschirm zu berühren.
- [touchcancel](/de/docs/Web/API/Element/touchcancel_event) wird ausgelöst, wenn eine Berührung abgebrochen wird, zum Beispiel wenn der Benutzer seinen Finger aus dem Bildschirm bewegt.

> [!NOTE]
> Der Artikel zur [Referenz der Touch-Ereignisse](/de/docs/Web/API/Touch_events) bietet weitere Beispiele und Informationen.

### Demo mit reinem JavaScript

Lassen Sie uns die mobile Unterstützung in einer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) implementieren, die auf GitHub verfügbar ist, sodass wir das Schiff des Spielers bewegen können, indem wir den Bildschirm auf einem mobilen Gerät berühren.

Wir verwenden zwei Ereignisse: `touchstart` und `touchmove`, die beide von einer Funktion bearbeitet werden. Warum? Die Funktion `touchHandler` wird die richtigen Variablen für die Position des Schiffs zuweisen, sodass wir sie in beiden Fällen verwenden können: wenn der Spieler den Bildschirm berührt, ihn jedoch nicht bewegt (`touchstart`), und wenn der Finger auf dem Bildschirm bewegt wird (`touchmove`):

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

Wenn die Berührung erfolgt (`touches`-Objekt ist nicht leer), haben wir alle erforderlichen Informationen in diesem Objekt. Wir können die erste Berührung erhalten (`e.touches[0]`, unser Beispiel ist nicht mehrfachtouch-fähig), die `pageX`- und `pageY`-Variablen extrahieren und die Position des Spielerschiffs auf dem Bildschirm festlegen, indem wir den Canvas-Offset (Abstand von der Canvas und dem Rand des Bildschirms) und die Hälfte der Breite und Höhe des Spielers subtrahieren.

![Touch-Bedienungen für das Spielerschiff, mit sichtbarem Ausgabesignal der x- und y-Position.](controls-touch.png)

Um zu überprüfen, ob es korrekt funktioniert, können wir die `x`- und `y`-Positionen mit dem `output`-Element ausgeben. Die Funktion `preventDefault()` ist erforderlich, um zu verhindern, dass der Browser sich bewegt — ohne sie hätten Sie das Standardverhalten, und die Canvas würde durch die Seite gezogen, was die Scroll-Leisten des Browsers anzeigen und unordentlich aussehen lassen würde.

## Touch-Ereignisse in Phaser

Wir müssen dies nicht selbst tun; Frameworks wie Phaser bieten Systeme, um Touch-Ereignisse für uns zu verwalten — siehe [Verwaltung der Touch-Ereignisse](https://phaser.io/docs/2.6.1/Phaser.Touch.html).

### Pointer-Theorie

Ein [Pointer](https://phaser.io/docs/2.6.1/Phaser.Pointer.html) repräsentiert einen einzelnen Finger auf dem Touchscreen. Phaser startet standardmäßig zwei Pointer, sodass zwei Finger gleichzeitig eine Aktion ausführen können. Captain Rogers ist ein einfaches Spiel — es kann mit zwei Fingern gesteuert werden, der linke bewegt das Schiff und der rechte steuert die Schiffskanone. Es gibt keine Multitouch- oder Gestensteuerung — alles wird durch einzelne Pointer-Eingaben gehandhabt.

Sie können dem Spiel mehr Zeiger hinzufügen, indem Sie; `this.game.input.addPointer` verwenden, bis zu zehn Zeiger können gleichzeitig verwaltet werden. Der zuletzt verwendete Zeiger ist im `this.game.input.activePointer` Objekt verfügbar — der zuletzt aktive Finger auf dem Bildschirm.

Wenn Sie auf einen bestimmten Zeiger zugreifen müssen, sind sie alle unter `this.game.input.pointer1`, `this.game.input.pointer2` usw. verfügbar. Sie werden dynamisch zugewiesen, sodass, wenn Sie drei Finger auf den Bildschirm legen, `pointer1`, `pointer2` und `pointer3` aktiv werden. Wenn der zweite Finger entfernt wird, beeinflusst dies beispielsweise nicht die anderen beiden, und das erneute Setzen des Fingers wird die erste verfügbare Eigenschaft verwenden, sodass `pointer2` erneut verwendet wird.

Sie können die Koordinaten des zuletzt aktiven Zeigers schnell über die `this.game.input.x` und `this.game.input.y` Variablen abrufen.

### Eingabeereignisse

Anstatt die Zeiger direkt zu verwenden, ist es auch möglich, auf `this.game.input`-Ereignisse zu hören, wie `onDown`, `onUp`, `onTap` und `onHold`:

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // Do something
}
```

Die `itemTouched()`-Funktion wird ausgeführt, wenn das `onDown`-Ereignis durch Berühren des Bildschirms ausgelöst wird. Die `pointer`-Variable enthält die Informationen über den Zeiger, der das Ereignis aktiviert hat.

Dieser Ansatz verwendet das allgemein verfügbare `this.game.input`-Objekt, aber Sie können auch Aktionen an jedem Spieleobjekt wie Sprites oder Buttons erkennen, indem Sie `onInputOver`, `onInputOut`, `onInputDown`, `onInputUp`, `onDragStart` oder `onDragStop` verwenden:

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // Do something
}
```

Auf diese Weise können Sie ein Ereignis an jedem Objekt im Spiel anhängen, wie zum Beispiel dem Spielerschiff, und auf die vom Benutzer durchgeführten Aktionen reagieren.

Ein zusätzlicher Vorteil der Verwendung von Phaser besteht darin, dass die von Ihnen erstellten Schaltflächen jede Art von Eingabe akzeptieren, sei es eine Berührung auf dem Mobilgerät oder ein Klick auf dem Desktop — das Framework erledigt dies im Hintergrund für Sie.

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

Diese wird im `MainMenu`-Zustand gebildet — sie wird zehn Pixel von der oberen linken Ecke des Bildschirms entfernt platziert, das Bild `logo-enclave` verwenden und die `clickEnclave()`-Funktion ausführen, wenn sie berührt wird. Dies wird auf mobilen Geräten und Desktops sofort funktionieren. Es gibt ein paar Schaltflächen im Hauptmenü, einschließlich derjenigen, die das Spiel starten wird.

Für das eigentliche Gameplay, anstatt mehr Schaltflächen zu erstellen und den kleinen mobilen Bildschirm damit zu überdecken, können wir etwas anderes verwenden: wir erstellen unsichtbare Bereiche, die auf die gegebene Aktion reagieren. Aus designtechnischer Sicht ist es besser, das Aktivitätsfeld größer zu machen, ohne die Hälfte des Bildschirms mit Schaltflächenbildern zu bedecken. Beispielsweise wird durch Antippen der rechten Bildschirmseite die Waffe abgefeuert:

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

Der obige Code erstellt eine neue Schaltfläche mit einem transparenten Bild, das die rechte Hälfte des Bildschirms abdeckt. Sie können Funktionen bei Eingabedown und Eingabehoch separat zuweisen, wenn Sie kompliziertere Aktionen ausführen möchten, aber in diesem Spiel wird durch Berühren der rechten Seite des Bildschirms die Munition nach rechts abgefeuert — dies ist alles, was wir in diesem Fall benötigen.

Die Bewegung des Spielers könnte durch Erstellen der vier Richtungstasten verwaltet werden, aber wir können den Vorteil der Touchscreens nutzen und das Spielerschiff herumschleppen:

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

Wir können das Schiff herumziehen und währenddessen etwas tun und reagieren, wenn das Ziehen gestoppt wird. Das Ziehen in Phaser funktioniert, wenn aktiviert, sofort — Sie müssen die Position des Sprites nicht manuell selbst festlegen, sodass Sie die Funktion `onDragStart()` leer lassen oder einen Debug-Ausdruck hinzufügen können, um zu prüfen, ob sie korrekt funktioniert. Das `pointer`-Element enthält die `x`- und `y`-Variablen, die die aktuelle Position des gezogenen Elements speichern.

### Spezielle Plugins

Sie können spezielle Plugins verwenden, die Touch-Ereignisse auf unterschiedliche Weise handhaben, Benutzeroberflächen-Steuerelemente rendern und mehr. Hier sind einige Plugin-Beispiele, die ein virtuelles Gamepad und einen Joystick verwenden:

- [phaser-plugin-virtual-gamepad](https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad) (Phaser 2)
- [Virtueller Joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/) (Phaser 3)

Für grundlegende Plugins wie das virtuelle Gamepad können Sie das Skript herunterladen und auf Ihrer Seite verfügbar machen:

```html
<script src="js/phaser.min.js"></script>
<!-- https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad -->
<script src="js/phaser-plugin-virtual-gamepad.js"></script>
```

Dann binden Sie sie in Ihr Skript ein und verwenden sie ähnlich wie in dem folgenden Ausschnitt:

```js
// Add the VirtualGamepad plugin to a Phaser 2 game
this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
// Add a joystick to the game
this.joystick = this.gamepad.addJoystick(100, 420, 1.2, "gamepad");
// Add a button to the game
this.button = this.gamepad.addButton(400, 420, 1.0, "gamepad");
```

Für weitere Informationen werfen Sie einen Blick durch den [inoffiziellen Katalog der Phaser-Plugins](https://phaserplugins.com/), um zu sehen, ob etwas Ihren Bedürfnissen entspricht.

## Zusammenfassung

Damit decken wir das Hinzufügen von Touch-Bedienungen für mobile Geräte ab; im nächsten Artikel werden wir sehen, wie man Tastatur- und Mausunterstützung hinzufügt.

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
