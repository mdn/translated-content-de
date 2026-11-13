---
title: "WebTransport: WebTransport()-Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 98b1752bbde3987c1c445b038aa4a463dccff6b8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransport()`**-Konstruktor erstellt eine neue Instanz eines [`WebTransport`](/de/docs/Web/API/WebTransport)-Objekts.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameter

- `url`
  - : Eine Zeichenfolge mit der URL des HTTP/3-Servers, zu dem eine Verbindung hergestellt werden soll.
    Das Schema muss HTTPS sein, und die Portnummer muss ausdrücklich angegeben werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `allowPooling` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für diesen [`WebTransport`](/de/docs/Web/API/WebTransport) mit anderen HTTP/3-Sitzungen gemeinsam genutzt werden.
        Standardmäßig ist der Wert `false`, und die Verbindung kann nicht gemeinsam genutzt werden.
    - `anticipatedConcurrentIncomingBidirectionalStreams` {{optional_inline}} {{experimental_inline}}
      - : Eine Ganzzahl zwischen `0` und `65535` oder `null`, die angibt, wie viele gleichzeitig geöffnete eingehende bidirektionale Streams die Anwendung vom Server erwartet.

        Dies ist ein Hinweis, den der Browser nutzen kann, um sein Limit für vom Server geöffnete Streams vorab zu erhöhen.
        Standardmäßig ist der Wert `null`, und es wird kein Hinweis gegeben.
        Der Wert ist anschließend über die Eigenschaft [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams) verfügbar.

    - `anticipatedConcurrentIncomingUnidirectionalStreams` {{optional_inline}} {{experimental_inline}}
      - : Eine Ganzzahl zwischen `0` und `65535` oder `null`, die angibt, wie viele gleichzeitig geöffnete eingehende unidirektionale Streams die Anwendung vom Server erwartet.

        Dies ist ein Hinweis, den der Browser nutzen kann, um sein Limit für vom Server geöffnete Streams vorab zu erhöhen.
        Standardmäßig ist der Wert `null`, und es wird kein Hinweis gegeben.
        Der Wert ist anschließend über die Eigenschaft [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams) verfügbar.

    - `congestionControl` {{optional_inline}}
      - : Eine Zeichenfolge, die angibt, ob die Anwendung bevorzugt, dass der beim Senden von Daten über diese Verbindung verwendete Algorithmus zur Überlastkontrolle auf Durchsatz oder geringe Latenz abgestimmt ist.
        Dies ist ein Hinweis für den User Agent.
        Zulässige Werte sind `default` (Standardwert), `throughput` und `low-latency`.
    - `datagramsReadableType` {{optional_inline}}
      - : Eine Zeichenfolge, die den Typ des [`ReadableStream`](/de/docs/Web/API/ReadableStream) festlegt, den der neue Transport für eingehende Datagramme verwendet.
        Auf diesen Stream greifen Sie über `transport.datagrams.readable` zu (siehe [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) und [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)).
        Der einzige zulässige Wert ist `bytes`. Damit wird ein [lesbarer Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) erstellt.
        Dieser Stream kann mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen werden, der jedes Datagramm in einen von Ihnen bereitgestellten Puffer einliest.
        Wird diese Option weggelassen, erstellt der Transport einen lesbaren Standard-Stream, bei dem jeder Chunk ein neues {{jsxref("Uint8Array")}} mit einem Datagramm ist.

        Wenn Sie Daten in einen eigenen Puffer einlesen, können Sie denselben Speicher für jedes Datagramm wiederverwenden, statt dass der Browser für jedes Datagramm neuen Speicher zuweist.
        Dies ist besonders nützlich, wenn eine Anwendung Datagramme mit hoher Frequenz empfängt, beispielsweise für häufige Aktualisierungen des Spielzustands oder von Sensordaten.

        Sofern Sie nicht die Option [`min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min) verwenden, liefert jeder Lesevorgang ein Datagramm zurück.
        Ist der bereitgestellte Puffer kleiner als das Datagramm, geht der Stream in einen Fehlerzustand über, und der ausstehende Aufruf von [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) wird mit einem {{jsxref("RangeError")}} zurückgewiesen.
        Um dies zu vermeiden, verwenden Sie einen Puffer mit mindestens 64 KiB (65536 Byte). Dies ist die empfohlene maximale Größe der {{Glossary("QUIC", "QUIC")}}-Frames, die Datagramme transportieren.
        Verwenden Sie ein {{jsxref("Uint8Array")}} als View, die an `read()` übergeben wird: Eine {{jsxref("DataView")}} oder ein Typed Array mit Mehrbyte-Elementen versetzt den Stream in einen Fehlerzustand, und `read()` wird mit einem {{jsxref("TypeError")}} zurückgewiesen.

        > [!NOTE]
        > Ein Byte-Stream erhält die Grenzen zwischen Datagrammen nicht vollständig: Leere Datagramme werden nicht übermittelt, und beim Lesen mit der Option [`min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min) können mehrere Datagramme in einem Lesevorgang zusammengefasst werden.

    - `headers` {{optional_inline}}
      - : Ein Objektliteral, ein Array oder ein [`Headers`](/de/docs/Web/API/Headers)-Objekt, mit dem dem [erweiterten `CONNECT`](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect)-Request, der die Sitzung einrichtet, benutzerdefinierte HTTP-Request-Header hinzugefügt werden können.
        Dadurch können Informationen wie Authentifizierungstoken beim Aufbau der Sitzung in Request-Headern an den Server gesendet werden, statt im Query-String der URL.
        Standardmäßig ist der Wert `{}`, und es werden keine benutzerdefinierten Header hinzugefügt.

        Der Wert hat dieselbe Form wie der Parameter `init` des Konstruktors [`Headers()`](/de/docs/Web/API/Headers/Headers): ein Objektliteral mit Zeichenfolgen als Werten, ein Array aus `[name, value]`-Arrays mit jeweils zwei Elementen oder ein vorhandenes `Headers`-Objekt.
        {{Glossary("Forbidden_request_header", "Verbotene Request-Header")}} wie {{httpheader("Cookie")}} werden stillschweigend ignoriert.
        Der Header `WT-Available-Protocols` kann nicht über diese Option gesetzt werden. Stattdessen wird er anhand der Werte in `protocols` gesetzt.

        Die Header, die der Server in seiner Antwort sendet, können nach dem Aufbau der Sitzung über [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) gelesen werden. Ausgenommen ist `WT-Protocol`.

    - `protocols` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, die jeweils den Namen eines anwendungsspezifischen Protokolls angeben und nach Präferenz geordnet sind.
        Standardmäßig ist der Wert ein leeres Array.

        Der Server kann eines der Protokolle auswählen und zurückgeben.
        In diesem Fall ist der ausgewählte Wert über die Eigenschaft [`protocol`](/de/docs/Web/API/WebTransport/protocol) verfügbar, sobald das Promise [`ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist.
        Der Server kann auch keines der angebotenen Protokolle auswählen. In diesem Fall gibt `protocol` eine leere Zeichenfolge (`""`) zurück.
        Unterstützt der Server keines der Protokolle, kann er die Verbindung auch ablehnen. In diesem Fall wird [`ready`](/de/docs/Web/API/WebTransport/ready) mit einem Fehler zurückgewiesen.

    - `requireUnreliable` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, falls eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils den Hashwert eines Serverzertifikats und den Namen des Algorithmus angeben, mit dem er erzeugt wurde.
        Diese Option wird nur für Transporte mit dedizierten Verbindungen unterstützt (`allowPooling` ist `false`).

        Wenn die Option angegeben ist, versucht der Browser, das vom Server bereitgestellte Zertifikat anhand der angegebenen Zertifikat-Hashes zu authentifizieren, um eine Verbindung herzustellen, statt die Web-Public-Key-Infrastruktur (PKI) zu verwenden.
        Stimmt einer der Hashwerte überein, weiß der Browser, dass der Server über ein vertrauenswürdiges Zertifikat verfügt, und stellt die Verbindung wie gewohnt her.
        Ist das Array leer, verwendet der User Agent dieselben PKI-Verfahren zur Zertifikatsprüfung wie bei einem normalen Fetch-Vorgang.

        Mit dieser Funktion können Entwickler Verbindungen zu WebTransport-Servern herstellen, für die es normalerweise schwierig wäre, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten. Dazu gehören etwa Hosts, die nicht öffentlich erreichbar sind, oder kurzlebige Hosts wie virtuelle Maschinen.

        > [!NOTE]
        > Die Webanwendung kann die Hashwerte üblicherweise von einer vertrauenswürdigen Vermittlungsstelle abrufen.
        > Beispielsweise können Sie einen Cloud-Anbieter nutzen, um VMs bereitzustellen, auf denen Ihre WebTransport-Server ausgeführt werden.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann dessen Zertifikat anfordern, Hashwerte erzeugen und sie der Anwendung über eine API (abgesichert durch PKI) oder eine Cloud-Konsole bereitstellen.
        > Die Webanwendung kann sich nun mithilfe der bereitgestellten Hashwerte direkt mit dem auf der VM betriebenen Server verbinden, obwohl die VM selbst kein langfristig gültiges TLS-Zertifikat besitzt.

        Das Zertifikat muss ein X.509v3-Zertifikat mit einer Gültigkeitsdauer von weniger als zwei Wochen sein, und der aktuelle Zeitpunkt muss innerhalb dieser Gültigkeitsdauer liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss aber mindestens ECDSA mit der benannten Gruppe secp256r1 (NIST P-256) unterstützen und darf keine RSA-Schlüssel enthalten.
        Ein ECDSA-Schlüssel ist daher ein interoperables Standardformat für öffentliche Schlüssel.
        Ein User Agent kann weitere Anforderungen stellen. Soweit bekannt, werden diese im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:
        - `algorithm`
          - : Eine Zeichenfolge mit dem Wert `sha-256` (ohne Berücksichtigung der Groß- und Kleinschreibung).
            Beachten Sie, dass diese Zeichenfolge den Algorithmus zur Überprüfung des Hashwerts bezeichnet und dass Hashwerte mit einem unbekannten Algorithmus ignoriert werden.
            Zum Zeitpunkt der Erstellung dieses Artikels ist `SHA-256` der einzige in der Spezifikation aufgeführte Hash-Algorithmus.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), eine {{jsxref("TypedArray")}} oder eine [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView), die den Hashwert enthält.

### Rückgabewert

Ein neues [`WebTransport`](/de/docs/Web/API/WebTransport)-Objekt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben ist, das Transportprotokoll diese Funktion aber nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, das Schema nicht HTTPS ist oder die URL ein Fragment enthält.
    Wird auch ausgelöst, wenn `protocols` einen doppelten Wert enthält, einen Wert mit Zeichen, die in einem Protokoll-Token nicht zulässig sind, oder einen Wert, dessen kodierte Länge `0` oder mindestens `512` Byte beträgt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `serverCertificateHashes` für eine nicht dedizierte Verbindung gesetzt ist (also wenn `allowPooling` den Wert `true` hat).
    Wird auch ausgelöst, wenn `anticipatedConcurrentIncomingBidirectionalStreams` oder `anticipatedConcurrentIncomingUnidirectionalStreams` außerhalb des Bereichs von `0` bis `65535` liegt.
    Wird ebenfalls ausgelöst, wenn `headers` einen Eintrag enthält, der kein Array mit zwei Elementen ist, einen ungültigen Header-Namen oder -Wert enthält oder einen Header mit dem Namen `WT-Available-Protocols` enthält (ohne Berücksichtigung der Groß- und Kleinschreibung).

## Beispiele

### Verbindung mit Standardoptionen herstellen

Dieses Beispiel zeigt, wie Sie einen `WebTransport` allein mit einer URL erstellen, warten, bis die Verbindung hergestellt ist, und anschließend den Transport überwachen und melden, wenn er geschlossen wird.

Zunächst definieren wir eine `async`-Methode, die eine URL entgegennimmt und damit das `WebTransport`-Objekt erstellt.
Es werden keine Konstruktoroptionen angegeben. Daher verwendet die Verbindung die Standardoptionen: eine dedizierte Verbindung, keine Anforderung zur Unterstützung unzuverlässiger Transporte, die Standard-Überlastkontrolle und die normale Web-PKI-Authentifizierung gegenüber dem Server.
Beachten Sie, dass das Schema HTTPS sein und die Portnummer ausdrücklich angegeben werden muss.

Sobald das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie die Verbindung verwenden.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie warten, bis das Promise [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt ist.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, haben den Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zu denen einer standardmäßigen [`DOMException`](/de/docs/Web/API/DOMException).

Die folgende Methode `closeTransport()` zeigt, wie das funktioniert.
Innerhalb eines `try...catch`-Blocks wartet sie mit `await` darauf, dass das Promise `closed` erfüllt oder zurückgewiesen wird. Anschließend meldet sie, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Die obigen asynchronen Funktionen könnten wir wie unten gezeigt in einer eigenen asynchronen Funktion aufrufen.

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

### Verbindung mit Serverzertifikat-Hashes herstellen

Das folgende Beispiel zeigt Code zum Erstellen eines `WebTransport`, bei dem die Option `serverCertificateHashes` angegeben wird.
In diesem Fall enthält das Array zwei Hashwerte, die beide mit dem SHA-256-Algorithmus erzeugt wurden.
Beachten Sie, dass die Option `allowPooling` den Wert `false` haben muss (den Standardwert).

Der `value` jedes Hashwerts kann ein `ArrayBuffer`, ein `TypedArray` (beispielsweise ein `Uint8Array`) oder eine `DataView` sein. Im folgenden Beispiel wird jeder SHA-256-Hashwert als `Uint8Array` dargestellt. Beispielsweise entspricht die hexadezimale Zeichenfolge `5a1559...` den Bytewerten `0x5a`, `0x15`, `0x59` usw.

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

### Datagramme mit einem BYOB-Reader lesen

Dieses Beispiel zeigt, wie Sie eingehende Datagramme mithilfe eines [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) in einen von Ihnen bereitgestellten Puffer einlesen.

Zunächst erstellen wir den `WebTransport` mit der auf `bytes` gesetzten Option `datagramsReadableType`, sodass die Eigenschaft [`datagrams.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) des Transports einen lesbaren Byte-Stream zurückgibt.
Anschließend erhalten wir einen BYOB-Reader („bring your own buffer“), indem wir `mode: "byob"` an [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) übergeben.

