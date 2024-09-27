---
title: "Navigator: Methode requestMediaKeySystemAccess()"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt liefert. Dieses Objekt kann verwendet werden, um auf ein bestimmtes Medienschlüsselsystem zuzugreifen, welches wiederum verwendet werden kann, um Schlüssel zur Entschlüsselung eines Medienstroms zu erstellen.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos im Web bietet.

Diese Methode kann benutzer*sichtbare* Effekte haben, wie das Anfordern von Berechtigungen zum Zugriff auf eine oder mehrere Systemressourcen. Beachten Sie dies, wenn Sie entscheiden, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; solche Anfragen sollten nicht zu unangenehmen Zeiten erfolgen. Allgemein sollte diese Funktion nur aufgerufen werden, wenn es kurz davor ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zu erstellen und zu verwenden, indem die Methode [`createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) des zurückgegebenen [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekts aufgerufen wird.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Schlüsselsystem identifiziert. Beispielsweise `com.example.somesystem` oder `org.w3.clearkey`.
- `supportedConfigurations`

  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, die dem Objekt entsprechen, das von [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegeben wird.
    Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` können leer sein, aber nicht beide!

    - `label` {{optional_inline}}
      - : Ein optionales Label für die Konfiguration, welches standardmäßig `""` ist.
        Dieses Label wird für Konfigurationen beibehalten, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden.
    - `initDataTypes`
      - : Ein Array von Strings, die die Datentypnamen für die unterstützten Initialisierungsdatenformate angeben (standardmäßig ein leeres Array).
        Diese Namen sind Namen wie `"cenc"`, `"keyids"` und `"webm"`, die im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert sind.
    - `audioCapabilities`

      - : Ein Array der unterstützten Audiofähigkeiten.
        Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiofähigkeiten.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `contentType`
          - : Ein String, der den Medien-MIME-Typ der Medienressource angibt, wie zum Beispiel `"audio/mp4;codecs=\"mp4a.40.2\"`.
            Beachten Sie, dass der leere String ungültig ist, und dass, wenn die MIME-Typ-Definition Parameter wie `codecs` enthält, diese ebenfalls eingeschlossen sein müssen.
        - `encryptionScheme`
          - : Das mit dem Inhaltstyp verbundene Verschlüsselungsschema, wie `cenc`, `cbcs`, `cbcs-1-9`.
            Dieser Wert sollte von einer Anwendung gesetzt werden (es ist standardmäßig `null`, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden könnte).
        - `robustness`
          - : Die mit dem Inhaltstyp verbundene Robustheitsstufe.
            Der leere String zeigt an, dass jede Möglichkeit, den Inhaltstyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

    - `videoCapabilities`

      - : Ein Array der unterstützten Videofähigkeiten.
        Die Objekte im Array haben die gleiche Form wie diejenigen in `audioCapabilities`.

    - `distinctiveIdentifier`

      - : Ein String, der angibt, ob die Implementierung "distinctive identifiers" (oder distinctive permanente Identifikatoren) für Vorgänge im Zusammenhang mit Objekten verwenden darf, die von dieser Konfiguration erstellt wurden.
        Die erlaubten Werte sind:

        - `required`
          - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist der Standardwert.
        - `not-allowed`
          - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

    - `persistentState`

      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder andere Arten von Zuständen zu persistieren.
        Die Werte sind dieselben wie für `distinctiveIdentifier` und haben dieselbe Bedeutung: `required`, `optional` (Standard), `not-allowed`.
        Es dürfen nur "temporäre" Sitzungen erstellt werden, wenn der persistente Zustand nicht erlaubt ist.

    - `sessionTypes`

      - : Ein Array von Strings, das die Sitzungsarten angibt, die unterstützt werden müssen. Zulässige Werte sind:

        - `temporary`
          - : Eine Sitzung, für die die Lizenz, der/die Schlüssel und Aufzeichnungen oder Daten im Zusammenhang mit der Sitzung nicht gespeichert werden.
            Die Anwendung muss solche Speicherungen nicht verwalten.
            Implementierungen müssen diese Option unterstützen, und sie ist der Standard.
        - `persistent-license`
          - : Eine Sitzung, für die die Lizenz (und möglicherweise andere Daten im Zusammenhang mit der Sitzung) gespeichert werden.
            Ein Datensatz der Lizenz und der zugehörigen Schlüssel bleibt bestehen, auch wenn die Lizenz zerstört wird, was eine Bestätigung bietet, dass die Lizenz und der/die darin enthaltenen Schlüssel vom Client nicht mehr verwendet werden können.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt erfüllt wird, das die Medienstlüsselkonfiguration darstellt, die durch `keySystem` und `supportedConfigurations` beschrieben wird.

### Ausnahmen

Im Falle eines Fehlers wird das zurückgegebene {{jsxref('Promise')}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, dessen Name angibt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Entweder wird das angegebene `keySystem` nicht durch die Plattform oder den Browser unterstützt, oder keine der durch `supportedConfigurations` angegebenen Konfigurationen kann erfüllt werden (wenn z. B. keiner der in `contentType` angegebenen `codecs` verfügbar ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Headers/Permissions-Policy/encrypted-media) blockiert.
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

- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Encrypted_Media_Extensions_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
