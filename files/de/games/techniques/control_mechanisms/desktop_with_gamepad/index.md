---
title: Desktop-Gamepad-Steuerung
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Nun werden wir uns mit etwas zusätzlichem beschäftigen — der Unterstützung für Gamepad-Steuerungen über die Gamepad API. Sie bringt ein konsolenähnliches Erlebnis in Ihre Webspiele.

Die Gamepad API ermöglicht es Ihnen, ein Gamepad mit Ihrem Computer zu verbinden und die gedrückten Tasten direkt aus dem JavaScript-Code zu erkennen, dank der Implementierung dieser Funktion durch die Browser. Eine API stellt Ihnen alle Informationen zur Verfügung, die Sie benötigen, um die Logik Ihres Spiels anzuschließen und die Benutzeroberfläche und das Gameplay erfolgreich zu steuern.

## API-Status, Browser- und Hardwareunterstützung

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Status eines Arbeitsentwurfs, obwohl die Browser-Unterstützung bereits ziemlich gut ist — etwa 63% Abdeckung weltweit, laut [caniuse.com](https://caniuse.com/#search=gamepad). Die Liste der unterstützten Geräte ist auch ziemlich umfangreich — die meisten populären Gamepads (z.B. XBox 360 oder PS3) sollten für Web-Implementierungen geeignet sein.

## Reines JavaScript-Konzept

Lassen Sie uns überlegen, wie wir in unserem [kleinen Steuerungs-Demo](https://github.com/end3r/JavaScript-Game-Controls/) zuerst reine JavaScript-Gamepad-Steuerungen implementieren könnten, um zu sehen, wie es funktionieren würde. Zuerst benötigen wir einen Ereignis-Listener, um die Verbindung des neuen Geräts zu überwachen:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Es wird einmal ausgeführt, sodass wir einige Variablen erstellen können, die wir später benötigen, um die Controller-Informationen und die gedrückten Tasten zu speichern:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion erscheint auf dem Bildschirm, wenn das Gerät verbunden ist:

![Gamepad-Verbindungsnachricht unter dem Spiel Captain Rogers - kabelloser XBox 360-Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen — im obigen Fall verwenden wir den kabellosen XBox 360-Controller.

Um den Zustand der aktuell gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die genau das in jedem Frame tut:

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

Zuerst setzen wir das `buttonsPressed`-Array zurück, damit es bereit ist, die neuesten Informationen zu speichern, die wir aus dem aktuellen Frame schreiben. Wenn die Tasten verfügbar sind, durchlaufen wir sie; ist die `pressed`-Eigenschaft auf `true` gesetzt, fügen wir sie dem `buttonsPressed`-Array für eine spätere Verarbeitung hinzu. Anschließend betrachten wir die `gamepadButtonPressedHandler()`-Funktion:

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

Die Funktion nimmt eine Taste als Parameter; in der Schleife überprüft sie, ob die gegebene Tastenummer unter den aktuell verfügbaren gedrückten Tasten im `buttonsPressed`-Array ist. Ist das der Fall, gibt die Funktion `true` zurück; andernfalls `false`.

Als Nächstes machen wir in der `draw()`-Funktion zwei Dinge — wir führen die `gamepadUpdateHandler()`-Funktion aus, um den aktuellen Zustand der gedrückten Tasten in jedem Frame zu ermitteln, und verwenden die `gamepadButtonPressedHandler()`-Funktion, um die Tasten zu überprüfen, die uns interessieren, um festzustellen, ob sie gedrückt sind, und etwas zu tun, wenn sie es sind:

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
> Bitte denken Sie daran, dass verschiedene Geräte unterschiedliche Tastenbelegungen haben können, d.h. die D-Pad-Rechtstaste hat beim kabellosen XBox 360 eine Indexnummer von 3, kann aber bei einem anderen Gerät eine andere haben.

Sie könnten auch eine Hilfsfunktion erstellen, die den aufgelisteten Tasten richtige Namen zuweist, sodass Sie anstelle von `gamepadButtonPressedHandler(3)` eine aussagekräftigere Überprüfung durchführen könnten: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) in Aktion sehen — versuchen Sie Ihr Gamepad anzuschließen und die Tasten zu drücken.

## Phaser Ansatz

Lassen Sie uns zur endgültigen Implementierung der Gamepad API im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) übergehen, das wir mit Phaser erstellt haben. Dies ist jedoch ebenfalls reiner JavaScript-Code, sodass er in jedem anderen Projekt verwendet werden kann, unabhängig davon, welches Framework verwendet wurde.

Zuerst erstellen wir eine kleine Bibliothek, die sich um die Eingabe für uns kümmert. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

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

Die `controller`-Variable speichert die Informationen über das verbundene Gamepad, und es gibt eine boolesche `active`-Variable, mit der wir wissen können, ob der Controller verbunden ist oder nicht. Die `connect()`- und `disconnect()`-Funktionen sind an die folgenden Ereignisse gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Sie werden ausgelöst, wenn das Gamepad bzw. verbunden und getrennt wird. Die nächste Funktion ist `update()`, die die Informationen über die gedrückten Tasten und die Achsen aktualisiert.

Die `buttons`-Variable enthält das `layout` eines bestimmten Controllers (zum Beispiel, welche Tasten wo sind, da ein XBox 360-Layout anders sein kann als ein generisches), der `cache` speichert die Informationen über die Tasten aus dem vorherigen Frame und der `status` speichert die Informationen aus dem aktuellen Frame.

Die `pressed()`-Funktion holt die Eingabedaten und setzt die Informationen darüber in unserem Objekt, und die `axes`-Eigenschaft speichert das Array, das die Werte enthält, die die Stärke signalisieren, mit der eine Achse in den `x`- und `y`-Richtungen gedrückt wird, dargestellt durch einen Float im Bereich `(-1, 1)`.

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

Die `update()`-Funktion wird in der Update-Schleife des Spiels in jedem Frame ausgeführt, sodass sie die neuesten Informationen über die gedrückten Tasten enthält:

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
      for (let a = 0; a < c.axes.length; a++) {
        axes.push(c.axes[a].toFixed(2));
      }
    }
    GamepadAPI.axes.status = axes;
    GamepadAPI.buttons.status = pressed;
    return pressed;
  },
  // …
};
```

Die Funktion oben leert den Tasten-Cache und kopiert deren Status aus dem vorherigen Frame in den Cache. Anschließend wird der Tastenstatus geleert und die neuen Informationen hinzugefügt. Dasselbe gilt für die Achsinformationen — das Durchlaufen der Achsen fügt die Werte dem Array hinzu. Empfangene Werte werden den richtigen Objekten zugewiesen und geben die gedrückten Informationen zu Debugging-Zwecken zurück.

Die `button.pressed()`-Funktion erkennt die tatsächlichen Tastendrücke:

```js
const GamepadAPI = {
  // …
  buttons: {
    // …
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
    // …
  },
  // …
};
```

Es wird durch die gedrückten Tasten durchlaufen und wenn die gesuchte Taste gedrückt ist, wird die entsprechende boolesche Variable auf `true` gesetzt. Wenn wir überprüfen möchten, ob die Taste noch nicht gehalten wird (also ein neuer Tastendruck), erledigt das Durchlaufen der zwischengespeicherten Zustände aus dem vorherigen Frame die Arbeit — wenn die Taste bereits gedrückt war, ignorieren wir den neuen Druck und setzen ihn auf `false`.

## Implementierung

Wir wissen nun, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält, also lernen wir, wie all dies tatsächlich im Spiel verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer einen benutzerdefinierten Text auf dem Hauptmenübildschirm des Spiels anzeigen.

Das `textGamepad`-Objekt hält den Text mit der Meldung, dass ein Gamepad verbunden wurde, und ist standardmäßig versteckt. Hier ist der Code, den wir in der `create()`-Funktion vorbereitet haben, die einmal ausgeführt wird, wenn der neue Zustand erstellt wird:

```js
function create() {
  // …
  const message = "Gamepad connected! Press Y for controls";
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die jeden Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich verbunden ist, sodass der entsprechende Text angezeigt werden kann. Dann können wir die Informationen über die gedrückten Tasten nachverfolgen, indem wir die `Gamepad.update()`-Methode verwenden und auf die gegebenen Informationen reagieren:

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

Beim Drücken der `Start`-Taste wird die entsprechende Funktion aufgerufen, um das Spiel zu starten, und der gleiche Ansatz wird verwendet, um den Ton ein- und auszuschalten. Es gibt eine Auswahlmöglichkeit, die `screenGamepadHelp` anzeigt, die ein Bild mit allen erklärten Steuerungstasten enthält — wenn die `Y`-Taste gedrückt und gehalten wird, wird die Hilfe sichtbar; wenn sie losgelassen wird, verschwindet die Hilfe.

![Gamepad-Informationen mit allen verfügbaren Tasten beschrieben und erklärt.](controls-gamepadinfo.png)

## Bildschirmanweisungen

Wenn das Spiel gestartet ist, wird ein einführender Text angezeigt, der die verfügbaren Steuerelemente zeigt — wir erkennen bereits, ob das Spiel auf einem Desktop oder Mobilgerät gestartet wird und zeigen dann eine relevante Nachricht für das Gerät an, aber wir können noch weiter gehen, um die Anwesenheit eines Gamepads zu berücksichtigen:

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

Jetzt können sie das Schiff auf dem Bildschirm mit den `DPad`-Tasten oder den linken Stickachsen bewegen.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegen `0,5` evaluiert wird? Das liegt daran, dass Achsen Gleitkommawerte haben, während Tasten boolesch sind. Nach Erreichen eines bestimmten Schwellenwerts können wir davon ausgehen, dass die Eingabe bewusst vom Benutzer getätigt wurde und entsprechend handeln.

Für die Schießsteuerungen haben wir die `A`-Taste verwendet — wenn sie gedrückt gehalten wird, wird ein neues Geschoss erzeugt, und alles andere wird vom Spiel gehandhabt:

```js
if (GamepadAPI.buttons.pressed("A", "hold")) {
  this.spawnBullet();
}
```

Die Anzeige des Bildschirms mit allen Steuerelementen sieht genauso aus wie im Hauptmenü:

```js
this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
```

Wenn die `B`-Taste gedrückt wird, wird das Spiel pausiert:

```js
if (gamepadAPI.buttonPressed("B")) {
  this.managePause();
}
```

## Der pausierte und der Spiel-ende-Zustand

Wir haben bereits gelernt, wie der gesamte Lebenszyklus des Spiels gesteuert wird: das Spiel pausieren, neu starten oder zum Hauptmenü zurückkehren. Es funktioniert reibungslos auf Mobilgeräten und Desktop, und das Hinzufügen von Gamepad-Steuerungen ist ebenso unkompliziert — in der `update()`-Funktion überprüfen wir, ob der aktuelle Zustand den Status "pausiert" hat — falls ja, werden die relevanten Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Ähnlich, wenn der "Spiel-ende"-Zustand aktiv ist, können wir dem Benutzer erlauben, das Spiel neu zu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Spielende-Bildschirm sichtbar ist, startet die `Start`-Taste das Spiel neu, während die `Back`-Taste uns zurück zum Hauptmenü bringt. Dasselbe gilt, wenn das Spiel pausiert ist: Die `Start`-Taste setzt das Spiel fort und die `Back`-Taste geht zurück, genau wie zuvor.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel implementiert — versuchen Sie, einen beliebigen populären Controller wie den XBox 360 zu verbinden und erleben Sie selbst, wie viel Spaß es macht, mit einem Gamepad Asteroiden auszuweichen und Aliens zu schießen.

Nun können wir weitermachen und neue, noch unkonventionellere Wege erkunden, um das HTML-Spiel zu steuern, wie zum Beispiel mit der Hand vor dem Laptop zu winken oder in Ihr Mikrofon zu schreien.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
