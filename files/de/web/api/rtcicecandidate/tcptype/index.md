---
title: "RTCIceCandidate: tcpType-Eigenschaft"
short-title: tcpType
slug: Web/API/RTCIceCandidate/tcpType
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`tcpType`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces ist bei TCP-Kandidaten enthalten, um zusätzliche Details zum Kandidatentyp bereitzustellen.

Der Wert des `tcpType`-Feldes wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das dem [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird.
Sie können den Wert von `tcpType` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate` a-line des Objekts extrahiert, wenn es richtig formatiert ist.

## Wert

Wenn das [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) "tcp" ist, hat `tcpType` einen der folgenden Werte:

- `"active"`
  - : Der Transport wird versuchen, eine ausgehende Verbindung zu öffnen, aber keine eingehenden Verbindungsanfragen empfangen.
- `"passive"`
  - : Der Transport wird eingehende Verbindungsanfragen empfangen, aber keine ausgehende Verbindung versuchen.
- `"so"`
  - : Der Transport wird versuchen, gleichzeitig mit seinem Gegenüber eine Verbindung zu öffnen.

`tcpType` ist `null` für [UDP](/de/docs/Glossary/UDP)-Kandidaten.

## Beispiele

In diesem Beispiel werden das [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol)
und `tcpType` des Kandidaten verwendet, um die Benutzeroberfläche für simultan geöffnete TCP-Kandidaten anzupassen.

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
- [`RTCIceCandidate.protocol`](/de/docs/Web/API/RTCIceCandidate/protocol)
- [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type)
