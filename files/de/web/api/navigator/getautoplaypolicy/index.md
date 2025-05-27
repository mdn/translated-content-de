---
title: "Navigator: getAutoplayPolicy() Methode"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`getAutoplayPolicy()`** Methode der _Autoplay Policy Detection API_ liefert Informationen darüber, ob das [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Medienelementen und Audiokontexten erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist.

Anwendungen können diese Informationen nutzen, um ein entsprechendes Benutzererlebnis zu bieten. Beispielsweise kann die Anwendung Videos stummschalten, wenn die Nutzeragentenrichtlinie nur das Autoplay von unhörbaren Inhalten zulässt, sodass diese weiterhin automatisch abgespielt werden können.

Die Methode kann verwendet werden, um entweder die allgemeine Autoplay-Richtlinie für alle Elemente eines bestimmten Typs im Dokument oder für spezifische Medienelemente oder Audiokontexte zu erhalten.

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

  - : Ein String, der das Media-Playback-_Feature_ angibt, für das die allgemeine Autoplay-Richtlinie erforderlich ist.

    Die unterstützten Werte sind:

    - `mediaelement`

      - : Erhält die allgemeine Autoplay-Richtlinie für Medienelemente im Dokument. Medienelemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowie deren entsprechende Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`

      - : Erhält die allgemeine Autoplay-Richtlinie für [Web Audio API](/de/docs/Web/API/Web_Audio_API) Player im Dokument.

- `element` {{optional_inline}}

  - : Ein spezifisches Medienelement. Dies muss ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) sein, einschließlich abgeleiteter Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein spezifischer [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Ein String, der die Autoplay-Richtlinie für den angegebenen Medientyp oder das angegebene Element oder den Kontext angibt. Dies wird ein String mit einem der folgenden Werte sein:

- `allowed`
  - : Autoplay ist erlaubt.
- `allowed-muted`
  - : Autoplay ist nur für unhörbare Medien erlaubt. Dies schließt Medien ein, die keine Tonspur haben oder deren Ton stummgeschaltet wurde.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die zurückgegebene Autoplay-Richtlinie für einen `type` Parameter die _allgemeine_ Richtlinie für Elemente des angegebenen Typs ist. Beim Laden der Seite haben alle Elemente eines Typs dieselbe Richtlinie wie der Typ. Sobald der Benutzer mit der Seite/Site interagiert hat, können einzelne Elemente in einigen Browsern möglicherweise eine andere Richtlinie als der entsprechende Typ haben.

### Ausnahmen

- `TypeError`
  - : Das an die Methode übergebene Objekt ist kein erlaubter Typ. Die erlaubten Typen umfassen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) oder [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

„Autoplay“ bezieht sich auf jede Funktion, die bewirkt, dass Inhalte abgespielt werden, ohne dass der Benutzer ausdrücklich die Wiedergabe startet. Dazu gehört das `autoplay` Attribut in den HTML-[`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) Elementen sowie die Verwendung von JavaScript-Code, um die Wiedergabe ohne Benutzerinteraktion zu starten.

Nutzeragenten blockieren normalerweise das Autoplay oder erlauben nur unhörbare Inhalte, da unerwartete Geräusche beim ersten Laden einer Seite zu einem abrupten und unangenehmen Benutzererlebnis führen können. Die Mechanismen zur Bestimmung, ob Inhalte automatisch abgespielt werden können oder nicht, oder nur für unhörbare Inhalte abgespielt werden dürfen, unterscheiden sich zwischen den Nutzeragenten.

Die **`getAutoplayPolicy()`** Methode bietet einen standardisierten Mechanismus zur Bestimmung der Richtlinie für einen bestimmten Nutzeragenten, um einen bestimmten Inhaltstyp oder ein bestimmtes Element automatisch abzuspielen. Dies ermöglicht Anpassungen der Anwendung wie das automatische Stummschalten von Videos auf Websites, auf denen das Autoplay von hörbarem Inhalt nicht erlaubt ist, oder die Anpassung der Anwendung so, dass sie ohne Autoplay funktioniert.

Die empfohlene Verwendung der Methode besteht darin, sie _beim Laden der Seite_ (oder bevor die contentspielenden Elemente erstellt werden) aufzurufen und den Typ der Funktion anzugeben, die überprüft werden soll, und dann die Autoplay-Funktion der Medienelemente basierend auf dem Ergebnis zu konfigurieren. Wenn die Anwendung beispielsweise Videoelemente mit einer Tonspur automatisch abspielen möchte, könnten Sie den folgenden Code verwenden, um das Video stumm zu schalten, wenn nur unhörbare Inhalte abgespielt werden dürfen.

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

