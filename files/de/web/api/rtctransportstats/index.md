---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: 6397f5a304fc4f2a470d73dba9937ea1aabc1229
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über den Transport ([`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)), der von einem bestimmten Kandidatenpaar genutzt wird.

Die _BUNDLE_-Funktion ist eine SDP-Erweiterung, die es ermöglicht, einen einzigen Transport für das Senden und Empfangen von Medien zu verhandeln, die durch mehrere SDP-Mediabeschreibungen beschrieben werden. Wenn der Remote-Endpunkt über diese Funktion informiert ist, werden alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und Datenkanäle zu einem einzigen Transport zusammengeführt, sobald die Verhandlung abgeschlossen ist. Dies trifft auf aktuelle Browser zu, aber wenn eine Verbindung zu einem älteren Endpunkt hergestellt wird, der nicht BUNDLE-fähig ist, könnten separate Transports für verschiedene Medien genutzt werden. Die bei der Verhandlung zu verwendende Richtlinie wird im [`RTCPeerConnection` Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCTransportStats/type) `transport` finden.

## Instanz-Eigenschaften

- [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived) {{optional_inline}}
  - : Die Gesamtanzahl der Nutzdaten-Bytes, die über diesen Transport empfangen wurden (empfangene Bytes, ohne Header, Padding oder ICE-Konnektivitätschecks).
- [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent) {{optional_inline}}
  - : Die Gesamtanzahl der Nutzdaten-Bytes, die über diesen Transport gesendet wurden (gesendete Bytes, ohne Header, Padding oder ICE-Konnektivitätschecks).
- [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher) {{optional_inline}}
  - : Ein String, der den Namen der Cipher Suite angibt, die für den DTLS-Transport verwendet wird, wie `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256`.
- [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) {{optional_inline}}
  - : Ein String, der die DTLS-Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt.
    Dies ist eine der folgenden: `client`, `server`, `unknown` (bevor die DTLS-Verhandlung beginnt).
- [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState)
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des zugrundeliegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) angibt.
    Dies ist eine der folgenden: `new`, `connecting`, `connected`, `closed`, `failed`.
- [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment) {{optional_inline}}
  - : Ein String, der das lokale Benutzernamenfragment angibt, das die ICE-Interaktionssitzung eindeutig identifiziert, die von diesem Transport verwaltet wird.
- [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole) {{optional_inline}}
  - : Ein String, der die ICE-[`role`](/de/docs/Web/API/RTCIceTransport/role) des zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Dies ist eine der folgenden: `controlled`, `controlling`, oder `unknown`.
- [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) {{optional_inline}}
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCIceTransport/state) des zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Dies ist eine der folgenden: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed`, oder `closed`.
- [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId) {{optional_inline}}
  - : Ein String, der die ID des lokalen Zertifikats enthält, das von diesem Transport verwendet wird.
    Nur für DTLS-Transporte vorhanden und nach erfolgter DTLS-Verhandlung.
- [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived) {{optional_inline}}
  - : Die Gesamtanzahl der über diesen Transport empfangenen Pakete.
- [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent) {{optional_inline}}
  - : Die Gesamtanzahl der über diesen Transport gesendeten Pakete.
- [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId) {{optional_inline}}
  - : Ein String, der die ID oder das remote Zertifikat enthält, das von diesem Transport verwendet wird.
    Nur für DTLS-Transporte vorhanden und nach erfolgter DTLS-Verhandlung.
- [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) {{optional_inline}}
  - : Die Anzahl der Male, die das ausgewählte Kandidatenpaar dieses Transports geändert wurde.
    Der Wert ist anfangs null und erhöht sich, wann immer ein Kandidatenpaar ausgewählt oder verloren wurde.
- [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) {{optional_inline}}
  - : Ein String, der die eindeutige Kennung für das Objekt enthält, das inspiziert wurde, um die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) zu erstellen, die mit diesem Transport verknüpft sind.
- [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher) {{optional_inline}}
  - : Ein String, der den beschreibenden Namen des Schutzprofils angibt, das für den {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}}-Transport verwendet wird.
- [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) {{optional_inline}}
  - : Ein String, der die vereinbarte TLS-Version enthält.
    Dies ist für DTLS-Transporte vorhanden und existiert nur, nachdem DTLS verhandelt wurde.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCTransportStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diese Statistikdaten zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCTransportStats/type)
  - : Ein String mit dem Wert `"transport"`, der den Statistike-Typ angibt, den das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Transportstatistiken zurückgibt oder `null`, falls keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"transport"` zu erhalten. Es gibt dann die Statistiken oder `null` anhand der im Bericht enthaltenen Daten zurück.

```js
async function getTransportStats(peerConnection) {
  const stats = await peerConnection.getStats();

  for (const report of stats.values()) {
    if (report.type === "transport") {
      return report;
    }
  }

  return null;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
