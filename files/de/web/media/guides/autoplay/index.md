---
title: Leitfaden für Autoplay bei Media- und Web-Audio-APIs
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das automatische Starten der Wiedergabe von Audio (oder Videos mit Audiotracks) unmittelbar beim Laden einer Seite kann für Benutzer eine unangenehme Überraschung sein. Obwohl das Autoplay von Medien einem sinnvollen Zweck dient, sollte es mit Bedacht und nur bei Bedarf eingesetzt werden. Um den Benutzern Kontrolle darüber zu geben, bieten Browser oft verschiedene Formen der Autoplay-Blockierung. In diesem Leitfaden behandeln wir die Autoplay-Funktionalität in den verschiedenen Media- und Web-Audio-APIs, einschließlich eines kurzen Überblicks darüber, wie Autoplay verwendet wird und wie Sie mit Browsern zusammenarbeiten können, um Autoplay-Blockierung elegant zu handhaben.

Autoplay-Blockierung wird _nicht_ auf {{HTMLElement("video")}}-Elemente angewendet, wenn das Quellmedium keinen Audiotrack hat oder wenn der Audiotrack stummgeschaltet ist. Medien mit einem aktiven Audiotrack werden als **hörbar** angesehen, und auf sie wird die Autoplay-Blockierung angewendet. **Nicht hörbare** Medien sind von der Autoplay-Blockierung nicht betroffen.

## Autoplay und Autoplay-Blockierung

Der Begriff **Autoplay** bezieht sich auf jede Funktion, die Medien ohne ausdrückliche Anforderung des Benutzers zum Abspielen bringt. Dazu gehört sowohl die Verwendung von HTML-Attributen zur automatischen Wiedergabe von Medien als auch der Einsatz von JavaScript-Code, um die Wiedergabe außerhalb des Kontextes der Benutzerinteraktion zu starten.

Das bedeutet, dass sowohl das folgende als auch das andere Beispiel als Autoplay-Verhalten angesehen werden und daher der Autoplay-Blockierungsrichtlinie des Browsers unterliegen:

```html
<audio src="/music.mp3" autoplay></audio>
```

und

```js
audioElement.play();
```

Die folgenden Web-Features und APIs können von der Autoplay-Blockierung betroffen sein:

- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)

Aus der Sicht des Benutzers kann es störend, unpraktisch oder abstoßend sein, wenn eine Webseite oder App ohne Vorwarnung Geräusche erzeugt. Aus diesem Grund erlauben Browser generell nur dann ein erfolgreiches Autoplay, wenn spezifische Umstände vorliegen.

### Verfügbarkeit von Autoplay

Als allgemeine Regel können Sie davon ausgehen, dass Medien nur dann automatisch abgespielt werden dürfen, wenn _mindestens eines_ der folgenden Kriterien erfüllt ist:

- Der Ton ist stumm geschaltet oder die Lautstärke ist auf 0 gesetzt.
- Der Benutzer hat mit der Seite interagiert (durch Klicken, Tippen, Tastendrücken usw.).
- Wenn die Seite auf die Whitelist gesetzt wurde; dies kann entweder automatisch geschehen, wenn der Browser feststellt, dass der Benutzer häufig mit Medien interagiert, oder manuell über Einstellungen oder andere Benutzeroberflächenfunktionen.
- Wenn die [Berechtigungsrichtlinie für Autoplay](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um einer {{HTMLElement("iframe")}} und ihrem Dokument Autoplay-Unterstützung zu gewähren.

Andernfalls wird die Wiedergabe wahrscheinlich blockiert.
Die genauen Situationen, die zur Blockierung führen, und die Besonderheiten, wie Seiten auf die Whitelist gesetzt werden, variieren von Browser zu Browser, aber die oben genannten sind gute Richtlinien.

Einzelheiten finden Sie in den Autoplay-Richtlinien für [Google Chrome](https://developer.chrome.com/blog/autoplay/) und [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> [!NOTE]
> Anders ausgedrückt wird die Wiedergabe von Medien, die Audio enthalten, im Allgemeinen blockiert, wenn die Wiedergabe programmatisch in einem Tab initiiert wird, in dem noch keine Benutzerinteraktion stattgefunden hat. Browser können sich auch dafür entscheiden, unter anderen Umständen zu blockieren.

## Autoplay von Media-Elementen

Nachdem wir nun behandelt haben, was Autoplay ist und was das Autoplay verhindern kann, schauen wir uns an, wie Ihre Website oder App Medien automatisch beim Laden der Seite abspielen kann, wie Sie erkennen, wann das Autoplay nicht funktioniert, und Tipps, wie Sie damit umgehen, wenn das Autoplay durch den Browser abgelehnt wird.

### Das autoplay-Attribut

Der einfachste Weg, um Inhalte automatisch abzuspielen, besteht darin, das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay)-Attribut zu Ihrem {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element hinzuzufügen, das die [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Eigenschaft des Elements auf `true` setzt.
Wenn `autoplay` auf `true` gesetzt ist, beginnt das Medium automatisch zu spielen, sobald wie möglich, nachdem Folgendes eingetreten ist:

- Die Seite darf die Autoplay-Funktionalität nutzen.
- Das Element wurde während des Ladens der Seite erstellt.
- Es wurde genügend Medium empfangen, um die Wiedergabe zu beginnen und ohne Unterbrechung bis zum Ende des Mediums fortzusetzen, sofern es keine dramatischen Änderungen in der Netzwerkleistung oder Bandbreite gibt.

#### Beispiel: Das autoplay-Attribut

Ein {{HTMLElement("audio")}}-Element, das das `autoplay`-Attribut verwendet, könnte so aussehen:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### Beispiel 2: Erkennen, ob Autoplay erlaubt ist

Wenn Autoplay für Ihre Anwendung wichtig ist, müssen Sie das Verhalten möglicherweise anpassen, je nachdem ob Autoplay erlaubt oder nicht erlaubt ist oder nur für nicht hörbare Inhalte unterstützt wird.
Wenn Ihre Anwendung beispielsweise ein Video automatisch abspielen muss und Sie wissen, dass die Seite nur das Autoplay nicht hörbarer Inhalte erlaubt, können Sie es entweder stumm schalten oder ein Video ohne Audiotrack verwenden.
Ebenso, wenn Sie wissen, dass Autoplay überhaupt nicht erlaubt ist, könnten Sie ein Standardbild für das Video bereitstellen (mithilfe des [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)-Attributs) oder sich entscheiden, das Video erst zu laden, wenn es angefordert wird.

Die Methode [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) kann verwendet werden, um die Autoplay-Richtlinie für eine Art Medien-Feature (d.h. alle Media-Elemente oder alle Audio-Kontexte) in einem Dokument zu überprüfen, oder um zu prüfen, ob ein bestimmtes Media-Element oder Audio-Kontext automatisch wiedergegeben werden kann.

Das folgende Beispiel zeigt, wie Sie den `mediaelement`-String übergeben, um die Autoplay-Richtlinie für alle Media-Elemente im Dokument zu erhalten (übergeben Sie `audiocontext`, um die Richtlinie für Audio-Kontexte zu erhalten).
Der Code geht davon aus, dass `video` ein `HTMLVideoElement` Media-Element ist, das den [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Tag oder [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verwendet und standardmäßig so konfiguriert ist, dass es mit Audio automatisch wiedergegeben wird.
Wenn Autoplay nur für nicht hörbare Inhalte erlaubt ist, schalten wir den Ton stumm; wenn Autoplay nicht erlaubt ist, stellen wir sicher, dass ein Platzhalterbild für das Video angezeigt wird.

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

Der Code um ein bestimmtes Element oder einen Audio-Kontext zu testen ist gleich, außer dass Sie das zu testende Element oder den Kontext anstelle des Typ-Strings übergeben.
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

Die Autoplay-Richtlinie für einen Typ kann sich aufgrund von Benutzerinteraktionen mit der Seite, der aktuellen Seite oder einem bestimmten Element ändern.
Ebenso kann in einigen Browsern die Richtlinie für ein bestimmtes Element geändert werden, auch wenn die Richtlinie für den Typ nicht geändert wurde (z. B. in Browsern, in denen die Berührung eines bestimmten Elements nur diesem Element erlaubt, automatisch abgespielt zu werden).

Da es keine Möglichkeit gibt, benachrichtigt zu werden, wenn sich die Autoplay-Richtlinie geändert hat (entweder für einen Typ oder ein Element), empfehlen wir im Allgemeinen, die Richtlinie beim Laden der Seite mit dem Typ zu überprüfen.

#### Beispiel 3: Erkennen eines Autoplay-Fehlers als Fallback

Kein spezifisches Ereignis (oder eine andere Benachrichtigung) wird bei Autoplay-Erfolg oder -Fehler ausgelöst, daher haben Browser, die [`Navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) nicht unterstützen, keine einfache Möglichkeit festzustellen, ob Autoplay unterstützt wird oder zu reagieren, wenn es ausgelöst oder nicht ausgelöst wird.

Ein Ansatz ist, auf das erste Auftreten des [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignisses zu hören, das auf dem Media-Element ausgelöst wird, wenn die Wiedergabe nach einer Pause _und_ wenn das Autoplay stattfindet.
Das bedeutet, dass beim ersten Auslösen des `play`-Ereignisses Sie wissen, dass Ihr Medium zum ersten Mal gestartet wird, nachdem die Seite geöffnet wurde.

Betrachten Sie dieses HTML für ein Media-Element:

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

Hier haben wir ein {{HTMLElement("video")}}-Element, dessen [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Attribut gesetzt ist und mit einem [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignishandler eingerichtet ist; das Ereignis wird von einer Funktion namens `handleFirstPlay()` behandelt, die das `play`-Ereignis als Eingabe erhält.

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

Nachdem wir eine Referenz zum Video-Element vom [`Event`](/de/docs/Web/API/Event)-Objekt [`target`](/de/docs/Web/API/Event/target) erhalten haben, verwenden wir es, um den Event-Listener zu entfernen.
Dies verhindert, dass zukünftige `play`-Ereignisse an den Handler geliefert werden. Das könnte passieren, wenn das Video angehalten und vom Benutzer oder automatisch vom Browser wieder fortgesetzt wird, wenn das Dokument in einem Hintergrundtab ist.

An diesem Punkt kann Ihre Site oder App mit allem beginnen, was darauf angewiesen ist, dass das Video gestartet wurde.

### Die play()-Methode

Der Begriff "Autoplay" bezieht sich auch auf Szenarien, in denen ein Skript versucht, die Wiedergabe von Medien, die Audio enthalten, außerhalb des Kontexts der Handhabung eines Benutzer-Eingabe-Ereignisses zu initiieren. Dies geschieht durch Aufruf der [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode des Media-Elements.

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich das `autoplay`-Attribut zu verwenden, da die Unterstützung von Autoplay-Präferenzen für das `autoplay`-Attribut weiter verbreitet ist als für andere Mittel zur automatischen Wiedergabe von Medien. Es ermöglicht auch dem Browser, die Verantwortung für den Start der Wiedergabe zu übernehmen und den Zeitpunkt dessen zu optimieren.

#### Beispiel: Video abspielen

In diesem Beispiel wird das erste {{HTMLElement("video")}}-Element im Dokument gestartet. `play()` lässt die Wiedergabe erst beginnen, wenn das Dokument die Erlaubnis hat, Medien automatisch abzuspielen.

```js
document.querySelector("video").play();
```

#### Beispiel: Behandeln von play()-Fehlern

Es ist viel einfacher, einen Fehlversuch der Autoplay-Medien zu erkennen, wenn Sie die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode verwenden, um sie zu starten. `play()` gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Medium erfolgreich zu spielen beginnt, und abgelehnt wird, wenn die Wiedergabe nicht beginnt (etwa wenn das Autoplay abgelehnt wird). Wenn das Autoplay fehlschlägt, möchten Sie wahrscheinlich eine Möglichkeit bieten, damit der Benutzer manuell den Browser fragt, die Erlaubnis zur Wiedergabe von Medien zu erteilen.

Sie könnten einen Code wie diesen verwenden, um die Aufgabe zu erfüllen:

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

Das Erste, was wir mit dem Ergebnis von `play()` machen, ist sicherzustellen, dass es nicht `undefined` ist. Wir prüfen dies, weil in früheren Versionen der HTML-Spezifikation `play()` keinen Wert zurückgab. Die Rückgabe eines Versprechens, mit dem Sie den Erfolg oder Misserfolg der Operation bestimmen können, wurde neuerdings hinzugefügt. Die Überprüfung auf `undefined` verhindert, dass dieser Code in älteren Versionen von Webbrowsern mit einem Fehler fehlschlägt.

Wenn das von `play()` zurückgegebene Versprechen ohne Fehler aufgelöst wird, wird die `then()`-Klausel ausgeführt und kann alles beginnen, was getan werden muss, wenn das Autoplay begonnen hat.

Wir fügen dann einen {{jsxref("Promise.catch", "catch()")}}-Handler zum Versprechen hinzu. Dieser schaut auf den [`name`](/de/docs/Web/API/DOMException/name)-Fehler, um zu sehen, ob es `NotAllowedError` ist. Dies deutet darauf hin, dass die Wiedergabe aufgrund eines Berechtigungsproblems fehlgeschlagen ist, z. B. wenn das Autoplay verweigert wurde. In diesem Fall sollten wir eine Benutzeroberfläche bereitstellen, um dem Benutzer zu ermöglichen, die Wiedergabe manuell zu starten; das wird hier durch eine Funktion `showPlayButton()` behandelt.

Alle anderen Fehler werden entsprechend behandelt.

Wenn Sie das Video nach der ersten Interaktion mit der Seite abspielen möchten, kann [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet werden, um dies zu erreichen:

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

In der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann eine Webseite oder App Audio mit der `start()`-Methode an einem Quellknoten verknüpft mit dem [`AudioContext`](/de/docs/Web/API/AudioContext) abspielen. Das außerhalb des Kontexts der Handhabung eines Benutzer-Eingabe-Ereignisses ist den Autoplay-Regeln unterworfen.

## Die Autoplay-Berechtigungsrichtlinie

Zusätzlich zu der oben beschriebenen browserseitigen Verwaltung und Kontrolle über die Autoplay-Funktion kann ein Webserver auch seine Bereitschaft zum Ausdruck bringen, die Autoplay-Funktion zuzulassen. Der {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Permissions-Policy")}}-Header's {{httpheader("Permissions-Policy/autoplay", "autoplay")}}-Direktive wird verwendet, um zu steuern, welche Domains, wenn überhaupt, verwendet werden können, um Medien automatisch abzuspielen. Standardmäßig ist die `autoplay`-Berechtigungsrichtlinie auf `self` gesetzt, was bedeutet, dass Autoplay erlaubt ist, da sie auf derselben Domain wie das Dokument gehostet werden.

Sie können auch eine leere Erlauben-Liste (`()`) angeben, um das Autoplay insgesamt zu deaktivieren, `*`, um das Autoplay von allen Domains zuzulassen, oder eine oder mehrere spezifische Ursprünge, von denen aus Medien automatisch abgespielt werden können. Diese Ursprünge sind durch Leerzeichen getrennt.

> [!NOTE]
> Die angegebene Berechtigungsrichtlinie gilt für das Dokument und jedes darin geschachtelte {{HTMLElement("iframe")}}, es sei denn, diese Frames enthalten ein [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow), das eine neue Berechtigungsrichtlinie für diesen Frame und alle darin geschachtelten Frames festlegt.

Beim Verwenden des [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attributes auf einem `<iframe>`, um eine Berechtigungsrichtlinie für diesen Frame und seine geschachtelten Frames anzugeben, können Sie auch den Wert `'src'` angeben, um das Autoplay von Medien nur von derselben Domain zuzulassen, wie sie im [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut des Frames angegeben ist.

### Beispiel: Autoplay nur von der Domain des Dokuments zulassen

Um den {{HTTPHeader("Permissions-Policy")}}-Header zu verwenden, um Medien nur von der {{Glossary("origin", "Herkunft")}} des Dokuments zum Autoplay zuzulassen:

```http
Permissions-Policy: autoplay=(self)
```

Um dasselbe für ein {{HTMLElement("iframe")}} zu tun:

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### Beispiel: Autoplay und Vollbildmodus zulassen

Wenn Sie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zu den obigen Beispiel hinzufügen, erhalten Sie einen `Permissions-Policy`-Header, der so aussieht, wenn der Vollbildzugriff unabhängig von der Domain erlaubt ist; bei Bedarf kann auch eine Domain-Einschränkung hinzugefügt werden.

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

Die gleichen Berechtigungen, die mithilfe der `allow`-Eigenschaft des `<iframe>`-Elements gewährt werden, sehen so aus:

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### Beispiel: Autoplay von spezifischen Quellen zulassen

Der `Permissions-Policy`-Header, um Medien sowohl von der eigenen Domain des Dokuments (oder `<iframe>`) als auch von `https://example.media` abzuspielen, sieht so aus:

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

Ein {{HTMLElement("iframe")}} kann geschrieben werden, um anzugeben, dass diese Autoplay-Richtlinie auf sich selbst und alle Kinder-Frames angewendet werden soll, würde folgendermaßen geschrieben:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Beispiel: Autoplay deaktivieren

Das Setzen der `autoplay`-Berechtigungsrichtlinie auf `()`/`none` deaktiviert das Autoplay insgesamt für das Dokument oder `<iframe>` und alle geschachtelten Frames. Der HTTP-Header lautet:

```http
Permissions-Policy: autoplay=()
```

Verwenden des `allow`-Attributs des `<iframe>`:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Beste Praktiken

Tipps und empfohlene Best Practices, um das Beste aus der Arbeit mit Autoplay zu machen, werden hier angeboten.

### Umgang mit Autoplay-Ausfall durch Mediensteuerungen

Ein häufiger Anwendungsfall für Autoplay ist die automatische Wiedergabe eines Videoclips, der zu einem Artikel, einer Werbung oder einer Vorschau auf die Hauptfunktionalität der Seite gehört. Um solche Videos automatisch abzuspielen, haben Sie zwei Optionen: keine Audiotrack haben oder einen Audiotrack haben, aber das {{HTMLElement("video")}}-Element so konfigurieren, dass es die Audiospur standardmäßig stummschaltet, so:

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

Dieses Videolelement ist so konfiguriert, dass es die Benutzersteuerungen umfasst (typischerweise Play/Pause, Scrubbing durch die Videotimeline, Lautstärkeregler und Stummschaltung); auch, da das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)-Attribut enthalten ist und das [`playsinline`](/de/docs/Web/HTML/Reference/Elements/video#playsinline)-Attribut, das für das Autoplay in Safari erforderlich ist, wird das Video automatisch wiedergegeben, aber mit stummem Ton. Der Benutzer hat jedoch die Möglichkeit, das Audio durch Klicken auf die Lautstärketaste in den Steuerungen zu aktivieren.

## Browser-Konfigurationsoptionen

Browser können Präferenzen haben, die steuern, wie Autoplay funktioniert oder wie mit der Autoplay-Blockierung umgegangen wird. Hier sind solche Präferenzen aufgelistet, die für Sie als Webentwickler von besonderer Bedeutung oder Wichtigkeit sein können. Dazu gehören solche, die beim Testen oder Debuggen hilfreich sein können, sowie solche, die möglicherweise so eingestellt sind, dass Sie darauf vorbereitet sein müssen, damit umzugehen.

### Firefox

- `media.allowed-to-play.enabled`
  - : Eine Boolesche Präferenz, die angibt, ob das nicht standardmäßige `HTMLMediaElement.allowedToPlay`-Property im Web angezeigt wird. Derzeit ist dies standardmäßig `false` (außer in Nightly Builds, wo es standardmäßig `true` ist). Wenn dies `false` ist, fehlt die `allowedToPlay`-Eigenschaft in der `HTMLMediaElement`-Schnittstelle und ist daher weder in {{HTMLElement("audio")}}- noch in {{HTMLElement("video")}}-Elementen vorhanden.
- `media.autoplay.allow-extension-background-pages`
  - : Diese boolesche Präferenz erlaubt es, wenn `true`, dass Hintergrundskripte von Browsererweiterungen Audio-Medien automatisch abspielen dürfen. Das Setzen dieses Wertes auf `false` deaktiviert diese Fähigkeit. Der Standardwert ist `true`.
- `media.autoplay.allow-muted`
  - : Eine boolesche Präferenz, die, wenn `true` (der Standard), erlaubt, dass Audio-Medien, die derzeit stummgeschaltet sind, automatisch wiedergegeben werden. Wenn dies auf `false` geändert wurde, dürfen Medien mit einem Audiotrack nicht gespielt werden, auch wenn sie stummgeschaltet sind.
- `media.autoplay.block-webaudio`
  - : Eine boolesche Präferenz, die angibt, ob die Autoplay-Blockierung auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) angewendet wird.
    Wenn `false`, ist Web-Audio immer zum Autoplayen erlaubt.
    Wenn `true`, können Audio-Kontexte nur auf Seiten abgespielt werden, sobald es eine {{Glossary("Sticky_activation", "Sticky activation")}} gab.
    Der Standardwert ist `true`.
- `media.autoplay.default`
  - : Eine ganzzahlige Präferenz, die angibt, ob Per-Domain-Konfiguration für Autoplay-Unterstützung standardmäßig erlaubt (`0`), blockiert (`1`) oder nach Gebrauch nachgefragt (`2`) wird. Der Standardwert ist `0`.
- `media.autoplay.enabled.user-gestures-needed` (Nur Nightly Builds)
  - : Eine boolesche Präferenz, die steuert, ob die Erkennung von Benutzeraktionen die Einstellung von `media.autoplay.default` überschreiben darf. Wenn `media.autoplay.default` _nicht_ auf `0` (Autoplay standardmäßig erlaubt) gesetzt ist, erlaubt diese Präferenz `true` das Autoplay von Medien mit Audiotracks trotzdem, wenn die Seite durch Benutzeraktionen aktiviert wurde, und Medien, die nicht hörbar sind, sind nicht eingeschränkt.
- `media.block-autoplay-until-in-foreground`
  - : Eine boolesche Präferenz, die angibt, ob die Medienwiedergabe blockiert wird, wenn sie in einem Hintergrundtab gestartet wird. Der Standardwert, `true`, bedeutet, dass selbst wenn Autoplay ansonsten verfügbar ist, es nicht stattfindet, bevor ein Tab in den Vordergrund gebracht wird. Dies verhindert die störende Situation, in der ein Tab beginnt, Ton abzuspielen und der Benutzer den Tab nicht unter all seinen Tabs und Fenstern finden kann.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Lernleitfaden)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Audio-Grundlagen für verschiedene Browser](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
