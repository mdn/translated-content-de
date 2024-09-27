---
title: "XRInputSourceEvent: XRInputSourceEvent() Konstruktor"
short-title: XRInputSourceEvent()
slug: Web/API/XRInputSourceEvent/XRInputSourceEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRInputSourceEvent()`**
Konstruktor erstellt und gibt ein neues [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent)-Objekt zurück,
das ein Ereignis (Statusänderung) beschreibt, das auf einem WebXR-Eingabegerät stattgefunden hat, welches durch eine [`XRInputSource`](/de/docs/Web/API/XRInputSource) repräsentiert wird.

## Syntax

```js-nolint
new XRInputSourceEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `select`, `selectend`, `selectstart`, `squeeze`, `squeezeend`, `squeezestart`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `frame`
      - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Ereignisrahmen repräsentiert, in dem das Ereignis stattfand.
        Dieses Ereignis ist _nicht_ mit dem Animationsprozess verbunden und enthält keine Betrachterinformationen.
    - `inputSource`
      - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das das Eingabegerät repräsentiert, von dem das Ereignis gesendet wird.

### Rückgabewert

Ein neues [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent)-Objekt, das das durch den
gegebenen `type` und `eventInitDict` beschriebene Ereignis repräsentiert.

## Beispiele

Dieses Beispiel erstellt ein neues [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis und
sendet es an die [`XRSession`](/de/docs/Web/API/XRSession).

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