Die Methode kann auch aufgerufen werden, um die Autoplay-Richtlinie für ein bestimmtes Medienelement oder einen Audiokontext zu überprüfen. Wie unten gezeigt, sieht der Code genau gleich aus, außer dass das spezifische Element anstelle des `type` Strings übergeben wird.

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

Beim Laden der Seite, bevor der Benutzer mit der Seite oder Site interagiert hat, ist die Autoplay-Richtlinie für den Typ und die einzelnen Elemente dieselbe. Nachdem der Benutzer mit der Site, Seite oder spezifischen Elementen interagiert hat, kann sich die Autoplay-Richtlinie für den gesamten `type` ändern. Es ist auch möglich, dass sich die Richtlinie für ein spezifisches Element ändert, selbst wenn sich die allgemeine Richtlinie für den `type` nicht ändert.

Es gibt keine Möglichkeit, benachrichtigt zu werden, dass sich die Autoplay-Richtlinie geändert hat. Aus diesem Grund können Sie die Richtlinie für einen Typ oder ein Element zwar jederzeit überprüfen, normalerweise tun Sie dies jedoch nur beim Laden der Seite oder bevor Sie versuchen, Inhalte abzuspielen.

## Beispiele

### Überprüfung, ob das Feature unterstützt wird

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

Das Ergebnis der Ausführung dieses Codes auf dieser Seite ist:

{{EmbedLiveSample('Überprüfung, ob das Feature unterstützt wird', '', '50')}}

### Test der Autoplay-Richtlinie für Medienelementtypen

Dieses Beispiel zeigt, wie Sie die Autoplay-Richtlinie für den Medienelementtypen überprüfen können.

Der Code erstellt ein Videoelement mit dem [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut, das standardmäßig nicht stummgeschaltet ist. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, damit es abgespielt werden kann.

#### HTML

Das folgende HTML enthält ein `div` Element, das als Protokollierung für Berichte verwendet wird, und zeigt außerdem ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Dies sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abgespielt werden, wenn Autoplay nicht blockiert ist.

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

Der Code berichtet, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls ja, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden. In diesem Fall fügen wir einen Text hinzu, der erklärt, was passiert, und stummschalten das Video.

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

Beachтен Sie, dass Sie auf ähnliche Weise auf `allowed` und `disallowed` überprüfen können.

#### Ergebnis

Das Video wird unten zusammen mit Informationen darüber angezeigt, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls ja, die Richtlinie.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` ist, wird das Video automatisch mit Ton abgespielt. Wenn die Richtlinie `allowed-muted` ist, wird das Video ohne Ton abgespielt.

{{EmbedLiveSample('Test der Autoplay-Richtlinie für Medienelemente', '', '400')}}

Wenn `getAutoplayPolicy()` nicht unterstützt wird, wird das Video entweder mit Audio automatisch abgespielt oder nicht abgespielt. Der Code hat keine Kontrolle über dieses Verhalten: Sie sind der Implementierung des Browsers ausgeliefert!

### Test der Autoplay-Richtlinie für ein spezifisches Medienelement

Dieses Beispiel zeigt, wie überprüft werden kann, ob ein spezifisches Medienelement automatisch abgespielt wird. Es ist nahezu identisch mit dem vorherigen Beispiel (ein `AudioContext`-Check wäre auch ähnlich). Beachten Sie, dass es möglich ist, dass spezifische Elemente automatisch abgespielt werden, selbst wenn ein Check auf den `mediaelement`-Typ anzeigt, dass Autoplay `disallowed` ist; mit anderen Worten, ein Check auf ein spezifisches Element ist zuverlässiger (obwohl es beim Laden der Seite keine Rolle spielt).

Der Code erstellt ein Videoelement mit dem [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, damit es abgespielt werden kann.

#### HTML

Das folgende HTML enthält ein `div` Element, das als Protokollierung für Berichte verwendet wird, und zeigt außerdem ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Dies sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abgespielt werden, wenn Autoplay nicht blockiert ist.

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

Der Code berichtet, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls ja, die Richtlinie für Medienelemente.

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

- Das Video sollte automatisch mit Ton abgespielt werden, wenn `allowed` zurückgegeben wird, und ohne Ton, wenn `allowed-muted` zurückgegeben wird.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das Autoplay-Verhalten des Videos nur vom Browser ab.

{{EmbedLiveSample('Test der Autoplay-Richtlinie für ein spezifisches Medienelement', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
