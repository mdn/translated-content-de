---
title: Autoplay-Leitfaden für Media und Web Audio APIs
slug: Web/Media/Autoplay_guide
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) direkt beim Laden der Seite kann für Benutzer eine unerwartete Überraschung sein. Während Autoplay von Medien einen nützlichen Zweck erfüllt, sollte es sorgfältig und nur bei Bedarf eingesetzt werden. Um den Benutzern die Kontrolle zu geben, bieten Browser oft verschiedene Formen der Autoplay-Blockierung an. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Media- und Web Audio APIs, einschließlich eines kurzen Überblicks darüber, wie Autoplay verwendet wird und wie man mit Browsern zusammenarbeitet, um Autoplay-Blockierungen elegant zu handhaben.

Autoplay-Blockierung wird _nicht_ auf {{HTMLElement("video")}} Elemente angewendet, wenn das Quellmedium keinen Audiotrack hat oder wenn der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack gelten als **hörbar**, und die Autoplay-Blockierung gilt für sie. **Nicht hörbare** Medien sind von der Autoplay-Blockierung nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die bewirkt, dass Medien beginnen zu spielen, ohne dass der Benutzer die Wiedergabe ausdrücklich anfordert. Dies umfasst sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch die Verwendung von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts der Benutzeraktionen zu starten.

Das bedeutet, dass beide der folgenden Fälle als Autoplay-Verhalten betrachtet werden und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Features und APIs können von Autoplay-Blockierung betroffen sein:

- Die [HTML](/de/docs/Glossary/HTML) {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus Sicht des Benutzers kann eine Webseite oder App, die ohne Vorwarnung Geräusche erzeugt, erschreckend, unpraktisch oder abschreckend wirken. Daher erlauben Browser in der Regel nur unter bestimmten Umständen, dass Autoplay erfolgreich durchgeführt wird.

### Verfügbarkeit von Autoplay

Als allgemeine Regel können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eine_ der folgenden Bedingungen zutrifft:

- Der Ton ist stummgeschaltet oder seine Lautstärke ist auf 0 gesetzt
- Der Benutzer hat mit der Website interagiert (durch Klicken, Tippen, Drücken von Tasten usw.)
- Wenn die Website auf eine Ausnahmeliste gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Benutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen
- Wenn die Autoplay [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und seinem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, die zur Blockierung führen, und die Details, wie Webseiten auf die Ausnahmeliste gesetzt werden, variieren von Browser zu Browser, aber die oben genannten Punkte sind gute Richtlinien.

Für Details siehe die Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt, die Wiedergabe von Medien, die Audio enthalten, wird im Allgemeinen blockiert, wenn die Wiedergabe programmatisch in einem Tab initiiert wird, der noch keine Benutzerinteraktion hatte. Browser können zusätzlich entscheiden, unter anderen Umständen zu blockieren.

## Autoplay von Medienelementen

Nachdem wir besprochen haben, was Autoplay ist und was verhindern kann, dass Autoplay erlaubt wird, betrachten wir, wie Ihre Website oder App Medien automatisch beim Laden der Seite abspielen kann, wie man erkennt, wann Autoplay nicht auftritt, und Tipps, wie man damit umgeht, wenn Autoplay vom Browser abgelehnt wird.

### Das Autoplay-Attribut

Die einfachste Möglichkeit, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay) Attribut zu Ihrem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element hinzuzufügen, wodurch die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Eigenschaft des Elements auf `true` gesetzt wird.
Wenn `autoplay` `true` ist, beginnt das Medium automatisch zu spielen, sobald wie möglich, nachdem Folgendes geschehen ist:

- Die Seite darf die Autoplay-Funktionalität verwenden
- Das Element wurde während des Seitenladens erstellt
- Genügend Medien wurden empfangen, um die Wiedergabe zu starten und bis zum Ende der Medien ohne Unterbrechung fortzusetzen, sofern es keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite gibt.

#### Beispiel: Das Autoplay-Attribut

Ein {{HTMLElement("audio")}} Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob Autoplay erlaubt, verboten oder nur für nicht hörbare Inhalte unterstützt wird.
Zum Beispiel, wenn Ihre Anwendung ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay nicht hörbarer Inhalte erlaubt, können Sie es entweder stummschalten oder ein Video ohne Audiotrack bereitstellen.
Ähnlich, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (unter Verwendung des [`poster`](/de/docs/Web/HTML/Element/video#poster) Attributs) oder entscheiden, das Laden des Videos zu verschieben, bis es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für eine Art von Medien-Feature (d.h. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen oder um zu prüfen, ob ein bestimmtes Medienelement oder Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie die `mediaelement` Zeichenkette übergeben, um die Autoplay-Richtlinie für alle Medienelemente im Dokument zu erhalten (geben Sie `audiocontext` an, um die Richtlinie für Audiokontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement` Medienelement ist, das den [`<video>`](/de/docs/Web/HTML/Element/video#autoplay) Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und standardmäßig so konfiguriert ist, dass es mit Ton automatisch abgespielt wird.
Wenn Autoplay nur für nicht hörbare Inhalte erlaubt ist, stummschalten wir das Audio; wenn Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code, um ein bestimmtes Element oder einen Audiokontext zu testen, ist derselbe, außer dass Sie das zu testende Element oder den Kontext anstelle des Typs-Strings übergeben.
Hier übergeben wir das `video` Objekt, das wir testen möchten.

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

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund der Benutzerinteraktion mit der Site, der Seite oder einem bestimmten Element ändern.
Ähnlich könnte sich auf einigen Browsern die Richtlinie für ein bestimmtes Element ändern, obwohl sich die Richtlinie für den Typ nicht geändert hat (zum Beispiel auf Browsern, bei denen das Berühren eines bestimmten Elements es nur diesem ermöglicht, automatisch abzuspielen).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, dass die Richtlinie überprüft wird, wenn die Seite geladen wird, indem der Typ verwendet wird.

#### Beispiel 3: Erkennung von Autoplay-Fehlschlägen als Fallback

Kein bestimmtes Ereignis (oder andere Benachrichtigung) wird durch Autoplay-Erfolg oder -Fehlschlag ausgelöst, sodass Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit haben, festzustellen, ob Autoplay unterstützt wird oder zu reagieren, wenn es ausgelöst wird oder nicht.

Ein Ansatz besteht darin, auf die erste Instanz des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignisses zu hören, das auf dem Medienelement ausgelöst wird, wenn es nach einer Pause fortgesetzt _und_ wenn Autoplay erfolgt.
Das bedeutet, dass Sie wissen, dass Ihr Medium das erste Mal nach dem Öffnen der Seite gestartet wird, sobald das `play` Ereignis manuell oder automatisch ausgelöst wird,

Berücksichtigen Sie diesen HTML-Code für ein Medienelement:

```html
<video src="myvideo.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}} Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignis-Handler ausgestattet ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die das `play` Ereignis als Eingabe erhält.

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

Nachdem wir eine Referenz auf das Videoelement aus dem [`Event`](/de/docs/Web/API/Event) Objekt-[`target`](/de/docs/Web/API/Event/target) erhalten haben, verwenden wir sie, um den Ereignislistener zu entfernen.
Dies verhindert, dass zukünftige `play` Ereignisse an den Handler zugestellt werden. Das könnte passieren, wenn das Video vom Benutzer pausiert und fortgesetzt wird oder automatisch vom Browser, wenn das Dokument sich in einem Hintergrund-Tab befindet.

An diesem Punkt kann Ihre Website oder App mit allem beginnen, was auf dem Video-Start basiert.

### Die play()-Methode

Der Begriff "autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio enthalten, außerhalb des Kontexts der Handhabung eines Benutzer-Ereignisses zu starten. Dies wird durch Aufrufen der [`play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode des Medienelements durchgeführt.

> [!NOTE]
> Es wird stark empfohlen, wann immer möglich das `autoplay` Attribut zu verwenden, da die Unterstützung für Autoplay-Einstellungen beim `autoplay` Attribut weit verbreiteter ist als bei anderen Mitteln, um Medien automatisch abzuspielen. Es erlaubt auch dem Browser, die Verantwortung für das Starten der Wiedergabe zu übernehmen und dadurch den Zeitpunkt der Wiedergabe zu optimieren.

#### Beispiel: Video abspielen

Dieses einfache Beispiel spielt das erste {{HTMLElement("video")}} Element im Dokument ab. `play()` erlaubt das Starten der Wiedergabe nicht, es sei denn, das Dokument hat die Berechtigung, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Fehlschlägen

Es ist viel einfacher, einen Fehlschlag beim automatischen Abspielen von Medien zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode verwenden, um diese zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, welches gelöst wird, sobald die Medien erfolgreich beginnen zu spielen, und wird abgelehnt, wenn die Wiedergabe fehlschlägt (wie wenn das Autoplay verweigert wird). Wenn Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit anbieten, damit der Benutzer dem Browser das manuelle Abspielen von Medien erlaubt.

Sie könnten folgenden Code verwenden, um diese Aufgabe zu erfüllen:

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

Das erste, was wir mit dem Ergebnis von `play()` tun, ist sicherzustellen, dass es nicht `undefined` ist. Wir prüfen dies, da in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgegeben hat. Das Zurückgeben eines Versprechens, um den Erfolg oder Misserfolg der Operation zu bestimmen, wurde erst später hinzugefügt. Die Prüfung auf `undefined` verhindert, dass dieser Code mit einem Fehler in älteren Versionen von Webbrowsern fehlschlägt.

Wenn das Versprechen von `play()` ohne Fehler aufgelöst wird, wird die `then()` Klausel ausgeführt und kann mit allem beginnen, was nach dem Start von Autoplay erforderlich ist.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}} Handler zu dem Versprechen hinzu. Dies überprüft den [`name`](/de/docs/Web/API/DOMException/name) des Fehlers, um zu sehen, ob es sich um `NotAllowedError` handelt. Dies weist darauf hin, dass die Wiedergabe aufgrund eines Berechtigungsproblems fehlgeschlagen ist, wie z. B., dass das Autoplay verweigert wurde. Wenn dies der Fall ist, sollten wir eine Benutzeroberfläche präsentieren, die dem Benutzer manuell das Starten der Wiedergabe ermöglicht; das wird hier durch eine Funktion `showPlayButton()` behandelt.

Alle anderen Fehler werden entsprechend behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite starten möchten, könnte [`setInterval()`](/de/docs/Web/API/setInterval) verwendet werden, um dies zu erreichen:

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

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio durch Aufrufen der `start()` Methode auf einem Quellknoten, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verknüpft ist, starten. Dies außerhalb des Kontexts der Handhabung eines Benutzer-Ereignisses zu tun, unterliegt den Autoplay-Regeln.

## Die Autoplay Permissions Policy

Zusätzlich zu der oben beschriebenen browserseitigen Verwaltung und Kontrolle der Autoplay-Funktionalität kann ein Webserver auch seine Bereitschaft zur Ermöglichung der Autoplay-Funktionalität ausdrücken. Der [HTTP](/de/docs/Glossary/HTTP) {{HTTPHeader("Permissions-Policy")}} Header-Direktive [`autoplay`](/de/docs/Web/HTTP/Headers/Permissions-Policy/autoplay) wird verwendet, um die Kontrolle darüber zu haben, welche Domains, wenn überhaupt, Medien automatisch abspielen dürfen. Standardmäßig ist die `autoplay` Permissions Policy auf `self` gesetzt, was bedeutet, dass Autoplay erlaubt ist, da sie auf der gleichen Domain wie das Dokument gehostet werden.

Sie können auch eine leere Erlaubnisliste (`()`) angeben, um Autoplay vollständig zu deaktivieren, `*` um Autoplay von allen Domains zu erlauben, oder eine oder mehrere spezifische Ursprünge, aus denen Medien automatisch abgespielt werden können. Diese Ursprünge werden durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Permissions Policy gilt für das Dokument und jedes darin verschachtelte {{HTMLElement("iframe")}}, es sei denn, diese Rahmen enthalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Permissions Policy für diesen Rahmen und alle darin verschachtelten Rahmen festlegt.

Wenn das [`allow`](/de/docs/Web/HTML/Element/iframe#allow) Attribut auf einem `<iframe>` verwendet wird, um eine Permissions Policy für diesen Rahmen und seine verschachtelten Rahmen zu spezifizieren, können Sie auch den Wert `'src'` angeben, um das Autoplay von Medien nur von der gleichen Domain wie die durch das [`src`](/de/docs/Web/HTML/Element/iframe#src) Attribut spezifizierte Domain zu erlauben.

### Beispiel: Autoplay nur von der Domain des Dokuments zulassen

Um den {{HTTPHeader("Permissions-Policy")}} Header zu verwenden, um nur Medien von der [Origin](/de/docs/Glossary/origin) des Dokuments automatisch abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus zulassen

Das Hinzufügen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Berechtigung zu dem vorherigen Beispiel ergibt einen `Permissions-Policy` Header wie der folgende, wenn der Vollbildzugriff unabhängig von der Domain erlaubt wird; eine Domain-Einschränkung kann nach Bedarf hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, die mit der `allow` Eigenschaft des `<iframe>` Elements gewährt werden, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von bestimmten Quellen zulassen

Der `Permissions-Policy` Header, um Medien sowohl von der Domain des Dokuments (oder `<iframe>`) als auch von `https://example.media` abzuspielen, sieht so aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann geschrieben werden, um anzugeben, dass diese Autoplay-Richtlinie auf sich selbst und alle Kindrahmen angewendet wird, und es würde so geschrieben werden:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Autoplay deaktivieren

Das Setzen der `autoplay` Permissions Policy auf `()`/`none` deaktiviert Autoplay vollständig für das Dokument oder `<iframe>` und alle darin verschachtelten Frames. Der HTTP-Header lautet:

```http
Permissions-Policy: autoplay=()
```

Verwendung des `allow` Attributs des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Best Practices

Hier werden Tipps und empfohlene Best Practices angeboten, um Ihnen zu helfen, das Beste aus der Arbeit mit Autoplay herauszuholen.

### Umgang mit Autoplay-Fehlschlägen mit Mediensteuerungen

Eine häufige Anwendung für Autoplay ist das automatische Abspielen eines Videoclips, der zu einem Artikel, einer Anzeige oder einer Vorschau auf die Hauptfunktionalität der Seite gehört. Um solche Videos automatisch abzuspielen, haben Sie zwei Optionen: keinen Audiotrack haben, oder einen Audiotrack haben, das {{HTMLElement("video")}} Element jedoch standardmäßig zu stummschalten, wie dies:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses VideElement ist so konfiguriert, dass es die Benutzersteuerungen (typisch: Abspielen/Pause, Durchsuchen der Videotimeline, Lautstärkeregelung und Stummschaltung) enthält; da auch das [`muted`](/de/docs/Web/HTML/Element/video#muted) Attribut enthalten ist und das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline) Attribut, das für das Autoplay in Safari erforderlich ist, wird das Video, jedoch ohne Ton, automatisch abgespielt. Der Benutzer hat jedoch die Möglichkeit, den Ton durch Klicken auf die Stummschaltungs-Schaltfläche in den Steuerelementen wieder zu aktivieren.

## Browser-Konfigurationsoptionen

Browser könnten Einstellungen haben, die die Funktionsweise von Autoplay steuern oder wie die Autoplay-Blockierung gehandhabt wird. Hier sind alle derartigen Einstellungen aufgeführt, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein könnten. Dazu gehören alle, die beim Testen oder Debuggen helfen könnten, sowie alle, die möglicherweise so eingestellt werden könnten, dass Sie darauf vorbereitet sein müssen, damit umzugehen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Voreinstellung, die angibt, ob die nicht standardmäßige `HTMLMediaElement.allowedToPlay` Eigenschaft im Web verfügbar ist. Derzeit ist dies standardmäßig `false` (außer in Nightly Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay` Eigenschaft in der `HTMLMediaElement` Schnittstelle und ist daher nicht auf {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Voreinstellung erlaubt es, dass Hintergrundskripts von Browsererweiterungen Audio-Medien automatisch abspielen, wenn sie `true` ist. Wenn dieser Wert auf `false` gesetzt wird, wird diese Funktionalität deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Voreinstellung, die, wenn sie `true` ist (der Standard), es ermöglicht, dass Audio-Medien, die derzeit stummgeschaltet sind, automatisch abgespielt werden. Wenn diese Einstellung auf `false` geändert wurde, wird Medien mit einem Audiotrack selbst dann nicht erlaubt, wiedergegeben zu werden, wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Voreinstellung, die angibt, ob die Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, ist Web Audio immer zum Autoplay berechtigt.
    Wenn `true`, können Audiokontexte auf Seiten nur abgespielt werden, nachdem es eine [Sticky activation](/de/docs/Glossary/Sticky_activation) gegeben hat.
    Der Standard ist auf `true` gesetzt.
- `media.autoplay.default`
  - : Eine Integer-Vorliebe, die bestimmt, ob die Konfiguration pro Domain für Autoplay-Unterstützung standardmäßig erlaubt (`0`), blockiert (`1`) oder beim ersten Verwenden darauf hingewiesen (`2`) wird. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly Builds)
  - : Eine boolesche Voreinstellung, die steuert, ob die Erkennung von Benutzergesten das Setzen von `media.autoplay.default` überschreiben kann. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt wurde, erlaubt diese Voreinstellung, dass Medien mit Audiotracks dennoch automatisch abgespielt werden dürfen, wenn die Seite durch Benutzergesten aktiviert wurde, und Medien, die nicht hörbar sind, überhaupt nicht eingeschränkt werden.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Voreinstellung, die angibt, ob Medienwiedergabe blockiert wird, wenn sie in einem Hintergrund-Tab gestartet werden. Der Standardwert, `true`, bedeutet, dass selbst dann, wenn sie ansonsten verfügbar ist, die Autoplay-Funktion nicht stattfinden wird, bis nachdem ein Tab in den Vordergrund gebracht wurde. Dies verhindert die Ablenkungssituation, in der eine Registerkarte Ton abspielt und der Benutzer die Registerkarte zwischen allen Registerkarten und Fenstern nicht finden kann.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Lernleitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-Browser Audio Grundlagen](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
