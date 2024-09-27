---
title: "WebTransport: WebTransport() Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransport()`** Konstruktor erstellt eine neue Instanz des [`WebTransport`](/de/docs/Web/API/WebTransport)-Objekts.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des HTTP/3-Servers repräsentiert, zu dem die Verbindung hergestellt werden soll.
    Das Schema muss HTTPS sein, und die Portnummer muss explizit angegeben werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das folgende Eigenschaften haben kann:

    - `allowPooling` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für diesen [`WebTransport`](/de/docs/Web/API/WebTransport) mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false`, und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Ein String, der die Präferenz der Anwendung angibt, dass der Staukontrollalgorithmus, der beim Versand von Daten über diese Verbindung verwendet wird, entweder für Durchsatz oder geringe Latenz optimiert wird.
        Dies ist ein Hinweis an den Benutzeragenten.
        Die erlaubten Werte sind: `default` (Standard), `throughput` und `low-latency`.
    - `requireUnreliable` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, wenn eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}

      - : Ein Array von Objekten, wobei jedes Objekt den Hash-Wert eines Serverzertifikats zusammen mit dem Namen des Algorithmus definiert, der zur Generierung verwendet wurde.
        Diese Option wird nur für Transporte unterstützt, die dedizierte Verbindungen verwenden (`allowPooling` ist `false`).

        Wenn angegeben, versucht der Browser, das vom Server bereitgestellte Zertifikat anhand der bereitgestellten Zertifikat-Hash(es) zu authentifizieren, anstatt die Web-Public-Key-Infrastruktur (PKI) zu verwenden.
        Wenn ein Hash übereinstimmt, weiß der Browser, dass der Server über ein vertrauenswürdiges Zertifikat verfügt und die Verbindung wird normal hergestellt.
        Wenn leer, verwendet der Benutzeragent die gleichen PKI-Zertifikatsprüfungsverfahren, die für eine normale Fetch-Operation verwendet würden.

        Diese Funktion ermöglicht es Entwicklern, eine Verbindung zu WebTransport-Servern herzustellen, die normalerweise Probleme haben, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten, wie z. B. Hosts, die nicht öffentlich routbar sind, oder temporäre Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Die Webanwendung könnte die Hashes typischerweise von einem vertrauenswürdigen Vermittler abrufen.
        > Zum Beispiel könnten Sie einen Cloud-Anbieter verwenden, um VMs bereitzustellen, die Ihre WebTransport-Server ausführen.
        > Der Anbieter hat vertrauenswürdigen Zugang zum Server und kann dessen Zertifikat anfordern, Hashes generieren und diese der Anwendung über eine API (die über PKI vermittelt wird) oder eine Cloud-Konsole zur Verfügung stellen.
        > So kann die Webanwendung direkt mit dem auf VM gehosteten Server über die bereitgestellten Hashes verbinden, auch wenn die VM selbst nicht über ein langlebiges TLS-Zertifikat verfügt.

        Das Zertifikat muss ein X.509v3-Zertifikat sein, das eine Gültigkeitsdauer von weniger als 2 Wochen hat, und die aktuelle Zeit muss innerhalb dieser Gültigkeitsdauer liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss jedoch mindestens ECDSA mit der secp256r1 (NIST P-256) benannten Gruppe enthalten und keine RSA-Schlüssel enthalten.
        Ein ECSDA-Schlüssel ist daher ein interoperables Standardformat für öffentliche Schlüssel.
        Ein Benutzeragent kann weitere Anforderungen hinzufügen; diese werden im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt, wenn bekannt.

        Jedes Objekt im Array hat folgende Eigenschaften:

        - `algorithm`

          - : Ein String mit dem Wert: `sha-256` (Groß-/Kleinschreibung wird nicht beachtet).
            Beachten Sie, dass dieser String den Algorithmus repräsentiert, der zur Überprüfung des Hash verwendet wird, und dass jeder Hash, der einen unbekannten Algorithmus verwendet, ignoriert wird.
            Zum Zeitpunkt des Schreibens ist `SHA-256` der einzige Hash-Algorithmus, der in der Spezifikation aufgeführt ist.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder {{jsxref("TypedArray")}}, der den Hash-Wert enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben ist, aber das Transportprotokoll diese Funktion nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, das Schema nicht HTTPS ist oder die URL ein Fragment enthält.
- `TypeError`
  - : Wird ausgelöst, wenn ein `serverCertificateHashes` für eine nicht dedizierte Verbindung festgelegt ist (mit anderen Worten, wenn `allowPooling` `true` ist).

## Beispiele

### Verbindung mit Standardeinstellungen herstellen

Dieses Beispiel zeigt, wie Sie eine `WebTransport`-Instanz mit nur einer URL erstellen, darauf warten, dass sie sich verbindet, und dann den Transport überwachen und melden, wenn er geschlossen wurde.

Zuerst definieren wir eine `async`-Methode, die eine URL übernimmt und verwendet, um das `WebTransport`-Objekt zu erstellen.
Es werden keine Konstruktoroptionen spezifiziert, sodass die Verbindung mit Standardeinstellungen erfolgt: dedizierte Verbindung, Unterstützung für nicht zuverlässige Transporte ist nicht erforderlich, standardmäßige Staukontrolle und normale Web-PKI-Authentifizierung mit dem Server.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.

Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Promise erfüllt ist, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) Promise erfüllt wird.
Von `WebTransport`-Operationen zurückgegebene Fehler sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über den Standardset von [`DOMException`](/de/docs/Web/API/DOMException).

Die Methode `closeTransport()` unten zeigt, wie.
Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um das `closed`-Promise zu erfüllen oder abzulehnen, und dann wird berichtet, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die oben genannten asynchronen Funktionen in ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

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

### Verbindung mit Serverzertifikat-Hashes herstellen

Das folgende Beispiel zeigt den Code für die Konstruktion eines `WebTransport`, das die Option `serverCertificateHashes` angibt.
In diesem Fall enthält das Array zwei Hashes, die beide mit dem SHA-256-Algorithmus kodiert sind.
Beachten Sie, dass die `allowPooling`-Option `false` sein muss (der Standardwert).

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
