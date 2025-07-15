---
title: Audio für Web-Spiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: 3febefcad7814b2db1e00ded577b0ad9276b6b2f
---

Audio ist ein wichtiger Bestandteil eines jeden Spiels; es fügt Feedback und Atmosphäre hinzu. Web-basiertes Audio entwickelt sich schnell weiter, aber es gibt immer noch viele Browserunterschiede, die es zu beachten gilt. Oft müssen wir entscheiden, welche Audioteile für die Spielerfahrung unerlässlich sind und welche zwar nett, aber nicht zwingend erforderlich sind, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Web-Spiele und untersucht, was derzeit auf möglichst vielen Plattformen funktioniert.

## Einschränkungen bei mobilem Audio

Bei weitem die schwierigsten Plattformen, um Web-Audio-Unterstützung bereitzustellen, sind mobile Plattformen. Leider sind dies auch die Plattformen, die Menschen oft zum Spielen verwenden. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die Browseranbieter möglicherweise dazu veranlasst haben, Entscheidungen zu treffen, die Web-Audio für Spieleentwickler schwierig machen können. Schauen wir uns diese nun an.

### Autoplay

Die Browser-Autoplay-Richtlinie betrifft nun sowohl Desktop- als auch mobile Browser. Weitere Informationen dazu finden Sie [hier auf der Google Developers-Website](https://developer.chrome.com/blog/autoplay/).

Es ist erwähnenswert, dass Autoplay mit Ton erlaubt ist, wenn:

- der Benutzer mit der Domain interagiert hat.
- auf Mobilgeräten der Nutzer [die Applikation installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren alle von Ihrem Spiel gestellten Anfragen, Audio automatisch abzuspielen; stattdessen muss die Audiowiedergabe durch ein benutzerinitiiertes Ereignis wie ein Klicken oder Tippen gestartet werden. Das bedeutet, dass Sie Ihre Audiowiedergabe so strukturieren müssen, dass dies berücksichtigt wird. Dies wird normalerweise dadurch gemildert, dass Audio im Voraus geladen und bei einem benutzerinitiierten Ereignis vorbereitet wird.

Für passiveres Audio-Autoplay, beispielsweise Hintergrundmusik, die beim Laden eines Spiels startet, besteht ein Trick darin, _jedes_ benutzerinitiierte Ereignis zu erkennen und dann die Wiedergabe zu starten. Für andere, aktivere Sounds, die während des Spiels verwendet werden sollen, könnten wir in Betracht ziehen, sie sofort vorzubereiten, wenn beispielsweise eine _Start_-Taste gedrückt wird.

Um Audio auf diese Weise vorzubereiten, möchten wir einen Teil davon abspielen; aus diesem Grund ist es nützlich, einen Moment der Stille am Ende Ihres Audiosamples einzuschließen. Wenn Sie zu dieser Stille springen, sie abspielen und dann pausieren, können Sie nun JavaScript verwenden, um diese Datei zu beliebigen Zeitpunkten abzuspielen. Mehr über [Best Practices mit der Autoplay-Richtlinie finden Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei bei null Lautstärke könnte auch funktionieren, wenn der Browser Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das Abspielen und sofortige Pausieren Ihres Audios nicht garantiert, dass ein kleines Stück Audio nicht abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Startbildschirm Ihres Mobilgeräts kann ihre Fähigkeiten ändern. Im Falle von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

Für Unterstützung von Autoplay siehe [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#browser_compatibility).

### Lautstärke

Die programmatische Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft gegebene Grund ist, dass der Benutzer die Lautstärke auf Betriebssystemebene steuern sollte und dies nicht überschrieben werden sollte.

Für Unterstützung der Lautstärkeregelung siehe [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume#browser_compatibility).

### Puffern und Vorladen

Wahrscheinlich als Versuch, einen unkontrollierten Datenverbrauch mobiler Netzwerke zu mindern, finden wir oft auch, dass das Puffern deaktiviert ist, bevor die Wiedergabe initiiert wurde. Puffern ist der Prozess, bei dem der Browser das Medium im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um festzustellen, ob ein Track in einem abspielbaren Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Pufferns veraltet. Solange Byte-Range-Anfragen akzeptiert werden (was das Standardverhalten ist), sollten wir in der Lage sein, zu einem bestimmten Punkt im Audio zu springen, ohne den vorhergehenden Inhalt herunterladen zu müssen. Allerdings ist Vorladen immer noch nützlich — ohne Vorladen müsste es immer einen gewissen Client-Server-Kommunikationsaufwand geben, bevor die Wiedergabe beginnen kann.

Es gibt ein [vollständiges Kompatibilitätsdiagramm für die Unterstützung von HTMLMediaElement auf mobilen und Desktop-Geräten hier](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

## Mobile Workarounds

Obwohl mobile Browser Probleme darstellen können, gibt es Möglichkeiten, die oben beschriebenen Probleme zu umgehen.

### Audio-Sprites

Audio-Sprites entlehnen ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik, mit der CSS mit einer einzigen Grafikressource verwendet wird, um sie in eine Reihe von Sprites zu zerlegen. Das gleiche Prinzip können wir auch auf Audio anwenden, sodass wir anstelle einer Vielzahl kleiner Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren benötigten Audioschnipsel enthält. Um einen bestimmten Sound aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stop-Zeiten für jedes Audio-Sprite.

Der Vorteil ist, dass wir ein Audiostück vorbereiten können und unsere Sprites einsatzbereit haben. Dazu können wir einfach das größere Audiostück abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie stoppen müssen. Wenn Sie Ihre einzelnen Sounds um mindestens 500ms auseinanderlegen, sollte das `timeUpdate`-Ereignis (das alle 250ms ausgelöst wird) ausreichend sein. Ihre Dateien können etwas länger sein, als sie eigentlich sein müssten, aber Stille komprimiert sich gut.

Hier ist ein Beispiel für einen Audio-Sprite-Player — richten wir zunächst die Benutzeroberfläche in HTML ein:

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

Jetzt haben wir Schaltflächen mit Start- und Stoppzeiten in Sekunden. Die MP3-Datei "countdown.mp3" besteht aus einer Zahl, die alle 2 Sekunden gesprochen wird, wobei die Idee ist, diese Zahl wiederzugeben, wenn die entsprechende Schaltfläche gedrückt wird.

Fügen wir etwas JavaScript hinzu, damit dies funktioniert:

```js live-sample___audio-sprite
const myAudio = document.getElementById("myAudio");
const buttons = document.getElementsByTagName("button");
let stopTime = 0;

for (const button of buttons) {
  button.addEventListener(
    "click",
    () => {
      myAudio.currentTime = button.dataset.start;
      stopTime = Number(button.dataset.stop);
      myAudio.play();
    },
    false,
  );
}

myAudio.addEventListener(
  "timeupdate",
  () => {
    if (myAudio.currentTime > stopTime) {
      myAudio.pause();
    }
  },
  false,
);
```

{{EmbedLiveSample("audio-sprite", "", 200)}}

> [!NOTE]
> Auf mobilen Geräten müssen wir diesen Code möglicherweise von einem benutzerinitiierten Ereignis wie dem Drücken einer Starttaste auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf die Bitraten. Das Codieren Ihres Audios mit niedrigeren Bitraten bedeutet kleinere Dateigrößen, aber geringere Genauigkeit beim Suchen.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikstücke mischen und anpassen, und wenn Sie in der Lage sind, die Lautstärke Ihres Audioelements zu kontrollieren, könnten Sie problemlos zwischen Musikstücken überblenden. Mithilfe der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu verändern, um sie besser mit der Aktion zu synchronisieren.

All dies ist möglich mit dem Standard-{{htmlelement("audio")}}-Element und dem zugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), aber es wird viel einfacher und flexibler mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API). Schauen wir uns das als Nächstes an.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. Vor diesem Hintergrund ist es in vielen Situationen eine akzeptable Vorgehensweise, die Web Audio API zu nutzen (siehe die [Can I use Web Audio API page](https://caniuse.com/#feat=audio-api) für weitere Informationen zur Browser-Kompatibilität). Die Web Audio API ist eine fortschrittliche JavaScript-API für Audio, die ideal für Spielaudio ist. Entwickler können Audio erzeugen und Audiosamples manipulieren sowie Sound im 3D-Spielraum positionieren.

Eine machbare Cross-Browser-Strategie wäre es, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, die Erfahrung mit der Web Audio API zu verbessern.

> [!NOTE]
> Bemerkenswert ist, dass iOS Safari mittlerweile die Web Audio API unterstützt, was bedeutet, dass es nun möglich ist, webbasierte Spiele mit Audio in nativer Qualität für iOS zu schreiben.

Da die Web Audio API präzises Timing und Kontrolle der Audiowiedergabe ermöglicht, können wir damit Samples zu bestimmten Momenten abspielen, was ein entscheidender immersiver Aspekt von Spielen ist. Schließlich möchte man, dass Explosionen von einem donnernden Knall begleitet werden und nicht danach erfolgen.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik zu liefern, die sich nicht in Reaktion auf die Spielumgebung ändert, ist die Web Audio API ideal, um eine dynamischere Musikerfahrung zu implementieren. Sie können wollen, dass sich die Musik verändert, je nachdem ob Sie versuchen, Spannung aufzubauen oder den Spieler auf irgendeine Weise zu ermutigen. Musik ist ein wichtiger Teil des Spielerlebnisses und je nachdem, welches Spiel Sie machen, möchten Sie möglicherweise erheblichen Aufwand investieren, um sie richtig hinzubekommen.

Eine Möglichkeit, Ihren Soundtrack dynamischer zu gestalten, besteht darin, ihn in Komponenten-Loops oder Tracks aufzuteilen. Dies ist oft die Art und Weise, wie Musiker ohnehin Musik komponieren, und die Web Audio API ist extrem gut darin, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks haben, die Ihr Stück ausmachen, können Sie die Tracks je nach Bedarf ein- und ausblenden.

Sie können auch Filter oder Effekte auf die Musik anwenden. Ist Ihr Charakter in einer Höhle? Erhöhen Sie den Hall. Vielleicht haben Sie Unterwasser-Szenen, bei denen Sie einen Filter anwenden könnten, der den Ton dämpft.

Schauen wir uns einige Techniken der Web Audio API an, um Musik dynamisch aus ihren Basistracks anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie separate Tracks und Loops einzeln über die [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchrones Laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind und Sie sie abspielen können, während andere geladen werden.

In jedem Fall möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die in dem Moment zu ticken beginnt, in dem Sie einen Audio-Kontext erstellen. Sie müssen die Zeit zwischen der Erstellung eines Audio-Kontexts und dem Starten des ersten Audiotracks berücksichtigen. Diese Verschiebung aufzuzeichnen und die aktuelle Zeit des abspielenden Tracks abzufragen, gibt Ihnen genügend Informationen, um separate Teile des Audios zu synchronisieren.

Um dies in Aktion zu sehen, legen wir einige separate Tracks fest:

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

Alle diese Tracks haben das gleiche Tempo und sind darauf ausgelegt, mit einander synchronisiert zu werden. Daher müssen wir sicherstellen, dass sie geladen und der API _vor_ der Wiedergabe zur Verfügung stehen. Das können wir mit der Funktionalität von JavaScripts [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await) tun.

Sobald sie abspielbereit sind, müssen wir sicherstellen, dass sie an dem richtigen Punkt starten, an dem sich andere Tracks befinden könnten, sodass sie synchronisiert werden.

Lassen Sie uns unseren Audio-Kontext erstellen:

```js
const audioCtx = new AudioContext();
```

Nun wählen wir alle {{htmlelement("li")}}-Elemente aus; später können wir diese Elemente nutzen, um auf den Dateipfad des Tracks und jede einzelne Abspieltaste zuzugreifen.

```js
const trackEls = document.querySelectorAll("li");
```

Wir möchten sicherstellen, dass jede Datei geladen und in einem Puffer dekodiert wurde, bevor wir sie verwenden, also lassen Sie uns eine `async`-Funktion erstellen, die es uns ermöglicht, dies zu tun:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Anschließend können wir den `await`-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgende Codeausführungen ausführen können, wenn sie fertig ist.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden asynchronen Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Wir benötigen hier einen Offset, sodass wir, wenn wir begonnen haben, eine Datei abzuspielen, wissen, wie weit wir im Stück fortgeschritten sind, um eine andere Datei abzuspielen.

`start()` nimmt zwei optionale Parameter auf. Der erste ist, wann die Wiedergabe beginnen soll, und der zweite ist wo, was unser Offset ist.

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

Zu guter Letzt lassen Sie uns über unsere `<li>`-Elemente iterieren, die richtige Datei für jedes einzelne greifen und dann die Wiedergabe ermöglichen, indem wir den "Laden"-Text ausblenden und die Abspieltaste anzeigen:

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
> Sie können [diese Demo hier in Aktion sehen](https://mdn.github.io/webaudio-examples/multi-track/) und [den Quellcode hier ansehen](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

Im Kontext Ihrer Spielwelt könnten Sie Loops und Samples haben, die unter verschiedenen Umständen abgespielt werden, und es kann nützlich sein, mit anderen Tracks zu synchronisieren, um ein nahtloseres Erlebnis zu schaffen.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Takt endet, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir die BPM (Beats Per Minute) der Tracks kennen.

Möglicherweise klingt die Einführung eines neuen Tracks natürlicher, wenn er im Takt/Takt/Phrase oder welche Einheiten auch immer Sie verwenden, um Ihre Hintergrundmusik zu unterteilen, erfolgt.

Um dies vor dem Abspielen des Tracks, den Sie synchronisieren möchten, zu tun, sollten Sie berechnen, wie lange es bis zum Start des nächsten Takts/Schlages etc. dauert.

Hier ist ein wenig Code, der bei einem speziellen Tempo (der Zeit in Sekunden für Ihren Takt/Takt) berechnet, wie lange man warten muss, bis man das nächste Stück abspielen kann — Sie speisen den resultierenden Wert in die `start()`-Funktion mit dem ersten Parameter ein, der die absolute Zeit nimmt, wann diese Wiedergabe beginnen soll. Beachten Sie, dass der zweite Parameter (wo man im neuen Track zu spielen beginnt) relativ ist:

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
> Wenn der erste Parameter 0 oder kleiner als die `currentTime` des Kontextes ist, beginnt die Wiedergabe sofort.

Um dies auszuprobieren, können Sie den gleichen Multi-Track-Quellcode wie oben verwenden, aber die `if`-Anweisung in der `playTrack()`-Funktion mit dem obigen Code ersetzen.

### Positionales Audio

Positionales Audio kann eine wichtige Technik sein, um Audio zu einem Schlüsselelement einer immersiven Spielerfahrung zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Reihe von Audioquellen im dreidimensionalen Raum zu positionieren, sondern auch Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Das [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die positionsfähigen Möglichkeiten der Web Audio API, sodass wir dem Spieler weitere Informationen über die Spielwelt mitteilen können. Es gibt hier ein [Tutorial](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um das `pannerNode` besser zu verstehen.

Wir können gestalten:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser usw.)

Das ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es ermöglicht, Audio an die Objekte und Standpunkte zu binden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Reference/Elements/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
