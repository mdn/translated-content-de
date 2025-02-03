---
title: Erstellen eines plattformübergreifenden Videoplayers
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Dieser Artikel beschreibt einen einfachen HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Neben der Fullscreen-Funktionalität verfügt der Player über benutzerdefinierte Steuerelemente anstelle der standardmäßigen Browser-Kontrollen. Die Steuerelemente des Players werden über die grundlegenden Anforderungen zur Funktionsfähigkeit hinaus nicht gestylt; das vollständige Styling des Players wird in einem zukünftigen Artikel behandelt.

## Funktionierendes Beispiel

Unser Beispiel-Videoplayer zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und beinhaltet typische Videokontrollen.

![Ein Bild eines Videoplayers mit mehreren Steuerelementen wie Abspielen, Pause und Stoppen. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpft.](video-player-example.png)

## HTML-Markup

Zu Beginn werfen wir einen Blick auf das HTML, das den Player ausmacht.

### Das Video

Zunächst wird das {{ htmlelement("video") }}-Element definiert, das in einem {{ htmlelement("figure") }}-Element enthalten ist, das als Videocontainer fungiert. Für jemanden, der mit HTML-Markup und dem {{ htmlelement("video") }}-Element vertraut ist, dürfte hier nichts Überraschendes zu finden sein.

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

Obwohl dieser Player seine eigene benutzerdefinierte Steuerungsanordnung definieren wird, wird das `controls`-Attribut dennoch dem {{ htmlelement("video") }}-Element hinzugefügt, und das standardmäßige Steuerungssatz des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise können Benutzer, die JavaScript aus welchem Grund auch immer deaktiviert haben, immer noch auf die nativen Steuerungen des Browsers zugreifen.

