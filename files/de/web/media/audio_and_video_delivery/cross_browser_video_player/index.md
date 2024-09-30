---
title: Erstellen eines plattformübergreifenden Video-Players
slug: Web/Media/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel beschreibt einen einfachen HTML-Video-Player, der die Media- und Fullscreen-APIs verwendet. Der Player funktioniert im Vollbildmodus und verfügt über benutzerdefinierte Steuerelemente, anstatt nur die standardmäßigen Browser-Kontrollen zu verwenden. Die Steuerelemente des Players werden nur so weit gestaltet, wie es nötig ist, um sie funktionstüchtig zu machen; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

## Funktionierendes Beispiel

Unser Beispielvideo-Player zeigt einen Ausschnitt aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Video-Steuerelemente.

![ein Bild eines Video-Players mit mehreren Steuertasten wie Wiedergabe, Pause und Stopp. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML-Markup

Zu Beginn werfen wir einen Blick auf das HTML, das den Player bildet.

### Das Video

Zunächst wird das {{ htmlelement("video") }}-Element definiert, das in einem {{ htmlelement("figure") }}-Element enthalten ist, das als Videocontainer dient. Für jemanden, der mit HTML-Markup und dem {{ htmlelement("video") }}-Element vertraut ist, sollte hier nichts Überraschendes dabei sein.

```html
<figure id="videoContainer">
  <video id="video" controls preload="metadata" poster="img/poster.jpg">
    <source
      src="video/tears-of-steel-battle-clip-medium.mp4"
      type="video/mp4" />
    <source
      src="video/tears-of-steel-battle-clip-medium.webm"
      type="video/webm" />
    <source
      src="video/tears-of-steel-battle-clip-medium.ogg"
      type="video/ogg" />
    <!-- Offer download -->
    <a href="video/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
  </video>
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

Obwohl dieser Player sein eigenes benutzerdefiniertes Steuerungssatz definiert, wird das `controls`-Attribut trotzdem zum {{ htmlelement("video") }}-Element hinzugefügt, und das Standardsteuerungssatz des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise können Benutzer, die JavaScript deaktiviert haben (aus welchen Gründen auch immer), weiterhin die nativen Steuerelemente des Browsers verwenden.

Ein Posterbild wird für das Video definiert, und das `preload`-Attribut wird auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen sollte, die Metadaten aus der Videodatei zu laden und nicht die gesamte Videodatei. Dadurch erhält der Player Daten wie Videodauer und Format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser unterschiedlichen Quellenformate bietet die beste Chance, in allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Weitere Informationen zu Videoformaten und Browser-Kompatibilität finden Sie unter [unterstützte Medienformate](/de/docs/Web/Media/Formats#browser_compatibility).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern ermöglichen, indem das Standardsteuerungssatz des Browsers verwendet wird. Der nächste Schritt ist es, ein benutzerdefiniertes Steuerungssatz ebenfalls in HTML zu definieren, das zur Steuerung des Videos verwendet wird.

### Das Steuerungssatz

Die meisten Standard-Videosteuerungselemente von Browsern haben folgende Funktionalitäten:

- Wiedergabe/Pause
- Stummschaltung
- Lautstärkeregelung
- Fortschrittsbalken
- Überspringen
- Vollbildmodus

Das benutzerdefinierte Steuerungssatz unterstützt ebenfalls diese Funktionalitäten, mit der Ergänzung einer Stopptaste.

Auch hier ist das HTML recht einfach und verwendet eine ungeordnete Liste mit `list-style-type:none` für die Steuerelemente, von denen jedes ein Listenelement mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element verwendet. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

```html
<ul id="video-controls" class="controls">
  <li><button id="playpause" type="button">Play/Pause</button></li>
  <li><button id="stop" type="button">Stop</button></li>
  <li class="progress">
    <progress id="progress" value="0" min="0"></progress>
  </li>
  <li><button id="mute" type="button">Mute/Unmute</button></li>
  <li><button id="volinc" type="button">Vol+</button></li>
  <li><button id="voldec" type="button">Vol-</button></li>
  <li><button id="fs" type="button">Fullscreen</button></li>
</ul>
```

Jeder Taste wird eine `id` zugewiesen, damit sie leicht mit JavaScript angesprochen werden kann.

Die Steuerelemente sind zunächst mit einem CSS-`display:none` ausgeblendet und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, wird das benutzerdefinierte Steuerungssatz nicht angezeigt und sie können das standardmäßige Steuerungssatz des Browsers ungehindert verwenden.

Natürlich ist dieses benutzerdefinierte Steuerungssatz derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

## Verwendung der Media API

HTML kommt mit einer JavaScript [Media API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern den Zugriff und die Steuerung von HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerungssatz tatsächlich funktionsfähig zu machen. Zusätzlich wird die Vollbildtaste die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbildmodus anzuzeigen.

### Einrichtung

Bevor man sich mit den einzelnen Tasten befasst, sind einige Initialisierungsaufrufe erforderlich.

Zunächst ist es eine gute Idee zu prüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt, und die benutzerdefinierten Steuerungen nur einzurichten, wenn dies der Fall ist. Dies wird überprüft, indem geprüft wird, ob ein erstelltes {{ htmlelement("video") }}-Element [die `canPlayType()`-Methode](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, die jedes unterstützte HTML {{ htmlelement("video") }}-Element haben sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Sobald bestätigt wurde, dass der Browser tatsächlich HTML-Video unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerelemente einzurichten. Variablen, die auf HTML-Elemente zeigen, sind erforderlich:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen die standardmäßigen Steuerelemente des Browsers jetzt deaktiviert werden, und die benutzerdefinierten Steuerelemente müssen angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Damit ist jetzt eine Variable erforderlich, die auf jede der Tasten zeigt:

```js
const playpause = document.getElementById("playpause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volinc = document.getElementById("volinc");
const voldec = document.getElementById("voldec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handles können nun Ereignisse an jede der benutzerdefinierten Steuertasten angehängt werden, damit sie interaktiv werden. Die meisten dieser Tasten erfordern, dass ein einfacher `click`-Ereignis-Listener hinzugefügt wird, und eine von der Media API definierte Methode und/oder Attribute für das Video aufgerufen/geprüft werden.

### Wiedergabe/Pause

```js
playpause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

Wenn ein `click`-Ereignis auf der Wiedergabe/Pause-Taste erkannt wird, überprüft der Handler zunächst, ob das Video derzeit pausiert oder zu Ende ist (über die `paused`- und `ended`-Attribute der Media API); wenn ja, wird die Wiedergabe des Videos mit der `play()`-Methode gestartet. Ansonsten muss das Video abgespielt werden, sodass es mit der `pause()`-Methode pausiert wird.

### Stoppen

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media API hat keine `stop`-Methode, daher wird das Video pausiert, um dies nachzuahmen, und seine `currentTime` (d.h. die aktuelle Wiedergabeposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements werden auf 0 gesetzt (mehr über das {{ htmlelement("progress") }}-Element später).

### Stummschaltung

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalttaste ist eine einfache Umschalttaste, die das `muted`-Attribut der Media API verwendet, um das Video stummzuschalten: Dies ist ein Boolean, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es zu toggeln, setzen wir es auf das Inverse von sich selbst.

### Lautstärke

```js
volinc.addEventListener("click", (e) => {
  alterVolume("+");
});
voldec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Es wurden zwei Lautstärketasten definiert, eine zum Erhöhen der Lautstärke und eine andere zum Verringern derselben. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, die dies behandelt, wurde erstellt:

```js
function alterVolume(dir) {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === "+" && currentVolume < 1) {
    video.volume += 0.1;
  } else if (dir === "-" && currentVolume > 0) {
    video.volume -= 0.1;
  }
}
```

Diese Funktion verwendet das `volume`-Attribut der Media API, das den aktuellen Lautstärkewert des Videos enthält. Gültige Werte für dieses Attribut sind 0 und 1 und alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert und sicherstellt, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Wenn das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur die Attribute `value` und `min` gesetzt, wobei beide den Wert 0 erhielten. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal erlaubten Wert des `progress`-Elements angibt und `value` seinen aktuellen Wert angibt. Es muss auch einen maximalen Wert haben, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Dies wird aus dem `duration`-Attribut des Videos erhalten, das wiederum Teil der Media API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das eintritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann es in einigen mobilen Browsern vorkommen, dass `video.duration` beim Auslösen von `loadedmetadata` nicht den korrekten Wert hat oder überhaupt keinen Wert. Also muss etwas anderes getan werden. Mehr dazu weiter unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis ist ideal dafür, den Wert des Fortschrittsbalkens zu aktualisieren, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit das Video derzeit abgespielt wird.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Da das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf die `currentTime` des Videos gesetzt. Dieser Bereich hat eine feste CSS-Hintergrundfarbe, die ihm dabei hilft, dasselbe visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu bieten.

Zurück zu dem oben erwähnten `video.duration`-Problem, wenn das `timeupdate`-Ereignis ausgelöst wird, sollte das `duration`-Attribut des Videos in den meisten mobilen Browsern jetzt den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, wenn es derzeit nicht gesetzt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsbalken und Pufferfeedback lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Überspringen

Ein weiteres Feature der meisten standardmäßigen Videosteuern von Browsern ist die Möglichkeit, auf den Fortschrittsbalken des Videos zu klicken, um zu einem anderen Punkt im Video zu "springen". Dies kann auch erreicht werden, indem man einen einfachen `click`-Ereignis-Listener dem `progress`-Element hinzufügt:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die geklickte Position, um (ungefähr) zu ermitteln, wo im `progress`-Element der Benutzer geklickt hat, und das Video an diese Position zu bewegen, indem es seinem `currentTime`-Attribut gesetzt wird.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf eine Schaltfläche, wenn das Video im Vollbildmodus ist: abbrechen, andernfalls in den Vollbildmodus wechseln.

Die Vollbildschaltfläche wird verborgen, wenn die Fullscreen-API nicht aktiviert ist:

```js
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Die Vollbildschaltfläche muss tatsächlich etwas tun. Wie die anderen Tasten wird ein `click`-Ereignis-Handler angehängt, der eine benutzerdefinierte Funktion `handleFullscreen` aufruft:

```js
fullscreen.addEventListener("click", (e) => {
  handleFullscreen();
});
```

Die `handleFullscreen`-Funktion wird wie folgt definiert:

```js
function handleFullscreen() {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode
    document.exitFullscreen();
    setFullscreenData(false);
  } else {
    // The document is not in fullscreen mode
    videoContainer.requestFullscreen();
    setFullscreenData(true);
  }
}
```

Wenn sich der Browser derzeit im Vollbildmodus befindet, muss dieser beendet werden und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu beenden/abzubrechen, während jedes HTML-Element den Vollbildmodus anfordern kann, hier wird der `videoContainer` verwendet, da er auch die benutzerdefinierten Steuerungen enthält, die zusammen mit dem Video im Vollbildmodus erscheinen sollten.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs auf dem `videoContainer` setzt (dies macht Gebrauch von [`data-states`](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Dies wird verwendet, um einige grundlegende CSS festzulegen, um das Styling der benutzerdefinierten Steuerungen im Vollbildmodus zu verbessern (sehen Sie sich den Beispielcode für weitere Details an). Wenn ein Video in den Vollbildmodus wechselt, wird normalerweise eine Nachricht angezeigt, die darauf hinweist, dass der Benutzer die _Esc_-Taste drücken kann, um den Vollbildmodus zu verlassen, daher muss der Code auch auf relevante Ereignisse hören, um die `setFullscreenData()`-Funktion aufzurufen und sicherzustellen, dass das Kontrollstyling korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) für weitere Techniken
- [Von HTML-Audio- und -Videoelementen unterstützte Medienformate](/de/docs/Web/Media/Formats)
