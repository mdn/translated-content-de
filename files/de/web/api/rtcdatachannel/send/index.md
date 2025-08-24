---
title: "RTCDataChannel: send()-Methode"
short-title: send()
slug: Web/API/RTCDataChannel/send
l10n:
  sourceCommit: 5ccf6191c3e2efcd8f7bd46bb52f6972abd042da
---

{{APIRef("WebRTC")}}

Die **`send()`**-Methode der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle sendet Daten über den Datenkanal zum entfernten Peer. Dies kann jederzeit erfolgen, außer während des anfänglichen Prozesses der Erstellung des zugrunde liegenden Transportkanals. Daten, die vor dem Herstellen der Verbindung gesendet werden, werden gepuffert, sofern möglich (oder es tritt ein Fehler auf, wenn es nicht möglich ist) und werden auch gepuffert, wenn sie gesendet werden, während die Verbindung geschlossen wird oder bereits geschlossen ist.

> [!NOTE]
> Verschiedene Browser haben unterschiedliche Begrenzungen für die Größe der Nachrichten, die Sie senden können. Spezifikationen existieren, um zu definieren, wie große Nachrichten automatisch fragmentiert werden können, aber nicht alle Browser implementieren dies, und die, die es tun, haben verschiedene zusätzliche Einschränkungen. Dies wird mit der Zeit weniger kompliziert, aber für jetzt, wenn Sie Fragen haben, siehe [Verstehen der Nachrichtenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`
  - : Die zu übertragenden Daten über die Verbindung. Dies kann ein String,
    ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Datenkanal seine eigene Verbindung noch nicht eingerichtet hat (das heißt, sein [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) ist `connecting`). Der Datenkanal muss seine eigene Verbindung herstellen, da er einen separaten Transportkanal von dem der Medieninhalte verwendet. Dieser Fehler tritt auf, ohne das `data` gesendet oder gepuffert wird.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen `data` gepuffert werden müssten und im Puffer kein Platz dafür ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `data` zu groß sind, um vom anderen Peer empfangen zu werden. Da es mehrere Techniken gibt, um große Daten in kleinere Stücke für den Transfer zu unterteilen, ist es möglich, Szenarien zu begegnen, in denen der andere Peer nicht die gleichen Techniken unterstützt. Zum Beispiel, wenn ein Peer ein moderner Browser ist, der die `EOR` (End of Record)-Flagge verwendet, um anzuzeigen, wann eine empfangene Nachricht das letzte Stück eines in mehrere Teile gesendeten Objekts ist, das über `send()` gesendet wurde. Für weitere Informationen zu Einschränkungen der Nachrichtengröße, siehe [Verstehen der Nachrichtenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Beispiele

In diesem Beispiel wird eine Routine namens `sendMessage()` erstellt, die ein Objekt als Eingabe akzeptiert und dem entfernten Peer über das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) einen JSON-String mit dem angegebenen Objekt und einem Zeitstempel sendet.

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("BackChannel");

function sendMessage(msg) {
  const obj = {
    message: msg,
    timestamp: new Date(),
  };
  dc.send(JSON.stringify(obj));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.readyState`](/de/docs/Web/API/RTCDataChannel/readyState)
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event) event
