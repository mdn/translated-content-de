---
title: "RTCError: sentAlert-Eigenschaft"
short-title: sentAlert
slug: Web/API/RTCError/sentAlert
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sentAlert`** des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces gibt die {{Glossary("DTLS", "DTLS")}}-Alarmnummer an, die an den entfernten Peer gesendet wurde, falls der Fehler einen ausgehenden DTLS-Fehler darstellt.

## Wert

Ein positiver ganzzahliger Wert, der die DTLS-Alarmnummer angibt, die dem DTLS-Fehler entspricht, der an den entfernten Peer gesendet wurde, wie es durch dieses `RTCError`-Objekt dargestellt wird. Diese Eigenschaft ist `null`, wenn [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) nicht `dtls-failure` lautet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
