---
title: Audio für Webspiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Audio ist ein wichtiger Bestandteil jedes Spiels; es fügt Feedback und Atmosphäre hinzu. Webbasiertes Audio entwickelt sich schnell weiter, aber es gibt immer noch viele Unterschiede zwischen den Browsern, die es zu navigieren gilt. Wir müssen oft entscheiden, welche Audioelemente für das Spielerlebnis wesentlich sind und welche nett, aber nicht unbedingt erforderlich sind, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Webspiele und untersucht, was derzeit über möglichst viele Plattformen hinweg funktioniert.

## Hinweise zu mobilem Audio

Bei weitem die schwierigsten Plattformen, um Web-Audio-Unterstützung bereitzustellen, sind mobile Plattformen. Leider sind dies auch die Plattformen, die häufig zum Spielen von Spielen genutzt werden. Es gibt ein paar Unterschiede zwischen Desktop- und mobilen Browsern, die dazu führen könnten, dass Browser-Anbieter Entscheidungen treffen, die es Entwicklern von Webspielen schwer machen, mit Webaudio zu arbeiten. Werfen wir nun einen Blick darauf.

### Autoplay

Die Autoplay-Richtlinie von Browsern betrifft nun sowohl Desktop- als auch mobile Browser. Weitere Informationen hierzu finden Sie [hier auf der Google Developers-Seite](https://developer.chrome.com/blog/autoplay/).

Es ist wichtig zu beachten, dass Autoplay mit Ton erlaubt ist, wenn:

- der Benutzer mit der Domain interagiert hat.
- der Benutzer auf mobilen Geräten [die Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren alle von Ihrem Spiel gestellten Anfragen, Audio automatisch abzuspielen; stattdessen muss die Wiedergabe von Audio durch ein vom Benutzer initiiertes Ereignis, wie ein Klick oder Tippen, gestartet werden. Das bedeutet, dass Sie die Struktur Ihrer Audiowiedergabe entsprechend gestalten müssen. Dies wird gewöhnlich dadurch erleichtert, dass das Audio im Voraus geladen und auf einem benutzerinitiierten Ereignis vorbereitet wird.

Für ein eher passives Audio-Autoplay, z. B. Hintergrundmusik, die sofort beim Spielstart beginnt, ist ein Trick, _jedes_ benutzerinitiierte Ereignis zu erkennen und dann die Wiedergabe zu starten. Für andere aktivere Sounds, die während des Spiels verwendet werden sollen, können wir darüber nachdenken, sie sobald wie möglich vorzubereiten, z. B. wenn eine _Start_-Taste gedrückt wird.

Um Audio wie beschrieben vorzubereiten, möchten wir einen Teil davon abspielen; aus diesem Grund ist es nützlich, einen Moment der Stille am Ende Ihrer Audiospur aufzunehmen. Das Springen zu der Stille, das Abspielen und anschließende Pausieren bedeutet, dass wir diese Datei nun mit JavaScript an beliebigen Punkten abspielen können. Mehr über [Best Practices mit der Autoplay-Richtlinie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) erfahren.

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei mit null Lautstärke könnte ebenfalls funktionieren, wenn der Browser Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das Abspielen und sofortige Pausieren Ihres Audios nicht garantiert, dass kein kleines Audiofragment abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Startbildschirm Ihres Mobilgeräts kann deren Fähigkeiten verändern. Beim Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen ausprobieren, um zu sehen, wie er funktioniert.

### Lautstärke

Eine programmgesteuerte Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft gegebene Grund ist, dass der Benutzer die Lautstärke auf Betriebssystemebene kontrollieren sollte und diese nicht überschrieben werden sollte.

### Puffern und Vorladen

Wahrscheinlich als Versuch, die unkontrollierte Nutzung mobiler Netzwerkdaten zu mildern, stellen wir auch oft fest, dass das Puffern deaktiviert ist, bevor die Wiedergabe initiiert wurde. Puffern ist der Prozess, bei dem der Browser die Medien im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface wird mit [vielen Eigenschaften geliefert](/de/docs/Web/API/HTMLMediaElement#instance_properties), um festzustellen, ob ein Titel in einem Zustand ist, in dem er abspielbar ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Pufferung veraltet. Sofern Byte-Bereichsanforderungen akzeptiert werden (was das Standardverhalten ist), sollten wir in der Lage sein, zu einem bestimmten Punkt im Audio zu springen, ohne den vorherigen Inhalt herunterladen zu müssen. Vorladen ist jedoch weiterhin nützlich — ohne Vorladen wäre immer eine gewisse Client-Server-Kommunikation erforderlich, bevor die Wiedergabe beginnen kann.

### Gleichzeitige Audiowiedergabe

Eine Anforderung vieler Spiele ist die Fähigkeit, mehr als ein Stück Audio gleichzeitig abzuspielen; z. B. könnte es Hintergrundmusik geben, die zusammen mit Soundeffekten für verschiedene Dinge im Spiel abgespielt wird. Obwohl sich die Situation mit der Einführung der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bald verbessern wird, führt die derzeit am weitesten verbreitete Methode — die Verwendung des einfachen {{htmlelement("audio")}}-Elements — auf mobilen Geräten zu uneinheitlichen Ergebnissen.

### Testen und Unterstützung

Hier ist eine Tabelle, die zeigt, welche mobilen Plattformen die oben genannten Funktionen unterstützen.

<table class="standard-table">
  <caption>
    Unterstützung für Web-Audio-Funktionen auf Mobilgeräten
  </caption>
  <thead>
    <tr>
      <th scope="row">Mobiler Browser</th>
      <th scope="col">Version</th>
      <th scope="col">Gleichzeitige Wiedergabe</th>
      <th scope="col">Autoplay</th>
      <th scope="col">Lautstärkeregulierung</th>
      <th scope="col">Vorladen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chrome (Android)</th>
      <td>69+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Firefox (Android)</th>
      <td>62+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Edge Mobile</th>
      <td></td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Opera Mobile</th>
      <td>46+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Safari (iOS)</th>
      <td>7+</td>
      <td>Y/N*</td>
      <td>N</td>
      <td>N</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Android Browser</th>
      <td>67+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>

Hier ist ein [vollständiges Kompatibilitätsdiagramm für die HTMLMediaElement-Unterstützung auf Mobil- und Desktopgeräten](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

> [!NOTE]
> Gleichzeitige Audiowiedergabe wird mit unserem [Beispiel für gleichzeitige Audiowiedergabe](https://jsfiddle.net/dmkyaq0r/) getestet, bei dem wir versuchen, drei Stücke Audio gleichzeitig mit der Standard-Audio-API abzuspielen.

> [!NOTE]
> Die einfache Autoplay-Funktionalität wird mit unserem [Autoplay-Testbeispiel](https://jsfiddle.net/vpdspp2b/) getestet.

> [!NOTE]
> Die Lautstärkeänderbarkeit wird mit unserem [Lautstärke-Testbeispiel](https://jsfiddle.net/7ta12vw4/) getestet.

## Mobile Workarounds

Obwohl mobile Browser Probleme bereiten können, gibt es Möglichkeiten, die oben genannten Probleme zu umgehen.

### Audio-Sprites

Audio-Sprites übernehmen ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik, bei der eine einzige Grafikressource verwendet wird, um sie mit CSS in eine Reihe von Sprites zu unterteilen. Wir können das gleiche Prinzip auf Audio anwenden, sodass wir anstelle einer Reihe kleiner Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren Audioschnipsel enthält, die wir benötigen. Um einen bestimmten Ton aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stoppzeiten für jedes Audio-Sprite.

Der Vorteil ist, dass wir ein Stück Audio vorbereiten und unsere Sprites bereit haben können. Dazu können wir einfach das größere Stück Audio abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Es ist notwendig, die aktuelle Zeit zu analysieren, um zu wissen, wann anzuhalten. Wenn Sie Ihre einzelnen Sounds mindestens 500 ms auseinandersitzen lassen, sollte das `timeUpdate`-Ereignis (das alle 250 ms ausgelöst wird) ausreichend sein. Ihre Dateien sind möglicherweise etwas länger als unbedingt notwendig, aber Stille komprimiert sich gut.

Hier ist ein Beispiel für einen Audio-Sprite-Player — richten wir zunächst die Benutzeroberfläche in HTML ein:

```html
<audio id="myAudio" src="http://jPlayer.org/tmp/countdown.mp3"></audio>
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

Jetzt haben wir Tasten mit Start- und Stoppzeiten in Sekunden. Die MP3-Datei "countdown.mp3" besteht darin, dass alle 2 Sekunden eine Zahl gesprochen wird, wobei die Idee besteht, diese Zahl abzuspielen, wenn die entsprechende Taste gedrückt wird.

Lassen Sie uns etwas JavaScript hinzufügen, um dies zum Laufen zu bringen:

```js
const myAudio = document.getElementById("myAudio");
const buttons = document.getElementsByTagName("button");
let stopTime = 0;

for (const button of buttons) {
  button.addEventListener(
    "click",
    () => {
      myAudio.currentTime = button.getAttribute("data-start");
      stopTime = button.getAttribute("data-stop");
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

> [!NOTE]
> Sie können [unseren Audio-Sprite-Player live ausprobieren](https://jsfiddle.net/59vwaame/) auf JSFiddle.

> [!NOTE]
> Auf Mobilgeräten müssen wir möglicherweise diesen Code von einem benutzerinitiierten Ereignis wie dem Drücken einer Starttaste aus auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Das Codieren Ihres Audios mit niedrigeren Bitraten bedeutet kleinere Dateigrößen, aber geringere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikproben mischen und anpassen und vorausgesetzt Sie können die Lautstärke Ihres Audioelements steuern, könnten Sie verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik einstellen, ohne die Tonhöhe zu beeinflussen, um sie besser mit der Aktion abzustimmen.

All dies ist mit dem Standard-{{htmlelement("audio")}}-Element und dem zugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, aber es wird viel einfacher und flexibler mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API). Schauen wir uns das als nächstes an.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, außer Opera Mini. Mit diesem Wissen ist es für viele Situationen eine akzeptable Vorgehensweise, die Web Audio API zu verwenden (siehe die [Can I use Web Audio API Seite](https://caniuse.com/#feat=audio-api) für weitere Informationen zur Browserkompatibilität). Die Web Audio API ist eine fortschrittliche Audio-JavaScript-API, die sich ideal für Spielaudio eignet. Entwickler können Audio erzeugen und Audioprozesse sowie die Positionierung von Sound im 3D-Spiele-Raum manipulieren.

Eine machbare strategieübergreifende Strategie wäre, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, die Erfahrung mit der Web Audio API zu verbessern.

> [!NOTE]
> Bedeutsam ist, dass iOS Safari nun die Web Audio API unterstützt, was bedeutet, dass es nun möglich ist, webbasierte Spiele mit nativer Audioqualität für iOS zu schreiben.

Da die Web Audio API präzises Timing und Kontrolle der Audiowiedergabe ermöglicht, können wir damit Samples zu bestimmten Momenten abspielen, was ein entscheidender Aspekt eines immersiven Spielerlebnisses ist. Sie möchten, dass diese Explosionen von einem donnernden Knall begleitet werden und nicht von einem, der danach kommt.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik bereitzustellen, die sich nicht in Reaktion auf die Spielumgebung ändert, ist die Web Audio API ideal für die Implementierung eines dynamischeren Musikerlebnisses. Sie möchten möglicherweise, dass sich die Musik je nachdem ändert, ob Sie Spannung aufbauen oder den Spieler auf irgendeine Weise ermutigen möchten. Musik ist ein wichtiger Teil der Spielerfahrung, und je nach Art des Spiels, das Sie erstellen, möchten Sie möglicherweise erhebliche Anstrengungen unternehmen, um es richtig zu machen.

Eine Möglichkeit, wie Sie Ihren musikalischen Soundtrack dynamischer gestalten können, besteht darin, ihn in Komponentenloops oder -tracks aufzuteilen. Auf diese Weise komponieren Musiker Musik oft sowieso, und die Web Audio API eignet sich hervorragend dafür, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks haben, die Ihr Stück bilden, können Sie Tracks nach Bedarf ein- und ausblenden.

Sie können Musik auch Filter oder Effekte hinzufügen. Ist Ihr Charakter in einer Höhle? Erhöhen Sie das Echo. Vielleicht haben Sie Unterwasserszenen, während denen Sie einen Filter anwenden könnten, der den Klang dämpft.

Schauen wir uns einige Techniken der Web Audio API an, um Musik von ihren Grundtracks aus dynamisch anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie einzelne Tracks und Loops individuell mithilfe der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Das synchrone Laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind und während des Ladens anderer bereits abgespielt werden können.

In jedem Fall möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält die Vorstellung einer internen Uhr, die anfängt zu ticken, wenn Sie eine Audio-Kontext erstellen. Sie müssen die Zeitspanne zwischen der Erstellung eines Audio-Kontextes und dem Start der ersten Audiowiedergabe berücksichtigen. Wenn Sie diesen Offset aufzeichnen und die aktuelle Zeit des spielenden Tracks abfragen, erhalten Sie genügend Informationen, um separate Audiostücke zu synchronisieren.

Um dies in Aktion zu sehen, lassen Sie uns einige separate Tracks auslegen:

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

Alle diese Tracks haben das gleiche Tempo und sind darauf ausgelegt, mit einem anderen synchronisiert zu werden, daher müssen wir sicherstellen, dass sie geladen und der API _verfügbar_ sind, bevor wir in der Lage sind, sie abzuspielen. Dies können wir mit der Funktionalität von JavaScript's [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await) tun.

Sobald sie abspielbereit sind, müssen wir sicherstellen, dass sie zum richtigen Zeitpunkt starten, den andere Tracks möglicherweise abspielen, sodass sie synchron sind.

Lassen Sie uns unser Audiokontext erstellen:

```js
const audioCtx = new AudioContext();
```

Jetzt wählen wir alle {{htmlelement("li")}}-Elemente aus; später können wir diese Elemente verwenden, um auf den Track-Dateipfad und jeden einzelnen Play-Button zuzugreifen.

```js
const trackEls = document.querySelectorAll("li");
```

Wir wollen sicherstellen, dass jede Datei geladen wurde und vor der Verwendung in ein Puffer decodiert wurde. Erstellen wir also eine `async`-Funktion, die uns dies ermöglicht:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgende Code ausführen können, wenn er mit der Ausführung fertig ist.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden async-Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Wir benötigen hier einen Offset, sodass, wenn wir eine Datei bereits abspielen lassen, wir festhalten können, wie weit wir die Wiedergabe einer anderen Datei starten.

`start()` akzeptiert zwei optionale Parameter. Der erste gibt an, wann mit der Wiedergabe begonnen werden soll und der zweite ist der Startpunkt, also unser Offset.

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

Schließlich lassen wir uns über die `<li>`-Elemente iterieren, die richtige Datei für jedes auswählen und dann die Wiedergabe ermöglichen, indem wir den "Lädt"-Text ausblenden und den Play-Button anzeigen:

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
> Sie können [diese Demo in Aktion hier sehen](https://mdn.github.io/webaudio-examples/multi-track/) und [den Quellcode hier ansehen](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

Im Kontext Ihrer Spielwelt kann es sein, dass Sie Loops und Samples haben, die unter verschiedenen Umständen abgespielt werden, und es kann nützlich sein, mit anderen Tracks für eine nahtlosere Erfahrung abzustimmen.

> [!NOTE]
> Dieses Beispiel wartet nicht, bis der Beat endet, bevor es das nächste Teil einführt; wir könnten dies tun, wenn wir die BPM (Beats Pro Minute) der Tracks wüssten.

Sie werden vielleicht feststellen, dass die Einführung eines neuen Tracks natürlicher klingt, wenn es im Beat/Takt/Phrase oder welchen Einheiten Sie wünschen, um Ihre Hintergrundmusik in zu unterteilen, eingeführt wird.

Um dies vor der Wiedergabe des Tracks, den Sie synchronisieren möchten, zu tun, sollten Sie berechnen, wie lange es bis zum Start des nächsten Beat/Takt dauert.

Hier ist ein Stück Code, das bei gegebener Tempoangabe (der Zeit in Sekunden Ihres Beat/Takt) berechnet, wie lange gewartet werden soll, bevor das nächste Teil abgespielt wird — Sie geben den resultierenden Wert an die `start()`-Funktion mit dem ersten Parameter, der die absolute Zeit der Wiedergabe angibt, an. Beachten Sie, dass der zweite Parameter (von wo aus der neue Track abgespielt werden soll) relativ ist:

```js
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
> Sie können [unseren Warte-Rechner-Code hier ausprobieren](https://jsfiddle.net/c87z11jj/2/) auf JSFiddle (ich habe hier auf den Takt synchronisiert).

> [!NOTE]
> Wenn der erste Parameter 0 oder kleiner als die `currentTime` des Kontextes ist, beginnt die Wiedergabe sofort.

### Positionales Audio

Positionales Audio kann eine wichtige Technik sein, um Audio zu einem wesentlichen Bestandteil eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Vielzahl von Audioquellen im dreidimensionalen Raum zu positionieren, sondern ermöglicht es uns auch, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Das [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die Positionsfähigkeiten der Web Audio API, sodass wir weitere Informationen über die Spielwelt an den Spieler weitergeben können. Es gibt ein [Tutorial hier](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), das hilft, das `pannerNode` im Detail zu verstehen.

Wir können Folgendes mitteilen:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, usw.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo es mit der Web Audio API möglich ist, Audio an den Objekten und Standpunkten zu binden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Reference/Elements/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
