---
title: Einführung in Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

Zuerst werden wir uns APIs aus einer höheren Perspektive anschauen — was sind sie, wie funktionieren sie, wie verwendet man sie im Code und wie sind sie strukturiert? Wir werden uns auch die verschiedenen Hauptklassen von APIs anschauen und wofür sie verwendet werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Vertrautheit mit APIs zu erlangen, was sie tun können und wie Sie sie in Ihrem Code verwenden können.
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Application Programming Interfaces (APIs) sind Konstruktionen, die in Programmiersprachen verfügbar gemacht werden, um es Entwicklern zu ermöglichen, komplexe Funktionalitäten leichter zu erstellen. Sie abstrahieren komplexeren Code von Ihnen und bieten dafür einfachere Syntax an.

Stellen Sie sich als Beispiel aus der realen Welt die Stromversorgung in Ihrem Haus oder Ihrer Wohnung vor. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose, und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen – das wäre wirklich ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind in zwei unterschiedliche Steckdosen eingelassen. Jede Mehrfachsteckdose hat einen Steckplatz oben und an der Vorderseite. In jede Mehrfachsteckdose sind zwei Stecker eingesteckt.](plug-socket.png)

_Bildquelle: [Überladene Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In gleicher Weise, wenn Sie z.B. 3D-Grafiken programmieren möchten, ist es viel einfacher, dies mit einer API zu tun, die in einer höherstufigen Sprache wie JavaScript oder Python geschrieben ist, anstatt direkt Low-Level-Code (z.B. C oder C++) zu schreiben, der die GPU oder andere Grafikfunktionen des Computers direkt steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "Glossareintrag zu API")}} für weitere Beschreibungen.

### APIs in clientseitigem JavaScript

Clientseitiges JavaScript hat besonders viele APIs zur Verfügung — diese sind nicht Teil der JavaScript-Sprache selbst, sondern sie bauen auf der Kern-JavaScript-Sprache auf und bieten Ihnen zusätzliche Superfunktionen, die Sie in Ihrem JavaScript-Code verwenden können. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten vom Browser und der umliegenden Computerumgebung bereitstellen und damit komplexe, nützliche Dinge tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser — nehmen Sie einen Audiotrack, ändern Sie seine Lautstärke, wenden Sie Effekte darauf an, etc. Im Hintergrund verwendet der Browser tatsächlich einige komplexe niedrigstufige Codes (z.B. C++ oder Rust), um die eigentliche Audiobearbeitung durchzuführen. Aber auch hier wird Ihnen diese Komplexität durch die API verborgen.
- **Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert, und Sie müssen ihren Code und Informationen in der Regel irgendwo im Web abrufen. Zum Beispiel ermöglicht die [Google Maps API](https://developers.google.com/maps/documentation/javascript), eine interaktive Karte zu Ihrem Büro auf Ihrer Website anzuzeigen. Sie bietet einen speziellen Satz von Konstrukten, die Sie verwenden können, um den Google Maps-Dienst abzufragen und spezifische Informationen zurückzugeben.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers geöffnet. Es gibt standardmäßig integrierte APIs im Browser. Drittanbieter-APIs sind standardmäßig nicht im Browser integriert. Ihr Code und ihre Informationen müssen irgendwo im Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir besprochen, was clientseitige JavaScript-APIs sind und wie sie zur JavaScript-Sprache in Beziehung stehen. Lassen Sie uns dies noch einmal zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools passen:

- JavaScript — Eine hochstufige Skriptsprache, die in Browsern integriert ist und es Ihnen ermöglicht, Funktionalität auf Webseiten oder in Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen verfügbar ist, wie z.B. [Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction).
- Browser-APIs — Konstrukte, die in den Browser integriert sind und auf der JavaScript-Sprache aufbauen, um Funktionalität einfacher zu implementieren.
- Drittanbieter-APIs — Konstrukte, die in Drittanbieter-Plattformen (z.B. Disqus, Facebook) integriert sind und es ermöglichen, bestimmte Funktionen dieser Plattformen auf eigenen Webseiten zu nutzen (zum Beispiel Disqus-Kommentare auf einer Webseite anzuzeigen).
- JavaScript-Bibliotheken — In der Regel eine oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions) enthalten, die Sie an Ihre Webseite anhängen können, um das Schreiben häufig vorkommender Funktionalitäten zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt über Bibliotheken hinaus, JavaScript-Frameworks (z.B. Angular und Ember) tendieren dazu, Pakete von HTML, CSS, JavaScript und anderen Technologien zu sein, die Sie installieren und dann verwenden, um eine vollständige Webanwendung von Grund auf neu zu schreiben. Der Hauptunterschied zwischen einer Bibliothek und einem Framework ist die „Inversion of Control“. Wenn Sie eine Methode aus einer Bibliothek aufrufen, haben Sie die Kontrolle. Bei einem Framework wird die Kontrolle umgekehrt: das Framework ruft Ihren Code auf.

