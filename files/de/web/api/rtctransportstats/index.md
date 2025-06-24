---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`**-Wörterbuch des [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über den Transport ([`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)), der von einem bestimmten Kandidatenpaar verwendet wird.

Die _BUNDLE_-Funktion ist eine SDP-Erweiterung, die es ermöglicht, einen einzelnen Transport für das Senden und Empfangen von Medien zu verhandeln, die durch mehrere SDP-Medienbeschreibungen beschrieben werden.
Wenn das Remote-Endpunkt mit dieser Funktion vertraut ist, werden alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und Datenkanäle bei Abschluss der Verhandlung auf einen einzigen Transport gebündelt.
Dies gilt für aktuelle Browser, aber wenn eine Verbindung zu einem älteren Endpunkt hergestellt wird, der nicht BUNDLE-fähig ist, könnten separate Transports für verschiedene Medien verwendet werden.
Die zu verwendende Richtlinie für die Verhandlung wird im [`RTCPeerConnection` Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können durch Iteration über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) abgerufen werden, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCTransportStats/type) `transport` finden.

## Instanz-Eigenschaften

- [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived) {{optional_inline}}
  - : Die Gesamtzahl der Nutzlast-Bytes, die über diesen Transport empfangen wurden (empfangene Bytes, die keine Header, Padding oder ICE-Konnektivitätsprüfungen umfassen).
- [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent) {{optional_inline}}
  - : Die Gesamtzahl der Nutzlast-Bytes, die über diesen Transport gesendet wurden (gesendete Bytes, die keine Header, Padding oder ICE-Konnektivitätsprüfungen umfassen).
- [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher) {{optional_inline}}
  - : Ein String, der den Namen der Verschlüsselungssuite angibt, die für den DTLS-Transport verwendet wird, wie z.B. `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256`.
- [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der die DTLS-Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt.
    Diese ist eine von: `client`, `server`, `unknown` (bevor die DTLS-Verhandlung beginnt).
- [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState)
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des zugrunde liegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) angibt.
    Diese ist eine von: `new`, `connecting`, `connected`, `closed`, `failed`.
- [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der das lokale Benutzername-Fragment angibt, das die ICE-Interaktionssitzung eindeutig identifiziert, die von diesem Transport verwaltet wird.
- [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der die ICE-[`role`](/de/docs/Web/API/RTCIceTransport/role) des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Diese ist eine von: `controlled`, `controlling`, oder `unknown`.
- [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCIceTransport/state) des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Diese ist eine von: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed`, oder `closed`.
- [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId) {{optional_inline}}
  - : Ein String, der die ID des lokalen Zertifikats enthält, das durch diesen Transport verwendet wird.
    Nur für DTLS-Transporte vorhanden, und nachdem DTLS ausgehandelt wurde.
- [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived) {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtzahl der Pakete, die auf diesem Transport empfangen wurden.
- [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent) {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtzahl der Pakete, die über diesen Transport gesendet wurden.
- [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId) {{optional_inline}}
  - : Ein String, der die ID oder das Remote-Zertifikat enthält, das durch diesen Transport verwendet wird.
    Nur für DTLS-Transporte vorhanden, und nachdem DTLS ausgehandelt wurde.
- [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) {{optional_inline}}
  - : Die Anzahl der Male, die das ausgewählte Kandidatenpaar dieses Transports geändert wurde.
    Der Wert ist zunächst null und erhöht sich jedes Mal, wenn ein Kandidatenpaar ausgewählt oder verloren wird.
- [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) {{optional_inline}}
  - : Ein String, der die eindeutige Kennung für das Objekt enthält, das untersucht wurde, um die mit diesem Transport verknüpften [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) zu erzeugen.
- [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher) {{optional_inline}}
  - : Ein String, der den beschreibenden Namen des Schutzprofils angibt, das für den {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}}-Transport verwendet wird.
- [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) {{optional_inline}}
  - : Ein String, der die ausgehandelte TLS-Version enthält.
    Diese ist für DTLS-Transporte vorhanden und existiert nur, nachdem DTLS ausgehandelt wurde.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCTransportStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCTransportStats/type)
  - : Ein String mit dem Wert `"transport"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Transportstatistiken zurückgibt, oder `null`, wenn keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und iteriert dann über den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"transport"` zu erhalten.
Sie gibt dann die Statistiken oder `null` zurück, indem sie die Daten im Bericht verwendet.

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
