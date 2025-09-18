---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Unterschiedliche Steuermechanismen in Ihrem Spiel zu implementieren, hilft dabei, ein breiteres Publikum zu erreichen. Die Implementierung von Steuerungen für Mobilgeräte und Desktop-Computer ist ein Muss, und Gamepad-Steuerungen ergänzen das Erlebnis zusätzlich. Aber stellen Sie sich vor, noch einen Schritt weiter zu gehen – in diesem Artikel werden wir verschiedene unkonventionelle Möglichkeiten erkunden, um Ihr Webspiel zu steuern, einige unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem Fernsehbildschirm zu spielen, muss nicht immer über Konsolen erfolgen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis immitieren können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele ausführen, da sie über einen integrierten Browser verfügen, der als Spieleplattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen ausgeliefert, die zur Steuerung Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Die früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem großen TV zu funktionieren. Interessanterweise wurde das erste Captain Rogers-Spiel (Asteroid Belt of Sirius) für günstige Smartphones mit kleinem Bildschirm und geringer Leistung, die Firefox OS ausführten, optimiert. So können Sie den Unterschied sehen, den drei Jahre ausmachen können – Sie können die ganze Geschichte in unserem [Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks Beitrag lesen.

![Panasonic-Fernbedienung für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels stellte sich als überraschend einfach heraus, da die vom Controller ausgelösten Ereignisse herkömmliche Tastatureingaben nachahmen. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert sofort. Die Cursor sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben exakt dieselben Tastencodes wie die Pfeiltasten auf der Fernbedienung. Wie erfahren Sie die Codes für die anderen Tasten der Fernbedienung? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausdrucken:

```js
window.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
});
```

Jede auf der Fernbedienung gedrückte Taste zeigt ihren Tastencode in der Konsole an. Sie können auch dieses praktische Spickzettel verwenden, das unten zu sehen ist, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS ausführen:

![Tastencodes der Fernbedienung für Panasonic-TV.](controls-tvkeys.png)

Sie können das Bewegen zwischen Zuständen, das Starten eines neuen Spiels, das Steuern des Schiffs und das Zerstören von Objekten, das Pausieren und Neustarten des Spiels hinzufügen. Alles, was benötigt wird, ist das Prüfen auf Tastendrücke:

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

Sie können dies in Aktion sehen, indem Sie [dieses Video](https://www.youtube.com/watch?v=Bh11sP0bcTY) ansehen.

## Leap Motion

Haben Sie schon einmal daran gedacht, ein Spiel nur mit Ihren Händen zu steuern? Mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps, ist das möglich.

Leap Motion wird immer populärer aufgrund der sehr guten Integration mit VR-Headsets – die Vorführung von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit daran befestigtem Leap Motion wurde als eines der besten WebVR-Erlebnisse von JavaScript-Entwicklern, die Demos auf Konferenzen weltweit besuchten, bewertet.

Neben Virtuellen Interfaces kann es auch für ein beiläufiges 2D-Gaming-Erlebnis genutzt werden. Es wäre sehr schwierig, alles nur mit Ihren Händen zu machen, aber es ist definitiv machbar für das einfache Gameplay von Captain Roger's – das Steuern des Schiffs und das Schießen von Geschossen.

Um Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zuerst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserer [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `url`, die auf `https://js.leapmotion.com/leap-0.6.4.min.js` zeigt, hinzu und fügen `<div id="output"></div>` unmittelbar vor dem schließenden `</body>`-Tag für die Ausgabe der Diagnoseinformationen hinzu.

Wir benötigen einige Hilfsvariablen, damit unser Code funktioniert – eine zum Zweck der Berechnung der Grad aus Radiant, zwei für das Halten der horizontalen und vertikalen Gradanzahl, um die sich unsere Hand über dem Controller neigt, eine für den Schwellenwert dieser Neigung und eine für den Status des Griffs unserer Hand. Wir fügen diese Zeilen nach allen Event-Listenern für Tastatur und Maus, aber vor der `draw`-Methode hinzu:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Direkt danach verwenden wir die `loop`-Methode von Leap, um die Informationen zu erhalten, die in der `hand`-Variable bei jedem Frame enthalten sind:

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

Der obige Code berechnet und weist die `horizontalDegree`, `verticalDegree` und `grabStrength`-Werte zu, die wir später verwenden werden, und gibt sie in HTML aus, damit wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()`-Funktion verwenden, um das Schiff zu bewegen:

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

Wenn der `horizontalDegree`-Wert größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, wird das Schiff in jedem Frame um 5 Pixel nach links bewegt. Wenn der Wert niedriger als der negative Schwellenwert ist, wird das Schiff nach rechts bewegt. Die Auf-/Ab-Bewegung funktioniert auf gleiche Weise. Der letzte Wert ist `grabStrength`, ein Wert zwischen 0 und 1 – wenn er 1 erreicht (Faust komplett geschlossen), zeigen wir jetzt eine Warnung an (in einem vollständigen Spiel könnte dies durch die Schusslogik ersetzt werden).

![Leap Motion Controller Unterstützung im Spiel, mit sichtbarer Ausgabe für Roll, Pitch und Stärke.](controls-leapmotion.png)

Das war's – alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist bereits hier. Sie können die Eigenschaften der `hand`-Variable erkunden und beliebiges Verhalten direkt in Ihrem Spiel implementieren.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mit dem Doppler-Effekt](https://danielrapp.github.io/doppler/), der das Winken mit der Hand und die Verwendung des Mikrofons kombiniert. Diesmal geht es darum, Schallwellen, die von Objekten abprallen und zum Mikrofon zurückkehren, zu erkennen.

![Doppler-Effekt als Möglichkeit zur Steuerung des Scrollens eines Artikels auf einem Laptop mittels Handgestik.](controls-doppler.png)

Wenn die Frequenz des reflektierten Schalls von der ursprünglichen abweicht, können wir feststellen, dass die Bewegung dieses Objekts stattgefunden hat. Auf diese Weise können wir eine Handbewegung nur mit einem eingebauten Mikrofon erkennen!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler), die von Daniel Rapp erstellt wurde, erreicht werden – es kann so einfach sein, die Differenz zwischen zwei Frequenzen zu berechnen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Das `diff` wäre die Differenz zwischen der ursprünglichen Position der Hand und der finalen.

Dieser Ansatz bietet nicht die volle Flexibilität wie bei der Verwendung eines Gamepads oder sogar des Leap Motion, ist aber definitiv eine interessante, unkonventionelle Alternative. Sie können ihn verwenden, um eine Seite freihändig zu scrollen, oder um ein Theremin zu spielen, aber es sollte auch ausreichen, das Schiff auf dem Bildschirm auf und ab zu bewegen, wenn es korrekt implementiert wird.

## Makey Makey

Wenn Sie es komplett verrückt angehen möchten, können Sie [Makey Makey](https://makeymakey.com/) verwenden, eine Platine, die alles in einen Controller verwandeln kann – es geht darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Touch-Schnittstellen zu verwenden.

![Steuerung eines Bananen-Klaviers mit Makey Makey.](controls-banana.png)

Sehen Sie sich das [Video zum Bananen-Klavier](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie den [Schnellstartleitfaden](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle benötigten Informationen.

Es gibt sogar eine [Cylon.js-unterstützte Makey Button-Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), die von der Makey Makey-Platine inspiriert ist, sodass Sie das beliebte Cylon-Robotics-Framework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Verbinden der Platinen und deren Verwendung könnte so aussehen:

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

Wie in der Beschreibung gesagt wird: dieser GPIO-Treiber ermöglicht es Ihnen, einen 10 MOhm Widerstand an einen digitalen Pin Ihrer Arduino- oder Raspberry Pi-Platine anzuschließen, um Ihre Roboter mit Bananen, Knete oder zeichnbaren Stromkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen haben die Experimente gefallen – wenn Sie noch andere haben, die andere interessieren könnten, zögern Sie nicht, hier Details hinzuzufügen.

Und denken Sie daran: Viel Spaß beim Erstellen von Spielen!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
