---
title: Einführung in Web-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Zuerst betrachten wir APIs aus einer übergeordneten Perspektive — was sind sie, wie funktionieren sie, wie verwenden Sie sie in Ihrem Code und wie sind sie strukturiert? Wir werfen auch einen Blick darauf, welche verschiedenen Hauptklassen von APIs existieren und welche Verwendungsmöglichkeiten sie bieten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und Abdeckung von Kern-APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Web-APIs sind und was Sie damit tun können.</li>
          <li>Wie APIs verwendet werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Application Programming Interfaces (APIs) sind Konstrukte, die in Programmiersprachen verfügbar gemacht werden, um Entwicklern die Erstellung komplexer Funktionalitäten zu erleichtern. Sie abstrahieren komplexeren Code von Ihnen und bieten eine einfachere Syntax als Ersatz.

Ein Beispiel aus der realen Welt ist die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder einem anderen Wohnort. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose, und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen — das wäre wirklich ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind in zwei verschiedenen Steckdosensteckplätzen eingesteckt. Jede Mehrfachsteckdose hat einen Steckplatz an ihrer Oberseite und an ihrer Vorderseite. Zwei Stecker sind in jede Mehrfachsteckdose eingesteckt.](plug-socket.png)

_Bildquelle: [Überladene Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In gleicher Weise, wenn Sie beispielsweise einige 3D-Grafiken programmieren möchten, ist es viel einfacher, dies mit einer API zu tun, die in einer höherstufigen Sprache wie JavaScript oder Python geschrieben ist, anstatt direkt in einer niedrigstufigen Sprache (z. B. C oder C++), die die GPU oder andere Grafikfunktionen des Computers direkt steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "API-Glossar-Eintrag")}} für eine weitere Beschreibung.

### APIs in Client-seitigem JavaScript

Client-seitiges JavaScript hat insbesondere viele APIs zur Verfügung — diese sind nicht Teil der JavaScript-Sprache selbst, sondern bauen auf der Kern-JavaScript-Sprache auf und bieten Ihnen zusätzliche Superkräfte zur Verwendung in Ihrem JavaScript-Code. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten aus dem Browser und der Umgebung des Computers abrufen und damit nützliche, komplexe Aufgaben ausführen. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser — zum Beispiel einer Audiospur, Änderung ihrer Lautstärke, Anwendung von Effekten usw. Im Hintergrund verwendet der Browser tatsächlich einige komplexe, niedrigstufige Codes (z. B. C++ oder Rust), um die eigentliche Audiobearbeitung auszuführen. Aber auch diese Komplexität wird von Ihnen über die API abstrahiert.
- **Drittanbieter-APIs** sind standardmäßig nicht im Browser eingebaut und Sie müssen deren Code und Informationen in der Regel irgendwo im Web abrufen. Zum Beispiel ermöglicht die [Google Maps API](https://developers.google.com/maps/documentation/javascript) Ihnen Dinge wie das Anzeigen einer interaktiven Karte zu Ihrem Büro auf Ihrer Website. Sie bietet ein spezielles Set von Konstrukten, die Sie verwenden können, um den Google Maps-Dienst abzufragen und spezifische Informationen zurückzugeben.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers geöffnet. Es gibt APIs, die standardmäßig in den Browser integriert sind. Drittanbieter-APIs sind standardmäßig nicht in den Browser integriert. Um diese zu nutzen, muss deren Code und Information aus dem Web abgerufen werden.](browser.png)

### Die Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Wie bereits oben erwähnt, haben wir über Client-seitige JavaScript-APIs und ihre Beziehung zur JavaScript-Sprache gesprochen. Lassen Sie uns dies noch einmal wiederholen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools hineinpassen:

- JavaScript — Eine hochstufige Skriptsprache, die in Browser integriert ist und es ermöglicht, Funktionalität in Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen verfügbar ist, wie z.B. [Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction).
- Browser-APIs — Konstrukte, die im Browser integriert sind und auf der JavaScript-Sprache aufbauen, um die Implementierung von Funktionalitäten zu erleichtern.
- Drittanbieter-APIs — Konstrukte, die in Drittanbieter-Plattformen (z. B. Disqus, Facebook) integriert sind und es Ihnen ermöglichen, einige der Funktionen dieser Plattformen in Ihre eigenen Webseiten zu verwenden (z. B. das Anzeigen Ihrer Disqus-Kommentare auf einer Webseite).
- JavaScript-Bibliotheken — In der Regel eine oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) enthalten, die Sie an Ihre Webseite anhängen können, um das Schreiben häufiger Funktionalitäten zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt über Bibliotheken hinaus: JavaScript-Frameworks (z.B. Angular und Ember) sind in der Regel Pakete aus HTML, CSS, JavaScript und anderen Technologien, die Sie installieren und dann verwenden, um eine vollständige Webanwendung von Grund auf zu schreiben. Der Hauptunterschied zwischen einer Bibliothek und einem Framework ist die "Inversion of Control". Bei einem Methodenaufruf aus einer Bibliothek hat der Entwickler die Kontrolle. Bei einem Framework sind die Kontrolle "umgedreht": das Framework ruft den Code des Entwicklers auf.

