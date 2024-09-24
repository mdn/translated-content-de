---
title: "RTCPeerConnectionIceEvent: RTCPeerConnectionIceEvent() Konstruktor"
short-title: RTCPeerConnectionIceEvent()
slug: Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnectionIceEvent()`** Konstruktor erstellt ein neues
{{domxref("RTCPeerConnectionIceEvent")}} Objekt.

## Syntax

```js-nolint
new RTCPeerConnectionIceEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `icecandidate`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `candidate`
      - : Ein {{domxref("RTCIceCandidate")}}, der den betreffenden ICE-Kandidaten im Event darstellt.
        Ist dieser `null`, zeigt das Event das Ende der Kandidatensammlung an.
    - `url`
      - : Ein String, der die URL des STUN- oder TURN-Servers enthält, der zur Sammlung des Kandidaten verwendet wurde.
        Wurde der Kandidat nicht von einem {{Glossary("STUN")}} oder {{Glossary("TURN")}} Server gesammelt,
        muss dieser Wert `null` sein, was auch der Standardwert ist.

### Rückgabewert

Ein neues {{domxref("RTCPeerConnectionIceEvent")}} Objekt, das wie in den übergebenen Optionen angegeben konfiguriert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Das übliche Ziel: {{domxref("RTCPeerConnection")}}.
