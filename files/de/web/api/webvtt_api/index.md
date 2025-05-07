---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische Text-"Hinweise" bereitstellen, die zeitlich mit anderen Medien wie Video- oder Audiotracks abgestimmt sind. Die **WebVTT API** bietet Funktionen zum Definieren und Manipulieren dieser Textspuren. Die WebVTT API wird hauptsächlich zum Anzeigen von Untertiteln oder Bildunterschriften verwendet, die mit Videoinhalten überlagert werden, hat aber auch andere Verwendungszwecke: Bereitstellung von Kapitelinformationen für eine einfachere Navigation und allgemeine Metadaten, die zeitlich mit Audio- oder Videoinhalten abgestimmt sein müssen.

## Konzepte und Verwendung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel mit einem Video- oder Audiotrack abgespielt werden können, um eine Übersetzung, Transkription oder einen Überblick über den Inhalt bereitzustellen. Ein Video- oder Audiomedienelement kann Spuren verschiedener Art oder in verschiedenen Sprachen definieren, sodass Benutzer die geeigneten Spuren basierend auf ihren Vorlieben oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die angegeben werden können, sind unten aufgeführt. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

- `subtitles` bieten eine textliche Übersetzung von gesprochenem Dialog. Dies ist der Standardtyp der Textspur und, wenn verwendet, muss die Quellsprache angegeben werden.
- `captions` bieten eine Abschrift des gesprochenen Textes und können Informationen über andere Audios wie Musik oder Hintergrundgeräusche enthalten. Sie sind für hörgeschädigte Benutzer gedacht.
- `chapters` bieten hochrangige Navigationsinformationen, die es Benutzern ermöglichen, einfacher zu relevantem Inhalt zu wechseln.
- `metadata` wird für alle anderen Arten von zeitlich abgestimmten Informationen verwendet.

Die einzelnen zeitlich abgestimmten Einheiten von Textdaten innerhalb einer Spur werden als "Hinweise" bezeichnet. Jeder Hinweis hat eine Startzeit, eine Endzeit und eine textliche Nutzlast. Er kann auch "Hinweiseinstellungen" haben, die seine Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen. Schließlich kann ein Hinweis ein Label besitzen, das verwendet werden kann, um ihn für CSS-Styling auszuwählen.

Eine Textspur und Hinweise können in einer Datei im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements verbunden werden.

Alternativ können Sie mit JavaScript eine [`TextTrack`](/de/docs/Web/API/TextTrack) zu einem Medienelement hinzufügen, indem Sie [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwenden, und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) zur Spur hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Hinweise für ein bestimmtes Element, für ein bestimmtes Tag innerhalb eines Hinweises, für eine VTT-Klasse oder für einen Hinweis mit einem bestimmten Label zu stylen. Das `::cue-region` Pseudo-Element ist für das Styling von Hinweisen in einer bestimmten Region vorgesehen, wird jedoch von keinem Browser unterstützt.

Die wichtigsten WebVTT-Features können entweder über das Dateiformat oder die Web-API genutzt werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Stellt einen Hinweis dar, den Text, der in einem bestimmten Zeitschnitt der Textspur angezeigt wird, die mit einem Medienelement verbunden ist.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Stellt einen Abschnitt eines Videoelements dar, auf dem ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Stellt eine Textspur dar, die die Liste der Hinweise hält, die zusammen mit einem verbundenen Medienelement zu verschiedenen Zeitpunkten angezeigt werden sollen, während es abgespielt wird.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Hinweistypen, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein array-ähnliches Objekt, das eine dynamisch aktualisierte Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgeleitet, um alle Hinweise im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Stellt eine Liste der für ein Medienelement definierten Textspuren dar, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste dargestellt wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML-DOM-API, dies ist die Schnittstelle für die `addtrack`- und `removetrack`-Ereignisse, die ausgelöst werden, wenn eine Spur zur [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder davon entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt/entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS)-[Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) werden zum Stylen von Hinweisen in Medien mit VTT-Spuren verwendet.

- {{CSSxRef("::cue")}}
  - : Wählt Hinweise innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren aus.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudo-Element, `::cue-region`, aber dieses wird von keinem Browser unterstützt.

## Beispiele

### Verwenden der WebVTT-API zum Hinzufügen von Bildunterschriften

#### HTML

Das folgende Beispiel fügt dem Video eine neue [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Hinweise mithilfe von [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)-Methodenaufrufen hinzu, wobei konstruierte `VTTCue`-Objekte als Argumente verwendet werden.

```html
<video controls src="/shared-assets/videos/friday.mp4"></video>
```

#### CSS

```css
video {
  width: 420px;
  height: 300px;
}
```

#### JavaScript

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
track.addCue(new VTTCue(1.5, 2.9, "Tell me, is the lord of the universe in?"));
track.addCue(new VTTCue(3, 4.2, "Yes, he's in - in a bad humor"));
track.addCue(new VTTCue(4.3, 6, "Somebody must've stolen the crown jewels"));
console.log(track.cues);
```

#### Ergebnis

{{EmbedLiveSample('Using the WebVTT API to add captions','400','330')}}

### Anzeigen von VTT-Inhalten, die in einer Datei definiert sind

Dieses Beispiel zeigt, wie dieselbe Menge von Bildunterschriften zu dem im obigen Beispiel [Verwenden der WebVTT-API zum Hinzufügen von Bildunterschriften](#verwenden_der_webvtt-api_zum_hinzufügen_von_bildunterschriften) gezeigten Video hinzugefügt wird. Diesmal werden wir es jedoch deklarativ mit einem {{htmlelement("track")}}-Element tun.

Zuerst definieren wir die Bildunterschriften in einer "captions.vtt"-Datei:

```plain
WEBVTT

00:00.000 --> 00:00.900
Hildy!

00:01.000 --> 00:01.400
How are you?

00:01.500 --> 00:02.900
Tell me, is the lord of the universe in?

00:03.000 --> 00:04.200
Yes, he's in - in a bad humor

00:04.300 --> 00:06.000
Somebody must've stolen the crown jewels
```

Wir können dies dann zu einem {{HTMLElement("video")}}-Element mit dem {{HTMLElement("track")}}-Element hinzufügen. Das folgende HTML würde zu der gleichen Textspur wie im vorherigen Beispiel führen:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen anzugeben, indem die `kind`- und `srclang`-Attribute verwendet werden. Beachten Sie, dass, wenn `kind` angegeben ist, `srclang` _ebenfalls_ gesetzt werden muss. Das `default`-Attribut kann zu nur einem `<track>` hinzugefügt werden: Dies ist dasjenige, das abgespielt wird, wenn die Benutzereinstellungen keine bestimmte Sprache oder Art angeben.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
  <track kind="chapters" src="chapters_de.vtt" srclang="de" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

### Stil von WebVTT in HTML oder einem Stylesheet

Sie können WebVTT-Hinweise stylen, indem Sie Elemente mit dem {{cssxref("::cue")}}-Pseudo-Element auswählen. Dies ermöglicht es Ihnen, das Erscheinungsbild des gesamten Hinweistextes oder nur bestimmter Elemente zu ändern. In diesem Beispiel fügen wir etwas Styling zum [ersten obigen Beispiel](#verwenden_der_webvtt-api_zum_hinzufügen_von_bildunterschriften) hinzu.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist das gleiche, wie wir es zuvor gesehen haben:

```css hidden
video {
  width: 420px;
  height: 300px;
}
```

```html
<video controls src="/shared-assets/videos/friday.mp4"></video>
```

#### CSS

Zuerst verwenden wir das {{cssxref("::cue")}}-Pseudo-Element, um alle Videotext-Hinweise auszuwählen und ihnen roten Text und einen Farbverlaufs-Hintergrund zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Wir verwenden dann {{cssxref("::cue")}}, um den Text auszuwählen, der mit den `u`- und `b`-Elementen markiert wurde, und stylen ihn in Grün und Gelb.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, außer dass wir einige der Hinweistexte mit `<b>` (fett) und `<u>` (unterstreichen) Tags markiert haben. Standardmäßig würde der markierte Text fett oder unterstrichen angezeigt werden (je nach Tag), aber wir haben das {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text auch in Grün und Lila zu stylen.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
track.addCue(
  new VTTCue(1.5, 2.9, "Tell me, is the <u>lord of the universe</u> in?"),
);
track.addCue(new VTTCue(3, 4.2, "Yes, he's in - in a bad humor"));
track.addCue(
  new VTTCue(4.3, 6, "Somebody must've <b>stolen</b> the crown jewels"),
);
console.log(track.cues);
```

#### Ergebnis

{{EmbedLiveSample('Styling WebVTT in HTML or a stylesheet','400','330')}}

### Weitere Hinweise auf Styling-Beispiele

Dieses Beispiel zeigt weitere Beispiele, wie Sie Hinweistexte mit Tags versehen und dann stylen können. Die gleichen Markierungen und Stile können im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zum Anzeigen des Videos selbst ist dasselbe wie im [ersten obigen Beispiel](#verwenden_der_webvtt-api_zum_hinzufügen_von_bildunterschriften), daher zeigen wir hier nur den spezifischen Code zum Markieren und Stylen des Textes.

```css hidden
video {
  width: 420px;
  height: 300px;
}
```

```html hidden
<video controls src="/shared-assets/videos/friday.mp4"></video>
```

#### Styling nach Tag-Typ

Der erste Hinweis, den wir erstellen, wird für alle 6 Sekunden des Videos angezeigt und zeigt Text an, der mit `b`, `u`, `i` und `c` Tags markiert ist.

```js
let video = document.querySelector("video");

let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

track.addCue(
  new VTTCue(
    0,
    6,
    "Styles: Normal <b>bold</b> <u>underlined</u> <i>italic</i> <c>class</c>",
  ),
);
```

Zuerst fügen wir eine Regel hinzu, um alle Hinweise 1,2-mal größer als normal zu machen.

```css
video::cue {
  font-size: 1.2rem;
}
```

Dann stylen wir jedes der oben genannten Tags mit einer anderen Farbe.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}

video::cue(i) {
  color: red;
}

video::cue(c) {
  color: lavender;
}
```

#### Styling nach Klasse

Der zweite Hinweis wird direkt nach dem ersten angezeigt und enthält die gleichen Tags. Sie haben jedoch alle die Klasse `myclass` angewendet.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer für den spezifischen Fall von `c.myclass`, die eine blaue Textfarbe erhält.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling mit Attributen

Die nächsten zwei Hinweise werden nach zwei und dann drei Sekunden angezeigt. Der erste zeigt Text an, der mit dem `lang`-Tag für drei englische Variationen markiert ist, während der zweite ein `<v>` (Stimme) Tag mit dem Attribut "Bob" anzeigt.

```js
track.addCue(
  new VTTCue(
    2,
    6,
    "<lang en>Lang markup: 'en'</lang>  <lang en-GB>Text: 'en-GB'</lang> <lang en-US>Text: 'en-US'</lang>",
  ),
);

track.addCue(new VTTCue(3, 6, "<v Bob>Bob's voice</v>"));
```

Wir verwenden den `lang`-Attribut-Selektor, um jeder Sprachvariante eine andere Textfarbe zu geben.

```css
video::cue([lang="en"]) {
  color: lightgreen;
}

video::cue([lang="en-GB"]) {
  color: darkgreen;
}

video::cue(:lang(en-US)) {
  color: #6082b6;
}
```

Dann verwenden wir den `v`-Tag und Attribut-Selektor für `voice`, um Text in "Bob's voice" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Hinweise mit einer Farbcodierung anzeigen, die dem oben genannten Styling entspricht (wenn der Text nicht gefärbt ist, dann wird `::cue` von Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS-[`::cue` and `::cue()`](/de/docs/Web/CSS/::cue) Pseudoelemente
