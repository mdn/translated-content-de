---
title: Grundlagen der plattformübergreifenden Audio-Nutzung
slug: Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit Erklärungen zu allen zugehörigen Attributen, Eigenschaften und Ereignissen
- einen Leitfaden zu benutzerdefinierten Steuerelementen, die mithilfe der Media API erstellt wurden

## Grundlegendes Audio-Beispiel

Der folgende Code ist ein Beispiel für eine grundlegende Audio-Implementierung mit HTML5:

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
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten normalerweise mit [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding) kodiertes Audio. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die MP3 unterstützen, auch MP4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen – wir tun dies, da nicht alle Browser die gleichen Audioformate unterstützen. Um eine angemessene Abdeckung sicherzustellen, sollten wir mindestens zwei verschiedene Formate angeben. Die zwei Formate, die die maximale Abdeckung bieten, sind MP3 und OGG Vorbis.
- Wir tun dies mit dem {{ htmlelement("source") }}-Element, das die Attribute `src` und `type` akzeptiert.
  - `src` enthält den Pfad zur Audiodatei, die geladen werden soll (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn dieser weggelassen wird, versuchen die meisten Browser, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Allerdings werden alle unterstützten Texte oder Elemente, die Sie innerhalb von {{ htmlelement("audio") }} definieren, angezeigt oder ausgeführt. Der ideale Ort, um eine Fallback-Lösung zu erstellen oder auf Inkompatibilität hinzuweisen, ist daher vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen Absatz mit einem Link bereitgestellt, um das Audio direkt herunterzuladen.
- Das `controls`-Attribut beim {{ htmlelement("audio") }}-Element wird angegeben, wenn wir vom Browser verlangen, dass er uns die standardmäßigen Wiedergabesteuerungen bereitstellt. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerungen angezeigt – und Sie müssen stattdessen Ihre eigenen Steuerungen erstellen und deren Funktionalität mithilfe der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standardsteuerungen in verschiedenen Browsern unterschiedlich aussehen. Das Erstellen Ihrer eigenen Steuerungen stellt sicher, dass die Steuerungen in allen Browsern einheitlich aussehen.

## HTML Audio im Detail

Nachdem wir uns ein einfaches Beispiel angesehen haben, wollen wir nun die unterschiedlichen Aspekte von HTML-Audio im Detail erkunden.

### Audio HTML-Attribute

Wir können eine Reihe von Attributen mit dem Audioelement angeben, um weiter zu bestimmen, wie Audio initialisiert wird.

#### autoplay

Das Angeben von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne Benutzereingriff beginnt – kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, sie ist wirklich notwendig. Automatisch abgespielte Audio- (und Video-)Inhalte sind normalerweise sehr störend. Darüber hinaus haben Browser Richtlinien, die das automatische Abspielen unter vielen Umständen vollständig blockieren. Details finden Sie im [Leitfaden zum automatischen Abspielen für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

#### loop

Das `loop`-Attribut stellt sicher, dass das Audio bei Erreichen des Endes des Audioclips zum Anfang zurückspringt und erneut abgespielt wird.

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

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio vorlädt, also welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und vor dem Drücken der Wiedergabetaste.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Vor dem Drücken der Wiedergabetaste nichts herunterladen.
2. `metadata`: Die Audiodaten herunterladen; dies ist normalerweise die beste Option, da Sie dadurch auf Informationen wie die Länge des Audios zugreifen und sie anzeigen können, und dem Browser ermöglichen, herauszufinden, welche Audiodatei verwendet werden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzwerkverbindung haben werden.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir vom Browser verlangen, uns seine standardmäßigen Wiedergabesteuerungen bereitzustellen.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt auf das {{ htmlelement("audio") }}-Element setzen, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, um sicherzustellen, dass der Browser weiß, welcher Dateityp angegeben wird, ist es gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben. Das `type`-Attribut gibt den MIME-Typ oder Internet Media Type der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audioelements mit JavaScript

Zusätzlich zur Fähigkeit, verschiedene Attribute im HTML anzugeben, kommt das {{ htmlelement("audio") }}-Element mit mehreren Eigenschaften und Methoden, die Sie über JavaScript manipulieren können.

Angenommen, wir haben folgendes HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{ htmlelement("audio") }}-Element so greifen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für das Erstellen eines {{ htmlelement("audio") }}-Elements, das Setzen des Mediums zur Wiedergabe, das Abspielen und Pausieren und dann das Abspielen ab 5 Sekunden in der Audiodatei:

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

Die `play()`-Methode wird verwendet, um das Audio abzuspielen. Sie nimmt keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um das Audio zu pausieren. Sie nimmt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stopp-Methode – um eine Stopp-Funktion zu implementieren, müssten Sie das Medium pausieren und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den MIME-Typ des zu prüfenden Typs als Parameter.

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
> Eine sehr frühe Spezifikation besagte, dass der Browser `no` statt eines leeren Strings zurückgeben sollte, aber zum Glück gibt es nur noch wenige Benutzer älterer Browser, die diese Version der Spezifikation implementieren.

#### currentTime

Die `currentTime`-Eigenschaft erhält oder setzt die aktuelle Zeit, zu der das Audio abgespielt werden soll. Dies ist auf vielerlei Weise nützlich, da `play()` keinen Parameter nimmt und wir den Punkt, von dem aus abgespielt werden soll, separat setzen müssen, wenn wir nicht möchten, dass er 0 ist.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft ermöglicht es uns, die Lautstärke des Audios zu setzen, als eine Zahl zwischen 0 und 1.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen Ihres eigenen benutzerdefinierten Audioplayers

Die JavaScript Media API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Lassen Sie uns ein sehr minimales Beispiel betrachten. Wir können HTML und JavaScript kombinieren, um einen Player mit einer Abspiel- und einer Pausentaste zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerungen erstellen:

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

Als nächstes fügen wir dem Player über JavaScript einige Funktionalitäten hinzu:

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

Oben haben wir gezeigt, wie Sie einen Audioplayer erstellen können, aber was, wenn wir Fortschritte, Puffern und nur die Schaltflächen aktivieren möchten, wenn die Medien bereit sind, abgespielt zu werden? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir nutzen können, um unserem Player genau mitzuteilen, was passiert.

Schauen wir uns zunächst den Medienladevorgang in der Reihenfolge an:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladevorgang begonnen hat und der Browser sich mit den Medien verbindet.

```js
audio.addEventListener("loadstart", () => {
  // Grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihrer Medien festgelegt ist, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der anfängliche Wert für die Dauer `NaN` (Not a Number) ist, den Sie Ihren Benutzern wahrscheinlich nicht anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  // You can display the duration now
});
```

### loadedmetadata

Metadaten können mehr als nur die Dauer umfassen – wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  // You can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück Medien eintrifft. Der Lesekopf ist an Ort und Stelle, aber noch nicht ganz bereit zum Abspielen.

```js
audio.addEventListener("loadeddata", () => {
  // You could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download der Medien noch im Gange ist. Es ist eine gute Praxis, an dieser Stelle eine Art „Loader“ anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das erkannt werden sollte, wenn Sie feststellen möchten, ob die Medien bereit sind, abgespielt zu werden. Sie könnten beispielsweise benutzerdefinierte Steuerungen deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  // Audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, informiert Sie jedoch darüber, dass die Medien bereit sind, vollständig abgespielt zu werden (das heißt, dass die Datei vollständig heruntergeladen wurde oder geschätzt wird, dass sie rechtzeitig heruntergeladen wird, sodass keine Pufferungsstopps auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  // Audio is ready to play all the way through
});
```

### Reihenfolge der Medienladeereignisse

Zur Wiederholung, die Reihenfolge der Medienladeereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Unterbrechungsereignisse beim Laden

Wir haben auch einige Ereignisse zur Verfügung, die bei einer Art von Unterbrechung des Medienladevorgangs ausgelöst werden.

- suspend
  - : Mediadaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download von Mediadaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Beim Herunterladen von Mediadaten wurde ein Fehler festgestellt.
- emptied
  - : Der Mediapuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die `load()`-Methode aufgerufen wurde, um ihn neu zu laden.
- stalled
  - : Mediadaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabeereignisse

Wir haben außerdem eine Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis passiert dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts zu durchzuführen.

```js
audio.addEventListener("timeupdate", () => {
  // Update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird initiiert, wenn die Wiedergabe nach einer Pause aufgrund von Medienmangel bereit ist zu starten.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund eines Mangels an Mediadaten gestoppt wurde, obwohl erwartet wird, dass sie fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird initiiert, nachdem die `play()`-Methode zurückgegeben wurde oder wenn das `autoplay`-Attribut dazu geführt hat, dass die Wiedergabe beginnt. Dies ist der Moment, in dem der Zustand der Medien von pausiert auf spielend wechselt.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die `pause()`-Methode zurückgegeben wurde. Dies ist der Moment, in dem die Zustände von spielend auf pausiert wechseln.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende der Medien erreicht ist.

```js
audio.addEventListener("ended", () => {
  // Do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat; dazu gehört auch, dass es stummgeschaltet wird.

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

Jetzt verbinden wir das Ganze mit JavaScript:

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

Sie sollten am Ende etwas in der Art wie hier haben:

![Ein einfacher Audioplayer mit Abspiel-/Pausetaste und Suchleiste](simpleplayer.png)

### Suchen mit der Suchleiste

Das ist ein guter Anfang, aber es wäre schön, die Audiodaten mit der Fortschrittsleiste navigieren zu können. Glücklicherweise ist dies nicht schwer zu implementieren.

Zuerst aktualisieren wir das CSS der Fortschrittsleiste, um den Handzeiger bei Hover anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'Lesekopf' an die richtige Position bewegt:

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

Gut, wir nähern uns dem Ziel, aber es gibt noch ein weiteres nützliches Detail, das wir anzeigen können: die Menge an Audio, die vorab gepuffert oder heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben: `buffered` und `seekable`.

#### buffered

Diese Eigenschaft informiert uns darüber, welche Teile des Audios gepuffert (im Voraus heruntergeladen) wurden. Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die Eigenschaft `seekable` informiert darüber, ob Sie direkt zu diesem Teil des Mediums springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferungsereignisse

Es gibt auch ein paar Ereignisse im Zusammenhang mit dem Puffern:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn Medien gesucht werden.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut auf `false` ändert.

> [!NOTE]
> Weitere Informationen finden Sie in [Buffering, Seeking und Time Ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

## Siehe auch

- [Buffering, Seeking und Time Ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignis-Referenz > Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Bibliothek für Audio und Video für jQuery und Zepto.
