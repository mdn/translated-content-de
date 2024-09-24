---
title: "RTCIceCandidate: sdpMid-Eigenschaft"
short-title: sdpMid
slug: Web/API/RTCIceCandidate/sdpMid
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpMid`** der {{domxref("RTCIceCandidate")}}-Schnittstelle gibt einen String zurück, der das Identifikations-Tag des Medienstroms der Medienkomponente, mit der der Kandidat verbunden ist, angibt. Diese ID identifiziert einen bestimmten Stream eindeutig für die Komponente, mit der der Kandidat verbunden ist.

Diese Eigenschaft kann konfiguriert werden, indem der Wert der `sdpMid`-Eigenschaft im `candidateInfo` Optionen-Objekt angegeben wird, das an den {{domxref("RTCIceCandidate.RTCIceCandidate","RTCIceCandidate()")}} Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionen-Objekts aufrufen, wird der Wert von `sdpMid` aus dem angegebenen Kandidaten-m-line-String extrahiert.

## Wert

Ein String, der die Quellmedienkomponente eindeutig identifiziert, von der der Kandidat Daten zieht, oder `null`, wenn keine solche Zuordnung für den Kandidaten existiert.

> [!NOTE]
> Der Versuch, einen Kandidaten hinzuzufügen (mit {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}), der für sowohl `sdpMid` als auch `sdpMLineIndex` den Wert `null` hat, wird eine {{jsxref("TypeError")}} Ausnahme auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
