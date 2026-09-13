---
title: "WebTransport: exportKeyingMaterial() Methode"
short-title: exportKeyingMaterial()
slug: Web/API/WebTransport/exportKeyingMaterial
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`exportKeyingMaterial()`** Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit Schlüsselmaterial erfüllt wird, das aus der zugrunde liegenden {{Glossary("TLS", "TLS")}}-Sitzung der Verbindung des Transports abgeleitet ist.

## Syntax

```js-nolint
exportKeyingMaterial(label, context, outputLength)
```

### Parameter

- `label`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}} Objekt, das den Zweck des exportierten Schlüsselmaterials identifiziert.
    Darf nicht länger als 255 Bytes sein.
- `context`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}} Objekt, das zusätzliche Daten enthält, die in das abgeleitete Schlüsselmaterial eingemischt werden.
    Dies ermöglicht es einer Anwendung, mehrere verschiedene Geheimnisse zu erzeugen, die alle unter dem gleichen Label gruppiert sind.
    Darf nicht länger als 255 Bytes sein.
- `outputLength`
  - : Eine Ganzzahl, die die Anzahl der zu erzeugenden Bytes des Schlüsselmaterials angibt.
    Muss größer als `0` und nicht größer als ein implementierungsdefiniertes Maximum sein, das mindestens `4096` garantiert.

    Die Länge wird basierend darauf gewählt, wie das Material verwendet werden soll.
    Zum Beispiel benötigt die Erzeugung eines AES-128-Schlüssels 16 Bytes, während ein HMAC-SHA256-Schlüssel 32 Bytes benötigt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Uint8Array")}} erfüllt wird, das `outputLength` Bytes von Schlüsselmaterial aus der TLS-Sitzung enthält.

### Ausnahmen

- `RangeError`
  - : Wird ausgelöst, wenn `label` oder `context` länger als 255 Bytes sind oder wenn `outputLength` `0` oder größer als das implementierungsdefinierte Maximum ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports `"closed"` oder `"failed"` ist, wenn die Methode aufgerufen wird, oder wenn die Verbindung in einen dieser Zustände wechselt, bevor das zurückgegebene Promise abgeschlossen ist.

## Beschreibung

Ein **TLS-Schlüsselmaterial-Exporter** ist ein standardisierter Mechanismus zum Ableiten zusätzlicher Geheimnisse aus einer etablierten TLS-Sitzung, ohne das tatsächliche Master-Geheimnis der Sitzung offenzulegen.
Anhand eines `label`, das den Zweck des abgeleiteten Werts identifiziert, optionalen `context`-Daten und einer gewünschten Ausgabelänge erzeugt der Exporter einen Wert, der eindeutig für diese spezielle TLS-Sitzung ist.
Das gleiche Label und der gleiche Kontext auf einer anderen Verbindung (selbst zwischen denselben beiden Endpunkten) erzeugen unterschiedliche Ausgaben.

`exportKeyingMaterial()` stellt diesen Exporter für die TLS-Sitzung einer `WebTransport`-Verbindung zur Verfügung.
Da der exportierte Wert kryptographisch an diese eine Sitzung gebunden ist, kann er verwendet werden, um einige andere Anmeldeinformationen, Token oder Handshakes an diese spezifische Verbindung zu binden — eine Technik, die als Kanalbindung bekannt ist.

Dies ermöglicht es einem handhabe-seitigen Handshake, MITM-Angriffe zu erkennen, wenn eine Anwendung mit einem Peer verbunden wird, der nur ein selbstsigniertes Zertifikat besitzt (unter Verwendung der [`serverCertificateHashes`](/de/docs/Web/API/WebTransport/WebTransport#servercertificatehashes)-Option des `WebTransport()`-Konstruktors).

Da keine Zertifizierungsstelle für ein selbstsigniertes Zertifikat bürgt, beweist ein erfolgreicher TLS-Handshake nur, dass der Peer eine der angehefteten Hashes besitzt — nicht, wer dieser Peer tatsächlich ist.
Ein Angreifer, der einen falschen Hash während der Peer-Entdeckung einfügt, kann jede Seite dazu bringen, sich mit ihm anstelle des anderen zu verbinden und dann Nachrichten zwischen ihnen weiterzuleiten.

Um dies zu erkennen, kann eine Anwendung einen sekundären Handshake über einen der gewöhnlichen (TLS-geschützten) Streams der Verbindung durchführen, wobei die Identität des Peers unter Verwendung des exportierten Schlüsselmaterials als Kanalbindungswert authentifiziert wird.
Wenn beide Enden direkt durch eine einzige TLS-Verbindung verbunden sind, haben sie ein eindeutiges gemeinsames Master-Geheimnis, das im Rahmen des Schlüsselaustauschs generiert wurde, und exportieren daher dasselbe Schlüsselmaterial.

Um dies zu beweisen, sendet jeder Peer seinen öffentlichen Identitätsschlüssel zusammen mit einer Signatur, die mit dem passenden privaten Schlüssel erstellt wurde, über das exportierte Schlüsselmaterial.
Ein Angreifer kann die Signatur nicht fälschen, da er keinen der privaten Schlüssel des Peers besitzt.
Obwohl er den ursprünglichen öffentlichen Schlüssel und die Signatur eines Peers weiterleiten kann, wird diese Signatur nicht gegen das Schlüsselmaterial überprüft, das der empfangende Peer für seine eigene Verbindung berechnet, und der Handshake wird abgebrochen.

Die `label`- und `context`-Parameter ermöglichen es einem Anrufer, die Ableitung für einen bestimmten Zweck anzupassen.
Verschiedene Kombinationen von `label`, `context` und `outputLength` erzeugen unterschiedliche, unabhängig abgeleitete Ausgaben, obwohl sie alle auf demselben zugrunde liegenden Sitzungsschlüssel basieren.

## Beispiele

### Bindung eines Tokens an die Verbindung

Dieses Beispiel zeigt, wie wir `exportKeyingMaterial()` verwenden können, um ein Token zu erstellen, das an die Verbindung gebunden ist.

Es leitet Schlüsselmaterial ab, das auf die Anwendung und den Zweck mit dem `label` beschränkt ist, und verwendet es dann als [`HMAC`](/de/docs/Web/API/SubtleCrypto/sign)-Schlüssel, um ein anwendungsseitiges `token` zu signieren.
Ein Server, der Zugriff auf den Exporter derselben TLS-Sitzung hat (zum Beispiel einer, der QUIC/HTTP-3 selbst beendet), kann die entsprechende Ableitung durchführen und die Signatur überprüfen, wodurch bestätigt wird, dass `token` genau für diese Verbindung signiert wurde.

Beachten Sie, dass dies nur beweist, dass derjenige, der `{token, signature}` präsentiert, gültiges Schlüsselmaterial für _irgendeine_ Verbindung zum Server besitzt — nicht, wer er ist.
Es verhindert, dass ein erfasstes `{token, signature}`-Paar später in einer nicht zusammenhängenden Verbindung wiederverwendet wird, stoppt jedoch nicht den oben beschriebenen Live-Relay-Angriff: Ein MITM, das ein tatsächlicher Endpunkt seiner eigenen Verbindung zum Server ist, kann seine eigene gültige Signatur über dieselbe `token` berechnen.
Um dies zu verhindern, muss mit einem persistenten Identitätsschlüssel signiert werden, wie oben beschrieben, anstelle eines einfachen HMAC, das nur durch das exportierte Material der Verbindung gesichert ist.

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
