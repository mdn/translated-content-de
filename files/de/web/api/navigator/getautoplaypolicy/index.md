---
title: "Navigator: getAutoplayPolicy() Methode"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`getAutoplayPolicy()`**-Methode der _Autoplay Policy Detection API_ liefert Informationen darüber, ob das [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Medien-Elementen und Audio-Kontexten erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist.

Anwendungen können diese Informationen nutzen, um ein angemessenes Benutzererlebnis zu bieten. Zum Beispiel, wenn die Benutzer-Agent-Richtlinie nur das Autoplay von unhörbarem Inhalt erlaubt, könnte die Anwendung Videos stummschalten, damit sie trotzdem automatisch abgespielt werden können.

Die Methode kann verwendet werden, um entweder die allgemeine Autoplay-Richtlinie für alle Objekte eines bestimmten Typs im Dokument oder für spezifische Medien-Elemente oder Audio-Kontexte abzurufen.

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

  - : Ein String, der das Medien-Feature angibt, für das die allgemeine Autoplay-Richtlinie benötigt wird.

    Die unterstützten Werte sind:

    - `mediaelement`

      - : Abrufen der allgemeinen Autoplay-Richtlinie für Medien-Elemente im Dokument. Medien-Elemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), sowie ihre entsprechenden Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`

      - : Abrufen der allgemeinen Autoplay-Richtlinie für [Web Audio API](/de/docs/Web/API/Web_Audio_API) Player im Dokument.

- `element` {{optional_inline}}

  - : Ein spezifisches Medien-Element. Dies muss ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) sein, einschließlich abgeleiteter Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein spezifischer [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Ein String, der die Autoplay-Richtlinie für den angegebenen Medientyp, das Element oder den Kontext angibt. Dies wird ein String mit einem der folgenden Werte sein:

- `allowed`
  - : Autoplay ist erlaubt.
- `allowed-muted`
  - : Autoplay ist nur für unhörbare Medien erlaubt. Dazu gehören Medien, die keine Audiotrack haben, oder bei denen der Ton stummgeschaltet wurde.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die zurückgegebene Autoplay-Richtlinie für einen `type`-Parameter die _allgemeine_ Richtlinie für Objekte des angegebenen Typs ist. Beim Laden der Seite haben alle Objekte eines Typs dieselbe Richtlinie wie der Typ. Nachdem der Benutzer mit der Seite/Seite interagiert hat, können einzelne Objekte in einigen Browsern eine andere Richtlinie haben als der entsprechende Typ.

### Ausnahmen

- `TypeError`
  - : Das an die Methode übergebene Objekt ist kein erlaubter Typ. Die erlaubten Typen umfassen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) oder [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

"Autoplay" bezieht sich auf jede Funktion, die dazu führt, dass Inhalte abgespielt werden, ohne dass der Benutzer speziell die Wiedergabe anfordert. Dies schließt das `autoplay`-Attribut in den HTML-Elementen [`<video>`](/de/docs/Web/HTML/Element/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Element/audio#autoplay) ein, sowie die Verwendung von JavaScript-Code, um die Wiedergabe ohne Benutzereingriff zu starten.

Benutzeragenten blockieren Autoplay häufig oder erlauben nur unhörbare Inhalte automatisch abzuspielen, da unerwartete Geräusche beim erstmaligen Laden einer Seite zu einem erschreckenden und unangenehmen Benutzererlebnis führen können. Die Mechanismen zur Bestimmung, ob Inhalte automatisch abgespielt werden können oder nicht, oder nur für unhörbare Inhalte, unterscheiden sich zwischen Benutzeragenten.

Die **`getAutoplayPolicy()`**-Methode bietet einen standardisierten Mechanismus zur Bestimmung der Richtlinie eines bestimmten Benutzeragenten für das automatische Abspielen eines bestimmten Typs oder Elements von Inhalten. Dies ermöglicht die Anpassung von Anwendungen, wie etwa das automatische Stummschalten von Videos auf Seiten, auf denen das Autoplay von hörbaren Inhalten nicht erlaubt ist, oder die Anpassung der Anwendung, dass sie ohne Autoplay funktioniert.

Die empfohlene Verwendung der Methode besteht darin, sie _beim Laden der Seite_ (oder bevor die Inhalte abspielenden Elemente erstellt werden) aufzurufen, um den Typ des Features zu überprüfen, und dann die Autoplay-Einstellungen der Medienelemente basierend auf dem Ergebnis zu konfigurieren. Wenn die Anwendung beispielsweise Videoelemente mit Audiotracks automatisch abspielen möchte, können Sie den folgenden Code verwenden, um das Video stummzuschalten, wenn nur unhörbare Inhalte abgespielt werden dürfen.

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

Die Methode kann auch aufgerufen werden, um die Autoplay-Richtlinie für ein spezifisches Medien-Element oder einen Audio-Kontext zu überprüfen. Wie unten gezeigt, sieht der Code genau gleich aus, außer dass Sie das spezifische Element anstelle des `type`-Strings übergeben.

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

Beim Laden der Seite, bevor der Benutzer mit der Seite oder der Seite interagiert hat, ist die Autoplay-Richtlinie für den Typ und die individuellen Elemente dieselbe. Nachdem der Benutzer mit der Seite, der Seite oder bestimmten Elementen interagiert hat, kann sich die Autoplay-Richtlinie für den gesamten `type` ändern. Es ist auch möglich, dass sich die Richtlinie für ein bestimmtes Element ändert, auch wenn sich die allgemeine Richtlinie für den `type` nicht ändert.

Es gibt keine Möglichkeit, benachrichtigt zu werden, dass sich die Autoplay-Richtlinie geändert hat. Aus diesem Grund können Sie die Richtlinie für einen Typ oder ein Element jederzeit überprüfen, normalerweise tun Sie dies jedoch nur beim Laden der Seite oder bevor Sie versuchen, Inhalte abzuspielen.

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

{{EmbedLiveSample('Checking if the feature is supported', '', '50')}}

### Autoplay-Richtlinie für Medienelementtypen testen

Dieses Beispiel zeigt, wie Sie die Autoplay-Richtlinie für den Medienelementtyp überprüfen können.

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt und standardmäßig nicht stummgeschaltet ist. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abzuspielen.

#### HTML

Der nachstehende HTML-Code enthält ein `div`-Element, das als Protokoll verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt. Dieses sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abspielen, wenn Autoplay nicht blockiert ist.

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

Der Code gibt an, ob die `getAutoplayPolicy()`-Methode unterstützt wird oder nicht und, falls ja, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden. In diesem Fall fügen wir etwas Text hinzu, der erklärt, was passiert und das Video stummgeschaltet.

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

Beachten Sie, dass Sie ähnlich nach `allowed` und `disallowed` suchen könnten.

#### Ergebnis

Das Video wird unten zusammen mit Informationen angezeigt, ob die `getAutoplayPolicy()`-Methode unterstützt wird und, falls ja, die Richtlinie.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` ist, wird das Video automatisch mit Ton abgespielt. Wenn die Richtlinie `allowed-muted` ist, wird das Video ohne Ton abgespielt.

