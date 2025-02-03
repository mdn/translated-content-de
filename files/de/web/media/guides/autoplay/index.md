---
title: Autoplay-Leitfaden für Medien und Web-Audio-APIs
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) unmittelbar nach dem Laden der Seite kann für die Nutzer eine unerwünschte Überraschung darstellen. Während das Autoplay von Medien einen nützlichen Zweck erfüllt, sollte es vorsichtig und nur bei Bedarf verwendet werden. Um den Nutzern die Kontrolle darüber zu geben, bieten Browser häufig verschiedene Formen der Autoplay-Sperrung an. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Medien- und Web-Audio-APIs, einschließlich eines kurzen Überblicks darüber, wie Autoplay verwendet wird und wie man mit Browsern arbeitet, um die Autoplay-Sperrung elegant zu handhaben.

Die Autoplay-Sperrung wird _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn das Quellmedium keinen Audiotrack hat oder wenn der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack gelten als **hörbar** und die Autoplay-Sperrung gilt für sie. **Unhörbare** Medien sind von der Autoplay-Sperrung nicht betroffen.

## Autoplay und Autoplay-Sperrung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die Medien dazu bringt, ohne dass der Benutzer die Wiedergabe explizit anfordert, zu beginnen. Dazu gehört sowohl die Verwendung von HTML-Attributen zum Autoplay von Medien als auch die Verwendung von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts der Benutzerinteraktion zu starten.

Das bedeutet, dass sowohl das folgende Verhalten als auch das folgende Verhalten als Autoplay-Verhalten gelten und daher der Autoplay-Sperrpolitik des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Funktionen und APIs können von der Autoplay-Sperrung betroffen sein:

- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus der Sicht des Nutzers kann eine Webseite oder App, die plötzlich ohne Vorwarnung Geräusche macht, schockierend, unbequem oder abstoßend sein. Aus diesem Grund erlauben Browser in der Regel nur unter bestimmten Umständen, dass Autoplay erfolgreich ausgeführt wird.

### Verfügbarkeit von Autoplay

Im Allgemeinen können Sie davon ausgehen, dass es Medien nur dann erlaubt wird, automatisch abgespielt zu werden, wenn _mindestens einer_ der folgenden Punkte zutrifft:

- Das Audio ist stummgeschaltet oder seine Lautstärke ist auf 0 gesetzt
- Der Nutzer hat mit der Seite interagiert (durch Klicken, Tippen, Tasten drücken usw.)
- Wenn die Seite auf die Whitelist gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Nutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen
- Wenn die Autoplay-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und seinem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert. Die genauen Situationen, die zu einer Sperrung führen, und die Details, wie Seiten auf die Whitelist gesetzt werden, variieren von Browser zu Browser, aber die oben genannten Punkte sind gute Richtlinien.

Für Details siehe die Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt, die Wiedergabe von Medien, die Audio enthalten, wird in der Regel blockiert, wenn die Wiedergabe programmatisch in einem Tab eingeleitet wird, der noch keine Benutzerinteraktion hatte. Browser können zusätzlich entscheiden, unter anderen Umständen zu blockieren.

## Autoplay von Medienelementen

Da wir nun behandelt haben, was Autoplay ist und was das Zulassen von Autoplay verhindern kann, schauen wir uns an, wie Ihre Website oder App Medien automatisch beim Laden der Seite abspielen kann, wie man erkennt, wann das Autoplay nicht stattfindet, und Tipps zum Umgang damit, wenn das Autoplay vom Browser abgelehnt wird.

### Das Autoplay-Attribut

