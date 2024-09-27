---
title: "Navigator: getAutoplayPolicy() Methode"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`getAutoplayPolicy()`** Methode der _Autoplay Policy Detection API_ liefert Informationen darüber, ob das [Autoplay](/de/docs/Web/Media/Autoplay_guide) von Medienelementen und Audio-Kontexten erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist.

Anwendungen können diese Informationen nutzen, um ein angemessenes Benutzererlebnis zu bieten. Zum Beispiel, wenn die Nutzeragentenrichtlinie nur das Autoplay von unhörbaren Inhalten erlaubt, könnte die Anwendung Videos stummschalten, damit sie dennoch automatisch abgespielt werden können.

Die Methode kann verwendet werden, um entweder die allgemeine Autoplay-Richtlinie für alle Elemente eines bestimmten Typs im Dokument oder für spezifische Medienelemente oder Audio-Kontexte zu erhalten.

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

  - : Ein String, der die Medienwiedergabe-_Funktion_ angibt, für die die allgemeine Autoplay-Richtlinie erforderlich ist.

    Die unterstützten Werte sind:

    - `mediaelement`

      - : Erhalten Sie die allgemeine Autoplay-Richtlinie für Medienelemente im Dokument. Medienelemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowie deren entsprechende Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`

      - : Erhalten Sie die allgemeine Autoplay-Richtlinie für [Web Audio API](/de/docs/Web/API/Web_Audio_API) Player im Dokument.

- `element` {{optional_inline}}

  - : Ein spezifisches Medienelement. Dies muss ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) sein, einschließlich abgeleiteter Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein spezifischer [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Ein String, der die Autoplay-Richtlinie für den angegebenen Medientyp, das Element oder den Kontext angibt. Dies wird ein String mit einem der folgenden Werte sein:

- `allowed`
  - : Autoplay ist erlaubt.
- `allowed-muted`
  - : Autoplay ist nur für unhörbare Medien erlaubt. Dazu gehören Medien, die keine Tonspur haben oder bei denen der Ton stummgeschaltet wurde.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die für einen `type` Parameter zurückgegebene Autoplay-Richtlinie die _allgemeine_ Richtlinie für Elemente des angegebenen Typs ist. Beim Laden der Seite haben alle Elemente eines Typs dieselbe Richtlinie wie der Typ. Sobald der Benutzer mit der Seite/Site interagiert hat, können bei einigen Browsern einzelne Elemente eine andere Richtlinie als der entsprechende Typ haben.

### Ausnahmen

- `TypeError`
  - : Das an die Methode übergebene Objekt ist kein erlaubter Typ. Die erlaubten Typen umfassen [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) oder [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

"Autoplay" bezieht sich auf jede Funktion, die verursacht, dass Inhalte beginnen zu spielen, ohne dass der Benutzer speziell die Wiedergabe anfordert. Dies schließt das `autoplay` Attribut in den HTML [`<video>`](/de/docs/Web/HTML/Element/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Element/audio#autoplay) Elementen ein sowie die Verwendung von JavaScript-Code, um die Wiedergabe ohne Benutzerinteraktion zu starten.

Nutzeragenten blockieren in der Regel das Autoplay oder erlauben nur unhörbare Inhalte, da unerwartete Geräusche beim ersten Laden einer Seite zu einem abrupten und unangenehmen Benutzererlebnis führen können. Die Mechanismen, die verwendet werden, um zu bestimmen, ob Inhalte automatisch abgespielt werden können oder nicht, oder nur für unhörbare Inhalte abgespielt werden können, unterscheiden sich zwischen Nutzeragenten.

Die **`getAutoplayPolicy()`** Methode stellt einen Standardmechanismus zur Verfügung, um die Richtlinie eines bestimmten Nutzeragenten zu ermitteln, ein bestimmtes Typ- oder Inhaltselement automatisch abzuspielen. Dies ermöglicht Anpassungen der Anwendung wie das automatische Stummschalten von Videos auf Websites, auf denen das Autoplay von hörbarem Inhalt nicht erlaubt ist, oder Anpassungen der Applikation, um ohne Autoplay zu funktionieren.

Die empfohlene Verwendung der Methode besteht darin, sie beim _Seitenaufruf_ (oder bevor die Inhalte wiedergabefähiger Elemente erstellt werden) aufzurufen und den zu überprüfenden Funktionstyp anzugeben, und dann das Autoplay von Medienelementen basierend auf dem Ergebnis zu konfigurieren. Zum Beispiel, wenn die Applikation Videoelemente automatisch abspielen möchte, die eine Tonspur haben, könnten Sie den folgenden Code verwenden, um das Video stummzuschalten, wenn nur unhörbare Inhalte abgespielt werden dürfen.

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

Die Methode kann auch aufgerufen werden, um die Autoplay-Richtlinie für ein bestimmtes Medienelement oder einen bestimmten Audiokontext zu überprüfen. Wie unten gezeigt sieht der Code genau gleich aus, nur dass Sie anstatt des `type` Strings das spezifische Element übergeben.

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

Beim Laden der Seite, bevor der Benutzer mit der Seite oder der Site interagiert hat, ist die Autoplay-Richtlinie für den Typ und die einzelnen Elemente die gleiche. Nach der Interaktion des Benutzers mit der Site, Seite oder spezifischen Elementen kann sich die Autoplay-Richtlinie für den gesamten `type` ändern. Es ist auch möglich, dass sich die Richtlinie für ein spezifisches Element ändert, auch wenn sich die allgemeine Richtlinie für den `type` nicht ändert.

Es gibt keine Möglichkeit, benachrichtigt zu werden, dass sich die Autoplay-Richtlinie geändert hat. Aus diesem Grund können Sie die Richtlinie für einen Typ oder ein Element jederzeit überprüfen, normalerweise tun Sie dies jedoch nur beim Seitenaufruf oder bevor Sie versuchen, Inhalte abzuspielen.

## Beispiele

### Überprüfen, ob die Funktion unterstützt wird

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

Das Ergebnis des Ausführens des Codes auf dieser Seite ist:

{{EmbedLiveSample('Überprüfen, ob die Funktion unterstützt wird', '', '50')}}

### Test der Autoplay-Richtlinie für Medienelementtypen

Dieses Beispiel zeigt, wie Sie die Autoplay-Richtlinie für den Medienelementtyp überprüfen können.

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat und standardmäßig nicht stummgeschaltet ist. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abspielen zu können.

#### HTML

Das untenstehende HTML enthält ein `div`-Element, das als Berichtlog verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Es sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abspielen, wenn Autoplay nicht blockiert ist.

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

Der Code berichtet, ob die `getAutoplayPolicy()` Methode unterstützt wird und, wenn ja, die Richtlinie für Medienelemente.

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

Beachten Sie, dass Sie möglicherweise auch für `allowed` und `disallowed` überprüfen.

#### Ergebnis

Das Video wird unten zusammen mit Informationen angezeigt, ob die `getAutoplayPolicy()` Methode unterstützt wird, und falls ja, mit welcher Richtlinie.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` ist, wird das Video mit Ton automatisch abgespielt. Wenn die Richtlinie `allowed-muted` ist, wird das Video ohne Ton abgespielt.

