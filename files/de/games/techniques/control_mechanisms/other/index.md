---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Verschiedene Steuerungsmechanismen in Ihrem Spiel helfen dabei, ein breiteres Publikum zu erreichen. Die Implementierung von mobilen und Desktop-Steuerungen wird empfohlen, und Gamepad-Steuerungen bieten ein zusätzliches Erlebnis. Stellen Sie sich jedoch vor, noch einen Schritt weiter zu gehen – in diesem Artikel werden wir verschiedene unkonventionelle Möglichkeiten erkunden, um Ihr Webspiel zu steuern, einige davon sind unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem TV-Bildschirm zu spielen, muss nicht immer über Konsolen erfolgen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis nachahmen können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele ausführen, weil sie einen integrierten Browser haben, der als Spieleplattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen geliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Die früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde so angepasst, dass sie auf einem riesigen TV funktioniert. Interessanterweise wurde das erste Captain Rogers-Spiel (Asteroid Belt of Sirius) für günstige, kleine, schwache Smartphones mit Firefox OS optimiert, sodass Sie erkennen können, welchen Unterschied drei Jahre machen können – die ganze Geschichte können Sie in unserem [einem Hacks-Post über das Erstellen von Spielen für Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) lesen.

![Panasonic TV-Fernbedienungssteuerungen für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels erwies sich als überraschend einfach, da die von der Steuerung ausgelösten Ereignisse konventionelle Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert sofort. Die Cursortasten sind die vier Pfeiltasten auf der Tastatur, und diese haben genau die gleichen Tasten-Codes wie die Pfeiltasten auf der Fernbedienung. Woher wissen Sie die Codes für die anderen Fernbedienungstasten? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausdrucken:

```js
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event.keyCode);
  },
  true,
);
```

Jede auf der Fernbedienung gedrückte Taste zeigt ihren Tastencode in der Konsole an. Sie können auch dieses praktische Spickzettel unten sehen, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS ausführen:

![Tastencodes der Fernbedienung für Panasonic TV.](controls-tvkeys.png)

Sie können hinzufügen, zwischen Zuständen zu wechseln, ein neues Spiel zu starten, das Schiff zu steuern und Dinge in die Luft zu jagen, das Spiel zu pausieren und neu zu starten. Alles, was Sie tun müssen, ist, auf Tastendrücke zu überprüfen:

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

Haben Sie jemals darüber nachgedacht, ein Spiel nur mit Ihren Händen zu steuern? Es ist möglich mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Anwendungen.

Leap Motion wird immer beliebter aufgrund der sehr guten Integration mit VR-Headsets – die Vorführung von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit angefügtem Leap Motion wurde von JavaScript-Entwicklern, die Demo-Stände auf Konferenzen weltweit besuchten, als eine der besten WebVR-Erfahrungen eingestuft.

Neben der Eignung für virtuelle Schnittstellen kann es auch für eine zwanglose 2D-Spielerfahrung verwendet werden. Es wäre sehr schwierig, alles nur mit Ihren Händen zu tun, aber es ist völlig machbar für das einfache Gameplay von Captain Roger – das Schiff zu steuern und die Kugeln abzuschießen.

Um Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zuerst installieren, indem Sie den Schritten unter [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) folgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `url` hinzu, die auf [diese Datei](https://js.leapmotion.com/leap-0.6.4.min.js) verweist, und fügen `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag hinzu, um Diagnosedaten auszugeben.

Wir benötigen einige Hilfsvariablen, damit unser Code funktioniert – eine zum Berechnen der Grad aus Radians, zwei zum Halten der horizontalen und vertikalen Gradzahlen, die unsere Hand über dem Controller geneigt ist, eine für den Schwellenwert dieser Neigung und eine für den Status des Handgriffs unserer Hand. Wir fügen diese Zeilen nach allen Ereignis-Listenern für Tastatur und Maus hinzu, aber vor der `draw`-Methode:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Direkt danach verwenden wir die `loop`-Methode von Leap, um die Informationen, die in der `hand`-Variable gehalten werden, bei jedem Frame zu erhalten:

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

Der obige Code berechnet und weist die Werte `horizontalDegree`, `verticalDegree` und `grabStrength` zu, die wir später verwenden werden, und gibt sie in HTML aus, sodass wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()`-Funktion verwenden, um das Schiff zu bewegen:

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

Wenn der Wert von `horizontalDegree` größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, wird das Schiff in jedem Frame 5 Pixel nach links bewegt. Wenn sein Wert niedriger als der negative Schwellenwert ist, wird das Schiff nach rechts bewegt. Die Auf-/Ab-Bewegung funktioniert in ähnlicher Weise. Der letzte Wert ist `grabStrength`, was ein Float zwischen 0 und 1 ist – wenn er 1 erreicht (Faust vollständig geschlossen), zeigen wir vorerst einen Alarm an (in einem vollständigen Spiel könnte dies durch die Schießlogik ersetzt werden).

![Leap Motion Steuerung im Spiel mit sichtbarer Ausgabe für Neigung, Neigung und Stärke.](controls-leapmotion.png)

Das war's – alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist bereits hier. Sie können die Eigenschaften der `hand` weiter erforschen und jedes gewünschte Verhalten direkt in Ihrem Spiel implementieren.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mittels Doppler-Effekt](https://danielrapp.github.io/doppler/), der das Winken Ihrer Hand und das Benutzen des Mikrofons kombiniert. Es geht darum, Schallwellen zu erkennen, die von Objekten reflektiert werden und zum Mikrofon zurückkehren.

![Doppler-Effekt zur Steuerung des Bildlaufs eines Artikels auf einem Laptop mit einer Handbewegung.](controls-doppler.png)

Wenn die Frequenz des reflektierten Schalls von der ursprünglichen abweicht, können wir erkennen, dass die Bewegung dieses Objekts stattgefunden hat. So können wir eine Handbewegung nur mit einem eingebauten Mikrofon erkennen!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) erreicht werden, die von Daniel Rapp erstellt wurde – es kann so einfach sein wie das Berechnen der Differenz zwischen zwei Frequenzen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Der `diff` wäre die Differenz zwischen der anfänglichen Position der Hand und der finalen.

Dieser Ansatz bietet nicht die volle Flexibilität eines Gamepads oder sogar Leap Motion, aber er ist definitiv eine interessante, unkonventionelle Alternative. Sie können ihn verwenden, um eine Seite freihändig zu scrollen oder ein Theremin zu spielen, aber es sollte auch ausreichen, um das Schiff auf dem Bildschirm nach oben und unten zu bewegen, wenn er richtig implementiert wird.

## Makey Makey

Wenn Sie völlig verrückt werden möchten, können Sie [Makey Makey](https://makeymakey.com/) verwenden, ein Board, das alles in einen Controller verwandeln kann – es geht darum, reale, leitende Objekte mit einem Computer zu verbinden und sie als Berührungsschnittstellen zu verwenden.

![Ein Bananenklavier steuern mit Makey Makey.](controls-banana.png)

Sehen Sie sich das [Bananenklavier-Video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie unbedingt den [Schnellstartleitfaden](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle erforderlichen Informationen.

Es gibt sogar eine vom Makey Makey-Board inspirierte [Cylon.js-unterstützte Makey-Button-Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), sodass Sie das beliebte Cylon-Roboterframework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Die Boards zu verbinden und zu verwenden könnte so aussehen:

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

Wie in der Beschreibung steht: Dieser GPIO-Treiber ermöglicht es, einen 10 MOhm-Widerstand an einen digitalen Pin auf Ihrem Arduino oder Raspberry Pi anzuschließen, um Ihre Roboter mit Bananen, Ton oder zeichnbarer Schaltung zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen haben die Experimente gefallen – wenn Sie andere kennen, die andere Leute interessieren könnten, fügen Sie hier gerne Details dazu hinzu.

Und denken Sie daran: Viel Spaß beim Spiele machen!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
