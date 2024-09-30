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
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/klein-schreibungssensitiv und Browser setzen es immer auf `icecandidate`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `candidate`
      - : Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der den ICE-Kandidaten darstellt, der vom Ereignis betroffen ist.
        Ist dieser `null`, zeigt das Ereignis das Ende des Kandidatensammelns an.
    - `url`
      - : Ein String, der die URL des STUN- oder TURN-Servers enthält, der zum Sammeln des Kandidaten verwendet wurde.
        Wenn der Kandidat nicht von einem [STUN](/de/docs/Glossary/STUN)- oder [TURN](/de/docs/Glossary/TURN)-Server gesammelt wurde,
        muss dieser Wert `null` sein, was auch der Standardwert ist.

### Rückgabewert

Ein neues [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)-Objekt, konfiguriert gemäß den angegebenen Optionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Sein üblicher Zielort: [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
