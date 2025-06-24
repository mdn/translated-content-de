---
title: "Navigator: getAutoplayPolicy() Methode"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`getAutoplayPolicy()`** Methode der _Autoplay-Richtlinienerkennungs-API_ liefert Informationen darüber, ob das [automatische Abspielen](/de/docs/Web/Media/Guides/Autoplay) von Medienelementen und Audiokontexten erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist.

Anwendungen können diese Informationen nutzen, um ein angemessenes Benutzererlebnis zu bieten. Beispielsweise könnte die Anwendung Videos stumm schalten, wenn die Richtlinie des Benutzeragenten nur das automatische Abspielen von unhörbarem Inhalt erlaubt, sodass sie dennoch automatisch abgespielt werden können.

Die Methode kann verwendet werden, um entweder die allgemeine Autoplay-Richtlinie für alle Objekte eines bestimmten Typs im Dokument oder für spezifische Medienelemente oder Audiokontexte zu erhalten.

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

  - : Ein String, der das Medienwiedergabe-_Feature_ angibt, für das die allgemeine Autoplay-Richtlinie erforderlich ist.

    Die unterstützten Werte sind:

    - `mediaelement`

      - : Ermittelt die allgemeine Autoplay-Richtlinie für Medienelemente im Dokument.
        Medienelemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und ihre entsprechenden Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`
      - : Holt die allgemeine Autoplay-Richtlinie für [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Player im Dokument.

- `element` {{optional_inline}}

  - : Ein spezifisches Medienelement.
    Dies muss ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) sein, einschließlich abgeleiteter Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein spezifischer [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Ein String, der die Autoplay-Richtlinie für den angegebenen Medienelementtyp, das Element oder den Kontext angibt.
Dies wird ein String sein, der einen der folgenden Werte enthält:

- `allowed`
  - : Autoplay ist erlaubt.
- `allowed-muted`
  - : Autoplay ist nur für nicht hörbare Medien erlaubt.
    Dazu gehören Medien ohne Tonspur oder bei denen der Ton stummgeschaltet wurde.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die Autoplay-Richtlinie, die für einen `type`-Parameter zurückgegeben wird, die allgemeine Richtlinie für Elemente des angegebenen Typs ist.
Beim Laden der Seite haben alle Elemente eines Typs dieselbe Richtlinie wie der Typ.
Nachdem der Benutzer mit der Seite/Site interagiert hat, kann es bei einigen Browsern passieren, dass einzelne Elemente eine andere Richtlinie als der entsprechende Typ haben.

### Ausnahmen

- `TypeError`
  - : Das an die Methode übergebene Objekt ist kein erlaubter Typ.
    Zu den erlaubten Typen gehören [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)), oder [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

"Autoplay" bezieht sich auf alle Funktionen, die dazu führen, dass Inhalte abgespielt werden, ohne dass der Benutzer dies explizit angefordert hat.
Dies umfasst das `autoplay` Attribut in den HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) Elementen sowie die Verwendung von JavaScript-Code, um die Wiedergabe ohne Benutzerinteraktion zu starten.

Benutzeragenten blockieren häufig das automatische Abspielen oder erlauben nur das automatische Abspielen von nicht hörbarem Inhalt, da unerwartete Geräusche beim erstmaligen Laden einer Seite zu einem erschreckenden und unangenehmen Benutzererlebnis führen können.
Die Mechanismen, die verwendet werden, um zu bestimmen, ob Inhalte automatisch wiedergegeben werden können oder nicht, oder nur für nicht hörbare Inhalte, unterscheiden sich zwischen Benutzeragenten.

Die **`getAutoplayPolicy()`** Methode bietet einen standardisierten Mechanismus, um die Richtlinie eines bestimmten Benutzeragenten für das automatische Abspielen eines bestimmten Typs oder Inhaltsgegenstands zu ermitteln.
Dies ermöglicht Anpassungen der Anwendung, wie z. B. das automatische Stummschalten von Videos auf Websites, auf denen das automatische Abspielen von hörbarem Inhalt nicht erlaubt ist, oder das Ändern des Verhaltens der Anwendung ohne automatisches Abspielen.

Die empfohlene Verwendung der Methode besteht darin, sie _beim Laden der Seite_ (oder bevor die Inhaltelemente erstellt werden) mit Angabe des zu prüfenden Features aufzurufen und dann das automatische Abspielen der Medienelemente basierend auf dem Ergebnis zu konfigurieren.
Beispielsweise können Sie den folgenden Code verwenden, um Videos stummzuschalten, wenn nur das automatische Abspielen von nicht hörbarem Inhalt erlaubt ist.

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

Die Methode kann auch verwendet werden, um die Autoplay-Richtlinie für ein bestimmtes Medienelement oder einen bestimmten Audiokontext zu überprüfen.
Wie unten gezeigt, sieht der Code genau gleich aus, außer dass Sie das spezifische Element anstelle des `type`-Strings übergeben.

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

Beim Laden der Seite, bevor der Benutzer mit der Seite oder Site interagiert hat, werden die Autoplay-Richtlinie für den Typ und die einzelnen Elemente dieselbe sein.
Nachdem der Benutzer mit der Site, der Seite oder spezifischen Elementen interagiert hat, kann sich die Autoplay-Richtlinie für den gesamten `type` ändern.
Es ist auch möglich, dass sich die Richtlinie für ein bestimmtes Element ändert, selbst wenn sich die allgemeine Richtlinie für den `type` nicht ändert.

Es gibt keine Möglichkeit, benachrichtigt zu werden, dass sich die Autoplay-Richtlinie geändert hat. Aus diesem Grund, obwohl Sie die Richtlinie für einen Typ oder ein Element jederzeit überprüfen können, werden Sie dies normalerweise nur beim Laden der Seite oder bevor Sie versuchen, Inhalte abzuspielen, tun.

## Beispiele

### Überprüfen, ob das Feature unterstützt wird

Der untenstehende Code zeigt, wie Sie überprüfen können, ob `navigator.getAutoplayPolicy()` unterstützt wird:

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

{{EmbedLiveSample('Überprüfen, ob das Feature unterstützt wird', '', '50')}}

### Autoplay-Richtlinie für den Medienelementtyp testen

Dieses Beispiel zeigt, wie Sie die Autoplay-Richtlinie für den Medienelementtyp überprüfen können.

Der Code erzeugt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat und standardmäßig nicht stummgeschaltet ist. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abspielen zu können.

#### HTML

Das untenstehende HTML hat ein `div` Element, das als Berichtprotokoll verwendet wird und auch ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) anzeigt, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Dieses sollte standardmäßig nicht stummgeschaltet werden und automatisch abspielen, wenn das automatische Abspielen nicht blockiert ist.

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

Der Code meldet, ob die `getAutoplayPolicy()` Methode unterstützt wird, und wenn ja, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden. In diesem Fall fügen wir einen Text hinzu, der erklärt, was passiert, und schalten das Video stumm.

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

Beachten Sie, dass Sie ähnlich für `allowed` und `disallowed` prüfen könnten.

#### Ergebnis

Das Video wird unten zusammen mit Informationen darüber angezeigt, ob die `getAutoplayPolicy()` Methode unterstützt wird, und falls ja, die Richtlinie.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` ist, wird das Video automatisch mit Ton abgespielt. Wenn die Richtlinie `allowed-muted` ist, wird das Video ohne Ton abgespielt.

{{EmbedLiveSample('Autoplay-Richtlinie für Medienelemente testen', '', '400')}}

Beachten Sie, dass das Video, wenn `getAutoplayPolicy()` nicht unterstützt wird, entweder mit Audio automatisch abspielt oder nicht abspielt. Der Code hat keine Kontrolle über dieses Verhalten: Sie sind dem Browserverhalten ausgeliefert!

### Autoplay-Richtlinie für ein bestimmtes Medienelement testen

Dieses Beispiel zeigt, wie Sie überprüfen können, ob ein bestimmtes Medienelement automatisch abspielen wird. Es ist fast genau dasselbe wie das vorherige Beispiel (eine `AudioContext` Überprüfung wäre ebenfalls ähnlich). Beachten Sie, dass es möglich ist, dass spezifische Elemente automatisch abspielen, auch wenn eine Überprüfung des `mediaelement` Typs ergibt, dass das automatische Abspielen `disallowed` ist; mit anderen Worten, eine Überprüfung eines bestimmten Elements ist zuverlässiger (obwohl es beim Laden der Seite keine Rolle spielt).

Der Code erzeugt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abspielen zu können.

#### HTML

Das untenstehende HTML hat ein `div` Element, das als Berichtprotokoll verwendet wird und auch ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) anzeigt, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Dieses sollte standardmäßig nicht stummgeschaltet werden und automatisch abspielen, wenn das automatische Abspielen nicht blockiert ist.

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

Der Code meldet, ob die `getAutoplayPolicy()` Methode unterstützt wird, und wenn ja, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden, daher schaltet der Code das Video stumm.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent =
    "navigator.getAutoplayPolicy() not supported. It may or may not autoplay, depending on the browser!";
} else {
  // Here we pass in the HTMLVideoElement to check
  log.textContent = `navigator.getAutoplayPolicy(video) === ${navigator.getAutoplayPolicy(
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

- Das Video sollte automatisch mit Ton abspielen, wenn `allowed` zurückgegeben wird, und ohne Ton, wenn `allowed-muted` zurückgegeben wird.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das Autoplay-Verhalten des Videos nur vom Browser ab.

{{EmbedLiveSample('Autoplay-Richtlinie für ein bestimmtes Medienelement testen', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
