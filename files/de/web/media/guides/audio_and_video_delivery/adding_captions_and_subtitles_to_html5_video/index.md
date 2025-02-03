---
title: Hinzufügen von Untertiteln zu HTML-Video
slug: Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

In anderen Artikeln haben wir uns angeschaut, wie man einen [browserübergreifenden Videoplayer erstellt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) mit den APIs [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) und wie man den Player [stilisiert](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel übernimmt denselben Player und zeigt, wie man Untertitel und Beschreibungen hinzufügt, unter Verwendung des [WebVTT-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und des {{ htmlelement("track") }}-Elements.

## Beispiel eines Videos mit Untertiteln

In diesem Artikel beziehen wir uns auf das Beispiel eines Videoplayers mit Untertiteln. Dieses Beispiel verwendet einen Auszug aus dem [Sintel Open Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standard-Steuerungen wie Wiedergabe, Stopp, Lautstärke und Untertitel an/aus. Das Video zeigt eine Szene eines Mannes mit einer waffenartigen Lanze, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie finden den [Quellcode auf GitHub](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions), und können das [Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir uns damit befassen, wie man Untertitel zum Videoplayer hinzufügt, gibt es einige Dinge, die wir zuerst erwähnen werden und die Sie wissen sollten, bevor wir beginnen.

### Untertitel versus Beschreibungen

[Untertitel und Beschreibungen sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Es wird empfohlen, sich über die Unterschiede zu informieren, falls Sie sich nicht sicher sind, was sie sind. Technisch gesehen werden sie jedoch auf die gleiche Weise implementiert, daher gilt das Material in diesem Artikel für beides.

Für diesen Artikel beziehen wir uns auf die Textspuren, die als Untertitel angezeigt werden, da ihr Inhalt für hörende Menschen gedacht ist, die Schwierigkeiten haben, die Sprache des Films zu verstehen, anstatt für taube oder schwerhörige Menschen.

### Das `<track>` Element

HTML erlaubt es uns, Untertitel für ein Video durch das {{ htmlelement("track") }}-Element anzugeben. Die verschiedenen Attribute dieses Elements erlauben es uns, Dinge wie die Art des hinzufügenden Inhalts, die Sprache und natürlich eine Referenz zur Textdatei, die die tatsächlichen Untertitelinformationen enthält, anzugeben.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind einfache Textdateien, die einem spezifizierten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber die wichtigsten Teile davon sind stabil, sodass wir sie heute nutzen können.

Videoprovider (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) stellen Untertitel und Beschreibungen im Textformat mit ihren Videos zur Verfügung, sie sind jedoch meistens im SubRip-Text (SRT) Format. Diese können mit einem Online-Konverter leicht in WebVTT konvertiert werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen am Code des vorherigen Artikels zusammen, um die Hinzufügung von Untertiteln zum Video zu erleichtern. Wenn Sie daran nicht interessiert sind und direkt in das JavaScript und die relevanteren CSS einsteigen möchten, überspringen Sie bitte den Abschnitt [Untertitelimplementierung](#implementierung_der_untertitel).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich etwas gesprochenen Text enthält und daher besser zur Veranschaulichung geeignet ist, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML `<track>`-Element verwenden, um unsere Untertiteldateien zum HTML-Video hinzuzufügen. Wir haben tatsächlich unsere Untertitel in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch —, sodass wir alle drei relevanten VTT-Dateien referenzieren, indem wir `<track>`-Elemente innerhalb unseres HTML `<video>`-Elements hinzufügen:

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

- `kind` hat den Wert `subtitles`, was auf die Art des Inhalts hinweist, den die Dateien enthalten
- `label` erhält einen Wert, der angibt, für welche Sprache das Untertitelset ist — zum Beispiel `English` oder `Deutsch` — diese Labels erscheinen in der Benutzeroberfläche, damit der Benutzer leicht auswählen kann, in welcher Sprache die Untertitel angezeigt werden sollen.
- `src` ist mit einer gültigen URL verknüpft, die auf die relevante WebVTT-Untertiteldatei verweist.
- `srclang` gibt an, in welcher Sprache der Inhalt der jeweiligen Untertiteldatei ist.
- Das `default`-Attribut ist auf dem englischen `<track>`-Element gesetzt und zeigt dem Browser an, dass dies die Standarduntertiteldatei ist, die verwendet werden soll, wenn die Untertitel aktiviert wurden und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>`-Elemente haben wir auch eine neue Schaltfläche hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Infolgedessen sehen die Videosteuerungen nun wie folgt aus:

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

Die Videosteuerungen haben einige geringfügige Änderungen erfahren, um Platz für die zusätzliche Schaltfläche zu schaffen, aber diese sind relativ unkompliziert.

Es wird kein Bild für die Untertitel-Schaltfläche verwendet, sodass sie wie folgt gestylt wird:

```css
.controls button[data-state="subtitles"] {
  height: 85%;
  text-indent: 0;
  font-size: 16px;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  background: #000;
  border-radius: 2px;
}
```

Es gibt auch andere CSS-Änderungen, die spezifisch für einige zusätzliche JavaScript-Implementierungen sind, aber diese werden an entsprechender Stelle unten erwähnt.

## Implementierung der Untertitel

Viel von dem, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen wird, falls ein Browser HTML-Video-Untertitel unterstützt, eine Schaltfläche im nativen Steuerungssatz bereitgestellt, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist diese Schaltfläche ausgeblendet, und wir müssen unsere eigene definieren.

Browser variieren in dem, was sie unterstützen, daher werden wir versuchen, eine einheitlichere Benutzeroberfläche in jedem Browser zu schaffen, wo immer dies möglich ist. Mehr zu Fragen der Browser-Kompatibilität später.

### Erste Einrichtung

Wie bei allen anderen Schaltflächen müssen wir zuerst einen Zugriff auf die Untertitel-Schaltfläche herstellen:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch zunächst alle Untertitel aus, falls der Browser standardmäßig welche aktiviert hat:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die `video.textTracks`-Eigenschaft enthält ein Array aller Textspuren, die dem Video zugeordnet sind. Wir durchlaufen jede einzelne und setzen ihren `mode` auf `hidden`.

Beachten Sie: Die [WebVTT API](https://w3c.github.io/webvtt/#api) ermöglicht uns den Zugriff auf alle Textspuren, die für ein HTML-Video mit dem `<track>`-Element definiert sind.

### Erstellen eines Untertitelmenüs

Unser Ziel ist es, die zuvor hinzugefügte `subtitles`-Schaltfläche zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, auszuwählen, in welcher Sprache die Untertitel angezeigt werden sollen, oder sie vollständig auszuschalten.

Wir haben die Schaltfläche hinzugefügt, aber bevor wir sie funktionsfähig machen, müssen wir das Menü erstellen, das dazu gehört. Dieses Menü wird dynamisch erstellt, sodass Sprachen später hinzugefügt oder entfernt werden können, indem die `<track>`-Elemente innerhalb des Video-Markups bearbeitet werden.

Alles, was wir tun müssen, ist, durch die `textTracks` des Videos zu gehen, ihre Eigenschaften zu lesen und das Menü daraus zu erstellen:

```js
let subtitlesMenu;
if (video.textTracks) {
  const df = document.createDocumentFragment();
  subtitlesMenu = df.appendChild(document.createElement("ul"));
  subtitlesMenu.className = "subtitles-menu";
  subtitlesMenu.appendChild(createMenuItem("subtitles-off", "", "Off"));
  for (let i = 0; i < video.textTracks.length; i++) {
    subtitlesMenu.appendChild(
      createMenuItem(
        `subtitles-${video.textTracks[i].language}`,
        video.textTracks[i].language,
        video.textTracks[i].label,
      ),
    );
  }
  videoContainer.appendChild(subtitlesMenu);
}
```

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zunächst wird eine Option hinzugefügt, um alle Untertitel auszuschalten, und dann werden Schaltflächen für jede Textspur hinzugefügt, wobei die Sprache und das Label von jeder gelesen werden.

Die Erstellung jedes Listenpunkts und jeder Schaltfläche erfolgt durch die `createMenuItem()`-Funktion, die wie folgt definiert ist:

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
    for (let i = 0; i < video.textTracks.length; i++) {
      // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
      if (video.textTracks[i].language === lang) {
        video.textTracks[i].mode = "showing";
        button.setAttribute("data-state", "active");
      } else {
        video.textTracks[i].mode = "hidden";
      }
    }
    subtitlesMenu.style.display = "none";
  });
  subtitleMenuButtons.push(button);
  return listItem;
}
```

Diese Funktion erstellt die benötigten {{ htmlelement("li") }} und {{ htmlelement("button") }} Elemente und gibt sie zurück, damit sie zur Untertitelliste hinzugefügt werden können. Sie richtet auch die erforderlichen Ereignis-Listener auf der Schaltfläche ein, um das entsprechende Untertitelset ein- oder auszuschalten. Dies wird erreicht, indem das `mode`-Attribut des erforderlichen Untertitels auf `showing` gesetzt wird und die anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es dann am Ende der videoContainer in den DOM eingefügt.

Anfänglich ist das Menü standardmäßig ausgeblendet, daher muss ein Ereignis-Listener zu unserer Untertitel-Schaltfläche hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### Untertitel-Menü CSS

Wir haben auch ein grundlegendes Styling für das neu erstellte Untertitelmenü hinzugefügt:

```css
.subtitles-menu {
  display: none;
  position: absolute;
  bottom: 14.8%;
  right: 20px;
  background: #666;
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
  background: #000;
  color: #fff;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}
```

## Styling der angezeigten Untertitel

Eines der weniger bekannten und unterstützten Merkmale von WebVTT ist die Möglichkeit, die individuellen Untertitel (sogenannte Text Cue) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Das `::cue` Pseudo-Element ist der Schlüssel zum Anvisieren individueller Textspuren für das Styling, da es zu jedem definierten Cue passt. Es gibt nur eine Handvoll CSS-Eigenschaften, die auf einen Text Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Kurzschreib-Eigenschaften
- {{ cssxref("outline") }} Kurzschreib-Eigenschaften
- {{ cssxref("font") }} Kurzschreib-Eigenschaften, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Um beispielsweise die Textfarbe der Textspur-Cues zu ändern, können Sie schreiben:

```css
::cue {
  color: #ccc;
}
```

Wenn die WebVTT-Datei [voice spans](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die es erlauben, Cues als eine bestimmte "Stimme" zu definieren:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann kann diese spezifische 'Stimme' wie folgt gestylt werden:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stylings von Cues mit ::cue funktionieren derzeit in Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browser-Kompatibilität

[Browserunterstützung für WebVTT und das `<track>` Element](https://caniuse.com/webvtt) ist ziemlich gut, obwohl einige Browser sich leicht in ihrer Implementierung unterscheiden.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerungen enthalten eine Schaltfläche und ein Menü, das die gleiche Funktionalität bietet wie das Menü, das wir gerade aufgebaut haben, zusammen mit einer "Auto"-Option, die es dem Browser erlaubt, eine Auswahl zu treffen. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben wieder ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert und der Standard-Steuersatz enthält eine 'cc'-Schaltfläche, die Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default`-Attribut im `<track>`-Element und versuchen stattdessen, die Browsersprache mit der Untertitelsprache abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Unterstützung für Untertitel und Beschreibungen bieten, die Sie anstelle der Eigenentwicklung nutzen können.
Sie können im Web nach diesen suchen, indem Sie Suchbegriffe wie _"HTML Video Player Plugin"_ verwenden.
