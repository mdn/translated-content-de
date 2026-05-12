---
title: "WebTransport: WebTransport() Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 41b5ef37f56bdab1f90c2fd37122b1f06d59aba2
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransport()`** Konstruktor erstellt eine neue Instanz des [`WebTransport`](/de/docs/Web/API/WebTransport) Objekts.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des HTTP/3-Servers repräsentiert, mit dem eine Verbindung hergestellt werden soll.
    Das Schema muss HTTPS sein, und die Portnummer muss explizit angegeben werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `allowPooling` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für diesen [`WebTransport`](/de/docs/Web/API/WebTransport) mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false`, und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Ein String, der die Präferenz der Anwendung angibt, dass der für das Senden von Daten über diese Verbindung verwendete Stausteuerungsalgorithmus entweder für Durchsatz oder niedrige Latenz optimiert wird.
        Dies ist ein Hinweis an den Benutzeragenten.
        Die zulässigen Werte sind: `default` (Standard), `throughput` und `low-latency`.
    - `requireUnreliable` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, wenn eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils den Hash-Wert eines Serverzertifikats zusammen mit dem Namen des Algorithmus, der zu seiner Erstellung verwendet wurde, definieren.
        Diese Option wird nur für Transporte mit dedizierten Verbindungen unterstützt (`allowPooling` ist `false`).

        Wenn angegeben, versucht der Browser, das vom Server bereitgestellte Zertifikat anhand des bereitgestellten Zertifikathashes zu authentifizieren, um eine Verbindung herzustellen, anstatt die öffentliche Schlüsselinfrastruktur (PKI) des Webs zu verwenden.
        Wenn irgendetwas Hashes übereinstimmen, weiß der Browser, dass der Server ein vertrauenswürdiges Zertifikat besitzt und wird wie gewohnt eine Verbindung herstellen.
        Wenn leer, verwendet der Benutzeragent die gleichen PKI-Zertifikatsüberprüfungsverfahren, die für einen normalen Abrufvorgang verwendet würden.

        Dieses Feature ermöglicht es Entwicklern, eine Verbindung zu WebTransport-Servern herzustellen, die normalerweise Schwierigkeiten hätten, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten, wie zum Beispiel Hosts, die nicht öffentlich routbar sind, oder ephemere Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Die Webanwendung könnte die Hashes typischerweise von einem vertrauenswürdigen Vermittler abrufen.
        > Zum Beispiel könnten Sie einen Cloud-Anbieter nutzen, um VMs bereitzustellen, die Ihre WebTransport-Server betreiben.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann sein Zertifikat anfordern, Hashwerte generieren und diese über eine API (vermittelt über PKI) oder eine Cloud-Konsole an die Anwendung bereitstellen.
        > Die Webanwendung kann nun direkt eine Verbindung zum VM-gehosteten Server mit den bereitgestellten Hashes herstellen, auch wenn die VM selbst kein langfristiges TLS-Zertifikat hat.

        Das Zertifikat muss ein X.509v3-Zertifikat mit einem Gültigkeitszeitraum von weniger als 2 Wochen sein und die aktuelle Zeit muss innerhalb dieses Gültigkeitszeitraums liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss jedoch mindestens ECDSA mit der secp256r1 (NIST P-256) benannten Gruppe einschließen und darf keine RSA-Schlüssel enthalten.
        Ein ECSDA-Schlüssel ist daher ein interoperables Standardformat für öffentliche Schlüssel.
        Ein Benutzeragent könnte weitere Anforderungen hinzufügen; diese werden im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt, wenn bekannt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:
        - `algorithm`
          - : Ein String mit dem Wert: `sha-256` (Groß-/Kleinschreibung wird nicht beachtet).
            Beachten Sie, dass dieser String den zu verwendenden Algorithmus zur Verifizierung des Hashs darstellt und dass jeder Hash mit einem unbekannten Algorithmus ignoriert wird.
            Zum Zeitpunkt des Schreibens ist `SHA-256` der einzige im Standard aufgeführte Hash-Algorithmus.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), {{jsxref("TypedArray")}} oder [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView), der den Hashwert enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben wird, das Transportprotokoll diese Funktion jedoch nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, das Schema nicht HTTPS ist oder die URL ein Fragment enthält.