{{EmbedLiveSample('Test autoplay policy for media elements', '', '400')}}

Beachten Sie, dass, wenn `getAutoplayPolicy()` nicht unterstützt wird, das Video entweder mit Audio automatisch abgespielt wird oder nicht. Der Code hat keine Kontrolle über dieses Verhalten: Sie sind auf die Implementierung des Browsers angewiesen!

### Autoplay-Richtlinie für ein spezifisches Medien-Element testen

Dieses Beispiel zeigt, wie Sie überprüfen können, ob ein spezifisches Medien-Element automatisch abgespielt wird. Es ist fast genau dasselbe wie das vorherige Beispiel (ein `AudioContext`-Check wäre auch ähnlich). Beachten Sie, dass es möglich ist, dass spezifische Objekte automatisch abgespielt werden, selbst wenn ein Check auf den `mediaelement`-Typ anzeigt, dass Autoplay `disallowed` ist; mit anderen Worten, ein Check auf ein spezifisches Element ist zuverlässiger (obwohl es beim Laden der Seite keine Rolle spielt).

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abzuspielen.

#### HTML

Der nachstehende HTML-Code enthält ein `div`-Element, das als Protokoll verwendet wird und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt. Dieses sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abspielen, wenn Autoplay nicht blockiert ist.

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

Der Code gibt an, ob die `getAutoplayPolicy()`-Methode unterstützt wird oder nicht und, falls ja, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden, also wird das Video stummgeschaltet.

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

- Das Video sollte mit Ton automatisch abgespielt werden, wenn `allowed` zurückgegeben wird, und ohne Ton, wenn `allowed-muted` zurückgegeben wird.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das Autoplay-Verhalten des Videos nur vom Browser ab.

{{EmbedLiveSample('Test autoplay policy for a specific media element', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
