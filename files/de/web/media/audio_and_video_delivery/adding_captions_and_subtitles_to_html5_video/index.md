---
title: Hinzufügen von Untertiteln und Captions zu HTML-Videos
slug: Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

In anderen Artikeln haben wir uns angesehen, wie man einen [plattformübergreifenden Videoplayer erstellt](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) mit Hilfe der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs, sowie wie man den [Player stylt](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel zeigt, wie man dem gleichen Player Untertitel und Captions hinzufügt, unter Verwendung des [WebVTT-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und des {{ htmlelement("track") }} Elements.

## Beispiel für ein Video mit Untertiteln

In diesem Artikel beziehen wir uns auf das Beispiel des Videoplayers mit Untertiteln. Dieses Beispiel benutzt einen Ausschnitt aus dem [Sintel-Film](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Video Player mit Standardkontrollen wie Abspielen, Stoppen, Lautstärke sowie Ein- und Ausschalten der Untertitel. Das aktuelle Video zeigt eine Szene mit einem Mann, der eine speerartige Waffe hält, und eine Untertitelung mit der Aufschrift "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können den [Sourcecode auf GitHub finden](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und das [Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir eintauchen, wie Untertitel zum Videoplayer hinzugefügt werden, gibt es einige Dinge, die wir zuerst erwähnen sollten, um sicherzustellen, dass Sie sich deren bewusst sind.

### Captions versus Untertitel

[Captions und Untertitel sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben deutlich unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen, und es wird empfohlen, dass Sie sich über die Unterschiede informieren, falls Sie diese nicht kennen. Technisch gesehen werden sie jedoch auf dieselbe Weise implementiert, sodass das Material in diesem Artikel auf beide zutrifft.

In diesem Artikel werden wir die Textspuren, die angezeigt werden, als Untertitel bezeichnen, da ihr Inhalt an Menschen gerichtet ist, die die Sprache des Films schwer verstehen, und nicht an gehörlose oder schwerhörige Menschen.

### Das \<track> Element

HTML ermöglicht es uns, Untertitel für ein Video mithilfe des {{ htmlelement("track") }} Elements anzugeben. Die verschiedenen Attribute dieses Elements erlauben es uns, Dinge wie den Typ des hinzugefügten Inhalts, die Sprache und natürlich einen Verweis auf die Textdatei, die die eigentlichen Untertitelinformationen enthält, anzugeben.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind einfache Textdateien, die einem festgelegten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber wesentliche Teile davon sind stabil, sodass wir sie heute verwenden können.

Videoanbieter (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) bieten Captions und Untertitel in einem Textformat mit ihren Videos an, aber sie sind normalerweise im SubRip Text (SRT) Format. Diese können leicht mit einem Online-Konverter in WebVTT umgewandelt werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen am Code des vorherigen Artikels zusammen, um die Hinzufügung von Untertiteln zum Video zu erleichtern. Wenn Sie daran nicht interessiert sind und direkt zu JavaScript und relevanteren CSS gehen möchten, überspringen Sie den Abschnitt [Untertitel-Implementierung](#untertitel-implementierung).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich einige Sprachszenen enthält und daher besser veranschaulicht, wie Untertitel funktionieren!

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

- `kind` erhält den Wert `subtitles`, der den Typ des Inhalts angibt, den die Dateien enthalten.
- `label` erhält einen Wert, der angibt, für welche Sprache dieses Untertitelset gedacht ist — zum Beispiel `English` oder `Deutsch` — diese Labels erscheinen in der Benutzeroberfläche, damit der Benutzer leicht auswählen kann, welche Untertitelsprache er sehen möchte.
- `src` wird eine gültige URL zugeordnet, die im jeweiligen Fall auf die relevante WebVTT-Untertiteldatei zeigt.
- `srclang` gibt an, in welcher Sprache der Inhalt der jeweiligen Untertiteldatei ist.
- Das `default` Attribut ist auf dem englischen `<track>` Element gesetzt und gibt dem Browser an, dass diese die Standarduntertiteldatei ist, die verwendet wird, wenn Untertitel aktiviert wurden und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>` Elemente haben wir auch einen neuen Button hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Infolgedessen sehen die Videokontrollen nun wie folgt aus:

```html
<div id="video-controls" class="controls" data-state="hidden">
  <button id="playpause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="volinc" type="button" data-state="volup">Vol+</button>
  <button id="voldec" type="button" data-state="voldown">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
  <button id="subtitles" type="button" data-state="subtitles">CC</button>
</div>
```

### CSS-Änderungen

Die Videokontrollen haben einige kleinere Änderungen erfahren, um Platz für den zusätzlichen Button zu schaffen, diese sind jedoch relativ einfach.

Für den Untertitel-Button wird kein Bild verwendet, daher wird er folgendermaßen gestylt:

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

## Untertitel-Implementierung

Vieles von dem, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videokontrollen gibt es, wenn ein Browser HTML-Videountertitel unterstützt, einen bereitgestellten Button im nativen Kontrollsatz, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videokontrollen definiert haben, ist dieser Button verborgen, und wir müssen unseren eigenen definieren.

Browser unterscheiden sich darin, was sie unterstützen, daher werden wir versuchen, eine möglichst einheitliche Benutzeroberfläche für jeden Browser zu erstellen. Später werden wir mehr über Kompatibilitätsprobleme mit Browsern sprechen.

### Erste Einrichtung

Wie bei allen anderen Buttons müssen wir als eine der ersten Aufgaben ein Handle für den Untertitel-Button speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch zunächst alle Untertitel aus, falls der Browser standardmäßig welche aktiviert:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die `video.textTracks` Eigenschaft enthält ein Array aller an das Video angehängten Textspuren. Wir durchlaufen jede und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT API](https://w3c.github.io/webvtt/#api) ermöglicht uns den Zugriff auf alle Textspuren, die für ein HTML-Video mithilfe des `<track>` Elements definiert sind.

### Ein Untertitelmenü erstellen

Unser Ziel ist es, den zuvor hinzugefügten `subtitles` Button zu verwenden, um ein Menü anzuzeigen, das es Benutzern ermöglicht, auszuwählen, in welcher Sprache die Untertitel angezeigt werden sollen, oder sie ganz auszuschalten.

Wir haben den Button hinzugefügt, aber bevor wir ihn aktivieren, müssen wir das dazugehörige Menü erstellen. Dieses Menü wird dynamisch erstellt, sodass Sprachen später durch Bearbeiten der `<track>` Elemente im Videomarkup hinzugefügt oder entfernt werden können.

Alles, was wir tun müssen, ist, durch die `textTracks` des Videos zu gehen, ihre Eigenschaften zu lesen und das Menü daraus aufzubauen:

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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, um dem Benutzer zu ermöglichen, alle Untertitel auszuschalten, und dann werden für jede Textspur Buttons hinzugefügt, wobei die Sprache und das Label von jeder gelesen wird.

Die Erstellung jeder Listenelement- und Button-Komponente erfolgt durch die `createMenuItem()` Funktion, die wie folgt definiert ist:

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

Diese Funktion erstellt die erforderlichen {{ htmlelement("li") }} und {{ htmlelement("button") }} Elemente und gibt sie zurück, damit sie zur Liste des Untertitelmenüs hinzugefügt werden können. Es richtet auch die erforderlichen Ereignis-Listener auf dem Button ein, um die entsprechende Untertitelgruppe ein- oder auszuschalten. Dies geschieht, indem der `mode` Attribut der erforderlichen Untertitel auf `showing` gesetzt wird, und die anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es unten im videoContainer in das DOM eingefügt.

Zunächst ist das Menü standardmäßig ausgeblendet, daher muss ein Ereignis-Listener zu unserem Untertitel-Button hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitelmenü

Wir haben auch ein einfaches Styling für das neu erstellte Untertitelmenü hinzugefügt:

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

## Styling der dargestellten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die jeweiligen Untertitel (etwas, das als Text Cues bezeichnet wird) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Das `::cue` Pseudoelement ist der Schlüssel zum Targeting einzelner Texttrack-Cues für das Styling, da es jedes definierte Cue-Matching ist. Es gibt nur eine Handvoll CSS-Eigenschaften, die auf eine Text-Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Shorthand-Eigenschaften
- {{ cssxref("outline") }} Shorthand-Eigenschaften
- {{ cssxref("font") }} Shorthand-Eigenschaften, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Zum Beispiel, um die Textfarbe der Texttrack-Cues zu ändern, können Sie folgendes schreiben:

```css
::cue {
  color: #ccc;
}
```

Wenn die WebVTT-Datei [voice spans](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die es ermöglichen, Cues als einen bestimmten "voice" zu definieren:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann wird diese spezifische 'voice' so stylbar sein:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stylings der Cues mit ::cue funktionieren derzeit unter Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browser-Kompatibilität

[Browserunterstützung für WebVTT und das `<track>` Element](https://caniuse.com/webvtt) ist recht gut, obwohl einige Browser in ihrer Implementierung leicht variieren.

### Safari

In Safari ab Version 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerungen enthalten einen Button und ein Menü, das dieselbe Funktionalität bietet wie das Menü, das wir gerade erstellt haben, zusammen mit einer "Auto"-Option, die es dem Browser erlaubt, zu wählen. Das `default` Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert und das Standardkontrollset enthält einen 'cc' Button, der Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default` Attribut auf dem `<track>` Element und versuchen stattdessen, die Sprache des Browsers der Sprache des Untertitels zuzuordnen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Unterstützung für Captions und Untertitel bieten, die Sie anstelle der Eigenentwicklung nutzen können.
Sie können im Internet nach diesen suchen, indem Sie Begriffe wie _"HTML Video Player Plugin"_ verwenden.
