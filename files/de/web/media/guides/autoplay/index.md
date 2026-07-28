---
title: Leitfaden für Autoplay bei Medien und Web Audio APIs
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) direkt beim Laden der Seite kann für Nutzer eine unerwünschte Überraschung sein. Während Autoplay von Medien einen nützlichen Zweck erfüllt, sollte es mit Bedacht und nur bei Bedarf eingesetzt werden. Um den Nutzern Kontrolle zu geben, bieten Browser oft verschiedene Formen der Autoplay-Blockierung an. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Medien- und Web-Audio-APIs, einschließlich eines kurzen Überblicks darüber, wie man Autoplay nutzt und wie man mit Browsern arbeitet, um Autoplay-Blockierung elegant zu handhaben.

Autoplay-Blockierung wird _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn das zugrunde liegende Medium keinen Audiotrack hat oder wenn der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack gelten als **hörbar**, und die Autoplay-Blockierung wirkt auf sie. **Unhörbare** Medien sind von der Autoplay-Blockierung nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die bewirkt, dass Medien abgespielt werden, ohne dass der Nutzer speziell anfordert, dass die Wiedergabe beginnt. Dies umfasst sowohl die Verwendung von HTML-Attributen, um Medien automatisch abzuspielen, als auch den Einsatz von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts einer Nutzerinteraktion zu starten.

Das bedeutet, dass sowohl das Folgende als auch das Weitere als Autoplay-Verhalten gelten und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Features und APIs können von Autoplay-Blockierung betroffen sein:

- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus der Perspektive des Nutzers kann eine Webseite oder App, die ohne Vorwarnung Geräusche macht, irritierend, unbequem oder abschreckend sein. Deshalb erlauben Browser in der Regel nur unter bestimmten Umständen erfolgreiches Autoplay.

### Verfügbarkeit von Autoplay

Grundsätzlich können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eines_ der folgenden Kriterien erfüllt ist:

- Der Ton ist stummgeschaltet oder die Lautstärke ist auf 0 eingestellt
- Der Nutzer hat mit der Seite interagiert (durch Klicken, Tippen, Drücken von Tasten usw.)
- Die Seite wurde auf eine Whitelist gesetzt; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Nutzer häufig mit Medien interagiert, oder manuell durch Präferenzen oder andere Benutzeroberflächenfunktionen
- Wenn die Autoplay-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und seinem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, die zur Blockierung führen, und die Einzelheiten, wie Seiten auf die Whitelist gelangen, variieren von Browser zu Browser, aber die oben genannten sind gute Richtlinien.

Für Details siehe die Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt wird die Wiedergabe aller Medien, die Ton enthalten, im Allgemeinen blockiert, wenn die Wiedergabe programmatisch in einem Tab gestartet wird, mit dem der Nutzer noch nicht interagiert hat. Browser können zusätzlich unter anderen Umständen blockieren.

## Autoplay von Medienelementen

Jetzt, da wir besprochen haben, was Autoplay ist und was verhindern kann, dass Autoplay zugelassen wird, schauen wir uns an, wie Ihre Website oder App Medien beim Laden der Seite automatisch abspielen kann, wie man erkennt, wann Autoplay nicht auftritt, und Tipps, wie man damit umgeht, wenn Autoplay vom Browser verweigert wird.

### Das Autoplay-Attribut

Der einfachste Weg, automatisiert Inhalte abzuspielen, ist das Hinzufügen des [`autoplay`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) Attributs zu Ihrem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element, wodurch die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Eigenschaft des Elements auf `true` gesetzt wird.
Wenn `autoplay` auf `true` steht, beginnt die Medienwiedergabe automatisch sobald wie möglich, nachdem Folgendes eingetreten ist:

- Die Seite darf Autoplay-Funktionalität nutzen
- Das Element wurde während des Ladevorgangs der Seite erstellt
- Genug Medien wurden empfangen, um die Wiedergabe zu starten und bis zum Ende der Medien ohne Unterbrechung fortzusetzen, vorausgesetzt, es gibt keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das Autoplay-Attribut

Ein {{HTMLElement("audio")}} Element, das das `autoplay` Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennung, ob Autoplay zulässig ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob Autoplay erlaubt, nicht erlaubt oder nur für unhörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung zum Beispiel ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay von unhörbaren Inhalten erlaubt, können Sie es entweder stummschalten oder ein Video ohne Audiotrack bereitstellen.
Ebenso, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (unter Verwendung des [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster) Attributs) oder wählen, das Laden des Videos zu verschieben, bis es angefordert wird.

