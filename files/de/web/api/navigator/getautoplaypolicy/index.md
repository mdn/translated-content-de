---
title: "Navigator: getAutoplayPolicy()-Methode"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die Methode **`getAutoplayPolicy()`** der _Autoplay Policy Detection API_ gibt Auskunft darüber, ob die [automatische Wiedergabe](/de/docs/Web/Media/Guides/Autoplay) von Medienelementen und Audiokontexten erlaubt oder untersagt ist oder nur bei stummgeschaltetem Audio erlaubt ist.

Anwendungen können diese Informationen nutzen, um ein geeignetes Benutzererlebnis bereitzustellen. Wenn die Richtlinie des User Agents beispielsweise nur die automatische Wiedergabe von Inhalten ohne hörbaren Ton erlaubt, könnte die Anwendung Videos stummschalten, damit sie trotzdem automatisch wiedergegeben werden können.

Mit der Methode lässt sich entweder die allgemeine Richtlinie für die automatische Wiedergabe aller Objekte eines bestimmten Typs im Dokument oder die Richtlinie für einzelne Medienelemente oder Audiokontexte ermitteln.

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
  - : Ein String, der angibt, für welche Funktion zur Medienwiedergabe die allgemeine Richtlinie für die automatische Wiedergabe ermittelt werden soll.

    Unterstützte Werte sind:
    - `mediaelement`
      - : Ermittelt die allgemeine Richtlinie für die automatische Wiedergabe von Medienelementen im Dokument. Medienelemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowie die zugehörigen Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`
      - : Ermittelt die allgemeine Richtlinie für die automatische Wiedergabe von Playern der [Web Audio API](/de/docs/Web/API/Web_Audio_API) im Dokument.

- `element` {{optional_inline}}
  - : Ein bestimmtes Medienelement. Es muss sich um ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) handeln. Dazu gehören auch abgeleitete Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein bestimmter [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Ein String, der die Richtlinie für die automatische Wiedergabe des angegebenen Medientyps, Elements oder Kontexts angibt. Er enthält einen der folgenden Werte:

- `allowed`
  - : Die automatische Wiedergabe ist erlaubt.
- `allowed-muted`
  - : Die automatische Wiedergabe ist nur für Medien ohne hörbaren Ton erlaubt. Dazu gehören Medien ohne Audiospur oder Medien, deren Audio stummgeschaltet wurde.
- `disallowed`
  - : Die automatische Wiedergabe ist nicht erlaubt.

Beachten Sie, dass die für einen `type`-Parameter zurückgegebene Richtlinie die _allgemeine_ Richtlinie für Objekte des angegebenen Typs ist. Beim Laden der Seite gilt für alle Objekte eines Typs dieselbe Richtlinie wie für den Typ selbst. Nachdem der Benutzer mit der Seite oder Website interagiert hat, können einzelne Objekte in manchen Browsern eine andere Richtlinie haben als der entsprechende Typ.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das an die Methode übergebene Objekt hat keinen zulässigen Typ. Zulässige Typen sind [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein davon abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) und [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

„Autoplay“ bezeichnet jede Funktion, durch die die Wiedergabe von Inhalten beginnt, ohne dass der Benutzer sie ausdrücklich angefordert hat. Dazu gehören das Attribut `autoplay` der HTML-Elemente [`<video>`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay) sowie JavaScript-Code, der die Wiedergabe ohne Benutzerinteraktion startet.

User Agents blockieren die automatische Wiedergabe häufig oder erlauben sie nur für Inhalte ohne hörbaren Ton, da unerwartete Geräusche beim ersten Laden einer Seite störend und unangenehm sein können. Die Mechanismen, mit denen bestimmt wird, ob Inhalte automatisch wiedergegeben werden dürfen oder ob dies nur ohne hörbaren Ton erlaubt ist, unterscheiden sich je nach User Agent.

Die Methode **`getAutoplayPolicy()`** bietet einen standardisierten Mechanismus, um die Richtlinie eines bestimmten User Agents für die automatische Wiedergabe eines Inhaltstyps oder eines einzelnen Objekts zu ermitteln. Dadurch können Anwendungen ihr Verhalten anpassen, beispielsweise Videos auf Websites automatisch stummschalten, auf denen die automatische Wiedergabe mit hörbarem Ton nicht erlaubt ist, oder ohne automatische Wiedergabe funktionieren.

Es wird empfohlen, die Methode _beim Laden der Seite_ (oder bevor die Elemente zur Wiedergabe von Inhalten erstellt werden) mit dem zu prüfenden Funktionstyp aufzurufen und die automatische Wiedergabe der Medienelemente anschließend anhand des Ergebnisses zu konfigurieren. Wenn die Anwendung beispielsweise Videoelemente mit einer Audiospur automatisch wiedergeben soll, können Sie das Video mit folgendem Code stummschalten, falls nur Inhalte ohne hörbaren Ton wiedergegeben werden dürfen.

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

Die Methode kann auch aufgerufen werden, um die Richtlinie für die automatische Wiedergabe eines bestimmten Medienelements oder Audiokontexts zu prüfen. Wie unten gezeigt, sieht der Code genauso aus, mit dem Unterschied, dass Sie statt des `type`-Strings das jeweilige Objekt übergeben.

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

Beim Laden der Seite, bevor der Benutzer mit der Seite oder Website interagiert hat, ist die Richtlinie für den Typ und die einzelnen Objekte gleich. Nachdem der Benutzer mit der Website, der Seite oder bestimmten Elementen interagiert hat, kann sich die Richtlinie für den gesamten `type` ändern. Es ist auch möglich, dass sich die Richtlinie für ein einzelnes Objekt ändert, obwohl die allgemeine Richtlinie für den `type` unverändert bleibt.

Es gibt keine Möglichkeit, über eine Änderung der Richtlinie für die automatische Wiedergabe benachrichtigt zu werden. Sie können die Richtlinie für einen Typ oder ein Objekt zwar jederzeit prüfen, werden dies aber normalerweise nur beim Laden der Seite oder vor dem Versuch tun, Inhalte wiederzugeben.

## Beispiele

### Prüfen, ob die Funktion unterstützt wird

Der folgende Code zeigt, wie Sie prüfen, ob `navigator.getAutoplayPolicy()` unterstützt wird:

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

Das Ergebnis der Codeausführung auf dieser Seite ist:

{{EmbedLiveSample('Checking if the feature is supported', '', '50')}}

### Richtlinie für die automatische Wiedergabe des Medienelementtyps prüfen

Dieses Beispiel zeigt, wie Sie die Richtlinie für die automatische Wiedergabe des Medienelementtyps prüfen können.

Der Code erstellt ein Videoelement mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay), das standardmäßig nicht stummgeschaltet ist. Wenn die Richtlinie `allowed-muted` lautet, wird das Video stummgeschaltet, damit es wiedergegeben werden kann.

#### HTML

Das folgende HTML enthält ein `div`-Element, das als Protokoll für Meldungen dient, und zeigt außerdem ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) an. Das Video sollte standardmäßig nicht stummgeschaltet sein und automatisch abgespielt werden, sofern die automatische Wiedergabe nicht blockiert wird.

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

Der Code meldet, ob die Methode `getAutoplayPolicy()` unterstützt wird, und gibt gegebenenfalls die Richtlinie für Medienelemente aus.

Wenn die Richtlinie `allowed-muted` lautet, können nur stummgeschaltete Videos wiedergegeben werden. In diesem Fall fügen wir einen erklärenden Text hinzu und schalten das Video stumm.

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

Sie könnten auf ähnliche Weise auch auf `allowed` und `disallowed` prüfen.

#### Ergebnis

Unten werden das Video und Informationen darüber angezeigt, ob die Methode `getAutoplayPolicy()` unterstützt wird und welche Richtlinie gegebenenfalls gilt.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` lautet, wird das Video automatisch mit Ton wiedergegeben. Lautet die Richtlinie `allowed-muted`, wird das Video ohne Ton wiedergegeben.

