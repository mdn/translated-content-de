---
title: "WebTransport: Methode exportKeyingMaterial()"
short-title: exportKeyingMaterial()
slug: Web/API/WebTransport/exportKeyingMaterial
l10n:
  sourceCommit: 526da5ddac26fd88dd8a25f1831beb5f2658371b
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die Methode **`exportKeyingMaterial()`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt ein {{jsxref("Promise")}} zurück, das mit Schlüsselmaterial erfüllt wird, das aus der {{Glossary("TLS", "TLS")}}-Sitzung abgeleitet wurde, auf der die Verbindung des Transports beruht.
Damit lässt sich eine Authentifizierung auf Anwendungsebene an die jeweilige Verbindung binden, beispielsweise um {{Glossary("MitM", "Manipulator-in-the-Middle")}}-Angriffe (MitM) zu erkennen, wenn eine Verbindung zu einem Peer mit einem selbstsignierten Zertifikat hergestellt wird.

## Syntax

```js-nolint
exportKeyingMaterial(label, context, outputLength)
```

### Parameter

- `label`
  - : Ein {{jsxref("ArrayBuffer")}}-, {{jsxref("TypedArray")}}- oder {{jsxref("DataView")}}-Objekt, das den Verwendungszweck des exportierten Schlüsselmaterials kennzeichnet.
    Darf nicht länger als 255 Byte sein.
- `context`
  - : Ein {{jsxref("ArrayBuffer")}}-, {{jsxref("TypedArray")}}- oder {{jsxref("DataView")}}-Objekt mit zusätzlichen Daten, die in das abgeleitete Schlüsselmaterial einfließen.
    Durch unterschiedliche `context`-Werte bei gleichem `label` kann eine Anwendung mehrere verschiedene geheime Werte ableiten.
    Darf nicht länger als 255 Byte sein.
- `outputLength`
  - : Eine Ganzzahl, die angibt, wie viele Byte Schlüsselmaterial erzeugt werden sollen.
    Muss größer als `0` sein und darf einen implementierungsabhängigen Maximalwert nicht überschreiten, der garantiert mindestens `4096` beträgt.

    Wählen Sie die Länge entsprechend der vorgesehenen Verwendung des Materials.
    Beispielsweise benötigt ein AES-128-Schlüssel 16 Byte, während ein HMAC-SHA256-Schlüssel üblicherweise 32 Byte lang ist (die Länge eines SHA-256-Digests).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Uint8Array")}} erfüllt wird, das `outputLength` Byte aus der TLS-Sitzung abgeleitetes Schlüsselmaterial enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `label` oder `context` länger als 255 Byte ist oder wenn `outputLength` den Wert `0` hat oder größer als der implementierungsabhängige Maximalwert ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports beim Aufruf der Methode `"closed"` oder `"failed"` ist.
    Das zurückgegebene Promise wird ebenfalls mit dieser Ausnahme zurückgewiesen, wenn der Zustand des Transports vor dessen Abschluss zu `"closed"` oder `"failed"` wechselt.

## Beschreibung

### Exporteure für TLS-Schlüsselmaterial

Ein **Exporteur für TLS-Schlüsselmaterial** ist ein standardisierter Mechanismus, um aus einer bestehenden TLS-Sitzung zusätzliche geheime Werte abzuleiten, ohne das eigentliche Master-Secret der Sitzung offenzulegen.
Anhand eines `label`, das den Verwendungszweck des abgeleiteten Werts kennzeichnet, der `context`-Daten und einer gewünschten Ausgabelänge erzeugt der Exporteur einen Wert, der für diese TLS-Sitzung eindeutig ist.
Dasselbe `label` und derselbe `context` erzeugen bei einer anderen Verbindung eine andere Ausgabe – selbst wenn die Verbindung zwischen denselben beiden Endpunkten besteht.
Mit den Parametern `label` und `context` kann die aufrufende Anwendung die Ableitung an einen bestimmten Zweck anpassen.
Unterschiedliche Kombinationen aus `label`, `context` und `outputLength` erzeugen verschiedene, unabhängig voneinander abgeleitete Ausgaben, obwohl jede Ausgabe auf demselben zugrunde liegenden Sitzungsgeheimnis beruht.

`exportKeyingMaterial()` macht diesen Exporteur für die TLS-Sitzung zugänglich, auf der eine `WebTransport`-Verbindung beruht.
Da der exportierte Wert kryptografisch an diese Sitzung gebunden ist, kann eine Anwendung damit einen Berechtigungsnachweis, ein Token oder einen Handshake an genau diese Verbindung binden.
Diese Technik wird als Channel Binding bezeichnet.

