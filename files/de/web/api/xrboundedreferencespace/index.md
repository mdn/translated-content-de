---
title: XRBoundedReferenceSpace
slug: Web/API/XRBoundedReferenceSpace
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRBoundedReferenceSpace`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt einen virtuellen Welt-[Referenzraum](/de/docs/Web/API/WebXR_Device_API/Geometry) mit voreingestellten Begrenzungen. Dies erweitert [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), welcher einen im Wesentlichen unbeschränkten Raum um die Position des Betrachters beschreibt. Diese Begrenzungen werden unter Verwendung eines Arrays von Punkten definiert, von denen jeder einen Scheitelpunkt in einem Polygon beschreibt, innerhalb dessen sich der Benutzer bewegen darf.

Dies wird typischerweise verwendet, wenn das XR-System in der Lage ist, die physische Bewegung des Benutzers innerhalb einer begrenzten Entfernung von seiner Ausgangsposition zu verfolgen. Die angegebenen Begrenzungen können tatsächlich die Form und Größe des Raumes beschreiben, in dem sich der Benutzer befindet, um der WebXR-Site oder -Anwendung zu ermöglichen, zu verhindern, dass der Benutzer mit den Wänden oder anderen Hindernissen in der realen Welt kollidiert. Mindestens geben die Begrenzungen den Bereich an, in dem das XR-Gerät die Bewegung des Benutzers verfolgen kann. Lesen Sie den Artikel [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces) für Details darüber, wie begrenzte Räume funktionieren und warum sie nützlich sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Neben den Eigenschaften von [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) umfasst `XRBoundedReferenceSpace` folgende Eigenschaften:_

- [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten, von denen jedes einen Scheitelpunkt im Polygon definiert, das die Begrenzungen beschreibt, innerhalb derer sich der Benutzer aufhalten muss. Diese Scheitelpunkte _müssen_ so sortiert sein, dass sie sich _im Uhrzeigersinn_ um die Position des Betrachters bewegen.

## Instanzmethoden

_`XRBoundedReferenceSpace` erbt die Methoden seiner Elternschnittstelle, [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace). Es hat keine weiteren Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Blickpunkte und Betrachter: Kameras in WebXR simulieren](/de/docs/Web/API/WebXR_Device_API/Cameras)
