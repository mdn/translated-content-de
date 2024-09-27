---
title: Einführung in Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
l10n:
  sourceCommit: aad04866a932d9b01c4048334e7ddebcf60206b7
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

Zunächst werden wir APIs auf hoher Ebene betrachten — was sie sind, wie sie funktionieren, wie man sie in Ihrem Code verwendet und wie sie strukturiert sind. Wir werden uns auch ansehen, welche Hauptklassen von APIs es gibt und welche Verwendungszwecke sie haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Grundbausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit APIs zu erlangen, was sie leisten können und wie sie in Ihrem Code verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Application Programming Interfaces (APIs) sind Konstruktionen, die in Programmiersprachen verfügbar sind und es Entwicklern ermöglichen, komplexe Funktionalitäten einfacher zu erstellen. Sie abstrahieren komplexeren Code von Ihnen und bieten eine einfachere Syntax.

Als ein Beispiel aus der realen Welt, denken Sie an die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder einer anderen Behausung. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen — dies wäre sehr ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind an zwei verschiedene Steckdosen angeschlossen. Jede Mehrfachsteckdose hat je einen Steckplatz an der Ober- und Vorderseite. Jeweils zwei Stecker sind in jede Mehrfachsteckdose eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In gleicher Weise, wenn Sie zum Beispiel 3D-Grafiken programmieren möchten, ist es viel einfacher, dies mit einer API in einer höheren Programmiersprache wie JavaScript oder Python zu tun, anstatt direkt niedrigleveligen Code (etwa in C oder C++) zu schreiben, der die GPU des Computers oder andere Grafikfunktionen direkt steuert.

> [!NOTE]
> Siehe auch den [API-Glossareintrag](/de/docs/Glossary/API) für eine weitere Beschreibung.

### APIs in Client-seitigem JavaScript

Insbesondere Client-seitiges JavaScript verfügt über viele verfügbare APIs — diese sind nicht Teil der JavaScript-Sprache selbst, sondern sie basieren auf der Kern-JavaScript-Sprache und bieten Ihnen zusätzliche Superkräfte für die Verwendung in Ihrem JavaScript-Code. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus dem Browser und seiner Umgebung abrufen und nützliche komplexe Dinge damit tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser — sie nimmt einen Audiotrack, ändert dessen Lautstärke, wendet Effekte darauf an usw. Im Hintergrund verwendet der Browser tatsächlich einige komplexe niedriglevelige Codes (z.B. C++ oder Rust), um die eigentliche Audioverarbeitung durchzuführen. Aber auch hier wird diese Komplexität von Ihnen durch die API abstrahiert.
- **Drittanbieter-APIs** sind nicht standardmäßig im Browser integriert, und Sie müssen im Allgemeinen deren Code und Informationen von irgendwo im Web abrufen. Beispielsweise ermöglicht die [Google Maps API](https://developers.google.com/maps/documentation/javascript) es Ihnen, eine interaktive Karte zu Ihrem Büro auf Ihrer Website anzuzeigen. Sie bietet einen speziellen Satz von Konstrukten, die Sie verwenden können, um den Google Maps-Dienst abzufragen und spezifische Informationen zurückzugeben.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers geöffnet. Es gibt APIs, die standardmäßig in den Browser integriert sind. Drittanbieter-APIs sind nicht standardmäßig in den Browser integriert. Deren Code und Informationen müssen von irgendwo im Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir darüber gesprochen, was Client-seitige JavaScript-APIs sind und wie sie sich auf die JavaScript-Sprache beziehen. Lassen Sie uns das zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools hineinpassen:

- JavaScript — Eine Hochsprache, die in Browsern eingebaut ist und es Ihnen ermöglicht, Funktionalität auf Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierungsumgebungen verfügbar ist, wie zum Beispiel [Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction).
- Browser-APIs — Konstrukte, die im Browser eingebaut sind und auf der JavaScript-Sprache aufsetzen und Ihnen ermöglichen, Funktionalitäten einfacher zu implementieren.
- Drittanbieter-APIs — Konstrukte, die in Drittanbieterplattformen (z.B. Disqus, Facebook) eingebaut sind und es Ihnen ermöglichen, einige dieser Plattform-Funktionen in Ihre eigenen Webseiten zu integrieren (z.B., Ihre Disqus-Kommentare auf einer Webseite anzeigen).
- JavaScript-Bibliotheken — In der Regel eine oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions) enthalten, die Sie Ihrer Webseite hinzufügen können, um das Schreiben allgemeiner Funktionalität zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt über Bibliotheken, JavaScript-Frameworks (z.B. Angular und Ember) tendieren dazu, Pakete aus HTML, CSS, JavaScript und anderen Technologien zu sein, die Sie installieren und dann nutzen, um eine vollständige Webanwendung von Grund auf zu entwickeln. Der Hauptunterschied zwischen einer Bibliothek und einem Framework ist die "Umkehrung der Steuerung". Beim Aufrufen einer Methode aus einer Bibliothek hat der Entwickler die Kontrolle. Bei einem Framework wird die Kontrolle umgekehrt: Das Framework ruft den Code des Entwicklers auf.

