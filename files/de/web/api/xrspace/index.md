---
title: XRSpace
slug: Web/API/XRSpace
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}

Das **`XRSpace`** Interface der [WebXR-Geräte-API](/de/docs/Web/API/WebXR_Device_API) ist ein abstraktes Interface, das eine gemeinsame Basis für jede Klasse darstellt, die ein virtuelles Koordinatensystem innerhalb der virtuellen Welt repräsentiert, in dem der Ursprung einem physischen Standort entspricht. Räumliche Daten in WebXR werden immer relativ zu einem Objekt ausgedrückt, das auf einer der abgeleiteten Schnittstellen von `XRSpace` basiert, zu dem Zeitpunkt, an dem ein bestimmtes {{domxref("XRFrame")}} stattfindet.

Numerische Werte wie etwa Posentransformationen sind somit Koordinaten im entsprechenden `XRSpace`, relativ zum Ursprung dieses Raumes.

> [!NOTE]
> Das `XRSpace`-Interface wird nie direkt verwendet; stattdessen werden alle Räume mit einem der auf `XRSpace` basierenden Interfaces erstellt. Zum aktuellen Zeitpunkt sind dies {{domxref("XRReferenceSpace")}}, {{domxref("XRBoundedReferenceSpace")}} und {{domxref("XRJointSpace")}}.

{{InheritanceDiagram}}

## Schnittstellen basierend auf XRSpace

Unten ist eine Liste von Schnittstellen, die auf dem `XRSpace`-Interface basieren.

- {{domxref("XRBoundedReferenceSpace")}}
  - : Representiert einen Referenzraum, der sich innerhalb eines Raumbereichs bewegen kann, dessen Grenzen durch ein Array von Punkten definiert werden, die im Uhrzeigersinn entlang des Bodens verlaufen, um den passierbaren Bereich des Raums zu definieren. Der Ursprung eines `XRBoundedReferenceSpace` befindet sich immer auf Bodenhöhe, wobei seine X- und Z-Koordinaten typischerweise standardmäßig in der Nähe der Raummitte liegen.
- {{domxref("XRReferenceSpace")}}
  - : Representiert einen Referenzraum, der typischerweise für die Dauer der {{domxref("XRSession")}} statisch bleiben soll. Während sich Objekte innerhalb des Raums bewegen können, bleibt der Raum selbst fixiert. Es gibt Ausnahmen von dieser statischen Natur; am häufigsten kann sich ein `XRReferenceSpace` bewegen, um sich basierend auf der Neukonfiguration des Headsets des Benutzers oder eines anderen bewegungsempfindlichen Geräts anzupassen.
- {{domxref("XRJointSpace")}}
  - : Representiert den Raum eines {{domxref("XRHand")}}-Gelenks.

## Instanz-Eigenschaften

_Das `XRSpace`-Interface definiert keine eigenen Eigenschaften; es erbt jedoch die Eigenschaften seines übergeordneten Interfaces, {{domxref("EventTarget")}}._

## Instanz-Methoden

_Das `XRSpace`-Interface stellt keine eigenen Methoden bereit. Es erbt jedoch die Methoden von {{domxref("EventTarget")}}, seinem übergeordneten Interface._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
