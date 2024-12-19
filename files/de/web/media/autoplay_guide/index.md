---
title: Anleitung zur automatischen Wiedergabe für Media- und Web Audio-APIs
slug: Web/Media/Autoplay_guide
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) direkt beim Laden der Seite kann für Benutzer eine unerwartete Überraschung darstellen. Während die automatische Wiedergabe von Medien einen nützlichen Zweck erfüllt, sollte sie mit Bedacht und nur bei Bedarf eingesetzt werden. Um Benutzern die Kontrolle darüber zu geben, bieten Browser oft verschiedene Formen der Blockierung der automatischen Wiedergabe an. In diesem Leitfaden behandeln wir die Funktionen der automatischen Wiedergabe in den verschiedenen Media- und Web Audio-APIs, einschließlich eines kurzen Überblicks darüber, wie die automatische Wiedergabe verwendet wird und wie man mit Browsern zusammenarbeiten kann, um die Blockierung der automatischen Wiedergabe elegant zu handhaben.

Die Blockierung der automatischen Wiedergabe wird _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn das Quellmedium keinen Audiotrack enthält oder der Audiotrack stummgeschaltet ist. Medien mit aktivem Audiotrack werden als **hörbar** betrachtet, und auf sie wird die Blockierung der automatischen Wiedergabe angewendet. **Nicht hörbare** Medien werden von der Blockierung der automatischen Wiedergabe nicht betroffen.

## Automatische Wiedergabe und Blockierung der automatischen Wiedergabe

Der Begriff **automatische Wiedergabe** bezieht sich auf jede Funktion, die Medien ohne ausdrückliche Aufforderung des Benutzers zum Abspielen bringt. Dazu gehört sowohl die Verwendung von HTML-Attributen zur automatischen Wiedergabe von Medien als auch der Einsatz von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts einer Benutzeraktion zu starten.

Das bedeutet, dass sowohl die folgende als auch die folgende Implementierung als Verhalten der automatischen Wiedergabe angesehen werden und daher den Richtlinien zur Blockierung der automatischen Wiedergabe im Browser unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Webfunktionen und APIs können von der Blockierung der automatischen Wiedergabe betroffen sein:

- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus Sicht des Benutzers kann es irritierend, unbequem oder abstoßend sein, wenn eine Webseite oder App unvorhergesehen beginnt, Geräusche zu machen. Aus diesem Grund erlauben Browser im Allgemeinen die automatische Wiedergabe nur unter bestimmten Umständen.

### Verfügbarkeit der automatischen Wiedergabe

Grundsätzlich können Sie davon ausgehen, dass Medien nur dann automatisch wiedergegeben werden dürfen, wenn _mindestens eine_ der folgenden Bedingungen zutrifft:

- Der Ton ist stummgeschaltet oder die Lautstärke ist auf 0 gestellt
- Der Benutzer hat mit der Seite interagiert (z.B. durch Klicken, Tippen, Tastendruck usw.)
- Wenn die Seite auf die Positivliste gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Benutzer häufig mit Medien interagiert, oder manuell über Präferenzen oder andere Benutzeroberflächenmerkmale
- Wenn die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um einer {{HTMLElement("iframe")}} und ihrem Dokument die Unterstützung der automatischen Wiedergabe zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert. Die genauen Situationen, die zur Blockierung führen, und die spezifischen Details, wie Seiten auf die Positivliste gesetzt werden, variieren je nach Browser, aber die oben genannten Punkte sind gute Richtlinien.

Für Einzelheiten siehe die Richtlinien zur automatischen Wiedergabe für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt, die Wiedergabe von Medien, die Ton enthalten, wird im Allgemeinen blockiert, wenn die Wiedergabe programmgesteuert in einem Tab initiiert wird, in dem noch keine Benutzerinteraktion stattgefunden hat. Browser können sich zusätzlich dafür entscheiden, unter anderen Umständen zu blockieren.

## Autoplay von Medienelementen

Nun, da wir besprochen haben, was die automatische Wiedergabe ist und was verhindern kann, dass die automatische Wiedergabe erlaubt wird, sehen wir uns an, wie Ihre Website oder App beim Laden der Seite Medien automatisch abspielen kann, wie Sie erkennen können, wann die automatische Wiedergabe nicht eintritt, und Tipps für den Umgang damit, wenn die automatische Wiedergabe vom Browser verweigert wird.

