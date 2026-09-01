---
title: "WebTransport: exportKeyingMaterial() Methode"
short-title: exportKeyingMaterial()
slug: Web/API/WebTransport/exportKeyingMaterial
l10n:
  sourceCommit: 32cd941db59154bdcd9cff0c9989f5b7ae7de91d
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`exportKeyingMaterial()`**-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit Keying-Material erfüllt wird, das aus der {{Glossary("TLS", "TLS")}}-Sitzung abgeleitet ist, die der Verbindung des Transports zugrunde liegt.

## Syntax

```js-nolint
exportKeyingMaterial(label, context, outputLength)
```

### Parameter

- `label`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das den Zweck des exportierten Keying-Materials identifiziert.
    Darf nicht länger als 255 Bytes sein.
- `context`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das zusätzliche Daten enthält, die in das abgeleitete Keying-Material eingemischt werden.
    Dies ermöglicht es einer Anwendung, eine Anzahl von verschiedenen Geheimnissen zu generieren, die alle unter dem gleichen Label gruppiert sind.
    Darf nicht länger als 255 Bytes sein.
- `outputLength`
  - : Eine ganze Zahl, die die Anzahl der zu generierenden Bytes von Keying-Material angibt.
    Muss größer als `0` sein und darf nicht größer als ein implementierungsdefiniertes Maximum sein, das garantiert mindestens `4096` ist.

    Die Länge wird basierend darauf gewählt, wie das Material verwendet werden soll.
    Zum Beispiel erfordert die Generierung eines AES-128-Schlüssels 16 Bytes, während ein HMAC-SHA256-Schlüssel 32 Bytes erfordert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Uint8Array")}} erfüllt wird, das `outputLength` Bytes von Keying-Material enthält, das aus der TLS-Sitzung abgeleitet ist.

### Ausnahmen

- `RangeError`
  - : Wird ausgelöst, wenn `label` oder `context` länger als 255 Bytes ist, oder wenn `outputLength` `0` oder größer als das implementierungsdefinierte Maximum ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports `"closed"` oder `"failed"` ist, wenn die Methode aufgerufen wird, oder wenn die Verbindung in einen dieser Zustände übergeht, bevor das zurückgegebene Promise abgeschlossen wird.

## Beschreibung

Ein **TLS-Keying-Material-Exporter** ist ein standardisierter Mechanismus zur Ableitung zusätzlicher Geheimnisse aus einer etablierten TLS-Sitzung, ohne das eigentliche Master-Geheimnis der Sitzung preiszugeben.
Unter Verwendung eines `labels`, das den Zweck des abgeleiteten Werts identifiziert, optionaler `context`-Daten und einer gewünschten Ausgabelänge erzeugt der Exporter einen Wert, der einzigartig für diese spezifische TLS-Sitzung ist.
Dasselbe Label und derselbe Kontext, die in einer anderen Verbindung (selbst zwischen denselben beiden Endpunkten) verwendet werden, erzeugen unterschiedliche Ausgaben.

`exportKeyingMaterial()` macht diesen Exporter für die TLS-Sitzung zugänglich, die einer `WebTransport`-Verbindung zugrunde liegt.
Weil der exportierte Wert kryptographisch an diese eine Sitzung gebunden ist, kann er verwendet werden, um ein anderes Anmeldeinformation, Token oder Handshake an diese spezifische Verbindung zu binden — eine Technik, die als Channel Binding bekannt ist.