## Was können APIs leisten?

Es gibt eine große Anzahl von APIs, die in modernen Browsern verfügbar sind und mit denen Sie eine Vielzahl von Dingen in Ihrem Code tun können. Sie können dies erkennen, indem Sie sich die [MDN APIs-Indexseite](/de/docs/Web/API) ansehen.

### Häufige Browser-APIs

Insbesondere die häufigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul ausführlicher behandeln werden), sind:

- **APIs zum Manipulieren von Dokumenten**, die in den Browser geladen werden. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren — HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn ein Popup-Fenster auf einer Seite erscheint oder ein neuer Inhalt angezeigt wird, ist das zum Beispiel das DOM in Aktion. Erfahren Sie mehr über diese Arten von API in [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite selbständig zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites — wenn Sie nur eine Aktienliste oder eine Liste verfügbarer neuer Stories aktualisieren müssen, dies sofort zu tun, ohne die gesamte Seite vom Server neu laden zu müssen, kann die Site oder App viel reaktionsschneller und "flotter" wirken. Die Haupt-API, die hierfür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie werden möglicherweise auch auf den Begriff **Ajax** stoßen, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- **APIs zum Zeichnen und Manipulieren von Grafiken** sind im Browser weit verbreitet — die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), mit denen Sie die Pixeldaten, die in einem HTML {{htmlelement("canvas")}}-Element enthalten sind, programmgesteuert aktualisieren können, um 2D- und 3D-Szenen zu erstellen. Zum Beispiel könnten Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter wie Sepia oder Graustufe mit der Canvas-API anwenden oder mit WebGL eine komplexe 3D-Szene mit Beleuchtung und Texturen erstellen. Solche APIs werden oft mit APIs für die Erstellung von Animationsschleifen (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen kombiniert, um ständig aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen interessante Dinge mit Multimedia zu tun, wie z.B. benutzerdefinierte Benutzeroberflächensteuerungen zum Abspielen von Audio und Video zu erstellen, Textspuren wie Bildunterschriften und Untertitel zusammen mit Ihren Videos anzuzeigen, Videos von Ihrer Webcam zur Manipulation über eine Leinwand zu erfassen (siehe oben) oder auf dem Computer eines anderen in einer Webkonferenz anzuzeigen oder Effekte auf Audiotracks (wie Verstärkung, Verzerrung, Panorama usw.) anzuwenden.
- **Geräte-APIs** ermöglichen es Ihnen, mit der Hardware des Geräts zu interagieren: Zum Beispiel den Zugriff auf das GPS des Geräts, um die Position des Benutzers mit der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu finden.
- **Client-seitige Speicher-APIs** ermöglichen es Ihnen, Daten auf der Client-Seite zu speichern, sodass Sie eine App erstellen können, die ihren Status zwischen Seitenladevorgängen speichert und möglicherweise sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere Optionen zur Verfügung, z.B. einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs kommen in einer großen Vielfalt vor; einige der populäreren, von denen Sie früher oder später Gebrauch machen werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen ermöglichen, alle möglichen Dinge mit Karten auf Ihren Webseiten zu tun.
- Die [Facebook-Suite von APIs](https://developers.facebook.com/docs/), die es Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu Ihrem Vorteil in Ihrer App zu nutzen, z.B. durch die Bereitstellung von App-Logins über Facebook-Login, das Akzeptieren von In-App-Zahlungen, das Ausrollen gezielter Werbekampagnen usw.
- Die [Telegram-APIs](https://core.telegram.org/api), mit denen Sie Inhalte von Telegram-Kanälen auf Ihrer Website einbetten und Unterstützung für Bots bereitstellen können.
- Die [YouTube API](https://developers.google.com/youtube/), die es Ihnen ermöglicht, YouTube-Videos auf Ihrer Website einzubetten, YouTube zu durchsuchen, Wiedergabelisten zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Tools bereitstellt, um Pinterest-Boards und -Pins zu verwalten, um sie in Ihre Website zu integrieren.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework zum Erstellen von Sprach- und Videoanruffunktionalität in Ihrer App, dem Senden von SMS/MMS von Ihren Apps und mehr bietet.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentierungsplattform bereitstellt, die in Ihre Site integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des sozialen Netzwerks Mastodon programmgesteuert zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die die Integration mehrerer APIs über eine Plattform ermöglicht.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs arbeiten in leicht unterschiedlichen Wegen, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen, wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs unter Verwendung eines oder mehrerer [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects), die als Container für die Daten dienen, die die API verwendet (enthalten in den Objekteigenschaften) und die Funktionalität, die die API bereitstellt (enthalten in den Methoden des Objekts).

> [!NOTE]
> Falls Sie nicht bereits damit vertraut sind, wie Objekte funktionieren, sollten Sie unser [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects) Modul durcharbeiten, bevor Sie weitermachen.

Kehren wir zum Beispiel der Web Audio API zurück — dies ist eine ziemlich komplexe API, die aus einer Reihe von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), das einen [Audio-Graphen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) repräsentiert, der zur Manipulation von Audio im Browser verwendet werden kann und über eine Reihe von Methoden und Eigenschaften verfügt, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element repräsentiert, das den Sound enthält, den Sie im Audio-Kontext abspielen und manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios darstellt, d.h. das Gerät auf Ihrem Computer, das es tatsächlich ausgibt — in der Regel Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte miteinander? Wenn Sie unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), sehen Sie zunächst das folgende HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Wir binden zunächst ein `<audio>`-Element ein, mit dem wir eine MP3-Datei in die Seite einbetten. Wir fügen keine standardmäßigen Browser-Steuerelemente hinzu. Dann fügen wir einen {{htmlelement("button")}} hinzu, den wir verwenden, um die Musik abzuspielen und zu stoppen, und ein {{htmlelement("input")}}-Element vom Typ Bereich, mit dem wir die Lautstärke des Tracks anpassen, während er spielt.

Schauen wir uns als Nächstes den JavaScript-Code für dieses Beispiel an.

Wir beginnen damit, eine `AudioContext`-Instanz zu erstellen, in der wir unseren Track manipulieren können:

```js
const audioCtx = new AudioContext();
```

Als Nächstes erstellen wir Konstanten, die Verweise auf unsere `<audio>`, `<button>` und `<input>`-Elemente speichern, und verwenden die [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)-Methode, um eine `MediaElementAudioSourceNode` zu erstellen, die die Quelle unseres Audios darstellt — das `<audio>`-Element, das abgespielt wird:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als Nächstes fügen wir ein paar Ereignishandler hinzu, die zwischen Abspielen und Pause wechseln, wenn die Schaltfläche gedrückt wird, und die Anzeige zurück zum Anfang setzen, wenn das Lied zu Ende gespielt wurde:

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
> Einige von Ihnen werden bemerken, dass die `play()`- und `pause()`-Methoden, die verwendet werden, um den Track abzuspielen und zu pausieren, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die zwar unterschiedlich, aber eng verwandt ist.

Als Nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mit der [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain)-Methode, das verwendet werden kann, um die Lautstärke des durchgeführten Audios anzupassen, und erstellen einen weiteren Ereignishandler, der den Wert der Verstärkung (Lautstärke) des Audiographen bei jeder Änderung des Schiebereglers ändert:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das letzte, was zu tun ist, um dies zum Funktionieren zu bringen, besteht darin, die verschiedenen Knoten im Audiographen zu verbinden, was mit der [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect)-Methode möglich ist, die bei jedem Knotentyp zur Verfügung steht:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio beginnt in der Quelle, die dann mit dem Gain-Knoten verbunden wird, um die Audio-Lautstärke einstellen zu können. Der Gain-Knoten wird dann mit dem Zielknoten verbunden, sodass der Sound auf Ihrem Computer abgespielt werden kann (die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) Eigenschaft repräsentiert, was auch immer der Standard [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) ist, der auf Ihrer Computerhardware verfügbar ist, z.B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt für die API ist. In der Web Audio API ist dies ziemlich einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jegliche Audiomanipulation durchzuführen.

Die Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — ihre Funktionen sind im Allgemeinen am [`Document`](/de/docs/Web/API/Document)-Objekt zu finden oder an einer Instanz eines HTML-Elements, das Sie in irgendeiner Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) erfordert ebenfalls das Abrufen eines Kontextobjekts, um Dinge zu manipulieren, obwohl es in diesem Fall ein grafischer Kontext anstelle eines Audiokontexts ist. Ihr Kontextobjekt wird erstellt, indem Sie eine Referenz auf das {{htmlelement("canvas")}}-Element erhalten, auf dem Sie zeichnen möchten, und dann dessen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode aufrufen:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf der Leinwand tun möchten, wird dann durch Aufrufe der Eigenschaften und Methoden des Kontextobjekts erreicht (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist), zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in unserer [springende Bälle Demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (siehe sie auch [live](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)) in Aktion sehen.

### Sie verwenden oft Ereignisse, um Zustandsänderungen zu handhaben

Wir haben bereits im Kurs in unserem Artikel [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) besprochen, der im Detail erklärt, was Client-seitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie nicht bereits mit der Funktionsweise von Client-seitigen Web API-Ereignissen vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten zumindest einige. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind normalerweise in unserem Referenzmaterial in separaten "Ereignishandler"-Abschnitten aufgeführt.

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

### Sie haben zusätzliche Sicherheitsmechanismen, wo passend

WebAPI-Funktionen unterliegen denselben Sicherheitsüberlegungen wie JavaScript und andere Webtechnologien (zum Beispiel [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), aber manchmal haben sie zusätzliche Sicherheitsmechanismen implementiert. Einige der moderneren WebAPIs funktionieren beispielsweise nur auf Seiten, die über HTTPS bereitgestellt werden, da sie möglicherweise sensible Daten übertragen (Beispiele sind [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus erfordern einige WebAPIs die Erlaubnis des Benutzers, aktiviert zu werden, sobald Aufrufe von ihnen in Ihrem Code gemacht werden. Als Beispiel fordert die [Notifications API](/de/docs/Web/API/Notifications_API) die Erlaubnis mit einem Popup-Dialogfenster an:

![Ein Screenshot des Benachrichtigungs-Popup-Dialogs, der von der Notifications API des Browsers bereitgestellt wird. Die Website 'mdn.github.io' fragt nach Berechtigungen, um Benachrichtigungen an den Benutzeragenten zu senden, mit einem X zum Schließen des Dialogs und einem Dropdown-Menü mit den Optionen, wobei 'immer Benachrichtigungen erhalten' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) APIs unterliegen einem Sicherheitsmechanismus namens [Autoplay-Policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) — das bedeutet im Wesentlichen, dass Sie Audio nicht automatisch abspielen können, wenn eine Seite geladen wird — Sie müssen Ihren Benutzern erlauben, die Audiowiedergabe über ein Steuerungselement wie eine Schaltfläche zu initiieren. Dies wird durchgeführt, da das automatische Abspielen von Audio normalerweise sehr störend ist und wir unsere Benutzer nicht diesem aussetzen sollten.

> [!NOTE]
> Abhängig davon, wie streng der Browser ist, könnten solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d.h., wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens unseres Web Audio API-Beispiels würde dieses auf Google Chrome nicht lokal funktionieren — wir mussten es zu GitHub hochladen, bevor es funktionieren würde.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich gespannt darauf, tatsächlich einige lustige Dinge mit spezifischen APIs zu machen, also los geht's! Als Nächstes werden wir uns mit der Manipulation von Dokumenten mit dem Document Object Model (DOM) befassen.

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}
