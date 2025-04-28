---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische Text-"Cues" bereitstellen, die zeitlich auf andere Medien wie Video- oder Audiospuren abgestimmt sind. Die **WebVTT-API** bietet Funktionalitäten zum Definieren und Manipulieren dieser Textspuren. Die WebVTT-API wird hauptsächlich zur Anzeige von Untertiteln verwendet, die mit Videoinhalten überlagert werden, hat aber auch andere Verwendungszwecke: Bereitstellung von Kapitelinformationen für eine einfachere Navigation und generische Metadaten, die zeitlich mit Audio- oder Videoinhalten abgestimmt werden müssen.

## Konzepte und Verwendung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel zu einer Video- oder Audiospur wiedergegeben werden können, um eine Übersetzung, Transkription oder Übersicht über den Inhalt bereitzustellen. Ein Video- oder Audiomedienelement kann Spuren verschiedener Arten oder in verschiedenen Sprachen definieren, sodass Benutzer geeignete Spuren entsprechend ihren Vorlieben oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die angegeben werden können, sind unten aufgelistet. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

- `subtitles` bieten eine textliche Übersetzung des gesprochenen Dialogs. Dies ist der Standardtyp der Textspur, und wenn er verwendet wird, muss die Ausgangssprache angegeben werden.
- `captions` bieten eine Transkription des gesprochenen Textes und können Informationen über andere Audioelemente wie Musik oder Hintergrundgeräusche enthalten. Sie sind für hörgeschädigte Benutzer gedacht.
- `chapters` bieten Navigation auf hoher Ebene, sodass Benutzer leichter zu relevantem Inhalt wechseln können.
- `metadata` wird für alle anderen Arten von zeitlich abgestimmten Informationen verwendet.

Die einzelnen zeitlich abgestimmten Einheiten der Textdaten innerhalb einer Spur werden als "Cues" bezeichnet. Jeder Cue hat eine Startzeit, eine Endzeit und eine texteigene Nutzlast. Er kann auch "Cue-Einstellungen" haben, die seine Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen. Schließlich kann ein Cue ein Label haben, das zur Auswahl für CSS-Styling verwendet werden kann.

