---
title: Autoplay-Leitfaden für Medienelemente und Web Audio APIs
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) direkt beim Laden einer Seite kann für Nutzer eine unerwünschte Überraschung sein. Obwohl das automatische Abspielen von Medien einen nützlichen Zweck erfüllt, sollte es sorgfältig und nur bei Bedarf eingesetzt werden. Um Nutzern Kontrolle darüber zu geben, bieten Browser häufig verschiedene Formen der Autoplay-Blockierung an. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Medien- und Web Audio APIs, einschließlich eines kurzen Überblicks darüber, wie man Autoplay nutzt und wie man mit Browsern arbeitet, um Autoplay-Blockierungen elegant zu handhaben.

Autoplay-Blockierungen werden _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn das Quellmedium keinen Audiotrack hat oder der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack werden als **hörbar** betrachtet, und Autoplay-Blockierungen gelten für sie. **Unhörbare** Medien sind von Autoplay-Blockierungen nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die Medien abspielen lässt, ohne dass der Nutzer speziell die Wiedergabe angefordert hat. Dies umfasst sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch den Einsatz von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts der Nutzerinteraktion zu starten.

Das bedeutet, dass beide der folgenden Szenarien als Autoplay-Verhalten gelten und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Funktionen und APIs können von Autoplay-Blockierungen betroffen sein:

- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus Sicht des Nutzers kann eine Webseite oder App, die ohne Vorwarnung Lärm macht, aufdringlich, unpraktisch oder abschreckend sein. Aus diesem Grund erlauben Browser in der Regel nur dann erfolgreich Autoplay, wenn bestimmte Umstände erfüllt sind.

### Verfügbarkeit von Autoplay

In der Regel können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden können, wenn _mindestens eine_ der folgenden Bedingungen erfüllt ist:

- Der Ton ist stummgeschaltet oder seine Lautstärke ist auf 0 gestellt
- Der Nutzer hat mit der Seite interagiert (durch Klicken, Tippen, Tasten drücken usw.)
- Wenn die Seite auf eine Positivliste gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Nutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen
- Wenn die Autoplay-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und seinem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Umstände, die zu einer Blockierung führen, und die Einzelheiten, wie Seiten auf eine Positivliste gesetzt werden, variieren von Browser zu Browser, aber die obigen Richtlinien sind hilfreich.

Für Details siehe die Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt, die Wiedergabe von Medien, die Audio enthalten, wird im Allgemeinen blockiert, wenn die Wiedergabe programmgesteuert in einem Tab gestartet wird, mit dem noch keine Nutzerinteraktion stattgefunden hat. Browser können darüber hinaus unter anderen Umständen blockieren.

## Autoplay von Medienelementen

Nachdem wir nun behandelt haben, was Autoplay ist und was verhindern kann, dass es erlaubt wird, betrachten wir, wie Ihre Website oder App Medien automatisch beim Laden der Seite abspielen kann, wie man erkennt, wann Autoplay nicht stattfindet, und Tipps zur Bewältigung, wenn Autoplay vom Browser verweigert wird.

### Das autoplay-Attribut

