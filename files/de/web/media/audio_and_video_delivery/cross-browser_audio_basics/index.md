---
title: Grundlegendes zu plattformübergreifendem Audio
slug: Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit allen zugehörigen Attributen, Eigenschaften und Ereignissen
- einen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt werden

## Einfaches Audio-Beispiel

Der folgende Code ist ein Beispiel für eine grundlegende Audio-Implementierung mit HTML5:

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg" />
  <source src="audiofile.ogg" type="audio/ogg" />
  <!-- fallback for non-supporting browsers goes here -->
  <p>
    Your browser does not support HTML audio, but you can still
    <a href="audiofile.mp3">download the music</a>.
  </p>
</audio>
```

> [!NOTE]
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://de.wikipedia.org/wiki/Advanced_Audio_Coding)-kodierten Ton. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die MP3 unterstützen, auch MP4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen — dies tun wir, da nicht alle Browser dieselben Audioformate unterstützen. Um eine angemessene Abdeckung sicherzustellen, sollten wir mindestens zwei unterschiedliche Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind MP3 und Ogg Vorbis.
- Dies geschieht mithilfe des {{ htmlelement("source") }}-Elements, das die Attribute `src` und `type` übernimmt.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, versuchen die meisten Browser, dies anhand der Dateiendung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Jedoch wird jeder unterstützte Text oder jedes Element, das Sie innerhalb von {{ htmlelement("audio") }} definieren, angezeigt oder ausgeführt. Daher ist der ideale Ort, um ein Fallback zu erstellen oder über Inkompatibilität zu informieren, vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen einfachen Absatz mit einem Link zum direkten Herunterladen des Audios bereitgestellt.
- Das `controls`-Attribut im {{ htmlelement("audio") }}-Element wird angegeben, wenn wir möchten, dass der Browser uns die standardmäßigen Wiedergabesteuerelemente bereitstellt. Wenn Sie dieses Attribut nicht angeben, erscheinen keine Steuerelemente — und stattdessen müssen Sie Ihre eigenen Steuerelemente erstellen und deren Funktionalität mit der Media API programmieren (siehe unten). Das kann jedoch ein guter Ansatz sein, da die Standard-Steuerelemente in verschiedenen Browsern unterschiedlich aussehen. Das Erstellen eigener Steuerelemente stellt sicher, dass die Steuerelemente in allen Browsern einheitlich aussehen.

## HTML-Audio im Detail

Nachdem wir uns ein einfaches Beispiel angesehen haben, lassen Sie uns nun die verschiedenen Aspekte von HTML-Audio im Detail erkunden.

### Audio-HTML-Attribute

Wir können dem Audio-Tag eine Reihe von Attributen zuweisen, um weiter zu bestimmen, wie Audio initialisiert wird.

#### autoplay

Das Angeben von `autoplay` bewirkt, dass die Audiodatei so schnell wie möglich und ohne Benutzereingriff startet — kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert, und seine Verwendung ist nicht empfohlen, es sei denn, es ist wirklich notwendig. Automatisch abgespieltes Audio (und Video) ist normalerweise wirklich störend. Außerdem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen ganz blockieren. Siehe den [Leitfaden zum automatischen Abspielen von Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) für Details.

#### loop

Das `loop`-Attribut stellt sicher, dass beim Erreichen des Endes des Audioclips der Audioclip zum Anfang zurückkehrt und erneut abgespielt wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stummgeschaltet (ohne Lautstärke) startet, fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz anzugeben, wie der Browser das Audio pre-cachen soll, mit anderen Worten, welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und bevor der Wiedergabeknopf gedrückt wird.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor der Wiedergabeknopf gedrückt wird.
2. `metadata`: Die Audiometadaten herunterladen; dies ist normalerweise die beste Option, da es ermöglicht, Informationen wie Audiolänge anzuzeigen und den Browser herausfinden lässt, welche Audiodatei er verwenden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzwerkverbindung haben.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir möchten, dass der Browser uns seine Standardwiedergabesteuerelemente bereitstellt.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt im {{ htmlelement("audio") }}-Element verwenden, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audiofile.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welcher Dateityp angegeben wird. Das `type`-Attribut gibt den MIME-Typ oder den Internet Media Type der Datei an.

```html
<audio src="audiofile.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audio-Elements mit JavaScript

