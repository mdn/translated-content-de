---
title: XRReferenceSpaceEvent
slug: Web/API/XRReferenceSpaceEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

Das [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)-Interface **`XRReferenceSpaceEvent`** repräsentiert ein Ereignis, das an ein {{domxref("XRReferenceSpace")}} gesendet wird. Derzeit ist das einzige Ereignis, das diesen Typ nutzt, das {{domxref("XRReferenceSpace.reset_event", "reset")}}-Ereignis.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("XRReferenceSpaceEvent.XRReferenceSpaceEvent", "XRReferenceSpaceEvent()")}}
  - : Gibt ein neues `XRReferenceSpaceEvent` mit dem angegebenen Typ und der Konfiguration zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den Eigenschaften, die von der übergeordneten Schnittstelle {{domxref("Event")}} geerbt werden, enthalten `XRReferenceSpaceEvent`-Objekte die folgenden Eigenschaften:_

- {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRReferenceSpace")}}, das den Referenzraum angibt, der das Ereignis generiert hat.
- {{domxref("XRReferenceSpaceEvent.transform", "transform")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRRigidTransform")}}-Objekt, das die Position und Orientierung des nativen Ursprungs des angegebenen `referenceSpace` nach dem Ereignis angibt, relativ zu dem Koordinatensystem vor dem Ereignis definiert.

## Instanz-Methoden

_Obwohl `XRReferenceSpaceEvent` keine eigenen Methoden definiert, erbt es die Methoden seiner übergeordneten Schnittstelle {{domxref("Event")}}._

## Ereignistypen

- {{domxref("XRReferenceSpace.reset_event", "reset")}}
  - : Das `reset`-Ereignis wird an einen Referenzraum gesendet, wenn sich dessen nativer Ursprung aufgrund einer Diskontinuität, Neukalibrierung oder eines Geräte-Resets ändert. Dies ist eine Gelegenheit für Ihre App, gespeicherte Transformationen, Positions-/Orientierungsinformationen oder Ähnliches zu aktualisieren – oder um zwischengespeicherte Werte basierend auf dem Ursprung des Referenzraums zu verwerfen, sodass Sie diese bei Bedarf neu berechnen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
