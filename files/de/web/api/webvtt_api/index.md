---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische Text-"Hinweise" bereitstellen, die zeitlich mit anderen Medien, wie Video- oder Audiospuren, synchronisiert sind. Die **WebVTT API** bietet Funktionen zum Definieren und Manipulieren dieser Textspuren. Die WebVTT API wird hauptsächlich zum Anzeigen von Untertiteln oder Beschriftungen verwendet, die über Videoinhalten eingeblendet werden, hat aber auch andere Verwendungszwecke: Bereitstellung von Kapitelinformationen für eine einfachere Navigation und generische Metadaten, die zeitlich mit Audio- oder Videoinhalten synchronisiert werden müssen.

## Konzepte und Nutzung

Eine Textspur ist ein Container für zeitlich synchronisierte Textdaten, die parallel zu einer Video- oder Audiospur abgespielt werden können, um eine Übersetzung, Transkription oder Übersicht über den Inhalt bereitzustellen. Ein Video- oder Audiomedienelement kann Spuren verschiedener Art oder in verschiedenen Sprachen definieren, wodurch Benutzer geeignete Spuren basierend auf ihren Vorlieben oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die spezifiziert werden können, sind `captions`, `descriptions`, `chapters`, `subtitles` oder `metadata`; die [`<track>`](/de/docs/Web/HTML/Reference/Elements/track#kind) Dokumentation enthält mehr Informationen darüber, was sie bedeuten. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

Die einzelnen zeitlich synchronisierten Einheiten von Textdaten innerhalb einer Spur werden als "cues" bezeichnet. Jede Cue hat eine Startzeit, eine Endzeit und einen Textinhalt. Sie kann auch "cue settings" haben, die ihre Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen. Schließlich kann eine Cue ein Label haben, das zur Auswahl für CSS-Styling verwendet werden kann.

Eine Textspur und Cues können in einer Datei unter Verwendung des [WebVTT Dateiformats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements verknüpft werden.

Alternativ können Sie ein [`TextTrack`](/de/docs/Web/API/TextTrack) einem Medienelement in JavaScript mit [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzufügen und anschließend einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte der Spur mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Cues für ein bestimmtes Element, für ein bestimmtes Tag innerhalb einer Cue, für eine VTT-Klasse oder für eine Cue mit einem bestimmten Label zu stylen. Das Pseudo-Element `::cue-region` ist zur Gestaltung von Cues in einer bestimmten Region vorgesehen, wird jedoch in keinem Browser unterstützt.

Die wichtigsten WebVTT-Funktionen können entweder über das Dateiformat oder die Web-API abgerufen werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Repräsentiert eine Cue, den Text, der in einem bestimmten Zeitabschnitt der Textspur eines Medienelements angezeigt wird.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Repräsentiert einen Bereich eines Videoelements, in dem eine [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Repräsentiert eine Textspur, die die Liste der Cues hält, die zusammen mit einem zugehörigen Medienelement bei verschiedenen Zeitpunkten während der Wiedergabe angezeigt werden.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Cue-Typen, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein array-ähnliches Objekt, das eine dynamisch aktualisierte Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Cues im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Repräsentiert eine Liste der für ein Medienelement definierten Textspuren, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste dargestellt wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML-DOM-API, ist dies die Schnittstelle für die `addtrack` und `removetrack` Ereignisse, die ausgelöst werden, wenn eine Spur zu [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder davon entfernt wird (oder allgemein, wenn eine Spur zu einem HTML-Medienelement hinzugefügt/entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) werden verwendet, um Cues in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Passt Cues innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren an.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudo-Element, `::cue-region`, aber dieses wird von keinem Browser unterstützt.

## Beispiele

### Verwenden der WebVTT API, um Untertitel hinzuzufügen

#### HTML

Das folgende Beispiel fügt dem Video ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und dann Cues mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)-Methodenaufrufen, wobei konstruierte `VTTCue`-Objekte als Argumente verwendet werden.

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

Dieses Beispiel zeigt, wie man denselben Satz von Untertiteln zum Video hinzufügt, wie im obigen [Verwenden der WebVTT API, um Untertitel hinzuzufügen](#verwenden_der_webvtt_api,_um_untertitel_hinzuzufügen)-Beispiel. Dieses Mal werden wir es jedoch deklarativ mit einem {{htmlelement("track")}}-Element machen.

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

Wir können dies dann einem {{HTMLElement("video")}}-Element mit dem {{HTMLElement("track")}}-Element hinzufügen. Das folgende HTML würde zur selben Textspur führen wie im vorherigen Beispiel:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen zu spezifizieren, unter Verwendung der `kind` und `srclang` Attribute. Beachten Sie, dass, wenn `kind` spezifiziert ist, `srclang` _auch_ gesetzt werden muss. Das `default`-Attribut kann nur zu einem `<track>` hinzugefügt werden: Dieses wird abgespielt, wenn die Benutzereinstellungen keine bestimmte Sprache oder Art angeben.

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

Sie können WebVTT-Cues stylen, indem Sie Elemente mit dem {{cssxref("::cue")}} Pseudo-Element auswählen. Dies ermöglicht es Ihnen, das Erscheinungsbild aller Cue-Texte oder nur bestimmter Elemente zu ändern. In diesem Beispiel werden wir einige Stile zum [ersten Beispiel oben](#verwenden_der_webvtt_api,_um_untertitel_hinzuzufügen) hinzufügen.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist das gleiche wie zuvor gesehen:

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

Zuerst verwenden wir das {{cssxref("::cue")}} Pseudo-Element, um alle Videotext-Cues auszuwählen und ihnen größere rote und einen Verlaufshintergrund zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}} um Text auszuwählen, der mit den `u` und `b` Elementen markiert wurde und sie grün und gelb zu stylen.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, mit der Ausnahme, dass wir einige der Cue-Texte mit `<b>` (fett) und `<u>` (unterstrichen) Tags markiert haben. Standardmäßig würde der markierte Text fett oder unterstrichen angezeigt werden (je nach Tag), aber wir haben das {{cssxref("::cue")}}-Element im vorherigen Abschnitt verwendet, um den Text auch grün und lila zu stylen.

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

### Weitere Beispiele zum Cue-Styling

Dieses Beispiel zeigt weitere Beispiele, wie Cue-Text mit Tags markiert und dann gestylt werden kann. Das gleiche Markup und die gleichen Stile können im [WebVTT Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zur Anzeige des Videos selbst ist das gleiche wie im [ersten Beispiel oben](#verwenden_der_webvtt_api,_um_untertitel_hinzuzufügen), daher zeigen wir hier nur den spezifischen Code zum Markieren und Stylen des Textes.

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

Die erste Cue, die wir erstellen, wird für alle 6 Sekunden des Videos angezeigt und zeigt Text, der mit `b`, `u`, `i` und `c` Tags markiert ist.

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

Zuerst fügen wir eine Regel hinzu, um alle Cues 1,2 mal größer als normal zu machen.

```css
video::cue {
  font-size: 1.2rem;
}
```

Dann stylen wir jeden der oben genannten Tags mit einer anderen Farbe.

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

Die zweite Cue wird direkt nach der ersten angezeigt und enthält dieselben Tags. Diese haben jedoch alle eine Klasse `myclass` zugewiesen.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer für den spezifischen Fall von `c.myclass`, der eine blaue Textfarbe erhält.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling durch Attribute

Die nächsten zwei Cues werden nach zwei und dann drei Sekunden angezeigt. Die erste zeigt Text, der mit dem `lang`-Tag für drei Lokalisierungen von Englisch markiert ist, während die zweite ein `<v>` (Stimme) Tag mit dem "Bob"-Attribut anzeigt.

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

Dann verwenden wir das `v`-Tag und den Attributselektor für `voice`, um den Text in "Bobs Stimme" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Cues mit einer Farbkennzeichnung anzeigen, die dem obigen Styling entspricht (wenn der Text nicht gefärbt ist, dann wird `::cue` in Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/Reference/Selectors/::cue) Pseudo-Elemente
