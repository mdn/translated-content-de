---
title: Erstellen eines plattformübergreifenden Videoplayers
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: f9048149324659786a814beb4c364a565acbf3fe
---

Dieser Artikel beschreibt einen grundlegenden HTML-Videoplayer, der die Media- und Fullscreen-APIs nutzt. Neben der Vollbildfunktion verfügt der Player über benutzerdefinierte Bedienelemente, anstatt nur die Standardoptionen des Browsers zu verwenden. Die Player-Steuerelemente selbst werden nicht über die erforderlichen Grundlagen hinaus gestaltet; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

Unser Beispiel-Videoplayer zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

## HTML-Markup

Zu Beginn werfen wir einen Blick auf das HTML, das den Player ausmacht.

### Das Video

Unser gesamter Player ist in einem {{ htmlelement("figure") }}-Element enthalten.

```html-nolint live-sample___video-player
<figure id="videoContainer">
```

Darin definieren wir zuerst das {{ htmlelement("video") }}-Element.

```html live-sample___video-player
<video
  id="video"
  controls
  preload="metadata"
  poster="/shared-assets/images/examples/tears-of-steel-battle-clip-medium-poster.jpg">
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    type="video/mp4" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.ogg"
    type="video/ogg" />
  <!-- Offer download -->
  <a href="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    >Download MP4</a
  >
</video>
```

Obwohl dieser Player sein eigenes benutzerdefiniertes Steuerungsset definiert, wird das `controls`-Attribut dennoch dem {{ htmlelement("video") }}-Element hinzugefügt, und das Standardsteuerungsset des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise haben Benutzer, die JavaScript ausgeschaltet haben (aus welchem Grund auch immer), weiterhin Zugriff auf die nativen Steuerungen des Browsers.

Ein Titelbild wird für das Video definiert, und das `preload`-Attribut ist auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen sollte, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Videodatei. Dies liefert dem Player Daten wie Videodauer und Format.

