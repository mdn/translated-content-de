---
title: Kontrollen mit der Gamepad API implementieren
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Dieser Artikel befasst sich mit der Implementierung eines effektiven, browserübergreifenden Steuersystems für Web-Spiele mit der Gamepad API, die es Ihnen ermöglicht, Ihre Web-Spiele mit Konsolen-Gamecontrollern zu steuern. Es wird ein Beispielspiel vorgestellt — Hungry Fridge, erstellt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Web-Spiele

Historisch gesehen war das Spielen von Spielen auf einer Konsole, die an Ihren Fernseher angeschlossen war, immer ein völlig anderes Erlebnis als das Spielen auf dem PC, hauptsächlich wegen der einzigartigen Steuerungen. Letztendlich ermöglichten zusätzliche Treiber und Plugins die Verwendung von Konsolen-Gamepads mit Desktop-Spielen — entweder native Spiele oder solche, die im Browser laufen. Jetzt haben wir die [Gamepad API](/de/docs/Web/API/Gamepad_API), die uns die Möglichkeit gibt, browserbasierte Spiele mit Gamecontroller zu spielen, ohne Plugins. Die Gamepad API erreicht dies, indem sie eine Schnittstelle bereitstellt, die Tastendrücke und Achsenänderungen sichtbar macht, die innerhalb von JavaScript-Code zur Handhabung der Eingaben genutzt werden können. Dies sind gute Zeiten für Browser-Gaming.

## Welche Gamepads sind die besten?

Die derzeit beliebtesten Gamepads sind die der Xbox 360, Xbox One, PS3 und PS4 — sie wurden gründlich getestet und funktionieren gut mit der Gamepad API-Implementierung in Browsern auf Windows und macOS.

Es gibt auch eine Reihe anderer Geräte mit unterschiedlichen Tastenlayouts, die mehr oder weniger über Browser-Implementierungen funktionieren. Der in diesem Artikel besprochene Code wurde mit einigen Gamepads getestet, aber die bevorzugte Konfiguration des Autors ist ein kabelloser Xbox 360-Controller und der Firefox-Browser auf macOS.

## Fallstudie: Hungry Fridge

Der [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/) Wettbewerb fand im November 2013 statt und [Enclave Games](https://enclavegames.com/) beschloss, daran teilzunehmen. Das Thema des Wettbewerbs war "Wandel", also reichten sie ein Spiel ein, bei dem Sie den Hungry Fridge füttern müssen, indem Sie auf das gesunde Essen tippen (Äpfel, Karotten, Salat) und das "schlechte" Essen vermeiden (Bier, Burger, Pizza). Ein Countdown ändert alle paar Sekunden die Art des Essens, das der Kühlschrank essen möchte, sodass Sie vorsichtig und schnell handeln müssen.

Die zweite, verborgene "Wandel"-Implementierung ist die Fähigkeit, den statischen Kühlschrank in eine vollwertige bewegliche, schießende und essende Maschine zu verwandeln. Wenn Sie den Controller anschließen, ändert sich das Spiel erheblich (Hungry Fridge wird zum Super Turbo Hungry Fridge) und Sie können den gepanzerten Kühlschrank mit der Gamepad API steuern. Sie müssen das Essen abschießen, aber erneut müssen Sie die Art des Essens finden, die der Kühlschrank zu jedem Zeitpunkt essen möchte, andernfalls verlieren Sie Energie.

Das Spiel umfasst zwei völlig unterschiedliche Arten von "Wandel" — gutes Essen vs. schlechtes Essen und Mobil vs. Desktop.

## Demo

Die Vollversion des Hungry Fridge Spiels wurde zuerst entwickelt, und dann wurde eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) erstellt, um die Gamepad API in Aktion zu zeigen und den JavaScript-Quellcode zu demonstrieren. Sie ist Teil des [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/), das auf GitHub verfügbar ist, wo Sie tief in den Code eintauchen und genau studieren können, wie er funktioniert.

Der unten erklärte Code stammt aus der Vollversion des Hungry Fridge Spiels, ist jedoch fast identisch mit dem der Demo — der einzige Unterschied ist, dass die Vollversion die `turbo`-Variable verwendet, um zu entscheiden, ob das Spiel im Super Turbo Modus gestartet wird. Es funktioniert unabhängig, sodass es auch aktiviert werden kann, wenn das Gamepad nicht angeschlossen ist.

