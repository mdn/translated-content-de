---
title: RTCDataChannelStats
slug: Web/API/RTCDataChannelStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCDataChannelStats`** Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) bietet Statistiken, die sich auf ein {{domxref("RTCDataChannel")}}-Objekt in der Verbindung beziehen.

Der Bericht kann erhalten werden, indem der {{domxref("RTCStatsReport")}}, der von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, durchiteriert wird, bis Sie einen Eintrag mit dem [`type`](#type) `data-channel` finden.

Die Statistiken der Datenkanäle können einem bestimmten Kanal zugeordnet werden, indem die Eigenschaft [`dataChannelIdentifier`](#datachannelidentifier) mit einer entsprechenden {{domxref("RTCDataChannel.id")}} verglichen wird.

## Instanz-Eigenschaften

- {{domxref("RTCDataChannelStats.bytesSent", "bytesSent")}} {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der Nutzlast-Bytes angibt, die über den zugehörigen `RTCDataChannel` gesendet wurden.
- {{domxref("RTCDataChannelStats.bytesReceived", "bytesReceived")}} {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der Nutzlast-Bytes angibt, die über den zugehörigen `RTCDataChannel` empfangen wurden.
- {{domxref("RTCDataChannelStats.dataChannelIdentifier", "dataChannelIdentifier")}} {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die {{domxref("RTCDataChannel.id", "id")}} des zugehörigen `RTCDataChannel` enthält.
- {{domxref("RTCDataChannelStats.label", "label")}} {{optional_inline}}
  - : Ein String, der das {{domxref("RTCDataChannel.label", "label")}} des zugehörigen `RTCDataChannel` enthält.
- {{domxref("RTCDataChannelStats.messagesReceived", "messagesReceived")}} {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der [`message`-Events](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für empfangene Nachrichten auf dem zugehörigen `RTCDataChannel` ausgelöst wurden.
- {{domxref("RTCDataChannelStats.messagesSent", "messagesSent")}} {{optional_inline}}
  - : Ein positiver Ganzzahlwert, der die Gesamtanzahl der [`message`-Events](/de/docs/Web/API/RTCDataChannel/message_event) angibt, die für gesendete Nachrichten auf dem Kanal ausgelöst wurden.
- {{domxref("RTCDataChannelStats.protocol", "protocol")}} {{optional_inline}}
  - : Ein String, der das {{domxref("RTCDataChannel.protocol", "protocol")}} des zugehörigen `RTCDataChannel` enthält.
- {{domxref("RTCDataChannelStats.state", "state")}}
  - : Der {{domxref("RTCDataChannel.readyState", "readyState")}} des zugehörigen `RTCDataChannel`.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allgemein für alle WebRTC-Statistikobjekte (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für mehr Informationen).

<!-- RTCStats -->

- {{domxref("RTCDataChannelStats.id", "id")}}
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diese Menge an Statistiken zu erzeugen.
- {{domxref("RTCDataChannelStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- {{domxref("RTCDataChannelStats.type", "type")}}
  - : Ein String mit dem Wert `"data-channel"`, der den Typ der Statistiken angibt, den das Objekt enthält.

## Beispiele

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von {{domxref("RTCPeerConnection")}} ist. Der folgende Code verwendet `await`, um auf den Statistikbericht zu warten, und iteriert dann über diesen mithilfe von `RTCStatsReport.forEach()`. Es filtert dann die Wörterbücher für nur diejenigen Berichte, die den Typ `data-channel` haben und protokolliert das Ergebnis.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "data-channel") {
    // Loggen Sie die Kanalinformationen
    console.log(report);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
