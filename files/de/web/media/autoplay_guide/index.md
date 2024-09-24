---
title: Autoplay-Leitfaden für Media und Web Audio APIs
slug: Web/Media/Autoplay_guide
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) direkt beim Laden der Seite kann für Nutzer eine unerwünschte Überraschung sein. Während das Autoplay von Medien einen nützlichen Zweck erfüllt, sollte es sorgfältig und nur wenn nötig eingesetzt werden. Um den Nutzern die Kontrolle zu geben, bieten Browser oft verschiedene Möglichkeiten zur Blockierung des Autoplay. In diesem Leitfaden werden wir die Autoplay-Funktionalität in den verschiedenen Media- und Web-Audio-APIs behandeln, einschließlich eines kurzen Überblicks darüber, wie man Autoplay nutzt und wie man mit Browsern zusammenarbeitet, um das Blockieren von Autoplay elegant zu handhaben.

Die Blockierung von Autoplay wird _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn die Quelldatei keinen Audiotrack hat oder der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack werden als **hörbar** angesehen, und die Blockierung von Autoplay gilt für sie. **Nicht hörbare** Medien sind von der Blockierung nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die dazu führt, dass Medien beginnen zu spielen, ohne dass der Nutzer speziell den Start der Wiedergabe anfordert. Dies schließt sowohl die Verwendung von HTML-Attributen zum automatischen Abspielen von Medien als auch den Einsatz von JavaScript-Code zum Starten der Wiedergabe außerhalb des Kontexts der Verarbeitung einer Benutzereingabe ein.

Das bedeutet, dass beide der folgenden Beispiele als Autoplay-Verhalten betrachtet werden und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Funktionen und APIs können von der Blockierung von Autoplay betroffen sein:

- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus der Perspektive des Nutzers kann eine Webseite oder App, die plötzlich und ohne Vorwarnung Lärm macht, irritierend, unbequem oder abschreckend sein. Aus diesem Grund erlauben Browser in der Regel nur unter bestimmten Umständen das erfolgreiche Autoplay.

### Verfügbarkeit von Autoplay

Als allgemeine Regel können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eine_ der folgenden Bedingungen zutrifft:

- Der Ton ist stummgeschaltet oder die Lautstärke ist auf 0 gesetzt.
- Der Nutzer hat mit der Seite interagiert (durch Klicken, Tippen, Tasten drücken usw.)
- Wenn die Seite auf die Whitelist gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Nutzer häufig mit Medien zu tun hat, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen.
- Wenn die Autoplay-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um einem {{HTMLElement("iframe")}} und dessen Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, die zur Blockierung führen, und die Einzelheiten, wie Seiten auf die Whitelist gesetzt werden, variieren von Browser zu Browser, aber die oben genannten Richtlinien sind gute Anhaltspunkte.

