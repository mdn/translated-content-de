---
title: Erkennen der Geräteausrichtung
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

In zunehmendem Maße sind webfähige Geräte in der Lage, ihre **Ausrichtung** zu bestimmen; das heißt, sie können Daten melden, die Änderungen ihrer Ausrichtung in Bezug auf die Anziehungskraft anzeigen. Insbesondere Handheld-Geräte wie Mobiltelefone können diese Informationen verwenden, um das Display automatisch zu drehen und aufrecht zu halten, sodass bei Drehung des Geräts in den Breitbildmodus gewechselt wird, wenn seine Breite größer als seine Höhe ist.

Es gibt zwei JavaScript-Ereignisse, die mit Ausrichtungsinformationen umgehen. Das erste ist das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), welches gesendet wird, wenn der Beschleunigungssensor eine Änderung der Geräteneigung erkennt. Indem die von diesen Ausrichtungsereignissen gelieferten Daten empfangen und verarbeitet werden, ist es möglich, interaktiv auf Dreh- und Höhenänderungen zu reagieren, die durch das Bewegen des Geräts durch den Benutzer verursacht werden.

Das zweite Ereignis ist das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent), welches gesendet wird, wenn eine Änderung der Beschleunigung hinzugefügt wurde. Es unterscheidet sich vom [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), da es auf Änderungen der Beschleunigung und nicht der Ausrichtung hört. Sensoren, die häufig in der Lage sind, das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) zu erkennen, umfassen Sensoren in Laptops, um bewegliche Speichergeräte zu schützen. Das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent) ist häufiger in mobilen Geräten zu finden.

## Verarbeitung von Ausrichtungsereignissen

Alles, was Sie tun müssen, um Veränderungen der Ausrichtung zu empfangen, ist das Zuhören auf das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis:

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

Nachdem Sie Ihren Ereignis-Listener registriert haben (in diesem Fall eine JavaScript-Funktion namens `handleOrientation()`), wird Ihre Listener-Funktion periodisch mit aktualisierten Ausrichtungsdaten aufgerufen.

Das Ausrichtungsereignis enthält vier Werte:

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute)
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha)
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta)
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma)

Die Event-Handler-Funktion kann folgendermaßen aussehen:

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // Do stuff with the new orientation data
}
```

> [!NOTE] > [parallax](https://github.com/wagerfield/parallax) ist ein Polyfill zur Normalisierung der Beschleunigungs- und Gyroskopdaten auf mobilen Geräten. Dies ist nützlich, um einige der Unterschiede in der Geräteunterstützung für die Geräteausrichtung zu überwinden.

### Erläuterung der Ausrichtungswerte

Der für jede Achse gemeldete Wert gibt die Rotationsmenge um eine bestimmte Achse in Bezug auf ein standardmäßiges Koordinatensystem an. Diese werden im Artikel [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) ausführlicher beschrieben, welcher unten zusammengefasst ist.

- Der [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) Wert repräsentiert die Bewegung des Geräts um die z-Achse, dargestellt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- Der [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) Wert repräsentiert die Bewegung des Geräts um die x-Achse, dargestellt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert eine Vorwärts-Rückwärts-Bewegung des Geräts.
- Der [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) Wert repräsentiert die Bewegung des Geräts um die y-Achse, dargestellt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert eine Links-Rechts-Bewegung des Geräts.

### Beispiel zur Ausrichtung

Dieses Beispiel funktioniert in jedem Browser, der das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis unterstützt und auf einem Gerät läuft, das seine Ausrichtung erkennen kann.

Stellen Sie sich nun einen Ball in einem Garten vor:

```html
<div class="garden">
  <div class="ball"></div>
</div>
Hold the device parallel to the ground. Rotate along its x and y axes to see the
ball move up/down and left/right respectively.
<pre class="output"></pre>
```

Dieser Garten ist 200 Pixel breit (ja, er ist ein kleiner), und der Ball befindet sich im Zentrum:

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

Nun, wenn wir unser Gerät bewegen, wird sich der Ball entsprechend bewegen:

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

{{LiveSampleLink("Orientation_example", "Hier klicken")}}, um dieses Beispiel in einem neuen Fenster zu öffnen; da [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) in einem Cross-Origin {{HTMLElement("iframe")}} in allen Browsern nicht funktioniert.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Verarbeitung von Bewegungsevents

Bewegungsevents werden auf die gleiche Weise wie die Ausrichtungsevents behandelt, mit dem Unterschied, dass sie ihren eigenen Ereignisnamen haben: [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)

```js
window.addEventListener("devicemotion", handleMotion, true);
```

Was sich tatsächlich ändert, sind die Informationen innerhalb des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) Objektes, das als Parameter des Event-Listeners (`handleMotion()` in unserem Beispiel) übergeben wird.

Das Bewegungsevent enthält vier Eigenschaften:

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration)
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate)
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval)

### Erläuterung der Bewegungswerte

Die [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) Objekte bieten Webentwicklern Informationen über die Geschwindigkeit der Änderungen für die Position und Ausrichtung des Geräts. Die Änderungen werden entlang von drei Achsen bereitgestellt (siehe [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details).

Für [`acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) und [`accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) entsprechen diese Achsen den folgenden:

- `x`
  - : Repräsentiert die Achse von West nach Ost
- `y`
  - : Repräsentiert die Achse von Süd nach Nord
- `z`
  - : Repräsentiert die Achse, die senkrecht zum Boden steht

Für [`rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) ist die Situation etwas anders; die Informationen entsprechen in jedem Fall den folgenden:

- `alpha`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die senkrecht zum Bildschirm (oder zur Tastatur bei Desktops) ist.
- `beta`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von links nach rechts über die Ebene des Bildschirms (oder der Tastatur bei Desktops) verläuft.
- `gamma`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von unten nach oben über die Ebene des Bildschirms (oder der Tastatur bei Desktops) verläuft.

Schließlich repräsentiert [`interval`](/de/docs/Web/API/DeviceMotionEvent/interval) das Zeitintervall, in Millisekunden, in dem Daten vom Gerät abgerufen werden.

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
