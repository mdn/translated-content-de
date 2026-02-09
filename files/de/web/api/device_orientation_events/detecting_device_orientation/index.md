---
title: Erkennen der Geräteorientierung
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: bcfc05aac40b47aecad69d44c54e33bf5f9b4e41
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Zunehmend können webfähige Geräte ihre **Orientierung** bestimmen; das heißt, sie können Daten melden, die Änderungen ihrer Ausrichtung im Verhältnis zur Schwerkraft anzeigen. Insbesondere Handgeräte wie Mobiltelefone können diese Information nutzen, um das Display automatisch so zu drehen, dass es aufrecht bleibt und eine Breitbildansicht der Webinhalte bietet, wenn das Gerät so gedreht wird, dass seine Breite größer als seine Höhe ist.

Es gibt zwei JavaScript-Ereignisse, die mit Orientierungsinformationen umgehen. Das erste ist das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), das gesendet wird, wenn der Beschleunigungsmesser eine Änderung der Ausrichtung des Geräts erkennt. Durch den Empfang und die Verarbeitung der von diesen Orientierungsevents gemeldeten Daten ist es möglich, interaktiv auf Rotations- und Erhöhungsänderungen zu reagieren, die durch die Bewegung des Geräts durch den Benutzer verursacht werden.

Das zweite Ereignis ist das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent), das gesendet wird, wenn eine Änderung der Beschleunigung auftritt. Es unterscheidet sich vom [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent), da es auf Änderungen der Beschleunigung und nicht der Ausrichtung achtet. Sensoren, die gewöhnlich das [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) erkennen können, umfassen Sensoren in Laptops zum Schutz beweglicher Speichermedien. Das [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent) findet sich häufiger in mobilen Geräten.

## Erlaubnis anfordern

Einige {{Glossary("user_agent", "User Agents")}} erfordern eine ausdrückliche Erlaubnis vom Benutzer, bevor auf Geräteorientierungs- und Bewegungsdaten zugegriffen werden kann. In Umgebungen, in denen dies erforderlich ist, können die statischen Methoden [`DeviceOrientationEvent.requestPermission()`](/de/docs/Web/API/DeviceOrientationEvent/requestPermission_static) und [`DeviceMotionEvent.requestPermission()`](/de/docs/Web/API/DeviceMotionEvent/requestPermission_static) verwendet werden, um diese Erlaubnis anzufordern. Beide Methoden geben ein {{jsxref("Promise")}} zurück, das mit `"granted"` oder `"denied"` aufgelöst wird, und beide müssen innerhalb einer Benutzeraktion (wie einem `click`-Ereignishandler) aufgerufen werden.

Da nicht alle User Agents diese Methoden implementieren, sollten Sie diese vor dem Aufrufen überprüfen. Das folgende Beispiel zeigt, wie Sie beide Erlaubnisse von einem Button-Klick-Handler anfordern können:

```js
function handleClick() {
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    // The API requires permission — request it
    Promise.all([
      DeviceMotionEvent.requestPermission(),
      DeviceOrientationEvent.requestPermission(),
    ]).then(([motionPermission, orientationPermission]) => {
      if (
        motionPermission === "granted" &&
        orientationPermission === "granted"
      ) {
        window.addEventListener("devicemotion", handleMotion);
        window.addEventListener("deviceorientation", handleOrientation);
      }
    });
  } else {
    // No permission needed, add event listeners directly
    window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
  }
}
```

## Verarbeitung von Orientierungsevents

Alles, was Sie tun müssen, um Orientierungänderungen zu empfangen, ist das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis zu überwachen:

```js
window.addEventListener("deviceorientation", handleOrientation);
```

Nach der Registrierung Ihres Event-Listeners (in diesem Fall eine JavaScript-Funktion namens `handleOrientation()`) wird Ihre Listener-Funktion periodisch mit aktualisierten Orientierungsdaten aufgerufen.

