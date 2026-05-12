---
title: "RTCPeerConnectionIceErrorEvent: RTCPeerConnectionIceErrorEvent() Konstruktor"
short-title: RTCPeerConnectionIceErrorEvent()
slug: Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnectionIceErrorEvent()`** Konstruktor erstellt ein neues [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) Objekt mit seinem `type` und anderen Eigenschaften, die gemäß den angegebenen Parametern initialisiert werden.

Beachten Sie, dass Sie normalerweise kein Objekt dieses Typs selbst erstellen werden.

## Syntax

```js-nolint
new RTCPeerConnectionIceErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Dies ist in der Regel `"icecandidateerror"`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `address` {{optional_inline}}
      - : Eine Zeichenfolge, die die lokale Adresse angibt, die zur Kommunikation mit dem {{Glossary("STUN", "STUN")}} oder {{Glossary("TURN", "TURN")}} Server verwendet wird.
        Dies sollte auf `null` gesetzt werden, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen {{Glossary("ICE", "ICE")}} Kandidaten offengelegt wurde.
    - `errorCode`
      - : Eine positive Zahl, die den [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wurde.
        Wenn kein Host-Kandidat den Server erreichen kann und der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) `gathering` ist, sollte dies auf `701` gesetzt werden.
    - `errorText` {{optional_inline}}
      - : Eine Zeichenfolge, die den STUN-Begründungstext angibt, der vom STUN- oder TURN-Server zurückgegeben wurde.
    - `port` {{optional_inline}}
      - : Eine positive Zahl, die den lokalen Port angibt, der zur Kommunikation mit dem STUN- oder TURN-Server verwendet wird.
        Dies sollte auf `null` gesetzt werden, wenn die Verbindung nicht hergestellt wurde (das heißt, wenn [`address`](#address) `null` ist).
    - `url` {{optional_inline}}
      - : Eine Zeichenfolge, die die URL des verwendeten STUN- oder TURN-Servers angibt.

### Rückgabewert

Ein neues `RTCPeerConnectionIceErrorEvent` Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
