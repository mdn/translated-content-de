---
title: Implementieren von Steuerungen mit der Gamepad-API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Dieser Artikel befasst sich mit der Implementierung eines effektiven, browserübergreifenden Steuerungssystems für Webspiele unter Verwendung der Gamepad-API, mit der Sie Ihre Webspiele mithilfe von Konsolen-Gamecontrollern steuern können. Er bietet eine Fallstudie des Spiels — Hungry Fridge, erstellt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Webspiele

Historisch gesehen war das Spielen auf einer Konsole, die mit Ihrem Fernseher verbunden ist, immer ein völlig anderes Erlebnis als das Spielen auf dem PC, hauptsächlich aufgrund der einzigartigen Steuerungen. Schließlich ermöglichten zusätzliche Treiber und Plugins die Verwendung von Konsolen-Gamepads mit Desktop-Spielen — entweder nativen Spielen oder solchen, die im Browser laufen. Jetzt haben wir die [Gamepad-API](/de/docs/Web/API/Gamepad_API), die uns die Möglichkeit gibt, browserbasierte Spiele mit Gamepad-Controllern ohne Plugins zu spielen. Die Gamepad-API erreicht dies, indem sie eine Schnittstelle bereitstellt, die Tastendrücke und Achsenänderungen exponiert, die in JavaScript-Code zum Handling der Eingabe verwendet werden können. Dies sind gute Zeiten für Browser-Gaming.

## Welche Gamepads sind am besten geeignet?

Die derzeit beliebtesten Gamepads sind die der Xbox 360, Xbox One, PS3 und PS4 — sie wurden intensiv getestet und funktionieren gut mit der Implementierung der Gamepad-API in Browsern unter Windows und macOS.

Es gibt auch eine Reihe anderer Geräte mit unterschiedlichen Tastenlayouts, die mehr oder weniger über Browserimplementierungen hinweg funktionieren. Der in diesem Artikel besprochene Code wurde mit einigen Gamepads getestet, aber die bevorzugte Konfiguration des Autors ist ein kabelloser Xbox 360-Controller und der Firefox-Browser unter macOS.

## Fallstudie: Hungry Fridge

Der [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/)-Wettbewerb fand im November 2013 statt und [Enclave Games](https://enclavegames.com/) entschied sich zur Teilnahme. Das Thema des Wettbewerbs war "Veränderung", also reichten sie ein Spiel ein, bei dem Sie den Hungry Fridge füttern müssen, indem Sie gesundes Essen (Äpfel, Karotten, Salate) antippen und das "schlechte" Essen (Bier, Burger, Pizza) vermeiden. Ein Countdown wechselt alle paar Sekunden die Art von Lebensmitteln, die der Kühlschrank essen möchte, daher müssen Sie vorsichtig sein und schnell handeln.

Die zweite, versteckte Implementierung der "Veränderung" ist die Fähigkeit, den statischen Kühlschrank in eine vollwertige bewegliche, schießende und essende Maschine zu verändern. Wenn Sie den Controller anschließen, ändert sich das Spiel erheblich (Hungry Fridge wird zum Super Turbo Hungry Fridge) und Sie können den gepanzerten Kühlschrank mithilfe der Gamepad-API steuern. Sie müssen das Essen abschießen, aber auch hier müssen Sie die Art des Essens finden, das der Kühlschrank jeweils essen möchte, sonst verlieren Sie Energie.

Das Spiel verkörpert zwei völlig unterschiedliche Arten von "Veränderung" — gutes Essen vs. schlechtes Essen und mobil vs. Desktop.

## Demo

Die Vollversion des Hungry Fridge-Spiels wurde zuerst erstellt, und dann wurde zur Demonstration der Gamepad-API in Aktion und zur Darstellung des JavaScript-Quellcodes eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) erstellt. Sie ist Teil des [Gamepad API Content Kits](https://end3r.github.io/Gamepad-API-Content-Kit/) auf GitHub, wo Sie tief in den Code eintauchen und genau studieren können, wie er funktioniert.

Der unten erklärte Code stammt aus der Vollversion des Hungry Fridge-Spiels, ist jedoch fast identisch mit dem der Demo — der einzige Unterschied ist, dass die Vollversion die Variable `turbo` verwendet, um zu entscheiden, ob das Spiel im Super-Turbo-Modus gestartet wird. Es funktioniert unabhängig und könnte auch aktiviert werden, wenn das Gamepad nicht verbunden ist.

> [!NOTE]
> Easter Egg: Es gibt eine versteckte Option, Super Turbo Hungry Fridge auf dem Desktop zu starten, ohne ein Gamepad verbunden zu haben — klicken Sie auf das Gamepad-Symbol in der oberen rechten Ecke des Bildschirms. Es startet das Spiel im Super-Turbo-Modus und Sie können den Kühlschrank mit der Tastatur steuern: A und D zum Drehen des Turms nach links und rechts, W zum Schießen und Pfeiltasten zur Bewegung.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad-API verwendet werden sollten — `gamepadconnected` und `gamepaddisconnected`. Ersteres wird ausgelöst, wenn der Browser die Verbindung eines neuen Gamepads erkennt, während letzteres ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch durch den Benutzer oder aufgrund von Inaktivität). In der Demo wird das `gamepadAPI`-Objekt verwendet, um alles, was mit der API zu tun hat, zu speichern:

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

