---
title: Desktop-Gamepad-Steuerung
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Nun schauen wir uns an, wie zusätzliche Unterstützung für Gamepad-Steuerungen über die Gamepad-API hinzugefügt werden kann. Dies bringt eine konsolenähnliche Erfahrung in Ihre Webspiele.

Die Gamepad-API ermöglicht es Ihnen, ein Gamepad an Ihren Computer anzuschließen und direkt aus dem JavaScript-Code dank der Implementierung solcher Funktionen durch die Browser gedrückte Tasten zu erkennen. Eine API stellt alle benötigten Informationen bereit, um die Logik Ihres Spiels anzupassen und die Benutzeroberfläche sowie das Gameplay erfolgreich zu steuern.

## API-Status, Browser- und Hardwareunterstützung

Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Working Draft-Status, obwohl die Browser-Unterstützung bereits recht gut ist — etwa 63 % weltweite Abdeckung laut [caniuse.com](https://caniuse.com/#search=gamepad). Die Liste der unterstützten Geräte ist ebenfalls recht umfangreich — die meisten bekannten Gamepads (z. B. Xbox 360 oder PS3) sollten für Webimplementierungen geeignet sein.

## Pure JavaScript-Ansatz

Lassen Sie uns überlegen, wie wir eine reine JavaScript-Gamepad-Steuerung in unserer [kleinen Steuerungsdemo](https://github.com/end3r/JavaScript-Game-Controls/) implementieren können, um zu sehen, wie es funktioniert. Zuerst benötigen wir einen Event Listener, um auf eine Verbindung des neuen Geräts zu warten:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Dieser wird einmal ausgeführt, sodass wir einige Variablen erstellen können, die wir später benötigen, um die Steuerungsinformationen und die gedrückten Tasten zu speichern:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion wird auf dem Bildschirm angezeigt, wenn das Gerät verbunden ist:

![Nachricht "Gamepad verbunden" unter dem Captain Rogers Spiel - drahtloser Xbox 360-Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen — im obigen Beispiel verwenden wir den drahtlosen Xbox 360-Controller.

Um den Zustand der aktuell gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die genau das in jedem Frame durchführt:

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

Zuerst wird das `buttonsPressed`-Array zurückgesetzt, um es bereit zu machen, die neuesten Informationen zu speichern, die wir aus dem aktuellen Frame schreiben. Dann, wenn die Tasten verfügbar sind, durchlaufen wir sie; wenn die `pressed`-Eigenschaft auf `true` gesetzt ist, fügen wir sie dem `buttonsPressed`-Array zur späteren Verarbeitung hinzu. Als nächstes betrachten wir die `gamepadButtonPressedHandler()`-Funktion:

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

Die Funktion nimmt eine Taste als Parameter; in der Schleife wird überprüft, ob die gegebene Tasten-Nummer unter den aktuell gedrückten Tasten im `buttonsPressed`-Array ist. Wenn ja, dann gibt die Funktion `true` zurück; andernfalls `false`.

Als Nächstes führen wir in der `draw()`-Funktion zwei Dinge aus — die `gamepadUpdateHandler()`-Funktion wird ausgeführt, um den aktuellen Zustand der gedrückten Tasten in jedem Frame zu erhalten, und die `gamepadButtonPressedHandler()`-Funktion wird verwendet, um die Tasten zu überprüfen, die uns interessieren, ob sie gedrückt sind, und etwas zu tun, wenn sie es sind:

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
> Bitte beachten Sie, dass verschiedene Geräte unterschiedliche Tastenzuordnungen haben können, d.h. die D-Pad-Rechtstaste hat bei einem drahtlosen Xbox 360-Controller einen Index von 3, kann jedoch bei einem anderen Gerät einen anderen haben.

Sie könnten auch eine Hilfsfunktion erstellen, die den aufgelisteten Tasten richtige Namen zuweist, sodass Sie beispielsweise statt zu überprüfen, ob `gamepadButtonPressedHandler(3)` gedrückt wird, eine beschreibendere Überprüfung durchführen könnten: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) sehen — versuchen Sie, Ihr Gamepad anzuschließen und die Tasten zu drücken.

## Phaser-Ansatz

Lassen Sie uns zur finalen Implementierung der Gamepad-API im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) übergehen, das wir mit Phaser erstellt haben. Dies ist jedoch auch reiner JavaScript-Code und kann in jedem anderen Projekt, unabhängig davon, welches Framework verwendet wurde, verwendet werden.

Zuerst erstellen wir eine kleine Bibliothek, die sich um das Eingabemanagement kümmert. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

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

Die `controller`-Variable speichert die Informationen über das verbundene Gamepad, und es gibt eine `active`-Boolesche Variable, mit der wir feststellen können, ob der Controller verbunden ist oder nicht. Die `connect()`- und `disconnect()`-Funktionen sind an die folgenden Ereignisse gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Sie werden ausgelöst, wenn das Gamepad jeweils verbunden oder getrennt wird. Die nächste Funktion ist `update()`, die die Informationen über die gedrückten Tasten und Achsen aktualisiert.

Die `buttons`-Variable enthält das `layout` eines bestimmten Controllers (zum Beispiel, welche Tasten wo sind, da ein Xbox 360-Layout von einem generischen abweichen kann), der `cache`, der die Informationen über die Tasten aus dem vorherigen Frame enthält, und der `status`, der die Informationen aus dem aktuellen Frame enthält.

Die `pressed()`-Funktion erhält die Eingabedaten und setzt die Informationen darüber in unserem Objekt, und die `axes`-Eigenschaft speichert das Array, das die Werte enthält, die angeben, wie stark eine Achse in den `x`- und `y`-Richtungen gedrückt wird, dargestellt durch einen Float im Bereich `(-1, 1)`.

Nach dem Verbinden des Gamepads werden die Informationen über den Controller im Objekt gespeichert:

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

Die `update()`-Funktion wird in der Aktualisierungsschleife des Spiels in jedem Frame ausgeführt, sodass sie die neuesten Informationen zu den gedrückten Tasten enthält:

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

Die obige Funktion leert den Tasten-Cache und kopiert deren Status vom vorherigen Frame in den Cache. Als Nächstes wird der Tastenstatus geleert und die neuen Informationen hinzugefügt. Das Gleiche gilt für die Informationen der Achsen — das Durchlaufen der Achsen fügt die Werte dem Array hinzu. Empfangene Werte werden den entsprechenden Objekten zugewiesen und gibt die gedrückten Infos zu Debugging-Zwecken zurück.

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

Sie durchläuft die gedrückten Tasten und wenn die gesuchte Taste gedrückt ist, wird die entsprechende Boolesche Variable auf `true` gesetzt. Wenn wir überprüfen möchten, ob die Taste nicht bereits gehalten wird (also ein neuer Druck erfolgt), erledigt das Durchlaufen der zwischengespeicherten Zustände aus dem vorherigen Frame die Aufgabe — wenn die Taste bereits gedrückt wurde, ignorieren wir den neuen Druck und setzen ihn auf `false`.

## Implementierung

Jetzt wissen wir, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält, lassen Sie uns also lernen, wie all das im Spiel tatsächlich verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer auf dem Hauptmenübildschirm des Spiels einen benutzerdefinierten Text anzeigen.

Das `textGamepad`-Objekt enthält den Text, der anzeigt, dass ein Gamepad verbunden ist, und ist standardmäßig ausgeblendet. Hier ist der Code, den wir in der `create()`-Funktion vorbereitet haben, die einmal ausgeführt wird, wenn der neue Zustand erstellt wird:

```js
create() {
  // …
  const message = 'Gamepad connected! Press Y for controls';
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die jeden Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich verbunden ist, damit der richtige Text angezeigt werden kann. Dann können wir die Informationen über die gedrückten Tasten mithilfe der Methode `Gamepad.update()` verfolgen und auf die gegebenen Informationen reagieren:

```js
update() {
  // …
  if (GamepadAPI.active) {
    this.textGamepad.visible = true;

    GamepadAPI.update();
    if (GamepadAPI.buttons.pressed('Start')) {
      // start the game
    }
    if (GamepadAPI.buttons.pressed('X')) {
      // turn on/off the sounds
    }

    this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed('Y', 'hold');
  }
}
```

Beim Drücken der `Start`-Taste wird die relevante Funktion zum Starten des Spiels aufgerufen, und derselbe Ansatz wird zum Ein- und Ausschalten des Audios verwendet. Es gibt eine Option, `screenGamepadHelp` anzuzeigen, die ein Bild mit allen Tastensteuerungen erklärt — wenn die `Y`-Taste gedrückt und gehalten wird, wird die Hilfe sichtbar; wenn sie losgelassen wird, verschwindet die Hilfe.

![Gamepad-Informationen mit allen verfügbaren Tasten beschrieben und erklärt.](controls-gamepadinfo.png)

## On-Screen-Anweisungen

Wenn das Spiel gestartet wird, wird ein einführender Text angezeigt, der Ihnen verfügbare Steuerungen zeigt — wir erkennen bereits, ob das Spiel auf dem Desktop oder mobil gestartet wird, und zeigen dann eine relevante Nachricht für das Gerät, aber wir können noch weiter gehen, um die Anwesenheit eines Gamepads zu berücksichtigen:

```js
create() {
  // …
  if (this.game.device.desktop) {
    if (GamepadAPI.active) {
      moveText = 'DPad or left Stick\nto move';
      shootText = 'A to shoot,\nY for controls';
    } else {
      moveText = 'Arrow keys\nor WASD to move';
      shootText = 'X or Space\nto shoot';
    }
  } else {
    moveText = 'Tap and hold to move';
    shootText = 'Tap to shoot';
  }
}
```

Wenn sich das Spiel auf dem Desktop befindet, können wir überprüfen, ob der Controller aktiv ist und die Gamepad-Steuerungen anzeigen — wenn nicht, werden die Tastatursteuerungen angezeigt.

## Gameplay-Steuerungen

Wir können dem Spieler noch mehr Flexibilität bieten, indem wir ihm hauptsächliche und alternative Gamepad-Bewegungssteuerungen geben:

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

Sie können nun das Schiff auf dem Bildschirm mit den `DPad`-Tasten oder den Achsen des linken Sticks bewegen.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegen `0.5` ausgewertet wird? Es liegt daran, dass Achsen Gleitkommawerte haben, während Tasten Booleans sind. Nachdem ein bestimmter Schwellenwert erreicht wurde, können wir annehmen, dass der Benutzer die Eingabe bewusst vorgenommen hat und entsprechend reagieren.

Für die Schuss-Steuerung haben wir die `A`-Taste verwendet — wenn sie gedrückt gehalten wird, wird eine neue Kugel erzeugt, und alles andere wird vom Spiel gehandhabt:

```js
if (GamepadAPI.buttons.pressed("A", "hold")) {
  this.spawnBullet();
}
```

Das Anzeigen des Bildschirms mit allen Steuerungen sieht genau so aus wie im Hauptmenü:

```js
this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
```

Wenn die `B`-Taste gedrückt wird, wird das Spiel pausiert:

```js
if (gamepadAPI.buttonPressed("B")) {
  this.managePause();
}
```

## Die gestoppten und Spielende-Zustände

Wir haben bereits gelernt, wie wir den gesamten Lebenszyklus des Spiels steuern: das Gameplay pausieren, es neu starten oder zum Hauptmenü zurückkehren. Es funktioniert reibungslos auf mobilen Geräten und Desktops, und das Hinzufügen von Gamepad-Steuerelementen ist ebenso unkompliziert — in der `update()`-Funktion überprüfen wir, ob der aktuelle Zustandsstatus "pausiert" ist — falls ja, werden die relevanten Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Ebenso, wenn der "Spielende"-Zustand aktiv ist, dann können wir dem Benutzer erlauben, das Spiel neu zu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Bildschirm mit dem Spielende sichtbar ist, startet die `Start`-Taste das Spiel neu, während die `Back`-Taste uns zum Hauptmenü zurückführt. Das Gleiche gilt, wenn das Spiel pausiert wird: die `Start`-Taste hebt die Pause auf und die `Back`-Taste geht zurück, genau wie zuvor.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel implementiert — versuchen Sie, einen beliebigen bekannten Controller wie den Xbox 360 anzuschließen und sehen Sie selbst, wie viel Spaß es macht, den Asteroiden auszuweichen und die Aliens mit einem Gamepad zu erschießen.

Nun können wir weitermachen und neue, noch unkonventionellere Wege erkunden, wie man das HTML-Spiel steuern kann, etwa indem man vor dem Laptop mit der Hand winkt oder in das Mikrofon schreit.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
