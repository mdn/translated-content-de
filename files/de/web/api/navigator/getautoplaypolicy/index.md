---
title: "Navigator: Methode getAutoplayPolicy()"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`getAutoplayPolicy()`**-Methode der _Autoplay Policy Detection API_ bietet Informationen darüber, ob [Autoplay](/de/docs/Web/Media/Autoplay_guide) von Media-Elementen und Audiokontexten erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist.

Anwendungen können diese Informationen nutzen, um ein angemessenes Benutzererlebnis zu bieten. Beispielsweise, wenn die Richtlinie des Benutzeragenten nur das Autoplay von unhörbaren Inhalten erlaubt, könnte die Anwendung Videos stummschalten, damit sie trotzdem automatisch abgespielt werden können.

Die Methode kann verwendet werden, um entweder die allgemeine Autoplay-Richtlinie für alle Elemente eines bestimmten Typs im Dokument oder für bestimmte Media-Elemente oder Audiokontexte zu erhalten.

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

  - : Ein String, der das Medienwiedergabe-_Feature_ angibt, für das die allgemeine Autoplay-Richtlinie benötigt wird.

    Die unterstützten Werte sind:

    - `mediaelement`

      - : Die allgemeine Autoplay-Richtlinie für Media-Elemente im Dokument abrufen.
        Media-Elemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und deren entsprechende Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`

      - : Die allgemeine Autoplay-Richtlinie für [Web Audio API](/de/docs/Web/API/Web_Audio_API) Player im Dokument abrufen.

- `element` {{optional_inline}}

  - : Ein spezifisches Media-Element.
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
    Dies schließt Medien ein, die keine Audiospur haben oder für die der Ton stummgeschaltet wurde.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die für einen `type`-Parameter zurückgegebene Autoplay-Richtlinie die _allgemeine_ Richtlinie für Elemente des angegebenen Typs ist. Beim Laden der Seite haben alle Elemente eines Typs die gleiche Richtlinie wie der Typ. Sobald der Benutzer mit der Seite/Site interagiert, können auf einigen Browsern einzelne Elemente eine andere Richtlinie als der entsprechende Typ haben.

### Ausnahmen

- `TypeError`
  - : Das an die Methode übergebene Objekt ist kein erlaubter Typ.
    Die erlaubten Typen umfassen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) oder [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

"Autoplay" bezieht sich auf jede Funktion, die dazu führt, dass Inhalte ohne ausdrückliche Anforderung des Benutzers mit der Wiedergabe beginnen. Dies schließt das Attribut `autoplay` in den HTML-Elementen [`<video>`](/de/docs/Web/HTML/Element/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Element/audio#autoplay) ein sowie die Verwendung von JavaScript-Code, um die Wiedergabe ohne Benutzereingriff zu starten.

Benutzeragenten blockieren häufig Autoplay oder erlauben nur das Autoplay von unhörbaren Inhalten, da unerwartete Geräusche beim ersten Laden einer Seite zu einem irritierenden und unangenehmen Benutzererlebnis führen können. Die Mechanismen zur Bestimmung, ob Inhalte automatisch abgespielt werden können oder nicht, oder nur unhörbare Inhalte abgespielt werden, unterscheiden sich zwischen den Benutzeragenten.

Die **`getAutoplayPolicy()`**-Methode bietet einen standardisierten Mechanismus zur Bestimmung der Richtlinie eines bestimmten Benutzeragenten für das Autoplay eines bestimmten Typs oder Elements von Inhalten. Dies ermöglicht die Anpassung von Anwendungen, wie das automatische Stummschalten von Videos auf Sites, auf denen das Autoplay von hörbaren Inhalten nicht erlaubt ist, oder die Modifikation der Anwendung zur Funktion ohne Autoplay.

Die empfohlene Verwendung der Methode ist es, diese _beim Laden der Seite_ (oder bevor die abspielenden Inhaltselemente erstellt werden) aufzurufen und den Typ des Features anzugeben, der überprüft werden soll, und dann die Autoplay-Einstellungen der Media-Elemente basierend auf dem Ergebnis zu konfigurieren. Beispielsweise, wenn die Anwendung möchte, dass Videoelemente mit einer Audiospur automatisch abgespielt werden, könnten Sie folgendem Code verwenden, um das Video stummzuschalten, wenn nur unhörbare Inhalte abgespielt werden dürfen.

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

Die Methode kann auch aufgerufen werden, um die Autoplay-Richtlinie für ein spezifisches Media-Element oder Audiokontext zu überprüfen. Wie unten gezeigt, sieht der Code genau gleich aus, außer dass Sie das spezifische Element anstelle des `type`-Strings übergeben.

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

Beim Laden der Seite, bevor der Benutzer mit der Seite oder Site interagiert hat, sind die Autoplay-Richtlinien für den Typ und die einzelnen Elemente gleich. Nach der Benutzerinteraktion mit der Site, Seite oder spezifischen Elementen kann sich die Autoplay-Richtlinie für den gesamten `type` ändern. Es ist auch möglich, dass sich die Richtlinie für ein spezifisches Element ändert, selbst wenn die allgemeine Richtlinie für den `type` nicht verändert wird.

Es gibt keinen Weg, darauf hingewiesen zu werden, dass sich die Autoplay-Richtlinie geändert hat. Aus diesem Grund, obwohl Sie die Richtlinie jederzeit für einen Typ oder ein Element überprüfen können, werden Sie dies üblicherweise nur beim Laden der Seite oder vor dem Versuch, Inhalte abzuspielen, tun.

## Beispiele

### Überprüfen, ob das Feature unterstützt wird

Der folgende Code zeigt, wie Sie überprüfen können, ob `navigator.getAutoplayPolicy()` unterstützt wird:

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

### Autoplay-Richtlinie für Medienelementtyp testen

Dieses Beispiel demonstriert, wie Sie die Autoplay-Richtlinie für den Medienelementtyp überprüfen können.

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt und standardmäßig nicht stummgeschaltet ist. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um die Wiedergabe zu ermöglichen.

#### HTML

Das HTML unten enthält ein `div`-Element, das als Berichtlog verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video), das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt. Dies sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abspielen, wenn das Autoplay nicht blockiert ist.

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

Der Code berichtet, ob die Methode `getAutoplayPolicy()` unterstützt wird oder nicht und, wenn ja, die Richtlinie für Media-Elemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden. In diesem Fall fügen wir etwas Text hinzu, der erklärt, was passiert, und schalten das Video stumm.

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

Beachten Sie, dass Sie ähnlich nach `allowed` und `disallowed` prüfen können.

#### Ergebnis

Das Video wird unten angezeigt, zusammen mit Informationen darüber, ob die Methode `getAutoplayPolicy()` unterstützt wird und, wenn ja, die Richtlinie.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` ist, wird das Video automatisch mit Ton abgespielt. Wenn die Richtlinie `allowed-muted` ist, wird das Video ohne Ton abgespielt.