```js
buttons: [
  'DPad-Up','DPad-Down','DPad-Left','DPad-Right',
  'Start','Back','Axis-Left','Axis-Right',
  'LB','RB','Power','A','B','X','Y',
],
```

Dies kann für andere Typen von Gamepads wie den PS3-Controller (oder einen No-Name-Controller) unterschiedlich sein, daher müssen Sie vorsichtig sein und nicht einfach annehmen, dass die erwartete Taste diejenige sein wird, die Sie tatsächlich erhalten. Als nächstes richten wir zwei Ereignis-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinien müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Wenn die API ohne jegliche Interaktion des Benutzers funktionieren würde, könnte sie verwendet werden, um den Benutzer unbemerkt zu identifizieren.

Beide Funktionen sind recht einfach:

```js
connect(evt) {
  gamepadAPI.controller = evt.gamepad;
  gamepadAPI.turbo = true;
  console.log('Gamepad connected.');
},
```

Die `connect()`-Funktion nimmt das Ereignis als Parameter und weist das `gamepad`-Objekt der Variable `gamepadAPI.controller` zu. Wir verwenden nur ein Gamepad für dieses Spiel, daher handelt es sich um ein einzelnes Objekt anstelle eines Arrays von Gamepads. Wir setzen dann die `turbo`-Eigenschaft auf `true`. (Wir könnten den booleschen Wert `gamepad.connected` zu diesem Zweck verwenden, aber wir möchten eine separate Variable zum Aktivieren des Turbo-Modus haben, ohne ein Gamepad anschließen zu müssen, aus den oben genannten Gründen.)

```js
disconnect(evt) {
  gamepadAPI.turbo = false;
  delete gamepadAPI.controller;
  console.log('Gamepad disconnected.');
},
```

Die `disconnect`-Funktion setzt die `gamepad.turbo`-Eigenschaft auf `false` und entfernt die Variable, die das Gamepad-Objekt enthält.

### Gamepad-Objekt

Es gibt viele nützliche Informationen im `gamepad`-Objekt, wobei die Zustände von Tasten und Achsen die wichtigsten sind:

- `id`: Ein String, der Informationen über den Controller enthält.
- `index`: Eine eindeutige Kennung für das verbundene Gerät.
- `connected`: Eine boolesche Variable, `true`, wenn das Gerät verbunden ist.
- `mapping`: Der Layouttyp der Tasten; `standard` ist derzeit die einzige verfügbare Option.
- `axes`: Der Zustand jeder Achse, dargestellt durch ein Array von Gleitkommawerten.
- `buttons`: Der Zustand jeder Taste, dargestellt durch ein Array von `GamepadButton`-Objekten, die die Eigenschaften `pressed` und `value` enthalten.