{{EmbedLiveSample('test_autoplay_policy_for_media_element_type', '', '400')}}

Wenn `getAutoplayPolicy()` nicht unterstützt wird, wird das Video entweder automatisch mit Ton wiedergegeben oder gar nicht abgespielt. Der Code hat keine Kontrolle über dieses Verhalten: Es hängt vollständig von der Implementierung des Browsers ab!

### Richtlinie für die automatische Wiedergabe eines bestimmten Medienelements prüfen

Dieses Beispiel zeigt, wie Sie prüfen können, ob ein bestimmtes Medienelement automatisch wiedergegeben wird. Es entspricht fast vollständig dem vorherigen Beispiel (eine Prüfung für einen `AudioContext` wäre ebenfalls ähnlich). Beachten Sie, dass einzelne Elemente automatisch wiedergegeben werden können, auch wenn eine Prüfung des Typs `mediaelement` ergibt, dass die automatische Wiedergabe `disallowed` ist. Eine Prüfung des einzelnen Elements ist also zuverlässiger (beim Laden der Seite macht dies allerdings keinen Unterschied).

Der Code erstellt ein Videoelement mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay). Wenn die Richtlinie `allowed-muted` lautet, wird das Video stummgeschaltet, damit es wiedergegeben werden kann.

#### HTML

Das folgende HTML enthält ein `div`-Element, das als Protokoll für Meldungen dient, und zeigt außerdem ein [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) mit dem Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) an. Das Video sollte standardmäßig nicht stummgeschaltet sein und automatisch abgespielt werden, sofern die automatische Wiedergabe nicht blockiert wird.

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

Der Code meldet, ob die Methode `getAutoplayPolicy()` unterstützt wird, und gibt gegebenenfalls die Richtlinie für Medienelemente aus.

Wenn die Richtlinie `allowed-muted` lautet, können nur stummgeschaltete Videos wiedergegeben werden. Deshalb schaltet der Code das Video stumm.

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

Das Ergebnis entspricht dem vorherigen Beispiel:

- Wenn `allowed` zurückgegeben wird, sollte das Video automatisch mit Ton wiedergegeben werden; bei `allowed-muted` sollte es ohne Ton wiedergegeben werden.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das Verhalten bei der automatischen Wiedergabe des Videos ausschließlich vom Browser ab.

{{EmbedLiveSample('Test autoplay policy for a specific media element', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zur automatischen Wiedergabe für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
