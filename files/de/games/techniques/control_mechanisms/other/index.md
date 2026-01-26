---
title: Unkonventionelle Steuerungen
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

Verschiedene Steuerungsmechanismen in Ihrem Spiel helfen, breitere Zielgruppen zu erreichen. Die Implementierung von Mobil- und Desktop-Steuerungen wird empfohlen und ist ein Muss, und Gamepad-Steuerungen sorgen für ein zusätzliches Erlebnis. Aber stellen Sie sich vor, Sie gehen noch weiter – in diesem Artikel erkunden wir verschiedene unkonventionelle Wege, um Ihr Webspiel zu steuern, manche unkonventioneller als andere.

## TV-Fernbedienung

Spiele auf einem Fernsehbildschirm zu spielen muss nicht immer über Konsolen geschehen. Es gibt bereits eine Gamepad-API, die auf Desktop-Computern funktioniert, sodass wir das Erlebnis nachahmen können, aber wir können noch weiter gehen. Moderne Smart-TVs können HTML-Spiele handhaben, da sie über einen eingebauten Browser verfügen, der als Gaming-Plattform verwendet werden kann. Smart-TVs werden mit Fernbedienungen ausgeliefert, die zum Steuern Ihrer Spiele verwendet werden können, wenn Sie wissen, wie.

Das früheste Demo von [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) wurde angepasst, um auf einem großen Fernseher zu funktionieren. Interessanterweise wurde das erste Captain Rogers Spiel (Asteroid Belt of Sirius) für günstige Smartphones mit kleinem Bildschirm und niedrigem Leistungsniveau optimiert, die Firefox OS betrieben – Sie können den Unterschied sehen, den drei Jahre machen können. Die ganze Geschichte können Sie in unserem Hacks-Post [Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) lesen.

![Panasonic TV-Fernbedienungen für das Spiel Captain Rogers: Battle at Andromeda.](controls-tvremote.png)

Die Verwendung einer TV-Fernbedienung zur Steuerung des Spiels erwies sich als überraschend einfach, da die von der Steuerung ausgelösten Ereignisse konventionelle Tastaturtasten emulieren. Captain Rogers hatte die Tastatursteuerung bereits implementiert:

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // move player right
}
```

Es funktioniert sofort. Die Cursortasten sind die vier Richtungs-Pfeiltasten auf der Tastatur, und diese haben exakt die gleichen Keycodes wie die Pfeiltasten auf der Fernbedienung. Wie kennen Sie die Codes für die anderen Tasten der Fernbedienung? Sie können sie überprüfen, indem Sie die Antworten in der Konsole ausgeben:

```js
window.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
});
```

Jede auf der Fernbedienung gedrückte Taste zeigt ihren Keycode in der Konsole an. Sie können auch dieses praktische Cheatsheet unten sehen, wenn Sie mit Panasonic-TVs arbeiten, auf denen Firefox OS läuft:

![Keycodes für Panasonic TV-Fernbedienungen.](controls-tvkeys.png)

Sie können das Navigieren zwischen Zuständen, das Starten eines neuen Spiels, das Steuern des Schiffs und das Zerstören von Objekten, das Pausieren und Neustarten des Spiels hinzufügen. Alles, was nötig ist, ist das Überprüfen von Tasteneingaben:

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

Sie können es in Aktion sehen, indem Sie sich [dieses Video](https://www.youtube.com/watch?v=Bh11sP0bcTY) ansehen.

## Leap Motion

Haben Sie jemals darüber nachgedacht, ein Spiel nur mit Ihren Händen zu steuern? Mit [Leap Motion](https://www.ultraleap.com/), einem immersiven Controller für Spiele und Apps, ist dies möglich.

Leap Motion wird aufgrund der sehr guten Integration mit VR-Headsets immer beliebter – die Demo von [Rainbow Membrane](https://mozilla.github.io/rainbow/) auf einem Oculus Rift mit Leap Motion wurde von JavaScript-Entwicklern, die Demo-Stände auf Konferenzen weltweit besuchten, als eines der besten WebVR-Erlebnisse bewertet.

Neben virtuellen Schnittstellen kann es auch für ein einfaches 2D-Gaming-Erlebnis genutzt werden. Es wäre sehr schwierig, alles nur mit Ihren Händen zu erledigen, aber es ist durchaus machbar für das einfache Captain Rogers Gameplay – das Steuern des Schiffs und das Abfeuern der Geschosse.

Um Leap Motion auf Ihrem Computer in Betrieb zu nehmen, müssen Sie es zuerst installieren, indem Sie die Schritte auf [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) befolgen. Wenn alles installiert ist und der Controller mit Ihrem Computer verbunden ist, können wir mit der Implementierung der Unterstützung in unserem [kleinen Demo](https://github.com/end3r/JavaScript-Game-Controls/) fortfahren. Zuerst fügen wir ein `<script>`-Tag mit der `url`, die auf `https://js.leapmotion.com/leap-0.6.4.min.js` zeigt, hinzu und fügen `<div id="output"></div>` direkt vor dem schließenden `</body>`-Tag für die Ausgabe von Diagnoseinformationen hinzu.

