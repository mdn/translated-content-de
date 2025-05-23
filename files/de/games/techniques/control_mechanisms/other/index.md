---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{GamesSidebar}}

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Unterschiedliche Steuermechanismen in Ihrem Spiel zu haben, hilft, ein breiteres Publikum zu erreichen. Die Implementierung von Mobil- und Desktop-Steuerungen ist empfehlenswert und ein Muss, und Gamepad-Steuerungen verleihen dem Spielerlebnis das gewisse Extra. Aber stellen Sie sich vor, noch weiter zu gehen – in diesem Artikel werden wir verschiedene unkonventionelle Methoden zur Steuerung Ihres Webspiels erkunden, einige unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem TV-Bildschirm zu spielen, muss nicht immer über Konsolen erfolgen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Spielerlebnis nachahmen können. Aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele handhaben, da sie über einen integrierten Browser verfügen, der als Spieleplattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen ausgeliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Das früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem großen TV zu funktionieren. Interessanterweise war das erste Captain Rogers-Spiel (Asteroid Belt of Sirius) für Low-End-, Kleinscreen-, günstige Smartphones, die Firefox OS ausführen, optimiert. Sie können also sehen, welchen Unterschied drei Jahre machen können – Sie können die ganze Geschichte in unserem [Spieleentwicklung für Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks-Beitrag lesen.

![Panasonic TV-Fernbedienung für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels erwies sich als überraschend einfach, da die von der Fernbedienung ausgelösten Ereignisse herkömmliche Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert direkt ohne Anpassungen. Die Cursor sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben genau die gleichen Tastencodes wie die Pfeiltasten auf der Fernbedienung. Wie erfahren Sie die Codes für die anderen Fernbedienungstasten? Sie können sie ermitteln, indem Sie die Antworten in der Konsole ausgeben:

```js
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event.keyCode);
  },
  true,
);
```

Jedes auf der Fernbedienung gedrückte Taste zeigt seinen Tastencode in der Konsole an. Sie können auch dieses nützliche Spickblatt unten überprüfen, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS ausführen:

![Fernbedienungstastencodes für Panasonic TV.](controls-tvkeys.png)

Sie können das Wechseln zwischen Zuständen, das Starten eines neuen Spiels, die Steuerung des Schiffs und das Zerstören von Objekten sowie das Pausieren und Neustarten des Spiels hinzufügen. Alles, was nötig ist, ist das Überprüfen von Tastendrücken:

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

Haben Sie jemals darüber nachgedacht, ein Spiel nur mit Ihren Händen zu steuern? Es ist möglich mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps.

Leap Motion wird aufgrund der sehr guten Integration mit VR-Headsets immer beliebter — das Demo von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit angefügtem Leap Motion wurde von JavaScript-Entwicklern, die Demo-Stationen auf Konferenzen weltweit besuchten, als eine der besten WebVR-Erfahrungen gewertet.

Neben der Eignung für virtuelle Schnittstellen kann es auch für einfache 2D-Spielerfahrungen genutzt werden. Es wäre sehr schwierig, alles nur mit den Händen zu machen, aber für das einfache Gameplay von Captain Roger's — Steuern des Schiffs und Schießen der Kugeln — ist es durchaus machbar.

Um das Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zuerst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller an Ihrem Computer angeschlossen ist, können wir mit der Implementierung der Unterstützung in unserem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `url`, die auf [diese Datei](https://js.leapmotion.com/leap-0.6.4.min.js) zeigt, hinzu und ergänzen `<div id="output"></div>` kurz vor dem schließenden `</body>`-Tag, um Diagnoseinformationen auszugeben.

Wir benötigen ein paar Hilfsvariablen, damit unser Code funktioniert — eine, um die Grad von Bogenmaß zu berechnen, zwei, um den horizontalen und vertikalen Grad unserer Hand über dem Controller zu halten, eine für den Schwellenwert dieser Neigung und eine für den Status des Greifens unserer Hand. Wir fügen diese Zeilen direkt nach allen Ereignislistenern für Tastatur und Maus, aber vor der `draw`-Methode hinzu:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Direkt danach verwenden wir die `loop`-Methode von Leap, um die Informationen zu erhalten, die in der `hand`-Variablen in jedem Frame gehalten werden:

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

Der obige Code berechnet und weist die Werte `horizontalDegree`, `verticalDegree` und `grabStrength` zu, die wir später verwenden werden, und gibt sie in HTML aus, damit wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()` Funktion verwenden, um das Schiff zu bewegen:

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

Wenn der `horizontalDegree`-Wert größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, wird das Schiff in jedem Frame um 5 Pixel nach links bewegt. Wenn sein Wert niedriger ist als der negative Wert des Schwellenwerts, wird das Schiff nach rechts bewegt. Auf-/Abbewegungen funktionieren auf ähnliche Weise. Der letzte Wert ist `grabStrength`, der ein Float zwischen 0 und 1 ist — wenn er 1 erreicht (Faust vollständig geschlossen), zeigen wir derzeit eine Warnung an (in einem vollständigen Spiel könnte dies durch die Schießlogik ersetzt werden).

![Leap Motion-Controller-Unterstützung im Spiel mit sichtbarer Ausgabe für Rolle, Neigung und Stärke.](controls-leapmotion.png)

Das ist alles – alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist hier bereits vorhanden. Sie können die Eigenschaften der `hand`-Variablen erkunden und jedes gewünschte Verhalten direkt in Ihr Spiel implementieren.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mit dem Doppler-Effekt](https://danielrapp.github.io/doppler/), der das Winken Ihrer Hand mit der Nutzung des Mikrofons kombiniert. Diesmal geht es darum, Schallwellen zu erkennen, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Doppler-Effekt als Möglichkeit, das Scrollen eines Artikels auf einem Laptop mit Handgesten zu steuern.](controls-doppler.png)

Wenn sich die Frequenz des zurückgeworfenen Schalls von der ursprünglichen unterscheidet, können wir feststellen, dass eine Bewegung des Objekts stattgefunden hat. Auf diese Weise können wir eine Handbewegung nur durch ein eingebautes Mikrofon erkennen!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) erreicht werden, die von Daniel Rapp erstellt wurde — es kann so einfach sein, den Unterschied zwischen zwei Frequenzen zu berechnen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Der `diff` wäre der Unterschied zwischen der anfänglichen Position der Hand und der endgültigen.

Dieser Ansatz wird uns nicht die volle Flexibilität bieten wie mit einem Gamepad oder sogar mit Leap Motion, aber es ist definitiv eine interessante, unkonventionelle Alternative. Sie können es verwenden, um eine Seite freihändig zu scrollen oder ein Theremin zu spielen, aber es sollte auch ausreichen, um das Schiff auf dem Bildschirm nach oben und unten zu bewegen, wenn es richtig implementiert wird.

## Makey Makey

Wenn Sie völlig verrückt werden möchten, können Sie [Makey Makey](https://makeymakey.com/), ein Board, das alles in einen Controller verwandeln kann, verwenden — es geht darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Touch-Schnittstellen zu verwenden.

![Makey Makey wird verwendet, um ein Bananenklavier zu steuern.](controls-banana.png)

Schauen Sie sich das [banana piano video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie die [schnelle Anleitung](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle erforderlichen Informationen.

Es gibt sogar eine [Cylon.js-unterstützte Makey Button-Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), inspiriert von dem Makey Makey-Board, sodass Sie das beliebte Cylon-Robotikframework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Anschließen der Boards und deren Verwendung könnte so aussehen:

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

Wie in der Beschreibung angegeben: dieser GPIO-Treiber ermöglicht es Ihnen, einen 10-MOhm-Widerstand an einen digitalen Pin Ihres Arduinos oder Raspberry Pi anzuschließen, um Ihre Roboter mit Bananen, Ton oder zeichnungsfähigen Schaltungen zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen gefielen die Experimente — wenn Sie weitere interessante Ideen haben, die auch andere interessieren könnten, können Sie sie gerne hier hinzufügen.

Und denken Sie daran: Haben Sie Spaß beim Erstellen von Spielen!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
