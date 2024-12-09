---
title: Hinzufügen von Untertiteln zu HTML-Video
slug: Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 1e25b7f88dcc95997c8c741651599da0e9bdd39c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

In anderen Artikeln haben wir uns angesehen, wie man einen [plattformübergreifenden Videoplayer baut](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) unter Verwendung der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs und auch wie man [den Player stylt](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel wird denselben Player verwenden und zeigen, wie man Untertitel und Bildunterschriften hinzufügt, mit dem [WebVTT-Format](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und dem {{ htmlelement("track") }}-Element.

## Beispiel eines Videos mit Untertiteln

In diesem Artikel beziehen wir uns auf das Beispiel "Videoplayer mit Untertiteln". Dieses Beispiel verwendet einen Ausschnitt aus dem [Sintel open movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standard-Steuerelementen wie Wiedergabe, Stopp, Lautstärke und Um- und Ausschalten der Untertitel. Das gespielte Video zeigt eine Szene eines Mannes, der eine speerähnliche Waffe hält, und eine Bildunterschrift besagt: "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können den [Quellcode auf GitHub finden](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und auch das [Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Videountertitel

Bevor wir uns damit befassen, wie Untertitel zum Videoplayer hinzugefügt werden, gibt es einige Dinge, die wir zunächst erwähnen, die Ihnen bewusst sein sollten, bevor wir beginnen.

### Bildunterschriften versus Untertitel

[Bildunterschriften und Untertitel sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben deutlich unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Es wird empfohlen, die Unterschiede nachzulesen, falls Sie sich nicht sicher sind. Technisch werden sie jedoch auf die gleiche Weise implementiert, daher gilt der Inhalt dieses Artikels für beide.

In diesem Artikel werden wir die Textspuren als Untertitel referenzieren, da ihr Inhalt auf hörende Menschen abzielt, die Schwierigkeiten haben, die Sprache des Films zu verstehen, anstatt auf gehörlose oder schwerhörige Menschen.

### Das `<track>`-Element

HTML ermöglicht uns das Spezifizieren von Untertiteln für ein Video unter Verwendung des {{ htmlelement("track") }}-Elements. Die verschiedenen Attribute dieses Elements erlauben es uns, Dinge wie die Art des hinzuzufügenden Inhalts, die Sprache und natürlich eine Referenz auf die Textdatei, die die eigentliche Untertitelinformation enthält, anzugeben.

### WebVTT

Die Dateien, die die eigentlichen Untertiteldaten enthalten, sind einfache Textdateien, die einem festgelegten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT)-Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber große Teile davon sind stabil, sodass wir es heute verwenden können.

Videoprovider (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) stellen Untertitel und Bildunterschriften in einem Textformat mit ihren Videos bereit, aber sie sind normalerweise im SubRip Text (SRT)-Format. Diese können leicht mit einem Online-Konverter in WebVTT umgewandelt werden.

## Anpassungen an HTML und CSS

Dieser Abschnitt fasst die Anpassungen des Codes aus dem vorherigen Artikel zusammen, um das Hinzufügen von Untertiteln zum Video zu ermöglichen. Wenn Sie daran nicht interessiert sind und direkt in JavaScript und relevanteres CSS eintauchen möchten, springen Sie zum Abschnitt [Untertitelimplementierung](#untertitelimplementierung).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich einige Sprachanteile enthält und daher besser veranschaulicht, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML-`<track>`-Element verwenden, um unsere Untertiteldateien dem HTML-Video hinzuzufügen. Tatsächlich haben wir unsere Untertitel in drei verschiedenen Sprachen - Englisch, Deutsch und Spanisch - also werden wir alle drei relevanten VTT-Dateien referenzieren, indem wir `<track>`-Elemente in unser HTML-`<video>`-Element einfügen:

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

- `kind` erhält den Wert `subtitles`, der den Inhaltstyp der Dateien angibt.
- `label` erhält einen Wert, der angibt, für welche Sprache dieses Untertitel-Set vorgesehen ist - zum Beispiel `English` oder `Deutsch`. Diese Labels erscheinen in der Benutzeroberfläche und ermöglichen es dem Benutzer, leicht auszuwählen, welche Untertitelsprache er sehen möchte.
- `src` wird eine gültige URL zugeordnet, die auf die entsprechende WebVTT-Untertiteldatei verweist.
- `srclang` gibt an, in welcher Sprache der Inhalt der Untertitel-Dateien ist.
- Das `default`-Attribut ist auf dem englischen `<track>`-Element gesetzt, um dem Browser mitzuteilen, dass dies die standardmäßige Untertiteldefinition ist, die verwendet wird, wenn die Untertitel eingeschaltet sind und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>`-Elemente haben wir einen neuen Button hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Folglich sehen die Videosteuerungen jetzt wie folgt aus:

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

Es gibt auch andere CSS-Änderungen, die spezifisch für einige zusätzliche JavaScript-Implementierungen sind, aber diese werden an der entsprechenden Stelle unten erwähnt.

## Untertitelimplementierung

Ein Großteil dessen, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen wird, wenn ein Browser HTML-Video-Untertitel unterstützt, ein Button im nativen Steuerungssatz bereitgestellt, um auf sie zuzugreifen. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist dieser Button ausgeblendet und wir müssen unseren eigenen definieren.

Browser unterscheiden sich darin, was sie unterstützen, daher werden wir versuchen, eine einheitlichere Benutzeroberfläche für jeden Browser bereitzustellen, wo immer möglich. Mehr über Browser-Kompatibilitätsprobleme folgt später.

### Erste Einrichtung

Wie bei allen anderen Buttons müssen wir als erstes einen Verweis auf den Untertitel-Button speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch anfänglich alle Untertitel aus, falls der Browser einige davon standardmäßig einschaltet:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die `video.textTracks`-Eigenschaft enthält ein Array aller an das Video angehängten Textspuren. Wir durchlaufen jede und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT-API](https://w3c.github.io/webvtt/#api) gibt uns Zugriff auf alle die Textspuren, die für ein HTML-Video mit dem `<track>`-Element definiert sind.

### Aufbau eines Untertitelmenüs

Unser Ziel ist es, den zuvor hinzugefügten `subtitles`-Button zu verwenden, um ein Menü anzuzeigen, das den Benutzern ermöglicht, auszuwählen, in welcher Sprache sie die Untertitel angezeigt haben möchten, oder sie ganz auszuschalten.

Wir haben den Button hinzugefügt, aber bevor wir ihn etwas ausführen lassen, müssen wir das Menü bauen, das dazugehört. Dieses Menü wird dynamisch erstellt, sodass Sprachen später durch Editieren der `<track>`-Elemente im Videomarkup hinzugefügt oder entfernt werden können.

Alles, was wir tun müssen, ist durch die `textTracks` des Videos zu gehen, ihre Eigenschaften zu lesen und das Menü davon aus aufzubauen:

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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine unsortierte Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, um dem Benutzer zu ermöglichen, alle Untertitel auszuschalten, und dann werden Buttons für jede Textspur hinzugefügt, wobei die Sprache und das Label aus jeder einzelnen gelesen werden.

Die Erstellung jedes Listenelements und Buttons wird durch die `createMenuItem()`-Funktion durchgeführt, die wie folgt definiert ist:

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

Diese Funktion baut die erforderlichen {{ htmlelement("li") }} und {{ htmlelement("button") }}-Elemente und gibt sie zurück, damit sie zur Untertitelliste hinzugefügt werden können. Es fügt auch die erforderlichen Event-Listener zum Button hinzu, um das relevante Untertitelset ein- oder auszuschalten. Dies geschieht durch Setzen des `mode`-Attributs der erforderlichen Untertitel auf `showing` und Setzen der anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es dann am unteren Rand des videoContainer in das DOM eingefügt.

Anfänglich ist das Menü standardmäßig ausgeblendet, daher muss ein Event-Listener zu unserem Untertitel-Button hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### Untertitel-Menü-CSS

Wir fügen auch einige grundlegende Stile für das neu erstellte Untertitelmenü hinzu:

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

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die einzelnen Untertitel (sogenannte Text-Cues) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Das `::cue`-Pseudo-Element ist der Schlüssel zur Gestaltung individueller Text-Cue-Spuren. Es gibt nur eine Handvoll von CSS-Eigenschaften, die auf einen Text-Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Kurzschreibweisen
- {{ cssxref("outline") }} Kurzschreibweisen
- {{ cssxref("font") }} Kurzschreibweisen, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Beispielsweise können Sie die Textfarbe der Text-Cue-Spuren wie folgt ändern:

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
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stylings von Cues mit ::cue funktionieren derzeit in Chrome, Opera und Safari, jedoch noch nicht in Firefox.

## Browser-Kompatibilität

[Die Unterstützung von WebVTT und dem `<track>`-Element](https://caniuse.com/webvtt) ist ziemlich gut, obwohl einige Browser in ihrer Implementierung leicht abweichen.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert und die Standardsteuerungen enthalten einen Button und ein Menü, das dieselbe Funktionalität wie das Menü bietet, das wir gerade erstellt haben, zusammen mit einer "Auto"-Option, die dem Browser erlaubt, auszuwählen. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben erneut ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert und der Standardsatz an Steuerungen enthält einen "cc"-Button, der Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default`-Attribut auf dem `<track>`-Element und versuchen stattdessen, die Sprache des Browsers mit der Sprache der Untertitel abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Unterstützung für Untertitel bieten, die Sie anstelle der Erstellung Ihrer eigenen verwenden können.
Sie können im Web mit Suchbegriffen wie "HTML video player plugin" danach suchen.
