---
title: "XRInputSourceEvent: XRInputSourceEvent() Konstruktor"
short-title: XRInputSourceEvent()
slug: Web/API/XRInputSourceEvent/XRInputSourceEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRInputSourceEvent()`** Konstruktor erstellt und gibt ein neues {{domxref("XRInputSourceEvent")}}-Objekt zurück, das ein Ereignis (Zustandsänderung) beschreibt, das auf einem WebXR-Benutzereingabegerät aufgetreten ist, das durch eine {{domxref("XRInputSource")}} repräsentiert wird.

## Syntax

```js-nolint
new XRInputSourceEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist groß- und kleinschreibungsempfindlich, und Browser setzen es auf `select`, `selectend`, `selectstart`, `squeeze`, `squeezeend`, `squeezestart`.
- `options`
  - : Ein Objekt, das neben den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `frame`
      - : Ein {{domxref("XRFrame")}}-Objekt, das den Ereignisrahmen darstellt, in dem das Ereignis stattfand. Dieses Ereignis ist _nicht_ mit dem Animationsprozess verbunden und enthält keine Betrachterinformationen.
    - `inputSource`
      - : Ein {{domxref("XRInputSource")}}-Objekt, das das Eingabegerät darstellt, von dem das Ereignis gesendet wird.

### Rückgabewert

Ein neues {{domxref("XRInputSourceEvent")}}-Objekt, das das Ereignis beschreibt, das durch den gegebenen `type` und `eventInitDict` beschrieben wird.

## Beispiele

Dieses Beispiel erstellt ein neues {{domxref("XRSession.select_event", "select")}}-Ereignis und sendet es an die {{domxref("XRSession")}}.

```js
let event = new XRInputSourceEvent("select", {
  frame: eventFrame,
  inputSource: source,
});
if (event) {
  xrSession.dispatchEvent(event);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
