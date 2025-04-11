---
title: "Navigator: getAutoplayPolicy() Methode"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`getAutoplayPolicy()`** Methode der _Autoplay Policy Detection API_ liefert Informationen darüber, ob das [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Medienelementen und Audiokontexten erlaubt, untersagt oder nur erlaubt ist, wenn das Audio stummgeschaltet ist.

Anwendungen können diese Informationen nutzen, um ein geeignetes Benutzererlebnis zu bieten.
Zum Beispiel, wenn die Richtlinie des Benutzer-Agents nur das Autoplay von unhörbarem Inhalt erlaubt, könnte die Anwendung Videos stummschalten, damit sie dennoch automatisch abspielen können.

Die Methode kann verwendet werden, um entweder die allgemeine Autoplay-Richtlinie für alle Elemente eines bestimmten Typs im Dokument abzurufen oder für bestimmte Medienelemente oder Audiokontexte.

## Syntax

```js-nolint
// Test autoplay policy for a particular media playing feature
getAutoplayPolicy(type)

// Test autoplay support for a specific element or context
getAutoplayPolicy(element)
getAutoplayPolicy(context)
```

### Parameter

Die Methode muss mit einem (und nur einem) der folgenden drei Parameter aufgerufen werden:

- `type` {{optional_inline}}

  - : Ein String, der das Medienabspielfeature angibt, für das die allgemeine Autoplay-Richtlinie benötigt wird.

    Die unterstützten Werte sind:

    - `mediaelement`

      - : Die allgemeine Autoplay-Richtlinie für Medienelemente im Dokument abrufen.
        Medienelemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowie deren entsprechende Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`

      - : Die allgemeine Autoplay-Richtlinie für [Web Audio API](/de/docs/Web/API/Web_Audio_API) Player im Dokument abrufen.

- `element` {{optional_inline}}

  - : Ein spezifisches Medienelement.
    Dies muss ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) sein, einschließlich abgeleiteter Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein spezifischer [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Ein String, der die Autoplay-Richtlinie für den angegebenen Medientyp, das Element oder den Kontext angibt.
Dies wird ein String mit einem der folgenden Werte sein:

- `allowed`
  - : Autoplay ist erlaubt.
- `allowed-muted`
  - : Autoplay ist nur für unhörbare Medien erlaubt.
    Dies schließt Medien ein, die keinen Audiotrack haben oder deren Audio stummgeschaltet wurde.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die zurückgegebene Autoplay-Richtlinie für einen `type` Parameter die _allgemeine_ Richtlinie für Elemente des angegebenen Typs ist.
Beim Laden der Seite haben alle Elemente eines Typs dieselbe Richtlinie wie der Typ.
Sobald der Benutzer mit der Seite/Site interagiert hat, können bei einigen Browsern einzelne Elemente eine andere Richtlinie haben als der entsprechende Typ.

### Ausnahmen

- `TypeError`
  - : Das an die Methode übergebene Objekt ist kein zulässiger Typ.
    Die zulässigen Typen umfassen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) oder [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

"Autoplay" bezieht sich auf jede Funktion, die bewirkt, dass Inhalte ohne spezifische Anforderung durch den Benutzer zu spielen beginnen.
Dies umfasst das `autoplay` Attribut in den HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) Elementen sowie die Verwendung von JavaScript-Code, um die Wiedergabe ohne Benutzerinteraktion zu starten.

Benutzer-Agenten blockieren häufig Autoplay oder erlauben nur das automatische Abspielen von unhörbarem Inhalt, da unerwartete Geräusche beim ersten Laden einer Seite ein unangenehmes Benutzererlebnis verursachen können.
Die Mechanismen zur Bestimmung, ob Inhalte automatisch abgespielt werden können oder nicht, oder nur für unhörbare Inhalte, unterscheiden sich zwischen Benutzer-Agenten.

Die **`getAutoplayPolicy()`** Methode bietet einen standardisierten Mechanismus, um die Richtlinie eines bestimmten Benutzer-Agents für das automatische Abspielen eines bestimmten Inhalts- oder Elementtyps zu bestimmen.
Dies ermöglicht eine Anpassung der Anwendung, wie z.B. das automatische Stummschalten von Videos auf Seiten, auf denen das Abspielen hörbarer Inhalte nicht erlaubt ist, oder die Anpassung der Anwendung, um ohne Autoplay zu funktionieren.

Der empfohlene Einsatz der Methode besteht darin, sie _beim Laden der Seite_ (oder bevor die Inhalte abspielenden Elemente erstellt werden) mit dem zu überprüfenden Type anzugeben und dann das Autoplay von Medienelementen basierend auf dem Ergebnis zu konfigurieren.
Wenn die Anwendung z.B. Videoinhalte mit einem Audiotrack automatisch abspielen möchte, könnten Sie den folgenden Code verwenden, um das Video stummzuschalten, falls nur unhörbarer Inhalt abgespielt werden darf.

```js
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // Do nothing. The content can autoplay.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Mute the video so it can autoplay.
} else {
  // Autoplay disallowed.
  // Add a play button to the video element.
}
```

Die Methode kann auch aufgerufen werden, um die Autoplay-Richtlinie für ein bestimmtes Medienelement oder einen Audiokontext zu überprüfen.
Wie unten gezeigt, sieht der Code genauso aus, außer dass Sie das spezifische Element anstelle der `type` Zeichenfolge übergeben.

```js
const video = document.getElementById("video_element_id");
if (navigator.getAutoplayPolicy(video) === "allowed") {
  // Do nothing. The content can autoplay.
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
  // Mute the video so it can autoplay.
} else {
  // Autoplay disallowed.
  // Add a play button to the video element.
}
```

Beim Laden der Seite, bevor der Benutzer mit der Seite oder Site interagiert hat, wird die Autoplay-Richtlinie für den Typ und die individuellen Elemente dieselbe sein.
Nachdem der Benutzer mit der Site, Seite oder spezifischen Elementen interagiert, kann sich die Autoplay-Richtlinie für den gesamten `type` ändern.
Es ist auch möglich, dass sich die Richtlinie für ein spezifisches Element ändert, auch wenn die allgemeine Richtlinie für den `type` dies nicht tut.

Es gibt keine Möglichkeit, benachrichtigt zu werden, dass sich die Autoplay-Richtlinie geändert hat.
Aus diesem Grund, auch wenn Sie die Richtlinie für einen Typ oder ein Element jederzeit überprüfen können, werden Sie dies normalerweise nur beim Laden der Seite oder bevor Sie versuchen, Inhalte abzuspielen, tun.

## Beispiele

### Überprüfen, ob die Funktion unterstützt wird

Der folgende Code zeigt, wie überprüft werden kann, ob `navigator.getAutoplayPolicy()` unterstützt wird:

```html hidden
<div id="reportResult"></div>
```

```js hidden
const log = document.getElementById("reportResult");
```

```js
if (!navigator.getAutoplayPolicy) {
  log.textContent = "navigator.getAutoplayPolicy() not supported.";
} else {
  log.textContent = "navigator.getAutoplayPolicy() is supported.";
}
```

Das Ergebnis der Ausführung des Codes auf dieser Seite ist:

{{EmbedLiveSample('Überprüfen, ob die Funktion unterstützt wird', '', '50')}}

### Testen der Autoplay-Richtlinie für Medienelement-Typen

Dieses Beispiel zeigt, wie Sie die Autoplay-Richtlinie für den Medienelement-Typ überprüfen können.

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut besitzt und standardmäßig nicht stummgeschaltet ist.
Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abzuspielen.

#### HTML

Das untenstehende HTML enthält ein `div` Element, das als Protokoll für Berichte verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut besitzt.
Dieses sollte standardmäßig nicht stummgeschaltet sein und automatisch abspielen, wenn Autoplay nicht blockiert ist.

```html
<div id="reportResult"></div>
<!-- Simple video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video
  id="bunny_vid"
  autoplay
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://archive.org/details/BigBuckBunny_124">download it</a> and
  watch it with your favorite video player!