Die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) Methode kann verwendet werden, um die Autoplay-Richtlinie für einen Medienelement-Typ (z.B. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen, oder um festzustellen, ob ein spezifisches Medienelement oder Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie man den String `mediaelement` übergibt, um die Autoplay-Richtlinie für alle Medienelemente im Dokument zu erhalten (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement` Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet, und standardmäßig so konfiguriert ist, dass es mit Audio automatisch abgespielt wird.
Wenn Autoplay nur für unhörbare Inhalte erlaubt ist, stummschalten wir das Audio; wenn Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

```js
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // The video element will autoplay with audio.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Mute audio on video
  video.muted = true;
} else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
  // Set a default placeholder image.
  video.poster = "https://example.com/poster_image_url";
}
```

Der Code, um ein spezifisches Element oder eine Audioumgebung zu testen, ist der gleiche, außer dass Sie das zu testende Element oder die Umgebung anstelle des Typ-Strings übergeben.
Hier übergeben wir das `video` Objekt, das wir testen wollen.

```js
if (navigator.getAutoplayPolicy(video) === "allowed") {
  // The video element will autoplay with audio.
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
  // Mute audio on video
  video.muted = true;
} else if (navigator.getAutoplayPolicy(video) === "disallowed") {
  // Set a default placeholder image.
  video.poster = "https://example.com/poster_image_url";
}
```

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund der Interaktion des Nutzers mit der Seite, der Seite oder einem bestimmten Element ändern.
Ebenso kann auf einigen Browsern die Richtlinie für ein spezifisches Element sogar ändern, obwohl die Richtlinie für den Typ nicht geändert hat (zum Beispiel auf Browsern, bei denen das Berühren eines spezifischen Elements nur diesem Element erlaubt, automatisch abzuspielen).

Da es keinen Weg gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, dass die Richtlinie überprüft wird, wenn die Seite geladen wird, unter Verwendung des Typs.

#### Beispiel 3: Erkennung des Versagens von Autoplay als Fallback

Kein spezifisches Ereignis (oder andere Benachrichtigung) wird durch erfolgreichen oder erfolglosen Autoplay ausgelöst, daher haben Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit, festzustellen, ob Autoplay unterstützt wird oder wie darauf zu reagieren ist, wenn es ausgelöst oder nicht ausgelöst wird.

Ein Ansatz ist das Hören auf das erste Auftreten des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignisses, das auf dem Medienelement ausgelöst wird, wenn es nach einer Pause fortgesetzt _und_ wenn Autoplay auftritt.
Das bedeutet, dass beim ersten Mal, dass das `play` Ereignis ausgelöst wird, Sie wissen, dass Ihr Medium zum ersten Mal nach dem Öffnen der Seite gestartet wird.

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}} Element, dessen [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignishandler; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die als Eingabe das `play` Ereignis empfängt.

`handleFirstPlay()` sieht folgendermaßen aus:

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

Nachdem eine Referenz auf das Video-Element über das [`Event`](/de/docs/Web/API/Event) Objekt's [`target`](/de/docs/Web/API/Event/target) geholt wurde, verwenden wir es, um den Ereignis-Listener zu entfernen.
Dies verhindert, dass zukünftige `play` Ereignisse an den Handler geliefert werden. Dies könnte passieren, wenn das Video pausiert und vom Nutzer oder automatisch vom Browser wieder aufgenommen wird, wenn das Dokument in einem Hintergrund-Tab ist.

Zu diesem Zeitpunkt kann Ihre Site oder App mit dem beginnen, was immer erforderlich ist, dass das Video gestartet wurde.

### Die play() Methode

Der Begriff "Autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio beinhalten, außerhalb des Kontexts eines Benutzer-Eingabeereignisses auszulösen. Dies geschieht durch Aufrufen der [`play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode des Medienelements.

> [!NOTE]
> Es wird dringend empfohlen, das `autoplay` Attribut wann immer möglich zu verwenden, da die Unterstützung für Autoplay-Präferenzen für das `autoplay` Attribut weiter verbreitet ist als für andere Mittel des automatischen Abspielens von Medien. Es lässt den Browser auch die Verantwortung für den Start der Wiedergabe übernehmen, was es ihm ermöglicht, den Zeitpunkt dessen zu optimieren.

#### Beispiel: Abspielen von Videos

Dieses Beispiel spielt das erste {{HTMLElement("video")}} Element im Dokument ab. `play()` lässt die Wiedergabe erst beginnen, wenn das Dokument die Berechtigung hat, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play() Fehlern

Es ist viel einfacher, ein Versagen des Autoplays zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode verwenden, um es zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, welches aufgelöst wird, sobald die Medien erfolgreich zu spielen beginnen, und wird abgelehnt, wenn die Wiedergabe nicht beginnt (wie zum Beispiel, wenn Autoplay verweigert wird). Wenn Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit bieten, dass der Benutzer dem Browser manuell mitteilt, die Berechtigung zur Wiedergabe von Medien zu erteilen.

