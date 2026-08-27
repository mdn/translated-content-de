---
title: "Navigator: requestMediaKeySystemAccess() Methode"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt liefert, das verwendet werden kann, um auf ein bestimmtes Medienschlüsselsystem zuzugreifen, welches wiederum verwendet werden kann, um Schlüssel zur Entschlüsselung eines Medienstroms zu erstellen.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos im Web bietet.

Diese Methode kann sichtbare Effekte für den Benutzer haben, wie die Anfrage um Erlaubnis, auf eines oder mehrere Systemressourcen zuzugreifen. Berücksichtigen Sie dies bei der Entscheidung, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; Sie möchten nicht, dass diese Anfragen zu ungünstigen Zeiten erfolgen. Als allgemeine Regel sollte diese Funktion nur aufgerufen werden, wenn es an der Zeit ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen und zu verwenden, indem die Methode [`createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) des zurückgegebenen [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekts aufgerufen wird.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Schlüsselsystem identifiziert.
    Zum Beispiel `com.example.some-system` oder `org.w3.clearkey`.
- `supportedConfigurations`
  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, das dem Objekt entspricht, das von [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegeben wird.
    Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` können leer sein, aber nicht beide!
    - `label` {{optional_inline}}
      - : Ein optionales Label für die Konfiguration, das standardmäßig `""` ist.
        Dieses Label bleibt für Konfigurationen erhalten, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden.
    - `initDataTypes`
      - : Ein Array von Strings, die die Datentypnamen der unterstützten Initialisierungsdatenformate angeben (standardmäßig ein leeres Array).
        Diese Namen sind Namen wie `"cenc"`, `"keyids"` und `"webm"`, die im [Encrypted Media Extensions Initialization Data Format Registry](https://w3c.github.io/encrypted-media/format-registry/initdata/) definiert sind.
    - `audioCapabilities`
      - : Ein Array von unterstützten Audiofähigkeiten.
        Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiofähigkeiten.

        Jedes Objekt im Array hat die folgenden Eigenschaften:
        - `contentType`
          - : Ein String, der den Media MIME-Typ der Medienressource angibt, wie `"audio/mp4;codecs=\"mp4a.40.2\"`.
            Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter enthält, wie `codecs`, diese ebenfalls enthalten sein müssen.
        - `encryptionScheme`
          - : Das der Inhaltstyp zugeordnete Verschlüsselungsschema, wie `cenc`, `cbcs`, `cbcs-1-9`.
            Dieser Wert sollte von einer Anwendung gesetzt werden (er standardmäßig auf `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
        - `robustness`
          - : Das mit dem Inhaltstyp assoziierte Robustheitsniveau.
            Der leere String zeigt an, dass jede Fähigkeit, den Inhaltstyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

    - `videoCapabilities`
      - : Ein Array von unterstützten Videofähigkeiten.
        Die Objekte im Array haben die gleiche Form wie die in `audioCapabilities`.

    - `distinctiveIdentifier`
      - : Ein String, der angibt, ob die Implementierung "unterscheidungskräftige Kennungen" (oder unterscheidungskräftige permanente Kennungen) für irgendeine Operation verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden ist.
        Die erlaubten Werte sind:
        - `required`
          - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
            Dies ist der Standardwert.
        - `not-allowed`
          - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

    - `persistentState`
      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder irgendeine andere Art von Zustand zu persistieren.
        Die Werte sind dieselben wie bei `distinctiveIdentifier` und haben die gleiche Bedeutung: `required`, `optional` (Standard), `not-allowed`.
        Es dürfen nur "temporäre" Sitzungen erstellt werden, wenn persistenter Zustand nicht erlaubt ist.

    - `sessionTypes`
      - : Ein Array von Strings, die die Sitzungstypen angeben, die unterstützt werden müssen.
        Zulässige Werte sind:
        - `temporary`
          - : Eine Sitzung, bei der die Lizenz, der/die Schlüssel und Aufzeichnungen oder Daten, die sich auf die Sitzung beziehen, nicht gespeichert werden.
            Die Anwendung muss eine solche Speicherung nicht verwalten.
            Implementierungen müssen diese Option unterstützen, und sie ist der Standard.
        - `persistent-license`
          - : Eine Sitzung, bei der die Lizenz (und möglicherweise andere Daten, die sich auf die Sitzung beziehen) gespeichert werden.
            Ein Aufzeichnungsbeweis der Lizenz und zugehöriger Schlüssel bleibt bestehen, auch wenn die Lizenz zerstört wird, was eine Bescheinigung gibt, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr verwendbar sind.

### Rückgabewert

Ein {{jsxref('Promise')}} wird bereitgestellt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt repräsentiert, das die Medien-Schlüsselsystemkonfiguration darstellt, die durch `keySystem` und `supportedConfigurations` beschrieben wird.

### Ausnahmen

Im Falle eines Fehlers wird das zurückgegebene {{jsxref('Promise')}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, dessen Name anzeigt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Entweder wird das angegebene `keySystem` nicht von der Plattform oder dem Browser unterstützt, oder keine der Konfigurationen, die von `supportedConfigurations` angegeben werden, können erfüllt werden (wenn zum Beispiel keiner der in `contentType` angegebenen `codecs` verfügbar ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media) blockiert.
- {{jsxref("TypeError")}}
  - : Entweder ist `keySystem` ein leerer String oder das `supportedConfigurations` Array ist leer.

## Beispiele

Das untenstehende Beispiel zeigt, wie Sie `requestMediaKeySystemAccess()` verwenden könnten, indem ein Schlüsselsystem und eine Konfiguration angegeben werden.

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
