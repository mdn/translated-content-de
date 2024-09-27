---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{GamesSidebar}}

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Unterschiedliche Steuermechanismen in Ihrem Spiel helfen, ein breiteres Publikum zu erreichen. Die Implementierung von mobilen und Desktop-Steuerungen wird empfohlen und ist ein Muss, und Gamepad-Steuerungen bieten das gewisse Extra an Erfahrung. Aber stellen Sie sich vor, noch weiter zu gehen — in diesem Artikel werden wir verschiedene unkonventionelle Möglichkeiten erkunden, Ihr Webspiel zu steuern, einige unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem TV-Bildschirm zu spielen, muss nicht immer über Konsolen geschehen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis nachahmen können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele verarbeiten, da sie einen integrierten Browser haben, der als Gaming-Plattform verwendet werden kann. Smart-TVs werden mit Fernbedienungen geliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Das früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde so angepasst, dass es auf einem großen Fernseher funktioniert. Interessanterweise wurde das erste Captain Rogers-Spiel (Asteroid Belt of Sirius) für leistungsschwache, kleinscreenige, preiswerte Smartphones mit Firefox OS optimiert, sodass Sie den Unterschied sehen können, den drei Jahre machen — die gesamte Geschichte können Sie in unserem [Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks-Artikel nachlesen.

![Panasonic TV-Fernbedienung für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels erwies sich als überraschend einfach, da die von der Steuerung ausgelösten Ereignisse konventionelle Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert direkt ab Werk. Die Cursor sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben genau dieselben Schlüsselcodes wie die Pfeiltasten auf der Fernbedienung. Wie erfahren Sie die Codes für die anderen Tasten der Fernbedienung? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausgeben:

```js
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event.keyCode);
  },
  true,
);
```

Jeder Tastendruck auf der Fernbedienung zeigt seinen Schlüsselcode in der Konsole an. Sie können auch dieses praktische Spickzettel unten überprüfen, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS ausführen:

![Tastencodes für Panasonic-TV-Fernbedienung.](controls-tvkeys.png)

Sie können zwischen den Zuständen wechseln, ein neues Spiel starten, das Schiff steuern und Dinge in die Luft jagen, das Spiel pausieren und neu starten. Alles, was benötigt wird, ist das Überprüfen der Tastendrücke:

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

Sie können es in Aktion sehen, indem Sie [dieses Video](https://www.youtube.com/watch?v=Bh11sP0bcTY) anschauen.

## Leap Motion

Haben Sie schon einmal darüber nachgedacht, ein Spiel nur mit Ihren Händen zu steuern? Es ist möglich mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps.

Leapmotion wird immer beliebter aufgrund der sehr guten Integration mit VR-Headsets — die Demo von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit Leap Motion wurde von JavaScript-Entwicklern, die Demo-Stände auf Konferenzen weltweit besuchten, als eine der besten WebVR-Erfahrungen bewertet.

Neben seiner Eignung für virtuelle Schnittstellen kann es auch für gelegentliche 2D-Gaming-Erfahrungen verwendet werden. Alles nur mit den Händen zu machen wäre sehr schwierig, aber es ist völlig machbar für das einfache Captain Rogers-Gameplay — das Schiff steuern und die Kugeln abfeuern.

Um Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zunächst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `url` zu [dieser Datei](https://js.leapmotion.com/leap-0.6.4.min.js) hinzu und fügen `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag für die Ausgabe von Diagnoseinformationen hinzu.

Wir werden einige Hilfsvariablen benötigen, damit unser Code funktioniert — eine für die Berechnung der Grad aus Radiant, zwei für die horizontale und vertikale Menge an Grad, um die unsere Hand über dem Controller geneigt ist, eine für den Schwellenwert dieser Neigung und eine für den Zustand des Griffs unserer Hand. Diese Zeilen fügen wir nach allen Ereignis-Listenern für Tastatur und Maus hinzu, aber vor der `draw`-Methode:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Unmittelbar danach verwenden wir die `loop`-Methode von Leap, um die im `hand`-Variablen gehaltene Informationen in jeder Frame zu erhalten:

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

Wenn der Wert `horizontalDegree` größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, dann wird das Schiff in jedem Frame 5 Pixel nach links bewegt. Wenn sein Wert kleiner als der negative Wert der Schwellenwert ist, wird das Schiff nach rechts bewegt. Auf-/Abwärtsbewegungen funktionieren auf dieselbe Weise. Der letzte Wert ist `grabStrength`, der ein Float zwischen 0 und 1 ist — wenn er 1 erreicht (Faust vollständig geschlossen), zeigen wir vorerst eine Warnung an (in einem vollständigen Spiel könnte dies durch die Schussspielmechanik ersetzt werden).

![Leap Motion Controller-Unterstützung im Spiel, mit sichtbarer Ausgabe für Roll, Pitch und Strength.](controls-leapmotion.png)

Das war alles — alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist hier bereits vorhanden. Sie können die Eigenschaften der `hand` erkunden und jedes gewünschte Verhalten direkt in Ihrem Spiel umsetzen.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mittels des Doppler-Effekts](https://danielrapp.github.io/doppler/), der das Winken der Hand und die Verwendung des Mikrofons kombiniert. Dieses Mal geht es darum, Schallwellen zu erkennen, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Doppler-Effekt als Möglichkeit zur Steuerung des Scrollens eines Artikels auf einem Laptop mittels Handbewegung.](controls-doppler.png)

Wenn sich die Frequenz des reflektierten Schalls von der ursprünglichen verschiebt, können wir erkennen, dass die Bewegung dieses Objekts stattgefunden hat. Auf diese Weise können wir eine Handbewegung nur mit einem eingebauten Mikrofon erkennen!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) erreicht werden, die von Daniel Rapp erstellt wurde — es kann so einfach wie das Berechnen der Differenz zwischen zwei Frequenzen sein:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Das `diff` wäre der Unterschied zwischen der Ausgangsposition der Hand und der finalen Position.

Dieser Ansatz gibt uns nicht die volle Flexibilität der Nutzung eines Gamepads oder sogar Leap Motion, aber es ist definitiv eine interessante, unkonventionelle Alternative. Sie können es verwenden, um eine Seite freihändig zu scrollen oder Theremin zu spielen, aber es sollte auch ausreichen, um das Schiff nach oben und unten auf dem Bildschirm zu bewegen, wenn es richtig implementiert wird.

## MaKey MaKey

Wenn Sie völlig verrückt sein wollen, können Sie [MaKey MaKey](https://makeymakey.com/) verwenden, eine Platine, die alles in eine Steuerung verwandeln kann — es geht darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Berührungsschnittstellen zu verwenden.

![Klaviersteuerung einer Banane mit Makey Makey.](controls-banana.png)

Sehen Sie sich das [Bananenklavier-Video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie unbedingt den [Quick Start Guide](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle benötigten Informationen.

Es gibt sogar eine [Cylon.js-unterstützte Makey Button-Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), inspiriert von der MaKey MaKey-Platine, sodass Sie das beliebte Cylon-Roboter-Framework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. So könnte das Verbinden der Boards und deren Nutzung aussehen:

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

Wie die Beschreibung sagt: Dieser GPIO-Treiber ermöglicht es Ihnen, einen 10 MOhm-Widerstand an einen digitalen Pin Ihres Arduino oder Raspberry Pi zu schließen, um Ihre Roboter mit Bananen, Knete oder zeichnungsfähigen Stromkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen haben die Experimente gefallen — wenn Sie andere haben, die für andere Leute interessant sein könnten, zögern Sie nicht, Details davon hier hinzuzufügen.

Und denken Sie daran: Haben Sie Spaß beim Spieleentwickeln!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
