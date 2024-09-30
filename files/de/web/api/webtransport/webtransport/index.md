---
title: "WebTransport: WebTransport() Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransport()`** Konstruktor erzeugt eine neue Instanz des [`WebTransport`](/de/docs/Web/API/WebTransport)-Objekts.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des HTTP/3-Servers, zu dem verbunden werden soll, darstellt.
    Das Schema muss HTTPS sein, und die Portnummer muss explizit angegeben werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das möglicherweise die folgenden Eigenschaften hat:

    - `allowPooling` {{optional_inline}}
      - : Ein boolean Wert.
        Wenn `true`, kann die Netzwerkverbindung für diesen [`WebTransport`](/de/docs/Web/API/WebTransport) mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false`, und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Ein String, der die Präferenz der Anwendung angibt, dass der Algorithmus zur Staukontrolle, der beim Senden von Daten über diese Verbindung verwendet wird, entweder für Durchsatz oder niedrige Latenz optimiert sein soll.
        Dies ist ein Hinweis für den Benutzeragenten.
        Die erlaubten Werte sind: `default` (Standard), `throughput` und `low-latency`.
    - `requireUnreliable` {{optional_inline}}
      - : Ein boolean Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, falls eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils den Hashwert eines Serverzertifikats zusammen mit dem Namen des Algorithmus definieren, der verwendet wurde, um ihn zu erzeugen.
        Diese Option wird nur für Transporte mit dedizierten Verbindungen unterstützt (`allowPooling` ist `false`).

        Wenn angegeben, versucht der Browser, das vom Server bereitgestellte Zertifikat anhand der bereitgestellten Zertifikats-Hashes zu authentifizieren, um zu verbinden, anstatt die öffentliche Web-PKI zu verwenden.
        Wenn einige Hashes übereinstimmen, weiß der Browser, dass der Server im Besitz eines vertrauenswürdigen Zertifikats ist und wird normal verbinden.
        Wenn sie leer sind, verwendet der Benutzeragent die gleichen PKI-Zertifikatsverifizierungsverfahren, die er für eine normale Abrufoperation verwenden würde.

        Diese Funktion ermöglicht es Entwicklern, mit WebTransport-Servern zu verbinden, die normalerweise Schwierigkeiten hätten, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten, wie z.B. Hosts, die nicht öffentlich routbar sind, oder flüchtige Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Die Webanwendung könnte typischerweise die Hashes von einem vertrauenswürdigen Vermittler abrufen.
        > Zum Beispiel könnten Sie einen Cloud-Anbieter verwenden, um VMs bereitzustellen, die Ihre WebTransport-Server ausführen.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann dessen Zertifikat anfordern, Hashes erzeugen und diese der Anwendung über eine API (die über PKI vermittelt wird) oder eine Cloud-Konsole bereitstellen.
        > Die Webanwendung kann nun direkt eine Verbindung zu dem auf VM gehosteten Server mit den bereitgestellten Hashes herstellen, auch wenn die VM selbst kein langlebiges TLS-Zertifikat hat.

        Das Zertifikat muss ein X.509v3-Zertifikat sein, das eine Gültigkeitsdauer von weniger als 2 Wochen hat, und die aktuelle Zeit muss innerhalb dieses Gültigkeitszeitraums liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss aber mindestens ECDSA mit der secp256r1 (NIST P-256) benannten Gruppe einschließen und darf keine RSA-Schlüssel enthalten.
        Ein ECSDA-Schlüssel ist daher ein interoperables Standardformat des öffentlichen Schlüssels.
        Ein Benutzeragent kann weitere Anforderungen hinzufügen; diese werden im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt, falls bekannt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `algorithm`

          - : Ein String mit dem Wert: `sha-256` (nicht groß-/kleinschreibungsempfindlich).
            Beachten Sie, dass dieser String den Algorithmus darstellt, der zur Überprüfung des Hashes verwendet wird, und dass jeder Hash, der einen unbekannten Algorithmus verwendet, ignoriert wird.
            Zum Zeitpunkt der Abfassung dieses Dokuments ist `SHA-256` der einzige in der Spezifikation aufgeführte Hash-Algorithmus.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder {{jsxref("TypedArray")}}, der den Hashwert enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben ist, das Transportprotokoll diese Funktion jedoch nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, wenn das Schema nicht HTTPS ist, oder wenn die URL ein Fragment enthält.
- `TypeError`
  - : Wird ausgelöst, wenn ein `serverCertificateHashes` für eine nicht-dedizierte Verbindung gesetzt ist (mit anderen Worten, wenn `allowPooling` `true` ist).

## Beispiele

### Verbindung mit Standardoptionen

Dieses Beispiel zeigt, wie Sie möglicherweise eine `WebTransport` mit nur einer URL konstruieren, warten, bis sie sich verbindet, und dann den Transport überwachen und berichten, sobald er geschlossen wurde.

Zunächst definieren wir eine `async`-Methode, die eine URL nimmt und sie verwendet, um das `WebTransport`-Objekt zu konstruieren.
Es werden keine Konstruktoroptionen angegeben, so dass die Verbindung die Standardoptionen verwendet: dedizierte Verbindung, Unterstützung für unzuverlässige Transporte ist nicht erforderlich, Standard-Staukontrolle und normale Web-PKI-Authentifizierung mit dem Server.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.

Sobald das Versprechen [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie beginnen, die Verbindung zu nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie auf das Versprechen [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) warten, bis es erfüllt ist.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten neben der Standardmenge an [`DOMException`](/de/docs/Web/API/DOMException).

Die Methode `closeTransport()` zeigt unten, wie das geht.
Innerhalb eines `try...catch`-Blocks verwendet sie `await`, um auf das Erfüllen oder Ablehnen des geschlossenen Versprechens zu warten und dann zu berichten, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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
  // ...

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

### Verbindung mit Serverzertifikats-Hashes

Das folgende Beispiel zeigt den Code, um ein `WebTransport` zu konstruieren, das die Option `serverCertificateHashes` angibt.
In diesem Fall enthält das Array zwei Hashes, die beide mit dem SHA-256-Algorithmus codiert sind.
Beachten Sie, dass die Option `allowPooling` `false` (der Standard) sein muss.

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
