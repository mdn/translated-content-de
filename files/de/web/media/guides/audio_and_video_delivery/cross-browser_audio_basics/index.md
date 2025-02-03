---
title: Grundlagen für plattformübergreifendes Audio
slug: Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit Erklärungen zu allen zugehörigen Attributen, Eigenschaften und Ereignissen
- einen Leitfaden für benutzerdefinierte Steuerelemente, die mit der Media API erstellt wurden

## Einfaches Audio-Beispiel

Der folgende Code ist ein Beispiel für eine grundlegende Audioimplementierung mit HTML5:

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
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)-codiertes Audio. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die MP3 unterstützen, auch MP4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen — das machen wir, da nicht alle Browser dieselben Audioformate unterstützen. Um eine angemessene Abdeckung zu gewährleisten, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir tun dies mit dem {{ htmlelement("source") }}-Element, das die Attribute `src` und `type` verwendet.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, werden die meisten Browser versuchen, dies aus der Dateiendung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Allerdings werden alle unterstützten Texte oder Elemente, die Sie innerhalb von {{ htmlelement("audio") }} definieren, angezeigt oder entsprechend behandelt. Daher ist der ideale Ort, um einen Fallback zu erstellen oder über Inkompatibilität zu informieren, vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen einfachen Absatz mit einem Link zum direkten Herunterladen des Audios bereitgestellt.
- Das `controls`-Attribut im {{ htmlelement("audio") }}-Element wird angegeben, wenn wir vom Browser verlangen, dass er uns Standardwiedergabesteuerungen bereitstellt. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerungen angezeigt — und Sie müssen stattdessen Ihre eigenen Steuerungen erstellen und deren Funktionalität mit der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standardsteuerungen in verschiedenen Browsern unterschiedlich aussehen. Durch das Erstellen eigener Steuerungen wird ein konsistentes Aussehen der Steuerungen über alle Browser hinweg sichergestellt.

## HTML Audio im Detail

Nachdem wir uns ein grundlegendes Beispiel angesehen haben, wollen wir nun die verschiedenen Aspekte von HTML-Audio im Detail erkunden.

### Audio-HTML-Attribute

Wir können eine Reihe von Attributen mit dem Audio-Element angeben, um weiter zu bestimmen, wie Audio initialisiert wird.

#### autoplay

Die Angabe von `autoplay` veranlasst, dass das Audio so schnell wie möglich und ohne Benutzereingriff abgespielt wird — kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, sie ist wirklich notwendig. Automatisch abgespieltes Audio (und Video) ist in der Regel sehr störend. Zudem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen vollständig blockieren. Siehe den [Leitfaden zum automatischen Abspielen für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) für Details.

#### loop

Das `loop`-Attribut stellt sicher, dass das Audio nach dem Erreichen des Endes des Audioclips wieder zum Anfang springt und erneut abgespielt wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stummgeschaltet startet (keine Lautstärke), fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio prelädt, also welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und bevor die Wiedergabetaste gedrückt wird.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor die Wiedergabetaste gedrückt wird.
2. `metadata`: Die Audio-Metadaten herunterladen; das ist in der Regel die beste Option, da es Ihnen ermöglicht, Informationen wie die Audiolänge abzurufen und anzuzeigen und dem Browser zu erlauben, herauszufinden, welche Audiodatei er verwenden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzwerkverbindung haben.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir vom Browser verlangen, dass er uns seine Standardwiedergabesteuerungen bereitstellt.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt auf das {{ htmlelement("audio") }}-Element setzen, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welchen Typ von Datei angegeben wird. Das `type`-Attribut gibt den MIME-Typ oder Internet Media Type der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audioelements mit JavaScript

Zusätzlich zu den verschiedenen Attributen, die im HTML spezifiziert werden können, verfügt das {{ htmlelement("audio") }}-Element über mehrere Eigenschaften und Methoden, die Sie per JavaScript manipulieren können.

Angesichts des folgenden HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{htmlelement("audio") }}-Element folgendermaßen abrufen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für die Erstellung eines {{ htmlelement("audio") }}-Elements, das Abspielen und Pausieren des Mediums sowie das Abspielen ab 5 Sekunden in das Audio:

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

Die Methode `play()` wird verwendet, um dem Audio mitzuteilen, dass es abgespielt werden soll. Sie nimmt keine Parameter an.

```js
audio.play();
```

#### pause