Der einfachste Weg, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut zu Ihrem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` auf `true` gesetzt ist, beginnt das Medium automatisch zu spielen, sobald wie möglich nachdem Folgendes eingetreten ist:

- Der Seite ist die Nutzung von Autoplay-Funktionalität erlaubt
- Das Element wurde während des Seitenladens erstellt
- Genug Medien wurden empfangen, um die Wiedergabe zu beginnen und ohne Unterbrechung bis zum Ende des Mediums fortzusetzen, vorausgesetzt, es treten keine dramatischen Änderungen in der Netzwerkausführung oder Bandbreite auf.

#### Beispiel: Das autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob Autoplay erlaubt, nicht erlaubt oder nur für unhörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung zum Beispiel ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das automatische Abspielen unhörbarer Inhalte erlaubt, können Sie es entweder stumm schalten oder ein Video ohne Audiotrack bereitstellen.
Wenn Ihnen bekannt ist, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (mithilfe des [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attributs) oder entscheiden, das Video erst zu laden, wenn es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für eine Art von Medienfeature (d.h. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen oder um zu prüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den `mediaelement`-String verwenden, um die Autoplay-Richtlinie für alle Medienelemente im Dokument zu erhalten (verwenden Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und so konfiguriert ist, dass es standardmäßig mit Audio automatisch abspielt.
Wenn Autoplay nur für unhörbare Inhalte erlaubt ist, schalten wir den Ton stumm; wenn Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code, um ein spezifisches Element oder einen Audiokontext zu testen, ist derselbe, außer dass Sie das zu testende Element oder den Kontext anstelle des Typ-Strings übergeben.
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

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund der Nutzerinteraktion mit der Seite, dem Document oder einem bestimmten Element ändern.
Ähnlich kann sich in einigen Browsern die Richtlinie für ein bestimmtes Element ändern, auch wenn sich die Richtlinie für den Typ nicht geändert hat (zum Beispiel in Browsern, in denen das Berühren eines bestimmten Elements es erlaubt, nur eben dieses Element automatisch abzuspielen).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, die Richtlinie beim Laden der Seite mit dem Typ zu prüfen.

#### Beispiel 3: Feststellen von Autoplay-Ausfällen als Fallback

Kein spezifisches Ereignis (oder eine andere Benachrichtigung) wird durch den Erfolg oder das Scheitern von Autoplay ausgelöst, sodass Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keinen einfachen Weg haben, festzustellen, ob Autoplay unterstützt wird, oder zu reagieren, wenn es aktiviert oder nicht aktiviert wurde.

Ein Ansatz besteht darin, auf das erste Vorkommen des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu hören, das auf dem Medienelement auftritt, wenn es nach einer Pause wieder fortgesetzt wird _und_ wenn Autoplay auftritt.
Das bedeutet, dass das erste Mal, wenn das `play`-Event ausgelöst wird, Sie wissen, dass Ihr Medium das erste Mal gestartet wird, nachdem die Seite geöffnet wurde.

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Event-Handler versehen ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die als Eingabe das `play`-Event erhält.

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

Nachdem wir eine Referenz auf das Video-Element vom [`Event`](/de/docs/Web/API/Event)-Objekt's [`target`](/de/docs/Web/API/Event/target) erhalten haben, verwenden wir es, um den Ereignislistener zu entfernen.
Dies verhindert, dass irgendwelche zukünftigen `play`-Ereignisse an den Handler geliefert werden. Das könnte passieren, wenn das Video von einem Nutzer pausiert und wieder gestartet wird oder automatisch vom Browser, wenn das Dokument in einem Hintergrundtab ist.

An diesem Punkt kann Ihre Site oder App mit allem beginnen, was sie braucht, um sich auf den gestarteten Videobetrieb zu verlassen.

### Die play() Methode

Der Begriff "Autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien auszulösen, die Audio enthalten, außerhalb des Kontexts der Bearbeitung eines Nutzerinteraktionsevents. Dies wird durch Aufrufen der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Medienelements durchgeführt.

> [!NOTE]
> Es wird dringend empfohlen, das `autoplay`-Attribut wann immer möglich zu verwenden, da die Unterstützung für Autoplay-Präferenzen für das `autoplay`-Attribut weiter verbreitet ist als für andere Mittel, um Medien automatisch abzuspielen. Es lässt den Browser auch die Verantwortung für das Starten der Wiedergabe übernehmen, sodass er den Zeitpunkt dafür optimieren kann.

#### Beispiel: Video abspielen

Dieses Beispiel spielt das erste {{HTMLElement("video")}}-Element im Dokument ab. `play()` startet die Wiedergabe nicht, es sei denn, das Dokument hat die Erlaubnis, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Ausfällen

Es ist viel einfacher, festzustellen, dass das Autoplay von Medien nicht gelungen ist, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode verwenden, um es zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Medium erfolgreich zu spielen beginnt, und abgelehnt wird, wenn die Wiedergabe nicht startet (z. B. wenn Autoplay verweigert wird). Wenn Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit bieten, dem Nutzer manuell zu erlauben, dem Browser zu sagen, dass der Nutzer die Genehmigung erteilen soll, Medien abzuspielen.

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

Das erste, was wir mit dem Ergebnis von `play()` machen, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, da in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgegeben hat. Die Rückgabe eines Promise, um den Erfolg oder das Scheitern der Operation bestimmen zu können, wurde erst kürzlich hinzugefügt. Durch das Überprüfen auf `undefined` wird verhindert, dass dieser Code in älteren Versionen von Webbrowsern mit einem Fehler fehlschlägt.

Wenn das von `play()` zurückgegebene Promise ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann mit allem fortfahren, was getan werden muss, wenn das Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler für das Promise hinzu. Dieser überprüft den [`name`](/de/docs/Web/API/DOMException/name) des Fehlers, um zu sehen, ob er `NotAllowedError` ist. Dies deutet darauf hin, dass die Wiedergabe aufgrund eines Berechtigungsproblems fehlgeschlagen ist, z. B. wenn das Autoplay abgelehnt wurde. Ist das der Fall, sollten wir eine Benutzeroberfläche bereitstellen, die es dem Benutzer ermöglicht, die Wiedergabe manuell zu starten; das wird hier von einer Funktion `showPlayButton()` behandelt.

Alle anderen Fehler werden wie angemessen behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite abspielen möchten, könnte [`setInterval()`](/de/docs/Web/API/Window/setInterval) dafür verwendet werden:

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

## Autoplay mit der Web Audio API

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio abspielen, indem die `start()`-Methode auf einem Quellknoten aufgerufen wird, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verbunden ist. Dies außerhalb des Kontexts der Bearbeitung eines Nutzerinteraktionenvents zu tun, unterliegt den Autoplay-Regeln.

## Die autoplay Permissions Policy

Zusätzlich zur browserseitigen Verwaltung und Steuerung über die oben beschriebene Autoplay-Funktionalität kann auch ein Webserver seine Bereitschaft ausdrücken, Autoplay zu erlauben. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}}-Header's {{httpheader("Permissions-Policy/autoplay", "autoplay")}}-Direktive wird verwendet, um zu steuern, welche Domains, falls vorhanden, zum automatischen Abspielen von Medien verwendet werden können. Standardmäßig ist die `autoplay`-Berechtigungsrichtlinie auf `self` gesetzt, was bedeutet, dass Autoplay gestattet ist, da sie auf derselben Domain wie das Dokument gehostet sind.

Sie können auch eine leere Erlaubnisliste (`()`) angeben, um Autoplay vollständig zu deaktivieren, `*`, um Autoplay von allen Domains zu erlauben, oder eine oder mehrere spezifische Ursprünge, von denen Medien automatisch abgespielt werden können. Diese Ursprünge werden durch Leerzeichen getrennt.

> [!NOTE]
> Die spezifizierte Berechtigungsrichtlinie gilt für das Dokument und alle darin verschachtelten {{HTMLElement("iframe")}}, es sei denn, diese Frames beinhalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Berechtigungsrichtlinie für diesen Frame und alle darin verschachtelten Frames setzt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf einem `<iframe>` verwenden, um eine Berechtigungsrichtlinie für diesen Frame und dessen verschachtelte Frames anzugeben, können Sie auch den Wert `'src'` angeben, um Autoplay von Medien nur aus derselben Domain zu erlauben, die im [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des Frames angegeben ist.

### Beispiel: Autoplay nur von der Domain des Dokuments zulassen

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um Medien nur vom {{Glossary("origin", "Origin")}} des Dokuments automatisch abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus erlauben

Die Hinzufügung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API)-Berechtigung zum vorherigen Beispiel führt zu einem `Permissions-Policy`-Header wie dem folgenden, wenn Vollbildzugriff unabhängig von der Domain erlaubt ist; eine Domänenbeschränkung kann bei Bedarf ebenfalls hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, die mit der `allow`-Eigenschaft des `<iframe>`-Elements gewährt werden, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von bestimmten Quellen erlauben

Der `Permissions-Policy`-Header, um Medien sowohl von der eigenen Domain des Dokuments (oder `<iframe>`s) als auch von `https://example.media` abzuspielen, sieht so aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} könnte geschrieben werden, um anzugeben, dass diese Autoplay-Richtlinie auf sich selbst und alle Kinderrahmen angewendet werden soll:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Autoplay deaktivieren