Für den Player werden drei verschiedene Videoquellen bereitgestellt: MP4, WebM und Ogg. Durch die Verwendung dieser verschiedenen Quellformate besteht die beste Chance, dass das Video von allen Browsern unterstützt wird, die HTML-Video unterstützen. Für weitere Informationen über Videoformate und Browser-Kompatibilität lesen Sie [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern ermöglichen, wobei das Standardsteuerungsset des Browsers verwendet wird. Der nächste Schritt besteht darin, ein benutzerdefiniertes Steuerungsset, ebenfalls in HTML, zu definieren, das zur Steuerung des Videos verwendet wird.

### Das Steuerungsset

Die meisten Standard-Videosteuerungen des Browsers haben folgende Funktionen:

- Wiedergabe/Pause
- Stummschalten
- Lautstärkeregler
- Fortschrittsbalken
- Vorwärtsspringen
- Vollbildmodus

Das benutzerdefinierte Steuerungsset wird ebenfalls diese Funktionalität unterstützen, mit der Ergänzung eines Stopp-Buttons.

Erneut ist das HTML ziemlich einfach, indem eine ungeordnete Liste mit `list-style-type:none` verwendet wird, um die Steuerelemente einzuschließen, von denen jedes ein Listenelement mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

```html live-sample___video-player
<ul id="video-controls" class="controls" data-state="hidden">
  <li><button id="play-pause" type="button">Play/Pause</button></li>
  <li><button id="stop" type="button">Stop</button></li>
  <li class="progress">
    <progress id="progress" value="0"></progress>
  </li>
  <li><button id="mute" type="button">Mute/Unmute</button></li>
  <li><button id="vol-inc" type="button">Vol+</button></li>
  <li><button id="vol-dec" type="button">Vol-</button></li>
  <li><button id="fs" type="button">Fullscreen</button></li>
</ul>
```

Jeder Button erhält eine `id`, damit er leicht mit JavaScript zugänglich ist.

Die Steuerelemente sind anfänglich mit einem CSS `display:none` ausgeblendet und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, erscheint das benutzerdefinierte Steuerungsset nicht, und er kann die Standardsteuerung des Browsers ungehindert verwenden.

Natürlich ist dieses benutzerdefinierte Steuerungsset derzeit nutzlos und macht nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

Abschließend schließen wir das `<figure>`-Element mit einer {{htmlelement("figcaption")}} ab, die die Urheberrechtsinformationen enthält.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Nutzung der Media-API

HTML enthält eine JavaScript [Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern Zugriff und Kontrolle über HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerungsset tatsächlich funktionsfähig zu machen. Darüber hinaus wird der Vollbild-Button die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) nutzen, eine weitere W3C-API, die es Webbrowsern ermöglicht, Apps im Vollbildmodus anzuzeigen.

### Einrichtung

Bevor die einzelnen Buttons behandelt werden, sind einige Initialisierungsaufrufe erforderlich. Variablen, die auf HTML-Elemente verweisen, werden benötigt:

```js live-sample___video-player
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handles können jetzt Ereignisse an jede der benutzerdefinierten Steuerungsknöpfe gebunden werden, um sie interaktiv zu gestalten. Die meisten dieser Buttons erfordern einen `click`-Ereignislistener, der hinzugefügt wird, sowie eine Methode und/oder Attribute der Media-API, die auf das Video angewendet werden.

Wie bereits erwähnt, müssen die Standardsteuerungen des Browsers jetzt deaktiviert und die benutzerdefinierten Steuerungen angezeigt werden:

```js live-sample___video-player
// Hide the default controls
video.controls = false;
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Wiedergabe/Pause

```js live-sample___video-player
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

Wenn ein `click`-Ereignis auf dem Wiedergabe/Pause-Button erkannt wird, prüft der Handler zunächst, ob das Video derzeit pausiert ist oder beendet wurde (über die `paused`- und `ended`-Attribute der Media-API); falls ja, wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video abgespielt werden, sodass es mit der `pause()`-Methode pausiert wird.

### Stopp

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API verfügt nicht über eine `stop`-Methode, um dies zu imitieren, wird das Video pausiert und seine `currentTime` (d.h. die aktuelle Abspielposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt (mehr über das {{ htmlelement("progress") }}-Element später).

### Stummschaltung

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Der Stummschalt-Button ist ein Umschaltknopf, der das `muted`-Attribut der Media-API verwendet, um das Video stumm zu schalten: dies ist ein Boolescher Wert, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es umzuschalten, setzen wir es auf das Inverse von sich selbst.

### Lautstärke

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärkeregelungsbuttons wurden definiert, einer zum Erhöhen der Lautstärke und ein anderer zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die sich darum kümmert:

```js live-sample___video-player
function alterVolume(dir) {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === "+" && currentVolume < 1) {
    video.volume += 0.1;
  } else if (dir === "-" && currentVolume > 0) {
    video.volume -= 0.1;
  }
}
```

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkenwert des Videos hält. Gültige Werte für dieses Attribut sind 0 bis 1 und alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der anzeigt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert, wobei sichergestellt wird, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, war nur das `value`-Attribut auf 0 gesetzt. Dieses Attribut gibt den aktuellen Wert des Fortschrittselements an. Es muss auch ein maximaler Wert festgelegt werden, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Dies wird dem `duration`-Attribut des Videos entnommen, das wiederum Teil der Media-API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das eintritt, wenn die Metadaten des Videos geladen wurden:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider hat das `duration`-Attribut des Videos in einigen mobilen Browsern möglicherweise nicht den korrekten Wert oder überhaupt keinen Wert, wenn `loadedmetadata` ausgelöst wird — falls es überhaupt ausgelöst wird. Deshalb muss etwas anderes getan werden, worauf weiter unten eingegangen wird.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich hervorragend zum Aktualisieren des `value`-Attributs des Fortschrittsbalkens, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit das aktuelle Playback im Video ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Wenn das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf die `currentTime` des Videos gesetzt. Diese Spanne hat einen festen CSS-Hintergrundfarbe, die ihr hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu bieten.

Im Hinblick auf das oben erwähnte `video.duration`-Problem sollte das `duration`-Attribut des Videos, wenn das `timeupdate`-Ereignis ausgelöst wird, in den meisten mobilen Browsern jetzt den korrekten Wert haben. Dies kann ausgenutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, falls es derzeit nicht gesetzt ist:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsbalken und Pufferrückmeldungen lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorwärtsspringen

Ein weiteres Merkmal der meisten Standard-Videosteuerungssets des Browsers ist die Möglichkeit, auf den Fortschrittsbalken des Videos zu klicken, um zu einem anderen Punkt im Video zu "springen". Dies kann auch erreicht werden, indem ein `click`-Ereignislistener zum `progress`-Element hinzugefügt wird:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code nutzt die geklickte Position, um (ungefähr) zu berechnen, wo im `progress`-Element der Benutzer geklickt hat, und das Video an diese Position zu setzen, indem das `currentTime`-Attribut eingestellt wird. Es wird vermieden, das `currentTime` zu setzen, wenn die Dauer des Videos {{jsxref("Global_Objects/NaN", "NaN")}} oder {{jsxref("Global_Objects/Infinity", "Infinity")}} ist, was passiert, wenn das Video noch nicht geladen ist.

### Vollbildmodus

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf einen Button, wenn das Video im Vollbildmodus ist: abbrechen, andernfalls in den Vollbildmodus wechseln.

Der Vollbild-Button wird ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Der Vollbild-Button muss tatsächlich etwas tun. Wie bei den anderen Buttons wird ein `click`-Ereignishandler angehängt, der den Vollbildmodus umschaltet:

```js live-sample___video-player
fullscreen.addEventListener("click", (e) => {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode
    document.exitFullscreen();
  } else {
    // The document is not in fullscreen mode
    videoContainer.requestFullscreen();
  }
});
```

Wenn sich der Browser derzeit im Vollbildmodus befindet, muss er beendet werden und umgekehrt. Interessanterweise muss für das Verlassen/Abbrechen des Vollbildmodus `document` verwendet werden, während jedes HTML-Element den Vollbildmodus anfordern kann. Hier wird `videoContainer` verwendet, da es auch die benutzerdefinierten Steuerungen enthält, die zusammen mit dem Video im Vollbildmodus erscheinen sollten.

## Ergebnis

Der CSS-Teil ist in diesem Tutorial verborgen, aber Sie können auf "Play" klicken, um den vollständigen Quellcode zu sehen. Im nächsten Teil, [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), werden wir einige interessante hier verwendete CSS-Techniken erkunden und auch neue CSS hinzufügen, um den Player ansprechender zu gestalten.

```css hidden live-sample___video-player
:root {
  color: #333333;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida", "Arial",
    "Helvetica", sans-serif;
}
a {
  color: #0095dd;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2255aa;
  text-decoration: underline;
}
figure {
  max-width: 64rem;
  width: 100%;
  margin: 0;
  padding: 0;
}
figcaption {
  display: block;
  font-size: 1rem;
}
video {
  width: 100%;
}

/* controls */
.controls {
  display: flex;
  gap: 6px;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}
.controls[data-state="hidden"] {
  display: none;
}
.controls li {
  width: max(10%, 3rem);
  margin: 0;
  padding: 0;
}
.controls .progress {
  flex-grow: 1;
  cursor: pointer;
}
.controls button {
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.controls progress {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #aaaaaa;
  overflow: hidden;
  border-radius: 2px;
}

/* fullscreen */
figure:fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;
}
figure:fullscreen video {
  margin-top: auto;
  margin-bottom: auto;
}
figure:fullscreen figcaption {
  display: none;
}
```

> [!WARNING]
> Das Beispielvideo kann laut sein!

{{EmbedLiveSample("video-player", "", 400, "", "", "", "fullscreen")}}

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Von HTML Audio und Video unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
