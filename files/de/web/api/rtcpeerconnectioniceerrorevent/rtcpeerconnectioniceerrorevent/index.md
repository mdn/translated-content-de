---
title: "RTCPeerConnectionIceErrorEvent: RTCPeerConnectionIceErrorEvent() constructor"
short-title: RTCPeerConnectionIceErrorEvent()
slug: Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Der Konstruktor **`RTCPeerConnectionIceErrorEvent()`** erstellt ein neues [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)-Objekt, dessen `type` und andere Eigenschaften wie in den Parametern angegeben initialisiert werden.

Beachten Sie, dass Sie normalerweise nicht selbst ein Objekt dieses Typs erstellen.

## Syntax

```js-nolint
new RTCPeerConnectionIceErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Dies ist normalerweise `"icecandidateerror"`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `address` {{optional_inline}}
      - : Ein String, der die lokale Adresse angibt, die für die Kommunikation mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server verwendet wird.
        Dies sollte auf `null` gesetzt werden, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen {{Glossary("ICE", "ICE")}}-Kandidaten offengelegt wurde.
    - `errorCode`
      - : Eine positive Zahl, die den vom STUN- oder TURN-Server zurückgegebenen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters#stun-parameters-6) angibt.
        Wenn kein Host-Kandidat den Server erreichen kann und `iceGatheringState` auf `gathering` gesetzt ist, sollte dies auf `701` gesetzt werden.
    - `errorText` {{optional_inline}}
      - : Ein String, der den vom STUN- oder TURN-Server zurückgegebenen STUN-Ursachentext angibt.
    - `port` {{optional_inline}}
      - : Eine positive Zahl, die den lokalen Port angibt, der für die Kommunikation mit dem STUN- oder TURN-Server verwendet wird.
        Dies sollte auf `null` gesetzt werden, wenn die Verbindung nicht hergestellt wurde (d.h. wenn [`address`](#address) `null` ist).
    - `url` {{optional_inline}}
      - : Ein String, der die URL des verwendeten STUN- oder TURN-Servers angibt.

### Rückgabewert

Ein neues `RTCPeerConnectionIceErrorEvent`-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
