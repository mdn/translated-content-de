---
title: Implementieren von Steuerungen mit der Gamepad-API
short-title: Verwendung der Gamepad-API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: f2d013a0ee574275c95b93a4fc72a547a58df7f4
---

{{GamesSidebar}}

Dieser Artikel befasst sich mit der Implementierung eines effektiven, plattformübergreifenden Steuersystems für Webspiele unter Verwendung der Gamepad-API, mit der Sie Ihre Webspiele mit Konsolenspielcontrollern steuern können. Er enthält eine Fallstudie über das Spiel — Hungry Fridge, erstellt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Webspiele

Historisch gesehen war das Spielen auf einer Konsole, die mit Ihrem Fernseher verbunden war, immer ein völlig anderes Erlebnis als das Spielen auf dem PC, hauptsächlich wegen der einzigartigen Steuerungen. Schließlich ermöglichten zusätzliche Treiber und Plugins die Verwendung von Konsolengamepads bei Desktop-Spielen — entweder bei nativen Spielen oder bei solchen, die im Browser laufen. Jetzt haben wir die [Gamepad-API](/de/docs/Web/API/Gamepad_API), die uns die Möglichkeit gibt, browserbasierte Spiele mit Gamepad-Controllern ohne Plugins zu spielen. Die Gamepad-API erreicht dies, indem sie eine Schnittstelle bereitstellt, die Tastenanschläge und Achsenänderungen exponiert, die in JavaScript-Code verwendet werden können, um die Eingabe zu handhaben. Dies sind gute Zeiten für das Browser-Gaming.

## Welche Gamepads sind am besten?

Die beliebtesten Gamepads sind derzeit die der Xbox 360, Xbox One, PS3 und PS4 — sie wurden intensiv getestet und funktionieren gut mit der Implementierung der Gamepad-API in Browsern unter Windows und macOS.

Es gibt auch eine Reihe von anderen Geräten mit verschiedenen Tastenlayouts, die mehr oder weniger gut über Browser-Implementierungen funktionieren. Der in diesem Artikel diskutierte Code wurde mit einigen Gamepads getestet, aber die bevorzugte Konfiguration des Autors ist ein drahtloser Xbox 360-Controller und der Firefox-Browser auf macOS.

## Fallstudie: Hungry Fridge

Der Wettbewerb [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/) fand im November 2013 statt und [Enclave Games](https://enclavegames.com/) entschied sich zur Teilnahme. Das Thema des Wettbewerbs war "Veränderung", also reichten sie ein Spiel ein, in dem Sie den Hungry Fridge füttern müssen, indem Sie auf das gesunde Essen (Äpfel, Karotten, Salate) tippen und das "schlechte" Essen (Bier, Burger, Pizza) vermeiden. Ein Countdown ändert alle paar Sekunden die Art des Essens, das der Kühlschrank essen möchte, sodass Sie vorsichtig sein und schnell handeln müssen.

Die zweite, versteckte Implementierung der "Veränderung" ist die Fähigkeit, den statischen Kühlschrank in eine vollwertige, schießende und essende Maschine zu verwandeln. Wenn Sie den Controller anschließen, ändert sich das Spiel erheblich (Hungry Fridge wird zu Super Turbo Hungry Fridge) und Sie können den gepanzerten Kühlschrank mit der Gamepad-API steuern. Sie müssen das Essen abschießen, aber auch hier müssen Sie die Art des Essens finden, die der Kühlschrank zu jeder Zeit essen möchte, sonst verlieren Sie Energie.

Das Spiel umfasst zwei völlig verschiedene Arten von "Veränderung" — gutes Essen gegen schlechtes Essen und mobil gegen Desktop.

## Demo

Die Vollversion des Hungry Fridge-Spiels wurde zuerst erstellt und dann, um die Gamepad-API in Aktion zu zeigen und den JavaScript-Quellcode darzustellen, wurde eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) erstellt. Sie ist Teil des [Gamepad API Content Kits](https://end3r.github.io/Gamepad-API-Content-Kit/), das auf GitHub verfügbar ist, wo Sie tief in den Code eintauchen und genau studieren können, wie es funktioniert.

Der unten erklärte Code stammt aus der Vollversion des Hungry Fridge-Spiels, ist jedoch fast identisch mit dem der Demo — der einzige Unterschied besteht darin, dass die Vollversion die `turbo`-Variable verwendet, um zu entscheiden, ob das Spiel im Super Turbo-Modus gestartet wird. Es funktioniert unabhängig, sodass es eingeschaltet werden kann, auch wenn das Gamepad nicht angeschlossen ist.

> [!NOTE]
> Zeit für ein Osterei: Es gibt eine versteckte Option, den Super Turbo Hungry Fridge auf dem Desktop zu starten, ohne ein Gamepad angeschlossen zu haben — klicken Sie auf das Gamepad-Symbol in der oberen rechten Ecke des Bildschirms. Es wird das Spiel im Super Turbo-Modus starten und Sie können den Kühlschrank mit der Tastatur steuern: A und D zum Drehen des Geschützturms nach links und rechts, W zum Schießen und Pfeiltasten zur Bewegung.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad-API verwendet werden müssen — `gamepadconnected` und `gamepaddisconnected`. Das erste wird ausgelöst, wenn der Browser die Verbindung eines neuen Gamepads erkennt, während das zweite ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch vom Benutzer oder aufgrund von Inaktivität.) In der Demo wird das `gamepadAPI`-Objekt verwendet, um alles zu speichern, was mit der API zu tun hat:

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

