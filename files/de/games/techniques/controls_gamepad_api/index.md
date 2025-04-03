---
title: Implementierung von Steuerungen mit der Gamepad-API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{GamesSidebar}}

Dieser Artikel befasst sich mit der Implementierung eines effektiven, browserübergreifenden Steuerungssystems für Webspiele mithilfe der Gamepad-API, die Ihnen ermöglicht, Ihre Webspiele mit Konsolen-Gamecontrollern zu steuern. Es umfasst eine Fallstudie des Spiels Hungry Fridge, erstellt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Webspiele

Historisch gesehen war das Spielen von Spielen auf einer mit Ihrem Fernseher verbundenen Konsole immer ein völlig anderes Erlebnis als das Spielen auf dem PC, hauptsächlich wegen der einzigartigen Steuerungen. Schließlich ermöglichten zusätzliche Treiber und Plugins die Verwendung von Konsolen-Gamepads mit Desktop-Spielen – entweder nativen Spielen oder solchen, die im Browser laufen. Jetzt haben wir die [Gamepad-API](/de/docs/Web/API/Gamepad_API), die es uns ermöglicht, browserbasierte Spiele mit Gamepad-Controllern ohne Plugins zu spielen. Die Gamepad-API erreicht dies, indem sie eine Schnittstelle bereitstellt, die Tastenanschläge und Achsenänderungen offenlegt, die in JavaScript-Code verwendet werden können, um die Eingaben zu verarbeiten. Dies sind gute Zeiten für Browser-Spiele.

## Welche Gamepads sind am besten?

Die beliebtesten Gamepads sind derzeit die von der Xbox 360, Xbox One, PS3 und PS4 – sie wurden intensiv getestet und funktionieren gut mit der Gamepad-API-Implementierung in Browsern auf Windows und macOS.

Es gibt auch eine Reihe anderer Geräte mit unterschiedlichen Tastenlayouts, die mehr oder weniger gut über verschiedene Browserimplementierungen funktionieren. Der im Artikel besprochene Code wurde mit einigen Gamepads getestet, aber die bevorzugte Konfiguration des Autors ist ein drahtloser Xbox 360-Controller und der Firefox-Browser auf macOS.

## Fallstudie: Hungry Fridge

Der [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/)-Wettbewerb fand im November 2013 statt, und [Enclave Games](https://enclavegames.com/) beschloss, daran teilzunehmen. Das Thema des Wettbewerbs war "change", also reichten sie ein Spiel ein, bei dem man den Hungry Fridge füttern musste, indem man gesunde Lebensmittel (Äpfel, Karotten, Salate) antippt und "schlechte" Lebensmittel (Bier, Burger, Pizza) vermeidet. Ein Countdown ändert alle paar Sekunden die Art von Lebensmitteln, die der Kühlschrank essen möchte, sodass Sie vorsichtig sein und schnell handeln müssen.

Die zweite, versteckte "change"-Implementierung ist die Fähigkeit, den statischen Kühlschrank in eine vollwertige bewegliche, schießende und essende Maschine zu verwandeln. Wenn Sie den Controller anschließen, ändert sich das Spiel erheblich (der Hungry Fridge wird zum Super Turbo Hungry Fridge), und Sie können den gepanzerten Kühlschrank mit der Gamepad-API steuern. Sie müssen die Lebensmittel abschießen, aber gleichzeitig müssen Sie die Art von Lebensmitteln finden, die der Kühlschrank jeweils essen möchte, sonst verlieren Sie Energie.

Das Spiel verkörpert zwei völlig unterschiedliche Arten von "change" – gute vs. schlechte Lebensmittel und mobil vs. Desktop.

## Demo

Die vollständige Version des Hungry Fridge-Spiels wurde zuerst entwickelt, und um die Gamepad-API in Aktion zu zeigen und den JavaScript-Quellcode zu illustrieren, wurde eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) erstellt. Sie ist Teil des [Gamepad API Content Kits](https://end3r.github.io/Gamepad-API-Content-Kit/), das auf GitHub verfügbar ist, wo Sie tief in den Code eintauchen und genau studieren können, wie es funktioniert.

Der unten erklärte Code stammt aus der vollständigen Version des Hungry Fridge-Spiels, ist aber fast identisch mit dem aus der Demo – der einzige Unterschied besteht darin, dass die vollständige Version die `turbo`-Variable verwendet, um zu entscheiden, ob das Spiel im Super Turbo-Modus gestartet wird. Es funktioniert unabhängig, sodass es auch eingeschaltet werden kann, wenn das Gamepad nicht angeschlossen ist.

> [!NOTE]
> Osterzeit: Es gibt eine versteckte Option, um Super Turbo Hungry Fridge auf dem Desktop ohne ein angeschlossenes Gamepad zu starten – klicken Sie auf das Gamepad-Icon in der oberen rechten Ecke des Bildschirms. Es wird das Spiel im Super Turbo-Modus starten und Sie können den Kühlschrank mit der Tastatur steuern: A und D zum Drehen des Turms nach links und rechts, W zum Schießen und Pfeiltasten zur Bewegung.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad-API verwendet werden – `gamepadconnected` und `gamepaddisconnected`. Das erste wird ausgelöst, wenn der Browser die Verbindung eines neuen Gamepads erkennt, während das zweite ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch durch den Benutzer oder aufgrund von Inaktivität). In der Demo wird das `gamepadAPI`-Objekt verwendet, um alles zu speichern, was mit der API zu tun hat:

