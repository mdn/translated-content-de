---
title: Leitfaden für Autoplay für Media- und Web-Audio-APIs
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiospuren) unmittelbar beim Laden einer Seite kann für Nutzer eine unerwünschte Überraschung sein. Obwohl das automatische Abspielen von Medien einen nützlichen Zweck erfüllt, sollte es sorgfältig und nur bei Bedarf verwendet werden. Um Nutzern Kontrolle darüber zu geben, bieten Browser häufig verschiedene Formen der Autoplay-Blockierung. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Media- und Web-Audio-APIs, einschließlich eines kurzen Überblicks darüber, wie Autoplay verwendet wird und wie Sie mit Browsern zusammenarbeiten können, um Autoplay-Blockierungen angemessen zu behandeln.

Die Autoplay-Blockierung wird _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn das Quellmedium keine Audiospur hat oder wenn die Audiospur stummgeschaltet ist. Medien mit einer aktiven Audiospur gelten als **hörbar**, und auf sie wird die Autoplay-Blockierung angewendet. **Unhörbare** Medien sind von der Autoplay-Blockierung nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die dazu führt, dass Medien ohne ausdrückliche Aufforderung des Nutzers zur Wiedergabe beginnen. Dies umfasst sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch die Verwendung von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts der Verarbeitung von Nutzereingaben zu starten.

Das bedeutet, dass beide folgenden Fälle als Autoplay-Verhalten gelten und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Webfunktionen und APIs können von der Autoplay-Blockierung betroffen sein:

- Die {{Glossary("HTML", "HTML")}}-Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus Sicht des Nutzers kann eine Webseite oder App, die ohne Vorwarnung plötzlich Geräusche wiedergibt, irritierend, unpraktisch oder abschreckend sein. Deshalb erlauben Browser Autoplay im Allgemeinen nur unter bestimmten Umständen.

### Verfügbarkeit von Autoplay

Als allgemeine Regel können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eine_ der folgenden Bedingungen erfüllt ist:

- Das Audio ist stummgeschaltet oder seine Lautstärke ist auf 0 gesetzt.
- Der Nutzer hat mit der Website interagiert (durch Klicken, Tippen, Tastendruck usw.).
- Die Website wurde auf eine Zulassungsliste gesetzt; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Nutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Funktionen der Benutzeroberfläche.
- Die Autoplay-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) wird verwendet, um einem {{HTMLElement("iframe")}} und seinem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, die zu einer Blockierung führen, sowie die Details dazu, wie Websites auf eine Zulassungsliste gelangen, unterscheiden sich je nach Browser, aber die oben genannten Punkte sind gute Richtlinien.

Weitere Informationen finden Sie in den Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt wird die Wiedergabe aller Medien, die Audio enthalten, im Allgemeinen blockiert, wenn die Wiedergabe programmatisch in einem Tab gestartet wird, in dem noch keine Nutzerinteraktion stattgefunden hat. Browser können außerdem unter weiteren Umständen eine Blockierung vornehmen.

## Autoplay von Medienelementen

Nachdem wir erläutert haben, was Autoplay ist und was verhindern kann, dass Autoplay erlaubt wird, sehen wir uns an, wie Ihre Website oder App Medien beim Laden der Seite automatisch wiedergeben kann, wie Sie erkennen, wenn Autoplay nicht erfolgt, und wie Sie damit umgehen können, wenn der Browser Autoplay verweigert.

### Das Attribut autoplay

Die einfachste Möglichkeit, Inhalte automatisch abzuspielen, besteht darin, Ihrem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element das Attribut [`autoplay`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) hinzuzufügen, das die Eigenschaft [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) des Elements auf `true` setzt.
Wenn `autoplay` den Wert `true` hat, beginnt das Medium automatisch so bald wie möglich nach dem Eintreten der folgenden Bedingungen mit der Wiedergabe:

- Die Seite darf die Autoplay-Funktionalität verwenden.
- Das Element wurde während des Ladens der Seite erstellt.
- Es wurden genügend Mediendaten empfangen, um die Wiedergabe zu beginnen und ohne Unterbrechung bis zum Ende des Mediums fortzusetzen, sofern keine drastischen Änderungen der Netzwerkleistung oder Bandbreite auftreten.

#### Beispiel: Das Attribut autoplay

