---
title: Erstellen eines plattformübergreifenden Videoplayers
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Dieser Artikel beschreibt einen einfachen HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Zusätzlich zur Funktion im Vollbildmodus verfügt der Player über benutzerdefinierte Bedienelemente anstelle der Standardsteuerung des Browsers. Die Bedienelemente des Players werden nicht über die grundlegenden Anforderungen hinaus gestylt, die erforderlich sind, um sie zum Laufen zu bringen; das vollständige Styling des Players wird in einem zukünftigen Artikel behandelt.

Unser Beispielvideoplayer zeigt einen Ausschnitt aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

## HTML-Markup

Beginnen wir mit einem Blick auf das HTML, das den Player bildet.

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

Obwohl dieser Player seine eigene benutzerdefinierte Steuerungssatz definieren wird, wird das `controls`-Attribut immer noch dem {{ htmlelement("video") }}-Element hinzugefügt und der Standardsteuerungssatz des Players später mit JavaScript ausgeschaltet. Auf diese Weise können Benutzer, die JavaScript ausgeschaltet haben (aus welchem Grund auch immer), dennoch auf die nativen Steuerungen des Browsers zugreifen.

Ein Posterbild ist für das Video definiert und das `preload`-Attribut ist auf `metadata` gesetzt, was den Browser informiert, dass er zunächst nur versuchen soll, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Datei zu laden. Dies liefert dem Player Daten wie Videodauer und -format.

