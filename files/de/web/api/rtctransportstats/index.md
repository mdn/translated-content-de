---
title: RTCTransportStats
slug: Web/API/RTCTransportStats
l10n:
  sourceCommit: f2175c4c2cf9de232ec9b2e1c395903d53ea24a0
---

{{APIRef("WebRTC")}}

Das **`RTCTransportStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über den Transport ({{domxref("RTCDtlsTransport")}} und dessen zugrundeliegenden {{domxref("RTCIceTransport")}}), der von einem bestimmten Kandidatenpaar genutzt wird.

Die _BUNDLE_-Funktion ist eine SDP-Erweiterung, die es ermöglicht, einen einzelnen Transport für das Senden und Empfangen von Medien zu verwenden, die durch mehrere SDP-Media-Beschreibungen beschrieben werden.
Wenn der entfernte Endpunkt über diese Funktion informiert ist, werden alle {{domxref("MediaStreamTrack")}} und Datenkanäle am Ende der Verhandlung auf einen einzigen Transport gebündelt.
Dies gilt für aktuelle Browser, aber wenn Sie sich mit einem älteren Endpunkt verbinden, der nicht BUNDLE-fähig ist, könnten separate Transports für verschiedene Medien verwendet werden.
Die zu verwendende Richtlinie bei der Verhandlung wird im [`RTCPeerConnection`-Konstruktor](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) konfiguriert.

Diese Statistiken können erhalten werden, indem Sie den {{domxref("RTCStatsReport")}}, der von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, durchlaufen, bis Sie einen Bericht mit dem [`type`](#type) von `transport` finden.

## Instanz-Eigenschaften

- `bytesReceived` {{optional_inline}}
  - : Die Gesamtanzahl der Nutzlastbytes, die über diesen Transport empfangen wurden (empfangene Bytes, ohne Header, Padding oder ICE-Verbindungsprüfungen).
- `bytesSent` {{optional_inline}}
  - : Die Gesamtanzahl der Nutzlastbytes, die über diesen Transport gesendet wurden (gesendete Bytes, ohne Header, Padding oder ICE-Verbindungsprüfungen).
- `dtlsCipher` {{optional_inline}}
  - : Ein String, der den Namen der Cipher-Suite angibt, die für den DTLS-Transport verwendet wird, wie in der "Description"-Spalte der [TLS-Cipher Suites](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4) im _IANA cipher suite registry_ definiert.
    Zum Beispiel `"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"`.
- `dtlsRole` {{optional_inline}} {{experimental_inline}}

  - : Die DTLS-Rolle der zugeordneten {{domxref("RTCPeerConnection")}}.
    Dies ist eine von:

    - `client`
    - `server`
    - `unknown` (vor Beginn der DTLS-Verhandlung).

- `dtlsState`

  - : Ein String, der den aktuellen {{domxref("RTCDtlsTransport.state", "state")}} des zugrundeliegenden {{domxref("RTCDtlsTransport")}} angibt.
    Dies ist eine von:

    - [`new`](/de/docs/Web/API/RTCDtlsTransport/state#new)
    - [`connecting`](/de/docs/Web/API/RTCDtlsTransport/state#connecting)
    - [`connected`](/de/docs/Web/API/RTCDtlsTransport/state#connected)
    - [`closed`](/de/docs/Web/API/RTCDtlsTransport/state#closed)
    - [`failed`](/de/docs/Web/API/RTCDtlsTransport/state#failed)

- `iceLocalUsernameFragment` {{optional_inline}} {{experimental_inline}}
  - : Ein String, der das lokale Benutzername-Fragment angibt, das in Validierungsverfahren für Nachrichten für diesen Transport verwendet wird.
    Dies ist derselbe Wert wie das lokale {{domxref("RTCIceCandidate.usernameFragment")}} und wird sich ändern, wenn die Verbindung neu verhandelt wird.
- `iceRole` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der die [ICE-`role`](/de/docs/Web/API/RTCIceTransport/role) des zugrundeliegenden {{domxref("RTCDtlsTransport.iceTransport")}} angibt.
    Dies ist eine von:

    - [`controlled`](/de/docs/Web/API/RTCIceTransport/role#controlled)
    - [`controlling`](/de/docs/Web/API/RTCIceTransport/role#controlling)
    - [`unknown`](/de/docs/Web/API/RTCIceTransport/role#unknown)

- `iceState` {{optional_inline}} {{experimental_inline}}

  - : Ein String, der den aktuellen {{domxref("RTCIceTransport.state", "state")}} des zugrundeliegenden {{domxref("RTCIceTransport")}} angibt.
    Dies ist eine von:

    - [`new`](/de/docs/Web/API/RTCIceTransport/state#new)
    - [`checking`](/de/docs/Web/API/RTCIceTransport/state#checking)
    - [`connected`](/de/docs/Web/API/RTCIceTransport/state#connected)
    - [`completed`](/de/docs/Web/API/RTCIceTransport/state#completed)
    - [`disconnected`](/de/docs/Web/API/RTCIceTransport/state#disconnected)
    - [`failed`](/de/docs/Web/API/RTCIceTransport/state#failed)
    - [`closed`](/de/docs/Web/API/RTCIceTransport/state#closed)

- `selectedCandidatePairId` {{optional_inline}}
  - : Ein String, der die eindeutige Kennung für das Objekt enthält, das inspiziert wurde, um die {{domxref("RTCIceCandidatePairStats")}} zu erstellen, die mit diesem Transport verbunden sind.
- `localCertificateId` {{optional_inline}}
  - : Ein String, der die ID des lokalen Zertifikats enthält, das von diesem Transport verwendet wird.
    Nur bei DTLS-Transports vorhanden und nachdem DTLS verhandelt wurde.
- `packetsSent` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der über diesen Transport gesendeten Pakete.
- `packetsReceived` {{optional_inline}} {{experimental_inline}}
  - : Die Gesamtanzahl der über diesen Transport empfangenen Pakete.
- `remoteCertificateId` {{optional_inline}}
  - : Ein String, der die ID oder das Remote-Zertifikat enthält, das von diesem Transport verwendet wird.
    Nur bei DTLS-Transports vorhanden und nachdem DTLS verhandelt wurde.
- `selectedCandidatePairChanges` {{optional_inline}}
  - : Die Anzahl der Male, die sich das ausgewählte Kandidatenpaar dieses Transports geändert hat.
    Der Wert ist anfangs null und erhöht sich, wann immer ein Kandidatenpaar ausgewählt oder verloren wird.
- `srtpCipher` {{optional_inline}}

  - : Ein String, der den beschreibenden Namen des Schutzprofils angibt, das für den [Secure Real-time Transport Protocol (SRTP)](/de/docs/Glossary/RTP)-Transport verwendet wird, wie in der "Profile"-Spalte des [IANA DTLS-SRTP Schutzprofilregisters](https://www.iana.org/assignments/srtp-protection/srtp-protection.xhtml#srtp-protection-1) und [RFC5764](https://www.rfc-editor.org/rfc/rfc5764.html#section-4.1.2) definiert.

    Zum Beispiel `"AES_CM_128_HMAC_SHA1_80"` spezifiziert folgendes Profil, wobei `maximum_lifetime` die maximale Anzahl von Paketen ist, die mit einem einzigen Satz von Schlüsseln geschützt werden können.

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
    Dies ist bei DTLS-Transports vorhanden und existiert nur, nachdem DTLS verhandelt wurde.

    Der Wert stammt aus dem DTLS-Handshake `ServerHello.version` und wird als vierstellige Großbuchstaben-Hexadezimalzahl dargestellt, wobei die Ziffern die beiden Bytes der Version darstellen.
    Beachten Sie jedoch, dass die Bytes möglicherweise nicht direkt mit Versionsnummern übereinstimmen.
    Zum Beispiel stellt DTLS die Version 1.2 als `'FEFD'` dar, was numerisch `{254, 253}` ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- {{domxref("RTCTransportStats.id", "id")}}
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- {{domxref("RTCTransportStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt entnommen wurde.
- {{domxref("RTCTransportStats.type", "type")}}
  - : Ein String mit dem Wert `"transport"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, um die Transportstatistiken zurückzugeben oder `null`, wenn keine Statistiken bereitgestellt werden.

Die Funktion wartet auf das Ergebnis eines Aufrufs von {{domxref("RTCPeerConnection.getStats()")}} und durchläuft dann den zurückgegebenen {{domxref("RTCStatsReport")}}, um nur die Statistiken des Typs `"transport"` zu erhalten.
Anschließend gibt sie die Statistiken oder `null` mit den im Bericht enthaltenen Daten zurück.

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
