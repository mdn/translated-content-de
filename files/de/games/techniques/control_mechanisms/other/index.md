---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{GamesSidebar}}

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Verschiedene Steuermechanismen in Ihrem Spiel zu haben, hilft, ein breiteres Publikum zu erreichen. Die Implementierung von mobilen und Desktop-Steuerungen wird empfohlen und ist ein Muss, und Gamepad-Steuerungen bieten ein zusätzliches Erlebnis. Stellen Sie sich jedoch vor, noch einen Schritt weiter zu gehen — in diesem Artikel erkunden wir verschiedene unkonventionelle Möglichkeiten, Ihr Webspiel zu steuern, einige unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem TV-Bildschirm zu spielen, muss nicht immer über Konsolen erfolgen. Es gibt bereits eine Gamepad API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis nachahmen können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele verarbeiten, da sie einen integrierten Browser haben, der als Spieleplattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen ausgeliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Das früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem großen Fernseher zu laufen. Interessanterweise war das erste Captain Rogers-Spiel (Asteroid Belt of Sirius) für leistungsschwache, kleine, günstige Smartphones optimiert, die Firefox OS nutzen, sodass Sie den Unterschied sehen können, den drei Jahre ausmachen — Sie können die ganze Geschichte in unserem [Spielentwicklung für Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks-Beitrag lesen.

![Panasonic TV-Fernbedienungen für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels war überraschend einfach, da die vom Controller ausgelösten Ereignisse konventionelle Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert direkt nach der Installation. Die Cursortasten sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben genau die gleichen Tastencodes wie die Pfeiltasten auf der Fernbedienung. Wie erfährt man die Codes der anderen Fernbedienungstasten? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausgeben:

```js
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event.keyCode);
  },
  true,
);
```

Jede auf der Fernbedienung gedrückte Taste zeigt ihren Tastencode in der Konsole an. Sie können auch diese praktische Übersicht unten sehen, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS nutzen:

![Tastencodes der Fernbedienung für Panasonic TV.](controls-tvkeys.png)

Sie können das Bewegen zwischen Zuständen, das Neustarten eines Spiels, die Steuerung des Schiffs und das Zerstören von Objekten hinzufügen, indem Sie nach Tastendrücken prüfen:

```js
window.addEventListener(
  "keydown",
  (event) => {
    switch (event.keyCode) {
      case 8: {
        // Pause the game
        break;
      }
      case 588: {
        // Detonate bomb
        break;
      }
      // …
    }
  },
  true,
);
```

Sie können es in Aktion sehen, indem Sie [dieses Video](https://www.youtube.com/watch?v=Bh11sP0bcTY) ansehen.

## Leap Motion

Haben Sie schon einmal daran gedacht, ein Spiel nur mit Ihren Händen zu steuern? Es ist möglich mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps.

Leapmotion wird immer beliebter aufgrund der sehr guten Integration mit VR-Headsets — die Demo von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit angeschlossenem Leap Motion wurde von JavaScript-Entwicklern, die Demostände auf Konferenzen weltweit besucht haben, als eines der besten WebVR-Erlebnisse gewählt.

Neben der großartigen Eignung für virtuelle Schnittstellen, kann es auch für ein zwangloses 2D-Spielerlebnis verwendet werden. Es wäre sehr schwierig, alles nur mit den Händen zu tun, aber für das einfache Gameplay von Captain Roger's - das Steuern des Schiffs und das Schießen von Geschossen - ist es vollkommen machbar.

Um Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zuerst installieren, indem Sie die Schritte unter [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `url` hinzu, die auf [diese Datei](https://js.leapmotion.com/leap-0.6.4.min.js) zeigt, und fügen `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag hinzu, um Diagnoseinformationen auszugeben.

Wir benötigen einige Hilfsvariablen, damit unser Code funktioniert — eine für den Zweck, die Gradzahlen von Bogenmaß zu berechnen, zwei für das Halten der horizontalen und vertikalen Menge an Grad, die unsere Hand über dem Controller neigt, eine für den Schwellenwert dieser Neigung und eine für den Status des Greifens unserer Hand. Wir fügen diese Zeilen nach allen Ereignis-Listenern für Tastatur und Maus hinzu, aber vor der `draw`-Methode:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Direkt danach verwenden wir die `loop`-Methode von Leap, um die im `hand`-Variablen gehaltenen Informationen bei jedem Frame zu erhalten:

```js
Leap.loop({
  hand(hand) {
    horizontalDegree = Math.round(hand.roll() * toDegrees);
    verticalDegree = Math.round(hand.pitch() * toDegrees);
    grabStrength = hand.grabStrength;
    output.innerText = `Leap Motion:
  roll: ${horizontalDegree}°
  pitch: ${verticalDegree}°
  strength: ${grabStrength}
`;
  },
});
```

Der obige Code berechnet und weist die Werte `horizontalDegree`, `verticalDegree` und `grabStrength` zu, die wir später verwenden werden und gibt sie in HTML aus, damit wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()`-Funktion verwenden, um das Schiff zu bewegen:

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // …

  if (horizontalDegree > degreeThreshold) {
    playerX -= 5;
  } else if (horizontalDegree < -degreeThreshold) {
    playerX += 5;
  }
  if (verticalDegree > degreeThreshold) {
    playerY += 5;
  } else if (verticalDegree < -degreeThreshold) {
    playerY -= 5;
  }
  if (grabStrength === 1) {
    alert("BOOM!");
  }

  ctx.drawImage(img, playerX, playerY);
  requestAnimationFrame(draw);
}
```

Wenn der Wert von `horizontalDegree` größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, wird das Schiff bei jedem Frame um 5 Pixel nach links bewegt. Wenn der Wert unter dem negativen Wert des Schwellenwertes liegt, wird das Schiff nach rechts bewegt. Die Auf-/Ab-Bewegung funktioniert in ähnlicher Weise. Der letzte Wert ist `grabStrength`, der eine Fließkommazahl zwischen 0 und 1 ist — Erreichen wir 1 (vollständig geballte Faust), zeigen wir eine Warnmeldung an (in einem vollständigen Spiel könnte dies durch die Schießlogik ersetzt werden).

![Leap Motion Controller-Unterstützung im Spiel, mit sichtbarer Ausgabe für Roll, Pitch und Strength.](controls-leapmotion.png)

Das war’s — alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist hier bereits vorhanden. Sie können die Eigenschaften der `hand` erkunden und jedes gewünschte Verhalten direkt in Ihrem Spiel implementieren.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mit dem Doppler-Effekt](https://danielrapp.github.io/doppler/), der Handbewegungen und die Verwendung des Mikrofons kombiniert. Diesmal geht es darum, Schallwellen zu erkennen, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Doppler-Effekt als Möglichkeit, das Scrollen eines Artikels auf einem Laptop mit Handgesten zu steuern.](controls-doppler.png)

Wenn die Frequenz des zurückgeworfenen Schalls von der ursprünglichen abweicht, können wir erkennen, dass die Bewegung dieses Objekts erfolgt ist. So können wir eine Handbewegung erkennen, indem wir nur ein eingebautes Mikrofon verwenden!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) von Daniel Rapp erreicht werden — es kann so einfach sein wie die Berechnung der Differenz zwischen zwei Frequenzen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Der `diff` wäre die Differenz zwischen der Anfangsposition der Hand und der Endposition.

Dieser Ansatz bietet nicht die volle Flexibilität eines Gamepads oder sogar Leap Motions, aber es ist definitiv eine interessante, unkonventionelle Alternative. Sie können damit eine Seite freihändig scrollen oder ein Theremin spielen, aber es sollte auch ausreichen, um das Schiff auf dem Bildschirm nach oben und unten zu bewegen, wenn es richtig implementiert wird.

## MaKey MaKey

Wenn Sie völlig verrückt werden möchten, können Sie [MaKey MaKey](https://makeymakey.com/), ein Board, das alles in einen Controller verwandeln kann — es dreht sich alles darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Berührungsschnittstellen zu verwenden.

![Ein Bananenklavier mit Makey Makey steuern.](controls-banana.png)

Schauen Sie sich das [Bananenklavier-Video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie den [Schnellstart-Leitfaden](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle benötigten Informationen.

Es gibt sogar eine [Cylon.js-unterstützte Makey Button Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), inspiriert von der MaKey MaKey-Platine, damit Sie das beliebte Cylon-Roboterrahmenwerk für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Verbinden der Platinen und deren Verwendung kann folgendermaßen aussehen:

```js
const Cylon = require("cylon");
Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "/dev/ttyACM0" },
  },
  devices: {
    makey: { driver: "makey-button", pin: 2 },
  },
  work(my) {
    my.makey.on("push", () => {
      console.log("Button pushed!");
    });
  },
}).start();
```

Wie die Beschreibung sagt: Dieser GPIO-Treiber ermöglicht es Ihnen, einen 10 MOhm Widerstand an einen digitalen Pin an Ihrem Arduino oder Raspberry Pi anzuschließen, um Ihre Roboter mit Bananen, Ton oder zeichnbaren Schaltkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen haben die Experimente gefallen — wenn Sie andere haben, von denen Sie denken, dass sie andere interessieren könnten, zögern Sie nicht, hier Details hinzuzufügen.

Und denken Sie daran: Haben Sie Spaß beim Spiele entwickeln!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