> [!NOTE]
> Osterzeit: Es gibt eine versteckte Option, um Super Turbo Hungry Fridge auf dem Desktop zu starten, ohne ein Gamepad angeschlossen zu haben — klicken Sie auf das Gamepad-Symbol in der oberen rechten Ecke des Bildschirms. Es wird das Spiel im Super Turbo Modus starten und Sie können den Kühlschrank mit der Tastatur steuern: A und D, um den Turm nach links und rechts zu drehen, W zum Schießen und Pfeiltasten zur Bewegung.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad API genutzt werden — `gamepadconnected` und `gamepaddisconnected`. Das erste wird ausgelöst, wenn der Browser die Verbindung eines neuen Gamepads erkennt, während das zweite ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch durch den Benutzer oder aufgrund von Inaktivität). Im Demo wird das `gamepadAPI` Objekt verwendet, um alles im Zusammenhang mit der API zu speichern:

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

Das `buttons` Array enthält das Xbox 360-Tastenlayout:

```js
buttons: [
  'DPad-Up','DPad-Down','DPad-Left','DPad-Right',
  'Start','Back','Axis-Left','Axis-Right',
  'LB','RB','Power','A','B','X','Y',
],
```

Dies kann für andere Arten von Gamepads wie den PS3-Controller (oder einen namenlosen, generischen) unterschiedlich sein, daher müssen Sie vorsichtig sein und nicht einfach davon ausgehen, dass die erwartete Taste die tatsächliche ist. Als nächstes richten wir zwei Event-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinien müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Würde die API ohne jegliche Interaktion des Nutzers funktionieren, könnte sie verwendet werden, um ihn ohne sein Wissen zu identifizieren.

Beide Funktionen sind ziemlich einfach:

```js
connect(evt) {
  gamepadAPI.controller = evt.gamepad;
  gamepadAPI.turbo = true;
  console.log('Gamepad connected.');
},
```

Die `connect()` Funktion nimmt das Ereignis als Parameter und weist das `gamepad` Objekt der `gamepadAPI.controller` Variablen zu. Wir verwenden nur ein Gamepad für dieses Spiel, daher ist es ein einzelnes Objekt anstelle eines Arrays von Gamepads. Wir setzen dann die `turbo`-Eigenschaft auf `true`. (Wir könnten das `gamepad.connected`-Boolean für diesen Zweck verwenden, aber wir wollten eine separate Variable haben, um den Turbo-Modus einzuschalten, ohne ein Gamepad angeschlossen zu haben, aus den oben genannten Gründen.)

```js
disconnect(evt) {
  gamepadAPI.turbo = false;
  delete gamepadAPI.controller;
  console.log('Gamepad disconnected.');
},
```

Die `disconnect` Funktion setzt die `gamepad.turbo property` auf `false` und entfernt die Variable, die das Gamepad-Objekt enthält.

### Gamepad Objekt

Es gibt viele nützliche Informationen in dem `gamepad` Objekt enthalten, wobei die Zustände der Tasten und Achsen die wichtigsten sind:

- `id`: Ein String, der Informationen über den Controller enthält.
- `index`: Eine eindeutige Kennung für das verbundene Gerät.
- `connected`: Eine boolesche Variable, `true`, wenn das Gerät verbunden ist.
- `mapping`: Der Layout-Typ der Tasten; `standard` ist die derzeit einzige verfügbare Option.
- `axes`: Der Zustand jeder Achse, dargestellt durch ein Array von Gleitkommawerten.
- `buttons`: Der Zustand jeder Taste, dargestellt durch ein Array von `GamepadButton` Objekten, die `pressed` und `value` Eigenschaften enthalten.

Die `index`-Variable ist nützlich, wenn wir mehr als einen Controller anschließen möchten und diese identifizieren möchten, um entsprechend zu handeln — zum Beispiel, wenn wir ein Zwei-Spieler-Spiel haben, das zwei angeschlossene Geräte erfordert.

### Abfrage des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es zwei weitere Methoden im `gamepadAPI` Objekt: `update()` und `buttonPressed()`. `update()` wird in jeder Schleife im Spiel ausgeführt, um den aktuellen Status des Gamepad-Objekts regelmäßig zu aktualisieren:

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

In jedem Frame speichert `update()` Tastenanschläge während des vorherigen Frames im `buttonsCache` Array und entnimmt frische aus dem `gamepadAPI.controller` Objekt. Dann durchläuft es Tasten und Achsen, um deren tatsächliche Zustände und Werte zu erhalten.

### Erkennung von Tastenanschlägen

