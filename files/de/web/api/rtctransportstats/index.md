---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet Informationen über den Transport ([`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)), der von einem bestimmten Kandidatenpaar verwendet wird.

Die _BUNDLE_-Funktion ist eine SDP-Erweiterung, die es ermöglicht, die Nutzung eines einzigen Transports für das Senden und Empfangen von Medien, die durch mehrere SDP-Medienbeschreibungen beschrieben werden, zu verhandeln.
Wenn der entfernte Endpunkt von dieser Funktion Kenntnis hat, werden alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und Datenkanäle beim Abschluss der Verhandlung auf einen einzelnen Transport gebündelt.
Dies ist bei aktuellen Browsern der Fall, aber wenn die Verbindung zu einem älteren Endpunkt hergestellt wird, der nicht BUNDLE-kompatibel ist, könnten separate Transporte für verschiedene Medien verwendet werden.
Die zu verwendende Politik in der Verhandlung wird im [`RTCPeerConnection`-Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können erlangt werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchiteriert wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis ein Bericht mit dem [`type`](/de/docs/Web/API/RTCTransportStats/type) von `transport` gefunden wird.

## Instanzattribute

- [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived) {{optional_inline}}
  - : Die Gesamtzahl der auf diesem Transport empfangenen Nutzlastbytes (empfangene Bytes, ohne Kopfzeilen, Füllung oder ICE-Konnektivitätsprüfungen).
- [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent) {{optional_inline}}
  - : Die Gesamtzahl der über diesen Transport gesendeten Nutzlastbytes (gesendete Bytes, ohne Kopfzeilen, Füllung oder ICE-Konnektivitätsprüfungen).
- [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher) {{optional_inline}}
  - : Ein String, der den Namen der für den DTLS-Transport verwendeten Chiffre-Suite angibt, wie zum Beispiel `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256`.
- [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) {{optional_inline}}
  - : Ein String, der die DTLS-Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt.
    Dies ist eine der folgenden: `client`, `server`, `unknown` (bevor die DTLS-Verhandlung beginnt).
- [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState)
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des zugrundeliegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) angibt.
    Dies ist eine der folgenden: `new`, `connecting`, `connected`, `closed`, `failed`.
- [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment) {{optional_inline}}
  - : Ein String, der das lokale Benutzernamen-Fragment angibt, das die von diesem Transport verwaltete ICE-Interaktions-Sitzung eindeutig identifiziert.
- [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole) {{optional_inline}}
  - : Ein String, der die ICE-[`role`](/de/docs/Web/API/RTCIceTransport/role) des zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Dies ist eine der folgenden: `controlled`, `controlling`, oder `unknown`.
- [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) {{optional_inline}}
  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCIceTransport/state) des zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Dies ist eine der folgenden: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed`, oder `closed`.
- [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId) {{optional_inline}}
  - : Ein String, der die ID des lokalen Zertifikats enthält, das von diesem Transport verwendet wird.
    Nur für DTLS-Transporte vorhanden und erst nachdem DTLS verhandelt wurde.
- [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived) {{optional_inline}}
  - : Die Gesamtzahl der auf diesem Transport empfangenen Pakete.
- [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent) {{optional_inline}}
  - : Die Gesamtzahl der über diesen Transport gesendeten Pakete.
- [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId) {{optional_inline}}
  - : Ein String, der die ID oder das entfernte Zertifikat enthält, das von diesem Transport verwendet wird.
    Nur für DTLS-Transporte vorhanden und erst nachdem DTLS verhandelt wurde.
- [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) {{optional_inline}}
  - : Die Anzahl, wie oft sich das ausgewählte Kandidatenpaar dieses Transports geändert hat.
    Der Wert ist anfangs null und erhöht sich, wann immer ein Kandidatenpaar ausgewählt oder verloren wird.
- [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) {{optional_inline}}
  - : Ein String, der den eindeutigen Bezeichner für das Objekt enthält, das inspiziert wurde, um die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) zu erzeugen, die mit diesem Transport assoziiert sind.
- [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher) {{optional_inline}}
  - : Ein String, der den beschreibenden Namen des Schutzprofils angibt, das für den {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}}-Transport verwendet wird.
- [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) {{optional_inline}}
  - : Ein String, der die verhandelte TLS-Version enthält.
    Dies ist für DTLS-Transporte vorhanden und existiert nur, nachdem DTLS verhandelt wurde.

### Gemeinsame Instanzattribute

Die folgenden Attribute sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCTransportStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCTransportStats/type)
  - : Ein String mit dem Wert `"transport"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, um die Transportstatistiken zurückzugeben, oder `null`, wenn keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"transport"` zu erhalten.
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
