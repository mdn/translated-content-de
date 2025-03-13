---
title: Grundlegendes zu plattformübergreifenden Audios
slug: Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit Erklärungen zu allen zugehörigen Attributen, Eigenschaften und Ereignissen
- einen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media-API erstellt wurden

## Einfaches Audio-Beispiel

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
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)-codiertes Audio. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen – dies tun wir, da nicht alle Browser die gleichen Audioformate unterstützen. Um eine angemessene Abdeckung zu gewährleisten, sollten wir mindestens zwei verschiedene Formate angeben. Die zwei Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir tun dies mit dem {{ htmlelement("source") }}-Element, das die Attribute `src` und `type` benötigt.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, werden die meisten Browser versuchen, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Allerdings wird jeder unterstützte Text oder jedes unterstützte Element, das Sie innerhalb von {{ htmlelement("audio") }} definieren, angezeigt oder ausgeführt. Der ideale Ort, um einen Fallback zu erstellen oder über Inkompatibilität zu informieren, ist daher vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen Absatz bereitgestellt, der einen Link zum Herunterladen des Audios direkt enthält.
- Das `controls`-Attribut im {{ htmlelement("audio") }}-Element wird angegeben, wenn wir möchten, dass der Browser uns mit den standardmäßigen Wiedergabesteuerelementen versorgt. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerelemente angezeigt – und Sie müssen stattdessen Ihre eigenen Steuerelemente erstellen und deren Funktionalität mit der Media-API programmieren (siehe unten). Das kann jedoch ein guter Ansatz sein, da die Standard-Steuerelemente in verschiedenen Browsern unterschiedlich aussehen. Durch das Erstellen eigener Steuerelemente wird ein konsistentes Aussehen der Steuerelemente in allen Browsern gewährleistet.

## HTML-Audio im Detail

Nachdem wir nun ein einfaches Beispiel betrachtet haben, lassen Sie uns die verschiedenen Aspekte von HTML-Audio näher erkunden.

### Audio HTML-Attribute

Wir können mit dem Audio-Element eine Reihe von Attributen angeben, um den Weg der Audio-Initialisierung weiter zu bestimmen.

#### autoplay

Die Angabe von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne jegliche Benutzerinteraktion zu spielen beginnt – kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, es ist wirklich notwendig. Automatisches Abspielen von Audio (und Video) ist normalerweise sehr störend. Außerdem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen komplett blockieren. Einzelheiten finden Sie im [Autoplay-Leitfaden für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

#### loop

Das `loop`-Attribut stellt sicher, dass der Audioclip beim Erreichen des Endes zum Anfang zurückspringt und erneut abgespielt wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stummgeschaltet (ohne Lautstärke) startet, fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio vorlädt, mit anderen Worten, welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und bevor der Wiedergabeknopf gedrückt wird.

`preload` kann drei verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor der Wiedergabeknopf gedrückt wird.
2. `metadata`: Nur die Metadaten des Audios herunterladen; dies ist normalerweise die beste Option, da Sie Informationen wie die Länge des Audios abrufen und anzeigen und dem Browser erlauben können, herauszufinden, welche Audiodatei er verwenden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzwerkverbindung haben.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir möchten, dass der Browser uns seine standardmäßigen Wiedergabesteuerelemente zur Verfügung stellt.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt im {{ htmlelement("audio") }}-Element verwenden, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welchen Dateityp er verarbeiten soll. Das `type`-Attribut gibt den MIME-Typ oder Internet-Medientyp der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audioelements mit JavaScript

Zusätzlich zur Möglichkeit, verschiedene Attribute in HTML anzugeben, verfügt das {{ htmlelement("audio") }}-Element über mehrere Eigenschaften und Methoden, die Sie über JavaScript manipulieren können.

Angenommen, folgendes HTML ist gegeben:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{ htmlelement("audio") }}-Element so abrufen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel dafür, wie Sie ein {{ htmlelement("audio") }}-Element erstellen, das Medium einstellen, zum Abspielen und Anhalten und dann 5 Sekunden in das Audio einsteigen:

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

Die `play()`-Methode wird verwendet, um dem Audio mitzuteilen, dass es abgespielt werden soll. Sie benötigt keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um dem Audio mitzuteilen, dass es pausiert werden soll. Sie benötigt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stop-Methode – um eine Stopp-Funktion zu implementieren, müssten Sie das Medium pausieren und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audiodateityp unterstützt wird. Sie nimmt den MIME-Typ des zu überprüfenden Typs als Parameter.

```js
if (audio.canPlayType("audio/mpeg")) {
  // It's supported.
  // Do something here!
}
```

Die `canPlayType()`-Methode gibt einen von drei Werten zurück:

1. `probably`
2. `maybe`
3. "" (ein leerer String)

In der Praxis überprüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Strings sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation sah vor, dass der Browser `no` anstelle eines leeren Strings zurückgeben sollte, aber glücklicherweise gibt es nur noch wenige Benutzer älterer Browser, in denen diese Version der Spezifikation implementiert ist.

#### currentTime

Die `currentTime`-Eigenschaft ruft die aktuelle Zeit ab oder setzt sie, wann das Audio abspielen soll. Dies ist auf viele Arten nützlich, zum Beispiel wenn wir nicht möchten, dass `play()` bei 0 beginnt, müssen wir den Punkt, ab dem abgespielt werden soll, separat festlegen.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft erlaubt es uns, die Lautstärke des Audios als Zahl zwischen 0 und 1 festzulegen.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen eines eigenen benutzerdefinierten Audioplayers

Die JavaScript-Media-API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Werfen wir einen Blick auf ein sehr minimales Beispiel. Wir können HTML und JavaScript kombinieren, um einen Player mit einem Abspiel- und einem Pausenknopf zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerelemente erstellen:

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

Als Nächstes fügen wir dem Player mit JavaScript einige Funktionen hinzu:

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

Oben haben wir gezeigt, wie Sie einen Audioplayer erstellen können, aber was ist, wenn wir Fortschritte anzeigen möchten, puffern und die Schaltflächen erst aktivieren, wenn das Medium abspielbereit ist? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir verwenden können, um unserem Player genau mitzuteilen, was passiert.

Zuerst werfen wir einen Blick auf den Medienladeprozess in der Reihenfolge:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess begonnen hat und der Browser eine Verbindung zum Medium herstellt.

```js
audio.addEventListener("loadstart", () => {
  //grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihres Mediums festgestellt wurde, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der Anfangswert für die Dauer `NaN` (Not a Number) ist, was Sie Ihren Benutzern wahrscheinlich nicht anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  //you can display the duration now
});
```

### loadedmetadata

Metadaten können mehr als nur die Dauer umfassen – wenn Sie darauf warten möchten, dass alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  //you can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Bit des Mediums eintrifft. Der Abspielkopf ist in Position, aber noch nicht ganz bereit zum Abspielen.

```js
audio.addEventListener("loadeddata", () => {
  //you could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download des Mediums noch im Gange ist. Es ist eine gute Praxis, an dieser Stelle eine Art 'Ladeanzeige' anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das erkannt werden kann, wenn Sie feststellen möchten, ob das Medium abspielbereit ist. Sie könnten beispielsweise benutzerdefinierte Steuerelemente deaktivieren, bis dieses Ereignis auftritt.

```js
audio.addEventListener("canplay", () => {
  //audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, teilt Ihnen jedoch mit, dass das Medium bereit ist, vollständig abgespielt zu werden (das bedeutet, dass die Datei vollständig heruntergeladen wurde oder geschätzt wird, dass sie rechtzeitig heruntergeladen wird, sodass Pufferstopps nicht auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  //audio is ready to play all the way through
});
```

### Reihenfolge der Medienladeereignisse

Um es zusammenzufassen, die Reihenfolge der Medienladeereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Unterbrechungsereignisse beim Laden

Wir haben auch einige Ereignisse, die ausgelöst werden, wenn es eine Art Unterbrechung im Medienladeprozess gibt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download der Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Beim Herunterladen von Mediendaten ist ein Fehler aufgetreten.
- emptied
  - : Der Medienpuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die load()-Methode aufgerufen wurde, um ihn neu zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medien-Wiedergabe-Ereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis tritt dies alle 250 Millisekunden auf. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  //update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird initiiert, wenn die Wiedergabe bereit ist, fortzusetzen, nachdem sie aufgrund fehlender Mediendaten pausiert wurde.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, aufgrund fehlender Mediendaten, obwohl erwartet wird, dass sie fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird initiiert, nachdem die `play()`-Methode zurückgegeben wurde oder wenn das `autoplay`-Attribut die Wiedergabe ausgelöst hat. Dies ist der Moment, wenn der Zustand des Mediums von pausiert zu abspielend wechselt.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die `pause()`-Methode zurückgegeben wurde. Dies ist der Moment, wenn der Zustand von abspielend zu pausiert wechselt.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende des Mediums erreicht ist.

```js
audio.addEventListener("ended", () => {
  //do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat, einschließlich wenn es stummgeschaltet wurde.

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

Gestylt wie folgt:

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

![Ein einfacher Audioplayer mit Abspiel-/Pausenknopf und Fortschrittsbalken](simpleplayer.png)

### Suchen mit der Suchleiste

Das ist ein guter Anfang, aber es wäre schön, wenn man mit dem Fortschrittsbalken durch das Audio navigieren könnte. Glücklicherweise ist es nicht allzu schwierig zu implementieren.

Zuerst führen wir ein schnelles Update an der CSS des Fortschrittsbalkens durch, um den Handzeiger bei Hover anzuzeigen:

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

### Pufferung

Gut, wir sind auf dem Weg, aber es gibt noch ein weiteres nützliches Stück Information, das wir anzeigen können: wie viel Audio bereits gepuffert oder im Voraus heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft gibt uns Auskunft darüber, welche Teile des Audios bereits gepuffert wurden (im Voraus heruntergeladen). Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die seekable-Eigenschaft informiert Sie darüber, ob Sie direkt zu diesem Teil des Mediums springen können, ohne zusätzliches Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferereignisse

Es gibt auch ein paar Ereignisse, bezogen auf das Puffern:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn nach Medien gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn das `seeking`-Attribut auf `false` wechselt.

> [!NOTE]
> Mehr über [Pufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges) können Sie anderswo lesen.

## Siehe auch

- [Pufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
