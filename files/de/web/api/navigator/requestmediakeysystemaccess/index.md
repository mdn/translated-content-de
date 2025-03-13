---
title: "Navigator: Methode requestMediaKeySystemAccess()"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt liefert, das verwendet werden kann, um auf ein bestimmtes Medien-Schlüsselsystem zuzugreifen, welches wiederum zum Erstellen von Schlüsseln zur Entschlüsselung eines Medienstroms verwendet werden kann.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos für das Web bietet.

Diese Methode kann benutzerseitige Effekte haben, z. B. die Anfrage nach Erlaubnis, um auf eine oder mehrere Systemressourcen zuzugreifen. Beachten Sie dies, wenn Sie entscheiden, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; Sie möchten nicht, dass diese Anfragen zu unangenehmen Zeiten geschehen. Als allgemeine Regel sollte diese Funktion nur aufgerufen werden, wenn es an der Zeit ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zu erstellen und zu verwenden, indem die Methode [`createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) des zurückgegebenen [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekts aufgerufen wird.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Schlüsselsystem identifiziert.
    Zum Beispiel `com.example.some-system` oder `org.w3.clearkey`.
- `supportedConfigurations`

  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, die dem Objekt entsprechen, das von [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegeben wird.
    Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` dürfen leer sein, aber nicht beide!

    - `label` {{optional_inline}}
      - : Ein optionales Label für die Konfiguration, das standardmäßig auf `""` gesetzt ist.
        Dieses Label wird für Konfigurationen beibehalten, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden.
    - `initDataTypes`
      - : Ein Array von Strings, die die Datentypnamen für die unterstützten Initialisierungsdatenformate anzeigen (standardmäßig ein leeres Array).
        Diese Namen sind solche wie `"cenc"`, `"keyids"` und `"webm"`, die im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert sind.
    - `audioCapabilities`

      - : Ein Array von unterstützten Audiofunktionen.
        Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiofunktionen.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `contentType`
          - : Ein String, der den Media-MIME-Typ der Medienressource angibt, wie `"audio/mp4;codecs=\"mp4a.40.2\"`.
            Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter wie `codecs` enthält, diese ebenfalls eingeschlossen werden müssen.
        - `encryptionScheme`
          - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
            Dieser Wert sollte von einer Anwendung festgelegt werden (er ist standardmäßig auf `null` gesetzt, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
        - `robustness`
          - : Das Robustheitslevel, das mit dem Inhaltstyp verbunden ist.
            Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Decodierung des Inhaltstyps akzeptabel ist.

    - `videoCapabilities`

      - : Ein Array von unterstützten Videofunktionen.
        Die Objekte im Array haben die gleiche Form wie die in `audioCapabilities`.

    - `distinctiveIdentifier`

      - : Ein String, der angibt, ob die Implementierung "unverwechselbare Kennungen" (oder unverwechselbare permanente Kennungen) für Vorgänge im Zusammenhang mit einem aus dieser Konfiguration erstellten Objekt verwenden darf.
        Die zulässigen Werte sind:

        - `required`
          - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
            Dies ist der Standard
        - `not-allowed`
          - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

    - `persistentState`

      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder jede andere Art von Status zu speichern.
        Die Werte sind die gleichen wie für `distinctiveIdentifier` und haben dieselbe Bedeutung: `required`, `optional` (Standard), `not-allowed`.
        Nur "temporäre" Sitzungen dürfen erstellt werden, wenn permanenter Status nicht erlaubt ist.

    - `sessionTypes`

      - : Ein Array von Strings, die die Sitzungstypen angeben, die unterstützt werden müssen.
        Erlaubte Werte sind:

        - `temporary`
          - : Eine Sitzung, für die die Lizenz, der/die Schlüssel und Aufzeichnungen oder Daten im Zusammenhang mit der Sitzung nicht gespeichert werden.
            Die Anwendung muss sich um eine solche Speicherung nicht kümmern.
            Implementierungen müssen diese Option unterstützen, und es ist die Standardeinstellung.
        - `persistent-license`
          - : Eine Sitzung, für die die Lizenz (und möglicherweise andere mit der Sitzung verbundene Daten) gespeichert werden.
            Ein Protokoll der Lizenz und der zugehörigen Schlüssel bleibt auch dann bestehen, wenn die Lizenz zerstört wird, was einen Nachweis liefert, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr verwendbar sind.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt erfüllt wird, das die Medien-Schlüsselsystemkonfiguration darstellt, die durch `keySystem` und `supportedConfigurations` beschrieben wird.

### Ausnahmen

Im Fehlerfall wird das zurückgegebene {{jsxref('Promise')}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, dessen Name angibt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Entweder wird das angegebene `keySystem` von der Plattform oder dem Browser nicht unterstützt, oder keine der durch `supportedConfigurations` angegebenen Konfigurationen kann erfüllt werden (wenn beispielsweise keiner der in `contentType` angegebenen `codecs` verfügbar ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media) blockiert.
- {{jsxref("TypeError")}}
  - : Entweder ist `keySystem` ein leerer String oder das `supportedConfigurations`-Array ist leer.

## Beispiele

Das folgende Beispiel zeigt, wie Sie `requestMediaKeySystemAccess()` verwenden könnten, indem ein Schlüsselsystem und eine Konfiguration angegeben werden.

```js
const clearKeyOptions = [
  {
    initDataTypes: ["keyids", "webm"],
    audioCapabilities: [
      { contentType: 'audio/webm; codecs="opus"' },
      { contentType: 'audio/webm; codecs="vorbis"' },
    ],
    videoCapabilities: [
      { contentType: 'video/webm; codecs="vp9"' },
      { contentType: 'video/webm; codecs="vp8"' },
    ],
  },
];

navigator
  .requestMediaKeySystemAccess("org.w3.clearkey", clearKeyOptions)
  .then((keySystemAccess) => {
    /* use the access to get create keys */
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
