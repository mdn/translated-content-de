---
title: Einführung in Web-APIs
short-title: Introduction
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Zunächst schauen wir uns APIs aus einer übergeordneten Perspektive an — was sind sie, wie funktionieren sie, wie nutzt man sie in seinem Code und wie sind sie strukturiert? Wir werden uns auch ansehen, welche verschiedenen Hauptklassen von APIs es gibt und welche Verwendungszwecke sie haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Web-APIs sind und was man mit ihnen machen kann.</li>
          <li>Wie APIs verwendet werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Anwendungsprogrammierschnittstellen (APIs) sind Konstrukte, die in Programmiersprachen zur Verfügung gestellt werden, um Entwicklern die Erstellung komplexer Funktionalität zu erleichtern. Sie abstrahieren komplexeren Code und bieten eine einfachere Syntax als Ersatz.

Ein reales Beispiel ist die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder einer anderen Wohnung. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen — das wäre wirklich ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind in zwei verschiedene Steckdosen eingesteckt. Jede Mehrfachsteckdose hat einen Steckplatz auf der Oberseite und an der Vorderseite. In jede Mehrfachsteckdose sind zwei Stecker eingesteckt.](plug-socket.png)

_Bildquelle: [Überladene Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

Auf die gleiche Weise ist es viel einfacher, ein API zu verwenden, das in einer höher programmierten Sprache wie JavaScript oder Python geschrieben ist, als zu versuchen, niedrigeren Code (beispielsweise C oder C++) zu schreiben, der direkt die GPU des Computers oder andere Grafikfunktionen steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "API-Glossareintrag")}} für eine weitere Beschreibung.

### APIs in client-seitigem JavaScript

Client-seitiges JavaScript verfügt insbesondere über viele APIs — diese sind nicht Teil der JavaScript-Sprache selbst, sondern basieren auf der Kernsprache JavaScript und bieten Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihren Webbrowser eingebaut und können Daten vom Browser und der umgebenden Computerumgebung bereitstellen und nützliche komplexe Dinge damit tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser — sie nimmt einen Audiotrack und ändert dessen Lautstärke, wendet Effekte daran an usw. Im Hintergrund verwendet der Browser tatsächlich einige komplexe niedrigere Codeeinheiten (z. B. C++ oder Rust), um die tatsächliche Audiobearbeitung durchzuführen. Aber auch hier wird diese Komplexität durch die API von Ihnen abstrahiert.
- **Drittanbieter-APIs** sind standardmäßig nicht im Browser eingebaut, und Sie müssen ihren Code und die Informationen im Allgemeinen von einem Ort im Web abrufen. Zum Beispiel ermöglicht die [Google Maps API](https://developers.google.com/maps/documentation/javascript) Ihnen Dinge wie das Anzeigen einer interaktiven Karte zu Ihrem Büro auf Ihrer Website. Es bietet einen speziellen Satz von Konstrukten, die Sie verwenden können, um den Google Maps-Dienst abzufragen und spezifische Informationen zu erhalten.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers geöffnet. Es gibt APIs, die standardmäßig im Browser eingebaut sind. Drittanbieter-APIs sind standardmäßig nicht im Browser eingebaut. Ihr Code und die Informationen müssen von irgendwo im Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir besprochen, was client-seitige JavaScript-APIs sind und wie sie sich auf die JavaScript-Sprache beziehen. Lassen Sie uns dies zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools hineinpassen:

- JavaScript — Eine in Browser eingebettete Skriptsprache auf hoher Ebene, die es Ihnen ermöglicht, Funktionen auf Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen verfügbar ist, wie z.B. [Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction).
- Browser-APIs — Konstrukte, die im Browser eingebaut sind und auf der JavaScript-Sprache aufbauen, um Ihnen die Implementierung von Funktionen zu erleichtern.
- Drittanbieter-APIs — Konstrukte, die in Plattformen von Drittanbietern (z. B. Disqus, Facebook) eingebaut sind und es Ihnen ermöglichen, einige der Funktionen dieser Plattformen auf Ihren eigenen Webseiten zu nutzen (zum Beispiel, um Ihre Disqus-Kommentare auf einer Webseite anzuzeigen).
- JavaScript-Bibliotheken — In der Regel eines oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) enthalten, die Sie Ihrer Webseite hinzufügen können, um das Schreiben von gängigen Funktionen zu beschleunigen oder zu erleichtern. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt nach Bibliotheken. JavaScript-Frameworks (z. B. Angular und Ember) sind in der Regel Pakete von HTML, CSS, JavaScript und anderen Technologien, die Sie installieren und dann verwenden, um eine Webanwendung von Grund auf neu zu schreiben. Der Hauptunterschied zwischen einer Bibliothek und einem Framework ist die „Umkehrung der Kontrolle“. Beim Aufruf einer Methode aus einer Bibliothek hat der Entwickler die Kontrolle. Bei einem Framework wird die Kontrolle umgekehrt: Das Framework ruft den Code des Entwicklers auf.

