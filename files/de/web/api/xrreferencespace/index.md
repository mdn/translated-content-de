---
title: XRReferenceSpace
slug: Web/API/XRReferenceSpace
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{secureContext_header}}

Die **`XRReferenceSpace`**-Schnittstelle des WebXR Device API beschreibt das Koordinatensystem für eine spezifische verfolgte Entität oder ein Objekt innerhalb der virtuellen Welt unter Verwendung eines spezifizierten Verhaltens zur Verfolgung. Das Verfolgungsverhalten wird durch den ausgewählten [Referenzraumtyp](#referenzraumtypen) definiert. Es erweitert die Basisklasse [`XRSpace`](/de/docs/Web/API/XRSpace), indem es Unterstützung für mehrere unterschiedliche Verfolgungsverhalten hinzufügt sowie die Möglichkeit, einen neuen Referenzraum zu beantragen, der die Offset-Transformation zwischen dem verfolgten Objekt und einem anderen Ort in der Welt beschreibt.

Alle Referenzräume – mit der einzigen Ausnahme der begrenzten Referenzräume – werden mittels des Typs `XRReferenceSpace` beschrieben. Begrenzte Räume werden als [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Objekte implementiert. Diese sind spezielle Räume, die es ermöglichen, einen Perimeter festzulegen, innerhalb dessen es für den Betrachter "sicher" ist, sich zu bewegen. Für XR-Systeme, die es dem Benutzer erlauben, sich physisch zu bewegen, wie z.B. solche, die Bewegungen mit einer realen Kamera verfolgen, legt diese Grenze die Ränder des Bereichs fest, in dem sich der Benutzer bewegen kann, sei es aufgrund physischer Hindernisse oder aufgrund von Einschränkungen des XR-Equipments. Siehe den Artikel [Verwendung von begrenzten Referenzräumen, um den Betrachter zu schützen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces) für weitere Informationen zur Verwendung von Grenzen, um den Benutzer vor Kollisionen mit sowohl physischen als auch virtuellen Hindernissen zu bewahren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`XRReferenceSpace` erbt die Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget), definiert jedoch keine zusätzlichen Eigenschaften._

## Instanzmethoden

_`XRReferenceSpace` erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget) zusätzlich zu den folgenden Methoden._

- [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace)
  - : Erstellt und gibt ein neues Referenzraumobjekt des gleichen Typs zurück, auf dem Sie die Methode aufrufen (also entweder `XRReferenceSpace` oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)). Der neue Referenzraum kann verwendet werden, um ein Koordinatensystem vom Referenzraum des Objekts, auf dem die Methode aufgerufen wird, in ein anderes Koordinatensystem zu transformieren. Dies ist nützlich für die Positionierung von Objekten während des Renderings und um die notwendigen Transformationen durchzuführen, wenn die Position und/oder die Ausrichtung des Betrachters im 3D-Raum geändert werden.

## Ereignisse

- [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)

  - : Das `reset`-Ereignis wird an ein `XRReferenceSpace`-Objekt gesendet, wenn der Browser eine Diskontinuität zwischen dem Ursprung des verfolgten Objekts und der Umgebung oder Position des Benutzers erkennt. Dies kann zum Beispiel passieren, nachdem der Benutzer sein XR-Gerät neu kalibriert hat oder wenn das Gerät seinen Ursprung automatisch anpasst, nachdem es die Verfolgung verloren und wiedererlangt hat.

## Referenzraumtypen

