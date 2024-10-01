---
title: Verwendung der Media Capabilities API
slug: Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("Media Capabilities API")}}

Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) bietet mehrere wichtige Funktionen, die Ihnen helfen, besser zu entscheiden, wie Medien behandelt werden sollen, und auch zu bestimmen, wie gut Medien in Echtzeit verarbeitet werden.

Diese Funktionen umfassen:

- Die Möglichkeit, den Browser abzufragen, um seine Fähigkeit zu bestimmen, Medien mit einem festgelegten Satz von Kodierungsparametern zu kodieren oder zu dekodieren. Diese Parameter können Codecs, Auflösungen, Bitraten, Bildraten und andere solche Details umfassen. Mit der Media Capabilities API können Sie nicht nur feststellen, ob der Browser ein bestimmtes Format unterstützen kann, sondern auch, ob er dies effizient und reibungslos tun kann. Kurz gesagt, diese API ersetzt und verbessert die Methode [`isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [`MediaSource`](/de/docs/Web/API/MediaSource) oder die Methode [`canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement).
- Immer genauere Informationen über die Eigenschaften des Displays, sodass fundierte Entscheidungen bei der Auswahl des besten Formats zum Abspielen auf dem Gerät des Nutzers getroffen werden können. Zum Beispiel können Sie die API nutzen, um sicherzustellen, dass Sie keine High Dynamic Range (HDR)-Inhalte auf einem Standard Dynamic Range (SDR)-Bildschirm abspielen.
- Unterstützung für das Abrufen von Echtzeit-Feedback zur Medienwiedergabe, sodass Ihr Code fundierte Entscheidungen zur Anpassung der Stream-Qualität oder anderer Einstellungen treffen kann, um die wahrgenommene Medienleistung und -qualität zu verwalten. Eine Funktion davon ist die Fähigkeit, zu erkennen, wann das Gerät die Grafikprozessoren wechselt, sodass Sie basierend auf den neuen Fähigkeiten des Grafikprozessors entsprechende Anpassungen vornehmen können.

> [!NOTE]
> Die in dem dritten Punkt erwähnte Funktionalität der Anzeigeeigenschaften ist noch in keinem Browser verfügbar. Sie wird eine nützliche Funktion der API sein, sobald sie verfügbar ist, aber es besteht eine hohe Wahrscheinlichkeit, dass sich die Funktionalität der Anzeigeeigenschaften erheblich ändern wird, bevor Browser-Implementierungen erscheinen.

## Das MediaCapabilities-Interface

Das [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Interface ist über die [`mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities)-Eigenschaft verfügbar, die sowohl vom `navigator`-Objekt als auch vom [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt bereitgestellt wird; mit anderen Worten, die Media Capabilities API ist sowohl im Haupt-Thread als auch von Workern aus verfügbar.

Wenn das Objekt existiert, ist die Media Capabilities API verfügbar. Sie können daher die API auf folgende Weise auf ihre Anwesenheit testen:

```js
if ("mediaCapabilities" in navigator) {
  // mediaCapabilities is available
} else {
  // mediaCapabilities IS NOT available
}
```

Wenn wir als Beispiel Video nehmen, um Informationen über die Videodekodierungsfähigkeiten zu erhalten, erstellen Sie eine Video-Dekodierungskonfiguration, die Sie als Parameter an die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergeben. Dies gibt ein Versprechen zurück, das mit Informationen über die Medienfähigkeiten erfüllt wird, ob das Video dekodiert werden kann und ob die Dekodierung reibungslos und energieeffizient sein wird. Sie können auch die Audiodekodierung sowie die Video- und Audiokodierung testen.

### Erstellen einer Video-Dekodierungskonfiguration

Die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) nimmt als Parameter eine Medien-Dekodierungskonfiguration.

In unserem Beispiel testen wir die Dekodierungsfähigkeiten einer Videokonfiguration. Die Konfiguration erfordert den Typ des zu testenden Mediums — z.B. eine einfache `file` oder [`MediaSource`](/de/docs/Web/API/MediaSource) — und ein Video-Konfigurationsobjekt, das Werte für `contentType`, `width`, `height`, `bitrate` und `framerate` enthält:

- Der `contentType` muss eine Zeichenkette sein, die einen [gültigen Video-MIME-Typ](/de/docs/Web/Media/Formats/Video_codecs) angibt.
- Die `width` und `height` sind die horizontalen und vertikalen Abmessungen des Videos; diese werden auch verwendet, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu bestimmen.
- Die `bitrate` ist die Anzahl der Bits, die zum Kodieren einer Sekunde Video verwendet werden.
- Die `framerate` ist die Anzahl der Bilder, die pro Sekunde Zeit beim Abspielen des Videos abgespielt werden.

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

Hätten wir die Dekodierbarkeit einer Audiodatei abgefragt, würden wir eine Audiokonfiguration erstellen, die die Anzahl der Kanäle und die Abtastrate beinhaltet, und die Eigenschaften, die nur für Video zutreffen — nämlich die Abmessungen und die Bildrate — weglassen:

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

Hätten wir die Kodierungsfähigkeiten getestet, hätten wir eine leicht andere Konfiguration erstellt.
In diesem Fall ist der Typ des getesteten Mediums entweder `record` (für aufgenommene Medien, d.h. ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt) oder `transmission` (für über elektronische Mittel übertragene Medien wie [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) — plus entweder eine Audio- oder Videokonfiguration, wie oben beschrieben.

### Abfrage des Browsers zu Dekodierungsfähigkeiten

Jetzt, wo wir eine Video-Dekodierungskonfiguration erstellt haben, können wir sie als Parameter der Methode [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergeben, um festzustellen, ob ein Video, das dieser Konfiguration entspricht, dekodierbar wäre und ob die Wiedergabe reibungslos und energieeffizient wäre.

```js
let promise = navigator.mediaCapabilities.decodingInfo(videoConfiguration);
```

Die Methoden `decodingInfo()` und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) geben beide Versprechen zurück.
Sobald die Versprechen erfüllt sind, können Sie auf die Eigenschaften `supported`, `smooth` und `powerEfficient` des zurückgegebenen Objekts zugreifen.

### Umgang mit der Antwort

Anstatt das Versprechen einer Variablen zuzuweisen, können wir die vom Versprechen zurückgegebenen Werte in der Konsole ausgeben:

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

In unserem Beispiel zur Videodekodierung würde ein {{jsxref("TypeError")}} ausgelöst, wenn die der Methode [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergebene Medienkonfiguration ungültig ist. Es gibt einige Gründe, warum ein Fehler auftreten könnte, darunter:

- Der angegebene `type` ist nicht einer der beiden erlaubten Werte: `file` oder `media-source`
- Der angegebene `contentType` ist

Der Fehler kann auftreten, weil der `type` nicht einer der zwei möglichen Werte ist, der `contentType` kein gültiger Codec-MIME-Typ ist oder ungültige oder weggelassene Definitionen aus dem Videokonfigurationsobjekt ausgelassen werden.

```js
navigator.mediaCapabilities
  .decodingInfo(videoConfiguration)
  .then(console.log("It worked"))
  .catch((error) => console.error(`It failed: ${error}`));
```

## Live-Beispiel für Media Capabilities

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
