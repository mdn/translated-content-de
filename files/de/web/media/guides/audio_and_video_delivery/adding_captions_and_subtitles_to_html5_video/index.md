---
title: Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Videos
slug: Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

In anderen Artikeln haben wir uns angesehen, wie man einen [plattformübergreifenden Videoplayer erstellt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) mithilfe der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs, und wie man den [Player stylt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel verwendet denselben Player und zeigt, wie man Bildunterschriften und Untertitel hinzufügt, indem man das [WebVTT-Format](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und das {{ htmlelement("track") }}-Element verwendet.

## Beispiel für ein Video mit Bildunterschriften

In diesem Artikel beziehen wir uns auf das Beispiel eines Videoplayers mit Bildunterschriften. Dieses Beispiel verwendet einen Auszug aus dem [Sintel-Open-Movie](https://durian.blender.org/), das von der [Blender Foundation](https://www.blender.org/about/foundation/) erstellt wurde.

![Videoplayer mit Standardsteuerungen wie Wiedergabe, Stopp, Lautstärke sowie aktivierten und deaktivierten Untertiteln. Das gezeigte Video zeigt eine Szene eines Mannes, der eine speerähnliche Waffe hält, und eine Bildunterschrift lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie finden den [Quellcode auf GitHub](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions), und können auch [das Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Bildunterschriften

Bevor wir uns ansehen, wie man Bildunterschriften zum Videoplayer hinzufügt, gibt es einige Dinge, die wir zuerst erwähnen werden und die Sie wissen sollten.

### Bildunterschriften versus Untertitel

[Bildunterschriften und Untertitel sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben signifikant unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Es wird empfohlen, sich über die Unterschiede zu informieren, wenn Sie sich nicht sicher sind. Sie sind jedoch technisch auf die gleiche Weise implementiert, sodass das Material in diesem Artikel für beide gilt.

Für diesen Artikel beziehen wir uns auf die angezeigten Textspuren als Untertitel, da ihr Inhalt für hörende Menschen gedacht ist, die Schwierigkeiten haben, die Sprache des Films zu verstehen, anstatt für gehörlose oder schwerhörige Menschen.

### Das `<track>`-Element

HTML ermöglicht es uns, Untertitel für ein Video mithilfe des {{ htmlelement("track") }}-Elements anzugeben. Die verschiedenen Attribute dieses Elements ermöglichen es uns, Dinge wie die Art der hinzuzufügenden Inhalte, die Sprache und natürlich einen Verweis auf die Textdatei, die die eigentlichen Untertitelinformationen enthält, anzugeben.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind Textdateien, die einem bestimmten Format folgen. In diesem Fall ist es das [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT)-Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber große Teile davon sind stabil, sodass wir es heute verwenden können.

Videoprovider (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) stellen Bildunterschriften und Untertitel in einem Textformat mit ihren Videos bereit, jedoch meist im SubRip-Text (SRT)-Format. Diese können leicht mit einem Online-Konverter in WebVTT konvertiert werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen am Code des vorherigen Artikels zusammen, um das Hinzufügen von Untertiteln zum Video zu ermöglichen. Wenn Sie daran nicht interessiert sind und direkt zu JavaScript und den relevanteren CSS-Teilen übergehen möchten, springen Sie zum Abschnitt [Untertitelimplementierung](#untertitelimplementierung).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich einige Dialoge enthält und sich daher besser eignet, um zu veranschaulichen, wie Untertitel funktionieren!

### HTML-Markup

Wie bereits erwähnt, müssen wir das neue HTML `<track>`-Element verwenden, um unsere Untertiteldateien dem HTML-Video hinzuzufügen. Tatsächlich haben wir unsere Untertitel in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch — daher verweisen wir auf alle drei relevanten VTT-Dateien, indem wir `<track>`-Elemente innerhalb unseres HTML `<video>`-Elements hinzufügen:

```html
<video id="video" controls preload="metadata">
  <source src="video/sintel-short.mp4" type="video/mp4" />
  <source src="video/sintel-short.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="captions/vtt/sintel-en.vtt"
    default />
  <track
    label="Deutsch"
    kind="subtitles"
    srclang="de"
    src="captions/vtt/sintel-de.vtt" />
  <track
    label="Español"
    kind="subtitles"
    srclang="es"
    src="captions/vtt/sintel-es.vtt" />
</video>
```

Wie Sie sehen können, hat jedes `<track>`-Element die folgenden Attribute gesetzt:

- `kind` erhält den Wert `subtitles`, was auf die Art der Inhalte hinweist, die die Dateien enthalten
- `label` erhält einen Wert, der angibt, für welche Sprache dieses Untertitelset gedacht ist — beispielsweise `English` oder `Deutsch` — diese Labels erscheinen in der Benutzeroberfläche, um es dem Benutzer einfach zu machen, die gewünschte Untertitelsprache auszuwählen.
- `src` wird eine gültige URL zugewiesen, die auf die jeweilige WebVTT-Untertiteldatei in jedem Fall verweist.
- `srclang` gibt an, in welcher Sprache die Inhalte der jeweiligen Untertiteldateien verfasst sind.
- Das Attribut `default` ist auf dem englischen `<track>`-Element gesetzt und zeigt dem Browser an, dass dies die Standarduntertiteldatei ist, die verwendet wird, wenn die Untertitel aktiviert wurden und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>`-Elemente haben wir auch eine neue Schaltfläche hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Infolgedessen sehen die Videosteuerungen jetzt wie folgt aus:

```html
<div id="video-controls" class="controls" data-state="hidden">
  <button id="play-pause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="vol-inc" type="button" data-state="vol-up">Vol+</button>
  <button id="vol-dec" type="button" data-state="vol-down">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
  <button id="subtitles" type="button" data-state="subtitles">CC</button>
</div>
```

### CSS-Änderungen

Die Videosteuerungen haben einige kleine Änderungen erfahren, um Platz für die zusätzliche Schaltfläche zu schaffen, aber diese sind relativ einfach.

Für die Untertitelschaltfläche wird kein Bild verwendet, daher wird sie folgendermaßen gestylt:

```css
.controls button[data-state="subtitles"] {
  height: 85%;
  text-indent: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #666666;
  background: black;
  border-radius: 2px;
}
```

Es gibt auch andere CSS-Änderungen, die spezifisch für einige zusätzliche JavaScript-Implementierungen sind, aber diese werden an der entsprechenden Stelle unten erwähnt.

## Untertitelimplementierung

Viel von dem, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen wird, sofern ein Browser HTML-Video-Untertitel unterstützt, im nativen Steuerungssatz ein Button zur Verfügung gestellt, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist diese Schaltfläche ausgeblendet, und wir müssen unsere eigenen definieren.

Browser variieren, was sie unterstützen, daher werden wir versuchen, eine einheitlichere Benutzeroberfläche für jeden Browser bereitzustellen, wo immer dies möglich ist. Mehr dazu bei den Browser-Kompatibilitätsproblemen später.

### Ersteinrichtung

Wie bei allen anderen Schaltflächen müssen wir als eine der ersten Aufgaben einen Handler für die Untertitel-Schaltfläche speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch anfangs alle Untertitel aus, falls der Browser eine von ihnen standardmäßig aktiviert:

```js
for (const track of video.textTracks) {
  track.mode = "hidden";
}
```

Die `video.textTracks`-Eigenschaft enthält ein Array aller an das Video angehängten Textspuren. Wir durchlaufen jede davon und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT API](https://w3c.github.io/webvtt/#api) gibt uns Zugriff auf alle Textspuren, die für ein HTML-Video mit dem `<track>`-Element definiert sind.

### Erstellung eines Untertitelmenüs

Unser Ziel ist es, die `subtitles`-Schaltfläche, die wir zuvor hinzugefügt haben, zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, die Sprache auszuwählen, in der die Untertitel angezeigt werden sollen, oder sie ganz auszuschalten.

Wir haben die Schaltfläche hinzugefügt, aber bevor wir etwas damit anfangen, müssen wir das Menü erstellen, das dazu gehört. Dieses Menü wird dynamisch erstellt, sodass später durch Bearbeitung der `<track>`-Elemente innerhalb des Video-Markups Sprachen hinzugefügt oder entfernt werden können.

Alles, was wir tun müssen, ist durch die `textTracks` des Videos zu gehen, ihre Eigenschaften auszulesen und das Menü daraus zu erstellen:

```js
let subtitlesMenu;
if (video.textTracks) {
  const df = document.createDocumentFragment();
  subtitlesMenu = df.appendChild(document.createElement("ul"));
  subtitlesMenu.className = "subtitles-menu";
  subtitlesMenu.appendChild(createMenuItem("subtitles-off", "", "Off"));
  for (const track of video.textTracks) {
    subtitlesMenu.appendChild(
      createMenuItem(
        `subtitles-${track.language}`,
        track.language,
        track.label,
      ),
    );
  }
  videoContainer.appendChild(subtitlesMenu);
}
```

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, die es dem Benutzer ermöglicht, alle Untertitel auszuschalten, und dann werden für jede Textspur Schaltflächen hinzugefügt, indem die Sprache und das Label ausgelesen werden.

Die Erstellung jedes Listenelements und der Schaltfläche erfolgt durch die Funktion `createMenuItem()`, die wie folgt definiert ist:

```js
const subtitleMenuButtons = [];
function createMenuItem(id, lang, label) {
  const listItem = document.createElement("li");
  const button = listItem.appendChild(document.createElement("button"));
  button.setAttribute("id", id);
  button.className = "subtitles-button";
  if (lang.length > 0) button.setAttribute("lang", lang);
  button.value = label;
  button.setAttribute("data-state", "inactive");
  button.appendChild(document.createTextNode(label));
  button.addEventListener("click", (e) => {
    // Set all buttons to inactive
    subtitleMenuButtons.forEach((button) => {
      button.setAttribute("data-state", "inactive");
    });

    // Find the language to activate
    const lang = button.getAttribute("lang");
    for (const track of video.textTracks) {
      // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
      if (track.language === lang) {
        track.mode = "showing";
        button.setAttribute("data-state", "active");
      } else {
        track.mode = "hidden";
      }
    }
    subtitlesMenu.style.display = "none";
  });
  subtitleMenuButtons.push(button);
  return listItem;
}
```

Diese Funktion erstellt die erforderlichen {{ htmlelement("li") }}- und {{ htmlelement("button") }}-Elemente und gibt sie zurück, damit sie zur Untertitelliste hinzugefügt werden können. Außerdem werden die erforderlichen Ereignis-Listener auf der Schaltfläche eingerichtet, um den jeweiligen Untertitel ein- oder auszuschalten. Dies geschieht, indem das erforderliche `mode`-Attribut des Untertitels auf `showing` gesetzt wird und die anderen auf `hidden`.

Sobald das Menü erstellt wurde, wird es am unteren Rand des videoContainer in das DOM eingefügt.

Anfangs ist das Menü standardmäßig versteckt, daher muss ein Ereignis-Listener zu unserer Untertitelschaltfläche hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitelmenü

Wir haben auch etwas grundlegendes Styling für das neu erstellte Untertitelmenü hinzugefügt:

```css
.subtitles-menu {
  display: none;
  position: absolute;
  bottom: 14.8%;
  right: 20px;
  background: #666666;
  list-style-type: none;
  margin: 0;
  width: 100px;
  padding: 10px;
}

.subtitles-menu li {
  padding: 0;
  text-align: center;
}

.subtitles-menu li button {
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}
```

## Styling der angezeigten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die einzelnen Untertitel (etwas, das als Text-Cues bezeichnet wird) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Der `::cue`-Pseudoelement ist der Schlüssel zum Styling einzelner Text-Track-Cues, da er jedes definierte Cue zuordnen kann. Es gibt nur eine Handvoll CSS-Eigenschaften, die auf einen Text-Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Kurzform-Eigenschaften
- {{ cssxref("outline") }} Kurzform-Eigenschaften
- {{ cssxref("font") }} Kurzform-Eigenschaften, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Zum Beispiel, um die Textfarbe der Text-Track-Cues zu ändern, können Sie folgendes schreiben:

```css
::cue {
  color: #cccccc;
}
```

Wenn die WebVTT-Datei [voice spans](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die es ermöglichen, Cues als eine bestimmte "Stimme" zu definieren:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann wird diese spezielle 'Stimme' wie folgt stylbar sein:

```css
::cue(v[voice="Test"]) {
  color: white;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stylings von Cues mit ::cue funktionieren momentan in Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browser-Kompatibilität

[Browser-Unterstützung für WebVTT und das `<track>`-Element](https://caniuse.com/webvtt) ist recht gut, obwohl einige Browser geringfügig in ihrer Implementation abweichen.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerungen enthalten eine Schaltfläche und ein Menü, das dieselbe Funktionalität wie das von uns erstellte Menü bietet, zusammen mit einer "Auto"-Option, die es dem Browser ermöglicht, eine Auswahl zu treffen. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben wiederum ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert, und das Standardsatz der Steuerungen enthält eine 'cc'-Schaltfläche, die Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default`-Attribut des `<track>`-Elements und versuchen stattdessen, die Sprache des Browsers mit der Sprache der Untertitel abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Unterstützung für Bildunterschriften und Untertitel bieten und die Sie anstelle Ihrer eigenen Implementierung verwenden können.
Sie können im Internet nach ihnen suchen, indem Sie Suchbegriffe wie _"HTML video player plugin"_ verwenden.
