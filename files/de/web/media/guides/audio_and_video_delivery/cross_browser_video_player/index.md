---
title: Ein plattformübergreifender Videoplayer erstellen
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

Dieser Artikel beschreibt einen einfachen HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Neben der Vollbildfunktion verfügt der Player über benutzerdefinierte Steuerelemente anstelle der standardmäßigen Browser-Steuerelemente. Die Steuerelemente des Players werden nicht über die grundlegenden Anforderungen hinaus gestaltet, die erforderlich sind, um sie funktionsfähig zu machen; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

Unser Beispiel-Videoplayer zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

## HTML-Markup

Lassen Sie uns zunächst einen Blick auf das HTML werfen, das den Player ausmacht.

### Das Video

Unser gesamter Player ist in einem {{htmlelement("figure")}}-Element enthalten.

```html-nolint live-sample___video-player
<figure id="videoContainer">
```

Zunächst definieren wir das {{htmlelement("video")}}-Element.

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

Obwohl dieser Player ein eigenes benutzerdefiniertes Steuerelementsatz festlegen wird, wird das `controls`-Attribut dennoch dem {{htmlelement("video")}}-Element hinzugefügt, und das Standard-Steuerelementsatz des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise können Benutzer, die JavaScript (aus welchem Grund auch immer) deaktiviert haben, weiterhin auf die nativen Steuerelemente des Browsers zugreifen.

