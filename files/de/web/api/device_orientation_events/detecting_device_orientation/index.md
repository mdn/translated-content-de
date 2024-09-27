---
title: Erkennung der Geräteausrichtung
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Immer mehr webfähige Geräte sind in der Lage, ihre **Ausrichtung** zu bestimmen; das heißt, sie können Daten melden, die Änderungen ihrer Ausrichtung in Relation zur Schwerkraft anzeigen. Insbesondere handgeführte Geräte wie Mobiltelefone können diese Information nutzen, um das Display automatisch zu drehen und es aufrecht zu halten, indem sie beim Drehen des Geräts, so dass seine Breite größer ist als seine Höhe, eine Breitbildansicht der Webinhalte präsentieren.

Es gibt zwei JavaScript-Ereignisse, die mit Ausrichtungsinformationen umgehen. Das erste ist das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), das gesendet wird, wenn der Beschleunigungsmesser eine Änderung der Geräteaussrichtung erkennt. Durch das Empfangen und Verarbeiten der von diesen Orientierungsevents gemeldeten Daten ist es möglich, interaktiv auf Rotations- und Höhenänderungen zu reagieren, die durch das Bewegen des Geräts durch den Benutzer verursacht werden.

Das zweite Ereignis ist das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent), das gesendet wird, wenn eine Änderung der Beschleunigung hinzugefügt wurde. Es unterscheidet sich vom [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), da es auf Änderungen der Beschleunigung im Gegensatz zur Ausrichtung hört. Sensoren, die typischerweise in der Lage sind, [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) zu erkennen, sind Sensoren in Laptops, um bewegliche Speichergeräte zu schützen. [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent) findet sich häufiger in Mobilgeräten.

## Verarbeitung von Orientierungsevents

Alles, was Sie tun müssen, um Änderungen der Ausrichtung zu empfangen, ist, dem [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis zuzuhören:

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

Nachdem Sie Ihren Ereignis-Listener registriert haben (in diesem Fall eine JavaScript-Funktion namens `handleOrientation()`), wird Ihre Listener-Funktion periodisch mit aktualisierten Ausrichtungsdaten aufgerufen.

Das Orientierungsevent enthält vier Werte:

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute)
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha)
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta)
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma)

Die Ereignishandlerfunktion könnte so aussehen:

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // Do stuff with the new orientation data
}
```

> **Note:** [parallax](https://github.com/wagerfield/parallax) ist ein Polyfill zur Normalisierung von Beschleunigungs- und Gyroskopdaten auf mobilen Geräten. Dies ist nützlich, um einige der Unterschiede in der Gerätenunterstützung für die Geräteausrichtung zu überwinden.

### Erklärung der Orientierungswerte

Der für jede Achse gemeldete Wert gibt die Rotationsmenge um eine gegebene Achse in Bezug auf ein Standardkoordinatensystem an. Diese werden im Artikel [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) ausführlicher beschrieben, der unten zusammengefasst wird.

- Der Wert [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) repräsentiert die Bewegung des Geräts um die z-Achse, dargestellt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- Der Wert [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) repräsentiert die Bewegung des Geräts um die x-Achse, dargestellt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert eine Vorwärts-zu-Rückwärts-Bewegung des Geräts.
- Der Wert [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) repräsentiert die Bewegung des Geräts um die y-Achse, dargestellt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert eine Links-zu-Rechts-Bewegung des Geräts.

### Orientierungsbeispiel

Dieses Beispiel funktioniert in jedem Browser, der das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis unterstützt und auf einem Gerät läuft, das seine Ausrichtung erkennen kann.

Stellen wir uns einen Ball in einem Garten vor:

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

{{LiveSampleLink("Orientation_example", "Klicken Sie hier")}} um dieses Beispiel in einem neuen Fenster zu öffnen; da [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) in einem cross-origin {{HTMLElement("iframe")}} in allen Browsern nicht funktioniert.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Verarbeitung von Bewegungsevents

Bewegungsevents werden auf die gleiche Weise behandelt wie die Orientierungsevents, mit Ausnahme, dass sie ihren eigenen Eventnamen haben: [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)

```js
window.addEventListener("devicemotion", handleMotion, true);
```

Was sich wirklich geändert hat, sind die Informationen, die im [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekt enthalten sind, das als Parameter des Ereignis-Listeners (`handleMotion()` in unserem Beispiel) übergeben wird.

Das Bewegungsevent enthält vier Eigenschaften:

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration)
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate)
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval)

### Erklärung der Bewegungswerte

Die [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekte bieten Webentwicklern Informationen über die Geschwindigkeit der Änderungen der Position und Ausrichtung des Geräts. Die Änderungen werden entlang dreier Achsen bereitgestellt (siehe [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details).

Für [`acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) und [`accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) entsprechen diese Achsen den folgenden:

- `x`
  - : Repräsentiert die Achse von Westen nach Osten
- `y`
  - : Repräsentiert die Achse von Süden nach Norden
- `z`
  - : Repräsentiert die Achse senkrecht zum Boden

Für [`rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) ist die Situation etwas anders; die Informationen entsprechen in jedem Fall dem Folgenden:

- `alpha`
  - : Repräsentiert eine Rotationsrate entlang der Achse senkrecht zum Bildschirm (oder zur Tastatur für Desktops).
- `beta`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von links nach rechts der Ebene des Bildschirms verläuft (oder der Tastatur für Desktops).
- `gamma`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von unten nach oben der Ebene des Bildschirms verläuft (oder der Tastatur für Desktops).

Schließlich repräsentiert [`interval`](/de/docs/Web/API/DeviceMotionEvent/interval) das Intervall der Zeit, in Millisekunden, in dem die Daten vom Gerät bezogen werden.

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
