---
title: Erstellen eines plattformübergreifenden Videoplayers
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

Dieser Artikel beschreibt einen einfachen HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Neben der Vollbildfunktion verfügt der Player über benutzerdefinierte Steuerelemente, anstatt nur die Standardeinstellungen des Browsers zu verwenden. Die Steuerelemente des Players werden nur grundlegend gestylt, um sie funktionsfähig zu machen; die vollständige Gestaltung des Players wird in einem späteren Artikel behandelt.

Unser Beispiel-Videoplayer zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

## HTML-Markup

Beginnen wir mit einem Blick auf das HTML, das den Player ausmacht.

### Das Video

Unser gesamter Player ist in einem {{ htmlelement("figure") }}-Element enthalten.

```html-nolint live-sample___video-player
<figure id="videoContainer">
```

Zuerst definieren wir das {{ htmlelement("video") }}-Element.

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

Auch wenn dieser Player eine eigene benutzerdefinierte Steuerungssatz definieren wird, wird das `controls`-Attribut dennoch dem {{ htmlelement("video") }}-Element hinzugefügt, und die Standardsteuerelemente des Players werden später mit JavaScript deaktiviert. Auf diese Weise haben Benutzer, die JavaScript aus welchem Grund auch immer deaktiviert haben, dennoch Zugriff auf die nativen Steuerelemente des Browsers.

