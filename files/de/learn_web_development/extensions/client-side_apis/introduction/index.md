---
title: Einführung in Web-APIs
short-title: Introduction
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Zuerst betrachten wir APIs aus einer übergeordneten Perspektive — was sie sind, wie sie funktionieren, wie man sie in Ihrem Code verwendet und wie sie strukturiert sind. Wir schauen uns auch an, welche Hauptklassen von APIs es gibt und welche Art von Anwendungen sie haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und grundlegende API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
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

Application Programming Interfaces (APIs) sind Konstrukte, die in Programmiersprachen zur Verfügung gestellt werden, um es Entwicklern zu erleichtern, komplexe Funktionalitäten zu erstellen. Sie abstrahieren komplexeren Code weg und bieten stattdessen eine einfachere Syntax.

Ein Beispiel aus der realen Welt ist die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder anderen Wohnräumen. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose, und es funktioniert. Sie versuchen nicht, es direkt mit der Stromversorgung zu verbinden — das wäre sehr ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind in zwei verschiedene Steckdosen eingesteckt. Jede Mehrfachsteckdose hat einen Steckplatz auf ihrer Oberseite und auf ihrer Vorderseite. Zwei Stecker sind in jede Mehrfachsteckdose eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In gleicher Weise ist es, wenn Sie z.B. einige 3D-Grafiken programmieren möchten, viel einfacher, dies mit einer API zu tun, die in einer höherstufigen Sprache wie JavaScript oder Python geschrieben ist, anstatt direkt Niedrigebenen-Code (z.B. C oder C++) zu schreiben, der die GPU oder andere Grafikfunktionen des Computers direkt steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "API-Glossar-Eintrag")}} für eine weitere Beschreibung.

### APIs in client-seitigem JavaScript

Client-seitigem JavaScript stehen viele APIs zur Verfügung — diese sind nicht Teil der JavaScript-Sprache selbst, sondern sie basieren auf der Kern-JavaScript-Sprache und bieten Ihnen zusätzliche Superkräfte zur Nutzung in Ihrem JavaScript-Code. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihren Webbrowser integriert und sind in der Lage, Daten aus dem Browser und der umgebenden Computerumgebung zu nutzen und hilfreiche komplexe Dinge damit zu tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser — einen Audiotrack aufnehmen, seine Lautstärke ändern, Effekte darauf anwenden usw. Im Hintergrund verwendet der Browser tatsächlich einige komplexe niedrigere Codeebenen (z.B. C++ oder Rust), um die eigentliche Audiobearbeitung durchzuführen. Aber auch hier wird diese Komplexität durch die API von Ihnen entfernt.
- **Drittanbieter-APIs** sind standardmäßig nicht in den Browser integriert, und Sie müssen in der Regel ihren Code und Informationen von irgendwo aus dem Web abrufen. Zum Beispiel ermöglicht Ihnen die [Google Maps API](https://developers.google.com/maps/documentation/javascript) Dinge wie das Anzeigen einer interaktiven Karte zu Ihrem Büro auf Ihrer Website. Es bietet ein spezielles Set von Konstruktionen, mit denen Sie den Google Maps-Dienst abfragen und bestimmte Informationen zurückgeben können.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers. Es gibt APIs, die standardmäßig im Browser integriert sind. Drittanbieter-APIs sind standardmäßig nicht im Browser integriert. Ihr Code und Informationen müssen von irgendwo aus dem Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir darüber gesprochen, was client-seitige JavaScript-APIs sind und wie sie zur JavaScript-Sprache stehen. Lassen Sie uns dies zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools passen:

- JavaScript — Eine hochniveaulige Skriptsprache, die in Browser integriert ist und Ihnen ermöglicht, Funktionalitäten auf Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen verfügbar ist, wie [Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction).
- Browser-APIs — Konstrukte, die im Browser eingebaut sind und auf der JavaScript-Sprache aufbauen und die Ihnen ermöglichen, Funktionalitäten einfacher zu implementieren.
- Drittanbieter-APIs — Konstrukte, die in Drittanbieterplattformen eingebaut sind (z.B. Disqus, Facebook), und es Ihnen ermöglichen, einige der Plattformfunktionalitäten auf Ihren eigenen Webseiten zu nutzen (zum Beispiel Ihre Disqus-Kommentare auf einer Webseite anzeigen).
- JavaScript-Bibliotheken — In der Regel eine oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) enthalten, die Sie an Ihre Webseite anhängen können, um gebräuchliche Funktionalitäten zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt über Bibliotheken, JavaScript-Frameworks (z.B. Angular und Ember) neigen dazu, Pakete von HTML, CSS, JavaScript und anderen Technologien zu sein, die Sie installieren und dann verwenden, um eine komplette Webanwendung von Grund auf neu zu schreiben. Der wesentliche Unterschied zwischen einer Bibliothek und einem Framework ist die "Inversion of Control". Wenn ein Entwickler eine Methode aus einer Bibliothek aufruft, hat der Entwickler die Kontrolle. Bei einem Framework ist die Kontrolle umgekehrt: das Framework ruft den Code des Entwicklers auf.

