---
title: Erstellen eines browserübergreifenden Video-Players
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

Dieser Artikel beschreibt einen grundlegenden HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Der Player bietet benutzerdefinierte Steuerelemente anstelle der Standardbrowser-Optionen und unterstützt den Vollbildmodus. Die Steuerelemente des Players werden nicht über die grundlegenden Funktionen hinaus gestaltet, die erforderlich sind, um sie funktionstüchtig zu machen; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

## Funktionierendes Beispiel

Unser Beispiel-Videoplayer zeigt einen Ausschnitt aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und beinhaltet typische Videosteuerungen.

![ein Bild eines Videoplayers mit mehreren Steuerungsknöpfen wie Abspielen, Pause und Stopp. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML-Markup

Zunächst werfen wir einen Blick auf das HTML, das den Player bildet.

### Das Video

Zuerst wird das {{ htmlelement("video") }}-Element definiert, das sich innerhalb eines {{ htmlelement("figure") }}-Elements befindet, das als Videocontainer dient. Für diejenigen, die mit HTML-Markup und dem {{ htmlelement("video") }}-Element vertraut sind, sollte hier nichts Überraschendes zu finden sein.

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

Obwohl dieser Player seine eigenen benutzerdefinierten Steuerelemente definieren wird, wird das `controls`-Attribut dennoch zum {{ htmlelement("video") }}-Element hinzugefügt, und das Standardsteuerungselement des Players wird später mit JavaScript deaktiviert. Auf diese Weise können Benutzer, die JavaScript aus irgendeinem Grund deaktiviert haben, dennoch auf die nativen Steuerelemente des Browsers zugreifen.

Ein Posterbild wird für das Video definiert, und das `preload`-Attribut ist auf `metadata` gesetzt, was den Browser anweist, zunächst nur die Metadaten der Videodatei und nicht die gesamte Videodatei zu laden. Dies liefert dem Player Informationen wie Videodauer und -format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Das Verwenden dieser verschiedenen Quellformate bietet die beste Chance, in allen Browsern, die HTML-Video unterstützen, abgespielt werden zu können. Für weitere Informationen zu Videoformaten und Browser-Kompatibilität siehe [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern ermöglichen und dabei die Standardsteuerungselemente des Browsers verwenden. Der nächste Schritt besteht darin, ein benutzerdefiniertes Steuerungselementset zu definieren, ebenfalls in HTML, das zur Steuerung des Videos verwendet wird.

### Die Steuerungselemente

Die Standardvideosteuerungselemente der meisten Browser bieten folgende Funktionalitäten:

- Abspielen/Pause
- Lautlos schalten
- Lautstärkeregelung
- Fortschrittsbalken
- Vorspringen
- Vollbildmodus aktivieren

Das benutzerdefinierte Steuerelementset wird diese Funktionalitäten ebenfalls unterstützen, mit der Ergänzung eines Stopp-Knopfs.

Auch hier ist das HTML ziemlich unkompliziert und verwendet eine ungeordnete Liste mit `list-style-type:none`, um die Steuerelemente einzuschließen, von denen jedes ein Listenpunkt mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (das ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

```html
<ul id="video-controls" class="controls">
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

Jeder Knopf erhält eine `id`, damit er leicht mit JavaScript angesprochen werden kann.

Die Steuerelemente sind anfänglich mit einem CSS `display:none` versteckt und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, erscheinen die benutzerdefinierten Steuerungselemente nicht und er kann die Standardsteuerungselemente des Browsers ungehindert verwenden.

Natürlich ist dieses benutzerdefinierte Steuerungselementset derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

## Verwendung der Media API

HTML bietet ein [Media API](/de/docs/Web/API/HTMLMediaElement) für JavaScript, das Entwicklern den Zugriff und die Steuerung von HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerungselementset tatsächlich etwas tun zu lassen. Zusätzlich wird die Vollbildtaste die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) nutzen, eine weitere W3C-API, die steuert, ob Webbrowser Apps im Vollbildmodus Ihres Computers anzeigen können.

### Einrichtung

Bevor die einzelnen Tasten behandelt werden, sind einige Initialisierungsaufrufe erforderlich.

Zunächst ist es eine gute Idee, zu überprüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt, und die benutzerdefinierten Steuerelemente nur dann einzurichten, wenn es unterstützt wird. Dies wird durch Überprüfen, ob ein erstelltes {{ htmlelement("video") }}-Element [die `canPlayType()`-Methode](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, durchgeführt, die jedes unterstützte HTML-{{ htmlelement("video") }}-Element haben sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Sobald bestätigt ist, dass der Browser HTML-Video tatsächlich unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerelemente einzurichten. Variablen, die auf HTML-Elemente zeigen, sind erforderlich:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen nun die Standardsteuerungselemente des Browsers deaktiviert und die benutzerdefinierten Steuerelemente angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Damit ist nun eine Variable erforderlich, die auf jede der Tasten zeigt:

```js
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handles können nun Ereignisse an jede der benutzerdefinierten Steuerungstasten angeschlossen werden, um sie interaktiv zu machen. Die meisten dieser Tasten benötigen einen `click`-Ereignislistener, der hinzugefügt wird, und eine in der Media-API definierte Methode und/oder Attribute, die auf das Video angewendet/überprüft werden.

### Abspielen/Pause

```js
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

Wenn ein `click`-Ereignis auf der Abspielen/Pause-Taste erkannt wird, überprüft der Handler zunächst, ob das Video derzeit pausiert oder beendet ist (über die `paused`- und `ended`-Attribute der Media-API); wenn ja, wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video ablaufen, und es wird durch die `pause()`-Methode pausiert.

### Stopp

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher wird zur Nachahmung dieser Funktion das Video pausiert und sein `currentTime` (d.h. die aktuelle Wiedergabeposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt (mehr über das {{ htmlelement("progress") }}-Element später).

### Lautlos

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Lautlostaste ist eine Umschalttaste, die das `muted`-Attribut der Media-API verwendet, um das Video stummzuschalten: Dies ist ein Boolean, der anzeigt, ob das Video stummgeschaltet ist oder nicht. Zum Umschalten setzen wir es auf das Inverse von sich selbst.

### Lautstärke

```js
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Es wurden zwei Lautstärkeregeltasten definiert, eine zum Erhöhen und eine zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die dies behandelt:

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

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos enthält. Gültige Werte für dieses Attribut sind 0 und 1 sowie jede Zahl dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert, wobei sichergestellt wird, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Wenn das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute gesetzt, `value` und `min`, beide erhielten den Wert 0. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal zulässigen Wert des `progress`-Elements und `value` dessen aktuellen Wert angibt. Es muss auch ein Maximalwert gesetzt werden, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Dies wird aus dem `duration`-Attribut des Videos abgeleitet, das wiederum Teil der Media-API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann, wenn `loadedmetadata` in einigen mobilen Browsern ausgelöst wird — falls es überhaupt ausgelöst wird — das `video.duration`-Attribut möglicherweise nicht den richtigen Wert oder überhaupt keinen Wert haben. Daher muss etwas anderes unternommen werden. Mehr dazu weiter unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis ist ideal, um den Wert des Fortschrittbalkens zu aktualisieren, indem er auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit die aktuelle Wiedergabe im Video fortgeschritten ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Als das `timeupdate`-Ereignis ausgelöst wurde, wurde das `value`-Attribut des `progress`-Elements auf die `currentTime` des Videos gesetzt. Dieser Bereich hat eine solide CSS-Hintergrundfarbe, die ihm hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu geben.

In Bezug auf das oben erwähnte `video.duration`-Problem sollte in den meisten mobilen Browsern beim Auslösen des `timeupdate`-Ereignisses das `duration`-Attribut des Videos nun den richtigen Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, falls es derzeit nicht gesetzt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsbalken und Pufferfeedback lesen Sie [Medien-Pufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspringen

Ein weiteres Merkmal der meisten Standardvideosteuerungselemente im Browser ist die Möglichkeit, auf den Fortschrittsbalken des Videos zu klicken, um "vorzuspringen" zu einem anderen Punkt im Video. Dies kann auch erreicht werden, indem man dem `progress`-Element einen `click`-Ereignislistener hinzufügt:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die angeklickte Position, um (ungefähr) zu ermitteln, wo im `progress`-Element der Benutzer geklickt hat, und um das Video zu dieser Position zu bewegen, indem sein `currentTime`-Attribut gesetzt wird.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf eine Schaltfläche, wenn sich das Video im Vollbildmodus befindet: Beenden Sie diesen Modus, andernfalls aktivieren Sie den Vollbildmodus.

Die Vollbildtaste wird ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

```js
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Die Vollbildtaste muss tatsächlich etwas tun. Wie die anderen Tasten wird ein `click`-Ereignishandler angehängt, der eine benutzerdefinierte Funktion `handleFullscreen` aufruft:

```js
fullscreen.addEventListener("click", (e) => {
  handleFullscreen();
});
```

Die Funktion `handleFullscreen` wird wie folgt definiert:

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

Wenn sich der Browser derzeit im Vollbildmodus befindet, muss dieser beendet werden und umgekehrt. Interessanterweise muss `document` zum Beenden/Abbrechen des Vollbildmodus verwendet werden, während jedes HTML-Element den Vollbildmodus anfordern kann. Hier wird der `videoContainer` verwendet, da er auch die benutzerdefinierten Steuerelemente enthält, die zusammen mit dem Video im Vollbildmodus angezeigt werden sollen.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs im `videoContainer` setzt (dies nutzt [`data-states`](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Diese Funktion wird verwendet, um einige grundlegende CSS festzulegen, um das Styling der benutzerdefinierten Steuerelemente im Vollbildmodus zu verbessern (siehe den Beispielcode für weitere Details). Wenn ein Video in den Vollbildmodus wechselt, wird normalerweise eine Meldung angezeigt, die angibt, dass der Benutzer die _Escape_-Taste drücken kann, um den Vollbildmodus zu beenden. Der Code muss daher auf relevante Ereignisse achten, um die `setFullscreenData()`-Funktion aufzurufen und sicherzustellen, dass das Steuerungsstyling korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Von den HTML-Audio- und Videoelementen unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
