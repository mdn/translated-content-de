---
title: "RTCIceCandidate: sdpMid-Eigenschaft"
short-title: sdpMid
slug: Web/API/RTCIceCandidate/sdpMid
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpMid`** der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle gibt einen String zurück, der das Medienstream-Identifikations-Tag der Medienkomponente angibt, mit der der Kandidat assoziiert ist. Diese ID identifiziert eindeutig einen bestimmten Stream für die Komponente, mit der der Kandidat assoziiert ist.

Diese Eigenschaft kann konfiguriert werden, indem der Wert der `sdpMid`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben wird, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionsobjekts aufrufen, wird der Wert von `sdpMid` aus dem angegebenen Kandidaten-m-line-String extrahiert.

## Wert

Ein String, der die Quellmedienkomponente eindeutig identifiziert, aus der der Kandidat Daten bezieht, oder `null`, wenn keine solche Zuordnung für den Kandidaten existiert.

> [!NOTE]
> Ein Versuch, einen Kandidaten hinzuzufügen (mithilfe von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)), der sowohl für `sdpMid` als auch `sdpMLineIndex` den Wert `null` hat, wird eine {{jsxref("TypeError")}}-Ausnahme auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