Die `index`-Variable ist nützlich, wenn wir mehr als einen Controller anschließen und sie identifizieren wollen, um entsprechend zu handeln — zum Beispiel, wenn wir ein Zwei-Spieler-Spiel haben, das zwei verbundene Geräte erfordert.

### Abfragen des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es zwei weitere Methoden im `gamepadAPI`-Objekt: `update()` und `buttonPressed()`. `update()` wird in jedem Frame innerhalb der Spiell Schleife ausgeführt, um den aktuellen Status des Gamepad-Objekts regelmäßig zu aktualisieren:

```js
update() {
  // Cache der Tasten leeren
  gamepadAPI.buttonsCache = [];

  // Verschieben Sie den Status der Tasten aus dem vorherigen Frame in den Cache
  for (let k = 0; k < gamepadAPI.buttonsStatus.length; k++) {
    gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
  }

  // Status der Tasten leeren
  gamepadAPI.buttonsStatus = [];

  // Das Gamepad-Objekt abrufen
  const c = gamepadAPI.controller || {};

  // Durch Tasten schleifen und die gedrückten in das Array schieben
  const pressed = [];
  if (c.buttons) {
    for (let b = 0; b < c.buttons.length; b++) {
      if (c.buttons[b].pressed) {
        pressed.push(gamepadAPI.buttons[b]);
      }
    }
  }

  // Durch Achsen schleifen und ihre Werte in das Array schieben
  const axes = [];
  if (c.axes) {
    for (let a = 0; a < c.axes.length; a++) {
      axes.push(c.axes[a].toFixed(2));
    }
  }

  // Erhaltene Werte zuweisen
  gamepadAPI.axesStatus = axes;
  gamepadAPI.buttonsStatus = pressed;

  // Tasten zu Debugging-Zwecken zurückgeben
  return pressed;
},
```

In jedem Frame speichert `update()` die während des vorherigen Frames gedrückten Tasten in das `buttonsCache`-Array und nimmt neue aus dem `gamepadAPI.controller`-Objekt. Dann wird durch Tasten und Achsen geschleift, um deren aktuelle Zustände und Werte zu erhalten.

### Erkennen von Tastenanschlägen

Die `buttonPressed()`-Methode wird ebenfalls in der Hauptspiell Schleife platziert, um auf Tastenanschläge zu achten. Sie nimmt zwei Parameter — die Taste, die wir überwachen wollen, und die (optionale) Möglichkeit, dem Spiel mitzuteilen, dass das Halten der Taste akzeptiert wird. Ohne das müssten Sie die Taste loslassen und erneut drücken, um die gewünschte Wirkung zu erzielen.

```js
buttonPressed(button, hold) {
  let newPress = false;

  // Durch gedrückte Tasten schleifen
  for (let i = 0; i < gamepadAPI.buttonsStatus.length; i++) {
    // Wenn wir die gewünschte Taste gefunden haben
    if (gamepadAPI.buttonsStatus[i] === button) {
      // Setze die boolesche Variable auf true
      newPress = true;

      // Wenn wir die Einzelpressung prüfen wollen
      if (!hold) {
        // Durch die zwischengespeicherten Zustände aus dem vorherigen Frame schleifen
        for (let j = 0; j < gamepadAPI.buttonsCache.length; j++) {
          // Wenn die Taste bereits gedrückt war, neue Pressung ignorieren
          newPress = (gamepadAPI.buttonsCache[j] !== button);
        }
      }
    }
  }
  return newPress;
},
```

