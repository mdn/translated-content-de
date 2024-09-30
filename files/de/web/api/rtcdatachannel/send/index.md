---
title: "RTCDataChannel: send()-Methode"
short-title: send()
slug: Web/API/RTCDataChannel/send
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`send()`**-Methode des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interfaces sendet Daten über den Datenkanal zum Remote-Peer. Dies kann jederzeit geschehen, außer während des Anfangsprozesses der Erstellung des zugrunde liegenden Transportkanals. Daten, die vor dem Verbindungsaufbau gesendet werden, werden, wenn möglich, zwischengespeichert (oder es tritt ein Fehler auf, falls dies nicht möglich ist) und werden ebenfalls zwischengespeichert, wenn sie während des Schließens oder nach dem Schließen der Verbindung gesendet werden.

> [!NOTE]
> Verschiedene Browser haben unterschiedliche Beschränkungen bezüglich der Größe der Nachricht, die Sie senden können. Es gibt Spezifikationen, um zu definieren, wie große Nachrichten automatisch fragmentiert werden können, jedoch implementieren nicht alle Browser diese, und diejenigen, die es tun, haben verschiedene zusätzliche Beschränkungen. Dies wird im Laufe der Zeit weniger kompliziert werden, aber wenn Sie jetzt Fragen dazu haben, lesen Sie bitte [Verstehen von Nachrichtenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`
  - : Die Daten, die über die Verbindung übertragen werden sollen. Dies kann ein String, ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Datenkanal seine eigene Verbindung noch nicht fertiggestellt hat (das heißt, sein [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) ist `connecting`). Der Datenkanal muss seine eigene Verbindung herstellen, da er einen separaten Transportkanal von dem der Medieninhalte verwendet. Dieser Fehler tritt ohne Senden oder Zwischenspeichern der `data` auf.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen `data` zwischengespeichert werden müssten und dafür kein Platz im Puffer ist. In diesem Szenario wird der zugrunde liegende Transport sofort geschlossen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `data` zu groß sind, damit der andere Peer sie empfangen kann. Da es mehrere Techniken gibt, um große Daten in kleinere Stücke für die Übertragung aufzuteilen, kann es zu Szenarien kommen, in denen der andere Peer nicht die gleichen Techniken unterstützt. Zum Beispiel, wenn ein Peer ein moderner Browser ist, der das `EOR` (End of Record)-Flag unterstützt, um anzuzeigen, wann eine empfangene Nachricht das letzte Stück eines mehrteiligen Objekts ist, das mit `send()` gesendet wird. Für weitere Informationen über Größenbeschränkungen von Nachrichten siehe [Verstehen von Nachrichtenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Beispiele

In diesem Beispiel wird eine Routine namens `sendMessage()` erstellt; sie akzeptiert ein Objekt als Eingabe und sendet über das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ein JSON-String mit dem angegebenen Objekt und einem Zeitstempel an den Remote-Peer.

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