- `TypeError`
  - : Wird ausgelöst, wenn ein `serverCertificateHashes` für eine nicht dedizierte Verbindung festgelegt wird (mit anderen Worten, wenn `allowPooling` `true` ist).

## Beispiele

### Verbindung mit Standardeinstellungen herstellen

Dieses Beispiel zeigt, wie Sie ein `WebTransport` nur mit einer URL konstruieren, auf die Verbindung warten und dann den Transport überwachen und berichten, wenn er geschlossen wird.

Zuerst definieren wir eine `async` Methode, die eine URL übernimmt und diese zur Erstellung des `WebTransport`-Objekts verwendet.
Es werden keine Konstruktoroptionen angegeben, daher verwendet die Verbindung die Standardeinstellungen: dedizierte Verbindung, Unterstützung für unzuverlässige Transporte ist nicht erforderlich, Standard-Stausteuerung und normale Web-PKI-Authentifizierung mit dem Server.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.

Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Versprechen erfüllt ist, können Sie die Verbindung verwenden.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) Versprechen erfüllt wird.
Von `WebTransport` Operationen zurückgegebene Fehler sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über die Standardmenge an [`DOMException`](/de/docs/Web/API/DOMException) hinaus.

Die Methode `closeTransport()` zeigt, wie dies erfolgt.
Innerhalb eines `try...catch` Blocks verwendet sie `await`, um auf das Erfüllen oder Zurückweisen des Versprechens `closed` zu warten und dann zu berichten, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

```js
async function closeTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch (error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
  }
}
```

Wir könnten die obigen asynchronen Funktionen in ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

```js
// Use the transport
async function useTransport(url) {
  const transport = await initTransport(url);

  // Use the transport object to send and receive data
  // …

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

### Verbindung mit Serverzertifikathashes herstellen

Das folgende Beispiel zeigt den Code, um ein `WebTransport` zu konstruieren, das die Option `serverCertificateHashes` angibt.
In diesem Fall enthält das Array zwei Hashes, beide kodiert mit dem SHA-256-Algorithmus.
Beachten Sie, dass die Option `allowPooling` `false` sein muss (der Standardwert).

Der `value` jedes Hashes kann ein `ArrayBuffer`, ein `TypedArray` (zum Beispiel ein `Uint8Array`) oder ein `DataView` sein. Das Beispiel unten stellt jeden SHA-256-Hashwert als `Uint8Array` dar; zum Beispiel entspricht der hexadezimale String `5a1559...` den Bytewerten `0x5a`, `0x15`, `0x59` usw.

```js
const transport = new WebTransport(url, {
  serverCertificateHashes: [
    {
      // 5a155927eba7996228455e4721e6fe5f739ae15db6915d765e5db302b4f8a274
      algorithm: "sha-256",
      value: new Uint8Array([
        0x5a, 0x15, 0x59, 0x27, 0xeb, 0xa7, 0x99, 0x62, 0x28, 0x45, 0x5e, 0x47,
        0x21, 0xe6, 0xfe, 0x5f, 0x73, 0x9a, 0xe1, 0x5d, 0xb6, 0x91, 0x5d, 0x76,
        0x5e, 0x5d, 0xb3, 0x02, 0xb4, 0xf8, 0xa2, 0x74,
      ]),
    },
    {
      // 7d7094e7a8d3097feff3b5ee84fa5cab58e4de78f38bcfdee5ea8b51f4bfa8fd
      algorithm: "sha-256",
      value: new Uint8Array([
        0x7d, 0x70, 0x94, 0xe7, 0xa8, 0xd3, 0x09, 0x7f, 0xef, 0xf3, 0xb5, 0xee,
        0x84, 0xfa, 0x5c, 0xab, 0x58, 0xe4, 0xde, 0x78, 0xf3, 0x8b, 0xcf, 0xde,
        0xe5, 0xea, 0x8b, 0x51, 0xf4, 0xbf, 0xa8, 0xfd,
      ]),
    },
  ],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
