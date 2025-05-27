---
title: Desktop-Gamepad-Steuerungen
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Nun schauen wir uns an, wie man etwas extra hinzufügen kann – die Unterstützung für Gamepad-Steuerungen über die Gamepad-API. Sie bringt ein konsolenähnliches Erlebnis in Ihre Webspiele.

Die Gamepad-API ermöglicht Ihnen, ein Gamepad mit Ihrem Computer zu verbinden und gedrückte Tasten direkt über den JavaScript-Code zu erkennen, dank der Browser, die diese Funktion implementieren. Eine API stellt alle Informationen bereit, die Sie benötigen, um Ihre Spiel-Logik zu verknüpfen und die Benutzeroberfläche sowie das Gameplay erfolgreich zu steuern.

## API-Status, Browser- und Hardware-Unterstützung

Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Status des Arbeitsentwurfs, obwohl die Browser-Unterstützung bereits ziemlich gut ist – etwa 63 % globale Abdeckung laut [caniuse.com](https://caniuse.com/#search=gamepad). Die Liste der unterstützten Geräte ist ebenfalls recht umfangreich – die meisten beliebten Gamepads (z. B. XBox 360 oder PS3) sollten für Webimplementierungen geeignet sein.

## Reiner JavaScript-Ansatz

Überlegen wir zunächst, wie man reine JavaScript-Gamepad-Steuerungen in unserem [kleinen Steuerungs-Demo](https://github.com/end3r/JavaScript-Game-Controls/) implementieren könnte, um zu sehen, wie es funktioniert. Zuerst benötigen wir einen Event-Listener, der auf das Anschließen des neuen Geräts hört:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Dieser wird einmalig ausgeführt, sodass wir einige Variablen erstellen können, die wir später benötigen, um die Controller-Informationen und die gedrückten Tasten zu speichern:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion erscheint auf dem Bildschirm, wenn das Gerät verbunden ist:

![Nachricht über verbundenes Gamepad unter dem Captain Rogers-Spiel - drahtloser XBox 360-Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen – im obigen Fall verwenden wir den drahtlosen XBox 360-Controller.

Um den Status der aktuell gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die genau dies in jedem Frame tut:

```js
function gamepadUpdateHandler() {
  buttonsPressed = [];
  if (controller.buttons) {
    for (const [i, button] of controller.buttons.entries()) {
      if (button.pressed) {
        buttonsPressed.push(i);
      }
    }
  }
}
```

Wir setzen zunächst das Array `buttonsPressed` zurück, um es für die Speicherung der neuesten Informationen aus dem aktuellen Frame vorzubereiten. Dann, wenn Tasten verfügbar sind, durchlaufen wir sie; wenn die Eigenschaft `pressed` auf `true` gesetzt ist, fügen wir sie dem Array `buttonsPressed` zur späteren Verarbeitung hinzu. Als Nächstes betrachten wir die Funktion `gamepadButtonPressedHandler()`:

```js
function gamepadButtonPressedHandler(button) {
  return buttonsPressed.includes(button);
}
```

Die Funktion nimmt einen Tastenindex als Parameter; sie überprüft, ob `buttonsPressed` die Taste enthält, die wir suchen, und gibt `true` zurück, wenn dies der Fall ist. Dadurch wird geprüft, ob eine Taste gedrückt ist oder nicht.

Als Nächstes führen wir in der `draw()`-Funktion zwei Dinge aus – die Funktion `gamepadUpdateHandler()`, um den aktuellen Status der gedrückten Tasten in jedem Frame zu erhalten, und die Funktion `gamepadButtonPressedHandler()`, um die Tasten zu überprüfen, die uns interessieren, ob sie gedrückt sind, und etwas zu unternehmen, wenn dies der Fall ist:

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

In diesem Fall überprüfen wir die vier D-Pad-Tasten (0-3) und die A-Taste (11).

> [!NOTE]
> Bitte denken Sie daran, dass verschiedene Geräte unterschiedliche Tastenbelegungen haben können, z.B. hat die D-Pad-Rechtstaste auf dem drahtlosen XBox 360-Controller einen Index von 3, kann aber auf einem anderen Gerät einen anderen Wert haben.

Man könnte auch eine Hilfsfunktion erstellen, die den aufgeführten Tasten richtige Namen zuweist, sodass man beispielsweise statt zu überprüfen, ob `gamepadButtonPressedHandler(3)` gedrückt ist, eine beschreibendere Überprüfung durchführen könnte: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) in Aktion sehen – versuchen Sie, Ihr Gamepad anzuschließen und die Tasten zu drücken.

## Phaser Ansatz

Gehen wir zur endgültigen Implementierung der Gamepad-API im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) über, das wir mit Phaser erstellt haben. Dies ist jedoch auch reiner JavaScript-Code, sodass er in jedem anderen Projekt verwendet werden kann, unabhängig davon, welches Framework verwendet wurde.

Zuerst erstellen wir eine kleine Bibliothek, die sich um die Verarbeitung der Eingaben kümmert. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

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

Die Variable `controller` speichert die Informationen über das verbundene Gamepad, und es gibt eine boolesche Variable `active`, die wir verwenden können, um zu wissen, ob der Controller verbunden ist oder nicht. Die Funktionen `connect()` und `disconnect()` sind an die folgenden Events gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Sie werden ausgelöst, wenn das Gamepad verbunden bzw. getrennt wird. Die nächste Funktion ist `update()`, die die Informationen über die gedrückten Tasten und Achsen aktualisiert.

Die Variable `buttons` enthält das `layout` eines bestimmten Controllers (z.B. welche Tasten wo sind, da ein XBox 360-Layout möglicherweise anders ist als ein generisches), den `cache`, der die Informationen über die Tasten aus dem vorherigen Frame enthält, und den `status`, der die Informationen aus dem aktuellen Frame enthält.

Die Funktion `pressed()` holt die Eingabedaten und setzt die Informationen darüber in unser Objekt, und die Eigenschaft `axes` speichert das Array, das die Werte enthält, die angeben, wie stark eine Achse in den `x`- und `y`-Richtungen gedrückt wird, dargestellt durch einen Float im Bereich `(-1, 1)`.

Nachdem das Gamepad verbunden ist, werden die Informationen über den Controller im Objekt gespeichert:

```js
const GamepadAPI = {
  // …
  connect(event) {
    GamepadAPI.controller = event.gamepad;
    GamepadAPI.active = true;
  },
  // …
};
```

Die Funktion `disconnect` entfernt die Informationen aus dem Objekt:

```js
const GamepadAPI = {
  // …
  disconnect(event) {
    delete GamepadAPI.controller;
    GamepadAPI.active = false;
  },
};
```

Die Funktion `update()` wird in der Update-Schleife des Spiels in jedem Frame ausgeführt, sodass sie die neuesten Informationen über die gedrückten Tasten enthält:

```js
const GamepadAPI = {
  // …
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
      for (const ax of c.axes) {
        axes.push(ax.toFixed(2));
      }
    }
    GamepadAPI.axes.status = axes;
    GamepadAPI.buttons.status = pressed;
    return pressed;
  },
  // …
};
```

Die obige Funktion leert den Tasten-Cache und kopiert ihren Status vom vorherigen Frame in den Cache. Als Nächstes wird der Tastenstatus gelöscht und die neuen Informationen hinzugefügt. Dasselbe gilt für die Informationen der Achsen – das Durchlaufen der Achsen fügt die Werte zum Array hinzu. Empfangene Werte werden den richtigen Objekten zugewiesen und geben die gedrückten Informationen zu Debugging-Zwecken zurück.

Die Funktion `button.pressed()` erkennt die tatsächlichen Tastendrücke:

```js
const GamepadAPI = {
  // …
  buttons: {
    // …
    pressed(button, hold) {
      let newPress = false;
      if (GamepadAPI.buttons.status.includes(button)) {
        newPress = true;
      }
      if (!hold && GamepadAPI.buttons.cache.includes(button)) {
        newPress = false;
      }
      return newPress;
    },
    // …
  },
  // …
};
```

Sie überprüft, ob die Taste, nach der wir suchen, gedrückt ist, und wenn ja, wird die entsprechende boolesche Variable auf `true` gesetzt. Wenn wir überprüfen möchten, dass die Taste noch nicht gehalten wird (damit es ein neuer Tastendruck ist), dann erledigt das Überprüfen der zwischengespeicherten Zustände aus dem vorherigen Frame die Aufgabe – wenn die Taste bereits gedrückt war, ignorieren wir den neuen Tastendruck und setzen ihn auf `false`.

## Implementierung

Jetzt wissen wir, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält, also lernen wir, wie all dies tatsächlich im Spiel verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer einen benutzerdefinierten Text auf dem Hauptmenübildschirm des Spiels anzeigen.

Das `textGamepad`-Objekt hält den Text, der anzeigt, dass ein Gamepad angeschlossen wurde, und ist standardmäßig ausgeblendet. Hier ist der Code, den wir in der `create()`-Funktion vorbereitet haben und der einmal ausgeführt wird, wenn der neue Zustand erstellt wird:

```js
function create() {
  // …
  const message = "Gamepad connected! Press Y for controls";
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die in jedem Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich verbunden ist, damit der entsprechende Text angezeigt werden kann. Dann können wir die Informationen über gedrückte Tasten mit der Methode `Gamepad.update()` verfolgen und auf die gegebenen Informationen reagieren:

```js
function update() {
  // …
  if (GamepadAPI.active) {
    this.textGamepad.visible = true;

    GamepadAPI.update();
    if (GamepadAPI.buttons.pressed("Start")) {
      // start the game
    }
    if (GamepadAPI.buttons.pressed("X")) {
      // turn on/off the sounds
    }

    this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
  }
}
```

Beim Drücken der `Start`-Taste wird die relevante Funktion aufgerufen, um das Spiel zu beginnen, und derselbe Ansatz wird verwendet, um den Ton ein- und auszuschalten. Es gibt eine Option, die verkabelt ist, um `screenGamepadHelp` anzuzeigen, das ein Bild mit allen erklärten Tastensteuerungen enthält – wenn die `Y`-Taste gedrückt und gehalten wird, wird die Hilfe sichtbar; wenn sie losgelassen wird, verschwindet die Hilfe.

![Gamepad-Informationen mit allen verfügbaren Tasten beschrieben und erklärt.](controls-gamepadinfo.png)

## Anweisungen auf dem Bildschirm

Wenn das Spiel gestartet wird, erscheint ein einleitender Text, der Ihnen die verfügbaren Steuerungen zeigt – wir erkennen bereits, ob das Spiel auf einem Desktop oder Mobilgerät gestartet wird, und zeigen dann eine relevante Nachricht für das Gerät an, aber wir können noch weiter gehen, um die Anwesenheit eines Gamepads zu erlauben:

```js
function create() {
  // …
  if (this.game.device.desktop) {
    if (GamepadAPI.active) {
      moveText = "DPad or left Stick\nto move";
      shootText = "A to shoot,\nY for controls";
    } else {
      moveText = "Arrow keys\nor WASD to move";
      shootText = "X or Space\nto shoot";
    }
  } else {
    moveText = "Tap and hold to move";
    shootText = "Tap to shoot";
  }
}
```

Auf dem Desktop können wir überprüfen, ob der Controller aktiv ist, und die Gamepad-Steuerungen anzeigen – wenn nicht, werden die Tastatursteuerungen angezeigt.

## Gameplay-Steuerungen

Wir können dem Spieler noch mehr Flexibilität bieten, indem wir ihm Haupt- und alternative Gamepad-Bewegungssteuerungen geben:

```js
if (GamepadAPI.buttons.pressed("DPad-Up", "hold")) {
  // move player up
} else if (GamepadAPI.buttons.pressed("DPad-Down", "hold")) {
  // move player down
}

if (GamepadAPI.buttons.pressed("DPad-Left", "hold")) {
  // move player left
}

if (GamepadAPI.buttons.pressed("DPad-Right", "hold")) {
  // move player right
}

if (GamepadAPI.axes.status) {
  if (GamepadAPI.axes.status[0] > 0.5) {
    // move player up
  } else if (GamepadAPI.axes.status[0] < -0.5) {
    // move player down
  }

  if (GamepadAPI.axes.status[1] > 0.5) {
    // move player left
  } else if (GamepadAPI.axes.status[1] < -0.5) {
    // move player right
  }
}
```

Sie können nun das Schiff auf dem Bildschirm steuern, indem Sie die `DPad`-Tasten oder die linken Stick-Achsen verwenden.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegen `0.5` ausgewertet wird? Das liegt daran, dass Achsen Gleitkommawerte haben, während Tasten boolesch sind. Nachdem ein gewisser Schwellenwert erreicht ist, können wir davon ausgehen, dass der Eingang vom Benutzer absichtlich erfolgt und entsprechend reagieren.

Für die Schießsteuerungen haben wir die `A`-Taste verwendet – wenn sie gedrückt gehalten wird, wird ein neues Projektil gespawnt, und alles andere wird vom Spiel gehandhabt:

```js
if (GamepadAPI.buttons.pressed("A", "hold")) {
  this.spawnBullet();
}
```

Das Anzeigen des Bildschirms mit allen Steuerungen sieht genauso aus wie im Hauptmenü:

```js
this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
```

Wenn die `B`-Taste gedrückt wird, wird das Spiel pausiert:

```js
if (gamepadAPI.buttonPressed("B")) {
  this.managePause();
}
```

## Die Pausen- und Game-Over-Zustände

Wir haben bereits gelernt, wie man den gesamten Lebenszyklus des Spiels steuert: das Gameplay pausieren, es neu starten oder zurück zum Hauptmenü gehen. Es funktioniert sowohl auf mobilen Geräten als auch auf dem Desktop reibungslos, und das Hinzufügen von Gamepad-Steuerungen ist ebenso unkompliziert – in der `update()`-Funktion überprüfen wir, ob der aktuelle Status "paused" ist – wenn ja, werden die entsprechenden Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Ähnlich gilt, wenn der "game-over"-Status aktiv ist, dass wir dem Benutzer erlauben können, das Spiel neu zu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Game-Over-Bildschirm sichtbar ist, startet die Taste `Start` das Spiel neu, während die `Back`-Taste uns zurück zum Hauptmenü bringt. Dasselbe gilt, wenn das Spiel pausiert ist: Die `Start`-Taste hebt die Pause auf und die `Back`-Taste geht wie zuvor zurück.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel implementiert – versuchen Sie, einen beliebigen beliebten Controller wie den XBox 360 anzuschließen und sehen Sie selbst, wie viel Spaß es macht, den Asteroiden auszuweichen und die Aliens mit einem Gamepad zu beschießen.

Nun können wir weiterziehen und neue, noch unkonventionellere Wege erkunden, um das HTML-Spiel zu steuern, wie z.B. mit der Hand vor dem Laptop zu winken oder ins Mikrofon zu schreien.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
