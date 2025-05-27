---
title: Hinzufügen von Untertiteln zu einem HTML-Video
slug: Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

In anderen Artikeln haben wir uns angesehen, wie man mit den APIs [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) einen [browserübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) kann, und auch, wie man [den Player stylt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel wird denselben Player verwenden und zeigen, wie man Untertitel hinzufügt, indem man das [WebVTT-Format](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und das {{ htmlelement("track") }} Element verwendet.

## Beispiel für ein Video mit Untertiteln

In diesem Artikel werden wir auf das Beispiel "Videoplayer mit Untertiteln" verweisen. Dieses Beispiel verwendet einen Ausschnitt aus dem [Sintel Open Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertitel ein-/ausschalten. Das laufende Video zeigt eine Szene mit einem Mann, der eine speerähnliche Waffe hält, mit einem Untertitel "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können den [Quellcode auf GitHub finden](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und auch [das Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir uns damit befassen, wie man Untertitel zum Videoplayer hinzufügt, gibt es einige Dinge, die wir zuerst erwähnen werden, über die Sie vorab Bescheid wissen sollten.

### Untertitel versus Untertitelung

[Untertitel und Untertitelungen sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben erheblich unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen, und es wird empfohlen, die Unterschiede zu lesen, wenn Sie sich nicht sicher sind, was sie sind. Sie werden jedoch technisch auf die gleiche Weise implementiert, sodass das Material in diesem Artikel auf beide zutreffen wird.

Für diesen Artikel werden wir uns auf die Textspuren als Untertitel beziehen, da deren Inhalt sich an hörende Personen richtet, die Schwierigkeiten haben, die Sprache des Films zu verstehen, und nicht an gehörlose oder schwerhörige Personen.

### Das `<track>` Element

HTML ermöglicht es uns, Untertitel für ein Video mit dem {{ htmlelement("track") }} Element anzugeben. Die verschiedenen Attribute dieses Elements erlauben uns, Dinge wie die Art des hinzugefügten Inhalts, die Sprache und natürlich einen Verweis auf die Textdatei, die die eigentlichen Untertitelinformationen enthält, anzugeben.

### WebVTT

Die Dateien, die die eigentlichen Untertiteldaten enthalten, sind Textdateien, die einem bestimmten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch weiterentwickelt, aber wesentliche Teile davon sind stabil, sodass wir sie heute verwenden können.

Videoanbieter (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) liefern Untertitel und Untertitelungen im Textformat zusammen mit ihren Videos, aber sie sind normalerweise im SubRip Text (SRT) Format. Diese können leicht mit einem Online-Konverter in WebVTT konvertiert werden.

## Änderungen am HTML und CSS

Dieser Abschnitt fasst die Änderungen am Code des vorherigen Artikels zusammen, um die Hinzufügung von Untertiteln zum Video zu erleichtern. Wenn Sie daran nicht interessiert sind und direkt zu JavaScript und den relevanteren CSS-Codes springen möchten, gehen Sie zum Abschnitt [Umsetzung der Untertitel](#umsetzung_der_untertitel).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich etwas gesprochene Sprache enthält und daher besser geeignet ist, zu veranschaulichen, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML `<track>` Element verwenden, um unsere Untertiteldateien zum HTML-Video hinzuzufügen. Wir haben unsere Untertitel tatsächlich in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch — also werden wir alle drei relevanten VTT-Dateien referenzieren, indem wir `<track>` Elemente innerhalb unseres HTML `<video>` Elements hinzufügen:

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

Wie Sie sehen können, hat jedes `<track>` Element die folgenden Attribute gesetzt:

- `kind` hat den Wert `subtitles`, was die Art des Inhalts angibt, den die Dateien enthalten
- `label` erhält einen Wert, der angibt, für welche Sprache das Untertitel-Set bestimmt ist — zum Beispiel `English` oder `Deutsch` — diese Labels werden in der Benutzeroberfläche angezeigt, sodass der Benutzer leicht auswählen kann, welche Untertitelsprache er sehen möchte.
- `src` ist eine gültige URL, die auf die relevante WebVTT-Untertiteldatei in jedem Fall zeigt.
- `srclang` gibt an, in welcher Sprache der Inhalt der jeweiligen Untertiteldateien ist.
- Das `default` Attribut ist am englischen `<track>` Element gesetzt, was dem Browser angibt, dass dies die Standarddefinition der Untertiteldatei ist, die verwendet wird, wenn Untertitel eingeschaltet sind und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>` Elemente haben wir auch einen neuen Button hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Infolgedessen sehen die Videosteuerungen jetzt wie folgt aus:

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

Die Videosteuerungen haben einige kleinere Änderungen erfahren, um Platz für den zusätzlichen Button zu schaffen, aber diese sind relativ einfach.

Es wird kein Bild für den Untertitelbutton verwendet, daher wird er wie folgt gestaltet:

```css
.controls button[data-state="subtitles"] {
  height: 85%;
  text-indent: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  background: #000;
  border-radius: 2px;
}
```

Es gibt auch andere CSS-Änderungen, die spezifisch für einige zusätzliche JavaScript-Implementierungen sind, aber diese werden an der entsprechenden Stelle unten erwähnt.

## Umsetzung der Untertitel

Viel von dem, was wir tun, um auf die Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen wird, wenn ein Browser HTML-Video-Untertitel unterstützt, innerhalb des nativen Steuersatzes ein Button zum Zugriff darauf bereitgestellt. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist dieser Button ausgeblendet, und wir müssen unseren eigenen definieren.

Browser variieren darin, was sie unterstützen, daher werden wir versuchen, eine einheitlichere Benutzeroberfläche in jedem Browser zu schaffen, wo möglich. Mehr zu Problemen der Browser-Kompatibilität später.

### Initiales Setup

Wie bei allen anderen Buttons ist eines der ersten Dinge, die wir tun müssen, einen Verweis auf den Untertitelbutton zu speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch zunächst alle Untertitel aus, falls der Browser einen von ihnen standardmäßig einschaltet:

```js
for (const track of video.textTracks) {
  track.mode = "hidden";
}
```

Die `video.textTracks` Eigenschaft enthält ein Array aller Textspuren, die dem Video angehängt sind. Wir durchlaufen jede davon und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT API](https://w3c.github.io/webvtt/#api) bietet uns Zugriff auf alle Textspuren, die für ein HTML-Video mit dem `<track>` Element definiert sind.

### Erstellen eines Untertitelmenüs

Unser Ziel ist es, den `subtitles` Button, den wir zuvor hinzugefügt haben, zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, die gewünschte Sprache der Untertitel auszuwählen oder sie ganz auszuschalten.

Wir haben den Button hinzugefügt, aber bevor wir ihn funktionstüchtig machen, müssen wir das zugehörige Menü erstellen. Dieses Menü wird dynamisch erstellt, sodass Sprachen später hinzugefügt oder entfernt werden können, indem die `<track>` Elemente im Video-Markup bearbeitet werden.

Alles, was wir tun müssen, ist durch die `textTracks` des Videos zu gehen, ihre Eigenschaften auszulesen und das Menü entsprechend aufzubauen:

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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, die es dem Benutzer ermöglicht, alle Untertitel auszuschalten, und dann werden Buttons für jede Textspur hinzugefügt, wobei die Sprache und das Label von jeder ausgelesen werden.

Die Erstellung jedes Listenpunkts und Buttons erfolgt durch die `createMenuItem()` Funktion, die wie folgt definiert ist:

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

Diese Funktion erstellt die benötigten {{ htmlelement("li") }} und {{ htmlelement("button") }} Elemente und gibt sie zurück, damit sie zur Untertitelliste hinzugefügt werden können. Sie richtet auch die erforderlichen Ereignislistener am Button ein, um den relevanten Untertielsatz ein- oder auszuschalten. Dies geschieht durch Setzen des `mode` Attributs des benötigten Untertitels auf `showing` und der anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es am Ende des videoContainer in das DOM eingefügt.

Zunächst ist das Menü standardmäßig ausgeblendet, daher muss ein Ereignislistener zu unserem Untertitelbutton hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### Untertitelmenü CSS

Wir haben auch einige rudimentäre Styles für das neu erstellte Untertitelmenü hinzugefügt:

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

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die individuellen Untertitel (sogenannte Text-Cues) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Das `::cue` Pseudoelement ist der Schlüssel, um individuelle Text-Cues zum Stylen zu adressieren, da es jeden definierten Cue angibt. Nur eine Handvoll CSS-Eigenschaften kann auf einen Text-Cue angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Kurzschreibweise
- {{ cssxref("outline") }} Kurzschreibweise
- {{ cssxref("font") }} Kurzschreibweise, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Um beispielsweise die Textfarbe der Text-Cues zu ändern, können Sie Folgendes schreiben:

```css
::cue {
  color: #ccc;
}
```

Wenn die WebVTT-Datei [Sprachspanne](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die es erlauben, Cues als eine bestimmte "Stimme" definiert zu haben:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann wird diese spezifische 'Stimme' folgendermaßen stylbar:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stylingmöglichkeiten von Cues mit ::cue funktionieren derzeit auf Chrome, Opera und Safari, aber noch nicht auf Firefox.

## Browser-Kompatibilität

[Die Browser-Unterstützung für WebVTT und das `<track>` Element](https://caniuse.com/webvtt) ist ziemlich gut, obwohl einige Browser leicht unterschiedliche Implementierungen haben.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerungen enthalten einen Button und ein Menü, das die gleiche Funktionalität wie das Menü, das wir gerade erstellt haben, bietet, zusammen mit einer "Auto"-Option, die es dem Browser erlaubt zu wählen. Das `default` Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben wiederum ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert, und der Standardsatz an Steuerungselementen enthält einen 'cc' Button, der Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default` Attribut auf dem `<track>` Element und versuchen stattdessen, die Sprache des Browsers mit der Sprache der Untertitel abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Untertitel- und Beschriftungsunterstützung bieten, die Sie anstelle der eigenen Entwicklung verwenden können. Sie können im Internet nach diesen suchen, indem Sie nach Begriffen wie _"HTML-Videoplayer-Plugin"_ suchen.
