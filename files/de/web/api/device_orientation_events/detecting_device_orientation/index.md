---
title: Erkennung der Geräteausrichtung
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Webfähige Geräte sind zunehmend in der Lage, ihre **Ausrichtung** zu bestimmen; das heißt, sie können Daten liefern, die Änderungen ihrer Ausrichtung im Verhältnis zur Schwerkraft anzeigen. Insbesondere tragbare Geräte wie Mobiltelefone können diese Informationen nutzen, um das Display automatisch aufrecht zu halten, sodass bei einer Rotation des Geräts in eine breite Ansicht der Webinhalte dargestellt wird.

Zwei JavaScript-Ereignisse verarbeiten Ausrichtungsinformationen. Das erste ist das {{domxref("DeviceOrientationEvent")}}, das gesendet wird, wenn der Beschleunigungsmesser eine Änderung der Geräteausrichtung erkennt. Durch den Empfang und die Verarbeitung der von diesen Ausrichtungsereignissen gemeldeten Daten ist es möglich, interaktiv auf Dreh- und Höhenschwankungen zu reagieren, die durch die Bewegung des Geräts durch den Benutzer verursacht werden.

Das zweite Ereignis ist das {{domxref("DeviceMotionEvent")}}, das gesendet wird, wenn eine Änderung der Beschleunigung hinzugefügt wurde. Es unterscheidet sich vom {{domxref("DeviceOrientationEvent")}}, da es auf Änderungen der Beschleunigung anstelle der Ausrichtung abzielt. Sensoren, die üblicherweise {{domxref("DeviceMotionEvent")}} erkennen können, finden sich z. B. in Laptops zum Schutz von beweglichen Speichermedien. Das {{domxref("DeviceOrientationEvent")}} ist häufiger in mobilen Geräten zu finden.

## Verarbeitung von Ausrichtungsereignissen

Um mit dem Empfang von Ausrichtungsänderungen zu beginnen, müssen Sie auf das {{domxref("Window.deviceorientation_event", "deviceorientation")}}-Ereignis hören:

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

Nachdem Sie Ihren Ereignis-Listener registriert haben (in diesem Fall eine JavaScript-Funktion namens `handleOrientation()`), wird Ihre Listener-Funktion periodisch mit aktualisierten Ausrichtungsdaten aufgerufen.

Das Ausrichtungsereignis enthält vier Werte:

- {{domxref("DeviceOrientationEvent.absolute")}}
- {{domxref("DeviceOrientationEvent.alpha")}}
- {{domxref("DeviceOrientationEvent.beta")}}
- {{domxref("DeviceOrientationEvent.gamma")}}

Die Ereignis-Handler-Funktion kann etwa so aussehen:

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // Machen Sie etwas mit den neuen Ausrichtungsdaten
}
```

> **Note:** [parallax](https://github.com/wagerfield/parallax) ist ein Polyfill zur Normalisierung der Daten von Beschleunigungsmesser und Gyroskop auf mobilen Geräten. Dies ist nützlich, um einige der Unterschiede in der Geräteunterstützung für die Geräteausrichtung zu überwinden.

### Ausrichtungswerte erklärt

Der für jede Achse gemeldete Wert gibt die Menge der Drehung um eine bestimmte Achse in Bezug auf einen Standardkoordinatenrahmen an. Diese werden im Artikel [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) detaillierter beschrieben, der unten zusammengefasst ist.

- Der {{domxref("DeviceOrientationEvent.alpha")}}-Wert repräsentiert die Bewegung des Geräts um die z-Achse, dargestellt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- Der {{domxref("DeviceOrientationEvent.beta")}}-Wert repräsentiert die Bewegung des Geräts um die x-Achse, dargestellt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies stellt eine Vorwärts- und Rückwärtsbewegung des Geräts dar.
- Der {{domxref("DeviceOrientationEvent.gamma")}}-Wert repräsentiert die Bewegung des Geräts um die y-Achse, dargestellt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies stellt eine Links-rechts-Bewegung des Geräts dar.

### Ausrichtungsbeispiel

Dieses Beispiel funktioniert in jedem Browser, der das {{domxref("Window.deviceorientation_event", "deviceorientation")}}-Ereignis unterstützt und auf einem Gerät läuft, das seine Ausrichtung erkennen kann.

Stellen wir uns also einen Ball in einem Garten vor:

```html
<div class="garden">
  <div class="ball"></div>
