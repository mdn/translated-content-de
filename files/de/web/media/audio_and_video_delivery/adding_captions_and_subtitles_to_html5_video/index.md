---
title: Hinzufügen von Untertiteln und Textspuren zu HTML-Videos
slug: Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

In anderen Artikeln haben wir uns damit beschäftigt, wie man einen [plattformspezifischen Videoplayer baut](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player), indem die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs verwendet werden. Außerdem haben wir uns angeschaut, wie man den Player [gestaltet](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel wird denselben Player verwenden und zeigen, wie man Untertitel und Textspuren hinzufügt, unter Verwendung des [WebVTT-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und des {{ htmlelement("track") }}-Elements.

## Beispiel für einen Video mit Untertiteln

In diesem Artikel werden wir auf das Beispiel eines Videoplayers mit Untertiteln verweisen. Dieses Beispiel verwendet einen Auszug aus dem [Sintel-Open-Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standardkontrollen wie Abspielen, Stoppen, Lautstärke und Untertitel An/Aus. Das Video zeigt eine Szene eines Mannes, der eine speerähnliche Waffe hält, und eine Untertitelung liest: "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können den [Quellcode auf GitHub finden](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und das [Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir uns damit beschäftigen, wie Untertitel zum Videoplayer hinzugefügt werden, gibt es einige Punkte, die wir zunächst erwähnen werden und die Sie kennen sollten, bevor wir beginnen.

### Untertitel versus Textspuren

[Untertitel und Textspuren sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben signifikant unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Falls Sie sich nicht sicher sind, was sie unterscheidet, wird empfohlen, sich über die Unterschiede zu informieren. Sie werden jedoch technisch auf die gleiche Weise implementiert, sodass das Material in diesem Artikel für beide gilt.

Für diesen Artikel werden wir die angezeigten Textspuren als Untertitel bezeichnen, da deren Inhalt für Menschen gedacht ist, die Schwierigkeiten haben, die Sprache des Films zu verstehen, und nicht für Gehörlose oder Schwerhörige.

### Das `<track>`-Element

HTML ermöglicht es uns, Untertitel für ein Video mit dem {{ htmlelement("track") }}-Element zu spezifizieren. Die verschiedenen Attribute dieses Elements ermöglichen es uns, Dinge wie den Inhaltstyp, die Sprache und natürlich eine Referenz auf die Textdatei anzugeben, die die tatsächlichen Untertitelinformationen enthält.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind einfache Textdateien, die einem angegebenen Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber wesentliche Teile davon sind stabil, sodass wir sie heute verwenden können.

Videoanbieter (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) bieten Untertitel und Textspuren im Textformat mit ihren Videos an, aber gewöhnlich im SubRip Text (SRT)-Format. Diese können einfach mit einem Online-Konverter in WebVTT umgewandelt werden.

## Änderungen im HTML und CSS

Dieser Abschnitt fasst die Änderungen am Code aus dem vorherigen Artikel zusammen, um die Hinzufügung von Untertiteln zum Video zu ermöglichen. Wenn Sie daran nicht interessiert sind und direkt zu JavaScript und relevanteren CSS-Details übergehen möchten, überspringen Sie den Abschnitt [Implementierung der Untertitel](#implementierung_der_untertitel).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich etwas Sprache enthält und daher besser veranschaulicht, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML `<track>` Element verwenden, um unsere Untertiteldateien zum HTML-Video hinzuzufügen. Wir haben tatsächlich unsere Untertitel in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch — also werden wir alle drei relevanten VTT-Dateien referenzieren, indem wir `<track>`-Elemente innerhalb unseres HTML `<video>`-Elements hinzufügen:

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

- `kind` hat den Wert `subtitles`, was den Typ des Inhalts angibt, den die Dateien enthalten.
- `label` hat einen Wert, der angibt, für welche Sprache dieser Untertitel bestimmt ist — zum Beispiel `English` oder `Deutsch` — diese Beschriftungen erscheinen in der Benutzeroberfläche, um dem Nutzer die Auswahl der gewünschten Untertitelsprache zu erleichtern.
- `src` ist eine gültige URL, die auf die jeweilige WebVTT-Untertiteldatei verweist.
- `srclang` gibt an, in welcher Sprache der Inhalt der Untertiteldateien vorliegt.
- Das `default`-Attribut ist auf dem englischen `<track>`-Element gesetzt und zeigt dem Browser an, dass dies die Standarddefinition der Untertiteldatei ist, die verwendet werden soll, wenn Untertitel eingeschaltet sind und der Nutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zu den `<track>`-Elementen haben wir auch einen neuen Button hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Infolgedessen sehen die Videokontrollen jetzt folgendermaßen aus:

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

Die Videokontrollen wurden geringfügig verändert, um Platz für den zusätzlichen Button zu schaffen, aber diese Änderungen sind relativ unkompliziert.

Es wird kein Bild für den Untertitel-Button verwendet, daher wird er wie folgt gestaltet:

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

Es gibt auch andere CSS-Änderungen, die spezifisch für einige zusätzliche JavaScript-Implementierungen sind, aber diese werden an der entsprechenden Stelle unten erwähnt.

## Implementierung der Untertitel

Vieles von dem, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videokontrollen, wenn ein Browser HTML-Video-Untertitel unterstützt, wird es einen bereitgestellten Button innerhalb des nativen Kontrollsatzes geben, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videokontrollen definiert haben, ist dieser Button ausgeblendet, und wir müssen unseren eigenen definieren.

Browser unterscheiden sich in ihrer Unterstützung, deshalb werden wir versuchen, eine einheitlichere Benutzeroberfläche für jeden Browser zu schaffen, wo es möglich ist. Mehr zu Kompatibilitätsproblemen später.

### Erste Einrichtung

Wie bei allen anderen Buttons, ist eines der ersten Dinge, die wir tun müssen, ein Handle auf den Untertitel-Button zu speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch zunächst alle Untertitel aus, falls der Browser standardmäßig einige davon aktiviert:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die `video.textTracks`-Eigenschaft enthält ein Array aller an das Video angehängten Textspuren. Wir durchlaufen jede und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT-API](https://w3c.github.io/webvtt/#api) gibt uns Zugriff auf alle für ein HTML-Video definierten Textspuren, die mit dem `<track>`-Element definiert sind.

### Erstellen eines Untertitelmenüs

Unser Ziel ist es, den zuvor hinzugefügten `subtitles`-Button zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, die Sprache auszuwählen, in der sie die Untertitel angezeigt bekommen möchten, oder sie komplett auszuschalten.

Wir haben den Button hinzugefügt, aber bevor wir ihn nutzbar machen, müssen wir das zugehörige Menü erstellen. Dieses Menü wird dynamisch erstellt, sodass Sprachen später durch Bearbeiten der `<track>`-Elemente innerhalb des Video-Markups hinzugefügt oder entfernt werden können.

Alles, was wir tun müssen, ist durch die `textTracks` des Videos zu gehen, deren Eigenschaften zu lesen und das Menü entsprechend zu erstellen:

```js
let subtitlesMenu;
if (video.textTracks) {
  const df = document.createDocumentFragment();
  const subtitlesMenu = df.appendChild(document.createElement("ul"));
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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, die es dem Benutzer ermöglicht, alle Untertitel auszuschalten. Dann werden Buttons für jede Textspur hinzugefügt, wobei die Sprache und das Label von jeder gelesen werden.

Die Erstellung jedes Listenelements und Buttons erfolgt durch die `createMenuItem()`-Funktion, die folgendermaßen definiert ist:

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

Diese Funktion erstellt die benötigten {{ htmlelement("li") }} und {{ htmlelement("button") }}-Elemente und gibt sie zurück, damit sie zur Untertitelliste hinzugefügt werden können. Sie richtet auch die benötigten Event-Listener auf dem Button ein, um das relevante Untertitelset an- oder auszuschalten. Dies geschieht, indem der erforderliche `mode`-Attribut des Untertitels auf `showing` gesetzt wird und die anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es am unteren Ende der videoContainer in das DOM eingefügt.

Das Menü ist zunächst standardmäßig ausgeblendet, daher muss ein Ereignis-Listener zu unserem Untertitel-Button hinzugefügt werden, um es ein- oder auszublenden:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitelmenü

Wir haben auch einige grundlegende Stile für das neu erstellte Untertitelmenü hinzugefügt:

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

## Gestaltung der angezeigten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die einzelnen Untertitel (etwas, das als Text-Hinweise bezeichnet wird) über [CSS Extensions](https://w3c.github.io/webvtt/#css-extensions) zu gestalten.

Das `::cue`-Pseudo-Element ist der Schlüssel, um einzelne Text-Hinweise für die Gestaltung zu targeten, da es jeden definierten Hinweis abgleicht. Es gibt nur eine Handvoll CSS-Eigenschaften, die auf einen Text-Hinweis angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} shorthand properties
- {{ cssxref("outline") }} shorthand properties
- {{ cssxref("font") }} shorthand properties, including {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Zum Beispiel können Sie die Textfarbe der Textspuren ändern, indem Sie folgendes schreiben:

```css
::cue {
  color: #ccc;
}
```

Wenn die WebVTT-Datei [voice spans](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die erlauben, Hinweise als eine bestimmte "Stimme" zu definieren:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann kann diese spezifische 'Stimme' so gestaltet werden:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der stilistischen Anpassungen von Hinweisen mit ::cue funktionieren derzeit in Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browser-Kompatibilität

[Browser-Unterstützung für WebVTT und das `<track>`-Element](https://caniuse.com/webvtt) ist ziemlich gut, obwohl sich einige Browser in ihrer Implementierung leicht unterscheiden.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert und die Standardsteuerungen enthalten einen Button und ein Menü, das dieselbe Funktionalität wie das gerade erstellte Menü bietet, sowie eine "Auto"-Option, die dem Browser erlaubt, zu wählen. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben wieder ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert und der Standardsatz an Steuerungen enthält einen "cc"-Button, der Untertitel an- und ausschaltet. Chrome und Opera ignorieren das `default`-Attribut auf dem `<track>`-Element und versuchen stattdessen, die Sprache des Browsers mit der Sprache des Untertitels abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Unterstützung für Untertitel und Textspuren bieten, die Sie anstelle der Entwicklung eines eigenen verwenden können. Sie können im Internet nach solchen suchen, indem Sie Begriffe wie _"HTML video player plugin"_ verwenden.
