---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCCertificateStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Informationen über ein Zertifikat zu berichten, das von einem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und seinem zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.

Der Bericht kann erhalten werden, indem man das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchsucht, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis man einen Eintrag mit dem [`type`](/de/docs/Web/API/RTCCertificateStats/type) von `certificate` findet.

## Instanz-Eigenschaften

- [`fingerprint`](/de/docs/Web/API/RTCCertificateStats/fingerprint)
  - : Ein String, der den Zertifikats-Fingerabdruck enthält, der mit der in [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm) angegebenen Hash-Funktion berechnet wird.
- [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm)
  - : Ein String, der die Hash-Funktion enthält, die zur Berechnung des Zertifikats-`fingerprint` verwendet wird, wie etwa "sha-256".
- [`base64Certificate`](/de/docs/Web/API/RTCCertificateStats/base64Certificate)
  - : Ein String, der die Base-64-Darstellung des DER-kodierten Zertifikats enthält.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistik-Objekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCertificateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCCertificateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistik-Objekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCCertificateStats/type)
  - : Ein String mit dem Wert `"certificate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, `myPeerConnection` ist eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), der untenstehende Code verwendet `await`, um auf den Statistikbericht zu warten, und durchläuft diesen dann mit `RTCStatsReport.forEach()`.
Er filtert dann die Wörterbücher nur für solche Berichte, die den Typ `certificate` haben, und gibt das Ergebnis aus.

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
