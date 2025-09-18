---
title: Anleitung zur automatischen Wiedergabe für Medien und Web Audio APIs
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiospuren) unmittelbar nach dem Laden einer Seite kann für Nutzer eine unwillkommene Überraschung darstellen. Während die automatische Wiedergabe von Medien einen nützlichen Zweck erfüllt, sollte sie sorgfältig und nur bei Bedarf eingesetzt werden. Um den Nutzern Kontrolle darüber zu geben, bieten Browser häufig verschiedene Formen der Blockierung der automatischen Wiedergabe an. In diesem Leitfaden werden wir die Funktionalität der automatischen Wiedergabe in den verschiedenen Medien- und Web Audio APIs behandeln, einschließlich einer kurzen Übersicht darüber, wie man die Funktion der automatischen Wiedergabe nutzt und wie man mit Browsern arbeitet, um der Blockierung der automatischen Wiedergabe gerecht zu werden.

Die Blockierung der automatischen Wiedergabe wird **nicht** auf {{HTMLElement("video")}}-Elemente angewendet, wenn das Medienquellmaterial keine Audiospur hat oder wenn die Audiospur stummgeschaltet ist. Medien mit einer aktiven Audiospur werden als **hörbar** angesehen, und die Blockierung der automatischen Wiedergabe gilt für sie. **Unhörbare** Medien sind nicht von der Blockierung der automatischen Wiedergabe betroffen.

## Automatische Wiedergabe und deren Blockierung

Der Begriff **automatische Wiedergabe** bezieht sich auf jede Funktion, die dazu führt, dass Medien ohne eine spezifische Wiedergabeanforderung eines Nutzers abzuspielen beginnen. Dies schließt sowohl die Verwendung von HTML-Attributen zur automatischen Wiedergabe von Medien als auch die Nutzung von JavaScript-Code ein, um die Wiedergabe außerhalb des Kontexts der Behandlung von Nutzereingaben zu starten.

Das bedeutet, dass sowohl die folgende als auch die nachfolgende Methode als Verhaltensweisen zur automatischen Wiedergabe gelten und somit den Richtlinien zur Blockierung der automatischen Wiedergabe des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Funktionen und APIs können von der Blockierung der automatischen Wiedergabe betroffen sein:

- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- Die [Web-Audio-API](/de/docs/Web/API/Web_Audio_API)

Aus der Perspektive des Nutzers kann eine Seite oder App, die plötzlich ohne Vorwarnung Geräusche macht, erschrecken, unpraktisch oder abschreckend wirken. Aus diesem Grund erlauben Browser die automatische Wiedergabe im Allgemeinen nur unter bestimmten Umständen.

### Verfügbarkeit von automatischer Wiedergabe

Im Allgemeinen können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn mindestens eine der folgenden Bedingungen zutrifft:

