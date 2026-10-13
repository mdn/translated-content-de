---
title: "Navigator: getAutoplayPolicy()-Methode"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die Methode **`getAutoplayPolicy()`** der _Autoplay Policy Detection API_ gibt Auskunft darüber, ob [Autoplay](/de/docs/Web/Media/Guides/Autoplay) für Medienelemente und Audiokontexte erlaubt, nicht erlaubt oder nur bei stummgeschaltetem Audio erlaubt ist.

Anwendungen können diese Informationen nutzen, um eine passende Benutzererfahrung zu bieten. Wenn die Richtlinie des User Agents beispielsweise Autoplay nur für Inhalte ohne hörbaren Ton zulässt, kann die Anwendung Videos stummschalten, damit sie trotzdem automatisch abgespielt werden.

Mit der Methode lässt sich entweder die allgemeine Autoplay-Richtlinie für alle Objekte eines bestimmten Typs im Dokument oder die Richtlinie für einzelne Medienelemente oder Audiokontexte ermitteln.

## Syntax

```js-nolint
// Test autoplay policy for a particular media playing feature
getAutoplayPolicy(type)

// Test autoplay support for a specific element or context
getAutoplayPolicy(element)
getAutoplayPolicy(context)
```

### Parameter

Die Methode muss mit genau einem der folgenden drei Parameter aufgerufen werden:

- `type` {{optional_inline}}
  - : Eine Zeichenfolge, die angibt, für welche Funktion zur Medienwiedergabe die allgemeine Autoplay-Richtlinie ermittelt werden soll.

    Folgende Werte werden unterstützt:
    - `mediaelement`
      - : Ermittelt die allgemeine Autoplay-Richtlinie für Medienelemente im Dokument.
        Medienelemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowie die zugehörigen Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`
      - : Ermittelt die allgemeine Autoplay-Richtlinie für Wiedergabeinstanzen der [Web Audio API](/de/docs/Web/API/Web_Audio_API) im Dokument.

- `element` {{optional_inline}}
  - : Ein bestimmtes Medienelement.
    Es muss sich um ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) handeln, einschließlich abgeleiteter Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein bestimmter [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Eine Zeichenfolge, die die Autoplay-Richtlinie für den angegebenen Typ einer Medienfunktion, das Element oder den Kontext angibt. Sie enthält einen der folgenden Werte:

- `allowed`
  - : Autoplay ist erlaubt.
- `allowed-muted`
  - : Autoplay ist nur für Medien ohne hörbaren Ton erlaubt.
    Dazu gehören Medien ohne Audiospur sowie Medien, deren Audio stummgeschaltet wurde.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die für einen `type`-Parameter zurückgegebene Autoplay-Richtlinie die _allgemeine_ Richtlinie für Objekte des angegebenen Typs ist. Beim Laden der Seite gilt für alle Objekte eines Typs dieselbe Richtlinie wie für den Typ selbst. Nachdem die nutzende Person mit der Seite oder Website interagiert hat, _können_ einzelne Objekte in manchen Browsern eine andere Richtlinie als ihr Typ haben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das an die Methode übergebene Objekt hat keinen zulässigen Typ.
    Zulässig sind [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein davon abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) sowie [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

„Autoplay“ bezeichnet jede Funktion, durch die Inhalte abgespielt werden, ohne dass die nutzende Person die Wiedergabe ausdrücklich angefordert hat. Dazu gehören das Attribut `autoplay` der HTML-Elemente [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) sowie das Starten der Wiedergabe durch JavaScript-Code ohne Benutzerinteraktion.

User Agents blockieren Autoplay häufig oder erlauben es nur für Inhalte ohne hörbaren Ton, da unerwartete Geräusche beim Laden einer Seite als störend und unangenehm empfunden werden können. Die Mechanismen, mit denen bestimmt wird, ob Inhalte automatisch abgespielt werden dürfen oder ob dies nur für Inhalte ohne hörbaren Ton gilt, unterscheiden sich je nach User Agent.

Die Methode **`getAutoplayPolicy()`** bietet einen standardisierten Mechanismus, um die Richtlinie eines bestimmten User Agents für die automatische Wiedergabe eines bestimmten Inhaltstyps oder einzelnen Inhalts zu ermitteln. So können Anwendungen ihr Verhalten anpassen: Sie können beispielsweise Videos auf Websites automatisch stummschalten, auf denen Autoplay mit hörbarem Ton nicht erlaubt ist, oder so geändert werden, dass sie ohne Autoplay funktionieren.

Es wird empfohlen, die Methode _beim Laden der Seite_ (oder vor dem Erstellen der Elemente zur Wiedergabe von Inhalten) mit dem zu prüfenden Funktionstyp aufzurufen und die automatische Wiedergabe von Medienelementen anhand des Ergebnisses zu konfigurieren. Wenn eine Anwendung beispielsweise Videoelemente mit Audiospur automatisch abspielen möchte, können Sie den folgenden Code verwenden, um das Video stummzuschalten, falls nur Inhalte ohne hörbaren Ton wiedergegeben werden dürfen.

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

Die Methode kann auch aufgerufen werden, um die Autoplay-Richtlinie für ein bestimmtes Medienelement oder einen bestimmten Audiokontext zu prüfen. Wie unten gezeigt, sieht der Code genauso aus; statt der Zeichenfolge `type` übergeben Sie lediglich das betreffende Objekt.

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

Beim Laden der Seite, bevor eine Person mit der Seite oder Website interagiert hat, stimmen die Autoplay-Richtlinien für den Typ und die einzelnen Objekte überein. Nachdem eine Person mit der Website, der Seite oder bestimmten Elementen interagiert hat, kann sich die Autoplay-Richtlinie für den gesamten `type` ändern. Es ist auch möglich, dass sich die Richtlinie für ein einzelnes Objekt ändert, während die allgemeine Richtlinie für den `type` unverändert bleibt.

Es gibt keine Möglichkeit, über eine Änderung der Autoplay-Richtlinie benachrichtigt zu werden. Sie können die Richtlinie für einen Typ oder ein Objekt zwar jederzeit prüfen, tun dies aber normalerweise nur beim Laden der Seite oder bevor Sie versuchen, Inhalte abzuspielen.

## Beispiele

### Prüfen, ob die Funktion unterstützt wird

Der folgende Code zeigt, wie Sie prüfen können, ob `navigator.getAutoplayPolicy()` unterstützt wird:

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

Das Ergebnis der Ausführung des Codes auf dieser Seite lautet:

{{EmbedLiveSample('Checking if the feature is supported', '', '50')}}

### Autoplay-Richtlinie für den Typ der Medienelemente prüfen

Dieses Beispiel zeigt, wie Sie die Autoplay-Richtlinie für den Typ der Medienelemente prüfen können.

Der Code erstellt ein Videoelement mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay), das standardmäßig nicht stummgeschaltet ist. Wenn die Autoplay-Richtlinie „allowed-muted“ lautet, wird das Video stummgeschaltet, damit es abgespielt werden kann.

#### HTML

Das folgende HTML enthält ein `div`-Element, das als Protokoll für Meldungen dient, und zeigt außerdem ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) an. Dieses sollte standardmäßig nicht stummgeschaltet sein und automatisch abgespielt werden, sofern Autoplay nicht blockiert wird.

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

Der Code gibt an, ob die Methode `getAutoplayPolicy()` unterstützt wird, und, falls ja, welche Richtlinie für Medienelemente gilt.

Wenn die Richtlinie `allowed-muted` lautet, können nur stummgeschaltete Videos abgespielt werden. In diesem Fall fügen wir einen erklärenden Text hinzu und schalten das Video stumm.

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

Entsprechend können Sie auch auf `allowed` und `disallowed` prüfen.

#### Ergebnis

Unten wird das Video zusammen mit Informationen darüber angezeigt, ob die Methode `getAutoplayPolicy()` unterstützt wird und, falls ja, welche Richtlinie gilt.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` lautet, wird das Video automatisch mit Ton abgespielt. Bei `allowed-muted` wird das Video ohne Ton abgespielt.

{{EmbedLiveSample('Test autoplay policy for media elements', '', '400')}}

Wenn `getAutoplayPolicy()` nicht unterstützt wird, wird das Video entweder automatisch mit Ton oder gar nicht abgespielt. Der Code hat keinen Einfluss auf dieses Verhalten: Es hängt allein von der Implementierung des Browsers ab.

### Autoplay-Richtlinie für ein bestimmtes Medienelement prüfen

Dieses Beispiel zeigt, wie Sie prüfen können, ob ein bestimmtes Medienelement automatisch abgespielt wird. Es entspricht fast vollständig dem vorherigen Beispiel (eine Prüfung für einen `AudioContext` wäre ähnlich). Beachten Sie, dass bestimmte Elemente automatisch abgespielt werden können, selbst wenn eine Prüfung des Typs `mediaelement` ergibt, dass Autoplay `disallowed` ist. Anders ausgedrückt: Die Prüfung eines bestimmten Elements ist zuverlässiger (beim Laden der Seite spielt das allerdings keine Rolle).

Der Code erstellt ein Videoelement mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay). Wenn die Autoplay-Richtlinie „allowed-muted“ lautet, wird das Video stummgeschaltet, damit es abgespielt werden kann.

#### HTML

Das folgende HTML enthält ein `div`-Element, das als Protokoll für Meldungen dient, und zeigt außerdem ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) an. Dieses sollte standardmäßig nicht stummgeschaltet sein und automatisch abgespielt werden, sofern Autoplay nicht blockiert wird.

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

Der Code gibt an, ob die Methode `getAutoplayPolicy()` unterstützt wird, und, falls ja, welche Richtlinie für Medienelemente gilt.

Wenn die Richtlinie `allowed-muted` lautet, können nur stummgeschaltete Videos abgespielt werden. Daher schaltet der Code das Video stumm.

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

Das Ergebnis entspricht dem des vorherigen Beispiels:

- Wenn `allowed` zurückgegeben wird, sollte das Video automatisch mit Ton abgespielt werden; bei `allowed-muted` ohne Ton.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das Autoplay-Verhalten des Videos allein vom Browser ab.

{{EmbedLiveSample('Test autoplay policy for a specific media element', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
