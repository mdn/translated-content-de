---
title: Medien-Pufferung, Suchen und Zeitbereiche
slug: Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Manchmal ist es nützlich zu wissen, wie viel eines {{htmlelement("audio") }} oder {{htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erläutert, wie Sie eine Puffer-/Suchleiste mithilfe von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellen können.

## Gepuffert

Das `buffered`-Attribut zeigt uns an, welche Teile der Medien heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das uns zeigt, welche Medienabschnitte heruntergeladen wurden. Dies ist normalerweise zusammenhängend, aber wenn der Benutzer während der Pufferung hin und her springt, kann es Lücken enthalten.

Dies funktioniert mit {{htmlelement("audio") }} oder {{htmlelement("video") }}; betrachten wir zunächst ein Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges Objekt

TimeRanges sind eine Reihe von nicht überlappenden Zeitbereichen mit Start- und Endzeiten. ([mehr über TimeRanges erfahren](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit, in Sekunden, eines Zeitbereichs.
- `end(index)`: Die Endzeit, in Sekunden, eines Zeitbereichs.

Ohne Benutzereingriffe gibt es normalerweise nur einen Zeitbereich, aber wenn Sie in den Medien springen, können mehr als ein Zeitbereich erscheinen, wie durch die folgende Visualisierung dargestellt. Dies repräsentiert zwei gepufferte Zeitbereiche — einen von 0 bis 5 Sekunden und den zweiten von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für dieses Audio-Exemplar hätte das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt folgende verfügbare Eigenschaften:

```js
audio.buffered.length; // returns 2
audio.buffered.start(0); // returns 0
audio.buffered.end(0); // returns 5
audio.buffered.start(1); // returns 15
audio.buffered.end(1); // returns 19
```

Um gepufferte Zeitbereiche auszuprobieren und zu visualisieren, können wir etwas HTML schreiben:

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

und etwas JavaScript:

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

Dies funktioniert besser mit längeren Audio- oder Videostücken. Drücken Sie auf abspielen und klicken Sie in der Fortschrittsleiste des Players hin und her, und Sie sollten rote Segmente sehen. Jedes rot gefüllte weiße Rechteck repräsentiert einen Zeitbereich.

{{EmbedLiveSample("timeranges", "", 200)}}

## Suchbar

Das `seekable`-Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück und zeigt uns, welche Teile der Medien ohne Verzögerung abgespielt werden können; dies unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile der Medien können suchbar aber nicht gepuffert sein, wenn auf dem Server Bereichsanfragen aktiviert sind. Bereichsanfragen ermöglichen es, Teile der Mediendatei vom Server zu liefern und so fast sofort abspielbar zu sein — daher sind sie suchbar. Für mehr Informationen zu Bereichsanfragen siehe [HTTP Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Erstellung unseres eigenen Pufferungs-Feedbacks

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, möchten wir möglicherweise Feedback darüber geben, wie viel der Medien abspielbereit ist. In der Praxis ist es eine gute Möglichkeit, das `seekable`-Attribut zu verwenden, obwohl, wie oben gesehen, suchbare Teile der Medien nicht unbedingt zusammenhängend sind — sie sind es jedoch oft, und wir können dieser Information getrost approximieren, um dem Benutzer anzuzeigen, welche Teile der Medien direkt abgespielt werden können. Wir können diesen Punkt in den Medien mit folgendem Code finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> [!NOTE]
> `audio.seekable.end(audio.seekable.length - 1)` teilt uns tatsächlich das Endpunkt des letzten suchbaren Zeitbereichs mit (nicht alle suchbaren Medien). In der Praxis ist dies ausreichend, da der Browser entweder Bereichsanfragen ermöglicht oder nicht. Wenn nicht, ist `audio.seekable` äquivalent zu `audio.buffered`, was einen validen Hinweis auf das Ende der suchbaren Medien gibt. Wenn Bereichsanfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer der Medien.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medien tatsächlich heruntergeladen wurden — das scheint das anzuzeigen, was die nativen Player des Browsers darstellen.

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

Wir verwenden folgendes CSS, um die Pufferanzeige zu gestalten:

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

Und folgendes JavaScript stellt unsere Funktionalität bereit:

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

Das Progress-Ereignis wird ausgelöst, wenn Daten heruntergeladen werden; dies ist ein gutes Ereignis, auf das wir reagieren können, wenn wir den Download- oder Pufferfortschritt anzeigen möchten.

Das Timeupdate-Ereignis wird viermal pro Sekunde ausgelöst, während die Medien abgespielt werden, und dort aktualisieren wir unsere Abspielfortschrittsleiste.

Diesmal sollten Sie zwei Arten von Segmenten sehen. Die hellgraue Leiste stellt den gepufferten Fortschritt dar, und die grüne Leiste zeigt den abgespielten Fortschritt.

{{EmbedLiveSample("buffered-progress", "", 200)}}

## Ein kurzes Wort zum Abspielen

Es ist erwähnenswert, dass die `played`-Eigenschaft uns mitteilt, welche Zeitbereiche innerhalb der Medien abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihrer Medien am meisten gehört oder angesehen werden.