- Der Ton ist stummgeschaltet oder die Lautstärke ist auf 0 gesetzt
- Der Nutzer hat mit der Seite interagiert (durch Klicken, Tippen, Tasten drücken usw.)
- Wenn die Seite in die Whitelist aufgenommen wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Nutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenmerkmale
- Wenn die Berechtigungspolitik für automatische Wiedergabe [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um automatischen Wiedergabesupport für ein {{HTMLElement("iframe")}} und sein Dokument zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert. Die genauen Situationen, die zu einer Blockierung führen, und die Details, wie Seiten in die Whitelist aufgenommen werden, unterscheiden sich je nach Browser, aber die oben genannten Bedingungen sind eine gute Orientierung.

Für Details siehe die Richtlinien zur automatischen Wiedergabe für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt wird die Wiedergabe von Medien, die Audio beinhalten, im Allgemeinen blockiert, wenn die Wiedergabe programmgesteuert in einem Tab initiiert wird, der noch keine Benutzerinteraktion hatte. Browser können zusätzlich unter anderen Umständen blockieren.

## Automatische Wiedergabe von Medienelementen

Nun, da wir besprochen haben, was automatische Wiedergabe ist und was sie verhindern kann, werden wir uns damit befassen, wie Ihre Website oder App Medien beim Laden der Seite automatisch abspielen kann, wie Sie erkennen, wann die automatische Wiedergabe nicht stattfindet, und Tipps zum Umgang, wenn die automatische Wiedergabe vom Browser verweigert wird.

### Das Attribut 'autoplay'

Der einfachste Weg, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) Attribut zu Ihrem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` auf `true` gesetzt ist, beginnt das Medium automatisch zu spielen, sobald wie möglich, nachdem Folgendes eingetreten ist:

- Die Seite ist für die Nutzung der Funktion der automatischen Wiedergabe zugelassen
- Das Element wurde während des Seitenladens erstellt
- Genügend Medien wurden empfangen, um die Wiedergabe zu beginnen und ohne Unterbrechung bis zum Ende der Medien fortzufahren, vorausgesetzt, es gibt keine dramatischen Änderungen in der Netzwerkperformance oder Bandbreite.

#### Beispiel: Das Attribut 'autoplay'

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob die automatische Wiedergabe erlaubt ist

Wenn die automatische Wiedergabe für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob die automatische Wiedergabe erlaubt, nicht erlaubt oder nur für unhörbare Inhalte unterstützt wird.
Zum Beispiel, wenn Ihre Anwendung ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur die automatische Wiedergabe unhörbarer Inhalte zulässt, können Sie es entweder stummschalten oder ein Video ohne Audiospur bereitstellen.
Wenn Sie wissen, dass die automatische Wiedergabe nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (mithilfe des [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)-Attributs) oder das Laden des Videos aufschieben, bis es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Richtlinie zur automatischen Wiedergabe für eine Art von Medienfunktion (d.h. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen oder zu überprüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den `mediaelement`-String übergeben, um die automatische Wiedergaberichtlinie für alle Medienelemente im Dokument zu erhalten (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement` Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet, und dass es standardmäßig zum Abspielen mit Audio konfiguriert ist.
Wenn die automatische Wiedergabe nur für unhörbare Inhalte erlaubt ist, stummschalten wir das Audio; wenn die automatische Wiedergabe nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code zum Testen eines bestimmten Elements oder Audiokontextes ist derselbe, außer dass Sie das zu testende Element oder den Kontext anstelle des Typs übergeben.
Hier übergeben wir das zu testende `video`-Objekt.

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

Die Richtlinie zur automatischen Wiedergabe für einen Typ kann sich aufgrund von Benutzerinteraktionen mit der Seite, dem Dokument oder einem bestimmten Element ändern.
Ebenso kann sich auf einigen Browsern die Richtlinie für ein bestimmtes Element ändern, obwohl die Richtlinie für den Typ unverändert bleibt (zum Beispiel auf Browsern, bei denen das Berühren eines bestimmten Elements nur dieses Element in die Lage versetzen kann, automatisch abzuspielen).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Richtlinie zur automatischen Wiedergabe geändert hat (entweder für einen Typ oder ein Element), empfehlen wir generell die Überprüfung der Richtlinie beim Laden der Seite mit dem Typ.

#### Beispiel 3: Erkennen eines Fehlers bei der automatischen Wiedergabe als Fallback

Kein spezifisches Ereignis (oder andere Benachrichtigung) wird durch Erfolg oder Misserfolg der automatischen Wiedergabe ausgelöst, sodass Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit haben, festzustellen, ob die automatische Wiedergabe unterstützt wird, oder zu reagieren, wenn sie ausgelöst oder nicht ausgelöst wird.

Ein Ansatz ist, auf das erste Auftreten des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu hören, welches auf dem Medienelement ausgelöst wird, wenn es nach einer Pause _und_ wenn die automatische Wiedergabe erfolgt fortgesetzt wird.
Das bedeutet, dass beim ersten Mal, wenn das `play`-Ereignis ausgelöst wird, Sie wissen, dass Ihr Medium zum ersten Mal, nachdem die Seite geöffnet wurde, gestartet wird.

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler ausgestattet ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` gehandhabt, die als Eingabe das `play`-Ereignis erhält.

`handleFirstPlay()` sieht so aus:

```js
const video = document.getElementById("video");
video.addEventListener("play", handleFirstPlay);

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