Die Arten von Referenzräumen sind in der folgenden Tabelle aufgeführt, mit kurzen Informationen zu ihren Anwendungsfällen und welche Schnittstelle verwendet wird, um sie zu implementieren.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) ähnlich dem `local`-Typ, außer dass der Benutzer erwartet wird, nicht über eine vorbestimmte Grenze hinauszugehen, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben ist.
- `local`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, dessen ursprünglicher Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Erstellung der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass der Benutzer sich viel oder über seine Ausgangsposition hinaus bewegt, und die Verfolgung ist für diesen Anwendungsfall optimiert. Für Geräte mit sechs Freiheitsgraden (6DoF)-Verfolgung versucht der `local`-Referenzraum, den Ursprung relativ zur Umgebung stabil zu halten.
- `local-floor`
  - : Ein `XRReferenceSpace` ähnlich dem `local`-Typ, außer dass die Ausgangsposition an einem sicheren Ort platziert wird, damit der Betrachter stehen kann, wobei der Wert der y-Achse auf 0 am Fußbodenniveau liegt. Wenn dieser Fußboden nicht bekannt ist, wird der [User-Agent](/de/docs/Glossary/user_agent) das Fußbodenniveau schätzen. Wenn das geschätzte Fußbodenniveau ungleich null ist, wird erwartet, dass der Browser es so rundet, dass z. B. das [Fingerprinting](/de/docs/Glossary/Fingerprinting) vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, der dem Benutzer vollständige Bewegungsfreiheit erlaubt, möglicherweise über extrem lange Distanzen von ihrem Ursprungspunkt hinweg. Der Betrachter wird überhaupt nicht verfolgt; die Verfolgung ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass sich der ursprüngliche Ursprung nach Bedarf verschieben kann, um dies zu ermöglichen.
- `viewer`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, dessen ursprünglicher Ursprung die Position und Ausrichtung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession) unterstützt, sowohl immersiv als auch inline, obwohl es für Inline-Sitzungen am nützlichsten ist. Es ist besonders nützlich, um den Abstand zwischen dem Betrachter und einer Eingabe zu bestimmen oder beim Arbeiten mit Offset-Räumen. Andernfalls wird in der Regel häufiger einer der anderen Referenzraumtypen verwendet.

## Nutzungshinweise

### Erstellen eines XRReferenceSpace

Es gibt zwei Situationen, in denen Sie einen `XRReferenceSpace` benötigen. Die erste ist, wenn Sie Ihre Szene einrichten und einen Referenzraum erhalten müssen, der den Standpunkt des Benutzers auf die Welt während der Dauer der [`XRSession`](/de/docs/Web/API/XRSession) repräsentiert. Dazu rufen Sie die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) von [`XRSession`](/de/docs/Web/API/XRSession) auf und geben den Referenzraumtyp an, den Sie erhalten möchten.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  // …
});
```

Die andere Situation, in der Sie möglicherweise einen neuen Referenzraum benötigen, ist, wenn Sie den Ursprung an eine neue Position verschieben müssen; dies wird häufig getan, wenn Ihr Projekt Benutzern erlaubt, sich durch die Umgebung zu bewegen, indem Eingabegeräte wie die Tastatur, Maus, das Touchpad oder Spielkontrollen verwendet werden, die nicht über das XR-Gerät verbunden sind. Da der Ursprung in der Regel der Standort des Benutzers im Raum ist, müssen Sie den Ursprung ändern, um seine Bewegung und alle Orientierungsänderungen widerzuspiegeln.

Um die Sicht des Benutzers auf die Welt zu verschieben oder zu drehen, müssen Sie den `XRReferenceSpace` ändern, der diesen Standpunkt repräsentiert. `XRReferenceSpace` ist jedoch unveränderlich, daher müssen Sie stattdessen einen neuen Referenzraum erstellen, der den geänderten Standpunkt repräsentiert. Dies ist einfach unter Verwendung der [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace)-Methode.

```js
let offsetTransform = new XRRigidTransform(
  { x: 2, y: 0, z: 1 },
  { x: 0, y: 0, z: 0, w: 1 },
);
xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(offsetTransform);
```

Dies ersetzt den `XRReferenceSpace` durch einen neuen, dessen Ursprung und Orientierung so angepasst sind, dass der neue Ursprung relativ zum aktuellen Ursprung bei (2, 0, 1) liegt und gedreht wird, wobei ein Einheits-[Quaternio](/de/docs/Glossary/quaternion) verwendet wird, das den Raum so ausrichtet, dass der Betrachter direkt nach oben sieht, relativ zur vorherigen Weltorientierung.

### Geometrie

Der native Ursprung eines jeden `XRReferenceSpace` ist immer so konfiguriert, dass +X als rechts, +Y als oben und +Z als "rückwärtig" oder in Richtung des Benutzers betrachtet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Standpunkte und Betrachter: Kamerasimulationen in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung von begrenzten Referenzräumen, um den Benutzer zu schützen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
