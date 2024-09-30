---
title: XRBoundedReferenceSpace
slug: Web/API/XRBoundedReferenceSpace
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die Schnittstelle **`XRBoundedReferenceSpace`** der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt einen virtuellen Welt-Referenzraum, der vordefinierte Grenzen hat. Diese erweitert [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), welche einen im Wesentlichen uneingeschränkten Raum um die Position des Betrachters beschreibt. Diese Grenzen werden durch ein Array von Punkten definiert, von denen jeder einen Scheitelpunkt in einem Polygon darstellen, innerhalb dessen sich der Benutzer bewegen darf.

Dies wird typischerweise verwendet, wenn das XR-System in der Lage ist, die physische Bewegung des Benutzers innerhalb einer begrenzten Entfernung von seiner Startposition zu verfolgen. Die angegebenen Grenzen können tatsächlich die Form und Größe des Raumes beschreiben, in dem sich der Benutzer befindet, um der WebXR-Website oder -Anwendung zu ermöglichen, den Benutzer daran zu hindern, mit Wänden oder anderen Hindernissen in der realen Welt zu kollidieren. Mindestens zeigen die Grenzen den Bereich an, in dem das XR-Gerät in der Lage ist, die Bewegung des Benutzers zu verfolgen. Siehe den Artikel [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces) für Details darüber, wie begrenzte Räume funktionieren und warum sie nützlich sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den Eigenschaften von [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) enthält `XRBoundedReferenceSpace` die folgenden:_

- [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten, von denen jedes einen Scheitelpunkt in dem Polygon definiert, das die Grenzen beschreibt, innerhalb derer sich der Benutzer aufhalten muss. Diese Scheitelpunkte _müssen_ so sortiert sein, dass sie sich _im Uhrzeigersinn_ um die Position des Betrachters bewegen.

## Instanz-Methoden

_`XRBoundedReferenceSpace` erbt die Methoden der übergeordneten Schnittstelle, [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace). Sie hat keine weiteren Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Blickpunkte und Betrachter: Kamerasimulation in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