### Das Attribut autoplay

Der einfachste Weg, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut zu Ihrem {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` `true` ist, beginnt das Medium automatisch so schnell wie möglich nach den folgenden Ereignissen zu spielen:

- Die Seite darf die Funktionalität der automatischen Wiedergabe verwenden
- Das Element wurde während des Ladevorgangs der Seite erstellt
- Es wurde genug Medium empfangen, um mit der Wiedergabe zu beginnen und die Wiedergabe bis zum Ende des Mediums ohne Unterbrechung fortzusetzen, vorausgesetzt, es gibt keine drastischen Änderungen der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element mit dem `autoplay`-Attribut könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob die automatische Wiedergabe erlaubt ist

Wenn die automatische Wiedergabe für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob die automatische Wiedergabe erlaubt, nicht erlaubt oder nur für nicht hörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung beispielsweise ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur die automatische Wiedergabe von nicht hörbaren Inhalten erlaubt, können Sie es entweder stummschalten oder ein Video ohne Audiotrack bereitstellen.
Ähnlich, wenn Sie wissen, dass die automatische Wiedergabe überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (unter Verwendung des [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attributs) oder wählen, das Video erst zu laden, wenn es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für eine Art von Medienfunktion (d.h. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen oder um zu prüfen, ob ein bestimmtes Medienelement oder Audiokontext automatisch wiedergegeben werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Richtlinie für alle Medienelemente im Dokument zu erhalten (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und dass es standardmäßig so konfiguriert ist, dass es automatisch mit Ton abspielt.
Wenn die automatische Wiedergabe nur für nicht hörbare Inhalte erlaubt ist, stummschalten wir das Audio; wenn die automatische Wiedergabe nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

```js
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // The video element will autoplay with audio.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Mute audio on video
  video.muted = true;
} else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
  // Set a default placeholder image.
  video.poster = "http://example.com/poster_image_url";
}
```

Der Code, um ein bestimmtes Element oder einen bestimmten Audiokontext zu testen, ist der gleiche, außer dass Sie das zu testende Element oder den zu testenden Kontext anstelle des Typs übergeben.
Hier übergeben wir das `video`-Objekt, das wir testen möchten.

```js
if (navigator.getAutoplayPolicy(video) === "allowed") {
  // The video element will autoplay with audio.
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
  // Mute audio on video
  video.muted = true;
} else if (navigator.getAutoplayPolicy(video) === "disallowed") {
  // Set a default placeholder image.
  video.poster = "http://example.com/poster_image_url";
}
```

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund von Benutzerinteraktionen mit der Seite, dem Dokument oder einem bestimmten Element ändern.
Ähnlich kann sich bei einigen Browsern die Richtlinie für ein bestimmtes Element ändern, auch wenn sich die Richtlinie für den Typ nicht geändert hat (zum Beispiel bei Browsern, bei denen das Berühren eines bestimmten Elements nur diesem Element erlaubt, sich automatisch abzuspielen).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, die Richtlinie beim Laden der Seite zu überprüfen, indem der Typ verwendet wird.

#### Beispiel 3: Erkennen des Fehlers der automatischen Wiedergabe als Fallback

Kein spezielles Ereignis (oder andere Benachrichtigung) wird durch das Auftreten eines Fehlers bei der automatischen Wiedergabe ausgelöst, daher gibt es bei Browsern, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keinen einfachen Weg, um zu bestimmen, ob die automatische Wiedergabe unterstützt wird oder wie darauf reagiert werden soll, wenn sie ausgelöst oder nicht ausgelöst wird.

Ein Ansatz besteht darin, auf das erste Vorkommen des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu hören, das im Medienelement ausgelöst wird, wenn es nach dem Pausieren wieder aufgenommen _und_ beim Abspielen gestartet wird.
Das bedeutet, dass das erste Mal, wenn das `play`-Ereignis ausgelöst wird, Sie wissen, dass Ihr Medium das erste Mal nach dem Öffnen der Seite gestartet wird.

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler, der durch eine Funktion namens `handleFirstPlay()` verarbeitet wird, die das `play`-Ereignis als Eingabe erhält.

`handleFirstPlay()` sieht so aus:

```js
const video = document.getElementById("video");
video.addEventListener("play", handleFirstPlay, false);