Die Methode `pause()` wird verwendet, um dem Audio mitzuteilen, dass es pausiert werden soll. Sie nimmt keine Parameter an.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stopp-Methode — um eine Stopp-Funktion zu implementieren, müssten Sie das Medium pausieren und dann den Wert der Eigenschaft [`currentTime`](#currenttime) auf 0 setzen.

#### canPlayType

Die Methode `canPlayType()` fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den MIME-Typ der zu prüfenden Datei als Parameter.

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

In der Praxis prüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Zeichenfolgen sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation sah vor, dass der Browser `no` statt eines leeren Strings zurückgeben sollte, aber glücklicherweise ist die Anzahl der Personen, die ältere Browser verwenden, die diese Version der Spezifikation implementieren, sehr gering.

#### currentTime

Die Eigenschaft `currentTime` holt oder setzt die aktuelle Zeit, zu der das Audio abgespielt werden soll. Dies ist in vielerlei Hinsicht nützlich, zum Beispiel, da `play()` keinen Parameter akzeptiert, müssen wir den Zeitpunkt, ab dem abgespielt werden soll, separat einstellen, wenn wir nicht möchten, dass er 0 ist.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die Eigenschaft `volume` ermöglicht es uns, die Lautstärke des Audios als Zahl zwischen 0 und 1 einzustellen.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen eines eigenen benutzerdefinierten Audioplayers

Die JavaScript Media API ermöglicht es Ihnen, einen eigenen benutzerdefinierten Player zu erstellen. Werfen wir einen Blick auf ein sehr minimales Beispiel. Wir können HTML und JavaScript kombinieren, um einen sehr einfachen Player mit einer Wiedergabe- und einer Pausetaste zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerungen erstellen:

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

Als nächstes fügen wir dem Player Funktionalität mittels JavaScript hinzu:

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

## Ereignisse beim Laden von Medien

Oben haben wir gezeigt, wie Sie einen sehr einfachen Audioplayer erstellen können, aber was ist, wenn wir Fortschritt, Puffern anzeigen und die Tasten erst aktivieren möchten, wenn das Medium bereit zum Abspielen ist? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir verwenden können, um unseren Player genau wissen zu lassen, was passiert.

Zuerst werfen wir einen Blick auf den Prozess des Medienladens in der Reihenfolge:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladevorgang begonnen hat und der Browser eine Verbindung zum Medium herstellt.

```js
audio.addEventListener("loadstart", () => {
  //grabbing the file
});
```

### durationchange

Wenn Sie als erstes wissen möchten, sobald die Dauer Ihres Mediums feststeht, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der Anfangswert für die Dauer `NaN` (Not a Number) ist, den Sie wahrscheinlich nicht Ihren Benutzern anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  //you can display the duration now
});
```

### loadedmetadata

Metadaten können mehr als nur Dauer umfassen — wenn Sie warten möchten, bis alle Metadaten heruntergeladen wurden, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  //you can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück des Mediums eintrifft. Der Lesekopf ist in Position, aber noch nicht ganz bereit zum Abspielen.

```js
audio.addEventListener("loadeddata", () => {
  //you could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download des Mediums noch im Gange ist. Es ist gute Praxis, an dieser Stelle eine Art "Ladeanzeige" anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das erkannt werden sollte, wenn Sie feststellen möchten, ob das Medium bereit zum Abspielen ist. Sie könnten beispielsweise benutzerdefinierte Steuerungen deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  //audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, aber es informiert Sie, dass das Medium bereit ist, vollständig abgespielt zu werden (das heißt, dass die Datei vollständig heruntergeladen wurde oder dass geschätzt wird, dass sie rechtzeitig heruntergeladen wird, so dass keine Pufferschritte auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  //audio is ready to play all the way through
});
```

### Reihenfolge der Medienladeereignisse

Zusammenfassend sind die Reihenfolge der Medienladeereignisse:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Ereignisse zur Unterbrechung des Ladens

Es stehen uns auch einige Ereignisse zur Verfügung, die ausgelöst werden, wenn es zu einer Art Unterbrechung des Medialadevorgangs kommt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download von Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Ein Fehler tritt beim Herunterladen von Mediendaten auf.
- emptied
  - : Der Mediapuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die Methode load() aufgerufen wurde, um ihn neu zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienabspielereignisse

Es gibt noch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis geschieht dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  //update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird initiiert, wenn die Wiedergabe bereit ist anzufangen, nachdem sie aufgrund fehlender Mediendaten pausiert wurde.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund fehlender Mediendaten gestoppt wurde, obwohl erwartet wird, dass sie fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird initiiert, nachdem die Methode `play()` zurückgegeben wurde oder wenn das `autoplay`-Attribut die Wiedergabe verursacht hat. Dies ist, wenn sich der Zustand des Mediums von "pausiert" zu "abspielend" ändert.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die Methode `pause()` zurückgegeben wurde. Dies ist, wenn sich die Zustände von "abspielend" zu "pausiert" ändern.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende des Mediums erreicht ist.

```js
audio.addEventListener("ended", () => {
  //do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat; dazu gehört auch das Stumm- oder Lautschalten.

## Ein Audioplayer mit Feedback

Betrachten Sie diesen HTML-Ausschnitt:

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
  <button id="play" style="display:none">play</button>
  <button id="pause" style="display:none">pause</button>
</div>
<div id="progress">
  <div id="bar"></div>
</div>
```

So gestylt:

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
```

Jetzt verbinden wir das Ganze mit JavaScript:

```js
window.onload = () => {
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
};
```

Sie sollten am Ende etwas Ähnliches erhalten:

![Ein einfacher Audioplayer mit Wiedergabe-/Pause-Schaltfläche und Suchleiste](simpleplayer.png)

### Navigation mit der Suchleiste

Das ist ein guter Anfang, aber es wäre schön, die Navigation durch das Audio über die Fortschrittsleiste zu ermöglichen. Glücklicherweise ist es nicht allzu schwer, dies zu implementieren.

Zuerst wenden wir ein schnelles Update auf die CSS der Fortschrittsleiste an, um die Mauszeiger-Handanzeige bei Hover anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'Abspielkopf' an die richtige Position bewegt:

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

Ok, wir kommen der Sache näher, aber es gibt noch eine weitere nützliche Information, die wir anzeigen können: die Menge des Audios, das gepuffert oder im Voraus heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft informiert uns darüber, welche Teile des Audios gepuffert wurden (im Voraus heruntergeladen wurden). Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die Eigenschaft `seekable` informiert Sie darüber, ob Sie direkt zu diesem Teil des Mediums springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Puffer-Ereignisse

Es gibt auch ein paar Ereignisse, die sich auf das Puffern beziehen:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn das Medium gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut auf `false` ändert.

> [!NOTE]
> Weitere Informationen zu [Pufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges) finden Sie an anderer Stelle.

## Siehe auch

- [Pufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
