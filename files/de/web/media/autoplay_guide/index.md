---
title: Autoplay-Leitfaden für Media und Web Audio APIs
slug: Web/Media/Autoplay_guide
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das automatische Abspielen von Audio (oder Videos mit Audiospuren) unmittelbar nach dem Laden einer Seite kann für Benutzer eine unerwünschte Überraschung sein. Während das automatische Abspielen von Medien einen nützlichen Zweck erfüllt, sollte es sorgfältig und nur bei Bedarf verwendet werden. Um den Benutzern Kontrolle darüber zu geben, bieten Browser oft verschiedene Formen von Autoplay-Blockierung an. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Media- und Web-Audio-APIs, einschließlich eines kurzen Überblicks über die Verwendung von Autoplay und wie Sie mit Browsern zusammenarbeiten können, um Autoplay-Blockierungen elegant zu handhaben.

Autoplay-Blockierungen werden _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn die Quellmedien keine Audiospur haben oder wenn die Audiospur stummgeschaltet ist. Medien mit einer aktiven Audiospur gelten als **hörbar**, und Autoplay-Blockierungen gelten für sie. **Unhörbare** Medien sind von Autoplay-Blockierungen nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die Medien ohne spezifische Benutzeranforderung zur Wiedergabe automatisch starten lässt. Dies umfasst sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch die Verwendung von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts der Benutzerinteraktion zu starten.

Das bedeutet, dass sowohl die folgenden als auch andere Möglichkeiten als Autoplay-Verhalten gelten und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Webfunktionen und APIs können von Autoplay-Blockierungen betroffen sein:

- Die {{Glossary("HTML")}}-Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus Sicht der Benutzer kann eine Webseite oder App, die ohne Vorwarnung spontan Geräusche macht, irritierend, unbequem oder abschreckend sein. Daher lassen Browser in der Regel Autoplay nur unter bestimmten Bedingungen erfolgreich zu.

### Verfügbarkeit von Autoplay

In der Regel können Sie davon ausgehen, dass Medien nur automatisch abgespielt werden dürfen, wenn _zumindest eine_ der folgenden Bedingungen erfüllt ist:

- Der Ton ist stummgeschaltet oder die Lautstärke ist auf 0 gesetzt
- Der Benutzer hat mit der Seite interagiert (durch Klicken, Tippen, Drücken von Tasten usw.)
- Wenn die Seite auf eine Whitelist gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Benutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen
- Wenn die Autoplay-[Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und seinem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, die zu einer Blockierung führen, sowie Einzelheiten dazu, wie Seiten auf eine Whitelist gesetzt werden, unterscheiden sich je nach Browser, aber die oben genannten Richtlinien sind ein guter Anhaltspunkt.

Weitere Details finden Sie in den Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt: Die Wiedergabe von Medien, die Audio enthalten, wird im Allgemeinen blockiert, wenn die Wiedergabe programmgesteuert in einem Tab gestartet wird, mit dem noch keine Benutzerinteraktion stattfand. Browser können zusätzlich in anderen Situationen blockieren.

## Autoplay von Media-Elementen

Nachdem wir behandelt haben, was Autoplay ist und was es verhindern kann, dass Autoplay zugelassen wird, werden wir uns damit befassen, wie Ihre Website oder App Medien automatisch beim Laden der Seite abspielen kann, wie Sie erkennen können, wann Autoplay nicht erfolgreich ausgeführt wird, und Tipps für den Umgang, wenn Autoplay vom Browser abgelehnt wird.

### Das Autoplay-Attribut

Der einfachste Weg, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut zu Ihrem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element hinzuzufügen, das die {{domxref("HTMLMediaElement.autoplay", "autoplay")}}-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` auf `true` gesetzt ist, wird das Medium automatisch so schnell wie möglich nach den folgenden Ereignissen abgespielt:

- Die Seite darf Autoplay-Funktionalität nutzen
- Das Element wurde beim Laden der Seite erstellt
- Genügend Medien wurden empfangen, um die Wiedergabe zu starten und bis zum Ende der Medien ohne Unterbrechung fortzusetzen, vorausgesetzt, es gibt keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das Autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie das Verhalten möglicherweise anpassen, je nachdem, ob Autoplay erlaubt, nicht erlaubt oder nur für unhörbare Inhalte unterstützt wird.
Zum Beispiel, wenn Ihre Anwendung ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay von unhörbaren Inhalten erlaubt, können Sie es entweder stummschalten oder ein Video ohne Audiospur bereitstellen.
Ebenso, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (mit dem [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attribut) oder das Laden des Videos aufschieben, bis es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für eine Art von Medienfunktion (d. h. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen oder um zu überprüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Richtlinie für alle Medienelemente im Dokument abzurufen (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code nimmt an, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und standardmäßig so konfiguriert ist, dass es mit Audio automatisch abgespielt wird.
Wenn das Autoplay nur für unhörbare Inhalte erlaubt ist, stummschalten wir das Audio; wenn das Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

```js
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // Das Videoelement wird mit Ton automatisch abgespielt.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Audio beim Video stummschalten
  video.muted = true;
} else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
  // Ein Standardplatzhalterbild festlegen.
  video.poster = "http://example.com/poster_image_url";
}
```

Der Code zum Testen eines bestimmten Elements oder Audiokontexts ist derselbe, außer dass Sie das zu testende Element oder den Kontext übergeben, anstatt den Typ-String.
Hier übergeben wir das zu testende `video`-Objekt.

```js
if (navigator.getAutoplayPolicy(video) === "allowed") {
  // Das Videoelement wird mit Ton automatisch abgespielt.
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
  // Audio beim Video stummschalten
  video.muted = true;
} else if (navigator.getAutoplayPolicy(video) === "disallowed") {
  // Ein Standardplatzhalterbild festlegen.
  video.poster = "http://example.com/poster_image_url";
}
```

Die Autoplay-Richtlinie für einen bestimmten Typ kann sich aufgrund der Benutzerinteraktion mit der Seite, der Seite oder einem bestimmten Element ändern.
Ebenso könnte in einigen Browsern die Richtlinie für ein bestimmtes Element geändert werden, obwohl sich die Richtlinie für den Typ nicht geändert hat (zum Beispiel in Browsern, in denen das Berühren eines bestimmten Elements nur dieses Element abspielen lässt).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), wird im Allgemeinen empfohlen, dass die Richtlinie beim Laden der Seite überprüft wird, indem der Typ verwendet wird.

#### Beispiel 3: Erkennen eines Autoplay-Fehlers als Fallback

Kein spezifisches Ereignis (oder eine andere Benachrichtigung) wird durch den Erfolg oder Misserfolg des Autoplay ausgelöst, sodass Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit haben, zu bestimmen, ob Autoplay unterstützt wird, oder darauf zu reagieren, wann es ausgelöst wird oder nicht.

Ein Ansatz ist, auf das erste Auftreten des {{domxref("HTMLMediaElement/play_event", "play")}}-Ereignisses zu hören, das auf dem Medienelement ausgeführt wird, wenn es nach einer Pause wiederaufgenommen wird _und_ wenn Autoplay auftritt.
Das bedeutet, dass das erste Mal, wenn das `play`-Ereignis ausgelöst wird, Sie wissen, dass Ihre Medien zum ersten Mal nach dem Öffnen der Seite gestartet werden,

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="myvideo.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem {{domxref("HTMLMediaElement.play_event", "play")}}-Ereignishandler ausgestattet ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die das `play`-Ereignis als Eingabe erhält.

`handleFirstPlay()` sieht so aus:

```js
const video = document.getElementById("video");
video.addEventListener("play", handleFirstPlay, false);