Nachdem wir eine Referenz auf das Videoelement vom [`Event`](/de/docs/Web/API/Event)-Objekt mit dem [`target`](/de/docs/Web/API/Event/target) erhalten haben, verwenden wir es, um den Ereignislistener zu entfernen.
Damit wird verhindert, dass zukünftige `play`-Ereignisse an den Handler übergeben werden. Das könnte passieren, wenn das Video vom Nutzer pausiert und wieder aufgenommen wird oder automatisch vom Browser, wenn das Dokument in einem Hintergrund-Tab ist.

An diesem Punkt kann Ihre Website oder App beginnen, was immer erforderlich ist, um auf das angelaufene Video zu reagieren.

### Die play()-Methode

Der Begriff "automatische Wiedergabe" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio beinhalten, außerhalb des Kontexts der Behandlung eines Benutzerereignisses zu starten. Dies erfolgt durch Aufruf der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Medienelements.

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich das `autoplay`-Attribut zu verwenden, da die Unterstützung für automatische Wiedergabepräferenzen für das `autoplay`-Attribut weiter verbreitet ist als für andere Mittel, um Medien automatisch abzuspielen. Es ermöglicht dem Browser auch, die Verantwortung für den Start der Wiedergabe zu übernehmen und die Zeitoptimierung zu verwalten.

#### Beispiel: Video abspielen

Dieses Beispiel spielt das erste {{HTMLElement("video")}}-Element im Dokument ab. `play()` lässt die Wiedergabe nur dann beginnen, wenn das Dokument die Erlaubnis hat, automatisch Medien abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Behandlung von play()-Fehlschlägen

Es ist viel einfacher, einen Fehler bei der automatischen Wiedergabe von Medien mit der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode zu erkennen. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Medium erfolgreich beginnt zu spielen, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (z.B. wenn die automatische Wiedergabe verweigert wird). Wenn die automatische Wiedergabe fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit bieten, mit der der Nutzer dem Browser manuell die Erlaubnis zum Abspielen von Medien erteilen kann.

Sie könnten zum Beispiel folgenden Code verwenden, um das zu erreichen:

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

Das erste, was wir mit dem Ergebnis von `play()` machen, ist sicherzustellen, dass es nicht `undefined` ist. Wir prüfen dies, weil in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgegeben hat. Die Rückgabe eines Versprechens (Promise), um den Erfolg oder Misserfolg der Operation zu bestimmen, wurde später hinzugefügt. Das Prüfen auf `undefined` verhindert, dass dieser Code bei älteren Versionen von Webbrowsern mit einem Fehler fehlschlägt.

Wird das von `play()` zurückgegebene Promise ohne Fehler aufgelöst, wird die `then()`-Klausel ausgeführt und kann beginnen, was auch immer benötigt wird, wenn die automatische Wiedergabe begonnen hat.

Wir fügen dann dem Promise einen {{jsxref("Promise.catch", "catch()")}}-Handler hinzu. Dieser prüft den `name` des Fehlers, um festzustellen, ob es sich um einen `NotAllowedError` handelt. Dies signalisiert, dass die Wiedergabe aufgrund eines Berechtigungsproblems, wie z.B. einer verweigerten automatischen Wiedergabe, fehlgeschlagen ist. In diesem Fall sollten wir eine Benutzeroberfläche anbieten, um dem Nutzer die manuelle Wiedergabesteuerung zu ermöglichen; das wird hier über eine Funktion `showPlayButton()` gelöst.

Andere Fehler werden entsprechend behandelt.

