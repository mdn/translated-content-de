---
title: Erstellen eines browserübergreifenden Videoplayers
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: daad50a992d56b23573fdd50517c75df176747cf
---

Dieser Artikel beschreibt einen grundlegenden HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Neben der Vollbildfunktion verfügt der Player über benutzerdefinierte Steuerelemente, anstatt nur die Standard-Browsersteuerelemente zu verwenden. Die Player-Steuerelemente selbst werden über die wesentlichen Funktionen hinaus nicht gestylt; das vollständige Styling des Players wird in einem späteren Artikel behandelt.

Unser Beispiel-Videoplayer zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

## HTML-Markup

Um zu beginnen, schauen wir uns das HTML an, aus dem der Player besteht.

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

Auch wenn dieser Player seine eigenen benutzerdefinierten Steuerelemente definiert, wird das `controls`-Attribut dennoch zum {{ htmlelement("video") }}-Element hinzugefügt, und die Standard-Steuerelemente des Players werden später mit JavaScript deaktiviert. Auf diese Weise haben Benutzer, die JavaScript aus irgendeinem Grund deaktiviert haben, weiterhin Zugriff auf die nativen Steuerelemente des Browsers.

Ein Posterbild wird für das Video definiert, und das `preload`-Attribut wird auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen sollte, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Datei. Dies liefert dem Player Daten wie Videodauer und -format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser verschiedenen Quellenformate bietet die beste Chance, in allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Für weitere Informationen zu Videoformaten und Browser-Kompatibilität siehe [Choosing a video codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code ermöglicht die Wiedergabe des Videos in den meisten Browsern mit dem Standard-Steuerelementset des Browsers. Der nächste Schritt ist die Definition eines benutzerdefinierten Steuerelementsatzes, ebenfalls in HTML, der zur Steuerung des Videos verwendet wird.

### Der Steuerelementsatz

Die meisten Standard-Videosteuerungen der Browser haben die folgende Funktionalität:

- Wiedergabe/Pause
- Stummschaltung
- Lautstärkeregelung
- Fortschrittsanzeige
- Vorspringen
- Vollbildmodus

Der benutzerdefinierte Steuerelementsatz wird auch diese Funktionalität unterstützen, mit der Hinzufügung einer Stopp-Taste.

Auch hier ist das HTML ganz einfach, indem eine ungeordnete Liste mit `list-style-type:none` verwendet wird, um die Steuerelemente einzuschließen, wobei jedes ein Listenelement ist, das mit `float:left` versehen ist. Für die Fortschrittsanzeige wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist für die Vollbildfunktionalität wichtig, die später erklärt wird).

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

Jeder Button erhält eine `id`, damit er leicht mit JavaScript zugänglich ist.

Die Steuerelemente sind zunächst mit einem CSS `display:none` verborgen und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, erscheinen die benutzerdefinierten Steuerelemente nicht, und sie können die Standard-Steuerelemente des Browsers ungehindert nutzen.

Natürlich ist dieser benutzerdefinierte Steuerelementsatz derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

Zum Schluss schließen wir das `<figure>`-Element mit einem {{htmlelement("figcaption")}} ab, das die Urheberrechtsinformationen enthält.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Verwendung der Media-API

HTML wird mit einer JavaScript-[Media-API](/de/docs/Web/API/HTMLMediaElement) geliefert, die Entwicklern Zugriff auf HTML-Medien und deren Steuerung ermöglicht. Diese API wird verwendet, um den oben definierten benutzerdefinierten Steuerelementsatz tatsächlich funktionsfähig zu machen. Zusätzlich wird die Vollbildtaste die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbildmodus Ihres Computers anzuzeigen.

### Einrichtung

Bevor die einzelnen Tasten behandelt werden, sind eine Reihe von Initialisierungsaufrufen erforderlich. Variablen, die auf HTML-Elemente verweisen, sind erforderlich:

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

Mit diesen Handles können nun Ereignisse an jede der benutzerdefinierten Steuerelement-Tasten angehängt werden, um sie interaktiv zu machen. Die meisten dieser Tasten erfordern einen `click`-Ereignislistener, der hinzugefügt wird, und eine durch die Media-API definierte Methode und/oder Attribute, die für das Video aufgerufen/überprüft werden.

Wie bereits erwähnt, müssen die Standard-Steuerelemente des Browsers nun deaktiviert werden, und die benutzerdefinierten Steuerelemente müssen angezeigt werden:

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

Wenn ein `click`-Ereignis auf der Wiedergabe/Pause-Taste erkannt wird, prüft der Handler zuerst, ob das Video derzeit pausiert oder beendet ist (über die `paused`- und `ended`-Attribute der Media-API); falls ja, wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video abgespielt werden, und es wird mit der `pause()`-Methode pausiert.