let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    // Listener entfernen, damit dieser nur einmal aufgerufen wird.
    const vid = event.target;
    vid.removeEventListener("play", handleFirstPlay);

    // Starten Sie, was auch immer Sie tun müssen, nachdem die erste Wiedergabe gestartet hat
  }
}
```

Nachdem wir eine Referenz auf das Videoelement aus dem {{domxref("Event")}}-Objekt über {{domxref("Event.target", "target")}} erhalten haben, verwenden wir es, um den Ereignislistener zu entfernen.
Dies verhindert, dass zukünftige `play`-Ereignisse an den Handler ausgeliefert werden. Das könnte passieren, wenn das Video vom Benutzer angehalten und wieder aufgenommen wird oder automatisch vom Browser, wenn das Dokument in einem Hintergrund-Tab ist.

An diesem Punkt kann Ihre Seite oder App anfangen, was auch immer es tun muss, das darauf beruht, dass das Video gestartet wurde.

### Die play()-Methode

Der Begriff "autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio enthalten, außerhalb des Kontexts eines Benutzerereignisses auszulösen. Dies geschieht durch Aufrufen der {{domxref("HTMLMediaElement.play", "play()")}}-Methode des Medienelements.

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich das `autoplay`-Attribut zu verwenden, da die Unterstützung für Autoplay-Präferenzen bei Verwendung des `autoplay`-Attributs weit verbreiteter ist als bei anderen Methoden des automatischen Abspielens von Medien. Es gibt dem Browser auch die Verantwortung, die Wiedergabe zu starten, und erlaubt ihm, den Zeitpunkt des Starts zu optimieren.

#### Beispiel: Video abspielen

Dieses einfache Beispiel spielt das erste {{HTMLElement("video")}}-Element im Dokument ab. `play()` lässt die Wiedergabe nicht zu, es sei denn, das Dokument hat die Erlaubnis, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit Fehlern beim play()

Es ist viel einfacher, ein fehlschlagendes Autoplay zu erkennen, wenn Sie die {{domxref("HTMLMediaElement.play", "play()")}}-Methode verwenden, um es zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, welches aufgelöst wird, sobald die Medien erfolgreich mit dem Abspielen beginnen, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (wie zum Beispiel wenn Autoplay abgelehnt wird). Wenn Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit anbieten, mit der der Benutzer das Abspielen manuell starten kann.

Sie könnten Code wie diesen verwenden, um die Aufgabe zu erledigen:

```js
let startPlayPromise = videoElem.play();

