---
title: "XRReferenceSpaceEvent: XRReferenceSpaceEvent() Konstruktor"
short-title: XRReferenceSpaceEvent()
slug: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRReferenceSpaceEvent()`** Konstruktor wird verwendet, um ein neues {{domxref("XRReferenceSpaceEvent")}} Objekt zu erstellen, das ein Ereignis bezüglich des Zustands eines WebXR-Referenzraum-Objekts, {{domxref("XRReferenceSpace")}}, darstellt.

## Syntax

```js-nolint
new XRReferenceSpaceEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist unterscheidet zwischen Groß- und Kleinschreibung und Browser setzen es immer auf `reset`.
- `options`
  - : Ein Objekt, das, zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften, folgende Eigenschaften haben kann:
    - `referenceSpace`
      - : Der {{domxref("XRReferenceSpace")}}, von dem das Ereignis stammt.
    - `transform`
      - : Ein {{domxref("XRRigidTransform")}}, das das alte Koordinatensystem (von vor den durch dieses Ereignis angezeigten Änderungen) auf das neue Koordinatensystem abbildet.

### Rückgabewert

Ein neues `XRReferenceSpaceEvent` Objekt, das gemäß den Eingabewerten initialisiert wurde.

## Beispiele

Dieses einfache Snippet ruft den Konstruktor auf, um ein neues Referenzraumereignis vom Typ {{domxref("XRReferenceSpace.reset_event", "reset")}} zu erstellen.

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