Ein {{HTMLElement("audio")}}-Element mit dem Attribut `autoplay` könnte folgendermaßen aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie das Verhalten möglicherweise daran anpassen, ob Autoplay erlaubt, nicht erlaubt oder nur für unhörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung beispielsweise ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur Autoplay für unhörbare Inhalte erlaubt, können Sie entweder den Ton stummschalten oder ein Video ohne Audiospur bereitstellen.
Wenn Sie ebenso wissen, dass Autoplay überhaupt nicht erlaubt ist, können Sie ein Standardbild für das Video bereitstellen (mithilfe des Attributs [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)) oder das Laden des Videos aufschieben, bis es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für einen Medientyp in einem Dokument zu prüfen (d.h. für alle Medienelemente oder alle Audiokontexte) oder um zu prüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Richtlinie für alle Medienelemente im Dokument abzurufen (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte abzurufen).
Der Code setzt voraus, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das Tag [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet, und dass es standardmäßig für Autoplay mit Audio konfiguriert ist.
Wenn Autoplay nur für unhörbare Inhalte erlaubt ist, schalten wir das Audio stumm; wenn Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code zum Testen eines bestimmten Elements oder Audiokontexts ist derselbe, außer dass Sie das zu testende Element oder den Kontext statt des Typ-Strings übergeben.
Hier übergeben wir das zu testende `video`-Objekt.

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

Die Autoplay-Richtlinie für einen Typ kann sich durch Nutzerinteraktionen mit der Website, Seite oder einem bestimmten Element ändern.
Ebenso kann sich in einigen Browsern die Richtlinie für ein bestimmtes Element ändern, obwohl sich die Richtlinie für den Typ nicht geändert hat (beispielsweise in Browsern, in denen das Berühren eines bestimmten Elements nur diesem Element Autoplay erlauben kann).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (weder für einen Typ noch für ein Element), empfehlen wir im Allgemeinen, die Richtlinie beim Laden der Seite anhand des Typs zu prüfen.

#### Beispiel 3: Erkennen eines fehlgeschlagenen Autoplay als Fallback

Durch erfolgreiches oder fehlgeschlagenes Autoplay wird kein bestimmtes Ereignis (oder eine andere Benachrichtigung) ausgelöst. Daher haben Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit festzustellen, ob Autoplay unterstützt wird oder ob sie reagieren sollen, wenn es ausgelöst wird oder nicht.

Ein Ansatz besteht darin, auf das erste Auftreten des Ereignisses [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) zu warten, das auf dem Medienelement ausgelöst wird, wenn die Wiedergabe nach einer Pause fortgesetzt wird _und_ wenn Autoplay erfolgt.
Das bedeutet, dass Sie beim ersten Auslösen des Ereignisses `play` wissen, dass Ihr Medium erstmals nach dem Öffnen der Seite gestartet wird.

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen Attribut [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) gesetzt ist und für das ein Event-Handler für [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) eingerichtet wurde; das Ereignis wird von einer Funktion namens `handleFirstPlay()` verarbeitet, die das Ereignis `play` als Eingabe erhält.

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

Nachdem wir über [`target`](/de/docs/Web/API/Event/target) des Objekts [`Event`](/de/docs/Web/API/Event) eine Referenz auf das Videoelement erhalten haben, verwenden wir diese, um den Event-Listener zu entfernen.
Dadurch wird verhindert, dass zukünftige `play`-Ereignisse an den Handler übermittelt werden. Dies könnte passieren, wenn das Video vom Nutzer angehalten und fortgesetzt wird oder wenn der Browser dies automatisch tut, während sich das Dokument in einem Hintergrund-Tab befindet.

An diesem Punkt kann Ihre Website oder App mit allem beginnen, was darauf angewiesen ist, dass das Video gestartet wurde.

### Die Methode play()

Der Begriff „Autoplay“ bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien mit Audio außerhalb des Kontexts der Verarbeitung eines Nutzereingabeereignisses auszulösen. Dies geschieht durch Aufrufen der Methode [`play()`](/de/docs/Web/API/HTMLMediaElement/play) des Medienelements.

> [!NOTE]
> Es wird dringend empfohlen, nach Möglichkeit das Attribut `autoplay` zu verwenden, da die Unterstützung für Autoplay-Einstellungen beim Attribut `autoplay` weiter verbreitet ist als bei anderen Methoden zum automatischen Abspielen von Medien. Außerdem überlässt es dem Browser die Verantwortung für den Start der Wiedergabe, sodass dieser den Zeitpunkt optimieren kann.

#### Beispiel: Wiedergabe eines Videos

Dieses Beispiel spielt das erste im Dokument gefundene {{HTMLElement("video")}}-Element ab. `play()` lässt den Beginn der Wiedergabe nicht zu, sofern das Dokument keine Berechtigung hat, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Behandlung von play()-Fehlern

Ein fehlgeschlagenes automatisches Abspielen von Medien lässt sich viel einfacher erkennen, wenn Sie die Methode [`play()`](/de/docs/Web/API/HTMLMediaElement/play) zum Starten verwenden. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Wiedergabe des Mediums erfolgreich beginnt, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (etwa wenn Autoplay verweigert wird). Wenn Autoplay fehlschlägt, möchten Sie dem Nutzer wahrscheinlich eine Möglichkeit bieten, dem Browser manuell mitzuteilen, dass er den Nutzer um die Berechtigung zum Abspielen von Medien bitten soll.

Sie könnten Code wie diesen verwenden, um dies zu erreichen:

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

Als Erstes prüfen wir beim Ergebnis von `play()`, ob es nicht `undefined` ist. Wir prüfen dies, weil `play()` in früheren Versionen der HTML-Spezifikation keinen Wert zurückgab. Die Rückgabe eines Promise, mit dem Sie den Erfolg oder Misserfolg der Operation bestimmen können, wurde erst später hinzugefügt. Die Prüfung auf `undefined` verhindert, dass dieser Code bei älteren Versionen von Webbrowsern mit einem Fehler fehlschlägt.

Wenn das von `play()` zurückgegebene Promise ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann alles starten, was nach Beginn des Autoplay erforderlich ist.

Anschließend fügen wir dem Promise einen Handler für {{jsxref("Promise.catch", "catch()")}} hinzu. Dieser prüft [`name`](/de/docs/Web/API/DOMException/name) des Fehlers darauf, ob er `NotAllowedError` ist. Dies zeigt an, dass die Wiedergabe aufgrund eines Berechtigungsproblems fehlgeschlagen ist, etwa weil Autoplay verweigert wurde. In diesem Fall sollten wir eine Benutzeroberfläche bereitstellen, mit der der Nutzer die Wiedergabe manuell starten kann; dies wird hier durch die Funktion `showPlayButton()` behandelt.

Alle anderen Fehler werden entsprechend behandelt.

Wenn Sie die Wiedergabe des Videos nach der ersten Interaktion mit der Seite starten möchten, kann [`setInterval()`](/de/docs/Web/API/Window/setInterval) dafür verwendet werden:

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

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App die Audiowiedergabe mithilfe der Methode `start()` auf einem Quellknoten beginnen, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verknüpft ist. Dies unterliegt außerhalb des Kontexts der Verarbeitung eines Nutzereingabeereignisses den Autoplay-Regeln.

## Die Autoplay-Permissions Policy

Zusätzlich zur oben beschriebenen browserseitigen Verwaltung und Kontrolle über die Autoplay-Funktionalität kann auch ein Webserver seine Bereitschaft ausdrücken, Autoplay zuzulassen. Die Direktive {{httpheader("Permissions-Policy/autoplay", "autoplay")}} des {{Glossary("HTTP", "HTTP")}}-Headers {{HTTPHeader("Permissions-Policy")}} wird verwendet, um zu steuern, welche Domains, sofern vorhanden, zum automatischen Abspielen von Medien verwendet werden können. Standardmäßig ist die `autoplay`-Permissions Policy auf `self` gesetzt, was angibt, dass Autoplay erlaubt ist, wenn die Medien auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Zulassungsliste (`()`) angeben, um Autoplay vollständig zu deaktivieren, `*`, um Autoplay von allen Domains zu erlauben, oder einen oder mehrere spezifische Origins, von denen Medien automatisch abgespielt werden können. Diese Origins werden durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Permissions Policy gilt für das Dokument und jedes darin verschachtelte {{HTMLElement("iframe")}}, sofern diese Frames nicht ein [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) enthalten, das eine neue Permissions Policy für diesen Frame und alle darin verschachtelten Frames festlegt.

Wenn Sie das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) für ein `<iframe>` verwenden, um eine Permissions Policy für diesen Frame und seine verschachtelten Frames anzugeben, können Sie außerdem den Wert `'src'` angeben, um Autoplay von Medien nur von derselben Domain zu erlauben, die durch das Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) des Frames angegeben ist.