if (startPlayPromise !== undefined) {
  startPlayPromise
    .then(() => {
      // Starten Sie, was auch immer Sie tun müssen, nur nachdem die Wiedergabe
      // begonnen hat.
    })
    .catch((error) => {
      if (error.name === "NotAllowedError") {
        showPlayButton(videoElem);
      } else {
        // Laden Sie einen Lade- oder Wiedergabefehler
      }
    });
}
```

Das Erste, was wir mit dem Ergebnis von `play()` tun, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, weil in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgegeben hat. Ein Versprechen zurückzugeben, um Ihnen die Möglichkeit zu geben, den Erfolg oder das Scheitern der Operation zu bestimmen, wurde erst vor Kurzem hinzugefügt. Das Überprüfen auf `undefined` verhindert, dass dieser Code bei älteren Versionen von Webbrowsern mit einem Fehler beendet wird.

Wenn das von `play()` zurückgegebene Promise ohne Fehler aufgelöst wird, wird der `then()`-Klausel ausgeführt und kann beginnen, was auch immer getan werden muss, wenn Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler zum Promise hinzu. Dieser prüft den {{domxref("DOMException.name", "name")}} des Fehlers, um zu sehen, ob es sich um `NotAllowedError` handelt. Dies weist darauf hin, dass die Wiedergabe aufgrund eines Berechtigungsproblems fehlgeschlagen ist, wie zum Beispiel wenn Autoplay abgelehnt wird. In diesem Fall sollten wir eine Benutzeroberfläche präsentieren, die dem Benutzer die manuelle Wiedergabe ermöglicht; dies wird hier von einer Funktion `showPlayButton()` behandelt.

Andere Fehler werden nach Bedarf behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite abspielen möchten, könnte [`setInterval()`](/de/docs/Web/API/setInterval) verwendet werden, um dies zu erreichen:

```js
let playAttempt = setInterval(() => {
  videoElem
    .play()
    .then(() => {
      clearInterval(playAttempt);
    })
    .catch((error) => {
      console.log("Kann das Video nicht abspielen, Benutzer hat noch nicht interagiert.");
    });
}, 3000);
```

## Autoplay mit der Web Audio API

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio durch Verwenden der `start()`-Methode auf einem Quellknoten, der mit dem {{domxref("AudioContext")}} verbunden ist, abspielen. Das tun außerhalb des Kontexts der Handhabung eines Benutzerereignisses unterliegt den Regeln für das Autoplay.

## Die Autoplay Permissions Policy

Zusätzlich zur Browser-seitigen Verwaltung und Kontrolle über die oben beschriebene Autoplay-Funktionalität kann ein Web-Server auch seine Bereitschaft ausdrücken, Autoplay zu erlauben. Der {{Glossary("HTTP")}}-Header {{HTTPHeader("Permissions-Policy")}} verwendet die [`autoplay`](/de/docs/Web/HTTP/Headers/Permissions-Policy/autoplay)-Direktive, um zu steuern, welche Domains, wenn überhaupt, für das automatische Abspielen von Medien verwendet werden können. Standardmäßig ist die `autoplay` Permissions Policy auf `self` gesetzt, was anzeigt, dass Autoplay erlaubt ist, solange sie auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Allowlist (`()`) angeben, um Autoplay vollständig zu deaktivieren, `*`, um Autoplay von allen Domains zuzulassen, oder eine oder mehrere spezifische Ursprünge, von denen aus Medien automatisch abgespielt werden können. Diese Ursprünge sind durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Permissions Policy gilt für das Dokument und jedes darin verschachtelte {{HTMLElement("iframe")}}, es sei denn, diese Rahmen enthalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Permissions Policy setzt, die für diesen Rahmen und alle verschachtelten Rahmen gilt.

Beim Verwenden des [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attributs auf einem `<iframe>`, um eine Permissions Policy für diesen Rahmen und seine verschachtelten Rahmen zu spezifizieren, können Sie auch den Wert `'src'` angeben, um das automatische Abspielen von Medien nur von derselben Domain zu erlauben, die durch das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des Rahmens spezifiziert ist.

### Beispiel: Zulassen von Autoplay nur von der Domain des Dokuments

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um nur Medien von der {{Glossary("origin")}} des Dokuments automatisch abspielen zu lassen:

```http
Permissions-Policy: autoplay=(self)
```

Dasselbe für ein {{HTMLElement("iframe")}}:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Zulassen von Autoplay und Vollbildmodus

Hinzufügen der Berechtigung für die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zum vorherigen Beispiel ergibt einen `Permissions-Policy`-Header wie den folgenden, wenn der Vollbildzugriff unabhängig von der Domain erlaubt ist; bei Bedarf kann eine Domain-Beschränkung hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, gewährt mit dem `allow`-Eigenschaft des `<iframe>`-Elements, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Zulassen von Autoplay von spezifischen Quellen

Der `Permissions-Policy`-Header, um Medien sowohl vom eigenen Domain des Dokuments (oder des `<iframe>`) als auch von `https://example.media` abspielen zu lassen, sieht so aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann so geschrieben werden, um anzugeben, dass diese Autoplay-Richtlinie auf sich selbst und alle Kindrahmen angewendet wird:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Deaktivieren von Autoplay

Das Setzen der `autoplay` Permissions Policy auf `()`/`none` deaktiviert das Autoplay vollständig für das Dokument oder `<iframe>` und alle verschachtelten Rahmen. Der HTTP-Header ist:

```http
Permissions-Policy: autoplay=()
```

Verwenden Sie das `allow`-Attribut des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Best Practices