Das Orientierungsevent enthält vier Werte:

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute)
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha)
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta)
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma)

Die Event-Handler-Funktion könnte folgendermaßen aussehen:

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
> [parallax](https://github.com/wagerfield/parallax) ist ein Polyfill zum Normalisieren der Daten von Beschleunigungsmesser und Gyroskop auf mobilen Geräten. Dies ist nützlich, um einige der Unterschiede bei der Geräteunterstützung für die Geräteorientierung zu überwinden.

### Erklärung der Orientierungswerte

Der für jede Achse gemeldete Wert gibt die Menge der Rotation um eine gegebene Achse in Bezug auf einen Standardkoordinatenrahmen an. Diese werden im Artikel [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) ausführlicher beschrieben, der unten zusammengefasst ist.

- Der Wert [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) repräsentiert die Bewegung des Geräts um die z-Achse, angegeben in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- Der Wert [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) repräsentiert die Bewegung des Geräts um die x-Achse, angegeben in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies stellt eine Vorwärts-Rückwärts-Bewegung des Geräts dar.
- Der Wert [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) repräsentiert die Bewegung des Geräts um die y-Achse, angegeben in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies stellt eine Links-Rechts-Bewegung des Geräts dar.

### Orientierungsbeispiel

Dieses Beispiel funktioniert in jedem Browser, der das [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) unterstützt und auf einem Gerät läuft, das seine Ausrichtung erkennen kann.

Stellen wir uns also einen Ball in einem Garten vor:

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

Wenn wir jetzt unser Gerät bewegen, wird sich der Ball entsprechend bewegen:

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

{{LiveSampleLink("Orientation_example", "Klicken Sie hier")}}, um dieses Beispiel in einem neuen Fenster zu öffnen; weil [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) in einem cross-origin {{HTMLElement("iframe")}} in allen Browsern nicht funktioniert.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Verarbeitung von Bewegungsevents

Bewegungsevents werden auf die gleiche Weise wie Orientierungsevents verarbeitet, mit dem Unterschied, dass sie ihren eigenen Eventnamen haben: [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)

```js
window.addEventListener("devicemotion", handleMotion);
```

Was sich wirklich geändert hat, sind die Informationen, die innerhalb des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekts bereitgestellt werden, das als Parameter des Event-Listeners (`handleMotion()` in unserem Beispiel) übergeben wird.

Das Bewegungsevent enthält vier Eigenschaften:

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration)
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate)
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval)

### Erklärung der Bewegungswerte

Die [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekte liefern Webentwicklern Informationen über die Geschwindigkeit der Änderungen für die Position und Ausrichtung des Geräts. Die Änderungen werden entlang dreier Achsen bereitgestellt (siehe [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details).

Bei [`acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) und [`accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) entsprechen diese Achsen den folgenden:

- `x`
  - : Repräsentiert die Achse von Westen nach Osten
- `y`
  - : Repräsentiert die Achse von Süden nach Norden
- `z`
  - : Repräsentiert die Achse senkrecht zum Boden

Bei [`rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) ist die Situation etwas anders; die Informationen entsprechen den folgenden Fällen:

- `alpha`
  - : Repräsentiert eine Rotationsrate entlang der Achse senkrecht zum Bildschirm (oder der Tastatur für Desktop).
- `beta`
  - : Repräsentiert eine Rotationsrate entlang der Achse von links nach rechts der Ebene des Bildschirms (oder der Tastatur für Desktop).
- `gamma`
  - : Repräsentiert eine Rotationsrate entlang der Achse von unten nach oben der Ebene des Bildschirms (oder der Tastatur für Desktop).

Schließlich repräsentiert [`interval`](/de/docs/Web/API/DeviceMotionEvent/interval) das Zeitintervall in Millisekunden, in dem Daten vom Gerät abgerufen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Using deviceorientation in 3D Transforms](/de/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 2D Maze-Spiel mit Geräteorientierung](/de/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
