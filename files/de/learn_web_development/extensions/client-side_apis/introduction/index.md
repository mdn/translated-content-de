---
title: Einführung in Web-APIs
short-title: Introduction
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Zuerst betrachten wir APIs aus einer hohen Perspektive – was sind sie, wie funktionieren sie, wie verwendet man sie im Code und wie sind sie strukturiert? Wir werfen auch einen Blick auf die verschiedenen Hauptklassen von APIs und deren Verwendungsmöglichkeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen der JavaScript-Objekte</a> und Grundkenntnisse über APIs, wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was Web-APIs sind und was Sie damit machen können.</li>
          <li>Wie APIs verwendet werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Application Programming Interfaces (APIs) sind Konstrukte, die in Programmiersprachen zur Verfügung gestellt werden, um es Entwicklern zu ermöglichen, komplexe Funktionalitäten leichter zu erstellen. Sie verbergen komplexeren Code und stellen eine einfachere Syntax zur Nutzung bereit.

Als reales Beispiel denken Sie an die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder anderen Behausungen. Wenn Sie ein Gerät verwenden möchten, stecken Sie es in eine Steckdose und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen – das wäre ineffizient und, wenn Sie kein Elektriker sind, schwer und gefährlich durchzuführen.

![Zwei Mehrfachstecker sind in zwei verschiedene Steckdosen gesteckt. Jeder Mehrfachstecker hat einen Steckplatz auf seiner Oberseite und auf seiner Vorderseite. In jeden Mehrfachstecker sind zwei Stecker eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In ähnlicher Weise, wenn Sie z. B. 3D-Grafiken programmieren möchten, wäre es viel einfacher, dies mit einer API zu tun, die in einer höheren Programmiersprache wie JavaScript oder Python geschrieben ist, anstatt direkt Low-Level-Code (z. B. in C oder C++) zu schreiben, der direkt die GPU oder andere Grafikfunktionen des Computers steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "API-Glossareintrag")}} für weitere Beschreibungen.

### APIs in clientseitigem JavaScript

Insbesondere clientseitiges JavaScript hat viele APIs zur Verfügung – diese sind nicht Teil der JavaScript-Sprache selbst. Sie sind vielmehr auf der Kern-JavaScript-Sprache aufgebaut und bieten zusätzliche Superkräfte, die in Ihrem JavaScript-Code verwendet werden können. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus dem Browser und der umliegenden Computerumgebung bereitstellen und komplexe Dinge damit tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zum Manipulieren von Audio im Browser – eine Audiospur kann genommen, deren Lautstärke geändert, Effekte darauf angewendet werden usw. Im Hintergrund benutzt der Browser tatsächlich komplexen Low-Level-Code (z. B. C++ oder Rust), um die eigentliche Audiobearbeitung durchzuführen. Aber wieder wird diese Komplexität durch die API von Ihnen abstrahiert.
- **Drittanbieter-APIs** sind nicht standardmäßig im Browser eingebaut, und Sie müssen ihren Code und Informationen normalerweise von einer Stelle im Web abrufen. Zum Beispiel ermöglicht die [Google Maps API](https://developers.google.com/maps/documentation/javascript) Ihnen, eine interaktive Karte zu Ihrem Büro auf Ihrer Webseite anzuzeigen. Sie bietet eine spezielle Reihe von Konstrukten, die Sie verwenden können, um den Google Maps-Dienst abzufragen und spezifische Informationen zurückzugeben.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers geöffnet. Es gibt APIs, die standardmäßig im Browser eingebaut sind. Drittanbieter-APIs sind nicht standardmäßig im Browser eingebaut. Ihr Code und ihre Informationen müssen von einer Stelle im Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir darüber gesprochen, was clientseitige JavaScript-APIs sind und wie sie sich zur JavaScript-Sprache verhalten. Lassen Sie uns dies noch einmal zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools in das Bild passen:

- JavaScript – Eine in Browser integrierte höhere Skriptsprache, die es Ihnen ermöglicht, Funktionalität auf Webseiten oder Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen verfügbar ist, wie z. B. [Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction).
- Browser-APIs – Konstrukte, die in den Browser integriert sind und auf der JavaScript-Sprache aufbauen, um Funktionalität leichter zu implementieren.
- Drittanbieter-APIs – Konstrukte, die in Drittanbieter-Plattformen (z. B. Disqus, Facebook) integriert sind und es Ihnen erlauben, einige der Funktionalitäten dieser Plattformen in Ihren eigenen Webseiten zu verwenden (z. B. das Anzeigen Ihrer Disqus-Kommentare auf einer Webseite).
- JavaScript-Bibliotheken – Üblicherweise eine oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) enthalten, die Sie an Ihre Webseite anhängen können, um das Schreiben von Standardfunktionen zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks – Der nächste Schritt über Bibliotheken. JavaScript-Frameworks (z. B. Angular und Ember) neigen dazu, Pakete aus HTML, CSS, JavaScript und anderen Technologien zu sein, die Sie installieren und dann verwenden, um eine komplette Webanwendung von Grund auf neu zu erstellen. Der Hauptunterschied zwischen einer Bibliothek und einem Framework ist die "Umkehrung der Kontrolle". Beim Aufrufen einer Methode aus einer Bibliothek hat der Entwickler die Kontrolle. Bei einem Framework wird die Kontrolle umgekehrt: Das Framework ruft den Code des Entwicklers auf.

