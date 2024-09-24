---
title: Audio für Webspiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Audio ist ein wichtiger Bestandteil jedes Spiels; es bietet Feedback und Atmosphäre. Webbasierte Audio-Technologien entwickeln sich schnell weiter, dennoch gibt es noch viele Unterschiede zwischen den Browsern. Oft müssen wir entscheiden, welche Teile des Audios für die Spielerfahrung wesentlichen und welche nur nett, aber nicht unbedingt notwendig sind, und dementsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Webspiele und untersucht, was derzeit auf möglichst vielen Plattformen funktioniert.

## Hinweise zur mobilen Audio-Ausgabe

Die bei weitem schwierigsten Plattformen für die Unterstützung von Web-Audio sind mobile Plattformen. Leider sind es gerade diese Plattformen, die oft genutzt werden, um Spiele zu spielen. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die Browserhersteller dazu veranlasst haben könnten, Entscheidungen zu treffen, die die Arbeit mit Web-Audio für Spieleentwickler erschweren. Schauen wir uns diese jetzt genauer an.

### Autoplay

Die Autoplay-Richtlinie des Browsers betrifft nun sowohl Desktop- als auch mobile Browser. Weitere Informationen finden Sie [hier auf der Google Developers-Seite](https://developer.chrome.com/blog/autoplay/).

Es ist erwähnenswert, dass Autoplay mit Ton erlaubt ist, wenn:

- der Benutzer mit der Domäne interagiert hat.
- auf mobilen Geräten der Benutzer die [Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser werden Anforderungen Ihres Spiels ignorieren, Audio automatisch abzuspielen; stattdessen muss die Audio-Wiedergabe durch ein benutzerinitiiertes Ereignis, wie einen Klick oder ein Tippen, ausgelöst werden. Dies bedeutet, dass Sie Ihre Audio-Wiedergabe entsprechend strukturieren müssen. Dies wird normalerweise dadurch gemildert, dass das Audio im Voraus geladen und bei einem benutzerinitiierten Ereignis vorbereitet wird.

Für passiveres Audio-Autoplay, wie zum Beispiel Hintergrundmusik, die sofort nach dem Laden eines Spiels startet, besteht ein Trick darin, _jedes_ benutzerinitiierte Ereignis zu erkennen und die Wiedergabe dann zu starten. Für andere, aktivere Klänge, die während des Spiels verwendet werden sollen, könnten wir erwägen, sie vorzubereiten, sobald etwas wie ein _Start_-Knopf gedrückt wird.

Um Audio auf diese Weise vorzubereiten, möchten wir einen Teil davon abspielen; aus diesem Grund ist es sinnvoll, einen Moment der Stille am Ende Ihres Audiosamples einzufügen. Zu dieser Stille zu springen, sie abzuspielen und dann zu pausieren, bedeutet, dass wir diese Datei jetzt mit JavaScript zu beliebigen Punkten abspielen können. Sie können mehr über [Best Practices mit der Autoplay-Richtlinie hier erfahren](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Teile Ihrer Datei bei null Lautstärke abzuspielen, könnte auch funktionieren, wenn der Browser Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das Abspielen und sofortige Pausieren Ihres Audios nicht garantiert, dass ein kleiner Teil des Audios nicht abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Homescreen Ihres Mobilgeräts kann ihre Fähigkeiten verändern. Im Fall von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

### Lautstärke

Die programmatische Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft angeführte Grund ist, dass der Benutzer die Lautstärke auf Betriebssystemebene steuern sollte und dies nicht überschritten werden sollte.

### Pufferung und Vorladen

Wahrscheinlich als Versuch, den unkontrollierten mobilen Netzwerkdatenverbrauch zu mildern, stellen wir auch oft fest, dass die Pufferung deaktiviert ist, bevor die Wiedergabe gestartet wurde. Pufferung ist der Prozess, bei dem der Browser das Medium im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe sicherzustellen.

Die {{domxref("HTMLMediaElement")}}-Schnittstelle kommt mit [vielen Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um festzustellen, ob ein Track in einem abspielfähigen Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept der Pufferung veraltet. Solange Bereichsanfragen akzeptiert werden (was das Standardverhalten ist), sollten wir in der Lage sein, zu einem bestimmten Punkt im Audio zu springen, ohne den vorhergehenden Inhalt herunterladen zu müssen. Dennoch ist das Vorladen nützlich — ohne es wäre immer eine gewisse Client-Server-Kommunikation erforderlich, bevor die Wiedergabe beginnen kann.

### Gleichzeitige Audiowiedergabe

Die Anforderung vieler Spiele ist die Möglichkeit, mehr als ein Audiostück gleichzeitig abzuspielen; zum Beispiel könnte Hintergrundmusik zusammen mit Soundeffekten für verschiedene Ereignisse im Spiel abgespielt werden. Obwohl sich die Situation mit der Einführung der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bald verbessern wird, führt die derzeit am meisten unterstützte Methode — unter Verwendung des einfachen {{htmlelement("audio")}}-Elements — zu unzuverlässigen Ergebnissen auf mobilen Geräten.

### Tests und Support

Hier ist eine Tabelle, die zeigt, welche mobilen Plattformen die oben besprochenen Funktionen unterstützen.

<table class="standard-table">
  <caption>
    Unterstützung für Web-Audio-Funktionen auf mobilen Plattformen
  </caption>
  <thead>
    <tr>
      <th scope="row">Mobiler Browser</th>
      <th scope="col">Version</th>
      <th scope="col">Gleichzeitige Wiedergabe</th>
      <th scope="col">Autoplay</th>
      <th scope="col">Lautstärkeanpassung</th>
      <th scope="col">Vorladefunktion</th>
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

Es gibt eine [vollständige Kompatibilitätstabelle für mobile und Desktop HTMLMediaElement-Unterstützung hier](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

> [!NOTE]
> Die gleichzeitige Audiowiedergabe wird mit unserem [Beispielt für den Test gleichzeitiger Audio-Wiedergabe](https://jsfiddle.net/dmkyaq0r/) getestet, wobei wir versuchen, drei Audiodateien gleichzeitig mit der Standard-Audio-API abzuspielen.

> [!NOTE]
> Einfache Autoplay-Funktionalität wird mit unserem [Autoplay-Testbeispiel](https://jsfiddle.net/vpdspp2b/) getestet.

> [!NOTE]
> Die Änderbarkeit der Lautstärke wird mit unserem [Lautstärketestbeispiel](https://jsfiddle.net/7ta12vw4/) getestet.

## Mobile Workarounds

Obwohl mobile Browser Probleme bereiten können, gibt es Wege, die oben beschriebenen Probleme zu umgehen.

### Audio-Sprites

Audio-Sprites leihen sich ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik, bei der CSS mit einer einzigen Grafikressource verwendet wird, um sie in eine Reihe von Sprites zu zerlegen. Wir können dasselbe Prinzip auf Audio anwenden, sodass wir statt vieler kleiner Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren benötigten Audioausschnitte enthält. Um einen bestimmten Ton aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stoppzeiten für jedes Audio-Sprite.

Der Vorteil ist, dass wir ein Stück Audio vorbereiten und unsere Sprites startbereit haben können. Dazu können wir das größere Stück Audio einfach abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "mysprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie stoppen müssen. Wenn Sie Ihre einzelnen Töne um mindestens 500 ms voneinander trennen, sollte das `timeUpdate`-Ereignis (das alle 250 ms ausgelöst wird) ausreichen. Ihre Dateien können etwas länger sein, als sie streng genommen nötig wären, aber Stille komprimiert sich gut.

Hier ist ein Beispiel für einen Audio-Sprite-Player — zuerst richten wir die Benutzeroberfläche in HTML ein:

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

Jetzt haben wir Knöpfe mit Start- und Stoppzeiten in Sekunden. Die "countdown.mp3"-Datei besteht aus einer Nummer, die alle 2 Sekunden gesprochen wird. Der Gedanke dabei ist, dass wir diese Nummer abspielen, wenn der entsprechende Knopf gedrückt wird.

Lassen Sie uns etwas JavaScript hinzufügen, um dies umzusetzen:

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
> Sie können unseren [Audio-Sprite-Player hier live ausprobieren](https://jsfiddle.net/59vwaame/), auf JSFiddle.

> [!NOTE]
> Auf mobilen Geräten müssen wir diesen Code möglicherweise mit einem benutzerinitiierten Ereignis auslösen, z. B. durch Drücken eines Startknopfes, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Das Kodieren Ihres Audios mit niedrigeren Bitraten bedeutet kleinere Dateigrößen, aber geringere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikproben kombinieren und anpassen und — vorausgesetzt, Sie können die Lautstärke des Audio-Elements steuern — unterschiedliche Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu beeinflussen, um sie besser der Action anzupassen.

All dies ist mit dem Standard-{{htmlelement("audio")}}-Element und der zugehörigen {{domxref("HTMLMediaElement")}} möglich, wird jedoch mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API) viel einfacher und flexibler. Schauen wir uns das nun genauer an.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. In Anbetracht dessen ist es in vielen Situationen eine akzeptable Herangehensweise, die Web Audio API zu verwenden (für weitere Informationen zur Browserkompatibilität siehe die [Can I use Web Audio API-Seite](https://caniuse.com/#feat=audio-api)). Die Web Audio API ist eine fortschrittliche JavaScript-API für Audio, die sich ideal für Spiel-Audio eignet. Entwickler können Audio generieren und Audioproben manipulieren sowie Klänge im 3D-Raum positionieren.

Eine gangbare Strategie, um browserübergreifend zu arbeiten, wäre es, Basisaudio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Bemerkenswerterweise unterstützt iOS Safari jetzt die Web Audio API, was bedeutet, dass es jetzt möglich ist, webbasierte Spiele mit nativen Audioqualitäten für iOS zu schreiben.

Da die Web Audio API präzises Timing und eine genaue Steuerung der Audiowiedergabe ermöglicht, können wir sie verwenden, um Proben zu spezifischen Zeitpunkten abzuspielen, was ein entscheidender immersiver Aspekt des Spielens ist. Sie wollen schließlich, dass Explosionen von einem donnernden Knall begleitet werden und nicht von einem verzögerten.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik zu liefern, die sich nicht in Reaktion auf die Spielumgebung ändert, eignet sich die Web Audio API ideal dafür, ein dynamischeres Musikerlebnis zu implementieren. Möglicherweise möchten Sie, dass sich die Musik ändert, je nachdem, ob Sie Spannung aufbauen oder den Spieler auf irgendeine Weise ermutigen möchten. Musik ist ein wichtiger Teil des Spielerlebnisses und abhängig von der Art des Spiels, das Sie entwickeln, könnte es sich lohnen, erheblichen Aufwand zu investieren, um sie richtig hinzubekommen.

Eine Möglichkeit, Ihren Musik-Soundtrack dynamischer zu gestalten, besteht darin, ihn in Komponentenschleifen oder -tracks aufzuteilen. Dies ist oft die Art und Weise, wie Musiker ohnehin Musik komponieren, und die Web Audio API ist extrem gut darin, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks, aus denen Ihr Stück besteht, getrennt haben, können Sie die Tracks ein- und ausschalten, wie es angemessen ist.

Sie können auch Filter oder Effekte auf die Musik anwenden. Befindet sich Ihr Charakter in einer Höhle? Erhöhen Sie das Echo. Vielleicht haben Sie Unterwasserszenen, in denen Sie einen Filter anbringen können, der den Klang dämpft.

Lassen Sie uns einige Web Audio API-Techniken betrachten, um Musik dynamisch von ihren Basistracks anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie einzelne Tracks und Schleifen individuell mit der [Fetch API](/de/docs/Web/API/Fetch_API) oder {{domxref("XMLHttpRequest")}} laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchronously zu laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind und Sie sie abspielen können, während andere geladen werden.

So oder so möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält den Begriff einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audiokontext erstellen. Sie müssen die Zeit zwischen der Erstellung eines Audiokontexts und dem Start des ersten Audiotracks berücksichtigen. Das Aufzeichnen dieses Offsets und das Abfragen der aktuellen Zeit des wiedergegebenen Tracks gibt Ihnen genug Informationen, um separate Audiostücke zu synchronisieren.

Um dies in Aktion zu sehen, lassen Sie uns einige separate Tracks festlegen:

```html
<section id="tracks">
  <ul>
    <li data-loading="true">
      <a href="leadguitar.mp3" class="track">Lead Guitar</a>
      <p class="loading-text">Lädt…</p>
      <button data-playing="false" aria-describedby="guitar-play-label">
        <span id="guitar-play-label">Abspielen</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="bassguitar.mp3" class="track">Bass Guitar</a>
      <p class="loading-text">Lädt…</p>
      <button data-playing="false" aria-describedby="bass-play-label">
        <span id="bass-play-label">Abspielen</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="drums.mp3" class="track">Drums</a>
      <p class="loading-text">Lädt…</p>
      <button data-playing="false" aria-describedby="drums-play-label">
        <span id="drums-play-label">Abspielen</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="horns.mp3" class="track">Horns</a>
      <p class="loading-text">Lädt…</p>
      <button data-playing="false" aria-describedby="horns-play-label">
        <span id="horns-play-label">Abspielen</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="clav.mp3" class="track">Clavi</a>
      <p class="loading-text">Lädt…</p>
      <button data-playing="false" aria-describedby="clavi-play-label">
        <span id="clavi-play-label">Abspielen</span>
      </button>
    </li>
  </ul>
  <p class="sourced">
    Alle Tracks stammen von <a href="https://jplayer.org/">jplayer.org</a>
  </p>
</section>
```

All diese Tracks haben dasselbe Tempo und sind darauf ausgelegt, mit einander synchronisiert zu werden, sodass wir sicherstellen müssen, dass sie geladen und der API _verfügbar_ sind, bevor wir sie abspielen können. Wir können dies mit der [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Funktionalität von JavaScript erledigen.

Sobald sie spielbereit sind, müssen wir sicherstellen, dass sie an dem richtigen Punkt starten, an dem sich andere Tracks möglicherweise spielen, sodass sie synchronisiert sind.

Lassen Sie uns unseren Audiokontext erstellen:

```js
const audioCtx = new AudioContext();
```

Jetzt lassen Sie uns alle {{htmlelement("li")}}-Elemente auswählen; später können wir diese Elemente nutzen, um Zugriff auf den Track-Dateipfad und jeden einzelnen Play-Button zu erhalten.

```js
const trackEls = document.querySelectorAll("li");
```

Wir möchten sicherstellen, dass jede Datei geladen und in einen Puffer decodiert wurde, bevor wir sie verwenden, also lassen Sie uns eine `async`-Funktion erstellen, damit wir das tun können:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgendes Code ausführen können, wenn sie beendet wurde.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um die Probe einzurichten — wir können die beiden asynchronen Funktionen in einem schönen Versprechenmuster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Wir brauchen hier einen Offset, sodass, wenn wir eine Datei abspielen lassen haben, wir einen Aufzeichnung darüber haben, wie weit wir es abspielen lassen müssen, wenn wir eine andere Datei spielen lassen.

`start()` nimmt zwei optionale Parameter. Der erste ist, wann mit der Wiedergabe begonnen werden soll, und der zweite ist wo, was unser Offset ist.

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

Lassen Sie uns schließlich über unsere `<li>`-Elemente schleifen, die korrekte Datei für jedes nehmen und dann die Wiedergabe ermöglichen, indem wir den "Laden..."-Text ausblenden und den Abspielknopf anzeigen:

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

Im Kontext Ihrer Spielwelt können Sie möglicherweise Loops und Samples haben, die unter unterschiedlichen Umständen gespielt werden, und es kann nützlich sein, sie mit anderen Tracks für ein nahtloseres Erlebnis zu synchronisieren.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Takt endet, bevor es den nächsten Teil einführt; wir könnten dies tun, wenn wir das BPM (Beats Per Minute) der Tracks kennen würden.

Sie könnten feststellen, dass die Einführung eines neuen Tracks natürlicher klingt, wenn er im Takt/Takt/Abschnitt eintritt oder wie auch immer Sie Ihre Hintergrundmusik unterteilen möchten.

Um dies zu tun, bevor Sie den Track abspielen, den Sie synchronisieren möchten, sollten Sie berechnen, wie lange es bis zum Start des nächsten Takts/Taktes usw. dauert.

Hier ist ein wenig Code, der Ihnen, gegeben ein Tempo (die Zeit in Sekunden Ihres Taktes), berechnet, wie lange Sie warten müssen, bevor Sie den nächsten Teil spielen — Sie geben den resultierenden Wert der `start()`-Funktion mit dem ersten Parameter, der die absolute Zeit angibt, wann die Wiedergabe beginnen soll. Beachten Sie, dass der zweite Parameter (wo das Abspielen im neuen Titel beginnen soll) relativ ist:

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
> Sie können unseren [Wartezeitrechner-Code hier ausprobieren](https://jsfiddle.net/c87z11jj/2/), auf JSFiddle (ich habe hier auf den Takt synchronisiert).

> [!NOTE]
> Wenn der erste Parameter 0 oder kleiner als die `currentTime` des Kontexts ist, beginnt die Wiedergabe sofort.

### Positionales Audio

Positionales Audio kann eine wichtige Technik sein, um Audio zu einem wichtigen Bestandteil einer immersiven Spielerfahrung zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Reihe von Audioquellen im dreidimensionalen Raum zu positionieren, sondern sie ermöglicht es uns auch, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die positionalen Fähigkeiten der Web Audio API, sodass wir mehr Informationen über die Spielwelt an den Spieler vermitteln können. Es gibt ein [Tutorial hier](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um den `pannerNode` im Detail zu verstehen.

Wir können folgendes vermitteln:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, etc.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es ermöglicht, Audio mit den Objekten und Blickwinkeln zu verknüpfen.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Element/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