## Was können APIs tun?

Es gibt eine riesige Anzahl von APIs, die in modernen Browsern verfügbar sind und die es Ihnen ermöglichen, eine Vielzahl von Dingen in Ihrem Code zu tun. Sie können dies sehen, indem Sie sich die [MDN APIs Index-Seite](/de/docs/Web/API) ansehen.

### Gemeinsame Browser-APIs

Insbesondere sind die gängigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul ausführlicher behandeln werden),:

- **APIs zur Manipulation von Dokumenten**, die im Browser geladen sind. Das offensichtlichste Beispiel ist das [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), das es Ihnen ermöglicht, HTML und CSS zu manipulieren — HTML erstellen, entfernen und ändern, neue Stile dynamisch auf Ihre Seite anwenden usw. Jedes Mal, wenn ein Popup-Fenster auf einer Seite erscheint oder ein neuer Inhalt angezeigt wird, zum Beispiel, ist das das DOM in Aktion. Weitere Informationen zu diesen Arten von API finden Sie in der [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite allein zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen enormen Einfluss auf die Leistung und das Verhalten von Seiten gehabt — wenn Sie nur eine Aktienliste oder eine Liste neuer verfügbarer Geschichten aktualisieren müssen, dies sofort zu tun, ohne die gesamte Seite vom Server neu laden zu müssen, kann die Seite oder App viel reaktionsfreudiger und "flinker" wirken. Die Haupt-API, die dafür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise immer noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie können auch auf den Begriff **AJAX** stoßen, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Netzwerkanfragen mit JavaScript durchführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- **APIs zur Zeichnung und Manipulation von Grafiken** werden in Browsern weitgehend unterstützt — die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixeldaten, die im HTML-{{htmlelement("canvas")}}-Element enthalten sind, programmgesteuert zu aktualisieren, um 2D- und 3D-Szenen zu erzeugen. Zum Beispiel könnten Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter darauf anwenden, wie Sepia oder Graustufen, mit der Canvas-API, oder eine komplexe 3D-Szene mit Licht und Texturen mit WebGL schaffen. Solche APIs werden oft mit APIs kombiniert, die Animationsschleifen erstellen (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und andere, um ständig aktualisierte Szenen wie Zeichentrickfilme und Spiele zu machen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie zum Beispiel benutzerdefinierte UI-Steuerelemente zum Abspielen von Audio und Video zu erstellen, Textspuren, wie Untertitel und Untertitel zu Ihren Videos anzuzeigen, Video von Ihrer Webcam zu nehmen, um es über eine Leinwand (siehe oben) zu manipulieren oder auf dem Computer eines anderen in einer Webkonferenz anzuzeigen, oder Effekte auf Audiospuren hinzuzufügen (wie Gain, Verzerrung, Panning usw.).
- **Device APIs** ermöglichen Ihnen die Interaktion mit der Gerätehardware: Zum Beispiel das Zugreifen auf das GPS des Geräts, um die Position des Benutzers zu finden mit der [Geolocation API](/de/docs/Web/API/Geolocation_API).
- **Client-seitige Speicher-APIs** ermöglichen Ihnen das Speichern von Daten auf der Client-Seite, sodass Sie eine App erstellen können, die ihren Zustand zwischen Seitenaktualisierungen speichert und möglicherweise sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere Optionen zur Verfügung, z.B. einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbank-Speicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs gibt es in großer Vielfalt; einige der bekannteren, die Sie früher oder später nutzen werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen ermöglichen, alle möglichen Dinge mit Karten auf Ihren Webseiten zu tun.
- Die [Facebook API Suite](https://developers.facebook.com/docs/), die es Ihnen ermöglichen, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu unterstützen, wie zum Beispiel App-Login über Facebook-Login, Annahme von In-App-Zahlungen, Ausrollen gezielter Werbekampagnen usw.
- Die [Telegram APIs](https://core.telegram.org/api), die es Ihnen ermöglichen, Inhalte aus Telegram-Kanälen auf Ihrer Website einzubetten, zusätzlich zur Unterstützung von Bots.
- Die [YouTube API](https://developers.google.com/youtube/), die es Ihnen ermöglicht, YouTube-Videos auf Ihrer Seite einzubetten, YouTube zu durchsuchen, Wiedergabelisten zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Tools zur Verwaltung von Pinterest-Boards und -Pins bietet, um sie in Ihre Website einzufügen.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework zum Aufbau von Sprach- und Videoanruffunktionalität in Ihrer App bietet, das Senden von SMS/MMS von Ihren Apps aus und mehr.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentarplattform bereitstellt, die in Ihre Seite integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des sozialen Netzwerks Mastodon programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die es ermöglicht, mehrere APIs über eine Plattform zu integrieren.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs funktionieren leicht unterschiedlich, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen, wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs, indem er ein oder mehrere [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) verwendet, die als Container für die von der API verwendeten Daten (enthalten in den Objektvariablen) und für die von der API bereitgestellte Funktionalität (enthalten in den Objektmethoden) dienen.

> [!NOTE]
> Wenn Sie noch nicht damit vertraut sind, wie Objekte funktionieren, sollten Sie unser [JavaScript-Objekt](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) Modul durcharbeiten, bevor Sie fortfahren.

Kehren wir zum Beispiel der Web Audio API zurück — dies ist eine ziemlich komplexe API, die aus eine Reihe von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), das einen [Audio-Graphen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) darstellt, der zur Manipulation von Audio verwendet werden kann, das im Browser abgespielt wird, und der über eine Anzahl von Methoden und Eigenschaften verfügt, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element darstellt, das den Klang enthält, den Sie abspielen und im Audio-Kontext manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios darstellt, d.h. das Gerät auf Ihrem Computer, das es tatsächlich ausgeben wird — normalerweise Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte? Wenn Sie sich unser [einfaches Webaudio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ([Siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)) ansehen, sehen Sie zunächst das folgende HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Wir inkludieren zunächst ein `<audio>`-Element, mit dem wir eine MP3-Datei in die Seite einbetten. Wir inkludieren keine Standard-Browsersteuerungen. Als Nächstes fügen wir einen {{htmlelement("button")}} ein, den wir verwenden werden, um die Musik zu starten und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ "range", das wir verwenden werden, um die Lautstärke des Tracks während der Wiedergabe anzupassen.

Schauen wir uns nun das JavaScript für dieses Beispiel an.

Wir beginnen, indem wir eine `AudioContext`-Instanz erstellen, in der wir unseren Track manipulieren:

```js
const audioCtx = new AudioContext();
```

Als Nächstes erstellen wir Konstanten, die Referenzen zu unseren `<audio>`, `<button>`, und `<input>`-Elementen speichern, und verwenden die Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource), um ein `MediaElementAudioSourceNode` zu erstellen, das die Quelle unseres Audios darstellt — das `<audio>`-Element, von dem aus abgespielt wird:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als Nächstes fügen wir ein paar Event-Handler hinzu, die dazu dienen, zwischen Abspielen und Pause zu wechseln, wenn der Knopf gedrückt wird, und die Anzeige zurück zum Anfang zu setzen, wenn das Lied zu Ende gespielt wurde:

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
> Einige von Ihnen werden vielleicht bemerken, dass die `play()`- und `pause()`-Methoden, die verwendet werden, um den Track abzuspielen und anzuhalten, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die anders, aber eng verwandt ist.

Als Nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mit der Methode [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain), das zur Anpassung der Lautstärke des durchgeleiteten Audios verwendet werden kann, und erstellen einen weiteren Event-Handler, der den Wert der Verstärkung des Audio-Graphen (Lautstärke) ändert, wann immer der Schiebereglerwert geändert wird:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das letzte, was zu tun ist, damit dies funktioniert, ist, die verschiedenen Knoten im Audio-Graphen zu verbinden, was mit der [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect)-Methode für jeden Knotentyp gemacht wird:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio beginnt in der Quelle, die dann mit dem Verstärkungsknoten verbunden ist, damit die Lautstärke des Audios angepasst werden kann. Der Verstärkungsknoten wird dann mit dem Zielknoten verbunden, damit der Ton auf Ihrem Computer abgespielt werden kann (die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft stellt in der Regel das Standard- `AudioDestinationNode` dar, das auf der Hardware Ihres Computers verfügbar ist, z.B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Bei der Verwendung einer API sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt für die API liegt. In der Web Audio API ist dies ziemlich einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um überhaupt Audio zu manipulieren.

Das Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — seine Funktionen werden in der Regel an das [`Document`](/de/docs/Web/API/Document)-Objekt oder eine Instanz eines HTML-Elements angehängt, das Sie in irgendeiner Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) hängt auch davon ab, ein Kontextobjekt zu erhalten, das verwendet wird, um Dinge zu manipulieren, obwohl in diesem Fall ein grafischer Kontext und kein audiovisueller Kontext betroffen ist. Sein Kontextobjekt wird erstellt, indem eine Referenz auf das {{htmlelement("canvas")}}-Element bekommen wird, auf dem Sie zeichnen möchten, und dann die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufgerufen wird:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir mit der Leinwand machen möchten, wird dann durch Aufrufen von Eigenschaften und Methoden des Kontextobjekts (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist) erreicht, zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in unserem [Bouncing Balls Demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (sehen Sie es auch [live](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)) in Aktion sehen.

### Sie verwenden häufig Events, um Zustandsänderungen zu behandeln

Wir haben bereits zu einem früheren Zeitpunkt im Kurs über Events in unserem Artikel [Einführung in Events](/de/docs/Learn_web_development/Core/Scripting/Events) gesprochen, der im Detail untersucht, was client-seitige Web-Events sind und wie sie in Ihrem Code verwendet werden. Wenn Sie nicht bereits damit vertraut sind, wie client-seitige Web-API-Events funktionieren, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Events, aber die meisten enthalten zumindest einige. Die Eigenschaften von Event-Handlern, die es uns ermöglichen, Funktionen auszuführen, wenn Events ausgelöst werden, sind in unserem Referenzmaterial in separaten "Event-Handler"-Abschnitten aufgeführt.

Wir haben bereits eine Reihe von Event-Handlern in unserem Web Audio API-Beispiel oben gesehen:

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

Web-API-Funktionen unterliegen den gleichen Sicherheitsüberlegungen wie JavaScript und andere Web-Technologien (zum Beispiel [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), aber sie verfügen manchmal über zusätzliche Sicherheitsmechanismen. Zum Beispiel funktionieren einige der moderneren Web-APIs nur auf Seiten, die über HTTPS bereitgestellt werden, da sie potenziell sensible Daten übertragen (Beispiele sind [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus fordern einige Web-APIs Erlaubnis an, um von den Benutzern aktiviert zu werden, sobald Aufrufe an sie in Ihrem Code gemacht werden. Ein Beispiel hierfür ist die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API), die mit einem Dialogfeld um Erlaubnis bittet:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogs, das von der Benachrichtigungs-API des Browsers bereitgestellt wird. Die Website 'mdn.github.io' bittet um Erlaubnis, Benachrichtigungen an den User-Agent zu senden, mit einem X zum Schließen des Dialogs und einem Dropdown-Menü mit Optionen, wobei "Immer Benachrichtigungen erhalten" standardmäßig ausgewählt ist.](notification-permission.png)

Die Web-Audio- und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-APIs unterliegen einem Sicherheitsmechanismus, der genannt [autoplay policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) — dies bedeutet im Wesentlichen, dass Sie nicht automatisch Audio abspielen können, wenn eine Seite geladen wird — Sie müssen Ihren Benutzern erlauben, die Wiedergabe von Audio über eine Steuerung wie einen Knopf zu starten. Dies wird getan, weil automatisch abgespieltes Audio in der Regel wirklich störend ist und wir unsere Benutzer nicht dem aussetzen sollten.

> [!NOTE]
> Je nachdem, wie streng der Browser ist, könnten solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d.h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens würde unser Web Audio API-Beispiel lokal auf Google Chrome nicht funktionieren — wir mussten es zuerst auf GitHub hochladen, damit es funktioniert.

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich gespannt darauf, tatsächlich einige unterhaltsame Dinge mit spezifischen APIs zu machen, also lassen Sie uns loslegen! Als Nächstes werden wir uns Video- und Audio-APIs ansehen.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
