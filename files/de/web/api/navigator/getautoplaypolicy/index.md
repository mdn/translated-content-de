---
title: "Navigator: Methode getAutoplayPolicy()"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`getAutoplayPolicy()`** Methode der _Autoplay Policy Detection API_ liefert Informationen darüber, ob das [automatische Abspielen](/de/docs/Web/Media/Autoplay_guide) von Media-Elementen und Audiokontexten erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist.

Anwendungen können diese Informationen nutzen, um ein geeignetes Benutzererlebnis zu bieten. Zum Beispiel, wenn die Benutzeragentenrichtlinie nur das automatische Abspielen von nicht hörbaren Inhalten zulässt, könnte die Anwendung Videos stummschalten, damit sie dennoch automatisch abgespielt werden können.

Die Methode kann verwendet werden, um entweder die allgemeine Autoplay-Richtlinie für alle Elemente eines bestimmten Typs im Dokument oder für bestimmte Media-Elemente oder Audiokontexte zu erhalten.

## Syntax

```js-nolint
// Testen der Autoplay-Richtlinie für eine spezielle Media-Abspiel-Funktion
getAutoplayPolicy(type)

// Testen der Autoplay-Unterstützung für ein spezifisches Element oder einen Kontext
getAutoplayPolicy(element)
getAutoplayPolicy(context)
```

### Parameter

Die Methode muss mit einem (und nur einem) der folgenden drei Parameter aufgerufen werden:

- `type` {{optional_inline}}

  - : Ein String, der das Media-Abspiel-_Merkmal_ angibt, für das die allgemeine Autoplay-Richtlinie benötigt wird.

    Die unterstützten Werte sind:

    - `mediaelement`

      - : Abfragen der allgemeinen Autoplay-Richtlinie für Media-Elemente im Dokument.
        Media-Elemente sind von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) abgeleitete Objekte wie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowie deren entsprechende Tags {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

    - `audiocontext`

      - : Abfragen der allgemeinen Autoplay-Richtlinie für [Web Audio API](/de/docs/Web/API/Web_Audio_API) Player im Dokument.

- `element` {{optional_inline}}

  - : Ein spezifisches Media-Element.
    Dies muss ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) sein, einschließlich abgeleiteter Elemente wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : Ein spezifischer [`AudioContext`](/de/docs/Web/API/AudioContext).

### Rückgabewert

Ein String, der die Autoplay-Richtlinie für den angegebenen Medientyp, das Element oder den Kontext angibt. Dies wird ein String mit einem der folgenden Werte sein:

- `allowed`
  - : Autoplay ist erlaubt.
- `allowed-muted`
  - : Autoplay ist nur für nicht hörbare Medien erlaubt.
    Dies schließt Medien ohne Audiospur oder mit stummgeschaltetem Audio ein.
- `disallowed`
  - : Autoplay ist nicht erlaubt.

Beachten Sie, dass die für einen `type`-Parameter zurückgegebene Autoplay-Richtlinie die _allgemeine_ Richtlinie für Elemente des angegebenen Typs ist.
Beim Laden der Seite haben alle Elemente eines Typs die gleiche Richtlinie wie der Typ.
Sobald der Benutzer mit der Seite/Website interagiert hat, können in einigen Browsern einzelne Elemente eine andere Richtlinie als der entsprechende Typ haben.

### Ausnahmen

- `TypeError`
  - : Das der Methode übergebene Objekt ist kein erlaubter Typ.
    Erlaubte Typen sind [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (oder ein abgeleitetes Element wie [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)) oder [`AudioContext`](/de/docs/Web/API/AudioContext).

## Beschreibung

"Autoplay" bezieht sich auf jede Funktion, die Inhalte ohne spezifische Anforderung durch den Benutzer automatisch abspielt.
Dies schließt das `autoplay` Attribut in den HTML [`<video>`](/de/docs/Web/HTML/Element/video#autoplay) und [`<audio>`](/de/docs/Web/HTML/Element/audio#autoplay) Elementen ein sowie die Verwendung von JavaScript-Code, um die Wiedergabe ohne Benutzereingriff zu starten.

Benutzeragenten blockieren häufig das automatische Abspielen oder erlauben dies nur für nicht hörbare Inhalte, da unerwartete Geräusche beim ersten Laden einer Seite ein störendes und unangenehmes Benutzererlebnis verursachen können.
Die Mechanismen zur Bestimmung, ob Inhalte automatisch abgespielt werden können oder nicht, oder nur für nicht hörbare Inhalte, unterscheiden sich zwischen Benutzeragenten.

Die **`getAutoplayPolicy()`** Methode bietet einen standardisierten Mechanismus, um die Richtlinie eines bestimmten Benutzeragenten für das automatische Abspielen eines bestimmten Typs oder Elements von Inhalten zu ermitteln.
Dies ermöglicht eine Anpassung der Anwendung, wie z.B. das automatische Stummschalten von Videos auf Websites, auf denen das automatische Abspielen von hörbaren Inhalten nicht erlaubt ist, oder die Anpassung der Anwendung, um ohne Autoplay zu funktionieren.

Die empfohlene Verwendung der Methode ist, sie _beim Laden der Seite_ (oder bevor die Wiedergabeelemente erstellt werden) aufzurufen, um den Typ des zu überprüfenden Merkmals anzugeben und dann die Autoplay-Einstellungen der Media-Elemente basierend auf dem Ergebnis zu konfigurieren.
Zum Beispiel, wenn die Anwendung Video-Elemente, die eine Audiospur haben, automatisch abspielen möchte, könnte man den folgenden Code verwenden, um das Video stummzuschalten, wenn nur nicht hörbare Inhalte abgespielt werden dürfen.

```js
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // Nichts tun. Der Inhalt kann automatisch abgespielt werden.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Das Video stummschalten, damit es automatisch abgespielt werden kann.
} else {
  // Autoplay nicht erlaubt.
  // Eine Play-Taste zum Video-Element hinzufügen.
}
```

Die Methode kann auch aufgerufen werden, um die Autoplay-Richtlinie für ein spezifisches Media-Element oder einen Audio-Kontext zu überprüfen.
Wie unten gezeigt, sieht der Code genauso aus, außer dass man anstelle des `type`-Strings das spezifische Element übergibt.

```js
const video = document.getElementById("video_element_id");
if (navigator.getAutoplayPolicy(video) === "allowed") {
  // Nichts tun. Der Inhalt kann automatisch abgespielt werden.
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
  // Das Video stummschalten, damit es automatisch abgespielt werden kann.
} else {
  // Autoplay nicht erlaubt.
  // Eine Play-Taste zum Video-Element hinzufügen.
}
```

Beim Laden der Seite, bevor der Benutzer mit der Seite oder Website interagiert hat, wird die Autoplay-Richtlinie für den Typ und die einzelnen Elemente gleich sein.
Nachdem der Benutzer mit der Seite, der Website oder den spezifischen Elementen interagiert hat, kann sich die Autoplay-Richtlinie für den gesamten `type` ändern.
Es ist auch möglich, dass sich die Richtlinie eines spezifischen Elements ändert, selbst wenn die allgemeine Richtlinie für den `type` gleich bleibt.

Es gibt keine Möglichkeit, benachrichtigt zu werden, dass sich die Autoplay-Richtlinie geändert hat.
Aus diesem Grund werden Sie in der Regel die Richtlinie nur beim Laden der Seite oder vor dem Versuch, Inhalte abzuspielen, überprüfen, obwohl Sie sie jederzeit für einen Typ oder ein Element prüfen können.

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
  log.textContent = "navigator.getAutoplayPolicy() wird nicht unterstützt.";
} else {
  log.textContent = "navigator.getAutoplayPolicy() wird unterstützt.";
}
```

Das Ergebnis der Ausführung des Codes auf dieser Seite ist:

{{EmbedLiveSample('Überprüfen, ob die Funktion unterstützt wird', '', '50')}}

### Testen der Autoplay-Richtlinie für den Medienelementtyp

Dieses Beispiel zeigt, wie Sie die Autoplay-Richtlinie für den Medienelementtyp überprüfen können.

Der Code erstellt ein Video-Element, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat und standardmäßig nicht stummgeschaltet ist.
Wenn die Autoplay-Richtlinie "allowed-muted" lautet, wird das Video stummgeschaltet, um das Abspielen zu ermöglichen.

#### HTML

Das untenstehende HTML hat ein `div`-Element, das als Berichtslog verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat.
Dies sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abgespielt werden, wenn das automatische Abspielen nicht blockiert ist.

```html
<div id="reportResult"></div>
<!-- Einfaches Video-Beispiel -->
<!-- 'Big Buck Bunny' lizenziert unter CC 3.0 von der Blender Foundation. Gehostet von archive.org -->
<!-- Poster von peach.blender.org -->
<video
  id="bunny_vid"
  autoplay
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Leider unterstützt Ihr Browser keine eingebetteten Videos, aber keine Sorge, Sie können
  <a href="https://archive.org/details/BigBuckBunny_124">es herunterladen</a> und
  es mit Ihrem bevorzugten Videoplayer ansehen!
</video>
```

#### JavaScript

Der Code berichtet, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls ja, die Richtlinie für Medienelemente.

Wenn die Richtlinie `allowed-muted` ist, können nur stummgeschaltete Videos abgespielt werden.
In diesem Fall fügen wir etwas Text hinzu, der erklärt, was passiert, und schalten das Video stumm.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent =
    "navigator.getAutoplayPolicy() wird nicht unterstützt. Es kann je nach Browser automatisch abspielen oder nicht!";
} else {
  log.textContent = `Autoplay-Richtlinie für Medienelemente ist: ${navigator.getAutoplayPolicy(
    "mediaelement",
  )}. `;

  if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
    // Das Video stummschalten, damit es automatisch abgespielt werden kann
    video.muted = true;
    log.textContent += "Video wurde stummgeschaltet, um das automatische Abspielen zu ermöglichen.";
  }
}
```

Beachten Sie, dass Sie ähnlich nach `allowed` und `disallowed` suchen könnten.

#### Ergebnis

Das Video wird unten zusammen mit Informationen angezeigt, ob die `getAutoplayPolicy()` Methode unterstützt wird und, falls ja, welche Richtlinie gilt.

Wenn `getAutoplayPolicy()` unterstützt wird und die Richtlinie `allowed` ist, wird das Video automatisch mit Ton abgespielt.
Wenn die Richtlinie `allowed-muted` ist, wird das Video ohne Ton abgespielt.

{{EmbedLiveSample('Testen der Autoplay-Richtlinie für Medienelemente', '', '400')}}

Beachten Sie, dass wenn `getAutoplayPolicy()` nicht unterstützt wird, das Video entweder mit Ton automatisch abgespielt wird oder nicht.
Der Code hat keine Kontrolle über dieses Verhalten: Sie sind dem Browser-Implementierung ausgeliefert!

### Testen der Autoplay-Richtlinie für ein spezifisches Medienelement

Dieses Beispiel zeigt, wie Sie überprüfen können, ob ein bestimmtes Medienelement automatisch abgespielt wird.
Es ist fast genau das gleiche wie das vorherige Beispiel (eine Überprüfung eines `AudioContext` wäre auch ähnlich).
Beachten Sie, dass es möglich ist, dass spezifische Elemente automatisch abgespielt werden, auch wenn eine Prüfung des `mediaelement`-Typs anzeigt, dass Autoplay `disallowed` ist; mit anderen Worten, eine Überprüfung des spezifischen Elements ist zuverlässiger (obwohl dies beim Laden der Seite keine Rolle spielt).

Der Code erstellt ein Video-Element, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat.
Wenn die Autoplay-Richtlinie "allowed-muted" lautet, wird das Video stummgeschaltet, um das Abspielen zu ermöglichen.

#### HTML

Das untenstehende HTML hat ein `div`-Element, das als Berichtslog verwendet wird, und zeigt auch ein [`<video>`](/de/docs/Web/HTML/Element/video) an, das das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut hat.
Dies sollte standardmäßig nicht stummgeschaltet sein und sollte automatisch abgespielt werden, wenn das automatische Abspielen nicht blockiert ist.

```html
<div id="reportResult"></div>
<!-- Einfaches Video-Beispiel -->
<!-- 'Big Buck Bunny' lizenziert unter CC 3.0 von der Blender Foundation. Gehostet von archive.org -->
<!-- Poster von peach.blender.org -->
<video
  id="bunny_vid"
  autoplay
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Leider unterstützt Ihr Browser keine eingebetteten Videos, aber keine Sorge, Sie können
  <a href="https://archive.org/details/BigBuckBunny_124">es herunterladen</a> und
  es mit Ihrem bevorzugten Videoplayer ansehen!
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
    "navigator.getAutoplayPolicy() wird nicht unterstützt. Es kann je nach Browser automatisch abspielen oder nicht!";
} else {
  // Hier übergeben wir das HTMLVideoElement zur Prüfung
  log.textContent = `navigator.getAutoplayPolicy(video) == ${navigator.getAutoplayPolicy(
    "mediaelement",
  )}`;

  if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
    // Das Video stummschalten, damit es automatisch abgespielt werden kann
    video.muted = true;
    log.textContent += "Video wurde stummgeschaltet, um das automatische Abspielen zu ermöglichen.";
  }
}
```

#### Ergebnis

Das Ergebnis ist dasselbe wie im vorherigen Beispiel:

- Das Video sollte automatisch mit Ton abgespielt werden, wenn `allowed` zurückgegeben wird, und ohne Ton, wenn `allowed-muted` zurückgegeben wird.
- Wenn `getAutoplayPolicy()` nicht unterstützt wird, hängt das automatische Abspielen des Videos nur vom Browser ab.

{{EmbedLiveSample('Testen der Autoplay-Richtlinie für ein spezifisches Medienelement', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
