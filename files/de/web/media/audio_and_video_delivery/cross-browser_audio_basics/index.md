---
title: Grundlagen zu plattformübergreifendem Audio
slug: Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit allen dazugehörigen Attributen, Eigenschaften und Ereignissen
- einen Leitfaden zu benutzerdefinierten Steuerelementen, die mithilfe der Media API erstellt wurden

## Grundlegendes Audio-Beispiel

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
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)-codierte Audiodateien. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen — dies tun wir, da nicht alle Browser die gleichen Audioformate unterstützen. Um eine angemessene Abdeckung zu gewährleisten, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die größte Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir tun dies mithilfe des {{ htmlelement("source") }}-Elements, das die Attribute `src` und `type` verwendet.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, versuchen die meisten Browser, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Text oder Elemente, die Sie innerhalb von {{ htmlelement("audio") }} definieren, werden jedoch angezeigt oder verarbeitet. Der ideale Ort, um eine Fallback-Nachricht zu erstellen oder auf Inkompatibilität hinzuweisen, befindet sich vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen einfachen Absatz mit einem Link zum direkten Herunterladen des Audios bereitgestellt.
- Das `controls`-Attribut auf dem {{ htmlelement("audio") }}-Element wird angegeben, wenn wir vom Browser verlangen, uns mit den standardmäßigen Wiedergabesteuerungen zu versorgen. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerelemente angezeigt – und Sie müssen stattdessen Ihre eigenen Steuerelemente erstellen und deren Funktionalität mithilfe der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die standardmäßigen Steuerelemente in verschiedenen Browsern unterschiedlich aussehen. Auf diese Weise kann durch das Erstellen eigener Steuerelemente ein einheitliches Erscheinungsbild der Steuerelemente in allen Browsern gewährleistet werden.

## HTML-Audio im Detail

Nachdem wir uns ein grundlegendes Beispiel angesehen haben, lassen Sie uns nun die verschiedenen Aspekte von HTML-Audio genauer untersuchen.

### Audio HTML-Attribute

Wir können dem Audio-Tag eine Reihe von Attributen hinzufügen, um genauer zu bestimmen, wie das Audio initialisiert wird.

#### autoplay

Die Angabe von `autoplay` führt dazu, dass das Audio so schnell wie möglich und ohne Benutzerinteraktion startet – kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, es ist wirklich notwendig. Automatisch abgespielte Medien (Audio und Video) sind normalerweise wirklich nervig. Darüber hinaus haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen vollständig blockieren. Siehe den [Autoplay-Leitfaden für Medien- und Web Audio-APIs](/de/docs/Web/Media/Autoplay_guide) für Details.

#### loop

Das `loop`-Attribut stellt sicher, dass das Audio-Clip nach dem Ende wieder zum Anfang springt und erneut abgespielt wird.

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

Mit dem `preload`-Attribut können Sie eine Vorliebe dafür angeben, wie der Browser das Audio vorlädt, das heißt, welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und bevor die Wiedergabetaste gedrückt wird.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor die Wiedergabetaste gedrückt wird.
2. `metadata`: Die Audio-Metadaten herunterladen; dies ist normalerweise die beste Option, da es Ihnen ermöglicht, Informationen wie die Audiolänge anzuzeigen und dem Browser zu helfen, herauszufinden, welche Audiodatei er verwenden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist in der Regel keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzwerkverbindung haben.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir vom Browser verlangen, uns die standardmäßigen Wiedergabesteuerungen bereitzustellen.

```html
<audio controls>…</audio>
```

#### src

Wie oben bereits erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Audioquellen anzugeben. Alternativ können Sie das `src`-Attribut direkt am {{ htmlelement("audio") }}-Element einfügen, um eine einzelne Quelle anzugeben.

```html
<audio src="audiofile.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welcher Dateityp angegeben wird. Das `type`-Attribut gibt den MIME-Typ oder den Internetmedientyp der Datei an.

```html
<audio src="audiofile.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audio-Elements mit JavaScript

Zusätzlich zur Angabe verschiedener Attribute in HTML wird das {{ htmlelement("audio") }}-Element mit mehreren Eigenschaften und Methoden geliefert, die Sie über JavaScript manipulieren können.

Angenommen, der folgende HTML-Code:

```html
<audio id="my-audio" src="audiofile.mp3">…</audio>
```

Sie können das {{htmlelement("audio") }}-Element so erfassen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für die Erstellung eines {{ htmlelement("audio") }}-Elements, das Medium festlegen, abspielen und anhalten und dann 5 Sekunden in die Wiedergabe starten:

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

Lassen Sie uns die verfügbaren Eigenschaften und Methoden genauer untersuchen.

#### play

Die `play()`-Methode wird verwendet, um das Audio abzuspielen. Sie nimmt keine Parameter an.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um das Audio anzuhalten. Sie nimmt keine Parameter an.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stopp-Methode – um eine Stopp-Funktion zu implementieren, müssen Sie das Medium pausieren und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den MIME-Typ des zu überprüfenden Typs als Parameter an.

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

In der Praxis prüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Strings sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation hat angegeben, dass der Browser `no` anstelle eines leeren Strings zurückgeben sollte, aber glücklicherweise ist die Anzahl der Nutzer älterer Browser, die diese Version der Spezifikation implementieren, sehr gering.

#### currentTime

