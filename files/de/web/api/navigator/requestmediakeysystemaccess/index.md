---
title: "Navigator: requestMediaKeySystemAccess() Methode"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt liefert. Dieses kann verwendet werden, um auf ein bestimmtes Media-Key-System zuzugreifen, welches wiederum verwendet werden kann, um Schlüssel zum Entschlüsseln eines Medienstreams zu erstellen.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos ins Web bringt.

Diese Methode kann benutzerseitig sichtbare Effekte haben, wie zum Beispiel das Anfordern von Berechtigungen zum Zugriff auf ein oder mehrere Systemressourcen. Berücksichtigen Sie dies bei der Entscheidung, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; solche Anfragen sollten nicht zu unangenehmen Zeiten erfolgen. Allgemein sollte diese Funktion nur aufgerufen werden, wenn es Zeit ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen und zu verwenden, indem die `createMediaKeys()`-Methode des zurückgegebenen [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekts aufgerufen wird.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Key-System identifiziert, z.B. `com.example.some-system` oder `org.w3.clearkey`.
- `supportedConfigurations`
  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, die dem Objekt entsprechen, welches von [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegeben wird. Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` kann leer sein, aber nicht beide!
    - `label` {{optional_inline}}
      - : Ein optionaler Bezeichner für die Konfiguration, der standardmäßig `""` ist. Dieser Bezeichner wird für Konfigurationen beibehalten, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden.
    - `initDataTypes`
      - : Ein Array von Strings, die die Datentypnamen für die unterstützten Initialisierungsdatenformate angeben (standardmäßig ein leeres Array). Diese Namen sind ähnlich `"cenc"`, `"keyids"` und `"webm"`, die im [Encrypted Media Extensions Initialisierungsdatenformat-Register](https://w3c.github.io/encrypted-media/format-registry/initdata/) definiert sind.
    - `audioCapabilities`
      - : Ein Array unterstützter Audiofähigkeiten. Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiofähigkeiten.

        Jedes Objekt im Array hat folgende Eigenschaften:
        - `contentType`
          - : Ein String, der den Medien-MIME-Typ der Medienressource angibt, wie `"audio/mp4;codecs=\"mp4a.40.2\"`. Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter, wie `codecs`, enthält, diese auch enthalten sein müssen.
        - `encryptionScheme`
          - : Das Verschlüsselungsschema, das mit dem Inhaltstyp assoziiert ist, wie `cenc`, `cbcs`, `cbcs-1-9`. Dieser Wert sollte von einer Anwendung gesetzt werden (standardmäßig `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden darf).
        - `robustness`
          - : Die Robustheitsstufe, die mit dem Inhaltstyp verbunden ist. Der leere String zeigt an, dass jegliche Fähigkeit, den Inhaltstyp zu entschlüsseln und zu decodieren, akzeptabel ist.

    - `videoCapabilities`
      - : Ein Array unterstützter Videofähigkeiten. Die Objekte im Array haben dieselbe Form wie die in `audioCapabilities`.

    - `distinctiveIdentifier`
      - : Ein String, der angibt, ob die Implementierung "eindeutige Identifikatoren" (oder eindeutige permanente Identifikatoren) für Operationen verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind. Die zulässigen Werte sind:
        - `required`
          - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist die Standardeinstellung.
        - `not-allowed`
          - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

    - `persistentState`
      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder andere Zustandsarten dauerhaft zu speichern. Die Werte sind die gleichen wie für `distinctiveIdentifier` und haben die gleiche Bedeutung: `required`, `optional` (Standard), `not-allowed`. Nur "temporäre" Sitzungen dürfen erstellt werden, wenn der dauerhafte Zustand nicht erlaubt ist.

    - `sessionTypes`
      - : Ein String-Array, das die Sitzungstypen angibt, die unterstützt werden müssen. Zulässige Werte sind:
        - `temporary`
          - : Eine Sitzung, für die die Lizenz, Schlüssel und Aufzeichnungen oder Daten, die mit der Sitzung verbunden sind, nicht dauerhaft gespeichert werden. Die Anwendung muss eine solche Speicherung nicht verwalten. Implementierungen müssen diese Option unterstützen, und dies ist die Standardeinstellung.
        - `persistent-license`
          - : Eine Sitzung, für die die Lizenz (und möglicherweise andere Daten, die mit der Sitzung verbunden sind) dauerhaft gespeichert werden. Ein Nachweis der Lizenz und der zugehörigen Schlüssel bleibt auch dann bestehen, wenn die Lizenz zerstört wird, was bescheinigt, dass die Lizenz und die Schlüssel, die sie enthält, nicht mehr vom Client verwendet werden können.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt erfüllt wird, das die im `keySystem` und `supportedConfigurations` beschriebene Media-Key-Systemkonfiguration darstellt.

### Ausnahmen

Im Falle eines Fehlers wird das zurückgegebene {{jsxref('Promise')}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, dessen Name angibt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Entweder wird das angegebene `keySystem` von der Plattform oder dem Browser nicht unterstützt oder keine der von `supportedConfigurations` angegebenen Konfigurationen kann erfüllt werden (wenn beispielsweise keiner der `codecs`, die in `contentType` spezifiziert sind, verfügbar ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media) blockiert.
- {{jsxref("TypeError")}}
  - : Entweder ist `keySystem` ein leerer String oder das `supportedConfigurations` Array ist leer.

## Beispiele

Das folgende Beispiel zeigt, wie Sie `requestMediaKeySystemAccess()` verwenden könnten, indem Sie ein Key-System und eine Konfiguration angeben.

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
