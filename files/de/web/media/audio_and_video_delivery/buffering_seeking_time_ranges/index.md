---
title: Media-Buffering, -Suchlauf und Zeitbereiche
slug: Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Manchmal ist es nützlich zu wissen, wie viel <audio> oder <video> heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die Pufferfortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel beschreibt, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.

## Buffered

Das `buffered`-Attribut zeigt uns an, welche Teile der Medien heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, welches uns anzeigt, welche Abschnitte der Medien heruntergeladen wurden. Dies ist normalerweise zusammenhängend, aber wenn der Benutzer während des Pufferungsvorgangs hin und her springt, können Lücken entstehen.

Dies funktioniert mit <audio> oder <video>; betrachten wir für den Moment ein einfaches Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges Objekt

TimeRanges sind eine Serie von nicht überlappenden Zeitbereichen, mit Start- und Stoppzeiten. ([mehr über TimeRanges erfahren](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt besteht aus folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit, in Sekunden, eines Zeitbereichs.
- `end(index)`: Die Endzeit, in Sekunden, eines Zeitbereichs.

Ohne Benutzerinteraktion gibt es normalerweise nur einen Zeitbereich, aber wenn man im Medium hin und her springt, können mehr als ein Zeitbereich erscheinen, wie durch die untenstehende Visualisierung dargestellt. Diese stellt zwei gepufferte Zeitbereiche dar — einen, der von 0 bis 5 Sekunden reicht, und den zweiten, der von 15 bis 19 Sekunden reicht.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für dieses Audio-Beispiel würde das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt folgende verfügbare Eigenschaften haben:

```js
audio.buffered.length; // returns 2
audio.buffered.start(0); // returns 0
audio.buffered.end(0); // returns 5
audio.buffered.start(1); // returns 15
audio.buffered.end(1); // returns 19
```

Um gepufferte Zeitbereiche auszuprobieren und zu visualisieren, können wir ein wenig HTML schreiben:

```html
<p>
  <audio id="my-audio" controls>
    <source src="music.mp3" type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas id="my-canvas" width="300" height="20"> </canvas>
</p>
```

und ein bisschen JavaScript:

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");
  const canvas = document.getElementById("my-canvas");
  const context = canvas.getContext("2d");

  context.fillStyle = "lightgray";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.strokeStyle = "white";

  const inc = canvas.width / audio.duration;

  // Display TimeRanges

  audio.addEventListener("seeked", () => {
    for (let i = 0; i < audio.buffered.length; i++) {
      const startX = audio.buffered.start(i) * inc;
      const endX = audio.buffered.end(i) * inc;
      const width = endX - startX;

      context.fillRect(startX, 0, width, canvas.height);
      context.rect(startX, 0, width, canvas.height);
      context.stroke();
    }
  });
};
```

Dies funktioniert besser mit längeren Audio- oder Videostücken, aber drücken Sie Play und klicken Sie herum in der Player-Fortschrittsleiste und Sie sollten so etwas wie das Folgende erhalten. Jede rot gefüllte weiße Rechteck repräsentiert einen Zeitbereich.

![Ein einfacher Audioplayer mit Wiedergabetaste, Suchleiste und Lautstärkeregelung, mit einer Reihe von roten Rechtecken darunter, die Zeitbereiche darstellen.](bufferedtimeranges.png)

> [!NOTE]
> Sie können den [Timerangecode live auf JS Bin sehen](https://jsbin.com/memazaro/1/edit).

## Seekable

Das `seekable`-Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück und zeigt uns, welche Teile der Medien ohne Verzögerung abgespielt werden können; dies ist unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile der Medien können suchbar, aber nicht gepuffert sein, wenn Byte-Bereich-Anfragen auf dem Server aktiviert sind. Byte-Bereich-Anfragen ermöglichen es, Teile der Mediendatei vom Server zu liefern und können daher fast sofort abspielbereit sein — daher sind sie suchbar. Weitere Informationen zu Bereichsanfragen finden Sie unter [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Erstellung unseres eigenen Puffer-Feedbacks

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, könnten wir Feedback darüber geben wollen, wie viel vom Medium abspielbereit ist. In der Praxis ist es ein guter Weg, das `seekable`-Attribut zu verwenden, obwohl, wie oben gesehen, suchbare Teile der Medien nicht unbedingt zusammenhängend sind — oft sind sie es jedoch, und wir können diese Information sicher approximieren, um dem Benutzer einen Hinweis darauf zu geben, welche Teile der Medien direkt abgespielt werden können. Wir können diesen Punkt im Medium mit der folgenden Codezeile finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> **Hinweis:** `audio.seekable.end(audio.seekable.length - 1)` zeigt uns tatsächlich das Endpunkt des letzten Zeitbereichs an, der suchbar ist (nicht alle suchbaren Medien). In der Praxis ist dies gut genug, da der Browser entweder Bereichsanfragen ermöglicht oder nicht. Wenn nicht, entspricht `audio.seekable` `audio.buffered`, was einen gültigen Hinweis auf das Ende der suchbaren Medien gibt. Wenn Bereichsanfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer der Medien.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde — das scheinen die nativen Player des Browsers anzuzeigen.

Also lassen Sie uns dies erstellen. Das HTML für unseren Player sieht so aus:

```html
<audio id="my-audio" preload controls>
  <source src="music.mp3" type="audio/mpeg" />
</audio>
<div class="buffered">
  <span id="buffered-amount"></span>
</div>
<div class="progress">
  <span id="progress-amount"></span>
</div>
```

Wir verwenden das folgende CSS, um die Pufferanzeige zu stylen:

```css
.buffered {
  height: 20px;
  position: relative;
  background: #555;
  width: 300px;
}

#buffered-amount {
  display: block;
  height: 100%;
  background-color: #777;
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
  background-color: #595;
  width: 0;
}
```

Und der folgende JavaScript-Code bietet unsere Funktionalität:

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");

  audio.addEventListener("progress", () => {
    const duration = audio.duration;
    if (duration > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
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
};
```

Das Ereignis progress wird ausgelöst, während Daten heruntergeladen werden, dies ist ein gutes Ereignis, um darauf zu reagieren, wenn wir den Download- oder Pufferfortschritt anzeigen möchten.

Das Ereignis timeupdate wird viermal pro Sekunde ausgelöst, während das Medium abgespielt wird, und das ist der Punkt, an dem wir unsere Abspielfortschrittsanzeige aktualisieren.

Dies sollte Ihnen Ergebnisse ähnlich dem Folgenden geben, wobei die hellgraue Leiste den Pufferfortschritt darstellt und die grüne Leiste den Abspielfortschritt anzeigt:

![Ein einfacher Audioplayer mit Wiedergabetaste, Suchleiste und Lautstärkeregelung, und eine Fortschrittsleiste unterhalb der Steuerelemente. Die Fortschrittsleiste hat einen grünen Abschnitt, um das abgespielte Video zu zeigen, und einen hellgrauen Abschnitt, um zu zeigen, wie viel gepuffert wurde.](bufferedprogress.png)

> [!NOTE]
> Sie können den [Pufferungscode live auf JS Bin sehen](https://jsbin.com/badimipi/1/edit).

## Ein kurzes Wort über Played

Es lohnt sich, die `played`-Eigenschaft zu erwähnen — diese zeigt uns, welche Zeitbereiche im Medium abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihrer Medien am meisten gehört oder angesehen werden.