## Was können APIs tun?

In modernen Browsern gibt es eine große Anzahl von APIs, die Ihnen ermöglichen, eine Vielzahl von Dingen in Ihrem Code zu tun. Sie können dies sehen, indem Sie sich die [MDN APIs-Indexseite](/de/docs/Web/API) ansehen.

### Häufige Browser-APIs

Besonders wichtig sind die häufigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul genauer behandeln werden):

- **APIs zur Manipulation von Dokumenten**, die im Browser geladen sind. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren — HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder ein neuer Inhalt angezeigt wird, ist das beispielsweise das DOM in Aktion. Mehr über diese Arten von APIs erfahren Sie in der [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite eigenständig zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat enorme Auswirkungen auf die Leistung und das Verhalten von Websites gehabt — wenn Sie nur eine Aktienliste oder eine Liste verfügbarer neuer Geschichten aktualisieren müssen, indem Sie dies sofort tun können, ohne die gesamte Seite erneut vom Server laden zu müssen, kann die Website oder App viel reaktionsschneller und „schneller“ wirken. Die wichtigste API für diesen Zweck ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise immer noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie könnten auch auf den Begriff **AJAX** stoßen, der diese Technik beschreibt. Mehr über solche APIs erfahren Sie im Abschnitt [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests).

- **APIs, um Grafiken zu zeichnen und zu manipulieren** sind in Browsern weit unterstützt — die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixeldaten in einem HTML-{{htmlelement("canvas")}}-Element programmatisch zu aktualisieren, um 2D- und 3D-Szenen zu erstellen. Sie könnten z.B. Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter darauf anwenden, wie Sepia oder Graustufen, indem Sie die Canvas-API verwenden, oder eine komplexe 3D-Szene mit Beleuchtung und Texturen mit WebGL erstellen. Solche APIs werden oft mit APIs kombiniert, die Animationsschleifen erstellen (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und andere, um ständig aktualisierte Szenen wie Cartoons und Spiele zu machen.

- **[Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) erlauben Ihnen, wirklich interessante Dinge mit Multimedia zu machen, wie die Erstellung benutzerdefinierter UI-Steuerelemente zum Abspielen von Audio und Video, das Anzeigen von Textspuren wie Untertitel zusammen mit Ihren Videos, das Erfassen von Videos von Ihrer Webcam zur Manipulation über eine Leinwand (siehe oben) oder das Anzeigen auf dem Computer einer anderen Person in einer Webkonferenz oder das Hinzufügen von Effekten zu Audiotracks (wie Verstärkung, Verzerrung, Schwenken usw.).

- **Geräte-APIs** ermöglichen Ihnen die Interaktion mit der Hardware des Geräts: z. B. die Zugriffs auf das GPS des Geräts, um die Position des Benutzers mit der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu bestimmen.

- **Client-seitige Speicher-APIs** ermöglichen es Ihnen, Daten auf Client-Seite zu speichern, sodass Sie eine App erstellen können, die ihren Zustand zwischen Seitenladungen speichert und möglicherweise sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere verfügbare Optionen, z. B. einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs kommen in großer Vielfalt; einige der beliebteren, die Sie früher oder später wahrscheinlich nutzen werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die Ihnen ermöglichen, alle möglichen Dinge mit Karten auf Ihren Webseiten zu machen.
- Die [Facebook-API-Suite](https://developers.facebook.com/docs/), die es Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihrer App Vorteile zu verschaffen, z.B. durch Bereitstellung des Logins über Facebook-Login, Annahme von In-App-Zahlungen, und Ausrollen gezielter Werbekampagnen usw.
- Die [Telegram-APIs](https://core.telegram.org/api), die Ihnen ermöglichen, Inhalte von Telegram-Kanälen in Ihre Website einzubetten, zusätzlich zur Bereitstellung von Unterstützung für Bots.
- Die [YouTube API](https://developers.google.com/youtube/), die das Einbetten von YouTube-Videos auf Ihrer Website, das Durchsuchen von YouTube, das Erstellen von Playlists und mehr erlaubt.
- Die [Pinterest API](https://developers.pinterest.com/), die Tools bereitstellt, um Pinterest-Boards und Pins zu verwalten, um sie in Ihre Website zu integrieren.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework für den Aufbau von Sprach- und Videofunktionalität in Ihre App, das Senden von SMS/MMS von Ihren Apps und mehr bietet.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentierungsplattform bietet, die in Ihre Website integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des sozialen Netzwerks Mastodon programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die es ermöglicht, über eine Plattform mehrere APIs zu integrieren.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs funktionieren auf leicht unterschiedliche Weise, aber im Allgemeinen haben sie gemeinsame Merkmale und Ähnlichkeiten wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs mithilfe eines oder mehrerer [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects), die als Behälter für die Daten dienen, die die API verwendet (in Objekteigenschaften enthalten), und die Funktionalität, die die API bietet (in Objektmethoden enthalten).

> [!NOTE]
> Wenn Sie nicht bereits damit vertraut sind, wie Objekte funktionieren, sollten Sie unser Modul [JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) durcharbeiten, bevor Sie fortfahren.

Zurück zum Beispiel der Web Audio API — dies ist eine ziemlich komplexe API, die aus einer Reihe von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), das einen [Audio-Graphen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) repräsentiert, der zur Manipulation von Audio verwendet werden kann, das im Browser abgespielt wird, und eine Reihe von Methoden und Eigenschaften bietet, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element repräsentiert, das Klang enthält, den Sie innerhalb des Audiokontextes abspielen und manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios repräsentiert, also das Gerät auf Ihrem Computer, das es tatsächlich ausgeben wird — normalerweise Ihre Lautsprecher oder Kopfhörer.

Also, wie interagieren diese Objekte miteinander? Wenn Sie sich unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), sehen Sie zunächst das folgende HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Wir fügen zuerst ein `<audio>`-Element ein, mit dem wir eine MP3-Datei auf der Seite einbetten. Wir fügen keine Standard-Browser-Steuerelemente ein. Danach fügen wir einen {{htmlelement("button")}} ein, den wir verwenden werden, um die Musik abzuspielen und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ range, das wir verwenden, um die Lautstärke des Tracks während der Wiedergabe anzupassen.

Nun werfen wir einen Blick auf das JavaScript für dieses Beispiel.

Wir beginnen mit der Erstellung einer `AudioContext`-Instanz, in der wir unseren Track manipulieren können:

```js
const audioCtx = new AudioContext();
```

Als nächstes erstellen wir Konstanten, die Referenzen zu unseren `<audio>`, `<button>` und `<input>` Elementen speichern und verwenden die [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)-Methode, um ein `MediaElementAudioSourceNode` zu erstellen, das die Quelle unseres Audios — das `<audio>`-Element, von dem abgespielt wird — repräsentiert:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Im nächsten Schritt fügen wir ein paar Ereignishandler ein, die beim Drücken der Taste zwischen Abspielen und Anhalten wechseln und das Display zurück zum Anfang setzen, wenn das Lied zu Ende ist:

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
> Einige von Ihnen werden vielleicht bemerken, dass die `play()`- und `pause()`-Methoden, die verwendet werden, um den Track abzuspielen und anzuhalten, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die unterschiedlich, aber eng verwandt ist.

Als Nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mithilfe der [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain)-Methode, das zur Anpassung der Lautstärke des durchgeleiteten Audios verwendet werden kann, und erstellen einen weiteren Ereignishandler, der den Wert der Verstärkung des Audiographen (Lautstärke) ändert, wann immer der Schiebereglerwert geändert wird:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das letzte, was getan werden muss, damit dies funktioniert, ist, die verschiedenen Knoten im Audiograph miteinander zu verbinden. Dies geschieht durch die Verwendung der [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect)-Methode, die auf jeden Knotentyp verfügbar ist:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio startet in der Quelle, die dann mit dem Verstärkerknoten verbunden wird, damit die Lautstärke des Audios angepasst werden kann. Der Verstärkerknoten wird dann mit dem Zielknoten verbunden, damit der Klang auf Ihrem Computer abgespielt werden kann (die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft repräsentiert, was auch immer das Standard-[`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) auf der Hardware Ihres Computers ist, z. B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt der API ist. Bei der Web Audio API ist dies ziemlich einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jegliche Audiomanipulation durchzuführen.

Das Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — seine Funktionen sind in der Regel am [`Document`](/de/docs/Web/API/Document)-Objekt zu finden oder in einer Instanz eines HTML-Elements, das Sie in irgendeiner Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas-API](/de/docs/Web/API/Canvas_API) erfordert ebenfalls das Abrufen eines Kontextobjekts zur Verwendung für Manipulationen, obwohl es sich in diesem Fall um einen grafischen Kontext anstelle eines Audiokontextes handelt. Sein Kontextobjekt wird erstellt, indem Sie eine Referenz auf das {{htmlelement("canvas")}}-Element abrufen, auf dem Sie zeichnen möchten, und dann die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufrufen:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf der Leinwand tun möchten, wird dann durch Aufrufen von Eigenschaften und Methoden des Kontextobjekts erreicht (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist), zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in Aktion in unserem [Bouncing Balls Demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) sehen (schauen Sie sich auch die [Live-Version](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html) an).

### Sie verwenden oft Ereignisse, um Zustandsänderungen zu behandeln

Wir haben Ereignisse bereits früher im Kurs im Artikel [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) besprochen, der detailliert darlegt, was client-seitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie noch nicht mit der Funktionsweise client-seitiger Web-API-Ereignisse vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten zumindest einige. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unseren Referenzmaterialien in separaten „Ereignishandler“-Abschnitten aufgeführt.

Wir haben bereits im obigen Beispiel der Web Audio API eine Reihe von Ereignishandlern in Aktion gesehen:

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

### Sie haben zusätzliche Sicherheitsmechanismen, wo angebracht

Web-API-Funktionen unterliegen denselben Sicherheitsüberlegungen wie JavaScript und andere Web-Technologien (zum Beispiel [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), jedoch haben sie manchmal zusätzliche Sicherheitsmechanismen integriert. Zum Beispiel funktionieren einige der moderneren Web-APIs nur auf Seiten, die über HTTPS bereitgestellt werden, da sie potenziell sensible Daten übertragen (Beispiele sind [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus verlangen einige Web-APIs die Zustimmung des Nutzers, bevor sie aktiviert werden. Ein Beispiel ist die [Notifications API](/de/docs/Web/API/Notifications_API), die über ein Pop-up-Dialogfenster die Erlaubnis einholt:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogs, der von der Notifications API des Browsers bereitgestellt wird. Die Website 'mdn.github.io' fragt nach Berechtigungen, um Benachrichtigungen an den Benutzer-Agenten zu senden, mit einem X zum Schließen des Dialogs und einem Dropdown-Menü mit Optionen, wobei 'Immer Benachrichtigungen empfangen' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) APIs unterliegen einem Sicherheitsmechanismus, der als [autoplay policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) bezeichnet wird — dies bedeutet im Grunde, dass Sie nicht automatisch Audio abspielen können, wenn eine Seite geladen wird — Sie müssen es Ihren Benutzern ermöglichen, die Audiowiedergabe durch ein Steuerelement wie eine Schaltfläche zu initiieren. Dies wird getan, weil automatisch abgespieltes Audio in der Regel sehr störend ist und wir unseren Nutzern wirklich nicht zumuten sollten, es zu ertragen.

> [!NOTE]
> Abhängig davon, wie streng der Browser ist, können solche Sicherheitsmechanismen sogar dazu führen, dass das Beispiel lokal nicht funktioniert, d.h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens funktionierte unser Web Audio API-Beispiel lokal nicht in Google Chrome — wir mussten es auf GitHub hochladen, damit es funktionierte.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie damit in Ihrem JavaScript-Code machen können. Sie sind wahrscheinlich gespannt darauf, tatsächlich unterhaltsame Dinge mit spezifischen APIs zu tun, also los geht's! Als Nächstes schauen wir uns Video- und Audio-APIs an.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
