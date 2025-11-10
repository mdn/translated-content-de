---
title: Implementieren von Steuerungen mit der Gamepad-API
short-title: Verwendung der Gamepad-API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel betrachtet die Implementierung eines effektiven, plattformübergreifenden Steuersystems für Webspiele mit der Gamepad-API, das es ermöglicht, Ihre Webspiele mit Konsolenspiel-Controllern zu steuern. Es wird ein Fallstudien-Spiel vorgestellt — Hungry Fridge, erstellt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Webspiele

Historisch gesehen war das Spielen auf einer Konsole, die mit Ihrem Fernseher verbunden war, immer ein völlig anderes Erlebnis als das Spielen auf dem PC, hauptsächlich wegen der einzigartigen Steuerung. Schließlich ermöglichten zusätzliche Treiber und Plugins die Verwendung von Konsolen-Spielpads mit Desktop-Spielen — entweder mit nativen Spielen oder solchen im Browser. Jetzt haben wir die [Gamepad-API](/de/docs/Web/API/Gamepad_API), die uns die Möglichkeit gibt, browserbasierte Spiele ohne Plugins mit Gamepad-Controllern zu spielen. Die Gamepad-API erreicht dies, indem sie eine Schnittstelle bereitstellt, die Tastenanschläge und Achsenänderungen ausgibt, die im JavaScript-Code zur Eingabeverarbeitung genutzt werden können. Dies sind gute Zeiten für das Gaming im Browser.

## Welche Gamepads sind am besten?

Die beliebtesten Gamepads derzeit sind die von Xbox 360, Xbox One, PS3 und PS4 — sie wurden intensiv getestet und funktionieren gut mit der Implementation der Gamepad-API in Browsern auf Windows und macOS.

Es gibt auch eine Reihe anderer Geräte mit unterschiedlichsten Tastenlayouts, die mehr oder weniger gut in verschiedenen Browser-Implementierungen funktionieren. Der im Artikel diskutierte Code wurde mit einigen Gamepads getestet, aber die Lieblingskonfiguration des Autors ist ein drahtloser Xbox 360-Controller und der Firefox-Browser auf macOS.

## Fallstudie: Hungry Fridge

Der [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/) Wettbewerb lief im November 2013 und [Enclave Games](https://enclavegames.com/) entschied sich zur Teilnahme. Das Thema des Wettbewerbs war "Veränderung", daher reichten sie ein Spiel ein, bei dem Sie den Hungry Fridge mit gesunden Nahrungsmitteln (Äpfeln, Karotten, Salat) füttern und "schlechte" Nahrungsmittel (Bier, Burger, Pizza) vermeiden müssen. Ein Countdown ändert die Art der Lebensmittel, die der Kühlschrank jede Sekunde essen möchte, sodass Sie vorsichtig sein und schnell reagieren müssen.

Die zweite, verborgene "Veränderung" ist die Fähigkeit, den statischen Kühlschrank in eine vollwertige, bewegliche, schießende und essende Maschine zu verwandeln. Wenn Sie den Controller verbinden, ändert sich das Spiel erheblich (Hungry Fridge wird zum Super Turbo Hungry Fridge) und Sie sind in der Lage, den gepanzerten Kühlschrank mit der Gamepad-API zu steuern. Sie müssen Lebensmittel abschießen, aber erneut die Art von Nahrung finden, die der Kühlschrank gerade essen möchte, sonst verlieren Sie Energie.

Das Spiel umfasst zwei völlig verschiedene Arten von "Veränderung" — gutes Essen vs. schlechtes Essen und mobil vs. Desktop.

## Demo

Die vollständige Version des Hungry Fridge-Spiels wurde zuerst erstellt, und dann wurde eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) erstellt, um die Gamepad-API in Aktion zu zeigen und den JavaScript-Quellcode zu demonstrieren. Sie ist Teil des [Gamepad API Content Kits](https://end3r.github.io/Gamepad-API-Content-Kit/), das auf GitHub verfügbar ist, wo Sie tief in den Code eintauchen und genau studieren können, wie er funktioniert.

Der unten erklärte Code stammt aus der Vollversion des Hungry Fridge-Spiels, ist jedoch nahezu identisch mit dem aus der Demo — der einzige Unterschied ist, dass die Vollversion die Variable `turbo` verwendet, um zu entscheiden, ob das Spiel im Super-Turbo-Modus gestartet wird. Es funktioniert unabhängig, könnte also auch aktiviert werden, wenn das Gamepad nicht angeschlossen ist.

> [!NOTE]
> Osterzeit: Es gibt eine versteckte Option, Super Turbo Hungry Fridge auf dem Desktop zu starten, ohne ein Gamepad angeschlossen zu haben — klicken Sie auf das Gamepad-Symbol in der oberen rechten Bildschirmecke. Das Spiel wird im Super-Turbo-Modus gestartet und Sie können den Kühlschrank mit der Tastatur steuern: A und D, um den Turm nach links und rechts zu drehen, W, um zu schießen, und die Pfeiltasten für Bewegungen.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad-API verwendet werden — `gamepadconnected` und `gamepaddisconnected`. Das erste wird ausgelöst, wenn der Browser das Anschließen eines neuen Gamepads erkennt, während das zweite ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch durch den Benutzer oder aufgrund von Inaktivität). In der Demo wird das `gamepadAPI`-Objekt verwendet, um alles, was mit der API zusammenhängt, zu speichern:

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

