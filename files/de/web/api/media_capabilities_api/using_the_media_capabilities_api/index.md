---
title: Verwendung der Media Capabilities API
slug: Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Media Capabilities API")}}

Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) bietet mehrere wichtige Funktionen, die Ihnen helfen, besser zu entscheiden, wie Medien behandelt werden sollen. Sie ermöglicht auch festzustellen, wie gut Medien in Echtzeit verarbeitet werden.

Diese Funktionen umfassen:

- Die Möglichkeit, den Browser zu befragen, um seine Fähigkeit zur Kodierung oder Dekodierung von Medien mit einem bestimmten Satz von Kodierungsparametern zu bestimmen. Diese Parameter können Codecs, Auflösungen, Bitraten, Bildraten und ähnliche Details enthalten. Mit der Media Capabilities API können Sie nicht nur feststellen, ob der Browser ein bestimmtes Format unterstützt, sondern auch, ob er dies effizient und reibungslos tun kann. Kurz gesagt, diese API ersetzt und verbessert die [`MediaSource`](/de/docs/Web/API/MediaSource)-Methode [`isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) oder die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Methode [`canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType).
- Immer detailliertere Informationen über die Eigenschaften des Bildschirms, sodass fundierte Entscheidungen getroffen werden können, wenn das beste Format für das Gerät des Benutzers ausgewählt wird. Zum Beispiel können Sie die API verwenden, um sicherzustellen, dass Sie keine High Dynamic Range (HDR)-Inhalte auf einem Standard Dynamic Range (SDR)-Bildschirm abspielen versuchen.
- Unterstützung für das Erhalten von Echtzeit-Feedback über die Wiedergabe von Medien, damit Ihr Code fundierte Entscheidungen über die Anpassung der Stream-Qualität oder andere Einstellungen treffen kann, um die vom Benutzer wahrgenommene Medienleistung und -qualität zu verwalten. Eine Funktion davon ist die Möglichkeit zu erkennen, wann das Gerät GPUs wechselt, sodass Sie entsprechende Anpassungen basierend auf den Fähigkeiten der neuen GPU vornehmen können.

> [!NOTE]
> Die im dritten Punkt genannten Display-Kapazitäts-Funktionalitäten sind noch in keinem Browser verfügbar. Sie werden eine nützliche Funktion der API sein, sobald sie verfügbar sind, aber es besteht eine hohe Wahrscheinlichkeit, dass sich die Funktionalität der Display-Kapazitäten erheblich ändern, bevor Browser-Implementierungen erscheinen.

## Das MediaCapabilities-Interface

Das [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Interface ist über die [`mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities)-Eigenschaft verfügbar, die sowohl vom `navigator`-Objekt als auch vom [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt bereitgestellt wird. Mit anderen Worten, die Media Capabilities API ist sowohl im Haupt-Thread als auch von Arbeitern aus verfügbar.

Wenn das Objekt existiert, ist die Media Capabilities API verfügbar. Sie können daher auf das Vorhandensein der API wie folgt testen:

```js
if ("mediaCapabilities" in navigator) {
  // mediaCapabilities is available
} else {
  // mediaCapabilities IS NOT available
}
```

Am Beispiel von Video: Um Informationen über Videodekodierfähigkeiten zu erhalten, erstellen Sie eine Videodekodierkonfiguration, die Sie als Parameter an die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergeben. Diese gibt ein Promise zurück, das mit Informationen über die Medienfähigkeiten erfüllt wird, ob das Video dekodiert werden kann und ob die Dekodierung reibungslos und energieeffizient sein wird. Sie können auch die Audiodekodierung sowie Video- und Audiokodierung testen.

### Erstellen einer Videodekodierkonfiguration

Die Methode [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) nimmt als Parameter eine Mediendekodierkonfiguration entgegen.

In unserem Beispiel testen wir die Dekodierfähigkeiten einer Videokonfiguration. Die Konfiguration erfordert den Typ der getesteten Medien — z.B. eine einfache `file` oder [`MediaSource`](/de/docs/Web/API/MediaSource) — und ein Videokonfigurationsobjekt, das Werte für `contentType`, `width`, `height`, `bitrate` und `framerate` enthält:

- Der `contentType` muss ein String sein, der einen [gültigen Video-MIME-Typ](/de/docs/Web/Media/Guides/Formats/Video_codecs) angibt.
- Die `width` und `height` sind die horizontale und vertikale Dimension des Videos; diese werden auch zur Bestimmung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verwendet.
- Die `bitrate` ist die Anzahl der Bits, die verwendet werden, um eine Sekunde Video zu kodieren.
- Die `framerate` ist die Anzahl der Bilder, die pro Sekunde beim Abspielen des Videos gezeigt werden.

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

Hätten wir die Decodierbarkeit einer Audiodatei abgefragt, würden wir eine Audiokonfiguration erstellen, die die Anzahl der Kanäle und die Abtastrate beinhaltet und die Eigenschaften, die nur für Video gelten — nämlich die Abmessungen und die Bildrate — weglassen:

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

Hätten wir die Kodierungsfähigkeiten getestet, hätten wir eine etwas andere Konfiguration erstellt.
In diesem Fall ist der Typ des getesteten Mediums entweder `record` (für aufgenommene Medien, d.h. ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt) oder `transmission` (für Medien, die über elektronische Mittel wie [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) übertragen werden) — sowie entweder eine Audio- oder Videokonfiguration wie oben beschrieben.

### Abfrage des Browsers über Dekodierfähigkeiten

Nachdem wir nun eine Videodekodierkonfiguration erstellt haben, können wir sie als Parameter der Methode [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergeben, um festzustellen, ob ein Video, das dieser Konfiguration entspricht, dekodierbar wäre und ob die Wiedergabe reibungslos und energieeffizient wäre.

```js
let promise = navigator.mediaCapabilities.decodingInfo(videoConfiguration);
```

Die Methoden `decodingInfo()` und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) geben beide Promises zurück.
Sobald die Promise-Zustände erfüllt sind, können Sie auf die Eigenschaften `supported`, `smooth` und `powerEfficient` des zurückgegebenen Objekts zugreifen.

### Umgang mit der Antwort

Anstatt das Promise einer Variablen zuzuweisen, können wir die von dem Promise zurückgegebenen Werte an die Konsole ausgeben:

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

In unserem Video-Dekodierbeispiel würde ein {{jsxref("TypeError")}} ausgelöst, wenn die an die Methode [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) übergebene Medienkonfiguration ungültig ist. Es gibt einige Gründe, warum ein Fehler auftreten könnte, einschließlich:

- Der angegebene `type` ist nicht einer der beiden erlaubten Werte: `file` oder `media-source`
- Der angegebene `contentType` ist

Der Fehler kann darauf zurückzuführen sein, dass der `type` nicht einer der beiden möglichen Werte ist, der `contentType` kein gültiger Codec MIME-Typ ist, oder ungültige oder ausgelassene Definitionen im Videokonfigurationsobjekt fehlen.

```js
navigator.mediaCapabilities
  .decodingInfo(videoConfiguration)
  .then(console.log("It worked"))
  .catch((error) => console.error(`It failed: ${error}`));
```

## Media Capabilities Live-Beispiel

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