Tipps und empfohlene Best Practices, die Ihnen helfen, das Beste aus dem Arbeiten mit Autoplay herauszuholen, werden hier angeboten.

### Umgang mit Autoplay-Fehlern mit Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist das automatische Starten eines Videoclips, der mit einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionalität der Seite einhergeht. Um solche Videos automatisch abzuspielen, haben Sie zwei Optionen: keine Audiospur haben oder eine Audiospur haben, aber das {{HTMLElement("video")}}-Element standardmäßig so konfigurieren, dass das Audio stummgeschaltet ist, so:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen umfasst (normalerweise Abspielen/Pause, Durchlaufen der Zeitleiste des Videos, Lautstärkeregelung und Stumm) und da das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut enthalten ist, sowie das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut, das für Autoplay in Safari erforderlich ist, wird das Video automatisch abgespielt, jedoch mit stummgeschaltetem Ton. Der Benutzer hat jedoch die Möglichkeit, den Ton durch Klicken auf die Entstummtaste in den Steuerelementen wieder zu aktivieren.

## Browser-Konfigurationsoptionen

Browser können Einstellungen haben, die steuern, wie Autoplay funktioniert oder wie Autoplay-Blockierungen gehandhabt werden. Hier werden alle Präferenzen aufgelistet, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein könnten. Dazu gehören alle, die beim Testen oder Debuggen nützlich sein könnten sowie solche, die so eingestellt werden könnten, dass Sie vorbereitet sein müssen, damit umzugehen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Präferenz, die angibt, ob die nicht standardmäßige `HTMLMediaElement.allowedToPlay`-Eigenschaft im Web verfügbar ist. Derzeit ist dies standardmäßig `false` (außer in Nightly-Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist daher auf weder {{HTMLElement("audio")}} noch {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Präferenz erlaubt, wenn `true`, dass Hintergrundskripte von Browsererweiterungen Audiodateien automatisch wiedergeben können. Das Setzen dieses Werts auf `false` deaktiviert diese Fähigkeit. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Präferenz, die, wenn `true` (Standard), automatisch die Wiedergabe von Audio-Dateien erlaubt, die derzeit stummgeschaltet sind. Wenn dies auf `false` geändert wurde, wird Medien mit einer Audiospur das Abspielen selbst dann nicht erlaubt, wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Präferenz, die angibt, ob Autoplay-Blockierungen auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet werden.
    Wenn `false`, darf Web-Audio immer automatisch abgespielt werden.
    Wenn `true`, dürfen Audiokontexte auf Seiten nur abgespielt werden, nachdem eine {{Glossary("Sticky activation")}} stattfand.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine ganzzahlige Präferenz, die angibt, ob die per-Domain-Konfiguration zur Unterstützung von Autoplay standardmäßig erlaubt (`0`), blockiert (`1`) oder um Erlaubnis gefragt wird (`2`). Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly-Builds)
  - : Eine boolesche Präferenz, die steuert, ob die Erkennung von Benutzeraktionen die Einstellung von `media.autoplay.default` außer Kraft setzen kann. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt ist, erlaubt diese Präferenz, wenn sie `true` ist, das automatische Abspielen von Medien mit Audiospuren trotzdem, wenn die Seite durch Benutzeraktionen aktiviert wurde, und nicht hörbare Medien sind überhaupt nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Präferenz, die angibt, ob die Wiedergabe von Medien blockiert wird, wenn sie auf einem Hintergrund-Tab gestartet wird. Der Standardwert, `true`, bedeutet, dass selbst wenn es anderweitig verfügbar ist, Autoplay nicht stattfindet, bis der Tab in den Vordergrund geholt wird. Dies verhindert die ablenkende Situation, in der ein Tab beginnt, Geräusche zu machen, und der Benutzer den Tab nicht unter all seinen Tabs und Fenstern finden kann.

## Siehe auch

- [Webmedientechniken](/de/docs/Web/Media)
- [Video- und Audiodateien](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Lernleitfaden)
- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Plattformübergreifende Audio-Grundlagen](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
