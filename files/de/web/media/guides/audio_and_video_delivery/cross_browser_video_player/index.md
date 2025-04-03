---
title: Erstellen eines plattformübergreifenden Video-Players
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel beschreibt einen grundlegenden HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Neben der Vollbildfunktion verfügt der Player über benutzerdefinierte Steuerelemente, anstatt nur die Standardeinstellungen des Browsers zu nutzen. Die Steuerungselemente des Players werden über die grundlegenden Anforderungen hinaus nicht weiter gestaltet; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

## Funktionierendes Beispiel

Unser Beispiel-Video-Player zeigt einen Ausschnitt aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

![Ein Bild eines Videoplayers mit mehreren Bedienelementen wie Abspielen, Pause und Stopp. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML-Markup

Zunächst schauen wir uns das HTML an, das den Player ausmacht.

### Das Video

Zuerst wird das {{ htmlelement("video") }}-Element definiert, das in einem {{ htmlelement("figure") }}-Element enthalten ist, das als Video-Container dient. Für jeden, der mit HTML-Markup und dem {{ htmlelement("video") }}-Element vertraut ist, sollte hier nichts Überraschendes sein.

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

Auch wenn dieser Player seine eigene benutzerdefinierte Steuerungssatz definiert, wird das `controls`-Attribut dennoch zum {{ htmlelement("video") }}-Element hinzugefügt, und das Standardsteuerungsset des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise können Benutzer, die JavaScript aus welchem Grund auch immer deaktiviert haben, weiterhin auf die nativen Steuerelemente des Browsers zugreifen.

Ein Posterbild wird für das Video definiert, und das `preload`-Attribut ist auf `metadata` gesetzt, was dem Browser mitteilt, dass er zunächst nur versuchen soll, die Metadaten aus der Videodatei und nicht die gesamte Videodatei zu laden. Dies bietet dem Player Daten wie Videodauer und -format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Durch die Verwendung dieser verschiedenen Quellformate verbessert sich die Unterstützung in allen Browsern, die HTML-Video unterstützen. Weitere Informationen zu Videoformaten und Browser-Kompatibilität finden Sie unter [Wahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem Standardsteuerungsset des Browsers ermöglichen. Der nächste Schritt ist die Definition eines benutzerdefinierten Steuerungssatzes, ebenfalls in HTML, um das Video zu steuern.

### Der Steuerungssatz

Die meisten Standardvideosteuerungen von Browsern bieten die folgende Funktionalität:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsanzeige
- Vorspulen
- Vollbildmodus

Der benutzerdefinierte Steuerungssatz wird diese Funktionalität ebenfalls unterstützen, mit der Ergänzung eines Stopp-Buttons.

Auch hier ist das HTML recht unkompliziert, mit einer ungeordneten Liste, die über `list-style-type:none` eingestellt ist, um die Steuerungen einzuschließen, von denen jede ein Listenelement mit `float:left` ist. Für die Fortschrittsanzeige wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, jedoch innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktion, die später erklärt wird).

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

Jeder Button erhält eine `id`, damit er mit JavaScript einfach zugänglich ist.

Die Steuerelemente sind zunächst mit einem CSS `display:none` ausgeblendet und werden mit JavaScript aktiviert. Auch hier kann, wenn ein Benutzer JavaScript deaktiviert hat, der benutzerdefinierte Steuerungssatz nicht angezeigt werden, und sie können das Standardsteuerungssatz des Browsers ungehindert verwenden.

Natürlich ist dieser benutzerdefinierte Steuerungssatz derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

## Verwendung der Media-API

HTML bietet eine JavaScript-[Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern den Zugriff auf und die Steuerung von HTML-Medien ermöglicht. Diese API wird verwendet, um den oben definierten benutzerdefinierten Steuerungssatz tatsächlich funktionsfähig zu machen. Zusätzlich wird der Vollbild-Button die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Möglichkeit von Webbrowsern steuert, Apps im Vollbildmodus Ihres Computers anzuzeigen.

### Einrichtung

Bevor die einzelnen Buttons behandelt werden, sind einige Initialisierungsaufrufe erforderlich.

Zunächst ist es eine gute Idee, zu überprüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt und die benutzerdefinierten Steuerelemente nur dann einzurichten. Dies geschieht, indem überprüft wird, ob ein erstelltes {{ htmlelement("video") }}-Element die [Methode `canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, die jedes unterstützte HTML-{{ htmlelement("video") }}-Element sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Sobald bestätigt wurde, dass der Browser HTML-Video unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerelemente einzurichten. Variablen, die auf HTML-Elemente verweisen, sind erforderlich:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen die Standardsteuerungen des Browsers jetzt deaktiviert und die benutzerdefinierten Steuerungen angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Mit diesem Schritt ist nun eine Variable erforderlich, die auf jeden der Buttons verweist:

```js
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handles können nun Ereignisse an jeden der benutzerdefinierten Steuerungsbuttons angefügt werden, um sie interaktiv zu machen. Die meisten dieser Buttons erfordern, dass ein `click`-Ereignislistener hinzugefügt wird, und eine in der Media-API definierte Methode und/oder Attribute müssen für das Video aufgerufen/überprüft werden.

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

Wenn ein `click`-Ereignis auf dem Abspiel-/Pause-Button erkannt wird, prüft der Handler zuerst, ob das Video derzeit pausiert ist oder bereits beendet ist (über die Attribute `paused` und `ended` der Media-API). Wenn ja, wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video abgespielt werden, daher wird es mit der `pause()`-Methode pausiert.

### Stopp

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher wird zur Nachahmung das Video angehalten, und sein `currentTime` (d.h. die aktuelle Abspielposition des Videos) sowie die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt (mehr zum {{ htmlelement("progress") }}-Element später).

### Stummschalten

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Der Stummschalttaster ist ein Umschaltknopf, der das `muted`-Attribut der Media-API verwendet, um das Video stumm zu schalten: Dies ist ein Boolescher Wert, der angibt, ob das Video stummgeschaltet ist oder nicht. Um ihn zu toggeln, setzen wir ihn auf das Gegenteil von sich selbst.

### Lautstärke

```js
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärkeregler-Buttons wurden definiert, einer zum Erhöhen der Lautstärke und ein weiterer zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die dies behandelt:

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

Diese Funktion nutzt das Attribut `volume` der Media-API, das den aktuellen Lautstärkewert des Videos hält. Gültige Werte für dieses Attribut sind 0 und 1 und alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der anzeigt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0.1 erhöht oder verringert, wobei sichergestellt wird, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute, `value` und `min`, festgelegt, beide mit einem Wert von 0. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal zulässigen Wert des `progress`-Elements und `value` den aktuellen Wert angibt. Es muss auch einen maximalen Wert haben, damit es seinen Bereich korrekt darstellen kann, und das kann über das `max`-Attribut erledigt werden, das auf die maximale Abspieldauer des Videos gesetzt werden muss. Dies wird aus dem `duration`-Attribut des Videos gewonnen, das wieder Teil der Media-API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann in einigen mobilen Browsern, wenn `loadedmetadata` ausgelöst wird — falls es überhaupt _ausgelöst_ wird — das `video.duration`-Attribut möglicherweise nicht den korrekten Wert besitzen oder überhaupt irgendeinen Wert. Daher muss noch etwas anderes getan werden. Mehr dazu weiter unten.

Ein weiteres Ereignis, `timeupdate`, wird regelmäßig ausgelöst, während das Video abgespielt wird. Dieses Ereignis ist ideal, um den Wert der Fortschrittsanzeige zu aktualisieren und ihn auf den Wert des `currentTime`-Attributs des Videos zu setzen, was anzeigt, wie weit das aktuelle Abspiel durch das Video fortgeschritten ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Wenn das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf die `currentTime` des Videos gesetzt. Diese Spannweite hat eine solide CSS-Hintergrundfarbe, was ihr hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu bieten.

Zurück zum `video.duration`-Problem, das oben erwähnt wurde: Wenn das `timeupdate`-Ereignis ausgelöst wird, sollte in den meisten mobilen Browsern das `duration`-Attribut des Videos jetzt den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements festzulegen, falls es derzeit nicht gesetzt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsbalken und Pufferungsfeedback lesen Sie [Medienpufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspringen

Ein weiteres Feature der meisten Standardvideosteuerungssätze von Browsern ist die Möglichkeit, auf die Fortschrittsanzeige des Videos zu klicken, um "vorzuspringen" zu einem anderen Punkt im Video. Dies kann auch erreicht werden, indem ein `click`-Ereignislistener zum `progress`-Element hinzugefügt wird:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die geklickte Position, um (ungefähr) zu bestimmen, wo im `progress`-Element der Benutzer geklickt hat, und bewegt das Video an diese Position, indem es sein `currentTime`-Attribut setzt.

### Vollbildmodus

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf einen Button, wenn das Video im Vollbildmodus ist, wird der Modus beendet, andernfalls wird der Vollbildmodus aufgerufen.

Der Vollbild-Button ist ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

```js
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Der Vollbild-Button muss tatsächlich etwas tun. Wie bei den anderen Buttons wird eine `click`-Ereignis-Handler angehängt, die eine benutzerdefinierte Funktion `handleFullscreen` aufruft:

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

Wenn der Browser sich derzeit im Vollbildmodus befindet, muss dieser beendet werden und umgekehrt. Interessanterweise muss `document` zum Beenden/Abbrechen des Vollbildmodus verwendet werden, während jedes HTML-Element den Vollbildmodus anfordern kann. Hier wird das `videoContainer` verwendet, da es auch die benutzerdefinierten Steuerelemente enthält, die zusammen mit dem Video im Vollbildmodus angezeigt werden sollten.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs auf dem `videoContainer` setzt (dies nutzt [data-states](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Diese wird verwendet, um einige grundlegende CSS zu setzen, um die Gestaltung der benutzerdefinierten Steuerungen im Vollbildmodus zu verbessern (siehe den Beispielcode für weitere Details). Wenn ein Video im Vollbildmodus angezeigt wird, wird gewöhnlich eine Nachricht angezeigt, die darauf hinweist, dass der Benutzer die _Esc_-Taste drücken kann, um den Vollbildmodus zu beenden. Der Code muss daher relevante Ereignisse ablauschen, um die `setFullscreenData()`-Funktion aufzurufen, um sicherzustellen, dass die Steuerungsstilierung korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Medienformate, die von den HTML-Audio- und -Videoelementen unterstützt werden](/de/docs/Web/Media/Guides/Formats)