Wir benötigen einige Hilfsvariablen, damit unser Code funktioniert – eine zum Berechnen der Winkel aus Radiant, zwei zur Speicherung des horizontalen und vertikalen Winkels, um den unsere Hand über dem Controller geneigt ist, eine für den Neigungs-Schwellenwert und eine für den Zustand des Greifstatus unserer Hand. Wir fügen diese Zeilen nach allen Event-Listenern für Tastatur und Maus ein, aber vor der `draw`-Methode:

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

Gleich danach nutzen wir die Leap-`loop`-Methode, um die im `hand`-Variable enthaltenen Informationen in jedem Frame zu erhalten:

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

Wenn der `horizontalDegree`-Wert größer als unser `degreeThreshold` ist, der in diesem Fall 30 beträgt, wird das Schiff in jedem Frame um 5 Pixel nach links bewegt. Wenn sein Wert niedriger ist als der negative Wert des Schwellenwerts, wird das Schiff nach rechts bewegt. Die Aufwärts-/Abwärtsbewegung funktioniert ähnlich. Der letzte Wert ist `grabStrength`, der ein Gleitkommawert zwischen 0 und 1 ist – wenn er 1 erreicht (Faust vollständig geschlossen), zeigen wir vorerst einen Alarm an (in einem vollständigen Spiel könnte dies durch die Schießlogik ersetzt werden).

![Unterstützung des Leap Motion Controllers im Spiel, mit sichtbarer Ausgabe für Roll, Pitch und Stärke.](controls-leapmotion.png)

Das war's – alles, was Sie für ein funktionierendes Leap Motion-Beispiel in JavaScript benötigen, ist bereits hier. Sie können die Eigenschaften des `hand` weiter erkunden und jedes Verhalten implementieren, das Sie sich in Ihrem Spiel wünschen.

## Dopplereffekt

Es gibt einen sehr interessanten Artikel über [Motion sensing using the doppler effect](https://danielrapp.github.io/doppler/), der Handbewegungen und das Mikrofon miteinander vermischt. Diesmal geht es darum, Schallwellen zu erkennen, die von Objekten abprallen und zum Mikrofon zurückkehren.

![Dopplereffekt als Mittel zur Steuerung des Scrollens eines Artikels auf einem Laptop mittels Handgesten.](controls-doppler.png)

Wenn die Frequenz des reflektierten Schalls von der ursprünglichen abweicht, können wir erkennen, dass die Bewegung dieses Objekts stattgefunden hat. So können wir eine Handbewegung erkennen, indem wir nur ein eingebautes Mikrofon verwenden!

Dies kann mit [einer kleinen Bibliothek](https://github.com/DanielRapp/doppler) von Daniel Rapp erreicht werden – es kann so einfach sein wie das Berechnen des Unterschieds zwischen zwei Frequenzen:

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

Der `diff` wäre der Unterschied zwischen der anfänglichen Position der Hand und der endgültigen.

Dieser Ansatz bietet nicht die volle Flexibilität eines Gamepads oder sogar Leap Motion, aber er ist definitiv eine interessante, unkonventionelle Alternative. Sie können ihn nutzen, um eine Seite ohne Hände zu scrollen, oder ein Theremin zu spielen, aber er sollte auch ausreichen, um das Schiff nach oben und unten zu bewegen, wenn er korrekt implementiert wird.

## Makey Makey

Wenn Sie völlig verrückt werden wollen, können Sie [Makey Makey](https://makeymakey.com/) verwenden, eine Platine, die alles in einen Controller verwandeln kann – es geht darum, reale, leitfähige Objekte mit einem Computer zu verbinden und sie als Touch-Interfaces zu verwenden.

![Steuerung eines Bananenklaviers mit Makey Makey.](controls-banana.png)

Sehen Sie sich das [Banana Piano Video](https://www.youtube.com/watch?v=_DWQ6ce2Ags) an und besuchen Sie den [Schnellstartleitfaden](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide) für alle benötigten Informationen.

Es gibt sogar eine von Cylon.js unterstützte Makey Button-Funktionalität, inspiriert von der Makey Makey-Platine, sodass Sie das beliebte Cylon-Robotics-Framework für Ihre Experimente mit Arduino oder Raspberry Pi verwenden können. Das Anschließen der Platinen und deren Nutzung kann so aussehen:

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

Wie die Beschreibung besagt: Dieser GPIO-Treiber ermöglicht es Ihnen, einen 10 MOhm-Widerstand an einen digitalen Pin auf Ihrem Arduino oder Raspberry Pi anzuschließen, um Ihre Roboter mit Bananen, Knete oder zeichnbaren Schaltkreisen zu steuern.

## Zusammenfassung

Ich hoffe, Ihnen haben die Experimente gefallen – wenn Sie weitere haben, die Ihrer Meinung nach andere Menschen interessieren könnten, zögern Sie nicht, hier Details hinzuzufügen.

Und denken Sie daran: Haben Sie Spaß beim Spielen!

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
