---
title: Audio für Webspiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Audio ist ein wichtiger Bestandteil jedes Spiels; es trägt zur Rückmeldung und Atmosphäre bei. Webbasierte Audio-Technologien entwickeln sich rasch weiter, doch gibt es immer noch viele Unterschiede zwischen den Browsern, die es zu berücksichtigen gilt. Oft müssen wir entscheiden, welche Audiodaten für das Spielerlebnis unerlässlich sind und welche zwar nett, aber nicht unbedingt notwendig sind, um dementsprechend eine Strategie zu entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Webspiele und untersucht, was derzeit auf möglichst vielen Plattformen funktioniert.

## Einschränkungen bei mobiler Audio

Mit Abstand die schwierigsten Plattformen für die Unterstützung von Webaudio sind mobile Plattformen. Leider sind dies auch die Plattformen, auf denen häufig Spiele gespielt werden. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die dazu geführt haben könnten, dass Browseranbieter Entscheidungen getroffen haben, die es Spieleentwicklern erschweren, mit Webaudio zu arbeiten. Schauen wir uns diese nun an.

### Autoplay

Die Autoplay-Richtlinien von Browsern betreffen jetzt sowohl Desktop- als auch mobile Browser. Weitere Informationen dazu finden Sie [hier auf der Website der Google-Entwickler](https://developer.chrome.com/blog/autoplay/).

Es ist wichtig zu beachten, dass Autoplay mit Ton erlaubt ist, wenn:

- der Benutzer mit der Domain interagiert hat.
- auf mobilen Geräten der Benutzer die [Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren Anfragen Ihres Spiels, automatisch Audio abzuspielen; stattdessen muss die Wiedergabe von Audio durch ein benutzerinitiiertes Ereignis gestartet werden, wie z.B. ein Klick oder Tippen. Dies bedeutet, dass Sie die Audiowiedergabe so strukturieren müssen, dass dies berücksichtigt wird. Dies wird normalerweise dadurch abgemildert, dass das Audio im Voraus geladen und bei einem benutzerinitiierten Ereignis vorbereitet wird.

Für eher passives Audio-Autoplay, beispielsweise Hintergrundmusik, die sofort nach dem Laden eines Spiels startet, ist ein Trick, _jedes_ benutzerinitiierte Ereignis zu erkennen und dann die Wiedergabe zu starten. Für andere, aktivere Sounds, die im Spiel verwendet werden sollen, können wir in Betracht ziehen, sie vorzubereiten, sobald etwas wie ein _Start_-Button gedrückt wird.

Um Audio auf diese Weise vorzubereiten, möchten wir einen Teil davon abspielen; deswegen ist es nützlich, am Ende Ihres Audiosamples einen Moment der Stille einzubauen. Das Springen zu, Abspielen und dann Pausieren dieser Stille ermöglicht es uns, diese Datei mit JavaScript zu beliebigen Zeitpunkten abzuspielen. Sie können mehr über [beste Praktiken mit der Autoplay-Richtlinie hier erfahren](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei mit null Lautstärke könnte ebenfalls funktionieren, wenn der Browser das Ändern der Lautstärke zulässt (siehe unten). Beachten Sie auch, dass die sofortige Pause Ihres Audios nicht garantiert, dass nicht doch ein kleines Stück Audio abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Home-Bildschirm Ihres Mobilgeräts kann dessen Fähigkeiten verändern. Im Fall von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen ausprobieren, um zu sehen, wie er funktioniert.

Für die Unterstützung von Autoplay siehe [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#browser_compatibility).

### Lautstärke

Die programmgesteuerte Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der häufig genannte Grund ist, dass der Benutzer die Lautstärke auf OS-Ebene steuern sollte und dies nicht umgangen werden darf.

Für die Unterstützung der Lautstärkeregelung siehe [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume#browser_compatibility).

### Pufferung und Vorladen

Wahrscheinlich als Versuch, ungezügelten Datenverbrauch auf mobilen Netzwerken zu mindern, finden wir oft, dass die Pufferung deaktiviert ist, bevor die Wiedergabe initiiert wurde. Pufferung ist der Prozess, bei dem der Browser das Medium im Voraus herunterlädt, was wir häufig tun müssen, um eine reibungslose Wiedergabe sicherzustellen.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interface bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um zu bestimmen, ob ein Titel in einem Abspielzustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept der Pufferung ein veraltetes. Solange Bytebereichsanfragen akzeptiert werden (was das Standardverhalten ist), sollten wir zu einem bestimmten Punkt im Audio springen können, ohne den vorhergehenden Inhalt herunterladen zu müssen. Vorladen ist jedoch immer noch nützlich — ohne es würde es immer eine gewisse Client-Server-Kommunikation erfordern, bevor die Wiedergabe beginnen kann.

Hier gibt es ein [vollständiges Kompatibilitätsdiagramm für mobile und Desktop-HTMLMediaElement-Unterstützung](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

## Workarounds für mobile Geräte

Obwohl mobile Browser Probleme bereiten können, gibt es Möglichkeiten, die oben genannten Probleme zu umgehen.

### Audiosprites

Audiosprites leihen sich ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/Guides/Images/Implementing_image_sprites), einer visuellen Technik zur Verwendung von CSS mit einer einzigen grafischen Ressource, um sie in eine Reihe von Sprites zu zerlegen. Wir können das gleiche Prinzip auf Audio anwenden, damit wir anstelle einer Vielzahl kleiner Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren benötigten Audiofragmente enthält. Um einen bestimmten Ton aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stoppzeiten für jedes Audiosprite.

Der Vorteil ist, dass wir ein Stück Audio vorbereiten können und unsere Sprites abspielbereit sind. Dazu können wir das größere Stück Audio einfach abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann gestoppt werden muss. Wenn Sie Ihre individuellen Sounds um mindestens 500 ms voneinander getrennt haben, sollte das `timeUpdate` Ereignis (das alle 250 ms ausgelöst wird) ausreichen. Ihre Dateien sind möglicherweise etwas länger als nötig, aber Stille komprimiert sich gut.

Hier ist ein Beispiel für einen Audiosprite-Player — richten wir zunächst das Benutzerinterface in HTML ein:

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

Jetzt haben wir Schaltflächen mit Start- und Stoppzeiten in Sekunden. Die MP3-Datei "countdown.mp3" besteht aus einer Zahl, die alle 2 Sekunden gesprochen wird, sodass wir diese Zahl wiedergeben, wenn die entsprechende Schaltfläche gedrückt wird.

Fügen wir etwas JavaScript hinzu, um dies zum Laufen zu bringen:

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
> Auf Mobilgeräten müssen wir diesen Code möglicherweise von einem benutzerinitiierten Ereignis wie dem Drücken eines Start-Buttons auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Das Encodieren Ihres Audios mit niedrigeren Bitraten bedeutet kleinere Dateigrößen, aber niedrigere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikproben mischen und anpassen, und vorausgesetzt, Sie können die Lautstärke Ihres Audioelements steuern, könnten Sie verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu beeinflussen, um sie besser mit der Aktion zu synchronisieren.

All dies ist mit dem Standard-{{htmlelement("audio")}}-Element und dem zugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, wird jedoch mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API) flexibler. Schauen wir uns das als nächstes an.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. Daher ist es in vielen Situationen akzeptabel, die Web Audio API zu verwenden (siehe die Seite [Can I use Web Audio API](https://caniuse.com/#feat=audio-api) für mehr zur Browser-Kompatibilität). Die Web Audio API ist eine fortschrittliche JavaScript-Audio-API, die sich ideal für Spielaudio eignet. Entwickler können Audio generieren und Audiodateien manipulieren sowie Sound im 3D-Spielraum positionieren.

Eine machbare plattformübergreifende Strategie wäre, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Bedeutend ist, dass iOS Safari nun die Web Audio API unterstützt, was bedeutet, dass es jetzt möglich ist, webbasierte Spiele mit nativer Audioqualität für iOS zu schreiben.

Da die Web Audio API präzises Timing und Steuerung der Audiowiedergabe ermöglicht, können wir sie nutzen, um Samples zu bestimmten Momenten abzuspielen, was ein entscheidender Bestandteil des Eintauchens in Spiele ist. Sie wollen schließlich, dass diese Explosionen mit einem donnernden Boom begleitet werden und nicht erst danach.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik zu liefern, die sich nicht in Reaktion auf die Spielumgebung ändert, eignet sich die Web Audio API ideal für die Implementierung eines dynamischeren Musikerlebnisses. Sie könnten die Musik ändern lassen, je nachdem, ob Sie Spannung aufbauen oder den Spieler in irgendeiner Weise ermutigen wollen. Musik ist ein wichtiger Teil des Spielerlebnisses und je nach Art des Spiels, das Sie erstellen, könnten Sie beträchtlichen Aufwand investieren, um es richtig zu gestalten.

Eine Möglichkeit, Ihren Musik-Soundtrack dynamischer zu gestalten, besteht darin, ihn in Komponenten-Loops oder Tracks zu unterteilen. Dies ist oft die Art und Weise, wie Musiker ohnehin Musik komponieren, und die Web Audio API ist äußerst gut darin, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks haben, die Ihr Stück ausmachen, können Sie die Tracks je nach Situation ein- und ausblenden.

Sie können auch Filter oder Effekte auf Musik anwenden. Ist Ihr Charakter in einer Höhle? Erhöhen Sie den Echo. Vielleicht haben Sie Unterwasserszenen, während derer Sie einen Filter anwenden könnten, der den Klang dämpft.

Schauen wir uns einige Techniken der Web Audio API an, um Musik dynamisch von ihren Basistracks aus anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie separate Tracks und Loops individuell mithilfe der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchronously Laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind und Sie sie abspielen können, während andere geladen werden.

So oder so möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie ein Audio-Kontext erstellen. Sie müssen die Zeit zwischen der Erstellung eines Audio-Kontexts und dem Start des ersten Audio-Tracks berücksichtigen. Indem Sie diesen Versatz aufzeichnen und die aktuelle Zeit des abspielenden Tracks abfragen, erhalten Sie ausreichend Informationen, um separate Audioteile zu synchronisieren.

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

Alle diese Tracks haben dasselbe Tempo und sind so gestaltet, dass sie miteinander synchronisiert sind. Daher müssen wir sicherstellen, dass sie geladen und für die API _verfügbar_ sind, bevor wir sie abspielen können. Wir können dies mit der [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Funktionalität von JavaScript tun.

Sobald sie abspielbereit sind, müssen wir sicherstellen, dass sie an dem richtigen Punkt starten, an dem andere Tracks möglicherweise spielen, damit sie synchronisiert sind.

Lassen Sie uns unseren Audio-Kontext erstellen:

```js
const audioCtx = new AudioContext();
```

Jetzt wählen wir alle {{htmlelement("li")}}-Elemente aus; später können wir diese Elemente nutzen, um Zugriff auf den Track-Dateipfad und jede einzelne Wiedergabe-Schaltfläche zu erhalten.

```js
const trackEls = document.querySelectorAll("li");
```

Wir möchten sicherstellen, dass jede Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden. Daher erstellen wir eine `async`-Funktion, um uns dies zu ermöglichen:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nach Abschluss der Ausführung weiteren Code ausführen können.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden async-Funktionen in einem schönen Versprechensmuster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert wurde:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Wir benötigen hier einen Offset, damit wir, wenn wir eine Datei zum Abspielen gebracht haben, einen Datensatz haben, wie weit wir durch sind, um eine andere Datei zu starten.

`start()` nimmt zwei optionale Parameter. Der erste ist der Zeitpunkt, zu dem die Wiedergabe beginnen soll, und der zweite ist wo, also unser Offset.

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

Zuletzt durchlaufen wir unsere `<li>`-Elemente, greifen die richtige Datei für jedes ab und erlauben dann die Wiedergabe durch das Verbergen des "Laden"-Texts und das Anzeigen der Wiedergabe-Schaltfläche:

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
> Sie können [dieses Beispiel hier in Aktion sehen](https://mdn.github.io/webaudio-examples/multi-track/) und [den Quellcode hier ansehen](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

Im Kontext Ihrer Spielwelt könnten Sie Loops und Samples haben, die unter unterschiedlichen Umständen abgespielt werden, und es kann nützlich sein, synchronisieren zu können, um ein nahtloseres Erlebnis zu schaffen.

> [!NOTE]
> Dieses Beispiel wartet nicht, bis der Takt zu Ende ist, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir das BPM (Beats Per Minute) der Tracks kennen.

Sie stellen möglicherweise fest, dass die Einführung eines neuen Tracks natürlicher klingt, wenn er auf dem Takt/Takt/Buzz oder welche Einheiten Sie auch immer verwenden, um Ihre Hintergrundmusik zu segmentieren, erfolgt.

Um dies vor dem Abspielen des Tracks zu tun, den Sie synchronisieren möchten, sollten Sie berechnen, wie lange es bis zum Start des nächsten Takts/Buzz usw. dauert.

Hier ist ein bisschen Code, der Ihnen bei einem Tempo (der Dauer Ihres Takts/Buzz in Sekunden) berechnet, wie lange Sie warten sollten, bis Sie den nächsten Teil abspielen — Sie geben den resultierenden Wert der `start()`-Funktion mit dem ersten Parameter, die die absolute Zeit angibt, wann diese Wiedergabe beginnen sollte, weiter. Beachten Sie, dass der zweite Parameter (wo im neuen Track abgespielt werden soll) relativ ist:

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
> Wenn der erste Parameter 0 oder kleiner als die `currentTime` des Kontexts ist, wird die Wiedergabe sofort beginnen.

Um dies auszuprobieren, können Sie denselben Multi-Track-Quellcode wie oben verwenden, aber die `if`-Anweisung in der `playTrack()`-Funktion mit dem obigen Code ersetzen.

### Positionsabhängiges Audio

Positionsabhängiges Audio kann eine wichtige Technik sein, um Audio zu einem entscheidenden Bestandteil eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Anzahl von Audioquellen im dreidimensionalen Raum zu positionieren, sondern sie kann uns auch die Möglichkeit bieten, Filter anzuwenden, die das Audio realistischer erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die Positionsfähigkeiten der Web Audio API, sodass wir dem Spieler weitere Informationen über die Spielwelt vermitteln können. Hier gibt es ein [Tutorial](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um das `pannerNode` besser zu verstehen.

Wir können vermitteln:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, etc.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wurde, wo die Web Audio API es ermöglicht, Audio an Objekte und Ansichten zu binden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Reference/Elements/audio)
- [Lieder von Diridum: Die Web Audio API bis ins Extrem bringen](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [HTML5-Audio tatsächlich auf mobilen Geräten funktionieren lassen](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audiosprites (und Lösungen für iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
