---
title: RTCDataChannelStats
slug: Web/API/RTCDataChannelStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCDataChannelStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) liefert Statistiken, die mit einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt auf der Verbindung in Zusammenhang stehen.

Der Bericht kann erhalten werden, indem Sie den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, durchlaufen, bis Sie einen Eintrag mit dem [`Typ`](#type) von `data-channel` finden.

Die Statistiken der Datenkanäle können einem bestimmten Kanal zugeordnet werden, indem die [`dataChannelIdentifier`](#datachannelidentifier)-Eigenschaft mit einer übereinstimmenden [`RTCDataChannel.id`](/de/docs/Web/API/RTCDataChannel/id) verglichen wird.

## Instanz-Eigenschaften

- [`bytesSent`](/de/docs/Web/API/RTCDataChannelStats/bytesSent) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der auf dem zugeordneten `RTCDataChannel` gesendeten Nutzdaten-Bytes angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCDataChannelStats/bytesReceived) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der auf dem zugeordneten `RTCDataChannel` empfangenen Nutzdaten-Bytes angibt.
- [`dataChannelIdentifier`](/de/docs/Web/API/RTCDataChannelStats/dataChannelIdentifier) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die [`id`](/de/docs/Web/API/RTCDataChannel/id) des zugeordneten `RTCDataChannel` enthält.
- [`label`](/de/docs/Web/API/RTCDataChannelStats/label) {{optional_inline}}
  - : Ein String, der das [`label`](/de/docs/Web/API/RTCDataChannel/label) des zugeordneten `RTCDataChannel` enthält.
- [`messagesReceived`](/de/docs/Web/API/RTCDataChannelStats/messagesReceived) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der [`message`-Ereignisse](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für empfangene Nachrichten auf dem zugeordneten `RTCDataChannel` ausgelöst wurden.
- [`messagesSent`](/de/docs/Web/API/RTCDataChannelStats/messagesSent) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der [`message`-Ereignisse](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für gesendete Nachrichten auf dem Kanal ausgelöst wurden.
- [`protocol`](/de/docs/Web/API/RTCDataChannelStats/protocol) {{optional_inline}}
  - : Ein String, der das [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) des zugeordneten `RTCDataChannel` enthält.
- [`state`](/de/docs/Web/API/RTCDataChannelStats/state)
  - : Der [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) des zugeordneten `RTCDataChannel`.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (Weitere Informationen finden Sie unter [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties)).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCDataChannelStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diese Menge an Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCDataChannelStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das angibt, wann die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCDataChannelStats/type)
  - : Ein String mit dem Wert `"data-channel"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist, verwendet der folgende Code `await`, um auf den Statistikbericht zu warten, und durchläuft ihn dann mit `RTCStatsReport.forEach()`.
Er filtert dann die Wörterbücher, um nur die Berichte zu erhalten, die den Typ `data-channel` haben, und protokolliert das Ergebnis.

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
