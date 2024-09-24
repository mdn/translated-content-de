---
title: XRBoundedReferenceSpace
slug: Web/API/XRBoundedReferenceSpace
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRBoundedReferenceSpace`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt einen virtuellen Welt-[Referenzraum](/de/docs/Web/API/WebXR_Device_API/Geometry), der vordefinierte Grenzen hat. Diese Schnittstelle erweitert {{domxref("XRReferenceSpace")}}, die einen im Wesentlichen uneingeschränkten Raum um die Position des Betrachters beschreibt. Diese Grenzen werden durch ein Array von Punkten definiert, von denen jeder einen Scheitelpunkt in einem Polygon darstellt, innerhalb dessen sich der Benutzer bewegen darf.

Dies wird typischerweise verwendet, wenn das XR-System in der Lage ist, die physische Bewegung des Benutzers in einem begrenzten Abstand von seiner Ausgangsposition zu verfolgen. Die angegebenen Grenzen können tatsächlich die Form und Größe des Raumes beschreiben, in dem sich der Benutzer befindet, um der WebXR-Website oder -Anwendung zu ermöglichen, den Benutzer davor zu bewahren, mit den Wänden oder anderen Hindernissen in der realen Welt zu kollidieren. Mindestens geben die Grenzen den Bereich an, in dem das XR-Gerät in der Lage ist, die Bewegung des Benutzers zu verfolgen. Siehe den Artikel [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces) für Details darüber, wie begrenzte Räume funktionieren und warum sie nützlich sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den Eigenschaften von {{domxref("XRReferenceSpace")}} enthält `XRBoundedReferenceSpace` folgende:_

- {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von {{domxref("DOMPointReadOnly")}}-Objekten, von denen jedes einen Scheitelpunkt im Polygon definiert, das die Grenzen beschreibt, innerhalb derer der Benutzer bleiben muss. Diese Scheitelpunkte _müssen_ so sortiert sein, dass sie sich im _Uhrzeigersinn_ um die Position des Betrachters bewegen.

## Instanz-Methoden

_`XRBoundedReferenceSpace` erbt die Methoden seiner Elternschnittstelle, {{domxref("XRReferenceSpace")}}. Es hat keine weiteren Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Ansichtspunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