{{EmbedLiveSample('Test der Autoplay-Richtlinie für Medienelemente', '', '400')}}

Beachten Sie, dass, wenn `getAutoplayPolicy()` nicht unterstützt wird, das Video entweder mit Audio automatisch abspielt oder nicht wiedergegeben wird. Der Code hat keine Kontrolle über dieses Verhalten: Sie sind dem Verhalten des Browsers ausgeliefert!

### Test der Autoplay-Richtlinie für ein spezifisches Medienelement

Dieses Beispiel zeigt, wie Sie überprüfen können, ob ein spezifisches Medienelement automatisch abgespielt wird. Es ist fast genau das gleiche wie das vorherige Beispiel (ein `AudioContext` Check wäre ebenfalls ähnlich). Beachten Sie, dass es möglich ist, dass spezifische Elemente automatisch abgespielt werden, auch wenn ein Check auf den `mediaelement`-Typ anzeigt, dass Autoplay `disallowed` ist; mit anderen Worten, ein Check auf ein spezifisches Element ist zuverlässiger (obwohl es beim Seitenaufruf keine Rolle spielt).

Der Code erstellt ein Videoelement, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Wenn die Autoplay-Richtlinie "allowed-muted" ist, wird das Video stummgeschaltet, um es abspielen zu können.

#### HTML

Das untenstehende HTML enthält ein `div`-Element, das als Berichtlog verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat. Es sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abspielen, wenn Autoplay nicht blockiert ist.

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

Der Code berichtet, ob die `getAutoplayPolicy()` Methode unterstützt wird und, wenn ja, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden, sodass der Code das Video stummschaltet.

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

{{EmbedLiveSample('Test der Autoplay-Richtlinie für ein spezifisches Medienelement', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