Wir reservieren einen Puffer mit 64 KiB, der groß genug für jedes Datagramm ist (siehe die Option [`datagramsReadableType`](#datagramsreadabletype)).
Jeder Aufruf von [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) füllt eine View dieses Puffers mit einem Datagramm.
Der zurückgegebene `value` ist ein neues `Uint8Array`, das denselben Speicher nutzt und dessen Größe an das Datagramm angepasst ist.
Wenn eine View an `read()` übergeben wird, wird ihr Puffer übertragen, sodass die ursprüngliche View nicht mehr verwendet werden kann.
Stattdessen entnehmen wir den Puffer aus `value` und verwenden ihn für den nächsten Lesevorgang wieder.

```js
const transport = new WebTransport(url, { datagramsReadableType: "bytes" });
await transport.ready;

const reader = transport.datagrams.readable.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(65536);

while (true) {
  const { value, done } = await reader.read(new Uint8Array(buffer));
  if (done) {
    break;
  }
  // value is a Uint8Array containing one datagram
  console.log(`Received a datagram of ${value.byteLength} bytes`);
  buffer = value.buffer;
}
```

### Benutzerdefinierte Request-Header setzen

Dieses Beispiel zeigt die drei Möglichkeiten, mit der Option `headers` dem Request, der die Sitzung einrichtet, benutzerdefinierte Header hinzuzufügen.

Zunächst übergeben wir ein Objektliteral, bei dem jeder Eigenschaftsname ein Header-Name und der zugehörige Wert der Header-Wert ist:

```js
const transport = new WebTransport(url, {
  headers: {
    Authorization: "Bearer abc123",
    "X-Client-Version": "2.4.1",
  },
});
```

Sie können auch ein Array aus `[name, value]`-Arrays mit jeweils zwei Elementen übergeben:

```js
const transport = new WebTransport(url, {
  headers: [
    ["Authorization", "Bearer abc123"],
    ["X-Client-Version", "2.4.1"],
  ],
});
```

Sie können außerdem ein [`Headers`](/de/docs/Web/API/Headers)-Objekt übergeben:

```js
const headers = new Headers();
headers.append("Authorization", "Bearer abc123");
headers.append("X-Client-Version", "2.4.1");

const transport = new WebTransport(url, { headers });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Streams-API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
