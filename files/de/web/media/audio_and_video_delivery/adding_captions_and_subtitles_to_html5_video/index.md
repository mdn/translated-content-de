---
title: Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video
slug: Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

In anderen Artikeln haben wir uns angesehen, wie man einen [plattformübergreifenden Videoplayer erstellt](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) mit den {{ domxref("HTMLMediaElement") }} und {{ domxref("Window.fullScreen") }} APIs, und auch wie man den [Player stylt](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics). In diesem Artikel wird derselbe Player verwendet, um zu zeigen, wie Sie Bildunterschriften und Untertitel hinzufügen können, indem Sie das [WebVTT-Format](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und das {{ htmlelement("track") }}-Element nutzen.

## Beispiel für ein Video mit Untertiteln

In diesem Artikel beziehen wir uns auf das Beispiel eines Videoplayers mit Untertiteln. Dieses Beispiel verwendet einen Ausschnitt aus dem [Sintel Open Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standard-Steuerelementen wie Abspielen, Stoppen, Lautstärke sowie Untertitel an und aus. Das laufende Video zeigt eine Szene eines Mannes mit einer speerähnlichen Waffe, eine Bildunterschrift lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie können den [Quellcode auf GitHub finden](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und auch [das Beispiel live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir darauf eingehen, wie Untertitel dem Videoplayer hinzugefügt werden, gibt es einige Dinge, die wir zuerst erwähnen sollten und die Sie wissen sollten, bevor wir beginnen.

### Bildunterschriften versus Untertitel

[Bildunterschriften und Untertitel sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben erheblich unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Es wird empfohlen, sich über die Unterschiede zu informieren, wenn Sie nicht sicher sind, was sie sind. Sie werden jedoch technisch auf dieselbe Weise implementiert, sodass das Material in diesem Artikel für beide gilt.

In diesem Artikel beziehen wir uns auf die als Untertitel angezeigten Textspuren, da ihr Inhalt auf hörende Menschen abzielt, die Schwierigkeiten haben, die Sprache des Films zu verstehen, anstatt auf gehörlose oder schwerhörige Menschen.

### Das \<track>-Element

HTML ermöglicht es uns, Untertitel für ein Video mithilfe des {{ htmlelement("track") }}-Elements anzugeben. Die verschiedenen Attribute dieses Elements erlauben es uns, solche Dinge wie den Typ des Inhalts, den wir hinzufügen, die Sprache, in der er vorliegt, und natürlich eine Referenz auf die Textdatei, die die tatsächlichen Untertiteldaten enthält, anzugeben.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind einfache Textdateien, die einem bestimmten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber große Teile davon sind stabil, sodass wir sie schon heute verwenden können.

Videoanbieter (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) liefern Bildunterschriften und Untertitel in einem Textformat mit ihren Videos, aber sie liegen meist im SubRip Text (SRT) Format vor. Diese können mit einem Online-Konverter leicht in WebVTT umgewandelt werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen zusammen, die am Code des vorherigen Artikels vorgenommen wurden, um die Hinzufügung von Untertiteln zum Video zu ermöglichen. Wenn Sie daran nicht interessiert sind und direkt in das JavaScript und die relevanteste CSS einsteigen möchten, springen Sie zum Abschnitt [Implementierung der Untertitel](#implementierung_der_untertitel).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich einige Sprachinhalte hat und somit besser veranschaulicht, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML-<track>-Element verwenden, um unsere Untertiteldateien dem HTML-Video hinzuzufügen. Wir haben unsere Untertitel in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch — daher verweisen wir auf alle drei der relevanten VTT-Dateien, indem wir <track>-Elemente in unser HTML-<video>-Element einfügen:

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

Wie Sie sehen können, haben alle <track>-Elemente die folgenden Attribute:

- `kind` hat den Wert `subtitles`, der den Typ des Inhalts angibt, den die Dateien enthalten.
- `label` enthält einen Wert, der angibt, für welche Sprache dieser Untertitel-Satz gedacht ist — z. B. `English` oder `Deutsch` — diese Beschriftungen erscheinen in der Benutzeroberfläche, um dem Benutzer die einfache Auswahl der gewünschten Untertitelsprache zu ermöglichen.
- `src` ist mit einer gültigen URL versehen, die auf die jeweilige WebVTT-Untertiteldatei verweist.
- `srclang` gibt an, in welcher Sprache der Inhalt der jeweiligen Untertiteldaten vorliegt.
- Das `default`-Attribut ist beim englischen <track>-Element gesetzt, was dem Browser anzeigt, dass dies die standardmäßige Untertiteldatei ist, die verwendet werden soll, wenn Untertitel aktiviert wurden und der Benutzer keine spezielle Auswahl getroffen hat.

Zusätzlich zu den <track>-Elementen haben wir auch eine neue Schaltfläche hinzugefügt, um das Menü für die Untertitelsteuerung zu erstellen. Infolgedessen sehen die Videosteuerungen nun wie folgt aus:

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

Die Videosteuerungen haben einige kleinere Änderungen erfahren, um Platz für die zusätzliche Schaltfläche zu schaffen, aber diese sind relativ einfach.

Für die Untertitel-Schaltfläche wird kein Bild verwendet, sie wird gestylt als:

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

Ein großer Teil dessen, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen wird, wenn ein Browser HTML-Video-Untertitel unterstützt, eine Schaltfläche im nativen Steuerungssatz bereitgestellt, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist diese Schaltfläche ausgeblendet, und wir müssen unsere eigene definieren.

Browser unterscheiden sich darin, was sie unterstützen, daher werden wir versuchen, eine einheitlichere Benutzeroberfläche für jeden Browser zu schaffen, wo immer dies möglich ist. Später gibt es mehr zu Kompatibilitätsproblemen bei Browsern.

### Erste Einrichtung

Wie bei allen anderen Schaltflächen ist eines der ersten Dinge, die wir tun müssen, einen Griff für die Untertitel-Schaltfläche zu speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir deaktivieren auch zu Beginn alle Untertitel, falls der Browser automatisch welche aktiviert:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die Eigenschaft `video.textTracks` enthält ein Array aller dem Video angehängten Textspuren. Wir durchlaufen jede und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT-API](https://w3c.github.io/webvtt/#api) ermöglicht uns den Zugriff auf alle Textspuren, die für ein HTML-Video mit dem <track>-Element definiert sind.

### Aufbau eines Untertitelmenüs

Unser Ziel ist es, die zuvor hinzugefügte `subtitles`-Schaltfläche zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, auszuwählen, in welcher Sprache die Untertitel angezeigt werden sollen, oder diese vollständig auszuschalten.

Wir haben die Schaltfläche hinzugefügt, aber bevor wir sie etwas tun lassen, müssen wir das Menü erstellen, das dazu gehört. Dieses Menü wird dynamisch erstellt, sodass Sprachen später durch Bearbeiten der <track>-Elemente innerhalb des Video-Markups hinzugefügt oder entfernt werden können.

Alles, was wir tun müssen, ist durch die `textTracks` des Videos zu gehen, ihre Eigenschaften zu lesen und das Menü daraufhin aufzubauen:

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

Dieser Code erstellt ein {{ domxref("documentFragment") }}, das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, die es dem Benutzer ermöglicht, alle Untertitel auszuschalten, und dann werden Schaltflächen für jede Textspur hinzugefügt, die die Sprache und das Label von jeder liest.

Die Erstellung jedes Listenelements und jeder Schaltfläche erfolgt mit der Funktion `createMenuItem()`, die wie folgt definiert ist:

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

Diese Funktion erstellt die erforderlichen {{ htmlelement("li") }} und {{ htmlelement("button") }} Elemente und gibt sie zurück, damit sie der Untertitelliste hinzugefügt werden können. Sie richtet auch die erforderlichen Ereignislistener für die Schaltfläche ein, um das entsprechende Untertitelset ein- oder auszuschalten. Dies geschieht, indem das erforderliche Untertitels `mode`-Attribut auf `showing` gesetzt wird, und die anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es am unteren Rand des `videoContainer` in das DOM eingefügt.

Zunächst ist das Menü standardmäßig ausgeblendet, sodass ein Ereignislistener für unsere Untertitel-Schaltfläche hinzugefügt werden muss, um es umzuschalten:

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

## Styling der dargestellten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die einzelnen Untertitel (sogenannte Text-Hinweise) über [CSS-Erweiterungen](https://w3c.github.io/webvtt/#css-extensions) zu gestalten.

Das `::cue` Pseudo-Element ist der Schlüssel zum Ansprechen einzelner Text-Spur-Hinweise für das Styling, da es mit jedem definierten Hinweis übereinstimmt. Es gibt nur wenige CSS-Eigenschaften, die auf einen Text-Hinweis angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Kurzschreibweise
- {{ cssxref("outline") }} Kurzschreibweise
- {{ cssxref("font") }} Kurzschreibweise, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Beispielsweise können Sie die Textfarbe der Textspurinhalte ändern, indem Sie Folgendes schreiben:

```css
::cue {
  color: #ccc;
}
```

Verwendet die WebVTT-Datei [Voice-Spans](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span), die es ermöglichen, Hinweise als eine bestimmte "Stimme" zu definieren:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann wird diese spezifische 'Stimme' wie folgt stilisierbar sein:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einiges der Stillegung von Hinweisen mit ::cue funktioniert derzeit in Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browserkompatibilität

[Die Unterstützung für WebVTT und das `<track>`-Element durch die Browser](https://caniuse.com/webvtt) ist ziemlich gut, obwohl sich einige Browser leicht in ihrer Implementierung unterscheiden.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerelemente enthalten eine Schaltfläche und ein Menü, das dieselbe Funktionalität bietet wie das Menü, das wir gerade erstellt haben, zusammen mit einer "Auto"-Option, die dem Browser erlaubt zu wählen. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben eine ähnliche Implementierung: Untertitel sind standardmäßig aktiviert und das Standardsatz an Steuerelementen enthält eine 'cc'-Schaltfläche, die Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default`-Attribut im <track>-Element und versuchen stattdessen, die Sprache des Browsers mit der Sprache der Untertitel abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Untertitel- und Bildunterschriftenunterstützung bieten, die Sie anstelle einer eigenen Implementierung verwenden können.
Sie können im Internet nach diesen suchen, indem Sie Begriffe wie _"HTML Videoplayer Plugin"_ verwenden.
