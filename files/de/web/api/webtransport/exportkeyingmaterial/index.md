---
title: "WebTransport: Methode exportKeyingMaterial()"
short-title: exportKeyingMaterial()
slug: Web/API/WebTransport/exportKeyingMaterial
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Methode **`exportKeyingMaterial()`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt ein {{jsxref("Promise")}} zurück, das mit Schlüsselmaterial erfüllt wird, das aus der {{Glossary("TLS", "TLS")}}-Sitzung abgeleitet wurde, auf der die Transportverbindung beruht.
Damit lässt sich die Authentifizierung auf Anwendungsebene an die konkrete Verbindung binden, um beispielsweise {{Glossary("MitM", "Manipulator-in-the-Middle")}}-Angriffe (MitM) zu erkennen, wenn eine Verbindung zu einem Peer mit einem selbstsignierten Zertifikat hergestellt wird.

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
    Mit unterschiedlichen `context`-Werten bei gleichem `label` kann eine Anwendung mehrere voneinander verschiedene Geheimnisse ableiten.
    Darf nicht länger als 255 Byte sein.
- `outputLength`
  - : Eine Ganzzahl, die angibt, wie viele Byte Schlüsselmaterial erzeugt werden sollen.
    Sie muss größer als `0` sein und darf einen implementierungsabhängigen Höchstwert nicht überschreiten. Dieser Höchstwert beträgt garantiert mindestens `4096`.

    Wählen Sie die Länge danach, wie Sie das Material verwenden möchten.
    Ein AES-128-Schlüssel benötigt beispielsweise 16 Byte, während ein HMAC-SHA256-Schlüssel üblicherweise 32 Byte umfasst (die Länge eines SHA-256-Digests).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Uint8Array")}} erfüllt wird, das `outputLength` Byte Schlüsselmaterial enthält, das aus der TLS-Sitzung abgeleitet wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `label` oder `context` länger als 255 Byte ist oder wenn `outputLength` den Wert `0` hat oder größer als der implementierungsabhängige Höchstwert ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports beim Aufruf der Methode `"closed"` oder `"failed"` ist.
    Das zurückgegebene Promise wird ebenfalls mit dieser Ausnahme abgelehnt, wenn der Zustand des Transports vor dessen Erfüllung oder Ablehnung zu `"closed"` oder `"failed"` wechselt.

## Beschreibung

### Exporter für TLS-Schlüsselmaterial

Ein **Exporter für TLS-Schlüsselmaterial** ist ein standardisierter Mechanismus, um zusätzliche Geheimnisse aus einer bestehenden TLS-Sitzung abzuleiten, ohne deren eigentliches Master-Secret offenzulegen.
Aus einem `label`, das den Zweck des abgeleiteten Werts kennzeichnet, `context`-Daten und einer gewünschten Ausgabelänge erzeugt der Exporter einen Wert, der für genau diese TLS-Sitzung eindeutig ist.
Dasselbe `label` und derselbe `context` erzeugen bei einer anderen Verbindung andere Ausgabewerte – selbst wenn die Verbindung zwischen denselben beiden Endpunkten besteht.
Mit den Parametern `label` und `context` können Aufrufende die Ableitung für einen bestimmten Zweck anpassen.
Unterschiedliche Kombinationen aus `label`, `context` und `outputLength` erzeugen verschiedene, unabhängig voneinander abgeleitete Ausgabewerte, obwohl sie alle auf demselben zugrunde liegenden Sitzungsgeheimnis beruhen.

`exportKeyingMaterial()` stellt diesen Exporter für die TLS-Sitzung bereit, auf der eine `WebTransport`-Verbindung beruht.
Da der exportierte Wert kryptografisch an diese Sitzung gebunden ist, kann eine Anwendung damit Zugangsdaten, ein Token oder einen Handshake an genau diese Verbindung binden.
Diese Technik wird als Channel Binding bezeichnet.

### MitM-Angriffe bei selbstsignierten Zertifikaten erkennen