## Was können APIs tun?

Es gibt eine große Anzahl von APIs in modernen Browsern, die es Ihnen erlauben, eine Vielzahl von Dingen in Ihrem Code zu tun. Sie können dies sehen, wenn Sie sich die [MDN APIs Indexseite](/de/docs/Web/API) ansehen.

### Häufige Browser-APIs

Insbesondere die häufigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul ausführlicher behandeln werden), sind:

- **APIs zum Manipulieren von Dokumenten**, die im Browser geladen sind. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die Ihnen ermöglicht, HTML und CSS zu manipulieren – HTML zu erstellen, zu entfernen und zu ändern, neue Styles auf Ihrer Seite dynamisch anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neuer Inhalt angezeigt wird, beispielsweise, dann ist das das DOM in Aktion. Erfahren Sie mehr über diese Arten von APIs in der [Einführung zum DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).
- **APIs, die Daten vom Server abrufen**, um kleine Teile einer Webseite eigenständig zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Webseiten – wenn Sie nur eine Börsenliste oder eine Liste verfügbarer neuer Geschichten aktualisieren müssen, dies sofort zu tun, ohne die gesamte Seite vom Server neu zu laden, kann die Webseite oder App viel reaktionsschneller und "schneller" machen. Die Haupt-API, die dazu verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie könnten auch auf den Begriff **AJAX** stoßen, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- **APIs zum Zeichnen und Manipulieren von Grafiken** sind in Browsern weit verbreitet – die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixel-Daten, die in einem HTML {{htmlelement("canvas")}}-Element enthalten sind, programmatisch zu aktualisieren, um 2D- und 3D-Szenen zu erstellen. Beispielsweise können Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter darauf anwenden, wie z. B. Sepia oder Graustufen, mit der Canvas-API, oder eine komplexe 3D-Szene mit Beleuchtung und Texturen mit WebGL erstellen. Solche APIs werden oft mit APIs zum Erstellen von Animationsschleifen (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen kombiniert, um ständig aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen es, wirklich interessante Dinge mit Multimedia zu tun, wie z. B. benutzerdefinierte UI-Steuerelemente zum Abspielen von Audio und Video zu erstellen, Textspuren wie Untertitel und Untertitel zusammen mit Ihren Videos anzuzeigen, Video von Ihrer Webcam zu erfassen, um es über ein Canvas zu manipulieren (siehe oben) oder auf dem Computer einer anderen Person in einer Webkonferenz anzuzeigen oder Effekte auf Audiotracks hinzuzufügen (wie Verstärkung, Verzerrung, Panning usw.).
- **Geräte-APIs** ermöglichen es Ihnen, mit der Hardware des Geräts zu interagieren: zum Beispiel den Zugriff auf das GPS des Geräts, um die Position des Benutzers mithilfe der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu ermitteln.
- **Client-seitige Speicher-APIs** ermöglichen es Ihnen, Daten auf der Client-Seite zu speichern, so dass Sie eine App erstellen können, die ihren Status zwischen Seitenladevorgängen speichert und möglicherweise sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere verfügbare Optionen, z. B. einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs kommen in einer großen Vielfalt; einige der bekannteren, die Sie früher oder später wahrscheinlich verwenden werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), mit denen Sie alle möglichen Dinge mit Karten auf Ihren Webseiten tun können.
- Die [Facebook-APIs](/de/docs/Web/API/Geolocation_API), die es Ihnen ermöglichen, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu verbessern, z. B. durch die Bereitstellung des App-Logins über das Facebook-Login, das Akzeptieren von In-App-Zahlungen, das Durchführen gezielter Werbekampagnen usw.
- Die [Telegram APIs](https://core.telegram.org/api), die es Ihnen ermöglichen, Inhalte von Telegram-Kanälen auf Ihrer Website einzubetten sowie Unterstützung für Bots bereitzustellen.
- Die [YouTube API](https://developers.google.com/youtube/), die Ihnen ermöglicht, YouTube-Videos auf Ihrer Seite einzubetten, YouTube zu durchsuchen, Wiedergabelisten zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Tools bereitstellt, um Pinterest-Boards und -Pins zu verwalten, um sie in Ihre Website einzubeziehen.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework zum Aufbau von Sprach- und Videoanruf-Funktionalität in Ihrer App, zum Versenden von SMS/MMS aus Ihren Apps und mehr bietet.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentarplattform bietet, die in Ihre Seite integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des Mastodon-Sozialen Netzwerks programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die die Integration mehrerer APIs über eine Plattform ermöglicht.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs funktionieren leicht unterschiedlich, haben jedoch im Allgemeinen gemeinsame Merkmale und ähnliche Themen, wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs, indem er ein oder mehrere [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) verwendet, die als Container für die von der API verwendeten Daten (in Objekt-Eigenschaften enthalten) und die verfügbare Funktionalität der API (in Objekt-Methoden enthalten) dienen.

> [!NOTE]
> Wenn Sie mit der Funktionsweise von Objekten nicht bereits vertraut sind, sollten Sie zurückgehen und unser Modul [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) durcharbeiten, bevor Sie fortfahren.

Kehren wir zum Beispiel der Web Audio API zurück – dies ist eine ziemlich komplexe API, die aus einer Reihe von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), das einen [Audiograph](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) darstellt, der zur Manipulation von Audio verwendet werden kann, das im Browser abgespielt wird, und eine Reihe von Methoden und Eigenschaften hat, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element darstellt, das Sound enthält, den Sie im Audiokontext abspielen und manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios darstellt, d.h. das Gerät auf Ihrem Computer, das es tatsächlich ausgibt – normalerweise Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte? Wenn Sie sich unser [einfaches Web Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), sehen Sie zunächst folgendes HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Zuerst binden wir ein `<audio>`-Element ein, mit dem wir eine MP3 in die Seite einfügen. Wir fügen keine Standard-Browser-Steuerelemente ein. Als nächstes fügen wir eine {{htmlelement("button")}} ein, die wir verwenden, um die Musik abzuspielen und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ "range", mit dem wir die Lautstärke des Tracks anpassen, während er abgespielt wird.

Schauen wir uns als Nächstes das JavaScript für dieses Beispiel an.

Wir beginnen mit der Erstellung einer `AudioContext`-Instanz, in der wir unseren Track manipulieren:

```js
const audioCtx = new AudioContext();
```

Als nächstes erstellen wir Konstanten, die Referenzen zu unserem `<audio>`, `<button>` und `<input>`-Element speichern, und verwenden die Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource), um ein `MediaElementAudioSourceNode` zu erstellen, das die Quelle unseres Audios darstellt – das `<audio>`-Element, das abgespielt werden soll, stammt hiervon:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als nächstes fügen wir ein paar Ereignishandler ein, die dienen, zwischen Abspielen und Pause zu wechseln, wenn die Schaltfläche gedrückt wird, und die Anzeige zurück an den Anfang zu setzen, wenn das Lied beendet ist:

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
> Einige von Ihnen bemerken vielleicht, dass die `play()`- und `pause()`-Methoden, die verwendet werden, um den Track abzuspielen und zu pausieren, nicht Teil der Web Audio API sind; sie gehören zur [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die unterschiedlich, jedoch eng verwandt ist.

Als nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mithilfe der Methode [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain), das verwendet werden kann, um die Lautstärke des durchgeschalteten Audios anzupassen, und erstellen einen weiteren Ereignishandler, der den Wert der Verstärkung (Lautstärke) des Audiographs ändert, wenn der Slider-Wert geändert wird:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das letzte, was zu tun ist, um diese Funktion zum Laufen zu bringen, besteht darin, die verschiedenen Knoten im Audiograph zu verbinden, was mit der Methode [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect) erfolgt, die bei allen Knotentypen vorhanden ist:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio startet von der Quelle aus, die dann mit dem Gain-Knoten verbunden wird, damit die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann mit dem Zielknoten verbunden, damit der Sound auf Ihrem Computer abgespielt werden kann (die Eigenschaft [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) steht für das, was auch immer der Standard-[`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) auf der Hardware Ihres Computers ist, z. B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt für die API ist. Bei der Web Audio API ist dies ziemlich einfach – es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jegliche Audiobearbeitung durchzuführen.

Die Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt – ihre Funktionen befinden sich meist am [`Document`](/de/docs/Web/API/Document)-Objekt oder einer Instanz eines HTML-Elements, das Sie auf irgendeine Weise beeinflussen möchten, z. B.:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) basiert ebenfalls darauf, ein Kontextobjekt zu erhalten, das verwendet wird, um Dinge zu manipulieren, obwohl es sich in diesem Fall um einen grafischen Kontext handelt und nicht um einen Audio-Kontext. Sein Kontextobjekt wird durch die Referenzierung des {{htmlelement("canvas")}}-Elements, auf das Sie zeichnen möchten, und durch Aufrufen seiner Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf der Leinwand tun möchten, wird dann erreicht, indem Eigenschaften und Methoden des Kontextobjekts (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist) aufgerufen werden, z. B.:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in Aktion in unserem [bouncing balls demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (sehen Sie es [live](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html) auch) sehen.

### Sie verwenden oft Ereignisse, um Änderungen im Zustand zu handhaben

Wir haben bereits früher im Kurs über Ereignisse gesprochen in unserem Artikel [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events), der eingehend betrachtet, was clientseitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie mit der Funktionsweise von clientseitigen Web-API-Ereignissen nicht bereits vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten mindestens ein paar. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unserem Referenzmaterial im Allgemeinen in separaten "Ereignis-Handler"-Abschnitten aufgeführt.

Wir haben bereits eine Reihe von Ereignis-Handlern in unserem obigen Beispiel zur Web Audio API gesehen:

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

### Sie haben zusätzliche Sicherheitsmechanismen, wo angemessen

Web-API-Funktionen unterliegen denselben Sicherheitsüberlegungen wie JavaScript und andere Web-Technologien (z. B. [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), aber sie haben manchmal zusätzliche Sicherheitsmechanismen. Beispielsweise funktionieren einige der neueren Web-APIs nur auf Seiten, die über HTTPS bereitgestellt werden, da sie potenziell sensible Daten übertragen (Beispiele sind [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus bitten einige Web-APIs um Erlaubnis, von den Benutzern aktiviert zu werden, sobald Aufrufe in Ihrem Code gemacht werden. Ein Beispiel dafür ist die [Notifications API](/de/docs/Web/API/Notifications_API), die um Erlaubnis über ein Popup-Dialogfeld bittet:

![Ein Screenshot des Benachrichtigungs-Pop-Up-Dialogs, der von der Notifications API des Browsers bereitgestellt wird. Die Website 'mdn.github.io' bittet um Erlaubnis, Benachrichtigungen an das Benutzer-Agent zu senden mit einem X, um den Dialog zu schließen und ein Dropdown-Menü mit den Optionen, wobei 'immer Benachrichtigungen erhalten' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) APIs unterliegen einem Sicherheitsmechanismus, der als [Autoplay-Policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) bezeichnet wird – das bedeutet im Grunde, dass Sie nicht automatisch Audio abspielen können, wenn eine Seite lädt – Ihre Benutzer müssen die Wiedergabe von Audio über ein Steuerelement wie eine Schaltfläche initiieren. Dies wird gemacht, da das automatische Abspielen von Audio normalerweise wirklich störend ist und wir unsere Benutzer nicht damit belästigen sollten.

> [!NOTE]
> Abhängig davon, wie strikt der Browser ist, können solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d.h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt dieses Schreibens funktionierte unser Beispiel zur Web Audio API nicht lokal auf Google Chrome – wir mussten es auf GitHub hochladen, bevor es funktionierte.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich gespannt darauf, tatsächlich einige spannende Dinge mit spezifischen APIs zu machen, also los geht's! Als Nächstes werfen wir einen Blick auf Video- und Audio-APIs.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
