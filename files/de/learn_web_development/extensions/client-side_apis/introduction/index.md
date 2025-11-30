---
title: Einführung in Web-APIs
short-title: Introduction
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Zuerst werfen wir einen Blick auf APIs aus einer höheren Perspektive - was sind sie, wie funktionieren sie, wie verwendet man sie in Ihrem Code, und wie sind sie strukturiert? Wir werden uns auch ansehen, welche verschiedenen Hauptklassen von APIs es gibt und welche Anwendungen sie haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen der JavaScript-Objekte</a> und grundlegenden API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Web-APIs sind und was Sie mit ihnen machen können.</li>
          <li>Wie APIs verwendet werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Application Programming Interfaces (APIs) sind Konstrukte, die in Programmiersprachen zur Verfügung gestellt werden, um Entwicklern das Erstellen komplexer Funktionalitäten zu erleichtern. Sie abstrahieren komplexeren Code, indem sie eine einfachere Syntax zur Verfügung stellen.

Als Beispiel aus der realen Welt denken Sie an die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder in einer anderen Unterkunft. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose und es funktioniert. Sie versuchen nicht, es direkt mit der Stromversorgung zu verbinden - dies wäre wirklich ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind in zwei verschiedene Steckdosen eingesteckt. Jede Mehrfachsteckdose hat einen Steckplatz oben und eine an der Vorderseite. Zwei Stecker sind in jede Mehrfachsteckdose eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In ähnlicher Weise, wenn Sie zum Beispiel einige 3D-Grafiken programmieren möchten, ist es viel einfacher, dies mit einer API zu tun, die in einer höheren Programmiersprache wie JavaScript oder Python geschrieben ist, anstatt direkten Low-Level-Code (wie C oder C++) zu schreiben, der die GPU des Computers oder andere Grafikfunktionen direkt steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "API-Glossareintrag")}} für eine weitere Beschreibung.

### APIs in Client-seitigem JavaScript

Client-seitiges JavaScript hat insbesondere viele APIs zur Verfügung - diese sind nicht Teil der JavaScript-Sprache selbst, sondern sie werden auf der Grundlage der Kern-JavaScript-Sprache erstellt, um Ihnen zusätzliche Supermächte in Ihrem JavaScript-Code zur Verfügung zu stellen. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihrem Web-Browser integriert und können Daten aus dem Browser und der Umgebung des Computers bereitstellen und nützliche komplexe Dinge damit tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser - ein Audiotrack kann zum Beispiel in der Lautstärke variiert oder mit Effekten versehen werden. Im Hintergrund verwendet der Browser tatsächlich einige komplexe niedrigere Code-Ebenen (z.B. C++ oder Rust), um die eigentliche Audiobearbeitung durchzuführen. Aber wieder wird diese Komplexität durch die API vor Ihnen abstrahiert.
- **Drittanbieter-APIs** sind nicht standardmäßig im Browser eingebaut, und Sie müssen ihren Code und Informationen im Allgemeinen von einem Ort im Web beziehen. Zum Beispiel ermöglicht die [Google Maps API](https://developers.google.com/maps/documentation/javascript) Dinge wie das Anzeigen einer interaktiven Karte zu Ihrem Büro auf Ihrer Website. Sie bietet ein spezielles Set von Konstrukten, die Sie verwenden können, um den Google Maps-Dienst abzufragen und spezifische Informationen zurückzugeben.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers geöffnet. Es gibt APIs, die standardmäßig in den Browser integriert sind. Drittanbieter-APIs sind nicht standardmäßig in den Browser integriert. Ihr Code und die Informationen müssen von einem Ort im Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir darüber gesprochen, was Client-seitige JavaScript-APIs sind und wie sie sich auf die JavaScript-Sprache beziehen. Lassen Sie uns das rekapitulieren, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools passen:

- JavaScript — Eine Hochsprache, die in Browser eingebaut ist und es Ihnen ermöglicht, Funktionalität auf Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen verfügbar ist, wie z.B. [Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction).
- Browser-APIs — Konstrukte, die im Browser eingebaut sind und auf der JavaScript-Sprache basieren, und Ihnen ermöglichen, Funktionalität einfacher zu implementieren.
- Drittanbieter-APIs — Konstrukte, die in Drittanbieterplattformen (z.B. Disqus, Facebook) eingebaut sind und Ihnen erlauben, einige der Funktionalitäten dieser Plattformen auf Ihren eigenen Webseiten zu verwenden (z.B. das Anzeigen Ihrer Disqus-Kommentare auf einer Webseite).
- JavaScript-Bibliotheken — In der Regel eine oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) enthalten, die Sie an Ihre Webseite anhängen können, um das Schreiben gemeinsamer Funktionalitäten zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt nach den Bibliotheken, JavaScript-Frameworks (z.B. Angular und Ember) neigen dazu, Pakete von HTML, CSS, JavaScript und anderen Technologien zu sein, die Sie installieren und dann verwenden können, um eine ganze Webanwendung von Grund auf neu zu schreiben. Der Hauptunterschied zwischen einer Bibliothek und einem Framework ist die „Inversion of Control“. Beim Aufrufen einer Methode aus einer Bibliothek hat der Entwickler die Kontrolle. Bei einem Framework wird die Kontrolle umgekehrt: das Framework ruft den Code des Entwicklers auf.

