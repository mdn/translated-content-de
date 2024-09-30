---
title: "MediaKeys: getStatusForPolicy()-Methode"
short-title: getStatusForPolicy()
slug: Web/API/MediaKeys/getStatusForPolicy
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `getStatusForPolicy()`-Methode der [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Schnittstelle wird verwendet, um zu überprüfen, ob das Content Decryption Module (CDM) die Wiedergabe von verschlüsselten Mediendaten mit den Schlüsseln gemäß den angegebenen Richtlinienanforderungen ermöglichen würde.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Status des Schlüssels in Bezug auf alle angegebenen Richtlinienanforderungen angibt. Wenn der Wert auf `"usable"` aufgelöst wird, kann der Inhalt entschlüsselt und in idealer Qualität wiedergegeben werden. Andere Werte geben Gründe an, warum die Schlüssel nicht zur Wiedergabe des Inhalts verwendet werden können; in einigen Fällen weisen sie auf alternative Optionen hin, wie z.B. die Wiedergabe des Inhalts in geringerer Qualität.

Die Richtlinienbeschränkungen umfassen derzeit nur eine Einschränkung bezüglich der minimal unterstützten HDCP-Version.

Beachten Sie, dass die Methode einen "hypothetischen Schlüssel" gegen die Beschränkungen prüft. Die Anwendung muss keinen echten Schlüssel erstellen und keine echte Lizenz mit [`MediaKeySession`](/de/docs/Web/API/MediaKeySession) abrufen, und die [`MediaKeys`](/de/docs/Web/API/MediaKeys) müssen nicht einmal an Audio- oder Videoelemente angehängt sein.

## Syntax

```js-nolint
getStatusForPolicy(policy)
```

### Parameter

- `policy` {{optional_inline}}

  - : Ein Objekt mit den folgenden optionalen Eigenschaften:

    - `minHdcpVersion` {{optional_inline}}

      - : Ein String, der die semantische Version der minimalen HDCP-Version angibt, die auf Gebrauchstauglichkeit geprüft werden soll, wie z.B. `1.0`, `1.4`, `2.2`, `2.3`.

> [!NOTE]
> Mindestens eine Richtlinienbeschränkung muss angegeben werden, daher ist `minHdcpVersion` nur "technisch" optional.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String aufgelöst wird, der angibt, ob der Schlüssel unter der angegebenen Richtlinie zur Entschlüsselung verwendet werden kann.

Der String kann einen der folgenden Werte haben:

- `usable`
  - : Der Schlüssel ist momentan für die Entschlüsselung verwendbar.
- `expired`
  - : Der Schlüssel ist nicht mehr für die Entschlüsselung verwendbar, da seine Ablaufzeit überschritten ist.
- `released`
  - : Der Schlüssel wurde freigegeben und steht dem CDM nicht mehr zur Verfügung. Informationen über den Schlüssel sind jedoch verfügbar, wie z.B. ein Protokoll der Lizenzvernichtung.
- `output-restricted`
  - : Es gibt Ausgabebeschränkungen, die mit dem Schlüssel verbunden sind, basierend auf der spezifizierten Richtlinie. Mediendaten, die mit diesem Schlüssel entschlüsselt wurden, könnten von der Wiedergabe ausgeschlossen werden. Der Status zeigt an, dass die Verbindung zwischen Quelle und Ausgabe (zum Beispiel Ihr Computer und ein externer Bildschirm) nicht vertrauenswürdig ist. Dies könnte auf HDCP-Versionsunterschiede zwischen Quelle, Zwischen- und Ausgabegeräten hinweisen oder darauf, dass Zwischenverbindungsvorrichtungen wie HDMI-Kabel oder Video-Splitter beschädigt oder nicht konform sind. Eine Anwendung könnte sich dafür entscheiden, eine höhere HDCP-Version zu verwenden oder Inhalte zu wählen, die keine so hohe Version erfordern. Sie sollten auch überprüfen, ob Zwischenkomponenten und Kabel HDCP unterstützen, fest verbunden und unbeschädigt sind.
- `output-downscaled`
  - : Es gibt Ausgabebeschränkungen, die mit dem Schlüssel verbunden sind, basierend auf der spezifizierten Richtlinie, aber diese Beschränkungen könnten gelockert werden, wenn der Inhalt in geringerer Qualität wiedergegeben wird. Wenn dieser Wert zurückgegeben wird, könnte eine Anwendung den Inhalt in geringerer Auflösung wiedergeben oder eine höhere HDCP-Version nutzen oder andere Inhalte verwenden, die keine so hohe HDCP-Version erfordern.
- `usable-in-future`
  - : Der Schlüssel wird in Zukunft für die Entschlüsselung verwendbar sein, sobald seine Startzeit erreicht ist.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird ermittelt.
- `internal-error`
  - : Der Schlüssel ist momentan nicht für die Entschlüsselung verwendbar aufgrund eines Fehlers im CDM. Die Anwendung kann nichts tun, um diesen Fall zu lösen.

### Ausnahmen

- `TypeError`

  - : Die `policy` hat keine definierten Eigenschaften (Richtlinienbeschränkungen), oder ein Eigenschaftsschlüssel ist nicht gültig.

- `NotSupportedError`

  - : Das CDM kann den Status für eine oder alle der Richtlinienbeschränkungen nicht bestimmen.

## Beispiele

### Überprüfen, ob Schlüssel mit HDCP-Beschränkung verwendbar sind

Dieses Beispiel überprüft, ob Schlüssel zur Entschlüsselung eines bestimmten Videoformats verwendbar sind, wenn eine minimale HDCP-Version von `2.2` verwendet wird.

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
