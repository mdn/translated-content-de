---
title: Erkennung der Geräteausrichtung
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Immer mehr webfähige Geräte sind in der Lage, ihre **Ausrichtung** zu bestimmen; das heißt, sie können Daten über Änderungen ihrer Ausrichtung im Verhältnis zur Anziehungskraft melden. Insbesondere handgehaltene Geräte wie Mobiltelefone können diese Informationen nutzen, um das Display automatisch zu drehen und eine Breitbildansicht der Webinhalte darzustellen, wenn das Gerät so gedreht wird, dass seine Breite größer ist als seine Höhe.

Es gibt zwei JavaScript-Ereignisse, die mit Ausrichtungsinformationen umgehen. Das erste ist das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), das gesendet wird, wenn das Beschleunigungsmessgerät eine Änderung der Ausrichtung des Geräts erkennt. Durch das Empfangen und Verarbeiten der von diesen Ausrichtungsereignissen gemeldeten Daten ist es möglich, interaktiv auf Rotations- und Elevationsänderungen zu reagieren, die durch das Bewegen des Geräts durch den Benutzer verursacht werden.

Das zweite Ereignis ist das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent), das gesendet wird, wenn eine Beschleunigungsänderung hinzugefügt wurde. Es unterscheidet sich vom [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), da es auf Änderungen der Beschleunigung im Gegensatz zur Ausrichtung lauscht. Sensoren, die häufig in der Lage sind, ein [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) zu erkennen, umfassen Sensoren in Laptops zum Schutz beweglicher Speichermedien. Das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent) ist häufiger auf mobilen Geräten zu finden.

## Verarbeitung von Ausrichtungsereignissen

Alles, was Sie tun müssen, um Änderungen der Ausrichtung zu empfangen, ist, das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis abzuhören:

```js
window.addEventListener("deviceorientation", handleOrientation);
```

Nachdem Sie Ihren Ereignis-Listener registriert haben (in diesem Fall eine JavaScript-Funktion namens `handleOrientation()`), wird Ihre Listener-Funktion regelmäßig mit aktualisierten Ausrichtungsdaten aufgerufen.

Das Ausrichtungsereignis enthält vier Werte:

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute)
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha)
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta)
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma)

Die Ereignis-Handler-Funktion kann wie folgt aussehen:

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
> [parallax](https://github.com/wagerfield/parallax) ist ein Polyfill zur Normalisierung der Beschleunigungs- und Gyroskopdaten auf mobilen Geräten. Dies ist nützlich, um einige der Unterschiede in der Geräteunterstützung für die Geräteausrichtung zu überwinden.

### Erklärung der Ausrichtungswerte

Der für jede Achse gemeldete Wert gibt den Grad der Rotation um eine bestimmte Achse in Bezug auf ein standardmäßiges Koordinatenrahmen an. Diese werden ausführlicher im Artikel [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) beschrieben, der unten zusammengefasst ist.

- Der [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha)-Wert repräsentiert die Bewegung des Geräts um die z-Achse, dargestellt in Gradwerten von 0 (einschließlich) bis 360 (ausschließlich).
- Der [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta)-Wert repräsentiert die Bewegung des Geräts um die x-Achse, dargestellt in Gradwerten von -180 (einschließlich) bis 180 (ausschließlich). Dies stellt eine Vorwärts- und Rückwärtsbewegung des Geräts dar.
- Der [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma)-Wert repräsentiert die Bewegung des Geräts um die y-Achse, dargestellt in Gradwerten von -90 (einschließlich) bis 90 (ausschließlich). Dies stellt eine Links- und Rechtsbewegung des Geräts dar.

### Ausrichtungsbeispiel

Dieses Beispiel funktioniert in jedem Browser, der das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis unterstützt und auf einem Gerät ausgeführt wird, das seine Ausrichtung erkennen kann.

Also stellen wir uns einen Ball in einem Garten vor:

```html
<div class="garden">
  <div class="ball"></div>
</div>
Hold the device parallel to the ground. Rotate along its x and y axes to see the
ball move up/down and left/right respectively.
<pre class="output"></pre>
```

Dieser Garten ist 200 Pixel breit (ja, es ist ein kleiner), und der Ball befindet sich in der Mitte:

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

{{LiveSampleLink("Orientation_example", "Klicken Sie hier")}} um dieses Beispiel in einem neuen Fenster zu öffnen; da [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) nicht in einem fremdursprünglichen {{HTMLElement("iframe")}} in allen Browsern funktioniert.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Verarbeitung von Bewegungsevents

Bewegungsevents werden auf die gleiche Weise wie Ausrichtungsereignisse behandelt, haben jedoch ihren eigenen Ereignisnamen: [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)

```js
window.addEventListener("devicemotion", handleMotion);
```

Was sich wirklich geändert hat, sind die Informationen, die innerhalb des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekts bereitgestellt werden, das als Parameter des Ereignis-Listeners (`handleMotion()` in unserem Beispiel) übergeben wird.

Das Bewegungsevent enthält vier Eigenschaften:

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration)
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate)
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval)

### Erklärung der Bewegungswerte

Die [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekte liefern Webentwicklern Informationen über die Geschwindigkeit der Änderungen der Position und Ausrichtung des Geräts. Die Änderungen werden entlang von drei Achsen bereitgestellt (siehe [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details).

Für [`acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) und [`accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) entsprechen diese Achsen Folgendem:

- `x`
  - : Repräsentiert die Achse von West nach Ost
- `y`
  - : Repräsentiert die Achse von Süd nach Nord
- `z`
  - : Repräsentiert die Achse, die senkrecht zum Boden verläuft

Für [`rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) ist die Situation etwas anders; die Information entspricht Folgendem in jedem Fall:

- `alpha`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die senkrecht zum Bildschirm verläuft (oder zur Tastatur bei Desktop-Geräten).
- `beta`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von links nach rechts der Bildschirmfläche verläuft (oder zur Tastatur bei Desktop-Geräten).
- `gamma`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von unten nach oben der Bildschirmfläche verläuft (oder zur Tastatur bei Desktop-Geräten).

Schließlich stellt [`interval`](/de/docs/Web/API/DeviceMotionEvent/interval) das Zeitintervall in Millisekunden dar, in dem Daten vom Gerät bezogen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Using deviceorientation in 3D Transforms](/de/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 2D Maze-Spiel mit Geräteausrichtung](/de/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