## Was können APIs leisten?

Es gibt eine große Anzahl an APIs in modernen Browsern, die es Ihnen ermöglichen, eine Vielzahl von Dingen in Ihrem Code zu tun. Dies können Sie sehen, indem Sie sich die [MDN APIs Index-Seite](/de/docs/Web/API) anschauen.

### Häufige Browser-APIs

Besonders häufige Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul ausführlicher behandeln werden), sind:

- **APIs zur Manipulation von Dokumenten** die in den Browser geladen werden. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren - HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden, usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite oder neuen Inhalt anzeigen sehen, ist das zum Beispiel das DOM in Aktion. Erfahren Sie mehr über diese Arten von API in [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).
- **APIs, die Daten vom Server abrufen**, um nur kleine Abschnitte einer Webseite an sich zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt - Wenn Sie nur eine Aktienliste oder eine Liste verfügbarer neuer Geschichten aktualisieren müssen, kann es durch die sofortige Aktualisierung ohne das komplette Neuladen der gesamten Seite vom Server aus die Website oder App viel reaktionsschneller und „flinker“ erscheinen lassen. Die wichtigste API, die hierfür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie werden auch auf den Begriff **AJAX** stoßen, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- **APIs zur Zeichnung und Manipulation von Grafiken** sind weit verbreitet in Browsern - die beliebtesten davon sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixeldaten in einem HTML-{{htmlelement("canvas")}}-Element programmatisch zu aktualisieren, um 2D- und 3D-Szenen zu erstellen. Zum Beispiel können Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter darauf anwenden, wie Sepia oder Graustufen mit der Canvas API, oder eine komplexe 3D-Szene mit Beleuchtung und Texturen mit WebGL erstellen. Solche APIs werden häufig mit APIs zur Erstellung von Animationsschleifen kombiniert (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen, um ständig aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen wirklich interessante Dinge mit Multimedia zu tun, wie benutzerdefinierte UI-Steuerelemente für das Abspielen von Audio und Video zu erstellen, Textspuren wie Untertitel und Bildunterschriften zusammen mit Ihren Videos anzuzeigen, Video von Ihrer Webcam zu erhalten, das über eine Leinwand bearbeitet werden kann (siehe oben) oder auf dem Computer einer anderen Person in einer Webkonferenz angezeigt wird, oder Effekte auf Audiotracks hinzuzufügen (wie Gain, Verzerrung, Panning, usw.).
- **Geräte-APIs** erlauben es Ihnen, mit Hardware des Geräts zu interagieren: zum Beispiel, auf das GPS des Geräts zuzugreifen, um die Position des Benutzers mit der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu finden.
- **Client-seitige Speicher-APIs** erlauben es Ihnen, Daten auf der Client-Seite zu speichern, so dass Sie eine App erstellen können, die ihren Zustand zwischen den Seitenladungen speichert und vielleicht sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere Optionen, z.B. einfache Name/Werte-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs gibt es in großer Vielfalt; einige der bekannteren, die Sie früher oder später wahrscheinlich nutzen werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen erlauben, alle möglichen Dinge mit Karten auf Ihren Webseiten zu tun.
- Die [Facebook API-Suite](https://developers.facebook.com/docs/), die es Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu Ihrem Vorteil in Ihrem App zu nutzen, zum Beispiel, indem Sie die Anmeldung der App mit Facebook-Login bereitstellen, In-App-Zahlungen akzeptieren, gezielte Werbekampagnen ausrollen, usw.
- Die [Telegram APIs](https://core.telegram.org/api), die es Ihnen betreffen, Inhalte aus Telegram-Kanälen auf Ihrer Webseite einzubetten, zusätzlich zur Bereitstellung von Unterstützung für Bots.
- Die [YouTube API](https://developers.google.com/youtube/), die es Ihnen erlaubt, YouTube-Videos auf Ihrer Seite einzubetten, YouTube zu durchsuchen, Playlists zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Werkzeuge zur Verwaltung von Pinterest-Boards und Pins bereitstellt, um sie in Ihre Webseite einzubinden.
- Die [Twilio API](https://www.twilio.com/docs), die eine Rahmen gibt für den Aufbau von Sprach- und Videofunktionalität in Ihre App, das Senden von SMS/MMS aus Ihren Apps, und mehr.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentierungsplattform bereitstellt, die in Ihre Seite integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des Mastodon-Social-Networks programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die das Integrieren von mehreren APIs über eine Plattform ermöglicht.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs arbeiten auf leicht unterschiedliche Weise, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen zu ihrer Funktionsweise.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs unter Verwendung eines oder mehrerer [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects), die als Container für die Daten dienen, die die APIs verwenden (enthalten in den Objekt-Eigenschaften), und die Funktionen, die die APIs verfügbar machen (enthalten in den Objekt-Methoden).

> [!NOTE]
> Wenn Sie noch nicht damit vertraut sind, wie Objekte arbeiten, sollten Sie unser Modul [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) durcharbeiten, bevor Sie fortfahren.

Kehren wir zu dem Beispiel der Web Audio API zurück — dies ist eine ziemlich komplexe API, die aus einer Reihe von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), der ein [Audio-Graphen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) repräsentiert, der verwendet werden kann, um Audio im Browser zu manipulieren und hat eine Anzahl von Methoden und Eigenschaften zur Verfügung, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), der ein {{htmlelement("audio")}}-Element darstellt, das einen Klang enthält, den Sie abspielen und im Audiokontext manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), der das Ziel des Audios repräsentiert, d.h. das Gerät auf Ihrem Computer, das es tatsächlich ausgeben wird — normalerweise Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte? Wenn Sie sich unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), werden Sie zuerst das folgende HTML sehen:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Wir fügen zunächst ein `<audio>`-Element ein, mit dem wir eine MP3 in die Seite einbetten. Wir fügen keine Standard-Browser-Steuerelemente hinzu. Als nächstes fügen wir einen {{htmlelement("button")}} hinzu, den wir verwenden werden, um die Musik abzuspielen und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ "range", mit dem wir die Lautstärke des Tracks anpassen werden, während er abgespielt wird.

Schauen wir uns als nächstes das JavaScript für dieses Beispiel an.

Wir beginnen mit der Erstellung einer `AudioContext`-Instanz, in der wir unseren Track manipulieren können:

```js
const audioCtx = new AudioContext();
```

Als nächstes erstellen wir Konstanten, die Referenzen auf unsere `<audio>`, `<button>` und `<input>`-Elemente speichern und verwenden die Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource), um einen `MediaElementAudioSourceNode` zu erstellen, der die Quelle unseres Audios repräsentiert — das `<audio>`-Element, das abgespielt werden soll:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als nächstes fügen wir ein paar Ereignishandler hinzu, die dazu dienen, zwischen Wiedergabe und Pause zu wechseln, wenn die Schaltfläche gedrückt wird, und das Display zurück zum Anfang zu setzen, wenn der Song fertig ist:

```js
// play/pause audio
playBtn.addEventListener("click", () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // if track is stopped, play it
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // if track is playing, stop it
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// if track ends
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
```

> [!NOTE]
> Einige von Ihnen bemerken vielleicht, dass die verwendeten Methoden `play()` und `pause()` nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die anders, aber eng verwandt ist.

Als nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mit der Methode [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain), das verwendet werden kann, um die Lautstärke von Audio zu justieren, das durch es durchgeht, und fügen einen weiteren Ereignishandler hinzu, der den Wert des Audiographen-Gaines (Lautstärke) ändert, wann immer der Slider-Wert geändert wird:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Der letzte Schritt, um dies zum Laufen zu bringen, ist das Verbinden der verschiedenen Knoten im Audiographen, was mit der Methode [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect) möglich ist, die auf jedem Knotentyp verfügbar ist:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio beginnt in der Quelle, die dann mit dem Gain-Knoten verbunden wird, damit die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann mit dem Zielknoten verbunden, damit der Ton auf Ihrem Computer abgespielt werden kann (die Eigenschaft [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) repräsentiert, was auch immer der Standard-[`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) auf der Hardware Ihres Computers ist, z.B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt für die API ist. Bei der Web Audio API ist das ziemlich einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jegliche Audiobearbeitung zu machen.

Die Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — ihre Funktionen neigen dazu, am [`Document`](/de/docs/Web/API/Document)-Objekt zu hängen oder auf einer Instanz eines HTML-Elements, das Sie auf irgendeine Weise beeinflussen möchten, wie zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Auch die [Canvas API](/de/docs/Web/API/Canvas_API) ist darauf angewiesen, ein Kontextobjekt zu verwenden, das in diesem Fall jedoch ein grafischer Kontext und nicht ein Audionkontxt ist. Ihr Kontextobjekt wird erstellt, indem man eine Referenz auf das {{htmlelement("canvas")}}-Element erhält, auf dem man zeichnen möchte, und dann die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufruft:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf dem Canvas machen wollen, wird dann durch Aufrufen von Eigenschaften und Methoden des Kontextobjekts erreicht (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist), zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in Aktion in unserem [Bouncing Balls Demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) sehen (sehen Sie, wie es [live läuft](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)).

### Sie verwenden oft Ereignisse, um Zustandsänderungen zu handhaben

Wir haben Ereignisse bereits früher im Kurs in unserem Artikel [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) besprochen, der im Detail beschreibt, was Client-seitige Web-Ereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie noch nicht damit vertraut sind, wie Client-seitige Web-API-Ereignisse funktionieren, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten mindestens einige. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unserem Referenzmaterial in separaten "Event-Handler" Abschnitten aufgeführt.

Wir haben bereits eine Reihe von Event-Handler in unserem Web Audio API Beispiel oben gesehen:

```js
// play/pause audio
playBtn.addEventListener("click", () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // if track is stopped, play it
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // if track is playing, stop it
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// if track ends
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
```

### Sie haben zusätzliche Sicherheitsmechanismen, wo es angebracht ist

WebAPI-Funktionen sind den gleichen Sicherheitsüberlegungen wie JavaScript und andere Webtechnologien unterworfen (zum Beispiel [Same-Origin Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)), aber manchmal verfügen sie über zusätzliche Sicherheitsmechanismen. Einige der moderneren WebAPIs funktionieren beispielsweise nur auf Seiten, die über HTTPS bereitgestellt werden, da sie potenziell sensible Daten übertragen (Beispiele sind [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Zusätzlich können einige WebAPIs die Berechtigung des Nutzers erfordern, um aktiviert zu werden, sobald sie in Ihrem Code aufgerufen werden. Ein Beispiel ist die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API), die über ein Pop-up-Fenster um Erlaubnis fragt:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogs, der von der Benachrichtigungs-API des Browsers bereitgestellt wird. Die Website 'mdn.github.io' bittet um Erlaubnis, Benachrichtigungen an den Benutzer-Agenten zu senden mit einem X, um den Dialog zu schließen und einem Dropdown-Menü mit Optionen, wobei 'Immer Benachrichtigungen empfangen' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) APIs unterliegen einem Sicherheitsmechanismus namens [Autoplay-Policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) — das bedeutet im Wesentlichen, dass Sie Audio nicht automatisch abspielen können, wenn eine Seite geladen wird — Sie müssen Ihren Benutzern erlauben, die Audiowiedergabe über ein Steuerelement wie eine Schaltfläche auszulösen. Dies geschieht, weil das automatische Starten von Audio normalerweise wirklich störend ist, und wir sollten unsere Benutzer diesem nicht aussetzen.

> [!NOTE]
> Je nachdem, wie streng der Browser ist, können solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d.h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens würde unser Web Audio API Beispiel lokal in Google Chrome nicht funktionieren — wir mussten es auf GitHub hochladen, damit es funktionierte.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code machen können. Sie sind wahrscheinlich gespannt, tatsächlich einige unterhaltsame Dinge mit spezifischen APIs zu machen, also los geht's! Als nächstes werden wir uns Video- und Audio-APIs ansehen.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