## Was können APIs tun?

Es gibt eine große Anzahl von APIs in modernen Browsern, die es Ihnen ermöglichen, eine Vielzahl von Dingen in Ihrem Code zu tun. Sie können dies sehen, indem Sie einen Blick auf die [MDN APIs-Indexseite](/de/docs/Web/API) werfen.

### Häufige Browser-APIs

Insbesondere die häufigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul detaillierter behandeln werden), sind:

- **APIs zur Manipulation von Dokumenten**, die in den Browser geladen werden. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren — Erstellen, Entfernen und Ändern von HTML, dynamisches Anwenden neuer Styles auf Ihre Seite usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen, das angezeigt wird oder neuer Inhalt angezeigt wird, ist das zum Beispiel das DOM in Aktion. Erfahren Sie mehr über diese Art von API in der [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite selbst zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Seiten — wenn Sie nur ein Aktienlisting oder eine Liste verfügbarer neuer Geschichten aktualisieren müssen, kann das sofortige Aktualisieren, ohne die gesamte Seite vom Server neu zu laden, die Seite oder App reaktionsschneller und "schnell" wirken lassen. Die Haupt-API, die dafür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API verwendet. Dabei können Sie auch auf den Begriff **AJAX** stoßen, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Netzwerkanfragen mit JavaScript erstellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- **APIs zum Zeichnen und Manipulieren von Grafiken** werden in Browsern weithin unterstützt — die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixel-Daten, die ein HTML-{{htmlelement("canvas")}}-Element enthalten kann, zu programmatisch zu aktualisieren, um 2D- und 3D-Szenen zu erstellen. Beispielsweise können Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter wie Sepia oder Graustufen mit der Canvas-API anwenden oder mit WebGL eine komplexe 3D-Szene mit Beleuchtung und Texturen erstellen. Solche APIs werden oft mit APIs zur Erstellung von Animationsschleifen (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen kombiniert, um ständig aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie benutzerdefinierte Bedienungselemente zum Abspielen von Audio und Video zu erstellen, Textspuren wie Untertitel und Untertitel mit Ihren Videos anzuzeigen, Video von Ihrer Webcam zu erfassen, das über eine Leinwand manipuliert oder auf dem Computer eines anderen im Rahmen einer Webkonferenz angezeigt werden kann, oder Effekte auf Audiotracks hinzuzufügen (wie Gain, Verzerrung, Panorama usw.).
- **Geräte-APIs** ermöglichen es Ihnen, mit der Gerätehardware zu interagieren: Zum Beispiel auf das GPS des Geräts zuzugreifen, um die Position des Benutzers mit der [Geolocation-API](/de/docs/Web/API/Geolocation_API) zu finden.
- **Client-seitige Speicher-APIs** ermöglichen Ihnen die Speicherung von Daten auf der Client-Seite, sodass Sie eine App erstellen können, die ihren Zustand zwischen Seitenladevorgängen speichert und vielleicht sogar arbeitet, wenn das Gerät offline ist. Es gibt mehrere verfügbare Optionen, zum Beispiel die einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und die komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs kommen in einer großen Vielfalt; einige der populäreren, die Sie früher oder später wahrscheinlich verwenden werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die Ihnen ermöglichen, allerlei Dinge mit Karten auf Ihren Webseiten zu machen.
- Die [Facebook-Suite von APIs](https://developers.facebook.com/docs/), die Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu bereichern, z. B. durch Anbieten einer App-Anmeldung mit Facebook-Login, das Akzeptieren von In-App-Zahlungen, das Ausrollen zielgerichteter Werbekampagnen usw.
- Die [Telegram-APIs](https://core.telegram.org/api), die Ihnen ermöglichen, Inhalte aus Telegram-Kanälen in Ihre Website einzubinden und zudem Unterstützung für Bots bieten.
- Die [YouTube API](https://developers.google.com/youtube/), die Ihnen ermöglicht, YouTube-Videos auf Ihrer Seite einzubetten, YouTube zu durchsuchen, Playlists zu erstellen und vieles mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Werkzeuge bereitstellt, um Pinterest-Boards und -Pins zu verwalten, um sie in Ihrer Website zu integrieren.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework für den Aufbau von Sprach- und Videoanruffunktionalitäten in Ihre App bietet, das Senden von SMS/MMS von Ihren Apps ermöglicht und mehr.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentierung Plattform bietet, die in Ihre Seite integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des sozialen Netzwerks Mastodon programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die die Integration mehrerer APIs über eine Plattform ermöglicht.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs arbeiten leicht unterschiedlich, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen, wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs durch die Verwendung eines oder mehrerer [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects), die als Container für die Daten dienen, die die API verwendet (enthalten in Objekt-Eigenschaften), und die Funktionalität, die die API bereitstellt (enthalten in Objekt-Methoden).

> [!NOTE]
> Wenn Sie mit der Funktionsweise von Objekten noch nicht vertraut sind, sollten Sie das Modul zu [JavaScript-Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) durcharbeiten, bevor Sie weitermachen.

Kehren wir zum Beispiel der Web Audio API zurück — dies ist eine ziemlich komplexe API, die aus einer Reihe von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), welches ein [Audiograph](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) darstellt, das verwendet werden kann, um Audio, das im Browser abgespielt wird, zu manipulieren. Es gibt eine Reihe von Methoden und Eigenschaften, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element darstellt, das den Ton enthält, den Sie im Audio-Kontext abspielen und manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios darstellt, d. h. das Gerät auf Ihrem Computer, das es tatsächlich ausgibt — in der Regel Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte? Wenn Sie sich unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), sehen Sie zuerst das folgende HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Zuerst binden wir ein `<audio>`-Element ein, mit welchem wir eine MP3 in die Seite einbetten. Wir binden keine Standard-Browser-Steuerungen ein. Danach fügen wir ein {{htmlelement("button")}} ein, das wir verwenden, um die Musik abzuspielen und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ range, das wir verwenden, um die Lautstärke des Tracks anzupassen, während er abgespielt wird.

Schauen wir uns als nächstes das JavaScript für dieses Beispiel an.

Wir beginnen mit der Erstellung einer `AudioContext`-Instanz, in der wir unseren Track manipulieren:

```js
const audioCtx = new AudioContext();
```

Als Nächstes erstellen wir Konstanten, die Referenzen auf unsere `<audio>`, `<button>`, und `<input>`-Elemente speichern, und verwenden die Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource), um einen `MediaElementAudioSourceNode` zu erstellen, der die Quelle unseres Audios darstellt — das `<audio>`-Element wird abgespielt:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als Nächstes fügen wir ein paar Ereignis-Handler hinzu, die beim Drücken des Knopfes zwischen Abspielen und Pause umschalten und die Anzeige zurück an den Anfang setzen, wenn das Lied zu Ende ist:

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
> Einige von Ihnen bemerken vielleicht, dass die `play()`- und `pause()`-Methoden, die verwendet werden, um den Track abzuspielen und anzuhalten, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API, welche unterschiedlich, aber nah verwandt ist.

Danach erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mit der Methode [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain), die verwendet werden kann, um die Lautstärke von Audio, das durch es geleitet wird, anzupassen. Außerdem erstellen wir einen weiteren Ereignis-Handler, der den Wert des Gain (Lautstärke) des Audiographen ändert, wann immer der Slider-Wert geändert wird:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Der letzte Schritt, um dies zum Laufen zu bringen, besteht darin, die verschiedenen Knoten im Audiographen zu verbinden, was mit der Methode [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect) möglich ist, die für jeden Knotentyp verfügbar ist:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio startet in der Quelle, die dann mit dem Gain-Knoten verbunden wird, sodass die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann mit dem Zielknoten verbunden, sodass der Ton auf Ihrem Computer abgespielt werden kann (die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft repräsentiert, was auch immer der standardmäßige [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) auf der Hardware Ihres Computers ist, z. B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt für die API liegt. Bei der Web Audio API ist dies ziemlich einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jede Audiobearbeitung auszuführen.

Die Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — ihre Funktionen hängen in der Regel am [`Document`](/de/docs/Web/API/Document)-Objekt oder einer Instanz eines HTML-Elements, das Sie in irgendeiner Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) setzt ebenfalls darauf, dass Sie ein Kontextobjekt erhalten, welches Sie verwenden können, um Dinge zu manipulieren, obwohl es in diesem Fall ein grafischer Kontext anstelle eines Audiokontextes ist. Sein Kontextobjekt wird erstellt, indem Sie eine Referenz auf das {{htmlelement("canvas")}}-Element erhalten, auf welchem Sie zeichnen möchten, und dann die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufrufen:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf der Leinwand tun möchten, wird dann durch Aufrufen von Eigenschaften und Methoden des Kontextobjekts (welches eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist) erreicht, zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in unserem [bouncing balls demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) in Aktion sehen (sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)).

### Sie verwenden oft Ereignisse, um Zustandsänderungen zu behandeln

Wir haben bereits früher im Kurs über Ereignisse in unserem [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)-Artikel gesprochen, der im Detail behandelt, was clientseitige Web-Ereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie nicht bereits mit der Funktionsweise von clientseitigen Web-API-Ereignissen vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie weitermachen.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten zumindest ein paar. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unseren Referenzmaterialien in separaten "Ereignis-Handler"-Abschnitten aufgeführt.

Wir haben bereits eine Anzahl von Ereignis-Handlern in unserem Web Audio API-Beispiel oben gesehen:

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

WebAPI-Funktionen unterliegen denselben Sicherheitsüberlegungen wie JavaScript und andere Webtechnologien (zum Beispiel [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), aber manchmal haben sie zusätzliche Sicherheitsmechanismen. Einige der moderneren WebAPIs funktionieren nur auf Seiten, die über HTTPS ausgeliefert werden, da sie potenziell sensible Daten übertragen (z. B. [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus fordern einige WebAPIs die Erlaubnis des Benutzers an, aktiviert zu werden, sobald Aufrufe an sie in Ihrem Code gemacht werden. Ein Beispiel hierfür ist die [Notifications API](/de/docs/Web/API/Notifications_API), die um Erlaubnis mittels eines Pop-up-Dialogfelds bittet:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogs, der von der Notifications API des Browsers bereitgestellt wird. 'mdn.github.io' Website fragt nach Berechtigungen, um Benachrichtigungen an den Benutzer-Agent zu senden, mit einem X, um den Dialog zu schließen, und einem Dropdown-Menü mit Optionen, wobei 'immer Benachrichtigungen erhalten' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-APIs unterliegen einem Sicherheitsmechanismus, der als [Autoplay-Policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) bezeichnet wird — dies bedeutet im Wesentlichen, dass Sie Audio nicht automatisch wiedergeben können, wenn eine Seite geladen wird — Ihre Benutzer müssen das Audio über eine Steuerung wie einen Knopf initiieren. Dies wird getan, da das automatische Abspielen von Audio normalerweise wirklich ärgerlich ist und wir unsere Benutzer dem wirklich nicht aussetzen sollten.

> [!NOTE]
> Abhängig davon, wie streng der Browser ist, können solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d. h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver aus auszuführen. Zum Zeitpunkt des Schreibens funktionierte unser Web Audio API-Beispiel nicht lokal in Google Chrome — wir mussten es auf GitHub hochladen, bevor es funktionierte.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich begeistert, tatsächlich einige lustige Dinge mit speziellen APIs zu tun, also los geht's! Als nächstes schauen wir uns Video- und Audio-APIs an.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
