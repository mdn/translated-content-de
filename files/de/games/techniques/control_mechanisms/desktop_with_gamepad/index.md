---
title: Desktop-Gaming-Controller-Steuerungen
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Nun werden wir uns mit der Unterstützung von Gamepad-Steuerungen über die Gamepad-API befassen. Diese sorgt für ein konsolenähnliches Erlebnis in Ihren Web-Spielen.

Die Gamepad-API ermöglicht es Ihnen, ein Gamepad mit Ihrem Computer zu verbinden und die gedrückten Tasten direkt über JavaScript-Code zu erkennen, da die Browser diese Funktion implementieren. Eine API stellt alle Informationen bereit, die Sie benötigen, um die Logik Ihres Spiels zu integrieren und die Benutzeroberfläche sowie das Gameplay erfolgreich zu steuern.

## API-Status, Browser- und Hardware-Unterstützung

Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Working-Draft-Status, obwohl die Browser-Unterstützung bereits recht gut ist — laut [caniuse.com](https://caniuse.com/#search=gamepad) liegt die globale Abdeckung bei etwa 63 %. Die Liste der unterstützten Geräte ist ebenfalls ziemlich umfangreich — die meisten gängigen Gamepads (z.B. XBox 360 oder PS3) sollten für Web-Implementierungen geeignet sein.

## Reine JavaScript-Ansatz

Betrachten wir zuerst die Implementierung von reinen JavaScript-Gamepad-Steuerungen in unserem [kleinen Steuerungs-Demo](https://github.com/end3r/JavaScript-Game-Controls/), um zu sehen, wie es funktionieren würde. Zuerst benötigen wir einen Eventlistener, der auf die Verbindung des neuen Geräts wartet:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Er wird einmal ausgeführt, sodass wir einige Variablen erstellen können, die wir später benötigen, um die Controller-Infos und die gedrückten Tasten zu speichern:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion erscheint auf dem Bildschirm, wenn das Gerät verbunden ist:

![Hinweis "Gamepad verbunden" unter dem Captain Rogers Spiel - kabelloser XBox 360-Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen — im obigen Fall verwenden wir den kabellosen XBox 360-Controller.

Um den Status der aktuell gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die genau das in jedem Frame macht:

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

Zuerst setzen wir das `buttonsPressed`-Array zurück, um es bereit zu machen, die neuesten Informationen zu speichern, die wir aus dem aktuellen Frame schreiben werden. Wenn die Tasten verfügbar sind, durchlaufen wir sie; wenn die `pressed`-Eigenschaft auf `true` gesetzt ist, fügen wir sie dem `buttonsPressed`-Array zur späteren Verarbeitung hinzu. Anschließend betrachten wir die Funktion `gamepadButtonPressedHandler()`:

```js
function gamepadButtonPressedHandler(button) {
  return buttonsPressed.includes(button);
}
```

Die Funktion nimmt einen Button-Index als Parameter; sie überprüft, ob `buttonsPressed` den gesuchten Button enthält, und gibt `true` zurück, wenn dies der Fall ist. Dies prüft, ob eine Taste gedrückt ist oder nicht.

Als Nächstes führen wir in der `draw()`-Funktion zwei Dinge aus — die `gamepadUpdateHandler()`-Funktion, um den aktuellen Zustand der gedrückten Tasten in jedem Frame zu erhalten, und verwenden die `gamepadButtonPressedHandler()`-Funktion, um die Tasten zu überprüfen, die uns interessieren, um zu sehen, ob sie gedrückt sind und etwas zu unternehmen, wenn ja:

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
> Bitte beachten Sie, dass verschiedene Geräte unterschiedliche Tastenbelegungen haben können, d.h. der D-Pad-Rechts-Button hat beim kabellosen XBox 360-Controller einen Index von 3, kann aber bei einem anderen Gerät anders sein.

Sie könnten auch eine Hilfsfunktion erstellen, die den gelisteten Tasten entsprechende Namen zuweist, sodass Sie zum Beispiel anstelle der Prüfung, ob `gamepadButtonPressedHandler(3)` gedrückt ist, eine aussagekräftigere Prüfung durchführen könnten: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) in Aktion sehen — versuchen Sie, Ihr Gamepad zu verbinden und die Tasten zu drücken.

## Phaser-Ansatz

Kommen wir zur finalen Implementierung der Gamepad-API im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/), das wir mit Phaser erstellt haben. Dies ist jedoch auch reiner JavaScript-Code, der in jedem anderen Projekt unabhängig vom verwendeten Framework eingesetzt werden kann.

Erstens werden wir eine kleine Bibliothek erstellen, die die Eingaben für uns verwaltet. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

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

Die Variable `controller` speichert die Informationen über das verbundene Gamepad, und es gibt eine `active` boolesche Variable, die wir nutzen können, um zu wissen, ob der Controller verbunden ist oder nicht. Die Funktionen `connect()` und `disconnect()` sind an die folgenden Ereignisse gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Sie werden ausgelöst, wenn das Gamepad verbunden bzw. getrennt wird. Die nächste Funktion ist `update()`, die die Informationen über die gedrückten Tasten und Achsen aktualisiert.

Die `buttons`-Variable enthält das `layout` eines bestimmten Controllers (zum Beispiel, welche Tasten wo sind, da ein XBox 360-Layout möglicherweise anders als ein generisches ist), den `cache`, der die Informationen über die Tasten aus dem vorherigen Frame enthält, und den `status`, der die Informationen aus dem aktuellen Frame enthält.

Die Funktion `pressed()` erhält die Eingabedaten und setzt die Informationen in unserem Objekt, und die `axes`-Eigenschaft speichert das Array, das die Werte enthält, die angeben, wie stark eine Achse in den `x`- und `y`-Richtungen gedrückt wird, dargestellt durch eine Fließkommazahl im Bereich `(-1, 1)`.

Nachdem das Gamepad verbunden wurde, werden die Informationen über den Controller im Objekt gespeichert:

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

Die `disconnect`-Funktion entfernt die Informationen aus dem Objekt:

```js
const GamepadAPI = {
  // …
  disconnect(event) {
    delete GamepadAPI.controller;
    GamepadAPI.active = false;
  },
};
```

Die `update()`-Funktion wird in der Aktualisierungsschleife des Spiels in jedem Frame ausgeführt, sodass sie die neuesten Informationen zu den gedrückten Tasten enthält:

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

Die oben stehende Funktion leert den Cache der Tasten und kopiert ihren Status vom vorherigen Frame in den Cache. Anschließend wird der Tastenstatus gelöscht und die neuen Informationen hinzugefügt. Dasselbe gilt für die Achseninformationen — das Durchlaufen der Achsen fügt die Werte zum Array hinzu. Empfangene Werte werden den entsprechenden Objekten zugewiesen und liefern die gedrückten Infos für Debugging-Zwecke zurück.

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

Sie überprüft, ob der gesuchte Button gedrückt wird, und falls ja, wird die entsprechende boolesche Variable auf `true` gesetzt. Wenn wir überprüfen wollen, dass die Taste nicht bereits gedrückt gehalten wird (also dass es sich um ein neues Drücken handelt), dann leistet das Überprüfen der Zwischenspeicherzustände aus dem vorherigen Frame gute Dienste — wenn die Taste bereits gedrückt war, ignorieren wir das neue Drücken und setzen es auf `false`.

## Implementierung

Wir wissen nun, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält. Lassen Sie uns lernen, wie all dies tatsächlich im Spiel verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer einen eigenen Text auf dem Hauptmenübildschirm des Spiels zeigen.

Das `textGamepad`-Objekt enthält den Text, der anzeigt, dass ein Gamepad verbunden wurde, und ist standardmäßig ausgeblendet. Hier ist der Code, den wir in der `create()`-Funktion vorbereitet haben, die einmal ausgeführt wird, wenn der neue Zustand erstellt wird:

```js
function create() {
  // …
  const message = "Gamepad connected! Press Y for controls";
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die in jedem Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich verbunden ist, sodass der richtige Text angezeigt werden kann. Dann können wir die Informationen über die gedrückten Tasten verfolgen, indem wir die `Gamepad.update()`-Methode verwenden, und auf die gegebenen Informationen reagieren:

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

Beim Drücken der `Start`-Taste wird die entsprechende Funktion aufgerufen, um das Spiel zu beginnen, und die gleiche Vorgehensweise wird verwendet, um den Ton ein- und auszuschalten. Es gibt eine Möglichkeit, `screenGamepadHelp` anzuzeigen, die ein Bild mit allen erk説明 Her available keys keys described and explained". wenn die `Y`-Taste gedrückt und gehalten wird, wird die hilfe sichtbar; wenn sie losgelassen wird, verschwindet die hilfe.

![Gamepad-Info mit allen verfügbaren Tasten beschrieben und erläutert.](controls-gamepadinfo.png)

## Bildschirm-Anweisungen

Wenn das Spiel startet, wird ein einleitender Text angezeigt, der Ihnen die verfügbaren Steuerungen zeigt — wir erkennen bereits, ob das Spiel auf einem Desktop oder Mobilgerät gestartet wird und zeigen dann eine relevante Nachricht für das Gerät an, aber wir können noch weiter gehen, um das Vorhandensein eines Gamepads zu ermöglichen:

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

Wenn Sie sich auf einem Desktop befinden, können wir überprüfen, ob der Controller aktiv ist und die Gamepad-Steuerungen anzeigen — wenn nicht, werden die Tastatur-Steuerungen angezeigt.

## Gameplay-Steuerungen

Wir können dem Spieler noch mehr Flexibilität bieten, indem wir ihm die Haupt- und alternativen Gamepad-Bewegungssteuerungen anbieten:

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

Sie können das Schiff jetzt auf dem Bildschirm bewegen, indem Sie die `DPad`-Tasten oder die Achsen des linken Sticks verwenden.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegen `0.5` bewertet wird? Dies liegt daran, dass Achsen Fließkommawerte haben, während Tasten Booleans sind. Sobald ein bestimmter Schwellenwert erreicht ist, können wir davon ausgehen, dass der Benutzer die Eingabe bewusst vorgenommen hat und entsprechend handeln.

Für die Schießsteuerungen haben wir die `A`-Taste verwendet — wenn sie gedrückt gehalten wird, wird ein neues Projektil erzeugt, und alles andere wird vom Spiel gehandhabt:

```js
if (GamepadAPI.buttons.pressed("A", "hold")) {
  this.spawnBullet();
}
```

Das Anzeigen des Bildschirms mit allen Steuerungen sieht im Hauptmenü genauso aus:

```js
this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
```

Wenn die `B`-Taste gedrückt wird, wird das Spiel pausiert:

```js
if (gamepadAPI.buttonPressed("B")) {
  this.managePause();
}
```

## Der pausierte und Game-Over-Zustand

Wir haben bereits gelernt, wie man den gesamten Lebenszyklus des Spiels steuert: das Gameplay pausieren, es neu starten oder zum Hauptmenü zurückkehren. Es funktioniert sowohl auf Mobilgeräten als auch auf Desktops reibungslos, und das Hinzufügen von Gamepad-Steuerungen ist genauso unkompliziert — in der `update()`-Funktion prüfen wir den aktuellen Status des Spiels, wenn der Zustand "pausiert" ist — in diesem Fall werden die relevanten Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Ähnlich, wenn der "Game-Over"-Zustand aktiv ist, können wir dem Benutzer erlauben, das Spiel neu zu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Spiel-Über-Bildschirm sichtbar ist, startet der `Start`-Button das Spiel neu, während der `Back`-Button uns dabei hilft, zum Hauptmenü zurückzukehren. Gleiches gilt für den pausierten Zustand: Der `Start`-Button hebt die Pause des Spiels auf und der `Back`-Button geht zurück, genau wie zuvor.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel implementiert — versuchen Sie, einen beliebten Controller wie den XBox 360 anzuschließen und sehen Sie selbst, wie viel Spaß es macht, den Asteroiden auszuweichen und die Aliens mit einem Gamepad zu schießen.

Jetzt können wir weitergehen und neue, noch unkonventionellere Wege erkunden, um das HTML-Spiel zu steuern, wie z.B. das Winken vor dem Laptop oder das Schreien in Ihr Mikrofon.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
