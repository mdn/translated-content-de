---
title: Hinzufügen von Untertiteln und Unterlegungen zu HTML-Video
slug: Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

In anderen Artikeln haben wir uns angesehen, wie man einen [plattformübergreifenden Videoplayer erstellt](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) mithilfe der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs und auch, wie man den [Player gestaltet](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel wird denselben Player verwenden und zeigen, wie man Untertitel und Unterlegungen hinzufügt, unter Verwendung des [WebVTT-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und des {{ htmlelement("track") }} Elements.

## Beispiel für ein Video mit Untertiteln

In diesem Artikel beziehen wir uns auf das Beispiel eines Videoplayers mit Untertiteln. Dieses Beispiel verwendet einen Auszug aus dem [Sintel Open Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Video-Player mit Standardsteuerungen wie Abspielen, Anhalten, Lautstärke sowie das Aktivieren und Deaktivieren von Untertiteln. Das laufende Video zeigt eine Szene, in der ein Mann eine speerähnliche Waffe hält, und eine Untertitelung lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können den [Quellcode auf GitHub finden](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und das [Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir uns damit beschäftigen, wie man Untertitel zum Videoplayer hinzufügt, gibt es einige Dinge, die wir zuerst erwähnen werden und die Sie sich bewusst machen sollten, bevor wir beginnen.

### Untertitel versus Unterlegungen

[Untertitel und Unterlegungen sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben unterschiedliche Zielgruppen und vermitteln verschiedene Informationen. Es ist ratsam, sich über die Unterschiede zu informieren, wenn Sie sich nicht sicher sind, was sie sind. Technisch werden sie jedoch auf dieselbe Weise implementiert, sodass das Material in diesem Artikel für beide gilt.

In diesem Artikel beziehen wir uns auf die Textspuren, die als Unterlegungen angezeigt werden, da deren Inhalt für hörende Menschen gedacht ist, die Schwierigkeiten haben, die Sprache des Films zu verstehen, und nicht für taube oder schwerhörige Menschen.

### Das \<track> Element

HTML ermöglicht es uns, Unterlegungen für ein Video mithilfe des {{ htmlelement("track") }} Elements anzugeben. Die verschiedenen Attribute dieses Elements erlauben es uns, solche Dinge anzugeben, wie die Art des Inhalts, den wir hinzufügen, die Sprache, in der er sich befindet, und natürlich einen Verweis auf die Textdatei, die die eigentlichen Untertitelinformationen enthält.

### WebVTT

Die Dateien, die die eigentlichen Untertiteldaten enthalten, sind einfache Textdateien, die einem spezifizierten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch ausgearbeitet, aber wesentliche Teile davon sind stabil, sodass wir sie heute verwenden können.

Videoanbieter (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) stellen Untertitel und Unterlegungen in einem Textformat mit ihren Videos bereit, diese sind jedoch meist im SubRip Text (SRT) Format. Diese können mithilfe eines Online-Konverters leicht in WebVTT umgewandelt werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen an dem Code zusammen, der im vorherigen Artikel vorgestellt wurde, um das Hinzufügen von Untertiteln zu dem Video zu erleichtern. Wenn Sie daran nicht interessiert sind und direkt zum JavaScript und den relevanteren CSS übergehen möchten, lesen Sie den Abschnitt [Untertitelimplementierung](#untertitelimplementierung).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich etwas gesprochene Sprache enthält und daher besser veranschaulicht, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML `<track>` Element verwenden, um unsere Untertiteldateien zum HTML-Video hinzuzufügen. Wir haben unsere Untertitel tatsächlich in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch — daher werden wir alle drei relevanten VTT-Dateien referenzieren, indem wir `<track>` Elemente innerhalb unseres HTML `<video>` Elements hinzufügen:

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

- `kind` hat den Wert `subtitles`, der den Inhaltstyp der Dateien angibt.
- `label` hat den Wert, der angibt, für welche Sprache das Untertitelset ist — zum Beispiel `English` oder `Deutsch` — diese Labels erscheinen in der Benutzeroberfläche und erlauben es dem Benutzer, leicht auszuwählen, welche Untertitelsprache er sehen möchte.
- `src` ist eine gültige URL, die auf die jeweilige WebVTT-Untertiteldatei verweist.
- `srclang` gibt an, in welcher Sprache die Inhalte der Untertiteldateien sind.
- Das `default` Attribut ist auf dem englischen `<track>` Element gesetzt, um dem Browser mitzuteilen, dass dies die Standarduntertiteldateidefinition ist, wenn Untertitel eingeschaltet sind und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>` Elemente haben wir auch einen neuen Button hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Dadurch sehen die Videosteuerungen jetzt wie folgt aus:

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

Die Videosteuerungen haben einige kleinere Änderungen erfahren, um Platz für den zusätzlichen Button zu schaffen, aber diese sind relativ unkompliziert.

Für den Untertitel-Button wird kein Bild verwendet, daher wird er wie folgt gestylt:

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

## Untertitelimplementierung

Ein Großteil dessen, was wir tun, um auf die Videountertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen gibt es, wenn ein Browser HTML-Videountertitel unterstützt, einen Button innerhalb des nativen Steuerungssatzes, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist dieser Button ausgeblendet, und wir müssen unseren eigenen definieren.

Browser variieren darin, was sie unterstützen, daher werden wir versuchen, ein einheitlicheres UI für jeden Browser zu schaffen, wenn möglich. Es gibt später mehr zu Kompatibilitätsproblemen von Browsern.

### Erste Einrichtung

Wie bei allen anderen Schaltflächen müssen wir als Erstes einen Handle auf die Untertitel-Schaltfläche speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch zunächst alle Untertitel aus, falls der Browser irgendwelche standardmäßig aktiviert:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die `video.textTracks` Eigenschaft enthält ein Array aller Textspuren, die an das Video angehängt sind. Wir durchlaufen jede einzelne und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT API](https://w3c.github.io/webvtt/#api) gibt uns Zugriff auf alle Textspuren, die für ein HTML-Video mit dem `<track>` Element definiert sind.

### Erstellen eines Untertitelmenüs

Unser Ziel ist es, die zuvor hinzugefügte `subtitles` Schaltfläche zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, die Sprache auszuwählen, in der die Untertitel angezeigt werden sollen, oder sie ganz auszuschalten.

Wir haben die Schaltfläche hinzugefügt, aber bevor wir sie aktivieren, müssen wir das Menü erstellen, das damit verknüpft ist. Dieses Menü wird dynamisch erstellt, sodass Sprachen später hinzugefügt oder entfernt werden können, indem die `<track>` Elemente innerhalb des Video-Markups bearbeitet werden.

Alles, was wir tun müssen, ist durch die `textTracks` des Videos zu gehen, deren Eigenschaften zu lesen und das Menü daraus zu erstellen:

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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, die es dem Benutzer ermöglicht, alle Untertitel auszuschalten, und dann werden Schaltflächen für jede Textspur hinzugefügt, wobei die Sprache und das Label aus jeder einzelnen ausgelesen werden.

Die Erstellung jedes Listenelements und der Schaltfläche erfolgt durch die `createMenuItem()` Funktion, die wie folgt definiert ist:

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

Diese Funktion erstellt die benötigten {{ htmlelement("li") }} und {{ htmlelement("button") }} Elemente und gibt sie zurück, damit sie zur Menüliste der Untertitel hinzugefügt werden können. Sie richtet auch die erforderlichen Ereignislistener auf der Schaltfläche ein, um die relevante Untertitelspureinstellungen zwischen `showing` und `hidden` umzuschalten.

Sobald das Menü erstellt ist, wird es dann an der Unterseite des videoContainer in das DOM eingefügt.

Anfangs ist das Menü standardmäßig ausgeblendet, sodass ein Ereignislistener zu unserer Untertitel-Schaltfläche hinzugefügt werden muss, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitelmenü

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

## Stylen der angezeigten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Fähigkeit, die einzelnen Untertitel (etwas, das als Text-Hinweise bezeichnet wird) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Das `::cue` Pseudo-Element ist der Schlüssel, um einzelne Textspurenhinweise für das Styling zu erreichen, da es jedes definierte Hinweis-Match findet. Es gibt nur eine Handvoll von CSS-Eigenschaften, die auf einen Texthinweis angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Shorthand-Eigenschaften
- {{ cssxref("outline") }} Shorthand-Eigenschaften
- {{ cssxref("font") }} Shorthand-Eigenschaften, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Um zum Beispiel die Textfarbe der Textspurhinweise zu ändern, können Sie folgendes schreiben:

```css
::cue {
  color: #ccc;
}
```

Wenn die WebVTT-Datei [voice spans](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die es ermöglichen, Hinweise als eine bestimmte "Stimme" zu definieren:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann wird diese spezifische 'Stimme' folgendermaßen stylbar sein:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stylings der Hinweise mit ::cue funktionieren derzeit auf Chrome, Opera und Safari, aber noch nicht auf Firefox.

## Browserkompatibilität

[Browserunterstützung für WebVTT und das `<track>` Element](https://caniuse.com/webvtt) ist ziemlich gut, obwohl sich einige Browser geringfügig in ihrer Implementierung unterscheiden.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerungen enthalten einen Button und ein Menü, das dieselbe Funktionalität bietet wie das Menü, das wir gerade gebaut haben, zusammen mit einer "Automatisch" Option, die es dem Browser erlaubt, eine Auswahl zu treffen. Das `default` Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben ähnliche Implementationen: Untertitel sind standardmäßig aktiviert und die Standardsteuerung enthält eine 'cc'-Schaltfläche, die Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default` Attribut auf dem `<track>` Element und versuchen stattdessen, die Sprache des Browsers mit der Sprache der Untertitel abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Video-Player-Plugins, die Untertitel und Unterlegungssupport bieten, die Sie anstelle einer Eigenentwicklung verwenden können.
Sie können im Web danach suchen, indem Sie Suchbegriffe wie _"HTML video player plugin"_ verwenden.
