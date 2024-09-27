---
title: MediaKeys
slug: Web/API/MediaKeys
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeys`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) repräsentiert eine Gruppe von Schlüsseln, die ein zugeordneter [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`MediaKeys.createSession()`](/de/docs/Web/API/MediaKeys/createSession)
  - : Gibt ein neues [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Objekt zurück, das einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM) darstellt.
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy)
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf einen Status-String aufgelöst wird, der angibt, ob das CDM die Präsentation verschlüsselter Mediendaten mit den Schlüsseln erlauben würde, basierend auf festgelegten Richtlinienanforderungen.
- [`MediaKeys.setServerCertificate()`](/de/docs/Web/API/MediaKeys/setServerCertificate)
  - : Gibt ein {{jsxref("Promise")}} eines Serverzertifikats zurück, das zur Verschlüsselung von Nachrichten an den Lizenzserver verwendet werden soll.

## Beispiele

### Überprüfen, ob Schlüssel mit HDCP-Einschränkung verwendbar sind

Dieses Beispiel zeigt, wie `getStatusForPolicy()` verwendet werden kann, um zu prüfen, ob Schlüssel ein bestimmtes Videoformat in einem Setup entschlüsseln können, das eine Mindest-HDCP-Version von `2.2` erfordert. Weitere Informationen finden Sie in der Dokumentation zur [MediaKeys: getStatusForPolicy() Methode](/de/docs/Web/API/MediaKeys/getStatusForPolicy).

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
