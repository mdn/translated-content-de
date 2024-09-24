---
title: "Navigator: requestMediaKeySystemAccess() Methode"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`requestMediaKeySystemAccess()`** Methode der {{domxref("Navigator")}} Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das ein {{domxref('MediaKeySystemAccess')}} Objekt liefert, das verwendet werden kann, um auf ein bestimmtes Mediaschlüsselsystem zuzugreifen, welches wiederum zur Erstellung von Schlüsseln für die Entschlüsselung eines Medienstroms verwendet werden kann.

Diese Methode ist Teil der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), die Unterstützung für verschlüsselte Medien und DRM-geschützte Videos ins Web bringt.

Diese Methode kann benutzerrelevante Effekte haben, wie das Anfordern einer Berechtigung zum Zugriff auf ein oder mehrere Systemressourcen. Berücksichtigen Sie dies, wenn Sie entscheiden, wann `requestMediaKeySystemAccess()` aufgerufen werden soll; solche Anfragen sollten nicht zu unangenehmen Zeiten erfolgen. Generell sollte diese Funktion nur aufgerufen werden, wenn es soweit ist, ein {{domxref("MediaKeys")}} Objekt mithilfe der Methode {{domxref("MediaKeySystemAccess.createMediaKeys", "createMediaKeys()")}} des zurückgegebenen {{domxref("MediaKeySystemAccess")}} Objekts zu erstellen und zu verwenden.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameter

- `keySystem`
  - : Ein String, der das Schlüsselsystem identifiziert.
    Beispielsweise `com.example.somesystem` oder `org.w3.clearkey`.
- `supportedConfigurations`

  - : Ein nicht-leeres {{jsxref('Array')}} von Objekten, die dem Objekt entsprechen, das von {{domxref("MediaKeySystemAccess.getConfiguration")}} zurückgegeben wird.
    Das erste Element mit einer erfüllbaren Konfiguration wird verwendet.

    Jedes Objekt kann die folgenden Eigenschaften haben:

    > [!NOTE]
    > Entweder `videoCapabilities` oder `audioCapabilities` können leer sein, aber nicht beide!

    - `label` {{optional_inline}}
      - : Ein optionales Label für die Konfiguration, das standardmäßig `""` ist.
        Dieses Label wird für Konfigurationen erhalten, die mit {{domxref("MediaKeySystemAccess.getConfiguration")}} abgerufen werden.
    - `initDataTypes`
      - : Ein Array von Strings, die die Datentyppnamen für die unterstützten Initialisierungsdatenformate anzeigen (standardmäßig ein leeres Array).
        Diese Namen sind wie `"cenc"`, `"keyids"` und `"webm"` definiert in der [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/).
    - `audioCapabilities`

      - : Ein Array unterstützter Audiokapazitäten.
        Wenn das Array leer ist, unterstützt der Inhaltstyp keine Audiokapazitäten.

        Jedes Objekt im Array hat die folgenden Eigenschaften:

        - `contentType`
          - : Ein String, der den Medien-MIME-Typ der Medienressource angibt, wie `"audio/mp4;codecs=\"mp4a.40.2\"`.
            Beachten Sie, dass der leere String ungültig ist und dass, wenn die MIME-Typ-Definition Parameter wie `codecs` enthält, diese ebenfalls enthalten sein müssen.
        - `encryptionScheme`
          - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
            Dieser Wert sollte von einer Anwendung festgelegt werden (standardmäßig `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
        - `robustness`
          - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
            Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

    - `videoCapabilities`

      - : Ein Array unterstützter Videokapazitäten.
        Die Objekte im Array haben die gleiche Form wie die in `audioCapabilities`.

    - `distinctiveIdentifier`

      - : Ein String, der anzeigt, ob die Implementierung "unterscheidbare Identifikatoren" (oder unterscheidbare permanente Identifikatoren) für jede Operation verwenden darf, die mit jedem Objekt, das aus dieser Konfiguration erstellt wurde, verbunden ist.
        Die zulässigen Werte sind:

        - `required`
          - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
        - `optional`
          - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
            Dies ist der Standardwert
        - `not-allowed`
          - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

    - `persistentState`

      - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder andere Arten von Zuständen zu speichern.
        Die Werte sind die gleichen wie für `distinctiveIdentifier` und haben die gleiche Bedeutung: `required`, `optional` (Standard), `not-allowed`.
        Nur "temporäre" Sitzungen dürfen erstellt werden, wenn ein beständiger Zustand nicht erlaubt ist.

    - `sessionTypes`

      - : Ein Array von Strings, das die Sitzungsarten angibt, die unterstützt werden müssen.
        Zulässige Werte umfassen:

        - `temporary`
          - : Eine Sitzung, bei der die Lizenz, der/die Schlüssel und Aufzeichnungen oder Daten in Bezug auf die Sitzung nicht gespeichert werden.
            Die Anwendung muss einen solchen Speicher nicht verwalten.
            Implementierungen müssen diese Option unterstützen, und es ist die Standardeinstellung.
        - `persistent-license`
          - : Eine Sitzung, bei der die Lizenz (und möglicherweise andere Daten im Zusammenhang mit der Sitzung) gespeichert wird.
            Eine Aufzeichnung der Lizenz und der zugehörigen Schlüssel bleibt bestehen, selbst wenn die Lizenz zerstört wird, wodurch eine Bestätigung erfolgt, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr verwendet werden können.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{domxref('MediaKeySystemAccess')}} Objekt erfüllt wird, das die Mediaschlüsselsystemkonfiguration beschreibt, die durch `keySystem` und `supportedConfigurations` beschrieben wird.

### Ausnahmen

Im Falle eines Fehlers wird das zurückgegebene {{jsxref('Promise')}} mit einem {{domxref('DOMException')}} zurückgewiesen, dessen Name angibt, welche Art von Fehler aufgetreten ist.

- `NotSupportedError` {{domxref("DOMException")}}
  - : Entweder wird das angegebene `keySystem` nicht von der Plattform oder dem Browser unterstützt, oder keine der durch `supportedConfigurations` angegebenen Konfigurationen kann erfüllt werden (zum Beispiel, wenn keiner der im `contentType` angegebenen `codecs` verfügbar ist).
- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieser Funktion wurde durch [`Permissions-Policy: encrypted-media`](/de/docs/Web/HTTP/Headers/Permissions-Policy/encrypted-media) blockiert.
- {{jsxref("TypeError")}}
  - : Entweder ist `keySystem` ein leerer String oder das `supportedConfigurations` Array ist leer.

## Beispiele

Das folgende Beispiel zeigt, wie `requestMediaKeySystemAccess()` verwendet werden könnte, um ein Schlüsselsystem und eine Konfiguration anzugeben.

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
- {{domxref("MediaCapabilities.decodingInfo()")}}
