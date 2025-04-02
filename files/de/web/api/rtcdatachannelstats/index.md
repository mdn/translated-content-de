---
title: RTCDataChannelStats
slug: Web/API/RTCDataChannelStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCDataChannelStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistiken, die mit einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt auf der Verbindung in Zusammenhang stehen.

Der Bericht kann erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) itereiert wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](/de/docs/Web/API/RTCDataChannelStats/type) `data-channel` finden.

Die Datenkanalstatistiken können einem bestimmten Kanal zugeordnet werden, indem die [`dataChannelIdentifier`](/de/docs/Web/API/RTCDataChannelStats/dataChannelIdentifier)-Eigenschaft mit einer passenden [`RTCDataChannel.id`](/de/docs/Web/API/RTCDataChannel/id) verglichen wird.

## Instanz-Eigenschaften

- [`bytesSent`](/de/docs/Web/API/RTCDataChannelStats/bytesSent) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der Nutzlast-Bytes angibt, die über den zugehörigen `RTCDataChannel` gesendet wurden.
- [`bytesReceived`](/de/docs/Web/API/RTCDataChannelStats/bytesReceived) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der Nutzlast-Bytes angibt, die über den zugehörigen `RTCDataChannel` empfangen wurden.
- [`dataChannelIdentifier`](/de/docs/Web/API/RTCDataChannelStats/dataChannelIdentifier) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die [`id`](/de/docs/Web/API/RTCDataChannel/id) des zugehörigen `RTCDataChannel` enthält.
- [`label`](/de/docs/Web/API/RTCDataChannelStats/label) {{optional_inline}}
  - : Ein String, der das [`label`](/de/docs/Web/API/RTCDataChannel/label) des zugehörigen `RTCDataChannel` enthält.
- [`messagesReceived`](/de/docs/Web/API/RTCDataChannelStats/messagesReceived) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der [`message` events](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für empfangene Nachrichten auf dem zugehörigen `RTCDataChannel` ausgelöst wurden.
- [`messagesSent`](/de/docs/Web/API/RTCDataChannelStats/messagesSent) {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der [`message` events](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für gesendete Nachrichten auf dem Kanal ausgelöst wurden.
- [`protocol`](/de/docs/Web/API/RTCDataChannelStats/protocol) {{optional_inline}}
  - : Ein String, der das [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) des zugehörigen `RTCDataChannel` enthält.
- [`state`](/de/docs/Web/API/RTCDataChannelStats/state)
  - : Der [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) des zugehörigen `RTCDataChannel`.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCDataChannelStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCDataChannelStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCDataChannelStats/type)
  - : Ein String mit dem Wert `"data-channel"`, der den Typ der Statistiken angibt, den das Objekt enthält.

## Beispiele

Gegeben sei eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist. Der nachfolgende Code verwendet `await`, um auf den Statistikbericht zu warten, und durchläuft ihn dann mit `RTCStatsReport.forEach()`.
Er filtert die Wörterbücher heraus, die nur Berichte vom Typ `data-channel` haben, und protokolliert das Ergebnis.

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
