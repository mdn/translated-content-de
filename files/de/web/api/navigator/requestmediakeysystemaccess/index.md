---
title: "Navigator: requestMediaKeySystemAccess() Methode"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`** Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt liefert, das verwendet werden kann, um auf ein bestimmtes Medien-Schlüsselsystem zuzugreifen, welches wiederum verwendet werden kann, um Schlüssel zur Entschlüsselung eines Medienstreams zu erstellen.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos ins Web bringt.

Diese Methode kann sichtbare Auswirkungen für den Benutzer haben, wie z.B. das Erbitten einer Erlaubnis, um auf ein oder mehrere Systemressourcen zuzugreifen. Berücksichtigen Sie dies, wenn Sie entscheiden, wann `requestMediaKeySystemAccess()` aufgerufen wird; Sie möchten nicht, dass diese Anfragen zu ungelegenen Zeiten erfolgen. Im Allgemeinen sollte diese Funktion nur aufgerufen werden, wenn es Zeit ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zu erstellen und zu verwenden, indem die Methode [`createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) des zurückgegebenen [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekts aufgerufen wird.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Schlüsselsystem identifiziert.
    Zum Beispiel `com.example.some-system` oder `org.w3.clearkey`.
- `supportedConfigurations`

  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, die dem Objekt entsprechen, welches von [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegeben wird.
    Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` darf leer sein, aber nicht beide!

    - `label` {{optional_inline}}
      - : Ein optionales Label für die Konfiguration, das standardmäßig `""` ist.
        Dieses Label wird für Konfigurationen, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden, erhalten.
    - `initDataTypes`
      - : Ein Array von Strings, die die Datentyp-Namen für die unterstützten Initialisierungsdatenformate angeben (standardmäßig ein leeres Array).
        Diese Namen sind Namen wie `"cenc"`, `"keyids"` und `"webm"`, die im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert sind.
    - `audioCapabilities`

      - : Ein Array von unterstützten Audio-Fähigkeiten.
        Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audio-Fähigkeiten.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `contentType`
          - : Ein String, der den Medien-MIME-Typ der Medienressource angibt, wie zum Beispiel `"audio/mp4;codecs=\"mp4a.40.2\"`.
            Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter wie `codecs` enthält, diese ebenfalls enthalten sein müssen.
        - `encryptionScheme`
          - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
            Dieser Wert sollte von einer Anwendung festgelegt werden (er ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
        - `robustness`
          - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
            Der leere String bedeutet, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

    - `videoCapabilities`

      - : Ein Array von unterstützten Video-Fähigkeiten.
        Die Objekte im Array haben die gleiche Form wie die in `audioCapabilities`.

    - `distinctiveIdentifier`

      - : Ein String, der angibt, ob die Implementierung "unverwechselbare Identifikatoren" (oder unverwechselbare permanente Identifikatoren) für irgendwelche Operationen verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind.
        Die zulässigen Werte sind:

        - `required`
          - : Das zurückgegebene Objekt muss dieses Feature unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann dieses Feature unterstützen.
            Dies ist der Standardwert.
        - `not-allowed`
          - : Das zurückgegebene Objekt darf dieses Feature nicht unterstützen oder verwenden.

    - `persistentState`

      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder irgendeine andere Art von Zustand zu speichern.
        Die Werte sind die gleichen wie für `distinctiveIdentifier` und haben die gleiche Bedeutung: `required`, `optional` (Standard), `not-allowed`.
        Nur "temporäre" Sitzungen können erstellt werden, wenn ein dauerhafter Zustand nicht erlaubt ist.

    - `sessionTypes`

      - : Ein Array von Strings, die die Sitzungstypen angeben, die unterstützt werden müssen.
        Erlaubte Werte sind:

        - `temporary`
          - : Eine Sitzung, für die die Lizenz, Schlüssel und Aufzeichnungen oder Daten, die sich auf die Sitzung beziehen, nicht gespeichert werden.
            Die Anwendung muss einen solchen Speicher nicht verwalten.
            Implementierungen müssen diese Option unterstützen, und es ist der Standardwert.
        - `persistent-license`
          - : Eine Sitzung, für die die Lizenz (und möglicherweise andere Daten, die sich auf die Sitzung beziehen) gespeichert werden.
            Eine Aufzeichnung der Lizenz und der zugehörigen Schlüssel bleibt bestehen, auch wenn die Lizenz zerstört wird, was nachweist, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr genutzt werden können.

### Rückgabewert

Ein {{jsxref('Promise')}}, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt liefert, das die Medien-Schlüsselsystemkonfiguration beschreibt, die durch `keySystem` und `supportedConfigurations` definiert ist.

### Ausnahmen

Im Fehlerfall wird das zurückgegebene {{jsxref('Promise')}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, deren Name angibt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Entweder wird das angegebene `keySystem` von der Plattform oder dem Browser nicht unterstützt oder keine der von `supportedConfigurations` angegebenen Konfigurationen kann erfüllt werden (wenn z.B. keiner der in `contentType` angegebenen `codecs` verfügbar ist).
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

- [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
