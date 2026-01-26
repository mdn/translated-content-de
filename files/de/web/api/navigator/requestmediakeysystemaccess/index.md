---
title: "Navigator: requestMediaKeySystemAccess() Methode"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`** Methode der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle gibt ein {{jsxref('Promise')}} zurück, welches ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt liefert. Dieses kann verwendet werden, um auf ein bestimmtes Medien-Schlüsselsystem zuzugreifen, was wiederum benutzt werden kann, um Schlüssel zur Entschlüsselung eines Medienstreams zu erstellen.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschütztes Video ins Web bringt.

Diese Methode kann sichtbare Effekte für den Nutzer haben, wie zum Beispiel das Erfragen von Erlaubnis um auf eine oder mehrere Systemressourcen zuzugreifen. Berücksichtigen Sie dies, wenn Sie entscheiden, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; Sie möchten nicht, dass diese Anfragen zu unpassenden Zeiten stattfinden. Als allgemeine Regel sollte diese Funktion nur aufgerufen werden, wenn es Zeit ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt durch Aufruf der erzeugten [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objektmethode [`createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) zu erstellen und zu verwenden.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Schlüsselsystem identifiziert. Zum Beispiel `com.example.some-system` oder `org.w3.clearkey`.
- `supportedConfigurations`
  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, die dem Objekt entsprechen, das durch [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegeben wird. Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` können leer sein, jedoch nicht beide!
    - `label` {{optional_inline}}
      - : Ein optionales Label für die Konfiguration, das standardmäßig auf `""` gesetzt ist. Dieses Label bleibt für Konfigurationen erhalten, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden.
    - `initDataTypes`
      - : Ein Array von Strings, die die Datentypnamen für die unterstützten Initialisierungsdatenformate angeben (standardmäßig ein leeres Array).
        Diese Namen sind wie `"cenc"`, `"keyids"` und `"webm"`, die im [Encrypted Media Extensions Initialization Data Format Registry](https://w3c.github.io/encrypted-media/format-registry/initdata/) definiert sind.
    - `audioCapabilities`
      - : Ein Array von unterstützten Audiofähigkeiten. Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiofähigkeiten.

        Jedes Objekt im Array hat die folgenden Eigenschaften:
        - `contentType`
          - : Ein String, der den Medien-MIME-Typ der Medienressource angibt, wie `"audio/mp4;codecs=\"mp4a.40.2\"`. Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter beinhaltet, wie `codecs`, diese ebenfalls einbezogen werden müssen.
        - `encryptionScheme`
          - : Das mit dem Inhaltstyp assoziierte Verschlüsselungsschema, wie `cenc`, `cbcs`, `cbcs-1-9`. Dieser Wert sollte von einer Anwendung gesetzt werden (er ist standardmäßig `null`, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden kann).
        - `robustness`
          - : Das Robustheitsniveau, das mit dem Inhaltstyp assoziiert ist. Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

    - `videoCapabilities`
      - : Ein Array von unterstützten Videofähigkeiten. Die Objekte im Array haben die gleiche Form wie die in `audioCapabilities`.

    - `distinctiveIdentifier`
      - : Ein String, der angibt, ob die Implementierung "unverwechselbare Identifikatoren" (oder unverwechselbare dauerhafte Identifikatoren) für Vorgänge verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind. Die erlaubten Werte sind:
        - `required`
          - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist die Standardeinstellung.
        - `not-allowed`
          - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

    - `persistentState`
      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder einen anderen Zustand zu speichern. Die Werte sind dieselben wie für `distinctiveIdentifier` und haben die gleiche Bedeutung: `required`, `optional` (Standard), `not-allowed`. Nur "temporäre" Sitzungen dürfen erstellt werden, wenn der dauerhafte Zustand nicht erlaubt ist.

    - `sessionTypes`
      - : Ein Array von Strings, das die Sitzungstypen angibt, die unterstützt werden müssen. Erlaubte Werte sind:
        - `temporary`
          - : Eine Sitzung, für die die Lizenz, die Schlüssel und Aufzeichnungen der oder Daten über die Sitzung nicht gespeichert werden. Die Anwendung muss eine solche Speicherung nicht verwalten. Implementierungen müssen diese Option unterstützen, und es ist die Standardeinstellung.
        - `persistent-license`
          - : Eine Sitzung, für die die Lizenz (und möglicherweise andere datenbezogene Informationen zur Sitzung) gespeichert werden. Ein Nachweis über die Lizenz und die damit verbundenen Schlüssel bleibt bestehen, auch wenn die Lizenz zerstört wird, was bestätigt, dass die Lizenz und die in ihr enthaltenen Schlüssel vom Client nicht mehr verwendbar sind.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt erfüllt wird, das die durch `keySystem` und `supportedConfigurations` beschriebene Medien-Schlüsselsystemkonfiguration darstellt.

### Ausnahmen

Im Falle eines Fehlers wird das zurückgegebene {{jsxref('Promise')}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, deren Name angibt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Entweder wird das angegebene `keySystem` von der Plattform oder dem Browser nicht unterstützt, oder keine der durch `supportedConfigurations` angegebenen Konfigurationen kann erfüllt werden (wenn zum Beispiel keine der in `contentType` angegebenen `codecs` verfügbar sind).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media) blockiert.
- {{jsxref("TypeError")}}
  - : Entweder ist `keySystem` ein leerer String oder das `supportedConfigurations` Array ist leer.

## Beispiele

Das folgende Beispiel zeigt, wie Sie `requestMediaKeySystemAccess()` verwenden könnten, indem ein Schlüsselsystem und eine Konfiguration spezifiziert werden.

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
