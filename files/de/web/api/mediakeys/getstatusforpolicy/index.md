---
title: "MediaKeys: Methode getStatusForPolicy()"
short-title: getStatusForPolicy()
slug: Web/API/MediaKeys/getStatusForPolicy
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `getStatusForPolicy()`-Methode der {{domxref("MediaKeys")}}-Schnittstelle wird verwendet, um zu überprüfen, ob das Content Decryption Module (CDM) die Präsentation von verschlüsselten Mediendaten unter Verwendung der Schlüssel basierend auf den angegebenen Richtlinienanforderungen zulassen würde.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Status des Schlüssels in Bezug auf alle angegebenen Richtlinienanforderungen angibt. Wenn der Wert auf `"usable"` aufgelöst wird, können die Inhalte entschlüsselt und in idealer Qualität präsentiert werden. Andere Werte deuten auf Gründe hin, warum die Schlüssel nicht zur Präsentation der Inhalte verwendet werden können. In einigen Fällen geben sie Hinweise auf alternative Optionen, wie z.B. das Abspielen der Inhalte in niedrigerer Qualität.

Die Richtlinienbeschränkungen umfassen derzeit nur eine Beschränkung der minimal unterstützten HDCP-Version.

Beachten Sie, dass die Methode einen "hypothetischen Schlüssel" gegen die Beschränkungen überprüft. Die Anwendung muss nicht zuerst einen realen Schlüssel erstellen und eine reale Lizenz mit Hilfe von {{domxref("MediaKeySession")}} abrufen, und die {{domxref("MediaKeys")}} muss nicht einmal an Audio- oder Videoelemente angehängt werden.

## Syntax

```js-nolint
getStatusForPolicy(policy)
```

### Parameter

- `policy` {{optional_inline}}

  - : Ein Objekt mit den folgenden optionalen Eigenschaften:

    - `minHdcpVersion` {{optional_inline}}

      - : Ein String, der die semantische Version der minimalen HDCP-Version angibt, die auf Nutzbarkeit geprüft werden soll, wie `1.0`, `1.4`, `2.2`, `2.3`.

> [!NOTE]
> Es muss mindestens eine Richtlinienbeschränkung angegeben werden, daher ist `minHdcpVersion` nur "technisch" optional.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String aufgelöst wird, der angibt, ob der Schlüssel unter Berücksichtigung der angegebenen Richtlinie zur Entschlüsselung verwendet werden kann.

Der String kann einen der folgenden Werte haben:

- `usable`
  - : Der Schlüssel kann derzeit zur Entschlüsselung verwendet werden.
- `expired`
  - : Der Schlüssel kann nicht mehr zur Entschlüsselung verwendet werden, da seine Ablaufzeit überschritten wurde.
- `released`
  - : Der Schlüssel wurde freigegeben und steht dem CDM nicht mehr zur Verfügung. Allerdings sind Informationen über den Schlüssel verfügbar, wie z.B. ein Datensatz über die Zerstörung der Lizenz.
- `output-restricted`
  - : Es gibt Ausgangsbeschränkungen, die mit dem Schlüssel gemäß der angegebenen Richtlinie verbunden sind. Mit diesem Schlüssel entschlüsselte Mediendaten können von der Präsentation ausgeschlossen werden. Der Status zeigt an, dass die Verbindung zwischen Quelle und Ausgabe (z. B. Ihr Computer und ein externes Display) nicht vertrauenswürdig ist. Dies könnte auf HDCP-Versionmismatches zwischen Quelle, zwischengeschalteten Geräten und Ausgabe hinweisen oder darauf, dass zwischengeschaltete Verbindungselemente wie HDMI-Kabel oder Videosplitter beschädigt oder nicht konform sind. Eine Anwendung könnte sich entscheiden, eine höhere HDCP-Version zu verwenden, oder Inhalte, die nicht eine solch hohe Version erfordern. Sie sollten auch prüfen, ob zwischengeschaltete Geräte und Kabel HDCP unterstützen, fest verbunden und nicht beschädigt sind.
- `output-downscaled`
  - : Es gibt Ausgangsbeschränkungen, die mit dem Schlüssel gemäß der angegebenen Richtlinie verbunden sind. Diese Beschränkungen könnten jedoch gelockert werden, wenn die Inhalte in niedrigerer Qualität abgespielt werden. Wenn dieser Wert zurückgegeben wird, könnte eine Anwendung die Inhalte in niedrigerer Auflösung abspielen oder sich entscheiden, eine höhere HDCP-Version zu verwenden oder andere Inhalte zu nutzen, die keine so hohe HDCP-Version erfordern.
- `usable-in-future`
  - : Der Schlüssel wird in Zukunft zur Entschlüsselung nutzbar sein, sobald seine Startzeit erreicht ist.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird ermittelt.
- `internal-error`
  - : Der Schlüssel kann derzeit nicht zur Entschlüsselung verwendet werden, da ein Fehler im CDM vorliegt. Die Anwendung kann in diesem Fall nichts unternehmen.

### Ausnahmen

- `TypeError`

  - : Die `policy` hat keine definierten Eigenschaften (Richtlinienbeschränkungen), oder ein Eigenschaftsschlüssel ist nicht gültig.

- `NotSupportedError`

  - : Das CDM kann den Status für keine oder alle Richtlinienbeschränkungen bestimmen.

## Beispiele

### Überprüfen, ob Schlüssel mit HDCP-Beschränkung nutzbar sind

Dieses Beispiel überprüft, ob Schlüssel zur Entschlüsselung eines bestimmten Videoformats verwendet werden können, wenn eine minimale HDCP-Version von `2.2` verwendet wird.

> [!NOTE]
> Ein Status von `output-restricted`, wenn Sie ein externes Display verwenden, kann durch HDCP-Hardwareinkompatibilitätsprobleme verursacht werden. Wenn Sie einen Laptop verwenden, können Sie dies möglicherweise "lösen", indem Sie das externe Display trennen.

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
    // keys are not usuable
    if (mediaStatus === "usable") {
      console.log("HDCP 2.2 kann durchgesetzt werden.");
      // Fetch the high resolution protected content
    } else {
      log("HDCP 2.2 kann nicht durchgesetzt werden");
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

- {{domxref("MediaKeyStatusMap.get()")}}