### MitM-Angriffe mit selbstsignierten Zertifikaten erkennen

Durch Channel Binding kann ein Handshake auf Anwendungsebene MitM-Angriffe erkennen, wenn eine Anwendung eine Verbindung zu einem Peer herstellt, der nur ein selbstsigniertes Zertifikat besitzt.
Die Anwendung vertraut diesem Zertifikat, indem sie dessen Hash in der Option [`serverCertificateHashes`](/de/docs/Web/API/WebTransport/WebTransport#servercertificatehashes) des `WebTransport()`-Konstruktors übergibt.

Da keine Zertifizierungsstelle für ein selbstsigniertes Zertifikat bürgt, beweist ein erfolgreicher TLS-Handshake nur, dass der Peer ein Zertifikat besitzt, das einem der Hashes in `serverCertificateHashes` entspricht – nicht aber, wer dieser Peer tatsächlich ist.
Ein Angreifer, der bei der Peer-Ermittlung einen falschen Hash einschleust, kann beide Seiten dazu verleiten, sich statt mit dem jeweils anderen Peer mit ihm zu verbinden.
Anschließend leitet der Angreifer Nachrichten zwischen ihnen weiter.

Um diesen Angriff zu erkennen, kann eine Anwendung einen zweiten Handshake über einen der gewöhnlichen (TLS-geschützten) Streams der Verbindung durchführen.
Der Handshake authentifiziert die Identität des Peers, indem er das exportierte Schlüsselmaterial als Channel-Binding-Wert verwendet.
Wenn beide Seiten über eine einzige TLS-Verbindung direkt miteinander verbunden sind, teilen sie sich ein beim Schlüsselaustausch erzeugtes, eindeutiges Master-Secret und exportieren daher dasselbe Schlüsselmaterial.

Jeder Peer weist seine Identität nach, indem er das exportierte Schlüsselmaterial mit seinem privaten Identitätsschlüssel signiert und diese Signatur zusammen mit dem zugehörigen öffentlichen Schlüssel sendet.
Ein Angreifer kann die Signatur nicht fälschen, da er den privaten Schlüssel keines der beiden Peers besitzt.
Er kann zwar den ursprünglichen öffentlichen Schlüssel und die Signatur eines Peers weiterleiten, doch diese Signatur lässt sich nicht anhand des Schlüsselmaterials verifizieren, das der empfangende Peer für seine eigene Verbindung berechnet. Daher wird der Handshake abgebrochen.

## Beispiele

### Ein Token an die Verbindung binden

Dieses Beispiel zeigt, wie Sie mit `exportKeyingMaterial()` ein bestehendes Token auf Anwendungsebene durch eine Signatur an die Verbindung binden können.

Es verwendet `label`, um das abgeleitete Schlüsselmaterial auf die Anwendung und den Verwendungszweck zu beschränken, und nutzt dieses Material anschließend als [`HMAC`](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Schlüssel, um `token` zu signieren.
Ein Server, der Zugriff auf den Exporteur derselben TLS-Sitzung hat (beispielsweise weil er {{Glossary("QUIC", "QUIC")}} und {{Glossary("HTTP_3", "HTTP/3")}} selbst terminiert), kann die entsprechende Ableitung durchführen und die Signatur verifizieren.
Damit wird bestätigt, dass `token` für genau diese Verbindung signiert wurde.

Die Verifizierung der Signatur beweist nur, dass die Person oder Instanz, die `{ token, signature }` vorlegt, über gültiges Schlüsselmaterial für _irgendeine_ Verbindung zum Server verfügt – nicht, wer sie ist.
Sie verhindert, dass ein abgefangenes Paar `{ token, signature }` später bei einer anderen, unabhängigen Verbindung wiederverwendet wird, verhindert jedoch nicht den unter [MitM-Angriffe mit selbstsignierten Zertifikaten erkennen](#mitm-angriffe_mit_selbstsignierten_zertifikaten_erkennen) beschriebenen Weiterleitungsangriff.
Ein MitM-Angreifer, der selbst ein legitimer Endpunkt seiner eigenen Verbindung zum Server ist, kann eine gültige Signatur für dasselbe `token` berechnen.
Um dies zu verhindern, muss statt eines einfachen HMAC, dessen Schlüssel ausschließlich das exportierte Schlüsselmaterial der Verbindung ist, ein dauerhafter Identitätsschlüssel zum Signieren verwendet werden.

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

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor
- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign)
- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport), Chrome for Developers
