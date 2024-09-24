---
title: "RTCIceCandidate: tcpType-Eigenschaft"
short-title: tcpType
slug: Web/API/RTCIceCandidate/tcpType
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die nur-lesbare **`tcpType`**-Eigenschaft des **{{domxref("RTCIceCandidate")}}**-Interfaces wird bei TCP-Kandidaten verwendet, um zusätzliche Details über den Kandidatentyp zu liefern.

Der Wert des `tcpType`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das an den Konstruktor {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} übergeben wird. Sie können den Wert von `tcpType` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der korrekt formatierten `candidate`-a-Line des Objekts extrahiert.

## Wert

Wenn das {{domxref("RTCIceCandidate.protocol", "Protokoll")}} "tcp" ist, hat `tcpType` einen der folgenden Werte:

- `"active"`
  - : Der Transport wird versuchen, eine ausgehende Verbindung zu öffnen, aber keine eingehenden Verbindungsanfragen empfangen.
- `"passive"`
  - : Der Transport wird eingehende Verbindungsanfragen empfangen, aber keine ausgehende Verbindung versuchen zu öffnen.
- `"so"`
  - : Der Transport wird versuchen, gleichzeitig eine Verbindung mit seinem Gegenüber zu öffnen.

`tcpType` ist `null` für {{Glossary("UDP")}}-Kandidaten.

## Beispiele

In diesem Beispiel werden das {{domxref("RTCIceCandidate.protocol", "Protokoll")}} und `tcpType` des Kandidaten verwendet, um die Benutzeroberfläche für simultan-offene TCP-Kandidaten anzupassen.

```js
if (candidate.protocol === "tcp" && candidate.tcpType === "so") {
  adjustForSimultaneousOpen(candidate);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceCandidate.protocol")}}
- {{domxref("RTCIceCandidate.type")}}
