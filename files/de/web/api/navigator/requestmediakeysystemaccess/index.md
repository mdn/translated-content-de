---
title: "Navigator: requestMediaKeySystemAccess() Methode"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt liefert. Dieses kann verwendet werden, um auf ein bestimmtes Mediensystem zuzugreifen, das wiederum zur Erstellung von Schlüsseln zur Entschlüsselung eines Medienstreams verwendet werden kann.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos ins Web bringt.

Diese Methode kann nutzerseitige Auswirkungen haben, wie das Anfordern von Berechtigungen für den Zugriff auf Systemressourcen. Berücksichtigen Sie dies bei der Entscheidung, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; diese Anfragen sollten nicht zu unpassenden Zeiten erfolgen. Im Allgemeinen sollte diese Funktion nur dann aufgerufen werden, wenn es an der Zeit ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zu erstellen und zu verwenden, indem die Methode [`createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) des zurückgegebenen [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekts aufgerufen wird.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Schlüsselsystem identifiziert. Zum Beispiel `com.example.some-system` oder `org.w3.clearkey`.
- `supportedConfigurations`

  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, das dem von [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegebenen Objekt entspricht.
    Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` können leer sein, aber nicht beide!

    - `label` {{optional_inline}}
      - : Ein optionales Label für die Konfiguration, das standardmäßig `""` ist.
        Dieses Label wird für Konfigurationen beibehalten, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden.
    - `initDataTypes`
      - : Ein Array von Strings, das die Datentypnamen für die unterstützten Initialisierungsdatenformate anzeigt (standardmäßig ein leeres Array).
        Diese Namen sind wie `"cenc"`, `"keyids"` und `"webm"` definiert im [Encrypted Media Extensions Initialization Data Format Registry](https://w3c.github.io/encrypted-media/format-registry/initdata/).
    - `audioCapabilities`

      - : Ein Array unterstützter Audiofähigkeiten.
        Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiofähigkeiten.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `contentType`
          - : Ein String, der den Medien-MIME-Typ der Medienressource angibt, wie `"audio/mp4;codecs=\"mp4a.40.2\"`.
            Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter wie `codecs` enthält, diese ebenfalls enthalten sein müssen.
        - `encryptionScheme`
          - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
            Dieser Wert sollte von einer Anwendung gesetzt werden (standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
        - `robustness`
          - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
            Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

    - `videoCapabilities`

      - : Ein Array unterstützter Videofähigkeiten.
        Die Objekte im Array haben die gleiche Form wie die in `audioCapabilities`.

    - `distinctiveIdentifier`

      - : Ein String, der angibt, ob die Implementierung "unverwechselbare Identifikatoren" (oder unverwechselbare permanente Identifikatoren) für Operationen verwenden darf, die mit einem von dieser Konfiguration erstellten Objekt verbunden sind.
        Die zulässigen Werte sind:

        - `required`
          - : Das zurückgegebene Objekt muss dieses Feature unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann dieses Feature unterstützen.
            Dies ist die Standardeinstellung.
        - `not-allowed`
          - : Das zurückgegebene Objekt darf dieses Feature nicht unterstützen oder verwenden.

    - `persistentState`

      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder einen anderen Typ von Status zu speichern.
        Die Werte sind die gleichen wie für `distinctiveIdentifier` und haben die gleiche Bedeutung: `required`, `optional` (Standard), `not-allowed`.
        Nur "vorübergehende" Sitzungen dürfen erstellt werden, wenn persistenter Status nicht erlaubt ist.

    - `sessionTypes`

      - : Ein Array von Strings, das die Sitzungsarten angibt, die unterstützt werden müssen.
        Zulässige Werte umfassen:

        - `temporary`
          - : Eine Sitzung, für die die Lizenz, der/die Schlüssel und Aufzeichnungen oder Daten, die sich auf die Sitzung beziehen, nicht gespeichert werden.
            Die Anwendung muss solchen Speicher nicht verwalten.
            Implementierungen müssen diese Option unterstützen, und sie ist der Standard.
        - `persistent-license`
          - : Eine Sitzung, für die die Lizenz (und möglicherweise andere mit der Sitzung verbundenen Daten) gespeichert werden.
            Ein Nachweis über die Lizenz und zugehörige Schlüssel bleibt erhalten, auch wenn die Lizenz zerstört wird, was eine Bestätigung liefert, dass die Lizenz und die Schlüssel, die sie enthält, vom Client nicht mehr verwendet werden können.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt erfüllt wird, das die Mediensystemkonfiguration darstellt, die durch `keySystem` und `supportedConfigurations` beschrieben wird.

### Ausnahmen

Im Falle eines Fehlers wird das zurückgegebene {{jsxref('Promise')}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, dessen Name angibt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Entweder wird das angegebene `keySystem` von der Plattform oder dem Browser nicht unterstützt, oder keine der Konfigurationen, die von `supportedConfigurations` angegeben werden, kann erfüllt werden (wenn zum Beispiel keiner der in `contentType` angegebenen `codecs` verfügbar ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieses Features wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media) blockiert.
- {{jsxref("TypeError")}}
  - : Entweder ist `keySystem` ein leerer String oder das `supportedConfigurations`-Array ist leer.

## Beispiele

Das folgende Beispiel zeigt, wie Sie `requestMediaKeySystemAccess()` verwenden könnten, indem Sie ein Schlüsselsystem und eine Konfiguration angeben.

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
