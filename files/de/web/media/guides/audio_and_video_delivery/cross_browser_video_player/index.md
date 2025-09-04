---
title: Erstellen eines plattformübergreifenden Videoplayers
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 9381ac06accc1f6340cda5c90cec69cc66f67136
---

Dieser Artikel beschreibt einen einfachen HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Neben der Vollbildfunktionalität verfügt der Player über benutzerdefinierte Steuerungen anstelle der Standardsteuerungen des Browsers. Die Steuerungen des Players werden nur im notwendigen Umfang gestylt, um sie funktionsfähig zu machen; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

Unser Beispiel-Videoplayer zeigt einen Ausschnitt aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

## HTML-Markup

Zu Beginn werfen wir einen Blick auf das HTML, das den Player ausmacht.

### Das Video

Unser gesamter Player ist in einem {{ htmlelement("figure") }}-Element enthalten.

```html-nolint live-sample___video-player
<figure id="videoContainer">
```

Im Inneren definieren wir zuerst das {{ htmlelement("video") }}-Element.

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

Obwohl dieser Player sein eigenes benutzerdefiniertes Steuerungssatz definiert, wird das `controls`-Attribut dennoch dem {{ htmlelement("video") }}-Element hinzugefügt, und das Standardsteuerungssatz des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise haben Benutzer, die JavaScript deaktiviert haben (aus welchem Grund auch immer), weiterhin Zugriff auf die nativen Steuerungen des Browsers.

