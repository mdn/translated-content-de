---
title: Einführung in Web-APIs
short-title: Introduction
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Zuerst schauen wir uns APIs aus einer höheren Perspektive an - was sind sie, wie funktionieren sie, wie nutzt man sie in Ihrem Code und wie sind sie strukturiert? Wir werden auch einen Blick darauf werfen, was die verschiedenen Hauptklassen von APIs sind und welche Arten von Anwendungen sie haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen der JavaScript-Objekte</a> und zentrale API-Kenntnisse wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
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

Application Programming Interfaces (APIs) sind Konstrukte, die in Programmiersprachen zur Verfügung gestellt werden, um Entwicklern die Erstellung komplexer Funktionalitäten zu erleichtern. Sie abstrahieren komplexeren Code von Ihnen und bieten eine einfachere Syntax zur Verwendung an.

Als Beispiel aus der realen Welt denken Sie an die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder einem anderen Gebäude. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen - das wäre sehr ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind in zwei verschiedene Steckdosen eingesteckt. Jede Mehrfachsteckdose hat einen Steckplatz an ihrer Ober- und Vorderseite. In jede Mehrfachsteckdose sind zwei Stecker eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

Ähnlich dazu ist es, wenn Sie sagen, einige 3D-Grafiken programmieren möchten, erheblich einfacher, dies mit einer API zu tun, die in einer höherwertigen Sprache wie JavaScript oder Python geschrieben ist, anstatt direkt niedrigstufigen Code (z.B. C oder C++) zu schreiben, der die GPU oder andere Grafikfunktionen des Computers direkt steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "API-Glossareintrag")}} für eine genauere Beschreibung.

### APIs in clientseitigem JavaScript