Das `buttons`-Array enthält das Xbox 360-Button-Layout:

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

Dies kann bei anderen Gamepads wie dem PS3-Controller (oder einem namenlosen generischen) anders sein, daher müssen Sie vorsichtig sein und nicht einfach annehmen, dass der erwartete Button derselbe ist, den Sie tatsächlich erhalten. Als Nächstes richten wir zwei Event-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinien müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Wenn die API ohne jegliche Benutzerinteraktion funktionierte, könnte sie zur Erkennung von Nutzern ohne deren Wissen verwendet werden.

Beide Funktionen sind relativ einfach:

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

Die `connect()`-Funktion nimmt das Ereignis als Parameter und weist das `gamepad`-Objekt der `gamepadAPI.controller`-Variablen zu. Wir verwenden nur ein Gamepad für dieses Spiel, daher ist es ein einzelnes Objekt statt eines Arrays von Gamepads. Dann setzen wir die `turbo`-Eigenschaft auf `true`. (Wir könnten den `gamepad.connected`-Boolean-Wert für diesen Zweck nutzen, aber wir wollten eine separate Variable haben, um den Turbo-Modus zu aktivieren, ohne ein Gamepad anzuschließen, aus den oben genannten Gründen.)

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

Die `disconnect()`-Funktion setzt die `gamepad.turbo`-Eigenschaft auf `false` und entfernt die Variable, die das Gamepad-Objekt enthält.

### Gamepad-Objekt

Es gibt viele nützliche Informationen im `gamepad`-Objekt, wobei die Zustände der Tasten und Achsen die wichtigsten sind:

- `id`: Ein String, der Informationen über den Controller enthält.
- `index`: Eine einzigartige Kennung für das angeschlossene Gerät.
- `connected`: Eine boolesche Variable, `true`, wenn das Gerät angeschlossen ist.
- `mapping`: Der Layout-Typ der Tasten; `standard` ist die einzige derzeit verfügbare Option.
- `axes`: Der Zustand jeder Achse, dargestellt durch ein Array von Gleitkommawerten.
- `buttons`: Der Zustand jeder Taste, dargestellt durch ein Array von `GamepadButton`-Objekten mit den Eigenschaften `pressed` und `value`.

Die `index`-Variable ist nützlich, wenn wir mehr als einen Controller anschließen und diese entsprechend identifizieren wollen — zum Beispiel, wenn wir ein Zwei-Spieler-Spiel haben, das zwei verbundene Geräte erfordert.