Ein Posterbild wird für das Video definiert, und das `preload`-Attribut wird auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen sollte, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Videodatei. Dies liefert dem Player Daten wie Videolänge und -format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser unterschiedlichen Quellformate bietet die beste Chance, von allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Für weitere Informationen zu Videoformaten und Browser-Kompatibilität siehe [Wahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem Standardsteuerungssatz des Browsers ermöglichen. Der nächste Schritt besteht darin, einen benutzerdefinierten Steuerungssatz ebenfalls in HTML zu definieren, der zur Steuerung des Videos verwendet wird.

### Das Steuerungssatz

Die meisten Standardvideosteuerungen der Browser haben folgende Funktionalität:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsanzeige
- Vorspulen
- Vollbildmodus

Der benutzerdefinierte Steuerungssatz wird diese Funktionalität ebenfalls unterstützen, mit der zusätzlichen Hinzufügung einer Stopp-Taste.

Auch hier ist das HTML ziemlich unkompliziert, es wird eine ungeordnete Liste mit `list-style-type:none` verwendet, um die Steuerungen zu umschließen, von denen jede ein Listenelement mit `float:left` ist. Für die Fortschrittsanzeige wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element eingefügt, aber innerhalb des {{ htmlelement("figure") }}-Elements (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

```html live-sample___video-player
<ul id="video-controls" class="controls" data-state="hidden">
  <li><button id="play-pause" type="button">Play/Pause</button></li>
  <li><button id="stop" type="button">Stop</button></li>
  <li class="progress">
    <progress id="progress" value="0" min="0"></progress>
  </li>
  <li><button id="mute" type="button">Mute/Unmute</button></li>
  <li><button id="vol-inc" type="button">Vol+</button></li>
  <li><button id="vol-dec" type="button">Vol-</button></li>
  <li><button id="fs" type="button">Fullscreen</button></li>
</ul>
```

Jede Taste erhält eine `id`, damit sie einfach mit JavaScript abgerufen werden kann.

Die Steuerungen sind anfänglich mit einem CSS `display:none` verborgen und werden mit JavaScript aktiviert. Wiederum, wenn ein Benutzer JavaScript deaktiviert hat, erscheint der benutzerdefinierte Steuerungssatz nicht, und er kann ungehindert das Standardsteuerungssatz des Browsers verwenden.

Natürlich ist dieser benutzerdefinierte Steuerungssatz derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

Schließlich schließen wir das `<figure>`-Element mit einem {{htmlelement("figcaption")}} ab, das die Urheberrechtsinformationen enthält.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Verwendung der Media-API

HTML enthält eine JavaScript-[Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern Zugriff auf und Steuerung von HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerungssatz tatsächlich funktional zu machen. Darüber hinaus wird die Vollbildtaste die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die es Webbrowsern ermöglicht, Apps im Vollbildmodus Ihres Computers anzuzeigen.

### Einrichtung

Bevor wir uns mit den einzelnen Tasten befassen, sind einige Initialisierungsaufrufe erforderlich. Variablen, die auf HTML-Elemente zeigen, sind erforderlich:

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

Mit diesen Handles können nun Ereignisse an jede der benutzerdefinierten Steuerungstasten angehängt werden, um sie interaktiv zu machen. Die meisten dieser Tasten erfordern, dass ein `click`-Ereignislistener hinzugefügt wird, und eine Media-API definierte Methode und/oder Attribute für das Video aufgerufen/geprüft werden.

Wie bereits erwähnt, müssen jetzt die Standardsteuerungen des Browsers deaktiviert und die benutzerdefinierten Steuerungen angezeigt werden:

```js live-sample___video-player
// Hide the default controls
video.controls = false;
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Abspielen/Pause

```js live-sample___video-player
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

Wenn ein `click`-Ereignis an der Abspielen/Pause-Taste erkannt wird, überprüft der Handler zunächst, ob das Video derzeit pausiert ist oder beendet wurde (über die `paused`- und `ended`-Attribute der Media-API); falls ja, wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video laufen, also wird es mit der `pause()`-Methode pausiert.

### Stopp

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher um dies zu imitieren, wird das Video pausiert und seine `currentTime` (d.h. die aktuelle Abspielposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt (mehr über das {{ htmlelement("progress") }}-Element später).

### Stumm

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalt-Taste ist eine Umschalttaste, die das `muted`-Attribut der Media-API verwendet, um das Video stumm zu schalten: Dies ist ein Boolean, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es umzuschalten, setzen wir es auf das Inverse seiner selbst.

### Lautstärke

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärkeregeltasten wurden definiert, eine zum Erhöhen der Lautstärke und eine zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die sich damit befasst:

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

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos enthält. Gültige Werte für dieses Attribut sind 0 und 1 und alles dazwischen. Die Funktion prüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert, wobei sichergestellt wird, dass es nicht niedriger als 0 oder höher als 1 wird.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute gesetzt, `value` und `min`, beide erhielten den Wert 0. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal zulässigen Wert des `progress`-Elements und `value` seinen aktuellen Wert angibt. Es muss auch ein maximaler Wert gesetzt werden, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Diese wird aus dem `duration`-Attribut des Videos abgeleitet, welches wiederum Teil der Media-API ist.

Idealerweise steht der korrekte Wert des `duration`-Attributs des Videos zur Verfügung, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann es in einigen mobilen Browsern vorkommen, dass, wenn `loadedmetadata` ausgelöst wird – falls es überhaupt ausgelöst wird – `video.duration` möglicherweise nicht den korrekten Wert hat oder überhaupt keinen Wert. Daher muss noch etwas anderes getan werden. Mehr dazu unten.

Ein weiteres Ereignis, `timeupdate`, wird regelmäßig aktualisiert, während das Video abgespielt wird. Dieses Ereignis eignet sich ideal dazu, den Wert der Fortschrittsanzeige zu aktualisieren, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit das aktuelle Abspiel im Video fortgeschritten ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Wenn das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf das `currentTime` des Videos gesetzt. Dieser Bereich hat eine solide CSS-Hintergrundfarbe, die ihm hilft, dasselbe visuelle Feedback zu geben wie ein {{ htmlelement("progress") }}-Element.

Zurückkommend auf das `video.duration`-Problem oben, wenn das `timeupdate`-Ereignis ausgelöst wird, sollte in den meisten mobilen Browsern das `duration`-Attribut des Videos jetzt den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, falls es derzeit nicht gesetzt ist:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsanzeigen und Pufferrückmeldungen, lesen Sie [Medienpufferung, Suche und Zeitbereich](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspulen

Ein weiteres Merkmal der meisten Standard-Videosteuerungssätze der Browser ist die Möglichkeit, auf die Fortschrittsanzeige des Videos zu klicken, um zu einem anderen Punkt im Video "vorzuspulen". Dies kann ebenfalls erreicht werden, indem ein `click`-Ereignislistener dem `progress`-Element hinzugefügt wird:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die geklickte Position, um (ungefähr) zu ermitteln, wo im `progress`-Element der Benutzer geklickt hat, und das Video an diese Position zu verschieben, indem das `currentTime`-Attribut gesetzt wird. Es vermeidet das Setzen des `currentTime`, wenn die `duration` des Videos {{jsxref("Global_Objects/NaN", "NaN")}} oder {{jsxref("Global_Objects/Infinity", "Infinity")}} ist, was passiert, wenn das Video noch nicht geladen ist.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf einen Button, wenn sich das Video im Vollbildmodus befindet: abbrechen, andernfalls den Vollbildmodus betreten.

Der Vollbild-Button ist verborgen, wenn die Fullscreen-API nicht aktiviert ist:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Der Vollbild-Button muss tatsächlich etwas tun. Wie die anderen Tasten, ist ein `click`-Ereignishandler angehängt, der den Vollbildmodus umschaltet:

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

Wenn sich der Browser derzeit im Vollbildmodus befindet, muss er verlassen werden und umgekehrt. Interessanterweise muss `document` zum Beenden/Abbrechen des Vollbildmodus verwendet werden, während jedes HTML-Element den Vollbildmodus anfordern kann; hier wird der `videoContainer` verwendet, da er auch die benutzerdefinierten Steuerungen enthält, die ebenfalls mit dem Video im Vollbildmodus erscheinen sollten.

## Ergebnis

Der CSS-Teil ist für dieses Tutorial ausgeblendet, aber Sie können auf "Play" klicken, um den vollständigen Quellcode zu sehen. Im nächsten Teil, [Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), werden wir einige interessante CSS-Techniken erkunden, die hier verwendet werden, und auch neues CSS hinzufügen, um den Player ansprechender zu gestalten.

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
- [Von den HTML-Audio- und Video-Elementen unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
