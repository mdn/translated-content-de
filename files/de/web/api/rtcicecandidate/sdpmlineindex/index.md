---
title: "RTCIceCandidate: Eigenschaft sdpMLineIndex"
short-title: sdpMLineIndex
slug: Web/API/RTCIceCandidate/sdpMLineIndex
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sdpMLineIndex`**-Eigenschaft des [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Interfaces ist ein nullbasierter Index der m-Line, die die Medien beschreibt, die mit dem Kandidaten verbunden sind.

Diese Eigenschaft kann konfiguriert werden, indem der Wert der `sdpMLineIndex`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben wird, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einer m-Line-Zeichenkette anstelle des Optionsobjekts aufrufen, wird der Wert von `sdpMLineIndex` aus der angegebenen Kandidaten-m-Line-Zeichenkette extrahiert.

## Wert

Eine Zahl, die einen nullbasierten Index in dem Satz von m-Lines enthält, die Medienbeschreibungen bieten und angibt, welche Medienquelle mit dem Kandidaten verbunden ist, oder `null`, wenn keine solche Zuordnung verfügbar ist.

> [!NOTE]
> Der Versuch, einen Kandidaten hinzuzufügen (mit
> [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)), der entweder für `sdpMid` oder
> `sdpMLineIndex` den Wert `null` hat, wird eine {{jsxref("TypeError")}}-Ausnahme auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
