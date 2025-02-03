---
title: Verwendung der Media Capabilities API
slug: Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{DefaultAPISidebar("Media Capabilities API")}}

Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) bietet mehrere wichtige Funktionen, mit denen Sie besser entscheiden können, wie Medien gehandhabt werden sollen, und auch, um in Echtzeit festzustellen, wie gut Medien gehandhabt werden.

Diese Funktionen umfassen:

- Die Fähigkeit, den Browser zu befragen, um seine Fähigkeit zur Codierung oder Decodierung von Medien mit einem bestimmten Satz von Codierungsparametern zu bestimmen. Diese Parameter können die Codecs, Auflösungen, Bitraten, Bildraten und andere solche Details umfassen. Mit der Media Capabilities API können Sie nicht nur feststellen, ob der Browser ein bestimmtes Format unterstützt, sondern auch, ob er dies effizient und reibungslos tun kann. Kurz gesagt ersetzt und verbessert diese API die Methode [`isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [`MediaSource`](/de/docs/Web/API/MediaSource) oder die Methode [`canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement).
- Immer detailliertere Informationen zu den Eigenschaften des Displays, sodass fundierte Entscheidungen getroffen werden können, wenn das beste Format zur Wiedergabe auf dem Gerät des Benutzers ausgewählt wird. Beispielsweise können Sie die API verwenden, um sicherzustellen, dass Sie nicht versuchen, Inhalte im High Dynamic Range (HDR) auf einem Bildschirm mit Standard Dynamic Range (SDR) abzuspielen.
- Unterstützung für das Abrufen von Echtzeit-Feedback über die Wiedergabe von Medien, sodass Ihr Code fundierte Entscheidungen darüber treffen kann, die Qualität des Streams oder andere Einstellungen anzupassen, um die wahrgenommene Medienleistung und Qualität des Benutzers zu verwalten. Eine Funktion davon ist die Möglichkeit zu erkennen, wann das Gerät die GPUs wechselt, sodass Sie entsprechende Anpassungen basierend auf den Fähigkeiten der neuen GPU vornehmen können.

> [!NOTE]
> Die Funktionalität zur Anzeige der Fähigkeiten, die im obigen dritten Punkt erwähnt wird, ist in keinem Browser erschienen. Sie wird jedoch eine nützliche Funktion der API sein, sobald sie verfügbar ist, aber es besteht eine hohe Wahrscheinlichkeit, dass sich die Funktionalität zur Anzeige der Fähigkeiten erheblich ändern wird, bevor die Browserimplementierungen erscheinen.

## Die MediaCapabilities-Schnittstelle