### Stop

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher wird, um dies nachzuahmen, das Video angehalten, und seine `currentTime` (d.h. die aktuelle Wiedergabeposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements wird auf 0 gesetzt (mehr dazu später).

### Stummschalten

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalttaste ist eine Umschalttaste, die das `muted`-Attribut der Media-API verwendet, um das Video stummzuschalten: Dies ist ein boolescher Wert, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es zu kippen, setzen wir es auf das Gegenteil von sich selbst.

### Lautstärke

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Es wurden zwei Lautstärkeregler definiert, einer zum Erhöhen und ein anderer zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die sich damit befasst:

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

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos enthält. Gültige Werte für dieses Attribut sind 0 und 1 und alles dazwischen. Die Funktion prüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll und handelt entsprechend. Die Funktion ist so definiert, dass sie die Lautstärke des Videos in Schritten von 0,1 erhöht oder verringert und sicherstellt, dass sie nicht niedriger als 0 oder höher als 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute gesetzt: `value` und `min`, beide erhielten einen Wert von 0. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal zulässigen Wert des `progress`-Elements angibt und `value` dessen aktuellen Wert. Es muss auch einen Maximalwert haben, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Wiedergabezeit des Videos eingestellt werden muss. Dies wird aus dem `duration`-Attribut des Videos abgeleitet, das wiederum Teil der Media-API ist.

Idealerweise steht der korrekte Wert des `duration`-Attributs des Videos zur Verfügung, wenn das `loadedmetadata`-Ereignis ausgelöst wird, was eintritt, wenn die Metadaten des Videos geladen wurden:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann in einigen mobilen Browsern der Wert `video.duration` beim Auslösen von `loadedmetadata` entweder der richtige sein oder keinen Wert haben. Daher muss etwas anderes getan werden. Mehr dazu weiter unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich ideal zur Aktualisierung des Werts der Fortschrittsleiste, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit die aktuelle Wiedergabe des Videos fortgeschritten ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Wenn das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf das `currentTime`-Attribut des Videos gesetzt. Dieser Bereich hat eine solide CSS-Hintergrundfarbe, die ihm hilft, dieselbe visuelle Rückmeldung zu geben wie ein {{ htmlelement("progress") }}-Element.

Zurück zum oben erwähnten `video.duration`-Problem: Wenn das `timeupdate`-Ereignis ausgelöst wird, sollte das `duration`-Attribut des Videos jetzt in den meisten mobilen Browsern den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements festzulegen, wenn es derzeit nicht gesetzt ist:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für mehr Informationen und Ideen zu Fortschrittsbalken und Pufferrückmeldungen lesen Sie [Media Buffering, Seeking, and Time Ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspringen

Ein weiteres Feature der meisten Standard-Videosteuerungssätze von Browsern ist die Fähigkeit, auf die Fortschrittsleiste des Videos zu klicken, um zu einem anderen Punkt im Video zu springen. Dies kann auch durch Hinzufügen eines `click`-Ereignislisteners zum `progress`-Element erreicht werden:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die angeklickte Position, um (ungefähr) zu berechnen, wo im `progress`-Element der Benutzer geklickt hat, und um das Video durch Setzen seines `currentTime`-Attributs an diese Position zu verschieben. Es wird vermieden, das `currentTime` zu setzen, wenn die Dauer des Videos {{jsxref("Global_Objects/NaN", "NaN")}} oder {{jsxref("Global_Objects/Infinity", "Infinity")}} ist, was passiert, wenn das Video noch nicht geladen ist.

### Vollbild

Die Fullscreen-API sollte einfach zu bedienen sein: der Benutzer klickt auf einen Button; wenn das Video im Vollbildmodus ist, wird dieser beendet, andernfalls wird der Vollbildmodus aktiviert.

Der Vollbild-Button wird ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Der Vollbild-Button muss tatsächlich etwas bewirken. Wie bei den anderen Schaltflächen wird ein `click`-Ereignishandler hinzugefügt, der den Vollbildmodus umschaltet:

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

Wenn der Browser derzeit im Vollbildmodus ist, muss dieser beendet werden und umgekehrt. Interessanterweise muss `document` für das Beenden/Abbrechen des Vollbildmodus verwendet werden, während jedes HTML-Element den Vollbildmodus anfordern kann; hier wird `videoContainer` verwendet, da es auch die benutzerdefinierten Steuerungen enthält, die zusammen mit dem Video im Vollbildmodus angezeigt werden sollten.

## Ergebnis

Der CSS-Teil ist für dieses Tutorial verborgen, aber Sie können auf "Play" klicken, um den vollständigen Quellcode zu sehen. Im nächsten Teil, [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), werden wir einige interessante hier verwendete CSS-Techniken untersuchen und auch neues CSS hinzufügen, um den Player ansprechender zu gestalten.

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
  border: 1px solid #aaa;
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
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Medienformate, die von den HTML-Audio- und -Videoelementen unterstützt werden](/de/docs/Web/Media/Guides/Formats)
