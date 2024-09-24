---
title: "RTCDTMFSender: canInsertDTMF-Eigenschaft"
short-title: canInsertDTMF
slug: Web/API/RTCDTMFSender/canInsertDTMF
l10n:
  sourceCommit: 333badd0927908502d4d5a94e79f41b0422a1f38
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`canInsertDTMF`** des {{domxref("RTCDTMFSender")}}-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der `RTCDTMFSender` in der Lage ist, DTMF-Töne über die {{domxref("RTCPeerConnection")}} zu senden.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `RTCDTMFSender` in der Lage ist, DTMF-Töne zu senden, oder `false`, wenn dies nicht der Fall ist.

## Beispiele

### Nutzung von canInsertDTMF zur Überprüfung der DTMF-Unterstützung

Dieses Beispiel zeigt, wie die Eigenschaft `canInsertDTMF` verwendet wird, um die Unterstützung von DTMF in einer WebRTC-Verbindung zu überprüfen und dann Töne zu senden, wenn dies unterstützt wird.

Der Code prüft zuerst, ob die Eigenschaft `canInsertDTMF` definiert ist, und verwendet sie dann, um zu überprüfen, ob das Einfügen von DTMF-Tönen unterstützt wird. Wenn die Funktion unterstützt wird, wird {{domxref("RTCDTMFSender.insertDTMF()")}} aufgerufen, um einen Ton einzufügen.

```js
if (sender.dtmf.canInsertDTMF) {
  const duration = 500;
  sender.dtmf.insertDTMF("1234", duration);
} else {
  console.log("DTMF-Funktion nicht verfügbar");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCDTMFSender.insertDTMF()")}}
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
