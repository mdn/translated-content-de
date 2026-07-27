---
title: "RTCCertificateStats: issuerCertificateId-Eigenschaft"
short-title: issuerCertificateId
slug: Web/API/RTCCertificateStats/issuerCertificateId
l10n:
  sourceCommit: af5284cd1095a4267cd72fa3eb0d0ef6878e1f9f
---

{{APIRef("WebRTC")}}

Die **`issuerCertificateId`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein String, der die [`id`](/de/docs/Web/API/RTCCertificateStats/id) des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Objekts in diesem Bericht enthält, das das nächste Zertifikat in der Zertifikatskette enthält.

Wenn es keine weiteren Zertifikate in der Kette gibt, zum Beispiel wenn dies das Stammzertifikat oder ein selbstsigniertes Zertifikat ist, ist der Wert `undefined`.

Beachten Sie, dass WebRTC Zertifikate verwendet, wenn eine DTLS-Verbindung hergestellt wird.
Standardmäßig verwenden Verbindungen selbstsignierte Zertifikate, aber in Unternehmensumgebungen oder WebRTC-Gateway-Einrichtungen können stattdessen signierte Zertifikatsketten von Zwischen- und Stammzertifizierungsstellen (CAs) verwendet werden.
Diese Eigenschaft ermöglicht es Ihnen, bei Bedarf die Kette der Zertifikate zu durchlaufen.

## Wert

Ein String oder `undefined`, wenn das aktuelle Zertifikat am Ende der Zertifikatskette ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
