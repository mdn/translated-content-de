---
title: "RTCDataChannel: send() Methode"
short-title: send()
slug: Web/API/RTCDataChannel/send
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`send()`** Methode der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle sendet Daten über den Datenkanal zum entfernten Peer. Dies kann jederzeit erfolgen, außer während des anfänglichen Prozesses der Erstellung des zugrundeliegenden Transportkanals. Daten, die vor der Verbindung gesendet werden, werden, wenn möglich, zwischengespeichert (oder es tritt ein Fehler auf, falls dies nicht möglich ist), und werden auch zwischengespeichert, wenn sie gesendet werden, während die Verbindung sich schließt oder geschlossen ist.

> [!NOTE]
> Verschiedene Browser haben unterschiedliche Einschränkungen bezüglich der Größe der Nachrichten, die Sie senden können. Es existieren Spezifikationen, um festzulegen, wie große Nachrichten automatisch fragmentiert werden können, aber nicht alle Browser implementieren diese, und diejenigen, die es tun, haben verschiedene zusätzliche Einschränkungen. Dies wird mit der Zeit weniger kompliziert, aber für den Moment, wenn Sie Fragen haben, siehe [Verständnis der Nachrichtenlimitgrößen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`
  - : Die Daten, die über die Verbindung übertragen werden sollen. Dies kann ein String, ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} Objekt sein.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Datenkanal seine eigene Verbindung noch nicht abgeschlossen hat (d.h. sein [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) ist `connecting`). Der Datenkanal muss seine eigene Verbindung herstellen, weil er einen separaten Transportkanal von dem der Medieninhalte verwendet. Dieser Fehler tritt ohne Senden oder Zwischenspeichern der `data` auf.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen `data` zwischengespeichert werden müssten und nicht genügend Platz im Puffer vorhanden ist. In diesem Szenario wird der zugrunde liegende Transport sofort geschlossen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `data` zu groß sind, um vom anderen Peer empfangen zu werden. Da es mehrere Techniken gibt, um große Daten in kleinere Teile für den Transfer aufzuteilen, kann es möglich sein, Szenarien zu begegnen, in denen der andere Peer nicht dieselben Techniken unterstützt. Zum Beispiel, wenn ein Peer ein moderner Browser ist, der die Verwendung des `EOR` (End of Record) Flags unterstützt, um anzuzeigen, wann eine empfangene Nachricht das letzte Stück eines in mehreren Teilen gesendeten Objekts mit `send()` ist. Für weitere Informationen zu Nachrichtenbegrenzungen siehe [Verständnis der Nachrichtenlimitgrößen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Beispiele

In diesem Beispiel wird eine Routine namens `sendMessage()` erstellt; sie akzeptiert ein Objekt als Eingabe und sendet an den entfernten Peer über die [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) eine JSON-Zeichenfolge mit dem angegebenen Objekt und einem Zeitstempel.

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
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event) Ereignis
