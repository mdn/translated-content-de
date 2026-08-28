---
title: "RTCError: receivedAlert-Eigenschaft"
short-title: receivedAlert
slug: Web/API/RTCError/receivedAlert
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`receivedAlert`**-Eigenschaft des [`RTCError`](/de/docs/Web/API/RTCError) Interfaces gibt den fatalen {{Glossary("DTLS", "DTLS")}}-Fehler an, der dazu geführt hat, dass ein Alert vom entfernten Peer empfangen wurde.

## Wert

Ein positiver Ganzzahlenwert.

> [!NOTE]
> Diese Eigenschaft ist `null`, wenn der `RTCError` keinen DTLS-Fehler darstellt.
> DTLS-Fehler werden durch die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft angezeigt, die auf `dtls-failure` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
