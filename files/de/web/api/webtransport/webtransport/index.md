---
title: "WebTransport: WebTransport()-Konstruktor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der Konstruktor **`WebTransport()`** erstellt eine neue Instanz eines [`WebTransport`](/de/docs/Web/API/WebTransport)-Objekts.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameter

- `url`
  - : Eine Zeichenfolge, die die URL des HTTP/3-Servers angibt, zu dem eine Verbindung hergestellt werden soll.
    Das Schema muss HTTPS sein, und die Portnummer muss ausdrücklich angegeben werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `allowPooling` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Netzwerkverbindung für dieses [`WebTransport`](/de/docs/Web/API/WebTransport)-Objekt mit einem Pool anderer HTTP/3-Sitzungen geteilt werden.
        Standardmäßig ist der Wert `false`, und die Verbindung kann nicht geteilt werden.
    - `congestionControl` {{optional_inline}}
      - : Eine Zeichenfolge, die angibt, ob die Anwendung bevorzugt, dass der beim Senden von Daten über diese Verbindung verwendete Algorithmus zur Überlastkontrolle auf Durchsatz oder geringe Latenz abgestimmt ist.
        Dies ist ein Hinweis an den User Agent.
        Zulässige Werte sind: `default` (Standardwert), `throughput` und `low-latency`.
    - `protocols` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, die jeweils einen anwendungsspezifischen Protokollnamen angeben und nach Präferenz geordnet sind.
        Standardmäßig ist der Wert ein leeres Array.

        Der Server kann eines der Protokolle auswählen und zurückgeben.
        In diesem Fall ist der ausgewählte Wert über die Eigenschaft [`protocol`](/de/docs/Web/API/WebTransport/protocol) verfügbar, sobald das Promise [`ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist.
        Der Server kann auch keines der angebotenen Protokolle auswählen. In diesem Fall gibt `protocol` eine leere Zeichenfolge (`""`) zurück.
        Wenn der Server keines der Protokolle unterstützt, kann er die Verbindung auch ablehnen. In diesem Fall wird [`ready`](/de/docs/Web/API/WebTransport/ready) mit einem Fehler zurückgewiesen.

    - `requireUnreliable` {{optional_inline}}
      - : Ein boolescher Wert.
        Wenn `true`, kann die Verbindung nicht über HTTP/2 hergestellt werden, falls eine HTTP/3-Verbindung nicht möglich ist.
        Standardmäßig ist der Wert `false`.
    - `serverCertificateHashes` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils den Hashwert eines Serverzertifikats und den Namen des Algorithmus angeben, mit dem er erzeugt wurde.
        Diese Option wird nur für Verbindungen unterstützt, die nicht mit anderen Sitzungen geteilt werden (`allowPooling` ist `false`).

        Wenn diese Option angegeben ist, versucht der Browser, das vom Server bereitgestellte Zertifikat anhand der angegebenen Zertifikat-Hashwerte zu authentifizieren, um eine Verbindung herzustellen, anstatt die Web-Public-Key-Infrastruktur (PKI) zu verwenden.
        Wenn einer der Hashwerte übereinstimmt, weiß der Browser, dass der Server über ein vertrauenswürdiges Zertifikat verfügt, und stellt die Verbindung wie gewohnt her.
        Ist das Array leer, verwendet der User Agent dieselben PKI-Verfahren zur Zertifikatsüberprüfung wie bei einem normalen Fetch-Vorgang.

        Mit dieser Funktion können Entwickler eine Verbindung zu WebTransport-Servern herstellen, für die es normalerweise schwierig wäre, ein öffentlich vertrauenswürdiges Zertifikat zu erhalten, etwa zu Hosts, die nicht öffentlich erreichbar sind, oder zu kurzlebigen Hosts wie virtuellen Maschinen.

        > [!NOTE]
        > Die Webanwendung könnte die Hashwerte üblicherweise von einem vertrauenswürdigen Vermittler abrufen.
        > Beispielsweise könnten Sie einen Cloud-Anbieter nutzen, um VMs bereitzustellen, auf denen Ihre WebTransport-Server laufen.
        > Der Anbieter hat vertrauenswürdigen Zugriff auf den Server und kann dessen Zertifikat anfordern, Hashwerte erzeugen und diese der Anwendung über eine API (abgesichert durch PKI) oder eine Cloud-Konsole bereitstellen.
        > Die Webanwendung kann nun mithilfe der bereitgestellten Hashwerte eine direkte Verbindung zum auf der VM gehosteten Server herstellen, obwohl die VM selbst kein langlebiges TLS-Zertifikat besitzt.

        Das Zertifikat muss ein X.509v3-Zertifikat mit einer Gültigkeitsdauer von weniger als zwei Wochen sein, und der aktuelle Zeitpunkt muss innerhalb dieser Gültigkeitsdauer liegen.
        Das Format des öffentlichen Schlüssels im Zertifikat hängt von der Implementierung ab, muss aber mindestens ECDSA mit der benannten Gruppe secp256r1 (NIST P-256) umfassen und darf keine RSA-Schlüssel enthalten.
        Ein ECDSA-Schlüssel ist daher ein interoperables Standardformat für öffentliche Schlüssel.
        Ein User Agent kann zusätzliche Anforderungen stellen; sofern bekannt, werden diese im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt.

        Jedes Objekt im Array hat die folgenden Eigenschaften:
        - `algorithm`
          - : Eine Zeichenfolge mit dem Wert `sha-256` (ohne Beachtung der Groß- und Kleinschreibung).
            Beachten Sie, dass diese Zeichenfolge den Algorithmus zur Überprüfung des Hashwerts angibt und dass jeder Hashwert mit einem unbekannten Algorithmus ignoriert wird.
            Zum Zeitpunkt der Erstellung dieses Artikels ist `SHA-256` der einzige in der Spezifikation aufgeführte Hashalgorithmus.

        - `value`
          - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), {{jsxref("TypedArray")}} oder [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView), der bzw. das den Hashwert enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `serverCertificateHashes` angegeben ist, das Transportprotokoll diese Funktion aber nicht unterstützt.
- `SyntaxError`
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist, das Schema nicht HTTPS ist oder die URL ein Fragment enthält.
    Wird auch ausgelöst, wenn `protocols` einen doppelten Wert, einen Wert mit Zeichen, die in einem Protokoll-Token nicht zulässig sind, oder einen Wert enthält, dessen kodierte Länge `0` oder mindestens `512` Byte beträgt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `serverCertificateHashes` für eine geteilte Verbindung gesetzt ist (mit anderen Worten, wenn `allowPooling` den Wert `true` hat).

## Beispiele

### Verbindung mit Standardoptionen herstellen

Dieses Beispiel zeigt, wie Sie ein `WebTransport`-Objekt nur mit einer URL erstellen, warten, bis die Verbindung hergestellt ist, und anschließend überwachen, wann die Verbindung geschlossen wird.

Zunächst definieren wir eine `async`-Methode, die eine URL entgegennimmt und damit das `WebTransport`-Objekt erstellt.
Es werden keine Konstruktoroptionen angegeben. Daher verwendet die Verbindung die Standardoptionen: eine nicht geteilte Verbindung, keine Anforderung an die Unterstützung unzuverlässiger Transportmechanismen, die standardmäßige Überlastkontrolle und die übliche Authentifizierung des Servers über die Web-PKI.
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

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das Promise [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt wird.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über die üblichen Eigenschaften von [`DOMException`](/de/docs/Web/API/DOMException) hinaus.

Die folgende Methode `closeTransport()` zeigt, wie das geht.
Innerhalb eines `try...catch`-Blocks wartet sie mit `await` darauf, dass das Promise `closed` erfüllt oder zurückgewiesen wird, und meldet dann, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Die obigen asynchronen Funktionen könnten wir in einer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

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

### Verbindung mit Serverzertifikat-Hashwerten herstellen

Das folgende Beispiel zeigt Code zum Erstellen eines `WebTransport`-Objekts, bei dem die Option `serverCertificateHashes` angegeben ist.
In diesem Fall enthält das Array zwei Hashwerte, die beide mit dem SHA-256-Algorithmus kodiert wurden.
Beachten Sie, dass die Option `allowPooling` den Wert `false` haben muss (den Standardwert).

Der `value` jedes Hashwerts kann ein `ArrayBuffer`, ein `TypedArray` (beispielsweise ein `Uint8Array`) oder ein `DataView` sein. Im folgenden Beispiel wird jeder SHA-256-Hashwert als `Uint8Array` dargestellt. Die hexadezimale Zeichenfolge `5a1559...` entspricht beispielsweise den Bytewerten `0x5a`, `0x15`, `0x59` usw.

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

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Streams-API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
