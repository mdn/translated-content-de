---
title: Leitfaden für Autoplay von Medien und Web Audio APIs
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) direkt beim Laden der Seite kann für Nutzer eine unerwartete Überraschung sein. Während Autoplay von Medien einen nützlichen Zweck erfüllt, sollte es mit Bedacht und nur dann verwendet werden, wenn es notwendig ist. Um den Nutzern die Kontrolle darüber zu geben, bieten Browser oft verschiedene Formen der Autoplay-Blockierung an. In diesem Leitfaden werden wir die Autoplay-Funktionalität in den verschiedenen Medien- und Web Audio APIs behandeln, einschließlich eines kurzen Überblicks über die Nutzung von Autoplay und wie Sie mit Browsern zusammenarbeiten, um die Autoplay-Blockierung elegant zu handhaben.

Auf Autoplay-Blockierung wird _nicht_ bei {{HTMLElement("video")}}-Elementen angewendet, wenn das Quellmedium keinen Audiotrack hat oder wenn der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack werden als **hörbar** betrachtet, und auf sie wird die Autoplay-Blockierung angewendet. **Nicht hörbare** Medien sind von der Autoplay-Blockierung nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die dazu führt, dass Medien ohne die ausdrückliche Aufforderung des Nutzers automatisch abgespielt werden. Dies umfasst sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch die Verwendung von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts der Nutzerinteraktion zu starten.

Das bedeutet, dass sowohl der folgende HTML-Tag als auch der JavaScript-Code als Autoplay-Verhalten betrachtet werden und deshalb der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Features und APIs können von der Autoplay-Blockierung betroffen sein:

- Die {{Glossary("HTML", "HTML")}}-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus Sicht des Nutzers kann eine Webseite oder App, die plötzlich ohne Vorwarnung Geräusche verursacht, störend oder unangenehm sein. Aus diesem Grund erlauben Browser in der Regel nur unter bestimmten Bedingungen ein erfolgreiches Autoplay.

### Verfügbarkeit von Autoplay

Als allgemeine Regel können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eine_ der folgenden Bedingungen zutrifft:

- Der Ton ist stummgeschaltet oder die Lautstärke ist auf 0 gesetzt.
- Der Nutzer hat mit der Seite interagiert (durch Klicken, Tippen, Drücken von Tasten usw.).
- Wenn die Seite auf eine Ausnahmeliste gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Nutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen.
- Wenn die Autoplay-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und seinem Dokument Unterstützung für Autoplay zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, in denen es zu einer Blockierung kommt, und die Einzelheiten, wie Seiten auf eine Ausnahmeliste gesetzt werden, unterscheiden sich von Browser zu Browser, aber die oben genannten sind gute Richtlinien, nach denen Sie sich richten können.

Für Details siehe die Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt wird die Wiedergabe von Medien, die Audio enthalten, im Allgemeinen blockiert, wenn die Wiedergabe programmatisch in einem Tab initiiert wird, der bislang noch keine Nutzerinteraktion hatte. Browser können zusätzlich entscheiden, in anderen Fällen ebenfalls zu blockieren.

## Autoplay von Medienelementen

Nun, da wir geklärt haben, was Autoplay ist und was verhindern kann, dass es erlaubt wird, werden wir uns ansehen, wie Ihre Website oder App automatisch Medien beim Laden der Seite abspielen kann, wie Sie erkennen, wann Autoplay scheitert, und Tipps zum Umgang damit, wenn Autoplay vom Browser verweigert wird.

### Das Autoplay-Attribut

Die einfachste Möglichkeit, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut zu Ihrem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Eigenschaft am Element auf `true` setzt.
Wenn `autoplay` `true` ist, wird das Medium automatisch so schnell wie möglich nach den folgenden Ereignissen abgespielt:

