---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: 1662a32f78dbecc4c36b77da820665bf4cc5f229
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische Text-"Einsätze" bieten, die zeitlich mit anderen Medien wie Video- oder Audiospuren abgestimmt sind. Die **WebVTT-API** bietet Funktionen zum Definieren und Bearbeiten dieser Textspuren. Die WebVTT-API wird hauptsächlich zum Anzeigen von Untertiteln oder Beschriftungen verwendet, die auf Videoinhalte überlagert sind, aber sie hat auch andere Verwendungen: Sie bietet Kapitelinformationen zur einfacheren Navigation und generische Metadaten, die zeitlich mit Audio- oder Videoinhalten abgestimmt sein müssen.

## Konzepte und Nutzung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel mit einer Video- oder Audiospur abgespielt werden können, um eine Übersetzung, Transkription oder Übersicht des Inhalts bereitzustellen. Ein Video- oder Audiomedienelement kann Spuren verschiedener Arten oder in verschiedenen Sprachen definieren, sodass Benutzer geeignete Spuren basierend auf ihren Vorlieben oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die spezifiziert werden können, sind `captions`, `descriptions`, `chapters`, `subtitles` oder `metadata`; die Dokumentation zum [`<track>`](/de/docs/Web/HTML/Reference/Elements/track#kind) bietet genauere Informationen darüber, was diese bedeuten. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

Die einzelnen zeitlich abgestimmten Einheiten von Textdaten innerhalb einer Spur werden als "Einsätze" bezeichnet. Jeder Einsatz hat eine Startzeit, eine Endzeit und einen Textinhalt. Er kann auch "Einsatz-Einstellungen" haben, die seine Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen. Schließlich kann ein Einsatz ein Label haben, das zur Auswahl für CSS-Styling verwendet werden kann.

