---
title: Autoplay-Leitfaden für Media- und Web-Audio-APIs
slug: Web/Media/Autoplay_guide
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) unmittelbar nach dem Laden einer Seite kann für Benutzer eine unerwünschte Überraschung sein. Obwohl das Autoplay von Medien nützlich sein kann, sollte es mit Bedacht und nur bei Bedarf eingesetzt werden. Um den Benutzern die Kontrolle darüber zu geben, bieten Browser häufig verschiedene Formen der Autoplay-Blockierung an. In diesem Leitfaden werden wir die Autoplay-Funktionalitäten in den verschiedenen Media- und Web-Audio-APIs behandeln, einschließlich eines kurzen Überblicks über die Verwendung von Autoplay und wie Sie mit Browsern umgehen können, um die Autoplay-Blockierung elegant zu handhaben.

Die Autoplay-Blockierung wird _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn das Quellmedium keinen Audiotrack hat oder wenn der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack gelten als **hörbar**, und die Autoplay-Blockierung gilt für sie. **Unhörbare** Medien werden von der Autoplay-Blockierung nicht beeinflusst.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die dazu führt, dass Medien abgespielt werden, ohne dass der Benutzer speziell darum gebeten hat, die Wiedergabe zu starten. Dies umfasst sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch die Verwendung von JavaScript-Code, um die Wiedergabe außerhalb des Kontexts der Verarbeitung von Benutzereingaben zu starten.

Das bedeutet, dass beide der folgenden als Autoplay-Verhalten gelten und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Features und APIs können von der Autoplay-Blockierung betroffen sein:

- Die [HTML](/de/docs/Glossary/HTML) {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus der Perspektive des Benutzers kann eine Webseite oder App, die spontan Geräusche ohne Vorwarnung abspielt, erschütternd, unbequem oder abschreckend sein. Deshalb erlauben Browser in der Regel Autoplay nur unter bestimmten Umständen.

### Autoplay-Verfügbarkeit

Als Faustregel können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eines_ der folgenden wahr ist:

- Der Ton ist stummgeschaltet oder seine Lautstärke ist auf 0 gesetzt
- Der Benutzer hat mit der Seite interagiert (durch Klicken, Tippen, Drücken von Tasten usw.)
- Wenn die Seite auf eine Whitelist gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Benutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen
- Wenn die Autoplay [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und dessen Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die spezifischen Situationen, die zur Blockierung führen, und die genauen Details, wie Websites auf die Whitelist gesetzt werden, unterscheiden sich von Browser zu Browser, aber die obigen sind gute Richtlinien.

Für Details siehe die Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt wird die Wiedergabe von Medien mit Audio im Allgemeinen blockiert, wenn die Wiedergabe programmatisch in einem Tab initiiert wird, der noch keine Benutzerinteraktion hatte. Browser können sich auch dafür entscheiden, unter anderen Umständen zu blockieren.

## Autoplay von Media-Elementen

Da wir nun geklärt haben, was Autoplay ist und was es daran hindern kann, dass es zugelassen wird, betrachten wir, wie Ihre Website oder App Medien beim Laden der Seite automatisch abspielen kann, wie man erkennt, wann Autoplay nicht funktioniert, und Tipps für den Umgang damit, wenn Autoplay vom Browser verweigert wird.

### Das Autoplay-Attribut

Der einfachste Weg, um Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut Ihrem {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` auf `true` gesetzt ist, wird das Medium automatisch abgespielt, sobald dies möglich ist, nachdem Folgendes eingetreten ist:

- Die Seite darf die Autoplay-Funktionalität verwenden
- Das Element wurde während des Seitenladens erstellt
- Es wurden genug Medien empfangen, um die Wiedergabe zu beginnen und bis zum Ende der Medien ohne Unterbrechung fortzusetzen, vorausgesetzt, es gibt keine drastischen Änderungen in der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das Autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, basierend darauf, ob Autoplay erlaubt, nicht erlaubt oder nur für unhörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung beispielsweise ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay von unhörbaren Inhalten erlaubt, können Sie es entweder stumm schalten oder ein Video ohne Audiotrack bereitstellen.
Ähnlich können Sie, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, ein Standardbild für das Video bereitstellen (mit dem [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attribut) oder sich entscheiden, das Video erst zu laden, wenn es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für eine Art von Medienfunktion (also alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen oder zu prüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Richtlinie für alle Medienelemente im Dokument zu erhalten (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und standardmäßig mit Ton automatisch abgespielt wird.
Wenn Autoplay nur für unhörbare Inhalte erlaubt ist, stellen wir sicher, dass der Ton stumm geschaltet ist; wenn Autoplay nicht erlaubt ist, sorgen wir dafür, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code zur Prüfung eines spezifischen Elements oder Audiokontexts ist derselbe, außer dass Sie das zu testende Element oder den Kontext anstelle des Typ-Strings übergeben.
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

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund von Benutzerinteraktionen mit der Seite, der Seite selbst oder einem bestimmten Element ändern.
Ähnlich könnte in einigen Browsern die Richtlinie für ein spezifisches Element geändert werden, obwohl sich die Richtlinie für den Typ nicht geändert hat (zum Beispiel in Browsern, in denen das Berühren eines bestimmten Elements es nur diesem Element erlaubt, automatisch abgespielt zu werden).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir generell, dass die Richtlinie überprüft wird, wenn die Seite geladen wird, und zwar den Typ verwendet.

#### Beispiel 3: Erkennen von Autoplay-Fehlern als Fallback

Kein spezielles Ereignis (oder andere Benachrichtigung) wird durch Autoplay-Erfolg oder -Fehlschlag ausgelöst, daher haben Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit zu bestimmen, ob Autoplay unterstützt wird oder darauf zu reagieren, wenn es ausgelöst oder nicht ausgelöst wurde.

Ein Ansatz besteht darin, auf die erste Instanz des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu hören, das auf dem Medienelement ausgelöst wird, wenn es nach einer Pause fortgesetzt _und_ autoplay durchgeführt wird.
Das bedeutet, dass, wenn das `play`-Ereignis zum ersten Mal ausgelöst wird, Sie wissen, dass Ihre Medien zum ersten Mal nach dem Öffnen der Seite gestartet werden,

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="myvideo.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler versehen ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die das `play`-Ereignis als Eingabe erhält.

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

Nachdem wir über das [`Event`](/de/docs/Web/API/Event)-Objekt und dessen [`target`](/de/docs/Web/API/Event/target) eine Referenz auf das Videoelement erhalten haben, verwenden wir es, um den Ereignis-Listener zu entfernen.
Dies verhindert, dass zukünftige `play`-Ereignisse an den Handler geliefert werden. Das könnte passieren, wenn das Video vom Benutzer pausiert und fortgesetzt wird oder automatisch vom Browser, wenn sich das Dokument in einem Hintergrund-Tab befindet.

An diesem Punkt kann Ihre Site oder App mit allem beginnen, was darauf angewiesen ist, dass das Video gestartet wurde.

### Die play()-Methode

Der Begriff "autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien mit Audio außerhalb des Kontexts der Bearbeitung eines Benutzer-Eingabeevents auszulösen. Dies geschieht durch den Aufruf der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Medienelements.

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich das `autoplay`-Attribut zu verwenden, da die Unterstützung für Autoplay-Präferenzen für das `autoplay`-Attribut weiter verbreitet ist als für andere Mittel, um Medien automatisch abzuspielen. Es ermöglicht dem Browser auch, die Verantwortung für den Start der Wiedergabe zu übernehmen und den Zeitpunkt für dessen Durchführung zu optimieren.

#### Beispiel: Video abspielen

Dieses einfache Beispiel spielt das erste im Dokument gefundene {{HTMLElement("video")}}-Element. `play()` lässt die Wiedergabe nur dann beginnen, wenn das Dokument die Erlaubnis hat, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Fehlern

Es ist viel einfacher, einen Fehler beim automatischen Abspielen von Medien zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode verwenden, um sie zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Medium erfolgreich gespielt wird und abgelehnt wird, wenn die Wiedergabe nicht beginnt (wie wenn Autoplay verweigert wird). Wenn Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit anbieten, damit der Benutzer den Browser manuell auffordert, die Erlaubnis zur Wiedergabe von Medien zu erteilen.

Sie könnten so einen Code verwenden, um die Aufgabe zu erledigen:

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

Das Erste, was wir mit dem Ergebnis von `play()` tun, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen dies, weil in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgab. Das Zurückgeben eines Versprechens, um den Erfolg oder Misserfolg der Operation bestimmen zu können, wurde kürzlich hinzugefügt. Durch das Überprüfen auf `undefined` verhindern wir, dass dieser Code bei älteren Versionen von Webbrowsern mit einem Fehler fehlschlägt.

Wenn das von `play()` zurückgegebene Versprechen ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann beginnen, was immer nötig ist, wenn Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler zu dem Versprechen hinzu. Dies betrachtet den Namen des Fehlers ([`name`](/de/docs/Web/API/DOMException/name)), um zu sehen, ob es sich um `NotAllowedError` handelt. Dies weist darauf hin, dass die Wiedergabe aufgrund eines Berechtigungsthemas, wie das Verweigern von Autoplay, fehlgeschlagen ist. Wenn dies der Fall ist, sollten wir eine Benutzeroberfläche bereitstellen, um dem Benutzer die manuelle Wiedergabe zu ermöglichen; das wird hier durch eine Funktion `showPlayButton()` behandelt.

Alle anderen Fehler werden entsprechend behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite abspielen möchten, könnte [`setInterval()`](/de/docs/Web/API/setInterval) verwendet werden, um dies zu erreichen:

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

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Website oder App Audio mit der Methode `start()` auf einem Quellknoten starten, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verknüpft ist. Dies außerhalb des Kontexts der Verarbeitung eines Benutzereingabe-Ereignisses unterliegt den Autoplay-Regeln.

## Die autoplay Permissions Policy

Zusätzlich zur browserseitigen Verwaltung und Kontrolle der oben beschriebenen Autoplay-Funktionalität kann ein Webserver auch seine Bereitschaft ausdrücken, das Funktionieren von Autoplay zuzulassen. Der [HTTP](/de/docs/Glossary/HTTP) {{HTTPHeader("Permissions-Policy")}}-Header mit der [`autoplay`](/de/docs/Web/HTTP/Headers/Permissions-Policy/autoplay)-Direktive wird verwendet, um zu steuern, von welchen Domains, falls vorhanden, Medien automatisch abgespielt werden können. Standardmäßig ist die `autoplay` Permissions Policy auf `self` gesetzt, was anzeigt, dass Autoplay erlaubt ist, da sie auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Erlaubnisliste (`()`) angeben, um Autoplay vollständig zu deaktivieren, `*`, um Autoplay von allen Domains zuzulassen, oder eine oder mehrere spezifische Ursprünge, von denen aus Medien automatisch abgespielt werden können. Diese Ursprünge werden durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Permissions Policy gilt für das Dokument und jedes darin verschachtelte {{HTMLElement("iframe")}}, es sei denn, diese Frames enthalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Permissions Policy für diesen Frame und alle darin verschachtelten Frames festsetzt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf einem `<iframe>` verwenden, um eine Permissions Policy für diesen Frame und seine verschachtelten Frames festzulegen, können Sie auch den Wert `'src'` angeben, um das Autoplay von Medien nur von derselben Domain zu erlauben, die im [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des Frames angegeben ist.

### Beispiel: Autoplay nur von der Domain des Dokuments zulassen

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um Medien nur von der [Herkunft](/de/docs/Glossary/origin) des Dokuments automatisch abzuspielen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus zulassen

Das Hinzufügen der Erlaubnis für die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zum vorhergehenden Beispiel ergibt einen `Permissions-Policy`-Header wie den folgenden, wenn der Vollbildzugriff unabhängig von der Domain erlaubt ist; eine Domain-Beschränkung kann nach Bedarf ebenfalls hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, gewährt durch das `<iframe>`-Element mithilfe der `allow`-Eigenschaft, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von spezifischen Quellen erlauben

Der `Permissions-Policy`-Header, der es ermöglicht, Medien sowohl von der Domain (oder dem `<iframe>`) des Dokuments als auch von `https://example.media` abzuspielen, sieht wie folgt aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann so geschrieben werden, dass diese Autoplay-Richtlinie auf sich selbst und alle Kind-Frames angewendet wird:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Autoplay deaktivieren

Durch Setzen der `autoplay` Permissions Policy auf `()`/`none` wird Autoplay vollständig für das Dokument oder `<iframe>` und alle verschachtelten Frames deaktiviert. Der HTTP-Header ist:

```http
Permissions-Policy: autoplay=()
```

Mithilfe des `allow`-Attributs des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Beste Praktiken

Hier werden Tipps und empfohlene beste Praktiken angeboten, um Ihnen zu helfen, das Beste aus der Arbeit mit Autoplay herauszuholen.

### Umgang mit Autoplay-Fehlern bei Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist es, automatisch ein Video-Clip wiederzugeben, das zu einem Artikel, einer Werbung oder einer Vorschau der Hauptfunktionalität der Seite gehört. Um solche Videos automatisch abzuspielen, haben Sie zwei Optionen: keinen Audiotrack verwenden oder einen Audiotrack haben, aber das {{HTMLElement("video")}}-Element so konfigurieren, dass der Ton standardmäßig stummgeschaltet ist, wie folgt:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Video-Element ist so konfiguriert, dass es die Benutzersteuerungen enthält (normalerweise spielen/pausieren, Scrubbing durch die Zeitachse des Videos, Lautstärkeregelung und Stummschaltung); auch da das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut enthalten ist und das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut, das für Autoplay in Safari erforderlich ist, wird das Video automatisch abgespielt, jedoch mit stummgeschaltetem Audio. Der Benutzer hat jedoch die Möglichkeit, den Ton durch Klicken auf die Stummschalttaste in den Steuerelementen wieder zu aktivieren.

## Browser-Konfigurationsoptionen

Browser können Einstellungen haben, die steuern, wie Autoplay funktioniert oder wie die Autoplay-Blockierung gehandhabt wird. Hier werden alle Einstellungen aufgeführt, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein könnten. Dazu gehören auch solche, die beim Testen oder Debuggen helfen können, sowie solche, die so eingestellt werden könnten, dass Sie darauf vorbereitet sein müssen, sie zu handhaben.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine boolesche Einstellung, die angibt, ob die nicht-standardmäßige `HTMLMediaElement.allowedToPlay`-Eigenschaft im Web sichtbar ist. Derzeit ist diese standardmäßig `false` (außer in Nightly-Builds, wo sie standardmäßig `true` ist). Wenn diese `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist somit weder bei {{HTMLElement("audio")}}- noch bei {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Einstellung erlaubt, falls `true`, dass Hintergrundskripte von Browser-Erweiterungen Audiodateien automatisch abspielen. Wenn dieser Wert auf `false` gesetzt ist, wird diese Funktionalität deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Einstellung, die, falls `true` (Standardwert), zulässt, dass stummgeschaltete Audiodateien automatisch abgespielt werden. Wenn diese auf `false` gesetzt ist, dürfen Medien mit einem Audiotrack nicht abgespielt werden, auch wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Einstellung, die angibt, ob die Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, ist Web-Audio immer erlaubt, automatisch abgespielt zu werden.
    Wenn `true`, können Audiokontexte nur auf Seiten abgespielt werden, nachdem eine [Sticky activation](/de/docs/Glossary/Sticky_activation) erfolgt ist.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine Ganzzahl-Einstellung, die angibt, ob eine domänenspezifische Konfiguration für standardmäßige Autoplay-Unterstützung erlaubt (`0`), blockiert (`1`) oder beim Gebrauch zur Erlaubnis aufgefordert (`2`) wird. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly-Builds)
  - : Eine boolesche Einstellung, die steuert, ob das Erkennen von Benutzer-Gesten es erlaubt, die Einstellung von `media.autoplay.default` zu umgehen. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt ist, erlaubt diese Einstellung bei `true` trotzdem das Autoplay von Medien mit Audiotracks, wenn die Seite durch Benutzer-Gesten aktiviert wurde, und Medien, die nicht hörbar sind, sind in keiner Weise eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Einstellung, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie in einem Hintergrund-Tab gestartet wird. Der Standardwert, `true`, bedeutet, dass, selbst wenn anderweitig verfügbar, die Autoplay-Funktion erst nach dem Ach in den Vordergrund bringen eines Tabs stattfindet. Dies verhindert die verwirrende Situation, in der ein Tab beginnt, Geräusche abzuspielen, und der Benutzer den Tab unter all seinen Tabs und Fenstern nicht finden kann.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Lernleitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen des Audio-Cross-Browsers](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
