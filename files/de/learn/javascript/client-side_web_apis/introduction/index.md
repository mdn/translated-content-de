---
title: Einführung in Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
l10n:
  sourceCommit: aad04866a932d9b01c4048334e7ddebcf60206b7
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

Zunächst werden wir APIs auf hoher Ebene betrachten — was sie sind, wie sie funktionieren, wie Sie sie in Ihrem Code verwenden können und wie sie strukturiert sind. Wir werden auch einen Blick auf die verschiedenen Hauptklassen von APIs werfen und welche Verwendungszwecke sie haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und den Grundlagen von JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit APIs zu erlangen, was sie leisten können und wie Sie sie in Ihrem Code verwenden können.
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs?

Application Programming Interfaces (APIs) sind Konstrukte, die in Programmiersprachen bereitgestellt werden, um Entwicklern zu ermöglichen, komplexe Funktionalitäten einfacher zu erstellen. Sie abstrahieren komplexeren Code und bieten stattdessen eine einfachere Syntax.

Als Beispiel aus der realen Welt denken Sie an die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder einer anderen Unterkunft. Wenn Sie ein Gerät in Ihrem Haus verwenden möchten, stecken Sie es in eine Steckdose und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen - das wäre sehr ineffizient und, falls Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Multisteckdosen sind in zwei verschiedene Steckdosen eingesteckt. Jede Multisteckdose hat einen Steckplatz an der Oberseite und an der Vorderseite. In jede Multisteckdose sind zwei Stecker eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In ähnlicher Weise ist es viel einfacher, zum Beispiel 3D-Grafiken zu programmieren, indem man eine API in einer höherstufigen Sprache wie JavaScript oder Python verwendet, anstatt zu versuchen, niedrigstufigen Code zu schreiben (z.B. C oder C++), der direkt die GPU des Computers oder andere Grafikfunktionen steuert.

> [!NOTE]
> Siehe auch den [API-Glossareintrag](/de/docs/Glossary/API) für weitere Beschreibungen.

### APIs in client-seitigem JavaScript

Insbesondere Client-seitiges JavaScript hat viele APIs zur Verfügung — diese sind nicht Teil der eigentlichen JavaScript-Sprache, sondern auf die Kern-JavaScript-Sprache aufgesetzt, um Ihnen zusätzliche Superkräfte in Ihrem JavaScript-Code zu bieten. Sie fallen im Allgemeinen in zwei Kategorien:

- **Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten aus dem Browser und der umgebenden Computerumgebung bereitstellen und nützliche komplexe Dinge damit tun. Zum Beispiel bietet die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zum Manipulieren von Audio im Browser - z.B. eine Audiospur nehmen, deren Lautstärke ändern, Effekte darauf anwenden usw. Im Hintergrund verwendet der Browser tatsächlich komplexeren Code auf niedriger Ebene (z.B. C++ oder Rust) zur eigentlichen Audiobearbeitung. Aber auch hier wird diese Komplexität durch die API für Sie abstrahiert.
- **Drittanbieter-APIs** sind nicht standardmäßig in den Browser integriert, und Sie müssen ihren Code und Informationen im Allgemeinen von irgendwo im Web abrufen. Beispielsweise ermöglicht die [Google Maps API](https://developers.google.com/maps/documentation/javascript) es Ihnen, Dinge wie eine interaktive Karte zu Ihrem Büro auf Ihrer Website anzuzeigen. Sie bietet eine spezielle Reihe von Konstrukten, mit denen Sie den Google Maps-Dienst abfragen und spezifische Informationen zurückgeben können.

![Ein Screenshot des Browsers mit der geöffneten Startseite des Firefox-Browsers. Es gibt APIs, die standardmäßig in den Browser integriert sind. Drittanbieter-APIs sind nicht standardmäßig in den Browser integriert. Ihr Code und ihre Informationen müssen von irgendwo im Web abgerufen werden, um sie zu nutzen.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Wir haben oben darüber gesprochen, was Client-seitige JavaScript-APIs sind und wie sie sich auf die JavaScript-Sprache beziehen. Lassen Sie uns dies zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools ins Spiel kommen:

- JavaScript — Eine hochstufige Scriptsprache, die in Browsern integriert ist und es Ihnen ermöglicht, Funktionalität auf Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen, wie beispielsweise [Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction), verfügbar ist.
- Browser-APIs — Konstrukte, die im Browser integriert und auf die JavaScript-Sprache aufgesetzt sind, und es Ihnen ermöglichen, Funktionalität einfacher zu implementieren.
- Drittanbieter-APIs — Konstrukte, die auf Drittanbieter-Plattformen (z.B. Disqus, Facebook) aufgebaut sind und es Ihnen ermöglichen, einige Funktionen dieser Plattformen in Ihren eigenen Webseiten zu nutzen (z.B. Ihre Disqus-Kommentare auf einer Webseite anzeigen).
- JavaScript-Bibliotheken — In der Regel ein oder mehrere JavaScript-Dateien, die [benutzerdefinierte Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions) enthalten, die Sie in Ihre Webseite einbinden können, um das Schreiben allgemeiner Funktionalitäten zu erleichtern oder zu beschleunigen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt über Bibliotheken hinaus sind JavaScript-Frameworks (z.B. Angular und Ember), die in der Regel Pakete aus HTML, CSS, JavaScript und anderen Technologien sind, die Sie installieren und dann verwenden, um eine gesamte Webanwendung von Grund auf neu zu schreiben. Der wesentliche Unterschied zwischen einer Bibliothek und einem Framework ist die "Umkehrung der Kontrolle". Bei einem Aufruf einer Methode aus einer Bibliothek hat der Entwickler die Kontrolle. Mit einem Framework ist die Kontrolle umgekehrt: Das Framework ruft den Code des Entwicklers auf.

## Was können APIs leisten?

Es gibt eine riesige Anzahl von APIs, die in modernen Browsern verfügbar sind, die es Ihnen ermöglichen, eine Vielzahl von Dingen in Ihrem Code zu tun. Sie können dies sehen, indem Sie sich die [MDN-APIs-Indexseite](/de/docs/Web/API) ansehen.

### Häufige Browser-APIs

Insbesondere die häufigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul ausführlicher behandeln werden), sind:

- **APIs zum Manipulieren von Dokumenten**, die in den Browser geladen wurden. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren - HTML-Elemente zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neuer Inhalt angezeigt wird, zum Beispiel, ist das DOM im Einsatz. Weitere Informationen zu diesen Arten von APIs finden Sie unter [Manipulating documents](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite unabhängig zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Seiten — wenn Sie nur eine Aktienliste oder eine Liste neuer verfügbarer Geschichten aktualisieren müssen und dies direkt tun können, ohne die gesamte Seite vom Server neu laden zu müssen, kann die Seite oder App viel reaktionsschneller und "schneller" wirken. Die Haupt-API, die dafür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), auch wenn älterer Code möglicherweise noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie könnten auch auf den Begriff **Ajax** stoßen, der diese Technik beschreibt. Weitere Informationen zu solchen APIs finden Sie unter [Fetching data from the server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- **APIs zum Zeichnen und Manipulieren von Grafiken** werden in Browsern umfassend unterstützt — die beliebtesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), die es Ihnen ermöglichen, die Pixeldaten, die in einem HTML-{{htmlelement("canvas")}}-Element enthalten sind, programmgesteuert zu aktualisieren, um 2D- und 3D-Szenen zu erstellen. Zum Beispiel könnten Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild in den Canvas importieren und einen Filter darauf anwenden, wie Sepia oder Graustufen, mit der Canvas API, oder eine komplexe 3D-Szene mit Beleuchtung und Texturen mit WebGL erstellen. Solche APIs werden oft mit APIs zur Erstellung von Animationsschleifen (wie {{domxref("window.requestAnimationFrame()")}}) und anderen kombiniert, um ständig aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **Audio- und Video-APIs** wie {{domxref("HTMLMediaElement")}}, die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie benutzerdefinierte UI-Steuerungen für das Abspielen von Audio und Video zu erstellen, Textspuren wie Untertitel zusammen mit Ihren Videos anzuzeigen, Video von Ihrer Webcam zu erfassen, um über einen Canvas (siehe oben) manipuliert zu werden oder auf dem Computer eines anderen in einer Webkonferenz angezeigt zu werden oder Effekte auf Audiotracks anzuwenden (wie Verstärkung, Verzerrung, Panorama usw.).
- **Geräte-APIs** ermöglichen Ihnen die Interaktion mit Gerätehardware: z.B. auf das GPS des Geräts zuzugreifen, um die Position des Benutzers mithilfe der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu ermitteln.
- **Client-seitige Speicher-APIs** ermöglichen es Ihnen, Daten auf der Client-Seite zu speichern, sodass Sie eine App erstellen können, die ihren Zustand zwischen Seitenladevorgängen speichert und möglicherweise sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere verfügbare Optionen, z.B. einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) und komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs sind in großer Vielfalt vorhanden; einige der beliebteren, die Sie früher oder später wahrscheinlich verwenden werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen ermöglichen, alle möglichen Dinge mit Karten auf Ihren Webseiten zu machen.
- Die [Facebook-Suite von APIs](https://developers.facebook.com/docs/), die es Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu bereichern, z.B. durch Bereitstellung von App-Login über Facebook-Login, Akzeptieren von In-App-Zahlungen, Starten von gezielten Werbekampagnen usw.
- Die [Telegram-APIs](https://core.telegram.org/api), die es Ihnen ermöglichen, Inhalte von Telegram-Kanälen auf Ihrer Website einzubetten, zusätzlich zur Bereitstellung von Bot-Unterstützung.
- Die [YouTube API](https://developers.google.com/youtube/), die es Ihnen ermöglicht, YouTube-Videos auf Ihrer Website einzubetten, auf YouTube zu suchen, Playlisten zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Tools zur Verwaltung von Pinterest-Boards und -Pins bereitstellt, um sie in Ihrer Website einzubinden.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework zur Erstellung von Sprach- und Videoanruffunktionen in Ihrer App, zum Senden von SMS/MMS aus Ihren Apps und mehr bietet.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentarplattform bereitstellt, die in Ihre Website integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die es Ihnen ermöglicht, Merkmale des Mastodon-Sozialen Netzwerks programmgesteuert zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die es ermöglicht, mehrere APIs über eine Plattform zu integrieren.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs funktionieren auf leicht unterschiedliche Weise, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen, wie sie funktionieren.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs unter Verwendung eines oder mehrerer [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects), die als Container für die vom API verwendeten Daten (enthalten in Objekteigenschaften) und die vom API bereitgestellte Funktionalität (enthalten in Objektmethoden) dienen.

> [!NOTE]
> Wenn Sie nicht bereits mit der Funktionsweise von Objekten vertraut sind, sollten Sie unser [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects) Modul durchgehen, bevor Sie fortfahren.

Lassen Sie uns zum Beispiel der Web Audio API zurückkehren — dies ist eine ziemlich komplexe API, die aus einer Reihe von Objekten besteht. Die offensichtlichsten sind:

- {{domxref("AudioContext")}}, das einen [Audiografen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) darstellt, der verwendet werden kann, um Audio zu manipulieren, das im Browser abgespielt wird, und eine Reihe von Methoden und Eigenschaften bietet, um dieses Audio zu manipulieren.
- {{domxref("MediaElementAudioSourceNode")}}, das ein {{htmlelement("audio")}}-Element darstellt, das den Ton enthält, den Sie abspielen und innerhalb des Audiokontextes manipulieren möchten.
- {{domxref("AudioDestinationNode")}}, das das Ziel des Audio darstellt, d.h. das Gerät auf Ihrem Computer, das es tatsächlich ausgibt — in der Regel Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte miteinander? Wenn Sie sich unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)) ansehen, sehen Sie zunächst das folgende HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Wir fügen zunächst ein `<audio>`-Element ein, mit dem wir eine MP3-Datei in die Seite einbetten. Wir fügen keine Standard-Browser-Steuerelemente hinzu. Als nächstes fügen wir einen {{htmlelement("button")}} hinzu, den wir verwenden, um die Musik abzuspielen und zu stoppen, sowie ein {{htmlelement("input")}}-Element vom Typ range, das wir verwenden, um die Lautstärke des Tracks während der Wiedergabe anzupassen.

Schauen wir uns als nächstes das JavaScript für dieses Beispiel an.

Wir beginnen, indem wir eine `AudioContext`-Instanz erstellen, innerhalb derer wir unseren Track manipulieren:

```js
const audioCtx = new AudioContext();
```

Als nächstes erstellen wir Konstanten, die Referenzen zu unserem `<audio>`, `<button>` und `<input>`-Elementen speichern, und verwenden die Methode {{domxref("AudioContext.createMediaElementSource()")}}, um einen `MediaElementAudioSourceNode` zu erstellen, der die Quelle unseres Audios darstellt — das `<audio>`-Element wird abgespielt:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als nächstes fügen wir ein paar Ereignis-Handler hinzu, die dazu dienen, zwischen Abspielen und Pausieren umzuschalten, wenn der Button gedrückt wird, und die Anzeige zurückzusetzen, wenn der Song beendet ist:

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
> Einige von Ihnen bemerken vielleicht, dass die `play()`- und `pause()`-Methoden, die verwendet werden, um den Track abzuspielen und zu pausieren, nicht Teil der Web Audio API sind; sie sind Teil der {{domxref("HTMLMediaElement")}} API, die eine andere, aber eng verwandte API ist.

Als nächstes erstellen wir ein {{domxref("GainNode")}} Objekt mit der {{domxref("BaseAudioContext/createGain", "AudioContext.createGain()")}} Methode, das verwendet werden kann, um die Lautstärke des Audios zu ändern, das durch es geführt wird, und erstellen einen weiteren Ereignis-Handler, der den Wert des Gains (Lautstärke) des Audiografen ändert, wenn sich der Schiebereglerwert ändert:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das Letzte, was zu tun ist, um dies zum Laufen zu bringen, ist die Verbindung der verschiedenen Knoten im Audiografen, was mit der {{domxref("AudioNode.connect()")}} Methode, die auf jedem Knotentyp verfügbar ist, gemacht wird:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio beginnt in der Quelle, die dann mit dem Gain-Knoten verbunden wird, sodass die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann mit dem Zielknoten verbunden, sodass der Ton auf Ihrem Computer abgespielt werden kann (die {{domxref("BaseAudioContext/destination", "AudioContext.destination")}} Eigenschaft repräsentiert das, was auch immer der Standard-{{domxref("AudioDestinationNode")}} ist, der auf der Hardware Ihres Computers verfügbar ist, z.B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt für die API ist. Bei der Web Audio API ist dies ziemlich einfach — es ist das {{domxref("AudioContext")}} Objekt, das benötigt wird, um jegliche Audiomanipulation überhaupt durchzuführen.

Die Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — ihre Funktionen sind in der Regel an das {{domxref("Document")}} Objekt oder eine Instanz eines HTML-Elements gebunden, das Sie in irgendeiner Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // ein neues em-Element erstellen
const para = document.querySelector("p"); // ein bestehendes p-Element referenzieren
em.textContent = "Hello there!"; // em einen Textinhalt geben
para.appendChild(em); // em in para einbetten
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) beruht ebenfalls darauf, ein Kontextobjekt zu erhalten, das verwendet wird, um Dinge zu manipulieren, obwohl es sich in diesem Fall um einen grafischen Kontext handelt, anstelle eines Audiokontexts. Das Kontextobjekt wird erstellt, indem Sie eine Referenz zu dem {{htmlelement("canvas")}}-Element bekommen, auf dem Sie zeichnen möchten, und dann seine Methode {{domxref("HTMLCanvasElement.getContext()")}} aufrufen:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf dem Canvas tun wollen, wird dann durch Aufrufen von Eigenschaften und Methoden des Kontextobjekts (das eine Instanz von {{domxref("CanvasRenderingContext2D")}} ist) erreicht, zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in unserem [bounce balls demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (siehe es [live laufen](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html) auch) in Aktion sehen.

### Sie verwenden oft Ereignisse, um Zustandsänderungen zu handhaben

Wir haben bereits früher im Kurs über Ereignisse in unserem Artikel [Introduction to events](/de/docs/Learn/JavaScript/Building_blocks/Events) gesprochen, der im Detail beschreibt, was Client-seitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie noch nicht mit der Funktionsweise von Ereignissen in Client-seitigen Web-APIs vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten mindestens einige. Die Eigenschaften von Ereignis-Handlern, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind im Allgemeinen in unserem Referenzmaterial in separaten "Ereignis-Handler" Abschnitten aufgelistet.

Wir haben bereits eine Reihe von Ereignis-Handlern in unserem Web Audio API Beispiel von oben gesehen:

```js
// audio abspielen/pausieren
playBtn.addEventListener("click", () => {
  // überprüfen, ob Kontext im unterbrochenen Zustand ist (Autoplay-Richtlinie)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // wenn Track gestoppt ist, abspielen
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // wenn Track abgespielt wird, stoppen
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// wenn Track endet
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
```

### Sie haben zusätzliche Sicherheitsmechanismen, wo es angebracht ist

Web-API Funktionen unterliegen denselben Sicherheitsüberlegungen wie JavaScript und andere Webtechnologien (zum Beispiel [same-origin policy](/de/docs/Web/Security/Same-origin_policy)), aber sie haben manchmal zusätzliche Sicherheitsmechanismen. Einige der moderneren Web-APIs funktionieren zum Beispiel nur auf über HTTPS bereitgestellten Seiten, da sie potenziell sensible Daten übertragen (Beispiele umfassen [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus fordern einige Web-APIs die Erlaubnis des Benutzers an, bevor sie in Ihrem Code aufgerufen werden. Ein Beispiel ist die [Notifications API](/de/docs/Web/API/Notifications_API), die eine Erlaubnis durch ein Pop-up-Dialogfeld anfordert:

![Ein Screenshot des Benachrichtigungs-Pop-up-Dialogs, der von der Benachrichtigungs-API des Browsers bereitgestellt wird. Die Website 'mdn.github.io' fragt nach Berechtigungen, um dem Benutzer-Agenten Benachrichtigungen zu senden mit einem X, um den Dialog zu schließen und einem Dropdown-Menü mit der Option 'immer Benachrichtigungen erhalten', das standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und {{domxref("HTMLMediaElement")}} APIs unterliegen einem Sicherheitsmechanismus, der [Autoplay-Richtlinie](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) genannt wird — dies bedeutet im Wesentlichen, dass Sie nicht automatisch Audio abspielen können, wenn eine Seite geladen wird — Sie müssen Ihren Benutzern ermöglichen, die Audiowiedergabe über ein Steuerelement wie einen Button zu starten. Dies wird gemacht, da automatisch abgespieltes Audio in der Regel sehr störend ist und wir unsere Benutzer dem wirklich nicht aussetzen sollten.

> [!NOTE]
> Abhängig davon, wie strikt der Browser ist, könnten solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d.h. wenn Sie die lokale Beispieldatei in Ihrem Browser laden, anstatt sie von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens funktionierte unser Web Audio API Beispiel lokal nicht in Google Chrome — wir mussten es auf GitHub hochladen, bevor es funktionieren würde.

## Zusammenfassung

An diesem Punkt sollten Sie eine gute Vorstellung davon haben, was APIs sind, wie sie funktionieren und was Sie mithilfe dieser in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich gespannt darauf, tatsächlich einige spaßige Dinge mit spezifischen APIs zu erledigen, also los geht's! Als Nächstes werden wir uns mit der Manipulation von Dokumenten mit dem Document Object Model (DOM) beschäftigen.

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}