```js
const gamepadAPI = {
  controller: {},
  turbo: false,
  connect() {},
  disconnect() {},
  update() {},
  buttonPressed() {},
  buttons: [],
  buttonsCache: [],
  buttonsStatus: [],
  axesStatus: [],
};
```

Das `buttons`-Array enthält das Xbox 360-Tastenlayout:

```js-nolint
const gamepadAPI = {
  // …
  buttons: [
    "DPad-Up", "DPad-Down", "DPad-Left", "DPad-Right",
    "Start", "Back", "Axis-Left", "Axis-Right",
    "LB", "RB", "Power", "A", "B", "X", "Y",
  ],
  // …
};
```

Dies kann bei anderen Gamepad-Typen wie dem PS3-Controller (oder einem No-Name-Generic) unterschiedlich sein, daher müssen Sie vorsichtig sein und nicht einfach davon ausgehen, dass der erwartete Knopf derselbe ist, den Sie tatsächlich erhalten. Als nächstes richten wir zwei Event-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinien müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Wenn die API ohne jegliche Interaktion vom Benutzer funktionieren würde, könnte sie verwendet werden, um sie ohne ihr Wissen zu identifizieren.

Beide Funktionen sind ziemlich einfach:

```js
const gamepadAPI = {
  // …
  connect(evt) {
    gamepadAPI.controller = evt.gamepad;
    gamepadAPI.turbo = true;
    console.log("Gamepad connected.");
  },
};
```

Die `connect()`-Funktion nimmt das Ereignis als Parameter und weist das `gamepad`-Objekt der Variable `gamepadAPI.controller` zu. Wir verwenden nur ein Gamepad für dieses Spiel, daher ist es ein einzelnes Objekt anstelle eines Arrays von Gamepads. Wir setzen dann die `turbo`-Eigenschaft auf `true`. (Wir könnten das `gamepad.connected`-boolean zu diesem Zweck verwenden, wollten jedoch eine separate Variable, um den Turbo-Modus einzuschalten, ohne ein Gamepad anschließen zu müssen, aus den oben erläuterten Gründen.)

```js
const gamepadAPI = {
  // …
  disconnect(evt) {
    gamepadAPI.turbo = false;
    delete gamepadAPI.controller;
    console.log("Gamepad disconnected.");
  },
};
```

Die `disconnect`-Funktion setzt die `gamepad.turbo` Eigenschaft auf `false` und entfernt die Variable mit dem Gamepad-Objekt.

### Gamepad-Objekt

Im `gamepad`-Objekt sind viele nützliche Informationen enthalten, wobei die Zustände der Tasten und Achsen die wichtigsten sind:

