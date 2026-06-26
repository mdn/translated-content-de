---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) liefert Informationen über den Transport ([`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrunde liegendes [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)), der von einem bestimmten Kandidatenpaar verwendet wird.

Das _BUNDLE_-Feature ist eine SDP-Erweiterung, die es erlaubt, die Nutzung eines einzigen Transports für das Senden und Empfangen von Medien, die durch mehrere SDP-Medienbeschreibungen dargestellt werden, zu verhandeln.
Wenn der entfernte Endpunkt mit diesem Feature vertraut ist, werden alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und Datenkanäle nach Abschluss der Verhandlung auf einen einzigen Transport gebündelt.
Dies ist in aktuellen Browsern der Fall, aber wenn die Verbindung zu einem älteren Endpunkt hergestellt wird, der das BUNDLE-Feature nicht kennt, könnten unterschiedliche Transports für verschiedene Medien verwendet werden.
Die für die Verhandlung zu verwendende Richtlinie wird im [`RTCPeerConnection`-Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis ein Bericht mit dem [`type`](/de/docs/Web/API/RTCTransportStats/type) von `transport` gefunden wird.

## Instanzattribute

- [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived) {{optional_inline}}
  - : Die Gesamtzahl der Nutzdaten-Bytes, die auf diesem Transport empfangen wurden (empfangene Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent) {{optional_inline}}
  - : Die Gesamtzahl der Nutzdaten-Bytes, die über diesen Transport gesendet wurden (gesendete Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher) {{optional_inline}}
  - : Ein String, der den Namen der für den DTLS-Transport verwendeten Verschlüsselungssuite angibt, wie `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256`.
- [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) {{optional_inline}}
  - : Ein String, der die DTLS-Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt.
    Dies ist eine der folgenden: `client`, `server`, `unknown` (bevor die DTLS-Verhandlung beginnt).
- [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState)
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des zugrunde liegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) angibt.
    Dies ist eine der folgenden: `new`, `connecting`, `connected`, `closed`, `failed`.
- [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment) {{optional_inline}}
  - : Ein String, der das lokale Benutzername-Fragment angibt, das die durch diesen Transport verwaltete ICE-Interaktionssession eindeutig identifiziert.
- [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole) {{optional_inline}}
  - : Ein String, der die ICE-[`role`](/de/docs/Web/API/RTCIceTransport/role) des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Dies ist eine der folgenden: `controlled`, `controlling` oder `unknown`.
- [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) {{optional_inline}}
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCIceTransport/state) des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Dies ist eine der folgenden: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed` oder `closed`.
- [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId) {{optional_inline}}
  - : Ein String, der die ID des von diesem Transport verwendeten lokalen Zertifikats enthält.
    Ist nur für DTLS-Transporte vorhanden und nur, nachdem DTLS verhandelt wurde.
- [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived) {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtzahl der über diesen Transport empfangenen Pakete.
- [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent) {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtzahl der über diesen Transport gesendeten Pakete.
- [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId) {{optional_inline}}
  - : Ein String, der die ID des entfernten von diesem Transport verwendeten Zertifikats enthält.
    Ist nur für DTLS-Transporte vorhanden und nur, nachdem DTLS verhandelt wurde.
- [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) {{optional_inline}}
  - : Die Anzahl der Male, zu denen das ausgewählte Kandidatenpaar dieses Transports geändert wurde.
    Der Wert ist anfangs null und steigt, wann immer ein Kandidatenpaar ausgewählt oder verloren wird.
- [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) {{optional_inline}}
  - : Ein String, der die eindeutige Kennung des Objekts enthält, das untersucht wurde, um die mit diesem Transport verbundene [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) zu erzeugen.
- [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher) {{optional_inline}}
  - : Ein String, der den beschreibenden Namen des Schutzprofils für den {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}}-Transport angibt.
- [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) {{optional_inline}}
  - : Ein String, der die ausgehandelte TLS-Version enthält.
    Ist für DTLS-Transporte vorhanden, und existiert nur, nachdem DTLS verhandelt wurde.

### Allgemeine Instanzattribute

Die folgenden Attribute sind bei allen WebRTC-Statistikobjekten üblich.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCTransportStats/id)
  - : Ein String, der das zu überwachende Objekt, das diese Statistiken erstellt, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCTransportStats/type)
  - : Ein String mit dem Wert `"transport"`, der den Typ der enthaltenen Statistiken angibt.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Transportstatistiken zurückgibt, oder `null`, wenn keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"transport"` zu erhalten.
Sie gibt dann die Statistiken oder `null` mit den im Bericht enthaltenen Daten zurück.

```js
async function numberOpenConnections (peerConnection) {
  const stats = await peerConnection.getStats();
  let transportStats = null;

  stats.forEach((report) => {
    if (report.type === "transport") {
      transportStats = report;
      break;
    }
  });

return transportStats
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
