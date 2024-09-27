---
title: "MediaKeys: getStatusForPolicy()-Methode"
short-title: getStatusForPolicy()
slug: Web/API/MediaKeys/getStatusForPolicy
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `getStatusForPolicy()`-Methode des [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Interfaces wird verwendet, um zu überprüfen, ob das Content Decryption Module (CDM) die Präsentation von verschlüsselten Mediendaten unter Verwendung der Schlüssel basierend auf den angegebenen Richtlinienanforderungen zulässt.

Die Methode gibt einen {{jsxref("Promise")}} zurück, der mit einem String aufgelöst wird, der den Status des Schlüssels in Bezug auf alle angegebenen Richtlinienanforderungen angibt. Wenn der Wert auf `"usable"` aufgelöst wird, können die Inhalte in idealer Qualität entschlüsselt und präsentiert werden. Andere Werte geben Gründe an, warum die Schlüssel nicht verwendet werden können, um die Inhalte zu präsentieren; in einigen Fällen deuten sie auf alternative Optionen hin, wie z.B. das Abspielen der Inhalte in geringerer Qualität.

Die Richtlinieneinschränkungen umfassen derzeit nur eine Einschränkung der minimal unterstützten HDCP-Version.

Beachten Sie, dass die Methode einen "hypothetischen Schlüssel" gegen die Einschränkungen prüft. Die Anwendung muss nicht zuerst einen echten Schlüssel erstellen und eine echte Lizenz mit [`MediaKeySession`](/de/docs/Web/API/MediaKeySession) abrufen, und die [`MediaKeys`](/de/docs/Web/API/MediaKeys) müssen nicht einmal an Audio- oder Videoelemente angefügt sein.

## Syntax

```js-nolint
getStatusForPolicy(policy)
```

### Parameter

- `policy` {{optional_inline}}

  - : Ein Objekt mit den folgenden optionalen Eigenschaften:

    - `minHdcpVersion` {{optional_inline}}

      - : Ein String, der die semantische Version der minimalen HDCP-Version angibt, um die Verwendbarkeit zu prüfen, wie z.B. `1.0`, `1.4`, `2.2`, `2.3`.

> [!NOTE]
> Mindestens eine Richtlinieneinschränkung muss angegeben werden, daher ist `minHdcpVersion` nur "technisch" optional.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem String aufgelöst wird, der angibt, ob der Schlüssel unter Berücksichtigung der angegebenen Richtlinie zur Entschlüsselung verwendet werden kann.

Der String kann einen der folgenden Werte haben:

- `usable`
  - : Der Schlüssel ist derzeit zur Entschlüsselung verwendbar.
- `expired`
  - : Der Schlüssel ist nicht mehr zur Entschlüsselung verwendbar, da seine Ablaufzeit überschritten ist.
- `released`
  - : Der Schlüssel wurde freigegeben und steht dem CDM nicht mehr zur Verfügung. Informationen über den Schlüssel sind jedoch verfügbar, wie z.B. ein Protokoll der Lizenzzerstörung.
- `output-restricted`
  - : Es gibt Ausgangsbeschränkungen, die mit dem Schlüssel basierend auf der angegebenen Richtlinie verbunden sind. Mit diesem Schlüssel entschlüsselte Mediendaten dürfen möglicherweise nicht präsentiert werden. Der Status zeigt an, dass die Verbindung zwischen der Quelle und dem Ausgang (zum Beispiel, Ihrem Computer und einem externen Display) nicht vertrauenswürdig ist. Dies könnte darauf hinweisen, dass es HDCP-Versionsinkompatibilitäten zwischen der Quelle, zwischengeschalteten Geräten und dem Ausgang gibt, oder dass zwischengeschaltete Verbindungsgeräte, wie HDMI-Kabel oder Video-Splitter, beschädigt oder nicht konform sind. Eine Anwendung könnte eine höhere HDCP-Version verwenden, Inhalte die nicht eine solche hohe Version erfordern. Sie sollten auch prüfen, dass zwischen Geräten und Kabeln HDCP unterstützt wird, diese fest verbunden sind und nicht beschädigt sind.
- `output-downscaled`
  - : Es gibt Ausgangsbeschränkungen, die mit dem Schlüssel basierend auf der angegebenen Richtlinie verbunden sind, allerdings könnten diese Beschränkungen gelockert werden, wenn der Inhalt in geringerer Qualität abgespielt wird. Wenn dieser Wert zurückgegeben wird, könnte eine Anwendung den Inhalt in geringerer Auflösung abspielen, oder sie könnte sich entscheiden, eine höhere HDCP-Version zu verwenden, oder andere Inhalte zu nutzen, die keine so hohe HDCP-Version erfordern.
- `usable-in-future`
  - : Der Schlüssel wird in Zukunft zur Entschlüsselung verfügbar sein, sobald seine Startzeit erreicht ist.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird bestimmt.
- `internal-error`
  - : Der Schlüssel ist derzeit nicht zur Entschlüsselung verwendbar, weil ein Fehler im CDM vorliegt. Die Anwendung kann nichts tun, um diesen Fall zu behandeln.

### Ausnahmen

- `TypeError`

  - : Die `policy` hat keine definierten Eigenschaften (Richtlinieneinschränkungen) oder ein Eigenschaftsschlüssel ist nicht gültig.

- `NotSupportedError`

  - : Das CDM kann den Status für alle oder einige der Richtlinieneinschränkungen nicht bestimmen.

## Beispiele

### Überprüfen, ob Schlüssel mit HDCP-Beschränkung verwendet werden können

Dieses Beispiel überprüft, ob Schlüssel für die Entschlüsselung eines bestimmten Videoformats verwendbar sind, wenn eine minimale HDCP-Version von `2.2` verwendet wird.

> [!NOTE]
> Ein Status von `output-restricted`, wenn Sie ein externes Display verwenden, kann durch Hardware-Inkompatibilitätsprobleme mit HDCP verursacht werden. Wenn Sie einen Laptop verwenden, können Sie dies möglicherweise "beheben", indem Sie das externe Display trennen.

#### HTML

```html
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const config = [
  {
    videoCapabilities: [
      {
        contentType: 'video/mp4; codecs="avc1.640028"',
        encryptionScheme: "cenc",
        robustness: "SW_SECURE_DECODE", // Widevine L3
      },
    ],
  },
];

getMediaStatus(config);

async function getMediaStatus(config) {
  try {
    const mediaKeySystemAccess = await navigator.requestMediaKeySystemAccess(
      "com.widevine.alpha",
      config,
    );
    const mediaKeys = await mediaKeySystemAccess.createMediaKeys();
    const mediaStatus = await mediaKeys.getStatusForPolicy({
      minHdcpVersion: "2.2",
    });
    log(mediaStatus);

    // Get the content or fallback to an alternative if the
    // keys are not usable
    if (mediaStatus === "usable") {
      console.log("HDCP 2.2 can be enforced.");
      // Fetch the high resolution protected content
    } else {
      log("HDCP 2.2 cannot be enforced");
      // Fallback other content, get license, etc.
    }
  } catch (error) {
    log(error);
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Check if keys are usable with HDCP restriction")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaKeyStatusMap.get()`](/de/docs/Web/API/MediaKeyStatusMap/get)
