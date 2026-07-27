---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
l10n:
  sourceCommit: af5284cd1095a4267cd72fa3eb0d0ef6878e1f9f
---

{{APIRef("WebRTC")}}

Das **`RTCCertificateStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Informationen über ein Zertifikat zu berichten, das von einem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrundeliegendem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) genutzt wird.

Der Bericht kann erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, welcher von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](/de/docs/Web/API/RTCCertificateStats/type) `certificate` finden.

## Instanz-Eigenschaften

- [`base64Certificate`](/de/docs/Web/API/RTCCertificateStats/base64Certificate)
  - : Ein String, der die Base-64-Darstellung des DER-kodierten Zertifikats enthält.
- [`fingerprint`](/de/docs/Web/API/RTCCertificateStats/fingerprint)
  - : Ein String, der den Zertifikat-Fingerprint enthält, welcher mit der in [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm) angegebenen Hash-Funktion berechnet wird.
- [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm)
  - : Ein String, der die Hash-Funktion enthält, die verwendet wird, um den Zertifikats-`fingerprint` zu berechnen, wie zum Beispiel "sha-256".
- [`issuerCertificateId`](/de/docs/Web/API/RTCCertificateStats/issuerCertificateId)
  - : Ein String, der die `id` des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats) Objekts in diesem Bericht enthält, welches das nächste Zertifikat in der Zertifikatskette enthält.
    Dies wird nicht gesetzt, wenn das aktuelle Zertifikat ein selbstsigniertes Zertifikat oder das Ende der Zertifikatskette (ein Stammzertifikat) ist.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (Weitere Informationen finden Sie unter [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties)).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCertificateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, eindeutig identifiziert, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCCertificateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das angibt, zu welchem Zeitpunkt die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCCertificateStats/type)
  - : Ein String mit dem Wert `"certificate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

### Grundlegende Verwendung

Angenommen, `myPeerConnection` ist eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), verwendet der nachstehende Code `await`, um auf den Statistikbericht zu warten, und durchläuft diesen dann mit `RTCStatsReport.forEach()`.
Anschließend werden die Wörterbücher gefiltert, um nur jene Berichte herauszufiltern, die den Typ `certificate` haben, und das Ergebnis wird protokolliert.

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