### Abfragen des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es zwei weitere Methoden im `gamepadAPI`-Objekt: `update()` und `buttonPressed()`. `update()` wird in jedem Frame innerhalb der Spielschleife ausgeführt, um den aktuellen Status des Gamepad-Objekts regelmäßig zu aktualisieren:

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
      for (const ax of c.axes) {
        axes.push(ax.toFixed(2));
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

In jedem Frame speichert `update()` die Tasten, die während des vorherigen Frames gedrückt wurden, im `buttonsCache`-Array und nimmt neue vom `gamepadAPI.controller`-Objekt. Dann durchläuft es die Tasten und Achsen, um deren aktuelle Zustände und Werte zu erhalten.

### Erkennen von Tastenanschlägen

Die `buttonPressed()`-Methode wird ebenfalls in der Hauptspielschleife platziert, um Tastenanschläge zu verfolgen. Sie nimmt zwei Parameter — die Taste, die wir überwachen möchten, und die (optionale) Möglichkeit, dem Spiel mitzuteilen, dass das Halten der Taste akzeptiert wird. Ohne dies müssten Sie die Taste loslassen und erneut drücken, um die gewünschte Wirkung zu erzielen.

```js
const gamepadAPI = {
  // …
  buttonPressed(button, hold) {
    let newPress = false;
    if (GamepadAPI.buttons.status.includes(button)) {
      newPress = true;
    }
    if (!hold && GamepadAPI.buttons.cache.includes(button)) {
      newPress = false;
    }
    return newPress;
  },
};
```

Es gibt zwei Aktionsarten für eine Taste zu berücksichtigen: einen einzelnen Druck und ein Halten. Die boolesche Variable `newPress` zeigt an, ob ein neuer Tastendruck vorhanden ist oder nicht. Dann überprüfen wir das Array der gedrückten Tasten — wenn die gegebene Taste hier drin ist, wird die `newPress`-Variable auf `true` gesetzt. Um zu überprüfen, ob der Druck neu ist, sodass der Spieler die Taste nicht hält, überprüfen wir die zwischengespeicherten Zustände der Tasten aus dem vorherigen Frame der Spielschleife. Wenn wir sie dort finden, bedeutet es, dass die Taste gehalten wird, es gibt also keinen neuen Druck. Am Ende wird die `newPress`-Variable zurückgegeben. Die `buttonPressed`-Funktion wird in der Aktualisierungsschleife des Spiels wie folgt verwendet:

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

Wenn `gamepadAPI.turbo` `true` ist und die gegebenen Tasten gedrückt (oder gehalten) werden, führen wir die zugewiesenen Funktionen aus. In diesem Fall wird das Drücken oder Halten von `A` das Geschoss abfeuern und das Drücken von `B` das Spiel pausieren.

### Achsenschwelle

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die Analogsticks können viele Werte haben — sie haben einen Gleitbereich zwischen `-1` und `1` sowohl entlang der `X`- als auch der `Y`-Achse.

Gamepads können durch langes Herumliegen staubig werden, was bedeutet, dass die Prüfung auf genaue -1 oder 1 Werte ein Problem sein kann. Aus diesem Grund kann es sinnvoll sein, eine Schwelle für den Achsenwert festzulegen, um in Kraft zu treten. Zum Beispiel wird der Fridge-Panzer nur nach rechts drehen, wenn der `X`-Wert größer als `0.5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Selbst wenn wir ihn aus Versehen ein wenig bewegen oder der Stick nicht in seine ursprüngliche Position zurückkehrt, wird der Panzer nicht unerwartet drehen.

## Spezifikations-Update

Nach mehr als einem Jahr Stabilität wurde im April 2015 die W3C Gamepad API-Spezifikation aktualisiert ([die neuesten sehen](https://w3c.github.io/gamepad/)). Es hat sich nicht viel geändert, aber es ist gut zu wissen, was vor sich geht — die Updates sind wie folgt.

### Die Gamepads abrufen

Die [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)-Methode wurde mit [einer längeren Erklärung und einem Beispielcodeabschnitt](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Arrays der Gamepads `n+1` betragen, wobei `n` die Anzahl der angeschlossenen Geräte ist — wenn ein Gerät angeschlossen ist und es den Index 1 hat, beträgt die Länge des Arrays 2 und es sieht so aus: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Mapping-Standard

Der Mapping-Typ ist jetzt ein aufzählbares Objekt anstelle eines Strings:

```webidl
enum GamepadMappingType {
  "",
  "standard",
}
```

Dieses Enum definiert die Menge der bekannten Mappings für ein Gamepad. Derzeit ist nur das `standard`-Layout verfügbar, aber neue können in Zukunft erscheinen. Wenn das Layout unbekannt ist, wird es auf einen leeren String gesetzt.

### Ereignisse

Es standen weitere Ereignisse in der Spezifikation zur Verfügung als nur `gamepadconnected` und `gamepaddisconnected`, wurden jedoch entfernt, da sie für nicht sehr nützlich gehalten wurden. Die Diskussion darüber, ob sie wieder hinzugefügt werden sollen und in welcher Form, ist noch im Gange.

## Zusammenfassung

Die Gamepad API ist sehr einfach zu entwickeln. Jetzt ist es einfacher denn je, ein konsolenähnliches Erlebnis in den Browser zu bringen, ohne dass Plugins erforderlich sind. Sie können die Vollversion des [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/) Spiels direkt in Ihrem Browser spielen. Schauen Sie sich die anderen Ressourcen im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) an.