</div>
Halten Sie das Gerät parallel zum Boden. Drehen Sie entlang seiner x- und y-Achsen, um zu sehen, wie sich
der Ball nach oben/unten und links/rechts bewegt.
<pre class="output"></pre>
```

Dieser Garten ist 200 Pixel breit (ja, es ist ein kleiner Garten), und der Ball befindet sich in der Mitte:

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
  let x = event.beta; // In Grad im Bereich [-180,180)
  let y = event.gamma; // In Grad im Bereich [-90,90)

  output.textContent = `beta: ${x}\n`;
  output.textContent += `gamma: ${y}\n`;

  // Weil wir nicht wollen, dass das Gerät auf dem Kopf steht,
  // beschränken wir den x-Wert auf den Bereich [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // Um die Berechnung zu erleichtern, verschieben wir den Bereich von
  // x und y auf [0,180]
  x += 90;
  y += 90;

  // 10 ist die Hälfte der Größe des Balles
  // Es zentriert den Positionierungspunkt auf die Mitte des Balles
  ball.style.left = `${(maxY * y) / 180 - 10}px`; // Drehung des Geräts um die y-Achse bewegt den Ball horizontal
  ball.style.top = `${(maxX * x) / 180 - 10}px`; // Drehung des Geräts um die x-Achse bewegt den Ball vertikal
}

window.addEventListener("deviceorientation", handleOrientation);
```

{{LiveSampleLink("Orientation_example", "Klicken Sie hier")}}, um dieses Beispiel in einem neuen Fenster zu öffnen; da {{domxref("Window.deviceorientation_event", "deviceorientation")}} in einem plattformübergreifenden {{HTMLElement("iframe")}} nicht in allen Browsern funktioniert.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## Verarbeitung von Bewegungsevents

Bewegungsereignisse werden auf dieselbe Weise wie die Ausrichtungsereignisse verarbeitet, außer dass sie ihren eigenen Ereignisnamen haben: {{domxref("Window.devicemotion_event", "devicemotion")}}

```js
window.addEventListener("devicemotion", handleMotion, true);
```

Was sich wirklich geändert hat, sind die Informationen, die innerhalb des {{domxref("DeviceMotionEvent")}}-Objekts bereitgestellt werden, das als Parameter des Ereignis-Listeners (`handleMotion()` in unserem Beispiel) übergeben wird.

Das Bewegungsevent enthält vier Eigenschaften:

- {{domxref("DeviceMotionEvent.acceleration")}}
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}}
- {{domxref("DeviceMotionEvent.rotationRate")}}
- {{domxref("DeviceMotionEvent.interval")}}

### Bewegungswerte erklärt

Die {{domxref("DeviceMotionEvent")}}-Objekte bieten Webentwicklern Informationen über die Geschwindigkeit der Änderungen der Position und Ausrichtung des Geräts. Die Änderungen werden entlang drei Achsen bereitgestellt (siehe [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details).

Für {{domxref("DeviceMotionEvent.acceleration","acceleration")}} und {{domxref("DeviceMotionEvent.accelerationIncludingGravity","accelerationIncludingGravity")}} entsprechen diese Achsen den folgenden:

- `x`
  - : Repräsentiert die Achse von West nach Ost
- `y`
  - : Repräsentiert die Achse von Süd nach Nord
- `z`
  - : Repräsentiert die Achse senkrecht zum Boden

Für {{domxref("DeviceMotionEvent.rotationRate","rotationRate")}} ist die Situation etwas anders; die Informationen entsprechen in jedem Fall dem Folgenden:

- `alpha`
  - : Repräsentiert eine Rotationsrate entlang der Achse senkrecht zum Bildschirm (oder Tastatur bei Desktop).
- `beta`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von links nach rechts der Ebene des Bildschirms (oder Tastatur bei Desktop) verläuft.
- `gamma`
  - : Repräsentiert eine Rotationsrate entlang der Achse, die von unten nach oben der Ebene des Bildschirms (oder Tastatur bei Desktop) verläuft.

Schließlich repräsentiert {{domxref("DeviceMotionEvent.interval","interval")}} das Zeitintervall in Millisekunden, in dem Daten vom Gerät bezogen werden.

## Spezifikationen

{{Specifications}}

## Browserunterstützung

{{Compat}}

## Siehe auch

- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceMotionEvent")}}
- [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Using deviceorientation in 3D Transforms](/de/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 2D maze game with device orientation](/de/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
