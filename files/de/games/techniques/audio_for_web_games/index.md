---
title: Audio für Web-Spiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Audio ist ein wichtiger Bestandteil jedes Spiels; es fügt Feedback und Atmosphäre hinzu. Web-basiertes Audio reift schnell, aber es gibt immer noch viele Unterschiede zwischen den Browsern, die überwunden werden müssen. Wir müssen oft entscheiden, welche Teile der Audioerfahrung für unsere Spiele wesentlich sind und welche schön zu haben, aber nicht essentiell sind, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Web-Spiele und betrachtet, was derzeit auf möglichst vielen Plattformen funktioniert.

## Mobile Audio Hinweise

Die mit Abstand schwierigsten Plattformen für die Bereitstellung von Web-Audio-Unterstützung sind mobile Plattformen. Leider sind dies auch die Plattformen, die Menschen oft zum Spielen nutzen. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die Browseranbieter dazu veranlasst haben könnten, Entscheidungen zu treffen, die es Entwicklern von Web-Spielen schwer machen, mit Web-Audio zu arbeiten. Schauen wir uns diese nun an.

### Autoplay

Die Autoplay-Richtlinie der Browser betrifft jetzt sowohl Desktop- als auch Mobilbrowser. Weitere Informationen dazu finden Sie [hier auf der Google Developers Seite](https://developer.chrome.com/blog/autoplay/).

Es ist erwähnenswert, dass das Autoplay mit Ton erlaubt ist, wenn:

- der Benutzer mit der Domain interagiert hat.
- auf mobilen Geräten der Benutzer [die Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren Anfragen, die Ihr Spiel stellt, um Audio automatisch abzuspielen; stattdessen muss die Wiedergabe von Audio durch ein vom Benutzer initiiertes Ereignis, wie ein Klick oder Tippen, gestartet werden. Dies bedeutet, dass Sie Ihre Audiowiedergabe so strukturieren müssen, dass dies berücksichtigt wird. Dies wird normalerweise dadurch abgeschwächt, dass das Audio im Voraus geladen und bei einem benutzerinitiierten Ereignis vorbereitet wird.

Für ein eher passives Audio-Autoplay, zum Beispiel Hintergrundmusik, die sofort startet, wenn ein Spiel geladen wird, besteht ein Trick darin, _jedes_ vom Benutzer initiierte Ereignis zu erkennen und die Wiedergabe dann zu starten. Für andere, aktivere Sounds, die während des Spiels verwendet werden sollen, könnten wir in Betracht ziehen, sie zu präparieren, sobald etwas wie eine _Start_-Taste gedrückt wird.

Um Audio so zu präparieren, möchten wir einen Teil davon abspielen; aus diesem Grund ist es nützlich, ein Moment der Stille am Ende Ihres Audiosamples einzufügen. Zu dieser Stille zu springen, sie abzuspielen und dann zu pausieren, bedeutet, dass wir nun JavaScript verwenden können, um diese Datei an beliebigen Punkten abzuspielen. Weitere Informationen zu den [Best Practices mit der Autoplay-Richtlinie finden Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei bei Lautstärke Null könnte auch funktionieren, wenn der Browser es Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das sofortige Abspielen und Pausieren Ihres Audios nicht garantiert, dass kein kleines Stück Audio abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Startbildschirm Ihres Mobilgeräts kann deren Fähigkeiten verändern. Im Fall von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie versuchen, Ihren Code auf mehreren Geräten und Plattformen zu testen, um zu sehen, wie er funktioniert.

Für die Unterstützung von Autoplay siehe [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#browser_compatibility).

### Lautstärke

Die programmgesteuerte Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft genannte Grund ist, dass der Benutzer die Kontrolle über die Lautstärke auf Betriebssystemebene haben sollte und diese nicht überschrieben werden sollte.

Für die Unterstützung der Lautstärkeregelung siehe [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume#browser_compatibility).

### Puffern und Vorladen

Wahrscheinlich als Versuch, den unkontrollierten Datenverbrauch von mobilen Netzwerken zu mildern, finden wir oft, dass das Puffern deaktiviert ist, bevor die Wiedergabe initiiert wurde. Puffern ist der Prozess, bei dem der Browser die Medien im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interface bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um zu bestimmen, ob ein Track in einem abspielbaren Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Pufferings veraltet. Solange Byte-Bereichsanfragen akzeptiert werden (was das Standardverhalten ist), sollten wir in der Lage sein, an einen bestimmten Punkt im Audio zu springen, ohne den vorherigen Inhalt herunterladen zu müssen. Das Vorladen ist jedoch immer noch nützlich — ohne es müsste immer eine gewisse Client-Server-Kommunikation erforderlich sein, bevor die Wiedergabe beginnen kann.

Es gibt [hier eine vollständige Kompatibilitätstabelle für die Unterstützung von mobilen und Desktop-HTMLMediaElementen](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

## Mobile Workarounds

Obwohl mobile Browser Probleme bereiten können, gibt es Möglichkeiten, die oben beschriebenen Probleme zu umgehen.

### Audiosprites

Audiosprites leihen sich ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik, die CSS mit einer einzigen Grafikressource verwendet, um eine Reihe von Sprites zu erstellen. Wir können das gleiche Prinzip auf Audio anwenden, sodass wir statt einer Reihe kleiner Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren Audioausschnitte enthält, die wir benötigen. Um einen bestimmten Sound aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stoppzeiten für jedes Audiosprite.

Der Vorteil ist, dass wir ein Audiosprite vorbereiten und unsere Sprites einsatzbereit haben können. Dazu können wir einfach das größere Audio abspielen und sofort pausieren. Sie reduzieren außerdem die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie anhalten müssen. Wenn Sie Ihre einzelnen Klänge um mindestens 500 ms trennen, sollte die Verwendung des `timeUpdate`-Ereignisses (das alle 250 ms ausgelöst wird) ausreichen. Ihre Dateien sind möglicherweise etwas länger als unbedingt nötig, aber Stille komprimiert sich gut.

Hier ist ein Beispiel für einen Audiosprite-Player — zuerst lassen Sie uns die Benutzeroberfläche in HTML einrichten:

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

Jetzt haben wir Schaltflächen mit Start- und Stoppzeiten in Sekunden. Die MP3-Datei "countdown.mp3" besteht aus einer Zahl, die alle 2 Sekunden gesprochen wird, wobei die Idee ist, dass wir diese Zahl abspielen, wenn die entsprechende Schaltfläche gedrückt wird.

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
> Auf mobilen Geräten müssen wir diesen Code möglicherweise durch ein vom Benutzer initiiertes Ereignis wie das Drücken einer Starttaste auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Wenn Sie Ihr Audio mit niedrigeren Bitraten codieren, bedeutet dies kleinere Dateigrößen, aber geringere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musiksamples mischen und anpassen, und sofern Sie die Lautstärke Ihres Audioelements steuern können, könnten Sie verschiedene Musikstücke ein- und ausblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik ändern, ohne die Tonhöhe zu beeinflussen, um sie besser mit der Aktion zu synchronisieren.

All dies ist mit dem Standard-{{htmlelement("audio")}}-Element und dem dazugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, aber es wird viel einfacher und flexibler mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API). Schauen wir uns das als nächstes an.

### Web Audio API für Spiele

Die Web Audio API wird auf allen modernen Desktop- und Mobil-Browsern unterstützt, außer bei Opera Mini. In diesem Sinne ist es in vielen Situationen eine akzeptable Vorgehensweise, die Web Audio API zu verwenden (siehe die [Can I use Web Audio API Seite](https://caniuse.com/#feat=audio-api) für weitere Informationen zur Browser-Kompatibilität). Die Web Audio API ist eine fortschrittliche Audio-JavaScript-API, die ideal für Spiele-Audio ist. Entwickler können Audio generieren und Audiobeispiele manipulieren sowie Klang im 3D-Spielraum positionieren.

Eine durchführbare Strategie für die plattformübergreifende Nutzung wäre, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Bemerkenswert ist, dass iOS Safari jetzt die Web Audio API unterstützt, was bedeutet, dass es jetzt möglich ist, webbasierte Spiele mit nativer Audioqualität für iOS zu schreiben.

Da die Web Audio API präzises Timing und Kontrolle der Audiowiedergabe erlaubt, können wir sie nutzen, um Audiobeispiele zu bestimmten Momenten abzuspielen, was ein entscheidender immersiver Aspekt des Gaming ist. Schließlich möchten Sie, dass diese Explosionen von einem donnernden Knall begleitet werden, nicht von einem nachfolgenden.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik zu liefern, die sich nicht in Reaktion auf die Spielumgebung ändert, ist die Web Audio API ideal für die Implementierung eines dynamischeren Musikerlebnisses. Sie möchten möglicherweise, dass sich die Musik abhängig davon ändert, ob Sie versuchen, Spannung aufzubauen oder den Spieler auf irgendeine Weise zu ermutigen. Musik ist ein wichtiger Teil des Spielerlebnisses, und je nachdem, welche Art von Spiel Sie erstellen, möchten Sie möglicherweise erheblichen Aufwand in die richtige Umsetzung investieren.

Einen Weg, wie Sie Ihren Musik-Soundtrack dynamischer gestalten können, besteht darin, ihn in Komponentenschleifen oder -tracks zu unterteilen. Diese Methode wird oft von Musikern zum Komponieren verwendet, und die Web Audio API ist extrem gut darin, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks haben, die Ihr Stück ausmachen, können Sie Tracks nach Bedarf ein- und ausblenden.

Sie können auch Filter oder Effekte auf Musik anwenden. Ist Ihr Charakter in einer Höhle? Erhöhen Sie das Echo. Vielleicht haben Sie Unterwasserszenen, während derer Sie einen Filter anwenden könnten, der den Klang dämpft.

Schauen wir uns einige Web Audio API-Techniken an, um Musik aus ihren Basis-Tracks dynamisch anzupassen.

### Ihre Tracks laden

Mit der Web Audio API können Sie separate Tracks und Schleifen individuell mit der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchrones Laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind und Sie sie abspielen können, während andere noch geladen werden.

In jedem Fall möchten Sie möglicherweise Tracks oder Schleifen synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audiokontext erstellen. Sie müssen die Zeit zwischen dem Erstellen eines Audiokontextes und dem Starten des ersten Audiotracks berücksichtigen. Das Aufzeichnen dieses Offsets und das Abfragen der aktuellen Zeit des spielenden Tracks gibt Ihnen genügend Informationen, um separate Audio-Stücke zu synchronisieren.

Um dies in Aktion zu sehen, lassen Sie uns einige separate Tracks anordnen:

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

Alle diese Tracks haben das gleiche Tempo und sind darauf ausgelegt, miteinander synchronisiert zu werden, also müssen wir sicherstellen, dass sie geladen und für die API verfügbar sind, _bevor_ wir sie abspielen können. Wir können dies mit der [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Funktionalität von JavaScript tun.

Sobald sie abspielbereit sind, müssen wir sicherstellen, dass sie zu dem Zeitpunkt starten, ab dem andere Tracks möglicherweise spielen, damit sie synchronisiert werden.

Lassen Sie uns unseren Audiokontext erstellen:

```js
const audioCtx = new AudioContext();
```

Lassen Sie uns nun alle {{htmlelement("li")}}-Elemente auswählen; später können wir diese Elemente nutzen, um auf den Track-Dateipfad und jede einzelne Wiedergabeschaltfläche zuzugreifen.

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

Wir können dann den `await`-Operator beim Aufrufen dieser Funktion verwenden, was sicherstellt, dass wir nachfolgende Code-Aktionen ausführen können, wenn sie fertig ausgeführt wurde.

Lassen Sie uns eine weitere `async`-Funktion zur Einrichtung des Samples erstellen - wir können die beiden async Funktionen in ein schönes Versprechenmuster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Hier benötigen wir einen Offset, sodass wir, wenn wir eine Datei abgespielt haben, einen Aufzeichnungsstand haben, wie weit durch eine andere Datei gestartet werden muss.

`start()` nimmt zwei optionale Parameter an. Der erste ist, wann die Wiedergabe begonnen werden soll, und der zweite ist wo, was unser Offset ist.

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

Schließlich lassen Sie uns über unsere `<li>`-Elemente iterieren, die richtige Datei für jedes von ihnen abrufen und dann die Wiedergabe ermöglichen, indem der "Laden"-Text verborgen und die Abspiel-Schaltfläche angezeigt wird:

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
> Sie können [dieses Demo hier in Aktion sehen](https://mdn.github.io/webaudio-examples/multi-track/) und [den Quellcode hier anzeigen](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

Im Kontext Ihrer Spielwelt könnten Sie Schleifen und Samples haben, die unter verschiedenen Umständen gespielt werden, und es kann nützlich sein, mit anderen Tracks zu synchronisieren, für ein nahtloseres Erlebnis.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Takt endet, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir die BPM (Beats Per Minute) der Tracks kennen würden.

Sie werden vielleicht feststellen, dass das Einführen eines neuen Tracks natürlicher klingt, wenn es auf dem Takt/Takt/Motiv oder welchen Einheiten auch immer Sie Ihre Hintergrundmusik unterteilen möchten, erfolgt.

Um dies zu tun, bevor Sie den Track abspielen, den Sie synchronisieren möchten, sollten Sie berechnen, wie lange es bis zum Beginn des nächsten Taktes/Balkens usw. dauert.

Hier ist ein Stück Code, das bei Angabe eines Tempos (der Zeit in Sekunden für Ihren Takt/Balken) berechnet, wie lange gewartet werden muss, bis Sie das nächste Stück spielen - den resultierenden Wert füttern Sie der `start()`-Funktion mit dem ersten Parameter zu, der die absolute Zeit nimmt, wann diese Wiedergabe beginnen soll. Beachten Sie, dass der zweite Parameter (von wo aus zum Abspielen im neuen Track gestartet werden soll) relativ ist:

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
> Wenn der erste Parameter 0 ist oder geringer als die `currentTime` des Kontexts, beginnt die Wiedergabe sofort.

Um dies zu versuchen, können Sie denselben Quellcode für mehrere Tracks wie oben verwenden, aber die `if`-Anweisung in der `playTrack()`-Funktion mit dem obigen Code ersetzen.

### Positionales Audio

Positionsbezogenes Audio kann eine wichtige Technik sein, um Audio zu einem Schlüsselelement eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Anzahl von Audioquellen im dreidimensionalen Raum zu positionieren, sondern sie kann uns auch erlauben, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die Positionsfähigkeiten der Web Audio API, damit wir dem Spieler weitere Informationen über die Spielwelt vermitteln können. Es gibt ein [Tutorial hier](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um den `pannerNode` genauer zu verstehen.

Wir können beziehen:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, etc.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es ermöglicht, Audio an die Objekte und Ansichten zu binden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Reference/Elements/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