Möchten Sie das Video nach der ersten Interaktion mit der Seite abspielen, könnte [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet werden, um dies zu erreichen:

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

## Automatische Wiedergabe mit der Web-Audio-API

In der [Web-Audio-API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio abspielen, indem die `start()`-Methode auf einem Quellenknoten aufgerufen wird, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verknüpft ist. Geschieht dies außerhalb des Kontexts der Behandlung eines Benutzerereignisses, unterliegt es den Regeln zur automatischen Wiedergabe.

## Die automatische Wiedergabe Permissions Policy

Neben der browserseitigen Steuerung und Verwaltung der automatischen Wiedergabefunktionalität, die oben beschrieben wurde, kann ein Webserver auch seine Bereitschaft äußern, die automatische Wiedergabe zuzulassen. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}}-Header mit der {{httpheader("Permissions-Policy/autoplay", "autoplay")}}-Direktive wird verwendet, um zu steuern, welche Domains, wenn überhaupt, für die automatische Wiedergabe von Medien verwendet werden können. Standardmäßig ist die `autoplay`-Permissions Policy auf `self` gesetzt, was bedeutet, dass die automatische Wiedergabe erlaubt ist, solange sie auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Whitelist (`()`) angeben, um die automatische Wiedergabe vollständig zu deaktivieren, `*`, um die automatische Wiedergabe von allen Domains zuzulassen, oder eine oder mehrere spezifische Ursprünge, von denen Medien automatisch abgespielt werden können. Diese Ursprünge werden durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Permissions Policy gilt für das Dokument und jedes darin verschachtelte {{HTMLElement("iframe")}}, es sei denn, diese Rahmen enthalten ein [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow), das eine neue Permissions Policy für diesen Frame und alle darin verschachtelten Frames definiert.

