---
title: Implementierung von Steuerungen mit der Gamepad-API
short-title: Verwendung der Gamepad-API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

Dieser Artikel befasst sich mit der Implementierung eines effektiven, plattformübergreifenden Steuerungssystems für Webspiele unter Verwendung der Gamepad-API, das Ihnen ermöglicht, Webspiele mit Konsolenspielen steuerungen zu steuern. Er bietet eine Fallstudie über das Spiel Hungry Fridge, erstellt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Webspiele

Historisch betrachtet war das Spielen auf einer Konsole, die mit Ihrem Fernseher verbunden war, immer ein völlig anderes Erlebnis als das Spielen auf dem PC, hauptsächlich wegen der einzigartigen Steuerungen. Schließlich ermöglichten zusätzliche Treiber und Plugins die Verwendung von Konsolenspielsteuerungen mit Desktopspielen - entweder nativen Spielen oder solchen, die im Browser laufen. Jetzt haben wir die [Gamepad-API](/de/docs/Web/API/Gamepad_API), die uns die Möglichkeit gibt, browserbasierte Spiele mit Gamepad-Controllern ohne Plugins zu spielen. Die Gamepad-API erreicht dies durch Bereitstellung einer Schnittstelle, die Tastenanschläge und Achsenänderungen exponiert, die innerhalb von JavaScript-Code verwendet werden können, um die Eingabe zu handhaben. Dies sind gute Zeiten für Browser-Spiele.

## Welche Gamepads sind die besten?

Die derzeit beliebtesten Gamepads sind die von Xbox 360, Xbox One, PS3 und PS4 - sie wurden intensiv getestet und funktionieren gut mit der Gamepad-API-Implementierung in Browsern unter Windows und macOS.

Es gibt auch eine Reihe anderer Geräte mit verschiedenen Tastenlayouts, die mehr oder weniger über Browserimplementierungen hinweg funktionieren. Der im Artikel diskutierte Code wurde mit einigen Gamepads getestet, aber die bevorzugte Konfiguration des Autors ist ein drahtloser Xbox 360-Controller und der Firefox-Browser auf macOS.

## Fallstudie: Hungry Fridge

Der [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/) Wettbewerb fand im November 2013 statt und [Enclave Games](https://enclavegames.com/) entschied sich zur Teilnahme. Das Thema des Wettbewerbs war "Veränderung", also reichten sie ein Spiel ein, bei dem man den Hungry Fridge füttern muss, indem man gesundes Essen (Äpfel, Karotten, Salat) antippt und das "schlechte" Essen (Bier, Burger, Pizza) vermeidet. Ein Countdown ändert regelmäßig die Art von Essen, das der Kühlschrank essen möchte, sodass Sie vorsichtig sein und schnell handeln müssen.

Die zweite, versteckte "Veränderungs" Implementierung ist die Fähigkeit, den statischen Kühlschrank in eine vollwertige bewegliche, schießende und fressende Maschine zu verwandeln. Wenn man den Controller anschließt, verändert sich das Spiel signifikant (Hungry Fridge wird zum Super Turbo Hungry Fridge) und man kann den gepanzerten Kühlschrank mit der Gamepad-API steuern. Sie müssen das Essen abschießen, aber Sie müssen auch die Art von Essen finden, die der Kühlschrank in jedem Moment essen möchte, sonst verlieren Sie Energie.

Das Spiel fasst zwei völlig unterschiedliche Arten der "Veränderung" zusammen — gutes Essen vs. schlechtes Essen und mobil vs. Desktop.

## Demo

Die Vollversion des Hungry Fridge-Spiels wurde zuerst erstellt, und um die Gamepad-API in Aktion zu zeigen und den JavaScript-Quellcode zu demonstrieren, wurde eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) erstellt. Sie ist Teil des [Gamepad API Content Kits](https://end3r.github.io/Gamepad-API-Content-Kit/) auf GitHub, wo Sie tief in den Code eintauchen und genau studieren können, wie er funktioniert.

Der unten erklärte Code stammt aus der Vollversion des Hungry Fridge-Spiels, ist aber fast identisch mit dem der Demo – der einzige Unterschied ist, dass die Vollversion die `turbo` Variable verwendet, um zu entscheiden, ob das Spiel im Super Turbo-Modus gestartet wird. Es funktioniert unabhängig, sodass es auch aktiviert werden könnte, wenn das Gamepad nicht angeschlossen ist.

> [!NOTE]
> Easter Egg-Zeit: Es gibt eine versteckte Option, den Super Turbo Hungry Fridge auf dem Desktop zu starten, ohne ein angeschlossenes Gamepad zu haben — klicken Sie auf das Gamepad-Symbol in der oberen rechten Ecke des Bildschirms. Es startet das Spiel im Super Turbo-Modus und Sie können den Kühlschrank mit der Tastatur steuern: A und D zum Drehen des Turms nach links und rechts, W zum Schießen und Pfeiltasten für die Bewegung.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad-API verwendet werden – `gamepadconnected` und `gamepaddisconnected`. Das erste wird ausgelöst, wenn der Browser die Verbindung eines neuen Gamepads erkennt, während das zweite ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch durch den Benutzer oder aufgrund von Inaktivität). In der Demo wird das `gamepadAPI` Objekt verwendet, um alles im Zusammenhang mit der API zu speichern:

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

