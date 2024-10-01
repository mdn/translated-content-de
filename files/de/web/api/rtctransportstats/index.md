---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: f2175c4c2cf9de232ec9b2e1c395903d53ea24a0
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über den Transport ([`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und das zugrunde liegende [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)), der von einem bestimmten Kandidatenpaar verwendet wird.

Das _BUNDLE_-Feature ist eine SDP-Erweiterung, die es ermöglicht, einen einzigen Transport zur Übertragung und zum Empfang von Medien, die in mehreren SDP-Medienbeschreibungen beschrieben sind, zu verwenden.
Wenn der entfernte Endpunkt über dieses Feature Bescheid weiß, werden alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und Datenkanäle nach Abschluss der Verhandlung auf einen einzigen Transport gebündelt.
Dies gilt für aktuelle Browser, aber wenn eine Verbindung zu einem älteren Endpunkt hergestellt wird, der nicht BUNDLE-kompatibel ist, könnten unterschiedliche Transporte für verschiedene Medien verwendet werden.
Die Politik, die bei der Verhandlung verwendet werden soll, wird im [`RTCPeerConnection`-Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können erhalten werden, indem das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `transport` finden.

## Instanzeigenschaften

- `bytesReceived` {{optional_inline}}
  - : Die Gesamtanzahl der Nutzdaten-Bytes, die auf diesem Transport empfangen wurden (empfangene Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- `bytesSent` {{optional_inline}}
  - : Die Gesamtanzahl der Nutzdaten-Bytes, die auf diesem Transport gesendet wurden (gesendete Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- `dtlsCipher` {{optional_inline}}
  - : Ein String, der den Namen der Cipher-Suite angibt, die für den DTLS-Transport verwendet wird, wie in der "Description"-Spalte der [TLS Cipher Suites](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4) im _IANA Cipher Suite Registry_ definiert.
    Beispiel: `"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"`.
- `dtlsRole` {{optional_inline}} {{experimental_inline}}

  - : Die DTLS-Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
    Diese ist eine von:

    - `client`
    - `server`
    - `unknown` (bevor die DTLS-Verhandlung beginnt).

- `dtlsState`

  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des zugrunde liegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) angibt.
    Diese ist eine von:

    - [`new`](/de/docs/Web/API/RTCDtlsTransport/state#new)
    - [`connecting`](/de/docs/Web/API/RTCDtlsTransport/state#connecting)
    - [`connected`](/de/docs/Web/API/RTCDtlsTransport/state#connected)
    - [`closed`](/de/docs/Web/API/RTCDtlsTransport/state#closed)
    - [`failed`](/de/docs/Web/API/RTCDtlsTransport/state#failed)

- `iceLocalUsernameFragment` {{optional_inline}} {{experimental_inline}}
  - : Ein String, der das lokale Benutzernamen-Fragment angibt, das bei der Nachrichtenvalidierung für diesen Transport verwendet wird.
    Dies ist derselbe Wert wie der lokale [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) und ändert sich, wenn die Verbindung neu verhandelt wird.
- `iceRole` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der die [ICE `role`](/de/docs/Web/API/RTCIceTransport/role) des zugrunde liegenden [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) angibt.
    Diese ist eine von:

    - [`controlled`](/de/docs/Web/API/RTCIceTransport/role#controlled)
    - [`controlling`](/de/docs/Web/API/RTCIceTransport/role#controlling)
    - [`unknown`](/de/docs/Web/API/RTCIceTransport/role#unknown)

- `iceState` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCIceTransport/state) des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Diese ist eine von:

    - [`new`](/de/docs/Web/API/RTCIceTransport/state#new)
    - [`checking`](/de/docs/Web/API/RTCIceTransport/state#checking)
    - [`connected`](/de/docs/Web/API/RTCIceTransport/state#connected)
    - [`completed`](/de/docs/Web/API/RTCIceTransport/state#completed)
    - [`disconnected`](/de/docs/Web/API/RTCIceTransport/state#disconnected)
    - [`failed`](/de/docs/Web/API/RTCIceTransport/state#failed)
    - [`closed`](/de/docs/Web/API/RTCIceTransport/state#closed)

- `selectedCandidatePairId` {{optional_inline}}
  - : Ein String, der die eindeutige Kennung des Objekts enthält, das zur Erstellung der [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) zugewiesen wurde, die mit diesem Transport verbunden sind.
- `localCertificateId` {{optional_inline}}
  - : Ein String, der die ID des lokalen Zertifikats enthält, das von diesem Transport verwendet wird.
    Nur vorhanden für DTLS-Transporte und nachdem DTLS ausgehandelt wurde.
- `packetsSent` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der über diesen Transport gesendeten Pakete.
- `packetsReceived` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der über diesen Transport empfangenen Pakete.
- `remoteCertificateId` {{optional_inline}}
  - : Ein String, der die ID oder das entfernte Zertifikat enthält, das von diesem Transport verwendet wird.
    Nur vorhanden für DTLS-Transporte und nachdem DTLS ausgehandelt wurde.
- `selectedCandidatePairChanges` {{optional_inline}}
  - : Die Anzahl der Male, die sich das ausgewählte Kandidatenpaar dieses Transports geändert hat.
    Der Wert ist anfangs null und erhöht sich, wenn ein Kandidatenpaar ausgewählt oder verloren wird.
- `srtpCipher` {{optional_inline}}

  - : Ein String, der den beschreibenden Namen des Schutzprofils angibt, das für das {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}} verwendet wird, wie in der "Profile"-Spalte des [IANA DTLS-SRTP-Schutzprofil-Registers](https://www.iana.org/assignments/srtp-protection/srtp-protection.xhtml#srtp-protection-1) und [RFC5764](https://www.rfc-editor.org/rfc/rfc5764.html#section-4.1.2) definiert.

    Zum Beispiel: `"AES_CM_128_HMAC_SHA1_80"` spezifiziert das folgende Profil, bei dem `maximum_lifetime` die maximale Anzahl von Paketen ist, die durch einen einzigen Schlüsselsatz geschützt werden können.

    ```plain
    SRTP_AES128_CM_HMAC_SHA1_80
     cipher: AES_128_CM
     cipher_key_length: 128
     cipher_salt_length: 112
     maximum_lifetime: 2^31
     auth_function: HMAC-SHA1
     auth_key_length: 160
     auth_tag_length: 80
    ```

- `tlsVersion` {{optional_inline}}

  - : Ein String, der die ausgehandelte TLS-Version enthält.
    Dieser ist vorhanden für DTLS-Transporte und existiert nur, nachdem DTLS verhandelt wurde.

    Der Wert stammt vom DTLS-Handshake `ServerHello.version` und wird als vier Großbuchstaben-Hexadezimalstellen dargestellt, wobei die Stellen die beiden Bytes der Version darstellen.
    Es sei jedoch darauf hingewiesen, dass die Bytes möglicherweise nicht direkt den Versionsnummern entsprechen.
    Zum Beispiel stellt DTLS die Version 1.2 als `'FEFD'` dar, was numerisch `{254, 253}` ist.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCTransportStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt aufgenommen wurde.
- [`type`](/de/docs/Web/API/RTCTransportStats/type)
  - : Ein String mit dem Wert `"transport"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Transportstatistiken zurückgibt, oder `null`, wenn keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"transport"` zu erhalten.
Anschließend gibt sie die Statistiken oder `null` unter Verwendung der Daten im Bericht zurück.

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
