---
title: "RTCDataChannelEvent: RTCDataChannelEvent()-Konstruktor"
short-title: RTCDataChannelEvent()
slug: Web/API/RTCDataChannelEvent/RTCDataChannelEvent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Der **`RTCDataChannelEvent()`**-Konstruktor erstellt ein neues {{domxref("RTCDataChannelEvent")}}-Objekt.

> [!NOTE]
> Sie werden selten, wenn überhaupt, ein `RTCDataChannelEvent` manuell konstruieren; diese Ereignisse werden normalerweise von der WebRTC-Schicht selbst erstellt und gesendet.

## Syntax

```js-nolint
new RTCDataChannelEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive und Browser setzen es immer auf `datachannel`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `channel`
      - : Ein {{domxref("RTCDataChannel")}}, der den mit dem Ereignis verbundenen Datenkanal darstellt.

### Rückgabewert

Ein neues {{domxref("RTCDataChannelEvent")}}-Objekt, wie angegeben konfiguriert.

## Beispiel

In diesem Beispiel wird ein neues {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}}-Ereignis erstellt. `dc` ist ein bereits existierender Datenkanal.

```js
const event = new RTCDataChannelEvent("datachannel", { channel: dc });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection")}}
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
