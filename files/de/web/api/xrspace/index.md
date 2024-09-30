---
title: XRSpace
slug: Web/API/XRSpace
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}

Die **`XRSpace`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine abstrakte Schnittstelle, die eine gemeinsame Basis für jede Klasse bietet, die ein virtuelles Koordinatensystem innerhalb der virtuellen Welt darstellt, wobei ihr Ursprung mit einer physischen Position korrespondiert. Räumliche Daten in WebXR werden immer relativ zu einem Objekt ausgedrückt, das auf einer der abgeleiteten Schnittstellen von `XRSpace` basiert, zu dem Zeitpunkt, an dem ein bestimmtes [`XRFrame`](/de/docs/Web/API/XRFrame) stattfindet.

Numerische Werte wie Positionsangaben einer Pose sind somit Koordinaten im entsprechenden `XRSpace`, relativ zum Ursprung dieses Raumes.

> [!NOTE]
> Die `XRSpace`-Schnittstelle wird nie direkt verwendet; stattdessen werden alle Räume mit einer der Schnittstellen erstellt, die auf `XRSpace` basieren. Derzeit sind dies [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) und [`XRJointSpace`](/de/docs/Web/API/XRJointSpace).

{{InheritanceDiagram}}

## Schnittstellen basierend auf XRSpace

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf der `XRSpace`-Schnittstelle basieren.

- [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)
  - : Stellt einen Referenzraum dar, der sich innerhalb eines Raumbereichs bewegen kann, dessen Grenzen durch ein Array von Punkten definiert sind, das im Uhrzeigersinn entlang des Bodens angeordnet ist, um den begehbaren Bereich des Raums zu definieren. Der Ursprung eines `XRBoundedReferenceSpace` befindet sich immer auf Bodenhöhe, wobei dessen X- und Z-Koordinaten typischerweise auf einen Standort in der Nähe des Raummittelpunkts standardmäßig eingestellt sind.
- [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)
  - : Stellt einen Referenzraum dar, von dem normalerweise erwartet wird, dass er für die Dauer der [`XRSession`](/de/docs/Web/API/XRSession) statisch bleibt. Während sich Objekte innerhalb des Raums bewegen können, bleibt der Raum selbst ortsfest. Es gibt Ausnahmen von dieser statischen Natur; am häufigsten kann ein `XRReferenceSpace` bewegt werden, um Anpassungen basierend auf der Neukonfiguration des Benutzer-Headsets oder eines anderen bewegungsempfindlichen Geräts vorzunehmen.
- [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)
  - : Stellt den Raum eines Gelenks von [`XRHand`](/de/docs/Web/API/XRHand) dar.

## Instanz-Eigenschaften

_Die `XRSpace`-Schnittstelle definiert keine eigenen Eigenschaften; sie erbt jedoch die Eigenschaften ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_Die `XRSpace`-Schnittstelle bietet keine eigenen Methoden. Sie erbt jedoch die Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget), ihrer übergeordneten Schnittstelle._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
