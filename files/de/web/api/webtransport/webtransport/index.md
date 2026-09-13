---
title: "WebTransport: WebTransport() Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 8413520d9fd826c98db89ff8165408139635d454
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
  - : Ein String, der die URL des HTTP/3-Servers repräsentiert, mit dem eine Verbindung aufgebaut werden soll.
    Das Schema muss HTTPS sein, und die Portnummer muss explizit angegeben werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `allowPooling` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für diesen [`WebTransport`](/de/docs/Web/API/WebTransport) mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false`, und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Ein String, der die Präferenz der Anwendung angibt, dass der verwendete Staukontrollalgorithmus beim Senden von Daten über diese Verbindung entweder für Durchsatz oder geringe Latenz optimiert wird.
        Dies ist ein Hinweis an den Benutzeragenten.
        Die erlaubten Werte sind: `default` (Standard), `throughput` und `low-latency`.
    - `protocols` {{optional_inline}}
      - : Ein Array von Strings, von denen jeder einen anwendungsspezifischen Protokollnamen angibt, in der Reihenfolge der Präferenz.
        Standardmäßig ist der Wert ein leeres Array.

        Der Server kann eines der Protokolle auswählen und zurückgeben.
        In diesem Fall wird der ausgewählte Wert in der [`protocol`](/de/docs/Web/API/WebTransport/protocol)-Eigenschaft verfügbar, sobald das [`ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist.
        Der Server kann auch entscheiden, keines der angebotenen Protokolle auszuwählen, in diesem Fall wird `protocol` einen leeren String (`""`) zurückgeben.
        Der Server kann auch die Verbindung ablehnen, wenn er keines der Protokolle unterstützt, in welchem Fall [`ready`](/de/docs/Web/API/WebTransport/ready) mit einem Fehler abgelehnt wird.

    - `requireUnreliable` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, wenn eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils den Hash-Wert eines Serverzertifikats zusammen mit dem Namen des Algorithmus, mit dem es generiert wurde, definieren.
        Diese Option wird nur für Transporte mit dedizierten Verbindungen unterstützt (`allowPooling` ist `false`).

        Wenn angegeben, wird der Browser versuchen, das vom Server bereitgestellte Zertifikat anhand der bereitgestellten Zertifikat-Hash(es) zu authentifizieren, um eine Verbindung herzustellen, anstatt die öffentliche Schlüsselinfrastruktur des Webs (PKI) zu verwenden.
        Wenn Hashes übereinstimmen, weiß der Browser, dass der Server über ein vertrauenswürdiges Zertifikat verfügt und wird wie gewohnt verbinden.
        Wenn leer, verwendet der Benutzeragent dieselben PKI-Zertifikatsüberprüfungsverfahren, die er auch für einen normalen Fetch-Vorgang verwenden würde.

        Diese Funktion ermöglicht es Entwicklern, sich mit WebTransport-Servern zu verbinden, die normalerweise Schwierigkeiten hätten, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten, wie z. B. Hosts, die nicht öffentlich routbar sind, oder temporäre Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Die Webanwendung könnte typischerweise die Hashes von einem vertrauenswürdigen Vermittler abrufen.
        > Zum Beispiel könnten Sie einen Cloud-Anbieter verwenden, um VMs bereitzustellen, die Ihre WebTransport-Server ausführen.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann sein Zertifikat anfordern, Hashes generieren und diese über eine API (vermittelt über PKI) oder eine Cloud-Konsole an die Anwendung bereitstellen.
        > Die Webanwendung kann nun direkt mit dem auf VM gehosteten Server unter Verwendung der bereitgestellten Hashes verbinden, obwohl die VM selbst kein langfristiges TLS-Zertifikat hat.

        Das Zertifikat muss ein X.509v3-Zertifikat mit einer Gültigkeitsdauer von weniger als 2 Wochen sein, und die aktuelle Zeit muss innerhalb dieses Gültigkeitszeitraums liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss jedoch zumindest ECDSA mit der secp256r1 (NIST P-256) benannten Gruppe enthalten und darf keine RSA-Schlüssel enthalten.
        Ein ECSDA-Schlüssel ist daher ein interoperables Standardformat für öffentliche Schlüssel.
        Ein Benutzeragent kann weitere Anforderungen hinzufügen; diese werden im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt, wenn bekannt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:
        - `algorithm`
          - : Ein String mit dem Wert: `sha-256` (Groß- und Kleinschreibung wird nicht beachtet).
            Beachten Sie, dass dieser String den Algorithmus repräsentiert, der zur Überprüfung des Hashs verwendet wird, und dass jeder Hash, der einen unbekannten Algorithmus verwendet, ignoriert wird.
            Zum Zeitpunkt der Erstellung dieser Dokumentation ist `SHA-256` der einzige im Standard aufgeführte Hash-Algorithmus.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), {{jsxref("TypedArray")}} oder [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView), der den Hash-Wert enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `serverCertificateHashes` angegeben ist, das Transportprotokoll diese Funktion jedoch nicht unterstützt.
- `SyntaxError`
  - : Ausgelöst, wenn die angegebene `url` ungültig ist, das Schema nicht HTTPS ist oder die URL ein Fragment enthält.
    Auch ausgelöst, wenn `protocols` einen doppelten Wert enthält, einen Wert mit Zeichen, die in einem Protokoll-Token nicht erlaubt sind, oder einen Wert, dessen kodierte Länge `0` oder größer als `512` Bytes ist.
- `TypeError`
  - : Ausgelöst, wenn `serverCertificateHashes` für eine nicht-dedizierte Verbindung gesetzt wird (mit anderen Worten, wenn `allowPooling` `true` ist).

## Beispiele

### Verbindung mit Standardoptionen

Dieses Beispiel zeigt, wie Sie ein `WebTransport` nur mit einer URL konstruieren, darauf warten, dass es sich verbindet, und dann den Transport überwachen und melden, wenn er schließt.

Zuerst definieren wir eine `async`-Methode, die eine URL übernimmt und verwendet, um das `WebTransport`-Objekt zu konstruieren.
Es werden keine Konstruktoroptionen angegeben, sodass die Verbindung Standardoptionen verwendet: dedizierte Verbindung, Unterstützung für unzuverlässige Transporte ist nicht erforderlich, standardmäßige Staukontrolle und normale Web PKI-Authentifizierung mit dem Server.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.

Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Versprechen erfüllt wird.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über die üblichen [`DOMException`](/de/docs/Web/API/DOMException)-Sätze hinaus.

Die Methode `closeTransport()` zeigt, wie es geht.
Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um auf die Erfüllung oder Ablehnung des `closed`-Versprechens zu warten und dann zu melden, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

### Verbindung mit Serverzertifikats-Hashes

Das Beispiel unten zeigt den Code, um ein `WebTransport` zu konstruieren, das die Option `serverCertificateHashes` spezifiziert.
In diesem Fall enthält das Array zwei Hashes, beide codiert mit dem SHA-256-Algorithmus.
Beachten Sie, dass die `allowPooling`-Option `false` sein muss (der Standard).

Der `value` jedes Hashs kann ein `ArrayBuffer`, ein `TypedArray` (zum Beispiel ein `Uint8Array`) oder ein `DataView` sein. Das folgende Beispiel stellt jeden SHA-256-Hash-Wert als `Uint8Array` dar; zum Beispiel entspricht der hexadezimale String `5a1559...` den Bytewerten `0x5a`, `0x15`, `0x59` und so weiter.

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

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
