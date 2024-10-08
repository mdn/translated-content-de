---
title: XRReferenceSpaceEvent
slug: Web/API/XRReferenceSpaceEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

Das [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) Interface **`XRReferenceSpaceEvent`** repräsentiert ein Ereignis, das an einen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) gesendet wird. Derzeit ist das einzige Ereignis, das diesen Typ verwendet, das [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event) Ereignis.

{{InheritanceDiagram}}

## Konstruktor

- [`XRReferenceSpaceEvent()`](/de/docs/Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent)
  - : Gibt ein neues `XRReferenceSpaceEvent` mit dem angegebenen Typ und der Konfiguration zurück.

## Instanzeigenschaften

_Zusätzlich zu den Eigenschaften, die von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) geerbt werden, enthalten `XRReferenceSpaceEvent` Objekte die folgenden Eigenschaften:_

- [`referenceSpace`](/de/docs/Web/API/XRReferenceSpaceEvent/referenceSpace) {{ReadOnlyInline}}
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), das den Referenzraum angibt, der das Ereignis erzeugt hat.
- [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt, das die Position und Orientierung des nativen Ursprungs des angegebenen `referenceSpace` nach dem Ereignis angibt, definiert relativ zum Koordinatensystem vor dem Ereignis.

## Instanzmethoden

_Obwohl `XRReferenceSpaceEvent` keine eigenen Methoden definiert, erbt es die Methoden seiner übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event)._

## Ereignistypen

- [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)
  - : Das `reset` Ereignis wird an einen Referenzraum gesendet, wenn sich sein nativer Ursprung aufgrund einer Diskontinuität, Neukalibrierung oder Geräte-Reset ändert. Dies ist eine Gelegenheit für Ihre App, alle gespeicherten Transformationen, Positions-/Orientierungsinformationen oder Ähnliches zu aktualisieren — oder um gespeicherte Werte, die auf dem Ursprung des Referenzraums basieren, zu verwerfen, damit Sie sie bei Bedarf neu berechnen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
