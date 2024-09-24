---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{GamesSidebar}}

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Verschiedene Steuerungsmechanismen in Ihrem Spiel helfen, ein breiteres Publikum zu erreichen. Die Implementierung von mobilen und Desktop-Steuerungen wird empfohlen und ist ein Muss, und Gamepad-Steuerungen fügen eine zusätzliche Erfahrung hinzu. Aber stellen Sie sich vor, noch weiter zu gehen — in diesem Artikel werden wir verschiedene unkonventionelle Möglichkeiten erkunden, Ihr Webspiel zu steuern, einige unkonventioneller als andere.

## TV-Fernbedienung

Das Spielen von Spielen auf einem Fernsehbildschirm muss nicht immer über Konsolen erfolgen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis imitieren können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele verarbeiten, da sie einen integrierten Browser haben, der als Spieleplattform genutzt werden kann. Smart-TVs werden mit Fernbedienungen geliefert, die zum Steuern Ihrer Spiele verwendet werden können, wenn man weiß, wie.

Das früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem riesigen TV zu funktionieren. Interessanterweise war das erste Captain Rogers-Spiel (Asteroid Belt of Sirius) für günstige Smartphones mit kleinem Bildschirm und niedriger Ausrüstung, die Firefox OS verwenden, optimiert. So können Sie den Unterschied sehen, den drei Jahre machen können — die ganze Geschichte können Sie in unserem [Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks-Beitrag lesen.

![Panasonic TV-Fernbedienungssteuerungen für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels erwies sich als überraschend einfach, da die von der Fernbedienung ausgelösten Ereignisse konventionelle Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert auf Anhieb. Die Cursors sind die vier Richtungspfeiltasten auf der Tastatur, und diese haben genau die gleichen Tastencodes wie die Pfeiltasten auf der Fernbedienung. Wie kennen Sie die Codes für die anderen Fernbedienungstasten? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausgeben:

```js
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event.keyCode);
  },
  true,
);
```

Jede Taste, die auf der Fernbedienung gedrückt wird, zeigt ihren Tastencode in der Konsole an. Sie können auch dieses praktische Spickzettel unten überprüfen, wenn Sie mit Panasonic-TVs arbeiten, die Firefox OS verwenden:

![Fernbedienungsschlüsselkodes für Panasonic TV.](controls-tvkeys.png)

Sie können das Wechseln zwischen Zuständen, das Starten eines neuen Spiels, das Steuern des Schiffs und das Sprengen von Dingen, das Pausieren und Neustarten des Spiels hinzufügen. Alles, was benötigt wird, ist das Überprüfen von Tastendrücken:

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

Haben Sie jemals darüber nachgedacht, ein Spiel nur mit Ihren Händen zu steuern? Möglich ist das mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps.

Leap Motion wird immer beliebter dank einer sehr guten Integration mit VR-Headsets — die Demonstration von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit Leap Motion wurde von JavaScript-Entwicklern, die Demostände auf Konferenzen weltweit besuchten, als eine der besten WebVR-Erfahrungen gewählt.

Neben virtuellen Schnittstellen kann es auch für zwanglose 2D-Spielerlebnisse genutzt werden. Es wäre sehr schwierig, alles nur mit den Händen zu machen, aber für das einfache Captain Rogers-Spiel ist es durchaus machbar — das Steuern des Schiffs und das Schießen der Kugeln.

Um das Leap Motion auf Ihrem Computer zum Laufen zu bringen, müssen Sie es zunächst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `url` hinzu, die auf [diese Datei](https://js.leapmotion.com/leap-0.6.4.min.js) zeigt, und fügen `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag hinzu, um diagnostische Informationen auszugeben.

Wir benötigen einige Hilfsvariablen, damit unser Code funktioniert — eine zur Berechnung der Grad aus Radiant, zwei zur Speicherung der horizontalen und vertikalen Gradanzahl, die unsere Hand über dem Controller neigt, eine für die Schwelle dieser Neigung und eine für den Status des Greifens unserer Hand. Wir fügen diese Zeilen nach allen Event-Listenern für Tastatur und Maus, aber vor der `draw`-Methode hinzu:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Direkt danach verwenden wir die Leap's `loop`-Methode, um die Informationen zu ermitteln, die in der `hand`-Variablen bei jedem Frame gehalten werden:

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

Der obige Code berechnet und weist die `horizontalDegree`, `verticalDegree` und `grabStrength` Werte zu, die wir später verwenden werden, und gibt sie in HTML aus, damit wir die tatsächlichen Werte sehen können. Wenn diese Variablen auf dem neuesten Stand sind, können wir sie in der `draw()`-Funktion verwenden, um das Schiff zu bewegen:

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

Wenn der Wert von `horizontalDegree` größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, wird das Schiff um 5 Pixel bei jedem Frame nach links bewegt. Wenn sein Wert kleiner als der negative Schwellenwert ist, wird das Schiff nach rechts bewegt. Die Aufwärts-/Abwärtsbewegung funktioniert in gleicher Weise. Der letzte Wert ist `grabStrength`, ein Float zwischen 0 und 1 — wenn er 1 erreicht (faustvoll geschlossen), zeigen wir vorerst einen Alarm an (in einem vollständigen Spiel könnte dies durch die Schießlogik ersetzt werden).

![Leap Motion Controller-Unterstützung im Spiel mit sichtbarem Output für Roll, Pitch und Strength.](controls-leapmotion.png)

Das war alles — alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist bereits hier. Sie können die Eigenschaften der `hand` erkunden und jedes gewünschte Verhalten direkt in Ihr Spiel implementieren.

## Doppler-Effekt

Es gibt einen sehr interessanten Artikel über [Bewegungserkennung mit dem Doppler-Effekt](https://danielrapp.github.io/doppler/), der das Winken mit der Hand und das Verwenden des Mikrofons verbindet. Diesmal geht es darum, Schallwellen zu entdecken, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Doppler-Effekt als Möglichkeit, das Scrollen eines Artikels auf einem Laptop mit Handgesten zu steuern.](controls-doppler.png)

Wenn die Frequenz des zurückgeworfenen Klangs von der ursprünglichen abweicht, können wir erkennen, dass die Bewegung des Objekts stattgefunden hat. Auf diese Weise können wir eine Handbewegung nur mit einem eingebauten Mikrofon erkennen!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) realisiert werden, die von Daniel Rapp erstellt wurde — es kann so einfach sein, die Differenz zwischen zwei Frequenzen zu berechnen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Das `diff` wäre der Unterschied zwischen der Anfangsposition der Hand und der Endposition.

Dieser Ansatz gibt uns nicht die volle Flexibilität wie ein Gamepad oder sogar Leap Motion, aber es ist definitiv eine interessante, unkonventionelle Alternative. Sie können es verwenden, um eine Seite freihändig zu scrollen oder ein Theremin zu spielen, aber es sollte auch ausreichen, um das Schiff auf dem Bildschirm nach oben und unten zu bewegen, wenn es korrekt implementiert wird.

## MaKey MaKey

Wenn Sie völlig bananas gehen wollen, können Sie [MaKey MaKey](https://makeymakey.com/) verwenden, ein Board, das alles in einen Controller verwandeln kann — es geht darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Berührungsschnittstellen zu verwenden.

![Steuerung eines Bananenklaviers mit Makey Makey.](controls-banana.png)

Schauen Sie sich das [Banana-Klavier-Video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie den [Quickstart-Guide](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle benötigten Informationen.

Es gibt sogar eine [Cylon.js-unterstützte Makey Button-Funktionalität](https://cylonjs.com/documentation/drivers/makey-button/), inspiriert vom MaKey MaKey-Board, sodass Sie das beliebte Cylon-Robotics-Framework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Verbinden der Boards und Verwenden könnte so aussehen:

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

Wie in der Beschreibung steht: dieser GPIO-Treiber ermöglicht es Ihnen, einen 10 MOhm-Widerstand an einen digitalen Pin Ihres Arduino oder Raspberry Pi anzuschließen, um Ihre Roboter mit Bananen, Ton oder zeichnenbaren Schaltkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen haben die Experimente gefallen — wenn Sie andere haben, die auch andere interessieren könnten, zögern Sie nicht, hier Details hinzuzufügen.

Und denken Sie daran: haben Sie Spaß beim Erstellen von Spielen!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
