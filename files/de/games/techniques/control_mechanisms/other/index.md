---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Das Verwenden unterschiedlicher Steuermechanismen in Ihrem Spiel hilft dabei, ein breiteres Publikum zu erreichen. Es wird empfohlen, mobile und Desktop-Steuerungen zu implementieren, und die Steuerung mit Gamepad fügt eine zusätzliche Erfahrung hinzu. Aber stellen Sie sich vor, noch weiter zu gehen – in diesem Artikel werden wir verschiedene unkonventionelle Möglichkeiten erkunden, um Ihr Webspiel zu steuern, einige unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem TV-Bildschirm zu spielen muss nicht immer über Konsolen erfolgen. Es gibt bereits eine Gamepad API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis nachahmen können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele ausführen, da sie über einen integrierten Browser verfügen, der als Gaming-Plattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen geliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Das früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem riesigen Fernseher zu funktionieren. Interessanterweise war das erste Captain Rogers Spiel (Asteroid Belt of Sirius) für kostengünstige, kleine Bildschirme und preiswerte Smartphones mit Firefox OS optimiert, sodass Sie den Unterschied erkennen können, den drei Jahre machen – die ganze Geschichte können Sie in unserem [Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks-Artikel lesen.

![Panasonic TV-Fernbedienungen für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Eine TV-Fernbedienung zur Steuerung des Spiels zu nutzen, erwies sich als überraschend einfach, da die von der Fernbedienung ausgelösten Ereignisse konventionelle Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert sofort. Die Cursor sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben genau die gleichen Tastencodes wie die Pfeiltasten auf der Fernbedienung. Wie erfahren Sie die Codes für die anderen Fernbedienungstasten? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausgeben:

```js
window.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
});
```

Jede auf der Fernbedienung gedrückte Taste zeigt ihren Tastencode in der Konsole an. Sie können auch dieses praktische Spickzettel überprüfen, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS ausführen:

![Tasten-Codes für die Fernbedienung von Panasonic-TV.](controls-tvkeys.png)

Sie können das Wechseln zwischen Zuständen, das Starten eines neuen Spiels, das Steuern des Raumschiffs und das Zerstören von Gegenständen, das Pausieren und Neustarten des Spiels hinzufügen. Alles was benötigt wird, ist das Überprüfen von Tastendrücken:

```js
window.addEventListener("keydown", (event) => {
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
});
```

Sie können es in Aktion sehen, indem Sie [dieses Video](https://www.youtube.com/watch?v=Bh11sP0bcTY) anschauen.

## Leap Motion

Haben Sie schon einmal darüber nachgedacht, ein Spiel nur mit Ihren Händen zu steuern? Das ist möglich mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps.

Leap Motion wird immer beliebter aufgrund der sehr guten Integration mit VR-Headsets – das Vorführen von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit angehängtem Leap Motion wurde von JavaScript-Entwicklern, die Demo-Stände auf Konferenzen weltweit besuchten, als eines der besten WebVR-Erlebnisse gewählt.

Neben der hervorragenden Eignung für virtuelle Benutzeroberflächen kann es auch für einfache 2D-Gaming-Erlebnisse genutzt werden. Es wäre sehr schwierig, alles nur mit den Händen zu machen, aber für das einfache Spielgeschehen von Captain Roger ist es durchaus machbar – das Steuerlenken des Schiffs und das Abfeuern der Geschosse.

Um Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zunächst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit dem `src`, das auf `https://js.leapmotion.com/leap-0.6.4.min.js` zeigt, und ein `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag hinzu, um Diagnostikinformationen auszugeben.

Wir benötigen einige Hilfsvariablen, damit unser Code funktioniert – eine für den Zweck der Berechnung der Grad aus Radialen, zwei, um den horizontalen und vertikalen Gradbetrag zu halten, den unsere Hand über dem Controller geneigt ist, eine für den Schwellenwert dieser Neigung und eine für den Status des Greifens unserer Hand. Wir fügen diese Zeilen nach allen Event-Listenern für Tastatur und Maus hinzu, aber vor der `draw`-Methode:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Direkt danach verwenden wir die `loop`-Methode von Leap, um die Informationen, die sich im `hand`-Abschnitt befinden, in jedem Bildrahmen zu erhalten:

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

Der obige Code berechnet und weist die `horizontalDegree`, `verticalDegree` und `grabStrength` Werte zu, die wir später verwenden werden, und gibt sie im HTML aus, damit wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()`-Funktion verwenden, um das Schiff zu bewegen:

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

Wenn der `horizontalDegree` Wert größer als unser `degreeThreshold` ist, was in diesem Fall 30 ist, wird das Schiff bei jedem Bild um 5 Pixel nach links bewegt. Wenn sein Wert niedriger als der negative Wert der Schwelle ist, wird das Schiff nach rechts bewegt. Die Aufwärts-/Abwärtsbewegung funktioniert auf die gleiche Weise. Der letzte Wert ist `grabStrength`, der ein Wert zwischen 0 und 1 ist – wenn er 1 erreicht (Faust vollständig geschlossen), wird vorerst ein Alert angezeigt (in einem vollständigen Spiel könnte dies durch die Schießlogik ersetzt werden).

![Leap Motion Controller-Unterstützung im Spiel, mit sichtbarer Ausgabe für Roll, Pitch und Stärke.](controls-leapmotion.png)

Das war's – alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist hier bereits vorhanden. Sie können die Eigenschaften von `hand` erkunden und jedes gewünschte Verhalten direkt in Ihrem Spiel implementieren.

## Dopplereffekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mit dem Dopplereffekt](https://danielrapp.github.io/doppler/), der das Winken Ihrer Hand mit der Verwendung des Mikrofons kombiniert. Diesmal geht es darum, Schallwellen zu erkennen, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Dopplereffekt als eine Möglichkeit, das Scrollen eines Artikels auf einem Laptop mit Handgesten zu steuern.](controls-doppler.png)

Wenn die Frequenz des reflektierten Schalls von der ursprünglichen abweicht, können wir feststellen, dass sich das Objekt bewegt hat. Auf diese Weise können wir eine Handbewegung nur mit einem eingebauten Mikrofon erkennen!

Dies kann mit einer [kleinen Bibliothek](https://github.com/DanielRapp/doppler) erreicht werden, die von Daniel Rapp erstellt wurde – es kann so einfach sein, die Differenz zwischen zwei Frequenzen zu berechnen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Der `diff` wäre die Differenz zwischen der Ausgangsposition der Hand und der Endposition.

Dieser Ansatz gibt uns nicht die volle Flexibilität der Verwendung eines Gamepads oder sogar Leap Motion, aber es ist definitiv eine interessante, unkonventionelle Alternative. Sie können es verwenden, um eine Seite freihändig zu scrollen oder ein Theremin zu spielen, aber es sollte auch ausreichen, um das Schiff nach oben und unten auf dem Bildschirm zu bewegen, wenn es korrekt implementiert wird.

## Makey Makey

Wenn Sie völlig verrückt werden möchten, können Sie [Makey Makey](https://makeymakey.com/) verwenden, ein Board, das alles in einen Controller verwandeln kann – es geht darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Touch-Interfaces zu verwenden.

![Steuerung eines Bananenpianos mit Makey Makey.](controls-banana.png)

Sehen Sie sich das [Bananenpiano-Video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie den [schnellen Startleitfaden](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle benötigten Informationen.

Es gibt sogar eine von Cylon.js unterstützte Makey Button-Funktionalität, inspiriert von der Makey Makey-Platine, sodass Sie das beliebte Cylon-Roboterframework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Verbinden der Boards und die Verwendung könnte so aussehen:

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

Wie in der Beschreibung steht: Dieser GPIO-Treiber ermöglicht es Ihnen, einen 10 MOhm-Widerstand an einen Digitalpin auf Ihrem Arduino oder Raspberry Pi anzuschließen, um Ihre Roboter mit Bananen, Ton oder zeichnbaren Schaltkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Sie mochten die Experimente – wenn Sie andere haben, von denen Sie denken, dass sie andere interessieren könnten, zögern Sie nicht, die Details hier zu ergänzen.

Und denken Sie daran: Haben Sie Spaß beim Erstellen von Spielen!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