Durch Channel Binding kann ein Handshake auf Anwendungsebene MitM-Angriffe erkennen, wenn eine Anwendung eine Verbindung zu einem Peer herstellt, der nur über ein selbstsigniertes Zertifikat verfügt.
Die Anwendung vertraut diesem Zertifikat, indem sie dessen Hash über die Option [`serverCertificateHashes`](/de/docs/Web/API/WebTransport/WebTransport#servercertificatehashes) des Konstruktors `WebTransport()` übergibt.

Da keine Zertifizierungsstelle für ein selbstsigniertes Zertifikat bürgt, beweist ein erfolgreicher TLS-Handshake lediglich, dass der Peer ein Zertifikat besitzt, das mit einem der Hashes in `serverCertificateHashes` übereinstimmt – nicht aber, wer dieser Peer tatsächlich ist.
Wer bei der Peer-Erkennung einen falschen Hash einschleust, kann beide Seiten dazu bringen, sich jeweils mit dem Angreifer statt miteinander zu verbinden.
Der Angreifer leitet anschließend Nachrichten zwischen ihnen weiter.

Um diesen Angriff zu erkennen, kann eine Anwendung einen zusätzlichen Handshake über einen der regulären (TLS-geschützten) Streams der Verbindung durchführen.
Dabei wird die Identität des Peers authentifiziert, indem das exportierte Schlüsselmaterial als Channel-Binding-Wert verwendet wird.
Wenn beide Enden über eine einzige TLS-Verbindung direkt miteinander verbunden sind, teilen sie ein eindeutiges Master-Secret, das beim Schlüsselaustausch erzeugt wurde. Daher exportieren sie dasselbe Schlüsselmaterial.

Jeder Peer weist seine Identität nach, indem er das exportierte Schlüsselmaterial mit seinem privaten Identitätsschlüssel signiert und die Signatur zusammen mit dem zugehörigen öffentlichen Schlüssel sendet.
Ein Angreifer kann die Signatur nicht fälschen, da er den privaten Schlüssel keines der beiden Peers besitzt.
Er kann zwar den ursprünglichen öffentlichen Schlüssel und die Signatur eines Peers weiterleiten, doch die Signatur lässt sich nicht mit dem Schlüsselmaterial verifizieren, das der empfangende Peer für seine eigene Verbindung berechnet. Daher wird der Handshake abgebrochen.

## Beispiele

### Ein Token an die Verbindung binden

Dieses Beispiel zeigt, wie Sie mit `exportKeyingMaterial()` ein vorhandenes Token auf Anwendungsebene durch eine Signatur an die Verbindung binden können.

Dabei wird mit `label` der Geltungsbereich des abgeleiteten Schlüsselmaterials auf die Anwendung und den jeweiligen Zweck beschränkt. Anschließend wird dieses Material als [`HMAC`](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Schlüssel verwendet, um `token` zu signieren.
Ein Server, der Zugriff auf den Exporter derselben TLS-Sitzung hat (beispielsweise weil er {{Glossary("QUIC", "QUIC")}} und {{Glossary("HTTP_3", "HTTP/3")}} selbst terminiert), kann die entsprechende Ableitung durchführen und die Signatur verifizieren.
Damit wird bestätigt, dass `token` für genau diese Verbindung signiert wurde.

Die Verifizierung der Signatur beweist lediglich, dass die Person oder Instanz, die `{ token, signature }` vorlegt, gültiges Schlüsselmaterial für _irgendeine_ Verbindung zum Server besitzt – nicht, wer sie ist.
Sie verhindert, dass ein abgefangenes Paar aus `{ token, signature }` später bei einer anderen, unabhängigen Verbindung wiederverwendet wird. Sie verhindert jedoch nicht den unter [MitM-Angriffe bei selbstsignierten Zertifikaten erkennen](#mitm-angriffe_bei_selbstsignierten_zertifikaten_erkennen) beschriebenen Weiterleitungsangriff.
Ein MitM-Angreifer, der selbst Endpunkt einer eigenen Verbindung zum Server ist, kann eine gültige Signatur für dasselbe `token` berechnen.
Zur Abwehr ist es erforderlich, mit einem dauerhaften Identitätsschlüssel zu signieren, statt lediglich ein HMAC zu verwenden, dessen Schlüssel ausschließlich aus dem exportierten Schlüsselmaterial der Verbindung besteht.

```js
const encoder = new TextEncoder();

async function signTokenForConnection(transport, token) {
  try {
    const keyingMaterial = await transport.exportKeyingMaterial(
      encoder.encode("example.com/channel-binding"), // Label
      new Uint8Array(0), // Context (no additional context needed)
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

- Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign)
- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport), Chrome for Developers
