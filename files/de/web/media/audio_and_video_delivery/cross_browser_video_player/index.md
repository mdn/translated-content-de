---
title: Erstellen eines plattformübergreifenden Video-Players
slug: Web/Media/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel beschreibt einen einfachen HTML-Video-Player, der die Media- und Fullscreen-APIs verwendet. Neben der Vollbildanzeige bietet der Player benutzerdefinierte Steuerelemente anstelle der Standard-Browsersteuerung. Die Steuerelemente des Players werden über die grundlegenden Anforderungen hinaus nicht gestylt; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

## Arbeitendes Beispiel

Unser Beispiel-Video-Player zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Video-Steuerelemente.

![Ein Screenshot eines Video-Players mit mehreren Steuertasten wie Play, Pause und Stopp. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML-Markup

Zu Beginn werfen wir einen Blick auf das HTML, das den Player ausmacht.

### Das Video

Zuerst wird das {{ htmlelement("video") }}-Element definiert, das sich innerhalb eines {{ htmlelement("figure") }}-Elements befindet, das als Videocontainer dient. Für alle, die mit HTML und dem {{ htmlelement("video") }}-Element vertraut sind, sollte hier nichts Überraschendes sein.

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

Obwohl dieser Player sein eigenes benutzerdefiniertes Steuerelement-Set definieren wird, wird das Attribut `controls` dennoch dem {{ htmlelement("video") }}-Element hinzugefügt, und das Standardsteuerungset des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise haben Benutzer, die JavaScript ausgeschaltet haben (aus welchen Gründen auch immer), weiterhin Zugriff auf die nativen Steuerelemente des Browsers.

Ein Posterbild wird für das Video definiert, und das Attribut `preload` ist auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen sollte, die Metadaten der Videodatei zu laden, anstatt die gesamte Videodatei. Dies verschafft dem Player Daten wie Videolänge und Format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Mit diesen unterschiedlichen Quellformaten besteht die beste Chance, von allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Für weitere Informationen zu Videoformaten und der Browser-Kompatibilität, siehe [unterstützte Medienformate](/de/docs/Web/Media/Formats#browser_compatibility).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem Standard-Steuerelementset des Browsers ermöglichen. Der nächste Schritt ist die Definition eines benutzerdefinierten Steuerelementsets, ebenfalls in HTML, das zur Steuerung des Videos verwendet wird.

### Das Steuerelement-Set

Die Standard-Videosteuerung der meisten Browser hat folgende Funktionen:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsbalken
- Vorspulen
- Vollbildmodus

Das benutzerdefinierte Steuerelementset wird auch diese Funktionalität unterstützen, zusätzlich zu einer Stopptaste.

Auch hier ist das HTML ziemlich einfach zu verstehen: Eine ungeordnete Liste mit `list-style-type:none` wird verwendet, um die Steuerelemente einzuschließen, von denen jedes ein Listenelement mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element verwendet. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

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

Jeder Taste wird eine `id` zugewiesen, damit sie leicht mit JavaScript zugänglich ist.

Die Steuerelemente sind zunächst mit CSS auf `display:none` gesetzt und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, erscheint das benutzerdefinierte Steuerelementset nicht und er kann ungestört das Standardsteuerungset des Browsers verwenden.

Natürlich ist dieses benutzerdefinierte Steuerelementset derzeit nutzlos und funktioniert nicht: Verbessern wir die Situation mit JavaScript.

## Verwendung der Media API

HTML wird mit einer JavaScript [Media API](/de/docs/Web/API/HTMLMediaElement) geliefert, die den Entwicklern Zugriff auf und Kontrolle über HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerelementset tatsächlich funktionsfähig zu machen. Zusätzlich wird die Vollbildtaste die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern zur Anzeige von Apps im Vollbildmodus steuert.

### Einrichtung

Bevor man sich mit den einzelnen Tasten befasst, sind mehrere Initialisierungsaufrufe erforderlich.

Zu Beginn ist es eine gute Idee, zuerst zu überprüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt und die benutzerdefinierten Steuerelemente nur dann einzurichten, wenn dies der Fall ist. Dies wird überprüft, indem geprüft wird, ob ein erstelltes {{ htmlelement("video") }}-Element [die `canPlayType()`-Methode](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, was bei jedem unterstützten HTML-{{ htmlelement("video") }}-Element der Fall sein sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Sobald bestätigt wurde, dass der Browser HTML-Video tatsächlich unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerelemente einzurichten. Es werden Variablen benötigt, die auf die HTML-Elemente verweisen:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie zuvor erwähnt, müssen jetzt die Standardsteuerungen des Browsers deaktiviert und die benutzerdefinierten Steuerelemente angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Damit ist nun eine Variable erforderlich, die auf jede der Tasten verweist:

```js
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Referenzen können jetzt Ereignisse an jede der benutzerdefinierten Steuertasten angehängt werden, um sie interaktiv zu machen. Die meisten dieser Tasten erfordern, dass ein einfacher `click`-Ereignis-Listener hinzugefügt wird, und eine durch die Media API definierte Methode und/oder Attribute auf das Video anzuwenden/geprüft werden.

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

Wenn ein `click`-Ereignis an der Abspiel-/Pausetaste erkannt wird, überprüft der Handler zunächst, ob das Video derzeit pausiert oder beendet ist (über die `paused`- und `ended`-Attribute der Media-API); in diesem Fall wird die `play()`-Methode verwendet, um das Video abzuspielen. Andernfalls muss das Video gerade abgespielt werden, also wird es mit der `pause()`-Methode pausiert.

### Stoppen

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media API verfügt nicht über eine `stop`-Methode, sodass zum Nachahmen das Video pausiert wird und sein `currentTime` (d. h. die aktuelle Abspielposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt wird (mehr dazu später beim {{ htmlelement("progress") }}-Element).

### Stummschalten

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalttaste ist eine einfache Umschalttaste, die das `muted`-Attribut der Media-API verwendet, um das Video stumm zu schalten: Dies ist ein Boolean, der angibt, ob das Video stummgeschaltet ist oder nicht. Um es umzuschalten, setzen wir es auf das Gegenteil von sich selbst.

### Lautstärke

```js
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Es wurden zwei Lautstärkeregeltasten definiert, eine zum Erhöhen und eine zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, um dies zu handhaben:

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

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos hält. Gültige Werte für dieses Attribut liegen zwischen 0 und 1. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert und sicherstellt, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute gesetzt, `value` und `min`, beide mit dem Wert 0. Die Funktion dieser Attribute erklärt sich von selbst, wobei `min` den minimal zulässigen Wert des `progress`-Elements und `value` den aktuellen Wert angibt. Es muss auch ein Maximalwert gesetzt werden, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos eingestellt werden muss. Diese wird aus dem `duration`-Attribut des Videos erhalten, das erneut Teil der Media API ist.

Ideal ist der richtige Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann in einigen mobilen Browsern, wenn `loadedmetadata` ausgelöst wird — wenn es überhaupt _ausgelöst_ wird — `video.duration` möglicherweise nicht den richtigen Wert oder überhaupt keinen Wert haben. Also muss etwas anderes getan werden. Mehr dazu unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich ideal zum Aktualisieren des Werts des Fortschrittsbalkens, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das anzeigt, wie weit das aktuelle Playback des Videos ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Sobald das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf `currentTime` des Videos gesetzt. Diese Spanne hat eine feste CSS-Hintergrundfarbe, was ihr hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu bieten.

Zurück zum oben erwähnten Problem mit `video.duration`: Wenn das `timeupdate`-Ereignis ausgelöst wird, sollte das `duration`-Attribut des Videos in den meisten mobilen Browsern jetzt den richtigen Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements festzulegen, wenn es derzeit nicht festgelegt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsbalken und Zwischenspeicherungsfeedback lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspulen

Ein weiteres Merkmal der Standard-Videosteuerungssätze der meisten Browser ist die Fähigkeit, auf den Fortschrittsbalken des Videos zu klicken, um im Video an eine andere Stelle zu "springen". Dies kann durch Hinzufügen eines einfachen `click`-Ereignis-Listeners zum `progress`-Element erreicht werden:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieses Stück Code verwendet die angeklickte Position, um (grob) herauszufinden, wo im `progress`-Element der Benutzer geklickt hat, und bewegt das Video an diese Position, indem es das `currentTime`-Attribut setzt.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf eine Schaltfläche. Ist das Video im Vollbildmodus, wird dieser abgebrochen, andernfalls wird in den Vollbildmodus gewechselt.

Die Vollbildschaltfläche wird ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

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

Die Funktion `handleFullscreen` ist wie folgt definiert:

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

Wenn sich der Browser derzeit im Vollbildmodus befindet, muss dieser beendet werden und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu verlassen, während jedes HTML-Element den Vollbildmodus anfordern kann. Hier wird `videoContainer` verwendet, da es auch die benutzerdefinierten Steuerungen enthält, die mit dem Video im Vollbildmodus angezeigt werden sollten.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs auf dem `videoContainer` setzt (dies macht Gebrauch von [`data-states`](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Dies wird verwendet, um einige grundlegende CSS zur Verbesserung des Stylings der benutzerdefinierten Steuerungen im Vollbild einzurichten (siehe die Beispielcodes für weitere Details). Wenn ein Video in den Vollbildmodus wechselt, zeigt es normalerweise eine Nachricht an, dass der Benutzer die _Esc_-Taste drücken kann, um den Vollbildmodus zu verlassen, daher muss der Code relevante Ereignisse abhören, um die `setFullscreenData()`-Funktion aufzurufen und sicherzustellen, dass das Steuerungsstyling korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) für weitere Techniken
- [Von den HTML-Audio- und Video-Elementen unterstützte Medienformate](/de/docs/Web/Media/Formats)
