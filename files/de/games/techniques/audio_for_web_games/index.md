---
title: Audio für Webspiele
slug: Games/Techniques/Audio_for_Web_Games
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Audio ist ein wichtiger Bestandteil jedes Spiels; es bietet Feedback und Atmosphäre. Webbasierte Audio-Technologien entwickeln sich schnell weiter, aber es gibt immer noch viele Unterschiede zwischen den Browsern, die es zu überwinden gilt. Oft müssen wir entscheiden, welche Audioelemente für das Spielerlebnis unverzichtbar sind und welche zwar wünschenswert, aber nicht essenziell sind, und entsprechend eine Strategie entwickeln. Dieser Artikel bietet einen ausführlichen Leitfaden zur Implementierung von Audio für Webspiele, wobei darauf geachtet wird, was derzeit über ein möglichst breites Spektrum an Plattformen hinweg funktioniert.

## Mobile Audio-Einschränkungen

Die mit Abstand schwierigsten Plattformen, um Web-Audio-Unterstützung bereitzustellen, sind mobile Plattformen. Leider sind dies auch die Plattformen, die häufig zum Spielen von Spielen verwendet werden. Es gibt einige Unterschiede zwischen Desktop- und mobilen Browsern, die Browseranbieter dazu veranlasst haben könnten, Entscheidungen zu treffen, die Web-Audio für Spieleentwickler schwer umsetzbar machen. Lassen Sie uns diese nun näher betrachten.

### Autoplay

