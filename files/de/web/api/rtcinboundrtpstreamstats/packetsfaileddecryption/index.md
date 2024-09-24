---
title: "RTCInboundRtpStreamStats: Eigenschaft packetsFailedDecryption"
short-title: packetsFailedDecryption
slug: Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`packetsFailedDecryption`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs gibt die Gesamtzahl der {{Glossary("RTP")}}-Pakete an, die nach dem Empfang durch das lokale Ende der Verbindung in dieser Sitzung nicht erfolgreich entschlüsselt werden konnten.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele Pakete am lokalen Ende der RTP-Verbindung nicht erfolgreich entschlüsselt werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(3711, "", "3.3")}}: Beschreibung des Entschlüsselungsprozesses für sichere RTP-Pakete