Ein Posterbild wird für das Video definiert, und das `preload`-Attribut wird auf `metadata` gesetzt, was den Browser anweist, zunächst nur zu versuchen, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Videodatei. Dies bietet dem Player Daten wie Videodauer und Format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser unterschiedlichen Quellformate bietet die beste Chance, dass der Player in allen Browsern, die HTML-Video unterstützen, funktioniert. Für weitere Informationen zu Videoformaten und Browser-Kompatibilität siehe [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code ermöglicht die Wiedergabe des Videos in den meisten Browsern mit dem Standardsteuerungssatz des Browsers. Der nächste Schritt besteht darin, einen benutzerdefinierten Steuerungssatz (ebenfalls in HTML) zu definieren, der zur Steuerung des Videos verwendet wird.

### Die Steuerungssatz

Die meisten Standardvideosteuerungen des Browsers haben folgende Funktionen:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsbalken
- Vorspulen
- In den Vollbildmodus wechseln

Der benutzerdefinierte Steuerungssatz wird diese Funktionalitäten ebenfalls unterstützen, mit der Ergänzung eines Stop-Schalters.

Erneut ist das HTML ziemlich einfach gehalten: Eine ungeordnete Liste mit `list-style-type:none` wird verwendet, um die Steuerelemente zu umschließen, von denen jedes ein Listenelement mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

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

Jeder Schalter erhält eine `id`, damit er problemlos mit JavaScript angesprochen werden kann.

Die Steuerelemente sind zunächst mit einem CSS `display:none` verborgen und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, erscheint der benutzerdefinierte Steuerungssatz nicht und sie können die Standardsteuerung des Browsers uneingeschränkt verwenden.

Natürlich ist dieser benutzerdefinierte Steuerungssatz derzeit nutzlos und tut nichts: Lassen Sie uns dies mit JavaScript verbessern.

Schließlich schließen wir das `<figure>`-Element mit einem {{ htmlelement("figcaption") }} ab, das die Urheberrechtsinformationen enthält.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="https://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Verwendung der Media API

HTML wird mit einer JavaScript [Media API](/de/docs/Web/API/HTMLMediaElement) geliefert, die Entwicklern Zugriff auf HTML-Medien und deren Steuerung ermöglicht. Diese API wird verwendet, um den oben definierten benutzerdefinierten Steuerungssatz tatsächlich funktionsfähig zu machen. Darüber hinaus wird der Vollbild-Schalter die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbildmodus Ihres Computers anzuzeigen.

### Einrichtung

Bevor die einzelnen Schalter behandelt werden, sind mehrere Initialisierungsaufrufe erforderlich. Variablen, die auf HTML-Elemente zeigen, sind notwendig:

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

Mit diesen Handgriffen können nun Ereignisse an jedes der benutzerdefinierten Steuerungsknöpfe angehängt werden, um sie interaktiv zu machen. Die meisten dieser Schalter erfordern einen `click`-Ereignis-Listener, der hinzugefügt wird, und eine in der Media API definierte Methode und/oder Attribute, die auf das Video aufgerufen/geprüft werden.

Wie bereits erwähnt, müssen die Standardsteuerungen des Browsers nun deaktiviert und die benutzerdefinierten Steuerelemente angezeigt werden:

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

Wenn ein `click`-Ereignis auf dem Abspielen/Pause-Schalter erkannt wird, prüft der Handler zunächst, ob das Video derzeit pausiert oder beendet ist (über die `paused`- und `ended`-Attribute der Media API); falls ja, verwendet es die `play()`-Methode, um das Video abzuspielen. Andernfalls muss das Video bereits abgespielt werden, sodass es mit der `pause()`-Methode pausiert wird.

### Stop

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media API hat keine `stop`-Methode, um dies nachzuahmen wird das Video pausiert und seine `currentTime` (d.h. die aktuelle Abspielposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt (mehr dazu später).

### Stummschalten

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Der Stumm-Schalter ist ein Kippschalter, der das `muted`-Attribut der Media API verwendet, um das Video stummzuschalten: Dies ist ein Boolean, der angibt, ob das Video stummgeschaltet ist oder nicht. Um zu einem Kippschalter zu zeichnen, setzen wir ihn auf sein Gegenteil.

### Lautstärke

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärke-Schalter sind definiert, einer zum Erhöhen der Lautstärke und ein anderer zum Verringern. Eine benutzerdefinierte Funktion, `alterVolume(direction)` wurde erstellt, um dies zu handhaben:

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

Diese Funktion verwendet das `volume`-Attribut der Media API, das den aktuellen Lautstärkewert des Videos hält. Gültige Werte für dieses Attribut sind 0 und 1 und jeder Wert dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert und sicherstellt, dass sie nicht niedriger als 0 oder höher als 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, war nur das `value`-Attribut auf 0 gesetzt. Dieses Attribut gibt den aktuellen Wert des Fortschrittselements an. Es muss auch ein Höchstwert festgelegt werden, damit es seinen Bereich korrekt anzeigen kann, und das kann mit dem `max`-Attribut getan werden, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Dies wird vom `duration`-Attribut des Videos erhalten, das ebenfalls Teil der Media API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann es in einigen mobilen Browsern sein, dass `video.duration` nicht den richtigen Wert oder überhaupt keinen Wert hat, wenn `loadedmetadata` ausgelöst wird — falls es überhaupt ausgelöst _wird_. Daher muss etwas anderes getan werden. Mehr dazu unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich hervorragend zum Aktualisieren des Werts des Fortschrittsbalkens, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit das Video zum aktuellen Zeitpunkt abgespielt ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Während das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf das `currentTime` des Videos gesetzt. Dieser Span hat eine solide CSS-Hintergrundfarbe, die hilft, ihm das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu geben.

Zurück zum oben erwähnten Problem mit `video.duration`: Wenn das `timeupdate`-Ereignis ausgelöst wird, sollte `duration` in den meisten mobilen Browsern jetzt den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, wenn es momentan nicht gesetzt ist:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für mehr Informationen und Ideen zu Fortschrittsbalken und Pufferrückmeldungen lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspulen

Ein weiteres Merkmal der meisten Standard-Videosteuerungen des Browsers ist die Möglichkeit, auf den Fortschrittsbalken des Videos zu klicken, um "vorzuspringen" zu einem anderen Punkt im Video. Dies kann auch durch Hinzufügen eines `click`-Ereignis-Listeners zum `progress`-Element erreicht werden:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code nutzt die geklickte Position, um (ungefähr) herauszufinden, wo im `progress`-Element der Benutzer geklickt hat, und bewegt das Video zu dieser Position, indem es sein `currentTime`-Attribut setzt. Es vermeidet das Setzen des `currentTime`, wenn die Videodauer {{jsxref("Global_Objects/NaN", "NaN")}} oder {{jsxref("Global_Objects/Infinity", "Infinity")}} ist, was passiert, wenn das Video nicht geladen ist.

### Vollbild

Die Fullscreen API sollte einfach zu verwenden sein: Der Benutzer klickt auf einen Schalter, wenn das Video im Vollbildmodus ist: abbrechen, sonst in den Vollbildmodus wechseln.

Der Vollbild-Schalter ist verborgen, wenn die Fullscreen API nicht aktiviert ist:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Der Vollbild-Schalter muss tatsächlich etwas tun. Wie bei den anderen Schaltern wird ein `click`-Ereignis-Handler angehängt, der den Vollbildmodus umschaltet:

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

Wenn sich der Browser aktuell im Vollbildmodus befindet, muss dieser beendet werden und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu verlassen/abzubrechen, während jedes HTML-Element den Vollbildmodus anfordern kann. Hier wird das `videoContainer` verwendet, da es auch die benutzerdefinierten Steuerelemente enthält, die ebenfalls mit dem Video im Vollbildmodus angezeigt werden sollen.

## Ergebnis

Der CSS-Teil ist in diesem Tutorial verborgen, aber Sie können auf "Play" klicken, um den vollständigen Quellcode zu sehen. Im nächsten Teil, [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), werden wir einige interessante hier verwendete CSS-Techniken erkunden und auch neues CSS hinzufügen, um den Player ansprechender zu gestalten.

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
> Das Beispielvideo könnte laut sein!

{{EmbedLiveSample("video-player", "", 400, "", "", "", "fullscreen")}}

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Von den HTML-Audio- und Videomediaelementen unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