{{EmbedLiveSample('Autoplay-Richtlinie für Medienelemente testen', '', '400')}}

Beachten Sie, dass wenn `getAutoplayPolicy()` nicht unterstützt wird, das Video entweder mit Audio automatisch abspielt oder nicht abspielt. Der Code hat keine Kontrolle über dieses Verhalten: Sie sind der Implementierung des Browsers ausgeliefert!

### Autoplay-Richtlinie für ein spezifisches Media-Element testen

Dieses Beispiel zeigt, wie Sie überprüfen können, ob ein spezifisches Media-Element automatisch abgespielt wird. Es ist fast genau dasselbe wie das vorherige Beispiel (ein `AudioContext`-Check wäre auch ähnlich). Beachten Sie, dass es für spezifische Elemente möglich ist, automatisch abgespielt zu werden, auch wenn ein Check für den `mediaelement`-Typ anzeigt, dass Autoplay `disallowed` ist; mit anderen Worten, ein Check für ein spezifisches Element ist zuverlässiger (obwohl es beim Laden der Seite unerheblich ist).

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um die Wiedergabe zu ermöglichen.

#### HTML

Das HTML unten hat ein `div`-Element, das als Berichtlog verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video), das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut besitzt. Dies sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abspielen, wenn das Autoplay nicht blockiert ist.

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

Der Code berichtet, ob die Methode `getAutoplayPolicy()` unterstützt wird oder nicht und, wenn ja, die Richtlinie für Media-Elemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden, deshalb schaltet der Code das Video stumm.

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

Das Ergebnis ist das gleiche wie im vorherigen Beispiel:

- Das Video sollte mit Ton automatisch abgespielt werden, wenn `allowed` zurückgegeben wird, und ohne Ton, wenn `allowed-muted` zurückgegeben wird.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das Autoplay-Verhalten des Videos nur vom Browser ab.

{{EmbedLiveSample('Autoplay-Richtlinie für ein spezifisches Media-Element testen', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
