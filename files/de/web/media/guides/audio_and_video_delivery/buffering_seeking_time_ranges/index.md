---
title: Medienpufferung, -suche und -zeitbereiche
slug: Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio") }} oder {{htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist – ein gutes Beispiel dafür ist die fortschreitende Pufferleiste eines Audio- oder Videoplayers. Dieser Artikel behandelt, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.

## Gepuffert

Das `buffered`-Attribut teilt uns mit, welche Teile der Medien heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das uns mitteilt, welche Teile der Medien heruntergeladen wurden. Dies ist normalerweise zusammenhängend, aber wenn der Benutzer während des Pufferings im Medium herum springt, kann es Lücken geben.

Dies funktioniert sowohl mit {{htmlelement("audio") }} als auch mit {{htmlelement("video") }}; betrachten wir zunächst ein Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges-Objekt

TimeRanges sind eine Serie von nicht überlappenden Zeitbereichen mit Start- und Stoppzeiten. ([Erfahren Sie mehr über TimeRanges](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit, in Sekunden, eines Zeitbereichs.
- `end(index)`: Die Endzeit, in Sekunden, eines Zeitbereichs.

Ohne Benutzerinteraktion gibt es normalerweise nur einen Zeitbereich, aber wenn Sie im Medium herumspringen, können mehrere Zeitbereiche erscheinen, wie die folgende Visualisierung zeigt. Dies stellt zwei gepufferte Zeitbereiche dar – einen von 0 bis 5 Sekunden und den zweiten von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für dieses Audio-Beispiel hätte das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt die folgenden verfügbaren Eigenschaften:

```js
audio.buffered.length; // returns 2
audio.buffered.start(0); // returns 0
audio.buffered.end(0); // returns 5
audio.buffered.start(1); // returns 15
audio.buffered.end(1); // returns 19
```

Um gepufferte Zeitbereiche auszuprobieren und zu visualisieren, können wir ein wenig HTML schreiben:

```html live-sample___timeranges
<p>
  <audio id="my-audio" controls>
    <source
      src="https://cdn.freesound.org/previews/155/155386_326032-lq.mp3"
      type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas id="my-canvas" width="300" height="20"> </canvas>
</p>
```

```css hidden live-sample___timeranges
#my-audio,
#my-canvas {
  width: 100%;
}
```

und ein wenig JavaScript:

```js live-sample___timeranges
const audio = document.getElementById("my-audio");
const canvas = document.getElementById("my-canvas");
const context = canvas.getContext("2d");

context.fillStyle = "lightgray";
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = "red";
context.strokeStyle = "white";

// Display TimeRanges
audio.addEventListener("seeked", () => {
  const inc = canvas.width / audio.duration;
  for (let i = 0; i < audio.buffered.length; i++) {
    const startX = audio.buffered.start(i) * inc;
    const endX = audio.buffered.end(i) * inc;
    const width = endX - startX;

    context.fillRect(startX, 0, width, canvas.height);
    context.rect(startX, 0, width, canvas.height);
    context.stroke();
  }
});
```

Dies funktioniert besser mit längeren Audio- oder Videostücken, aber drücken Sie die Wiedergabetaste und klicken Sie in der Player-Fortschrittsleiste herum, und Sie sollten Segmente von Rot sehen. Jedes rot gefüllte weiße Rechteck stellt einen Zeitbereich dar.

{{EmbedLiveSample("timeranges", "", 200)}}

## Suchbar

Das `seekable`-Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück und zeigt uns, welche Teile des Mediums ohne Verzögerung abgespielt werden können, unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können suchbar, aber nicht gepuffert sein, wenn auf dem Server Byterange-Anfragen aktiviert sind. Byterange-Anfragen erlauben es, Teile der Mediendatei vom Server zu liefern, und können daher fast sofort spielbereit sein – daher sind sie suchbar. Weitere Informationen zu Byterange-Anfragen finden Sie unter [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Unser eigenes Pufferfeedback erstellen

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, möchten wir möglicherweise Feedback dazu geben, wie viel von den Medien abspielbereit ist. In der Praxis ist es eine gute Möglichkeit, dazu das `seekable`-Attribut zu verwenden, obwohl, wie wir oben gesehen haben, suchbare Teile des Mediums nicht notwendigerweise zusammenhängend sind – oft sind sie es jedoch, und wir können diese Information sicher als Annäherung verwenden, um dem Benutzer anzuzeigen, welche Teile der Medien direkt abgespielt werden können. Wir finden diesen Punkt im Medium mit folgendem Code:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> [!NOTE]
> `audio.seekable.end(audio.seekable.length - 1)` sagt uns tatsächlich den Endpunkt des letzten Zeitbereichs, der suchbar ist (nicht aller suchbaren Medien). In der Praxis reicht dies aus, da der Browser entweder Range-Anfragen aktiviert oder nicht. Wenn nicht, wird `audio.seekable` gleich `audio.buffered`, was einen gültigen Hinweis auf das Ende der suchbaren Medien gibt. Wenn Range-Anfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medien tatsächlich heruntergeladen wurden – dies ist das, was die nativen Player des Browsers anzuzeigen scheinen.

Also bauen wir das. Das HTML für unseren Player sieht so aus:

```html live-sample___buffered-progress
<audio id="my-audio" preload controls>
  <source
    src="https://cdn.freesound.org/previews/155/155386_326032-lq.mp3"
    type="audio/mpeg" />
</audio>
<div class="buffered">
  <span id="buffered-amount"></span>
</div>
<div class="progress">
  <span id="progress-amount"></span>
</div>
```

Wir verwenden das folgende CSS, um das Puffe-Darstellungs-Display zu stylen:

```css live-sample___buffered-progress
.buffered {
  height: 20px;
  position: relative;
  background: #555555;
  width: 300px;
}

#buffered-amount {
  display: block;
  height: 100%;
  background-color: #777777;
  width: 0;
}

.progress {
  margin-top: -20px;
  height: 20px;
  position: relative;
  width: 300px;
}

#progress-amount {
  display: block;
  height: 100%;
  background-color: #559955;
  width: 0;
}
```

Und das folgende JavaScript bietet unsere Funktionalität:

```js live-sample___buffered-progress
const audio = document.getElementById("my-audio");

audio.addEventListener("progress", () => {
  const duration = audio.duration;
  if (duration > 0) {
    for (let i = 0; i < audio.buffered.length; i++) {
      if (
        audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime
      ) {
        document.getElementById("buffered-amount").style.width = `${
          (audio.buffered.end(audio.buffered.length - 1 - i) * 100) / duration
        }%`;
        break;
      }
    }
  }
});

audio.addEventListener("timeupdate", () => {
  const duration = audio.duration;
  if (duration > 0) {
    document.getElementById("progress-amount").style.width = `${
      (audio.currentTime / duration) * 100
    }%`;
  }
});
```

Das Fortschrittsereignis wird ausgelöst, während Daten heruntergeladen werden; dies ist ein gutes Ereignis, um darauf zu reagieren, wenn wir den Download- oder Puffervorgang anzeigen möchten.

Das Zeitaktualisierungsereignis wird viermal pro Sekunde ausgelöst, während die Medien abgespielt werden, und hier erhöhen wir unsere Abspiel-Fortschrittsleiste.

Dieses Mal sollten Sie zwei Arten von Segmenten sehen. Der hellgraue Balken stellt den gepufferten Fortschritt dar und der grüne Balken den abgespielten Fortschritt.

{{EmbedLiveSample("buffered-progress", "", 200)}}

## Ein kurzes Wort über Abgespieltes

Es lohnt sich, die `played`-Eigenschaft zu erwähnen — diese sagt uns, welche Zeitbereiche innerhalb der Medien abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihrer Medien am meisten gehört oder angesehen werden.
