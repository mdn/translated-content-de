---
title: "RTCError: sentAlert-Eigenschaft"
short-title: sentAlert
slug: Web/API/RTCError/sentAlert
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sentAlert`**-Eigenschaft eines
{{domxref("RTCError")}} Objekts gibt die {{Glossary("DTLS")}}-Alarmnummer an, die beim
Senden von Daten an den entfernten Peer aufgetreten ist, wenn der Fehler einen ausgehenden DTLS-Fehler darstellt.

## Wert

Ein vorzeichenloser Ganzzahlenwert, der die DTLS-Alarmnummer angibt, die dem gesendeten DTLS-Fehler entspricht, welcher durch dieses `RTCError`-Objekt dargestellt wird. Diese Eigenschaft ist `null`, wenn {{domxref("RTCError.errorDetail", "errorDetail")}} nicht `dtls-failure` ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
