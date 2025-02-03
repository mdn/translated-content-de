---
title: Einführung in Web-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Zuerst werden wir uns APIs aus einer höheren Perspektive ansehen — was sie sind, wie sie funktionieren, wie man sie in Ihrem Code verwendet und wie sie strukturiert sind. Wir werden auch einen Blick darauf werfen, welche Hauptklassen von APIs es gibt und welche Einsatzmöglichkeiten sie haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und grundlegende API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Web-APIs sind und was Sie mit ihnen tun können.</li>
          <li>Wie APIs verwendet werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Application Programming Interfaces (APIs) sind Konstrukte, die in Programmiersprachen verfügbar gemacht werden, um Entwicklern zu ermöglichen, komplexe Funktionalität einfacher zu erstellen. Sie abstrahieren den komplexeren Code von Ihnen und bieten stattdessen eine einfachere Syntax zur Verwendung.

Ein Beispiel aus der realen Welt: Denken Sie an die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder anderen Wohnräumen. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose, und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen — das wäre wirklich ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Mehrfachsteckdosen sind in zwei verschiedene Steckdosen eingesteckt. Jede Mehrfachsteckdose hat einen Steckplatz oben und an der Vorderseite. In jede Mehrfachsteckdose sind zwei Stecker eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

Auf die gleiche Weise, wenn Sie z.B. 3D-Grafiken programmieren möchten, ist es viel einfacher, dies mit einer API zu tun, die in einer höhersprachlichen Sprache wie JavaScript oder Python geschrieben ist, anstatt direkt Low-Level-Code (z.B. C oder C++) zu schreiben, der direkt die GPU oder andere Grafikfunktionen des Computers kontrolliert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "API-Glossareintrag")}} für weitere Beschreibungen.

### APIs in client-seitigem JavaScript

Client-seitiges JavaScript hat insbesondere viele APIs zur Verfügung — diese sind nicht Teil der JavaScript-Sprache selbst, sondern auf der Kernsprache JavaScript aufgebaut, um Ihnen zusätzliche Superkräfte zur Verwendung in Ihrem JavaScript-Code zu bieten. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus dem Browser und der umgebenden Computerumgebung bereitstellen und damit nützliche komplexe Dinge tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstruktionen, um Audio im Browser zu manipulieren — eine Audiospur zu nehmen, ihre Lautstärke zu ändern, Effekte darauf anzuwenden usw. Im Hintergrund verwendet der Browser tatsächlich einige komplexe Low-Level-Codes (z.B. C++ oder Rust), um die eigentliche Audiobearbeitung durchzuführen. Aber auch hier wird diese Komplexität durch die API vor Ihnen abstrahiert.
- **Third-Party-APIs** sind standardmäßig nicht im Browser eingebaut, und Sie müssen im Allgemeinen ihren Code und ihre Informationen von irgendwo im Web abrufen. Zum Beispiel erlaubt die [Google Maps API](https://developers.google.com/maps/documentation/javascript) Ihnen Dinge wie das Anzeigen einer interaktiven Karte zu Ihrem Büro auf Ihrer Website zu tun. Sie stellt einen speziellen Satz von Konstruktionen bereit, die Sie verwenden können, um den Google Maps-Service abzufragen und spezifische Informationen zurückzugeben.

![Ein Screenshot des Browsers mit der Startseite des Firefox-Browsers geöffnet. Es gibt standardmäßig im Browser eingebaute APIs. Drittanbieter-APIs sind standardmäßig nicht im Browser eingebaut. Ihr Code und Informationen müssen von irgendwo im Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir darüber gesprochen, was client-seitige JavaScript-APIs sind und wie sie sich zur JavaScript-Sprache verhalten. Lassen Sie uns dies zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools hineinpassen:

- JavaScript — Eine höhersprachliche Skriptsprache, die in Browsern integriert ist und Ihnen ermöglicht, Funktionalität auf Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen wie [Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction) verfügbar ist.
- Browser-APIs — Konstrukte, die in den Browser integriert sind und auf der JavaScript-Sprache aufbauen, um es Ihnen zu ermöglichen, Funktionalität einfacher zu implementieren.
- Drittanbieter-APIs — Konstrukte, die in Drittanbieter-Plattformen (z.B. Disqus, Facebook) eingebaut sind, die es Ihnen erlauben, einige der Funktionalitäten dieser Plattform auf Ihren eigenen Webseiten zu nutzen (z.B. Ihre Disqus-Kommentare auf einer Webseite anzeigen).
- JavaScript-Bibliotheken — Üblicherweise bestehen sie aus einem oder mehreren JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) enthalten, die Sie auf Ihre Webseite anhängen können, um das Schreiben von gewöhnlicher Funktionalität zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt von Bibliotheken sind JavaScript-Frameworks (z.B. Angular und Ember), die in der Regel Pakete aus HTML, CSS, JavaScript und anderen Technologien enthalten, die Sie installieren und dann verwenden, um eine komplette Webanwendung von Grund auf neu zu schreiben. Der Hauptunterschied zwischen einer Bibliothek und einem Framework ist die "Umkehrung der Kontrolle". Wenn ein Methodenaufruf aus einer Bibliothek erfolgt, hat der Entwickler die Kontrolle. Bei einem Framework ist die Kontrolle umgekehrt: Das Framework ruft den Code des Entwicklers auf.

## Was können APIs tun?

Es gibt eine riesige Anzahl von APIs in modernen Browsern, die es Ihnen ermöglichen, in Ihrem Code eine große Vielfalt von Dingen zu tun. Dies können Sie sehen, indem Sie einen Blick auf die [MDN APIs-Indexseite](/de/docs/Web/API) werfen.

### Häufige Browser-APIs

Insbesondere die häufigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul ausführlicher behandeln werden), sind:

- **APIs zum Manipulieren von Dokumenten**, die im Browser geladen sind. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren — HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden usw. Immer wenn ein Popup-Fenster auf einer Seite erscheint oder neuer Inhalt angezeigt wird, ist das der DOM in Aktion. Erfahren Sie mehr über diese Arten von APIs in der [Einführung in DOM-Skripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite allein zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites — wenn Sie nur eine Aktienliste oder eine Liste verfügbarer neuer Geschichten aktualisieren müssen, es sofort zu tun, ohne die gesamte Seite vom Server neu laden zu müssen, lässt die Seite oder App viel reaktionsfreudiger und "snappiger" wirken. Die Haupt-API, die dafür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie werden möglicherweise auch den Begriff **AJAX** hören, der diese Technik beschreibt. Erfahren Sie mehr über solche APIs in [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- **APIs zum Zeichnen und Manipulieren von Grafiken** werden in Browsern weit unterstützt — die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixelinformationen, die in einem HTML `<canvas>` enthalten sind, zu programmieren, um 2D- und 3D-Szenen zu erstellen. Beispielsweise könnten Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Leinwand importieren und einen Filter darauf anwenden, z.B. Sepia oder Graustufen mit der Canvas API, oder eine komplexe 3D-Szene mit Beleuchtung und Texturen mit WebGL erstellen. Solche APIs werden oft mit APIs zum Erstellen von Animationsschleifen kombiniert (z.B. [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen, um ständig aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z.B. benutzerdefinierte UI-Steuerelemente für das Abspielen von Audio und Video zu erstellen, Textspuren wie Untertitel und Untertitel zusammen mit Ihren Videos anzuzeigen, Video von Ihrer Webcam zu erfassen, um es über eine Leinwand zu manipulieren (siehe oben) oder auf einem anderen Computer in einer Web-Konferenz anzuzeigen, oder Effekte auf Tonspuren hinzuzufügen (wie Verstärkung, Verzerrung, Panning usw.).
- **Geräte-APIs** ermöglichen es Ihnen, mit der Hardware des Geräts zu interagieren: zum Beispiel Zugriff auf das GPS des Geräts, um die Position des Benutzers mithilfe der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu finden.
- **Client-seitige Speicher-APIs** ermöglichen es Ihnen, Daten auf der Client-Seite zu speichern, sodass Sie eine App erstellen können, die ihren Zustand zwischen Seitenaufrufen speichert und vielleicht sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere Optionen, z.B. einfache Name/Wert-Speicher mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbankspeicher mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs gibt es in einer großen Vielfalt; einige der bekannteren, die Sie früher oder später verwenden werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen ermöglichen, allerlei Dinge mit Karten auf Ihren Webseiten zu tun.
- Die [Facebook-API-Suite](https://developers.facebook.com/docs/), die Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu verbessern, zum Beispiel indem Sie App-Login über Facebook-Login anbieten, In-App-Zahlungen akzeptieren, gezielte Werbekampagnen starten usw.
- Die [Telegram-APIs](https://core.telegram.org/api), die es Ihnen ermöglichen, Inhalte von Telegram-Kanälen auf Ihrer Website einzubetten, zusätzlich zur Bereitstellung von Unterstützung für Bots.
- Die [YouTube API](https://developers.google.com/youtube/), die Ihnen ermöglicht, YouTube-Videos auf Ihrer Seite einzubetten, auf YouTube zu suchen, Playlists zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Werkzeuge zum Verwalten von Pinterest-Boards und Pins bereitstellt, um sie in Ihrer Website einzuschließen.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework zum Einbauen von Sprach- und Videoanruffunktionen in Ihre App bereitstellt, SMS/MMS von Ihren Apps senden und mehr.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentierungsplattform bereitstellt, die in Ihre Seite integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Funktionen des Mastodon-Sozialnetzwerks programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die das Integrieren mehrerer APIs über eine Plattform ermöglicht.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs funktionieren auf leicht unterschiedliche Weise, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen, wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs mithilfe von einem oder mehreren [JavaScript-Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects), die als Container für die Daten der API dienen (enthalten in den Objekteigenschaften) und die Funktionalitäten der API bereitstellen (enthalten in den Objektmethoden).

> [!NOTE]
> Wenn Sie nicht bereits vertraut damit sind, wie Objekte funktionieren, sollten Sie unser Modul zu [JavaScript-Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) durcharbeiten, bevor Sie fortfahren.

Schauen wir uns das Beispiel der Web Audio API an — dies ist eine ziemlich komplexe API, die aus einer Anzahl von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), das einen [Audiografen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) darstellt, der verwendet werden kann, um Audio zu manipulieren, das im Browser abgespielt wird, und hat eine Reihe von Methoden und Eigenschaften, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), das ein {{htmlelement("audio")}}-Element darstellt, das Sie im Audiokontext abspielen und manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das Ziel des Audios darstellt, also das Gerät auf Ihrem Computer, das es tatsächlich ausgeben wird — normalerweise Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte also? Wenn Sie sich unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), sehen Sie zunächst folgendes HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Wir fügen zunächst ein `<audio>`-Element ein, mit dem wir eine MP3-Datei auf der Seite einbinden. Wir fügen keine Standard-Browser-Steuerelemente hinzu. Als nächstes fügen wir eine {{htmlelement("button")}}-Schaltfläche hinzu, mit der wir die Musik abspielen und stoppen können, und ein {{htmlelement("input")}}-Element des Typs "range", mit dem wir die Lautstärke der Spur während des Abspielens anpassen können.

Schauen wir uns als Nächstes das JavaScript für dieses Beispiel an.

Wir beginnen damit, eine `AudioContext`-Instanz zu erstellen, innerhalb derer unsere Spur manipuliert werden kann:

```js
const audioCtx = new AudioContext();
```

Als Nächstes erstellen wir Konstanten, die Referenzen zu unseren `<audio>`, `<button>`, und `<input>`-Elementen speichern und verwenden die Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource), um ein `MediaElementAudioSourceNode` zu erstellen, das die Quelle unseres Audios darstellt — das `<audio>`-Element, das abgespielt wird:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als Nächstes fügen wir ein paar Ereignishandler hinzu, die dafür sorgen, dass zwischen Abspielen und Pause gewechselt wird, wenn die Schaltfläche gedrückt wird, und die Anzeige zurück auf den Anfang setzen, wenn die Musik fertig gespielt wurde:

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
> Einige von Ihnen werden vielleicht bemerken, dass die Methoden `play()` und `pause()`, die verwendet werden, um die Spur abzuspielen und zu pausieren, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die anders, aber eng verwandt ist.

Als Nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mit der Methode [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain), das verwendet werden kann, um die Lautstärke des Audios zu ändern, das durch sie geleitet wird, und einen weiteren Ereignishandler, der den Wert der Verstärkung (Lautstärke) des Audiografen jedes Mal ändert, wenn der Schiebereglerwert geändert wird:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das Letzte, was zu tun ist, damit dies funktioniert, ist, die verschiedenen Knoten im Audiografen zu verbinden, was mit der Methode [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect) möglich ist, die auf jedem Knotentyp verfügbar ist:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio beginnt in der Quelle, die dann mit dem Gain-Knoten verbunden wird, damit die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann mit dem Zielknoten verbunden, damit der Ton auf Ihrem Computer abgespielt werden kann (die Eigenschaft [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) stellt das dar, was auch immer das Standard-[`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) ist, das auf der Hardware Ihres Computers verfügbar ist, z.B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt für die API ist. Bei der Web Audio API ist dies ziemlich einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jegliche Audiobearbeitung durchzuführen.

Die Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — ihre Funktionen hängen in der Regel vom [`Document`](/de/docs/Web/API/Document)-Objekt ab, oder einer Instanz eines HTML-Elements, das Sie in irgendeiner Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) basiert ebenfalls darauf, ein Kontextobjekt zu erhalten, das für Manipulationen verwendet wird, obwohl es sich in diesem Fall um einen grafischen Kontext und nicht um einen Audiokontext handelt. Sein Kontextobjekt wird erstellt, indem Sie eine Referenz auf das {{htmlelement("canvas")}}-Element erhalten, auf dem Sie zeichnen möchten, und dann seine Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufrufen:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf der Leinwand tun möchten, wird dann durch Aufrufen von Eigenschaften und Methoden des Kontextobjekts (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist) erreicht, zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in Aktion in unserem [Bouncing Balls-Demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (sehen Sie es [live](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)) sehen.

### Sie verwenden oft Ereignisse, um Änderungen des Zustandes zu behandeln

Wir haben schon früher im Kurs Ereignisse behandelt, in unserem Artikel [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events), der im Detail darauf eingeht, was client-seitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie nicht bereits mit der Funktionsweise von client-seitigen Web-API-Ereignissen vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten mindestens ein paar. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unserem Referenzmaterial in separaten Abschnitten "Ereignishandler" aufgeführt.

Wir haben bereits eine Anzahl von Ereignishandlern in unserer Web Audio API-Beispiel oben gesehen:

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

### Sie haben zusätzliche Sicherheitsmechanismen, wo es angemessen ist

Web-API-Funktionen unterliegen den gleichen Sicherheitsüberlegungen wie JavaScript und andere Webtechnologien (z.B. [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), haben aber manchmal zusätzliche Sicherheitsmechanismen. Zum Beispiel funktionieren einige der moderneren Web-APIs nur auf über HTTPS bereitgestellten Seiten, da sie potenziell sensible Daten übertragen (Beispiele sind [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus erfordern einige Web-APIs, dass die Berechtigung durch den Benutzer erteilt wird, sobald in Ihrem Code Aufrufe an sie gemacht werden. Ein Beispiel dafür ist die [Notifications API](/de/docs/Web/API/Notifications_API), die die Berechtigung mittels eines Pop-up-Dialogfeldes anfragt:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogfeldes, das von der Notifications API des Browsers bereitgestellt wird. Die Website 'mdn.github.io' fragt nach Berechtigungen, um Benachrichtigungen an das Benutzer-Agent zu senden, mit einem X, um den Dialog zu schließen, und einem Dropdown-Menü mit Optionen, wobei 'Immer Benachrichtigungen erhalten' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) APIs unterliegen einem Sicherheitsmechanismus namens [Autoplay-Policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) — das bedeutet im Grunde genommen, dass Sie Audio nicht automatisch abspielen können, wenn eine Seite geladen wird — Sie müssen Ihren Benutzern erlauben, das Abspielen von Audio über ein Steuerelement wie eine Schaltfläche zu initiieren. Dies wird getan, weil automatisch abgespieltes Audio normalerweise wirklich irritierend ist, und wir sollten unsere Benutzer wirklich nicht dem aussetzen.

> [!NOTE]
> Abhängig davon, wie streng der Browser ist, könnten solche Sicherheitsmechanismen sogar dazu führen, dass das Beispiel lokal nicht funktioniert, d.h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens würde unser Web Audio API-Beispiel lokal nicht auf Google Chrome funktionieren — wir mussten es auf GitHub hochladen, bevor es funktionierte.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich gespannt darauf, tatsächlich einige lustige Dinge mit spezifischen APIs zu tun, also los geht's! Als Nächstes werden wir uns Video- und Audio-APIs ansehen.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
