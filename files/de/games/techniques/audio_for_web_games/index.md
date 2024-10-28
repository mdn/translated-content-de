---
title: Audio für Webspiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GamesSidebar}}

Audio ist ein wichtiger Bestandteil jedes Spiels; es fügt Feedback und Atmosphäre hinzu. Web-basiertes Audio entwickelt sich schnell, aber es gibt immer noch viele Unterschiede zwischen Browsern, die es zu navigieren gilt. Oft müssen wir entscheiden, welche Teile des Audios für das Spielerlebnis unverzichtbar sind und welche zwar schön, aber nicht essenziell sind, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Webspiele und untersucht, was aktuell auf so vielen Plattformen wie möglich funktioniert.

## Hinweise für mobiles Audio

Bei weitem die schwierigsten Plattformen, um Unterstützung für Web-Audio bereitzustellen, sind mobile Plattformen. Leider sind dies auch die Plattformen, die oft zum Spielen genutzt werden. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die Browseranbieter möglicherweise dazu veranlasst haben, Entscheidungen zu treffen, die es Spieleentwicklern erschweren, mit Web-Audio zu arbeiten. Betrachten wir diese nun.

### Autoplay

Die Autoplay-Politik betrifft nun Desktop _und_ mobile Browser. Weitere Informationen dazu finden Sie [hier auf der Google Developers-Seite](https://developer.chrome.com/blog/autoplay/).

Es ist wichtig zu beachten, dass Autoplay mit Ton erlaubt ist, wenn:

- der Nutzer mit der Domain interagiert hat.
- auf mobilen Geräten der Benutzer [die Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren Anfragen Ihres Spiels, Audio automatisch abzuspielen; stattdessen muss die Audiowiedergabe durch ein benutzerinitiiertes Ereignis wie einen Klick oder Tipp gestartet werden. Das bedeutet, dass Sie Ihre Audiowiedergabe entsprechend strukturieren müssen. Üblicherweise wird dies gemildert, indem das Audio im Voraus geladen und auf ein benutzerinitiiertes Ereignis vorbereitet wird.

Für passiveres Audio-Autoplay, beispielsweise Hintergrundmusik, die sofort nach dem Laden eines Spiels startet, ist ein Trick, _jedes_ benutzerinitiierte Ereignis zu erkennen und die Wiedergabe dann zu starten. Für andere aktiver genutzte Geräusche im Spiel könnten wir erwägen, sie vorzubereiten, sobald etwas wie ein _Start_-Button gedrückt wird.

Um Audio derart vorzubereiten, möchten wir einen Teil davon abspielen; deshalb ist es nützlich, einen Moment der Stille am Ende Ihres Audiobeispiels zu haben. Zu diesem Stillemoment zu springen, ihn abzuspielen und dann zu pausieren bedeutet, dass wir diese Datei nun mithilfe von JavaScript zu beliebigen Zeitpunkten abspielen können. Weitere Informationen zu den [besten Praktiken mit der Autoplay-Politik finden Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei bei Null Lautstärke könnte ebenfalls funktionieren, wenn der Browser es erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das sofortige Abspielen und Pausieren Ihres Audios nicht garantiert, dass ein kleines Stück Audio nicht abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Startbildschirm Ihres Mobiltelefons kann deren Fähigkeiten verändern. Im Fall von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

### Lautstärke

Die programmatische Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft gegebene Grund ist, dass der Benutzer die Lautstärke auf der Betriebssystemebene kontrollieren und diese nicht überschrieben werden sollte.

### Puffern und Vorladen

Wahrscheinlich als Versuch, den unkontrollierten mobilen Netzwerkdatenverbrauch zu mildern, stellen wir oft fest, dass das Puffern deaktiviert ist, bevor die Wiedergabe initiiert wurde. Puffern ist der Prozess, bei dem der Browser das Medium im Voraus herunterlädt, was oft nötig ist, um eine gleichmäßige Wiedergabe zu gewährleisten.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interface bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), die helfen zu bestimmen, ob ein Track in einem abspielbaren Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Pufferens ein veraltetes. Solange Anfragen mit Byte-Bereichen akzeptiert werden (was das Standardverhalten ist), sollten wir in der Lage sein, zu einem bestimmten Punkt im Audio zu springen, ohne die vorhergehenden Inhalte herunterladen zu müssen. Trotzdem ist das Vorladen nützlich — ohne Vorladen wären immer einige client-server-Kommunikationen erforderlich, bevor die Wiedergabe beginnen kann.

### Gleichzeitige Audiowiedergabe

Eine Anforderung vieler Spiele ist die Notwendigkeit, mehr als ein Audiosignal gleichzeitig abzuspielen; beispielsweise könnte Hintergrundmusik zusammen mit Soundeffekten für verschiedene Ereignisse im Spiel abgespielt werden. Obwohl sich die Situation mit der Einführung der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bald verbessert, führt die derzeit am weitesten unterstützte Methode — die Verwendung des standardmäßigen {{htmlelement("audio")}} Elements — zu uneinheitlichen Ergebnissen auf mobilen Geräten.

### Testen und Unterstützung

Hier ist eine Tabelle, die zeigt, welche mobilen Plattformen die oben genannten Funktionen unterstützen.

<table class="standard-table">
  <caption>
    Mobile Unterstützung für Web-Audio-Funktionen
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

Hier finden Sie ein [vollständiges Kompatibilitätsdiagramm für die Unterstützung von mobilen und Desktop-HTMLMediaElementen](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

> [!NOTE]
> Die gleichzeitige Audiowiedergabe wird mit unserem [Beispiel für gleichzeitige Audiowiedergabe getestet](https://jsfiddle.net/dmkyaq0r/), bei dem versucht wird, drei Audiosignale gleichzeitig mit der Standard-Audio-API abzuspielen.

> [!NOTE]
> Die einfache Autoplay-Funktionalität wird mit unserem [Autoplay-Testbeispiel](https://jsfiddle.net/vpdspp2b/) getestet.

> [!NOTE]
> Die Lautstärkeänderbarkeit wird mit unserem [Lautstärketestbeispiel](https://jsfiddle.net/7ta12vw4/) getestet.

## Mobile Lösungen

Obwohl mobile Browser Probleme bereiten können, gibt es Möglichkeiten, die oben beschriebenen Probleme zu umgehen.

### Audio-Sprites

Audio-Sprites leihen sich ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik, um CSS mit einer einzelnen Grafikressource zu nutzen, um sie in eine Reihe von Sprites aufzuteilen. Wir können das gleiche Prinzip auf Audio anwenden, sodass wir anstelle von vielen kleinen Audiodateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren Audioclips enthält, die wir benötigen. Um einen bestimmten Sound aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stopzeiten für jedes Audio-Sprite.

Der Vorteil ist, dass wir ein Stück Audio vorbereiten können und unsere Sprites bereit sind. Dazu können wir einfach das größere Stück Audio abspielen und sofort pausieren. So können Sie auch die Anzahl der Serveranfragen reduzieren und Bandbreite sparen.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie stoppen müssen. Wenn Sie Ihre einzelnen Geräusche um mindestens 500 ms voneinander trennen, sollte das `timeUpdate`-Ereignis (das alle 250 ms ausgelöst wird) ausreichend sein. Ihre Dateien könnten etwas länger sein, als es unbedingt nötig wäre, aber Stille komprimiert gut.

Hier ist ein Beispiel für einen Audio-Sprite-Player — zunächst richten wir die Benutzeroberfläche in HTML ein:

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

Jetzt haben wir Tasten mit Start- und Stoppzeiten in Sekunden. Die "countdown.mp3"-Datei besteht aus einer Zahl, die alle 2 Sekunden gesprochen wird, wobei die Idee ist, dass wir diese Zahl zurückspielen, wenn die entsprechende Taste gedrückt wird.

Fügen wir nun etwas JavaScript hinzu, um dies zum Laufen zu bringen:

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
> Sie können [unseren Audio-Sprite-Player live](https://jsfiddle.net/59vwaame/) auf JSFiddle ausprobieren.

> [!NOTE]
> Auf mobilen Geräten müssen wir diesen Code möglicherweise von einem benutzerinitiierten Ereignis wie dem Drücken einer Starttaste auslösen, wie oben beschrieben.

> [!NOTE]
> Achtung bei Bitraten. Das Kodieren Ihres Audios mit niedrigeren Bitraten bedeutet kleinere Dateigrößen, aber geringere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikstücke mixen und anpassen und, vorausgesetzt, Sie können die Lautstärke Ihres Audio-Elements steuern, verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu beeinflussen, um sie besser mit der Action abzustimmen.

All dies ist mit dem standardmäßigen {{htmlelement("audio")}} Element und dem zugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, wird aber mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API) viel einfacher und flexibler. Lassen Sie uns das als Nächstes betrachten.

### Web Audio API für Spiele

Die Web Audio API wird von allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. Mit diesem Wissen ist es in vielen Situationen akzeptabel, die Web Audio API zu verwenden (siehe die [Kann ich die Web Audio API verwenden-Seite](https://caniuse.com/#feat=audio-api) für mehr Informationen zur Browser-Kompatibilität). Die Web Audio API ist eine fortgeschrittene Audio-JavaScript-API, die ideal für Spielesound ist. Entwickler können Audio generieren und Audioproben manipulieren sowie Klang im 3D-Spielraum positionieren.

Eine machbare Cross-Browser-Strategie wäre es, grundständiges Audio mithilfe des standardmäßigen `<audio>`-Elements bereitzustellen und, wo unterstützt, die Erfahrung mit der Web Audio API zu verbessern.

> [!NOTE]
> Bedeutend ist, dass iOS Safari nun die Web Audio API unterstützt, was bedeutet, dass es nun möglich ist, webbasierte Spiele mit nativer Audioqualität für iOS zu entwickeln.

Da die Web Audio API präzises Timing und Kontrolle der Audiowiedergabe ermöglicht, können wir sie nutzen, um Samples zu bestimmten Zeitpunkten abzuspielen, was ein entscheidender immersiver Aspekt des Gaming-Erlebnisses ist. Sie wollen schließlich, dass diese Explosionen von einem donnernden Boom begleitet werden, nicht danach.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik zu liefern, die nicht auf die Spielumgebung reagiert, ist die Web Audio API ideal, um ein dynamischeres Musikerlebnis zu implementieren. Sie möchten möglicherweise, dass sich die Musik je nach Situation ändert, um Spannung aufzubauen oder den Spieler auf gewisse Weise zu ermutigen. Musik ist ein wichtiger Teil des Spielerlebnisses und je nach Art des Spiels, das Sie erstellen, möchten Sie vielleicht erhebliche Anstrengungen unternehmen, um es richtig hinzubekommen.

Eine Methode, mit der Sie Ihr Musik-Soundtrack dynamischer gestalten können, besteht darin, ihn in Komponentenloops oder -tracks zu unterteilen. Dies ist oft die Art und Weise, wie Musiker Musik komponieren, und die Web Audio API ist extrem gut darin, diese Teile synchron zu halten. Sobald Sie die verschiedenen Tracks, die Ihr Stück ausmachen, haben, können Sie sie nach Bedarf ein- und ausblenden.

Sie können auch Filter oder Effekte auf die Musik anwenden. Ist Ihre Spielfigur in einer Höhle? Erhöhen Sie das Echo. Vielleicht haben Sie Unterwasserszenen, während derer Sie einen Filter anwenden könnten, der den Klang dämpft.

Lassen Sie uns einige Techniken der Web Audio API betrachten, um Musik dynamisch aus ihren Basistracks anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie separate Tracks und Loops individuell mit der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchrones Laden könnte bedeuten, dass Teile Ihrer Musik früher verfügbar sind und Sie sie abspielen können, während andere geladen werden.

Wie dem auch sei, Sie möchten möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audiokontext erstellen. Sie müssen die Zeit zwischen dem Erstellen eines Audiokontextes und dem Zeitpunkt, an dem der erste Audiotrack zu spielen beginnt, berücksichtigen. Die Aufzeichnung dieses Offsets und das Abfragen der aktuellen Zeit des spielenden Tracks gibt Ihnen genug Informationen, um separate Stücke Audio zu synchronisieren.

Um dies in Aktion zu sehen, legen wir einige separate Tracks dar:

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

All diese Tracks haben dasselbe Tempo und sollen miteinander synchronisiert werden, daher müssen wir sicherstellen, dass sie geladen und für die API verfügbar sind _bevor_ wir sie abspielen können. Wir können dies mit der [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Funktionalität von JavaScript tun.

Sobald sie abgespielt werden können, müssen wir sicherstellen, dass sie zu dem Punkt starten, an dem andere Tracks möglicherweise spielen, damit sie sich synchronisieren.

Erstellen wir unseren Audiokontext:

```js
const audioCtx = new AudioContext();
```

Suchen wir nun alle {{htmlelement("li")}} Elemente aus; später können wir diese Elemente nutzen, um Zugriff auf den Track-Dateipfad und die einzelnen Wiedergabeknöpfe zu erhalten.

```js
const trackEls = document.querySelectorAll("li");
```

Wir möchten sicherstellen, dass jede Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden, daher erstellen wir eine `async`-Funktion, die uns dies ermöglicht:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator verwenden, um diese Funktion aufzurufen, was sicherstellt, dass wir nachfolgende Codeausführungen ausführen können, wenn sie fertig ist.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um die Probe einzurichten — wir können die beiden `async`-Funktionen in einem schönen Versprechens-Muster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Lassen Sie uns auch eine `playTrack()`-Funktion erstellen, die wir aufrufen können, wenn eine Datei abgerufen wurde. Wir benötigen hier einen Offset, sodass, wenn wir eine Datei gestartet haben, wir eine Aufzeichnung davon haben, wie weit durch eine andere Datei abgespielt werden sollte.

`start()` nimmt zwei optionale Parameter an. Der erste ist, wann die Wiedergabe beginnen soll, und der zweite ist wo, was unser Offset ist.

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

Zum Schluss schleifen wir über unsere `<li>`-Elemente, holen die richtige Datei für jedes Einzelne und erlauben dann die Wiedergabe, indem wir den "Ladetext" verstecken und den Wiedergabeknopf anzeigen:

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

Im Kontext Ihrer Spielewelt könnten Sie Loops und Samples haben, die in verschiedenen Situationen abgespielt werden und es kann nützlich sein, mit anderen Tracks zu synchronisieren für ein nahtloseres Erlebnis.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Beat endet, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir die BPM (Beats Per Minute) der Tracks wüssten.

Es könnte sein, dass die Einführung eines neuen Tracks natürlicher klingt, wenn sie auf den Beat/Takt/Phrase oder welche Einheiten auch immer Sie verwenden möchten, um Ihre Hintergrundmusik zu segmentieren, erfolgen.

Um dies zu tun, bevor Sie den Track synchronisieren, den Sie abspielen möchten, sollten Sie berechnen, wie lange es bis zum Beginn des nächsten Beats/Takts etc. dauert.

Hier ist ein bisschen Code, der bei gegebener Geschwindigkeit (die Zeit in Sekunden Ihres Beats/Takts) berechnet, wie lange Sie warten müssen, bevor Sie den nächsten Teil spielen — Sie geben den resultierenden Wert an die `start()`-Funktion mit dem ersten Parameter, der die absolute Zeit angibt, zu der die Wiedergabe beginnen sollte. Beachten Sie, dass der zweite Parameter (wo der neue Track beginnen soll) relativ ist:

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
> Sie können unseren [Wartezeitrechner-Code hier ausprobieren](https://jsfiddle.net/c87z11jj/2/), auf JSFiddle (ich habe zur Bar synchronisiert in diesem Fall).

> [!NOTE]
> Wenn der erste Parameter 0 oder kleiner als der Kontext `currentTime` ist, beginnt die Wiedergabe sofort.

### Positionsaudio

Positionsaudio kann eine wichtige Technik sein, um Audio zu einem zentralen Bestandteil eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht uns nicht nur, eine Reihe von Audiokontakten im dreidimensionalen Raum zu positionieren, sondern sie kann uns auch erlauben, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die Positionsfähigkeiten der Web Audio API, sodass wir dem Spieler weitere Informationen über die Spielwelt übermitteln können. Es gibt ein [Tutorial hier](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um den `pannerNode` im Detail besser zu verstehen.

Wir können Folgendes übermitteln:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenhaft, unter Wasser, etc.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es ermöglicht, Audio an die Objekte und Standpunkte zu binden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Element/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio-Sprites (und Korrekturen für iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