let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    // Remove listener so this only gets called once.
    const vid = event.target;
    vid.removeEventListener("play", handleFirstPlay);

    // Start whatever you need to do after first playback has started
  }
}
```

Nachdem wir eine Referenz zum Videoelement aus dem [`Event`](/de/docs/Web/API/Event)-Objekt und dessen [`target`](/de/docs/Web/API/Event/target) erhalten haben, verwenden wir es, um den Ereignislistener zu entfernen.
Dies wird verhindern, dass zukünftige `play`-Ereignisse an den Handler geliefert werden. Dies könnte passieren, wenn das Video pausiert und vom Benutzer oder automatisch durch den Browser wieder aufgenommen wird, wenn sich das Dokument in einem Hintergrundtab befindet.

An diesem Punkt kann Ihre Seite oder App beginnen, alles Notwendige zu tun, das darauf angewiesen ist, dass das Video gestartet wurde.

### Die Methode play()

Der Begriff "automatische Wiedergabe" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien mit Audio außerhalb des Kontexts einer Benutzeraktion zu initiieren. Dies erfolgt durch Aufruf der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Medienelements.

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich das `autoplay`-Attribut zu verwenden, da die Unterstützung für Autoplay-Einstellungen allgemein verbreiteter für das `autoplay`-Attribut ist als für andere Mittel, Medien automatisch abzuspielen. Es ermöglicht auch dem Browser, die Verantwortung für den Start der Wiedergabe zu übernehmen und die zeitliche Abstimmung dafür optimal zu gestalten.

#### Beispiel: Wiedergabe von Video

Dieses einfache Beispiel spielt das erste {{HTMLElement("video")}}-Element ab, das im Dokument gefunden wird. `play()` lässt die Wiedergabe erst beginnen, wenn das Dokument die Erlaubnis hat, Medien automatisch wiederzugeben.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Fehlern

Es ist viel einfacher, Fehler bei der automatischen Wiedergabe zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode verwenden, um sie zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Medien erfolgreich zu spielen beginnen, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (z.B. wenn die automatische Wiedergabe verweigert wird). Wenn die automatische Wiedergabe fehlschlägt, möchten Sie wahrscheinlich dem Benutzer eine Möglichkeit bieten, manuell zu erlauben, dass der Browser den Benutzer um Erlaubnis zur Wiedergabe von Medien bittet.

Sie könnten Code wie diesen verwenden, um die Aufgabe zu erledigen:

```js
let startPlayPromise = videoElem.play();