### Beispiel: Autoplay nur von der Domain des Dokuments erlauben

So verwenden Sie den Header {{HTTPHeader("Permissions-Policy")}}, um das automatische Abspielen von Medien nur vom {{Glossary("origin", "Origin")}} des Dokuments zu erlauben:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus erlauben

Das Hinzufügen der Berechtigung für die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zum vorherigen Beispiel führt zu einem `Permissions-Policy`-Header wie dem folgenden, wenn der Vollbildzugriff unabhängig von der Domain erlaubt wird; bei Bedarf kann auch eine Domain-Einschränkung hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Dieselben Berechtigungen, die über die Eigenschaft `allow` des Elements `<iframe>` erteilt werden, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von bestimmten Quellen erlauben

Der Header `Permissions-Policy`, um die Wiedergabe von Medien sowohl von der eigenen Domain des Dokuments (oder `<iframe>`) als auch von `https://example.media` zu erlauben, sieht so aus:

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

Das Setzen der `autoplay`-Permissions Policy auf `()`/`none` deaktiviert Autoplay vollständig für das Dokument oder `<iframe>` sowie alle verschachtelten Frames. Der HTTP-Header lautet:

```http
Permissions-Policy: autoplay=()
```

Mit dem Attribut `allow` des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Bewährte Vorgehensweisen

