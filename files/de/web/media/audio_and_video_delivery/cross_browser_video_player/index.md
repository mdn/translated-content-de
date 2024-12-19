---
title: Erstellen eines plattformübergreifenden Videoplayers
slug: Web/Media/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel beschreibt einen einfachen HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Neben der Vollbildwiedergabe bietet der Player auch benutzerdefinierte Steuerungen anstelle der standardmäßigen Steuerelemente des Browsers. Die Player-Steuerungen werden zunächst nicht über das notwendige Maß hinaus gestaltet; die vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

## Funktionierendes Beispiel

Unser Beispiel-Videoplayer zeigt einen Ausschnitt aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

![ein Bild eines Videoplayers mit mehreren Bedienelementen wie Abspielen, Pause und Stopp. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML-Markup

Lassen Sie uns zunächst den HTML-Code betrachten, aus dem der Player besteht.

### Das Video

Zunächst wird das {{ htmlelement("video") }}-Element definiert, das sich in einem {{ htmlelement("figure") }}-Element befindet, das als Videocontainer dient. Für jemanden, der vertraut mit HTML-Markup und dem {{ htmlelement("video") }}-Element ist, sollte hier nichts Überraschendes sein.

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

Auch wenn dieser Player seine eigenen benutzerdefinierten Steuerungen definiert, bleibt das `controls`-Attribut beim {{ htmlelement("video") }}-Element hinzugefügt, und das standardmäßige Steuerungselement des Players wird später mit JavaScript deaktiviert. Durch dieses Vorgehen können Benutzer, die JavaScript ausgeschaltet haben (aus welchem Grund auch immer), weiterhin auf die nativen Steuerungen des Browsers zugreifen.

Ein Posterbild wird für das Video definiert und das `preload`-Attribut wird auf `metadata` gesetzt, was den Browser informiert, dass er zunächst nur versuchen soll, die Metadaten der Videodatei anstelle der ganzen Videodatei zu laden. Dies liefert dem Player Informationen wie die Videodauer und das Format.

Drei verschiedene Videoquellen werden für den Player bereitgestellt: MP4, WebM und Ogg. Diese unterschiedlichen Quellenformate bieten die beste Chance, in allen Browsern unterstützt zu werden, die HTML-Video unterstützen. Weitere Informationen zu Videoformaten und der Browser-Kompatibilität finden Sie unter [unterstützte Medienformate](/de/docs/Web/Media/Formats#browser_compatibility).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem standardmäßigen Steuerungselement des Browsers ermöglichen. Der nächste Schritt besteht darin, ein benutzerdefiniertes Steuerungselement, ebenfalls in HTML, zu definieren, das zur Steuerung des Videos verwendet wird.

### Das Steuerungselement

Die standardmäßigen Videosteuerungen der meisten Browser bieten die folgende Funktionalität:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsbalken
- Vorspulen
- Vollbildmodus

Das benutzerdefinierte Steuerungselement wird ebenfalls diese Funktionalität unterstützen, mit der zusätzlichen Möglichkeit einer Stop-Taste.

Nochmals ist das HTML relativ einfach und verwendet eine ungeordnete Liste mit `list-style-type:none`, um die Steuerungen zu umschließen, von denen jede ein Listenelement mit `float:left` darstellt. Für den Fortschrittsbalken wird auf das `progress`-Element zurückgegriffen. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

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

Die Steuerungen sind initial mit einem CSS `display:none` verborgen und werden mit JavaScript aktiviert. Sollte ein Benutzer JavaScript deaktiviert haben, wird das benutzerdefinierte Steuerungselement nicht erscheinen und sie können das standardmäßige Steuerungselement des Browsers ungehindert verwenden.

Natürlich ist dieses benutzerdefinierte Steuerungselement aktuell nutzlos und hat keine Funktion: Lassen Sie uns die Situation mit JavaScript verbessern.

## Verwendung der Media-API

HTML enthält eine JavaScript [Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern Zugang und Kontrolle über HTML-Medien ermöglicht. Diese API wird verwendet, damit das oben definierte benutzerdefinierte Steuerungselement tatsächlich etwas tut. Zusätzlich wird die Vollbildtaste die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbild anzuzeigen.

### Einrichtung

Bevor die einzelnen Tasten behandelt werden, sind einige Initialisierungsaufrufe erforderlich.

Zu Beginn ist es ratsam, zuerst zu überprüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt und die benutzerdefinierten Steuerungen nur einzurichten, wenn es der Fall ist. Dies wird überprüft, indem festgestellt wird, ob ein erstelltes {{ htmlelement("video") }}-Element [die Methode `canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, was jedes unterstützte HTML {{ htmlelement("video") }}-Element tun sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Sobald bestätigt wurde, dass der Browser HTML-Video tatsächlich unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerungen einzurichten. Es werden Variablen benötigt, die auf HTML-Elemente zeigen:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen nun die standardmäßigen Steuerungen des Browsers deaktiviert und die benutzerdefinierten Steuerungen angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Damit ist eine Variable erforderlich, die auf jede der Tasten zeigt:

```js
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mithilfe dieser Verweise können nun Ereignisse an jede der benutzerdefinierten Steuerungstasten angehängt werden, um sie interaktiv zu machen. Die meisten dieser Tasten benötigen einen einfachen `click`-Ereignislistener, der hinzugefügt wird, und eine von der Media-API definierte Methode und/oder Attribute werden bei dem Video aufgerufen/geprüft.

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

Wenn ein `click`-Ereignis auf der Abspielen/Pausetaste erkannt wird, überprüft der Handler zunächst, ob das Video derzeit pausiert ist oder beendet wurde (über die `paused` und `ended`-Attribute der Media-API); falls ja, wird die Methode `play()` verwendet, um das Video abzuspielen. Andernfalls muss das Video abgespielt werden, sodass es mit der Methode `pause()` pausiert wird.

### Stopp

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher wird das Video, um dies zu imitieren, pausiert und sein `currentTime` (d. h. die aktuelle Abspielposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements wird auf 0 gesetzt (mehr zum {{ htmlelement("progress") }}-Element später).

### Stummschalten

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummtaste ist eine einfache Umschalttaste, die das `muted`-Attribut der Media-API verwendet, um das Video stummzuschalten: Dies ist ein boolescher Wert, der angibt, ob das Video stummgeschaltet ist oder nicht. Um sie umzuschalten, wird sie auf das Inverse von sich selbst gesetzt.

### Lautstärke

```js
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Es wurden zwei Lautstärkereglertasten definiert, eine zum Erhöhen der Lautstärke und eine zum Verringern. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die dies bearbeitet:

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

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos enthält. Gültige Werte für dieses Attribut sind 0 und 1 sowie alles dazwischen. Die Funktion prüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0,1 erhöht oder verringert und sicherstellt, dass es nicht niedriger als 0 oder höher als 1 wird.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element oben im HTML definiert wurde, wurden nur zwei Attribute gesetzt: `value` und `min`, die beide auf 0 gesetzt wurden. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal zulässigen Wert des `progress`-Elements angibt und `value` seinen aktuellen Wert. Es muss auch einen Maximalwert haben, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Dies wird aus dem `duration`-Attribut des Videos gewonnen, das ebenfalls Teil der Media-API ist.

Idealerweise liegt der korrekte Wert des `duration`-Attributs des Videos vor, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann es bei einigen mobilen Browsern vorkommen, dass, wenn `loadedmetadata` ausgelöst wird – falls es überhaupt _ausgelöst_ wird – `video.duration` möglicherweise nicht den korrekten Wert hat oder gar keinen Wert. Daher muss etwas anderes unternommen werden. Mehr dazu weiter unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich ideal zum Aktualisieren des Werts des Fortschrittsbalkens, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, das angibt, wie weit das aktuelle Abspielen im Video fortgeschritten ist.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Da das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf das `currentTime` des Videos gesetzt. Dieser Bereich hat eine solide CSS-Hintergrundfarbe, die ihm hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu geben.

Zurück zum oben erwähnten `video.duration`-Problem: Wenn das `timeupdate`-Ereignis ausgelöst wird, sollte in den meisten mobilen Browsern das `duration`-Attribut des Videos jetzt den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements festzulegen, falls es derzeit nicht gesetzt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Weitere Informationen und Ideen zu Fortschrittsbalken und Buffering-Feedback finden Sie unter [Medien-Buffering, Suchen und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspringen

Ein weiteres Merkmal von den meisten standardmäßigen Videosteuerungselementen des Browsers ist die Möglichkeit, auf die Fortschrittsleiste des Videos zu klicken, um "vorzuspulen" zu einem anderen Punkt im Video. Dies kann auch erreicht werden, indem ein einfaches `click`-Ereignis zu dem `progress`-Element hinzugefügt wird:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieser Code verwendet die geklickte Position, um (grob) zu ermitteln, wo im `progress`-Element der Benutzer geklickt hat, und das Video auf diese Position zu bewegen, indem das `currentTime`-Attribut gesetzt wird.

### Vollbildmodus

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf einen Knopf, befinde sich das Video im Vollbildmodus: breche ab, andernfalls betrete den Vollbildmodus.

Der Vollbildknopf ist verborgen, wenn die Fullscreen-API nicht aktiviert ist:

```js
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Der Vollbildknopf muss tatsächlich etwas tun. Wie bei den anderen Knöpfen wird ein `click`-Ereignis-Handler angehängt, der eine benutzerdefinierte Funktion `handleFullscreen` aufruft:

```js
fullscreen.addEventListener("click", (e) => {
  handleFullscreen();
});
```

Die Funktion `handleFullscreen` wird folgendermaßen definiert:

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

Wenn der Browser sich derzeit im Vollbildmodus befindet, dann muss er verlassen werden und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu beenden/abzubrechen, während jedes HTML-Element den Vollbildmodus anfordern kann, hier wird `videoContainer` verwendet, da sie auch die benutzerdefinierten Steuerungen enthält, die ebenfalls mit dem Video im Vollbildmodus erscheinen sollen.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs auf `videoContainer` setzt (dies nutzt [`data-states`](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Dies wird verwendet, um einige grundlegende CSS anzuwenden, um das Styling der benutzerdefinierten Steuerungen zu verbessern, wenn sie im Vollbildmodus sind (siehe den Beispielcode für weitere Details). Wenn ein Video in den Vollbildmodus wechselt, zeigt es normalerweise eine Nachricht an, die angibt, dass der Benutzer die _Esc_-Taste drücken kann, um den Vollbildmodus zu verlassen, daher muss der Code auf relevante Ereignisse hören, um die `setFullscreenData()`-Funktion aufzurufen und sicherzustellen, dass das Kontrollstyling korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für weitere Techniken
- [Medienformate, die von den HTML-Audio- und -Videoelementen unterstützt werden](/de/docs/Web/Media/Formats)
