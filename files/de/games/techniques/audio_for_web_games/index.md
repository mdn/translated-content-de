---
title: Audio für Webspiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

Audio ist ein wichtiger Bestandteil jedes Spiels; es bringt Feedback und Atmosphäre. Web-basiertes Audio entwickelt sich schnell weiter, doch es gibt immer noch viele Unterschiede zwischen Browsern, die es zu navigieren gilt. Oft müssen wir entscheiden, welche Audioteile essentiell für das Spielerlebnis sind und welche schön zu haben, aber nicht unbedingt notwendig sind, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden für die Implementierung von Audio in Webspielen und untersucht, was derzeit auf möglichst vielen Plattformen funktioniert.

## Hinweise zu mobilem Audio

Bei weitem die schwierigsten Plattformen, um Web-Audio-Unterstützung bereitzustellen, sind mobile Plattformen. Leider sind dies auch die Plattformen, die Menschen oft zum Spielen verwenden. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die dazu geführt haben könnten, dass Browseranbieter Entscheidungen getroffen haben, die es Entwicklern schwer machen, mit Web-Audio in Spielen zu arbeiten. Schauen wir uns diese jetzt an.

### Autoplay

Die Autoplay-Richtlinie der Browser betrifft jetzt sowohl Desktop- als auch mobile Browser. Weitere Informationen dazu finden Sie [hier auf der Google Developers Seite](https://developer.chrome.com/blog/autoplay/).

Es ist erwähnenswert, dass Autoplay mit Ton erlaubt ist, wenn:

- der Benutzer mit der Domain interagiert hat.
- der Benutzer auf mobilen Geräten [die Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren Anfragen Ihres Spiels zum automatischen Abspielen von Audio; stattdessen muss die Wiedergabe von Audio durch ein benutzerinitiiertes Ereignis wie einen Klick oder Tipp gestartet werden. Das bedeutet, dass Sie die Struktur Ihrer Audiowiedergabe entsprechend gestalten müssen. Dies wird normalerweise dadurch gemildert, dass das Audio im Voraus geladen und durch ein benutzerinitiiertes Ereignis vorbereitet wird.

Für passiveres Audio-Autoplay, wie zum Beispiel Hintergrundmusik, die startet, sobald ein Spiel geladen wird, besteht ein Trick darin, ein _beliebiges_ benutzerinitiiertes Ereignis zu erfassen und die Wiedergabe dann zu starten. Für andere aktivere Sounds, die während des Spiels verwendet werden sollen, könnten wir in Betracht ziehen, sie vorzubereiten, sobald so etwas wie ein _Start_-Button gedrückt wird.

Um Audio auf diese Weise vorzubereiten, möchten wir einen Teil davon abspielen; deshalb ist es nützlich, einen Moment der Stille am Ende Ihres Audio-Samples einzubauen. Wenn Sie zu dieser Stille springen, sie abspielen und dann pausieren, können wir mit JavaScript diese Datei zu beliebigen Zeitpunkten abspielen. Mehr über [best practices mit der Autoplay-Policy erfahren Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei mit null Lautstärke könnte ebenfalls funktionieren, wenn der Browser es erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das Abspielen und sofortige Pausieren Ihres Audios nicht garantiert, dass ein kleines Stück Audio nicht abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Startbildschirm Ihres Mobilgeräts kann ihre Fähigkeiten ändern. Im Fall von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

Für die Unterstützung von Autoplay siehe [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#browser_compatibility).

### Lautstärke

Die programmgesteuerte Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft angegebene Grund ist, dass der Benutzer die Kontrolle über die Lautstärke auf der Betriebssystemebene haben sollte und diese nicht überschrieben werden sollte.

Für die Unterstützung der Lautstärkeregelung siehe [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume#browser_compatibility).

### Buffering und Vorladen

Wahrscheinlich als Versuch, den unkontrollierten mobilen Netzwerkdatenverbrauch zu mildern, stellen wir auch oft fest, dass das Buffering deaktiviert ist, bevor die Wiedergabe gestartet wurde. Buffering ist der Prozess, bei dem der Browser die Medien im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um festzustellen, ob ein Track in einem Zustand ist, in dem er abspielbar ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Bufferings ein veraltetes. Solange Byte-Range-Anfragen akzeptiert werden (was das Standardverhalten ist), sollten wir zu einem bestimmten Punkt im Audio springen können, ohne den vorherigen Inhalt herunterladen zu müssen. Vorladen ist jedoch immer noch nützlich – ohne es müsste immer eine client-seitige Serverkommunikation erfolgen, bevor die Wiedergabe beginnen kann.

Es gibt [hier ein vollständiges Kompatibilitätsdiagramm für die Unterstützung von HTMLMediaElement auf mobilen und Desktop-Geräten](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

## Mobile Workarounds

Obwohl mobile Browser Probleme darstellen können, gibt es Möglichkeiten, die oben beschriebenen Probleme zu umgehen.

### Audio-Sprites

Audio-Sprites übernehmen ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/Guides/Images/Implementing_image_sprites), einer visuellen Technik zum Verwenden von CSS mit einer einzigen Grafikressource, um sie in eine Serie von Sprites zu zerlegen. Wir können das gleiche Prinzip auf Audio anwenden, sodass wir anstelle einer Reihe kleiner Audiodateien, die zeitaufwendig zu laden und abzuspielen sind, eine größere Audiodatei haben, die alle kleineren benötigten Audioabschnitte enthält. Um einen bestimmten Ton aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stopzeiten für jedes Audio-Sprite.

Der Vorteil ist, dass wir ein Stück Audio bereit machen können und unsere Sprites zum Einsatz bereit sind. Dazu können wir einfach das größere Stück Audio abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie stoppen müssen. Wenn Sie Ihre einzelnen Sounds um mindestens 500 ms auseinander platzieren, sollte das `timeUpdate`-Ereignis (das alle 250 ms ausgelöst wird) ausreichend sein. Ihre Dateien mögen etwas länger sein, als sie es streng genommen benötigen, aber Stille lässt sich gut komprimieren.

Hier ist ein Beispiel für einen Audio-Sprite-Player – richten wir zuerst die Benutzeroberfläche in HTML ein:

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

Jetzt haben wir Buttons mit Start- und Stoppzeiten in Sekunden. Die MP3-Datei "countdown.mp3" besteht aus einer Zahl, die alle 2 Sekunden gesprochen wird, wobei die Idee ist, dass wir diese Zahl wiedergeben, wenn der entsprechende Button gedrückt wird.

Fügen wir ein wenig JavaScript hinzu, um das zum Laufen zu bringen:

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
> Auf mobilen Geräten müssen wir diesen Code möglicherweise von einem benutzerinitiierten Ereignis, wie dem Drücken eines Start-Buttons, auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Wenn Sie Ihr Audio mit niedrigeren Bitraten codieren, bedeutet dies kleinere Dateigrößen, aber niedrigere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikstücke mischen und anpassen, und vorausgesetzt, Sie können die Lautstärke Ihres Audio-Elements steuern, könnten Sie verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu beeinflussen, um sie besser mit der Action zu synchronisieren.

All dies ist mit dem Standard-{{htmlelement("audio")}}-Element und dem dazugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, aber es wird flexibler mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API). Lassen Sie uns dies als nächstes betrachten.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. Vor diesem Hintergrund ist es in vielen Situationen eine akzeptable Herangehensweise, die Web Audio API zu verwenden (siehe die [Seite „Can I use Web Audio API“](https://caniuse.com/#feat=audio-api) für mehr zur Browser-Kompatibilität). Die Web Audio API ist eine fortschrittliche Audio-JavaScript-API, die ideal für Spiel-Audio ist. Entwickler können Audio generieren und Audiobeispiele manipulieren sowie den Klang im 3D-Spielraum positionieren.

Eine realisierbare Cross-Browser-Strategie wäre es, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Bemerkenswert ist, dass iOS Safari jetzt die Web Audio API unterstützt, was bedeutet, dass es jetzt möglich ist, webbasierte Spiele mit Audio in nativer Qualität für iOS zu schreiben.

Da die Web Audio API präzises Timing und die Steuerung der Audiowiedergabe ermöglicht, können wir sie verwenden, um Samples zu bestimmten Zeitpunkten abzuspielen, was ein entscheidendes immersives Element beim Spielen ist. Sie möchten schließlich, dass Explosionen von einem donnernden Knall begleitet werden, nicht erst von einem gefolgt.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik, die sich nicht in Reaktion auf die Spielumgebung ändert, zu liefern, ist die Web Audio API ideal für die Implementierung eines dynamischeren Musikerlebnisses. Sie möchten vielleicht, dass sich die Musik ändert, je nachdem, ob Sie Spannung aufbauen oder den Spieler auf irgendeine Weise ermutigen möchten. Musik ist ein wichtiger Bestandteil des Spielerlebnisses, und je nach Spieltyp, den Sie erstellen, möchten Sie vielleicht erhebliche Anstrengungen investieren, um es richtig zu machen.

Eine Möglichkeit, Ihren Musik-Soundtrack dynamischer zu gestalten, besteht darin, ihn in Komponentenloops oder -tracks aufzuteilen. Das ist oft die Art und Weise, wie Musiker ohnehin Musik komponieren, und die Web Audio API ist äußerst gut darin, diese Teile zu synchronisieren. Sobald Sie die verschiedenen Tracks haben, die Ihr Stück ausmachen, können Sie Tracks nach Bedarf ein- und ausblenden.

Sie können auch Filter oder Effekte auf Musik anwenden. Ist Ihre Figur in einer Höhle? Erhöhen Sie das Echo. Vielleicht haben Sie Unterwasserszenen, in denen Sie einen Filter anwenden könnten, der den Klang dämpft.

Lassen Sie uns einige Techniken der Web Audio API zum dynamischen Anpassen von Musik anhand ihrer Basistracks betrachten.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie separate Tracks und Loops individuell mit der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchrones Laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind und Sie sie abspielen können, während andere noch laden.

In jedem Fall möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audiokontext erstellen. Sie müssen die Zeit zwischen der Erstellung eines Audiokontexts und dem Beginn des ersten Audiotracks berücksichtigen. Das Aufzeichnen dieses Offsets und das Abfragen der aktuellen Zeit des spielenden Tracks gibt Ihnen genügend Informationen, um separate Audio-Stücke zu synchronisieren.

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

Alle diese Tracks haben dasselbe Tempo und sind darauf ausgelegt, mit anderen synchronisiert zu werden, also müssen wir sicherstellen, dass sie geladen und für die API verfügbar sind, _bevor_ wir sie abspielen können. Dies können wir mit der `async`-Funktionalität von JavaScript erledigen.

Sobald sie abspielbereit sind, müssen wir sicherstellen, dass sie an dem Punkt starten, an dem andere Tracks möglicherweise abspielen, damit sie synchron sind.

Erstellen wir unseren Audiokontext:

```js
const audioCtx = new AudioContext();
```

Nun wählen wir alle {{htmlelement("li")}}-Elemente aus; später können wir diese Elemente nutzen, um Zugriff auf den Track-Dateipfad und jeden einzelnen Play-Button zu erhalten.

```js
const trackEls = document.querySelectorAll("li");
```

Wir wollen sicherstellen, dass jede Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden, also erstellen wir eine `async`-Funktion, die uns dies ermöglicht:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator beim Aufrufen dieser Funktion verwenden, was sicherstellt, dass wir nachfolgenden Code ausführen können, wenn sie abgeschlossen ist.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten – wir können die beiden Async-Funktionen in einem schönen Versprechenmuster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Wir benötigen hier einen Offset, also wenn wir eine Datei abgespielt haben, haben wir eine Aufzeichnung, wie weit der Punkt ist, um eine andere Datei anzuspielen.

`start()` nimmt zwei optionale Parameter. Der erste ist, wann die Wiedergabe begonnen werden soll, und der zweite ist wo, was unser Offset ist.

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

Schließlich lassen Sie uns über unsere `<li>`-Elemente iterieren, die richtige Datei für jedes auswählen und dann die Wiedergabe ermöglichen, indem wir den "Laden"-Text ausblenden und den Play-Button anzeigen:

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
> Sie können [dieses Demo hier in Aktion sehen](https://mdn.github.io/webaudio-examples/multi-track/) und [den Quellcode hier ansehen](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

Im Kontext Ihrer Spielwelt haben Sie möglicherweise Loops und Samples, die unter verschiedenen Umständen abgespielt werden, und es kann nützlich sein, sie mit anderen Tracks zu synchronisieren, um ein nahtloseres Erlebnis zu schaffen.

> [!NOTE]
> Dieses Beispiel wartet nicht auf das Ende des Beats, bevor es das nächste Stück einführt; wir könnten dies tun, wenn wir die BPM (Beats Per Minute) der Tracks kennen würden.

Es kann sein, dass die Einführung eines neuen Tracks natürlicher klingt, wenn er auf den Beat/Takt/Phrase oder welche Einheiten Sie auch immer verwenden möchten, um Ihre Hintergrundmusik in Teile zu zerlegen, kommt.

Um dies zu tun, bevor Sie den Track synchronisieren, den Sie synchronisieren möchten, sollten Sie berechnen, wie lange es bis zum Beginn des nächsten Beats/Takts etc. dauert.

Hier ist ein bisschen Code, das für ein gegebenes Tempo (die Zeit in Sekunden Ihres Beats/Takts) berechnet, wie lange Sie warten müssen, bis Sie das nächste Stück spielen – Sie geben den resultierenden Wert der `start()`-Funktion mit dem ersten Parameter ein, der die absolute Zeit, zu der die Wiedergabe begonnen werden soll, nimmt. Beachten Sie, dass der zweite Parameter (wo im neuen Track gestartet werden soll) relativ ist:

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

Um dies zu testen, können Sie den gleichen Multi-Track-Quellcode wie oben nehmen, jedoch die `if`-Anweisung in der `playTrack()`-Funktion durch den obigen Code ersetzen.

### Positional Audio

Positional Audio kann eine wichtige Technik sein, um Audio zu einem zentralen Bestandteil eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht uns nicht nur, eine Anzahl von Audioquellen im dreidimensionalen Raum zu positionieren, sondern sie kann uns auch erlauben, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die Positionierungskapazitäten der Web Audio API, sodass wir dem Spieler weitere Informationen über die Spielwelt mitteilen können. Es gibt [hier ein Tutorial](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um den `pannerNode` genauer zu verstehen.

Wir können uns beziehen auf:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser usw.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es ermöglicht, Audio an Objekte und Standpunkte zu binden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Reference/Elements/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [HTML5-Audio auf mobilen Geräten wirklich zum Laufen bringen](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio-Sprites (und Lösungen für iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
