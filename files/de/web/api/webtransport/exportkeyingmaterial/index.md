---
title: "WebTransport: Methode exportKeyingMaterial()"
short-title: exportKeyingMaterial()
slug: Web/API/WebTransport/exportKeyingMaterial
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die Methode **`exportKeyingMaterial()`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt ein {{jsxref("Promise")}} zurück, das mit Schlüsselmaterial erfüllt wird, das aus der {{Glossary("TLS", "TLS")}}-Sitzung abgeleitet wurde, auf der die Verbindung des Transports basiert.

## Syntax

```js-nolint
exportKeyingMaterial(label, context, outputLength)
```

### Parameter

- `label`
  - : Ein {{jsxref("ArrayBuffer")}}-, {{jsxref("TypedArray")}}- oder {{jsxref("DataView")}}-Objekt, das den Zweck des exportierten Schlüsselmaterials kennzeichnet.
    Darf nicht länger als 255 Byte sein.
- `context`
  - : Ein {{jsxref("ArrayBuffer")}}-, {{jsxref("TypedArray")}}- oder {{jsxref("DataView")}}-Objekt mit zusätzlichen Daten, die in das abgeleitete Schlüsselmaterial einfließen.
    Dadurch kann eine Anwendung mehrere verschiedene Geheimnisse erzeugen, die alle demselben Label zugeordnet sind.
    Darf nicht länger als 255 Byte sein.
- `outputLength`
  - : Eine Ganzzahl, die angibt, wie viele Byte Schlüsselmaterial erzeugt werden sollen.
    Muss größer als `0` sein und darf einen implementierungsabhängigen Höchstwert nicht überschreiten, der garantiert mindestens `4096` beträgt.

    Die Länge richtet sich danach, wie das Material verwendet werden soll.
    Beispielsweise erfordert die Erzeugung eines AES-128-Schlüssels 16 Byte, während ein HMAC-SHA256-Schlüssel 32 Byte erfordert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Uint8Array")}} erfüllt wird, das `outputLength` Byte Schlüsselmaterial enthält, das aus der TLS-Sitzung abgeleitet wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `label` oder `context` länger als 255 Byte ist oder wenn `outputLength` gleich `0` ist oder den implementierungsabhängigen Höchstwert überschreitet.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports beim Aufruf der Methode `"closed"` oder `"failed"` ist oder wenn die Verbindung in einen dieser Zustände wechselt, bevor das zurückgegebene Promise abgeschlossen ist.

## Beschreibung

Ein **TLS-Keying-Material-Exporter** ist ein standardisierter Mechanismus, um zusätzliche Geheimnisse aus einer bestehenden TLS-Sitzung abzuleiten, ohne das eigentliche Master Secret der Sitzung offenzulegen.
Anhand eines `label`, das den Zweck des abgeleiteten Werts kennzeichnet, optionaler `context`-Daten und einer gewünschten Ausgabelänge erzeugt der Exporter einen Wert, der für diese TLS-Sitzung einzigartig ist.
Dasselbe Label und derselbe Kontext erzeugen bei einer anderen Verbindung – selbst zwischen denselben beiden Endpunkten – eine andere Ausgabe.

`exportKeyingMaterial()` macht diesen Exporter für die TLS-Sitzung zugänglich, auf der eine `WebTransport`-Verbindung basiert.
Da der exportierte Wert kryptografisch an genau diese Sitzung gebunden ist, kann er verwendet werden, um andere Zugangsdaten, ein Token oder einen Handshake an diese Verbindung zu binden. Diese Technik wird als Channel Binding bezeichnet.

