---
title: "WebTransport: WebTransport()-Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
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
  - : Ein String, der die URL des HTTP/3-Servers repräsentiert, mit dem verbunden werden soll.
    Das Schema muss HTTPS sein und die Portnummer muss explizit angegeben werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `allowPooling` {{optional_inline}}
      - : Ein Boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für diesen [`WebTransport`](/de/docs/Web/API/WebTransport) mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false` und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Ein String, der die Präferenz der Anwendung angibt, ob der Algorithmus zur Staukontrolle, der beim Senden von Daten über diese Verbindung verwendet wird, auf Durchsatz oder geringe Latenz optimiert sein soll.
        Dies ist ein Hinweis für den Benutzeragenten.
        Erlaubte Werte sind: `default` (Standard), `throughput` und `low-latency`.
    - `requireUnreliable` {{optional_inline}}
      - : Ein Boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, wenn eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils den Hashwert eines Serverzertifikats zusammen mit dem Namen des Algorithmus definieren, der zur Generierung verwendet wurde.
        Diese Option wird nur für Transporte unterstützt, die dedizierte Verbindungen verwenden (`allowPooling` ist `false`).

        Wenn angegeben, wird der Browser versuchen, das vom Server bereitgestellte Zertifikat anhand der bereitgestellten Zertifikats-Hashes zu authentifizieren, um eine Verbindung herzustellen, anstatt die öffentliche Schlüsselinfrastruktur (PKI) des Webs zu verwenden.
        Wenn ein Hash übereinstimmt, weiß der Browser, dass der Server über ein vertrauenswürdiges Zertifikat verfügt, und stellt wie gewohnt eine Verbindung her.
        Wenn leer, verwendet der Benutzeragent die gleichen PKI-Zertifikatsprüfungsverfahren, die er für einen normalen Abrufvorgang verwenden würde.

        Diese Funktion ermöglicht es Entwicklern, eine Verbindung zu WebTransport-Servern herzustellen, für die das Erhalten eines öffentlich vertrauenswürdigen Zertifikats normalerweise schwierig ist, wie z. B. Hosts, die nicht öffentlich routbar sind, oder temporäre Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Die Webanwendung könnte typischerweise die Hashes von einem vertrauenswürdigen Zwischenhändler abrufen.
        > Beispielsweise könnten Sie einen Cloud-Anbieter verwenden, um VMs bereitzustellen, die Ihre WebTransport-Server betreiben.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann dessen Zertifikat anfordern, Hashes generieren und diese der Anwendung über eine API (die über PKI vermittelt wird) oder eine Cloud-Konsole bereitstellen.
        > Die Webanwendung kann nun direkt eine Verbindung zum VM-gehosteten Server unter Verwendung der gelieferten Hashes herstellen, auch wenn die VM selbst kein langfristiges TLS-Zertifikat hat.

        Das Zertifikat muss ein X.509v3-Zertifikat sein, das eine Gültigkeitsdauer von weniger als 2 Wochen hat, und der aktuelle Zeitpunkt muss innerhalb dieser Gültigkeitsperiode liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss jedoch mindestens ECDSA mit der secp256r1 (NIST P-256) benannten Gruppe umfassen und darf keine RSA-Schlüssel enthalten.
        Ein ECSDA-Schlüssel ist daher ein interoperables Standardformat für öffentliche Schlüssel.
        Ein Benutzeragent kann weitere Anforderungen hinzufügen; diese werden im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) aufgelistet, falls bekannt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `algorithm`

          - : Ein String mit dem Wert: `sha-256` (nicht groß-/kleinschreibungsempfindlich).
            Beachten Sie, dass dieser String den Algorithmus darstellt, der verwendet werden soll, um den Hash zu verifizieren, und dass jeder Hash, der einen unbekannten Algorithmus verwendet, ignoriert wird.
            Zum Zeitpunkt der Erstellung dieses Dokuments ist `SHA-256` der einzige Hash-Algorithmus, der in der Spezifikation aufgeführt ist.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder {{jsxref("TypedArray")}}, der den Hashwert enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben ist, das Transportprotokoll diese Funktion jedoch nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, das Schema nicht HTTPS ist oder die URL ein Fragment enthält.
- `TypeError`
  - : Wird ausgelöst, wenn ein `serverCertificateHashes` für eine nicht-dedizierte Verbindung festgelegt ist (mit anderen Worten, wenn `allowPooling` `true` ist).

## Beispiele

### Verbindung mit Standardeinstellungen

Dieses Beispiel zeigt, wie Sie einen `WebTransport` nur mit einer URL konstruieren, auf die Verbindung warten und den Transport überwachen und melden, wenn er geschlossen wurde.

Zuerst definieren wir eine `async`-Methode, die eine URL nimmt und sie verwendet, um das `WebTransport`-Objekt zu konstruieren.
Es werden keine Konstruktoroptionen angegeben, sodass die Verbindung mit Standardeinstellungen verwendet wird: dedizierte Verbindung, Unterstützung für unzuverlässige Transporte wird nicht benötigt, Standard-Staukontrolle und normale Web-PKI-Authentifizierung mit dem Server.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.

Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist, können Sie mit der Nutzung der Verbindung beginnen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie warten, bis das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Versprechen erfüllt ist.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zu den Standard-Set von [`DOMException`](/de/docs/Web/API/DOMException).

Die `closeTransport()`-Methode unten zeigt, wie das geht.
Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um auf die Erfüllung oder Zurückweisung des `closed`-Versprechens zu warten, und dann zu berichten, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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
  // …

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

### Verbindung mit Server-Zertifikat-Hashes

Das folgende Beispiel zeigt den Code, um einen `WebTransport` zu konstruieren, der die Option `serverCertificateHashes` angibt.
In diesem Fall enthält das Array zwei Hashes, beide codiert mit dem SHA-256-Algorithmus.
Beachten Sie, dass die Option `allowPooling` `false` sein muss (der Standard).

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
