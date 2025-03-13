---
title: Medienpufferung, Suche und Zeitbereiche
slug: Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio")}} oder {{htmlelement("video")}} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsanzeige eines Audio- oder Video-Players. Dieser Artikel erläutert, wie man eine Puffer-/Suchleiste mithilfe von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.

## Gepuffert

Das Attribut `buffered` gibt an, welche Teile des Mediums heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das uns mitteilt, welche Abschnitte des Mediums heruntergeladen wurden. Dies ist normalerweise zusammenhängend, kann jedoch Lücken aufweisen, wenn der Benutzer während der Pufferung des Mediums hin und her springt.

Dies funktioniert mit {{htmlelement("audio")}} oder {{htmlelement("video")}}; betrachten wir zunächst ein Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges-Objekt

TimeRanges sind eine Reihe von nicht überlappenden Zeitbereichen mit Start- und Endzeiten. ([mehr über TimeRanges erfahren](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit, in Sekunden, eines Zeitbereichs.
- `end(index)`: Die Endzeit, in Sekunden, eines Zeitbereichs.

Ohne Benutzerinteraktion gibt es normalerweise nur einen Zeitbereich, aber wenn Sie in den Medien hin und her springen, können mehr als ein Zeitbereich erscheinen, wie in der folgenden Visualisierung dargestellt. Dies repräsentiert zwei gepufferte Zeitbereiche — einen von 0 bis 5 Sekunden und den zweiten von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für diese Audio-Instanz hätte das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt die folgenden verfügbaren Eigenschaften:

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

Und etwas JavaScript:

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

Dies funktioniert besser mit längeren Audio- oder Videostücken, aber drücken Sie auf Abspielen und klicken Sie um den Fortschrittsbalken des Players, und Sie sollten so etwas erhalten wie hier beschrieben. Jedes mit rot gefüllte weiße Rechteck stellt einen Zeitbereich dar.

![Ein Audioplayer mit Play-Taste, Suchleiste und Lautstärkeregelung, mit einer Reihe roter Rechtecke darunter, die Zeitbereiche darstellen.](bufferedtimeranges.png)

> [!NOTE]
> Sie können den [TimeRange-Code live auf JS Bin sehen](https://jsbin.com/memazaro/1/edit).

## Suchbar

Das `seekable` Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück und teilt mit, welche Teile des Mediums ohne Verzögerung abgespielt werden können; dies ist unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können suchbar, aber nicht gepuffert sein, wenn Byte-Bereichsanfragen auf dem Server aktiviert sind. Byte-Bereichsanfragen ermöglichen es, Teile der Mediendatei vom Server auszuliefern, sodass sie fast sofort abspielbereit sind — daher sind sie suchbar. Für weitere Informationen zu Byte-Bereichsanfragen siehe [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Eigenes Feedback zur Pufferung erstellen

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, möchten wir möglicherweise Rückmeldungen darüber geben, wie viel des Mediums abspielbereit ist. In der Praxis ist es eine gute Methode, das `seekable` Attribut zu verwenden, obwohl wie wir oben gesehen haben, suchbare Teile des Mediums nicht unbedingt zusammenhängend sind — sie sind es jedoch oft, und wir können diese Information sicher schätzen, um dem Benutzer anzuzeigen, welche Teile des Mediums direkt abgespielt werden können. Wir können diesen Punkt im Medium mit der folgenden Codezeile finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> **Hinweis:** `audio.seekable.end(audio.seekable.length - 1)` zeigt eigentlich den Endpunkt des letzten suchbaren Zeitbereichs an (nicht alle suchbaren Medien). In der Praxis ist dies gut genug, da der Browser entweder Bereichsanfragen aktiviert oder nicht. Wenn nicht, wird `audio.seekable` äquivalent zu `audio.buffered` sein, was eine gültige Anzeige des Endes der suchbaren Medien gibt. Wenn Bereichsanfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde — dies scheint das zu sein, was die nativen Player des Browsers anzeigen.

Also lassen Sie uns dies aufbauen. Das HTML für unseren Player sieht folgendermaßen aus:

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

Wir verwenden das folgende CSS, um die Anzeige der Pufferung zu stylen:

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

Und das folgende JavaScript liefert unsere Funktionalität:

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

Das `progress` Ereignis wird ausgelöst, wenn Daten heruntergeladen werden; dies ist ein gutes Ereignis, um darauf zu reagieren, wenn wir den Download- oder Pufferungsfortschritt anzeigen möchten.

Das `timeupdate` Ereignis wird 4 Mal pro Sekunde ausgelöst, während das Medium abgespielt wird. Dabei erhöhen wir den Fortschrittsbalken.

Dies sollte Ihnen Ergebnisse liefern, die der folgenden Darstellung ähnlich sind, wobei der hellgraue Balken den gepufferten Fortschritt und der grüne Balken den abgespielten Fortschritt zeigt:

![Ein Audioplayer mit Play-Taste, Suchleiste und Lautstärkeregelung, sowie ein Fortschrittsbalken unter den Steuerungen. Der Fortschrittsbalken hat einen grünen Teil, um das abgespielte Video anzuzeigen, und einen hellgrauen Teil, um zu zeigen, wie viel gepuffert wurde.](bufferedprogress.png)

> [!NOTE]
> Sie können den [Pufferungscode live auf JS Bin sehen](https://jsbin.com/badimipi/1/edit).

## Ein kurzes Wort zu Played

Es lohnt sich, die `played` Eigenschaft zu erwähnen — sie gibt an, welche Zeitbereiche innerhalb der Medien abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihrer Medien am häufigsten gehört oder angesehen werden.
