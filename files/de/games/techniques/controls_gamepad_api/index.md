---
title: Implementierung von Steuerungen mit der Gamepad-API
short-title: Verwendung der Gamepad-API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{GamesSidebar}}

Dieser Artikel untersucht die Implementierung eines effektiven, browserübergreifenden Steuerungssystems für Webspiele unter Verwendung der Gamepad-API, mit der Sie Ihre Webspiele mit Konsolenspiel-Controllern steuern können. Er enthält eine Fallstudie über das Spiel Hungry Fridge, erstellt von [Enclave Games](https://enclavegames.com/).

## Steuerungen für Webspiele

Historisch gesehen war das Spielen von Konsolenspielen auf Ihrem Fernseher immer eine völlig andere Erfahrung als das Spielen auf dem PC, hauptsächlich wegen der einzigartigen Steuerungen. Schließlich ermöglichten zusätzliche Treiber und Plugins die Verwendung von Konsolenspiel-Controllern mit Desktop-Spielen — entweder mit nativen Spielen oder solchen, die im Browser laufen. Jetzt haben wir die [Gamepad-API](/de/docs/Web/API/Gamepad_API), die es uns ermöglicht, browserbasierte Spiele mit Gamepad-Controllern ohne irgendwelche Plugins zu spielen. Die Gamepad-API erreicht dies, indem sie eine Schnittstelle bereitstellt, die Tastendrücke und Achsenänderungen exponiert, die in JavaScript-Code verwendet werden können, um die Eingaben zu handhaben. Dies sind gute Zeiten für Browser-Gaming.

## Welche Gamepads sind am besten?

Die momentan beliebtesten Gamepads sind die der Xbox 360, Xbox One, PS3 und PS4 — sie wurden umfangreich getestet und funktionieren gut mit der Implementierung der Gamepad-API in Browsern unter Windows und macOS.

Es gibt auch eine Reihe anderer Geräte mit verschiedenen Tastenlayouts, die mehr oder weniger über Browser-Implementierungen hinweg funktionieren. Der im Artikel besprochene Code wurde mit einigen Gamepads getestet, aber die Lieblingskonfiguration des Autors ist ein kabelloser Xbox 360-Controller und der Firefox-Browser auf macOS.

## Fallstudie: Hungry Fridge

Der [GitHub Game Off II](https://github.blog/open-source/gaming/github-game-off-ii/)-Wettbewerb fand im November 2013 statt und [Enclave Games](https://enclavegames.com/) entschied sich zur Teilnahme. Das Thema des Wettbewerbs war "Wechsel", daher reichten sie ein Spiel ein, bei dem Sie den Hungry Fridge füttern müssen, indem Sie das gesunde Essen (Äpfel, Karotten, Salatköpfe) antippen und das "schlechte" Essen (Bier, Burger, Pizza) vermeiden. Ein Countdown ändert alle paar Sekunden die Art des Essens, das der Fridge essen möchte, daher müssen Sie vorsichtig sein und schnell handeln.

Die zweite, verborgene Implementierung des "Wechsels" ist die Fähigkeit, den statischen Fridge in eine vollständige, sich bewegende, schießende und essende Maschine zu verwandeln. Wenn Sie den Controller verbinden, ändert sich das Spiel erheblich (Hungry Fridge wird zum Super Turbo Hungry Fridge) und Sie können den gepanzerten Fridge mithilfe der Gamepad-API steuern. Sie müssen das Essen abschießen, aber Sie müssen auch herausfinden, welche Art von Essen der Fridge in jedem Moment essen möchte, sonst verlieren Sie Energie.

Das Spiel umfasst zwei völlig unterschiedliche Arten von "Wechsel" — gutes Essen vs. schlechtes Essen und mobil vs. Desktop.

## Demo

Die vollständige Version des Hungry Fridge-Spiels wurde zuerst erstellt, und um die Gamepad-API in Aktion zu zeigen und den JavaScript-Quellcode zu präsentieren, wurde eine [einfache Demo](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html) erstellt. Sie ist Teil des [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) auf GitHub, wo Sie tief in den Code eintauchen und genau studieren können, wie es funktioniert.

Der unten erklärte Code stammt aus der Vollversion des Hungry Fridge-Spiels, ist aber fast identisch mit dem der Demo — der einzige Unterschied besteht darin, dass die Vollversion die Variable `turbo` verwendet, um zu entscheiden, ob das Spiel im Super Turbo-Modus gestartet wird. Es funktioniert unabhängig, sodass es auch eingeschaltet werden könnte, wenn kein Gamepad angeschlossen ist.

> [!NOTE]
> Osterzeit: Es gibt eine versteckte Option, den Super Turbo Hungry Fridge auf dem Desktop zu starten, ohne ein Gamepad verbunden zu haben — klicken Sie auf das Gamepad-Symbol in der oberen rechten Ecke des Bildschirms. Es wird das Spiel im Super Turbo-Modus starten und Sie können den Fridge mit der Tastatur steuern: A und D zum Drehen des Turms nach links und rechts, W zum Schießen und Pfeiltasten zur Bewegung.

## Implementierung

Es gibt zwei wichtige Ereignisse, die zusammen mit der Gamepad-API verwendet werden müssen — `gamepadconnected` und `gamepaddisconnected`. Das erste wird ausgelöst, wenn der Browser die Verbindung eines neuen Gamepads erkennt, während das zweite ausgelöst wird, wenn ein Gamepad getrennt wird (entweder physisch durch den Benutzer oder aufgrund von Inaktivität). In der Demo wird das `gamepadAPI`-Objekt verwendet, um alles zu speichern, was mit der API zu tun hat:

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

Das `buttons`-Array enthält die Tastenbelegung des Xbox 360-Controllers:

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

Dies kann sich für andere Arten von Gamepads wie den PS3-Controller (oder ein No-Name-Generikum) unterscheiden, sodass Sie vorsichtig sein müssen und nicht einfach annehmen sollten, dass die Taste, die Sie erwarten, dieselbe Taste ist, die Sie tatsächlich erhalten. Als Nächstes richten wir zwei Ereignis-Listener ein, um die Daten zu erhalten:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Aufgrund der Sicherheitsrichtlinien müssen Sie zuerst mit dem Controller interagieren, während die Seite sichtbar ist, damit das Ereignis ausgelöst wird. Wenn die API ohne jegliche Interaktion des Benutzers funktionieren würde, könnte sie verwendet werden, um den Benutzer ohne dessen Wissen zu identifizieren.

Beide Funktionen sind recht einfach:

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

Die Funktion `connect()` nimmt das Ereignis als Parameter und weist das `gamepad`-Objekt der Variablen `gamepadAPI.controller` zu. Wir verwenden nur ein Gamepad für dieses Spiel, sodass es sich um ein Einzelobjekt statt eines Arrays von Gamepads handelt. Dann setzen wir die `turbo`-Eigenschaft auf `true`. (Wir könnten dafür das `gamepad.connected`-Boolean verwenden, wollten aber eine separate Variable für das Einschalten des Turbo-Modus ohne verbundenes Gamepad haben, aus den oben erklärten Gründen.)

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

Die Funktion `disconnect()` setzt die Eigenschaft `gamepad.turbo` auf `false` und entfernt die Variable, die das Gamepad-Objekt enthält.

### Gamepad-Objekt

Im `gamepad`-Objekt sind viele nützliche Informationen enthalten, wobei die Zustände von Tasten und Achsen die wichtigsten sind:

- `id`: Ein String, der Informationen über den Controller enthält.
- `index`: Eine eindeutige Kennung für das angeschlossene Gerät.
- `connected`: Eine boolesche Variable, `true`, wenn das Gerät angeschlossen ist.
- `mapping`: Der Layouttyp der Tasten; `standard` ist bisher die einzige verfügbare Option.
- `axes`: Der Zustand jeder Achse, dargestellt durch ein Array von Fließkommawerten.
- `buttons`: Der Zustand jedes Knopfes, dargestellt durch ein Array von `GamepadButton`-Objekten, die `pressed`- und `value`-Eigenschaften enthalten.

Die `index`-Variable ist nützlich, wenn wir mehr als einen Controller anschließen und sie identifizieren möchten, um entsprechend zu handeln — beispielsweise, wenn wir ein Zwei-Spieler-Spiel haben, das zwei angeschlossene Geräte erfordert.

### Abfragen des Gamepad-Objekts

Neben `connect()` und `disconnect()` gibt es noch zwei weitere Methoden im `gamepadAPI`-Objekt: `update()` und `buttonPressed()`. `update()` wird in jedem Frame innerhalb der Spiele-Schleife ausgeführt, um regelmäßig den aktuellen Status des Gamepad-Objekts zu aktualisieren:

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

In jedem Frame speichert `update()` die in den vorherigen Frames gedrückten Tasten im `buttonsCache`-Array und nimmt frische aus dem `gamepadAPI.controller`-Objekt. Dann durchläuft es Tasten und Achsen, um deren aktuelle Zustände und Werte zu erhalten.

### Erkennen von Tastendrücken

Die `buttonPressed()`-Methode ist ebenfalls in der Hauptspiele-Schleife platziert, um auf Tastendrücke zu hören. Sie nimmt zwei Parameter entgegen — die Taste, auf die wir hören möchten, und die (optionale) Möglichkeit, dem Spiel mitzuteilen, dass das Halten der Taste akzeptiert wird. Ohne das müssten Sie die Taste loslassen und erneut drücken, um die gewünschte Wirkung zu erzielen.

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

Es gibt zwei Aktionsarten, die für eine Taste berücksichtigt werden müssen: ein einzelner Druck und ein Halten. Die boolesche Variable `newPress` gibt an, ob es einen neuen Tastendruck gibt oder nicht. Als erstes prüfen wir das Array der gedrückten Tasten — wenn die gegebene Taste hier enthalten ist, wird die Variable `newPress` auf `true` gesetzt. Um zu überprüfen, ob der Druck ein neuer ist, damit der Spieler die Taste nicht nur hält, prüfen wir die zwischengespeicherten Zustände der Tasten aus dem vorherigen Frame der Spieleschleife. Wenn wir es dort finden, bedeutet das, dass die Taste gehalten wird, sodass es keinen neuen Druck gibt. Am Ende wird die Variable `newPress` zurückgegeben. Die `buttonPressed`-Funktion wird in der Aktualisierungsschleife des Spiels wie folgt verwendet:

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

Wenn `gamepadAPI.turbo` `true` ist und die gegebenen Tasten gedrückt (oder gehalten) werden, führen wir die entsprechenden, ihnen zugewiesenen Funktionen aus. In diesem Fall wird durch Drücken oder Halten von `A` die Kugel abgefeuert und durch Drücken von `B` das Spiel pausiert.

### Achsenschwelle

Die Tasten haben nur zwei Zustände: `0` oder `1`, aber die analogen Sticks können viele Werte haben — sie haben einen Fließkomma-Bereich zwischen `-1` und `1` entlang sowohl der `X`- als auch der `Y`-Achse.

Gamepads können sich durch Inaktivität ansammelnden Staub einfangen, was bedeutet, dass die Überprüfung auf genaue -1- oder 1-Werte ein Problem darstellen kann. Aus diesem Grund kann es sinnvoll sein, eine Schwelle für den Achsenwert festzulegen, damit er wirksam wird. Zum Beispiel wird der Fridge-Panzer nur dann nach rechts drehen, wenn der `X`-Wert größer als `0,5` ist:

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Selbst wenn wir ihn ein wenig aus Versehen bewegen oder der Stick nicht in seine ursprüngliche Position zurückkehrt, wird sich der Panzer nicht unerwartet drehen.

## Aktualisierung der Spezifikation

Nach mehr als einem Jahr Stabilität wurde im April 2015 die W3C Gamepad API-Spezifikation aktualisiert ([siehe die neueste Version](https://w3c.github.io/gamepad/).) Sie hat sich nicht wesentlich geändert, aber es ist gut zu wissen, was passiert — die Updates sind wie folgt.

### Spielpads abrufen

Die Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) wurde mit [einer längeren Erklärung und einem Beispiel-Code-Stück](https://w3c.github.io/gamepad/#navigator-interface-extension) aktualisiert. Jetzt muss die Länge des Arrays der Gamepads `n+1` betragen, wobei `n` die Anzahl der angeschlossenen Geräte ist — wenn ein Gerät angeschlossen ist und es den Index 1 hat, beträgt die Länge des Arrays 2 und sieht so aus: `[null, [object Gamepad]]`. Wenn das Gerät getrennt oder nicht verfügbar ist, wird der Wert dafür auf `null` gesetzt.

### Standardmäßig zuordnen

Der Zuordnungstyp ist jetzt ein aufzählbares Objekt statt eines Strings:

```webidl
enum GamepadMappingType {
  "",
  "standard",
}
```

Diese Enumeration definiert die Menge der bekannten Zuordnungen für ein Gamepad. Bisher gibt es nur das `standard`-Layout, aber in Zukunft könnten neue hinzukommen. Wenn das Layout unbekannt ist, wird es auf einen leeren String gesetzt.

### Ereignisse

Es standen mehr Ereignisse in der Spezifikation zur Verfügung als nur `gamepadconnected` und `gamepaddisconnected`, aber sie wurden aus der Spezifikation entfernt, da sie als nicht sehr nützlich angesehen wurden. Die Diskussion darüber, ob sie zurückgeführt werden und in welcher Form, ist noch im Gange.

## Zusammenfassung

Die Gamepad-API ist sehr einfach zu entwickeln. Jetzt ist es einfacher denn je, ein konsolenähnliches Erlebnis in den Browser zu bringen, ohne dass Plugins benötigt werden. Sie können die Vollversion des [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/) Spiels direkt in Ihrem Browser spielen. Schauen Sie sich die anderen Ressourcen im [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) an.