## Was können APIs tun?

Es gibt eine Vielzahl von APIs in modernen Browsern, die es Ihnen ermöglichen, viele unterschiedliche Dinge in Ihrem Code zu tun. Sie können dies sehen, wenn Sie einen Blick auf die [MDN APIs Index-Seite](/de/docs/Web/API) werfen.

### Häufige Browser-APIs

Insbesondere die am häufigsten verwendeten Kategorien von Browser-APIs (die wir in diesem Modul ausführlicher behandeln werden) sind:

- **APIs zur Manipulation von Dokumenten**, die im Browser geladen sind. Das offensichtlichste Beispiel ist das [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), das es Ihnen ermöglicht, HTML und CSS zu manipulieren – HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neuer Inhalt angezeigt wird, ist das zum Beispiel das DOM in Aktion. Erfahren Sie mehr über diese Art von APIs in [Manipulating documents](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite eigenständig zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat große Auswirkungen auf die Leistung und das Verhalten von Sites – wenn Sie nur eine Aktienliste oder eine Liste verfügbarer neuer Geschichten aktualisieren müssen, kann es das Gefühl der Seite oder App viel reaktionsschneller und „schneller“ machen, wenn dies sofort geschehen kann, ohne die gesamte Seite vom Server neu laden zu müssen. Das Haupt-API, das dafür verwendet wird, ist das [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise immer noch das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie könnten auch auf den Begriff **AJAX** stoßen, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Fetching data from the server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- **APIs zum Zeichnen und Manipulieren von Grafiken** werden in Browsern weit unterstützt – die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixeldaten, die in einem HTML-{{htmlelement("canvas")}}-Element enthalten sind, programmatisch zu aktualisieren, um 2D- und 3D-Szenen zu erstellen. Zum Beispiel könnten Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter wie Sepia oder Graustufen darauf anwenden, indem Sie das Canvas API verwenden oder eine komplexe 3D-Szene mit Beleuchtung und Texturen mit WebGL erstellen. Solche APIs werden oft mit APIs zur Erstellung von Animationsschleifen (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen kombiniert, um ständig aktualisierte Szenen wie Cartoons und Spiele zu schaffen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen wirklich interessante Dinge mit Multimedia zu tun, wie z.B. benutzerdefinierte Benutzeroberflächen-Steuerelemente für die Wiedergabe von Audio und Video zu erstellen, Textspuren wie Untertitel und Untertitel zusammen mit Ihren Videos anzuzeigen, Video von Ihrer Webcam zu erfassen, um es über ein Canvas zu manipulieren (siehe oben) oder es auf einem anderen Computer in einer Webkonferenz anzuzeigen, oder Effekte auf Audiotracks hinzuzufügen (wie Verstärkung, Verzerrung, Lautstärkenverschiebung usw.).
- **Geräte-APIs** ermöglichen Ihnen, mit Hardware-Geräten zu interagieren: z.B. Zugriff auf das GPS des Geräts, um die Position des Benutzers mit der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu ermitteln.
- **Client-seitige Speicher-APIs** ermöglichen Ihnen, Daten auf der Client-Seite zu speichern, sodass Sie eine App erstellen können, die ihren Zustand zwischen Seitenladevorgängen speichert und vielleicht sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere verfügbare Optionen, z.B. einfache Name/Wert-Speicherung mit dem [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexer Datenbankspeicherung mit dem [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs kommen in einer großen Vielfalt; einige der populäreren, die Sie früher oder später wahrscheinlich verwenden werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen erlauben, alle möglichen Dinge mit Karten auf Ihren Webseiten zu tun.
- Die [Facebook-Suite von APIs](https://developers.facebook.com/docs/), die es Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu verbessern, z.B. durch die Bereitstellung von App-Logins über Facebook-Logins, die Annahme von In-App-Zahlungen, die Durchführung gezielter Werbekampagnen usw.
- Die [Telegram-APIs](https://core.telegram.org/api), die es Ihnen ermöglichen, Inhalte aus Telegram-Kanälen auf Ihrer Website einzubetten, zusätzlich zur Unterstützung von Bots.
- Die [YouTube-API](https://developers.google.com/youtube/), die es Ihnen ermöglicht, YouTube-Videos auf Ihrer Seite einzubetten, YouTube zu durchsuchen, Playlisten zu erstellen und mehr.
- Die [Pinterest-API](https://developers.pinterest.com/), die Tools zum Verwalten von Pinterest-Boards und Pins bereitstellt, um sie auf Ihrer Website einzuschließen.
- Die [Twilio-API](https://www.twilio.com/docs), die einen Rahmen für den Aufbau von Sprach- und Videoanruffunktionen in Ihrer App, das Senden von SMS/MMS von Ihren Apps und mehr bietet.
- Die [Disqus-API](https://disqus.com/api/docs/), die eine Kommentierungsplattform bereitstellt, die in Ihre Seite integriert werden kann.
- Die [Mastodon-API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des Mastodon-Social-Networks programmatisch zu manipulieren.
- Die [IFTTT-API](https://ifttt.com/developers), die es ermöglicht, mehrere APIs über eine Plattform zu integrieren.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs funktionieren auf leicht unterschiedliche Weise, aber im Allgemeinen haben sie gemeinsame Funktionen und ähnliche Themen, wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs unter Verwendung eines oder mehrerer [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects), die als Container für die vom API verwendeten Daten (enthalten in Objekteigenschaften) und die vom API bereitgestellte Funktionalität (enthalten in Objektmethoden) dienen.

> [!NOTE]
> Falls Sie nicht bereits vertraut sind, wie Objekte funktionieren, sollten Sie zurückgehen und unser Modul [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects) durcharbeiten, bevor Sie fortfahren.

Kommen wir zurück zum Beispiel der Web Audio API — dies ist eine ziemlich komplexe API, die aus einer Reihe von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), das ein [Audio-Graph](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) darstellt, der verwendet werden kann, um Audio zu manipulieren, das innerhalb des Browsers abgespielt wird, und eine Reihe von Methoden und Eigenschaften bietet, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element darstellt, das den Ton enthält, den Sie innerhalb des Audio-Kontextes abspielen und manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios darstellt, d.h. das Gerät auf Ihrem Computer, das es tatsächlich ausgeben wird – normalerweise Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte? Wenn Sie sich unser [einfaches Webaudio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([sehen Sie es auch live an](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), sehen Sie zuerst folgendes HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Wir fügen zunächst ein `<audio>`-Element ein, mit dem wir ein MP3 auf der Seite einbetten. Wir fügen keine Standard-Browser-Steuerelemente ein. Als nächstes fügen wir einen {{htmlelement("button")}} ein, den wir verwenden werden, um die Musik abzuspielen und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ Range, das wir verwenden werden, um die Lautstärke des Tracks während der Wiedergabe anzupassen.

Schauen wir uns als nächstes das JavaScript für dieses Beispiel an.

Wir beginnen mit der Erstellung einer `AudioContext`-Instanz, innerhalb derer wir unseren Track manipulieren:

```js
const audioCtx = new AudioContext();
```

Als nächstes erstellen wir Konstanten, die Referenzen auf unsere `<audio>`, `<button>` und `<input>`-Elemente speichern, und verwenden die Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource), um ein `MediaElementAudioSourceNode` zu erstellen, das die Quelle unseres Audios darstellt – das `<audio>`-Element, von dem abgespielt wird:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als Nächstes fügen wir ein paar Ereignishandler ein, die dazu dienen, zwischen Abspielen und Pausieren zu wechseln, wenn der Knopf gedrückt wird, und die Anzeige zurückzusetzen, wenn das Lied zu Ende gespielt wurde:

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
> Einige von Ihnen bemerken möglicherweise, dass die Methoden `play()` und `pause()`, die verwendet werden, um den Track abzuspielen und zu pausieren, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die unterschiedlich, aber eng verwandt ist.

Als Nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mithilfe der Methode [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain), das verwendet werden kann, um die Lautstärke von Audio, das durch sie geführt wird, anzupassen, und erstellen einen weiteren Ereignishandler, der den Wert der Lautstärke (Gain) des Audio-Graphs ändert, wann immer sich der Wert des Schiebereglers ändert:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das letzte, was zu tun ist, damit das funktioniert, ist, die verschiedenen Knoten im Audio-Graphen zu verbinden, was mit der Methode [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect) gemacht wird, die auf jedem Knotentyp verfügbar ist:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio beginnt in der Quelle, die dann mit dem Gain-Knoten verbunden wird, damit die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann mit dem Zielknoten verbunden, sodass der Ton auf Ihrem Computer abgespielt werden kann (die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft stellt das dar, was auch immer der standardmäßige [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) auf der Hardware Ihres Computers verfügbar ist, z.B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Bei der Verwendung einer API sollten Sie sichergehen, dass Sie wissen, wo der Einstiegspunkt für die API ist. Bei der Web Audio API ist dies ziemlich einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jegliche Audiomanipulation durchzuführen.

Das Document Object Model (DOM) API hat auch einen einfachen Einstiegspunkt — seine Funktionen tendieren dazu, sich am [`Document`](/de/docs/Web/API/Document)-Objekt oder einer Instanz eines HTML-Elements zu befinden, das Sie auf irgendeine Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Das [Canvas API](/de/docs/Web/API/Canvas_API) erfordert auch, ein Kontextobjekt zu erhalten, um Dinge zu manipulieren, obwohl in diesem Fall ein grafischer Kontext gemeint ist, nicht ein Audio-Kontext. Sein Kontextobjekt wird durch das Abrufen einer Referenz zum {{htmlelement("canvas")}}-Element, das Sie zeichnen möchten, und dann durch den Aufruf seiner Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf dem Canvas tun möchten, wird dann durch den Aufruf von Eigenschaften und Methoden des Kontextobjekts (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist) erreicht, zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in unserer [Demo zur springenden Bälle](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (sehen Sie es auch [live in Aktion](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)) sehen.

### Sie verwenden oft Ereignisse um Änderungen im Zustand zu handhaben

Wir haben bereits zuvor in diesem Kurs Ereignisse behandelt in unserem [Einführung zu Ereignissen](/de/docs/Learn/JavaScript/Building_blocks/Events)-Artikel, der im Detail betrachtet, was client-seitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie mit der Funktionsweise von client-seitigen Web-API-Ereignissen noch nicht vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten zumindest einige. Die Eigenschaftena, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unseren Referenzmaterialien in separaten „Event-Handler“-Sektionen aufgelistet.

Wir haben bereits eine Reihe von Ereignishandlern in unserem Web Audio API-Beispiel oben gesehen:

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

WebAPI-Funktionen unterliegen den gleichen Sicherheitsüberlegungen wie JavaScript und andere Webtechnologien (zum Beispiel [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), jedoch haben sie manchmal zusätzliche Sicherheitsmechanismen. Beispielsweise funktionieren einige der moderneren WebAPIs nur auf Seiten, die über HTTPS bereitgestellt werden, da sie potenziell sensible Daten übertragen (Beispiele schließen [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API) ein).

Zusätzlich fragen einige WebAPIs die Benutzerlaubnis, um aktiviert zu werden, sobald Aufrufe an sie in Ihrem Code gemacht werden. Ein Beispiel ist die [Notifications API](/de/docs/Web/API/Notifications_API), die um Erlaubnis über ein Popup-Dialogfeld bittet:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogs, der von der Notifications API des Browsers bereitgestellt wird. Die 'mdn.github.io'-Website fragt nach Erlaubnis, Benachrichtigungen an den Benutzer-Agent zu senden, mit einem X, um das Dialogfeld zu schließen und einem Dropdown-Menü mit den Optionen, wobei 'immer Benachrichtigungen erhalten' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) APIs unterliegen einem Sicherheitsmechanismus namens [Autoplay-Policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) — das bedeutet im Wesentlichen, dass Sie Audio nicht automatisch abspielen können, wenn eine Seite geladen wird — Sie müssen Ihren Benutzern ermöglichen, die Audiowiedergabe über eine Steuerung wie einen Knopf zu initiieren. Dies wird getan, weil das automatische Abspielen von Audio normalerweise wirklich störend ist und wir unsere Benutzer dem nicht aussetzen sollten.

> [!NOTE]
> Abhängig davon, wie streng der Browser ist, könnten solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d.h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens funktionierte unser Web Audio API-Beispiel lokal nicht auf Google Chrome — wir mussten es auf GitHub hochladen, bevor es funktionierte.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich darauf gespannt, tatsächlich einige lustige Dinge mit spezifischen APIs zu machen, also los geht's! Als nächstes werden wir uns mit der Manipulation von Dokumenten mit dem Document Object Model (DOM) befassen.

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}
