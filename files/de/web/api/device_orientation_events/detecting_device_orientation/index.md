---
title: Erkennung der Geräteausrichtung
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Zunehmend können webfähige Geräte ihre **Ausrichtung** bestimmen; das heißt, sie können Daten melden, die Änderungen ihrer Ausrichtung in Bezug auf die Schwerkraft anzeigen. Insbesondere Handheld-Geräte wie Mobiltelefone können diese Informationen nutzen, um das Display automatisch so zu drehen, dass es aufrecht bleibt und eine Breitbildansicht der Webinhalte bietet, wenn das Gerät so gedreht wird, dass seine Breite größer als seine Höhe ist.

Es gibt zwei JavaScript-Ereignisse, die Ausrichtungsinformationen verarbeiten. Das erste ist das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), das gesendet wird, wenn das Beschleunigungsmesser eine Änderung der Ausrichtung des Geräts erkennt. Durch den Empfang und die Verarbeitung der von diesen Ausrichtungsereignissen gemeldeten Daten ist es möglich, interaktiv auf Dreh- und Höhenänderungen zu reagieren, die durch das Bewegen des Geräts durch den Benutzer verursacht werden.

Das zweite Ereignis ist das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent), das gesendet wird, wenn eine Änderung der Beschleunigung hinzugefügt wurde. Es unterscheidet sich vom [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), da es auf Änderungen in der Beschleunigung anstatt auf Ausrichtung lauscht. Sensoren, die häufig in der Lage sind, [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) zu erkennen, umfassen Sensoren in Laptops zum Schutz beweglicher Speichergeräte. [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent) wird häufiger in mobilen Geräten gefunden.

## Verarbeitung von Ausrichtungsereignissen

Alles, was Sie tun müssen, um Änderungen in der Ausrichtung zu empfangen, ist, auf das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis zu lauschen:

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

Nach der Registrierung Ihres Ereignis-Listeners (in diesem Fall eine JavaScript-Funktion namens `handleOrientation()`), wird Ihre Listener-Funktion periodisch mit aktualisierten Ausrichtungsdaten aufgerufen.

Das Ausrichtungsereignis enthält vier Werte:

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute)
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha)
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta)
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma)

Die Ereignishandler-Funktion kann folgendermaßen aussehen:

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // Do stuff with the new orientation data
}
```

> **Note:** [parallax](https://github.com/wagerfield/parallax) ist ein Polyfill zur Normalisierung der Beschleunigungs- und Gyroskopdaten auf Mobilgeräten. Dies ist nützlich, um einige der Unterschiede in der Geräteunterstützung für die Geräteaussrichtung zu überwinden.

### Erklärung der Ausrichtungswerte

Der für jede Achse gemeldete Wert gibt die Drehung um eine gegebene Achse in Bezug zu einem Standardkoordinatenrahmen an. Diese werden im Artikel [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) detaillierter beschrieben, der unten zusammengefasst wird.

- Der [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) Wert repräsentiert die Bewegung des Geräts um die z-Achse, dargestellt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- Der [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) Wert repräsentiert die Bewegung des Geräts um die x-Achse, dargestellt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert eine Vorwärts- und Rückwärtsbewegung des Geräts.
- Der [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) Wert repräsentiert die Bewegung des Geräts um die y-Achse, dargestellt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert eine Links-rechts-Bewegung des Geräts.

### Ausrichtungsbeispiel

Dieses Beispiel funktioniert in jedem Browser, der das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis unterstützt und auf einem Gerät läuft, das seine Ausrichtung erkennen kann.

Stellen wir uns also einen Ball in einem Garten vor:

```html
<div class="garden">
  <div class="ball"></div>
</div>
Hold the device parallel to the ground. Rotate along its x and y axes to see the
ball move up/down and left/right respectively.
<pre class="output"></pre>
```

Dieser Garten ist 200 Pixel breit (ja, er ist ein kleiner), und der Ball ist in der Mitte:

```css
.garden {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #ccc;
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

Nun, wenn wir unser Gerät bewegen, bewegt sich der Ball entsprechend:

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

{{LiveSampleLink("Orientation_example", "Klicken Sie hier")}}, um dieses Beispiel in einem neuen Fenster zu öffnen; da [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) nicht in einem {{HTMLElement("iframe")}} mit Cross-Origin in allen Browsern funktioniert.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Verarbeitung von Bewegungsevents

Bewegungsevents werden auf die gleiche Weise wie die Ausrichtungsereignisse verarbeitet, außer dass sie ihren eigenen Ereignisnamen haben: [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)

```js
window.addEventListener("devicemotion", handleMotion, true);
```

Was sich wirklich geändert hat, sind die Informationen, die innerhalb des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekts bereitgestellt werden, das als Parameter des Ereignis-Listeners (`handleMotion()` in unserem Beispiel) übergeben wird.

Das Bewegungsevent enthält vier Eigenschaften:

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration)
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate)
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval)

### Erklärung der Bewegungswerte

Die [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekte bieten Webentwicklern Informationen zur Geschwindigkeit von Änderungen der Position und Ausrichtung des Geräts. Die Änderungen werden entlang dreier Achsen bereitgestellt (siehe [Orientierung und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details).

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
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von links nach rechts durch die Ebene des Bildschirms (oder der Tastatur bei Desktops) verläuft.
- `gamma`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von unten nach oben durch die Ebene des Bildschirms (oder der Tastatur bei Desktops) verläuft.

Schließlich repräsentiert [`interval`](/de/docs/Web/API/DeviceMotionEvent/interval) das Intervall in Millisekunden, in dem Daten vom Gerät abgerufen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [Orientierung und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Verwendung von deviceorientation bei 3D-Transformationen](/de/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 2D-Labyrinthspiel mit Geräteaussrichtung](/de/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
