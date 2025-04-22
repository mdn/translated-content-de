---
title: "RTCInboundRtpStreamStats: packetsFailedDecryption Eigenschaft"
short-title: packetsFailedDecryption
slug: Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`packetsFailedDecryption`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtanzahl der {{Glossary("RTP", "RTP")}}-Pakete an, die nach dem Empfang durch das lokale Ende der Verbindung während dieser Sitzung nicht erfolgreich entschlüsselt werden konnten.

## Wert

Ein Ganzzahlwert, der angibt, wie viele Pakete am lokalen Ende der RTP-Verbindung nicht erfolgreich entschlüsselt werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(3711, "", "3.3")}}: Beschreibung des Entschlüsselungsprozesses für sichere RTP-Pakete