- `id`: Ein String, der Informationen über den Controller enthält.
- `index`: Eine eindeutige Kennung für das angeschlossene Gerät.
- `connected`: Eine boolesche Variable, `true`, wenn das Gerät verbunden ist.
- `mapping`: Der Layout-Typ der Tasten; `standard` ist momentan die einzige verfügbare Option.
- `axes`: Der Zustand jeder Achse, dargestellt durch ein Array von Gleitkommawerten.
- `buttons`: Der Zustand jeder Taste, dargestellt durch ein Array von `GamepadButton`-Objekten, die `pressed` und `value`-Eigenschaften enthalten.

Die `index`-Variable ist nützlich, wenn wir mehr als einen Controller anschließen und sie identifizieren wollen, um entsprechend zu handeln – zum Beispiel, wenn wir ein Zwei-Spieler-Spiel haben, das zwei angeschlossene Geräte erfordert.

### Abfrage des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es zwei weitere Methoden im `gamepadAPI`-Objekt: `update()` und `buttonPressed()`. `update()` wird in jedem Frame innerhalb der Spielschleife ausgeführt, um regelmäßig den aktuellen Status des Gamepad-Objekts zu aktualisieren:

```js
const gamepadAPI = {
  // …
  update() {
    // Clear the buttons cache
    gamepadAPI.buttonsCache = [];

    // Move the buttons status from the previous frame to the cache
    for (let k = 0; k < gamepadAPI.buttonsStatus.length; k++) {
      gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
    }

    // Clear the buttons status
    gamepadAPI.buttonsStatus = [];

    // Get the gamepad object
    const c = gamepadAPI.controller || {};

    // Loop through buttons and push the pressed ones to the array
    const pressed = [];
    if (c.buttons) {
      for (let b = 0; b < c.buttons.length; b++) {
        if (c.buttons[b].pressed) {
          pressed.push(gamepadAPI.buttons[b]);
        }
      }
    }

    // Loop through axes and push their values to the array
    const axes = [];
    if (c.axes) {
      for (let a = 0; a < c.axes.length; a++) {
        axes.push(c.axes[a].toFixed(2));
      }
    }

    // Assign received values
    gamepadAPI.axesStatus = axes;
    gamepadAPI.buttonsStatus = pressed;

    // Return buttons for debugging purposes
    return pressed;
  },
};
```

In jedem Frame speichert `update()` die in der vorherigen Frame gedrückten Tasten im `buttonsCache`-Array und nimmt neue von dem `gamepadAPI.controller`-Objekt. Dann wird durch Schleifen über die Tasten und Achsen deren aktueller Zustand und Wert abgerufen.

### Erkennen von Tastendrücken

Die `buttonPressed()`-Methode wird ebenfalls in die Hauptspielschleife platziert, um auf Tastendrücke zu lauschen. Sie nimmt zwei Parameter – die Taste, die wir überwachen möchten, und die (optionale) Möglichkeit, dem Spiel mitzuteilen, dass das Halten der Taste akzeptiert wird. Ohne diese müssten Sie die Taste loslassen und erneut drücken, um den gewünschten Effekt zu erzielen.

```js
const gamepadAPI = {
  // …
  buttonPressed(button, hold) {
    let newPress = false;

    // Loop through pressed buttons
    for (let i = 0; i < gamepadAPI.buttonsStatus.length; i++) {
      // If we found the button we're looking for
      if (gamepadAPI.buttonsStatus[i] === button) {
        // Set the boolean variable to true
        newPress = true;

        // If we want to check the single press
        if (!hold) {
          // Loop through the cached states from the previous frame
          for (let j = 0; j < gamepadAPI.buttonsCache.length; j++) {
            // If the button was already pressed, ignore new press
            newPress = gamepadAPI.buttonsCache[j] !== button;
          }
        }
      }
    }
    return newPress;
  },
};
```

