---
title: Einführung in Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
l10n:
  sourceCommit: aad04866a932d9b01c4048334e7ddebcf60206b7
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

Zuerst betrachten wir APIs aus einer übergeordneten Perspektive — was sind sie, wie funktionieren sie, wie benutzt man sie in Ihrem Code und wie sind sie strukturiert? Wir werden auch einen Blick auf die verschiedenen Hauptklassen von APIs werfen und welche Anwendungen sie haben.

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
          >Bauklötze</a
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

Anwendungsprogrammierschnittstellen (Application Programming Interfaces, APIs) sind Strukturen, die in Programmiersprachen bereitgestellt werden, um Entwicklern die Erstellung komplexer Funktionen zu erleichtern. Sie abstrahieren komplexere Codes von Ihnen und bieten eine einfachere Syntax zur Verwendung.

Ein Beispiel aus der realen Welt: Denken Sie an die Stromversorgung in Ihrem Haus, Ihrer Wohnung oder anderen Wohnstätten. Wenn Sie ein Gerät in Ihrem Haus benutzen wollen, stecken Sie es in eine Steckdose und es funktioniert. Sie versuchen nicht, es direkt an die Stromversorgung anzuschließen — das wäre wirklich ineffizient und, wenn Sie kein Elektriker sind, schwierig und gefährlich.

![Zwei Multi-Steckdosenhalter sind in zwei verschiedene Steckdosen eingesteckt. Jeder Multi-Steckdosenhalter hat einen Steckplatz auf seiner Oberseite und an seiner Vorderseite. Zwei Stecker sind in jeden Multi-Steckdosenhalter eingesteckt.](plug-socket.png)

_Bildquelle: [Überlastete Steckdose](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) von [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), auf Flickr._

In ähnlicher Weise ist es erheblich einfacher, 3D-Grafiken zu programmieren, wenn Sie eine API in einer höherstufigen Sprache wie JavaScript oder Python verwenden, anstatt direkt niedrigstufigen Code (z.B. C oder C++) zu schreiben, der direkt die GPU des Computers oder andere Grafikfunktionen steuert.

> [!NOTE]
> Siehe auch den {{Glossary("API", "Glossareintrag zu API")}} für eine weitere Beschreibung.

### APIs in clientseitigem JavaScript

Insbesondere clientseitiges JavaScript bietet viele APIs — diese gehören nicht zur Javascript-Sprache selbst, sondern sind auf der Kern-Javascript-Sprache aufgebaut und bieten Ihnen zusätzliche Superkräfte zur Verwendung in Ihrem Javascript-Code. Im Allgemeinen fallen sie in zwei Kategorien:

- **Browser-APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus dem Browser und der umgebenden Computerumgebung bereitstellen und nützliche, komplexe Dinge damit tun. Zum Beispiel stellt die [Web Audio API](/de/docs/Web/API/Web_Audio_API) JavaScript-Konstrukte zur Manipulation von Audio im Browser zur Verfügung — eine Audiospur aufnehmen, ihre Lautstärke ändern, Effekte darauf anwenden usw. Im Hintergrund verwendet der Browser tatsächlich einige komplexe, niedrigstufige Codes (z.B. C++ oder Rust) zur eigentlichen Audiobearbeitung. Aber auch hier wird diese Komplexität von Ihnen durch die API abstrahiert.
- **Drittanbieter-APIs** sind nicht standardmäßig im Browser enthalten, und Sie müssen deren Code und Informationen in der Regel von irgendwo im Web abrufen. Ein Beispiel hierfür ist die [Google Maps API](https://developers.google.com/maps/documentation/javascript), die es Ihnen ermöglicht, eine interaktive Karte auf Ihrer Webseite anzuzeigen. Sie bietet eine spezielle Reihe von Konstrukten, die Sie verwenden können, um den Google Maps-Dienst abzufragen und spezifische Informationen zurückzugeben.

![Ein Screenshot des Browsers mit der geöffneten Startseite des Firefox-Browsers. Es sind APIs eingebaut, die standardmäßig im Browser vorhanden sind. Drittanbieter-APIs sind standardmäßig nicht im Browser eingebaut. Ihr Code und ihre Informationen müssen von irgendwo im Web abgerufen werden, um sie nutzen zu können.](browser.png)

### Beziehung zwischen JavaScript, APIs und anderen JavaScript-Tools

Oben haben wir beschrieben, was clientseitige JavaScript-APIs sind und wie sie sich auf die JavaScript-Sprache beziehen. Lassen Sie uns dies zusammenfassen, um es klarer zu machen, und auch erwähnen, wo andere JavaScript-Tools passen:

- JavaScript — Eine hochstufige Skriptsprache, die in Browsern eingebaut ist und Ihnen erlaubt, Funktionalität auf Webseiten/Apps zu implementieren. Beachten Sie, dass JavaScript auch in anderen Programmierumgebungen verfügbar ist, wie zum Beispiel [Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction).
- Browser-APIs — Konstrukte, die im Browser eingebaut sind, oberhalb der JavaScript-Sprache sitzen und es Ihnen ermöglichen, Funktionalität einfacher zu implementieren.
- Drittanbieter-APIs — Konstrukte, die in Drittanbieter-Plattformen integriert sind (z.B. Disqus, Facebook) und Ihnen erlauben, einige Funktionalitäten dieser Plattformen in Ihre eigenen Webseiten einzubinden (zum Beispiel die Anzeige Ihrer Disqus-Kommentare auf einer Webseite).
- JavaScript-Bibliotheken — Üblicherweise eine oder mehrere JavaScript-Dateien mit [benutzerdefinierten Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions), die Sie an Ihre Webseite anhängen können, um das Schreiben üblicher Funktionalität zu beschleunigen oder zu ermöglichen. Beispiele sind jQuery, Mootools und React.
- JavaScript-Frameworks — Der nächste Schritt gegenüber Bibliotheken, JavaScript-Frameworks (z.B. Angular und Ember) sind in der Regel Pakete aus HTML, CSS, JavaScript und anderen Technologien, die Sie installieren und dann verwenden, um eine komplette Webanwendung von Grund auf zu schreiben. Der entscheidende Unterschied zwischen einer Bibliothek und einem Framework ist die "Umkehrung der Kontrolle". Wenn Sie eine Methode aus einer Bibliothek aufrufen, ist der Entwickler in Kontrolle. Bei einem Framework ist die Kontrolle umgekehrt: Das Framework ruft den Code des Entwicklers auf.

## Was können APIs tun?

Es gibt eine riesige Anzahl von APIs in modernen Browsern, die Ihnen ermöglichen, eine Vielzahl von Dingen in Ihrem Code zu tun. Dies können Sie sich ansehen, indem Sie sich die [MDN-APIs-Indexseite](/de/docs/Web/API) anschauen.

### Übliche Browser-APIs

Insbesondere die häufigsten Kategorien von Browser-APIs, die Sie verwenden werden (und die wir in diesem Modul detaillierter behandeln werden), sind:

- **APIs zur Dokumentmanipulation**, die im Browser geladen werden. Das offensichtlichste Beispiel ist die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model), die es Ihnen ermöglicht, HTML und CSS zu manipulieren — HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden usw. Jedes Mal, wenn ein Popup-Fenster auf einer Seite erscheint oder neuer Inhalt angezeigt wird, zum Beispiel, ist das DOM im Einsatz. Weitere Informationen zu diesen Arten von API finden Sie unter [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
- **APIs, die Daten vom Server abrufen**, um kleine Abschnitte einer Webseite eigenständig zu aktualisieren, werden sehr häufig verwendet. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites — wenn Sie nur eine Aktiennotierung oder eine Liste verfügbarer neuer Geschichten aktualisieren müssen, dies sofort zu tun, ohne die gesamte Seite vom Server neu laden zu müssen, kann die Seite oder App viel reaktionsschneller und "schnelllebiger" erscheinen lassen. Die Haupt-API, die hierfür verwendet wird, ist die [Fetch API](/de/docs/Web/API/Fetch_API), obwohl älterer Code möglicherweise noch die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API verwendet. Sie könnten auch auf den Begriff **Ajax** stoßen, der diese Technik beschreibt. Weitere Informationen zu solchen APIs finden Sie unter [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- **APIs zum Zeichnen und Manipulieren von Grafiken** werden in Browsern weitgehend unterstützt — die bekanntesten sind [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API), mit denen Sie die Pixel-Daten eines HTML-{{htmlelement("canvas")}}-Elements programmatisch aktualisieren können, um 2D- und 3D-Szenen zu erstellen. Zum Beispiel könnten Sie Formen wie Rechtecke oder Kreise zeichnen, ein Bild auf die Fläche importieren und einen Filter darauf anwenden wie Sepia oder Graustufen mit der Canvas-API, oder eine komplexe 3D-Szene mit Beleuchtung und Texturen mit WebGL erstellen. Solche APIs werden oft mit APIs zur Erstellung von Animationsschleifen (wie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)) und anderen kombiniert, um kontinuierlich aktualisierte Szenen wie Cartoons und Spiele zu erstellen.
- **[Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery)** wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu machen, wie zum Beispiel benutzerdefinierte UI-Kontrollen zum Abspielen von Audio und Video zu erstellen, Textspuren wie Untertitel und Beschriftungen zusammen mit Ihren Videos anzuzeigen, Videos von Ihrer Webcam zu greifen, um sie über ein {{htmlelement("canvas")}} zu manipulieren (siehe oben) oder auf den Computer einer anderen Person in einer Webkonferenz anzuzeigen, oder Effekte auf Audiospuren hinzuzufügen (wie Verstärkung, Verzerrung, Panning usw.).
- **Geräte-APIs** ermöglichen Ihnen die Interaktion mit Gerätehardware: Zum Beispiel den Zugriff auf das GPS des Geräts, um die Position des Nutzers mit der [Geolocation API](/de/docs/Web/API/Geolocation_API) zu ermitteln.
- **Client-seitige Speicher-APIs** ermöglichen es Ihnen, Daten auf der Client-Seite zu speichern, sodass Sie eine App erstellen können, die ihren Zustand zwischen Seitenladungen speichert und möglicherweise sogar funktioniert, wenn das Gerät offline ist. Es gibt mehrere verfügbare Optionen, z.B. die einfache Name/Wert-Speicherung mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API), und die komplexere Datenbankspeicherung mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API).

