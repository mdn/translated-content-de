---
title: Audio für Web-Spiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Audio ist ein wichtiger Bestandteil eines jeden Spiels; es bietet Rückmeldung und Atmosphäre. Webbasiertes Audio entwickelt sich schnell weiter, aber es gibt immer noch viele Unterschiede zwischen den Browsern, die es zu navigieren gilt. Oft müssen wir entscheiden, welche Audioteile für das Spielerlebnis unbedingt notwendig sind und welche zwar nett sind, aber nicht unbedingt erforderlich, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen detaillierten Leitfaden zur Implementierung von Audio für Web-Spiele und betrachtet, was derzeit auf möglichst vielen Plattformen funktioniert.

## Hinweise zu mobilem Audio

Bei weitem die schwierigsten Plattformen, um Web-Audio-Unterstützung bereitzustellen, sind mobile Plattformen. Leider sind dies auch die Plattformen, die häufig zum Spielen genutzt werden. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die möglicherweise dazu geführt haben, dass Browser-Anbieter Entscheidungen getroffen haben, die es Spieleentwicklern schwer machen können, mit Web-Audio zu arbeiten. Schauen wir uns diese jetzt an.

### Autoplay

Die Browser-Autoplay-Richtlinie betrifft nun sowohl Desktop- als auch mobile Browser. Weitere Informationen dazu finden Sie [hier auf der Google Developers-Website](https://developer.chrome.com/blog/autoplay/).

Es ist zu beachten, dass Autoplay mit Ton erlaubt ist, wenn:

- der Nutzer mit der Domain interagiert hat.
- der Nutzer auf Mobilgeräten [die Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren sämtliche von Ihrem Spiel gestellten Anforderungen, um Audio automatisch wiederzugeben; stattdessen muss die Audiowiedergabe durch ein benutzerinitiiertes Ereignis, wie einen Klick oder Tipp, gestartet werden. Das bedeutet, dass Sie Ihre Audiowiedergabe so strukturieren müssen, dass dies berücksichtigt wird. Dies wird in der Regel dadurch gemildert, dass das Audio im Voraus geladen und bei einem benutzerinitiierten Ereignis angestoßen wird.

Für eher passive Audio-Autoplay, wie Hintergrundmusik, die startet, sobald ein Spiel geladen ist, besteht ein Trick darin, _beliebiges_ benutzerinitiiertes Ereignis zu erkennen und die Wiedergabe dann zu starten. Für andere aktivere Sounds, die während des Spiels verwendet werden sollen, könnten wir in Betracht ziehen, diese zu starten, sobald etwas wie ein _Start_-Button gedrückt wird.

Um Audio auf diese Weise zu starten, wollen wir einen Teil davon abspielen; aus diesem Grund ist es nützlich, einen Moment der Stille am Ende Ihrer Audioaufnahme einzufügen. Zu diesem Punkt zu springen, ihn abzuspielen und dann zu pausieren, bedeutet, dass wir nun JavaScript verwenden können, um diese Datei an beliebigen Stellen abzuspielen. Weitere Informationen zu [Best Practices mit der Autoplay-Richtlinie finden Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei mit null Lautstärke könnte ebenfalls funktionieren, wenn der Browser es Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das Abspielen und sofortige Pausieren des Audios nicht garantiert, dass nicht ein kleines Stück Audio abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zu Ihrem Mobile-Startbildschirm kann deren Fähigkeiten ändern. Im Fall von Autoplay unter iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

### Lautstärke

Die programmgesteuerte Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der häufig angegebene Grund ist, dass der Nutzer die Lautstärke auf Betriebssystemebene steuern sollte und dies nicht überschrieben werden sollte.

### Pufferung und Vorladen

Wahrscheinlich als Versuch, den ungezügelten mobilen Netzwerkdatenverbrauch zu mindern, stellen wir auch oft fest, dass die Pufferung deaktiviert ist, bevor die Wiedergabe gestartet wurde. Pufferung ist der Prozess, bei dem der Browser das Medium im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um zu bestimmen, ob ein Track in einem abspielbaren Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept der Pufferung veraltet. Solange Byte-Bereichsanfragen akzeptiert werden (was das Standardverhalten ist), sollten wir in der Lage sein, zu einem bestimmten Punkt im Audio zu springen, ohne den vorhergehenden Inhalt herunterladen zu müssen. Allerdings ist das Vorladen immer noch nützlich — ohne es bräuchte es immer eine gewisse Client-Server-Kommunikation, bevor die Wiedergabe beginnen kann.

### Gleichzeitige Audio-Wiedergabe

Ein Bedürfnis vieler Spiele ist die Möglichkeit, mehr als ein Stück Audio gleichzeitig abzuspielen; zum Beispiel könnte es Hintergrundmusik geben, die zusammen mit Soundeffekten für verschiedene Dinge im Spiel abgespielt wird. Obwohl die Situation mit der Einführung der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bald besser wird, führt die derzeit am weitesten verbreitete Methode — die Verwendung des einfachen {{htmlelement("audio")}}-Elements — zu lückenhaften Ergebnissen auf mobilen Geräten.

### Testen und Unterstützung

Hier ist eine Tabelle, die zeigt, welche mobilen Plattformen die oben genannten Funktionen unterstützen.

<table class="standard-table">
  <caption>
    Unterstützung von Web-Audio-Funktionen auf mobilen Plattformen
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
> Gleichzeitige Audio-Wiedergabe wird mit unserem [Testbeispiel für gleichzeitige Audio-Wiedergabe](https://jsfiddle.net/dmkyaq0r/) getestet, bei dem wir versuchen, drei Audiodateien gleichzeitig mit der Standard-Audio-API abzuspielen.

> [!NOTE]
> Einfache Autoplay-Funktionalität wird mit unserem [Autoplay-Testbeispiel](https://jsfiddle.net/vpdspp2b/) getestet.

> [!NOTE]
> Die Veränderbarkeit der Lautstärke wird mit unserem [Lautstärke-Testbeispiel](https://jsfiddle.net/7ta12vw4/) getestet.

## Mobile Workarounds

Obwohl mobile Browser Probleme bereiten können, gibt es Möglichkeiten, die oben beschriebenen Probleme zu umgehen.

### Audiosprites

Audiosprites leihen sich ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik zum Verwenden eines einzelnes grafisches Ressource, um es in einer Reihe von Sprites zu zerlegen. Wir können dasselbe Prinzip auf Audio anwenden, indem wir anstelle einer Reihe von kleinen Audio-Dateien, die jeweils Zeit zum Laden und Abspielen benötigen, eine größere Audio-Datei haben, die alle kleineren benötigten Audio-Schnipsel enthält. Um einen bestimmten Sound aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stopzeiten für jedes Audiosprite.

Der Vorteil ist, dass wir ein Stück Audio primen und unsere Sprites bereithalten können. Dazu können wir einfach das größere Stück Audio abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "mysprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann Sie stoppen müssen. Wenn Sie Ihre individuellen Töne mindestens um 500 ms voneinander trennen, sollte das `timeUpdate`-Ereignis (das alle 250 ms ausgelöst wird) ausreichen. Ihre Dateien könnten etwas länger sein, als sie eigentlich sein müssten, aber Stille komprimiert sich gut.

Hier ist ein Beispiel für einen Audiosprite-Player — zuerst richten wir die Benutzeroberfläche in HTML ein:

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

Nun haben wir Tasten mit Start- und Stopzeiten in Sekunden. Die "countdown.mp3"-MP3-Datei besteht aus einer Zahl, die alle zwei Sekunden gesprochen wird, wobei die Idee ist, dass diese Zahl wiedergegeben wird, wenn die entsprechende Taste gedrückt wird.

Lassen Sie uns etwas JavaScript hinzufügen, damit dies funktioniert:

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
> Sie können [unseren Audiosprite-Player live testen](https://jsfiddle.net/59vwaame/) auf JSFiddle.

> [!NOTE]
> Auf Mobilgeräten müssen wir diesen Code möglicherweise durch ein benutzerinitiiertes Ereignis wie das Drücken eines Start-Buttons auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Das Codieren Ihres Audios mit niedrigeren Bitraten führt zu kleineren Dateigrößen, verringert jedoch die Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann eine starke emotionale Wirkung haben. Sie können verschiedene Musikstücke mischen und anpassen, und vorausgesetzt, Sie können die Lautstärke Ihres Audio-Elements steuern, könnten Sie verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu ändern, um sie besser mit der Aktion zu synchronisieren.

All dies ist mit dem Standard-{{htmlelement("audio")}}-Element und dem zugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, wird jedoch viel einfacher und flexibler mit der fortschrittlicheren [Web Audio API](/de/docs/Web/API/Web_Audio_API). Schauen wir uns das als nächstes an.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. Daher ist es in vielen Situationen eine akzeptable Herangehensweise, die Web Audio API zu verwenden (siehe die [Can I use Web Audio API Seite](https://caniuse.com/#feat=audio-api) für weitere Informationen zur Browser-Kompatibilität). Die Web Audio API ist eine fortschrittliche Audio-JavaScript-Schnittstelle, die ideal für Spiel-Audio ist. Entwickler können Audio generieren und Audiosamples manipulieren sowie Ton im 3D-Spielraum positionieren.

Eine mögliche Cross-Browser-Strategie wäre es, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo möglich, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Bemerkenswert ist, dass iOS Safari jetzt die Web Audio API unterstützt, was bedeutet, dass es nun möglich ist, webbasierten Spiele mit nativer Audioqualität für iOS zu schreiben.

Da die Web Audio API eine präzise Timing- und Steuerungsmöglichkeit der Audiowiedergabe bietet, können wir sie verwenden, um Samples zu bestimmten Zeitpunkten abzuspielen, was ein entscheidendes immersives Element des Spielens ist. Schließlich möchten Sie, dass diese Explosionen von einem donnernden Boom begleitet werden, nicht danach.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik zu liefern, die sich nicht in Reaktion auf die Spielumgebung ändert, ist die Web Audio API ideal für die Umsetzung eines dynamischeren musikalischen Erlebnisses. Sie möchten möglicherweise, dass sich die Musik ändert, je nachdem, ob Sie versuchen, Spannung aufzubauen oder den Spieler auf irgendeine Weise zu ermutigen. Musik ist ein wichtiger Teil des Spielerlebnisses und abhängig von der Art des Spiels, das Sie machen, möchten Sie möglicherweise erhebliche Anstrengungen unternehmen, um es richtig zu gestalten.

Eine Möglichkeit, Ihren Musik-Soundtrack dynamischer zu gestalten, besteht darin, ihn in Bestandteilschleifen oder -tracks zu zerlegen. Oft ist dies die Art und Weise, wie Musiker Musik ohnehin komponieren, und die Web Audio API ist ausgesprochen gut darin, diese Teile im Einklang zu halten. Sobald Sie die verschiedenen Tracks haben, die Ihr Stück ausmachen, können Sie nach Belieben Spuren ein- und ausblenden.

Sie können auch Filter oder Effekte auf Musik anwenden. Ist Ihre Spielfigur in einer Höhle? Erhöhen Sie das Echo. Vielleicht haben Sie Unterwasserszenen, bei denen Sie einen Filter anwenden könnten, der den Klang dämpft.

Schauen wir uns einige Techniken der Web Audio API an, mit denen Musik aus ihren Basistracks dynamisch angepasst werden kann.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie separate Tracks und Loops individuell über die [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Synchrones Laden könnte bedeuten, dass Teile Ihrer Musik früher verfügbar sind und Sie sie abspielen können, während andere noch geladen werden.

So oder so möchten Sie möglicherweise Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audio-Kontext erstellen. Sie müssen den Zeitraum zwischen der Erstellung eines Audio-Kontextes berücksichtigen und wann der erste Audiotrack zu spielen beginnt. Wenn Sie diesen Versatz aufzeichnen und die aktuelle Zeit des laufenden Tracks abfragen, haben Sie genug Informationen, um separate Audioproben zu synchronisieren.

Um dies in Aktion zu sehen, lassen Sie uns einige separate Tracks anlegen:

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

Alle diese Tracks haben das gleiche Tempo und sind darauf ausgelegt, miteinander synchronisiert zu werden, sodass wir sicherstellen müssen, dass sie geladen und verfügbar für die API sind, _bevor_ wir sie abspielen können. Dies können wir mit der [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Funktionalität von JavaScript tun.

Sobald sie abspielbereit sind, müssen wir sicherstellen, dass sie zu dem Zeitpunkt starten, an dem andere Tracks möglicherweise bereits abspielen, damit sie synchronisiert werden.

Lassen Sie uns unseren Audio-Kontext erstellen:

```js
const audioCtx = new AudioContext();
```

Nun wählen wir alle {{htmlelement("li")}}-Elemente aus; später können wir diese Elemente verwenden, um Zugang zum Track-Dateipfad und zu jeder individueller Spieletaste zu erhalten.

![](5-36b96e0.md)

Wir möchten sicherstellen, dass jede Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie nutzen, also lassen Sie uns eine `async`-Funktion erstellen, die dies ermöglicht:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await`-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nach dem Beenden der Ausführung nachfolgenden Code ausführen können.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden Async-Funktionen in einem schönen Versprechen-Muster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert ist:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Erstellen wir auch eine `playTrack()`-Funktion, die wir aufrufen können, sobald eine Datei abgerufen wurde. Wir benötigen hier einen Versatz, damit wir, wenn wir eine Datei zu spielen begonnen haben, einen Rekord darüber haben, wie weit wir durch sind, um eine andere Datei von diesem Punkt zu starten.

`start()` nimmt zwei optionale Parameter. Der erste ist, wann die Wiedergabe beginnen soll, und der zweite ist wo, was unser Versatz ist.

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

Schließlich lassen Sie uns über unsere `<li>`-Elemente iterieren, die richtige Datei für jedes auswählen und dann die Wiedergabe erlauben, indem wir den „Laden“-Text verbergen und die Wiedergabetaste anzeigen:

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
> Sie können [dieses Demo hier in Aktion sehen](https://mdn.github.io/webaudio-examples/multi-track/) und [den Quellcode hier einsehen](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

In der Kontext Ihrer Spielewelt könnten Sie Schleifen und Samples haben, die unter verschiedenen Umständen gespielt werden, und es kann nützlich sein, mit anderen Tracks zu synchronisieren für eine reibungslosere Erfahrung.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Beat endet, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir die BPM (Beats Per Minute) der Tracks kennen.

Sie werden vielleicht feststellen, dass die Einführung eines neuen Tracks natürlicher klingt, wenn er in den Takt/Takt/Abschnitt oder welche Einheiten auch immer Sie Ihre Hintergrundmusik einteilen mochten, einsteigt.

Um dies zu tun, bevor Sie den Track synchronisieren möchten, sollten Sie berechnen, wie lange es dauert, bis der nächste Takt/Abschnitt etc. beginnt.

Hier ist ein bisschen Code, der basierend auf einem Tempo (die Zeit in Sekunden Ihres Taktes/Abschnittes), berechnen wird, wie lange es dauert, bis Sie das nächste Teil spielen können — Sie füttern den resultierenden Wert an die `start()`-Funktion mit dem ersten Parameter, der die absolute Zeit nimmt, wann diese Wiedergabe beginnen soll. Beachten Sie, dass der zweite Parameter (von wo im neuen Track abgespielt werden soll) relativ ist:

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
> Sie können unseren [Wartezeitrechner-Code](https://jsfiddle.net/c87z11jj/2/) hier auf JSFiddle ausprobieren (ich habe in diesem Fall zum Takt synchronisiert).

> [!NOTE]
> Wenn der erste Parameter 0 oder kleiner als die `currentTime` des Kontextes ist, beginnt die Wiedergabe sofort.

### Positionsabhängiges Audio

Positionsabhängiges Audio kann eine wichtige Technik dabei sein, Audio zu einem wesentlichen Bestandteil eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Anzahl von Audioquellen im dreidimensionalen Raum zu positionieren, sondern kann uns auch erlauben, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die positionsabhängigen Fähigkeiten der Web Audio API, damit wir dem Spieler mehr Informationen über die Spielwelt vermitteln können. Es gibt ein [Tutorial hier](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um den `pannerNode` besser zu verstehen.

Wir können vermitteln:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, usw.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es ermöglicht, Audio mit den Objekten und Perspektiven zu verknüpfen.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Element/audio)
- [Songs of Diridum: Die Web Audio API bis an ihre Grenzen bringen](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [HTML5 Audio für Mobile tatsächlich arbeitsfähig machen](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audiosprites (und Fixes für iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
