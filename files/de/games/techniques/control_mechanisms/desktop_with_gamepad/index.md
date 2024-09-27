---
title: Desktop-Gamepad-Steuerungen
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Jetzt betrachten wir das Hinzufügen von etwas Besonderem — Unterstützung für Gamepad-Steuerungen über die Gamepad API. Sie bringt ein konsolenähnliches Erlebnis in Ihre Web-Spiele.

Die Gamepad API ermöglicht es Ihnen, ein Gamepad an Ihren Computer anzuschließen und gedrückte Tasten direkt aus dem JavaScript-Code zu erkennen, dank der Browser, die diese Funktion implementieren. Eine API stellt alle Informationen zur Verfügung, die Sie benötigen, um die Logik Ihres Spiels zu verknüpfen und erfolgreich die Benutzeroberfläche und das Gameplay zu steuern.

## API-Status, Browser- und Hardwareunterstützung

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Working Draft-Status, obwohl die Browser-Unterstützung bereits recht gut ist — laut [caniuse.com](https://caniuse.com/#search=gamepad) etwa 63 % globale Abdeckung. Die Liste der unterstützten Geräte ist ebenfalls ziemlich umfangreich — die meisten beliebten Gamepads (z.B. XBox 360 oder PS3) sollten für Web-Implementierungen geeignet sein.

## Pure JavaScript-Ansatz

Lassen Sie uns zunächst überlegen, wie wir reine JavaScript-Gamepad-Steuerungen in unserem [kleinen Steuerungs-Demo](https://github.com/end3r/JavaScript-Game-Controls/) umsetzen würden, um zu sehen, wie es funktionieren könnte. Zuerst benötigen wir einen Ereignis-Listener, um die Verbindung neuer Geräte zu erkennen:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Dies wird einmal ausgeführt, sodass wir einige Variablen erstellen können, die wir später zum Speichern der Controller-Informationen und der gedrückten Tasten benötigen werden:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion wird angezeigt, wenn das Gerät verbunden wird:

![Gamepad verbunden-Nachricht unter dem Captain Rogers-Spiel - kabelloser XBox 360-Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen — im obigen Fall verwenden wir den kabellosen XBox 360-Controller.

Um den Zustand der aktuell gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die dies genau bei jedem Frame erledigt:

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

Wir setzen zuerst das `buttonsPressed`-Array zurück, um es bereit zu machen, die neuesten Informationen zu speichern, die wir vom aktuellen Frame schreiben werden. Wenn die Tasten verfügbar sind, durchlaufen wir sie; wenn die `pressed`-Eigenschaft auf `true` gesetzt ist, fügen wir sie dem `buttonsPressed`-Array zur späteren Verarbeitung hinzu. Als nächstes betrachten wir die `gamepadButtonPressedHandler()`-Funktion:

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

Die Funktion nimmt eine Taste als Parameter; in der Schleife prüft sie, ob die angegebene Tasten-Nummer zu den aktuell im `buttonsPressed`-Array verfügbaren gedrückten Tasten gehört. Falls ja, gibt die Funktion `true` zurück, andernfalls `false`.

Als Nächstes tun wir in der `draw()`-Funktion zwei Dinge — die `gamepadUpdateHandler()`-Funktion wird aufgerufen, um den aktuellen Zustand der gedrückten Tasten bei jedem Frame zu erhalten, und die `gamepadButtonPressedHandler()`-Funktion wird verwendet, um die Tasten, die uns interessieren, darauf zu überprüfen, ob sie gedrückt sind, und etwas zu tun, falls sie es sind:

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
> Bitte denken Sie daran, dass unterschiedliche Geräte unterschiedliche Tastenzuordnungen haben können, d.h. die D-Pad-Rechtstaste hat möglicherweise einen Index von 3 auf dem kabellosen XBox 360, könnte aber auf einem anderen Gerät eine andere Position haben.

Sie könnten auch eine Hilfsfunktion erstellen, die die aufgelisteten Tasten mit den richtigen Namen versieht, sodass Sie z.B. statt `gamepadButtonPressedHandler(3)` zu prüfen, eine anschaulichere Überprüfung durchführen könnten: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) in Aktion sehen — versuchen Sie, Ihr Gamepad anzuschließen und die Tasten zu drücken.

## Phaser-Ansatz

Gehen wir zur endgültigen Gamepad API-Implementierung im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/), das wir mit Phaser erstellt haben. Dies ist jedoch auch reiner JavaScript-Code und kann in jedem anderen Projekt verwendet werden, unabhängig davon, welches Framework verwendet wurde.

Zuerst erstellen wir eine kleine Bibliothek, die sich um die Eingabesteuerung kümmert. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

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

Die `controller`-Variable speichert die Informationen über das angeschlossene Gamepad und es gibt eine `active`-Boolesche Variable, die wir verwenden können, um zu wissen, ob der Controller angeschlossen ist oder nicht. Die `connect()`- und `disconnect()`-Funktionen sind an die folgenden Ereignisse gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Sie werden ausgelöst, wenn das Gamepad angeschlossen bzw. getrennt wird. Die nächste Funktion ist `update()`, die die Informationen über die gedrückten Tasten und Achsen aktualisiert.

Die `buttons`-Variable enthält das `layout` eines bestimmten Controllers (zum Beispiel, welche Tasten wo sind, weil ein XBox 360-Layout sich von einem generischen unterscheiden kann), der `cache`, der die Informationen über die Tasten aus dem vorherigen Frame enthält und der `status`, der die Informationen aus dem aktuellen Frame enthält.

Die `pressed()`-Funktion erhält die Eingabedaten und legt die Informationen darüber in unserem Objekt fest, und die `axes`-Eigenschaft speichert das Array mit den Werten, die angeben, um wie viel eine Achse in den `x`- und `y`-Richtungen gedrückt wird, dargestellt durch eine Fließkommazahl im Bereich von `(-1, 1)`.

Nachdem das Gamepad angeschlossen ist, werden die Informationen über den Controller im Objekt gespeichert:

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

Die `update()`-Funktion wird in der Aktualisierungschleife des Spiels bei jedem Frame ausgeführt und enthält somit die neuesten Informationen über die gedrückten Tasten:

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

Die obige Funktion leert den Button-Cache und kopiert ihren Status vom vorherigen Frame in den Cache. Der Button-Status wird gelöscht und die neuen Informationen hinzugefügt. Das Gleiche gilt für die Achseninformationen — Durchlaufen der Achsen fügt die Werte zum Array hinzu. Die erhaltenen Werte werden den entsprechenden Objekten zugewiesen und geben die gedrückten Informationen zu Debugging-Zwecken zurück.

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

Sie durchläuft die gedrückten Tasten und wenn die gesuchte Taste gedrückt ist, wird die entsprechende boolesche Variable auf `true` gesetzt. Wenn wir prüfen möchten, ob die Taste noch nicht gehalten wird (also ein neuer Druck ist), dann erledigt das Durchlaufen der zwischengespeicherten Zustände des vorherigen Frames die Aufgabe — wenn die Taste bereits gedrückt war, ignorieren wir den neuen Druck und setzen ihn auf `false`.

## Implementierung

Wir wissen nun, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält, also lernen wir, wie all dies tatsächlich im Spiel verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer einen benutzerdefinierten Text auf dem Hauptmenübildschirm des Spiels anzeigen.

Das `textGamepad`-Objekt enthält den Text, der besagt, dass ein Gamepad angeschlossen wurde, und ist standardmäßig verborgen. Hier ist der von uns vorbereitete Code in der `create()`-Funktion, die einmal ausgeführt wird, wenn der neue Zustand erstellt wird:

```js
create() {
  // …
  const message = 'Gamepad connected! Press Y for controls';
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die jede Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich angeschlossen ist, sodass der entsprechende Text angezeigt werden kann. Dann können wir die Informationen über gedrückte Tasten mithilfe der `Gamepad.update()`-Methode verfolgen und entsprechend der gegebenen Informationen reagieren:

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

Beim Drücken der `Start`-Taste wird die relevante Funktion aufgerufen, um das Spiel zu starten, und der gleiche Ansatz wird verwendet, um den Ton ein- und auszuschalten. Es gibt eine Option, `screenGamepadHelp` zu zeigen, das ein Bild mit allen erklärten Tastensteuerungen enthält — wenn die `Y`-Taste gedrückt und gehalten wird, wird die Hilfe sichtbar; wenn sie losgelassen wird, verschwindet die Hilfe.

![Gamepad-Info mit allen verfügbaren und erklärten Tasten.](controls-gamepadinfo.png)

## Anweisungen auf dem Bildschirm

Wenn das Spiel gestartet wird, wird ein Einführungstext angezeigt, der die verfügbaren Steuerungen zeigt — wir erkennen bereits, ob das Spiel auf Desktop oder Mobilgerät gestartet wird, und zeigen dann eine relevante Nachricht für das jeweilige Gerät an, aber wir können noch weiter gehen, um die Präsenz eines Gamepads zu ermöglichen:

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

Auf dem Desktop können wir prüfen, ob der Controller aktiv ist und die Gamepad-Steuerungen anzeigen — wenn nicht, werden die Tastatursteuerungen angezeigt.

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

Sie können nun das Schiff auf dem Bildschirm bewegen, indem sie die `DPad`-Tasten oder die linken Joystick-Achsen verwenden.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegen `0.5` bewertet wird? Das liegt daran, dass Achsen Fließkommawerte haben, während Tasten Boolesche sind. Nachdem ein gewisser Schwellenwert erreicht ist, können wir annehmen, dass die Eingabe bewusst vom Benutzer vorgenommen wurde und entsprechend handeln.

Für die Schießsteuerungen haben wir die `A`-Taste verwendet — wenn sie gehalten wird, wird ein neues Projektil erzeugt und alles andere wird vom Spiel gehandhabt:

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

## Die Pausen- und Spielbeenden-Zustände

Wir haben bereits gelernt, wie wir den gesamten Lebenszyklus des Spiels steuern können: das Gameplay pausieren, neu starten oder zum Hauptmenü zurückkehren. Es funktioniert reibungslos auf Mobil- und Desktop und das Hinzufügen von Gamepad-Steuerungen ist ebenso unkompliziert — in der `update()`-Funktion prüfen wir, ob der aktuelle Status `paused` ist — wenn ja, sind die entsprechenden Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Ähnlich, wenn der `gameover`-Status aktiv ist, können wir dem Benutzer erlauben, das Spiel neu zu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Game-Over-Bildschirm sichtbar ist, startet die `Start`-Taste das Spiel neu, während die `Back`-Taste uns zum Hauptmenü zurückführt. Das Gleiche gilt, wenn das Spiel pausiert ist: die `Start`-Taste hebt die Pause auf und die `Back`-Taste geht zurück, genau wie zuvor.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel eingebaut — versuchen Sie, einen beliebigen beliebten Controller wie den XBox 360 anzuschließen und sehen Sie selbst, wie viel Spaß es macht, mit einem Gamepad den Asteroiden auszuweichen und die Außerirdischen zu schießen.

Jetzt können wir weitergehen und neue, noch unkonventionellere Wege erkunden, um das HTML-Spiel zu steuern, wie z.B. durch Winken mit der Hand vor dem Laptop oder Schreien ins Mikrofon.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