</video>
```

#### JavaScript

Der Code berichtet darüber, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls dies der Fall ist, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden.
In diesem Fall fügen wir etwas Text hinzu, der erklärt, was passiert, und schalten das Video stumm.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent =
    "navigator.getAutoplayPolicy() not supported. It may or may not autoplay, depending on the browser!";
} else {
  log.textContent = `Autoplay policy for media elements is: ${navigator.getAutoplayPolicy(
    "mediaelement",
  )}. `;

  if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
    // Mute the video so it can autoplay
    video.muted = true;
    log.textContent += "Video has been muted to allow it to autoplay.";
  }
}
```

Beachten Sie, dass Sie ähnlich auch auf `allowed` und `disallowed` prüfen können.

#### Ergebnis

Das Video wird unten zusammen mit Informationen darüber angezeigt, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls ja, die Richtlinie.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` ist, wird das Video automatisch mit Ton abspielen.
Wenn die Richtlinie `allowed-muted` ist, wird das Video ohne Ton abspielen.

{{EmbedLiveSample('Testen der Autoplay-Richtlinie für Medienelemente', '', '400')}}

Beachten Sie, dass, wenn `getAutoplayPolicy()` nicht unterstützt wird, das Video entweder mit Audio automatisch abspielen wird oder nicht.
Der Code hat keine Kontrolle über dieses Verhalten: Sie sind dem Browserimplementierung ausgeliefert!

### Testen der Autoplay-Richtlinie für ein spezifisches Medienelement

Dieses Beispiel zeigt, wie geprüft werden kann, ob ein spezifisches Medienelement automatisch abspielt.
Es ist fast identisch mit dem vorherigen Beispiel (eine `AudioContext`-Prüfung wäre ebenfalls ähnlich).
Beachten Sie, dass spezifische Elemente automatisch abspielen können, selbst wenn eine Überprüfung des `mediaelement` Typs anzeigt, dass Autoplay `disallowed` ist; anders gesagt, eine Überprüfung auf ein spezifisches Element ist zuverlässiger (obwohl es beim Laden der Seite keine Rolle spielt).

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut besitzt.
Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abzuspielen.

#### HTML

Das untenstehende HTML enthält ein `div` Element, das als Protokoll für Berichte verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut besitzt.
Dieses sollte standardmäßig nicht stummgeschaltet sein und automatisch abspielen, wenn Autoplay nicht blockiert ist.

```html
<div id="reportResult"></div>
<!-- Simple video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video
  id="bunny_vid"
  autoplay
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://archive.org/details/BigBuckBunny_124">download it</a> and
  watch it with your favorite video player!
</video>
```

#### JavaScript

Der Code berichtet darüber, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls dies der Fall ist, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden, daher schaltet der Code das Video stumm.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent =
    "navigator.getAutoplayPolicy() not supported. It may or may not autoplay, depending on the browser!";
} else {
  // Here we pass in the HTMLVideoElement to check
  log.textContent = `navigator.getAutoplayPolicy(video) == ${navigator.getAutoplayPolicy(
    "mediaelement",
  )}`;

  if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
    // Mute the video so it can autoplay
    video.muted = true;
    log.textContent += "Video has been muted to allow it to autoplay.";
  }
}
```

#### Ergebnis

Das Ergebnis ist dasselbe wie im vorherigen Beispiel:

- Das Video sollte mit Ton automatisch abspielen, wenn `allowed` zurückgegeben wird, und ohne Ton, wenn `allowed-muted` zurückgegeben wird.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das Verhalten des Video-Autoplays nur vom Browser ab.

{{EmbedLiveSample('Testen der Autoplay-Richtlinie für ein spezifisches Medienelement', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