- Der Seite ist die Nutzung der Autoplay-Funktionalität erlaubt.
- Das Element wurde während des Seitenladens erstellt.
- Es wurde genug Medium empfangen, um die Wiedergabe zu starten und bis zum Ende des Mediums ohne Unterbrechung fortzufahren, vorausgesetzt, es gibt keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das Autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay wichtig für Ihre Anwendung ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob Autoplay erlaubt, nicht erlaubt oder nur für nicht hörbare Inhalte unterstützt wird.
Zum Beispiel, wenn Ihre Anwendung ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay von nicht hörbaren Inhalten zulässt, können Sie entweder den Ton stummschalten oder ein Video ohne Audiotrack bereitstellen.
Ebenso, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (mithilfe des [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attributs) oder den Ladevorgang des Videos solange verschieben, bis es angefordert wird.

Die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy)-Methode kann verwendet werden, um die Autoplay-Richtlinie für eine Art von Medienfeature zu überprüfen (d.h. alle Medienelemente oder alle Audiokontexte in einem Dokument) oder um zu prüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Richtlinie für alle Medienelemente im Dokument abzurufen (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code nimmt an, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder `HTMLVideoElement` verwendet und standardmäßig mit Audio abgespielt werden soll.
Wenn Autoplay nur für nicht hörbare Inhalte erlaubt ist, schalten wir das Audio stumm; wenn Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code, um ein bestimmtes Element oder einen Audiokontext zu testen, ist derselbe, außer dass Sie das zu testende Element oder den zu testenden Kontext anstelle des Typstrings übergeben.
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

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund der Interaktion des Nutzers mit der Seite, der Seite oder einem bestimmten Element ändern.
Ebenso könnte sich in einigen Browsern die Richtlinie für ein bestimmtes Element ändern, obwohl sich die Richtlinie für den Typ nicht geändert hat (zum Beispiel in Browsern, in denen das Berühren eines bestimmten Elements nur diesem Element erlaubt, automatisch abgespielt zu werden).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir in der Regel, die Richtlinie beim Laden der Seite mit dem Typ zu überprüfen.

#### Beispiel 3: Erkennen von Autoplay-Fehlern als Fallback

Kein spezifisches Ereignis (oder andere Benachrichtigung) wird bei Erfolg oder Misserfolg von Autoplay ausgelöst, daher haben Browser, die `Navigator.getAutoplayPolicy()` nicht unterstützen, keine einfache Möglichkeit festzustellen, ob Autoplay unterstützt wird, oder zu reagieren, wenn es ausgelöst wird oder nicht.

Ein Ansatz besteht darin, auf das erste Auftreten des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu hören, das am Medienelement ausgelöst wird, wenn es nach einer Pause wiederaufgenommen _und_ wenn Autoplay ausgeführt wird. Das bedeutet, dass beim ersten Auftreten des `play`-Ereignisses bekannt ist, dass Ihr Medium zum ersten Mal abgespielt wird, nachdem die Seite geöffnet wurde.

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die als Eingabe das `play`-Ereignis erhält.

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

Nachdem wir einen Verweis auf das Videoelement vom [`Event`](/de/docs/Web/API/Event)-Objekt [`target`](/de/docs/Web/API/Event/target) erhalten haben, nutzen wir es, um den Ereignislistener zu entfernen. Dies verhindert, dass zukünftige `play`-Ereignisse an den Handler weitergeleitet werden, was passieren könnte, wenn das Video vom Nutzer oder automatisch durch den Browser pausiert und fortgesetzt wird, wenn sich das Dokument in einem Hintergrundtab befindet.

An diesem Punkt kann Ihre Website oder App mit allem beginnen, was auf dem Start des Videos basiert.

### Die play()-Methode

Der Begriff "Autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio enthalten, außerhalb des Kontexts der Behandlung eines Nutzereingabeereignisses auszulösen. Dies geschieht durch Aufrufen der `play()`-Methode des Medienelements.

> [!NOTE]
> Es wird dringend empfohlen, das `autoplay`-Attribut wann immer möglich zu verwenden, da die Unterstützung für Autoplay-Einstellungen bei der Verwendung des `autoplay`-Attributs weiter verbreitet ist als für andere Methoden zur automatischen Wiedergabe von Medien. Es ermöglicht dem Browser auch, die Verantwortung für die Startzeit der Wiedergabe zu übernemen und es zu optimieren.

#### Beispiel: Video abspielen

Dieses Beispiel spielt das erste {{HTMLElement("video")}}-Element ab, das im Dokument gefunden wird. `play()` erlaubt nicht, dass die Wiedergabe beginnt, es sei denn, dem Dokument wurde die Berechtigung erteilt, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Fehlern

Es ist viel einfacher, einen Fehler beim automatischen Abspielen von Medien zu erkennen, wenn Sie die `play()`-Methode verwenden, um die Wiedergabe zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Medium erfolgreich zu spielen beginnt, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (zum Beispiel, wenn Autoplay verweigert wird). Wenn Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit anbieten, mit der der Nutzer den Browser manuell auffordern kann, den Nutzer um Erlaubnis zur Wiedergabe von Medien zu bitten.

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

Das erste, was wir mit dem Ergebnis von `play()` tun, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, weil frühere Versionen der HTML-Spezifikation keinen Wert von `play()` zurückgaben. Die Rückgabe eines Versprechens, um den Erfolg oder Misserfolg der Operation zu bestimmen, wurde erst kürzlich hinzugefügt. Das Überprüfen von `undefined` verhindert, dass dieser Code mit einem Fehler auf älteren Versionen von Webbrowsern fehlschlägt.

Wenn das von `play()` zurückgegebene Versprechen fehlerfrei aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann beginnen, was auch immer getan werden muss, wenn Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler zum Versprechen hinzu. Dieser schaut sich den [`name`](/de/docs/Web/API/DOMException/name) des Fehlers an, um zu sehen, ob es sich um `NotAllowedError` handelt. Dies deutet darauf hin, dass die Wiedergabe aufgrund eines Berechtigungsproblems fehlgeschlagen ist, wie zum Beispiel, dass Autoplay verweigert wurde. Wenn dies der Fall ist, sollten wir eine Benutzeroberfläche bereitstellen, die es dem Nutzer ermöglicht, die Wiedergabe manuell zu starten; das wird hier von einer Funktion `showPlayButton()` übernommen.

Andere Fehler werden nach Bedarf behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite abspielen möchten, könnten Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden, um dies zu erreichen:

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

## Autoplay unter Verwendung der Web Audio API

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio starten, indem die `start()`-Methode an einem Quellenknoten aufgerufen wird, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verbunden ist. Wenn dies außerhalb des Kontexts der Behandlung eines Nutzereingabeereignisses geschieht, unterliegt dies den Autoplay-Regeln.

## Die Autoplay-Berechtigungsrichtlinie

Neben der browserseitigen Verwaltung und Kontrolle der Autoplay-Funktionalität, wie oben beschrieben, kann ein Webserver auch seine Bereitschaft ausdrücken, Autoplay zuzulassen. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}}-Header und dessen {{httpheader("Permissions-Policy/autoplay", "autoplay")}}-Direktive wird verwendet, um zu steuern, welche Domains zur automatischen Wiedergabe von Medien verwendet werden können, wenn überhaupt. Standardmäßig ist die `autoplay`-Berechtigungsrichtlinie auf `self` gesetzt, was darauf hinweist, dass Autoplay erlaubt ist, da sie auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Ausschlussliste (`()`) angeben, um Autoplay vollständig zu deaktivieren, `*` um Autoplay von allen Domains zu erlauben, oder eine oder mehrere spezifische Quellen, von denen aus Medien automatisch abgespielt werden können. Diese Quellen sind durch Leerzeichen voneinander getrennt.