Dies kann bei anderen Arten von Gamepads wie dem PS3-Controller (oder einem No-Name-Standardcontroller) unterschiedlich sein, also müssen Sie vorsichtig sein und dürfen nicht einfach davon ausgehen, dass die Taste, die Sie erwarten, dieselbe ist, die Sie tatsächlich erhalten. Als nächstes richten wir zwei Ereignis-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinien müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Wenn die API ohne jegliche Interaktion des Nutzers funktionieren würde, könnte sie verwendet werden, um sie ohne ihr Wissen zu identifizieren.

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

Die `connect()` Funktion nimmt das Ereignis als Parameter und weist das `gamepad` Objekt der `gamepadAPI.controller` Variable zu. Wir verwenden nur ein Gamepad für dieses Spiel, also ist es ein einzelnes Objekt anstelle eines Arrays von Gamepads. Danach setzen wir die `turbo` Eigenschaft auf `true`. (Wir könnten das `gamepad.connected` Boolean für diesen Zweck verwenden, aber wir wollten eine separate Variable haben, um den Turbo-Modus auch ohne angeschlossenes Gamepad zu aktivieren, aus den oben genannten Gründen.)

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

Die `disconnect` Funktion setzt die `gamepad.turbo` Eigenschaft auf `false` und entfernt die Variable, die das Gamepad-Objekt enthält.

### Gamepad-Objekt

Es gibt viele nützliche Informationen, die im `gamepad` Objekt enthalten sind, wobei die Zustände der Tasten und Achsen am wichtigsten sind:

- `id`: Eine Zeichenkette mit Informationen über den Controller.
- `index`: Eine eindeutige Kennung für das angeschlossene Gerät.
- `connected`: Eine boolesche Variable, `true` wenn das Gerät angeschlossen ist.
- `mapping`: Der Layout-Typ der Tasten; `standard` ist die einzige derzeit verfügbare Option.
- `axes`: Der Zustand jeder Achse, dargestellt durch ein Array von Gleitkommawerten.
- `buttons`: Der Zustand jeder Taste, dargestellt durch ein Array von `GamepadButton`-Objekten mit `pressed` und `value` Eigenschaften.

Die `index` Variable ist nützlich, wenn wir mehr als einen Controller anschließen und sie identifizieren wollen, um entsprechend zu handeln — zum Beispiel, wenn wir ein Zwei-Spieler-Spiel haben, das zwei angeschlossene Geräte erfordert.

### Abfrage des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es zwei weitere Methoden im `gamepadAPI` Objekt: `update()` und `buttonPressed()`. `update()` wird in jedem Frame innerhalb der Spielschleife ausgeführt, um den aktuellen Status des Gamepad-Objekts regelmäßig zu aktualisieren:

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

In jedem Frame speichert `update()` die in dem vorherigen Frame gedrückten Tasten im `buttonsCache` Array und nimmt neue aus dem `gamepadAPI.controller` Objekt. Dann durchläuft es die Tasten und Achsen, um deren aktuelle Zustände und Werte zu erhalten.

### Erkennen von Tastendrücken