Wenn das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut auf einem `<iframe>` verwendet wird, um eine Permissions Policy für diesen Frame und seine verschachtelten Frames festzulegen, können Sie auch den Wert `'src'` angeben, um die automatische Wiedergabe von Medien nur von derselben Domain zu erlauben, die im [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut des Frames angegeben ist.

### Beispiel: Automatische Wiedergabe nur von der Domain des Dokuments zulassen

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um Medien nur von der Herkunft des Dokuments {{Glossary("origin", "origin")}} automatisch abspielen zu lassen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Automatische Wiedergabe und Vollbildmodus zulassen

Wenn die Berechtigung für die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zum vorherigen Beispiel hinzugefügt wird, ergibt sich ein `Permissions-Policy`-Header, wie er unten gezeigt wird, wenn der Vollbildzugriff unabhängig von der Domain erlaubt ist; eine Domänenbeschränkung kann nach Bedarf hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, mit dem `allow`-Attribut des `<iframe>`-Elements gewährt, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Automatische Wiedergabe von bestimmten Quellen zulassen

Der `Permissions-Policy`-Header, um Medien sowohl vom Dokument (oder `<iframe>`) aus von der eigenen Domain als auch von `https://example.media` abspielen zu lassen, sieht so aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann geschrieben werden, um anzugeben, dass diese Richtlinie zur automatischen Wiedergabe auf sich selbst und alle darin enthaltenen Frames angewendet wird, wie folgt:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Automatische Wiedergabe deaktivieren

Das Setzen der `autoplay`-Permissions Policy auf `()`/`none` deaktiviert die automatische Wiedergabe vollständig für das Dokument oder `<iframe>` und alle darin verschachtelten Frames. Der HTTP-Header lautet:

```http
Permissions-Policy: autoplay=()
```

Verwendung des `allow`-Attributs des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Beste Praktiken

Hier werden Tipps und empfohlene bewährte Vorgehensweisen angeboten, um das Beste aus der Arbeit mit automatischer Wiedergabe herauszuholen.

### Umgang mit Fehlern bei der automatischen Wiedergabe mit Mediensteuerungen

Ein häufiger Anwendungsfall für die automatische Wiedergabe ist das automatische Abspielen eines Videoclips, der zu einem Artikel, einer Anzeige oder einem Vorschauelement der Hauptfunktionalität der Seite gehört. Um solche Videos zu autoplayen, haben Sie zwei Optionen: keine Audiospur zu haben oder eine Audiospur zu haben, jedoch das {{HTMLElement("video")}}-Element so zu konfigurieren, dass Audio standardmäßig stummgeschaltet ist, wie folgt:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen beinhaltet (normalerweise Abspielen/Pause, Verschieben in der Zeitleiste des Videos, Lautstärkeregelung und Stummschaltung); und da das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)-Attribut enthalten ist, und das [`playsinline`](/de/docs/Web/HTML/Reference/Elements/video#playsinline)-Attribut benötigt wird, damit die automatische Wiedergabe in Safari funktioniert, wird das Video automatisch abgespielt, jedoch mit stummgeschaltetem Ton. Der Nutzer hat jedoch die Möglichkeit, den Ton wieder zu aktivieren, indem er auf die Entstummungstaste in den Steuerungen klickt.

## Browser-Konfigurationsoptionen

Browser können Voreinstellungen haben, die beeinflussen, wie die automatische Wiedergabe funktioniert oder wie die Blockierung der automatischen Wiedergabe gehandhabt wird. Hier werden alle derartigen Voreinstellungen aufgelistet, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein können. Dazu gehören auch solche, die beim Testen oder Debuggen helfen können sowie Voreinstellungen die in einer Art festgelegt werden könnten, die es zu beachten gilt.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Voreinstellung, die angibt, ob die nicht standardmäßige `HTMLMediaElement.allowedToPlay`-Eigenschaft im Web verfügbar ist. Der Standardwert ist derzeit `false` (außer in Nightly-Builds, wo der Standardwert `true` ist). Wenn diese Einstellung `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist somit weder in {{HTMLElement("audio")}} noch in {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Voreinstellung erlaubt es, wenn auf `true` gesetzt, Hintergrundskripten von Browser-Erweiterungen, automatisch Audiomedien abzuspielen. Wenn dieser Wert auf `false` gesetzt ist, wird diese Funktion deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Voreinstellung, die, wenn `true` (der Standard), es erlaubt, dass Audio-Medien, die derzeit stummgeschaltet sind, automatisch abgespielt werden. Wenn diese auf `false` geändert wurde, wird Medien mit Audiospur nicht erlaubt, zu spielen, auch wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Voreinstellung, die angibt, ob die Blockierung der automatischen Wiedergabe auf die [Web-Audio-API](/de/docs/Web/API/Web_Audio_API) angewendet werden soll.
    Wenn `false`, ist Web-Audio immer zur automatischen Wiedergabe zugelassen.
    Wenn `true`, können Audio-Kontexte nur nach {{Glossary("Sticky_activation", "Sticky activation")}} auf Seiten abgespielt werden.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine ganze Zahl, die angibt, ob die Konfiguration der automatischen Wiedergabe pro Domain standardmäßig erlaubt (`0`), blockiert (`1`), oder bei Nutzung zur Abfrage verleitet (`2`) wird. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly-Builds)
  - : Eine boolesche Voreinstellung, die kontrolliert, ob die Erkennung von Benutzeraktionen erlaubt ist, die Einstellung von `media.autoplay.default` zu überschreiben. Wenn `media.autoplay.default` _nicht_ auf `0` gesetzt ist (automatische Wiedergabe standardmäßig erlaubt), lässt diese Voreinstellung, wenn sie `true` ist, die automatische Wiedergabe von Medien mit Audiospuren zu, wenn die Seite durch Benutzeraktionen aktiviert wurde, und nicht hörbare Medien werden überhaupt nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Voreinstellung, die angibt, ob die Wiedergabe von Medien blockiert wird, wenn sie in einem Hintergrund-Tab gestartet wird. Der Standardwert `true` bedeutet, dass auch wenn ansonsten verfügbar, die automatische Wiedergabe erst dann erfolgt, nachdem ein Tab in den Vordergrund gebracht wurde. Dies verhindert die ablenkende Situation, in der ein Tab beginnt, Töne abzuspielen und der Benutzer den Tab unter all seinen Tabs und Fenstern nicht findet.

## Siehe auch

- [Webmedien-Technologien](/de/docs/Web/Media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lernleitfaden)
- [Verwendung des Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-browser Audio-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
