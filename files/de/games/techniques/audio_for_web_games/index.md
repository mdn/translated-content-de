---
title: Audio für Web-Spiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GamesSidebar}}

Audio ist ein wichtiger Bestandteil jedes Spiels; es bietet Rückmeldung und Atmosphäre. Webbasierte Audio-Unterstützung entwickelt sich rasch weiter, aber es gibt immer noch viele Unterschiede zwischen Browsern, die es zu navigieren gilt. Wir müssen oft entscheiden, welche Audio-Teile für das Spielerlebnis wesentlich sind und welche zwar schön zu haben, aber nicht notwendig sind, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Web-Spiele und betrachtet, was derzeit auf möglichst vielen Plattformen funktioniert.

## Konzepte für mobiles Audio

Bei weitem die schwierigsten Plattformen, um Web-Audio-Unterstützung bereitzustellen, sind mobile Plattformen. Leider sind dies auch die Plattformen, die oft genutzt werden, um Spiele zu spielen. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die dazu führen können, dass Browser-Anbieter Entscheidungen treffen, die Web-Audio für Spieleentwickler schwerer nutzbar machen. Sehen wir uns diese nun an.

### Autoplay

Die automatische Wiedergabefunktion von Browsern hat nun Auswirkungen auf sowohl Desktop- als auch mobile Browser. Weitere Informationen dazu finden Sie [hier auf der Google Developers-Website](https://developer.chrome.com/blog/autoplay/).

Es ist erwähnenswert, dass die automatische Wiedergabe mit Ton erlaubt ist, wenn:

- der Benutzer mit der Domain interagiert hat.
- der Nutzer auf Mobilgeräten [die Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren Anfragen Ihres Spiels, Audio automatisch abzuspielen; stattdessen muss die Wiedergabe von Audio durch ein vom Benutzer initiiertes Ereignis, wie einen Klick oder eine Berührung, gestartet werden. Das bedeutet, dass Sie Ihr Audio-Playback entsprechend strukturieren müssen. Dies wird in der Regel dadurch abgemildert, dass das Audio im Voraus geladen und bei einem vom Benutzer initiierten Ereignis vorbereitet wird.

Für eine eher passive Audio-Wiedergabe, wie Hintergrundmusik, die startet, sobald ein Spiel geladen wird, ist ein Trick, _jedes_ vom Benutzer initiierte Ereignis zu erkennen und die Wiedergabe dann zu starten. Für andere aktivere Sounds, die während des Spiels verwendet werden sollen, könnten wir in Betracht ziehen, sie zu primen, sobald etwas wie eine _Start_-Schaltfläche gedrückt wird.

Um Audio auf diese Weise zu primen, möchten wir einen Teil davon abspielen; aus diesem Grund ist es nützlich, am Ende Ihres Audio-Samples einen Moment der Stille einzufügen. Zu dieser Stille zu springen, sie abzuspielen und dann zu pausieren, bedeutet, dass wir jetzt JavaScript verwenden können, um diese Datei an beliebigen Punkten abzuspielen. Weitere Informationen zu [besten Praktiken mit der Autoplay-Richtlinie finden Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei mit null Lautstärke könnte auch funktionieren, wenn der Browser es Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das sofortige Abspielen und Pausieren Ihrer Audio-Datei nicht garantiert, dass kein kleines Stück Audio abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Startbildschirm Ihres Mobiltelefons kann ihre Fähigkeiten ändern. Im Fall von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

### Lautstärke

Die programmgesteuerte Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft angegebene Grund ist, dass der Benutzer die Lautstärke auf Betriebssystemebene kontrollieren sollte, und dies nicht überschrieben werden sollte.

### Pufferung und Vorladen

Wahrscheinlich als Versuch, den übermäßigen mobilen Netzwerk-Datenverbrauch zu mindern, finden wir auch oft, dass das Puffern vor der Initiierung der Wiedergabe deaktiviert ist. Puffern ist der Prozess, bei dem der Browser die Medien im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um festzustellen, ob ein Track in einem spielbaren Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Pufferns veraltet. Solange Byte-Range-Anfragen akzeptiert werden (was das Standardverhalten ist), sollten wir in der Lage sein, zu einem spezifischen Punkt im Audio zu springen, ohne den vorhergehenden Inhalt herunterladen zu müssen. Allerdings ist das Vorladen immer noch nützlich — ohne dies wäre immer eine gewisse Client-Server-Kommunikation erforderlich, bevor die Wiedergabe beginnen könnte.

### Gleichzeitige Audiowiedergabe

Eine Anforderung vieler Spiele ist die Notwendigkeit, mehr als ein Stück Audio gleichzeitig abzuspielen; zum Beispiel könnte Hintergrundmusik zusammen mit Soundeffekten für verschiedene Ereignisse im Spiel abgespielt werden. Obwohl sich die Situation mit der Einführung der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bald verbessern wird, führt die derzeit am weitesten verbreitete Methode — die Verwendung des einfachen {{htmlelement("audio")}}-Elements — zu ungleichen Ergebnissen auf mobilen Geräten.

### Testen und Unterstützung

Hier ist eine Tabelle, die zeigt, welche mobilen Plattformen die oben besprochenen Funktionen unterstützen.

<table class="standard-table">
  <caption>
    Unterstützung für mobile Web-Audio-Funktionen
  </caption>
  <thead>
    <tr>
      <th scope="row">Mobiler Browser</th>
      <th scope="col">Version</th>
      <th scope="col">Gleichzeitige Wiedergabe</th>
      <th scope="col">Autoplay</th>
      <th scope="col">Lautstärkeanpassung</th>
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

Es gibt eine [vollständige Kompatibilitätstabelle für mobile und Desktop-HTMLMediaElement-Unterstützung hier](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

> [!NOTE]
> Gleichzeitige Audiowiedergabe wird mit unserem [gleichzeitigen Audio-Testbeispiel](https://jsfiddle.net/dmkyaq0r/) getestet, bei dem wir versuchen, drei Stücke Audio gleichzeitig mit der Standard-Audio-API abzuspielen.

> [!NOTE]
> Einfache Autoplay-Funktionalität wird mit unserem [Autoplay-Testbeispiel](https://jsfiddle.net/vpdspp2b/) getestet.

> [!NOTE]
> Die Veränderbarkeit der Lautstärke wird mit unserem [Lautstärke-Testbeispiel](https://jsfiddle.net/7ta12vw4/) getestet.

## Mobile Umgehungen

Obwohl mobile Browser Probleme verursachen können, gibt es Möglichkeiten, die oben beschriebenen Probleme zu umgehen.

### Audiosprites

Audiosprites leihen sich ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik zur Nutzung von CSS mit einer einzelnen Grafikressource, um sie in eine Reihe von Sprites zu zerlegen. Wir können das gleiche Prinzip auf Audio anwenden, sodass wir anstatt einer Menge kleiner Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren Audioclips enthält, die wir benötigen. Um einen spezifischen Sound aus der Datei abzuspielen, nutzen wir einfach die bekannten Start- und Stoppzeiten für jedes Audiosprite.

Der Vorteil ist, dass wir ein Stück Audio primen können und unsere Sprites einsatzbereit sind. Dazu können wir das größere Stück Audio einfach abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie stoppen müssen. Wenn Sie Ihre einzelnen Sounds um mindestens 500 ms erfreuen, sollte das `timeUpdate`-Ereignis (das alle 250 ms ausgelöst wird) ausreichen. Ihre Dateien könnten etwas länger sein, als sie streng genommen nötig wären, aber Stille lässt sich gut komprimieren.

Hier ist ein Beispiel für einen Audiosprite-Player. Lassen Sie uns zunächst die Benutzeroberfläche in HTML einrichten:

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

Jetzt haben wir Schaltflächen mit Start- und Stoppzeiten in Sekunden. Die MP3-Datei "countdown.mp3" enthält Zahlen, die alle 2 Sekunden gesprochen werden, wobei die Idee ist, diesen Zahlen bei Betätigung der entsprechenden Schaltfläche wiederzugeben.

Lassen Sie uns etwas JavaScript hinzufügen, um dies zu ermöglichen:

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
> Sie können [unseren Audiosprite-Player live](https://jsfiddle.net/59vwaame/) auf JSFiddle ausprobieren.

> [!NOTE]
> Auf mobilen Geräten müssen wir diesen Code möglicherweise durch ein vom Benutzer initiiertes Ereignis, wie z.B. das Drücken einer Start-Schaltfläche, auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Wenn Sie Ihr Audio mit niedrigeren Bitraten codieren, bedeutet dies kleinere Dateigrößen, aber niedrigere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann einen starken emotionalen Effekt haben. Sie können verschiedene Musikbeispiele mischen und kombinieren und, sofern Sie die Lautstärke Ihres Audio-Elements kontrollieren können, verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu beeinflussen, um sie besser mit der Aktion zu synchronisieren.

All dies ist mit dem standardmäßigen {{htmlelement("audio")}}-Element und dem zugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, aber es wird viel einfacher und flexibler mit der weiterentwickelten [Web Audio API](/de/docs/Web/API/Web_Audio_API). Schauen wir uns das als nächstes an.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. In Anbetracht dessen ist es in vielen Situationen eine akzeptable Herangehensweise, die Web Audio API zu verwenden (siehe die Seite [Can I use Web Audio API](https://caniuse.com/#feat=audio-api) für mehr zur Browser-Kompatibilität). Die Web Audio API ist eine fortschrittliche Audio-JavaScript-API, die sich ideal für Spielaudio eignet. Entwickler können Audio generieren und Audioproben manipulieren sowie Sound im 3D-Spielraum positionieren.

Eine umsetzbare Cross-Browser-Strategie wäre es, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Bedeutenderweise unterstützt iOS Safari jetzt die Web Audio API, was bedeutet, dass es nun möglich ist, webbasierte Spiele mit nativer Audioqualität für iOS zu schreiben.

Da die Web Audio API präzises Timing und Kontrolle der Audiowiedergabe ermöglicht, können wir sie nutzen, um Proben zu bestimmten Momenten abzuspielen, was ein entscheidender immersiver Aspekt des Gaming ist. Sie möchten, dass diese Explosionen von einem donnernden Knall begleitet werden, nicht von einem, der danach folgt.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element nutzen können, um lineare Hintergrundmusik bereitzustellen, die sich nicht in Reaktion auf die Spielumgebung ändert, ist die Web Audio API ideal, um ein dynamischeres Musikerlebnis zu implementieren. Sie möchten möglicherweise, dass sich die Musik je nach Situation ändert, ob Sie Spannung aufbauen oder den Spieler auf irgendeine Weise ermutigen möchten. Musik ist ein wichtiger Teil des Spielerlebnisses und abhängig von der Art des Spiels, das Sie erstellen, möchten Sie möglicherweise erheblichen Aufwand investieren, um es richtig zu machen.

Eine Möglichkeit, Ihren Musik-Soundtrack dynamischer zu gestalten, besteht darin, ihn in Bestandteile oder Loops zu teilen. Das ist oft die Art und Weise, wie Musiker ohnehin Musik komponieren, und die Web Audio API ist extrem gut darin, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks, die Ihr Stück ausmachen, haben, können Sie Tracks herein- und herausbringen, wie es angemessen erscheint.

Sie können auch Filter oder Effekte auf Musik anwenden. Ist Ihr Charakter in einer Höhle? Erhöhen Sie den Echo. Vielleicht haben Sie Szenen unter Wasser, während derer Sie einen Filter anwenden könnten, der den Sound dämpft.

Schauen wir uns einige Techniken der Web Audio API an, um Musik dynamisch aus den Basis-Tracks anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie separate Tracks und Loops individuell mit der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie entweder synchron oder parallel laden können. Synchrones Laden könnte bedeuten, dass Teile Ihrer Musik früher einsatzbereit sind und Sie können sie abspielen, während andere geladen werden.

So oder so möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audio-Kontext erstellen. Sie müssen die Zeit zwischen der Erstellung eines Audio-Kontextes und dem Starten des Abspielens des ersten Audio-Tracks berücksichtigen. Wenn Sie diesen Offset aufzeichnen und die aktuelle Zeit des abspielenden Tracks abfragen, erhalten Sie genug Informationen, um separate Audio-Stücke zu synchronisieren.

Um dies in Aktion zu sehen, lassen Sie uns einige separate Tracks einrichten:

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

Alle diese Tracks haben dasselbe Tempo und sollen miteinander synchronisiert werden, daher müssen wir sicherstellen, dass sie geladen und der API _bevor_ verfügbar sind, bevor wir sie abspielen können. Wir können dies mit der [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Funktionalität in JavaScript tun.

Sobald sie verfügbar sind abgespielt zu werden, müssen wir sicherstellen, dass sie an dem korrekten Punkt beginnen, den andere Tracks möglicherweise abspielen, sodass sie synchronisiert ablaufen.

Lassen Sie uns unseren Audio-Kontext erstellen:

```js
const audioCtx = new AudioContext();
```

Als Nächstes wählen wir alle {{htmlelement("li")}}-Elemente aus; später können wir diese Elemente nutzen, um Zugriff auf den Track-Dateipfad und jede individuelle Abspiel-Schaltfläche zu erhalten.

```js
const trackEls = document.querySelectorAll("li");
```

Wir möchten sicherstellen, dass jede Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie nutzen, also lassen Sie uns eine `async`-Funktion erstellen, um uns dies zu ermöglichen:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgende Codezeilen ausführen können, wenn die Funktion abgeschlossen ist.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden async-Funktionen in einem gelungenen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert wurde:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lasst uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, sobald eine Datei abgerufen wurde. Hier benötigen wir einen Offset, damit, wenn wir eine Datei abspielen, wir einen Datensatz darüber haben, wie weit fortgeschritten das Starten einer anderen Datei sein soll.

`start()` nimmt zwei optionale Parameter. Der erste ist, wann die Wiedergabe begonnen werden soll, und der zweite ist, wo, was unser Offset ist.

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

Schließlich lassen Sie uns über unsere `<li>`-Elemente iterieren, die richtige Datei für jedes von ihnen greifen und dann die Wiedergabe ermöglichen, indem wir den Text "Laden" ausblenden und den Abspiel-Knopf anzeigen:

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

Im Kontext Ihrer Spielwelt können Sie Loops und Proben haben, die unter verschiedenen Umständen abgespielt werden, und es kann nützlich sein, in der Lage zu sein, sich mit anderen Tracks zu synchronisieren, um ein nahtloseres Erlebnis zu schaffen.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Takt endet, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir das BPM (Beats Per Minute) der Tracks kennen.

Sie werden vielleicht feststellen, dass die Einführung eines neuen Tracks natürlicher klingt, wenn er mit einem beat/bar/Phrase oder welchen Einheiten auch immer Ihre Hintergrundmusik chunkte, eingeführt wird.

Um dies zu tun, bevor Sie den Track abspielen, den Sie synchronisieren möchten, sollten Sie berechnen, wie lange es bis zur nächsten Startzeit des zu spielenden Stücks dauert.

Hier ist ein kleines Code-Stück, das Ihnen gegeben ein Tempo (die Zeit in Sekunden Ihres beats/bar) berechnet, wie lange Sie warten sollten, um zu spielen — Sie führen den resultierenden Wert in die `start()`-Funktion mit dem ersten Parameter ein, der die absolute Zeit nimmt, wann diese Wiedergabe beginnen sollte. Beachten Sie, dass der zweite Parameter (wo zum Beginn des neuen Tracks abgespielt werden soll) relativ ist:

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
> Sie können [unseren Wartezeit-Rechner-Code hier ausprobieren](https://jsfiddle.net/c87z11jj/2/) auf JSFiddle (ich habe ihn hier auf den Takt synchronisiert).

> [!NOTE]
> Wenn der erste Parameter 0 oder kleiner als die `currentTime` des Kontextes ist, wird die Wiedergabe sofort beginnen.

### Positionales Audio

Positionales Audio kann eine wichtige Technik sein, um Audio zu einem zentralen Teil des immersive Spielerlebens zu machen. Die Web Audio API ermöglicht uns nicht nur, eine Vielzahl von Audioquellen im dreidimensionalen Raum zu positionieren, sondern sie erlaubt uns auch, Filter anzuwenden, die das Audio realistisch erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die positionalen Fähigkeiten der Web Audio API, sodass wir dem Spieler zusätzliche Informationen über die Spielwelt vermitteln können. Es gibt ein [Tutorial hier](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), das hilft, den `pannerNode` genauer zu verstehen.

Wir können in Beziehung setzen:

- Die position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, etc.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL dargestellt wird, wo die Web Audio API es möglich macht, Audio an die Objekte und Blickpunkte zu binden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Reference/Elements/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
