---
title: "RTCError: sentAlert-Eigenschaft"
short-title: sentAlert
slug: Web/API/RTCError/sentAlert
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sentAlert`**-Eigenschaft in einem [`RTCError`](/de/docs/Web/API/RTCError)-Objekt gibt die [DTLS](/de/docs/Glossary/DTLS)-Alert-Nummer an, die aufgetreten ist, während Daten an den Remote-Peer gesendet wurden, falls der Fehler einen ausgehenden DTLS-Fehler darstellt.

## Wert

Ein vorzeichenloser Ganzzahlenwert, der die DTLS-Alert-Nummer angibt, die dem DTLS-Fehler entspricht, der an den Remote-Peer gesendet wurde, wie durch dieses `RTCError`-Objekt dargestellt. Diese Eigenschaft ist `null`, wenn [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) nicht `dtls-failure` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