Die `currentTime`-Eigenschaft ruft die aktuelle Zeit ab oder legt sie fest, zu der das Audio abgespielt werden soll. Dies ist in vielerlei Hinsicht nützlich, beispielsweise, da `play()` keinen Parameter annimmt und wir den Punkt, von dem aus wir abspielen möchten, separat einstellen müssen, wenn er nicht 0 sein soll.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft ermöglicht es uns, die Lautstärke des Audios als eine Zahl zwischen 0 und 1 festzulegen.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen eines eigenen benutzerdefinierten Audioplayers

Die JavaScript Media-API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Schauen wir uns ein sehr minimales Beispiel an. Wir können HTML und JavaScript kombinieren, um einen sehr einfachen Player mit einer Abspiel- und einer Pausentaste zu erstellen. Zunächst richten wir das Audio im HTML ohne das `controls`-Attribut ein, da wir unsere eigenen Steuerelemente erstellen:

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

Als nächstes fügen wir dem Player mittels JavaScript einige Funktionen hinzu:

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

Oben haben wir gezeigt, wie Sie einen sehr einfachen Audioplayer erstellen können, aber was, wenn wir Fortschritte, Puffern anzeigen und die Schaltflächen nur aktivieren wollen, wenn das Medium bereit ist, abgespielt zu werden? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir nutzen können, um unseren Player genau wissen zu lassen, was gerade passiert.

Schauen wir uns zuerst den Medienladeprozess an:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess gestartet wurde und der Browser das Medium verbindet.

```js
audio.addEventListener("loadstart", () => {
  //grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihres Mediums festgelegt ist, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der Anfangswert für die Dauer `NaN` (Not a Number) ist, was Sie wahrscheinlich Ihren Benutzern nicht anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  //you can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr als nur der Dauer bestehen – wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  //you can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück des Mediums eingetroffen ist. Der Abspielkopf ist in Position, aber noch nicht ganz bereit zu spielen.

```js
audio.addEventListener("loadeddata", () => {
  //you could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download des Mediums noch im Gange ist. Es ist eine gute Praxis, an dieser Stelle eine Art "Lader" anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, um festzustellen, ob das Medium abspielbereit ist. Sie könnten z.B. benutzerdefinierte Steuerelemente deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  //audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, signalisiert jedoch, dass das Medium bereit ist, vollständig abgespielt zu werden (das heißt, dass die Datei vollständig heruntergeladen ist, oder es wird geschätzt, dass der Download rechtzeitig abgeschlossen wird, sodass keine Pufferstopps auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  //audio is ready to play all the way through
});
```

### Medienladeereignis-Reihenfolge

Um es zusammenzufassen, die Reihenfolge der Medienladeereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Ladeunterbrechungsereignisse

Wir haben auch einige Ereignisse, die ausgelöst werden, wenn eine Art von Unterbrechung im Medienladeprozess auftritt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Mediendatendownload wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Beim Herunterladen der Mediendaten ist ein Fehler aufgetreten.
- emptied
  - : Der Medienpuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die `load()`-Methode aufgerufen wurde, um ihn erneut zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabe-Ereignisse

Wir haben auch eine weitere Gruppe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis tritt dies alle 250 Millisekunden auf. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts zu aktualisieren.

```js
audio.addEventListener("timeupdate", () => {
  //update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird ausgelöst, wenn die Wiedergabe nach einer Unterbrechung aufgrund mangelnder Mediendaten bereit ist, fortzufahren.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund mangelnder Mediendaten gestoppt wurde, obwohl erwartet wird, dass sie fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird ausgelöst, nachdem die `play()`-Methode aufgerufen wurde oder das `autoplay`-Attribut die Wiedergabe gestartet hat. Dies ist der Moment, in dem sich der Zustand des Mediums von pausiert zu spielend ändert.

### pause

Das `pause`-Ereignis wird nach der Rückgabe der `pause()`-Methode ausgelöst. Dies ist der Moment, in dem sich der Zustand von spielend zu pausiert ändert.

### ended

Das `ended`-Ereignis wird ausgelöst, wenn das Ende des Mediums erreicht wurde.

```js
audio.addEventListener("ended", () => {
  //do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat; das schließt das Stummschalten ein.

## Ein Audioplayer mit Feedback

Betrachten Sie dieses HTML-Snippet:

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

Sie sollten am Ende etwas wie dies erhalten:

![Ein einfacher Audioplayer mit Abspiel-/Pause-Taste und Suchleiste](simpleplayer.png)

### Suchen über die Suchleiste

Das ist ein guter Anfang, aber es wäre schön, wenn man das Audio über die Fortschrittsleiste navigieren könnte. Glücklicherweise ist dies nicht allzu schwierig zu implementieren.

Zuerst aktualisieren wir das CSS der Fortschrittsleiste, um den Zeiger bei Hover anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'Spielkopf' an die richtige Position bewegt:

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

Okay, wir nähern uns dem Ziel, aber es gibt noch ein weiteres nützliches Stück Information, das wir anzeigen können: die Menge an Audio, die im Voraus gepuffert oder heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft informiert uns darüber, welche Teile des Audios zwischengespeichert wurden (im Voraus heruntergeladen). Sie gibt ein `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die `seekable`-Eigenschaft informiert Sie darüber, ob Sie direkt zu diesem Teil des Mediums springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Puffern-Ereignisse

Es gibt auch ein paar Ereignisse im Zusammenhang mit dem Puffern:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn nach Medien gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut auf `false` ändert.

> [!NOTE]
> Weitere Informationen zu [Puffern, Suchen und Zeitbereichen](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges) finden Sie anderswo.

## Siehe auch

- [Puffern, Suchen und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