Zusätzlich zur Möglichkeit, verschiedene Attribute in HTML anzugeben, verfügt das {{ htmlelement("audio") }}-Element über mehrere Eigenschaften und Methoden, die Sie über JavaScript manipulieren können.

Gegeben ist das folgende HTML:

```html
<audio id="my-audio" src="audiofile.mp3">…</audio>
```

Sie können das {{ htmlelement("audio") }}-Element so abrufen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel zum Erstellen eines {{ htmlelement("audio") }}-Elements, zum Festlegen des abzuspielenden Mediums, zum Abspielen und Pausieren und zum Abspielen ab 5 Sekunden im Audio:

```js
const audio = document.createElement("audio");

if (audio.canPlayType("audio/mpeg")) {
  audio.setAttribute("src", "audiofile.mp3");
}

if (audio.canPlayType("audio/ogg")) {
  audio.setAttribute("src", "audiofile.ogg");
}

alert("play");

audio.play();

alert("stop");

audio.pause();

alert("play from 5 seconds in");

audio.currentTime = 5;
audio.play();
```

Lassen Sie uns die verfügbaren Eigenschaften und Methoden genauer erkunden.

#### play

Die `play()`-Methode wird verwendet, um das Audio abzuspielen. Sie benötigt keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um das Audio zu pausieren. Sie benötigt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stopp-Methode — um eine Stopp-Funktion zu implementieren, müssten Sie das Medium pausieren und dann den Wert der [`currentTime`](#currenttime) Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den mime-Typ des zu überprüfenden Typs als Parameter.

```js
if (audio.canPlayType("audio/mpeg")) {
  // It's supported.
  // Do something here!
}
```

`canPlayType()` gibt einen von drei Werten zurück:

1. `probably`
2. `maybe`
3. "" (eine leere Zeichenfolge)

In der Praxis prüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Zeichenfolgen sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation sah vor, dass der Browser `no` statt einer leeren Zeichenfolge zurückgeben sollte, aber glücklicherweise gibt es nur wenige Leute, die ältere Browser verwenden, die diese Version der Spezifikation implementieren.

#### currentTime

Die `currentTime`-Eigenschaft ruft die aktuelle Zeit ab oder setzt sie, zu der das Audio abgespielt werden soll. Dies ist auf viele Arten nützlich, zum Beispiel da `play()` keinen Parameter nimmt, müssen wir den Punkt zum Abspielen separat setzen, wenn er nicht 0 sein soll.

Der Wert von `currentTime` ist eine Nummer, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft ermöglicht es uns, die Lautstärke des Audios einzustellen, als eine Zahl zwischen 0 und 1.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen Ihres eigenen benutzerdefinierten Audioplayers

Die JavaScript Media API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Werfen wir einen Blick auf ein sehr minimales Beispiel. Wir können HTML und JavaScript kombinieren, um einen sehr einfachen Player mit einem Abspiel- und einem Pausenknopf zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerelemente erstellen:

```html
<audio id="my-audio">
  <source src="audiofile.mp3" type="audio/mpeg" />
  <source src="audiofile.ogg" type="audio/ogg" />
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <p>Download<a href="audiofile.mp3">audiofile.mp3</a></p>
</audio>

<!-- custom play and pause buttons -->
<button id="play">play</button>
<button id="pause">pause</button>
```

Als nächstes fügen wir der Funktionalität des Players mit JavaScript hinzu:

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

## Medienladeereignisse

Oben haben wir gezeigt, wie Sie einen sehr einfachen Audioplayer erstellen können, aber was ist, wenn wir Fortschritte anzeigen, puffern und die Schaltflächen nur aktivieren möchten, wenn das Medium bereit zum Abspielen ist? Glücklicherweise gibt es eine Reihe von Ereignissen, die uns wissen lassen, was genau passiert.

Zuerst schauen wir uns den Medienladeprozess in der Reihenfolge an:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladevorgang begonnen hat und der Browser mit dem Medium verbinden.

```js
audio.addEventListener("loadstart", () => {
  //grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihres Mediums festgelegt ist, ist dies das Ereignis für Sie. Dies kann nützlich sein, weil der anfängliche Wert für die Dauer `NaN` (Nicht eine Nummer) ist, den Sie wahrscheinlich nicht Ihren Benutzern anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  //you can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr als nur der Dauer bestehen — wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  //you can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Medienstück ankommt. Der Wiedergabekopf ist in Position, aber noch nicht ganz bereit zur Wiedergabe.

```js
audio.addEventListener("loadeddata", () => {
  //you could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download von Medien noch im Gange ist. Es ist gute Praxis, zu diesem Zeitpunkt eine Art 'Ladeanzeige' anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

Das `canplay`-Ereignis ist nützlich, wenn Sie feststellen möchten, ob das Medium bereit zum Abspielen ist. Sie könnten beispielsweise benutzerdefinierte Steuerelemente deaktivieren, bis dieses Ereignis auftritt.

```js
audio.addEventListener("canplay", () => {
  //audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, aber es teilt Ihnen mit, dass das Medium bereit ist, vollständig abgespielt zu werden (das heißt, die Datei wurde vollständig heruntergeladen, oder es wird geschätzt, dass sie rechtzeitig heruntergeladen wird, sodass Pufferstopps nicht auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  //audio is ready to play all the way through
});
```

### Reihenfolge der Medienladeereignisse

Um zusammenzufassen, die Reihenfolge der Medienladeereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Unterbrechungsereignisse beim Laden

Wir haben auch einige Ereignisse, die ausgelöst werden, wenn es eine Art Unterbrechung im Medienladeprozess gibt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download der Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Beim Herunterladen der Mediendaten ist ein Fehler aufgetreten.
- emptied
  - : Der Mediapuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die load()-Methode erneut aufgerufen wurde.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabeereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis passiert dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  //update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird ausgelöst, wenn die Wiedergabe nach einer Pause aufgrund fehlender Mediadaten startbereit ist.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund fehlender Mediadaten gestoppt wurde, obwohl erwartet wird, dass sie wiederaufgenommen wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird initiiert, nachdem die `play()`-Methode zurückgegeben wurde oder wenn das `autoplay`-Attribut die Wiedergabe verursacht hat. Dies ist der Moment, in dem der Zustand des Mediums von pausiert zu abspielend wechselt.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die `pause()`-Methode zurückgegeben wurde. Dies ist der Moment, in dem der Zustand von abspielend zu pausiert wechselt.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende des Mediums erreicht ist.

```js
audio.addEventListener("ended", () => {
  //do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis signalisiert, dass sich die Lautstärke geändert hat; dazu gehört auch, dass die Lautstärke stummgeschaltet wurde.

## Ein Audioplayer mit Rückmeldung

Betrachten Sie dieses HTML-Fragment:

```html
<audio id="my-audio">
  <source
    src="http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3"
    type="audio/mpeg" />
  <source
    src="http://jPlayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    type="audio/ogg" />
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <a href="audiofile.mp3">audiofile.mp3</a>
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

Stilen Sie es so:

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

Nun verbinden wir das Ganze mit JavaScript:

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

Sie sollten mit etwas wie diesem enden:

![Ein einfacher Audioplayer mit Abspiel-/Pause-Schaltfläche und Suchleiste](simpleplayer.png)

### Suchen mit der Suchleiste

Dies ist ein guter Anfang, aber es wäre schön, wenn man das Audio mit der Fortschrittsleiste navigieren könnte. Glücklicherweise ist dies nicht allzu schwer zu implementieren.

Zuerst nehmen wir eine schnelle Anpassung des CSS der Fortschrittsleiste vor, um den Handzeiger beim Hover anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'Wiedergabekopf' an die richtige Position bewegt:

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

Okay, wir nähern uns, aber es gibt ein weiteres nützliches Stück Information, das wir anzeigen können: die Menge an Audio, das vorgepuffert oder im Voraus heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft informiert uns, welche Teile des Audios vorgepuffert (im Voraus heruntergeladen) wurden. Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die `seekable`-Eigenschaft informiert darüber, ob Sie direkt zu diesem Medienteil springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Puffereignisse

Es gibt auch ein paar Ereignisse, die sich auf das Puffern beziehen:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn nach Medien gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut in `false` ändert.

> [!NOTE]
> Sie können mehr über [Puffern, Suchen und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges) anderswo lesen.

## Siehe auch

- [Puffern, Suchen und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
