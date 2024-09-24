---
title: "RTCIceCandidate: sdpMLineIndex-Eigenschaft"
short-title: sdpMLineIndex
slug: Web/API/RTCIceCandidate/sdpMLineIndex
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sdpMLineIndex`**-Eigenschaft der {{domxref("RTCIceCandidate")}}-Schnittstelle ist ein nullbasierter Index der m-line, die die mit dem Kandidaten verknüpfte Medien beschreibt.

Diese Eigenschaft kann konfiguriert werden, indem der Wert der `sdpMLineIndex`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben wird, das an den {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}-Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionsobjekts aufrufen, wird der Wert von `sdpMLineIndex` aus dem angegebenen Kandidaten-m-line-String extrahiert.

## Wert

Eine Zahl, die einen nullbasierten Index in der Menge der m-lines enthält, welche Medienbeschreibungen bieten. Diese Zahl gibt an, welche Medienquelle mit dem Kandidaten verknüpft ist, oder `null`, wenn keine solche Verknüpfung verfügbar ist.

> [!NOTE]
> Der Versuch, einen Kandidaten hinzuzufügen (unter Verwendung von {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}), der für entweder `sdpMid` oder `sdpMLineIndex` einen Wert von `null` hat, wird eine {{jsxref("TypeError")}}-Ausnahme auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
