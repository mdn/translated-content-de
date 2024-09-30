---
title: "RTCIceCandidate: sdpMid-Eigenschaft"
short-title: sdpMid
slug: Web/API/RTCIceCandidate/sdpMid
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpMid`** auf der Schnittstelle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) gibt einen String zurück, der das Medienstream-Identifizierungs-Tag der Medienkomponente angibt, mit der der Kandidat verknüpft ist. Diese ID identifiziert einen bestimmten Stream eindeutig für die Komponente, mit der der Kandidat assoziiert ist.

Diese Eigenschaft kann konfiguriert werden, indem der Wert der `sdpMid`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben wird, das an den Konstruktor [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate) übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionsobjekts aufrufen, wird der Wert von `sdpMid` aus dem angegebenen Kandidaten-m-line-String extrahiert.

## Wert

Ein String, der die Quellmedienkomponente eindeutig identifiziert, aus der der Kandidat Daten bezieht, oder `null`, wenn keine solche Zuordnung für den Kandidaten existiert.

> [!NOTE]
> Ein Versuch, einen Kandidaten hinzuzufügen (mit [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)), der sowohl für `sdpMid` als auch `sdpMLineIndex` den Wert `null` hat, wird eine {{jsxref("TypeError")}}-Ausnahme auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
