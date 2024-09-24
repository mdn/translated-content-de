---
title: "RTCError: receivedAlert-Eigenschaft"
short-title: receivedAlert
slug: Web/API/RTCError/receivedAlert
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`receivedAlert`** von {{domxref("RTCError")}} gibt den fatalen {{Glossary("DTLS")}} Fehler an, der dazu führte, dass eine Warnung vom entfernten Gegenpart empfangen wurde.

## Wert

Ein ganzzahliger Wert ohne Vorzeichen, der den fatalen {{Glossary("DTLS")}} Fehler angibt, welcher dazu führte, dass eine Warnung vom entfernten Gegenpart empfangen wurde.

> [!NOTE]
> Diese Eigenschaft ist `null`, wenn der `RTCError` keinen DTLS-Fehler darstellt (mit {{domxref("RTCError.errorDetail", "errorDetail")}} auf `dtls-failure` gesetzt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
