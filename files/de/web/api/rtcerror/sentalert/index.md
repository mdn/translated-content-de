---
title: "RTCError: sentAlert-Eigenschaft"
short-title: sentAlert
slug: Web/API/RTCError/sentAlert
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`sentAlert`**-Eigenschaft des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces gibt die {{Glossary("DTLS", "DTLS")}}-Alarmnummer an, die an das Remote-Peer gesendet wurde, falls der Fehler einen ausgehenden DTLS-Fehler darstellt.

## Wert

Ein positiver Ganzzahlwert, der die DTLS-Alarmnummer angibt, die dem DTLS-Fehler entspricht, der an das Remote-Peer gesendet wurde, wie durch dieses `RTCError`-Objekt dargestellt.
Diese Eigenschaft ist `null`, wenn [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) nicht `dtls-failure` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