Der einfachste Weg, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut zu Ihrem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` `true` ist, wird das Medium so schnell wie möglich nach dem Eintreten der folgenden Bedingungen automatisch abgespielt:

- Die Seite darf die Autoplay-Funktionalität verwenden
- Das Element wurde beim Laden der Seite erstellt
- Genug Medien wurden empfangen, um die Wiedergabe zu beginnen und fortzusetzen, bis das Medium ohne Unterbrechung komplett abgespielt ist, vorausgesetzt, es gibt keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das Autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay wichtig für Ihre Anwendung ist, müssen Sie möglicherweise das Verhalten daran anpassen, ob Autoplay erlaubt, verboten oder nur für unhörbare Inhalte unterstützt wird.
Zum Beispiel, wenn Ihre Anwendung ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay von unhörbaren Inhalten erlaubt, können Sie es entweder stummschalten oder ein Video ohne Audiotrack bereitstellen.
Ähnlich, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (unter Verwendung des [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attributs), oder wählen, das Video erst zu laden, wenn es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Politik für eine Art von Medienfunktion (d.h. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen oder um zu prüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Politik für alle Medienelemente im Dokument zu erhalten (übergeben Sie `audiocontext`, um die Politik für Audiokontexte zu erhalten).
Der Code nimmt an, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und standardmäßig so konfiguriert ist, dass es mit Audio automatisch abgespielt wird.
Wenn Autoplay nur für unhörbare Inhalte erlaubt ist, stummschalten wir das Audio; wenn Autoplay verboten ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code, um ein bestimmtes Element oder Audiokontext zu testen, ist derselbe, außer dass Sie anstelle des Typ-Strings das zu testende Element oder den Kontext übergeben.
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

Die Autoplay-Politik für eine Art kann sich aufgrund der Benutzerinteraktion mit der Seite, dem Dokument oder einem bestimmten Element ändern.
Ebenso kann auf einigen Browsern die Politik für ein bestimmtes Element sich ändern, obwohl die Politik für den Typ nicht geändert wurde (zum Beispiel auf Browsern, wo das Berühren eines bestimmten Elements nur diesem Element erlaubt, automatisch abzuspielen).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Politik ändert (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, dass die Politik überprüft wird, wenn die Seite geladen wird, unter Verwendung des Typs.

#### Beispiel 3: Erkennen eines Autoplay-Fehlschlags als Fallback

Kein spezifisches Ereignis (oder andere Benachrichtigungen) wird durch den Erfolg oder Misserfolg von Autoplay ausgelöst, sodass Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit haben zu bestimmen, ob Autoplay unterstützt wird oder darauf zu reagieren, wenn es ausgelöst wird oder nicht.

Eine Herangehensweise ist es, auf das erste Auftreten des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu achten, das auf dem Medienelement ausgelöst wird, wenn die Wiedergabe nach einer Pause _und_ bei Autoplay beginnt.
Das bedeutet, dass das erste Mal, wenn das `play`-Ereignis ausgelöst wird, Sie wissen, dass Ihre Medien das erste Mal gestartet werden, nachdem die Seite geöffnet wurde.

Betrachten Sie diesen HTML-Code für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler eingerichtet ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die das `play`-Ereignis als Eingabe erhält.

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

Nachdem wir eine Referenz auf das Videoelement aus dem [`Event`](/de/docs/Web/API/Event)-Objekt über dessen [`target`](/de/docs/Web/API/Event/target) erhalten haben, verwenden wir es, um den Ereignislistener zu entfernen.
Dies verhindert, dass zukünftig `play`-Ereignisse an den Handler gesendet werden. Dies könnte passieren, wenn das Video von einem Benutzer oder automatisch vom Browser pausiert und wieder gestartet wird, wenn das Dokument in einem Hintergrund-Tab ist.

An diesem Punkt kann Ihre Seite oder App mit dem beginnen, was auch immer erforderlich ist, um damit umzugehen, dass das Video begonnen hat.

### Die play()-Methode

Der Begriff "Autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio enthalten, außerhalb des Kontextes der Verarbeitung eines Benutzereingabeereignisses auszulösen. Dies wird erreicht, indem die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Medienelements aufgerufen wird.

> [!NOTE]
> Es wird dringend empfohlen, das `autoplay`-Attribut wann immer möglich zu verwenden, da die Unterstützung von Autoplay-Einstellungen bei dem `autoplay`-Attribut verbreiteter ist als bei anderen Mitteln, Medien automatisch abzuspielen. Es erlaubt auch dem Browser, die Verantwortung für das Starten der Wiedergabe zu übernehmen, was ihm erlaubt, den Zeitpunkt dafür zu optimieren.

#### Beispiel: Video abspielen

Dieses einfache Beispiel spielt das erste {{HTMLElement("video")}}-Element im Dokument ab. `play()` wird die Wiedergabe nicht zulassen, es sei denn, das Dokument hat die Erlaubnis, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Fehlern

Es ist viel einfacher, einen Autoplay-Fehlschlag von Medien zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode verwenden, um sie zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Medien erfolgreich zu spielen beginnen, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (zum Beispiel, wenn Autoplay verweigert wird). Wenn das Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit anbieten, dass der Browser den Nutzer um Erlaubnis fragt, Medien abzuspielen.

Sie könnten Code wie diesen verwenden, um den Job zu erledigen:

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

Das Erste, was wir mit dem Ergebnis von `play()` machen, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, weil in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgab. Die Rückgabe eines Versprechens, das es Ihnen ermöglicht, den Erfolg oder Misserfolg der Operation zu bestimmen, wurde später hinzugefügt. Die Überprüfung auf `undefined` verhindert, dass dieser Code mit einem Fehler in älteren Versionen von Webbrowsern scheitert.

Wenn das von `play()` zurückgegebene Versprechen ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann beginnen, was auch immer getan werden muss, wenn das Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler zu dem Versprechen hinzu. Dieser prüft den [`name`](/de/docs/Web/API/DOMException/name) des Fehlers, um zu sehen, ob es sich um `NotAllowedError` handelt. Dies zeigt an, dass die Wiedergabe aufgrund eines Berechtigungsproblems gescheitert ist, wie zum Beispiel, dass das Autoplay verweigert wurde. Wenn dies der Fall ist, sollten wir eine Benutzeroberfläche bereitstellen, damit der Benutzer die Wiedergabe manuell starten kann; das wird hier durch eine Funktion `showPlayButton()` gehandhabt.

Alle anderen Fehler werden entsprechend behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite abspielen möchten, könnte [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet werden, um dies zu erreichen:

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

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio abspielen, indem die `start()`-Methode auf einem Quellenknoten aufgerufen wird, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verbunden ist. Dies außerhalb des Kontextes der Verarbeitung eines Benutzereingabeereignisses zu tun, unterliegt den Autoplay-Regeln.

## Die Autoplay-Berechtigungsrichtlinie

Neben der browserseitigen Verwaltung und Steuerung der oben beschriebenen Autoplay-Funktionalität kann ein Webserver auch seine Bereitschaft zum Ausdruck bringen, das Autoplay zu ermöglichen. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}}-Header verwendet die {{httpheader("Permissions-Policy/autoplay", "autoplay")}}-Direktive, um zu steuern, welche Domains, falls vorhanden, zum Autoplay von Medien verwendet werden können. Standardmäßig ist die `autoplay`-Berechtigungsrichtlinie auf `self` gesetzt, was bedeutet, dass Autoplay erlaubt ist, da sie auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Whitelist (`()`) angeben, um das Autoplay vollständig zu deaktivieren, `*`, um Autoplay von allen Domains zu erlauben, oder einen oder mehrere spezifische Ursprünge, von denen Medien automatisch abgespielt werden können. Diese Ursprünge werden durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Berechtigungsrichtlinie gilt für das Dokument und jedes darin verschachtelte {{HTMLElement("iframe")}}, es sei denn, diese Rahmen enthalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Berechtigungsrichtlinie für diesen Rahmen und alle darin verschachtelten Rahmen festlegt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf einem `<iframe>` verwenden, um eine Berechtigungsrichtlinie für diesen Rahmen und seine verschachtelten Rahmen festzulegen, können Sie auch den Wert `'src'` angeben, um das Autoplay von Medien nur von derselben Domain zu erlauben, die im [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des Rahmens angegeben ist.

### Beispiel: Autoplay nur von der Domain des Dokuments zulassen

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um nur Medien vom {{Glossary("origin", "Ursprung")}} des Dokuments autorisiert abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus erlauben

Das Hinzufügen einer [Fullscreen API](/de/docs/Web/API/Fullscreen_API)-Berechtigung zum vorherigen Beispiel ergibt einen `Permissions-Policy`-Header wie den folgenden, wenn der Vollbildzugang unabhängig von der Domain erlaubt ist; falls erforderlich, kann eine Domain-Einschränkung hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, gewährt durch das `allow`-Attribut des `<iframe>`-Elements, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von bestimmten Quellen erlauben

Der `Permissions-Policy`-Header, um Medien sowohl von der Domain des Dokuments (oder des `<iframe>`) als auch von `https://example.media` abzuspielen, sieht wie folgt aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann so geschrieben werden, dass diese Autoplay-Politik auf sich selbst und alle Kindrahmen angewendet wird:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Autoplay deaktivieren

