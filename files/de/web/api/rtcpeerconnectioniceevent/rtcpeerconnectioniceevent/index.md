---
title: "RTCPeerConnectionIceEvent: RTCPeerConnectionIceEvent() Konstruktor"
short-title: RTCPeerConnectionIceEvent()
slug: Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnectionIceEvent()`**-Konstruktor erstellt ein neues [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)-Objekt.

## Syntax

```js-nolint
new RTCPeerConnectionIceEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive, und Browser setzen es immer auf `icecandidate`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `candidate`
      - : Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der den durch das Ereignis betroffenen ICE-Kandidaten repräsentiert. Wenn `null`, zeigt das Ereignis das Ende der Kandidatensammlung an.
    - `url`
      - : Ein String, der die URL des STUN- oder TURN-Servers enthält, der zur Sammlung des Kandidaten verwendet wurde. Wenn der Kandidat nicht von einem [STUN](/de/docs/Glossary/STUN) oder [TURN](/de/docs/Glossary/TURN) Server gesammelt wurde, muss dieser Wert `null` sein, was ebenfalls der Standardwert ist.

### Rückgabewert

Ein neues [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)-Objekt, konfiguriert wie in den bereitgestellten Optionen angegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Sein übliches Ziel: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
