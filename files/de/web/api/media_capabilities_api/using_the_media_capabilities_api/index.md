---
title: Verwendung der Media Capabilities API
slug: Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API
l10n:
  sourceCommit: 3015891c7bd9fd9a8e11521b59ae674d6d5b1b7a
---

{{APIRef("Media Capabilities API")}}

Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) bietet mehrere wichtige Funktionen, die Ihnen helfen, besser zu entscheiden, wie Medien gehandhabt werden sollen, und auch um festzustellen, wie gut Medien in Echtzeit verarbeitet werden.

Zu diesen Funktionen gehören:

- Die Möglichkeit, den Browser abzufragen, um seine Fähigkeit zur Kodierung oder Dekodierung von Medien mit einer bestimmten Reihe von Kodierungsparametern zu ermitteln. Diese Parameter können Codecs, Auflösungen, Bitraten, Bildraten und andere Details umfassen. Mit der Media Capabilities API können Sie nicht nur feststellen, ob der Browser ein bestimmtes Format unterstützt, sondern auch, ob er dies effizient und reibungslos tun kann. Kurz gesagt ersetzt und verbessert diese API die Methode {{domxref("MediaSource")}} {{domxref("MediaSource/isTypeSupported_static", "isTypeSupported()")}} oder die Methode {{domxref("HTMLMediaElement")}} {{domxref("HTMLMediaElement.canPlayType","canPlayType()")}}.
- Immer detailliertere Informationen über die Eigenschaften des Displays, sodass fundierte Entscheidungen getroffen werden können, wenn das beste Format für die Wiedergabe auf dem Gerät des Benutzers gewählt wird. Zum Beispiel können Sie die API nutzen, um sicherzustellen, dass Sie nicht versuchen, High Dynamic Range (HDR) Inhalte auf einem Standard Dynamic Range (SDR) Bildschirm abzuspielen.
- Unterstützung für das Abrufen von Echtzeit-Feedback zur Medienwiedergabe, sodass Ihr Code fundierte Entscheidungen über die Anpassung der Stream-Qualität oder andere Einstellungen treffen kann, um die wahrgenommene Medienleistung und Qualität des Benutzers zu verwalten. Eine Funktion davon ist die Fähigkeit, zu erkennen, wann das Gerät die GPU wechselt, sodass Sie auf Grundlage der Fähigkeiten der neuen GPU entsprechende Anpassungen vornehmen können.

> [!NOTE]
> Die in dem dritten Punkt oben erwähnte Funktionalität zur Anzeige von Fähigkeiten ist in keinem Browser bisher verfügbar. Sie wird jedoch eine nützliche Funktion der API sein, sobald sie verfügbar ist, aber es besteht eine hohe Wahrscheinlichkeit, dass sich die Funktionalität zur Anzeige von Fähigkeiten erheblich ändert, bevor Implementierungen in Browsern erscheinen.

## Die MediaCapabilities Schnittstelle

Die {{domxref("MediaCapabilities")}} ist über die Eigenschaft {{domxref("Navigator.mediaCapabilities", "mediaCapabilities")}} verfügbar, die sowohl vom `navigator`-Objekt als auch vom {{domxref("WorkerNavigator")}}-Objekt bereitgestellt wird; mit anderen Worten, die Media Capabilities API ist sowohl im Hauptthread als auch aus Arbeitern verfügbar.

Wenn das Objekt existiert, ist die Media Capabilities API verfügbar. Sie können daher die Anwesenheit der API wie folgt testen:

```js
if ("mediaCapabilities" in navigator) {
  // mediaCapabilities ist verfügbar
} else {
  // mediaCapabilities ist NICHT verfügbar
}
```

Nehmen wir als Beispiel ein Video: Um Informationen über die Videodekodierungsfähigkeiten zu erhalten, erstellen Sie eine Videodekodierungskonfiguration, die Sie als Parameter an die Methode {{domxref("MediaCapabilities.decodingInfo()")}} übergeben. Diese gibt ein Versprechen zurück, das mit Informationen über die Medienfähigkeiten auflöst, ob das Video dekodiert werden kann und ob die Dekodierung reibungslos und energieeffizient ist. Sie können auch die Audiodekodierung sowie Video- und Audiokodierung testen.

### Erstellen einer Videodekodierungskonfiguration

Die Methode {{domxref("MediaCapabilities.decodingInfo()")}} nimmt als Parameter eine Medien-Dekodierungskonfiguration.

In unserem Beispiel testen wir die Dekodierungsfähigkeiten einer Videokonfiguration. Die Konfiguration erfordert den Typ des zu testenden Mediums – z.B. eine einfache `file` oder {{domxref("MediaSource")}} – und ein Videokonfigurationsobjekt, das Werte für den `contentType`, `width`, `height`, `bitrate` und `framerate` enthält:

- Der `contentType` muss eine Zeichenkette sein, die einen [gültigen Video-MIME-Typ](/de/docs/Web/Media/Formats/Video_codecs) angibt.
- Die `width` und `height` sind die horizontalen und vertikalen Abmessungen des Videos; sie werden auch verwendet, um das {{glossary("aspect ratio")}} zu bestimmen.
- Die `bitrate` ist die Anzahl der Bits, die verwendet werden, um eine Sekunde Video zu kodieren.
- Die `framerate` ist die Anzahl der Bilder, die pro Sekunde beim Abspielen des Videos wiedergegeben werden.

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

Wenn wir die Dekodierbarkeit einer Audiodatei abfragen würden, würden wir eine Audiokonfiguration erstellen, die die Anzahl der Kanäle und die Abtastrate umfasst, und die nur für Video geltenden Eigenschaften - nämlich die Abmessungen und die Bildrate - weglassen:

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

