---
title: "MediaKeys: getStatusForPolicy()-Methode"
short-title: getStatusForPolicy()
slug: Web/API/MediaKeys/getStatusForPolicy
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die Methode `getStatusForPolicy()` der Schnittstelle [`MediaKeys`](/de/docs/Web/API/MediaKeys) prüft, ob das Content Decryption Module (CDM) die Wiedergabe verschlüsselter Mediendaten mit den Schlüsseln unter den angegebenen Richtlinienanforderungen zulassen würde.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String erfüllt wird, der den Status des Schlüssels in Bezug auf alle angegebenen Richtlinienanforderungen angibt.
Wird es mit dem Wert `"usable"` erfüllt, können die Inhalte entschlüsselt und in optimaler Qualität wiedergegeben werden.
Andere Werte geben an, warum die Schlüssel nicht zur Wiedergabe der Inhalte verwendet werden können. In manchen Fällen weisen sie auf Ausweichmöglichkeiten hin, etwa darauf, die Inhalte in geringerer Qualität abzuspielen.

Die Richtlinienbeschränkungen umfassen derzeit nur eine Anforderung an die mindestens unterstützte HDCP-Version.

Beachten Sie, dass die Methode einen „hypothetischen Schlüssel“ anhand der Beschränkungen prüft.
Die Anwendung muss nicht zuerst mit [`MediaKeySession`](/de/docs/Web/API/MediaKeySession) einen echten Schlüssel erstellen und eine echte Lizenz abrufen. [`MediaKeys`](/de/docs/Web/API/MediaKeys) muss nicht einmal mit Audio- oder Videoelementen verbunden sein.

## Syntax

```js-nolint
getStatusForPolicy(policy)
```

### Parameter

- `policy` {{optional_inline}}
  - : Ein Objekt mit den folgenden optionalen Eigenschaften:
    - `minHdcpVersion` {{optional_inline}}
      - : Ein String, der die semantische Version der mindestens erforderlichen HDCP-Version angibt, für die die Verwendbarkeit geprüft werden soll, beispielsweise `1.0`, `1.4`, `2.2` oder `2.3`.

> [!NOTE]
> Es muss mindestens eine Richtlinienbeschränkung angegeben werden. `minHdcpVersion` ist daher nur „technisch“ optional.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String erfüllt wird, der angibt, ob der Schlüssel unter der angegebenen Richtlinie zur Entschlüsselung verwendet werden kann.

Der String kann einen der folgenden Werte haben:

- `usable`
  - : Der Schlüssel kann derzeit zur Entschlüsselung verwendet werden.
- `expired`
  - : Der Schlüssel kann nicht mehr zur Entschlüsselung verwendet werden, weil seine Gültigkeitsdauer abgelaufen ist.
- `released`
  - : Der Schlüssel wurde freigegeben und steht dem CDM nicht mehr zur Verfügung.
    Informationen über den Schlüssel sind jedoch weiterhin verfügbar, beispielsweise ein Nachweis über die Vernichtung der Lizenz.
- `output-restricted`
  - : Für den Schlüssel gelten aufgrund der angegebenen Richtlinie Ausgabebeschränkungen.
    Die Wiedergabe von Mediendaten, die mit diesem Schlüssel entschlüsselt wurden, kann blockiert werden.
    Der Status zeigt an, dass die Verbindung zwischen Quelle und Ausgabegerät (beispielsweise Ihrem Computer und einem externen Bildschirm) nicht als vertrauenswürdig gilt.
    Dies kann darauf hindeuten, dass die HDCP-Versionen der Quelle, zwischengeschalteter Geräte und des Ausgabegeräts nicht übereinstimmen oder dass Verbindungskomponenten wie HDMI-Kabel oder Videosplitter beschädigt sind oder die Anforderungen nicht erfüllen.
    Eine Anwendung könnte stattdessen Inhalte verwenden, die keine so hohe HDCP-Version erfordern.
    Prüfen Sie außerdem, ob zwischengeschaltete Geräte und Kabel HDCP unterstützen, fest angeschlossen und nicht beschädigt sind.
- `output-downscaled`
  - : Für den Schlüssel gelten aufgrund der angegebenen Richtlinie Ausgabebeschränkungen. Diese Beschränkungen könnten jedoch gelockert werden, wenn die Inhalte in geringerer Qualität abgespielt werden.
    Bei diesem Wert könnte eine Anwendung die Inhalte in geringerer Auflösung abspielen, eine höhere HDCP-Version verwenden oder andere Inhalte nutzen, die keine so hohe HDCP-Version erfordern.
- `usable-in-future`
  - : Der Schlüssel kann künftig zur Entschlüsselung verwendet werden, sobald sein Startzeitpunkt erreicht ist.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird ermittelt.
- `internal-error`
  - : Der Schlüssel kann aufgrund eines Fehlers im CDM derzeit nicht zur Entschlüsselung verwendet werden.
    Die Anwendung kann diesen Fall nicht selbst beheben.

### Ausnahmen

- `TypeError`
  - : `policy` enthält keine definierten Eigenschaften (Richtlinienbeschränkungen) oder ein Eigenschaftsschlüssel ist ungültig.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das CDM kann den Status für eine oder mehrere der Richtlinienbeschränkungen nicht ermitteln.

## Beispiele

### Prüfen, ob Schlüssel mit einer HDCP-Beschränkung verwendbar sind

Dieses Beispiel prüft, ob Schlüssel zur Entschlüsselung eines bestimmten Videoformats verwendet werden können, wenn eine HDCP-Version von mindestens `2.2` erforderlich ist.

> [!NOTE]
> Der Status `output-restricted` bei Verwendung eines externen Bildschirms kann durch Inkompatibilitäten der Hardware mit HDCP verursacht werden.
> Wenn Sie einen Laptop verwenden, können Sie das Problem möglicherweise beheben, indem Sie den externen Bildschirm trennen.

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