Sie könnten einen Code wie diesen verwenden, um die Aufgabe zu erledigen:

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

Das Erste, was wir mit dem Ergebnis von `play()` tun, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, weil in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgab. Die Rückgabe eines Versprechens, um den Erfolg oder das Scheitern der Operation zu bestimmen, wurde kürzlich hinzugefügt. Die Überprüfung auf `undefined` verhindert, dass dieser Code auf älteren Versionen von Webbrowsern mit einem Fehler fehlschlägt.

Wenn das Versprechen, das von `play()` zurückgegeben wird, ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann mit dem beginnen, was immer erforderlich ist, wenn Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}} Handler zu dem Versprechen hinzu. Dies prüft den [`name`](/de/docs/Web/API/DOMException/name) des Fehlers, um festzustellen, ob es sich um `NotAllowedError` handelt. Dies zeigt an, dass die Wiedergabe aufgrund eines Berechtigungsproblems, wie dem Verweigern von Autoplay, fehlgeschlagen ist. Wenn dies der Fall ist, sollten wir eine Benutzeroberfläche präsentieren, die es dem Benutzer ermöglicht, die Wiedergabe manuell zu starten; das wird hier durch eine Funktion `showPlayButton()` behandelt.

Alle anderen Fehler werden wie angemessen behandelt.

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

## Autoplay mittels der Web Audio API

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App durch die `start()` Methode auf einem Quellknoten, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verbunden ist, Audio abspielen. Dies unterliegt den Autoplay-Regeln, wenn es außerhalb des Kontexts eines Benutzer-Eingabeereignisses geschieht.

## Die Autoplay-Berechtigungsrichtlinie

Zusätzlich zur browserseitigen Verwaltung und Kontrolle über die Autoplay-Funktionalität, wie oben beschrieben, kann ein Webserver auch seine Bereitschaft zum Ausdruck bringen, Autoplay zuzulassen. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}} Header-Direktive {{httpheader("Permissions-Policy/autoplay", "autoplay")}} wird verwendet, um zu kontrollieren, welche Domains, wenn überhaupt, zum automatischen Abspielen von Medien verwendet werden können. Standardmäßig ist die `autoplay` Berechtigungsrichtlinie auf `self` gesetzt, was bedeutet, dass Autoplay erlaubt ist, solange sie auf der gleichen Domain wie das Dokument gehostet werden.

Sie können auch eine leere Whitelist (`()`) angeben, um Autoplay ganz zu deaktivieren, `*` um Autoplay von allen Domains zuzulassen, oder eine oder mehrere spezifische Ursprünge, von denen Medien automatisch abgespielt werden können. Diese Ursprünge sind durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Berechtigungsrichtlinie gilt für das Dokument und jedes darin verschachtelte {{HTMLElement("iframe")}}, es sei denn, diese Frames enthalten ein [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow), das eine neue Berechtigungsrichtlinie für diesen Frame und alle darin verschachtelten Frames festlegt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf einem `<iframe>` verwenden, um eine Berechtigungsrichtlinie für diesen Frame und seine verschachtelten Frames festzulegen, können Sie auch den Wert `'src'` angeben, um das automatische Abspielen von Medien nur von derselben Domain zuzulassen, die im [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) Attribut des Frames angegeben ist.

### Beispiel: Autoplay nur von der Domain des Dokuments zulassen

Um den {{HTTPHeader("Permissions-Policy")}} Header zu verwenden, um nur Medien vom Ursprungsdokument des Dokuments {{Glossary("origin", "origin")}} automatisch abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus erlauben

Wenn Sie der Berechtigung für das vorherige Beispiel die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Erlaubnis hinzufügen, erhalten Sie einen `Permissions-Policy` Header wie den folgenden, falls der Vollbildzugriff unabhängig von der Domain erlaubt ist; eine Domänenbeschränkung kann bei Bedarf ebenfalls hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, gewährt mit dem `<iframe>` Element's `allow` Attribut, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Erlauben des Autoplays von spezifischen Quellen

Der `Permissions-Policy` Header, um Medien von sowohl der eigenen Domain des Dokuments (oder `<iframe>`) als auch von `https://example.media` abzuspielen, sieht folgendermaßen aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann geschrieben werden, um anzugeben, dass diese Autoplay-Richtlinie auf sich und alle Kinderframes angewendet werden sollte:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Deaktivieren von Autoplay

Wenn die `autoplay` Berechtigungsrichtlinie auf `()`/`none` gesetzt ist, wird Autoplay für das Dokument oder `<iframe>` und alle darin verschachtelten Frames vollständig deaktiviert. Der HTTP-Header ist:

```http
Permissions-Policy: autoplay=()
```

Verwenden des `<iframe>``allow` Attributs:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Bewährte Praktiken

Hier werden Tipps und empfohlene bewährte Praktiken angeboten, um Ihnen zu helfen, das Beste aus der Arbeit mit Autoplay zu machen.

### Umgang mit Autoplay-Ausfall mit Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist es, automatisch einen Videoclip zu starten, der zu einem Artikel, einer Werbung oder einer Vorschau auf die Hauptfunktionalität der Seite gehört. Um solche Videos automatisch abzuspielen, haben Sie zwei Möglichkeiten: keinen Audiotrack haben oder einen Audiotrack haben, aber das {{HTMLElement("video")}} Element so konfigurieren, dass das Audio standardmäßig stummgeschaltet ist, wie dies:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen enthält (typischerweise Play/Pause, Durchsuchen der Videotimeline, Lautstärkeregelung und Stummschaltung); zudem wird, da das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) Attribut enthalten ist und das [`playsinline`](/de/docs/Web/HTML/Reference/Elements/video#playsinline) Attribut, das für Autoplay in Safari erforderlich ist, das Video automatisch abgespielt, aber mit stummgeschaltetem Audio. Der Nutzer hat jedoch die Möglichkeit, das Audio wieder zu aktivieren, indem er auf den Unmute-Button in den Steuerungen klickt.

## Browser-Konfigurationsoptionen

Browser können Voreinstellungen haben, die steuern, wie Autoplay funktioniert oder wie Autoplay-Blockierung gehandhabt wird. Hier werden alle diese Präferenzen aufgeführt, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein könnten. Dazu gehören alle, die beim Testen oder Debuggen hilfreich sein können, sowie alle, die möglicherweise so eingestellt werden könnten, dass Sie darauf vorbereitet sein müssen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine Boolesche Präferenz, die angibt, ob die nicht standardisierte `HTMLMediaElement.allowedToPlay` Eigenschaft im Web sichtbar ist. Derzeit ist dies standardmäßig `false` (außer in Nightly-Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay` Eigenschaft in der `HTMLMediaElement` Schnittstelle und ist daher bei {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elementen nicht vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese Boolesche Präferenz, wenn `true`, erlaubt Hintergrundskripten von Browsererweiterungen, Audiomedien automatisch abzuspielen. Die Einstellung dieses Wertes auf `false` deaktiviert diese Fähigkeit. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine Boolesche Präferenz, die, falls `true` (Standard), erlaubt automatisch abgespielte Audiomedien, die derzeit stummgeschaltet sind. Wenn dies auf `false` geändert wurde, wird Medien mit einem Audiotrack auch dann nicht erlaubt, abgespielt zu werden, wenn stummgeschaltet.
- `media.autoplay.block-webaudio`
  - : Eine Boolesche Präferenz, die angibt, ob die Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, ist Web-Audio immer erlaubt, automatisch abzuspielen.
    Wenn `true`, können Audiokontexte nur auf Seiten abgespielt werden, nachdem eine {{Glossary("Sticky_activation", "Sticky Aktivierung")}} aufgetreten ist.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine Ganzzahlpräferenz, die angibt, ob die Domain-spezifische Konfiguration für Autoplay-Unterstützung standardmäßig erlaubt (`0`), blockiert (`1`) oder beim Einsatz eine Aufforderung (`2`) ist. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly Builds)
  - : Eine Boolesche Präferenz, die steuert, ob die Erkennung von Benutzeraktionen erlaubt ist, um die Einstellung von `media.autoplay.default` außer Kraft zu setzen. Ist `media.autoplay.default` _nicht_ auf `0` gesetzt (Autoplay standardmäßig erlaubt), ermöglicht diese Präferenz, dass Medien mit Audiotracks dennoch automatisch abgespielt werden können, wenn die Seite durch Benutzeraktionen aktiviert wurde, und Medien, die unhörbar sind, sind überhaupt nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine Boolesche Präferenz, die anzeigt, ob Medienwiedergabe blockiert wird, wenn sie in einem Hintergrund-Tab gestartet wird. Der Standardwert `true` bedeutet, dass selbst wenn ansonsten verfügbar, Autoplay nicht stattfindet, bis ein Tab in den Vordergrund gebracht wird. Dies verhindert die störende Situation, in der ein Tab beginnt, Geräusche zu machen, und der Benutzer den Tab unter all seinen Tabs und Fenstern nicht finden kann.

## Siehe auch

- [Web-Medien-Technologien](/de/docs/Web/Media)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lern-Leitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-Browser Audio Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