Das Setzen der `autoplay`-Berechtigungsrichtlinie auf `()`/`none` deaktiviert Autoplay vollständig für das Dokument oder `<iframe>` und alle verschachtelten Frames. Der HTTP-Header ist:

```http
Permissions-Policy: autoplay=()
```

Mit dem `allow`-Attribut des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Best Practices

Tipps und empfohlene Best Practices, die Ihnen helfen sollen, das Beste aus der Arbeit mit Autoplay zu machen, finden Sie hier.

### Umgang mit Autoplay-Ausfällen mit Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist, automatisch einen Videoclip zu starten, der zu einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionen der Seite gehört. Um Videos wie diese automatisch abzuspielen, haben Sie zwei Optionen: keinen Audiotrack haben oder einen Audiotrack haben aber das {{HTMLElement("video")}}-Element so konfigurieren, dass das Audio standardmäßig stummgeschaltet ist, etwa so:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen enthält (typischerweise Play/Pause, Scrubbing durch die Videozeitleiste, Lautstärkeregelung und Stummschalten); zudem, da das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut enthalten ist, und das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut, das für Autoplay in Safari erforderlich ist, wird das Video automatisch abgespielt, jedoch mit stummgeschaltetem Audio. Der Nutzer hat jedoch die Möglichkeit, das Audio wieder zu aktivieren, indem er auf die Unmute-Taste in den Steuerungen klickt.

