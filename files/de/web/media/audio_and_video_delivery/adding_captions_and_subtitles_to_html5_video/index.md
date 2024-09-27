---
title: Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video
slug: Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

In anderen Artikeln haben wir uns angesehen, wie man einen [Browser-übergreifenden Videoplayer erstellt](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) unter Verwendung der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs und wie man den Player [gestaltet](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel wird denselben Player verwenden, um zu zeigen, wie man Untertitel und Bildunterschriften hinzufügt, unter Verwendung des [WebVTT-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und des {{ htmlelement("track") }} Elements.

## Beispiel für ein Video mit Untertiteln

In diesem Artikel werden wir uns auf das Beispiel des Video-Players mit Untertiteln beziehen. Dieses Beispiel verwendet einen Ausschnitt aus dem [offenen Film Sintel](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

![Videoplayer mit Standardsteuerelementen wie Abspielen, Stoppen, Lautstärke und Untertitel ein- und ausschalten. Das abgespielte Video zeigt eine Szene eines Mannes mit einer speerähnlichen Waffe, und eine Bildunterschrift lautet: "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> [!NOTE]
> Sie finden den [Quellcode auf GitHub](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) und können das [Beispiel auch live ansehen](https://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML und Video-Untertitel

Bevor wir darauf eingehen, wie man Untertitel zum Videoplayer hinzufügt, gibt es einige Dinge, die wir zuerst erwähnen, die Sie wissen sollten, bevor wir beginnen.

### Bildunterschriften versus Untertitel

[Bildunterschriften und Untertitel sind nicht dasselbe](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): Sie haben deutlich unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen, und es wird empfohlen, sich über die Unterschiede zu informieren, wenn Sie sich nicht sicher sind, was sie sind. Technisch gesehen werden sie jedoch auf die gleiche Weise implementiert, daher gilt das Material in diesem Artikel für beide.

Für diesen Artikel werden wir die Textspuren, die angezeigt werden, als Untertitel bezeichnen, da ihr Inhalt an hörende Personen gerichtet ist, die Schwierigkeiten haben, die Sprache des Films zu verstehen, und nicht an Gehörlose oder Schwerhörige.

### Das \<track>-Element

HTML ermöglicht es uns, Untertitel für ein Video mit dem {{ htmlelement("track") }} Element anzugeben. Die verschiedenen Attribute dieses Elements erlauben es uns, Dinge wie den Typ des hinzugefügten Inhalts, die Sprache und natürlich eine Referenz zur Textdatei, die die eigentlichen Untertiteldaten enthält, anzugeben.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind einfache Textdateien, die einem bestimmten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format. Die [WebVTT-Spezifikation](https://w3c.github.io/webvtt/) wird noch bearbeitet, aber große Teile davon sind stabil, sodass wir sie heute verwenden können.

Videoprovider (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) bieten Untertitel und Bildunterschriften in einem Textformat mit ihren Videos an, sie sind jedoch meist im SubRip-Text (SRT) Format. Diese können mit einem Online-Konverter leicht in WebVTT umgewandelt werden.

## Modifikationen am HTML und CSS

Dieser Abschnitt fasst die Änderungen zusammen, die am Code des vorherigen Artikels vorgenommen wurden, um das Hinzufügen von Untertiteln zum Video zu erleichtern. Wenn Sie daran nicht interessiert sind und direkt in das JavaScript und relevantere CSS einsteigen möchten, überspringen Sie den Abschnitt [Implementierung von Untertiteln](#implementierung_von_untertiteln).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich einige Sprachpassagen enthält und daher besser veranschaulicht, wie Untertitel funktionieren.

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML `<track>`-Element verwenden, um unsere Untertiteldateien dem HTML-Video hinzuzufügen. Wir haben unsere Untertitel tatsächlich in drei verschiedenen Sprachen — Englisch, Deutsch und Spanisch — daher werden wir alle drei relevanten VTT-Dateien referenzieren, indem wir `<track>`-Elemente in unser HTML `<video>`-Element einfügen:

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

- `kind` hat den Wert `subtitles`, was auf den Typ des enthaltenen Inhalts hinweist.
- `label` hat einen Wert, der angibt, für welche Sprache dieser Untertitel Satz ist — zum Beispiel `English` oder `Deutsch` — diese Bezeichnungen erscheinen in der Benutzeroberfläche, um es dem Nutzer zu ermöglichen, einfach die gewünschte Untertitelsprache auszuwählen.
- `src` ist eine gültige URL, die auf die relevante WebVTT-Untertiteldatei in jedem Fall verweist.
- `srclang` gibt an, in welcher Sprache der Inhalt der jeweiligen Untertiteldatei ist.
- Das `default` Attribut ist auf dem englischen `<track>`-Element gesetzt, was dem Browser anzeigt, dass dies die Standarduntertiteldefinition ist, die verwendet werden soll, wenn die Untertitel aktiviert wurden und der Benutzer keine spezifische Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>`-Elemente haben wir auch eine neue Schaltfläche hinzugefügt, um das Menü für die Untertitel zu steuern, das wir erstellen werden. Infolgedessen sehen die Videosteuerungen jetzt wie folgt aus:

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

Die Videosteuerungen haben einige kleinere Änderungen erfahren, um Platz für die zusätzliche Schaltfläche zu schaffen, aber diese sind relativ unkompliziert.

Für die Untertitel-Schaltfläche wird kein Bild verwendet, sie wird daher wie folgt gestylt:

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

## Implementierung von Untertiteln

Vieles von dem, was wir tun, um auf die Video-Untertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen gibt es einen Button im nativen Kontrollset, wenn ein Browser HTML-Video-Untertitel unterstützt, um darauf zuzugreifen. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist dieser Button ausgeblendet, und wir müssen unseren eigenen definieren.

Browser variieren in dem, was sie unterstützen, daher werden wir versuchen, wo möglich eine einheitlichere Benutzeroberfläche für jeden Browser bereitzustellen. Mehr zu den Fragen der Browser-Kompatibilität später.

### Erste Einrichtung

Wie bei allen anderen Schaltflächen, ist eine der ersten Dinge, die wir tun müssen, einen Verweis auf die Untertitel-Schaltfläche zu speichern:

```js
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch zunächst alle Untertitel aus, für den Fall, dass der Browser einige davon standardmäßig aktiviert:

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Die `video.textTracks`-Eigenschaft enthält ein Array aller dem Video zugeordneten Textspuren. Wir durchlaufen jede einzelne und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT API](https://w3c.github.io/webvtt/#api) ermöglicht uns den Zugriff auf alle für ein HTML-Video definierten Textspuren unter Verwendung des `<track>`-Elements.

### Aufbau eines Untertitel-Menüs

Unser Ziel ist es, die zuvor hinzugefügte `subtitles`-Schaltfläche zu verwenden, um ein Menü anzuzeigen, das es den Nutzern ermöglicht, die Sprache auszuwählen, in der die Untertitel angezeigt werden sollen, oder sie vollständig auszuschalten.

Wir haben die Schaltfläche hinzugefügt, aber bevor wir sie aktivieren, müssen wir das zugehörige Menü erstellen. Dieses Menü wird dynamisch erstellt, sodass Sprachen später durch Bearbeiten der `<track>`-Elemente innerhalb des Video-Markups hinzugefügt oder entfernt werden können.

Alles, was wir tun müssen, ist, die `textTracks` des Videos durchzugehen, ihre Eigenschaften zu lesen und das Menü daraus aufzubauen:

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

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste zu halten, die unser Untertitelmenü enthält. Zuerst wird eine Option hinzugefügt, die es dem Nutzer ermöglicht, alle Untertitel auszuschalten, und dann werden Schaltflächen für jede Textspur hinzugefügt, wobei die Sprache und Bezeichnung von jeder gelesen werden.

Die Erstellung jedes Listenelements und jeder Schaltfläche wird von der `createMenuItem()`-Funktion vorgenommen, die wie folgt definiert ist:

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

Diese Funktion erstellt die erforderlichen {{ htmlelement("li") }} und {{ htmlelement("button") }} Elemente und gibt sie zurück, sodass sie zur Untertitelliste hinzugefügt werden können. Sie richtet auch die erforderlichen Ereignislistener auf der Schaltfläche ein, um den entsprechenden Untertitelsatz ein- oder auszuschalten. Dies geschieht, indem das `mode` Attribut des erforderlichen Untertitels auf `showing` gesetzt wird und die anderen auf `hidden`.

Sobald das Menü erstellt ist, wird es am unteren Ende des videoContainer in das DOM eingefügt.

Anfangs ist das Menü standardmäßig versteckt, daher muss ein Ereignislistener zu unserer Untertitel-Schaltfläche hinzugefügt werden, um es umzuschalten:

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitel-Menü

Wir haben auch einige rudimentäre Stile für das neu erstellte Untertitelmenü hinzugefügt:

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

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Möglichkeit, die einzelnen Untertitel (so genannte Text-Cues) über [CSS Extensions](https://w3c.github.io/webvtt/#css-extensions) zu stylen.

Das Pseudo-Element `::cue` ist der Schlüssel zum Stylen der einzelnen Textspur-Cues, da es zu jedem definierten Cue passt. Es gibt nur eine Handvoll von CSS-Eigenschaften, die auf ein Text-Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Kurzform-Eigenschaften
- {{ cssxref("outline") }} Kurzform-Eigenschaften
- {{ cssxref("font") }} Kurzform-Eigenschaften, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Zum Beispiel, um die Textfarbe der Textspur-Cues zu ändern, können Sie Folgendes schreiben:

```css
::cue {
  color: #ccc;
}
```

Wenn die WebVTT-Datei [Sprachspannen](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span) verwendet, die es ermöglichen, Cues als mit einer bestimmten "Stimme" definiert zu kennzeichnen:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann wird diese spezifische 'Stimme' wie folgt gestaltbar sein:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> [!NOTE]
> Einige der Stile von Cues mit ::cue funktionieren derzeit in Chrome, Opera und Safari, aber noch nicht in Firefox.

## Browser-Kompatibilität

[Die Browserunterstützung für WebVTT und das `<track>`-Element](https://caniuse.com/webvtt) ist ziemlich gut, obwohl einige Browser in ihrer Implementierung leicht variieren.

### Safari

In Safari 6.1+ sind Untertitel standardmäßig aktiviert, und die Standardsteuerelemente enthalten eine Schaltfläche und ein Menü, das dieselbe Funktionalität wie das von uns gebaute Menü bietet, zusammen mit einer "Auto"-Option, die es dem Browser ermöglicht, auszuwählen. Das `default`-Attribut wird ebenfalls unterstützt.

### Chrome und Opera

Diese Browser haben wieder ähnliche Implementierungen: Untertitel sind standardmäßig aktiviert und das Standardsteuerungset enthält einen 'cc'-Button, der Untertitel ein- und ausschaltet. Chrome und Opera ignorieren das `default`-Attribut auf dem `<track>`-Element und versuchen stattdessen, die Sprache des Browsers mit der Untertitelsprache abzugleichen.

## Plugins

Es gibt auch viele Open-Source- und kommerzielle HTML-Videoplayer-Plugins, die Unterstützung für Bildunterschriften und Untertitel bieten, die Sie anstelle einer eigenen Lösung verwenden können.
Sie können im Internet nach diesen Plugins mit Suchbegriffen wie _"HTML video player plugin"_ suchen.
