---
title: "XRReferenceSpaceEvent: XRReferenceSpaceEvent() Konstruktor"
short-title: XRReferenceSpaceEvent()
slug: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRReferenceSpaceEvent()`** Konstruktor wird verwendet, um ein neues [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent) Objekt zu erstellen, das ein Ereignis bezüglich des Zustands eines WebXR-Referenzraumobjekts, [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), darstellt.

## Syntax

```js-nolint
new XRReferenceSpaceEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist groß-/kleinschreibungssensitiv und Browser setzen es immer auf `reset`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften enthalten kann:
    - `referenceSpace`
      - : Der [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), von dem das Ereignis stammt.
    - `transform`
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das das alte Koordinatensystem (von vor den durch dieses Ereignis angezeigten Änderungen) auf das neue Koordinatensystem abbildet.

### Rückgabewert

Ein neues `XRReferenceSpaceEvent`-Objekt, das gemäß den Eingabeparametern initialisiert wurde.

## Beispiele

Dieses einfache Snippet ruft den Konstruktor auf, um ein neues Referenzraumereignis des Typs [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event) zu erstellen.

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
