---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("WebRTC")}}

Das **`RTCCertificateStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Informationen über ein von einem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und seinem zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendetes Zertifikat zu berichten.

Der Bericht kann erhalten werden, indem man den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, durchläuft, bis man einen Eintrag mit dem [`type`](/de/docs/Web/API/RTCCertificateStats/type) von `certificate` findet.

## Instanzeigenschaften

- [`base64Certificate`](/de/docs/Web/API/RTCCertificateStats/base64Certificate)
  - : Ein String, der die Base-64-Darstellung des DER-kodierten Zertifikats enthält.
- [`fingerprint`](/de/docs/Web/API/RTCCertificateStats/fingerprint)
  - : Ein String, der den Zertifikat-Fingerprint enthält, der mit der in [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm) angegebenen Hash-Funktion berechnet wurde.
- [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm)
  - : Ein String, der die Hash-Funktion enthält, die zur Berechnung des Zertifikat-`fingerprint` verwendet wird, wie zum Beispiel "sha-256".
- [`issuerCertificateId`](/de/docs/Web/API/RTCCertificateStats/issuerCertificateId) {{experimental_inline}}
  - : Ein String, der die `id` des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Objekts in diesem Bericht enthält, das das nächste Zertifikat in der Zertifikatskette enthält.
    Dies wird nicht gesetzt, wenn das aktuelle Zertifikat ein selbstsigniertes Zertifikat oder das Ende der Zertifikatskette (ein Root-Zertifikat) ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCertificateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCCertificateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCCertificateStats/type)
  - : Ein String mit dem Wert `"certificate"`, der auf den Typ der Statistiken hinweist, die das Objekt enthält.

## Beispiele

### Grundlegende Verwendung

Gegeben ist eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist. Der untenstehende Code verwendet `await`, um auf den Statistikbericht zu warten, und durchläuft ihn dann mit `RTCStatsReport.forEach()`. Anschließend filtert er die Wörterbücher nur für die Berichte, die den Typ `certificate` haben, und protokolliert das Ergebnis.

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