### Häufige Drittanbieter-APIs

Drittanbieter-APIs gibt es in vielen Variationen; einige der beliebteren, die Sie früher oder später nutzen werden, sind:

- Karten-APIs, wie [Mapquest](https://developer.mapquest.com/) und die [Google Maps API](https://developers.google.com/maps/), die es Ihnen ermöglichen, alle möglichen Dinge mit Karten auf Ihren Webseiten zu tun.
- Die [Facebook-Suite von APIs](https://developers.facebook.com/docs/), die es Ihnen ermöglicht, verschiedene Teile des Facebook-Ökosystems zu nutzen, um Ihre App zu verbessern, z.B. durch die Bereitstellung des App-Logins über das Facebook-Login, das Akzeptieren von In-App-Zahlungen, das Ausrollen von gezielten Werbekampagnen usw.
- Die [Telegram APIs](https://core.telegram.org/api), die es Ihnen ermöglichen, Inhalte von Telegram-Kanälen auf Ihrer Website einzubetten und Unterstützung für Bots zu bieten.
- Die [YouTube API](https://developers.google.com/youtube/), die es Ihnen ermöglicht, YouTube-Videos in Ihrer Site einzubetten, YouTube zu durchsuchen, Playlists zu erstellen und mehr.
- Die [Pinterest API](https://developers.pinterest.com/), die Werkzeuge bietet, um Pinterest-Boards und -Pins zu verwalten, um sie in Ihrer Website zu inkludieren.
- Die [Twilio API](https://www.twilio.com/docs), die ein Framework bereitstellt, um Sprach- und Videoanruffunktionalität in Ihre App einzubauen, SMS/MMS von Ihren Apps zu senden und mehr.
- Die [Disqus API](https://disqus.com/api/docs/), die eine Kommentarplattform bietet, die in Ihre Site integriert werden kann.
- Die [Mastodon API](https://docs.joinmastodon.org/api/), die Ihnen ermöglicht, Funktionen des Mastodon-Sozialen Netzwerks programmatisch zu manipulieren.
- Die [IFTTT API](https://ifttt.com/developers), die es ermöglicht, mehrere APIs über eine Plattform zu integrieren.

## Wie funktionieren APIs?

Verschiedene JavaScript-APIs funktionieren auf etwas unterschiedliche Weise, aber im Allgemeinen haben sie gemeinsame Merkmale und ähnliche Themen, wie sie arbeiten.

### Sie basieren auf Objekten

Ihr Code interagiert mit APIs unter Verwendung eines oder mehrerer [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects), die als Container für die von der API verwendeten Daten (enthalten in Objekteigenschaften) und die von der API bereitgestellte Funktionalität (enthalten in Objektmethoden) dienen.

> [!NOTE]
> Wenn Sie nicht bereits mit der Funktionsweise von Objekten vertraut sind, sollten Sie zuerst unser Modul zu [JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects) durchgehen, bevor Sie fortfahren.

Kehren wir zum Beispiel der Web Audio API zurück — dies ist eine ziemlich komplexe API, die aus einer Anzahl von Objekten besteht. Die offensichtlichsten sind:

- [`AudioContext`](/de/docs/Web/API/AudioContext), welches ein [Audio-Graph](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) repräsentiert, der verwendet werden kann, um Audio zu manipulieren, das innerhalb des Browsers abgespielt wird, und es hat eine Anzahl von Methoden und Eigenschaften verfügbar, um dieses Audio zu manipulieren.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), welches ein {{htmlelement("audio")}}-Element repräsentiert, das Klang enthält, den Sie abspielen und innerhalb des Audio-Kontextes manipulieren möchten.
- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), welches das Ziel des Audios repräsentiert, also das Gerät auf Ihrem Computer, das es tatsächlich wiedergeben wird — normalerweise Ihre Lautsprecher oder Kopfhörer.

Wie interagieren diese Objekte? Wenn Sie sich unser [einfaches Web-Audio-Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)) ansehen, sehen Sie zuerst das folgende HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Zuerst fügen wir ein `<audio>`-Element ein, mit dem wir eine MP3 in die Seite einbetten. Wir fügen keine Standard-Browsersteuerungen ein. Als nächstes fügen wir ein {{htmlelement("button")}} ein, das wir verwenden, um die Musik abzuspielen und anzuhalten, und ein {{htmlelement("input")}}-Element vom Typ "range", das wir verwenden, um die Lautstärke der Spur während der Wiedergabe anzupassen.

Als nächstes schauen wir uns den JavaScript-Code für dieses Beispiel an.

Wir beginnen mit der Erstellung einer `AudioContext`-Instanz, in der wir unsere Spur manipulieren können:

```js
const audioCtx = new AudioContext();
```

Als nächstes erstellen wir Konstanten, die Referenzen auf unsere `<audio>`, `<button>` und `<input>`-Elemente speichern, und verwenden die Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource), um ein `MediaElementAudioSourceNode` zu erstellen, das die Quelle unseres Audios repräsentiert — das `<audio>`-Element, das abgespielt wird:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Als nächstes fügen wir ein paar Ereignishandler ein, die zwischen Play und Pause wechseln, wenn der Button gedrückt wird, und die Anzeige zurücksetzen, wenn das Lied zu Ende gespielt wurde:

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
> Einige von Ihnen bemerken möglicherweise, dass die `play()`- und `pause()`-Methoden, die verwendet werden, um die Spur abzuspielen und anzuhalten, nicht Teil der Web Audio API sind; sie sind Teil der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die anders, aber eng verwandt ist.

Als nächstes erstellen wir ein [`GainNode`](/de/docs/Web/API/GainNode)-Objekt mit der Methode [`AudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain), welches verwendet werden kann, um die Lautstärke des durch es geführten Audios anzupassen, und erstellen einen weiteren Ereignishandler, der den Wert des Gains (Lautstärke) des Audio-Graphs ändert, wann immer sich der Schieberegler-Wert ändert:

```js
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Das Letzte, was zu tun ist, damit dies funktioniert, ist die unterschiedlichen Knoten im Audio-Graph zu verbinden, was mit der Methode [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect) möglich ist, die auf jedem Knotentyp verfügbar ist:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

Das Audio beginnt in der Quelle, die dann an den Gain-Knoten angeschlossen wird, damit die Lautstärke des Audios angepasst werden kann. Der Gain-Knoten wird dann an den Zielknoten angeschlossen, damit der Ton auf Ihrem Computer abgespielt werden kann (die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft repräsentiert das, was auch immer der Standard-`AudioDestinationNode` auf der Hardware Ihres Computers ist, z.B. Ihre Lautsprecher).

### Sie haben erkennbare Einstiegspunkte

Wenn Sie eine API verwenden, sollten Sie sicherstellen, dass Sie wissen, wo der Einstiegspunkt der API ist. Bei der Web Audio API ist dies recht einfach — es ist das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das verwendet werden muss, um jede Art der Audiomanipulation durchzuführen.

Die Document Object Model (DOM) API hat ebenfalls einen einfachen Einstiegspunkt — ihre Funktionen hängen tendenziell am [`Document`](/de/docs/Web/API/Document)-Objekt oder einer Instanz eines HTML-Elements, das Sie auf irgendeine Weise beeinflussen möchten, zum Beispiel:

```js
const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para
```

Die [Canvas API](/de/docs/Web/API/Canvas_API) erfordert ebenfalls, dass ein Kontextobjekt verwendet wird, um Dinge zu manipulieren, allerdings ist es in diesem Fall ein grafischer Kontext statt eines Audio-Kontextes. Sein Kontextobjekt wird erstellt, indem eine Referenz zum {{htmlelement("canvas")}}-Element erhalten wird, auf dem Sie zeichnen möchten, und dann dessen Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufgerufen wird:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Alles, was wir auf die Leinwand zeichnen oder tun möchten, wird dann durch Aufrufen der Eigenschaften und Methoden des Kontextobjekts (das eine Instanz von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) ist) erreicht, zum Beispiel:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Sie können diesen Code in unserem [Bouncing Balls Demo](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) in Aktion sehen (siehe es auch [live in Aktion](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)).

### Sie verwenden häufig Ereignisse, um Zustandsänderungen zu handhaben

Wir haben bereits früher im Kurs Ereignisse in unserem Artikel [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) besprochen, der im Detail darauf eingeht, was clientseitige Webereignisse sind und wie sie in Ihrem Code verwendet werden. Wenn Sie nicht bereits mit der Funktionsweise von clientseitigen Web-API-Ereignissen vertraut sind, sollten Sie diesen Artikel zuerst lesen, bevor Sie fortfahren.

Einige Web-APIs enthalten keine Ereignisse, aber die meisten enthalten mindestens einige. Die Handler-Eigenschaften, die es uns ermöglichen, Funktionen auszuführen, wenn Ereignisse ausgelöst werden, sind in unserem Referenzmaterial normalerweise in separaten "Ereignishandler"-Abschnitten aufgelistet.

Wir haben bereits eine Anzahl von Ereignishandlern in unserem oben gezeigten Web Audio API-Beispiel gesehen:

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

WebAPI-Funktionen unterliegen denselben Sicherheitsüberlegungen wie JavaScript und andere Webtechnologien (zum Beispiel [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)), aber sie haben manchmal zusätzliche Sicherheitsmechanismen. Zum Beispiel funktionieren einige der moderneren WebAPIs nur auf über HTTPS ausgelieferten Seiten, da sie potenziell sensible Daten übertragen (Beispiele sind [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API)).

Darüber hinaus fordern einige WebAPIs beim Aufruf in Ihrem Code die Erlaubnis des Nutzers an. Ein Beispiel ist die [Notifications API](/de/docs/Web/API/Notifications_API), die um Erlaubnis mit einem Popup-Dialogfeld bittet:

![Ein Screenshot des Benachrichtigungs-Popups im Browser bereitgestellt durch die Notifications API. Die Website 'mdn.github.io' fragt nach Erlaubnis, Benachrichtigungen an den User-Agent zu senden, mit einem X, um den Dialog zu schließen und einem Dropdown-Menü von Optionen, wobei 'immer Benachrichtigungen erhalten' standardmäßig ausgewählt ist.](notification-permission.png)

Die Web Audio und [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) APIs unterliegen einem Sicherheitsmechanismus namens [Autoplay-Policy](/de/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) — das bedeutet im Wesentlichen, dass Sie Audio nicht automatisch abspielen dürfen, wenn eine Seite geladen wird — Sie müssen Ihren Benutzern erlauben, die Audiowiedergabe durch ein Steuerelement wie einen Button zu initiieren. Dies liegt daran, dass automatisch abgespielte Audiodaten meist sehr störend sind und wir unsere Benutzer nicht damit belasten sollten.

> [!NOTE]
> Abhängig davon, wie streng der Browser ist, könnten solche Sicherheitsmechanismen sogar verhindern, dass das Beispiel lokal funktioniert, d.h., wenn Sie die lokale Beispieldatei in Ihrem Browser laden anstatt von einem Webserver auszuführen. Zum Zeitpunkt des Schreibens funktionierte unser Web Audio API-Beispiel lokal nicht in Google Chrome — wir mussten es auf GitHub hochladen, bevor es funktionierte.

## Zusammenfassung

An diesem Punkt sollten Sie ein gutes Verständnis dafür haben, was APIs sind, wie sie funktionieren und was Sie mit ihnen in Ihrem JavaScript-Code tun können. Sie sind wahrscheinlich gespannt darauf, tatsächlich einige unterhaltsame Dinge mit bestimmten APIs zu unternehmen, also los geht's! Als nächstes werden wir uns mit der Manipulation von Dokumenten mit dem Document Object Model (DOM) beschäftigen.

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}
