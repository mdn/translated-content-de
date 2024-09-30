---
title: "Navigator: requestMediaKeySystemAccess() Methode"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces gibt ein {{jsxref('Promise')}} zurück, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt liefert, mit dem auf ein bestimmtes Medienschlüsselsystem zugegriffen werden kann, das wiederum verwendet werden kann, um Schlüssel zur Entschlüsselung eines Medienstreams zu erstellen.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos auf das Web bringt.

Diese Methode kann benutzerseitige Effekte haben, wie das Anfordern von Berechtigungen für den Zugriff auf eine oder mehrere Systemressourcen. Denken Sie daran, dies zu berücksichtigen, wenn Sie entscheiden, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; Sie wollen nicht, dass diese Anforderungen zu ungünstigen Zeiten auftreten. Grundsätzlich sollte diese Funktion nur aufgerufen werden, wenn es an der Zeit ist, ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen und zu verwenden, indem die Methode [`createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) des zurückgegebenen [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekts aufgerufen wird.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  -: Ein String, der das Schlüsselsystem identifiziert. Zum Beispiel `com.example.somesystem` oder `org.w3.clearkey`.
- `supportedConfigurations`
  -: Ein nicht-leeres {{jsxref('Array')}} von Objekten, die dem von [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) zurückgegebenen Objekt entsprechen. Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

  Jedes Objekt kann die folgenden Eigenschaften haben:

  > [!NOTE]
  > Entweder `videoCapabilities` oder `audioCapabilities` dürfen leer sein, aber nicht beide!

  - `label` {{optional_inline}}
    -: Eine optionale Bezeichnung für die Konfiguration, die standardmäßig `""` ist. Diese Bezeichnung bleibt für Konfigurationen erhalten, die mit [`MediaKeySystemAccess.getConfiguration`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration) abgerufen werden.
  - `initDataTypes`
    -: Ein Array von Strings, die die Datentypnamen für die unterstützten Initialisierungsdatenformate angeben (standardmäßig ein leeres Array). Diese Namen sind Namen wie `"cenc"`, `"keyids"` und `"webm"`, die im [Encrypted Media Extensions Initialisierungsdatenformat-Register](https://www.w3.org/TR/eme-initdata-registry/) definiert sind.
  - `audioCapabilities`
    -: Ein Array unterstützter Audiofähigkeiten. Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiofähigkeiten.

      Jedes Objekt im Array hat die folgenden Eigenschaften:

    - `contentType`
        -: Ein String, der den Medien-MIME-Typ der Medienressource angibt, wie zum Beispiel `"audio/mp4;codecs=\"mp4a.40.2\"`. Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter wie `codecs` enthält, diese ebenfalls enthalten sein müssen.
    - `encryptionScheme`
        -: Das Verschlüsselungsschema, das mit dem Inhaltstyp verknüpft ist, wie z.B. `cenc`, `cbcs`, `cbcs-1-9`. Dieser Wert sollte von einer Anwendung festgelegt werden (standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
    - `robustness`
        -: Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist. Der leere String gibt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

  - `videoCapabilities`
    -: Ein Array unterstützter Videofähigkeiten. Die Objekte im Array haben die gleiche Form wie die in `audioCapabilities`.

  - `distinctiveIdentifier`
    -: Ein String, der angibt, ob die Implementierung "unverwechselbare Kennungen" (oder unverwechselbare permanente Kennungen) für Vorgänge verwenden darf, die mit jedem Objekt verbunden sind, das aus dieser Konfiguration erstellt wurde. Die zulässigen Werte sind:

    - `required`
        -: Das zurückgegebene Objekt muss diese Funktion unterstützen.
    - `optional`
        -: Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist der Standard.
    - `not-allowed`
        -: Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

  - `persistentState`
    -: Ein String, der angibt, ob das zurückgegebene Objekt Sitzungsdaten oder eine andere Art von Zustand speichern können muss. Die Werte sind die gleichen wie für `distinctiveIdentifier` und haben die gleiche Bedeutung: `required`, `optional` (Standard), `not-allowed`. Nur "temporäre" Sitzungen können erstellt werden, wenn dauerhafter Zustand nicht erlaubt ist.

  - `sessionTypes`
    -: Ein Array von Strings, die die unterstützten Sitzungstypen angeben müssen. Erlaubte Werte sind:

    - `temporary`
        -: Eine Sitzung, für die die Lizenz, der/die Schlüssel und Aufzeichnungen oder Daten, die sich auf die Sitzung beziehen, nicht gespeichert werden. Die Anwendung muss diese Speicherung nicht verwalten. Implementierungen müssen diese Option unterstützen, und sie ist die Standardoption.
    - `persistent-license`
        -: Eine Sitzung, für die die Lizenz (und möglicherweise andere Daten, die sich auf die Sitzung beziehen) gespeichert werden. Ein Eintrag der Lizenz und der zugehörigen Schlüssel bleibt bestehen, auch wenn die Lizenz zerstört wird, was eine Bescheinigung liefert, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr verwendet werden können.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt erfüllt wird, das die in `keySystem` und `supportedConfigurations` beschriebene Konfiguration des Medienschlüsselsystems darstellt.

### Ausnahmen

Im Fehlerfall wird das zurückgegebene {{jsxref('Promise')}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, dessen Name anzeigt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  -: Entweder wird das angegebene `keySystem` nicht von der Plattform oder dem Browser unterstützt, oder keine der durch `supportedConfigurations` angegebenen Konfigurationen kann erfüllt werden (wenn zum Beispiel keiner der in `contentType` angegebenen `codecs` verfügbar ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  -: Die Verwendung dieser Funktion wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Headers/Permissions-Policy/encrypted-media) blockiert.
- {{jsxref("TypeError")}}
  -: Entweder ist `keySystem` ein leerer String oder das `supportedConfigurations` Array ist leer.

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