## Browser-Konfigurationsoptionen

Browser können Präferenzen haben, die die Funktionsweise von Autoplay oder die Handhabung von Autoplay-Blockierungen steuern. Hier sind alle Präferenzen aufgeführt, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein können. Dazu gehören alle, die beim Testen oder Debuggen helfen können sowie alle, die in einer Weise eingestellt sein könnten, die Sie aufzufangen bereit sein müssen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Präferenz, die angibt, ob die nicht standardmäßige `HTMLMediaElement.allowedToPlay`-Eigenschaft für das Web verfügbar ist. Standardmäßig ist dies `false` (außer in Nightly-Builds, in denen es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist daher nicht auf {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Präferenz erlaubt, wenn `true`, Hintergrundskripten von Browsererweiterungen, audiobasierte Medien automatisch abzuspielen. Das Setzen dieses Werts auf `false` deaktiviert diese Fähigkeit. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Präferenz, die, wenn `true` (der Standard), es erlaubt, audiobasierte Medien, die derzeit stummgeschaltet sind, automatisch abzuspielen. Wenn dies auf `false` geändert wurde, wird Medien mit einem Audiotrack nicht erlaubt, auch wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Präferenz, die angibt, ob die Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet werden soll.
    Wenn `false`, darf Web Audio immer automatisch abgespielt werden.
    Wenn `true`, können Audiokontexte nur auf Seiten abgespielt werden, wenn es zu einer {{Glossary("Sticky_activation", "Sticky Activation")}} gekommen ist.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine Ganzzahl-Präferenz, die angibt, ob eine per-Domäne-Konfiguration für Autoplay standardmäßig erlaubt (`0`), blockiert (`1`) oder bei der Nutzung zur Bestätigung auffordert (`2`) ist. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly-Builds)
  - : Eine boolesche Präferenz, die steuert, ob Benutzeraktionen das Setzen von `media.autoplay.default` überschreiben dürfen. Ist `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt, erlaubt diese Präferenz, dass Medien mit Audiotracks trotzdem abgespielt werden, wenn die Seite durch Benutzeraktionen aktiviert wurde und Medien, die nicht hörbar sind, überhaupt nicht eingeschränkt werden.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Präferenz, die angibt, ob die Wiedergabe von Medien blockiert wird, wenn sie in einem Hintergrundtab startet. Der Standardwert, `true`, bedeutet, dass selbst wenn ansonsten verfügbar, Autoplay erst erfolgt, nachdem ein Tab in den Vordergrund gebracht wurde. Dies verhindert die ablenkende Situation, in der ein Tab beginnt, Lärm zu machen und der Nutzer den Tab unter all ihren Tabs und Fenstern nicht finden kann.

## Siehe auch

- [Webmedien-Technologien](/de/docs/Web/Media)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lernleitfaden)
- [Die Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen von Cross-Browser-Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
