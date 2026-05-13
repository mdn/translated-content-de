---
title: "RTCError: receivedAlert-Eigenschaft"
short-title: receivedAlert
slug: Web/API/RTCError/receivedAlert
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Die **`receivedAlert`**-Eigenschaft, die schreibgeschützt ist, des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces gibt den fatalen {{Glossary("DTLS", "DTLS")}}-Fehler an, der dazu führte, dass ein Alarm vom entfernten Partner empfangen wurde.

## Wert

Ein positiver Ganzzahlwert.

> [!NOTE]
> Diese Eigenschaft ist `null`, wenn das `RTCError` keinen DTLS-Fehler darstellt.
> DTLS-Fehler werden durch die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft angezeigt, die auf `dtls-failure` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