Für den Player werden drei verschiedene Videoquellen bereitgestellt: MP4, WebM, und Ogg. Die Verwendung dieser verschiedenen Quellenformate bietet die beste Chance, in allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Weitere Informationen zu Videoformaten und Browser-Kompatibilität finden Sie unter [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern ermöglichen, indem das Standardsteuerungssatz des Browsers verwendet wird. Der nächste Schritt besteht darin, einen benutzerdefinierten Steuerungssatz zu definieren, ebenfalls in HTML, der zur Steuerung des Videos verwendet wird.

### Der Steuerungssatz

Die meisten Standardsteuerungssätze von Browsern für Videos haben die folgende Funktionalität:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsbalken
- Vorwärts springen
- Vollbild gehen

Der benutzerdefinierte Steuerungssatz wird diese Funktionalität ebenfalls unterstützen, mit der Hinzufügung einer Stopp-Taste.

Erneut ist das HTML ziemlich einfach und verwendet eine ungeordnete Liste mit `list-style-type:none`, um die Steuerungen einzuschließen, von denen jede ein Listenelement mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element eingefügt, aber innerhalb des {{ htmlelement("figure") }}-Elements (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

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

Jede Taste erhält eine `id`, sodass sie leicht mit JavaScript angesprochen werden kann.

Die Schaltflächen sind anfangs mit einem CSS `display:none` versteckt und werden mit JavaScript aktiviert. Wiederum wenn ein Benutzer JavaScript deaktiviert hat, erscheint der benutzerdefinierte Steuerungssatz nicht und sie können den Standardsteuerungssatz des Browsers ungehindert verwenden.

Natürlich ist dieser benutzerdefinierte Steuerungssatz derzeit nutzlos und bewirkt nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

Schließlich schließen wir das `<figure>`-Element mit einem {{ htmlelement("figcaption") }}, das die Urheberrechtsinformationen enthält, ab.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="https://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Verwendung der Media-API

HTML kommt mit einer JavaScript-[Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern den Zugriff und die Steuerung von HTML-Medien ermöglicht. Diese API wird verwendet, um den oben definierten benutzerdefinierten Steuerungssatz wirklich funktionsfähig zu machen. Zusätzlich wird der Vollbildknopf die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbildmodus auf Ihrem Computer anzuzeigen.

### Einrichtung

Bevor auf die einzelnen Knöpfe eingegangen wird, sind einige Initialisierungsaufrufe erforderlich. Variablen, die auf HTML-Elemente verweisen, werden benötigt:

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

Unter Verwendung dieser Verweise können jetzt Ereignisse an jeden der benutzerdefinierten Steuerungsknöpfe angehängt werden, um sie interaktiv zu machen. Die meisten dieser Knöpfe erfordern, dass ein `click`-Ereignislistener hinzugefügt wird, und eine Media-API definierte Methode und/oder Attribute auf dem Video aufgerufen/geprüft werden.

Wie bereits erwähnt, müssen die Standardsteuerungen des Browsers jetzt deaktiviert und die benutzerdefinierten Steuerelemente angezeigt werden:

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

Wenn ein `click`-Ereignis auf der Abspielen/Pause-Taste erkannt wird, überprüft der Handler zunächst, ob das Video derzeit pausiert ist oder beendet wurde (über die Media-API-Attribute `paused` und `ended`); falls ja, verwendet es die `play()`-Methode, um das Video abzuspielen. Andernfalls muss das Video derzeit abgespielt werden, also wird es mit der `pause()`-Methode pausiert.

### Stoppen

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher wird das Video pausiert, um dies nachzuahmen, und seine `currentTime` (d.h. die aktuelle Abspielposition des Videos) sowie die Position des {{ htmlelement("progress") }}-Elements wird auf 0 gesetzt (mehr zum {{ htmlelement("progress") }}-Element später).

### Stummschalten

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalttaste ist eine Umschalttaste, die das `muted`-Attribut der Media-API verwendet, um das Video stummzuschalten: Dies ist ein Boolean, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es zu toggeln, setzen wir es auf das Inverse von sich selbst.

### Lautstärke

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärkereglertasten wurden definiert, eine zum Erhöhen der Lautstärke und eine zum Verringern. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, um dies zu handhaben:

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

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos hält. Gültige Werte für dieses Attribut sind 0 und 1 und alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll und handelt entsprechend. Die Funktion ist definiert, um das `volume`-Attribut des Videos in Schritten von 0,1 zu erhöhen oder zu verringern und sicherzustellen, dass es nicht niedriger als 0 oder höher als 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurde nur das `value`-Attribut auf 0 gesetzt. Dieses Attribut gibt den aktuellen Wert des Fortschrittsbalkens an. Außerdem muss ein Maximalwert festgelegt werden, damit der Bereich korrekt angezeigt werden kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos gesetzt wird. Dies wird durch das `duration`-Attribut des Videos erhalten, das wiederum Teil der Media-API ist.

Idealerweise ist der richtige Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Unglücklicherweise kann in einigen mobilen Browsern, wenn `loadedmetadata` ausgelöst wird — wenn es überhaupt _ausgelöst_ wird — `video.duration` möglicherweise nicht den richtigen Wert oder überhaupt einen Wert haben. Also muss etwas anderes getan werden. Mehr dazu unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis ist ideal, um den Wert des Fortschrittsbalkens zu aktualisieren, indem er auf den aktuellen Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit das aktuelle Abspiel im Video fortgeschritten ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Sobald das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf das `currentTime`-Attribut des Videos gesetzt. Dieser Bereich hat eine feste CSS-Hintergrundfarbe, die ihm hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu geben.

Zurück zum oben erwähnten `video.duration`-Problem, sollten in den meisten mobilen Browsern, wenn das `timeupdate`-Ereignis ausgelöst wird, nun die korrekten Werte im `duration`-Attribut des Videos vorhanden sein. Davon kann Gebrauch gemacht werden, um das `max`-Attribut des `progress`-Elements festzulegen, falls es derzeit nicht gesetzt ist:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsbalken und Buffering-Feedback lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorwärtsspringen

Eine weitere Funktion der meisten Standardsteuerungssätze von Browservideos ist die Möglichkeit, auf den Fortschrittsbalken zu klicken, um im Video "vorwärts zu springen". Dies kann auch erreicht werden, indem ein `click`-Ereignislistener zum `progress`-Element hinzugefügt wird:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die angeklickte Position, um (ungefähr) zu berechnen, wo der Benutzer im `progress`-Element geklickt hat, und das Video an diese Position zu verschieben, indem sein `currentTime`-Attribut gesetzt wird. Es vermeidet das Setzen von `currentTime`, wenn die Videodauer {{jsxref("Global_Objects/NaN", "NaN")}} oder {{jsxref("Global_Objects/Infinity", "Infinity")}} ist, was passiert, wenn das Video noch nicht geladen ist.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf eine Schaltfläche, wenn das Video im Vollbildmodus ist: beenden Sie es, andernfalls starten Sie den Vollbildmodus.

Die Vollbildtaste wird versteckt, wenn die Fullscreen-API nicht aktiviert ist:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Die Vollbildtaste muss tatsächlich etwas tun. Wie die anderen Schaltflächen, wird ein `click`-Ereignishandler angebracht, der den Vollbildmodus umschaltet:

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

Wenn der Browser derzeit im Vollbildmodus ist, dann muss er beendet werden und umgekehrt. Interessanterweise muss `document` für das Beenden/Stornieren des Vollbildmodus verwendet werden, während jedes HTML-Element den Vollbildmodus anfordern kann, hier wird das `videoContainer` verwendet, da es auch die benutzerdefinierten Steuerungen enthält, die ebenfalls mit dem Video im Vollbildmodus erscheinen sollten.

## Ergebnis

Der CSS-Teil ist für dieses Tutorial versteckt, aber Sie können auf "Play" klicken, um den vollständigen Quellcode zu sehen. Im nächsten Teil, [Grundlagen des Videoplayer-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), werden wir einige interessante hier verwendete CSS-Techniken erkunden und auch neue CSS hinzufügen, um den Player schöner aussehen zu lassen.

```css hidden live-sample___video-player
:root {
  color: #333333;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida",
    "Helvetica", "Arial", sans-serif;
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
- [Von den HTML-Audio- und -Videoelementen unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