Wäre die Testung von Kodierungsfähigkeiten unser Ziel, würden wir eine leicht unterschiedliche Konfiguration erstellen. In diesem Fall ist der Medientyp entweder `record` (für die Aufnahme von Medien, d.h. ein {{domxref("MediaRecorder")}}-Objekt) oder `transmission` (für über elektronische Mittel übertragene Medien wie [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) — plus entweder eine Audio- oder Videokonfiguration wie oben beschrieben.

### Abfrage des Browsers über Dekodierfähigkeiten

Nachdem wir nun eine Videodekodierungskonfiguration erstellt haben, können wir sie als Parameter der Methode {{domxref("MediaCapabilities.decodingInfo", "decodingInfo()")}} übergeben, um festzustellen, ob ein Video, das dieser Konfiguration entspricht, dekodierbar wäre und ob die Wiedergabe reibungslos und energieeffizient wäre.

```js
let promise = navigator.mediaCapabilities.decodingInfo(videoConfiguration);
```

Die Methoden `decodingInfo()` und {{domxref("MediaCapabilities.encodingInfo", "encodingInfo()")}} geben beide Versprechen zurück. Sobald die Zustände des Versprechens erfüllt sind, können Sie auf die Eigenschaften `supported`, `smooth` und `powerEfficient` des zurückgegebenen Objekts zugreifen.

### Umgang mit der Antwort

Statt das Versprechen einer Variable zuzuweisen, können wir die vom Versprechen zurückgegebenen Werte in der Konsole ausgeben:

```js
navigator.mediaCapabilities.decodingInfo(videoConfiguration).then((result) => {
  console.log(
    `Diese Konfiguration ist ${result.supported ? "" : "nicht "}unterstützt,`,
  );
  console.log(`${result.smooth ? "" : "nicht "}reibungsfrei, und`);
  console.log(`${result.powerEfficient ? "" : "nicht "}energieeffizient.`);
});
```

## Umgang mit Fehlern

In unserem Beispiel zur Videodekodierung würde ein {{jsxref("TypeError")}} ausgelöst, wenn die an die Methode {{domxref("MediaCapabilities.decodingInfo", "decodingInfo()")}} übergebene Medienkonfiguration ungültig wäre. Es gibt einige Gründe, warum ein Fehler auftreten könnte, darunter:

- Der angegebene `type` ist nicht einer der beiden zulässigen Werte: `file` oder `media-source`
- Der angegebene `contentType` ist

Der Fehler kann darauf zurückzuführen sein, dass der `type` nicht einer der beiden möglichen Werte ist, der `contentType` kein gültiger Codec-MIME-Typ ist oder ungültige oder weggelassene Definitionen aus dem Videokonfigurationsobjekt fehlen.

```js
navigator.mediaCapabilities
  .decodingInfo(videoConfiguration)
  .then(console.log("Es hat funktioniert"))
  .catch((error) => console.error(`Es ist fehlgeschlagen: ${error}`));
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
    Wählen Sie Ihre Videokonfiguration und finden Sie heraus, ob dieser Browser den
    Codec unterstützt und ob die Dekodierung reibungslos und energieeffizient sein wird:
  </p>
  <ul>
    <li>
      <label for="codec">Wählen Sie einen Codec</label>
      <select id="codec">
        <option>video/webm; codecs=vp8</option>
        <option>video/webm; codecs=vp9</option>
        <option>video/mp4; codecs=avc1</option>
        <option>video/mp4; codecs=avc1.420034</option>
        <option>ungültig</option>
      </select>
    </li>
    <li>
      <label for="size">Wählen Sie eine Größe</label>
      <select id="size">
        <option>7680x4320</option>
        <option>3840x2160</option>
        <option>2560x1440</option>
        <option>1920x1080</option>
        <option>1280x720</option>
        <option selected>800x600</option>
        <option>640x480</option>
        <option>320x240</option>
        <option value=" x ">keine</option>
      </select>
    </li>
    <li>
      <label for="framerate">Wählen Sie eine Bildrate</label>
      <select id="framerate">
        <option>60</option>
        <option>50</option>
        <option>30</option>
        <option>24</option>
        <option selected>15</option>
      </select>
    </li>
    <li>
      <label for="bitrate">Wählen Sie eine Bitrate</label>
      <select id="bitrate">
        <option>4000</option>
        <option>2500</option>
        <option>800</option>
      </select>
    </li>
  </ul>
  <p>
    <input type="button" value="Diese Videokonfiguration testen" id="try-it" />
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
        content = `Ein ${mcv.width}x${mcv.height}, ${mcv.contentType} bei ${
          mcv.framerate
        }fps und ${mcv.bitrate} bps Video ${
          result.supported ? " WIRD " : "WIRD NICHT "
        } unterstützt,`;
        content += `${result.smooth ? " IST " : " IST NICHT "} reibungslos, und`;
        content += `${
          result.powerEfficient ? " IST " : " IST NICHT "
        } energieeffizient.`;
        const ul = document.getElementById("results");
        li.textContent = content;
        ul.appendChild(li);
      })
      .catch((error) => {
        const li = document.createElement("li"),
          ul = document.getElementById("results");
        li.textContent = `Codec ${mc.videoConfiguration.video.contentType} hat einen Fehler erzeugt: ${error}`;
        ul.appendChild(li);
      });
  },
};

document.getElementById("try-it").addEventListener("click", mc.tryIt);
```

### Live-Ergebnis

{{EmbedLiveSample('Media_Capabilities_live_example', '100%', '400')}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("navigator.mediaCapabilities")}}