Das Setzen der `autoplay`-Berechtigungsrichtlinie auf `()`/`none` deaktiviert das Autoplay vollständig für das Dokument oder das `<iframe>` und alle verschachtelten Rahmen. Der HTTP-Header lautet:

```http
Permissions-Policy: autoplay=()
```

Verwendung des `allow`-Attributs des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Best Practices

Tipps und empfohlene Best Practices, die Ihnen helfen können, das Beste aus der Arbeit mit Autoplay herauszuholen, finden Sie hier.

### Umgang mit Autoplay-Fehlern mit Mediensteuerungen

Ein gängiger Anwendungsfall für Autoplay ist das automatische Abspielen eines Video-Clips, das mit einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionalität der Seite einhergeht. Um solche Videos automatisch abzuspielen, haben Sie zwei Optionen: keinen Audiotrack verwenden oder einen Audiotrack verwenden, aber das {{HTMLElement("video")}}-Element standardmäßig so konfigurieren, dass das Audio stummgeschaltet ist, wie folgt:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen umfasst (typischerweise Wiedergabe/Pause, Scrollen durch die Zeitleiste des Videos, Lautstärkeregelung und Stummschaltung); auch weil das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut enthalten ist und das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut, das für Autoplay in Safari erforderlich ist, wird das Video automatisch abgespielt, aber mit stummgeschaltetem Audio. Der Benutzer hat jedoch die Möglichkeit, das Audio durch Klicken auf den Unmute-Button in den Steuerungen wieder zu aktivieren.

