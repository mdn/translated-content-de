---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet Informationen über den Transport ([`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)), der von einem bestimmten Kandidatenpaar verwendet wird.

Das _BUNDLE_-Feature ist eine SDP-Erweiterung, die es ermöglicht, einen einzelnen Transport für das Senden und Empfangen von Medien zu nutzen, die durch mehrere SDP-Medienbeschreibungen beschrieben werden. Wenn der Remote-Endpunkt mit diesem Feature vertraut ist, werden alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und Datenkanäle beim Abschluss der Verhandlung auf einen einzigen Transport gebündelt. Dies gilt für aktuelle Browser, aber wenn die Verbindung zu einem älteren Endpunkt hergestellt wird, der das BUNDLE-Feature nicht kennt, könnten separate Transporte für unterschiedliche Medien verwendet werden. Die zu verwendende Richtlinie für die Verhandlung wird im [`RTCPeerConnection`-Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können abgerufen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis ein Bericht mit dem [`type`](/de/docs/Web/API/RTCTransportStats/type) `transport` gefunden wird.

## Instanz-Eigenschaften

- `bytesReceived` {{optional_inline}}
  - : Die Gesamtzahl der Nutzlast-Bytes, die über diesen Transport empfangen wurden (empfangene Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- `bytesSent` {{optional_inline}}
  - : Die Gesamtzahl der Nutzlast-Bytes, die über diesen Transport gesendet wurden (gesendete Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- `dtlsCipher` {{optional_inline}}
  - : Ein String, der den Namen der für den DTLS-Transport verwendeten Cipher-Suite angibt, wie in der Spalte "Description" in den [TLS-Cipher-Suites](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4) im _IANA cipher suite registry_ definiert. Zum Beispiel `"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"`.
- `dtlsRole` {{optional_inline}} {{experimental_inline}}

  - : Die DTLS-Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
    Dies ist eine der folgenden:

    - `client`
    - `server`
    - `unknown` (bevor die DTLS-Verhandlung beginnt).

- `dtlsState`

  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des zugrunde liegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) angibt.
    Dies ist einer der folgenden:

    - [`new`](/de/docs/Web/API/RTCDtlsTransport/state#new)
    - [`connecting`](/de/docs/Web/API/RTCDtlsTransport/state#connecting)
    - [`connected`](/de/docs/Web/API/RTCDtlsTransport/state#connected)
    - [`closed`](/de/docs/Web/API/RTCDtlsTransport/state#closed)
    - [`failed`](/de/docs/Web/API/RTCDtlsTransport/state#failed)

- `iceLocalUsernameFragment` {{optional_inline}} {{experimental_inline}}
  - : Ein String, der das lokale Benutzernamen-Fragment angibt, das in der Nachrichtenvalidierungsprozedur für diesen Transport verwendet wird. Dies ist derselbe Wert wie das lokale [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) und ändert sich, wenn die Verbindung neu ausgehandelt wird.
- `iceRole` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der die [ICE `role`](/de/docs/Web/API/RTCIceTransport/role) des zugrunde liegenden [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) angibt.
    Dies ist einer der folgenden:

    - [`controlled`](/de/docs/Web/API/RTCIceTransport/role#controlled)
    - [`controlling`](/de/docs/Web/API/RTCIceTransport/role#controlling)
    - [`unknown`](/de/docs/Web/API/RTCIceTransport/role#unknown)

- `iceState` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCIceTransport/state) des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.
    Dies ist einer der folgenden:

    - [`new`](/de/docs/Web/API/RTCIceTransport/state#new)
    - [`checking`](/de/docs/Web/API/RTCIceTransport/state#checking)
    - [`connected`](/de/docs/Web/API/RTCIceTransport/state#connected)
    - [`completed`](/de/docs/Web/API/RTCIceTransport/state#completed)
    - [`disconnected`](/de/docs/Web/API/RTCIceTransport/state#disconnected)
    - [`failed`](/de/docs/Web/API/RTCIceTransport/state#failed)
    - [`closed`](/de/docs/Web/API/RTCIceTransport/state#closed)

- `selectedCandidatePairId` {{optional_inline}}
  - : Ein String, der die eindeutige Kennung für das Objekt enthält, das zur Erstellung der [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) verwendet wurde, die mit diesem Transport verbunden sind.
- `localCertificateId` {{optional_inline}}
  - : Ein String, der die ID des lokalen Zertifikats enthält, das von diesem Transport verwendet wird. Nur für DTLS-Transporte vorhanden und nachdem DTLS ausgehandelt wurde.
- `packetsSent` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der über diesen Transport gesendeten Pakete.
- `packetsReceived` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der über diesen Transport empfangenen Pakete.
- `remoteCertificateId` {{optional_inline}}
  - : Ein String, der die ID oder das entfernte Zertifikat enthält, das von diesem Transport verwendet wird. Nur für DTLS-Transporte vorhanden und nachdem DTLS ausgehandelt wurde.
- `selectedCandidatePairChanges` {{optional_inline}}
  - : Die Anzahl der Male, die das ausgewählte Kandidatenpaar dieses Transports geändert wurde. Der Wert ist zunächst null und erhöht sich, wenn ein Kandidatenpaar ausgewählt oder verloren wird.
- `srtpCipher` {{optional_inline}}

  - : Ein String, der den beschreibenden Namen des Schutzprofils angibt, das für den {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}}-Transport verwendet wird, wie in der Spalte "Profile" des [IANA DTLS-SRTP Schutzprofilregisters](https://www.iana.org/assignments/srtp-protection/srtp-protection.xhtml#srtp-protection-1) und [RFC5764](https://www.rfc-editor.org/rfc/rfc5764.html#section-4.1.2) definiert.

    Zum Beispiel spezifiziert `"AES_CM_128_HMAC_SHA1_80"` das folgende Profil, wobei `maximum_lifetime` die maximale Anzahl von Paketen ist, die durch einen einzigen Satz von Schlüsseln geschützt werden können.

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

  - : Ein String, der die ausgehandelte TLS-Version enthält. Diese ist für DTLS-Transporte vorhanden und existiert nur, nachdem DTLS ausgehandelt wurde.

    Der Wert stammt vom DTLS-Handshake `ServerHello.version` und wird als vier großbuchstabige hexadezimale Ziffern dargestellt, wobei die Ziffern die zwei Bytes der Version darstellen. Beachten Sie jedoch, dass die Bytes möglicherweise nicht direkt mit den Versionsnummern übereinstimmen. Zum Beispiel stellt DTLS Version 1.2 als `'FEFD'` dar, was numerisch `{254, 253}` ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCTransportStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCTransportStats/type)
  - : Ein String mit dem Wert `"transport"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, um die Transportstatistiken zurückzugeben oder `null`, wenn keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"transport"` zu erhalten. Sie gibt dann die Statistiken oder `null` unter Verwendung der Daten im Bericht zurück.

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
