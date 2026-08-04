---
title: "RTCCertificateStats: issuerCertificateId-Eigenschaft"
short-title: issuerCertificateId
slug: Web/API/RTCCertificateStats/issuerCertificateId
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`issuerCertificateId`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein String, der die [`id`](/de/docs/Web/API/RTCCertificateStats/id) des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Objekts in diesem Bericht enthält, welches das nächste Zertifikat in der Zertifikatskette enthält.

Wenn es keine weiteren Zertifikate in der Kette gibt, wie zum Beispiel wenn dies das Root-Zertifikat oder ein selbstsigniertes Zertifikat ist, ist der Wert `undefined`.

Beachten Sie, dass WebRTC Zertifikate verwendet, wenn eine DTLS-Verbindung hergestellt wird.
Standardmäßig verwenden Verbindungen selbstsignierte Zertifikate, aber in Unternehmens- oder WebRTC-Gateway-Konfigurationen können stattdessen signierte Zertifikatsketten von Zwischen- und Root-Zertifizierungsstellen (CAs) verwendet werden.
Diese Eigenschaft ermöglicht es Ihnen, bei Bedarf die Zertifikatskette zu durchlaufen.

## Wert

Ein String oder `undefined`, wenn das aktuelle Zertifikat am Ende der Zertifikatskette ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
