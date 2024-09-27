---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCCertificateStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Informationen über ein Zertifikat zu berichten, das von einem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.

Der Bericht kann erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchiteriert wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](#type) von `certificate` finden.

## Instanz-Eigenschaften

- [`fingerprint`](/de/docs/Web/API/RTCCertificateStats/fingerprint)
  - : Ein String, der den Fingerabdruck des Zertifikats enthält, der mit der in [`fingerprintAlgorithm`](#fingerprintalgorithm) angegebenen Hash-Funktion berechnet wird.
- [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm)
  - : Ein String, der die Hash-Funktion enthält, die zur Berechnung des Zertifikats-`fingerprint` verwendet wird, wie zum Beispiel "sha-256".
- [`base64Certificate`](/de/docs/Web/API/RTCCertificateStats/base64Certificate)
  - : Ein String, der die Base-64-Darstellung des DER-kodierten Zertifikats enthält.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen).

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCertificateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCCertificateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCCertificateStats/type)
  - : Ein String mit dem Wert `"certificate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Gegeben eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist, verwendet der unten stehende Code `await`, um auf den Statistikbericht zu warten, und iteriert dann mit `RTCStatsReport.forEach()` darüber.
Er filtert dann die Wörterbücher nur für diejenigen Berichte, die den Typ `certificate` haben, und protokolliert das Ergebnis.

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
