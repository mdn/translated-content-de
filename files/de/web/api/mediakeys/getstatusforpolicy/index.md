---
title: "MediaKeys: getStatusForPolicy()-Methode"
short-title: getStatusForPolicy()
slug: Web/API/MediaKeys/getStatusForPolicy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `getStatusForPolicy()`-Methode des [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Interfaces wird verwendet, um zu überprüfen, ob das Content Decryption Module (CDM) die Wiedergabe verschlüsselter Mediendaten mit den Schlüsseln basierend auf den angegebenen Richtlinienanforderungen erlauben würde.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Status des Schlüssels in Bezug auf alle angegebenen Richtlinienanforderungen angibt. Wenn der Wert auf `"usable"` aufgelöst wird, können die Inhalte in idealer Qualität entschlüsselt und wiedergegeben werden. Andere Werte geben Gründe an, warum die Schlüssel nicht zur Wiedergabe der Inhalte verwendet werden können; in einigen Fällen weisen sie auf Alternativen hin, wie beispielsweise die Wiedergabe in geringerer Qualität.

Die Richtlinienbeschränkungen umfassen derzeit nur eine Einschränkung der minimal unterstützten HDCP-Version.

Beachten Sie, dass die Methode einen "hypothetischen Schlüssel" gegen die Beschränkungen überprüft. Die Anwendung muss nicht zuerst einen realen Schlüssel erstellen und eine reale Lizenz mit [`MediaKeySession`](/de/docs/Web/API/MediaKeySession) abrufen, und die [`MediaKeys`](/de/docs/Web/API/MediaKeys) müssen nicht einmal an Audio- oder Videoelemente angehängt werden.

## Syntax

```js-nolint
getStatusForPolicy(policy)
```

### Parameter

- `policy` {{optional_inline}}
  - : Ein Objekt mit den folgenden optionalen Eigenschaften:
    - `minHdcpVersion` {{optional_inline}}
      - : Ein String, der die semantische Version der minimalen HDCP-Version angibt, um die Verwendbarkeit zu prüfen, z. B. `1.0`, `1.4`, `2.2`, `2.3`.

> [!NOTE]
> Mindestens eine Richtlinienbeschränkung muss angegeben werden, daher ist `minHdcpVersion` nur "technisch" optional.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String aufgelöst wird, der angibt, ob der Schlüssel für die Entschlüsselung gemäß der angegebenen Richtlinie verwendet werden kann.

Der String kann einen der folgenden Werte haben:

- `usable`
  - : Der Schlüssel ist derzeit zur Entschlüsselung verwendbar.
- `expired`
  - : Der Schlüssel ist nicht mehr zur Entschlüsselung verwendbar, weil seine Ablaufzeit überschritten ist.
- `released`
  - : Der Schlüssel wurde freigegeben und steht dem CDM nicht mehr zur Verfügung. Allerdings sind Informationen über den Schlüssel verfügbar, wie z. B. ein Protokoll über die Löschung der Lizenz.
- `output-restricted`
  - : Es gibt Ausgabebeschränkungen, die mit dem Schlüssel basierend auf der angegebenen Richtlinie verbunden sind. Mediendaten, die mit diesem Schlüssel entschlüsselt wurden, können von der Wiedergabe gesperrt werden. Der Status zeigt an, dass die Verbindung zwischen Quelle und Ausgabe (z. B. Ihrem Computer und einem externen Display) nicht vertrauenswürdig ist. Dies könnte auf HDCP-Version-Inkompatibilitäten zwischen der Quelle, Zwischengeräten und der Ausgabe hinweisen, oder darauf, dass Zwischengeräte wie HDMI-Kabel oder Video-Splitter beschädigt oder nicht konform sind. Eine Anwendung könnte sich entscheiden, eine höhere HDCP-Version zu verwenden, Inhalte, die keine so hohe Version erfordern. Sie sollten auch prüfen, ob Zwischengeräte und Kabel HDCP unterstützen, fest verbunden und nicht beschädigt sind.
- `output-downscaled`
  - : Es gibt Ausgabebeschränkungen in Verbindung mit dem Schlüssel basierend auf der angegebenen Richtlinie, allerdings könnten diese Beschränkungen gelockert werden, wenn die Inhalte in geringerer Qualität abgespielt werden. Wenn dieser Wert zurückgegeben wird, könnten Anwendungen die Inhalte in einer niedrigeren Auflösung abspielen oder eine höhere HDCP-Version verwenden oder andere Inhalte nutzen, die keine so hohe HDCP-Version erfordern.
- `usable-in-future`
  - : Der Schlüssel wird in Zukunft zur Entschlüsselung verwendbar, sobald seine Startzeit erreicht ist.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird bestimmt.
- `internal-error`
  - : Der Schlüssel ist derzeit nicht zur Entschlüsselung verwendbar aufgrund eines Fehlers im CDM. Die Anwendung kann in diesem Fall nichts unternehmen.

### Ausnahmen

- `TypeError`
  - : Die `policy` hat keine definierten Eigenschaften (Richtlinienbeschränkungen), oder ein Eigenschaftsschlüssel ist nicht gültig.

- `NotSupportedError`
  - : Das CDM kann den Status für eine oder alle Richtlinienbeschränkungen nicht bestimmen.

## Beispiele

### Überprüfen ob Schlüssel mit HDCP-Beschränkung verwendbar sind

Dieses Beispiel überprüft, ob Schlüssel für die Entschlüsselung eines bestimmten Videoformats mit einer minimalen HDCP-Version von `2.2` verwendbar sind.

> [!NOTE]
> Ein Status von `output-restricted`, wenn Sie ein externes Display verwenden, kann durch Hardware-Inkompatibilitäten mit HDCP verursacht werden. Wenn Sie einen Laptop verwenden, können Sie dies möglicherweise "beheben", indem Sie das externe Display trennen.

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