if (startPlayPromise !== undefined) {
  startPlayPromise
    .then(() => {
      // Start whatever you need to do only after playback
      // has begun.
    })
    .catch((error) => {
      if (error.name === "NotAllowedError") {
        showPlayButton(videoElem);
      } else {
        // Handle a load or playback error
      }
    });
}
```

Das Erste, was wir mit dem Ergebnis von `play()` machen, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, weil in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgab. Das Zurückgeben eines Versprechens, das Ihnen ermöglicht, den Erfolg oder das Scheitern der Operation zu bestimmen, wurde erst kürzlich hinzugefügt. Die Überprüfung auf `undefined` verhindert, dass dieser Code bei älteren Versionen von Webbrowsern mit einem Fehler fehlschlägt.

Wenn das von `play()` zurückgegebene Promise ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann das tun, was notwendig ist, wenn die automatische Wiedergabe begonnen hat.

Wir fügen dann dem Versprechen einen {{jsxref("Promise.catch", "catch()")}}-Handler hinzu. Dieser betrachtet den Fehlernamens [`name`](/de/docs/Web/API/DOMException/name), um zu sehen, ob es sich um `NotAllowedError` handelt. Dies weist darauf hin, dass die Wiedergabe aufgrund eines Erlaubnisproblems, wie der Verweigerung der automatischen Wiedergabe, fehlgeschlagen ist. Wenn das der Fall ist, sollten wir eine Benutzeroberfläche präsentieren, die es dem Benutzer ermöglicht, die Wiedergabe manuell zu starten; das wird hier durch eine Funktion `showPlayButton()` behandelt.

Jede andere Fehlerbehandlung wird entsprechend vorgenommen.

Wenn Sie das Video nach der ersten Interaktion mit der Seite starten möchten, könnten Sie dazu [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden:

```js
let playAttempt = setInterval(() => {
  videoElem
    .play()
    .then(() => {
      clearInterval(playAttempt);
    })
    .catch((error) => {
      console.log("Unable to play the video, User has not interacted yet.");
    });
}, 3000);
```

## Automatische Wiedergabe mit der Web Audio API

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App die Wiedergabe von Audio mit der `start()`-Methode auf einem Quellenknoten starten, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verbunden ist. Dies außerhalb des Kontexts einer Benutzeraktion zu tun, fällt unter die Regeln zur automatischen Wiedergabe.

## Die Autoplay-Erlaubnisrichtlinie

Zusätzlich zur browserseitigen Verwaltung und Kontrolle über die Funktionsweise der automatischen Wiedergabe, wie oben beschrieben, kann ein Webserver auch seine Bereitschaft zum Ausdruck bringen, die automatische Wiedergabe zuzulassen. Der {{Glossary("HTTP", "HTTP")}}-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive {{httpheader("Permissions-Policy/autoplay", "autoplay")}} wird verwendet, um zu steuern, welche Domains, wenn überhaupt, zur automatischen Wiedergabe von Medien verwendet werden können. Standardmäßig ist die `autoplay`-Permissions-Policy auf `self` gesetzt, was bedeutet, dass die automatische Wiedergabe erlaubt ist, da sie auf der gleichen Domain wie das Dokument gehostet werden.

Sie können auch eine leere Positivliste (`()`) angeben, um die automatische Wiedergabe vollständig zu deaktivieren, `*`, um die automatische Wiedergabe von allen Domains zuzulassen, oder eine oder mehrere bestimmte Ursprungsorte, von denen aus Medien automatisch abgespielt werden können. Diese Ursprungsorte werden durch Leerzeichen getrennt.

> [!NOTE]
> Die festgelegte Erlaubnisrichtlinie gilt für das Dokument und jedes darin eingebettete {{HTMLElement("iframe")}}, es sei denn, diese Frames enthalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Erlaubnisrichtlinie für diesen Frame und alle darin eingebetteten Frames setzt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf einem `<iframe>` verwenden, um eine Erlaubnisrichtlinie für diesen Frame und seine verschachtelten Frames anzugeben, können Sie auch den Wert `'src'` angeben, um die automatische Wiedergabe von Medien nur von derselben Domain wie die, die im [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des Frames angegeben ist, zuzulassen.

### Beispiel: Zulassen der automatischen Wiedergabe nur von der Domain des Dokuments

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um nur Medien von der {{Glossary("origin", "Ursprungsquelle")}} des Dokuments automatisch abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Ermöglichen der automatischen Wiedergabe und des Vollbildmodus

Das Hinzufügen der Erlaubnis für die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zum vorherigen Beispiel führt zu einem `Permissions-Policy`-Header, wie der folgende, wenn der Vollbildzugriff unabhängig von der Domain erlaubt ist; ein Domain-Einschränkung kann bei Bedarf ebenfalls hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, gewährt durch die `allow`-Eigenschaft des `<iframe>`-Elements, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Zulassen der automatischen Wiedergabe von bestimmten Quellen

Der `Permissions-Policy`-Header, um Medien sowohl von der eigenen Domain des Dokuments (oder `<iframe>`) als auch von `https://example.media` abzuspielen, sieht wie folgt aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann geschrieben werden, um zu spezifizieren, dass diese Autoplay-Richtlinie auf sich selbst und alle Kinderrahmen angewendet werden soll, folgendermaßen:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Deaktivieren der automatischen Wiedergabe

Das Setzen der `autoplay`-Permissions-Policy auf `()`/`none` deaktiviert die automatische Wiedergabe vollständig für das Dokument oder `<iframe>` und alle verschachtelten Frames. Der HTTP-Header ist:

```http
Permissions-Policy: autoplay=()
```

Mit der `allow`-Eigenschaft des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Best Practices

Tipps und empfohlene Best Practices, um Ihnen zu helfen, das Beste aus der Arbeit mit der automatischen Wiedergabe zu machen, werden hier angeboten.

