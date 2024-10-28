---
title: Autoplay-Leitfaden für Medien und Web Audio APIs
slug: Web/Media/Autoplay_guide
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das automatische Abspielen von Audio (oder Videos mit Audiotracks) direkt beim Laden einer Seite kann für Benutzer eine unangenehme Überraschung sein. Auch wenn das automatische Abspielen von Medien nützlich sein kann, sollte es mit Bedacht und nur bei Bedarf verwendet werden. Um den Benutzern die Kontrolle darüber zu geben, bieten Browser häufig verschiedene Formen der Blockierung von Autoplay an. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Medien- und Web Audio APIs, einschließlich eines kurzen Überblicks darüber, wie man Autoplay nutzt und wie man mit Browsern zusammenarbeitet, um das Blockieren von Autoplay elegant zu handhaben.

Das Blockieren von Autoplay wird _nicht_ auf `<video>`-Elemente angewandt, wenn das Quellmedium keinen Audiotrack hat oder wenn der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack werden als **hörbar** angesehen, und Autoplay-Blockierung gilt für sie. **Unhörbare** Medien sind von der Autoplay-Blockierung nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die dazu führt, dass Medien ohne ausdrückliche Anforderung des Benutzers mit der Wiedergabe beginnen. Dies schließt sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch die Verwendung von JavaScript-Code ein, um die Wiedergabe außerhalb des Kontexts einer Benutzerinteraktion zu starten.

Das bedeutet, dass sowohl das folgende als auch das folgende Verhalten als Autoplay betrachtet werden und daher der Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Webfunktionen und APIs können von der Autoplay-Blockierung betroffen sein:

- Die {{Glossary("HTML", "HTML")}} `<audio>` und `<video>` Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus der Perspektive des Benutzers kann eine Webseite oder App, die spontan ohne Vorwarnung Lärm macht, erschütternd, unangenehm oder abschreckend wirken. Aus diesem Grund erlauben Browser in der Regel nur unter bestimmten Umständen das erfolgreiche Autoplay.

### Verfügbarkeit von Autoplay

Im Allgemeinen können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eines_ der folgenden zutrifft:

