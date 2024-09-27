---
title: Implementierung von Steuerungen mithilfe der Gamepad API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Dieser Artikel befasst sich mit der Implementierung eines effektiven, plattformübergreifenden Steuerungssystems für Webspiele mithilfe der Gamepad API. Diese erlaubt es Ihnen, Ihre Webspiele mit Konsolenspielcontrollern zu steuern. Es wird ein Beispielspiel vorgestellt — Hungry Fridge, entwickelt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Webspiele

Historisch gesehen war das Spielen auf einer Konsole, die an Ihren Fernseher angeschlossen ist, immer ein völlig anderes Erlebnis als das Spielen auf dem PC, hauptsächlich wegen der einzigartigen Steuerung. Es war schließlich möglich, Konsolengamepads mit Desktopspielen – entweder native Spiele oder solche, die im Browser laufen – zu verwenden, dank zusätzlicher Treiber und Plugins. Jetzt haben wir die [Gamepad API](/de/docs/Web/API/Gamepad_API), die es uns ermöglicht, Browser-basierte Spiele ohne Plugins mit Gamepad-Controllern zu spielen. Die Gamepad API erreicht dies, indem sie eine Schnittstelle bereitstellt, die Tastendrücke und Achsenänderungen offenlegt, die in JavaScript-Code zur Eingabeverarbeitung verwendet werden können. Das sind gute Zeiten für das Browser-Gaming.

## Welche Gamepads sind am besten?

Die derzeit beliebtesten Gamepads sind die der Xbox 360, Xbox One, PS3 und PS4 — sie wurden umfassend getestet und funktionieren gut mit der Implementierung der Gamepad API in Browsern unter Windows und macOS.

Es gibt auch eine Reihe anderer Geräte mit verschiedenen Tastenlayouts, die mehr oder weniger gut über die Browserimplementierungen hinweg funktionieren. Der im Artikel diskutierte Code wurde mit einigen Gamepads getestet, aber die bevorzugte Konfiguration des Autors ist ein drahtloses Xbox 360-Controller und der Firefox-Browser auf macOS.

## Fallstudie: Hungry Fridge

Der [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/) Wettbewerb fand im November 2013 statt und [Enclave Games](https://enclavegames.com/) beschloss, daran teilzunehmen. Das Thema des Wettbewerbs war "Veränderung", also reichten sie ein Spiel ein, bei dem Sie den Hungry Fridge füttern müssen, indem Sie gesunde Lebensmittel (Äpfel, Karotten, Salate) antippen und "ungesunde" Lebensmittel (Bier, Burger, Pizza) vermeiden. Ein Countdown ändert alle paar Sekunden die Art von Lebensmittel, die der Kühlschrank essen möchte, also müssen Sie vorsichtig sein und schnell handeln.

Die zweite, versteckte "Veränderung"-Implementierung ist die Fähigkeit, den statischen Kühlschrank in eine vollwertige, bewegliche, schießende und essende Maschine zu verwandeln. Wenn Sie den Controller anschließen, ändert sich das Spiel erheblich (Hungry Fridge wird zu Super Turbo Hungry Fridge) und Sie können den gepanzerten Kühlschrank mithilfe der Gamepad API steuern. Sie müssen das Essen abschießen, aber auch hier müssen Sie die Art von Lebensmittel finden, die der Kühlschrank zu jedem Zeitpunkt essen möchte, sonst verlieren Sie Energie.

Das Spiel verkörpert zwei völlig unterschiedliche Arten von "Veränderung" — gutes Essen gegen schlechtes Essen und mobil gegen Desktop.

## Demo

Die vollständige Version des Hungry Fridge Spiels wurde zuerst erstellt, und dann wurde eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) entwickelt, um die Gamepad API in Aktion zu zeigen und den JavaScript-Quellcode zu präsentieren. Sie ist Teil des [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/), das auf GitHub verfügbar ist, wo Sie den Code ausführlich untersuchen und genau nachvollziehen können, wie er funktioniert.

Der unten erklärte Code stammt aus der vollständigen Version des Hungry Fridge Spiels, ist jedoch fast identisch mit der aus der Demo — der einzige Unterschied besteht darin, dass in der Vollversion die Variable `turbo` verwendet wird, um zu entscheiden, ob das Spiel im Super Turbo Modus gestartet wird. Es funktioniert unabhängig und könnte auch aktiviert werden, wenn das Gamepad nicht angeschlossen ist.

