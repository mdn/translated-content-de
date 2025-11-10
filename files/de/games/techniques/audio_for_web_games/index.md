---
title: Audio für Webspiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Audio ist ein wichtiger Bestandteil jedes Spiels; es fügt Feedback und Atmosphäre hinzu. Web-basiertes Audio entwickelt sich schnell weiter, aber es gibt immer noch viele Unterschiede zwischen den Browsern, die es zu beachten gilt. Oft müssen wir entscheiden, welche Teile des Audios wesentlich für das Spielerlebnis sind und welche zwar nett, aber nicht unbedingt notwendig sind, und dementsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Webspiele und untersucht, was derzeit auf möglichst vielen Plattformen funktioniert.

## Mobile Audio-Einschränkungen

Die bei weitem schwierigsten Plattformen zur Bereitstellung von Web-Audio-Unterstützung sind mobile Plattformen. Leider sind dies auch die Plattformen, die oft zum Spielen von Spielen verwendet werden. Es gibt einige Unterschiede zwischen Desktop- und Mobilbrowsern, die dazu führen können, dass Browseranbieter Entscheidungen treffen, die es Entwicklern von Web-Audio schwer machen, mit diesen zu arbeiten. Lassen Sie uns dies nun betrachten.

### Autoplay

Die Autoplay-Richtlinie von Browsern betrifft jetzt sowohl Desktop- als auch Mobilbrowser. Weitere Informationen dazu finden Sie [hier auf der Google Developers-Seite](https://developer.chrome.com/blog/autoplay/).

Es ist erwähnenswert, dass Autoplay mit Ton erlaubt ist, wenn:

- der Nutzer mit der Domain interagiert hat.
- der Nutzer auf dem Mobilgerät die Anwendung [installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren automatische Wiedergabeanforderungen Ihres Spiels; stattdessen muss die Wiedergabe von Audio durch ein nutzergesteuertes Ereignis, wie ein Klick oder Tippen, gestartet werden. Das bedeutet, dass Sie die Audiowiedergabe so strukturieren müssen, dass dies berücksichtigt wird. Dies wird in der Regel dadurch abgemildert, dass das Audio im Voraus geladen und bei einem nutzergesteuerten Ereignis vorbereitet wird.

Für eine weniger aktive Audiowiedergabe, wie Hintergrundmusik, die sofort nach dem Laden des Spiels startet, besteht ein Trick darin, _jedes_ nutzergesteuerte Ereignis zu erkennen und die Wiedergabe zu diesem Zeitpunkt zu starten. Für andere aktivere Geräusche, die während des Spiels verwendet werden sollen, könnten wir in Erwägung ziehen, diese zu primen, sobald beispielsweise ein _Start_-Knopf gedrückt wird.

Um Audio auf diese Weise zu primen, möchten wir einen Teil davon abspielen; daher ist es nützlich, einen Moment der Stille am Ende Ihrer Audioaufnahme einzufügen. Das Springen zu, Abspielen und anschließende Pausieren dieser Stille bedeutet, dass wir jetzt JavaScript verwenden können, um diese Datei zu beliebigen Zeitpunkten abzuspielen. Weitere Informationen zu [Best Practices mit der Autoplay-Richtlinie finden Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei mit null Lautstärke könnte ebenfalls funktionieren, wenn der Browser es Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das Abspielen und sofortige Pausieren Ihres Audios nicht garantiert, dass nicht ein kleiner Teil des Audios abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Home-Bildschirm Ihres Handys kann deren Fähigkeiten ändern. Im Falle von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

Für die Unterstützung von Autoplay, siehe [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#browser_compatibility).

### Lautstärke

Die programmgesteuerte Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft angegebene Grund ist, dass der Benutzer die Lautstärke auf Betriebssystemebene steuern soll und diese nicht überschrieben werden sollte.

Für die Unterstützung der Lautstärkeregelung siehe [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume#browser_compatibility).

### Buffering und Preloading

Wahrscheinlich als Versuch, eine unkontrollierte Nutzung mobiler Netzdaten zu mindern, stellen wir oft fest, dass das Buffering deaktiviert ist, bevor die Wiedergabe initiiert wurde. Buffering ist der Prozess, bei dem der Browser die Medien im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interface bietet [eine Vielzahl von Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um zu bestimmen, ob ein Track in einem abspielbaren Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Bufferings veraltet. Solange Bereichsanfragen akzeptiert werden (was das Standardverhalten ist), sollten wir zu einem bestimmten Punkt im Audio springen können, ohne den vorausgehenden Inhalt herunterladen zu müssen. Preloading ist jedoch immer noch nützlich — ohne es würde vor dem Beginn der Wiedergabe immer eine gewisse Client-Server-Kommunikation erforderlich sein.

Es gibt [hier eine vollständige Kompatibilitätstabelle für die Unterstützung von HTMLMediaElement auf mobilen und Desktop-Geräten](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

## Mobile Workarounds

Obwohl mobile Browser Probleme darstellen können, gibt es Möglichkeiten, die oben genannten Probleme zu umgehen.

### Audio-Sprites

Audio-Sprites leihen sich ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/Guides/Images/Implementing_image_sprites), einer visuellen Technik zur Verwendung von CSS mit einer einzigen Grafikressource, um sie in eine Reihe von Sprites zu zerlegen. Wir können dasselbe Prinzip auf Audio anwenden, so dass wir anstatt einer Reihe kleiner Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren Audio-Schnipsel enthält, die wir benötigen. Um ein bestimmtes Geräusch aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stoppzeiten für jedes Audio-Sprite.

Der Vorteil besteht darin, dass wir ein Audio vorbereiten und unsere Sprites bereit zum Abspielen haben. Dazu können wir einfach das größere Stück Audio abspielen und sofort pausieren. Außerdem reduzieren Sie die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie anhalten müssen. Wenn Sie Ihre individuellen Geräusche um mindestens 500ms voneinander trennen, sollte die Verwendung des `timeUpdate`-Events (das alle 250ms ausgelöst wird) ausreichen. Ihre Dateien könnten etwas länger sein als eigentlich notwendig, aber Stille komprimiert sich gut.

Hier ist ein Beispiel für einen Audio-Sprite-Player — zuerst richten wir die Benutzeroberfläche in HTML ein:

```html live-sample___audio-sprite
<audio id="myAudio" src="/shared-assets/audio/countdown.mp3"></audio>
<button data-start="18" data-stop="19">0</button>
<button data-start="16" data-stop="17">1</button>
<button data-start="14" data-stop="15">2</button>
<button data-start="12" data-stop="13">3</button>
<button data-start="10" data-stop="11">4</button>
<button data-start="8" data-stop="9">5</button>
<button data-start="6" data-stop="7">6</button>
<button data-start="4" data-stop="5">7</button>
<button data-start="2" data-stop="3">8</button>
<button data-start="0" data-stop="1">9</button>
```

Jetzt haben wir Buttons mit Start- und Stoppzeiten in Sekunden. Die MP3-Datei "countdown.mp3" besteht aus einer Zahl, die alle 2 Sekunden gesprochen wird, wobei die Idee besteht, diese Zahl abzuspielen, wenn der entsprechende Button gedrückt wird.

Lassen Sie uns etwas JavaScript hinzufügen, um dies zum Laufen zu bringen:

```js live-sample___audio-sprite
const myAudio = document.getElementById("myAudio");
const buttons = document.getElementsByTagName("button");
let stopTime = 0;

for (const button of buttons) {
  button.addEventListener("click", () => {
    myAudio.currentTime = button.dataset.start;
    stopTime = Number(button.dataset.stop);
    myAudio.play();
  });
}

myAudio.addEventListener("timeupdate", () => {
  if (myAudio.currentTime > stopTime) {
    myAudio.pause();
  }
});
```

{{EmbedLiveSample("audio-sprite", "", 200)}}

> [!NOTE]
> Auf mobilen Geräten müssen wir diesen Code möglicherweise von einem nutzergesteuerten Ereignis auslösen, z. B. durch Drücken eines Start-Buttons, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Das Kodieren Ihres Audios mit niedrigeren Bitraten bedeutet kleinere Dateigrößen, aber geringere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikstücke mischen und kombinieren, und vorausgesetzt, Sie können die Lautstärke Ihres Audioelements steuern, könnten Sie verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu beeinflussen, um sie besser mit der Aktion zu synchronisieren.

All dies ist mit dem Standard-{{htmlelement("audio")}}-Element und dem zugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, aber es wird viel einfacher und flexibler mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API). Lassen Sie uns dies als Nächstes betrachten.

### Web Audio API für Spiele

Die Web Audio API wird von allen modernen Desktop- und Mobilbrowsern unterstützt, mit Ausnahme von Opera Mini. In Anbetracht dessen ist es für viele Situationen eine akzeptable Methode, die Web Audio API zu verwenden (siehe die [Can I use Web Audio API-Seite](https://caniuse.com/#feat=audio-api) für weitere Informationen zur Browser-Kompatibilität). Die Web Audio API ist eine fortschrittliche Audio-JavaScript-API, die sich ideal für Spielaudio eignet. Entwickler können Audio erzeugen und Audiosamples manipulieren sowie Sound im 3D-Spielebereich positionieren.

Eine durchführbare Cross-Browser-Strategie wäre es, grundlegende Audios mit dem Standard-`<audio>`-Element anzubieten und, wo unterstützt, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Bedeutend ist, dass iOS Safari jetzt die Web Audio API unterstützt, was bedeutet, dass es jetzt möglich ist, webbasierte Spiele mit nativer Audioqualität für iOS zu schreiben.

Da die Web Audio API eine präzise Timing- und Wiedergabekontrolle von Audio ermöglicht, können wir sie nutzen, um Samples zu bestimmten Momenten abzuspielen, was ein wichtiger immersiver Aspekt beim Spielen ist. Schließlich möchten Sie, dass die Explosionen von einem donnernden Knall begleitet werden, nicht von einem verzögerten.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik zu liefern, die nicht auf die Änderungen der Spielumgebung reagiert, eignet sich die Web Audio API ideal zur Umsetzung eines dynamischeren Musikerlebnisses. Sie möchten, dass sich die Musik ändert, je nachdem, ob Sie versuchen, Spannung aufzubauen oder den Spieler auf irgendeine Weise zu ermutigen. Musik ist ein wichtiger Teil des Spielerlebnisses, und je nach Art des Spiels, das Sie entwickeln, sollten Sie erhebliche Anstrengungen unternehmen, um es richtig zu machen.

Eine Möglichkeit, Ihren Musik-Soundtrack dynamischer zu gestalten, besteht darin, ihn in Komponentenschleifen oder -tracks zu zerlegen. Dies ist oft die Art und Weise, wie Musiker Musik ohnehin komponieren, und die Web Audio API ist ausgesprochen gut darin, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks haben, aus denen Ihr Stück besteht, können Sie Tracks je nach Bedarf ein- und ausblenden.

Sie können auch Filter oder Effekte auf die Musik anwenden. Befindet sich Ihr Charakter in einer Höhle? Erhöhen Sie das Echo. Vielleicht haben Sie Unterwasserszenen, bei denen Sie einen Filter anwenden könnten, der den Ton dämpft.

Schauen wir uns einige Techniken der Web Audio API an, um die Musik dynamisch aus ihren Basistracks anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie separate Tracks und Loops einzeln mit der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchronously laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind, und Sie können damit beginnen, sie abzuspielen, während andere noch laden.

In jedem Fall möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audio-Kontext erstellen. Sie müssen die Zeit zwischen der Erstellung eines Audio-Kontexts und der Wiedergabe des ersten Audio-Tracks berücksichtigen. Das Aufzeichnen dieses Versatzes und das Abfragen der aktuellen Zeit des abgespielten Tracks gibt Ihnen genug Informationen, um separate Audio-Stücke zu synchronisieren.

Um dies in Aktion zu sehen, legen wir einige separate Tracks an:

```html
<section id="tracks">
  <ul>
    <li data-loading="true">
      <a href="leadguitar.mp3" class="track">Lead Guitar</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="guitar-play-label">
        <span id="guitar-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="bassguitar.mp3" class="track">Bass Guitar</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="bass-play-label">
        <span id="bass-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="drums.mp3" class="track">Drums</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="drums-play-label">
        <span id="drums-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="horns.mp3" class="track">Horns</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="horns-play-label">
        <span id="horns-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="clav.mp3" class="track">Clavi</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="clavi-play-label">
        <span id="clavi-play-label">Play</span>
      </button>
    </li>
  </ul>
  <p class="sourced">
    All tracks sourced from <a href="https://jplayer.org/">jplayer.org</a>
  </p>
</section>
```

Alle diese Tracks haben das gleiche Tempo und sind dafür ausgelegt, synchronisiert zu werden, sodass wir sicherstellen müssen, dass sie geladen und der API zur Verfügung stehen, _bevor_ wir sie abspielen können. Wir können dies mit der [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await) Funktionalität von JavaScript tun.

Sobald sie verfügbar sind, müssen wir sicherstellen, dass sie an dem Punkt anfangen, an dem andere Tracks möglicherweise abgespielt werden, sodass sie synchron sind.

Lassen Sie uns unseren Audio-Kontext erstellen:

```js
const audioCtx = new AudioContext();
```

Nun lassen Sie uns alle {{htmlelement("li")}}-Elemente auswählen; später können wir diese Elemente nutzen, um Zugang zum Dateipfad des Tracks und zu jedem einzelnen Wiedergabeknopf zu erhalten.

```js
const trackEls = document.querySelectorAll("li");
```

Wir wollen sicherstellen, dass jede Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden, also lassen Sie uns eine `async`-Funktion erstellen, die es uns erlaubt, dies zu tun:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgende Code ausführen können, wenn sie fertig ausgeführt wurde.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die zwei `async`-Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Wir benötigen hier einen Versatz, damit wir im Falle des Starts einer Datei, die wir abspielen möchten, einen Aufzeichnung haben, wie weit diese gespielt hat, um eine andere Datei zu starten.

`start()` nimmt zwei optionale Parameter. Der erste ist, wann die Wiedergabe beginnen soll, und der zweite ist der Ort, was unser Versatz ist.

```js
let offset = 0;

function playTrack(audioBuffer) {
  const trackSource = audioCtx.createBufferSource();
  trackSource.buffer = audioBuffer;
  trackSource.connect(audioCtx.destination);

  if (offset === 0) {
    trackSource.start();
    offset = audioCtx.currentTime;
  } else {
    trackSource.start(0, audioCtx.currentTime - offset);
  }

  return trackSource;
}
```

Schließlich lassen Sie uns über unsere `<li>`-Elemente iterieren, die richtige Datei für jedes von ihnen greifen und dann die Wiedergabe ermöglichen, indem wir den "loading"-Text ausblenden und den Play-Button anzeigen:

```js
trackEls.forEach((el, i) => {
  // Get children
  const anchor = el.querySelector("a");
  const loadText = el.querySelector("p");
  const playButton = el.querySelector("button");

  // Load file
  loadFile(anchor.href).then((track) => {
    // Set loading to false
    el.dataset.loading = "false";

    // Hide loading text
    loadText.style.display = "none";

    // Show button
    playButton.style.display = "inline-block";

    // Allow play on click
    playButton.addEventListener("click", () => {
      // Check if context is in suspended state (autoplay policy)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      playTrack(track);
      playButton.dataset.playing = true;
    });
  });
});
```

> [!NOTE]
> Sie können [dieses Demo in Aktion hier sehen](https://mdn.github.io/webaudio-examples/multi-track/) und [den Quellcode hier ansehen](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

Im Kontext Ihrer Spielewelt haben Sie möglicherweise Loops und Samples, die unter verschiedenen Umständen abgespielt werden, und es kann nützlich sein, diese mit anderen Tracks zu synchronisieren, um ein nahtloseres Erlebnis zu bieten.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Takt endet, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir die BPM (Beats pro Minute) der Tracks kennen.

Möglicherweise finden Sie, dass die Einführung eines neuen Tracks natürlicher klingt, wenn er im Takt, Taktstab oder in welcher Einheit auch immer Sie Ihre Hintergrundmusik unterteilen, einsetzt.

Um dies vor dem Abspielen des Tracks zu tun, den Sie synchronisieren möchten, sollten Sie berechnen, wie lange es dauert, bis der nächste Beat/Taktstab etc. beginnt.

Hier ist ein bisschen Code, der bei einer gegebenen Geschwindigkeit (der Zeit in Sekunden Ihrer Taktstab) berechnet, wie lange gewartet werden soll, bis Sie den nächsten Teil abspielen — Sie übergeben den resultierenden Wert an die `start()`-Funktion mit dem ersten Parameter, der die absolute Zeit angibt, wann diese Wiedergabe beginnen soll. Beachten Sie, dass der zweite Parameter (wo im neuen Track begonnen werden soll) relativ ist:

```js
const tempo = 3.074074076;

if (offset === 0) {
  source.start();
  offset = context.currentTime;
} else {
  const relativeTime = context.currentTime - offset;
  const beats = relativeTime / tempo;
  const remainder = beats - Math.floor(beats);
  const delay = tempo - remainder * tempo;
  source.start(context.currentTime + delay, relativeTime + delay);
}
```

> [!NOTE]
> Wenn der erste Parameter 0 oder kleiner als die `currentTime` des Kontexts ist, beginnt die Wiedergabe sofort.

Um dies zu versuchen, können Sie denselben Multi-Track-Quellcode wie oben verwenden, jedoch die `if`-Anweisung in der `playTrack()`-Funktion mit dem obigen Code ersetzen.

### Positional Audio

Positional Audio kann eine wichtige Technik sein, um Audio zu einem zentralen Bestandteil eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Reihe von Audioquellen im dreidimensionalen Raum zu positionieren, sondern auch, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Das [`pannerNode`](/de/docs/Web/API/PannerNode) verwendet die räumlichen Fähigkeiten der Web Audio API, sodass wir weitere Informationen über die Spielwelt an den Spieler übermitteln können. Hier ist ein [Tutorial](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um das `pannerNode` ausführlicher zu verstehen.

Wir können Folgendes beziehen:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, etc.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es ermöglicht, Audio mit den Objekten und Standpunkten zu verknüpfen.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Reference/Elements/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