Es gibt zwei Arten von Aktionen, die für eine Taste in Betracht gezogen werden müssen: ein einzelner Druck und ein Halten. Die boolesche Variable `newPress` zeigt an, ob es eine neue Pressung einer Taste gibt oder nicht. Als nächstes durchlaufen wir das Array der gedrückten Tasten — wenn die gegebene Taste die gleiche ist wie die, nach der wir suchen, wird die Variable `newPress` auf `true` gesetzt. Um zu prüfen, ob es sich um eine neue Pressung handelt, damit der Spieler die Taste nicht hält, durchlaufen wir die zwischengespeicherten Zustände der Tasten aus dem vorherigen Frame der Spiell Schleife. Wenn wir sie dort finden, bedeutet das, dass die Taste gehalten wird, es gibt also keine neue Pressung. Am Ende wird die Variable `newPress` zurückgegeben. Die `buttonPressed`-Funktion wird wie folgt in der Aktualisierungsschleife des Spiels verwendet:

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

Wenn `gamepadAPI.turbo` `true` ist und die angegebenen Tasten gedrückt (oder gehalten) werden, führen wir die entsprechenden Funktionen aus, die ihnen zugeordnet sind. In diesem Fall wird durch Drücken oder Halten von `A` das Abfeuern des Geschosses ausgelöst und durch Drücken von `B` wird das Spiel pausiert.

### Achsenschwelle

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die Analogsticks können viele Werte haben — sie haben einen Float-Bereich zwischen `-1` und `1` entlang sowohl der `X`- als auch der `Y`-Achse.

Gamepads können durch längeres Inaktivsein staubig werden, was bedeutet, dass die Überprüfung auf genaue -1 oder 1 Werte problematisch sein kann. Aus diesem Grund kann es gut sein, eine Schwelle für den Wert der Achse festzulegen, um wirksam zu werden. Zum Beispiel wird sich der Kühlschrankpanzer nur nach rechts drehen, wenn der `X`-Wert größer als `0,5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Selbst wenn wir ihn versehentlich ein wenig bewegen oder der Stick nicht in seine Ausgangsposition zurückkehrt, dreht sich der Panzer nicht unerwartet.

## Aktualisierung der Spezifikation

Nach mehr als einem Jahr der Stabilität wurde im April 2015 die W3C Gamepad API-Spezifikation aktualisiert ([siehe die neueste Version](https://w3c.github.io/gamepad/)). Es hat sich nicht viel geändert, aber es ist gut zu wissen, was vor sich geht — die Aktualisierungen lauten wie folgt.

### Abrufen der Gamepads

Die {{domxref("Navigator.getGamepads()")}} Methode wurde mit [einer längeren Erklärung und einem Beispielcode](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Arrays von Gamepads `n+1` sein, wobei `n` die Anzahl der angeschlossenen Geräte ist — wenn ein Gerät angeschlossen ist und es den Index 1 hat, beträgt die Länge des Arrays 2 und es sieht folgendermaßen aus: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Standardzuordnung

Der Zuordnungstyp ist jetzt ein aufzählbares Objekt anstelle eines Strings:

```ts
enum GamepadMappingType {
  "",
  "standard",
}
```

Dieses Enum definiert die Menge der bekannten Zuordnungen für ein Gamepad. Zurzeit gibt es nur das `standard`-Layout, aber neue könnten in Zukunft auftauchen. Wenn das Layout unbekannt ist, wird es auf eine leere Zeichenfolge gesetzt.

### Ereignisse

Es gab mehr Ereignisse in der Spezifikation als nur `gamepadconnected` und `gamepaddisconnected`, aber sie wurden aus der Spezifikation entfernt, da sie als nicht sehr nützlich angesehen wurden. Die Diskussion ist noch im Gange, ob sie zurückgesetzt werden sollten und in welcher Form.

## Zusammenfassung

Die Gamepad-API ist sehr einfach zu entwickeln. Jetzt ist es einfacher denn je, ein konsolenähnliches Erlebnis in den Browser zu bringen, ohne dass Plugins erforderlich sind. Sie können die Vollversion des [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/)-Spiels direkt in Ihrem Browser spielen. Schauen Sie sich die anderen Ressourcen im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) an.