Hier finden Sie Tipps und empfohlene bewährte Vorgehensweisen, die Ihnen helfen, Autoplay bestmöglich zu nutzen.

### Behandlung fehlgeschlagenen Autoplay mit Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist das automatische Abspielen eines Videoclips, der zu einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionalität der Seite gehört. Für das automatische Abspielen solcher Videos haben Sie zwei Möglichkeiten: keine Audiospur verwenden oder eine Audiospur verwenden, aber das {{HTMLElement("video")}}-Element so konfigurieren, dass der Ton standardmäßig stummgeschaltet ist:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Nutzersteuerungen enthält (typischerweise Wiedergabe/Pause, Navigation durch die Zeitleiste des Videos, Lautstärkeregelung und Stummschaltung). Da außerdem das Attribut [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) enthalten ist sowie das Attribut [`playsinline`](/de/docs/Web/HTML/Reference/Elements/video#playsinline), das für Autoplay in Safari erforderlich ist, wird das Video automatisch, aber mit stummgeschaltetem Audio abgespielt. Der Nutzer kann das Audio jedoch wieder aktivieren, indem er in den Steuerungen auf die Schaltfläche zum Aufheben der Stummschaltung klickt.

## Browser-Konfigurationsoptionen

Browser können Einstellungen haben, die die Funktionsweise von Autoplay oder die Behandlung der Autoplay-Blockierung steuern. Hier werden alle solche Einstellungen aufgeführt, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein können. Dazu gehören Einstellungen, die beim Testen oder Debugging helfen können, sowie solche, die so gesetzt werden könnten, dass Sie darauf vorbereitet sein müssen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Einstellung, die festlegt, ob die nicht standardisierte Eigenschaft `HTMLMediaElement.allowedToPlay` im Web verfügbar gemacht wird. Derzeit ist sie standardmäßig `false` (außer in Nightly-Builds, wo sie standardmäßig `true` ist). Wenn dies `false` ist, fehlt die Eigenschaft `allowedToPlay` in der Schnittstelle `HTMLMediaElement` und ist daher weder bei {{HTMLElement("audio")}}- noch bei {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Einstellung erlaubt, wenn sie `true` ist, dass Hintergrundskripte von Browsererweiterungen Audiomedien automatisch abspielen. Wenn dieser Wert auf `false` gesetzt wird, wird diese Fähigkeit deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Einstellung, die, wenn sie `true` ist (der Standardwert), erlaubt, dass derzeit stummgeschaltete Audiomedien automatisch abgespielt werden. Wenn dies in `false` geändert wurde, dürfen Medien mit einer Audiospur nicht wiedergegeben werden, selbst wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Einstellung, die angibt, ob die Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, darf Web Audio immer automatisch abgespielt werden.
    Wenn `true`, können Audiokontexte auf Seiten erst wiedergeben, nachdem eine {{Glossary("Sticky_activation", "Sticky Activation")}} stattgefunden hat.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine ganzzahlige Einstellung, die festlegt, ob die Konfiguration für die Autoplay-Unterstützung pro Domain standardmäßig erlaubt (`0`), blockiert (`1`) oder bei Verwendung nachgefragt (`2`) wird. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly-Builds)
  - : Eine boolesche Einstellung, die steuert, ob die Erkennung von Nutzergesten die Einstellung von `media.autoplay.default` überschreiben darf. Wenn `media.autoplay.default` _nicht_ auf `0` gesetzt ist (Autoplay ist standardmäßig erlaubt), erlaubt diese Einstellung bei `true` dennoch Autoplay von Medien mit Audiospuren, wenn die Seite durch Nutzergesten aktiviert wurde; Medien, die nicht hörbar sind, werden überhaupt nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Einstellung, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie in einem Hintergrund-Tab gestartet wird. Der Standardwert `true` bedeutet, dass Autoplay, selbst wenn es ansonsten verfügbar ist, erst erfolgt, nachdem ein Tab in den Vordergrund gebracht wurde. Dies verhindert die störende Situation, dass ein Tab mit der Audiowiedergabe beginnt und der Nutzer den Tab nicht unter all seinen Tabs und Fenstern finden kann.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lernleitfaden)
- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen für browserübergreifendes Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
