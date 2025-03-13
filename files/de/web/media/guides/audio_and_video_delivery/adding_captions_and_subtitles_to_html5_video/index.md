---
title: Hinzufügen von Untertiteln und Untertitelungen zu HTML-Video
slug: Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

In anderen Artikeln haben wir untersucht, wie man mit den [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs einen [plattformunabhängigen Videoplayer erstellt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) und wie man den [Player gestaltet](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel wird denselben Player verwenden und zeigen, wie man Untertitel und Untertitelungen mit dem [WebVTT-Format](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und dem {{ htmlelement("track") }}-Element hinzufügt.

## Beispiel eines Videos mit Untertiteln

In diesem Artikel werden wir auf das Beispiel des Video-Players mit Untertiteln verweisen. Dieses Beispiel verwendet einen Ausschnitt aus dem [Sintel Open Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standardsteuerungen wie Wiedergabe, Stopp, Lautstärke und Ein-/Ausschalten der Untertitel. Das abgespielte Video zeigt eine Szene eines Mannes mit einer speerähnlichen Waffe, und eine Untertitelung lautet: "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können sich [den Quellcode auf GitHub ansehen](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und sich auch [das Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitelungen

Bevor wir uns damit beschäftigen, wie man Untertitel zum Videoplayer hinzufügt, gibt es einige Dinge, die wir zunächst erwähnen möchten und derer Sie sich bewusst sein sollten, bevor wir beginnen.

### Untertitel vs. Untertitelungen

[Untertitelungen und Untertitel sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben deutlich unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Es wird empfohlen, sich über die Unterschiede zu informieren, wenn Sie sich nicht sicher sind, was sie bedeuten. Sie werden jedoch technisch auf dieselbe Weise implementiert, sodass das Material in diesem Artikel auf beide zutrifft.

Für diesen Artikel werden wir die Textspuren, die angezeigt werden, als Untertitel bezeichnen, da deren Inhalt für hörende Personen gedacht ist, die Schwierigkeiten haben, die Sprache des Films zu verstehen, nicht für gehörlose oder schwerhörige Personen.

### Das `<track>`-Element

HTML ermöglicht es uns, Untertitel zu einem Video mittels des {{ htmlelement("track") }}-Elements hinzuzufügen. Die verschiedenen Attribute dieses Elements erlauben es uns, Dinge wie den Typ des Inhalts, den wir hinzufügen, die Sprache, in der er verfasst ist, und natürlich einen Verweis auf die Textdatei, die die tatsächlichen Untertitelinformationen enthält, zu spezifizieren.

### WebVTT

Die Dateien, die die eigentlichen Untertiteldaten enthalten, sind Textdateien, die einem festgelegten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch entwickelt, aber wesentliche Teile davon sind stabil, sodass wir sie heute verwenden können.

Videoproduzenten (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) stellen Untertitelungen und Untertitel im Textformat mit ihren Videos bereit, allerdings oft im SubRip Text (SRT) Format. Diese können leicht mittels eines Online-Konverters in WebVTT umgewandelt werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen zusammen, die an dem Code des vorherigen Artikels vorgenommen wurden, um die Hinzufügung von Untertiteln zum Video zu erleichtern. Wenn Sie sich nicht dafür interessieren und direkt in das JavaScript und die relevanteren CSS einsteigen möchten, springen Sie zum Abschnitt [Implementierung der Untertitel](#implementierung_der_untertitel).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich einige Sprachdialoge enthält und daher besser veranschaulicht, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML `<track>`-Element verwenden, um unsere Untertiteldateien in das HTML-Video einzufügen. Wir haben unsere Untertitel tatsächlich in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch —, daher werden wir alle drei der relevanten VTT-Dateien referenzieren, indem wir `<track>`-Elemente innerhalb unseres HTML `<video>`-Elements hinzufügen:

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

- `kind` hat den Wert `subtitles`, der angibt, welche Art von Inhalt die Dateien enthalten.
- `label` hat einen Wert, der angibt, für welche Sprache dieses Untertitelset gedacht ist — beispielsweise `English` oder `Deutsch` — diese Labels erscheinen in der Benutzeroberfläche, damit der Benutzer leicht auswählen kann, in welcher Sprache er die Untertitel sehen möchte.
- `src` ist eine gültige URL, die auf die entsprechende WebVTT-Untertiteldatei in jedem Fall verweist.
- `srclang` gibt an, in welcher Sprache der Inhalt der einzelnen Untertiteldateien verfasst ist.
- Das `default`-Attribut ist auf dem englischen `<track>`-Element gesetzt, was dem Browser anzeigt, dass dies die Standarddefinition der Untertiteldatei ist, die verwendet werden soll, wenn die Untertitel aktiviert sind und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zu den `<track>`-Elementen haben wir auch eine neue Schaltfläche hinzugefügt, um das Untertitelmenü zu steuern, das wir erstellen werden. Infolgedessen sehen die Videosteuerungen nun wie folgt aus:

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

Die Videosteuerungen wurden geringfügig geändert, um Platz für die zusätzliche Schaltfläche zu schaffen, aber diese Änderungen sind relativ unkompliziert.

Für die Untertitel-Schaltfläche wird kein Bild verwendet, sie ist wie folgt gestaltet:

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

Vieles von dem, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen, gibt es, wenn ein Browser HTML-Video-Untertitel unterstützt, eine Schaltfläche innerhalb der nativen Steuerung, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist diese Schaltfläche ausgeblendet, und wir müssen unsere eigene definieren.

Browser unterscheiden sich darin, was sie unterstützen. Daher werden wir versuchen, eine einheitlichere Benutzeroberfläche für jeden Browser dort bereitzustellen, wo dies möglich ist. Weiter unten gibt es mehr zu den Problemen mit der Browser-Kompatibilität.

### Erste Einrichtung

Wie bei allen anderen Schaltflächen müssen wir als erstes einen Griff zur Untertitelschaltfläche speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten zunächst alle Untertitel aus, falls der Browser einen davon standardmäßig einschaltet:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die `video.textTracks`-Eigenschaft enthält ein Array aller an das Video angehängten Textspuren. Wir durchlaufen jede einzelne und setzen deren `mode` auf `hidden`.

Hinweis: Die [WebVTT-API](https://w3c.github.io/webvtt/#api) gibt uns Zugriff auf alle Textspuren, die für ein HTML-Video mit dem `<track>`-Element definiert sind.

### Aufbau eines Untertitel-Menüs

Unser Ziel ist es, die zuvor hinzugefügte `subtitles`-Schaltfläche zu verwenden, um ein Menü anzuzeigen, das es Benutzern ermöglicht, auszuwählen, in welcher Sprache sie die Untertitel angezeigt bekommen möchten, oder sie vollständig auszuschalten.

Wir haben die Schaltfläche hinzugefügt, aber bevor wir ihr eine Funktion hinzufügen, müssen wir das dazugehörige Menü erstellen. Dieses Menü wird dynamisch erstellt, sodass Sprachen später hinzugefügt oder entfernt werden können, indem die `<track>`-Elemente innerhalb des Video-Markups bearbeitet werden.

Alles, was wir tun müssen, ist, die `textTracks` des Videos durchzugehen, ihre Eigenschaften zu lesen und das Menü daraus aufzubauen:

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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zunächst wird eine Option hinzugefügt, die es dem Benutzer ermöglicht, alle Untertitel auszuschalten, und dann werden Schaltflächen für jede Textspur hinzugefügt, wobei die Sprache und der Label von jeder gelesen werden.

Die Erstellung jedes Listenelements und jeder Schaltfläche erfolgt durch die Funktion `createMenuItem()`, die wie folgt definiert ist:

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

Diese Funktion erstellt die benötigten {{ htmlelement("li") }}- und {{ htmlelement("button") }}-Elemente und gibt sie zurück, damit sie der Liste des Untertitelmenüs hinzugefügt werden können. Sie richtet auch die erforderlichen Ereignislistener auf der Schaltfläche ein, um das relevante Untertitelset ein- oder auszuschalten. Dies wird erreicht, indem das `mode`-Attribut der gewünschten Untertitel auf `showing` gesetzt wird, während die anderen auf `hidden` gesetzt werden.

Sobald das Menü erstellt ist, wird es unten im videoContainer in das DOM eingefügt.

Zunächst ist das Menü standardmäßig ausgeblendet, daher muss ein Ereignislistener zu unserer Untertitelschaltfläche hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitel-Menü

Wir haben auch einige grundlegende Stile für das neu erstellte Untertitel-Menü hinzugefügt:

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

## Stilgestaltung der angezeigten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die einzelnen Untertitel (etwas, das als Text-Cues bezeichnet wird) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu gestalten.

Das `::cue`-Pseudoelement ist der Schlüssel zur Zielansteuerung einzelner Textspur-Cues für die Stilgestaltung, da es mit jedem definierten Cue übereinstimmt. Es gibt nur eine Handvoll von CSS-Eigenschaften, die auf einen Text-Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Shorthand-Eigenschaften
- {{ cssxref("outline") }} Shorthand-Eigenschaften
- {{ cssxref("font") }} Shorthand-Eigenschaften, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Beispielsweise, um die Textfarbe der Textspur-Cues zu ändern, können Sie schreiben:

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

Dann kann diese spezielle 'Stimme' folgendermaßen gestylt werden:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stilgestaltungen der Cues mit ::cue funktionieren derzeit in Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browser-Kompatibilität

[Die Unterstützung von WebVTT und dem `<track>`-Element durch Browser](https://caniuse.com/webvtt) ist ziemlich gut, obwohl einige Browser geringfügig in ihrer Implementierung variieren.

### Safari

In Safari ab Version 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerungen enthalten eine Schaltfläche und ein Menü, das dieselbe Funktionalität bietet wie das Menü, das wir gerade erstellt haben, zusammen mit einer "Auto"-Option, die dem Browser die Auswahl überlässt. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben wieder ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert und der Standardsatz der Steuerungen enthält eine 'cc'-Schaltfläche, die Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default`-Attribut auf dem `<track>`-Element und versuchen stattdessen, die Sprache des Browsers mit der Sprache der Untertitel abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Unterstützung für Untertitel und Untertitelungen bieten, die Sie verwenden können, anstatt Ihre eigenen zu erstellen.
Sie können im Internet nach ihnen suchen, indem Sie Suchbegriffe wie _"HTML video player plugin"_ verwenden.
