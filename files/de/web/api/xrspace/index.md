---
title: XRSpace
slug: Web/API/XRSpace
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}

Die **`XRSpace`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine abstrakte Schnittstelle, die eine gemeinsame Grundlage für jede Klasse bildet, die ein virtuelles Koordinatensystem innerhalb der virtuellen Welt repräsentiert, wobei ihr Ursprung einem physischen Ort entspricht. Räumliche Daten in WebXR werden immer relativ zu einem Objekt ausgedrückt, das auf einer der abgeleiteten Schnittstellen von `XRSpace` basiert, zu dem Zeitpunkt, an dem ein gegebenes [`XRFrame`](/de/docs/Web/API/XRFrame) stattfindet.

Numerische Werte wie Positionsposen sind somit Koordinaten im entsprechenden `XRSpace`, relativ zum Ursprung dieses Raums.

> [!NOTE]
> Die `XRSpace`-Schnittstelle wird nie direkt verwendet; stattdessen werden alle Räume mit einer der auf `XRSpace` basierenden Schnittstellen erstellt. Derzeit sind dies [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) und [`XRJointSpace`](/de/docs/Web/API/XRJointSpace).

{{InheritanceDiagram}}

## Schnittstellen basierend auf XRSpace

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf der `XRSpace`-Schnittstelle basieren.

- [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)
  - : Repräsentiert einen Referenzraum, der sich innerhalb eines Raumbereichs bewegen kann, dessen Grenzen durch ein Array von Punkten im Uhrzeigersinn entlang des Bodens festgelegt sind, um den begehbaren Bereich des Raums zu definieren. Der Ursprung eines `XRBoundedReferenceSpace` befindet sich immer auf Bodenniveau, wobei seine X- und Z-Koordinaten typischerweise standardmäßig an einem Ort in der Nähe der Raummitte liegen.
- [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)
  - : Repräsentiert einen Referenzraum, der in der Regel erwartet wird, während der gesamten Dauer der [`XRSession`](/de/docs/Web/API/XRSession) statisch zu bleiben. Während sich Objekte innerhalb des Raums bewegen können, bleibt der Raum selbst fixiert. Es gibt Ausnahmen von dieser statischen Natur; am häufigsten kann sich ein `XRReferenceSpace` bewegen, um sich basierend auf einer Neukonfiguration des Benutzer-Headsets oder eines anderen bewegungsempfindlichen Geräts anzupassen.
- [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)
  - : Repräsentiert den Raum eines Gelenks einer [`XRHand`](/de/docs/Web/API/XRHand).

## Instanzeigenschaften

_Die `XRSpace`-Schnittstelle definiert keine eigenen Eigenschaften, erbt jedoch die Eigenschaften ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_Die `XRSpace`-Schnittstelle bietet keine eigenen Methoden. Sie erbt jedoch die Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget), ihrer Elternschnittstelle._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
