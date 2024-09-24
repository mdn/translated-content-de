---
title: RTCCertificateStats
slug: Web/API/RTCCertificateStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCCertificateStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Informationen über ein von einem {{domxref("RTCDtlsTransport")}} und seinem zugrunde liegenden {{domxref("RTCIceTransport")}} verwendetes Zertifikat zu berichten.

Der Bericht kann erhalten werden, indem Sie den {{domxref("RTCStatsReport")}} durchlaufen, der von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](#type) von `certificate` finden.

## Instanz-Eigenschaften

- {{domxref("RTCCertificateStats.fingerprint", "fingerprint")}}
  - : Ein String, der den Zertifikatsfingerabdruck enthält, der unter Verwendung der in [`fingerprintAlgorithm`](#fingerprintalgorithm) angegebenen Hash-Funktion berechnet wird.
- {{domxref("RTCCertificateStats.fingerprintAlgorithm", "fingerprintAlgorithm")}}
  - : Ein String, der die Hash-Funktion enthält, die zur Berechnung des Zertifikat-[`fingerprint`](#fingerprint) verwendet wird, wie zum Beispiel "sha-256".
- {{domxref("RTCCertificateStats.base64Certificate", "base64Certificate")}}
  - : Ein String, der die Base-64-Darstellung des DER-kodierten Zertifikats enthält.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen).

<!-- RTCStats -->

- {{domxref("RTCCertificateStats.id", "id")}}
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- {{domxref("RTCCertificateStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das anzeigt, zu welchem Zeitpunkt die Probe für dieses Statistikobjekt genommen wurde.
- {{domxref("RTCCertificateStats.type", "type")}}
  - : Ein String mit dem Wert `"certificate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, eine Variable `myPeerConnection`, die eine Instanz von {{domxref("RTCPeerConnection")}} ist, verwendet der folgende Code `await`, um auf den Statistikbericht zu warten, und iteriert ihn dann mit `RTCStatsReport.forEach()`.
Anschließend filtert er die Wörterbücher nur für diejenigen Berichte, die den Typ `certificate` haben, und protokolliert das Ergebnis.

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

- {{domxref("RTCStatsReport")}}
- {{domxref("RTCCertificate")}}
