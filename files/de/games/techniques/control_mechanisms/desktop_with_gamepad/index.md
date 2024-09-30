---
title: Desktop-Spielsteuerung mit Gamepad
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

Nun werden wir etwas hinzufügen — Support für Gamepad-Steuerungen über die Gamepad-API. Dies bringt ein konsolenähnliches Erlebnis zu Ihren Webspielen.

Die Gamepad-API ermöglicht es Ihnen, ein Gamepad an Ihren Computer anzuschließen und gedrückte Tasten direkt aus dem JavaScript-Code zu erkennen, dank der Implementierung durch die Browser. Eine API stellt alle Informationen bereit, die Sie benötigen, um die Logik Ihres Spiels zu verbinden und die Benutzeroberfläche und das Gameplay erfolgreich zu steuern.

## API-Status, Unterstützung durch Browser und Hardware

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) befindet sich noch im Working Draft Status, obwohl die Browser-Unterstützung bereits recht gut ist — laut [caniuse.com](https://caniuse.com/#search=gamepad) liegt die globale Abdeckung bei etwa 63%. Die Liste der unterstützten Geräte ist ebenfalls ziemlich umfangreich — die meisten beliebten Gamepads (z. B. XBox 360 oder PS3) sollten für Webimplementierungen geeignet sein.

## Reiner JavaScript-Ansatz

Lassen Sie uns überlegen, wie eine Implementierung von Gamepad-Steuerungen mit reinem JavaScript in unserem [kleinen Steuerungsdemo](https://github.com/end3r/JavaScript-Game-Controls/) aussehen würde. Zuerst benötigen wir einen Event-Listener, um auf die Verbindung des neuen Geräts zu hören:

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

Er wird einmal ausgeführt, sodass wir einige Variablen erstellen können, die wir später zum Speichern der Controller-Informationen und der gedrückten Tasten benötigen:

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

Die zweite Zeile in der `gamepadHandler`-Funktion erscheint auf dem Bildschirm, wenn das Gerät verbunden ist:

![Gamepad-verbunden-Nachricht unter dem Captain Rogers-Spiel - kabelloser XBox 360 Controller.](controls-gamepadtext.png)

Wir können auch die `id` des Geräts anzeigen — im obigen Beispiel verwenden wir den kabellosen XBox 360 Controller.

Um den Zustand der aktuell gedrückten Tasten des Gamepads zu aktualisieren, benötigen wir eine Funktion, die genau dies in jedem Frame tut:

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

Zuerst setzen wir das `buttonsPressed`-Array zurück, um es vorzubereiten und die neuesten Informationen aus dem aktuellen Frame hineinzuschreiben. Dann durchlaufen wir, falls die Tasten verfügbar sind, die Tasten. Wenn die Eigenschaft `pressed` auf `true` gesetzt ist, fügen wir sie dem `buttonsPressed`-Array zur späteren Verarbeitung hinzu. Als Nächstes betrachten wir die Funktion `gamepadButtonPressedHandler()`:

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

Die Funktion nimmt einen Button als Parameter; in der Schleife wird überprüft, ob die gegebene Tasten-Nummer zu den aktuell gedrückten Tasten im `buttonsPressed`-Array gehört. Wenn ja, dann gibt die Funktion `true` zurück; andernfalls `false`.

Als nächstes führen wir in der `draw()`-Funktion zwei Dinge aus — die `gamepadUpdateHandler()`-Funktion, um in jedem Frame den aktuellen Zustand der gedrückten Tasten zu erhalten, und die `gamepadButtonPressedHandler()`-Funktion, um die Tasten zu überprüfen, an denen wir interessiert sind, ob sie gedrückt sind, und etwas zu tun, wenn sie es sind:

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
> Bitte beachten Sie, dass unterschiedliche Geräte möglicherweise unterschiedliche Tastenbelegungen haben, d. h. die D-Pad-Rechts-Taste hat beim kabellosen XBox 360 die Indexnummer 3, könnte jedoch bei einem anderen Gerät eine andere haben.

Sie könnten auch eine Hilfsfunktion erstellen, die den aufgelisteten Tasten richtige Namen zuweist, sodass Sie z. B. statt zu überprüfen, ob `gamepadButtonPressedHandler(3)` gedrückt ist, eine aussagekräftigere Überprüfung durchführen könnten: `gamepadButtonPressedHandler('DPad-Right')`.

Sie können eine [Live-Demo](https://end3r.github.io/JavaScript-Game-Controls/) in Aktion sehen — versuchen Sie, Ihr Gamepad zu verbinden und die Tasten zu drücken.

## Phaser-Ansatz

Kommen wir zur finalen Implementierung der Gamepad-API im Spiel [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/), das wir mit Phaser erstellt haben. Dies ist jedoch auch reiner JavaScript-Code, sodass er in jedem anderen Projekt verwendet werden kann, unabhängig davon, welches Framework verwendet wurde.

Zuerst erstellen wir eine kleine Bibliothek, die die Eingaben für uns handhabt. Hier ist das `GamepadAPI`-Objekt, das nützliche Variablen und Funktionen enthält:

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

Die Variable `controller` speichert die Informationen über das verbundene Gamepad, und es gibt eine boolesche Variable `active`, die wir nutzen können, um zu wissen, ob der Controller verbunden ist oder nicht. Die Funktionen `connect()` und `disconnect()` sind an die folgenden Ereignisse gebunden:

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

Sie werden ausgelöst, wenn das Gamepad verbunden bzw. getrennt wird. Die nächste Funktion ist `update()`, die Informationen über die gedrückten Tasten und Achsen aktualisiert.

Die Variable `buttons` enthält das `layout` eines gegebenen Controllers (zum Beispiel, wo sich welche Tasten befinden, da der XBox 360-Layout sich von einem generischen unterscheiden kann), den `cache`, der die Informationen über die Tasten aus dem vorherigen Frame enthält, und den `status`, der die Informationen aus dem aktuellen Frame enthält.

Die Funktion `pressed()` holt die Eingabedaten und setzt die Informationen darüber in unserem Objekt, und die Eigenschaft `axes` speichert das Array, das die Werte enthält, die signalisieren, wie stark eine Achse in den `x`- und `y`-Richtungen gedrückt wird, dargestellt durch einen Float im Bereich `(-1, 1)`.

Nach der Verbindung des Gamepads werden die Informationen über den Controller im Objekt gespeichert:

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

Die `update()`-Funktion wird in der Update-Schleife des Spiels in jedem Frame ausgeführt, sodass sie die neuesten Informationen über die gedrückten Tasten enthält:

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

Die obige Funktion leert den Tasten-Cache und kopiert ihren Status aus dem vorherigen Frame in den Cache. Als nächstes wird der Tastenstatus gelöscht und die neuen Informationen hinzugefügt. Dasselbe gilt für die Informationen der Achsen — das Durchlaufen der Achsen fügt die Werte dem Array hinzu. Empfangene Werte werden den entsprechenden Objekten zugewiesen und geben die gedrückten Informationen für Debugging-Zwecke zurück.

Die Funktion `button.pressed()` erkennt die tatsächlichen Tastendrücke:

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

Sie durchläuft die gedrückten Tasten, und wenn die von uns gesuchte Taste gedrückt wird, wird die entsprechende boolesche Variable auf `true` gesetzt. Wenn wir überprüfen möchten, dass die Taste nicht bereits gehalten wird (also ein neuer Druck ist), dann übernimmt das Durchlaufen der zwischengespeicherten Zustände aus dem vorherigen Frame die Aufgabe — wenn die Taste bereits gedrückt war, ignorieren wir den neuen Druck und setzen ihn auf `false`.

## Implementierung

Nun wissen wir, wie das `GamepadAPI`-Objekt aussieht und welche Variablen und Funktionen es enthält, lassen Sie uns also lernen, wie all dies tatsächlich im Spiel verwendet wird. Um anzuzeigen, dass der Gamepad-Controller aktiv ist, können wir dem Benutzer einen benutzerdefinierten Text auf dem Hauptmenübildschirm des Spiels anzeigen.

Das `textGamepad`-Objekt hält den Text, der sagt, dass ein Gamepad verbunden wurde, und ist standardmäßig verborgen. Hier ist der Code, den wir in der `create()`-Funktion vorbereitet haben, die einmal ausgeführt wird, wenn der neue Zustand erstellt wird:

```js
create() {
  // …
  const message = 'Gamepad connected! Press Y for controls';
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

In der `update()`-Funktion, die in jedem Frame ausgeführt wird, können wir warten, bis der Controller tatsächlich verbunden ist, sodass der entsprechende Text angezeigt werden kann. Dann können wir die Informationen über gedrückte Tasten verfolgen, indem wir die `Gamepad.update()`-Methode verwenden, und auf die gegebenen Informationen reagieren:

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

Beim Druck der `Start`-Taste wird die relevante Funktion aufgerufen, um das Spiel zu beginnen, und derselbe Ansatz wird verwendet, um den Ton ein- und auszuschalten. Es gibt eine Option, die mit `screenGamepadHelp` verbunden ist, die ein Bild mit allen erklärten Tastenkontrollen hält — wenn die `Y`-Taste gedrückt und gehalten wird, wird die Hilfe sichtbar; wenn sie freigegeben wird, verschwindet die Hilfe.

![Gamepad-Infos mit allen verfügbaren Tasten beschrieben und erklärt.](controls-gamepadinfo.png)

## Anweisungen auf dem Bildschirm

Wenn das Spiel gestartet wird, wird ein Einführungstext angezeigt, der Ihnen die verfügbaren Steuerelemente zeigt — wir erkennen bereits, ob das Spiel auf einem Desktop oder Mobilgerät gestartet wurde und zeigen dann eine relevante Nachricht für das Gerät an, aber wir können noch weiter gehen und die Anwesenheit eines Gamepads ermöglichen:

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

Auf dem Desktop können wir überprüfen, ob der Controller aktiv ist und die Gamepad-Steuerelemente anzeigen — wenn nicht, werden die Tastatursteuerungen angezeigt.

## Gameplay-Steuerungen

Wir können dem Spieler noch mehr Flexibilität bieten, indem wir ihm die Haupt- und alternativen Gamepad-Bewegungssteuerungen geben:

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

Sie können das Schiff jetzt auf dem Bildschirm mit den `DPad`-Tasten oder den Achsen des linken Sticks bewegen.

Haben Sie bemerkt, dass der aktuelle Wert der Achsen gegenüber `0.5` bewertet wird? Das liegt daran, dass die Achsen Gleitkommawerte haben, während die Tasten boolesche Werte sind. Wenn ein bestimmter Schwellenwert erreicht wird, können wir annehmen, dass die Eingabe absichtlich vom Benutzer getätigt wurde und entsprechend handeln.

Für die Schusssteuerungen haben wir die `A`-Taste verwendet — wenn sie gedrückt gehalten wird, wird ein neues Projektil erzeugt, und alles andere wird vom Spiel gehandhabt:

```js
if (GamepadAPI.buttons.pressed("A", "hold")) {
  this.spawnBullet();
}
```

Das Anzeigen des Bildschirms mit allen Steuerelementen sieht im Hauptmenü genau gleich aus:

```js
this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
```

Wenn die `B`-Taste gedrückt wird, wird das Spiel pausiert:

```js
if (gamepadAPI.buttonPressed("B")) {
  this.managePause();
}
```

## Der pausierte und der Spielende-Zustand

Wir haben bereits gelernt, wie wir den gesamten Lebenszyklus des Spiels steuern können: das Gameplay pausieren, neu starten oder zum Hauptmenü zurückkehren. Es funktioniert reibungslos auf Mobilgeräten und Desktops, und das Hinzufügen von Gamepad-Steuerungen ist genauso einfach — in der `update()`-Funktion überprüfen wir, ob der aktuelle Status `paused` ist — wenn dies der Fall ist, sind die relevanten Aktionen aktiviert:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Ebenso können wir, wenn der `gameover`-Status aktiv ist, dem Benutzer erlauben, das Spiel neu zu starten, anstatt es fortzusetzen:

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

Wenn der Spielende-Bildschirm sichtbar ist, startet die `Start`-Taste das Spiel neu, während die `Back`-Taste uns zurück zum Hauptmenü bringt. Dasselbe gilt, wenn das Spiel pausiert ist: die `Start`-Taste setzt das Spiel fort und die `Back`-Taste geht zurück, wie zuvor.

## Zusammenfassung

Das war's! Wir haben erfolgreich Gamepad-Steuerungen in unser Spiel implementiert — versuchen Sie, einen beliebigen beliebten Controller wie den XBox 360 zu verbinden und sehen Sie selbst, wie viel Spaß es macht, den Asteroiden auszuweichen und die Aliens mit einem Gamepad zu schießen.

Jetzt können wir fortfahren und neue, sogar noch unkonventionellere Wege erkunden, das HTML-Spiel zu steuern, wie z.B. indem Sie Ihre Hand vor dem Laptop bewegen oder in Ihr Mikrofon schreien.

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
