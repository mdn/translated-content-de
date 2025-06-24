---
title: Cross-Browser-Audio-Grundlagen
slug: Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit allen dazugehörigen Attributen, Eigenschaften und Ereignissen erklärt
- einen Leitfaden zu benutzerdefinierten Steuerungen, die mit der Media API erstellt werden

## Einfaches Audio-Beispiel

Der folgende Code ist ein Beispiel für eine einfache Audioimplementierung mit HTML5:

```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg" />
  <source src="audio-file.ogg" type="audio/ogg" />
  <!-- fallback for non-supporting browsers goes here -->
  <p>
    Your browser does not support HTML audio, but you can still
    <a href="audio-file.mp3">download the music</a>.
  </p>
</audio>
```

> [!NOTE]
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)-kodierte Audiodaten. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen - wir tun dies, da nicht alle Browser dieselben Audioformate unterstützen. Um eine angemessene Abdeckung sicherzustellen, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir tun dies mit dem {{ htmlelement("source") }}-Element, das die Attribute `src` und `type` verwendet.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wird es weggelassen, versuchen die meisten Browser, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Alle unterstützten Texte oder Elemente, die Sie innerhalb von {{ htmlelement("audio") }} definieren, werden jedoch angezeigt oder bearbeitet. Der ideale Ort, um einen Fallback zu erstellen oder über Inkompatibilität zu informieren, ist vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen Absatz mit einem Link bereitgestellt, um das Audio direkt herunterzuladen.
- Das `controls`-Attribut im {{ htmlelement("audio") }}-Element wird angegeben, wenn wir vom Browser die Bereitstellung von Standard-Steuerelementen für die Wiedergabe benötigen. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerelemente angezeigt - und Sie müssen stattdessen Ihre eigenen Steuerelemente erstellen und deren Funktionalität mit der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standard-Steuerelemente in verschiedenen Browsern unterschiedlich aussehen. Das Erstellen eigener Steuerelemente stellt sicher, dass die Steuerelemente in allen Browsern konsistent aussehen.

## HTML-Audio im Detail

Nachdem wir uns ein einfaches Beispiel angesehen haben, lassen Sie uns die verschiedenen Aspekte von HTML-Audio genauer erkunden.

### Audio-HTML-Attribute

Wir können dem Audioelement eine Reihe von Attributen zuweisen, um die Initialisierung von Audio weiter zu steuern.

#### autoplay

Die Angabe von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne Benutzereingriff abgespielt wird - kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert und seine Verwendung wird nicht empfohlen, es sei denn, er ist wirklich notwendig. Audio (und Video), das automatisch abgespielt wird, ist normalerweise wirklich störend. Außerdem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen vollständig blockieren. Einzelheiten finden Sie im [Leitfaden zum automatischen Abspielen für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

#### loop

Das `loop`-Attribut stellt sicher, dass die Audiowiedergabe am Ende des Clips wieder zum Anfang springt und von vorne gestartet wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stummgeschaltet gestartet wird (keine Lautstärke), fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio vorlädt, d.h. welchen Teil der Datei er bei der Initialisierung des {{ htmlelement("audio") }}-Elements herunterlädt, und bevor die Wiedergabetaste gedrückt wird.

`preload` kann drei verschiedene Werte annehmen:

1. `none`: Vor dem Drücken der Wiedergabetaste wird nichts heruntergeladen.
2. `metadata`: Lädt die Audiometadaten herunter; dies ist normalerweise die beste Option, da sie Ihnen den Zugriff und die Anzeige von Informationen wie die Audiolänge ermöglicht und den Browser herausfinden lässt, welche Audiodatei er verwenden soll.
3. `auto`: Lädt die gesamte Audiodatei so schnell wie möglich herunter. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzwerkverbindung haben.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir vom Browser die Bereitstellung seiner Standard-Wiedergabesteuerungen benötigen.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt im {{ htmlelement("audio") }}-Element verwenden, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welcher Dateityp angegeben wird. Das `type`-Attribut gibt den MIME-Typ oder den Internet Media Type der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audio-Elements mit JavaScript

Neben der Möglichkeit, verschiedene Attribute in HTML anzugeben, enthält das {{ htmlelement("audio") }}-Element mehrere Eigenschaften und Methoden, die Sie über JavaScript manipulieren können.

Gegeben ist das folgende HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{ htmlelement("audio") }}-Element auf diese Weise erfassen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für die Erstellung eines {{ htmlelement("audio") }}-Elements, das Medium festlegen, abspielen und pausieren und dann ab 5 Sekunden im Audio abspielen:

```js
const audio = document.createElement("audio");

if (audio.canPlayType("audio/mpeg")) {
  audio.setAttribute("src", "audio-file.mp3");
}

if (audio.canPlayType("audio/ogg")) {
  audio.setAttribute("src", "audio-file.ogg");
}

alert("play");

audio.play();

alert("stop");

audio.pause();

alert("play from 5 seconds in");

audio.currentTime = 5;
audio.play();
```

Lassen Sie uns die verfügbaren Eigenschaften und Methoden im Detail erkunden.

#### play

Die Methode `play()` wird verwendet, um das Audio abzuspielen. Sie nimmt keine Parameter.

```js
audio.play();
```

#### pause

Die Methode `pause()` wird verwendet, um das Audio anzuhalten. Sie nimmt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stopp-Methode - um eine Stopp-Funktion zu implementieren, müssen Sie die Medien pausieren und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die Methode `canPlayType()` fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den MIME-Typ des zu überprüfenden Typs als Parameter.

```js
if (audio.canPlayType("audio/mpeg")) {
  // It's supported.
  // Do something here!
}
```

`canPlayType()` gibt einen von drei Werten zurück:

1. `probably`
2. `maybe`
3. "" (ein leerer String)

In der Praxis überprüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Strings sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation sah vor, dass der Browser `no` anstelle eines leeren Strings zurückgeben sollte, aber zum Glück ist die Anzahl der Menschen, die ältere Browser verwenden, die diese Spezifikation implementieren, gering.

#### currentTime

Die `currentTime`-Eigenschaft ruft die aktuelle Wiedergabezeit des Audios ab oder legt sie fest. Dies ist auf viele Arten nützlich, da `play()` keinen Parameter annimmt und wir den Startpunkt separat festlegen müssen, wenn er nicht 0 sein soll.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden repräsentiert.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Mit der `volume`-Eigenschaft können wir die Lautstärke des Audios auf eine Zahl zwischen 0 und 1 einstellen.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen eines eigenen benutzerdefinierten Audioplayers

Die JavaScript-Media-API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Werfen wir einen Blick auf ein sehr minimales Beispiel. Wir können HTML und JavaScript kombinieren, um einen Player mit einem Wiedergabe- und einem Pausenschalter zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerungen erstellen:

```html
<audio id="my-audio">
  <source src="audio-file.mp3" type="audio/mpeg" />
  <source src="audio-file.ogg" type="audio/ogg" />
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <p>Download<a href="audio-file.mp3">audio-file.mp3</a></p>
</audio>

<!-- custom play and pause buttons -->
<button id="play">play</button>
<button id="pause">pause</button>
```

Als nächstes fügen wir dem Player mit JavaScript Funktionalität hinzu:

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");

  // associate functions with the 'onclick' events
  play.onclick = playAudio;
  pause.onclick = pauseAudio;

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }
};
```

## Medien-Ladevorgänge

Oben haben wir gezeigt, wie Sie einen Audioplayer erstellen können. Aber was ist, wenn wir den Fortschritt anzeigen, Puffern und die Tasten nur aktivieren wollen, wenn die Medien bereit zum Abspielen sind? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir verwenden können, um unseren Player genau wissen zu lassen, was gerade passiert.

Zuerst werfen wir einen Blick auf den Prozess des Medienladens in der Reihenfolge:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess gestartet wurde und der Browser eine Verbindung zu den Medien herstellt.

```js
audio.addEventListener("loadstart", () => {
  // Grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihrer Medien festgelegt ist, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der Anfangswert von Dauer `NaN` (Not a Number) ist, was Sie Ihren Benutzern wahrscheinlich nicht anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  // You can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr als nur der Dauer bestehen - wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  // You can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück Medien ankommt. Der Wiedergabekopf ist positioniert, aber noch nicht ganz bereit zum Abspielen.

```js
audio.addEventListener("loadeddata", () => {
  // You could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download der Medien noch im Gange ist. Es ist gute Praxis, an dieser Stelle eine Art "Lader" anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das erkannt werden sollte, wenn Sie feststellen möchten, ob die Medien abspielbereit sind. Sie könnten z.B. benutzerdefinierte Steuerungen deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  // Audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist dem `canplay` ähnlich, informiert Sie jedoch darüber, dass die Medien bereit sind, ganz durchgespielt zu werden (d.h. dass die Datei vollständig heruntergeladen wurde oder geschätzt wird, dass sie rechtzeitig heruntergeladen wird, damit keine Pufferungsunterbrechungen auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  // Audio is ready to play all the way through
});
```

### Reihenfolge der Medienlade-Ereignisse

Zusammenfassend folgt die Reihenfolge der Medienlade-Ereignisse:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Unterbrechungen beim Laden

Wir haben auch einige Ereignisse zur Verfügung, die ausgelöst werden, wenn es zu einer Unterbrechung des Medienladeprozesses kommt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download der Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Ein Fehler tritt beim Herunterladen von Mediendaten auf.
- emptied
  - : Der Medienpuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die Methode load() aufgerufen wurde, um ihn neu zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabe-Ereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis geschieht dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  // Update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird initiiert, wenn die Wiedergabe bereit ist, zu starten, nachdem sie aufgrund fehlender Mediendaten angehalten wurde.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund fehlender Mediendaten gestoppt wurde, obwohl erwartet wird, dass sie fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird initiiert, nachdem die Methode `play()` zurückgegeben wurde oder wenn das `autoplay`-Attribut dazu geführt hat, dass die Wiedergabe beginnt. Dies ist der Moment, in dem der Zustand der Medien von pausiert zu spielend wechselt.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die Methode `pause()` zurückgegeben wurde. Dies ist der Moment, in dem der Zustand von spielt zu pausiert wechselt.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende der Medien erreicht ist.

```js
audio.addEventListener("ended", () => {
  // Do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis signalisiert, dass sich die Lautstärke geändert hat, einschließlich der Stummschaltung.

## Ein Audioplayer mit Rückmeldung

Berücksichtigen Sie diesen HTML-Code-Ausschnitt:

```html
<audio id="my-audio">
  <source
    src="http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3"
    type="audio/mpeg" />
  <source
    src="http://jPlayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    type="audio/ogg" />
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <a href="audio-file.mp3">audio-file.mp3</a>
</audio>

<div id="controls">
  <span id="loading">loading</span>
  <button id="play">play</button>
  <button id="pause">pause</button>
</div>
<div id="progress">
  <div id="bar"></div>
</div>
```

Gestaltet wie folgt:

```css
#controls {
  width: 80px;
  float: left;
}

#progress {
  margin-left: 80px;
  border: 1px solid black;
}

#bar {
  height: 20px;
  background-color: green;
  width: 0;
}

#play,
#pause {
  display: none; /* hide until media is ready */
}
```

Nun verbinden wir das Ganze mit JavaScript:

```js
const audio = document.getElementById("my-audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const loading = document.getElementById("loading");
const bar = document.getElementById("bar");

function displayControls() {
  loading.style.display = "none";
  play.style.display = "block";
}

// Check that the media is ready before displaying the controls
if (audio.paused) {
  displayControls();
} else {
  // not ready yet - wait for canplay event
  audio.addEventListener("canplay", () => {
    displayControls();
  });
}

play.addEventListener("click", () => {
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
});

pause.addEventListener("click", () => {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "block";
});

// Display progress
audio.addEventListener("timeupdate", () => {
  // Sets the percentage
  bar.style.width = `${Math.floor(
    (audio.currentTime / audio.duration) * 100,
  )}%`;
});
```

Sie sollten am Ende etwas wie dieses haben:

![Ein einfacher Audioplayer mit Abspiel-/Pause-Schalter und Suchleiste](simpleplayer.png)

### Suchen mit der Suchleiste

Das ist ein guter Anfang, aber es wäre schön, in der Lage zu sein, durch das Audio mit der Fortschrittsleiste zu navigieren. Zum Glück ist es nicht allzu schwer, dies zu implementieren.

Zuerst führen wir ein schnelles Update des CSS der Fortschrittsleiste durch, um beim Überfahren den Handzeiger anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'playhead' in die richtige Position bewegt:

```js
const progress = document.getElementById("progress");

progress.addEventListener("click", (e) => {
  // Calculate the normalized position clicked
  const clickPosition = (e.pageX - progress.offsetLeft) / progress.offsetWidth;
  const clickTime = clickPosition * audio.duration;

  // Move the playhead to the correct position
  audio.currentTime = clickTime;
});
```

### Puffern

Okay, wir nähern uns, aber es gibt noch eine andere nützliche Information, die wir anzeigen können: die Menge an Audio, die bereits gepuffert oder im Voraus heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben: `buffered` und `seekable`.

#### buffered

Diese Eigenschaft lässt uns wissen, welche Teile des Audios gepuffert wurden (im Voraus heruntergeladen). Sie gibt ein Objekt namens `TimeRanges` zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die Eigenschaft `seekable` informiert Sie darüber, ob Sie direkt zu diesem Teil der Medien springen können, ohne weitere Puffervorgänge.

```js
seekableTimeRanges = audio.seekable;
```

#### Puffervorgänge

Es gibt auch ein paar Ereignisse, die sich auf das Puffern beziehen:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn Medien gesucht werden.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut auf `false` ändert.

> [!NOTE]
> Sie können mehr über [Puffern, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges) an anderer Stelle lesen.

## Siehe auch

- [Puffern, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
