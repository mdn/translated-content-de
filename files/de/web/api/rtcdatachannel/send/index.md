---
title: "RTCDataChannel: send()-Methode"
short-title: send()
slug: Web/API/RTCDataChannel/send
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`send()`**-Methode der
{{domxref("RTCDataChannel")}}-Schnittstelle sendet Daten über den Datenkanal an den
entfernten Peer. Dies kann jederzeit geschehen, außer während des anfänglichen Prozesses
der Erstellung des zugrunde liegenden Transportkanals. Daten, die vor dem Herstellen der Verbindung gesendet werden, werden gepuffert, wenn möglich (oder es tritt ein Fehler auf, wenn dies nicht möglich ist), und werden ebenfalls gepuffert, wenn sie gesendet werden, während die Verbindung geschlossen wird oder bereits geschlossen ist.

> [!NOTE]
> Verschiedene Browser haben unterschiedliche Beschränkungen für die Größe der Nachrichten, die Sie
> senden können. Es gibt Spezifikationen, die definieren, wie große Nachrichten automatisch fragmentiert werden können, aber
> nicht alle Browser implementieren sie, und diejenigen, die dies tun, haben verschiedene zusätzliche
> Einschränkungen. Dies wird im Laufe der Zeit weniger kompliziert werden, aber derzeit, wenn Sie
> Fragen haben, sehen Sie unter [Verständnis der Nachrichtenbegrenzung](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`
  - : Die zu übertragenden Daten über die Verbindung. Dies kann ein String,
    ein {{domxref("Blob")}}, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Datenkanal die eigene Verbindung noch nicht vollständig hergestellt hat (das heißt, sein
    {{domxref("RTCDataChannel.readyState", "readyState")}} ist `connecting`). Der Datenkanal
    muss seine eigene Verbindung herstellen, da er einen separaten Transportkanal von dem der Medieninhalte verwendet. Dieser Fehler tritt auf, ohne dass die `data` gesendet oder gepuffert werden.
- `NetworkError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angegebene `data` gepuffert werden müsste und kein Platz dafür im Puffer vorhanden ist. In diesem Fall wird der zugrunde liegende Transport sofort geschlossen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebene `data` für den Empfang durch den anderen Peer zu groß ist. Da es mehrere Techniken gibt, um große Daten in kleinere Teile für
    den Transfer aufzubrechen, ist es möglich, Szenarien zu erleben, in denen der andere Peer diese Techniken nicht unterstützt. Zum Beispiel, wenn ein Peer ein moderner Browser ist, der die Verwendung des `EOR`-Flags (End of Record) unterstützt, um anzuzeigen, wann eine empfangene Nachricht der letzte Teil eines mehrteiligen Objekts ist, das mit `send()` gesendet wurde. Für mehr
    Informationen über Nachrichtenrestriktionen siehe
    [Verständnis der Nachrichtenbegrenzung](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits).

## Beispiele

In diesem Beispiel wird eine Routine namens `sendMessage()` erstellt; sie akzeptiert ein
Objekt als Eingabe und sendet an den entfernten Peer über das {{domxref("RTCDataChannel")}} einen
JSON-String mit dem angegebenen Objekt und einem Zeitstempel.

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
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.readyState")}}
- {{DOMxRef("RTCDataChannel.close_event", "close")}}-Ereignis
