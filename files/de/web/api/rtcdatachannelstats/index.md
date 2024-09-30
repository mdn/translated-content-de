---
title: RTCDataChannelStats
slug: Web/API/RTCDataChannelStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCDataChannelStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) stellt Statistiken zu einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt auf der Verbindung bereit.

Der Bericht kann abgerufen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](#type) `data-channel` finden.

Die Statistiken der Datenkanäle können mit einem bestimmten Kanal korreliert werden, indem die [`dataChannelIdentifier`](#datachannelidentifier)-Eigenschaft mit einer übereinstimmenden [`RTCDataChannel.id`](/de/docs/Web/API/RTCDataChannel/id) verglichen wird.

## Instanzeigenschaften

- [`bytesSent`](/de/docs/Web/API/RTCDataChannelStats/bytesSent) {{optional_inline}}
  - : Ein positiver Ganzzahlenwert, der die Gesamtanzahl der Nutzdatenbytes angibt, die über das zugehörige `RTCDataChannel` gesendet wurden.
- [`bytesReceived`](/de/docs/Web/API/RTCDataChannelStats/bytesReceived) {{optional_inline}}
  - : Ein positiver Ganzzahlenwert, der die Gesamtanzahl der Nutzdatenbytes angibt, die über das zugehörige `RTCDataChannel` empfangen wurden.
- [`dataChannelIdentifier`](/de/docs/Web/API/RTCDataChannelStats/dataChannelIdentifier) {{optional_inline}}
  - : Ein positiver Ganzzahlenwert, der die [`id`](/de/docs/Web/API/RTCDataChannel/id) des zugehörigen `RTCDataChannel` enthält.
- [`label`](/de/docs/Web/API/RTCDataChannelStats/label) {{optional_inline}}
  - : Eine Zeichenkette, die das [`label`](/de/docs/Web/API/RTCDataChannel/label) des zugehörigen `RTCDataChannel` enthält.
- [`messagesReceived`](/de/docs/Web/API/RTCDataChannelStats/messagesReceived) {{optional_inline}}
  - : Ein positiver Ganzzahlenwert, der die Gesamtanzahl der [`message` events](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für empfangene Nachrichten im zugehörigen `RTCDataChannel` ausgelöst wurden.
- [`messagesSent`](/de/docs/Web/API/RTCDataChannelStats/messagesSent) {{optional_inline}}
  - : Ein positiver Ganzzahlenwert, der die Gesamtanzahl der [`message` events](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für gesendete Nachrichten auf dem Kanal ausgelöst wurden.
- [`protocol`](/de/docs/Web/API/RTCDataChannelStats/protocol) {{optional_inline}}
  - : Eine Zeichenkette, die das [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) des zugehörigen `RTCDataChannel` enthält.
- [`state`](/de/docs/Web/API/RTCDataChannelStats/state)
  - : Der [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) des zugehörigen `RTCDataChannel`.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für mehr Informationen).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCDataChannelStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCDataChannelStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCDataChannelStats/type)
  - : Ein String mit dem Wert `"data-channel"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, `myPeerConnection` ist eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), nutzt der folgende Code `await`, um auf den Statistikbericht zu warten und iteriert dann darüber mit `RTCStatsReport.forEach()`.
Er filtert dann die Wörterbücher nur für diejenigen Berichte, die den Typ `data-channel` haben, und protokolliert das Ergebnis.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "data-channel") {
    // Log the channel information
    console.log(report);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
