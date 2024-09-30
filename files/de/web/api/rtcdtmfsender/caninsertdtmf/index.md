---
title: "RTCDTMFSender: canInsertDTMF-Eigenschaft"
short-title: canInsertDTMF
slug: Web/API/RTCDTMFSender/canInsertDTMF
l10n:
  sourceCommit: 333badd0927908502d4d5a94e79f41b0422a1f38
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`canInsertDTMF`** des [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der `RTCDTMFSender` in der Lage ist, DTMF-Töne über die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `RTCDTMFSender` in der Lage ist, DTMF-Töne zu senden, oder `false`, wenn dies nicht der Fall ist.

## Beispiele

### Verwendung von canInsertDTMF zur Überprüfung der DTMF-Unterstützung

Dieses Beispiel zeigt, wie die `canInsertDTMF`-Eigenschaft verwendet wird, um die DTMF-Unterstützung in einer WebRTC-Verbindung zu überprüfen und dann Töne zu senden, wenn sie unterstützt wird.

Der Code überprüft zunächst, ob die `canInsertDTMF`-Eigenschaft definiert ist, und verwendet sie, um zu überprüfen, ob das Einfügen von DTMF-Tönen unterstützt wird.
Wenn das Feature unterstützt wird, wird [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) aufgerufen, um einen Ton einzufügen.

```js
if (sender.dtmf.canInsertDTMF) {
  const duration = 500;
  sender.dtmf.insertDTMF("1234", duration);
} else {
  console.log("DTMF function not available");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