> [!NOTE]
> Die angegebene Berechtigungsrichtlinie gilt für das Dokument und jedes {{HTMLElement("iframe")}}, das innerhalb dieses Dokuments verschachtelt ist, es sei denn, diese Frames beinhalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), welches eine neue Berechtigungsrichtlinie für diesen Frame und alle in ihm verschachtelten Frames setzt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf einem `<iframe>` verwenden, um eine Berechtigungsrichtlinie für diesen Frame und seine verschachtelten Frames anzugeben, können Sie auch den Wert `'src'` angeben, um die automatische Wiedergabe von Medien nur von derselben Domain wie die vom Frame angegebene [`src`](/de/docs/Web/HTML/Element/iframe#src) Attribut zu erlauben.

### Beispiel: Autoplay nur von der Dokument-Domain zulassen

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um nur Medien von der {{Glossary("origin", "Herkunft")}} des Dokuments automatisch abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus erlauben

Das Hinzufügen der Berechtigung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zum vorherigen Beispiel ergibt einen `Permissions-Policy`-Header wie den folgenden, wenn Vollbildzugriff unabhängig von der Domain erlaubt ist; eine Domänenbeschränkung kann bei Bedarf ebenfalls hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, die mit der `allow`-Eigenschaft des `<iframe>`-Elements gewährt werden, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von bestimmten Quellen erlauben

Der `Permissions-Policy`-Header zum Erlauben der Wiedergabe von Medien sowohl von der eigenen Domain des Dokuments (oder `<iframe>`) als auch von `https://example.media` sieht so aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann so geschrieben werden, dass diese Autoplay-Richtlinie auf sich selbst und alle untergeordneten Frames angewendet wird:

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

Der `allow`-Wert des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Best Practices

Tipps und empfohlene Best Practices, um das Beste aus der Arbeit mit Autoplay herauszuholen, werden hier angeboten.

### Umgang mit Autoplay-Fehlern mit Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist es, automatisch das Abspielen eines Videoclips zu beginnen, der zu einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionalität der Seite gehört. Um Videos wie diese automatisch abzuspielen, haben Sie zwei Optionen: keinen Audiotrack zu haben oder einen Audiotrack zu haben, aber das {{HTMLElement("video")}}-Element standardmäßig stumm zu schalten, wie dieses:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Steuerelemente des Nutzers enthält (typischerweise Play/Pause, Vorspulen durch die Zeitachse des Videos, Lautstärkeregelung und Stummschaltung); auch da das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut enthalten ist, und das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut erforderlich für Autoplay in Safari, wird das Video automatisch abgespielt, jedoch mit stummgeschaltetem Ton. Der Nutzer hat jedoch die Möglichkeit, den Ton durch Klicken auf den Unmute-Button in den Steuerelementen wieder zu aktivieren.

## Browser-Konfigurationseinstellungen

Browser können Einstellungen haben, die steuern, wie Autoplay funktioniert oder wie Autoplay-Blockierung gehandhabt wird. Hier sind alle solchen Einstellungen, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein können, aufgelistet. Dazu gehören alle, die beim Testen oder Debuggen helfen könnten, sowie alle, die auf eine Weise gesetzt sein könnten, mit der Sie sich auseinandersetzen müssen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolean Präferenz, die angibt, ob die nicht standardmäßige `HTMLMediaElement.allowedToPlay`-Eigenschaft im Web angezeigt wird. Derzeit ist dies standardmäßig `false` (außer in Nightly Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay`-Eigenschaft im `HTMLMediaElement`-Interface, und ist daher weder auf {{HTMLElement("audio")}} noch auf {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolean Präferenz, wenn `true`, ermöglicht es den Hintergrundskripten von Browsererweiterungen, Audiomedien automatisch abzuspielen. Wenn dieser Wert auf `false` gesetzt wird, wird die Fähigkeit deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolean Präferenz, die, wenn sie `true` (der Standardwert) ist, es audiomedialen Inhalten erlaubt, die derzeit stummgeschaltet sind, automatisch abgespielt zu werden. Wenn dies auf `false` geändert wurde, dürfen Medien mit einem Audiotrack sogar dann nicht abgespielt werden, wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolean Präferenz, die angibt, ob die Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet werden soll.
    Wenn `false`, darf Web-Audio immer automatisch abgespielt werden.
    Wenn `true`, dürfen Audiokontexte auf Seiten nur dann abgespielt werden, wenn eine {{Glossary("Sticky_activation", "Sticky Aktivierung")}} stattgefunden hat.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine Integer-Präferenz, die angibt, ob die Konfiguration pro Domäne für die Autoplay-Unterstützung standardmäßig erlaubt (`0`), blockiert (`1`) oder bei Verwendung abgefragt (`2`) wird. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (Nur Nightly Builds)
  - : Eine Boolean Präferenz, die steuert, ob die Erkennung von Nutzerhandlungen erlaubt, die Einstellung von `media.autoplay.default` zu überschreiben. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt ist, erlaubt diese Präferenz, wenn `true`, die automatische Wiedergabe von Medien mit Audiotracks dennoch, wenn die Seite durch Nutzerhandlungen aktiviert wurde, und Medien, die nicht hörbar sind, unterliegen keinerlei Einschränkungen.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolean Präferenz, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie in einem Hintergrundtab gestartet wird. Der Standardwert `true` bedeutet, dass Autoplay, auch wenn es ansonsten verfügbar ist, erst nach dem Vorholen eines Tabs abläuft. Dies verhindert die ablenkende Situation, in der ein Tab beginnt, Ton abzuspielen, und der Nutzer das Tab nicht unter allen seinen Tabs und Fenstern finden kann.

## Siehe auch

- [Webmedien-Technologien](/de/docs/Web/Media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lernleitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Audio-Grundlagen für verschiedene Browser](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