Die `buttonPressed()` Methode wird ebenfalls in der Hauptspielschleife platziert, um Tastenanschläge zu hören. Es nimmt zwei Parameter — die Taste, die wir überwachen wollen, und die (optionale) Möglichkeit, dem Spiel mitzuteilen, dass das Halten der Taste akzeptiert wird. Ohne dieses müssten Sie die Taste loslassen und erneut drücken, um den gewünschten Effekt zu erzielen.

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

Es gibt zwei Arten von Aktionen, die bei einer Taste zu berücksichtigen sind: ein Single-Press und ein Halten. Die `newPress`-Boolesche-Variable zeigt an, ob es einen neuen Druck auf eine Taste gibt oder nicht. Als Nächstes durchlaufen wir das Array der gedrückten Tasten — wenn die gegebene Taste dieselbe ist, wie die, die wir suchen, wird die `newPress`-Variable auf `true` gesetzt. Um zu überprüfen, ob es sich um einen neuen Druck handelt, sodass der Spieler die Taste nicht gedrückt hält, durchlaufen wir die gecachten Zustände der Tasten aus dem vorherigen Frame der Spielschleife. Wenn wir es dort finden, bedeutet das, dass die Taste gehalten wird, also gibt es keinen neuen Druck. Am Ende wird die `newPress`-Variable zurückgegeben. Die `buttonPressed` Funktion wird in der Aktualisierungsschleife des Spiels wie folgt verwendet:

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

Wenn `gamepadAPI.turbo` `true` ist und die angegebenen Tasten gedrückt (oder gehalten) werden, führen wir die ihnen zugewiesenen Funktionen aus. In diesem Fall wird durch Drücken oder Halten von `A` das Projektil abgefeuert und durch Drücken von `B` wird das Spiel pausiert.

### Achsenschwelle

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die Analogsticks können viele Werte haben — sie haben einen Gleitbereich zwischen `-1` und `1` entlang der `X`- und `Y`-Achsen.

Gamepads können durch längere Inaktivität verstauben, was bedeutet, dass das Überprüfen auf exakte -1 oder 1-Werte problematisch sein kann. Aus diesem Grund kann es sinnvoll sein, eine Schwelle für den Wert der Achse festzulegen, damit sie Wirkung zeigt. Zum Beispiel wird der Fridge-Panzer nur nach rechts drehen, wenn der `X`-Wert größer als `0.5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Auch wenn wir es versehentlich ein wenig bewegen oder der Stick nicht in seine ursprüngliche Position zurückkehrt, wird der Panzer nicht unerwartet drehen.

## Spezifikationsupdate

Nach mehr als einem Jahr Stabilität wurde im April 2015 die W3C Gamepad API Spezifikation aktualisiert ([siehe das Neueste](https://w3c.github.io/gamepad/).) Es hat sich nicht viel geändert, aber es ist gut zu wissen, was vor sich geht — die Updates sind wie folgt.

### Abrufen der Gamepads

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) wurde mit [einer längeren Erklärung und einem Beispielcode](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Arrays von Gamepads `n+1` sein, wobei `n` die Anzahl der angeschlossenen Geräte ist — wenn ein Gerät angeschlossen ist und es den Index 1 hat, beträgt die Länge des Arrays 2 und es sieht so aus: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Standard-Mapping

Der Mappingtyp ist nun ein aufzählbares Objekt statt eines Strings:

```ts
enum GamepadMappingType {
  "",
  "standard",
}
```

Dieses Enum definiert die Menge der bekannten Mappings für ein Gamepad. Derzeit gibt es nur das `standard` Layout, aber es könnten in Zukunft neue hinzukommen. Wenn das Layout unbekannt ist, wird es auf einen leeren String gesetzt.

### Ereignisse

Es gab in der Spezifikation mehr verfügbare Ereignisse als nur `gamepadconnected` und `gamepaddisconnected`, aber sie wurden aus der Spezifikation entfernt, da sie als nicht sehr nützlich erachtet wurden. Die Diskussion, ob sie zurückgebracht werden sollten und in welcher Form, ist noch im Gange.

## Zusammenfassung

Die Gamepad API ist sehr einfach zu entwickeln. Nun ist es einfacher denn je, ein Konsolen-ähnliches Erlebnis in den Browser zu bringen, ohne dass Plugins benötigt werden. Sie können die Vollversion des [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/) Spiels direkt in Ihrem Browser spielen. Weitere Ressourcen finden Sie im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/).
