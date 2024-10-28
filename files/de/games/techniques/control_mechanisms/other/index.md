---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GamesSidebar}}

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Verschiedene Steuerungsmechanismen in Ihrem Spiel zu haben, hilft, ein breiteres Publikum zu erreichen. Die Implementierung von Mobil- und Desktop-Steuerungen ist ein Muss, und Gamepad-Steuerungen bieten ein zusätzliches Erlebnis. Aber stellen Sie sich vor, noch weiter zu gehen – in diesem Artikel werden wir verschiedene unkonventionelle Möglichkeiten erkunden, Ihr Webspiel zu steuern, einige unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem Fernsehbildschirm zu spielen, muss nicht immer über Konsolen erfolgen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis imitieren können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele verarbeiten, da sie über einen integrierten Browser verfügen, der als Spieleplattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen geliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Das früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem großen TV zu funktionieren. Interessanterweise wurde das erste Captain Rogers-Spiel (Asteroid Belt of Sirius) für kostengünstige, kleine Bildschirme optimiert, preiswerte Smartphones mit Firefox OS betrieben, sodass Sie die Unterschiede sehen können, die drei Jahre ausmachen können – die ganze Geschichte können Sie in unserem Hacks-Beitrag [Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) lesen.

![Panasonic-Fernbedienung für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels erwies sich als überraschend einfach, da die von der Fernbedienung ausgelösten Ereignisse herkömmliche Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert direkt aus der Box. Die Cursor sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben genau die gleichen Tastencodes wie die Pfeiltasten auf der Fernbedienung. Wie kennen Sie die Codes für die anderen Fernbedienungstasten? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausgeben:

```js
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event.keyCode);
  },
  true,
);
```

Jede auf der Fernbedienung gedrückte Taste zeigt ihren Tastencode in der Konsole an. Sie können auch dieses praktische Spickzettel unten ansehen, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS ausführen:

![Fernbedienungs-Tastencodes für Panasonic TV.](controls-tvkeys.png)

Sie können das Bewegen zwischen Zuständen, das Starten eines neuen Spiels, das Steuern des Schiffs und das Zerstören von Dingen, das Pausieren und Neustarten des Spiels hinzufügen. Alles, was benötigt wird, ist das Prüfen auf Tastendrücke:

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

Sie können es in Aktion sehen, indem Sie sich [dieses Video](https://www.youtube.com/watch?v=Bh11sP0bcTY) ansehen.

## Leap Motion

Haben Sie jemals daran gedacht, ein Spiel nur mit Ihren Händen zu steuern? Das ist mit [Leap Motion](https://www.ultraleap.com/) möglich, einem immersiven Controller für Spiele und Apps.

Leap Motion wird aufgrund der sehr guten Integration mit VR-Headsets immer beliebter – das Demo von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit angehängtem Leap Motion wurde von JavaScript-Entwicklern, die Demo-Stände auf Konferenzen rund um die Welt besuchten, als eine der besten WebVR-Erlebnisse bewertet.

Neben der Eignung für virtuelle Schnittstellen kann es auch für zwanglose 2D-Spielerfahrungen genutzt werden. Alles nur mit Ihren Händen zu machen, wäre sehr schwierig, aber für das einfache Gameplay von Captain Rogers ist es durchaus machbar – das Steuern des Schiffs und das Schießen der Kugeln.

Um Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zunächst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `URL` zu [dieser Datei](https://js.leapmotion.com/leap-0.6.4.min.js) hinzu und fügen `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag hinzu, um Diagnoseinformationen auszugeben.

Wir benötigen einige Hilfsvariablen, damit unser Code funktioniert – eine für die Berechnung der Grade aus Radianten, zwei für die horizontale und vertikale Menge an Grad, um die unsere Hand über dem Controller geneigt ist, eine für den Schwellenwert dieser Neigung und eine für den Status des Handgriff-Festigkeit. Danach fügen wir diese Zeilen nach allen Event-Listenern für Tastatur und Maus hinzu, aber vor der `draw`-Methode:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Gleich danach verwenden wir die `loop`-Methode von Leap, um die Informationen zu erhalten, die in der `hand`-Variable bei jedem Frame gehalten werden:

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

Der obige Code berechnet und weist die Werte `horizontalDegree`, `verticalDegree` und `grabStrength` zu, die wir später verwenden werden, und gibt sie im HTML aus, sodass wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()`-Funktion verwenden, um das Schiff zu bewegen:

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

Wenn der `horizontalDegree`-Wert größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, wird das Schiff bei jedem Frame 5 Pixel nach links bewegt. Wenn sein Wert niedriger als der negative Wert des Schwellenwerts ist, wird das Schiff nach rechts bewegt. Die Aufwärts-/Abwärtsbewegung funktioniert auf ähnliche Weise. Der letzte Wert ist `grabStrength`, der ein Fließkommawert zwischen 0 und 1 ist – wenn er 1 erreicht (Faust vollständig geschlossen), zeigen wir vorerst einen Alarm an (in einem vollständigen Spiel könnte dies durch die Schießlogik ersetzt werden).

![Leap Motion Controller-Unterstützung im Spiel mit sichtbarem Output für Roll, Pitch und Strength.](controls-leapmotion.png)

Das war's – alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist bereits vorhanden. Sie können die Eigenschaften der `hand` erkunden und jedes Verhalten, das Sie möchten, direkt in Ihr Spiel integrieren.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Motion sensing using the doppler effect](https://danielrapp.github.io/doppler/), der das Winken der Hand und die Verwendung des Mikrofons kombiniert. Diesmal geht es darum, Schallwellen zu erkennen, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Doppler-Effekt als Möglichkeit, das Scrollen eines Artikels auf einem Laptop mit Handgesten zu steuern.](controls-doppler.png)

Wenn die Frequenz des reflektierten Tons von der ursprünglichen abweicht, können wir feststellen, dass die Bewegung des Objekts stattgefunden hat. Auf diese Weise können wir eine Handbewegung nur mit einem eingebauten Mikrofon erkennen!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) von Daniel Rapp erreicht werden – es kann so einfach sein wie das Berechnen der Differenz zwischen zwei Frequenzen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Das `diff` wäre die Differenz zwischen der Anfangs- und Endposition der Hand.

Dieser Ansatz bietet uns nicht die volle Flexibilität der Nutzung eines Gamepads oder sogar Leap Motion, ist aber definitiv eine interessante, unkonventionelle Alternative. Sie können ihn verwenden, um eine Seite freihändig zu scrollen oder Theremin zu spielen, aber es sollte auch ausreichen, um das Schiff auf dem Bildschirm nach oben und unten zu bewegen, wenn es korrekt implementiert ist.

## Makey Makey

Wenn Sie völlig verrückt werden wollen, können Sie [Makey Makey](https://makeymakey.com/) verwenden, ein Board, das alles in einen Controller verwandeln kann – es geht darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Berührungsschnittstellen zu verwenden.

![Steuerung eines Bananenklaviers mit Makey Makey.](controls-banana.png)

Sehen Sie sich das [Video zum Bananenklavier](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und seien Sie sicher, den [Schnellstart-Leitfaden](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle benötigten Informationen zu besuchen.

Es gibt sogar eine [Cylon.js-unterstützte Makey Button-Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), inspiriert von der Makey Makey-Platine, sodass Sie das beliebte Cylon-Roboterframework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Anschließen der Boards und die Verwendung könnten so aussehen:

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

Wie in der Beschreibung steht: Dieser GPIO-Treiber erlaubt es Ihnen, einen 10 MOhm-Widerstand an einen digitalen Pin Ihres Arduino oder Raspberry Pi zu verbinden, um Ihre Roboter mit Bananen, Lehm oder zeichnungsfähigen Schaltkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen haben die Experimente gefallen – wenn Sie andere haben, die möglicherweise interessant für andere Leute sind, zögern Sie nicht, Details hier hinzuzufügen.

Und denken Sie daran: Haben Sie Spaß beim Erstellen von Spielen!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