### Umgang mit Fehlern bei der automatischen Wiedergabe mit Mediensteuerungen

Ein häufiger Anwendungsfall für die automatische Wiedergabe besteht darin, automatisch einen Videoclip zu starten, der zu einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionalität der Seite gehört. Um Videos wie diese automatisch abzuspielen, haben Sie zwei Optionen: keinen Audiotrack haben, oder einen Audiotrack haben, aber das {{HTMLElement("video")}}-Element standardmäßig so konfigurieren, dass es stumm ist, wie folgt:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen enthält (normalerweise Wiedergabe/Pause, Scrubbing durch die Zeitleiste des Videos, Lautstärkesteuerung und Stummschalten); da das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut eingeschlossen ist, und das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut, das für die automatische Wiedergabe in Safari erforderlich ist, wird das Video automatisch abgespielt, aber mit stummgeschaltetem Audio. Der Benutzer hat jedoch die Möglichkeit, den Ton durch einen Klick auf die unmute-Schaltfläche in den Steuerungen wieder zu aktivieren.

## Browser-Konfigurationsoptionen

Browser können Präferenzen haben, die steuern, wie die automatische Wiedergabe funktioniert oder wie die Blockierung der automatischen Wiedergabe behandelt wird. Hier werden alle Präferenzen aufgelistet, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein könnten. Dazu gehören alle, die beim Testen oder Debuggen helfen könnten, sowie jede, die so eingestellt werden könnte, dass Sie vorbereitet sein müssen, damit umzugehen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Präferenz, die angibt, ob die nicht standardisierte `HTMLMediaElement.allowedToPlay`-Eigenschaft dem Web zur Verfügung steht. Aktuell ist dies standardmäßig `false` (außer in Nightly-Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist daher weder auf {{HTMLElement("audio")}} noch auf {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Präferenz, wenn `true`, erlaubt es den Hintergrundskripten von Browsererweiterungen, Audio-Medien automatisch abzuspielen. Wenn dieser Wert auf `false` gesetzt wird, wird diese Fähigkeit deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Präferenz, die, wenn `true` (der Standard), erlaubt, dass aktuell stummgeschaltete Audiomedien automatisch abgespielt werden. Wenn dies auf `false` geändert wurde, wird Medien mit einem Audiotrack nicht erlaubt zu spielen, selbst wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Präferenz, die anzeigt, ob die Blockierung der automatischen Wiedergabe auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, wird die Web-Audio immer zur automatischen Wiedergabe zulassen.
    Wenn `true`, können Audiokontexte erst auf Seiten abgespielt werden, nachdem es {{Glossary("Sticky_activation", "Sticky activation")}} gegeben hat.
    Der Standard ist `true`.
- `media.autoplay.default`
  - : Eine ganze Zahlenpräferenz, die festlegt, ob die Konfiguration für die Unterstützung der automatischen Wiedergabe pro Domain standardmäßig erlaubt (`0`), blockiert (`1`) oder nach Bestätigung (`2`) erfolgt. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly- Builds)
  - : Eine boolesche Präferenz, die steuert, ob die Erkennung von Benutzeraktionen erlaubt ist, um die Einstellung von `media.autoplay.default` zu überschreiben. Wenn `media.autoplay.default` _nicht_ auf `0` (automatische Wiedergabe standardmäßig erlaubt) gesetzt ist, erlaubt diese Präferenz, wenn `true`, die automatische Wiedergabe von Medien mit Audiotracks trotzdem, wenn die Seite durch Benutzeraktionen aktiviert wurde, und Medien, die nicht hörbar sind, sind überhaupt nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Präferenz, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie in einem Hintergrundtab gestartet wird. Der Standardwert, `true`, bedeutet, dass die automatische Wiedergabe auch dann nicht stattfinden wird, wenn sie anderweitig verfügbar ist, bis ein Tab in den Vordergrund gebracht wird. Dies verhindert die ablenkende Situation, in der ein Tab beginnt, Ton abzuspielen und der Benutzer den Tab nicht unter allen seinen Tabs und Fenstern finden kann.

## Siehe auch

- [Web-Medien-Technologien](/de/docs/Web/Media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lernleitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Audio-Grundlagen für mehrere Browser](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
