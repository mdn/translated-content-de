---
title: Untertitel und Bildunterschriften zu HTML-Videos hinzufügen
slug: Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

In anderen Artikeln haben wir uns angesehen, wie man einen [plattformübergreifenden Videoplayer erstellt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) unter Verwendung der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs sowie wie man den [Player gestaltet](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics). In diesem Artikel nehmen wir denselben Player und zeigen, wie man Untertitel und Bildunterschriften hinzufügt, unter Verwendung des [WebVTT-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und des {{ htmlelement("track") }}-Elements.

## Beispiel für ein Video mit Untertiteln

In diesem Artikel beziehen wir uns auf das Beispiel für einen Videoplayer mit Untertiteln. Dieses Beispiel verwendet einen Ausschnitt aus dem [Sintel Open Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standardsteuerungen wie Abspielen, Stop, Lautstärke und Untertitel ein- und ausschalten. Das Video zeigt eine Szene eines Mannes mit einer speerähnlichen Waffe, und ein Untertitel zeigt "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können den [Quellcode auf GitHub finden](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und auch das [Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir darauf eingehen, wie Untertitel zum Videoplayer hinzugefügt werden, gibt es einige Dinge, die wir zunächst erwähnen, die Sie wissen sollten, bevor wir beginnen.

### Bildunterschriften versus Untertitel

[Bildunterschriften und Untertitel sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben signifikant unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Es wird empfohlen, sich über diese Unterschiede zu informieren, wenn Sie sich nicht sicher sind, worin sie bestehen. Sie werden jedoch technisch auf dieselbe Weise implementiert, sodass das Material in diesem Artikel für beide gilt.

In diesem Artikel beziehen wir uns auf die als Untertitel angezeigten Textspuren, da ihr Inhalt auf hörende Personen abzielt, die Schwierigkeiten haben, die Sprache des Films zu verstehen, anstatt auf gehörlose oder schwerhörige Personen.

### Das `<track>`-Element

HTML ermöglicht das Angeben von Untertiteln für ein Video mithilfe des {{ htmlelement("track") }}-Elements. Die verschiedenen Attribute dieses Elements erlauben es, Dinge wie die Art des hinzugefügten Inhalts, die Sprache, in der er verfasst ist, und natürlich eine Referenz zur Textdatei, die die tatsächlichen Untertiteldaten enthält, zu spezifizieren.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind Textdateien, die einem festgelegten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT)-Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber wesentliche Teile davon sind stabil, sodass wir es heute verwenden können.

Videoanbieter (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) liefern Bildunterschriften und Untertitel in einem Textformat mit ihren Videos, die normalerweise im SubRip Text (SRT)-Format vorliegen. Diese können leicht mit einem Online-Konverter in WebVTT konvertiert werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen zusammen, die am Code des vorherigen Artikels vorgenommen wurden, um das Hinzufügen von Untertiteln zum Video zu erleichtern. Wenn Sie daran nicht interessiert sind und direkt zu JavaScript und relevantem CSS übergehen möchten, überspringen Sie den Abschnitt [Untertitelimplementierung](#untertitelimplementierung).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich etwas gesprochenes Wort enthält und somit besser dazu dient, zu illustrieren, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML-Element `<track>` nutzen, um unsere Untertiteldateien zum HTML-Video hinzuzufügen. Tatsächlich haben wir unsere Untertitel in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch — und werden daher alle drei relevanten VTT-Dateien referenzieren, indem wir `<track>`-Elemente in unser HTML-`<video>`-Element einfügen:

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

Wie Sie sehen, hat jedes `<track>`-Element die folgenden Attribute gesetzt:

- `kind` erhält den Wert `subtitles`, was den Typ des Inhalts angibt, den die Dateien enthalten.
- `label` erhält einen Wert, der angibt, für welche Sprache der Untertitel gedacht ist — zum Beispiel `English` oder `Deutsch` — diese Etiketten erscheinen in der Benutzeroberfläche, damit der Benutzer leicht auswählen kann, welche Untertitelsprache er sehen möchte.
- `src` wird mit einer gültigen URL versehen, die auf die relevante WebVTT-Untertiteldatei in jedem Fall verweist.
- `srclang` gibt an, in welcher Sprache die Inhalte jeder Untertiteldatei verfasst sind.
- Das `default`-Attribut ist beim englischen `<track>`-Element gesetzt, was dem Browser anzeigt, dass dies die Standard-Untertiteldatei ist, die verwendet werden soll, wenn Untertitel aktiviert sind und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zu den `<track>`-Elementen haben wir auch eine neue Schaltfläche hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Folglich sehen die Videokontrollen jetzt wie folgt aus:

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

Die Videokontrollen haben einige kleinere Änderungen erfahren, um Platz für die zusätzliche Schaltfläche zu schaffen, aber diese sind relativ einfach.

Es wird kein Bild für die Untertitel-Schaltfläche verwendet, daher wird sie folgendermaßen gestylt:

```css
.controls button[data-state="subtitles"] {
  height: 85%;
  text-indent: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  background: black;
  border-radius: 2px;
}
```

Es gibt auch andere CSS-Änderungen, die speziell für einige zusätzliche JavaScript-Implementierungen sind, aber diese werden unten an der entsprechenden Stelle erwähnt.

## Untertitelimplementierung

Vieles, was wir tun, um auf die Videountertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videokontrollen wird, wenn ein Browser HTML-Videountertitel unterstützt, eine Schaltfläche innerhalb des nativen Kontrollsatzes bereitgestellt, um auf sie zuzugreifen. Da wir jedoch unsere eigenen Videokontrollen definiert haben, ist diese Schaltfläche ausgeblendet, und wir müssen unsere eigene definieren.

Browser unterscheiden sich darin, was sie unterstützen, daher versuchen wir, eine einheitlichere Benutzeroberfläche für jeden Browser zu schaffen, wo es möglich ist. Mehr zu Browser-Kompatibilitätsproblemen später.

### Erste Einrichtung

Wie bei allen anderen Schaltflächen müssen wir als erstes einen Griff zur Untertitel-Schaltfläche speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch alle Untertitel zunächst aus, falls der Browser einen von ihnen standardmäßig aktiviert:

```js
for (const track of video.textTracks) {
  track.mode = "hidden";
}
```

Die Eigenschaft `video.textTracks` enthält ein Array aller Textspuren, die dem Video zugeordnet sind. Wir gehen jede einzelne durch und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT-API](https://w3c.github.io/webvtt/#api) ermöglicht uns den Zugriff auf alle Textspuren, die für ein HTML-Video über das `<track>`-Element definiert sind.

### Ein Untertitelmenü erstellen

Unser Ziel ist es, die zuvor hinzugefügte `subtitles`-Schaltfläche zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, auszuwählen, in welcher Sprache sie die Untertitel angezeigt bekommen möchten, oder um sie ganz auszuschalten.

Wir haben die Schaltfläche hinzugefügt, aber bevor wir sie etwas tun lassen, müssen wir das dazugehörige Menü erstellen. Dieses Menü wird dynamisch gebaut, sodass später durch Bearbeiten der `<track>`-Elemente im Video-Markup Sprachen hinzugefügt oder entfernt werden können.

Wir brauchen nur durch die `textTracks` des Videos zu gehen, ihre Eigenschaften zu lesen und das Menü darauf basierend zu erstellen:

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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine unsortierte Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, mit der der Benutzer alle Untertitel abschalten kann, und dann werden Schaltflächen für jede Textspur hinzugefügt, wobei die Sprache und das Label von jeder gelesen werden.

Die Erstellung jedes Listenelements und der Schaltfläche erfolgt durch die `createMenuItem()`-Funktion, die wie folgt definiert ist:

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

Diese Funktion erstellt die erforderlichen {{ htmlelement("li") }}- und {{ htmlelement("button") }}-Elemente und gibt sie zurück, sodass sie zur Liste des Untertitelmenüs hinzugefügt werden können. Sie richtet auch die erforderlichen Ereignislistener auf der Schaltfläche ein, um das entsprechende Untertitelset ein- oder auszuschalten. Dies geschieht durch Einstellen des `mode`-Attributs des gewünschten Untertitels auf `showing` und durch Einstellen der anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es am unteren Rand des videoContainer in das DOM eingefügt.

Anfangs ist das Menü standardmäßig ausgeblendet, daher muss ein Ereignislistener zu unserer Untertitel-Schaltfläche hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitelmenü

Wir haben auch eine grundlegende Stillegung für das neu erstellte Untertitelmenü hinzugefügt:

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
  background: black;
  color: white;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}
```

## Stillegung der angezeigten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die einzelnen Untertitel (sogenannte Text-Cues) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Das `::cue`-Pseudo-Element ist der Schlüssel zum Anvisieren einzelner Text-Track-Cues für die Stillegung, da es jeden definierten Cue abgleicht. Es gibt nur eine Handvoll CSS-Eigenschaften, die auf einen Text-Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Kurzschreibweise
- {{ cssxref("outline") }} Kurzschreibweise
- {{ cssxref("font") }} Kurzschreibweise, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Um zum Beispiel die Textfarbe der Text-Track-Cues zu ändern, können Sie schreiben:

```css
::cue {
  color: #ccc;
}
```

Wenn die WebVTT-Datei [voice spans](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die es ermöglichen, Cues als eine bestimmte "Stimme" zu definieren:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann wird diese spezifische 'Stimme' so stilisierbar sein:

```css
::cue(v[voice="Test"]) {
  color: white;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stillegungen von Cues mit ::cue funktionieren derzeit in Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browser-Kompatibilität

[Die Browser-Unterstützung für WebVTT und das `<track>`-Element](https://caniuse.com/webvtt) ist ziemlich gut, obwohl sich einige Browser in ihrer Implementierung leicht unterscheiden.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert und die Standardkontrollen enthalten eine Schaltfläche und ein Menü, das dieselbe Funktionalität wie das gerade erstellte Menü bietet, zusammen mit einer "Auto"-Option, die es dem Browser erlaubt, zu wählen. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben erneut ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert und der Standardkontrollsatz enthält eine 'cc'-Schaltfläche, die Untertitel ein- oder ausschaltet. Chrome und Opera ignorieren das `default`-Attribut des `<track>`-Elements und versuchen stattdessen, die Sprache des Browsers mit der Sprache der Untertitel abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle Plugins für HTML-Videoplayer, die die Unterstützung von Untertiteln und Bildunterschriften bieten, die Sie anstelle der Erstellung eigener Lösungen nutzen können. Sie können im Internet nach diesen Plugins suchen, indem Sie Suchbegriffe wie _"HTML Videoplayer Plugin"_ verwenden.