Dies ermöglicht einem Anwendungshandshake die Erkennung von MITM-Angriffen in dem Fall, dass eine Anwendung eine Verbindung zu einem Peer herstellt, der nur ein selbstsigniertes Zertifikat hat (unter Verwendung der [`serverCertificateHashes`](/de/docs/Web/API/WebTransport/WebTransport#servercertificatehashes)-Option des `WebTransport()`-Konstruktors).

Da keine Zertifizierungsstelle für ein selbstsigniertes Zertifikat bürgt, beweist ein erfolgreicher TLS-Handshake nur, dass der Peer einen der angehefteten Hashes besitzt — nicht, wer dieser Peer tatsächlich ist.
Ein Angreifer, der während der Peer-Discovery einen falschen Hash einfügt, kann beide Seiten dazu bringen, eine Verbindung zu ihm anstatt zueinander herzustellen und dann Nachrichten zwischen ihnen weiterzuleiten.

Um dies zu erkennen, kann eine Anwendung einen sekundären Handshake über einen der normalen (TLS-geschützten) Streams der Verbindung durchführen und die Identität des Peers unter Verwendung des exportierten Keying-Materials als Channel-Binding-Wert authentifizieren.
Wenn beide Enden direkt durch eine einzige TLS-Verbindung verbunden sind, haben sie ein einzigartiges gemeinsames Master-Geheimnis, das als Teil des Schlüsselaustauschs generiert wird, und exportieren daher dasselbe Keying-Material.

Um es zu beweisen, sendet jeder Peer seinen Identitäts-Öffentlichen Schlüssel zusammen mit einer Signatur, die mit dem passenden privaten Schlüssel über das exportierte Keying-Material erstellt wurde.
Ein Angreifer kann die Signatur nicht fälschen, weil er keinen privaten Schlüssel eines Peers besitzt.
Während er den ursprünglichen öffentlichen Schlüssel und die Signatur eines Peers weiterleiten kann, wird diese Signatur nicht gegen das Keying-Material, das der empfangende Peer für seine eigene Verbindung berechnet, verifiziert, und der Handshake schlägt fehl.

Die Parameter `label` und `context` lassen einen Anrufer die Ableitung für einen bestimmten Zweck anpassen.
Verschiedene Kombinationen aus `label`, `context` und `outputLength` erzeugen unterschiedliche, unabhängig abgeleitete Ausgaben, auch wenn sie alle auf demselben zugrunde liegenden Sitzungsschlüssel beruhen.

## Beispiele

### Ein Token an die Verbindung binden

Dieses Beispiel zeigt, wie wir `exportKeyingMaterial()` verwenden können, um ein Token zu erstellen, das an die Verbindung gebunden ist.

Es leitet Keying-Material ab, das auf die Anwendung und den Zweck mit dem `label` zugeschnitten ist, und verwendet es dann als [`HMAC`](/de/docs/Web/API/SubtleCrypto/sign)-Schlüssel, um ein Anwendungsebene-`token` zu signieren.
Ein Server, der Zugriff auf den Exporter derselben TLS-Sitzung hat (zum Beispiel einer, der QUIC/HTTP-3 selbst beendet), kann die gleichwertige Ableitung durchführen und die Signatur überprüfen, um zu bestätigen, dass `token` genau für diese Verbindung signiert wurde.

Beachten Sie, dass dies nur beweist, dass derjenige, der `{token, signature}` präsentiert, gültiges Keying-Material für _irgendeine_ Verbindung zum Server besitzt — nicht, wer er ist.
Es verhindert, dass ein erfasstes `{token, signature}`-Paar später in einer nicht zusammenhängenden Verbindung erneut verwendet wird, aber es stoppt nicht den oben beschriebenen Live-Relay-Angriff: ein MITM, der selbst ein echter Endpunkt seiner eigenen Verbindung zum Server ist, kann seine eigene gültige Signatur über dasselbe `token` berechnen.
Um sich dagegen zu verteidigen, ist es erforderlich, mit einem persistenten Identitäts-Schlüssel zu signieren, wie oben beschrieben, anstelle eines einfachen HMAC, der nur durch das exportierte Material der Verbindung gekennzeichnet ist.

```js
const encoder = new TextEncoder();

async function signTokenForConnection(transport, token) {
  try {
    const keyingMaterial = await transport.exportKeyingMaterial(
      encoder.encode("example.com/channel-binding"), // Label
      new Uint8Array(0), // Context (No additional context needed)
      32, // Output length
    );

    const key = await crypto.subtle.importKey(
      "raw",
      keyingMaterial,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );

    const signature = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(token),
    );

    // Send `token` and `signature` to the server together
    return { token, signature };
  } catch (error) {
    console.error(`Unable to bind token to connection: ${error}`);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats)
