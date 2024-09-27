---
title: Medien-Pufferung, Suchen und Zeitbereiche
slug: Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio") }} oder {{htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel beschreibt, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellt.

## Buffered

Das `buffered` Attribut zeigt uns, welche Teile des Mediums heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das uns sagt, welche Teile des Mediums heruntergeladen wurden. Diese sind normalerweise zusammenhängend, aber wenn der Benutzer während der Pufferung in dem Medium herumhüpft, kann es Lücken enthalten.

Dies funktioniert mit {{htmlelement("audio") }} oder {{htmlelement("video") }}; betrachten wir zunächst ein einfaches Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges Objekt

TimeRanges sind eine Reihe von nicht überlappenden Zeitbereichen mit Start- und Endzeiten. ([Erfahren Sie mehr über TimeRanges](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit, in Sekunden, eines Zeitbereichs.
- `end(index)`: Die Endzeit, in Sekunden, eines Zeitbereichs.

Ohne Benutzerinteraktion gibt es normalerweise nur einen Zeitbereich, aber wenn Sie in den Medien herumspringen, können mehr als ein Zeitbereich erscheinen, wie in der untenstehenden Visualisierung dargestellt. Dies repräsentiert zwei gepufferte Zeitbereiche – einen von 0 bis 5 Sekunden und den zweiten von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für dieses Audio-Beispiel hätte das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt die folgenden verfügbaren Eigenschaften:

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

und ein wenig JavaScript:

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

Dies funktioniert besser bei längeren Audio- oder Videostücken, aber drücken Sie auf Play und klicken Sie in der Fortschrittsleiste des Players, und Sie sollten etwas wie dieses erhalten. Jeder rot gefüllte weiße Rechteck repräsentiert einen Zeitbereich.

![Ein einfacher Audio-Player mit Play-Taste, Suchleiste und Lautstärkeregelung, darunter eine Reihe von roten Rechtecken, die die Zeitbereiche darstellen.](bufferedtimeranges.png)

> [!NOTE]
> Sie können den [timerange code live auf JS Bin laufen sehen](https://jsbin.com/memazaro/1/edit).

## Seekable

Das `seekable` Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück und zeigt uns, welche Teile des Mediums ohne Verzögerung abgespielt werden können; dies unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können durchsuchbar, aber nicht gepuffert sein, wenn Byte-Bereich-Anfragen auf dem Server aktiviert sind. Byte-Bereich-Anfragen ermöglichen es, Teile der Mediendatei vom Server zu liefern, sodass sie fast sofort abspielbereit sind – daher sind sie durchsuchbar. Weitere Informationen zu Byte-Bereich-Anfragen finden Sie unter [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Eigene Pufferfeedback-Erstellung

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, wollen wir möglicherweise Feedback darüber geben, wie viel des Mediums abspielbereit ist. In der Praxis ist es eine gute Idee, das `seekable` Attribut zu verwenden, obwohl die durchsuchbaren Teile des Mediums, wie oben gesehen, nicht unbedingt zusammenhängend sind – sie sind es jedoch oft und wir können diese Information sicher approximieren, um dem Benutzer anzugeben, welche Teile des Mediums direkt abgespielt werden können. Diesen Punkt im Medium können wir mit folgender Codezeile finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> **Hinweis:** `audio.seekable.end(audio.seekable.length - 1)` sagt uns tatsächlich das Endpunkt des letzten durchsuchbaren Zeitbereichs (nicht aller durchsuchbaren Medien). In der Praxis ist dies gut genug, da der Browser entweder Bereichsanfragen aktiviert oder nicht. Wenn nicht, entspricht `audio.seekable` `audio.buffered`, was einen gültigen Hinweis auf das Ende des durchsuchbaren Mediums gibt. Wenn Bereichsanfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde – dies scheint das zu sein, was die nativen Player des Browsers anzeigen.

Bauen wir das also. Das HTML für unseren Player sieht so aus:

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

Wir verwenden das folgende CSS, um die Pufferanzeige zu gestalten:

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

Und das folgende JavaScript bietet unsere Funktionalität:

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

Das Fortschritt-Event wird ausgelöst, wenn Daten heruntergeladen werden. Dies ist ein gutes Event, um darauf zu reagieren, wenn wir den Download- oder Pufferfortschritt anzeigen wollen.

Das Zeitupdate-Event wird 4 Mal pro Sekunde ausgelöst, während das Medium abgespielt wird, und dort erhöhen wir unsere Abspielfortschrittsleiste.

Dies sollte Ihnen Ergebnisse ähnlich den folgenden geben, wobei die hellgraue Leiste den gepufferten Fortschritt darstellt und die grüne Leiste den abgespielten Fortschritt zeigt:

![Ein einfacher Audio-Player mit Play-Taste, Suchleiste und Lautstärkeregelung und einer Fortschrittsleiste unter den Steuerelementen. Die Fortschrittsleiste hat einen grünen Teil, um das abgespielte Video zu zeigen, und einen hellgrauen Teil, um zu zeigen, wie viel gepuffert wurde.](bufferedprogress.png)

> [!NOTE]
> Sie können den [buffering code live auf JS Bin laufen sehen](https://jsbin.com/badimipi/1/edit).

## Ein kurzes Wort über Played

Es lohnt sich, das `played` Eigenschaft zu erwähnen — dies sagt uns, welche Zeitbereiche innerhalb des Mediums bereits abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihres Mediums am meisten gehört oder angesehen werden.