> [!NOTE]
> Easter Egg: Es gibt eine versteckte Möglichkeit, Super Turbo Hungry Fridge auf dem Desktop zu starten, ohne ein Gamepad angeschlossen zu haben — klicken Sie auf das Gamepad-Symbol in der oberen rechten Ecke des Bildschirms. Dadurch wird das Spiel im Super Turbo Modus gestartet und Sie können den Kühlschrank mit der Tastatur steuern: A und D zum Drehen des Turms nach links und rechts, W zum Schießen und Pfeiltasten für die Bewegung.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad API zu verwenden sind — `gamepadconnected` und `gamepaddisconnected`. Das erste wird ausgelöst, wenn der Browser die Verbindung eines neuen Gamepads erkennt, während das zweite ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch durch den Benutzer oder aufgrund von Inaktivität). In der Demo wird das `gamepadAPI`-Objekt verwendet, um alles, was mit der API zusammenhängt, zu speichern:

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

Das `buttons`-Array enthält das Xbox 360 Tastenlayout:

```js
buttons: [
  'DPad-Up','DPad-Down','DPad-Left','DPad-Right',
  'Start','Back','Axis-Left','Axis-Right',
  'LB','RB','Power','A','B','X','Y',
],
```

Dies kann bei anderen Arten von Gamepads wie dem PS3-Controller (oder einem No-Name-Generic-Controller) unterschiedlich sein, daher sollten Sie vorsichtig sein und nicht einfach davon ausgehen, dass die erwartete Taste dieselbe ist, die Sie tatsächlich erhalten. Als nächstes richten wir zwei Event-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinie müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Wenn die API ohne jegliche Interaktion durch den Benutzer funktionieren würde, könnte sie genutzt werden, um diese ohne deren Wissen zu identifizieren.

Beide Funktionen sind ziemlich einfach:

```js
connect(evt) {
  gamepadAPI.controller = evt.gamepad;
  gamepadAPI.turbo = true;
  console.log('Gamepad connected.');
},
```

Die `connect()`-Funktion nimmt das Ereignis als Parameter und weist das `gamepad`-Objekt der Variable `gamepadAPI.controller` zu. Wir verwenden nur ein Gamepad für dieses Spiel, daher handelt es sich um ein einzelnes Objekt statt eines Arrays von Gamepads. Wir setzen dann die `turbo`-Eigenschaft auf `true`. (Wir könnten hierzu die `gamepad.connected`-Boolean verwenden, aber wir wollten eine separate Variable haben, um den Turbo-Modus einzuschalten, ohne ein angeschlossenes Gamepad zu benötigen, aus den weiter oben erläuterten Gründen.)

```js
disconnect(evt) {
  gamepadAPI.turbo = false;
  delete gamepadAPI.controller;
  console.log('Gamepad disconnected.');
},
```

Die `disconnect`-Funktion setzt das `gamepad.turbo property` auf `false` und entfernt die Variable, die das Gamepad-Objekt enthält.

### Gamepad-Objekt

Im `gamepad`-Objekt sind viele nützliche Informationen enthalten, wobei die Zustände der Tasten und Achsen die wichtigsten sind:

- `id`: Ein String, der Informationen über den Controller enthält.
- `index`: Eine eindeutige Kennzeichnung für das angeschlossene Gerät.
- `connected`: Eine Boolean-Variable, die `true` ist, wenn das Gerät angeschlossen ist.
- `mapping`: Der Layouttyp der Tasten; `standard` ist die einzige momentan verfügbare Option.
- `axes`: Der Zustand jeder Achse, dargestellt durch ein Array von Gleitkommazahlen.
- `buttons` : Der Zustand jeder Taste, dargestellt durch ein Array von `GamepadButton`-Objekten mit den Eigenschaften `pressed` und `value`.

Die `index`-Variable ist nützlich, wenn wir mehr als einen Controller anschließen und sie identifizieren wollen, um entsprechend zu handeln — zum Beispiel, wenn wir ein Zwei-Spieler-Spiel haben, das zwei angeschlossene Geräte erfordert.

### Abfragen des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es zwei weitere Methoden im `gamepadAPI`-Objekt: `update()` und `buttonPressed()`. `update()` wird in jedem Frame innerhalb der Spielschleife ausgeführt, um den aktuellen Status des Gamepad-Objekts regelmäßig zu aktualisieren:

```js
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
```

In jedem Frame speichert `update()` die während des vorherigen Frames gedrückten Tasten im `buttonsCache`-Array und nimmt die aktuellen von dem `gamepadAPI.controller`-Objekt. Dann schleift es durch die Tasten und Achsen, um ihre tatsächlichen Zustände und Werte zu erhalten.

### Erkennen von Tastendrücken

