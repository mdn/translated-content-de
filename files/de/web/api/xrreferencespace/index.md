---
title: XRReferenceSpace
slug: Web/API/XRReferenceSpace
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{secureContext_header}}

Die **`XRReferenceSpace`**-Schnittstelle der WebXR Device API beschreibt das Koordinatensystem für eine bestimmte verfolgte Entität oder ein Objekt in der virtuellen Welt unter Verwendung eines spezifizierten Trackingverhaltens. Das Trackingverhalten wird durch den ausgewählten [Referenzraumtyp](#referenzraumtypen) definiert. Sie erweitert die Basisklasse [`XRSpace`](/de/docs/Web/API/XRSpace) durch die Unterstützung mehrerer unterschiedlicher Trackingverhalten und ermöglicht es, einen neuen Referenzraum anzufordern, der die Versatztransformation zwischen dem verfolgten Objekt und einem anderen Ort in der Welt beschreibt.

Alle Referenzräume - mit der einzigen Ausnahme der begrenzten Referenzräume - werden unter Verwendung des `XRReferenceSpace`-Typs beschrieben. Begrenzte Räume werden als [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Objekte implementiert. Diese sind spezielle Räume, die es Ihnen ermöglichen, einen Bereich festzulegen, innerhalb dessen es für den Betrachter "sicher" ist, sich zu bewegen. Bei XR-Systemen, die es dem Benutzer erlauben, sich physisch zu bewegen, wie z. B. solche, die die Bewegung mit einer realen Kamera verfolgen, legt diese Grenze die Bereiche fest, in denen sich der Benutzer bewegen kann, sei es aufgrund physischer Hindernisse oder aufgrund von Einschränkungen der XR-Hardware. Weitere Informationen zur Verwendung von Grenzen, um den Benutzer vor Kollisionen mit physischen und virtuellen Hindernissen zu schützen, finden Sie im Artikel [Verwendung begrenzter Referenzräume, um den Betrachter zu schützen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`XRReferenceSpace` erbt die Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget), definiert jedoch keine zusätzlichen Eigenschaften._

## Instanz-Methoden

_`XRReferenceSpace` erbt zusätzlich zu den folgenden Methoden auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace)
  - : Erstellt und gibt ein neues Referenzraumobjekt des gleichen Typs zurück, wie das, auf dem Sie die Methode aufrufen (entweder `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)). Der neue Referenzraum kann verwendet werden, um eine Koordinate vom Referenzraum des Objekts, auf dem die Methode aufgerufen wird, in einen anderen Koordinatenraum zu transformieren. Dies ist nützlich, um Objekte beim Rendern zu positionieren und die erforderlichen Transformationen beim Ändern der Position und/oder Orientierung des Betrachters im 3D-Raum durchzuführen.

## Ereignisse

- [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)

  - : Das `reset`-Ereignis wird an ein `XRReferenceSpace`-Objekt gesendet, wenn der Browser eine Diskontinuität zwischen dem Ursprung des verfolgten Objekts und der Umgebung oder Position des Benutzers erkennt. Dies kann beispielsweise auftreten, nachdem der Benutzer sein XR-Gerät neu kalibriert hat, oder wenn das Gerät seinen Ursprung automatisch anpasst, nachdem das Tracking verloren gegangen und wiedererlangt wurde.

## Referenzraumtypen

Die Typen von Referenzräumen sind in der untenstehenden Tabelle aufgelistet, mit kurzen Informationen über ihre Anwendungsfälle und die Schnittstelle, die zu ihrer Implementierung verwendet wird.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), ähnlich wie der Typ `local`, außer dass vom Benutzer erwartet wird, dass er sich nicht außerhalb eines vorgegebenen Grenzbereichs bewegt, der durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt festgelegt wird.
- `local`
  - : Ein `XRReferenceSpace`-Trackingraum, dessen nativer Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Erstellung der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass der Benutzer sich wesentlich, wenn überhaupt, über seine Ausgangsposition hinaus bewegt, und das Tracking ist für diesen Anwendungsfall optimiert. Für Geräte mit sechs Freiheitsgraden (6DoF) versucht der `local`-Referenzraum, den Ursprung stabil relativ zur Umgebung zu halten.
- `local-floor`
  - : Ein `XRReferenceSpace`, ähnlich wie der Typ `local`, außer dass die Ausgangsposition an einem sicheren Ort für den Betrachter platziert wird, wobei der Wert der y-Achse auf 0 am Boden liegt. Wenn dieser Boden nicht bekannt ist, schätzt der {{Glossary("user_agent", "User-Agent")}} das Bodenniveau. Wenn das geschätzte Bodenniveau nicht null ist, wird erwartet, dass der Browser es so rundet, dass {{Glossary("Fingerprinting", "Fingerprinting")}} vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein `XRReferenceSpace`-Trackingraum, der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem große Distanzen vom Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist auf Stabilität um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung bei Bedarf entsprechend driften kann.
- `viewer`
  - : Ein `XRReferenceSpace`-Trackingraum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt. Dies wird in Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession) unterstützt, sowohl immersiv als auch inline, obwohl es für inline-Sitzungen am nützlichsten ist. Es ist besonders nützlich, um den Abstand zwischen dem Betrachter und einer Eingabe zu bestimmen oder beim Arbeiten mit Versatzräumen. In der Regel wird jedoch eine der anderen Referenzraumtypen häufiger verwendet.

## Nutzungshinweise

### Erstellen eines XRReferenceSpace

Es gibt zwei Situationen, in denen Sie einen `XRReferenceSpace` benötigen. Die erste ist, wenn Sie Ihre Szene einrichten und einen Referenzraum benötigen, um den Standpunkt des Benutzers auf die Welt für die Dauer der [`XRSession`](/de/docs/Web/API/XRSession) zu repräsentieren. Um dies zu tun, rufen Sie die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) von [`XRSession`](/de/docs/Web/API/XRSession) auf und geben Sie den gewünschten Referenzraumtyp an.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  // …
});
```

Die andere Situation, in der Sie möglicherweise einen neuen Referenzraum erwerben müssen, ist, wenn Sie den Ursprung an eine neue Position verschieben müssen; dies wird häufig durchgeführt, wenn Ihr Projekt beispielsweise dem Benutzer erlaubt, sich mit Eingabegeräten wie Tastatur, Maus, Touchpad oder Spielsteuerungen, die nicht mit dem XR-Gerät verbunden sind, durch die Umgebung zu bewegen. Da der Ursprung typischerweise der Standort des Benutzers im Raum sein wird, müssen Sie den Ursprung ändern, um seine Bewegung und jegliche Orientierung, die er vornimmt, widerzuspiegeln.

Um die Ansicht des Benutzers der Welt zu verschieben oder zu drehen, müssen Sie den `XRReferenceSpace` ändern, der diesen Standpunkt darstellt. Da `XRReferenceSpace` unveränderlich ist, müssen Sie stattdessen einen neuen Referenzraum erstellen, der den veränderten Standpunkt darstellt. Dies ist leicht mit der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) möglich.

```js
let offsetTransform = new XRRigidTransform(
  { x: 2, y: 0, z: 1 },
  { x: 0, y: 0, z: 0, w: 1 },
);
xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(offsetTransform);
```

Dies ersetzt den `XRReferenceSpace` durch einen neuen, dessen Ursprung und Orientierung so angepasst sind, dass der neue Ursprung relativ zum aktuellen Ursprung bei (2, 0, 1) liegt und mit einem Einheits-{{Glossary("quaternion", "Quaternion")}} gedreht wird, das den Raum so ausrichtet, dass der Betrachter relativ zur vorherigen Weltorientierung gerade nach oben sieht.

### Geometrie

Der native Ursprung eines jeden `XRReferenceSpace` ist immer so konfiguriert, dass +X als rechts, +Y als nach oben und +Z als "rückwärts" oder in Richtung des Benutzers betrachtet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Standpunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung eingeschränkter Referenzräume zum Schutz des Benutzers](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
