---
title: Verwendung der Media Capabilities API
slug: Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{DefaultAPISidebar("Media Capabilities API")}}

Mit der [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) können Sie beim Browser abfragen, ob er Medien mit bestimmten Kodierungsparametern kodieren oder dekodieren kann. Zu diesen Parametern gehören beispielsweise Codecs, Auflösungen, Bitraten und Bildraten.

Mit der Media Capabilities API können Sie nicht nur feststellen, ob der Browser ein bestimmtes Format unterstützt, sondern auch, ob er es effizient und ruckelfrei verarbeiten kann. Kurz gesagt: Diese API ersetzt die Methode [`isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [`MediaSource`](/de/docs/Web/API/MediaSource) und die Methode [`canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und bietet darüber hinaus zusätzliche Informationen.

## Das MediaCapabilities-Interface

Auf [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) können Sie über die Eigenschaft [`mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) zugreifen. Sie wird sowohl vom `navigator`-Objekt als auch vom [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt bereitgestellt. Die Media Capabilities API ist somit sowohl im Hauptthread als auch in Workern verfügbar.

Wenn das Objekt vorhanden ist, steht die Media Capabilities API zur Verfügung. Sie können ihre Verfügbarkeit daher wie folgt prüfen:

```js
if ("mediaCapabilities" in navigator) {
  // mediaCapabilities is available
} else {
  // mediaCapabilities IS NOT available
}
```

Um beispielsweise Informationen über die Möglichkeiten zur Videodekodierung zu erhalten, erstellen Sie eine Videodekodierungskonfiguration und übergeben sie an die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo). Diese gibt ein Promise zurück, das Informationen darüber liefert, ob das Video dekodiert werden kann und ob die Dekodierung ruckelfrei und energieeffizient erfolgt. Sie können auch die Dekodierung von Audio sowie die Kodierung von Video und Audio prüfen.

### Eine Videodekodierungskonfiguration erstellen

Die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) erwartet eine Mediendekodierungskonfiguration als Parameter.

In unserem Beispiel prüfen wir die Dekodierungsfähigkeit für eine Videokonfiguration. Die Konfiguration benötigt den Typ des zu prüfenden Mediums – beispielsweise eine gewöhnliche `file` oder [`MediaSource`](/de/docs/Web/API/MediaSource) – sowie ein Videokonfigurationsobjekt mit Werten für `contentType`, `width`, `height`, `bitrate` und `framerate`:

- `contentType` muss ein String sein, der einen [gültigen Video-MIME-Typ](/de/docs/Web/Media/Guides/Formats/Video_codecs) angibt.
- `width` und `height` sind die horizontalen und vertikalen Abmessungen des Videos. Sie werden auch zur Bestimmung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verwendet.
- `bitrate` gibt die Anzahl der Bits an, mit denen eine Sekunde Video kodiert wird.
- `framerate` gibt die Anzahl der Bilder an, die bei der Wiedergabe pro Sekunde angezeigt werden.

```js
const videoConfiguration = {
  type: "file",
  video: {
    contentType: "video/webm;codecs=vp8",
    width: 800,
    height: 600,
    bitrate: 10000,
    framerate: 15,
  },
};
```

Wenn wir stattdessen prüfen würden, ob eine Audiodatei dekodiert werden kann, würden wir eine Audiokonfiguration mit der Anzahl der Kanäle und der Abtastrate erstellen. Die Eigenschaften, die nur für Video gelten – nämlich die Abmessungen und die Bildrate –, würden wir weglassen:

```js
const audioConfiguration = {
  type: "file",
  audio: {
    contentType: "audio/ogg",
    channels: 2,
    bitrate: 132700,
    samplerate: 5200,
  },
};
```

Zur Prüfung der Kodierungsfähigkeiten würden wir eine etwas andere Konfiguration erstellen. In diesem Fall ist der Typ des zu prüfenden Mediums entweder `record` (für die Aufzeichnung von Medien, also mit einem [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt) oder `transmission` (für die elektronische Übertragung von Medien, beispielsweise mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)). Hinzu kommt eine Audio- oder Videokonfiguration wie oben beschrieben.

### Die Dekodierungsfähigkeiten des Browsers abfragen

Nachdem wir eine Videodekodierungskonfiguration erstellt haben, können wir sie an die Methode [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergeben. So lässt sich feststellen, ob ein Video mit dieser Konfiguration dekodiert werden kann und ob die Wiedergabe ruckelfrei und energieeffizient wäre.

```js
let promise = navigator.mediaCapabilities.decodingInfo(videoConfiguration);
```

Sowohl `decodingInfo()` als auch [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) geben Promises zurück. Sobald das jeweilige Promise erfüllt ist, können Sie auf die Eigenschaften `supported`, `smooth` und `powerEfficient` des zurückgegebenen Objekts zugreifen.

### Die Antwort verarbeiten

Anstatt das Promise einer Variablen zuzuweisen, können wir die von ihm gelieferten Werte auf der Konsole ausgeben:

```js
navigator.mediaCapabilities.decodingInfo(videoConfiguration).then((result) => {
  console.log(
    `This configuration is ${result.supported ? "" : "not "}supported,`,
  );
  console.log(`${result.smooth ? "" : "not "}smooth, and`);
  console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
});
```

## Fehler behandeln

In unserem Beispiel zur Videodekodierung würde ein {{jsxref("TypeError")}} ausgelöst, wenn die an [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergebene Medienkonfiguration ungültig wäre. Dafür kommen mehrere Ursachen infrage:

- Der angegebene `type` ist keiner der beiden zulässigen Werte: `file` oder `media-source`.
- `contentType` ist kein gültiger Codec-MIME-Typ.
- Erforderliche Angaben im Videokonfigurationsobjekt sind ungültig oder fehlen.

```js
navigator.mediaCapabilities
  .decodingInfo(videoConfiguration)
  .then(() => console.log("It worked"))
  .catch((error) => console.error(`It failed: ${error}`));
```

## Interaktives Beispiel zur Media Capabilities API

### HTML

```html
<form>
  <p>
    Select your video configuration and find out if this browser supports the
    codec, and whether decoding will be smooth and power efficient:
  </p>
  <ul>
    <li>
      <label for="codec">Select a codec</label>
      <select id="codec">
        <option>video/webm; codecs=vp8</option>
        <option>video/webm; codecs=vp9</option>
        <option>video/mp4; codecs=avc1</option>
        <option>video/mp4; codecs=avc1.420034</option>
        <option>invalid</option>
      </select>
    </li>
    <li>
      <label for="size">Select a size</label>
      <select id="size">
        <option>7680x4320</option>
        <option>3840x2160</option>
        <option>2560x1440</option>
        <option>1920x1080</option>
        <option>1280x720</option>
        <option selected>800x600</option>
        <option>640x480</option>
        <option>320x240</option>
        <option value=" x ">none</option>
      </select>
    </li>
    <li>
      <label for="framerate">Select a framerate</label>
      <select id="framerate">
        <option>60</option>
        <option>50</option>
        <option>30</option>
        <option>24</option>
        <option selected>15</option>
      </select>
    </li>
    <li>
      <label for="bitrate">Select a bitrate</label>
      <select id="bitrate">
        <option>4000</option>
        <option>2500</option>
        <option>800</option>
      </select>
    </li>
  </ul>
  <p>
    <input type="button" value="Test this Video Configuration" id="try-it" />
  </p>
</form>

<ul id="results"></ul>
```

### CSS

```css
li {
  margin: 1em;
}
```

### JavaScript

```js
let mc = {
  videoConfiguration: {},

  tryIt() {
    mc.createConfiguration();
    mc.testIt();
  },

  createConfiguration() {
    const size = document.getElementById("size").value.split("x");
    mc.videoConfiguration = {
      type: "file",
      video: {
        contentType: document.getElementById("codec").value,
        width: size[0],
        height: size[1],
        bitrate: document.getElementById("bitrate").value,
        framerate: document.getElementById("framerate").value,
      },
    };
  },

  testIt() {
    let content = "";
    navigator.mediaCapabilities
      .decodingInfo(mc.videoConfiguration)
      .then((result) => {
        const li = document.createElement("li"),
          mcv = mc.videoConfiguration.video;
        content = `A ${mcv.width}x${mcv.height}, ${mcv.contentType} at ${
          mcv.framerate
        }fps and ${mcv.bitrate} bps video ${
          result.supported ? " IS " : "IS NOT "
        } supported,`;
        content += `${result.smooth ? " IS " : " is NOT "} smooth, and`;
        content += `${
          result.powerEfficient ? " IS " : " IS NOT "
        }power efficient.`;
        const ul = document.getElementById("results");
        li.textContent = content;
        ul.appendChild(li);
      })
      .catch((error) => {
        const li = document.createElement("li"),
          ul = document.getElementById("results");
        li.textContent = `Codec ${mc.videoConfiguration.video.contentType} threw an error: ${error}`;
        ul.appendChild(li);
      });
  },
};

document.getElementById("try-it").addEventListener("click", mc.tryIt);
```

### Ergebnis

{{EmbedLiveSample('Media_Capabilities_live_example', '100%', '400')}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities)