Die [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) ist über die Eigenschaft [`mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) verfügbar, die sowohl vom `navigator`-Objekt als auch vom [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) -Objekt bereitgestellt wird; mit anderen Worten, die Media Capabilities API ist sowohl im Hauptthread als auch in Workern verfügbar.

Wenn das Objekt existiert, ist die Media Capabilities API verfügbar. Sie können daher die Präsenz der API wie folgt testen:

```js
if ("mediaCapabilities" in navigator) {
  // mediaCapabilities is available
} else {
  // mediaCapabilities IS NOT available
}
```

Nehmen Sie als Beispiel Video, um Informationen über die Video-Decodierungsfähigkeiten zu erhalten. Sie erstellen eine Videodekodierungskonfiguration, die Sie als Parameter an die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergeben. Dies gibt ein Promise zurück, das mit Informationen über die Medienfähigkeiten erfüllt wird, ob das Video decodiert werden kann und ob die Decodierung reibungslos und energieeffizient ist. Sie können auch die Audio-Decodierung sowie die Video- und Audio-Codierung testen.

### Eine Video-Decodierungskonfiguration erstellen

Die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) nimmt als Parameter eine Mediendekodierungskonfiguration.

In unserem Beispiel testen wir die Dekodierungsfähigkeiten einer Videokonfiguration. Die Konfiguration erfordert den Typ des getesteten Mediums — z.B. eine einfache `file` oder [`MediaSource`](/de/docs/Web/API/MediaSource) — und ein Videokonfigurationsobjekt, das Werte für den `contentType`, die `width`, die `height`, die `bitrate` und die `framerate` enthält:

- Der `contentType` muss eine Zeichenkette sein, die einen [gültigen MIME-Typ für Videos](/de/docs/Web/Media/Guides/Formats/Video_codecs) angibt.
- Die `width` und `height` sind die horizontalen und vertikalen Abmessungen des Videos; sie werden auch verwendet, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu bestimmen.
- Die `bitrate` ist die Anzahl der Bits, die verwendet werden, um eine Sekunde Video zu codieren.
- Die `framerate` ist die Anzahl der Bilder, die pro Sekunde bei der Videowiedergabe abgespielt werden.

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

Hätten wir die Decodierfähigkeit einer Audiodatei abgefragt, würden wir eine Audiokonfiguration erstellen, die die Anzahl der Kanäle und die Abtastrate enthält und die Eigenschaften weglassen, die nur für Video gelten, nämlich die Abmessungen und die Bildrate:

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

Hätten wir die Codierungsfähigkeiten getestet, hätten wir eine leicht abgewandelte Konfiguration erstellt. In diesem Fall ist der getestete Medientyp entweder `record` (für das Aufzeichnen von Medien, d.h. ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt) oder `transmission` (für Medien, die über elektronische Mittel, wie z.B. [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), übertragen werden) — und zusätzlich entweder eine Audio- oder Videokonfiguration wie oben beschrieben.

### Den Browser nach Decodierungsfähigkeiten abfragen

Da wir nun eine Videodekodierungskonfiguration erstellt haben, können wir sie als Parameter der Methode [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergeben, um festzustellen, ob ein Video mit dieser Konfiguration dekodierbar wäre und ob die Wiedergabe reibungslos und energieeffizient wäre.

```js
let promise = navigator.mediaCapabilities.decodingInfo(videoConfiguration);
```

Die Methoden `decodingInfo()` und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) geben beide Promises zurück. Sobald die Promise-Zustände erfüllt sind, können Sie auf die Eigenschaften `supported`, `smooth` und `powerEfficient` des zurückgegebenen Objekts zugreifen.

### Die Antwort verarbeiten

Anstatt das Promise einer Variablen zuzuweisen, können wir die vom Promise zurückgegebenen Werte an die Konsole ausgeben:

```js
navigator.mediaCapabilities.decodingInfo(videoConfiguration).then((result) => {
  console.log(
    `This configuration is ${result.supported ? "" : "not "}supported,`,
  );
  console.log(`${result.smooth ? "" : "not "}smooth, and`);
  console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
});
```

## Fehlerbehandlung

In unserem Beispiel zur Videodekodierung würde ein {{jsxref("TypeError")}} auftreten, wenn die an die Methode [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergebene Medienkonfiguration ungültig war. Es gibt einige Gründe, warum ein Fehler auftreten könnte, einschließlich:

- Der angegebene `type` ist nicht einer der beiden erlaubten Werte: `file` oder `media-source`
- Der `contentType` ist

Der Fehler kann auftreten, weil der `type` nicht einer der beiden möglichen Werte ist, der `contentType` kein gültiger Codec-MIME-Typ ist oder ungültige oder weggelassene Definitionen im Videokonfigurationsobjekt fehlen.

```js
navigator.mediaCapabilities
  .decodingInfo(videoConfiguration)
  .then(console.log("It worked"))
  .catch((error) => console.error(`It failed: ${error}`));
```

## Live-Beispiel der Media Capabilities

### CSS

```css
li {
  margin: 1em;
}
```

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

### JavaScript

```js
let mc = {
  videoConfiguration: new Object(),

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

### Live-Ergebnis

{{EmbedLiveSample('Media_Capabilities_live_example', '100%', '400')}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities)