Eine Textspur und Einsätze können in einer Datei mithilfe des [WebVTT-File-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements verknüpft werden.

Alternativ können Sie ein [`TextTrack`](/de/docs/Web/API/TextTrack) zu einem Medienelement in JavaScript hinzufügen, indem Sie [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwenden und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte zur Spur mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [pseudo-element](/de/docs/Web/CSS/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um Einsätze für ein bestimmtes Element, für ein bestimmtes Tag innerhalb eines Einsatzes, für eine VTT-Klasse oder für einen Einsatz mit einem bestimmten Label zu stylen. Das `::cue-region` Pseudoelement ist zur Gestaltung von Einsätzen in einer bestimmten Region gedacht, wird aber in keinem Browser unterstützt.

Die meisten wichtigen Funktionen von WebVTT können entweder über das Dateiformat oder die Web-API genutzt werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Repräsentiert einen Einsatz, der Text, der in einem bestimmten Zeitabschnitt der Textspur angezeigt wird, die mit einem Medienelement verknüpft ist.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Repräsentiert einen Teil eines Video-Elements, auf dem ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Repräsentiert eine Textspur, die die Liste der Einsätze enthält, die zusammen mit einem verknüpften Medienelement zu verschiedenen Zeitpunkten während der Wiedergabe angezeigt werden.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Einsatztarten, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein array-ähnliches Objekt, das eine dynamisch aktualisierte Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Einsätze im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Repräsentiert eine Liste der definierten Textspuren für ein Medienelement, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste dargestellt wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML DOM API, dies ist die Schnittstelle für die `addtrack`- und `removetrack`-Ereignisse, die ausgelöst werden, wenn eine Spur zur [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder daraus entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt/entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) werden verwendet, um Einsätze in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Passt Einsätze innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren an.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudoelement, `::cue-region`, aber dieses wird von keinem Browser unterstützt.

## Beispiele

### Verwendung der WebVTT-API, um Untertitel hinzuzufügen

#### HTML

Das folgende Beispiel fügt dem Video ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Einsätze mithilfe der Methode [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzu, wobei konstruierte `VTTCue`-Objekte als Argumente verwendet werden.

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

### Anzeige von VTT-Inhalten, die in einer Datei definiert sind

Dieses Beispiel zeigt, wie dieselbe Gruppe von Untertiteln zum Video im obigen Beispiel [Verwendung der WebVTT-API, um Untertitel hinzuzufügen](#verwendung_der_webvtt-api,_um_untertitel_hinzuzufügen) hinzugefügt werden kann. Diesmal werden wir es jedoch deklarativ mithilfe eines {{htmlelement("track")}}-Elements tun.

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

Wir können dies dann mit einem {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements hinzufügen. Das folgende HTML würde zur selben Textspur wie im vorherigen Beispiel führen:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen anzugeben, indem wir die Attribute `kind` und `srclang` verwenden. Beachten Sie, dass, wenn `kind` angegeben ist, `srclang` _auch_ gesetzt werden muss. Das `default`-Attribut kann nur einem `<track>` hinzugefügt werden: Dies ist dasjenige, das abgespielt wird, wenn die Benutzereinstellungen keine bestimmte Sprache oder Art festlegen.

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

Sie können WebVTT-Einsätze stylen, indem Sie Elemente mit dem {{cssxref("::cue")}} Pseudoelement auswählen. Dies ermöglicht es Ihnen, das Erscheinungsbild des gesamten Einsatztextes oder nur spezifischer Elemente zu ändern. In diesem Beispiel werden wir das Styling zum [ersten Beispiel oben](#verwendung_der_webvtt-api,_um_untertitel_hinzuzufügen) hinzufügen.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT-File-Format](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist dasselbe wie zuvor gesehen:

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

Zuerst verwenden wir das {{cssxref("::cue")}} Pseudoelement, um alle Videotexteinsätze auszuwählen und ihnen ein größeres rotes und ein gradienten Hintergrund zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}} um Text auszuwählen, der mit den Elementen `u` und `b` markiert wurde, und stylen sie grün bzw. gelb.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, außer dass wir etwas des Einsatztextes mit `<b>` (fett) und `<u>` (unterstreichen) Tags markiert haben. Standardmäßig würde der markierte Text fett oder unterstrichen angezeigt (abhängig vom Tag), aber wir haben das {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text auch grün und lila zu stylen.

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

### Weitere Beispiele für das Styling von Einsätzen

Dieses Beispiel zeigt weitere Beispiele dafür, wie Sie Einsatztext mit Tags markieren und dann stylen können. Dasselbe Markup und die Stile können im [WebVTT-File-Format](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zur Anzeige des Videos selbst sind dieselben wie im [ersten Beispiel oben](#verwendung_der_webvtt-api,_um_untertitel_hinzuzufügen), daher zeigen wir hier nur den spezifischen Code zum Markieren und Stylen des Textes.

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

Der erste Einsatz, den wir erstellen, wird während der gesamten 6 Sekunden des Videos angezeigt und zeigt Text, der mit `b`, `u`, `i` und `c` Tags markiert ist.

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

Zuerst fügen wir eine Regel hinzu, um alle Einsätze 1,2-mal größer als normal zu machen.

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

Der zweite Einsatz wird direkt nach dem ersten angezeigt und enthält dieselben Tags. Allerdings ist allen die Klasse `myclass` zugewiesen.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer im spezifischen Fall von `c.myclass`, dem eine blaue Textfarbe zugewiesen wird.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling mit Attributen

Die nächsten beiden Einsätze werden nach zwei und dann drei Sekunden angezeigt. Der erste zeigt Text, der mit dem `lang` Tag für drei englische Lokalvarianten markiert ist, während der zweite ein `<v>` (voice) Tag mit dem Attribut "Bob" anzeigt.

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

Wir verwenden den `lang` Attribut-Selektor, um jeder Sprachvariante eine andere Textfarbe zu geben.

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

Dann verwenden wir den `v` Tag und den Attribut-Selektor für `voice`, um Text in "Bobs Stimme" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Einsätze mit Farbkennzeichnung entsprechend dem obigen Styling anzeigen (wenn der Text nicht gefärbt ist, dann wird `::cue` von Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudoelemente
