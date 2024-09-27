---
title: "RTCSctpTransport: maxChannels Eigenschaft"
short-title: maxChannels
slug: Web/API/RTCSctpTransport/maxChannels
l10n:
  sourceCommit: bf7a7b9c81c465afc78519681bf0043ad3587689
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`maxChannels`** des [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) Schnittstelle gibt die maximale Anzahl von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekten an, die gleichzeitig geöffnet werden können.

## Wert

Ein ganzzahliger Wert, der die maximale Anzahl von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekten angibt, die gleichzeitig geöffnet werden können, oder `null`, bevor der SCTP-Transport den [Zustand](/de/docs/Web/API/RTCSctpTransport/state) "verbunden" erreicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