Die Autoplay-Richtlinien von Browsern betreffen nun sowohl Desktop- als auch mobile Browser. Weitere Informationen dazu finden Sie [hier auf der Google Developers-Website](https://developer.chrome.com/blog/autoplay/).

Es ist erwähnenswert, dass Autoplay mit Ton erlaubt ist, wenn:

- der Nutzer mit der Domain interagiert hat.
- auf dem Mobilgerät der Nutzer die [Anwendung installierbar gemacht hat](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Viele Browser ignorieren Anfragen Ihres Spiels, Audio automatisch abzuspielen; stattdessen muss die Audiowiedergabe durch ein vom Nutzer initiiertes Ereignis wie einen Klick oder ein Tippen gestartet werden. Dies bedeutet, dass Sie Ihre Audiowiedergabe entsprechend strukturieren müssen. Dies wird normalerweise dadurch abgemildert, dass das Audio im Voraus geladen und bei einem vom Nutzer initiierten Ereignis vorbereitet wird.

Für passiveres Autoplay von Audio, zum Beispiel Hintergrundmusik, die sofort beim Laden eines Spiels beginnt, besteht ein Trick darin, _jedes_ vom Nutzer initiierte Ereignis zu erkennen und die Wiedergabe dann zu starten. Für andere, aktivere Sounds, die während des Spiels verwendet werden sollen, können wir in Betracht ziehen, diese sofort vorzubereiten, sobald ein _Start_-Knopf gedrückt wird.

Um Audio auf diese Weise vorzubereiten, möchten wir einen Teil davon abspielen; aus diesem Grund ist es nützlich, einen Moment der Stille am Ende Ihrer Audioaufnahme einzufügen. Durch das Springen zu dieser Stille, das Abspielen und anschließende Pausieren können wir jetzt JavaScript verwenden, um diese Datei zu beliebigen Zeitpunkten abzuspielen. Weitere Informationen zu [besten Praktiken mit der Autoplay-Richtlinie finden Sie hier](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Das Abspielen eines Teils Ihrer Datei mit Null-Lautstärke könnte ebenfalls funktionieren, wenn der Browser Ihnen erlaubt, die Lautstärke zu ändern (siehe unten). Beachten Sie auch, dass das sofortige Pausieren Ihrer Audio-Datei nicht garantiert, dass kein kleines Stück Audio abgespielt wird.

> [!NOTE]
> Das Hinzufügen einer Web-App zum Startbildschirm Ihres Mobilgeräts kann dessen Fähigkeiten verändern. Im Fall von Autoplay auf iOS scheint dies derzeit der Fall zu sein. Wenn möglich, sollten Sie Ihren Code auf mehreren Geräten und Plattformen testen, um zu sehen, wie er funktioniert.

### Volumen

Die programmatische Lautstärkeregelung kann in mobilen Browsern deaktiviert sein. Der oft angegebene Grund ist, dass der Nutzer die Lautstärke auf Betriebssystemebene steuern sollte und dies nicht außer Kraft gesetzt werden sollte.

### Pufferung und Vorladen

Wahrscheinlich als Versuch, den übermäßigen mobilen Datenverbrauch zu minimieren, stellen wir oft fest, dass das Puffern vor dem Initiieren der Wiedergabe deaktiviert ist. Puffern ist der Prozess, bei dem der Browser die Medien im Voraus herunterlädt, was wir oft tun müssen, um eine reibungslose Wiedergabe zu gewährleisten.

Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interface bietet [viele Eigenschaften](/de/docs/Web/API/HTMLMediaElement#instance_properties), um festzustellen, ob ein Track in einem abspielbaren Zustand ist.

> [!NOTE]
> In vielerlei Hinsicht ist das Konzept des Pufferings veraltet. Solange Bereichsanforderungen (byte-range requests) akzeptiert werden (was das Standardverhalten ist), sollten wir zu einem bestimmten Punkt im Audio springen können, ohne vorherigen Inhalt herunterladen zu müssen. Dennoch ist das Vorladen nützlich — ohne dieses würde immer eine Art von Client-Server-Kommunikation erforderlich sein, bevor die Wiedergabe beginnen kann.

### Gleichzeitige Audiowiedergabe

Eine Anforderung vieler Spiele ist die Notwendigkeit, mehrere Audios gleichzeitig abzuspielen; beispielsweise könnte es Hintergrundmusik geben, die zusammen mit Soundeffekten für verschiedene Dinge im Spiel abgespielt wird. Obwohl sich die Situation mit der Einführung der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bald verbessern wird, führt die derzeit am weitesten verbreitete Methode — die Verwendung des einfachen {{htmlelement("audio")}} Elements — zu lückenhaften Ergebnissen auf mobilen Geräten.

### Testen und Unterstützung

Hier ist eine Tabelle, die zeigt, welche mobilen Plattformen die oben besprochenen Funktionen unterstützen.

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
      <th scope="col">Lautstärkeregelung</th>
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

Es gibt hier eine [vollständige Kompatibilitätstabelle für mobile und Desktop-HTMLMediaElement-Unterstützung](/de/docs/Web/API/HTMLMediaElement#browser_compatibility).

> [!NOTE]
> Die gleichzeitige Audiowiedergabe wird mit unserem [Testbeispiel für gleichzeitige Audio-Wiedergabe](https://jsfiddle.net/dmkyaq0r/) getestet, bei dem versucht wird, drei Audiodateien gleichzeitig mit der Standard-Audio-API abzuspielen.

> [!NOTE]
> Einfache Autoplay-Funktionalität wird mit unserem [Autoplay-Testbeispiel](https://jsfiddle.net/vpdspp2b/) getestet.

> [!NOTE]
> Die Veränderbarkeit der Lautstärke wird mit unserem [Lautstärke-Testbeispiel](https://jsfiddle.net/7ta12vw4/) getestet.

## Mobile Umgehungsmöglichkeiten

Auch wenn mobile Browser Probleme bereiten können, gibt es Möglichkeiten, die oben beschriebenen Probleme zu umgehen.

### Audiosprites

Audiosprites leihen ihren Namen von [CSS-Sprites](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), einer visuellen Technik zur Verwendung von CSS mit einer einzigen Grafikquelle, um sie in eine Reihe von Sprites aufzuteilen. Wir können das gleiche Prinzip auf Audio anwenden, so dass wir anstelle einer Menge kleiner Audio-Dateien, die Zeit zum Laden und Abspielen benötigen, eine größere Audiodatei haben, die alle kleineren Audioausschnitte enthält, die wir benötigen. Um einen bestimmten Sound aus der Datei abzuspielen, verwenden wir einfach die bekannten Start- und Stop-Zeiten für jedes Audiosprite.

Der Vorteil ist, dass wir ein Stück Audio vorbereiten und unsere Sprites bereit zur Wiedergabe haben können. Dazu können wir einfach das größere Stück Audio abspielen und sofort pausieren. Sie reduzieren auch die Anzahl der Serveranfragen und sparen Bandbreite.

```js
const myAudio = document.createElement("audio");
myAudio.src = "mysprite.mp3";
myAudio.play();
myAudio.pause();
```

Sie müssen die aktuelle Zeit abtasten, um zu wissen, wann gestoppt werden muss. Wenn Sie Ihre einzelnen Sounds um mindestens 500 ms auseinander stellen, sollte das `timeUpdate` Event (das alle 250 ms ausgelöst wird) ausreichend sein. Ihre Dateien können etwas länger sein, als sie streng genommen sein müssen, aber Stille komprimiert sich gut.

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

Nun haben wir Tasten mit Start- und Stoppzeiten in Sekunden. Die "countdown.mp3"-MP3-Datei besteht aus einer Nummer, die alle 2 Sekunden gesprochen wird, die Idee dabei ist, diese Nummer abzuspielen, wenn die entsprechende Taste gedrückt wird.

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
> Sie können [unseren Audiosprite-Player live ausprobieren](https://jsfiddle.net/59vwaame/) auf JSFiddle.

> [!NOTE]
> Auf mobilen Geräten müssen wir möglicherweise diesen Code von einem vom Nutzer initiierten Ereignis auslösen, wie oben beschrieben.

> [!NOTE]
> Achten Sie auf Bitraten. Wenn Sie Ihr Audio mit niedrigeren Bitraten codieren, erhalten Sie kleinere Dateigrößen, aber geringere Suchgenauigkeit.

### Hintergrundmusik

Musik in Spielen kann einen starken emotionalen Effekt haben. Sie können verschiedene Musikproben mischen und anpassen und, vorausgesetzt, Sie können die Lautstärke Ihres Audioelements steuern, könnten Sie verschiedene Musikstücke überblenden. Mit der Methode [`playbackRate()`](/de/docs/Web/API/HTMLMediaElement/playbackRate) können Sie sogar die Geschwindigkeit Ihrer Musik anpassen, ohne die Tonhöhe zu beeinträchtigen, um sie besser mit der Aktion zu synchronisieren.

All dies ist mit dem Standard-{{htmlelement("audio")}} Element und dem dazugehörigen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) möglich, aber es wird viel einfacher und flexibler mit der fortgeschritteneren [Web Audio API](/de/docs/Web/API/Web_Audio_API). Schauen wir uns dies als nächstes an.

### Web Audio API für Spiele

Die Web Audio API wird in allen modernen Desktop- und mobilen Browsern unterstützt, mit Ausnahme von Opera Mini. In diesem Zusammenhang ist es in vielen Situationen akzeptabel, die Web Audio API zu verwenden (siehe die [„Can I use Web Audio API“-Seite](https://caniuse.com/#feat=audio-api) für mehr Informationen zur Browserkompatibilität). Die Web Audio API ist eine fortgeschrittene Audio-JavaScript-API, die ideal für Spielaudio geeignet ist. Entwickler können Audio erzeugen, Audioproben manipulieren sowie Sound im 3D-Spielraum positionieren.

Eine machbare Browser-übergreifende Strategie wäre es, grundlegendes Audio mit dem Standard-`<audio>`-Element bereitzustellen und, wo unterstützt, das Erlebnis mit der Web Audio API zu verbessern.

> [!NOTE]
> Erheblich ist, dass iOS Safari nun die Web Audio API unterstützt, was bedeutet, dass es nun möglich ist, webbasierte Spiele mit Audio in nativer Qualität für iOS zu erstellen.

Da die Web Audio API eine präzise Zeitsteuerung und Kontrolle der Audiowiedergabe ermöglicht, können wir sie verwenden, um Samples zu spezifischen Momenten abzuspielen, was ein wichtiger immersiver Aspekt des Spielens ist. Schließlich möchten Sie, dass diese Explosionen von einem donnernden Knall begleitet werden und nicht erst danach auftreten.

### Hintergrundmusik mit der Web Audio API

Obwohl wir das `<audio>`-Element verwenden können, um lineare Hintergrundmusik bereitzustellen, die sich nicht in Reaktion auf die Spielumgebung ändert, ist die Web Audio API ideal für die Implementierung eines dynamischeren Musikerlebnisses. Sie möchten möglicherweise, dass sich die Musik ändert, abhängig davon, ob Sie versuchen, Spannung aufzubauen oder den Spieler in irgendeiner Weise zu ermutigen. Musik ist ein wichtiger Bestandteil des Spielerlebnisses und, abhängig von der Art des Spiels, das Sie erstellen, möchten Sie möglicherweise erheblichen Aufwand in die Umsetzung investieren.

Eine Möglichkeit, Ihren Musik-Soundtrack dynamischer zu gestalten, besteht darin, diesen in Komponenten-Loops oder Tracks aufzuspalten. Dies ist oft die Art und Weise, wie Musiker ohnehin Musik komponieren, und die Web Audio API ist extrem gut darin, diese Teile im Einklang zu halten. Sobald Sie die verschiedenen Tracks haben, die Ihr Musikstück bilden, können Sie passende Tracks hinzufügen oder entfernen.

Sie können auch Filter oder Effekte auf die Musik anwenden. Ist Ihr Charakter in einer Höhle? Erhöhen Sie den Nachhall. Vielleicht haben Sie Unterwasserszenen, in denen Sie einen Filter anwenden könnten, der den Klang dämpft.

Schauen wir uns einige Techniken der Web Audio API an, um Musik dynamisch von den Basistracks anzupassen.

### Laden Ihrer Tracks

Mit der Web Audio API können Sie einzelne Tracks und Loops separat mit der [Fetch API](/de/docs/Web/API/Fetch_API) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) laden, was bedeutet, dass Sie sie synchron oder parallel laden können. Das synchrone Laden könnte bedeuten, dass Teile Ihrer Musik früher bereit sind und Sie mit deren Wiedergabe beginnen können, während andere noch laden.

So oder so möchten Sie solche Tracks oder Loops synchronisieren. Die Web Audio API enthält das Konzept einer internen Uhr, die zu ticken beginnt, sobald Sie einen Audio-Kontext erstellen. Sie müssen die Zeit zwischen der Erstellung eines Audio-Kontexts und dem Beginn des Abspielens des ersten Tracks berücksichtigen. Die Aufzeichnung dieses Offsets und das Abfragen der aktuellen Zeit des abgespielten Tracks gibt Ihnen genügend Informationen, um separate Stücke des Audios zu synchronisieren.

Um dies in Aktion zu sehen, legen wir einige getrennte Tracks bereit:

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

Alle diese Tracks haben das gleiche Tempo und sollen synchronisiert miteinander abgespielt werden, daher müssen wir sicherstellen, dass sie geladen und dem API _verfügbar_ sind, bevor wir sie abspielen können. Dies können wir mit der `async`/`await` Funktionalität in JavaScript tun.

Sobald sie zur Wiedergabe verfügbar sind, müssen wir sicherstellen, dass sie zu dem Punkt starten, an dem sich andere Tracks möglicherweise befinden, damit sie synchron bleiben.

Erstellen wir unseren Audio-Kontext:

```js
const audioCtx = new AudioContext();
```

Jetzt wählen wir alle {{htmlelement("li")}} Elemente aus; später können wir diese Elemente nutzen, um uns Zugang zum Track-Dateipfad und jedem einzelnen Abspiel-Button zu verschaffen.

```js
const trackEls = document.querySelectorAll("li");
```

Wir möchten sicherstellen, dass jede Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden, also lassen Sie uns eine `async` Funktion erstellen, die es uns ermöglicht, dies zu tun:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den `await` Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgende Codezeilen ausführen können, wenn es fertig ist.

Lassen Sie uns eine weitere `async` Funktion erstellen, um das Sample einzurichten — wir können die beiden async Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn jede Datei geladen und gepuffert wurde:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Erstellen wir ebenfalls eine `playTrack()` Funktion, die wir aufrufen können, sobald eine Datei heruntergeladen wurde. Wir benötigen hier einen Offset, so dass, wenn eine Datei bereits abgespielt wird, wir einen Eintrag haben, wie weit durchgegangen werden muss, um eine andere Datei zu starten.

`start()` nimmt zwei optionale Parameter. Der erste ist, wann die Wiedergabe beginnen soll, und der zweite ist das Wo, welches unser Offset ist.

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

Schließlich lassen Sie uns über unsere `<li>` Elemente iterieren, die korrekte Datei für jedes Element abrufen und dann die Wiedergabe ermöglichen, indem wir den "loading" Text ausblenden und den Play-Button anzeigen:

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

Im Kontext Ihrer Spielwelt können Sie Loops und Samples haben, die in unterschiedlichen Umständen abgespielt werden, und es kann nützlich sein, in der Lage zu sein, mit anderen Tracks zu synchronisieren, um ein nahtloseres Erlebnis zu erzielen.

> [!NOTE]
> Dieses Beispiel wartet nicht darauf, dass der Takt endet, bevor das nächste Stück eingeführt wird; wir könnten dies tun, wenn wir die BPM (Schläge pro Minute) der Tracks kennen würden.

Es kann natürlicher klingen, wenn der neue Track auf dem Takt/Takt/Ph. etc. einsetzt, in den Sie Ihre Hintergrundmusik unterteilt haben.

Um dies zu tun, bevor Sie den Track abspielen, den Sie synchronisieren möchten, sollten Sie berechnen, wie lange es bis zum Beginn des nächsten Takt/Takt/Ph. etc. dauert.

Hier ist ein wenig Code, der ein Tempo (die Zeit in Sekunden Ihres Takt/Takt) gegeben, berechnet, wie lange zu warten ist, bis Sie das nächste Stück abspielen — Sie geben den resultierenden Wert der `start()` Funktion mit dem ersten Parameter, welcher die absolute Zeit, wann die Wiedergabe beginnen soll, annimmt. Beachten Sie, dass der zweite Parameter (wo im neuen Track abgespielt werden soll) relativ ist:

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
> Sie können [unseren Wartezeit-Rechner-Code ausprobieren](https://jsfiddle.net/c87z11jj/2/) hier, auf JSFiddle (ich habe hierbei zur Taktleiste synchronisiert).

> [!NOTE]
> Wenn der erste Parameter 0 ist oder weniger als die `currentTime` des Kontextes, beginnt die Wiedergabe sofort.

### Positionales Audio

Positional Audio kann eine wichtige Technik sein, um Audio zu einem wesentlichen Bestandteil eines immersiven Spielerlebnisses zu machen. Die Web Audio API ermöglicht es uns nicht nur, eine Reihe von Audioquellen im dreidimensionalen Raum zu positionieren, sondern ermöglicht es uns auch, Filter anzuwenden, die dieses Audio realistischer erscheinen lassen.

Der [`pannerNode`](/de/docs/Web/API/PannerNode) nutzt die Positionierungsmöglichkeiten der Web Audio API, so dass wir dem Spieler weitere Informationen über die Spielwelt vermitteln können. Es gibt hier ein [Tutorial](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics), um den `pannerNode` genauer zu verstehen.

Wir können in Beziehung setzen:

- Die Position von Objekten
- Die Richtung und Bewegung von Objekten
- Die Umgebung (höhlenartig, unter Wasser, etc.)

Dies ist besonders nützlich in einer dreidimensionalen Umgebung, die mit WebGL gerendert wird, wo die Web Audio API es möglich macht, Audio mit den Objekten und Ansichten zu verbinden.

## Siehe auch

- [Web Audio API auf MDN](/de/docs/Web/API/Web_Audio_API)
- [`<audio>` auf MDN](/de/docs/Web/HTML/Element/audio)
- [Songs of Diridum: Die Web Audio API an ihre Grenzen bringen](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [HTML5 Audio wirklich auf Mobilgeräten zum Laufen bringen](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audiosprites (und Lösungen für iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