- Der Ton ist stummgeschaltet oder die Lautstärke ist auf 0 eingestellt
- Der Benutzer hat mit der Website interagiert (durch Klicken, Tippen, Tastendrücken usw.)
- Wenn die Site auf die Liste der erlaubten Sites gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Benutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenmerkmale
- Wenn die Autoplay [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um einem `<iframe>` und seinem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, die zur Blockierung führen, und die Besonderheiten, wie Sites auf die Liste der erlaubten Sites gelangen, variieren von Browser zu Browser, aber die oben genannten Punkte sind gute Richtlinien.

Einzelheiten finden Sie in den Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt wird die Wiedergabe aller Medien, die Audio enthalten, im Allgemeinen blockiert, wenn die Wiedergabe programmatisch in einem Tab initiiert wird, mit dem noch keine Benutzerinteraktion stattgefunden hat. Browser können sich zusätzlich dafür entscheiden, unter anderen Umständen zu blockieren.

## Autoplay von Medienelementen

Da wir nun besprochen haben, was Autoplay ist und was verhindern kann, dass Autoplay erlaubt wird, werden wir uns ansehen, wie Ihre Website oder App Medien automatisch beim Laden der Seite abspielen kann, wie man erkennt, wann Autoplay nicht auftritt, und Tipps zum Umgang damit, wenn Autoplay vom Browser abgelehnt wird.

### Das Autoplay-Attribut

Der einfachste Weg, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut zu Ihrem `<audio>` oder `<video>`-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` auf `true` steht, beginnt das Medium automatisch so früh wie möglich nach folgenden Vorgängen zu spielen:

- Die Seite darf die Autoplay-Funktionalität nutzen
- Das Element wurde beim Laden der Seite erstellt
- Es wurde genügend Medium empfangen, um die Wiedergabe zu beginnen und bis zum Ende des Mediums ohne Unterbrechung fortzusetzen, vorausgesetzt, es gibt keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das Autoplay-Attribut

Ein `<audio>`-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob Autoplay erlaubt, nicht erlaubt oder nur für unhörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung beispielsweise ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay von unhörbaren Inhalten erlaubt, können Sie es entweder stummschalten oder ein Video ohne Audiotrack bereitstellen.
Ebenso, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (unter Verwendung des [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attributs) oder das Laden des Videos bis zu einer expliziten Anforderung aufschieben.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Policy für eine Art von Medienfunktion (z. B. alle Medienelemente oder alle Audio-Kontexte) in einem Dokument zu überprüfen oder um zu überprüfen, ob ein spezifisches Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Policy für alle Medienelemente im Dokument zu erhalten (geben Sie `audiocontext` an, um die Policy für Audio-Kontexte zu erhalten).
Der Code setzt voraus, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und standardmäßig so konfiguriert ist, dass es mit Audio automatisch abgespielt wird.
Wenn Autoplay nur für unhörbare Inhalte erlaubt ist, stumm schalten wir das Audio; wenn Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code zum Testen eines spezifischen Elements oder Audiokontextes ist derselbe, außer dass Sie das zu testende Element oder den Kontext statt des Typ-Strings übergeben.
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

Die Autoplay-Policy für einen Typ kann sich aufgrund einer Benutzerinteraktion mit der Site, der Seite oder einem bestimmten Element ändern.
Ebenso könnte bei einigen Browsern die Policy für ein spezifisches Element geändert werden, obwohl die Policy für den Typ unverändert bleibt (zum Beispiel bei Browsern, bei denen das Berühren eines bestimmten Elements nur diesem Element erlaubt, automatisch abgespielt zu werden).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Policy geändert hat (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, die Policy zu überprüfen, wenn die Seite geladen wird, unter Verwendung des Typs.

#### Beispiel 3: Erkennen des Autoplay-Fehlers als Fallback

Kein spezielles Ereignis (oder eine andere Benachrichtigung) wird durch den Erfolg oder Misserfolg des Autoplays ausgelöst, sodass Browser, die `Navigator.getAutoplayPolicy()` nicht unterstützen, keine einfache Möglichkeit haben, festzustellen, ob Autoplay unterstützt wird oder nicht.

Ein Ansatz besteht darin, auf das erste Auftreten des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu lauschen, das auf dem Medienelement ausgelöst wird, wenn es fortgesetzt wird, nachdem es pausiert _und_ Autoplay aufgetreten ist.
Das bedeutet, dass das erste Mal, wenn das `play`-Ereignis ausgelöst wird, Sie wissen, dass Ihr Medium zum ersten Mal gestartet wurde, nachdem die Seite geöffnet wurde.

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein `<video>`-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler ausgestattet ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` gehandhabt, die das `play`-Ereignis als Eingabe empfängt.

`handleFirstPlay()` sieht folgendermaßen aus:

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

Nachdem wir eine Referenz auf das Videoelement vom [`Event`](/de/docs/Web/API/Event)-Objekt über dessen [`target`](/de/docs/Web/API/Event/target) erhalten haben, verwenden wir es, um den Ereignislistener zu entfernen.
Dies verhindert, dass zukünftige `play`-Ereignisse an den Handler übermittelt werden. Das könnte passieren, wenn das Video vom Benutzer pausiert und wieder fortgesetzt wird oder automatisch vom Browser, wenn das Dokument in einem Hintergrund-Tab ist.

An diesem Punkt kann Ihre Site oder App mit allem beginnen, was sie benötigt, um den mittlerweile gestarteten Video abzurufen.

### Die play()-Methode

Der Begriff "Autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien mit Audio zu starten, außerhalb des Kontexts der Bearbeitung eines Benutzereingabeevents. Dies wird durch den Aufruf der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Medienelements durchgeführt.

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich das `autoplay`-Attribut zu verwenden, da die Unterstützung von Autoplay-Einstellungen für das `autoplay`-Attribut weiter verbreitet ist als für andere Mittel, Medien automatisch abzuspielen. Es ermöglicht dem Browser auch die Steuerung des Beginns der Wiedergabe und optimiert den Ablauf des Abspielbeginns.

#### Beispiel: Videowiedergabe

Dieses einfache Beispiel spielt das erste `<video>`-Element im Dokument ab. `play()` lässt die Wiedergabe nicht starten, es sei denn das Dokument hat die Erlaubnis zur automatischen Wiedergabe von Medien.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Fehlern

Es ist viel einfacher, einen Fehler beim Autoplay zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode verwenden, um es zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Medium erfolgreich zu spielen beginnt, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (z. B. wenn Autoplay verweigert wird). Wenn Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit bieten, dem Benutzer manuell zu ermöglichen, dem Browser die Wiedergabe von Medien zu gestatten.

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

Das Erste, was wir mit dem Ergebnis von `play()` machen, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, denn in früheren Versionen der HTML-Spezifikation gab `play()` keinen Wert zurück. Das Zurückgeben eines Versprechens zur Bestimmung des Erfolgs oder Misserfolgs der Operation wurde kürzlich hinzugefügt. Das Überprüfen von `undefined` verhindert, dass dieser Code in älteren Browserversionen mit einem Fehler fehlschlägt.

Wenn das von `play()` zurückgegebene Versprechen ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann alles starten, was getan werden muss, wenn Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler zum Versprechen hinzu. Dieser sieht sich den [`name`](/de/docs/Web/API/DOMException/name) des Fehlers an, um zu überprüfen, ob er `NotAllowedError` lautet. Dies zeigt an, dass die Wiedergabe aufgrund eines Berechtigungsproblems fehlgeschlagen ist, z. B. wenn Autoplay verweigert wird. Wenn dies der Fall ist, sollten wir eine Benutzeroberfläche präsentieren, um dem Benutzer zu ermöglichen, die Wiedergabe manuell zu starten; dies wird hier von einer Funktion `showPlayButton()` gehandhabt.

Alle anderen Fehler werden nach Bedarf behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite starten möchten, könnte [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet werden, um dies zu erreichen:

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

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio mithilfe der `start()`-Methode auf einem Quellknoten starten, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verbunden ist. Dies geschieht außer im Kontext der Bearbeitung eines Benutzereingabereignisses und unterliegt den Autoplay-Regeln.

## Die Autoplay Permissions Policy

Zusätzlich zur browserseitigen Verwaltung und Steuerung der oben beschriebenen Autoplay-Funktionalität kann ein Webserver auch seine Bereitschaft ausdrücken, Autoplay zuzulassen. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive {{httpheader("Permissions-Policy/autoplay", "autoplay")}} wird verwendet, um zu steuern, welche Domains, falls vorhanden, für das automatische Abspielen von Medien verwendet werden können. Standardmäßig ist die `autoplay`-Berechtigungsrichtlinie auf `self` gesetzt, was anzeigt, dass das Autoplay erlaubt ist, wie sie auf derselben Domain wie das Dokument gehostet sind.

Sie können auch eine leere Liste der erlaubten Medien (`()`) angeben, um Autoplay vollständig zu deaktivieren, `*` verwenden, um Autoplay von allen Domains zuzulassen, oder eine oder mehrere spezifische Quellen, von denen Medien automatisch abgespielt werden können. Diese Quellen sind durch Leerzeichenzeichen getrennt.

> [!NOTE]
> Die angegebene Berechtigungsrichtlinie gilt für das Dokument und jedes eingebettete `<iframe>`, es sei denn, diese Frames enthalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Berechtigungsrichtlinie für diesen Frame und alle darin eingebetteten Frames festlegt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf einem `<iframe>` verwenden, um eine Berechtigungsrichtlinie für diesen Frame und seine eingebetteten Frames festzulegen, können Sie auch den Wert `'src'` angeben, um das automatische Abspielen von Medien nur von derselben Domain zu ermöglichen, die vom `src`-Attribut des Frames angegeben ist.

### Beispiel: Nur Autoplay von der Dokument-Domain zulassen

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um nur Medien von der {{Glossary("origin", "Ursprung")}} des Dokuments automatisch abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein `<iframe>` zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus zulassen

Wenn Sie die Berechtigung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zum vorherigen Beispiel hinzufügen, erhalten Sie einen `Permissions-Policy`-Header wie den folgenden, wenn Vollbildzugriff unabhängig von der Domain erlaubt ist; eine Domainsbeschränkung kann nach Bedarf ebenfalls hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, die unter Verwendung des `allow`-Eigentums des `<iframe>`-Elements erteilt wurden, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von bestimmten Quellen zulassen

Der `Permissions-Policy`-Header, um die Wiedergabe von Medien sowohl von der Domain des Dokuments (oder `<iframe>`) als auch von `https://example.media` zu ermöglichen, sieht folgendermaßen aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein `<iframe>`-Element, das angeben soll, dass diese Autoplay-Richtlinie für sich selbst und alle darin verschachtelten Frames gelten soll, würde so geschrieben werden:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Autoplay deaktivieren

Das Setzen der `autoplay`-Berechtigungsrichtlinie auf `()`/`none` deaktiviert das Autoplay vollständig für das Dokument oder `<iframe>` und alle darin eingebetteten Frames. Der HTTP-Header lautet:

```http
Permissions-Policy: autoplay=()
```

Verwendung des `allow`-Attributs des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Beste Praktiken

Hier werden Tipps und empfohlene beste Praktiken angeboten, um Ihnen zu helfen, das Beste aus der Arbeit mit Autoplay zu machen.

### Umgang mit Autoplay-Fehlern mit Mediensteuerungen

Ein gängiger Anwendungsfall für Autoplay ist das automatische Abspielen eines Videoclips, der mit einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionalität der Seite verbunden ist. Um solche Videos automatisch abzuspielen, haben Sie zwei Möglichkeiten: keinen Audiotrack zu haben oder einen Audiotrack zu haben, aber das `<video>`-Element so zu konfigurieren, dass es standardmäßig stumm geschaltet ist, wie folgt:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen (normalerweise Wiedergabe/Pause, Vor- und Zurückspulen in der Zeitleiste des Videos, Lautstärkeregelung und Stummschaltung) enthält; auch, da das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut enthalten ist und das für Autoplay in Safari erforderliche [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut umfasst, wird das Video automatisch abgespielt, jedoch stummgeschaltet. Der Benutzer hat jedoch die Möglichkeit, das Audio zu aktivieren, indem er auf die Lautstärketaste in den Steuerungen klickt.

## Browser-Konfigurationseinstellungen

Browser können Präferenzen haben, die die Funktionsweise von Autoplay oder die Handhabung von Autoplay-Blockierungen steuern. Hier sind solche Präferenzen aufgelistet, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein könnten. Dazu gehören alle, die bei Tests oder Fehlerbehebungen helfen können, sowie alle, die in einer Weise eingestellt wurden, die Sie beachten müssen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Präferenz, die angibt, ob die nicht standardisierte `HTMLMediaElement.allowedToPlay`-Eigenschaft dem Web verfügbar gemacht wird. Diese ist derzeit standardmäßig auf `false` gesetzt (außer in Nightly-Builds, in denen sie standardmäßig `true` ist). Wenn diese auf `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist daher nicht auf `<audio>` oder `<video>`-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Präferenz ermöglicht, wenn `true`, dass Hintergrundskripte von Browsererweiterungen automatisch Audiomedien abspielen. Wenn dieser Wert auf `false` gesetzt ist, wird diese Fähigkeit deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Präferenz, die, wenn `true` (der Standardwert), erlaubt, dass stummgeschaltete Audiomedien automatisch abgespielt werden. Wenn dies auf `false` geändert wurde, wird die Wiedergabe von Medien mit einem Audiotrack nicht erlaubt, auch wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Präferenz, die angibt, ob Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, ist Web-Audio immer erlaubt.
    Wenn `true`, können Audiokontexte auf Seiten nur gespielt werden, nachdem eine {{Glossary("Sticky_activation", "Sticky activation")}} stattgefunden hat.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine ganze Zahl Präferenz, die angibt, ob die Konfiguration der Autoplay-Unterstützung pro Domain von Standard (`0`), blockiert (`1`) oder prompt-bei-Verwendung (`2`) erlaubt wird. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (Nur Nightly-Builds)
  - : Eine boolesche Präferenz, die steuert, ob die Erkennung von Benutzerinteraktionen die Einstellung von `media.autoplay.default` überschreiben darf. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) eingestellt ist, erlaubt diese Präferenz bei `true` das Autoplay von Medien mit Audiotracks trotzdem, wenn die Seite durch Benutzerinteraktionen aktiviert wurde, und Medien, die nicht hörbar sind, sind überhaupt nicht beschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Präferenz, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie in einem Hintergrundkostenfenster gestartet werden. Der Standardwert `true` bedeutet, dass selbst wenn anderweitig verfügbar, das Autoplay erst nach dem Wechsel in den Vordergrund stattfindet. Dies verhindert die störende Situation, in der ein Tab-Geräusch anfängt zu spielen und der Benutzer den Tab inmitten seiner vielen Tabs und Fenster nicht finden können.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Lern-Leitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-browser Audio Basics](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
