---
title: "XRReferenceSpaceEvent: XRReferenceSpaceEvent() Konstruktor"
short-title: XRReferenceSpaceEvent()
slug: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRReferenceSpaceEvent()`** Konstruktor wird verwendet, um ein neues [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent) Objekt zu erstellen, welches ein Ereignis im Zusammenhang mit dem Zustand eines WebXR-Referenzraumobjekts darstellt, [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace).

## Syntax

```js-nolint
new XRReferenceSpaceEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es immer auf `reset`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `referenceSpace`
      - : Der [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), von dem das Ereignis ausgeht.
    - `transform`
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der das alte Koordinatensystem (von vor den Änderungen, die durch dieses Ereignis angezeigt werden) auf das neue Koordinatensystem abbildet.

### Rückgabewert

Ein neues `XRReferenceSpaceEvent` Objekt, initialisiert entsprechend der angegebenen Eingabeparameter.

## Beispiele

Dieses einfache Snippet ruft den Konstruktor auf, um ein neues Referenzraum-Ereignis des Typs [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event) zu erstellen.

```js
let refSpaceEvent = new XRReferenceSpaceEvent("reset", {
  referenceSpace: myRefSpace,
  transform: myTransform,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
