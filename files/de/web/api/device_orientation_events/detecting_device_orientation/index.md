---
title: Erkennung der Geräteausrichtung
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Zunehmend sind webfähige Geräte in der Lage, ihre **Ausrichtung** zu bestimmen; das heißt, sie können Daten übermitteln, die Änderungen ihrer Ausrichtung im Verhältnis zur Erdanziehungskraft anzeigen. Insbesondere Handgeräte wie Mobiltelefone können diese Informationen nutzen, um die Anzeige automatisch zu drehen und aufrecht zu halten. Dadurch wird eine Breitbildansicht der Webinhalte angezeigt, wenn das Gerät so gedreht wird, dass seine Breite größer als die Höhe ist.

Es gibt zwei JavaScript-Ereignisse, die mit Ausrichtungsinformationen umgehen. Das erste ist das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), welches gesendet wird, wenn der Beschleunigungssensor eine Änderung in der Ausrichtung des Geräts erkennt. Indem man die von diesen Ausrichtungsereignissen gemeldeten Daten empfängt und verarbeitet, ist es möglich, interaktiv auf Dreh- und Höhenänderungen zu reagieren, die durch die Bewegung des Geräts durch den Benutzer verursacht werden.

Das zweite Ereignis ist das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent), welches gesendet wird, wenn eine Beschleunigungsänderung hinzugefügt wurde. Es unterscheidet sich vom [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), da es auf Beschleunigungsänderungen, und nicht auf Ausrichtungsänderungen, achtet. Sensoren, die typischerweise in der Lage sind, [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) zu erkennen, umfassen Sensoren in Laptops zum Schutz beweglicher Speichervorrichtungen. [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent) kommt häufiger in mobilen Geräten vor.

## Verarbeitung von Ausrichtungsereignissen

Alles, was Sie tun müssen, um mit dem Empfang von Ausrichtungsänderungen zu beginnen, ist das Zuhören auf das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis:

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

Nachdem Sie Ihren Ereignislistener registriert haben (in diesem Fall eine JavaScript-Funktion namens `handleOrientation()`), wird Ihre Listener-Funktion periodisch mit aktualisierten Ausrichtungsdaten aufgerufen.

Das Ausrichtungsereignis enthält vier Werte:

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute)
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha)
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta)
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma)

Die Ereignisbehandlungsfunktion kann folgendermaßen aussehen:

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // Do stuff with the new orientation data
}
```

> [!NOTE]
> [parallax](https://github.com/wagerfield/parallax) ist ein Polyfill zum Normalisieren der Beschleunigungs- und Gyroskopdaten auf mobilen Geräten. Dies ist nützlich, um einige der Unterschiede in der Geräteunterstützung für die Geräteausrichtung zu überwinden.

### Ausrichtungswerte erklärt

Der für jede Achse gemeldete Wert gibt die Rotationsmenge um eine gegebene Achse in Bezug auf ein standardisiertes Koordinatensystem an. Diese werden im Artikel [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) näher erläutert, welcher unten zusammengefasst wird.

- Der Wert [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) repräsentiert die Bewegung des Geräts um die z-Achse, angegeben in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- Der Wert [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) repräsentiert die Bewegung des Geräts um die x-Achse, angegeben in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert eine Vorwärts- und Rückwärtsbewegung des Geräts.
- Der Wert [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) repräsentiert die Bewegung des Geräts um die y-Achse, angegeben in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert eine Links-Rechts-Bewegung des Geräts.

### Ausrichtungsbeispiel

Dieses Beispiel funktioniert in jedem Browser, der das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis unterstützt und auf einem Gerät läuft, das seine Ausrichtung erkennen kann.

Stellen wir uns also einen Ball in einem Garten vor:

```html
<div class="garden">
  <div class="ball"></div>
</div>
Hold the device parallel to the ground. Rotate along its x and y axes to see the
ball move up/down and left/right respectively.
<pre class="output"></pre>
```

Dieser Garten ist 200 Pixel breit (ja, es ist ein kleiner), und der Ball ist in der Mitte:

```css
.garden {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #cccccc;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top: 90px;
  left: 90px;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
```

Wenn wir nun unser Gerät bewegen, wird sich der Ball entsprechend bewegen:

```js
const ball = document.querySelector(".ball");
const garden = document.querySelector(".garden");
const output = document.querySelector(".output");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta; // In degree in the range [-180,180)
  let y = event.gamma; // In degree in the range [-90,90)

  output.textContent = `beta: ${x}\n`;
  output.textContent += `gamma: ${y}\n`;

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It centers the positioning point to the center of the ball
  ball.style.left = `${(maxY * y) / 180 - 10}px`; // rotating device around the y axis moves the ball horizontally
  ball.style.top = `${(maxX * x) / 180 - 10}px`; // rotating device around the x axis moves the ball vertically
}

window.addEventListener("deviceorientation", handleOrientation);
```

{{LiveSampleLink("Orientation_example", "Hier klicken")}}, um dieses Beispiel in einem neuen Fenster zu öffnen; da [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) nicht in einem Cross-Origin {{HTMLElement("iframe")}} in allen Browsern funktioniert.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Verarbeitung von Bewegungsereignissen

Bewegungsereignisse werden genauso behandelt wie die Ausrichtungsereignisse, außer dass sie ihren eigenen Ereignisnamen haben: [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)

```js
window.addEventListener("devicemotion", handleMotion, true);
```

Was sich wirklich geändert hat, sind die Informationen, die innerhalb des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) Objekts bereitgestellt werden, das als Parameter des Ereignis-Listeners übergeben wird (`handleMotion()` in unserem Beispiel).

Das Bewegungsereignis enthält vier Eigenschaften:

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration)
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate)
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval)

### Bewegungswerte erklärt

Die [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) Objekte bieten Webentwicklern Informationen über die Geschwindigkeit der Änderungen in der Position und Ausrichtung des Geräts. Die Änderungen werden entlang dreier Achsen bereitgestellt (Einzelheiten siehe [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)).

Für [`acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) und [`accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) entsprechen diese Achsen den folgenden:

- `x`
  - : Repräsentiert die Achse von Westen nach Osten
- `y`
  - : Repräsentiert die Achse von Süden nach Norden
- `z`
  - : Repräsentiert die Achse senkrecht zum Boden

Für [`rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) ist die Situation etwas anders; die Informationen entsprechen in jedem Fall Folgendem:

- `alpha`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die senkrecht zum Bildschirm (oder zur Tastatur bei Desktops) verläuft.
- `beta`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von links nach rechts der Ebene des Bildschirms (oder der Tastatur bei Desktops) verläuft.
- `gamma`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von unten nach oben der Ebene des Bildschirms (oder der Tastatur bei Desktops) verläuft.

Abschließend repräsentiert [`interval`](/de/docs/Web/API/DeviceMotionEvent/interval) das Zeitintervall in Millisekunden, in dem die Daten vom Gerät abgerufen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Using deviceorientation in 3D Transforms](/de/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 2D maze game with device orientation](/de/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
