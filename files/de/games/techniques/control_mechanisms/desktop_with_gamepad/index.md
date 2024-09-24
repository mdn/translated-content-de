---
title: Desktop-Gamepad-Steuerungen
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Nun werden wir uns damit beschäftigen, etwas Besonderes hinzuzufügen – die Unterstützung für Gamepad-Steuerungen über die Gamepad-API. Sie bringt ein konsolenähnliches Erlebnis in Ihre Webspiele.

Die Gamepad-API ermöglicht es Ihnen, ein Gamepad an Ihren Computer anzuschließen und gedrückte Tasten direkt aus dem JavaScript-Code zu erkennen, dank der Browser, die diese Funktion implementieren. Eine API stellt alle Informationen bereit, die Sie benötigen, um die Logik Ihres Spiels zu verbinden und erfolgreich die Benutzeroberfläche und das Gameplay zu steuern.

## API-Status, Browser- und Hardwareunterstützung

Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Working Draft-Status, obwohl die Browserunterstützung bereits recht gut ist — etwa 63 % globale Abdeckung laut [caniuse.com](https://caniuse.com/#search=gamepad). Die Liste der unterstützten Geräte ist ebenfalls recht umfangreich — die meisten beliebten Gamepads (z.B. XBox 360 oder PS3) sollten für Webimplementierungen geeignet sein.

## Reiner JavaScript-Ansatz

Überlegen wir, wie man reine JavaScript-Gamepad-Steuerungen in unserem [kleinen Steuerungs-Demo](https://github.com/end3r/JavaScript-Game-Controls/) umsetzen kann, um zu sehen, wie es funktionieren würde. Zuerst benötigen wir einen Event-Listener, um auf die Verbindung des neuen Geräts zu hören:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Dieser wird einmal ausgeführt, sodass wir einige Variablen erstellen können, die wir später zum Speichern der Controller-Infos und der gedrückten Tasten benötigen:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion erscheint auf dem Bildschirm, wenn das Gerät verbunden ist:

![Gamepad verbunden Nachricht unter dem Captain Rogers Spiel - drahtloser XBox 360 Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen — im oben gezeigten Fall verwenden wir den XBox 360 Wireless Controller.

Um den Zustand der derzeit gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die dies in jedem Frame tut:

```js
function gamepadUpdateHandler() {
  buttonsPressed = [];
  if (controller.buttons) {
    for (let b = 0; b < controller.buttons.length; b++) {
      if (controller.buttons[b].pressed) {
        buttonsPressed.push(b);
      }
    }
  }
}
```

Zuerst setzen wir das `buttonsPressed`-Array zurück, um es für die neuesten Informationen vorzubereiten, die wir aus dem aktuellen Frame schreiben. Dann, wenn die Tasten verfügbar sind, iterieren wir durch sie; wenn die Eigenschaft `pressed` auf `true` gesetzt ist, fügen wir sie dem `buttonsPressed`-Array für die spätere Verarbeitung hinzu. Als nächstes betrachten wir die `gamepadButtonPressedHandler()`-Funktion:

```js
function gamepadButtonPressedHandler(button) {
  let press = false;
  for (let i = 0; i < buttonsPressed.length; i++) {
    if (buttonsPressed[i] === button) {
      press = true;
    }
  }
  return press;
}
```

Die Funktion nimmt eine Taste als Parameter; in der Schleife prüft sie, ob die gegebene Tasten-Nummer zu den derzeit gedrückten Tasten im `buttonsPressed`-Array gehört. Wenn dies der Fall ist, gibt die Funktion `true` zurück; andernfalls `false`.

Nächsten führen wir in der `draw()`-Funktion zwei Dinge aus — die `gamepadUpdateHandler()`-Funktion, um bei jedem Frame den aktuellen Zustand der gedrückten Tasten zu erhalten, und verwenden die `gamepadButtonPressedHandler()`-Funktion, um die Tasten zu überprüfen, die uns interessieren, um festzustellen, ob sie gedrückt sind, und etwas zu tun, wenn sie es sind:

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // …

  gamepadUpdateHandler();
  if (gamepadButtonPressedHandler(0)) {
    playerY -= 5;
  } else if (gamepadButtonPressedHandler(1)) {
    playerY += 5;
  }
  if (gamepadButtonPressedHandler(2)) {
    playerX -= 5;
  } else if (gamepadButtonPressedHandler(3)) {
    playerX += 5;
  }
  if (gamepadButtonPressedHandler(11)) {
    alert("BOOM!");
  }

  // …

  ctx.drawImage(img, playerX, playerY);
  requestAnimationFrame(draw);
}
```

In diesem Fall prüfen wir die vier D-Pad-Tasten (0-3) und die A-Taste (11).

> [!NOTE]
> Bitte denken Sie daran, dass verschiedene Geräte unterschiedliche Tastenbelegungen haben können, z.B. hat die D-Pad-Rechts-Taste beim drahtlosen XBox 360-Controller einen Index von 3, kann aber bei einem anderen Gerät einen anderen haben.

Sie könnten auch eine Hilfsfunktion erstellen, die den aufgelisteten Tasten richtige Namen zuordnet, so dass Sie anstelle der Prüfung, ob `gamepadButtonPressedHandler(3)` gedrückt ist, eine beschreibendere Prüfung durchführen könnten: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) in Aktion sehen — versuchen Sie, Ihr Gamepad anzuschließen und die Tasten zu drücken.

## Phaser-Ansatz

Kommen wir zur endgültigen Implementierung der Gamepad-API im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/), das wir mit Phaser erstellt haben. Es handelt sich jedoch auch um reinen JavaScript-Code, sodass er in jedem anderen Projekt unabhängig vom verwendeten Framework eingesetzt werden kann.

Zuerst erstellen wir eine kleine Bibliothek, die sich um die Eingabeverwaltung kümmert. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

```js
const GamepadAPI = {
  active: false,
  controller: {},
  connect(event) {},
  disconnect(event) {},
  update() {},
  buttons: {
    layout: [],
    cache: [],
    status: [],
    pressed(button, state) {},
  },
  axes: {
    status: [],
  },
};
```

Die `controller`-Variable speichert die Informationen über das angeschlossene Gamepad und es gibt eine `active`-boolesche Variable, die wir verwenden können, um zu wissen, ob der Controller verbunden ist oder nicht. Die Funktionen `connect()` und `disconnect()` sind an die folgenden Ereignisse gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Diese werden ausgelöst, wenn das Gamepad entsprechend verbunden und getrennt wird. Die nächste Funktion ist `update()`, welche die Informationen über die gedrückten Tasten und Achsen aktualisiert.

Die Variable `buttons` enthält das `layout` eines bestimmten Controllers (z.B. welche Tasten sich wo befinden, da ein XBox 360-Layout anders sein kann als ein generisches), den `cache`, der die Informationen über die Tasten aus dem vorherigen Frame enthält, und den `status`, der die Informationen aus dem aktuellen Frame enthält.

Die `pressed()`-Funktion nimmt die Eingabedaten und setzt die Informationen darüber in unserem Objekt, und die `axes`-Eigenschaft speichert das Array, das die Werte enthält, die den Grad der gedrückten Achse in den `x`- und `y`-Richtungen signalisieren, dargestellt durch einen Float-Wert im `(-1, 1)`-Bereich.

Nachdem das Gamepad verbunden ist, werden die Informationen über den Controller im Objekt gespeichert:

```js
connect(event) {
    GamepadAPI.controller = event.gamepad;
    GamepadAPI.active = true;
},
```

Die `disconnect`-Funktion entfernt die Informationen aus dem Objekt:

```js
disconnect(event) {
    delete GamepadAPI.controller;
    GamepadAPI.active = false;
},
```

Die `update()`-Funktion wird in der Update-Schleife des Spiels bei jedem Frame ausgeführt, sodass sie die neuesten Informationen über die gedrückten Tasten enthält:

```js
update() {
  GamepadAPI.buttons.cache = [];
  for (let k = 0; k < GamepadAPI.buttons.status.length; k++) {
    GamepadAPI.buttons.cache[k] = GamepadAPI.buttons.status[k];
  }
  GamepadAPI.buttons.status = [];
  const c = GamepadAPI.controller || {};
  const pressed = [];
  if (c.buttons) {
    for (let b = 0; b < c.buttons.length; b++) {
      if (c.buttons[b].pressed) {
        pressed.push(GamepadAPI.buttons.layout[b]);
      }
    }
  }
  const axes = [];
  if (c.axes) {
    for (let a = 0; a < c.axes.length; a++) {
      axes.push(c.axes[a].toFixed(2));
    }
  }
  GamepadAPI.axes.status = axes;
  GamepadAPI.buttons.status = pressed;
  return pressed;
},
```

Die oben angegebene Funktion löscht den Button-Cache und kopiert deren Status vom vorherigen Frame in den Cache. Anschließend wird der Tastenstatus gelöscht und die neuen Informationen hinzugefügt. Gleiches gilt für die Achseninformationen — das Schleifen durch die Achsen fügt die Werte dem Array hinzu. Erhaltene Werte werden den entsprechenden Objekten zugeordnet und gibt die gedrückten Informationen zu Debugging-Zwecken zurück.

Die `button.pressed()`-Funktion erkennt die tatsächlichen Tastendrücke:

```js
pressed(button, hold) {
  let newPress = false;
  for (let i = 0; i < GamepadAPI.buttons.status.length; i++) {
    if (GamepadAPI.buttons.status[i] === button) {
      newPress = true;
      if (!hold) {
        for (let j = 0; j < GamepadAPI.buttons.cache.length; j++) {
          if (GamepadAPI.buttons.cache[j] === button) {
            newPress = false;
          }
        }
      }
    }
  }
  return newPress;
},
```

Es wird durch die gedrückten Tasten geschleift und wenn die gesuchte Taste gedrückt ist, wird die entsprechende boolesche Variable auf `true` gesetzt. Wenn wir überprüfen möchten, dass die Taste nicht bereits gehalten wird (also es sich um einen neuen Druck handelt), erledigt das Schleifen durch die zwischengespeicherten Zustände aus dem vorherigen Frame die Arbeit — wenn die Taste bereits gedrückt war, ignorieren wir den neuen Druck und setzen ihn auf `false`.

## Implementierung

Nun wissen wir, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält, also lassen Sie uns lernen, wie all dies tatsächlich im Spiel verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer einen benutzerdefinierten Text auf dem Hauptmenübildschirm des Spiels anzeigen.

Das `textGamepad`-Objekt enthält den Text, der angibt, dass ein Gamepad verbunden wurde und standardmäßig versteckt ist. Hier ist der Code, den wir in der `create()`-Funktion vorbereitet haben, die einmal beim Erstellen des neuen Zustands ausgeführt wird:

```js
create() {
  // …
  const message = 'Gamepad verbunden! Drücken Sie Y für Steuerungen';
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die jedes Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich verbunden ist, damit der richtige Text angezeigt werden kann. Dann können wir mithilfe der `Gamepad.update()`-Methode die Informationen über gedrückte Tasten verfolgen und auf die gegebenen Informationen reagieren:

```js
update() {
  // …
  if (GamepadAPI.active) {
    this.textGamepad.visible = true;

    GamepadAPI.update();
    if (GamepadAPI.buttons.pressed('Start')) {
      // das Spiel starten
    }
    if (GamepadAPI.buttons.pressed('X')) {
      // die Geräusche ein-/ausschalten
    }

    this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed('Y', 'hold');
  }
}
```

Beim Drücken der `Start`-Taste wird die entsprechende Funktion aufgerufen, um das Spiel zu beginnen, und der gleiche Ansatz wird verwendet, um den Ton ein- und auszuschalten. Es gibt eine Option, um `screenGamepadHelp` zu zeigen, das ein Bild mit allen Tastenkontrollen erklärt — wenn die `Y`-Taste gedrückt und gehalten wird, wird die Hilfe sichtbar; wenn sie losgelassen wird, verschwindet die Hilfe.

![Gamepad-Informationen mit allen verfügbaren Tasten erklärt und beschrieben.](controls-gamepadinfo.png)

## Anweisungen auf dem Bildschirm

Beim Start des Spiels wird ein Einführungstext angezeigt, der die verfügbaren Steuerungen zeigt — wir erkennen bereits, ob das Spiel auf einem Desktop oder Mobilgerät gestartet wird, und zeigen dann eine entsprechende Nachricht für das Gerät an, aber wir können noch weiter gehen, um die Anwesenheit eines Gamepads zu ermöglichen:

```js
create() {
  // …
  if (this.game.device.desktop) {
    if (GamepadAPI.active) {
      moveText = 'DPad oder linker Stick\nzum Bewegen';
      shootText = 'A zum Schießen,\nY für Steuerungen';
    } else {
      moveText = 'Pfeiltasten\noder WASD zum Bewegen';
      shootText = 'X oder Leertaste\nzum Schießen';
    }
  } else {
    moveText = 'Tippen und halten zum Bewegen';
    shootText = 'Tippen zum Schießen';
  }
}
```

Auf dem Desktop können wir überprüfen, ob der Controller aktiv ist, und die Gamepad-Steuerungen anzeigen — wenn nicht, werden die Tastatursteuerungen angezeigt.

## Gameplay-Steuerungen

Wir können dem Spieler noch mehr Flexibilität bieten, indem wir ihm Haupt- und alternative Gamepad-Bewegungssteuerungen geben:

```js
if (GamepadAPI.buttons.pressed("DPad-Up", "hold")) {
  // Spieler nach oben bewegen
} else if (GamepadAPI.buttons.pressed("DPad-Down", "hold")) {
  // Spieler nach unten bewegen
}

if (GamepadAPI.buttons.pressed("DPad-Left", "hold")) {
  // Spieler nach links bewegen
}

if (GamepadAPI.buttons.pressed("DPad-Right", "hold")) {
  // Spieler nach rechts bewegen
}

if (GamepadAPI.axes.status) {
  if (GamepadAPI.axes.status[0] > 0.5) {
    // Spieler nach oben bewegen
  } else if (GamepadAPI.axes.status[0] < -0.5) {
    // Spieler nach unten bewegen
  }

  if (GamepadAPI.axes.status[1] > 0.5) {
    // Spieler nach links bewegen
  } else if (GamepadAPI.axes.status[1] < -0.5) {
    // Spieler nach rechts bewegen
  }
}
```

Nun können sie das Schiff auf dem Bildschirm mithilfe der `DPad`-Tasten oder der linken Stickachsen bewegen.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegen `0.5` ausgewertet wird? Das liegt daran, dass Achsen Gleitkommawerte haben, während Tasten Booleans sind. Sobald ein bestimmter Schwellenwert erreicht ist, können wir davon ausgehen, dass die Eingabe absichtlich vom Benutzer vorgenommen wurde und entsprechend handeln.

Für die Schießsteuerungen verwendeten wir die `A`-Taste — wenn sie gedrückt gehalten wird, wird ein neues Projektil erzeugt, und alles andere wird vom Spiel gehandhabt:

```js
if (GamepadAPI.buttons.pressed("A", "hold")) {
  this.spawnBullet();
}
```

Das Anzeigen des Bildschirms mit allen Steuerungen sieht im Hauptmenü genauso aus:

```js
this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
```

Wenn die `B`-Taste gedrückt ist, wird das Spiel angehalten:

```js
if (gamepadAPI.buttonPressed("B")) {
  this.managePause();
}
```

## Der Pausen- und Gameover-Zustand

Wir haben bereits gelernt, wie man den gesamten Lebenszyklus des Spiels steuert: das Gameplay pausieren, es neu starten oder zum Hauptmenü zurückkehren. Es funktioniert reibungslos auf Mobilgeräten und Desktops, und das Hinzufügen von Gamepad-Steuerungen ist ebenso unkompliziert — in der `update()`-Funktion prüfen wir, ob der aktuelle Zustandsstatus `paused` ist — wenn ja, sind die entsprechenden Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Ähnlich lässt sich im `gameover`-Zustandstatus der Benutzer das Spiel neu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Gameover-Bildschirm sichtbar ist, startet die `Start`-Taste das Spiel neu, während die `Back`-Taste uns zurück zum Hauptmenü bringt. Das gleiche gilt, wenn das Spiel pausiert ist: die `Start`-Taste hebt die Pause auf und die `Back`-Taste kehrt zurück, genau wie zuvor.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel implementiert — versuchen Sie, einen beliebigen beliebten Controller wie den XBox 360 zu verbinden und selbst zu sehen, wie viel Spaß es macht, den Asteroiden auszuweichen und die Aliens mit einem Gamepad zu schießen.

Jetzt können wir weiter gehen und neue, sogar noch unkonventionellere Wege erkunden, um das HTML-Spiel zu steuern, wie das Winken der Hand vor dem Laptop oder das Schreien in Ihr Mikrofon.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