So kann ein Handshake auf Anwendungsebene MITM-Angriffe erkennen, wenn eine Anwendung eine Verbindung zu einem Peer herstellt, der nur über ein selbstsigniertes Zertifikat verfügt (mithilfe der Option [`serverCertificateHashes`](/de/docs/Web/API/WebTransport/WebTransport#servercertificatehashes) des `WebTransport()`-Konstruktors).

Da keine Zertifizierungsstelle für ein selbstsigniertes Zertifikat bürgt, beweist ein erfolgreicher TLS-Handshake nur, dass der Peer zu einem der festgelegten Hashes gehört – nicht, wer dieser Peer tatsächlich ist.
Ein Angreifer, der bei der Ermittlung der Peers einen falschen Hash einschleust, kann beide Seiten dazu bringen, sich jeweils mit ihm statt miteinander zu verbinden, und anschließend Nachrichten zwischen ihnen weiterleiten.

Um dies zu erkennen, kann eine Anwendung über einen der gewöhnlichen (TLS-geschützten) Streams der Verbindung einen zweiten Handshake durchführen. Dabei authentifiziert sie die Identität des Peers, indem sie das exportierte Schlüsselmaterial als Channel-Binding-Wert verwendet.
Wenn beide Enden über eine einzige TLS-Verbindung direkt miteinander verbunden sind, verfügen sie über ein gemeinsames, einzigartiges Master Secret, das beim Schlüsselaustausch erzeugt wurde, und exportieren daher dasselbe Schlüsselmaterial.

Als Nachweis sendet jeder Peer seinen öffentlichen Identitätsschlüssel zusammen mit einer Signatur über das exportierte Schlüsselmaterial, die mit dem zugehörigen privaten Schlüssel erstellt wurde.
Ein Angreifer kann die Signatur nicht fälschen, da er den privaten Schlüssel keines der beiden Peers besitzt.
Er kann zwar den ursprünglichen öffentlichen Schlüssel und die Signatur eines Peers weiterleiten, doch die Signatur lässt sich nicht mit dem Schlüsselmaterial verifizieren, das der empfangende Peer für seine eigene Verbindung berechnet. Der Handshake wird daher abgebrochen.

Mit den Parametern `label` und `context` kann der Aufrufer die Ableitung für einen bestimmten Zweck anpassen.
Unterschiedliche Kombinationen aus `label`, `context` und `outputLength` erzeugen verschiedene, unabhängig voneinander abgeleitete Ausgaben, obwohl sie alle auf demselben zugrunde liegenden Sitzungsgeheimnis basieren.

## Beispiele

### Ein Token an die Verbindung binden

Dieses Beispiel zeigt, wie Sie mit `exportKeyingMaterial()` ein Token erstellen können, das an die Verbindung gebunden ist.

Zunächst wird mithilfe von `label` Schlüsselmaterial abgeleitet, das auf die Anwendung und den Verwendungszweck zugeschnitten ist. Anschließend wird es als [`HMAC`](/de/docs/Web/API/SubtleCrypto/sign)-Schlüssel verwendet, um ein `token` auf Anwendungsebene zu signieren.
Ein Server, der Zugriff auf den Exporter derselben TLS-Sitzung hat (beispielsweise weil er QUIC/HTTP-3 selbst terminiert), kann die entsprechende Ableitung durchführen und die Signatur verifizieren. So bestätigt er, dass `token` für genau diese Verbindung signiert wurde.

Beachten Sie, dass dies nur beweist, dass die Person, die `{token, signature}` vorlegt, über gültiges Schlüsselmaterial für _irgendeine_ Verbindung zum Server verfügt – nicht, wer diese Person ist.
Es verhindert, dass ein abgefangenes `{token, signature}`-Paar später über eine andere Verbindung erneut verwendet wird. Den oben beschriebenen Live-Relay-Angriff verhindert es jedoch nicht: Ein MITM, der selbst ein tatsächlicher Endpunkt seiner eigenen Verbindung zum Server ist, kann eine eigene gültige Signatur für dasselbe `token` berechnen.
Zum Schutz dagegen muss die Signatur wie oben beschrieben mit einem dauerhaften Identitätsschlüssel erstellt werden, statt mit einem einfachen HMAC, dessen Schlüssel ausschließlich aus dem exportierten Material der Verbindung besteht.

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