Dies kann bei anderen Arten von Gamepads, wie dem PS3-Controller (oder einem generischen, nicht markierten), unterschiedlich sein, daher müssen Sie vorsichtig sein und nicht einfach davon ausgehen, dass die Taste, die Sie erwarten, auch die Taste ist, die Sie tatsächlich erhalten. Als Nächstes richten wir zwei Event-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinien müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Wenn die API ohne jegliche Interaktion des Nutzers arbeiten würde, könnte sie verwendet werden, um ihn ohne sein Wissen zu identifizieren.

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

Die `connect()`-Funktion nimmt das Ereignis als Parameter und weist das `gamepad`-Objekt der `gamepadAPI.controller`-Variable zu. Wir verwenden für dieses Spiel nur ein Gamepad, daher handelt es sich um ein einzelnes Objekt anstelle eines Arrays von Gamepads. Wir setzen dann die `turbo`-Eigenschaft auf `true`. (Wir könnten dafür den `gamepad.connected` Boolean verwenden, aber wir wollten eine separate Variable haben, um den Turbo-Modus einzuschalten, ohne ein Gamepad angeschlossen zu haben, aus den oben erklärten Gründen.)

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

Die `disconnect`-Funktion setzt die `gamepad.turbo-Eigenschaft` auf `false` und entfernt die Variable, die das Gamepad-Objekt enthält.

### Gamepad-Objekt

Im `gamepad`-Objekt sind viele nützliche Informationen enthalten, wobei der Zustand der Tasten und Achsen am wichtigsten ist:

- `id`: Ein String, der Informationen über den Controller enthält.
- `index`: Eine eindeutige Kennung für das angeschlossene Gerät.
- `connected`: Eine boolesche Variable, `true`, wenn das Gerät angeschlossen ist.
- `mapping`: Der Layouttyp der Tasten; derzeit ist nur `standard` verfügbar.
- `axes`: Der Zustand jeder Achse, dargestellt als Array von Gleitkommawerten.
- `buttons`: Der Zustand jeder Taste, dargestellt als Array von `GamepadButton`-Objekten, die `pressed` und `value` Eigenschaften enthalten.

Die `index`-Variable ist nützlich, wenn wir mehr als einen Controller anschließen und sie identifizieren möchten, um entsprechend zu handeln — zum Beispiel, wenn wir ein Zwei-Spieler-Spiel haben, das zwei angeschlossene Geräte erfordert.

### Abfragen des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es zwei weitere Methoden im `gamepadAPI`-Objekt: `update()` und `buttonPressed()`. `update()` wird bei jedem Frame in der Spielschleife ausgeführt, um den aktuellen Status des Gamepad-Objekts regelmäßig zu aktualisieren:

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

Bei jedem Frame speichert `update()` die während des vorherigen Frames gedrückten Tasten im `buttonsCache`-Array und erhält neue von dem `gamepadAPI.controller`-Objekt. Dann wird durch die Tasten und Achsen geschleift, um ihren aktuellen Zustand und ihre Werte zu erhalten.

### Erkennen von Tastendrücken