Clientseitiges JavaScript hat insbesondere viele APIs zur Verfügung - diese sind nicht Teil der JavaScript-Sprache selbst, sondern sie sind über die JavaScript-Kernsprache hinaus aufgebaut und bieten Ihnen zusätzliche Superkräfte für Ihre JavaScript-Anwendungen. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus dem Browser und der umliegenden Computerumgebung zugänglich machen und nützliche komplexe Dinge damit tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser - ein Audiotrack aufnehmen, seine Lautstärke ändern, Effekte darauf anwenden, usw. Im Hintergrund verwendet der Browser tatsächlich einige komplexe niedrigstufige Codes (z.B. C++ oder Rust), um die eigentliche Audiobearbeitung durchzuführen. Aber auch hier wird diese Komplexität durch die API von Ihnen abstrahiert.
- **Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert, und Sie müssen im Allgemeinen ihren Code und ihre Informationen von irgendwo im Web abrufen. Zum Beispiel erlaubt die [Google Maps API](https://developers.google.com/maps/documentation/javascript) Ihnen, interaktive Karten zu erstellen, die Ihren Standort markieren, und bietet Ihnen spezielle Konstrukte zur Abfrage des Google Maps-Dienstes und Rückgabe spezifischer Informationen.

![Ein Screenshot des Browsers mit der geöffneten Startseite des Firefox-Browsers. Es gibt APIs, die standardmäßig in den Browser integriert sind. Drittanbieter-APIs sind nicht standardmäßig in den Browser integriert. Ihr Code und ihre Informationen müssen aus dem Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Wie oben besprochen, sind clientseitige JavaScript-APIs nicht Teil der JavaScript-Sprache, sondern Ergänzungen, die auf ihr aufbauen und Ihnen zusätzliche Funktionalitäten bieten. Lassen Sie uns dies zusammenfassen, um es klarer zu machen und zu zeigen, wo andere JavaScript-Tools passen:

- JavaScript — Eine hochstufige Skriptsprache, die in Browsern integriert ist und Ihnen erlaubt, Funktionalität auf Webseiten oder -anwendungen zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen, wie beispielsweise [Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction), verfügbar ist.
- Browser-APIs — Konstrukte, die in den Browser integriert sind und über der JavaScript-Sprache sitzen, die es Ihnen erlauben, Funktionalitäten leichter zu implementieren.
- Drittanbieter-APIs — Konstrukte, die auf Drittanbieterplattformen (z.B. Disqus, Facebook) integriert sind und es Ihnen erlauben, einige dieser Funktionalitäten auf Ihren eigenen Webseiten zu nutzen (zum Beispiel, um Ihre Disqus-Kommentare auf einer Webseite anzuzeigen).
- JavaScript-Bibliotheken — In der Regel enthalten eine oder mehrere JavaScript-Dateien [benutzerdefinierte Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions), die Sie Ihrer Webseite hinzufügen können, um die Erstellung oder das Schreiben häufig genutzter Funktionen zu beschleunigen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt über Bibliotheken hinaus. JavaScript-Frameworks (z.B. Angular und Ember) neigen dazu, Pakete aus HTML, CSS, JavaScript und anderen Technologien zu sein, die Sie installieren und dann verwenden, um eine gesamte Webanwendung von Grund auf zu schreiben. Der wesentliche Unterschied zwischen einer Bibliothek und einem Framework ist die "Inversion of Control". Wenn eine Methode aus einer Bibliothek aufgerufen wird, hat der Entwickler die Kontrolle. Bei einem Framework wird die Kontrolle umgekehrt: das Framework ruft den Code des Entwicklers auf.

## Was können APIs tun?

Es gibt eine riesige Anzahl von APIs, die in modernen Browsern verfügbar sind und es Ihnen ermöglichen, eine Vielzahl von Dingen in Ihrem Code zu tun. Dies können Sie sehen, indem Sie sich die [MDN APIs-Index-Seite](/de/docs/Web/API) ansehen.

### Übliche Browser-APIs

Insbesondere sind die gängigsten Kategorien von Browser-APIs, die Sie verwenden (und die wir in diesem Modul ausführlicher behandeln werden):

- **APIs zum Manipulieren von Dokumenten**, die in den Browser geladen werden. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren – HTML erstellen, entfernen und ändern, neue Stile dynamisch auf Ihre Seite anwenden, usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neuer Inhalt angezeigt wird, ist das ein Beispiel für das DOM in Aktion. Erfahren Sie mehr über diese Arten von APIs in der [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite eigenständig zu aktualisieren, werden sehr häufig verwendet. Diese scheinbar kleine Detail hat einen enormen Einfluss auf die Leistung und das Verhalten von Websites – wenn Sie nur eine Aktiennotierung oder eine Liste neuer verfügbarer Geschichten aktualisieren müssen, kann dies sofort geschehen, ohne die gesamte Seite vom Server neu zu laden. Dies kann die Website oder Anwendung viel reaktionsschneller und "flinker" wirken lassen. Die Haupt-API, die dafür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl ältere Codes möglicherweise immer noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API verwenden. Möglicherweise stoßen Sie auch auf den Begriff **AJAX**, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- **APIs zum Zeichnen und Manipulieren von Grafiken** werden weitgehend von Browsern unterstützt - die populärsten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, programmatisch die Pixeldaten eines HTML-{{htmlelement("canvas")}}-Elements zu aktualisieren, um 2D- und 3D-Szenen zu erstellen. Zum Beispiel können Sie mit der Canvas-API Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter darauf anwenden, wie Sepia oder Graustufen, oder mit WebGL eine komplexe 3D-Szene mit Beleuchtung und Texturen erstellen. Solche APIs werden oft mit APIs zur Erstellung von Animationsschleifen (wie zum Beispiel [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen kombiniert, um ständig aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) erlauben Ihnen, wirklich interessante Dinge mit Multimedia zu machen, wie benutzerdefinierte UI-Steuerelemente zum Abspielen von Audio und Video zu erstellen, Textspuren wie Untertitel und Beschriftungen zusammen mit Ihren Videos anzuzeigen, Video von Ihrer Webcam zu erfassen, um es über ein Canvas zu manipulieren (siehe oben) oder auf dem Computer einer anderen Person in einer Webkonferenz anzuzeigen oder Effekte auf Audiotracks hinzuzufügen (wie Gain, Verzerrung, Pan, usw.).
- **Geräte-APIs** ermöglichen es Ihnen, mit der Hardware des Geräts zu interagieren: zum Beispiel den Zugriff auf das GPS des Geräts, um die Position des Benutzers mithilfe der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu ermitteln.
- **Clientseitige Speicher-APIs** ermöglichen es Ihnen, Daten clientseitig zu speichern, sodass Sie eine Anwendung erstellen können, die ihren Zustand zwischen Seitenaufrufen speichert und vielleicht sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere verfügbare Optionen, z.B. einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Gängige Drittanbieter-APIs

Drittanbieter-APIs gibt es in großer Zahl; einige der populäreren, die Sie früher oder später verwenden werden, sind:

- Karten-APIs wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen erlauben, alle möglichen Dinge mit Karten auf Ihren Webseiten zu tun.
- Die [Facebook-Suite von APIs](https://developers.facebook.com/docs/), die es Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu verbessern, wie z.B. das Anbieten des App-Logins über Facebook-Login, das Akzeptieren von In-App-Zahlungen, das Anbieten gezielter Werbekampagnen usw.
- Die [Telegram APIs](https://core.telegram.org/api), die es Ihnen ermöglichen, Inhalte aus Telegram-Kanälen auf Ihrer Website einzubetten, und zusätzlich Unterstützung für Bots bieten.
- Die [YouTube API](https://developers.google.com/youtube/), die es Ihnen ermöglicht, YouTube-Videos auf Ihrer Seite einzubetten, YouTube zu durchsuchen, Playlists zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Tools zum Verwalten von Pinterest-Boards und -Pins bietet, um diese in Ihre Website zu integrieren.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework bietet, um Sprach- und Videofunktionalitäten in Ihre Anwendung zu integrieren, SMS/MMS zu senden und mehr.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentierungsplattform bietet, die in Ihre Website integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des sozialen Netzwerks Mastodon programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die es ermöglicht, mehrere APIs über eine Plattform zu integrieren.

## Wie funktionieren APIs?

Unterschiedliche JavaScript-APIs funktionieren leicht unterschiedlich, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen in ihrer Funktionsweise.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs über ein oder mehrere [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects), die als Container für die Daten des API (in Objekt-Eigenschaften enthalten) und die Funktionalität, die das API zur Verfügung stellt (in Objekt-Methoden enthalten), dienen.

> [!NOTE]
> Wenn Sie nicht bereits mit der Funktionsweise von Objekten vertraut sind, sollten Sie unseren Kurs [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) durchgehen, bevor Sie fortfahren.

Lassen Sie uns zum Beispiel der Web Audio API zurückkehren - dies ist ein ziemlich komplexes API, das aus mehreren Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), das ein [Audio-Graph](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) darstellt, das verwendet werden kann, um Audio zu manipulieren, das im Browser abgespielt wird, und bietet mehrere Methoden und Eigenschaften zur Audiobearbeitung.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element darstellt, das Klang enthält, den Sie im Audiokontext abspielen und manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios repräsentiert, z.B. das Gerät auf Ihrem Computer, das es tatsächlich ausgibt - in der Regel Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte miteinander? Wenn Sie sich unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([auch live sehen](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), sehen Sie zuerst folgendes HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Zuerst fügen wir ein `<audio>`-Element ein, mit dem wir eine MP3-Datei auf der Seite einbetten. Wir fügen keine Standard-Benutzeroberflächen-Steuerelemente hinzu. Als nächstes fügen wir einen {{htmlelement("button")}} hinzu, den wir verwenden, um die Musik zu spielen und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ "range", das wir verwenden, um die Lautstärke des Tracks während des Abspielens anzupassen.

Werfen Sie nun einen Blick auf das JavaScript für dieses Beispiel.

Wir beginnen damit, eine Instanz `AudioContext` zu erstellen, innerhalb der wir unseren Track manipulieren können:

```js
const audioCtx = new AudioContext();
```

Als nächstes erstellen wir Konstanten, die Verweise auf unsere `<audio>`, `<button>` und `<input>`-Elemente speichern, und nutzen die [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)-Methode, um ein `MediaElementAudioSourceNode` zu erstellen, das die Quelle unseres Audios repräsentiert - das `<audio>`-Element wird von hier abgespielt:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als nächstes fügen wir ein paar Ereignishandler hinzu, um zwischen Wiedergabe und Pause umzuschalten, wenn der Button gedrückt wird, und das Display zurück zum Anfang zu setzen, wenn das Lied zu Ende ist:

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
> Einige von Ihnen werden bemerken, dass die `play()` und `pause()`-Methoden, die verwendet werden, um den Track abzuspielen und anzuhalten, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die zwar anders, aber eng verwandt ist.

Als nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mit der [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain)-Methode, die verwendet werden kann, um die Lautstärke des durchgeführten Audios anzupassen, und erstellen einen weiteren Ereignishandler, der den Wert des Gain (Lautstärke) des Audiographen ändert, wann immer sich der Schiebereglerwert ändert:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Der letzte Schritt, um dies zum Laufen zu bringen, ist das Anschließen der Knoten im Audiographen, was mit der überall verfügbaren [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect)-Methode erreicht wird:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Der Ton beginnt in der Quelle, wird dann mit dem Gain-Knoten verbunden, sodass die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann mit dem Ziel-Knoten verbunden, sodass die Musik auf Ihrem Computer abgespielt werden kann (die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft stellt das dar, was als Standard-\<b>\<u>AudioDestinationNode kann für Ihre Computer-Hardware, z.B. Ihre Lautsprecher.

### Sie haben erkennbare Einstiegspunkte

Beim Arbeiten mit einer API sollten Sie sicherstellen, dass Sie den Einstiegspunkt der API kennen. In der Web Audio API ist dies ziemlich einfach — es handelt sich um das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das zum Ausführen von Audiomanipulationen erforderlich ist.

Das Document Object Model (DOM) API hat auch einen einfachen Einstiegspunkt — seine Funktionen sind in der Regel über das [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar, oder eine Instanz eines HTML-Elements, das Sie in irgendeiner Weise beeinflussen möchten, z.B.:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) stützt sich ebenfalls auf den Erhalt eines Kontextobjekts zur Manipulation, obwohl dies in diesem Fall ein grafischer Kontext anstelle eines Audiokontexts ist. Sein Kontextobjekt wird durch das Abrufen einer Referenz auf das {{htmlelement("canvas")}}-Element, das Sie zeichnen möchten, und dem Aufrufen seiner [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode erstellt:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf dem Canvas tun möchten, wird dann durch das Aufrufen von Eigenschaften und Methoden des Kontextobjekts (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) ist, zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in Aktion in unserem [bouncing balls demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (siehe es [live ausführen](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)) auch.

### Sie verwenden häufig Ereignisse, um Zustandsänderungen zu verarbeiten

Wir haben früher in unserem Kurs über Ereignisse, insbesondere im Artikel [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) diskutiert, der im Detail beschreibt, was clientseitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie mit der Funktionsweise von clientseitigen Web API-Ereignissen nicht bereits vertraut sind, sollten Sie zuerst diesen Artikel durchlesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten zumindest einige. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unseren Referenzmaterialien im Abschnitt "Ereignishandler" aufgelistet.

Wir sahen bereits eine Anzahl von Ereignishandlern in unserem Web Audio API-Beispiel oben:

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

WebAPI-Funktionen unterliegen denselben Sicherheitsüberlegungen wie JavaScript und andere Web-Technologien (zum Beispiel [Same-Origin Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)), aber sie haben manchmal zusätzliche Sicherheitsmechanismen. Beispielsweise funktionieren einige der moderneren Web-APIs nur auf Seiten, die über HTTPS bereitgestellt werden, da sie möglicherweise sensible Daten übertragen (Beispiele umfassen [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Zusätzlich erfordern einige WebAPIs die Zustimmung des Benutzers, bevor sie aktiviert werden dürfen, sobald Aufrufe dazu in Ihrem Code gemacht werden. Ein Beispiel hierfür ist die [Notifications API](/de/docs/Web/API/Notifications_API), die mit einem Pop-up-Dialog um Erlaubnis bittet:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogs, der von der Notifications API des Browsers bereitgestellt wird. 'mdn.github.io'-Website bittet um Erlaubnis, Benachrichtigungen an den User-Agent zu senden, wobei ein X zum Schließen des Dialogs und ein Dropdown-Menü der Optionen mit 'immer Benachrichtigungen empfangen' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio- und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-APIs unterliegen einem Sicherheitsmechanismus namens [autoplay policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) — dies bedeutet im Wesentlichen, dass Sie kein Audio automatisch abspielen können, wenn eine Seite geladen wird - Sie müssen es Ihren Benutzern ermöglichen, das Audio über ein Kontrollkästchen wie etwa einen Knopf selbst zu starten. Dies ist deshalb wichtig, weil automatisches Abspielen von Audio in der Regel wirklich störend ist und wir unseren Benutzern nicht zumuten sollten.

> [!NOTE]
> Je nachdem, wie strikt der Browser ist, könnten solche Sicherheitsmechanismen sogar das Beispiel daran hindern, lokal zu funktionieren, d.h. falls Sie das lokale Beispieldatei in Ihrem Browser laden, anstatt es von einem Webserver auszuführen. Zum Zeitpunkt der Erstellung wurde unser Beispiel mit der Web Audio API nicht lokal auf Google Chrome ausgeführt - wir mussten es erst auf GitHub hochladen, bevor es funktionierte.

## Zusammenfassung

Bis zu diesem Punkt sollten Sie ein gutes Verständnis davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code machen können. Sie sind wahrscheinlich aufgeregt, tatsächlich einige spaßige Dinge mit spezifischen APIs zu machen, also lassen Sie uns loslegen! Als nächstes werden wir uns Video- und Audio-APIs anschauen.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