Die `buttonPressed()` Methode ist auch in der Hauptspielschleife platziert, um auf Tastendrücke zu horchen. Sie nimmt zwei Parameter — die Taste, auf die wir hören wollen, und die (optionale) Methode, um dem Spiel mitzuteilen, dass das Halten der Taste akzeptiert wird. Ohne das müssten Sie die Taste loslassen und erneut drücken, um die gewünschte Wirkung zu erzielen.

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

Es gibt zwei Arten von Aktionen, die für eine Taste in Betracht gezogen werden müssen: ein einzelner Druck und ein Halten. Die `newPress`-Boolesche Variable zeigt an, ob es einen neuen Druck der Taste gibt oder nicht. Als nächstes überprüfen wir das Array der gedrückten Tasten — wenn die gegebene Taste hier vorhanden ist, wird die `newPress`-Variable auf `true` gesetzt. Um zu überprüfen, ob der Druck neu ist, damit der Spieler die Taste nicht gedrückt hält, überprüfen wir die zwischengespeicherten Zustände der Tasten aus dem vorherigen Frame der Spielschnung. Finden wir sie dort, bedeutet das, dass die Taste gehalten wird, also gibt es keinen neuen Druck. Am Ende wird die `newPress`-Variable zurückgegeben. Die `buttonPressed` Funktion wird in der Update-Schleife des Spiels wie folgt verwendet:

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

Wenn `gamepadAPI.turbo` `true` ist und die angegebenen Tasten gedrückt (oder gehalten) werden, führen wir die ihnen zugehörigen Funktionen aus. In diesem Fall wird durch das Drücken oder Halten von `A` die Kugel abgefeuert und durch Drücken von `B` das Spiel pausiert.

### Achsenschwellenwert

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die Analogsticks können viele Werte haben — sie haben einen Fließkomma-Bereich zwischen `-1` und `1` entlang beider `X` und `Y` Achsen.

Gamepads können durch Herumliegen inaktiv staubig werden, was bedeutet, dass das Überprüfen auf exakte -1 oder 1 Werte problematisch sein kann. Aus diesem Grund kann es gut sein, einen Schwellenwert für den Wert der Achse festzulegen, um Wirkung zu erzielen. Zum Beispiel wird der Kühlschrankpanzer nur nach rechts drehen, wenn der `X`-Wert größer als `0.5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Selbst wenn wir ihn versehentlich ein wenig bewegen oder der Stick nicht in seine ursprüngliche Position zurückkehrt, wird der Panzer nicht unerwartet drehen.

## Spezifikationsupdate

Nach mehr als einem Jahr der Stabilität wurde im April 2015 die W3C Gamepad API Spezifikation aktualisiert ([siehe die aktuellste](https://w3c.github.io/gamepad/)). Es hat sich nicht viel geändert, aber es ist gut zu wissen, was passiert — die Updates sind wie folgt.

### Abrufen der Gamepads

Die [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) Methode wurde mit [einer längeren Erklärung und einem Beispielcode](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Array of Gamepads `n+1` sein, wobei `n` die Anzahl der verbundenen Geräte ist — wenn ein Gerät angeschlossen ist und es den Index von 1 hat, beträgt die Länge des Arrays 2 und es wird so aussehen: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Standard-Mapping

Der Mapping-Typ ist jetzt ein aufzählbarer Objekt anstelle eines Strings:

```webidl
enum GamepadMappingType {
  "",
  "standard",
}
```

Dieses Enum definiert die Menge der bekannten Mappings für ein Gamepad. Derzeit gibt es nur das `standard` Layout, aber neue könnten in Zukunft erscheinen. Wenn das Layout unbekannt ist, wird es auf einen leeren String gesetzt.

### Ereignisse

Es gab mehr Ereignisse in der Spezifikation als nur `gamepadconnected` und `gamepaddisconnected`, aber sie wurden aus der Spezifikation entfernt, da sie als nicht sehr nützlich erachtet wurden. Die Diskussion geht weiter, ob sie zurückgesetzt werden sollten und in welcher Form.

## Zusammenfassung

Die Gamepad-API ermöglicht es, ein konsolenähnliches Erlebnis direkt in den Browser zu bringen, ohne dass Plugins erforderlich sind. Sie können die Vollversion des [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/) Spiels direkt in Ihrem Browser spielen. Schauen Sie sich die anderen Ressourcen im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) an.
