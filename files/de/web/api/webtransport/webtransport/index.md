---
title: "WebTransport: WebTransport() Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransport()`**-Konstruktor erstellt eine neue Instanz des [`WebTransport`](/de/docs/Web/API/WebTransport)-Objekts.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des HTTP/3-Servers darstellt, mit dem eine Verbindung hergestellt werden soll.
    Das Schema muss HTTPS sein und die Portnummer muss explizit angegeben werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `allowPooling` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für diese [`WebTransport`](/de/docs/Web/API/WebTransport) mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false` und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Ein String, der die Präferenz der Anwendung angibt, dass der bei der Datenübertragung über diese Verbindung verwendete Staukontrollalgorithmus entweder für Durchsatz oder geringe Latenz optimiert sein soll.
        Dies ist ein Hinweis an den User-Agent.
        Die zulässigen Werte sind: `default` (Standard), `throughput` und `low-latency`.
    - `requireUnreliable` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, wenn eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils den Hash-Wert eines Serverzertifikats zusammen mit dem Namen des Algorithmus definieren, der zur Generierung verwendet wurde.
        Diese Option wird nur für Verbindungen mit dedizierten Verbindungen (`allowPooling` ist `false`) unterstützt.

        Wenn angegeben, versucht der Browser, das vom Server bereitgestellte Zertifikat gegen die angegebenen Zertifikathashes zu authentifizieren, anstatt die Web-Public-Key-Infrastruktur (PKI) zu verwenden.
        Wenn irgendwelche Hashes übereinstimmen, weiß der Browser, dass der Server im Besitz eines vertrauenswürdigen Zertifikats ist und wird normal verbinden.
        Wenn leer, verwendet der User-Agent die gleichen PKI-Zertifikatsüberprüfungsverfahren, die er auch für eine normale Abrufoperation verwenden würde.

        Diese Funktion ermöglicht es Entwicklern, sich mit WebTransport-Servern zu verbinden, die normalerweise Schwierigkeiten haben, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten, wie Hosts, die nicht öffentlich routbar sind, oder temporäre Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Typischerweise holt die Webanwendung die Hashes von einem vertrauenswürdigen Vermittler.
        > Beispielsweise könnten Sie einen Cloud-Anbieter verwenden, um VMs bereitzustellen, die Ihre WebTransport-Server ausführen.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann dessen Zertifikat anfordern, Hashes generieren und diese der Anwendung über eine API (die über PKI vermittelt wird) oder eine Cloud-Konsole bereitstellen.
        > Die Webanwendung kann sich nun direkt mit dem auf VM gehosteten Server unter Verwendung der bereitgestellten Hashes verbinden, auch wenn die VM selbst kein dauerhaftes TLS-Zertifikat hat.

        Das Zertifikat muss ein X.509v3-Zertifikat mit einer Gültigkeitsdauer von weniger als 2 Wochen sein, und die aktuelle Zeit muss innerhalb dieses Gültigkeitszeitraums liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss aber mindestens ECDSA mit der secp256r1 (NIST P-256) bezeichneten Gruppe beinhalten und darf keine RSA-Schlüssel enthalten.
        Ein ECDSA-Schlüssel ist daher ein interoperables Standardformat für öffentliche Schlüssel.
        Ein User-Agent kann weitere Anforderungen hinzufügen; diese werden im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt, wenn bekannt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `algorithm`

          - : Ein String mit dem Wert: `sha-256` (nicht auf Groß-/Kleinschreibung geachtet).
            Beachten Sie, dass dieser String den Algorithmus darstellt, der verwendet wird, um den Hash zu verifizieren, und dass jeder Hash mit einem unbekannten Algorithmus ignoriert wird.
            Zum Zeitpunkt der Erstellung dieses Dokuments ist `SHA-256` der einzige in der Spezifikation aufgeführte Hash-Algorithmus.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder {{jsxref("TypedArray")}}, der den Hash-Wert enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben wird, aber das Transportprotokoll diese Funktion nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, wenn das Schema nicht HTTPS ist oder wenn die URL einen Fragment enthält.
- `TypeError`
  - : Wird ausgelöst, wenn ein `serverCertificateHashes` für eine nicht dedizierte Verbindung eingestellt ist (mit anderen Worten, wenn `allowPooling` `true` ist).

## Beispiele

### Verbindung mit Standardeinstellungen

Dieses Beispiel zeigt, wie Sie einen `WebTransport` nur mit einer URL konstruieren, warten, bis er verbunden ist, und dann den Transport überwachen und berichten können, wann er geschlossen wurde.

Zuerst definieren wir eine `async`-Methode, die eine URL übernimmt und sie verwendet, um das `WebTransport`-Objekt zu konstruieren.
Es werden keine Konstruktoroptionen angegeben, sodass die Verbindung die Standardoptionen verwendet: dedizierte Verbindung, Unterstützung für unzuverlässige Transporte ist nicht erforderlich, Standard-Staukontrolle und normale Web-PKI-Authentifizierung mit dem Server.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.

Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt wird, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie warten, bis das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Versprechen erfüllt wird.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zu dem standardmäßigen [`DOMException`](/de/docs/Web/API/DOMException)-Satz.

Die `closeTransport()`-Methode unten zeigt, wie.
Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um auf das Erfüllen oder Ablehnen des `closed`-Versprechens zu warten, und dann wird berichtet, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die oben asynchronen Funktionen in ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

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

### Verbindung mit Serverzertifikathashes

Das folgende Beispiel zeigt den Code, um einen `WebTransport` zu konstruieren, der die Option `serverCertificateHashes` angibt.
In diesem Fall enthält das Array zwei Hashes, die beide mit dem SHA-256-Algorithmus kodiert sind.
Beachten Sie, dass die `allowPooling`-Option `false` sein muss (Standard).

```js
const transport = new WebTransport(url, {
  serverCertificateHashes: [
    {
      algorithm: "sha-256",
      value: "5a155927eba7996228455e4721e6fe5f739ae15db6915d765e5db302b4f8a274",
    },
    {
      algorithm: "sha-256",
      value: "7d7094e7a8d3097feff3b5ee84fa5cab58e4de78f38bcfdee5ea8b51f4bfa8fd",
    },
  ],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
