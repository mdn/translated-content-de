---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: f2175c4c2cf9de232ec9b2e1c395903d53ea24a0
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über den Transport ([`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) und dessen zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)), der von einem bestimmten Kandidatenpaar verwendet wird.

Die _BUNDLE_-Funktion ist eine SDP-Erweiterung, die eine Verhandlung ermöglicht, um einen einzigen Transport für das Senden und Empfangen von Medien, die durch mehrere SDP-Mediabeschreibungen beschrieben werden, zu verwenden. Wenn der entfernte Endpunkt diese Funktion kennt, werden alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und Datenkanäle bei Abschluss der Verhandlung auf einen einzigen Transport gebündelt. Dies gilt für aktuelle Browser, aber wenn eine Verbindung zu einem älteren Endpunkt hergestellt wird, der BUNDLE nicht unterstützt, könnten separate Transporte für unterschiedliche Medien verwendet werden. Die einzusetzende Politik bei der Verhandlung wird im [`RTCPeerConnection` Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `transport` finden.

## Instanzeigenschaften

- `bytesReceived` {{optional_inline}}
  - : Die Gesamtanzahl der Nutzlast-Bytes, die über diesen Transport empfangen wurden (empfangene Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- `bytesSent` {{optional_inline}}
  - : Die Gesamtanzahl der Nutzlast-Bytes, die über diesen Transport gesendet wurden (gesendete Bytes, ohne Header, Padding oder ICE-Konnektivitätsprüfungen).
- `dtlsCipher` {{optional_inline}}
  - : Ein String, der den Namen der Cipher-Suite angibt, die für den DTLS-Transport verwendet wird, wie im "Description"-Spalte der [TLS Cipher Suites](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4) Sektion im _IANA-Cipher-Suite-Register_ definiert. Zum Beispiel `"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"`.
- `dtlsRole` {{optional_inline}} {{experimental_inline}}

  - : Die DTLS-Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dies ist eine von:

    - `client`
    - `server`
    - `unknown` (vor Beginn der DTLS-Verhandlung).

- `dtlsState`

  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des zugrundeliegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) angibt. Dies ist einer von:

    - [`new`](/de/docs/Web/API/RTCDtlsTransport/state#new)
    - [`connecting`](/de/docs/Web/API/RTCDtlsTransport/state#connecting)
    - [`connected`](/de/docs/Web/API/RTCDtlsTransport/state#connected)
    - [`closed`](/de/docs/Web/API/RTCDtlsTransport/state#closed)
    - [`failed`](/de/docs/Web/API/RTCDtlsTransport/state#failed)

- `iceLocalUsernameFragment` {{optional_inline}} {{experimental_inline}}
  - : Ein String, der den lokalen Benutzername-Fragment angibt, der in Nachrichtenvalidierungsprozeduren für diesen Transport verwendet wird. Dies ist derselbe Wert wie der lokale [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) und wird sich ändern, wenn die Verbindung neu verhandelt wird.
- `iceRole` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der die [ICE `role`](/de/docs/Web/API/RTCIceTransport/role) des zugrundeliegenden [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) angibt. Dies ist einer von:

    - [`controlled`](/de/docs/Web/API/RTCIceTransport/role#controlled)
    - [`controlling`](/de/docs/Web/API/RTCIceTransport/role#controlling)
    - [`unknown`](/de/docs/Web/API/RTCIceTransport/role#unknown)

- `iceState` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der den aktuellen [`state`](/de/docs/Web/API/RTCIceTransport/state) des zugrundeliegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt. Dies ist einer von:

    - [`new`](/de/docs/Web/API/RTCIceTransport/state#new)
    - [`checking`](/de/docs/Web/API/RTCIceTransport/state#checking)
    - [`connected`](/de/docs/Web/API/RTCIceTransport/state#connected)
    - [`completed`](/de/docs/Web/API/RTCIceTransport/state#completed)
    - [`disconnected`](/de/docs/Web/API/RTCIceTransport/state#disconnected)
    - [`failed`](/de/docs/Web/API/RTCIceTransport/state#failed)
    - [`closed`](/de/docs/Web/API/RTCIceTransport/state#closed)

- `selectedCandidatePairId` {{optional_inline}}
  - : Ein String, der die eindeutige Kennung für das Objekt enthält, das inspiziert wurde, um die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) zu erstellen, die mit diesem Transport verbunden sind.
- `localCertificateId` {{optional_inline}}
  - : Ein String, der die id des lokalen Zertifikats enthält, das von diesem Transport verwendet wird. Nur bei DTLS-Transporten vorhanden und erst nachdem DTLS verhandelt wurde.
- `packetsSent` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der über diesen Transport gesendeten Pakete.
- `packetsReceived` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der auf diesem Transport empfangenen Pakete.
- `remoteCertificateId` {{optional_inline}}
  - : Ein String, der die id des entfernten Zertifikats enthält, das von diesem Transport verwendet wird. Nur bei DTLS-Transporten vorhanden und erst nachdem DTLS verhandelt wurde.
- `selectedCandidatePairChanges` {{optional_inline}}
  - : Die Anzahl der Male, die das ausgewählte Kandidatenpaar dieses Transports gewechselt hat. Der Wert ist anfänglich null und erhöht sich, wann immer ein Kandidatenpaar ausgewählt oder verloren wurde.
- `srtpCipher` {{optional_inline}}

  - : Ein String, der den beschreibenden Namen des Schutzprofils angibt, das für das [Secure Real-time Transport Protocol (SRTP)](/de/docs/Glossary/RTP) Transportprotokoll verwendet wird, wie im "Profile"-Spalte des [IANA DTLS-SRTP protection profile register](https://www.iana.org/assignments/srtp-protection/srtp-protection.xhtml#srtp-protection-1) und [RFC5764](https://www.rfc-editor.org/rfc/rfc5764.html#section-4.1.2) definiert. Zum Beispiel gibt `"AES_CM_128_HMAC_SHA1_80"` folgendes Profil an, wobei `maximum_lifetime` die maximale Anzahl der Pakete ist, die durch einen einzelnen Satz von Schlüsseln geschützt werden können.

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

  - : Ein String, der die verhandelte TLS-Version enthält. Dies ist bei DTLS-Transporten vorhanden und existiert nur, nachdem DTLS verhandelt wurde.

    Der Wert stammt aus dem DTLS-Handschlag `ServerHello.version` und wird als vier Großbuchstaben-Hexadezimalziffern dargestellt, wobei die Ziffern die zwei Bytes der Version darstellen. Beachten Sie jedoch, dass die Bytes möglicherweise nicht direkt zu Versionsnummern abbilden. Beispielsweise stellt DTLS die Version 1.2 als `'FEFD'` dar, was numerisch `{254, 253}` ist.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCTransportStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das den Zeitpunkt angibt, an dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCTransportStats/type)
  - : Ein String mit dem Wert `"transport"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, um die Transportstatistiken zurückzugeben, oder `null`, wenn keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"transport"` zu erhalten. Anschließend gibt es die Statistiken oder `null` zurück, indem es die Daten im Bericht verwendet.

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