Ein Posterbild wird für das Video definiert und das `preload`-Attribut wird auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen sollte, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Videodatei. Dies stellt dem Player Daten wie Videodauer und Format zur Verfügung.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser verschiedenen Quellenformate bietet die beste Chance, über alle Browser hinweg unterstützt zu werden, die HTML-Video unterstützen. Für weitere Informationen zu Videoformaten und Browser-Kompatibilität siehe [Wählen Sie einen Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem Standard-Steuerelementsatz des Browsers ermöglichen. Der nächste Schritt ist die Definition eines benutzerdefinierten Steuerelementsatzes, ebenfalls in HTML, der zur Steuerung des Videos verwendet wird.

### Die Steuerelemente

Die meisten standardmäßigen Videosteuerungen des Browsers bieten die folgende Funktionalität:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsleiste
- Vorwärtsspringen
- Vollbildmodus

Der benutzerdefinierte Steuerelementsatz wird diese Funktionalitäten ebenfalls unterstützen, mit der zusätzlichen Funktion einer Stopp-Taste.

Auch hier ist das HTML recht einfach und verwendet eine ungeordnete Liste mit `list-style-type:none`, um die Steuerelemente zu umschließen, von denen jedes ein Listenelement mit `float:left` ist. Für die Fortschrittsleiste wird das `progress`-Element verwendet. Diese Liste wird nach dem {{htmlelement("video")}}-Element, aber innerhalb des {{htmlelement("figure")}}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

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

Jede Schaltfläche erhält eine `id`, sodass sie einfach mit JavaScript angesprochen werden kann.

Die Steuerelemente sind anfänglich mit einem CSS-`display:none` versteckt und werden mit JavaScript aktiviert. Auch hier, wenn ein Benutzer JavaScript deaktiviert hat, erscheint der benutzerdefinierte Steuerelementsatz nicht und er kann das standardmäßige Steuerelementsatz des Browsers uneingeschränkt verwenden.

Natürlich ist dieser benutzerdefinierte Steuerelementsatz derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

Abschließend schließen wir das `<figure>`-Element mit einem {{htmlelement("figcaption")}}, das die Urheberrechtsinformationen enthält.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Verwendung der Media-API

HTML kommt mit einer JavaScript-[Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern Zugriff auf und Kontrolle über HTML-Medien ermöglicht. Diese API wird verwendet, um den oben definierten benutzerdefinierten Steuerelementsatz tatsächlich funktionsfähig zu machen. Zusätzlich wird die Vollbild-Schaltfläche die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit der Webbrowser steuert, Anwendungen im Vollbildmodus anzuzeigen.

### Einrichtung

Bevor die einzelnen Schaltflächen behandelt werden, sind einige Initialisierungsaufrufe erforderlich. Variablen, die auf HTML-Elemente verweisen, sind erforderlich:

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

Mit diesen Handles können nun Ereignisse an jede der benutzerdefinierten Steuerschaltflächen angehängt werden, um sie interaktiv zu machen. Die meisten dieser Schaltflächen benötigen einen `click`-Ereignislistener, der hinzugefügt werden muss, und eine in der Media-API definierte Methode und/oder Attribut, die/das auf das Video aufgerufen/geprüft wird.

Wie bereits erwähnt, müssen die Standard-Steuerelemente des Browsers jetzt deaktiviert werden und die benutzerdefinierten Steuerelemente angezeigt werden:

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

Wenn ein `click`-Ereignis auf der Abspiel-/Pause-Taste erkannt wird, prüft der Handler zunächst, ob das Video momentan pausiert ist oder beendet wurde (über die `paused`- und `ended`-Attribute der Media-API); falls ja, verwendet er die `play()`-Methode, um das Video abzuspielen. Ansonsten muss das Video gerade abgespielt werden, sodass es mit der `pause()`-Methode pausiert wird.

### Stopp

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher wird das Video pausiert, und seine `currentTime` (d.h. die aktuelle Abspielposition des Videos) und die Position des {{htmlelement("progress")}}-Elements werden auf 0 gesetzt, um dies zu imitieren (mehr zum {{htmlelement("progress")}}-Element später).

### Stummschalten

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalttaste ist eine Umschalttaste, die das `muted`-Attribut der Media-API verwendet, um das Video stummzuschalten: Dies ist ein Boolean, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es umzuschalten, setzen wir es auf das Inverse von sich selbst.

### Lautstärke

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärkeregler wurden definiert, einer zum Erhöhen der Lautstärke und einer zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die sich damit befasst:

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

Diese Funktion verwendet das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos enthält. Gültige Werte für dieses Attribut sind 0 und 1 und alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert, sodass es nicht niedriger als 0 oder höher als 1 wird.

### Fortschritt

Wenn das {{htmlelement("progress")}}-Element oben im HTML definiert wurde, wurde nur das `value`-Attribut auf 0 gesetzt. Dieses Attribut gibt den aktuellen Wert des Fortschrittelements an. Es muss auch einen maximalen Wert haben, damit es seinen Bereich korrekt anzeigt, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Dies wird aus dem `duration`-Attribut des Videos erhalten, das wiederum Teil der Media-API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, was passiert, wenn die Metadaten des Videos geladen wurden:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider hat in einigen mobilen Browsern das `video.duration`-Attribut möglicherweise nicht den korrekten Wert oder irgendeinen Wert überhaupt, wenn `loadedmetadata` ausgelöst wird — falls es überhaupt _ausgelöst_ wird. Daher muss etwas anderes getan werden. Mehr dazu unten.

Ein weiteres Ereignis, `timeupdate`, wird regelmäßig ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich ideal, um den Wert der Fortschrittsleiste zu aktualisieren, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das anzeigt, wie weit durch das Video die aktuelle Wiedergabe ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Da das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf das `currentTime`-Attribut des Videos gesetzt. Dieser Bereich hat eine solide CSS-Hintergrundfarbe, was ihm hilft, das gleiche visuelle Feedback wie ein {{htmlelement("progress")}}-Element zu bieten.

Zurück zu dem oben erwähnten `video.duration`-Problem: Wenn das `timeupdate`-Ereignis ausgelöst wird, sollte das `duration`-Attribut des Videos in den meisten mobilen Browsern nun den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, falls es derzeit nicht gesetzt ist:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsleisten und Pufferfeedback lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorwärtsspringen

Ein weiteres Merkmal der meisten standardmäßigen Videosteuerungssets im Browser ist die Fähigkeit, auf die Fortschrittsleiste des Videos zu klicken, um "vorwärts zu springen" zu einem anderen Punkt im Video. Dies kann auch erreicht werden, indem ein `click`-Ereignishandler zum `progress`-Element hinzugefügt wird:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die geklickte Position, um (ungefähr) zu berechnen, wo im `progress`-Element der Benutzer geklickt hat, und bewegt das Video an diese Position, indem es sein `currentTime`-Attribut setzt. Es wird vermieden, das `currentTime` zu setzen, wenn die Dauer des Videos {{jsxref("Global_Objects/NaN", "NaN")}} oder {{jsxref("Global_Objects/Infinity", "Infinity")}} ist, was passiert, wenn das Video noch nicht geladen ist.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf eine Schaltfläche, wenn sich das Video im Vollbildmodus befindet: abbrechen, andernfalls in den Vollbildmodus wechseln.

Die Vollbild-Schaltfläche wird ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Die Vollbild-Schaltfläche muss tatsächlich etwas tun. Wie bei den anderen Schaltflächen wird ein `click`-Ereignishandler hinzugefügt, der den Vollbildmodus umschaltet:

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

Wenn sich der Browser derzeit im Vollbildmodus befindet, muss er verlassen werden und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu beenden/abzubrechen, während jedes HTML-Element den Vollbildmodus anfordern kann, hier wird `videoContainer` verwendet, da er auch die benutzerdefinierten Steuerungen enthält, die ebenfalls mit dem Video im Vollbildmodus erscheinen sollen.

## Ergebnis

Der CSS-Teil ist für dieses Tutorial versteckt, aber Sie können auf "Play" klicken, um den vollständigen Quellcode zu sehen. Im nächsten Teil, [Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), werden wir einige interessante hier verwendete CSS-Techniken erkunden und auch neue CSS hinzufügen, um den Player ansprechender zu gestalten.

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

- {{htmlelement("video")}} für Referenzmaterial
- [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Von den HTML-Audio- und Videoelementen unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
