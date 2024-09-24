---
title: "RTCSctpTransport: Eigenschaft maxChannels"
short-title: maxChannels
slug: Web/API/RTCSctpTransport/maxChannels
l10n:
  sourceCommit: bf7a7b9c81c465afc78519681bf0043ad3587689
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`maxChannels`** der {{DOMxRef("RTCSctpTransport")}}-Schnittstelle gibt die maximale Anzahl von {{DOMxRef("RTCDataChannel")}}-Objekten an, die gleichzeitig geöffnet werden können.

## Wert

Ein ganzzahliger Wert, der die maximale Anzahl von {{DOMxRef("RTCDataChannel")}}-Objekten angibt, die gleichzeitig geöffnet werden können, oder `null`, bevor der SCTP-Transport in den "connected"-[Zustand](/de/docs/Web/API/RTCSctpTransport/state) übergeht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
