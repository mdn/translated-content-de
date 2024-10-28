---
title: Desktop-Gamepad-Steuerungen
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Nun werden wir etwas Zusätzliches betrachten — die Unterstützung für Gamepad-Steuerungen über die Gamepad-API. Dies bringt ein konsolenähnliches Erlebnis zu Ihren Web-Spielen.

Die Gamepad-API gibt Ihnen die Möglichkeit, ein Gamepad mit Ihrem Computer zu verbinden und über JavaScript-Code die gedrückten Tasten direkt zu erkennen, dank der Implementierung dieser Funktion in Browsern. Eine API stellt alle Informationen bereit, die Sie benötigen, um die Logik Ihres Spiels zu verbinden und die Benutzeroberfläche sowie das Gameplay erfolgreich zu steuern.

## API-Status, Browser- und Hardwareunterstützung

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Status "Entwurf", obwohl die Browser-Unterstützung bereits ziemlich gut ist — etwa 63% globale Abdeckung laut [caniuse.com](https://caniuse.com/#search=gamepad). Die Liste der unterstützten Geräte ist ebenfalls ziemlich umfangreich — die meisten beliebten Gamepads (z.B. XBox 360 oder PS3) sollten für Web-Implementierungen geeignet sein.

## Reiner JavaScript-Ansatz

Überlegen wir zunächst, wie wir reine JavaScript-Gamepad-Steuerungen in unserem [kleinen Steuerungs-Demo](https://github.com/end3r/JavaScript-Game-Controls/) implementieren können, um zu sehen, wie es funktionieren würde. Zuerst benötigen wir einen Ereignislistener, um auf den Anschluss des neuen Geräts zu hören:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Dieser wird einmalig ausgeführt, sodass wir einige Variablen erstellen können, die wir später zum Speichern der Controller-Informationen und der gedrückten Tasten benötigen:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion wird auf dem Bildschirm angezeigt, wenn das Gerät angeschlossen ist:

![Gamepad-verbindungsnachricht unter dem Captain Rogers-Spiel - kabelloser XBox 360-Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen — im obigen Fall verwenden wir den kabellosen XBox 360-Controller.

Um den Status der derzeit gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die genau das bei jedem Frame tut:

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

Wir setzen zuerst das `buttonsPressed`-Array zurück, um es bereit zu machen, die neuesten Informationen zu speichern, die wir im aktuellen Frame schreiben werden. Dann, falls die Tasten verfügbar sind, durchlaufen wir sie; wenn die `pressed`-Eigenschaft auf `true` gesetzt ist, fügen wir sie dem `buttonsPressed`-Array für die spätere Verarbeitung hinzu. Als nächstes betrachten wir die `gamepadButtonPressedHandler()`-Funktion:

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

Die Funktion nimmt eine Taste als Parameter; in der Schleife wird überprüft, ob die gegebene Tastenummer zu den derzeit gedrückten Tasten im `buttonsPressed`-Array gehört. Wenn ja, gibt die Funktion `true` zurück; andernfalls `false`.

Als nächstes tun wir in der `draw()`-Funktion zwei Dinge — wir führen die `gamepadUpdateHandler()`-Funktion aus, um den aktuellen Status der gedrückten Tasten bei jedem Frame zu erhalten, und verwenden die `gamepadButtonPressedHandler()`-Funktion, um die Tasten zu überprüfen, die uns interessieren, ob sie gedrückt sind und etwas zu tun, falls ja:

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
> Bitte denken Sie daran, dass verschiedene Geräte unterschiedliche Tastenbelegungen haben können, z.B. hat die D-Pad-Recht-Taste beim kabellosen XBox 360-Controller einen Index von 3, kann aber auf einem anderen Gerät einen anderen Index haben.

Sie könnten auch eine Hilfsfunktion erstellen, die den aufgelisteten Tasten ordnungsgemäße Namen zuweist, sodass Sie anstelle von `gamepadButtonPressedHandler(3)` eine eindeutigere Prüfung durchführen könnten: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) in Aktion sehen — versuchen Sie, Ihr Gamepad anzuschließen und die Tasten zu drücken.

## Phaser-Ansatz

Begeben wir uns zur finalen Implementierung der Gamepad-API im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/), das wir mit Phaser erstellt haben. Dies ist jedoch auch reiner JavaScript-Code, sodass er in jedem anderen Projekt verwendet werden kann, unabhängig davon, welches Framework verwendet wurde.

Zuerst erstellen wir eine kleine Bibliothek, die sich um die Eingaben kümmert. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

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

Die `controller`-Variable speichert die Informationen über das angeschlossene Gamepad, und es gibt eine `active`-Boolesche-Variable, die wir verwenden können, um zu wissen, ob der Controller angeschlossen ist oder nicht. Die `connect()`- und `disconnect()`-Funktionen sind an die folgenden Ereignisse gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Sie werden ausgelöst, wenn das Gamepad angeschlossen bzw. getrennt wird. Die nächste Funktion ist `update()`, die die Informationen über die gedrückten Tasten und Achsen aktualisiert.

Die `buttons`-Variable enthält das `layout` eines bestimmten Controllers (zum Beispiel, welche Tasten wo sind, da ein XBox 360-Layout von einem generischen Controller abweichen kann), den `cache`, der die Informationen über die Tasten des vorherigen Frames enthält, und den `status`, der die Informationen des aktuellen Frames enthält.

Die `pressed()`-Funktion erhält die Eingabedaten und setzt die Informationen darüber in unserem Objekt, und die `axes`-Eigenschaft speichert das Array, das die Werte enthält, die den Druck in den `x`- und `y`-Richtungen signalisieren, dargestellt durch einen Float im `(-1, 1)`-Bereich.

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

Die `update()`-Funktion wird in der Update-Schleife des Spiels bei jedem Frame ausgeführt, sodass sie die aktuellsten Informationen über die gedrückten Tasten enthält:

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

Die oben genannte Funktion leert den Tasten-Cache und kopiert deren Status vom vorherigen Frame in den Cache. Anschließend wird der Tastenstatus geleert und die neuen Informationen hinzugefügt. Dasselbe gilt für die Achseninformationen — durch Schleifen durch die Achsen werden die Werte dem Array hinzugefügt. Erhältliche Werte werden den entsprechenden Objekten zugewiesen und die gedrückten Informationen werden zu Debugging-Zwecken zurückgegeben.

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

Sie durchläuft die gedrückten Tasten und wenn die Taste, die wir suchen, gedrückt ist, wird die entsprechende boolesche Variable auf `true` gesetzt. Wenn wir überprüfen möchten, dass die Taste noch nicht gehalten wird (also eine neue Drückung ist), erledigt das Durchlaufen der zwischengespeicherten Zustände des vorherigen Frames die Arbeit — wenn die Taste bereits gedrückt war, ignorieren wir das neue Drücken und setzen es auf `false`.

## Implementierung

Jetzt wissen wir, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält, also lernen wir, wie all dies tatsächlich im Spiel verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer benutzerdefinierten Text im Hauptmenü des Spiels anzeigen.

Das `textGamepad`-Objekt enthält den Text, dass ein Gamepad angeschlossen wurde, und ist standardmäßig ausgeblendet. Hier ist der Code, den wir in der `create()`-Funktion vorbereitet haben und der einmal ausgeführt wird, wenn der neue Zustand erstellt wird:

```js
create() {
  // …
  const message = 'Gamepad connected! Press Y for controls';
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die bei jedem Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich angeschlossen ist, sodass der richtige Text angezeigt werden kann. Dann können wir die Informationen über gedrückte Tasten mit der `Gamepad.update()`-Methode verfolgen und auf die angegebenen Informationen reagieren:

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

Wenn die `Start`-Taste gedrückt wird, wird die relevante Funktion aufgerufen, um das Spiel zu beginnen, und derselbe Ansatz wird verwendet, um den Ton ein- und auszuschalten. Es gibt eine Option, `screenGamepadHelp` anzuzeigen, die ein Bild mit allen erklärten Tastensteuerungen enthält — wenn die `Y`-Taste gedrückt und gehalten wird, wird die Hilfe sichtbar; wenn sie losgelassen wird, verschwindet die Hilfe.

![Gamepad-Informationen mit allen verfügbaren Schlüsseln beschrieben und erklärt.](controls-gamepadinfo.png)

## Anleitung auf dem Bildschirm

Wenn das Spiel gestartet wird, wird ein einleitender Text angezeigt, der Ihnen die verfügbaren Steuerungen zeigt — wir erkennen bereits, ob das Spiel auf einem Desktop oder Mobilgerät gestartet wird und zeigen eine entsprechende Nachricht für das Gerät an, aber wir können noch weiter gehen, um die Anwesenheit eines Gamepads zu ermöglichen:

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

Auf dem Desktop können wir überprüfen, ob der Controller aktiv ist und die Gamepad-Steuerungen anzeigen — andernfalls werden die Tastatursteuerungen angezeigt.

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

Er kann das Schiff nun mit den `DPad`-Tasten oder den Achsen des linken Sticks auf dem Bildschirm bewegen.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegen `0.5` ausgewertet wird? Das liegt daran, dass Achsen Gleitkommawerte haben, während Tasten Boolesche Werte sind. Sobald ein bestimmter Schwellenwert erreicht wird, können wir davon ausgehen, dass die Eingabe absichtlich vom Benutzer erfolgt ist und entsprechend handeln.

Für die Schießsteuerungen haben wir die `A`-Taste verwendet — wenn sie gedrückt gehalten wird, wird ein neues Projektil erzeugt, und alles andere wird vom Spiel verwaltet:

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

Wir haben bereits gelernt, wie wir den gesamten Lebenszyklus des Spiels kontrollieren können: das Gameplay pausieren, es neu starten oder zum Hauptmenü zurückkehren. Es funktioniert reibungslos auf Mobilgeräten und Desktop-Computern, und das Hinzufügen von Gamepad-Steuerungen ist genauso unkompliziert — in der `update()`-Funktion überprüfen wir, ob der aktuelle Status "pausiert" ist — falls ja, sind die relevanten Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

In ähnlicher Weise, wenn der "Game-Over"-Status aktiv ist, können wir dem Benutzer erlauben, das Spiel neu zu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Game-Over-Bildschirm sichtbar ist, startet die `Start`-Taste das Spiel neu, während die `Back`-Taste uns zurück zum Hauptmenü bringt. Dasselbe gilt, wenn das Spiel pausiert wird: Die `Start`-Taste setzt das Spiel fort, und die `Back`-Taste geht zurück, genau wie zuvor.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel implementiert — versuchen Sie, einen beliebigen beliebten Controller wie den XBox 360 anzuschließen und sehen Sie selbst, wie viel Spaß es macht, die Asteroiden zu vermeiden und die Aliens mit einem Gamepad abzuschießen.

Jetzt können wir weitergehen und neue, noch unkonventionellere Möglichkeiten erkunden, um das HTML-Spiel zu steuern, wie zum Beispiel das Winken der Hand vor dem Laptop oder das Schreien ins Mikrofon.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
