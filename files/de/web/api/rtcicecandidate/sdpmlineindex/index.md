---
title: "RTCIceCandidate: sdpMLineIndex-Eigenschaft"
short-title: sdpMLineIndex
slug: Web/API/RTCIceCandidate/sdpMLineIndex
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sdpMLineIndex`**-Eigenschaft auf der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle
ist ein nullbasiertes Index der m-line, die die Medien beschreibt, die mit dem Kandidaten verbunden sind.

Diese Eigenschaft kann konfiguriert werden, indem der Wert der `sdpMLineIndex`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben wird, das an den Konstruktor [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate) übergeben wird.
Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionsobjekts aufrufen, wird der Wert von `sdpMLineIndex` aus dem angegebenen Kandidaten-m-line-String extrahiert.

## Wert

Eine Zahl, die einen nullbasierten Index in die Menge der m-lines enthält, die Medienbeschreibungen liefern, und angibt, welche Medienquelle mit dem Kandidaten verbunden ist, oder `null`, wenn keine solche Zuordnung verfügbar ist.

> [!NOTE]
> Der Versuch, einen Kandidaten hinzuzufügen (mithilfe von
> [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)), der einen
> Wert von `null` für entweder `sdpMid` oder
> `sdpMLineIndex` hat, wird eine {{jsxref("TypeError")}}-Ausnahme auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
