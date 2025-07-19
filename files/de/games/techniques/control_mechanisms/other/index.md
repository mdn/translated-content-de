---
title: Unkonventionelle Steuerungsmethoden
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Verschiedene Steuerungsmechanismen in Ihr Spiel zu integrieren, hilft Ihnen, ein breiteres Publikum zu erreichen. Die Implementierung von mobilen und Desktop-Steuerungen ist empfohlen und ein Muss, und Gamepad-Steuerungen bieten ein zusätzliches Erlebnis. Aber stellen Sie sich vor, noch weiter zu gehen — in diesem Artikel werden wir verschiedene unkonventionelle Möglichkeiten erkunden, um Ihr Web-Spiel zu steuern, einige mehr unkonventionell als andere.

## TV-Fernbedienung

Spiele auf einem Fernseher zu spielen, muss nicht immer über Konsolen geschehen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis imitieren können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele ausführen, da sie einen eingebauten Browser haben, der als Gaming-Plattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen geliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Die früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem großen Fernseher zu funktionieren. Interessanterweise wurde das erste Captain Rogers Spiel (Asteroid Belt of Sirius) für leistungsschwache, kleinbildige, günstige Smartphones optimiert, die unter Firefox OS laufen, sodass Sie den Unterschied sehen können, den drei Jahre ausmachen — die ganze Geschichte können Sie in unserem [Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks-Beitrag nachlesen.

![Panasonic TV-Fernbedienung für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Nutzung der TV-Fernbedienung zur Steuerung des Spiels stellte sich als überraschend einfach heraus, da die von der Steuerung ausgelösten Ereignisse herkömmliche Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert einfach von Haus aus. Die Cursor sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben exakt dieselben Tastencodes wie die Pfeiltasten auf der Fernbedienung. Wie erfahren Sie die Codes für die anderen Tasten der Fernbedienung? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausdrucken:

```js
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event.keyCode);
  },
  true,
);
```

Jede auf der Fernbedienung gedrückte Taste wird ihren Tastencode in der Konsole anzeigen. Sie können auch dieses praktische Cheat Sheet, das unten zu sehen ist, verwenden, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS ausführen:

![Fernbedienungstastencodes für Panasonic TV.](controls-tvkeys.png)

Sie können das Bewegen zwischen Zuständen, das Starten eines neuen Spiels, die Kontrolle des Schiffs und das Zerstören von Objekten, das Pausieren und Neustarten des Spiels hinzufügen. Alles, was Sie tun müssen, ist, auf Tastendrücke zu überprüfen:

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

Haben Sie schon einmal daran gedacht, ein Spiel nur mit Ihren Händen zu steuern? Das ist möglich mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps.

Leap Motion wird immer beliebter, da es sehr gut mit VR-Headsets integriert werden kann — die Präsentation von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit Leap Motion wurde von JavaScript-Entwicklern auf Konferenzen weltweit als eines der besten WebVR-Erlebnisse bewertet.

Es eignet sich nicht nur hervorragend für virtuelle Schnittstellen, sondern kann auch für ein zwangloses 2D-Spielerlebnis genutzt werden. Alles nur mit den Händen zu machen, wäre sehr schwierig, aber für das einfache Gameplay von Captain Rogers — das Steuern des Schiffs und das Abfeuern der Kugeln — ist es durchaus machbar.

Um Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zunächst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert und der Controller mit Ihrem Computer verbunden ist, können Sie mit der Implementierung der Unterstützung in unserer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zunächst fügen wir ein `<script>`-Tag mit der `url` ein, die auf `https://js.leapmotion.com/leap-0.6.4.min.js` zeigt, und fügen `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag für die Ausgabe diagnostischer Informationen hinzu.

Wir benötigen ein paar Hilfsvariablen, damit unser Code funktioniert — eine zum Zweck der Berechnung der Grad aus Radiant, zwei zur Speicherung der horizontalen und vertikalen Menge der Grade, die unsere Hand über dem Controller geneigt ist, eine für den Schwellenwert dieser Neigung und eine für den Status des Greifens unserer Hand. Als Nächstes fügen wir diese Zeilen nach allen Ereignis-Listenern für Tastatur und Maus, aber vor der `draw`-Methode hinzu:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Direkt danach verwenden wir die `loop`-Methode von Leap, um die Informationen, die in der `hand`-Variable gehalten werden, in jedem Frame zu erhalten:

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

Der obige Code berechnet und weist die Werte `horizontalDegree`, `verticalDegree` und `grabStrength` zu, die wir später verwenden werden, und gibt sie in HTML aus, damit wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()`-Funktion verwenden, um das Schiff zu bewegen:

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

Wenn der Wert von `horizontalDegree` größer ist als unser Schwellenwert `degreeThreshold`, was in diesem Fall 30 ist, wird das Schiff in jedem Frame um 5 Pixel nach links bewegt. Wenn sein Wert kleiner ist als der negative Wert des Schwellenwerts, wird das Schiff nach rechts bewegt. Die Auf- und Abwärtsbewegung funktioniert auf ähnliche Weise. Der letzte Wert ist `grabStrength`, der ein Wert zwischen 0 und 1 ist — wenn er 1 erreicht (Faust vollständig geballt), zeigen wir vorerst eine Warnung an (in einem vollständigen Spiel könnte dies durch die Schusslogik ersetzt werden).

![Leap Motion Controller-Unterstützung im Spiel, mit sichtbarer Ausgabe für Roll, Pitch und Strength.](controls-leapmotion.png)

Das ist alles — alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist bereits hier. Sie können die Eigenschaften der `hand` erkunden und jedes gewünschte Verhalten direkt in Ihrem Spiel implementieren.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mit Hilfe des Doppler-Effekts](https://danielrapp.github.io/doppler/), der das Winken der Hand und die Nutzung des Mikrofons kombiniert. Dieses Mal geht es darum, Schallwellen zu erkennen, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Doppler-Effekt als Möglichkeit zur Steuerung des Scrollens eines Artikels auf einem Laptop mit Handbewegung.](controls-doppler.png)

Wenn die Frequenz des zurückgeworfenen Schalls von der ursprünglichen abweicht, können wir erkennen, dass eine Bewegung dieses Objekts stattgefunden hat. Auf diese Weise können wir eine Handbewegung nur mit einem eingebauten Mikrofon erkennen!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) erreicht werden, die von Daniel Rapp entwickelt wurde — es kann so einfach sein wie das Berechnen der Differenz zwischen zwei Frequenzen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Der `diff` wäre der Unterschied zwischen der anfänglichen Position der Hand und der finalen.

Dieser Ansatz bietet nicht die volle Flexibilität der Nutzung eines Gamepads oder sogar Leap Motion, aber es ist definitiv eine interessante, unkonventionelle Alternative. Sie können ihn nutzen, um eine Seite freihändig zu scrollen oder Theremin zu spielen, aber es sollte auch ausreichen, um das Schiff auf dem Bildschirm auf- und abwärts zu bewegen, wenn es korrekt implementiert ist.

## Makey Makey

Wenn Sie etwas völlig Verrücktes ausprobieren möchten, können Sie [Makey Makey](https://makeymakey.com/) verwenden, eine Platine, die alles in einen Controller verwandeln kann — es geht darum, leitfähige Objekte der realen Welt mit einem Computer zu verbinden und sie als Berührungsinterfaces zu verwenden.

![Steuerung eines Bananenklaviers mit Makey Makey.](controls-banana.png)

Sehen Sie sich das [Banana Piano Video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an, und besuchen Sie unbedingt den [schnellen Startleitfaden](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle notwendigen Informationen.

Es gibt sogar eine [Cylon.js-unterstützte Makey Button-Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), inspiriert von der Makey Makey-Platine, sodass Sie das beliebte Cylon-Robotik-Framework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Verbinden der Platinen und ihre Nutzung könnte so aussehen:

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

Wie in der Beschreibung steht: Dieser GPIO-Treiber ermöglicht es Ihnen, einen 10 MOhm-Widerstand mit einem digitalen Pin Ihres Arduino oder Raspberry Pi zu verbinden, um Ihre Roboter mit Bananen, Ton oder auf Zeichnungen basierenden Stromkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Sie mochten die Experimente — wenn Sie andere haben, die Sie für interessant für andere Menschen halten, zögern Sie nicht, hier Details hinzuzufügen.

Und denken Sie daran: Viel Spaß beim Spieleentwickeln!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