## Browser-Konfigurationsoptionen

Browser können Präferenzen haben, die steuern, wie Autoplay funktioniert oder wie Autoplay-Sperrung gehandhabt wird. Hier werden alle Präferenzen aufgelistet, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein könnten. Dazu gehören auch solche, die beim Testen oder Debuggen hilfreich sein könnten, sowie solche, bei denen Sie darauf vorbereitet sein müssen, mit denen umzugehen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine Boolean-Präferenz, die angibt, ob die nicht standardmäßige `HTMLMediaElement.allowedToPlay`-Eigenschaft auf das Web zugänglich gemacht wird. Der Standardwert ist derzeit `false` (außer in Nightly Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist somit nicht auf den {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese Boolean-Präferenz erlaubt es, wenn sie `true` ist, den Hintergrundskripten von Browsererweiterungen, Medien automatisch abzuspielen. Wenn dieser Wert auf `false` gesetzt ist, wird diese Fähigkeit deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine Boolean-Präferenz, die, wenn sie `true` (der Standard) ist, es erlaubt, stummgeschaltete Audio-Medien automatisch abzuspielen. Wenn dies auf `false` geändert wurde, wird es nicht gestattet, Medien mit einem Audiotrack abzuspielen, selbst wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine Boolean-Präferenz, die angibt, ob die Autoplay-Sperrung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, darf die Web-Audio immer automatisch abgespielt werden.
    Wenn `true`, können Audiokontexte nur auf Seiten abgespielt werden, nachdem es {{Glossary("Sticky_activation", "Sticky activation")}} gab.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine Integer-Präferenz, die angibt, ob die Domainkonfiguration für Autoplay-Unterstützung standardmäßig erlaubt (`0`), blockiert (`1`) oder auf Nachfrage auffordert (`2`). Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (Nur Nightly-Builds)
  - : Eine Boolean-Präferenz, die steuert, ob die Erkennung von Benutzeraktionen die Einstellung von `media.autoplay.default` außer Kraft setzen darf. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt ist, erlaubt diese Präferenz das Autoplay von Medien mit Audiotracks dennoch, wenn die Seite durch Benutzeraktionen aktiviert wurde, und Medien, die nicht hörbar sind, werden überhaupt nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine Boolean-Präferenz, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie in einem Hintergrund-Tab gestartet wird. Der Standardwert, `true`, bedeutet, dass selbst wenn ansonsten verfügbar, wird die Autoplay-Wiedergabe erst erfolgen, nachdem ein Tab in den Vordergrund gebracht wurde. Dies verhindert die ablenkende Situation, in der ein Tab beginnt, Ton abzuspielen, und der Nutzer nicht den Tab unter allen seinen Tabs und Fenstern findet.

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lern-Leitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-Browser-Audio-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
