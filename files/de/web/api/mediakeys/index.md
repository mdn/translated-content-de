---
title: MediaKeys
slug: Web/API/MediaKeys
l10n:
  sourceCommit: b01f35e069ca9d1c343f24b5d755d210c6107164
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeys`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) repräsentiert eine Menge von Schlüsseln, die ein zugehöriges {{domxref("HTMLMediaElement")}} zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- {{domxref("MediaKeys.createSession()")}}
  - : Gibt ein neues {{domxref("MediaKeySession")}}-Objekt zurück, das einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM) darstellt.
- {{domxref("MediaKeys.getStatusForPolicy()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Status-String auflöst, welcher anzeigt, ob das CDM basierend auf den angegebenen Richtlinienanforderungen die Präsentation von verschlüsselten Mediendaten mit den Schlüsseln zulässt.
- {{domxref("MediaKeys.setServerCertificate()")}}
  - : Gibt ein {{jsxref("Promise")}} zu einem Serverzertifikat zurück, das verwendet wird, um Nachrichten an den Lizenzserver zu verschlüsseln.

## Beispiele

### Überprüfen, ob Schlüssel mit HDCP-Einschränkung verwendbar sind

Dieses Beispiel zeigt, wie `getStatusForPolicy()` genutzt werden kann, um zu prüfen, ob Schlüssel ein bestimmtes Videoformat in einer Umgebung entschlüsseln können, die eine minimale HDCP-Version von `2.2` erfordert.
Für weitere Informationen siehe die [MediaKeys: getStatusForPolicy()-Methode](/de/docs/Web/API/MediaKeys/getStatusForPolicy)-Dokumentation.

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

    // Holen Sie den Inhalt oder weichen Sie auf eine Alternative aus, wenn
    // die Schlüssel nicht verwendbar sind
    if (mediaStatus === "usable") {
      console.log("HDCP 2.2 kann durchgesetzt werden.");
      // Den hochauflösenden geschützten Inhalt abrufen
    } else {
      log("HDCP 2.2 kann nicht durchgesetzt werden");
      // Andere Inhalte ausweichen, Lizenz abrufen, etc.
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
