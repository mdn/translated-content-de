---
title: XRReferenceSpace
slug: Web/API/XRReferenceSpace
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{secureContext_header}}

Die **`XRReferenceSpace`**-Schnittstelle der WebXR Device API beschreibt das Koordinatensystem für eine bestimmte verfolgte Entität oder ein Objekt innerhalb der virtuellen Welt mit einem festgelegten Verfolgungsverhalten. Das Verfolgungsverhalten wird durch den ausgewählten [Referenzraumtyp](#referenzraumtypen) definiert. Es erweitert die Basisklasse {{domxref("XRSpace")}}, indem es Unterstützung für mehrere verschiedene Verfolgungsverhalten hinzufügt und es ermöglicht, einen neuen Referenzraum anzufordern, der die Offsettransformation zwischen dem verfolgten Objekt und einem anderen Ort in der Welt beschreibt.

Alle Referenzräume – mit der einzigen Ausnahme der begrenzten Referenzräume – werden durch den Typ `XRReferenceSpace` beschrieben. Begrenzte Räume werden als {{domxref("XRBoundedReferenceSpace")}}-Objekte implementiert. Dies sind spezielle Räume, die es Ihnen ermöglichen, einen Bereich festzulegen, innerhalb dessen es für den Betrachter "sicher" ist, sich zu bewegen. Für XR-Systeme, die es dem Benutzer erlauben, sich physisch zu bewegen, wie z. B. solche, die Bewegungen mit einer echten Kamera verfolgen, legt diese Grenze die Ränder des Bereichs fest, in dem sich der Benutzer bewegen kann, sei es aufgrund physischer Hindernisse oder aufgrund der Beschränkungen der XR-Hardware. Weitere Informationen finden Sie im Artikel [Verwendung von begrenzten Referenzräumen, um den Betrachter zu schützen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`XRReferenceSpace` erbt die Eigenschaften von {{domxref("EventTarget")}}, definiert jedoch keine zusätzlichen Eigenschaften._

## Instanzmethoden

_`XRReferenceSpace` erbt auch Methoden von {{domxref("EventTarget")}} zusätzlich zu den folgenden Methoden._

- {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}}
  - : Erstellt und gibt ein neues Referenzraumobjekt desselben Typs zurück, wie der, auf dem Sie die Methode aufrufen (also entweder `XRReferenceSpace` oder {{domxref("XRBoundedReferenceSpace")}}). Der neue Referenzraum kann verwendet werden, um eine Koordinate aus dem Referenzraum des Objekts, auf dem die Methode aufgerufen wird, in einen anderen Koordinatenraum zu transformieren. Dies ist nützlich, um Objekte beim Rendern zu positionieren und die erforderlichen Transformationen vorzunehmen, wenn sich die Position und/oder Ausrichtung des Betrachters im 3D-Raum ändert.

## Ereignisse

- {{domxref("XRReferenceSpace.reset_event", "reset")}}

  - : Das `reset`-Ereignis wird an ein `XRReferenceSpace`-Objekt gesendet, wenn der Browser eine Diskontinuität zwischen dem Ursprung des verfolgten Objekts und der Umgebung oder Position des Benutzers erkennt. Dies kann beispielsweise passieren, nachdem der Benutzer sein XR-Gerät neu kalibriert hat, oder wenn das Gerät seinen Ursprung nach Verlust und Wiedererlangen der Verfolgung automatisch anpasst.

## Referenzraumtypen

Die Arten von Referenzräumen sind in der folgenden Tabelle aufgeführt, mit kurzen Informationen zu ihren Anwendungsfällen und welche Schnittstelle verwendet wird, um sie zu implementieren.

- `bounded-floor`
  - : Ein {{domxref("XRBoundedReferenceSpace")}} ähnlich dem `local`-Typ, außer dass nicht erwartet wird, dass der Benutzer sich außerhalb einer vorgegebenen Grenze bewegt, die durch die {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} im zurückgegebenen Objekt angegeben wird.
- `local`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, dessen nativer Ursprung sich in der Nähe des Betrachterstandorts zum Zeitpunkt der Erstellung der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass sich der Benutzer wesentlich über die Ausgangsposition hinaus bewegt, und die Verfolgung ist für diesen Anwendungsfall optimiert. Für Geräte mit sechs Freiheitsgraden (6DoF) Verfolgung versucht der `local`-Referenzraum, den Ursprung stabil relativ zur Umgebung zu halten.
- `local-floor`
  - : Ein `XRReferenceSpace` ähnlich dem `local`-Typ, außer dass die Ausgangsposition an einem sicheren Ort für den Betrachter platziert wird, wobei der Wert der y-Achse auf 0 auf Bodenhöhe gesetzt wird. Wenn diese Bodenhöhe nicht bekannt ist, wird die {{Glossary("user agent")}} die Bodenhöhe schätzen. Wenn die geschätzte Bodenhöhe ungleich null ist, wird erwartet, dass der Browser sie so rundet, um [Fingerabdruckverfolgung](/de/docs/Glossary/Fingerprinting) zu vermeiden (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, der dem Benutzer totale Bewegungsfreiheit ermöglicht, möglicherweise über extrem lange Distanzen von ihrem Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; die Verfolgung ist für die Stabilität um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung nach Bedarf driften kann, um dieses Bedürfnis zu erfüllen.
- `viewer`
  - : Ein `XRReferenceSpace`-Verfolgungsraum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen der Benutzer sich physisch bewegen kann, und wird von allen Instanzen von {{domxref("XRSession")}} unterstützt, sowohl immersive als auch inline, obwohl es am nützlichsten für Inline-Sitzungen ist. Es ist besonders nützlich, wenn der Abstand zwischen dem Betrachter und einer Eingabe bestimmt werden soll, oder wenn mit Offset-Räumen gearbeitet wird. Normalerweise wird jedoch eher einer der anderen Referenzraumtypen häufiger verwendet.

## Anwendungsnotizen

### Erstellen eines XRReferenceSpace

Es gibt zwei Situationen, in denen Sie ein `XRReferenceSpace` benötigen. Die erste ist, wenn Sie Ihre Szene einrichten und einen Referenzraum benötigen, um die Perspektive des Benutzers auf die Welt für die Dauer der {{domxref("XRSession")}} darzustellen. Rufen Sie dazu die {{domxref("XRSession")}} Methode {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} auf und geben Sie den gewünschten Referenzraumtyp an.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  // …
});
```

Die andere Situation, in der Sie möglicherweise einen neuen Referenzraum benötigen, ist, wenn Sie den Ursprung an eine neue Position verschieben müssen; dies wird häufig durchgeführt, wenn Ihr Projekt es dem Benutzer ermöglicht, sich mithilfe von Eingabegeräten wie Tastatur, Maus, Touchpad oder Spielsteuerungen, die nicht über das XR-Gerät angeschlossen sind, durch die Umgebung zu bewegen. Da der Ursprung typischerweise der Standort des Benutzers im Raum ist, müssen Sie den Ursprung ändern, um seine Bewegung und alle Änderungen der Ausrichtung widerzuspiegeln.

Um die Ansicht des Benutzers auf die Welt zu bewegen oder zu drehen, müssen Sie das `XRReferenceSpace` ändern, das zur Darstellung dieser Perspektive verwendet wird. `XRReferenceSpace` ist jedoch unveränderlich, daher müssen Sie stattdessen einen neuen Referenzraum erstellen, der die geänderte Perspektive darstellt. Dies lässt sich leicht mithilfe der Methode {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} bewerkstelligen.

```js
let offsetTransform = new XRRigidTransform(
  { x: 2, y: 0, z: 1 },
  { x: 0, y: 0, z: 0, w: 1 },
);
xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(offsetTransform);
```

Dies ersetzt das `XRReferenceSpace` durch ein neues, dessen Ursprung und Orientierung so angepasst sind, dass der neue Ursprung relativ zum aktuellen Ursprung auf (2, 0, 1) und mit einem Einheit-{{Glossary("quaternion")}} rotiert wird, um den Raum so auszurichten, dass der Betrachter relativ zur vorherigen Weltorientierung gerade nach oben blickt.

### Geometrie

Der native Ursprung eines jeden `XRReferenceSpace` ist immer so konfiguriert, dass +X als rechts liegend betrachtet wird, +Y ist aufwärts gerichtet, und +Z ist "rückwärts" oder in Richtung des Benutzers.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Sichtweisen und Betrachter: Kameras in WebXR simulieren](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung von begrenzten Referenzräumen, um den Benutzer zu schützen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