Für Details siehe die Autoplay-Richtlinien von [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt, die Wiedergabe aller Medien, die Audio enthalten, wird in der Regel blockiert, wenn die Wiedergabe programmgesteuert in einem Tab initiiert wird, der noch keine Benutzerinteraktion hatte. Browser können sich dafür entscheiden, unter anderen Umständen zusätzlich zu blockieren.

## Autoplay von Medienelementen

Nachdem wir nun besprochen haben, was Autoplay ist und was das Autoplay verhindern kann, schauen wir uns an, wie Ihre Webseite oder App Medien beim Laden der Seite automatisch abspielen kann, wie man erkennt, dass das Autoplay nicht funktioniert, und Tipps für den Umgang, wenn das Autoplay vom Browser verweigert wird.

### Das autoplay-Attribut

Der einfachste Weg, Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut zu Ihrem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` auf `true` gesetzt ist, wird das Medium automatisch so schnell wie möglich nach den folgenden Ereignissen abgespielt:

- Die Seite darf die Autoplay-Funktionalität nutzen.
- Das Element wurde während des Ladevorgangs der Seite erstellt.
- Es wurden genügend Medien empfangen, um die Wiedergabe zu starten und bis zum Ende der Medien ohne Unterbrechung fortzusetzen, vorausgesetzt, es gibt keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite.

#### Beispiel: Das autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie möglicherweise das Verhalten anpassen, je nachdem, ob Autoplay erlaubt, nicht erlaubt oder nur für nicht hörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung beispielsweise ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay von nicht hörbaren Inhalten erlaubt, können Sie es entweder stummschalten oder ein Video ohne Audiotrack bereitstellen.
Ebenso können Sie, wenn Sie wissen, dass das Autoplay überhaupt nicht erlaubt ist, ein Standardbild für das Video bereitstellen (mithilfe des [`poster`](/de/docs/Web/HTML/Element/video#poster)-Attributs), oder das Laden des Videos aufschieben, bis es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für eine Art von Medienfunktion (d.h. alle Medienelemente oder alle Audiokontexte) in einem Dokument zu überprüfen, oder um zu überprüfen, ob ein bestimmtes Medienelement oder ein Audiokontext automatisch abgespielt werden kann.

Das folgende Beispiel zeigt, wie Sie den String `mediaelement` übergeben, um die Autoplay-Richtlinie für alle Medienelemente im Dokument zu erhalten (übergeben Sie `audiocontext`, um die Richtlinie für Audiokontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement`-Medienelement ist, das das [`<video>`](/de/docs/Web/HTML/Element/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und standardmäßig so konfiguriert ist, dass es mit Ton automatisch abgespielt wird.
Wenn Autoplay nur für nicht hörbare Inhalte erlaubt ist, schalten wir den Ton stumm; wenn das Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund von Benutzerinteraktionen mit der Seite oder einem bestimmten Element ändern.
In ähnlicher Weise kann sich auf einigen Browsern die Richtlinie für ein bestimmtes Element ändern, selbst wenn die Richtlinie für den Typ dies nicht tut (zum Beispiel auf Browsern, bei denen das Berühren eines bestimmten Elements nur diesem Element erlaubt, automatisch abzuspielen).

Da es keinen Weg gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, die Richtlinie zu überprüfen, wenn die Seite geladen wird, und zwar anhand des Typs.

#### Beispiel 3: Erkennen von Autoplay-Fehlern als Fallback

Kein spezifisches Ereignis (oder eine andere Benachrichtigung) wird durch erfolgreichen oder fehlgeschlagenen Autoplay ausgelöst, so dass Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit haben, festzustellen, ob Autoplay unterstützt wird, oder zu reagieren, wenn es ausgelöst oder nicht ausgelöst wird.

Ein Ansatz besteht darin, auf das erste Vorkommen des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu hören, das auf dem Medienelement ausgelöst wird, wenn es nach einer Pause fortgesetzt wird _und_ wenn Autoplay auftritt.
Das bedeutet, dass, wenn das `play`-Ereignis zum ersten Mal ausgelöst wird, Sie wissen, dass Ihr Medium zum ersten Mal nach dem Öffnen der Seite gestartet wird,

Betrachten Sie dieses HTML für ein Medienelement:

```html
<video src="myvideo.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler versehen ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die als Eingabe das `play`-Ereignis erhält.

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

Nachdem die Referenz auf das Videoelement aus dem [`Event`](/de/docs/Web/API/Event)-Objekt-`target`](/de/docs/Web/API/Event/target) erhalten wurde, verwenden wir sie, um den Ereignislistener zu entfernen.
Dies verhindert, dass zukünftige `play`-Ereignisse an den Handler übermittelt werden. Das könnte passieren, wenn das Video vom Benutzer pausiert und fortgesetzt wird oder automatisch durch den Browser, wenn sich das Dokument in einem Hintergrund-Tab befindet.

Zu diesem Zeitpunkt kann Ihre Website oder App mit allem beginnen, was sie benötigt, um abhängig vom Start des Videos zu arbeiten.

### Die play()-Methode

Der Begriff "Autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio beinhalten, zu starten, außerhalb des Kontexts der Verarbeitung eines Benutzerinput-Ereignisses. Dies wird durch Aufruf der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Medienelements erreicht.

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich das `autoplay`-Attribut zu verwenden, da die Unterstützung von Autoplay-Einstellungen für das `autoplay`-Attribut weiter verbreitet ist als für andere Mittel, um Medien automatisch abzuspielen. Es ermöglicht dem Browser auch, die Verantwortung für den Start der Wiedergabe zu übernehmen, sodass er den Zeitpunkt optimieren kann.

#### Beispiel: Video abspielen

Dieses einfache Beispiel spielt das erste {{HTMLElement("video")}}-Element im Dokument ab. `play()` startet die Wiedergabe erst, wenn das Dokument die Berechtigung hat, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Umgang mit play()-Fehlern

Es ist viel einfacher, einen Fehler beim automatischen Abspielen von Medien zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode verwenden, um sie zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Medien erfolgreich zu spielen beginnen, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (zum Beispiel, wenn Autoplay verweigert wird). Wenn das Autoplay fehlschlägt, werden Sie wahrscheinlich dem Nutzer eine Möglichkeit bieten wollen, dem Browser manuell mitzuteilen, dass er ihn um Erlaubnis bitten soll, Medien abzuspielen.

Folgender Code könnte verwendet werden, um die Aufgabe zu erledigen:

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

Das erste, was wir mit dem Ergebnis von `play()` tun, ist sicherzustellen, dass es nicht `undefined` ist. Wir überprüfen darauf, da in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgab. Die Rückgabe eines Promise, um den Erfolg oder Misserfolg des Vorgangs festzustellen, wurde später hinzugefügt. Das Überprüfen auf `undefined` verhindert, dass dieser Code bei älteren Browserversionen mit einem Fehler scheitert.

Wenn das von `play()` zurückgegebene Promise ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt, und kann mit allem beginnen, was zu tun ist, wenn das Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler zum Promise hinzu. Dieser prüft den [`name`](/de/docs/Web/API/DOMException/name) des Fehlers, um festzustellen, ob er `NotAllowedError` ist. Dies weist darauf hin, dass die Wiedergabe aufgrund eines Berechtigungsproblems gescheitert ist, etwa wenn das Autoplay verweigert wurde. In diesem Fall sollten wir eine Benutzeroberfläche präsentieren, mit der der Benutzer die Wiedergabe manuell starten kann; das wird hier von einer Funktion `showPlayButton()` behandelt.

Andere Fehler werden je nach Bedarf behandelt.

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

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Webseite oder App Audio über die `start()`-Methode eines Quellknotens abspielen, der mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) verbunden ist. Dies außerhalb des Kontexts der Verarbeitung eines Benutzerinput-Ereignisses zu tun, unterliegt den Autoplay-Regeln.

## Die Autoplay-Berechtigungsrichtlinie

Zusätzlich zur browserseitigen Verwaltung und Kontrolle über die Autoplay-Funktionalität, die oben beschrieben wurde, kann ein Webserver auch seine Bereitschaft zur Zulassung des Autoplay ausdrücken. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}}-Header mit der {{httpheader("Permissions-Policy/autoplay", "autoplay")}} Anweisung wird verwendet, um zu steuern, welche Domains, wenn überhaupt, zum Autoplay von Medien verwendet werden können. Standardmäßig ist die `autoplay`-Berechtigungsrichtlinie auf `self` gesetzt, was bedeutet, dass Autoplay erlaubt ist, da sie auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Whitelist (`()`) angeben, um das Autoplay vollständig zu deaktivieren, `*`, um das Autoplay von allen Domains zu erlauben, oder eine oder mehrere spezifische Ursprünge, von denen Medien automatisch abgespielt werden können. Diese Ursprünge sind durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Berechtigungsrichtlinie gilt für das Dokument und jedes darin eingebettete {{HTMLElement("iframe")}}, es sei denn, diese Frames enthalten ein [`allow`](/de/docs/Web/HTML/Element/iframe#allow), das eine neue Berechtigungsrichtlinie für diesen Frame und alle darin geschachtelten Frames festlegt.

Wenn Sie das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut auf einem `<iframe>` verwenden, um eine Berechtigungsrichtlinie für diesen Frame und seine geschachtelten Frames festzulegen, können Sie auch den Wert `'src'` angeben, um das Autoplay von Medien nur von derselben Domain zuzulassen, die im `src`-Attribut des Frames spezifiziert ist.

### Beispiel: Autoplay nur von der Domain des Dokuments erlauben

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um nur Medien von der {{Glossary("origin", "Origin")}} des Dokuments automatisch abspielen zu lassen:

```http
Permissions-Policy: autoplay=(self)
```

Für ein {{HTMLElement("iframe")}}:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus erlauben

Das Hinzufügen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API)-Berechtigung zum vorherigen Beispiel ergibt einen `Permissions-Policy`-Header wie den folgenden, wenn der Vollbildzugriff unabhängig von der Domain gewährt wird; je nach Bedarf kann eine Domain-Einschränkung hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Dieselben Berechtigungen, gewährt mit der `allow`-Eigenschaft des `<iframe>`, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von bestimmten Quellen erlauben

Der `Permissions-Policy`-Header, um Medien von der Domain des Dokuments (oder des `<iframe>`) und `https://example.media` automatisch abzuspielen, sieht so aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann geschrieben werden, um festzulegen, dass diese Autoplay-Richtlinie auf sich selbst und alle Kinderframes angewendet werden soll, wodurch so:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Autoplay deaktivieren

Das Setzen der `autoplay`-Berechtigungsrichtlinie auf `()`/`none` deaktiviert das Autoplay vollständig für das Dokument oder `<iframe>` und alle darin geschachtelten Frames. Der HTTP-Header lautet:

```http
Permissions-Policy: autoplay=()
```

Mithilfe des `allow`-Attributs des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Beste Praktiken

Tipps und empfohlene Best Practices, die Ihnen helfen, das Beste aus der Arbeit mit Autoplay zu machen, werden hier angeboten.

### Umgang mit Autoplay-Fehlermeldungen bei Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist das automatische Starten eines Videoclips, der zu einem Artikel, einer Werbeanzeige oder einer Vorschau der Hauptfunktionalität der Seite gehört. Um solche Videos automatisch abzuspielen, haben Sie zwei Optionen: keinen Audiotrack haben oder einen Audiotrack haben, aber das {{HTMLElement("video")}}-Element so konfigurieren, dass der Ton standardmäßig stummgeschaltet ist, wie folgt:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videoelement ist so konfiguriert, dass es die Benutzersteuerungen enthält (typischerweise Wiedergabe/Pause, Vor- und Zurückspulen der Zeitleiste des Videos, Lautstärkeregelung und Stummschaltung); da auch das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut enthalten ist und das [`playsinline`](/de/docs/Web/HTML/Element/video#playsinline)-Attribut, das für das Autoplay in Safari erforderlich ist, wird das Video automatisch abgespielt, aber mit stummgeschaltetem Ton. Der Benutzer hat jedoch die Möglichkeit, den Ton durch Klicken auf die Unmute-Taste in den Steuerungen wieder zu aktivieren.

## Browser-Konfigurationsoptionen

Browser können über Einstellungen verfügen, die beeinflussen, wie Autoplay funktioniert oder wie die Blockierung von Autoplay gehandhabt wird. Hier finden Sie solche Einstellungen, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein können. Dazu gehören Einstellungen, die beim Testen oder Debuggen hilfreich sein könnten, sowie solche, die in einer Weise gesetzt werden können, die es zu bewältigen gilt.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine Boolean-Einstellung, die angibt, ob die nicht standardmäßige `HTMLMediaElement.allowedToPlay`-Eigenschaft im Web sichtbar ist. Derzeit ist dies standardmäßig `false` (außer in Nightly Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist daher nicht auf den {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese Boolean-Einstellung erlaubt es den Hintergrundskripten von Browsererweiterungen, Audiomedien automatisch abzuspielen, wenn `true`. Wenn dieser Wert auf `false` gesetzt wird, wird diese Fähigkeit deaktiviert. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine Boolean-Einstellung, die, wenn sie `true` (der Standard) ist, erlaubt, dass Audio-Medien, die derzeit stumm geschaltet sind, automatisch abgespielt werden. Wenn dieser Wert auf `false` geändert wurde, dürfen Medien mit einem Audiotrack nicht abgespielt werden, selbst wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine Boolean-Einstellung, die angibt, ob die Blockierung von Autoplay auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet werden soll.
    Wenn `false`, darf Web-Audio immer automatisch abgespielt werden.
    Wenn `true`, dürfen Audiokontexte nur dann auf Seiten abgespielt werden, wenn eine {{Glossary("Sticky_activation", "Sticky activation")}} erfolgt ist.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine integer Einstellung, die angibt, ob die standortbezogene Konfiguration für den Autoplay-Support standardmäßig erlaubt (`0`), blockiert (`1`) oder bei Verwendung aufgefordert (`2`) ist. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (nur Nightly Builds)
  - : Eine Boolean-Einstellung, die steuert, ob die Erkennung von Benutzeraktionen die Einstellung von `media.autoplay.default` überschreiben darf. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt ist, erlaubt diese Einstellung mit `true` das Autoplay von Medien mit Audiotracks trotzdem, wenn die Seite durch Benutzeraktionen aktiviert wurde, und nicht hörbare Medien sind nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine Boolean-Einstellung, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie auf einem Hintergrund-Tab gestartet wird. Der Standardwert, `true`, bedeutet, dass, selbst wenn Autoplay ansonsten verfügbar ist, es nicht stattfindet, bis ein Tab in den Vordergrund gebracht wird. Dies verhindert die ablenkende Situation, dass ein Tab beginnt, Ton abzuspielen und der Nutzer den Tab unter all seinen Tabs und Fenstern nicht finden kann.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Lernleitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-Browser Audio-Grundlagen](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
