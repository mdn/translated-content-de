---
title: "RTCDataChannelEvent: RTCDataChannelEvent() Konstruktor"
short-title: RTCDataChannelEvent()
slug: Web/API/RTCDataChannelEvent/RTCDataChannelEvent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Der **`RTCDataChannelEvent()`** Konstruktor
erstellt ein neues [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent) Objekt.

> [!NOTE]
> Sie werden nur selten, wenn überhaupt, ein `RTCDataChannelEvent` manuell konstruieren; diese
> Ereignisse werden normalerweise von der WebRTC-Schicht selbst erstellt und gesendet.

## Syntax

```js-nolint
new RTCDataChannelEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `datachannel`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `channel`
      - : Ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), das den mit dem Ereignis verbundenen Datenkanal darstellt.

### Rückgabewert

Ein neues [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent) Objekt, konfiguriert wie angegeben.

## Beispiel

In diesem Beispiel wird ein neues [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis erstellt. `dc` ist ein
Datenkanal, der bereits existiert.

```js
const event = new RTCDataChannelEvent("datachannel", { channel: dc });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