Die `buttonPressed()`-Methode wird ebenfalls in der Hauptspielschleife platziert, um auf Tastendrücke zu hören. Sie nimmt zwei Parameter — die Taste, die wir hören möchten und die (optionale) Methode, dem Spiel mitzuteilen, dass das Halten der Taste akzeptiert wird. Andernfalls müssten Sie die Taste loslassen und erneut drücken, um den gewünschten Effekt zu erzielen.

```js
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
          newPress = (gamepadAPI.buttonsCache[j] !== button);
        }
      }
    }
  }
  return newPress;
},
```

Es gibt zwei Arten von Aktionen, die für eine Taste berücksichtigt werden sollten: ein einzelnes Drücken und ein Halten. Die `newPress`-Boolean-Variable zeigt an, ob es ein neues Drücken einer Taste gibt oder nicht. Anschließend durchlaufen wir das Array der gedrückten Tasten — wenn die gegebene Taste dieselbe ist wie die, die wir suchen, wird die Variable `newPress` auf `true` gesetzt. Um zu überprüfen, ob das Drücken ein neues ist, sodass der Spieler den Schlüssel nicht hält, durchlaufen wir die zwischengespeicherten Zustände der Tasten aus dem vorherigen Frame der Spielschleife. Wenn wir sie dort finden, bedeutet dies, dass die Taste gehalten wird, sodass es kein neues Drücken gibt. Im Endeffekt wird die Variable `newPress` zurückgegeben. Die `buttonPressed`-Funktion wird in der Aktualisierungsschleife des Spiels folgendermaßen verwendet:

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

Wenn `gamepadAPI.turbo` `true` ist und die angegebenen Tasten gedrückt (oder gehalten) werden, führen wir die ihnen zugewiesenen Funktionen aus. In diesem Fall wird durch Drücken oder Halten von `A` die Kugel abgefeuert, und durch Drücken von `B` wird das Spiel pausiert.

### Achsenschwelle

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die Analogsticks können viele Werte haben — sie haben einen Float-Bereich zwischen `-1` und `1` entlang beider `X`- und `Y`-Achsen.

Gamepads können durch Inaktivität staubig werden, was bedeutet, dass das Überprüfen auf genaue -1- oder 1-Werte ein Problem sein kann. Aus diesem Grund kann es gut sein, einen Schwellenwert für die Achsenwerte festzulegen, um wirksam zu werden. Zum Beispiel wird der Fridge Tank nur nach rechts abbiegen, wenn der `X`-Wert größer als `0.5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Selbst wenn wir es versehentlich ein wenig bewegen oder der Stick nicht in seine ursprüngliche Position zurückkehrt, wird der Tank nicht unerwartet abbiegen.

## Spezifikationsupdate

Nach mehr als einem Jahr der Stabilität wurde die W3C Gamepad API-Spezifikation im April 2015 aktualisiert ([siehe das neueste](https://w3c.github.io/gamepad/)). Sie hat sich nicht viel verändert, aber es ist gut zu wissen, was vor sich geht — die Updates sind wie folgt.

### Die Gamepads abrufen

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) wurde mit [einer längeren Erklärung und einem Beispielcode-Stück](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Arrays der Gamepads `n+1` sein, wobei `n` die Anzahl der angeschlossenen Geräte ist — wenn ein Gerät angeschlossen ist und es den Index von 1 hat, ist die Länge des Arrays 2, und es wird so aussehen: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Mapping-Standard

Der Mapping-Typ ist jetzt ein aufzählbares Objekt anstelle eines Strings:

```ts
enum GamepadMappingType {
  "",
  "standard",
}
```

Dieses Enum definiert die Menge der bekannten Mappings für ein Gamepad. Vorerst ist nur das `standard`-Layout verfügbar, aber es könnten in Zukunft neue erscheinen. Wenn das Layout unbekannt ist, wird es auf einen leeren String gesetzt.

### Ereignisse

In der Spezifikation waren mehr Ereignisse verfügbar als nur `gamepadconnected` und `gamepaddisconnected`, aber sie wurden aus der Spezifikation entfernt, da sie als nicht sehr nützlich angesehen wurden. Die Diskussion darüber, ob sie wieder aufgenommen werden sollten und in welcher Form, ist noch im Gange.

## Zusammenfassung

Die Gamepad API ist sehr einfach zu entwickeln. Jetzt ist es einfacher denn je, ein konsolenähnliches Erlebnis auf den Browser zu übertragen, ohne dass Plugins erforderlich sind. Sie können die vollständige Version des [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/)-Spiels direkt in Ihrem Browser spielen. Schauen Sie sich die anderen Ressourcen im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) an.
