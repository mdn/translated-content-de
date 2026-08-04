---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("WebRTC")}}

Das **`RTCCertificateStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Informationen über ein Zertifikat zu melden, das von einem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und seinem zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.

Der Bericht kann erhalten werden, indem man das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchläuft, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](/de/docs/Web/API/RTCCertificateStats/type) `certificate` finden.

## Instanzeigenschaften

- [`base64Certificate`](/de/docs/Web/API/RTCCertificateStats/base64Certificate)
  - : Ein String, der die base-64-Darstellung des DER-kodierten Zertifikats enthält.
- [`fingerprint`](/de/docs/Web/API/RTCCertificateStats/fingerprint)
  - : Ein String, der den Fingerabdruck des Zertifikats enthält, der mit der in [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm) angegebenen Hash-Funktion berechnet wird.
- [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm)
  - : Ein String, der die Hash-Funktion enthält, die zur Berechnung des Zertifikats-`fingerprint` verwendet wird, wie beispielsweise "sha-256".
- [`issuerCertificateId`](/de/docs/Web/API/RTCCertificateStats/issuerCertificateId) {{experimental_inline}}
  - : Ein String, der die `id` des `RTCCertificateStats`-Objekts in diesem Bericht enthält, das das nächste Zertifikat in der Zertifizierungskette enthält.
    Dieser Wert wird nicht gesetzt, wenn es sich bei dem aktuellen Zertifikat um ein selbstsigniertes Zertifikat handelt oder um das Ende der Zertifizierungskette (ein Stammzertifikat).

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für mehr Informationen).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCertificateStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCCertificateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das angibt, zu welchem Zeitpunkt die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCCertificateStats/type)
  - : Ein String mit dem Wert `"certificate"`, der den Typ der Statistiken angibt, den das Objekt enthält.

## Beispiele

### Grundlegende Verwendung

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist. Der untenstehende Code verwendet `await`, um auf den Statistikbericht zu warten und durchläuft diesen dann mit `RTCStatsReport.forEach()`.
Er filtert dann die Wörterbücher nur für die Berichte heraus, die den Typ `certificate` haben, und protokolliert das Ergebnis.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "certificate") {
    // Log the certificate information
    console.log(report);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
