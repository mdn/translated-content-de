---
title: Erstellen eines plattformübergreifenden Video-Players
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Dieser Artikel beschreibt einen grundlegenden HTML-Video-Player, der die Media- und Fullscreen-APIs nutzt. Neben dem Vollbildmodus verfügt der Player über benutzerdefinierte Steuerungselemente, anstatt nur die Standard-Steuerelemente des Browsers zu verwenden. Die Steuerelemente des Players werden nicht über die grundlegenden Anforderungen hinaus gestaltet, um sie funktionsfähig zu machen; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

## Funktionierendes Beispiel

Unser Beispiel-Videoplayer zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

![ein Screenshot eines Video-Players mit mehreren Steuerungstasten wie Abspielen, Pause und Stop. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML-Markup

Zunächst werfen wir einen Blick auf das HTML, das den Player ausmacht.

### Das Video

Zunächst wird das {{ htmlelement("video") }}-Element definiert, das sich innerhalb eines {{ htmlelement("figure") }}-Elements befindet, das als Videocontainer dient. Für jeden, der mit HTML-Markup und dem {{ htmlelement("video") }}-Element vertraut ist, sollte hier nichts Überraschendes zu finden sein.

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

Obwohl dieser Player sein eigenes benutzerdefiniertes Steuerelementset definiert, wird dem {{ htmlelement("video") }}-Element immer noch das `controls`-Attribut hinzugefügt, und das Standard-Steuerelementset des Spielers wird später mit JavaScript ausgeschaltet. Auf diese Weise haben Nutzer, die JavaScript deaktiviert haben (aus welchem Grund auch immer), immer noch Zugriff auf die nativen Steuerelemente des Browsers.

Ein Posterbild wird für das Video definiert und das `preload`-Attribut wird auf `metadata` gesetzt, was den Browser informiert, dass er zunächst nur versuchen sollte, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Videodatei. Dies versorgt den Player mit Daten wie Videodauer und -format.

Dem Player werden drei verschiedene Videoquellen bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser unterschiedlichen Quellformate bietet die beste Chance, von allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Für weitere Informationen zu Videoformaten und Browser-Kompatibilität siehe [unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats#browser_compatibility).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem standardmäßigen Steuerelementset des Browsers ermöglichen. Der nächste Schritt besteht darin, ein benutzerdefiniertes Steuerelementset ebenfalls in HTML zu definieren, das zur Steuerung des Videos verwendet wird.

### Das Steuerelementset

Die meisten browserseitigen Standardvideo-Steuerelemente haben die folgende Funktionalität:

- Wiedergabe/Pause
- Stummschaltung
- Lautstärkeregelung
- Fortschrittsleiste
- Vorwärtsspringen
- Vollbild anzeigen

Das benutzerdefinierte Steuerungset wird diese Funktionalität ebenfalls unterstützen, mit der zusätzlichen Stop-Taste.

Auch hier ist das HTML recht einfach und verwendet eine ungeordnete Liste mit `list-style-type:none`, um die Steuerungselemente zu umschließen, von denen jedes eine Listeneinheit mit `float:left` ist. Für die Fortschrittsleiste wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktion, die später erklärt wird).

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

Jede Taste erhält eine `id`, damit sie leicht mit JavaScript zugänglich ist.

Die Steuerelemente sind zunächst mit einem CSS `display:none` verborgen und werden mit JavaScript aktiviert. Wiederum, wenn ein Nutzer JavaScript deaktiviert hat, erscheint das benutzerdefinierte Steuerungset nicht und er kann ungehindert das standardmäßige Steuerelementset des Browsers verwenden.

Natürlich ist dieses benutzerdefinierte Steuerungset derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

## Nutzung der Media-API

HTML bietet eine JavaScript-[Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern den Zugriff auf und die Steuerung von HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerungset tatsächlich funktionsfähig zu machen. Darüber hinaus wird der Vollbildbutton die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbildmodus Ihres Computers anzuzeigen.

### Einrichtung

Bevor mit den einzelnen Tasten umgegangen wird, sind einige Initialisierungsaufrufe erforderlich.

Zunächst ist es eine gute Idee, zuerst zu überprüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt, und das benutzerdefinierte Steuerungselementset nur aufzubauen, wenn dies der Fall ist. Dies geschieht, indem geprüft wird, ob ein erstelltes {{ htmlelement("video") }}-Element [die `canPlayType()`-Methode](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, was jedes unterstützte HTML-{{ htmlelement("video") }}-Element tun sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Sobald bestätigt ist, dass der Browser HTML-Video tatsächlich unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerelemente einzurichten. Es sind Variablen erforderlich, die auf HTML-Elemente verweisen:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen die standardmäßigen Steuerelemente des Browsers nun deaktiviert und die benutzerdefinierten Steuerelemente angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Damit ist jetzt eine Variable erforderlich, die auf jede der Tasten verweist:

```js
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handles können jetzt Ereignisse an jede der benutzerdefinierten Steuerungstasten angehängt werden, um sie interaktiv zu machen. Die meisten dieser Tasten erfordern, dass ein `click`-Ereignislistener hinzugefügt wird, und eine in der Media API definierte Methode und/oder Attribute müssen für das Video aufgerufen/überprüft werden.

### Wiedergabe/Pause

```js
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

Wenn ein `click`-Ereignis bei der Wiedergabe-/Pause-Taste erkannt wird, überprüft der Handler zuerst, ob das Video derzeit pausiert ist oder beendet wurde (über die in der Media API definierten Attribute `paused` und `ended`); wenn ja, wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video gerade abgespielt werden, daher wird es mit der `pause()`-Methode pausiert.

### Stop

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media API hat keine `stop`-Methode, daher wird, um dies nachzuahmen, das Video pausiert, und sein `currentTime` (d.h. die aktuelle Abspielposition des Videos) sowie die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt (mehr über das {{ htmlelement("progress") }}-Element weiter unten).

### Stummschaltung

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalttaste ist ein Umschalter, der das `muted`-Attribut der Media API nutzt, um das Video stummzuschalten: Dieses ist ein Boolean, das anzeigt, ob das Video stummgeschaltet ist oder nicht. Um es umschalten zu können, setzen wir es auf das Gegenteil seiner selbst.

### Lautstärke

```js
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärkeregler wurden definiert, einer zum Erhöhen und der andere zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die dies bearbeitet:

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

Diese Funktion macht Gebrauch vom `volume`-Attribut der Media API, das den aktuellen Lautstärkewert des Videos hält. Gültige Werte für dieses Attribut sind 0 und 1 sowie alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0.1 erhöht oder verringert, wobei sichergestellt wird, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute festgelegt, `value` und `min`, die beide den Wert 0 erhielten. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal zulässigen Wert des `progress`-Elements angibt und `value` dessen aktuellen Wert. Es muss auch einen maximalen Wert haben, um seinen Bereich korrekt darzustellen, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Wiedergabezeit des Videos gesetzt werden muss. Dies wird aus dem `duration`-Attribut des Videos bezogen, das wiederum Teil der Media API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann in einigen mobilen Browsern, wenn `loadedmetadata` ausgelöst wird — falls es überhaupt _ausgelöst_ wird — `video.duration` möglicherweise nicht den korrekten Wert oder gar keinen Wert haben. Also muss etwas anderes getan werden. Mehr dazu weiter unten.

Ein weiteres Ereignis, `timeupdate`, wird regelmäßig ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich ideal dazu, den Wert der Fortschrittsleiste zu aktualisieren, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, der angibt, wie weit das aktuelle Playback des Videos fortgeschritten ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Während das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf die `currentTime` des Videos gesetzt. Dieser Bereich hat eine feste CSS-Hintergrundfarbe, was ihm hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu bieten.

In Bezug auf das oben erwähnte Problem mit `video.duration`, sollte in den meisten mobilen Browsern, wenn das `timeupdate`-Ereignis ausgelöst wird, das `duration`-Attribut des Videos jetzt den richtigen Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, falls es derzeit nicht gesetzt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für mehr Informationen und Ideen zu Fortschrittsbalken und Puffer-Rückmeldungen lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorwärtsspringen

Ein weiteres Merkmal der meisten standardmäßigen Videosteuerungssätze von Browsern ist die Fähigkeit, auf den Fortschrittsbalken des Videos zu klicken, um im Video "vorzuspringen". Dies kann auch erreicht werden, indem ein `click`-Ereignislistener am `progress`-Element hinzugefügt wird:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die angeklickte Position, um (ungefähr) herauszufinden, wo im `progress`-Element der Nutzer geklickt hat, und um das Video auf diese Position zu verschieben, indem das `currentTime`-Attribut gesetzt wird.

### Vollbild

Die Verwendung der Fullscreen-API sollte recht unkompliziert sein: Der Nutzer klickt auf eine Taste; wenn sich das Video im Vollbildmodus befindet, wird dieser abgebrochen, andernfalls wird der Vollbildmodus aktiviert.

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

Die `handleFullscreen`-Funktion ist wie folgt definiert:

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

Wenn sich der Browser derzeit im Vollbildmodus befindet, dann muss dieser beendet werden und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu beenden/abzubrechen, während jedes HTML-Element den Vollbildmodus anfordern kann. Hier wird das `videoContainer` verwendet, da es auch die benutzerdefinierten Steuerelemente enthält, die im Vollbildmodus zusammen mit dem Video angezeigt werden sollen.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs auf dem `videoContainer` setzt (dies verwendet [data-states](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Dies wird verwendet, um einige grundlegende CSS-Einstellungen vorzunehmen, um die Gestaltung der benutzerdefinierten Steuerelemente im Vollbildmodus zu verbessern (weitere Details finden Sie im Beispielcode). Wenn ein Video in den Vollbildmodus wechselt, zeigt es normalerweise eine Nachricht an, die darauf hinweist, dass der Nutzer die _Esc_-Taste drücken kann, um den Vollbildmodus zu beenden. Der Code muss daher auf relevante Ereignisse hören, um die `setFullscreenData()`-Funktion aufzurufen und sicherzustellen, dass das Styling der Steuerungen korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [HTML video und audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Medienformate, die von den HTML-Audio- und Videoelementen unterstützt werden](/de/docs/Web/Media/Guides/Formats)