Die `buttonPressed()`-Methode wird ebenfalls in der Hauptspielschleife platziert, um auf Tastendrücke zu lauschen. Sie nimmt zwei Parameter — die Taste, die wir überwachen möchten, und die (optionale) Möglichkeit, dem Spiel mitzuteilen, dass das Halten der Taste zulässig ist. Ohne diese müssten Sie die Taste loslassen und erneut drücken, um die gewünschte Wirkung zu erzielen.

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

Es gibt zwei Arten von Aktionen, die bei einer Taste zu berücksichtigen sind: ein einfacher Druck und ein Halten. Die boolesche Variable `newPress` wird angeben, ob es einen neuen Druck einer Taste gibt oder nicht. Anschließend durchlaufen wir das Array der gedrückten Tasten — wenn die gegebene Taste die gleiche ist wie die, die wir suchen, wird die Variable `newPress` auf `true` gesetzt. Um zu überprüfen, ob der Druck ein neuer ist, sodass der Spieler die Taste nicht hält, durchlaufen wir die zwischengespeicherten Zustände der Tasten aus dem vorherigen Frame der Spielschleife. Wenn wir sie dort finden, bedeutet das, dass die Taste gehalten wird, sodass es keinen neuen Druck gibt. Am Ende wird die Variable `newPress` zurückgegeben. Die Funktion `buttonPressed` wird in der Aktualisierungsschleife des Spiels wie folgt verwendet:

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

Wenn `gamepadAPI.turbo` `true` ist und die angegebenen Tasten gedrückt (oder gehalten) werden, führen wir die ordnungsgemäßen Funktionen aus, die ihnen zugewiesen sind. In diesem Fall wird beim Drücken oder Halten von `A` das Projektil abgefeuert und beim Drücken von `B` das Spiel pausiert.

### Achsenschwelle

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die Analogsticks können viele Werte haben — sie haben einen Gleitbereich zwischen `-1` und `1` entlang sowohl der `X`- als auch der `Y`-Achse.

Gamepads können durch das Herumliegen verstauben, was bedeutet, dass das Prüfen auf exakte -1 oder 1 Werte ein Problem sein kann. Aus diesem Grund kann es sinnvoll sein, eine Schwelle für den Wert der Achse festzulegen, um Wirkung zu entfalten. Zum Beispiel wird der Fridge-Tank nur nach rechts drehen, wenn der `X`-Wert größer als `0,5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Selbst wenn wir es aus Versehen ein bisschen bewegen oder der Stick nicht in seine ursprüngliche Position zurückkehrt, wird der Tank nicht unerwartet drehen.

## Aktualisierung der Spezifikation

Nach mehr als einem Jahr Stabilität wurde im April 2015 die Spezifikation der W3C Gamepad-API aktualisiert ([siehe die neueste](https://w3c.github.io/gamepad/)). Es hat sich nicht viel verändert, aber es ist gut zu wissen, was vor sich geht — die Updates sind wie folgt.

### Abrufen der Gamepads

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) wurde mit [einer längeren Erklärung und einem Beispielcode](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Gamepad-Arrays `n+1` betragen, wobei `n` die Anzahl der angeschlossenen Geräte ist — wenn ein Gerät angeschlossen ist und es den Index 1 hat, ist die Länge des Arrays 2 und es wird so aussehen: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Mapping-Standard

Der Mapping-Typ ist jetzt ein aufzählbares Objekt anstelle eines Strings:

```webidl
enum GamepadMappingType {
  "",
  "standard",
}
```

Dieses Enum definiert die Menge der bekannten Mappings für ein Gamepad. Derzeit gibt es nur das `standard`-Layout, aber in Zukunft können neue erscheinen. Wenn das Layout unbekannt ist, wird es auf einen leeren String gesetzt.

### Ereignisse

Es waren mehr Ereignisse in der Spezifikation verfügbar als nur `gamepadconnected` und `gamepaddisconnected`, aber sie wurden aus der Spezifikation entfernt, da sie als nicht sehr nützlich angesehen wurden. Die Diskussion darüber, ob sie zurückgebracht werden sollten und in welcher Form, läuft noch.

## Zusammenfassung

Die Gamepad-API ist sehr einfach zu entwickeln. Jetzt ist es einfacher denn je, eine konsolenähnliche Erfahrung in den Browser zu bringen, ohne dass Plugins erforderlich sind. Sie können die Vollversion des Spiels [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/) direkt in Ihrem Browser spielen. Schauen Sie sich die anderen Ressourcen im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) an.