Ein Poster-Bild wird für das Video definiert, und das `preload`-Attribut ist auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen soll, die Metadaten aus der Videodatei zu laden, statt der gesamten Videodatei. Dies liefert dem Player Daten wie Videodauer und Format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser verschiedenen Quellenformate bietet die beste Chance, auf allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Weitere Informationen zu Videoformaten und Browser-Kompatibilität finden Sie unter [unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats#browser_compatibility).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern ermöglichen, wobei das standardmäßige Steuerungssatz des Browsers verwendet wird. Der nächste Schritt ist das Definieren eines benutzerdefinierten Steuersetups, ebenfalls in HTML, welches zur Steuerung des Videos verwendet wird.

### Das Steuerset

Die meisten standardmäßigen Videosteuerungen in Browsern haben folgende Funktionalität:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsbalken
- Vorspulen
- Vollbildmodus

Das benutzerdefinierte Steuerset wird diese Funktionalität ebenfalls unterstützen, mit der Hinzufügung eines Stopp-Buttons.

Auch hier ist das HTML recht einfach, indem eine ungeordnete Liste mit `list-style-type:none` verwendet wird, um die Steuerungen zu umzuschließen, wobei jedes ein Listenelement mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

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

Jeder Button wird mit einer `id` versehen, so dass es einfach mit JavaScript darauf zugegriffen werden kann.

Die Steuerungen sind anfänglich mit CSS `display:none` verborgen und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, erscheint das benutzerdefinierte Steuerset nicht, und er kann den standardmäßigen Steuerungssatz des Browsers ungehindert verwenden.

Natürlich ist dieses benutzerdefinierte Steuerset derzeit nutzlos und tut nichts: Verbessern wir die Situation mit JavaScript.

## Verwendung der Media-API

HTML enthält eine JavaScript [Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern den Zugriff auf und die Kontrolle über HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerset tatsächlich funktionsfähig zu machen. Zusätzlich wird der Fullscreen-Button die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Web-Browsern steuert, Apps im Vollbildmodus anzuzeigen.

### Setup

Bevor die einzelnen Buttons behandelt werden, sind eine Reihe von Initialisierungsaufrufen erforderlich.

Zunächst ist es eine gute Idee, zuerst zu überprüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt und das benutzerdefinierte Steuerset nur dann einzurichten, wenn dies der Fall ist. Dies wird durch Überprüfung erreicht, ob ein erstelltes {{ htmlelement("video") }}-Element [die Methode `canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, was jedes unterstützte HTML-{{ htmlelement("video") }}-Element tun sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Wenn bestätigt wurde, dass der Browser HTML-Video tatsächlich unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerungen einzurichten. Variablen, die auf HTML-Elemente verweisen, sind erforderlich:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen die standardmäßigen Steuerungen des Browsers jetzt deaktiviert werden, und die benutzerdefinierten Steuerungen müssen angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Nachdem dies erledigt ist, wird nun eine Variable benötigt, die auf jeden der Buttons verweist:

```js
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handgriffen können jetzt Ereignisse an jede der benutzerdefinierten Steuertasten angehängt werden, die sie interaktiv machen. Die meisten dieser Buttons erfordern das Hinzufügen eines einfachen `click`-Ereignislisteners und das Aufrufen/Überprüfen einer Methode oder eines Attributs, die von der Media-API auf dem Video definiert sind.

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

Wenn ein `click`-Ereignis auf dem Abspiel/Pause-Button erkannt wird, überprüft der Handler zuerst, ob das Video derzeit angehalten oder beendet ist (über die `paused`- und `ended`-Attribute der Media-API); wenn ja, wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video abgespielt werden, also wird es mit der `pause()`-Methode angehalten.

### Stoppen

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API verfügt über keine `stop`-Methode, daher wird das Video, um dies zu simulieren, angehalten, und dessen `currentTime` (d.h. die aktuelle Abspielposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements werden auf 0 gesetzt (mehr zu dem {{ htmlelement("progress") }}-Element später).

### Stummschalten

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Der Stummschalt-Button ist ein einfacher Kippschalter, der das `muted`-Attribut der Media-API verwendet, um das Video stummzuschalten: Dies ist ein Boolean, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es zu toggeln, setzen wir es auf das Inverse von sich selbst.

### Lautstärke

```js
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Es wurden zwei Lautstärkeregler-Buttons definiert: einer zum Erhöhen der Lautstärke und ein anderer zum Verringern. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die dies regelt:

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

Diese Funktion nutzt das `volume`-Attribut der Media-API, welches den aktuellen Lautstärkewert des Videos enthält. Gültige Werte für dieses Attribut sind 0 und 1 sowie alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0.1 erhöht oder verringert und sicherstellt, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute festgelegt, `value` und `min`, beide mit einem Wert von 0. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal zulässigen Wert des `progress`-Elements angibt und `value` seinen aktuellen Wert. Es muss auch einen maximalen Wert haben, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut, das auf die maximale Wiedergabezeit des Videos gesetzt werden muss, erfolgen. Dies wird aus dem `duration`-Attribut des Videos gewonnen, welches wiederum Teil der Media-API ist.

Idealerweise steht der korrekte Wert des `duration`-Attributs des Videos zur Verfügung, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann es bei einigen mobilen Browsern vorkommen, dass, wenn `loadedmetadata` ausgelöst wird – falls es überhaupt _ausgelöst_ wird – `video.duration` möglicherweise nicht den richtigen Wert hat oder überhaupt keinen Wert. Daher muss etwas anderes getan werden. Mehr dazu unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis ist ideal dafür geeignet, den Wert des Fortschrittsbalkens zu aktualisieren, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, welches anzeigt, wie weit das aktuelle Playback des Videos ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Wenn das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf den `currentTime`-Wert des Videos gesetzt. Dieser Bereich hat eine solide CSS-Hintergrundfarbe, die ihm hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element bereitzustellen.

Zurück zu dem oben erwähnten `video.duration`-Problem: Wenn das `timeupdate`-Ereignis ausgelöst wird, sollte in den meisten mobilen Browsern das `duration`-Attribut des Videos nun den korrekten Wert aufweisen. Dies kann dazu genutzt werden, das `max`-Attribut des `progress`-Elements zu setzen, falls es derzeit nicht festgelegt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsbalken und Puffer-Feedback lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspulen

Ein weiteres Merkmal der meisten standardmäßigen Videosteuerungen in Browsern ist die Möglichkeit, auf den Fortschrittsbalken des Videos zu klicken, um "vorzuspulen" an einen anderen Punkt im Video. Dies kann auch erreicht werden, indem ein einfaches `click`-Ereignis zu dem `progress`-Element hinzugefügt wird:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieser Code verwendet die geklickte Position, um (ungefähr) zu ermitteln, wo im `progress`-Element der Benutzer geklickt hat, und bewegt das Video zu dieser Position, indem das `currentTime`-Attribut gesetzt wird.

### Vollbildmodus

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf einen Button, und wenn das Video im Vollbildmodus ist: abbrechen, andernfalls Vollbildmodus aktivieren.

Der Vollbild-Button wird ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

```js
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Der Vollbild-Button muss tatsächlich etwas tun. Wie bei den anderen Tasten wird ein `click`-Ereignis-Handler angehängt, der eine benutzerdefinierte Funktion `handleFullscreen` aufruft:

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

Wenn der Browser derzeit im Vollbildmodus ist, muss er beendet werden und umgekehrt. Interessanterweise muss `document` zum Beenden/Abbrechen des Vollbildmodus verwendet werden, während jedes HTML-Element den Vollbildmodus anfordern kann; hier wird das `videoContainer`-Element verwendet, da es auch die benutzerdefinierten Steuerungen enthält, die zusammen mit dem Video im Vollbildmodus angezeigt werden sollen.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs auf dem `videoContainer` setzt (dies nutzt [data-states](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Dies wird verwendet, um einige grundlegende CSS-Einstellungen vorzunehmen, um das Styling der benutzerdefinierten Steuerungen im Vollbildmodus zu verbessern (siehe den Beispielcode für weitere Details). Wenn ein Video in den Vollbildmodus wechselt, wird normalerweise eine Nachricht angezeigt, die angibt, dass der Benutzer die _Esc_-Taste drücken kann, um den Vollbildmodus zu verlassen; der Code muss daher relevante Ereignisse überwachen, um die `setFullscreenData()`-Funktion aufzurufen und sicherzustellen, dass das Steuerungsstyling korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Medienformate, die von den HTML-Audio- und Videoelementen unterstützt werden](/de/docs/Web/Media/Guides/Formats)