Es gibt zwei Arten von Aktionen, die für eine Taste berücksichtigt werden müssen: ein einzelner Druck und ein Halten. Die `newPress`-boolesche Variable zeigt an, ob es einen neuen Druck einer Taste gibt oder nicht. Dann durchlaufen wir das Array der gedrückten Tasten – wenn die gegebene Taste dieselbe ist wie die, die wir suchen, wird die `newPress`-Variable auf `true` gesetzt. Um zu überprüfen, ob der Druck ein neuer ist, damit der Spieler nicht die Taste hält, durchlaufen wir die zwischengespeicherten Zustände der Tasten aus dem vorherigen Frame der Spielschleife. Wenn wir sie dort finden, bedeutet das, dass die Taste gehalten wird, sodass es keinen neuen Druck gibt. Am Ende wird die `newPress`-Variable zurückgegeben. Die `buttonPressed`-Funktion wird in der Aktualisierungsschleife des Spiels wie folgt verwendet:

```js
if (gamepadAPI.turbo) {
  if (gamepadAPI.buttonPressed("A", "hold")) {
    this.turbo_fire();
  }
  if (gamepadAPI.buttonPressed("B")) {
    this.managePause();
  }
}
```

Wenn `gamepadAPI.turbo` `true` ist und die angegebenen Tasten gedrückt oder gehalten werden, führen wir die ihnen zugewiesenen Funktionen aus. In diesem Fall feuert das Drücken oder Halten von `A` das Projektil ab und das Drücken von `B` pausiert das Spiel.

### Achsenschwellenwert

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die Analogsticks können viele Werte haben – sie haben einen Gleitbereich zwischen `-1` und `1` entlang der `X`- und `Y`-Achsen.

Gamepads können durch inaktive Lagerung staubig werden, was bedeutet, dass die Überprüfung auf genaue -1 oder 1 Werte ein Problem darstellen kann. Aus diesem Grund kann es sinnvoll sein, einen Schwellenwert für den Wert der Achse festzulegen, ab dem er wirksam wird. Zum Beispiel dreht sich der Fridge Tank nur nach rechts, wenn der `X`-Wert größer als `0.5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Auch wenn wir ihn versehentlich ein wenig bewegen oder der Stick nicht in seine ursprüngliche Position zurückkehrt, wird der Tank sich nicht unerwartet drehen.

## Spezifikationsaktualisierung

Nach mehr als einem Jahr Stabilität wurde im April 2015 die W3C Gamepad API Spezifikation aktualisiert ([siehe die neueste](https://w3c.github.io/gamepad/)). Es hat sich nicht viel geändert, aber es ist gut zu wissen, was vor sich geht – die Updates sind wie folgt.

### Abrufen der Gamepads

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) wurde mit [einer längeren Erklärung und einem Beispielcode](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Arrays der Gamepads `n+1` sein, wobei `n` die Anzahl der angeschlossenen Geräte ist – wenn ein Gerät angeschlossen ist und es den Index 1 hat, beträgt die Länge des Arrays 2 und es sieht so aus: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Mapping-Standard

Der Mapping-Typ ist jetzt ein aufzählbares Objekt anstelle eines Strings:

```webidl
enum GamepadMappingType {
  "",
  "standard",
}
```

Dieses Enum definiert die Menge bekannter Mappings für ein Gamepad. Zurzeit gibt es nur das `standard`-Layout, aber in Zukunft können neue hinzukommen. Wenn das Layout unbekannt ist, wird es auf eine leere Zeichenkette gesetzt.

### Ereignisse

Es standen mehr Ereignisse in der Spezifikation zur Verfügung als nur `gamepadconnected` und `gamepaddisconnected`, aber sie wurden aus der Spezifikation entfernt, da sie als nicht sehr nützlich erachtet wurden. Die Diskussion darüber, ob sie zurückgebracht werden sollten und in welcher Form, ist noch im Gange.

## Zusammenfassung

Die Gamepad-API ist sehr einfach zu entwickeln. Jetzt ist es einfacher denn je, ein konsolenähnliches Erlebnis ohne die Notwendigkeit von Plugins in den Browser zu bringen. Sie können die Vollversion des Spiels [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/) direkt in Ihrem Browser spielen. Überprüfen Sie die anderen Ressourcen im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/).
