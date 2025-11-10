---
title: XRReferenceSpace
slug: Web/API/XRReferenceSpace
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{secureContext_header}}

Das **`XRReferenceSpace`**-Interface der WebXR Device API beschreibt das Koordinatensystem für eine spezifische verfolgte Entität oder ein Objekt innerhalb der virtuellen Welt unter Verwendung eines bestimmten Verfolgungsverhaltens. Das Verfolgungsverhalten wird durch den ausgewählten [Referenzraumtyp](#referenzraumtypen) definiert. Es erweitert die Basisklasse [`XRSpace`](/de/docs/Web/API/XRSpace), indem es Unterstützung für mehrere verschiedene Verfolgungsverhalten hinzufügt sowie um einen neuen Referenzraum anzufordern, der die Versatztransformation zwischen dem verfolgten Objekt und einem anderen Ort in der Welt beschreibt.

Alle Referenzräume - mit der alleinigen Ausnahme von begrenzten Referenzräumen - werden mithilfe des Typs `XRReferenceSpace` beschrieben. Begrenzte Räume werden als [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Objekte implementiert. Diese sind spezielle Räume, die Ihnen erlauben, einen Bereich festzulegen, innerhalb dessen es "sicher" ist, sich zu bewegen. Für XR-Systeme, die es dem Nutzer erlauben, sich physisch zu bewegen, wie etwa solche, die Bewegungen mit einer realen Kamera verfolgen, definiert diese Grenze die Ränder des Bereichs, in dem sich der Nutzer bewegen kann, sei es aufgrund physischer Hindernisse oder aufgrund von Einschränkungen der XR-Hardware. Weitere Informationen zur Nutzung von Grenzen, um den Nutzer vor Kollisionen mit physischen und virtuellen Hindernissen zu schützen, finden Sie im Artikel [Verwendung von begrenzten Referenzräumen, um den Betrachter zu schützen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`XRReferenceSpace` erbt die Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget), definiert aber keine zusätzlichen Eigenschaften._

## Instanz-Methoden

_`XRReferenceSpace` erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget) zusätzlich zu den folgenden Methoden._

- [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace)
  - : Erstellt und gibt ein neues Referenzraumobjekt des gleichen Typs zurück, auf dem Sie die Methode aufrufen (also entweder `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)). Der neue Referenzraum kann verwendet werden, um ein Koordinatensystem von dem Referenzraum des Objekts, auf dem die Methode aufgerufen wird, in ein anderes Koordinatensystem zu transformieren. Dies ist nützlich zum Positionieren von Objekten beim Rendern und zum Ausführen der benötigten Transformationen, wenn die Position und/oder Ausrichtung des Betrachters im 3D-Raum geändert werden.

## Ereignisse

- [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)
  - : Das `reset`-Ereignis wird an ein `XRReferenceSpace`-Objekt gesendet, wenn der Browser eine Diskontinuität zwischen dem Ursprung des verfolgten Objekts und der Umgebung oder dem Standort des Nutzers erkennt. Dies kann zum Beispiel passieren, nachdem der Nutzer sein XR-Gerät neu kalibriert hat oder wenn das Gerät seinen Ursprung automatisch anpasst, nachdem das Tracking verloren und wiederhergestellt wurde.

## Referenzraumtypen

Die Arten von Referenzräumen sind in der Tabelle unten aufgelistet, mit kurzen Informationen zu ihren Anwendungsfällen und welche Schnittstelle verwendet wird, um sie zu implementieren.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), der dem `local`-Typ ähnlich ist, außer dass der Nutzer nicht erwartet wird, sich außerhalb eines vorgegebenen Bereichs zu bewegen, der durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben wird.
- `local`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, dessen nativer Ursprung sich nahe der Position des Nutzers befindet zu dem Zeitpunkt, zu dem die Sitzung erstellt wurde. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Der Nutzer wird nicht erwartet, sich wesentlich über seine Ausgangsposition hinaus zu bewegen, und das Tracking ist für diesen Anwendungsfall optimiert. Für Geräte mit sechs Freiheitsgraden (6DoF) Tracking versucht der `local`-Referenzraum, den Ursprung stabil in Bezug auf die Umgebung zu halten.
- `local-floor`
  - : Ein `XRReferenceSpace`, der dem `local`-Typ ähnelt, außer dass die Ausgangsposition an einem sicheren Ort für den Nutzer platziert wird, wobei der Wert der y-Achse bei 0 auf Bodenebene liegt. Wenn diese Bodenebene nicht bekannt ist, wird der {{Glossary("user_agent", "Benutzeragent")}} die Bodenebene schätzen. Wenn die geschätzte Bodenebene ungleich null ist, wird erwartet, dass der Browser sie in einer Weise aufrundet, die {{Glossary("Fingerprinting", "Fingerprinting")}} vermeidet (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, der dem Nutzer völlige Bewegungsfreiheit erlaubt, möglicherweise über extrem lange Distanzen von ihrem Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; das Tracking wird für Stabilität um die aktuelle Position des Nutzers optimiert, daher kann der native Ursprung nach Bedarf driften, um diesem Bedarf gerecht zu werden.
- `viewer`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, dessen nativer Ursprung die Position und Ausrichtung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen sich der Nutzer physisch bewegen kann und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession) unterstützt, sowohl immersiv als auch inline, obwohl es für Inline-Sitzungen am nützlichsten ist. Es ist besonders nützlich, um die Entfernung zwischen dem Betrachter und einer Eingabe zu bestimmen oder beim Arbeiten mit Versatzräumen. Andernfalls wird typischerweise einer der anderen Referenzraumtypen häufiger verwendet.

## Nutzungshinweise

### Erstellen eines XRReferenceSpace

Es gibt zwei Situationen, in denen Sie ein `XRReferenceSpace` erhalten müssen. Die erste ist, wenn Sie Ihre Szene einrichten und einen Referenzraum benötigen, um für die Dauer der [`XRSession`](/de/docs/Web/API/XRSession) den Standpunkt des Benutzers auf die Welt darzustellen. Um dies zu tun, rufen Sie die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der [`XRSession`](/de/docs/Web/API/XRSession) auf und geben Sie den Referenzraumtyp an, den Sie erhalten möchten.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  // …
});
```

Die andere Situation, in der Sie möglicherweise einen neuen Referenzraum benötigen, ist, wenn Sie den Ursprung an eine neue Position verschieben müssen; dies wird häufig getan, zum Beispiel, wenn Ihr Projekt dem Nutzer erlaubt, sich mit Eingabegeräten wie Tastatur, Maus, Touchpad oder Spielsteuerungen, die nicht über das XR-Gerät verbunden sind, durch die Umgebung zu bewegen. Da der Ursprung typischerweise der Standort des Nutzers im Raum ist, müssen Sie den Ursprung ändern, um deren Bewegungen und Orientierungsänderungen widerzuspiegeln.

Um die Ansicht des Nutzers auf die Welt zu bewegen oder zu drehen, müssen Sie das `XRReferenceSpace`, das diesen Blickwinkel darstellt, ändern. `XRReferenceSpace` ist jedoch unveränderlich, daher müssen Sie stattdessen einen neuen Referenzraum erstellen, der den geänderten Blickwinkel darstellt. Dies ist leicht mit der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) zu erreichen.

```js
let offsetTransform = new XRRigidTransform(
  { x: 2, y: 0, z: 1 },
  { x: 0, y: 0, z: 0, w: 1 },
);
xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(offsetTransform);
```

Dies ersetzt das `XRReferenceSpace` durch ein neues, dessen Ursprung und Ausrichtung angepasst sind, um den neuen Ursprung bei (2, 0, 1) relativ zum aktuellen Ursprung zu platzieren und rotiert mit einem Einheit-{{Glossary("quaternion", "Quaternion")}}, das den Raum so orientiert, dass der Betrachter relativ zur vorherigen Weltorientierung nach oben schaut.

### Geometrie

Der native Ursprung eines `XRReferenceSpace` wird immer so konfiguriert, dass +X als rechts, +Y als aufwärts und +Z als "rückwärts" oder in Richtung des Nutzers betrachtet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Ansichtspunkte und Betrachter: Kameras in WebXR simulieren](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Mathematik mit Matrizen für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Orientierung und Bewegungsabläufe](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung von begrenzten Referenzräumen, um den Nutzer zu schützen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
