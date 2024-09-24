---
title: "WebTransport: WebTransport() Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransport()`** Konstruktor erstellt eine neue {{domxref("WebTransport")}} Objektinstanz.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des HTTP/3-Servers repräsentiert, mit dem verbunden werden soll.
    Das Schema muss HTTPS sein, und die Portnummer muss explizit angegeben werden.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `allowPooling` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für dieses {{domxref("WebTransport")}} mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false`, und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Ein String, der die Präferenz der Anwendung angibt, dass der verwendete Staukontrollalgorithmus beim Senden von Daten über diese Verbindung entweder für Durchsatz oder niedrige Latenz optimiert wird.
        Dies ist ein Hinweis für den Benutzeragenten.
        Die erlaubten Werte sind: `default` (Standard), `throughput` und `low-latency`.
    - `requireUnreliable` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, falls eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils den Hashwert eines Serverzertifikats zusammen mit dem Namen des Algorithmus definieren, der zu seiner Erstellung verwendet wurde.
        Diese Option wird nur für Übertragungen unterstützt, die dedizierte Verbindungen verwenden (`allowPooling` ist `false`).

        Wenn angegeben, versucht der Browser, das von dem Server bereitgestellte Zertifikat anhand der bereitgestellten Zertifikats-Hashes zu authentifizieren, um die Verbindung herzustellen, anstatt die Web-Public-Key-Infrastruktur (PKI) zu verwenden.
        Wenn irgendwelche Hashes übereinstimmen, weiß der Browser, dass der Server über ein vertrauenswürdiges Zertifikat verfügt und wird wie gewohnt verbinden.
        Wenn leer, verwendet der Benutzeragent dieselben PKI-Zertifikatsüberprüfungsverfahren, die er bei einem normalen Abrufvorgang verwenden würde.

        Diese Funktion ermöglicht es Entwicklern, eine Verbindung zu WebTransport-Servern herzustellen, die normalerweise Schwierigkeiten hätten, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten, wie Hosts, die nicht öffentlich routbar sind oder temporäre Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Die Webanwendung könnte typischerweise die Hashes von einem vertrauenswürdigen Vermittler abrufen.
        > Zum Beispiel könnten Sie einen Cloud-Anbieter verwenden, um VMs bereitzustellen, auf denen Ihre WebTransport-Server laufen.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann dessen Zertifikat anfordern, Hashes generieren und diese der Anwendung über eine API (die über PKI vermittelt wird) oder eine Cloud-Konsole bereitstellen.
        > Die Webanwendung kann nun direkt eine Verbindung zu dem VM-gehosteten Server herstellen, indem sie die bereitgestellten Hashes verwendet, auch wenn die VM selbst kein langlebiges TLS-Zertifikat hat.

        Das Zertifikat muss ein X.509v3-Zertifikat mit einer Gültigkeitsdauer von weniger als 2 Wochen sein, und die aktuelle Zeit muss innerhalb dieser Gültigkeitsdauer liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss aber mindestens ECDSA mit der secp256r1 (NIST P-256) benannten Gruppe umfassen und darf keine RSA-Schlüssel enthalten.
        Ein ECSDA-Schlüssel ist daher ein interoperables Standardformat des öffentlichen Schlüssels.
        Ein Benutzeragent kann weitere Anforderungen stellen; diese werden im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt, falls bekannt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `algorithm`

          - : Ein String mit dem Wert: `sha-256` (Groß-/Kleinschreibung wird nicht beachtet).
            Beachten Sie, dass dieser String den Algorithmus darstellt, der verwendet wird, um den Hash zu überprüfen, und dass jeder Hash, der einen unbekannten Algorithmus verwendet, ignoriert wird.
            Zum Zeitpunkt der Erstellung dieses Dokuments ist `SHA-256` der einzige Hash-Algorithmus, der in der Spezifikation aufgeführt ist.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder {{jsxref("TypedArray")}}, der den Hashwert enthält.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben ist, aber das Transportprotokoll diese Funktion nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, das Schema nicht HTTPS ist oder die URL ein Fragment enthält.
- `TypeError`
  - : Wird ausgelöst, wenn `serverCertificateHashes` für eine nicht dedizierte Verbindung festgelegt ist (mit anderen Worten, wenn `allowPooling` `true` ist).

## Beispiele

### Verbindung mit Standardoptionen

Dieses Beispiel zeigt, wie Sie ein `WebTransport` nur mit einer URL erstellen, darauf warten, dass es sich verbindet, und dann das Transportmittel überwachen und melden, wann es geschlossen wurde.

Zuerst definieren wir eine `async` Methode, die eine URL nimmt und verwendet, um das `WebTransport` Objekt zu erstellen.
Es werden keine Konstruktoroptionen angegeben, sodass die Verbindung Standardoptionen verwendet: dedizierte Verbindung, Unterstützung für unzuverlässige Übertragungen ist nicht erforderlich, Standard-Staukontrolle und normale Web-PKI-Authentifizierung mit dem Server.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.

Sobald das {{domxref("WebTransport.ready")}} Versprechen erfüllt ist, können Sie die Verbindung verwenden.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das {{domxref("WebTransport.closed")}} Versprechen erfüllt wird.
Von `WebTransport` Operationen zurückgegebene Fehler sind vom Typ {{domxref("WebTransportError")}} und enthalten zusätzliche Daten über den Standard {{domxref("DOMException")}} Satz hinaus.

Die Methode `closeTransport()` unten zeigt, wie das geht.
Innerhalb eines `try...catch` Blocks wird `await` verwendet, um auf Erfüllung oder Ablehnung des `closed` Versprechens zu warten, und dann wird berichtet, ob die Verbindung beabsichtigt oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die oben genannten asynchronen Funktionen in einer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

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

### Verbindung mit Serverzertifikat-Hashes

Das Beispiel unten zeigt den Code für die Erstellung eines `WebTransport`, das die Option `serverCertificateHashes` angibt.
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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