Eine Textspur und Cues können in einer Datei unter Verwendung des [WebVTT-Dateiformats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann einem bestimmten {{HTMLElement("video")}}-Element zugeordnet werden, indem das {{HTMLElement("track")}}-Element verwendet wird.

Alternativ können Sie ein [`TextTrack`](/de/docs/Web/API/TextTrack) zu einem Medienelement in JavaScript hinzufügen, indem Sie [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwenden und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) zur Spur hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Cues für ein bestimmtes Element, für ein bestimmtes Tag innerhalb eines Cues, für eine VTT-Klasse oder für ein Cue mit einem bestimmten Label zu stylen. Das Pseudoelement `::cue-region` ist für das Styling von Cues in einer bestimmten Region gedacht, wird jedoch von keinem Browser unterstützt.

Die wichtigsten WebVTT-Funktionen sind entweder über das Dateiformat oder die Web-API zugänglich.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Repräsentiert ein Cue, den Text, der in einem bestimmten Zeitabschnitt der Textspur angezeigt wird, die mit einem Medienelement verknüpft ist.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Repräsentiert einen Teil eines Videoelements, auf den ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Stellt eine Textspur dar, die die Liste der anzuzeigenden Cues zusammen mit einem zugehörigen Medienelement zu verschiedenen Zeitpunkten während der Wiedergabe enthält.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Cue-Typen, wie zum Beispiel [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein arrayähnliches Objekt, das eine dynamisch aktualisierte Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird aus [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Cues im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Repräsentiert eine Liste der für ein Medienelement definierten Textspuren, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste repräsentiert wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML-DOM-API, dies ist die Schnittstelle für die `addtrack`- und `removetrack`-Events, die ausgelöst werden, wenn eine Spur zur [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt/entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) werden verwendet, um Cues in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Passt Cues innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren an.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudoelement, `::cue-region`, aber dieses wird von keinem Browser unterstützt.

## Beispiele

### Verwenden der WebVTT-API, um Untertitel hinzuzufügen

#### HTML

Das folgende Beispiel fügt dem Video ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Cues mit Hilfe von Aufrufen der [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)-Methode hinzu, wobei konstruierte `VTTCue`-Objekte als Argumente verwendet werden.

```html
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
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

Dieses Beispiel zeigt, wie dieselbe Menge an Untertiteln zu dem Video aus dem obigen Beispiel [Verwenden der WebVTT-API, um Untertitel hinzuzufügen](#verwenden_der_webvtt-api,_um_untertitel_hinzuzufügen) hinzugefügt wird. Diesmal werden wir es jedoch deklarativ mit einem {{htmlelement("track")}}-Element tun.

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

Dann können wir dies einem {{HTMLElement("video")}}-Element mit dem {{HTMLElement("track")}}-Element hinzufügen. Das folgende HTML würde in der gleichen Textspur wie im vorherigen Beispiel resultieren:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen zu spezifizieren, indem wir die Attribute `kind` und `srclang` verwenden. Beachten Sie, dass, wenn `kind` angegeben ist, `srclang` _muss_ ebenfalls gesetzt sein. Das `default`-Attribut darf nur einer `<track>` hinzugefügt werden: dies ist die, die abgespielt wird, wenn Benutzereinstellungen keine bestimmte Sprache oder Art spezifizieren.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
  <track kind="chapters" src="chapters_de.vtt" srclang="de" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

### Stylen von WebVTT in HTML oder einem Stylesheet

Sie können WebVTT-Cues durch die Auswahl von Elementen mit dem {{cssxref("::cue")}} Pseudoelement stylen. Dies ermöglicht es Ihnen, das Erscheinungsbild des gesamten Cue-Texts oder nur bestimmter Elemente zu ändern. In diesem Beispiel fügen wir einige Stile zum [ersten Beispiel oben](#verwenden_der_webvtt-api,_um_untertitel_hinzuzufügen) hinzu.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist das gleiche wie zuvor:

```css hidden
video {
  width: 420px;
  height: 300px;
}
```

```html
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

#### CSS

Zuerst verwenden wir das {{cssxref("::cue")}}-Pseudoelement, um alle Video-Text-Cues auszuwählen und ihnen eine größere rote und eine Verläufshintergrundfarbe zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}}, um Text auszuwählen, der mit den `u`- und `b`-Elementen markiert wurde, und stylen ihn grün und gelb.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, mit der Ausnahme, dass wir einige der Cue-Texte mit `<b>` (fett) und `<u>` (unterstrichen) Tags markiert haben. Standardmäßig würde der markierte Text fett oder unterstrichen angezeigt (abhängig vom Tag), aber wir haben {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text auch grün und violett zu stylen.

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

### Weitere Cue-Styling-Beispiele

Dieses Beispiel zeigt weitere Beispiele, wie Sie Cue-Text mit Tags markieren und dann stylen können. Das gleiche Markup und die Stile können im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS, um das Video selbst anzuzeigen, ist das gleiche wie im [ersten Beispiel oben](#verwenden_der_webvtt-api,_um_untertitel_hinzuzufügen), daher zeigen wir hier nur den spezifischen Code zum Markieren und Stylen des Textes.

```css hidden
video {
  width: 420px;
  height: 300px;
}
```

```html hidden
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

#### Styling nach Tag-Typ

Das erste Cue, das wir erstellen, wird während der gesamten 6 Sekunden des Videos angezeigt und zeigt Text, der mit den Tags `b`, `u`, `i` und `c` markiert ist.

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

Das zweite Cue wird unmittelbar nach dem ersten angezeigt und enthält dieselben Tags. Sie haben jedoch alle die Klasse `myclass` angewendet.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer für den spezifischen Fall von `c.myclass`, dem eine blaue Textfarbe gegeben wird.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling mit Attributen

Die nächsten beiden Cues werden nach zwei und dann drei Sekunden angezeigt. Das erste zeigt Text, der mit dem `lang`-Tag für drei Englisch-Lokalvarianten markiert ist, während das zweite ein `<v>` (Voice)-Tag mit dem Attribut "Bob" anzeigt.

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

Dann verwenden wir das `v`-Tag und den Attributselektor für `voice`, um den Text in "Bob's Stimme" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Cues mit Farbkennzeichnung anzeigen, die dem obigen Styling entspricht (wenn der Text nicht eingefärbt ist, dann wird `::cue` in Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS-[`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudoelemente
