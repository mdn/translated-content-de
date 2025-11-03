---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische textliche "Cues" enthalten, die zeitlich mit anderen Medien wie Video- oder Audiospuren ausgerichtet sind. Die **WebVTT API** bietet Funktionen zum Definieren und Manipulieren dieser Textspuren.
Die WebVTT API wird hauptsächlich für die Anzeige von Untertiteln oder Beschriftungen verwendet, die mit Videoinhalten überlagert sind. Sie hat jedoch auch andere Verwendungszwecke: Bereitstellung von Kapitelinformationen für eine leichtere Navigation und allgemeine Metadaten, die zeitlich mit Audio- oder Videoinhalten abgestimmt sein müssen.

## Konzepte und Verwendung

Eine Textspur ist ein Container für zeitlich ausgerichtete Textdaten, die parallel zu einer Video- oder Audiospur abgespielt werden können, um eine Übersetzung, Transkription oder Übersicht über den Inhalt bereitzustellen.
Ein Video- oder Audiomedienelement kann Spuren verschiedener Art oder in verschiedenen Sprachen definieren, sodass Benutzer geeignete Spuren basierend auf ihren Vorlieben oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die angegeben werden können, sind `captions`, `descriptions`, `chapters`, `subtitles` oder `metadata`; die [`<track>`](/de/docs/Web/HTML/Reference/Elements/track#kind) Dokumentation enthält weitere Informationen darüber, was sie bedeuten.
Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

Die einzelnen zeitlich ausgerichteten Einheiten von Textdaten innerhalb einer Spur werden als "Cues" bezeichnet.
Jeder Cue hat eine Startzeit, eine Endzeit und eine Textnutzlast.
Er kann auch "Cue-Einstellungen" haben, die seine Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen.
Schließlich kann ein Cue ein Label haben, das verwendet werden kann, um es für CSS-Styling auszuwählen.

Eine Textspur und Cues können in einer Datei unter Verwendung des [WebVTT-Dateiformats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements verknüpft werden.

Alternativ können Sie eine [`TextTrack`](/de/docs/Web/API/TextTrack) zu einem Medienelement in JavaScript unter Verwendung von [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzufügen und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) zur Spur hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Cues für ein bestimmtes Element, für einen bestimmten Tag innerhalb eines Cues, für eine VTT-Klasse oder für ein Cue mit einem bestimmten Label zu stylen.
Das `::cue-region`-Pseudoelement ist vorgesehen, um Cues in einer bestimmten Region zu stylen, wird jedoch von keinem Browser unterstützt.

Die wichtigsten WebVTT-Funktionen können sowohl über das Dateiformat als auch über die Web-API abgerufen werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Repräsentiert ein Cue, den Text, der in einem bestimmten Zeitfenster der Textspur angezeigt wird, die mit einem Medienelement verbunden ist.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Repräsentiert einen Teil eines Videoelements, auf dem ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Repräsentiert eine Textspur, die die Liste der anzuzeigenden Cues zusammen mit einem zugehörigen Medienelement zu verschiedenen Zeitpunkten während der Wiedergabe enthält.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Cue-Typen, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein array-ähnliches Objekt, das eine dynamisch aktualisierende Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt.
    Ein Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Cues im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Repräsentiert eine Liste der für ein Medienelement definierten Textspuren, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste repräsentiert wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML DOM-API, dies ist die Schnittstelle für die `addtrack` und `removetrack`-Ereignisse, die ausgelöst werden, wenn eine Spur zur [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder daraus entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt oder daraus entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) werden verwendet, um Cues in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Entspricht Cues innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudoelement, `::cue-region`, aber dieses wird von keinem Browser unterstützt.

## Beispiele

### Verwendung der WebVTT-API zum Hinzufügen von Untertiteln

#### HTML

Das folgende Beispiel fügt dem Video eine neue [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Cues mit den Methodenaufrufen von [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzu, wobei konstruierte `VTTCue`-Objekte als Argumente verwendet werden.

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

Dieses Beispiel zeigt, wie dieselbe Gruppe von Untertiteln zu dem oben im Beispiel [Verwendung der WebVTT-API zum Hinzufügen von Untertiteln](#verwendung_der_webvtt-api_zum_hinzufügen_von_untertiteln) gezeigten Video hinzugefügt werden kann. Dieses Mal werden wir es jedoch deklarativ mit einem {{htmlelement("track")}}-Element tun.

Zuerst definieren wir die Untertitel in einer "captions.vtt"-Datei:

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

Dann können wir dies zu einem {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements hinzufügen.
Das folgende HTML würde in der gleichen Textspur wie im vorherigen Beispiel resultieren:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Tracks in mehreren Sprachen anzugeben, wobei die Attribute `kind` und `srclang` verwendet werden. Beachten Sie, dass, wenn `kind` angegeben ist, `srclang` _auch_ gesetzt sein muss.
Das Attribut `default` kann nur zu einem `<track>` hinzugefügt werden: Dies ist dasjenige, das abgespielt wird, wenn Benutzereinstellungen keine bestimmte Sprache oder Art vorgeben.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
  <track kind="chapters" src="chapters_de.vtt" srclang="de" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

### Styling von WebVTT in HTML oder einem Stylesheet

Sie können WebVTT-Cues stylen, indem Sie Elemente mit dem {{cssxref("::cue")}}-Pseudoelement auswählen.
Dies ermöglicht es Ihnen, das Erscheinungsbild aller Cue-Texte oder nur spezifischer Elemente zu ändern. In diesem Beispiel werden wir dem [oben genannten ersten Beispiel](#verwendung_der_webvtt-api_zum_hinzufügen_von_untertiteln) einige Stile hinzufügen.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist dasselbe wie zuvor gezeigt:

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

Zuerst verwenden wir das {{cssxref("::cue")}}-Pseudoelement, um alle Video-Text-Cues auszuwählen und ihnen eine größere rote und eine Farbverlauf-Hintergrundfarbe zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}}, um Text auszuwählen, der mit den Elementen `u` und `b` markiert wurde, und sie grün und gelb zu stylen.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, außer dass wir einige der Cue-Texte mit den Tags `<b>` (fett) und `<u>` (unterstreichen) ausgezeichnet haben.
Standardmäßig würde der ausgezeichnete Text als fett oder unterstrichen angezeigt (abhängig vom Tag), aber wir haben das {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text zusätzlich grün und lila zu stylen, jeweils.

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

### Weitere Beispiele zum Styling von Cues

Dieses Beispiel zeigt weitere Beispiele dafür, wie Sie Cue-Texte mit Tags auszeichnen und dann stylen können.
Die gleiche Auszeichnung und Stile können im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zum Anzeigen des Videos selbst ist dasselbe wie im [oben genannten ersten Beispiel](#verwendung_der_webvtt-api_zum_hinzufügen_von_untertiteln), sodass hier nur der spezifische Code zum Auszeichnen und Stylen des Textes gezeigt wird.

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

Das erste Cue, das wir erstellen, wird für alle 6 Sekunden des Videos angezeigt und zeigt Texte mit `b`, `u`, `i` und `c` Tags an.

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

Zuerst fügen wir eine Regel hinzu, um alle Cues 1,2-mal größer als normal zu machen.

```css
video::cue {
  font-size: 1.2rem;
}
```

Dann stylen wir jede der oben genannten Tags mit einer anderen Farbe.

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

Das zweite Cue wird direkt nach dem ersten angezeigt und enthält die gleichen Tags. Sie haben jedoch alle eine Klasse `myclass` zugeordnet.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer im spezifischen Fall von `c.myclass`, das mit einer blauen Textfarbe versehen wird.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling unter Verwendung von Attributen

Die nächsten zwei Cues werden nach zwei bzw. drei Sekunden angezeigt.
Das erste zeigt Texte mit dem `lang`-Tag für drei englische Lokalitäten, während das zweite ein `<v>` (Stimme)-Tag mit dem Attribut "Bob" anzeigt.

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

Wir verwenden den `lang`-Attributselektor, um jeder Sprachvariante eine andere Textfarbe zu geben.

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

Dann verwenden wir den `v`-Tag und den Attributselektor für `voice`, um den Text in "Bobs Stimme" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Cues mit einer Farbkennzeichnung anzeigen, die mit dem obigen Styling übereinstimmt (wenn der Text nicht gefärbt ist, wird `::cue` von Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/Reference/Selectors/::cue) Pseudoelemente
