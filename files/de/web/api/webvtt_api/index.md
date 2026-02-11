---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: fb241f60d2c42614b106f3b4647cc6a4eb2e1bc8
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische Text-"Hinweise" bereitstellen, die zeitlich mit anderen Medien wie Video- oder Audiotracks abgestimmt sind. Die **WebVTT API** bietet Funktionen zum Definieren und Manipulieren dieser Textspuren. Die WebVTT API wird hauptsächlich zum Anzeigen von Untertiteln oder Bildunterschriften verwendet, die über Videoinhalten eingeblendet werden, kann jedoch auch für andere Zwecke genutzt werden: Bereitstellung von Kapitelinformationen zur einfacheren Navigation und allgemeine Metadaten, die mit Audio- oder Videoinhalten zeitlich abgestimmt sein müssen.

## Konzepte und Verwendung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel zu einem Video- oder Audiotrack abgespielt werden können, um eine Übersetzung, Transkription oder Übersicht über den Inhalt bereitzustellen. Ein Video- oder Audiomedienelement kann Spuren verschiedener Arten oder in verschiedenen Sprachen definieren, sodass Benutzer passende Spuren basierend auf ihren Vorlieben oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die angegeben werden können, sind `captions`, `descriptions`, `chapters`, `subtitles` oder `metadata`; die [`<track>`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Dokumentation bietet mehr Informationen darüber, was sie bedeuten. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

Die einzeln zeitlich abgestimmten Einheiten von Textdaten innerhalb einer Spur werden als "Hinweise" bezeichnet. Jeder Hinweis hat eine Startzeit, eine Endzeit und einen Textinhalt. Er kann auch "Hinweiseinstellungen" haben, die seine Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen. Schließlich kann ein Hinweis ein Label haben, das zur Auswahl für CSS-Styling verwendet werden kann.

Eine Textspur und Hinweise können in einer Datei unter Verwendung des [WebVTT-Dateiformats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements verknüpft werden.

Alternativ können Sie einem Medienelement über JavaScript eine [`TextTrack`](/de/docs/Web/API/TextTrack) hinzufügen, indem Sie [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwenden und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) zur Spur hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Hinweise für ein bestimmtes Element, für ein bestimmtes Tag innerhalb eines Hinweises, für eine VTT-Klasse oder für einen Hinweis mit einem bestimmten Label zu stylen. Das `::cue-region`-Pseudoelement ist zum Stylen von Hinweisen in einer bestimmten Region vorgesehen, wird jedoch in keinem Browser unterstützt.

Die wichtigsten WebVTT-Funktionen können entweder mit dem Dateiformat oder der Web-API aufgerufen werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Repräsentiert einen Hinweis, den Text, der in einem bestimmten Zeitabschnitt der mit einem Medienelement verknüpften Textspur angezeigt wird.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Repräsentiert einen Abschnitt eines Videoelements, auf dem ein [`VTTCue`](/de/docs/Web/API/VTTCue) dargestellt werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Repräsentiert eine Textspur, die die Liste der Hinweise enthält, die zusammen mit einem verknüpften Medienelement zu verschiedenen Zeitpunkten angezeigt werden, während es abgespielt wird.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Hinweisarten, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein array-artiges Objekt, das eine dynamisch aktualisierte Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Hinweise im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Repräsentiert eine Liste der für ein Medienelement definierten Textspuren, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste dargestellt wird.

### Verwandte Schnittstellen

- [`DataCue`](/de/docs/Web/API/DataCue)
  - : Repräsentiert einen Hinweis für die Zuordnung beliebiger zeitgesteuerter Daten (anstatt von Text) zu einer Medienressource, wie etwa in-band-Ereignisnachrichten.
- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML DOM-API, diese Schnittstelle ist für die `addtrack`- und `removetrack`-Ereignisse, die ausgelöst werden, wenn eine Spur zu [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder daraus entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt oder entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) werden verwendet, um Hinweise in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Passt zu Hinweisen innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudoelement, `::cue-region`, das jedoch von keinem Browser unterstützt wird.

## Beispiele

### Verwenden der WebVTT API, um Untertitel hinzuzufügen

#### HTML

Im folgenden Beispiel wird dem Video ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) hinzugefügt, dann werden Hinweise mithilfe von Methodenaufrufen von [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzugefügt, wobei konstruierte `VTTCue`-Objekte als Argumente verwendet werden.

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

Dieses Beispiel zeigt, wie die gleiche Menge von Untertiteln zu dem im obigen Beispiel [Verwenden der WebVTT API, um Untertitel hinzuzufügen](#verwenden_der_webvtt_api,_um_untertitel_hinzuzufügen) gesehenen Video hinzugefügt wird. Diesmal werden wir es jedoch deklarativ unter Verwendung eines {{htmlelement("track")}}-Elements tun.

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

Wir können dies dann unter Verwendung des {{HTMLElement("track")}}-Elements zu einem {{HTMLElement("video")}}-Element hinzufügen. Das folgende HTML würde zur gleichen Textspur wie das vorherige Beispiel führen:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen zu spezifizieren, wobei die Attribute `kind` und `srclang` verwendet werden. Beachten Sie, dass, wenn `kind` angegeben ist, `srclang` auch gesetzt werden _muss_. Das `default`-Attribut kann zu nur einem `<track>` hinzugefügt werden: Dieser wird abgespielt, wenn Benutzereinstellungen keine bestimmte Sprache oder Art spezifizieren.

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

Sie können WebVTT-Hinweise stylen, indem Sie Elemente mit dem {{cssxref("::cue")}}-Pseudoelement auswählen. Dies ermöglicht es Ihnen, das Erscheinungsbild von allem Hinweistext oder nur von bestimmten Elementen zu ändern. In diesem Beispiel werden wir einige Stiländerungen zum [ersten Beispiel oben](#verwenden_der_webvtt_api,_um_untertitel_hinzuzufügen) hinzufügen.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist wie bislang gesehen identisch:

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

Zuerst verwenden wir das {{cssxref("::cue")}}-Pseudoelement, um alle Video-Text-Hinweise auszuwählen und sie größer, rot und mit einem Verlaufshintergrund zu gestalten.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}}, um Text auszuwählen, der mit den Elementen `u` und `b` gekennzeichnet wurde, und sie grün und gelb zu stylen.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist das gleiche wie im ersten Beispiel, außer dass wir Teile des Hinweistexts mit `<b>` (fett) und `<u>` (unterstrichen) getaggt haben. Standardmäßig wird der markierte Text als fett oder unterstrichen (abhängig vom Tag) angezeigt, aber wir haben das {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text außerdem grün und lila zu stylen.

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

### Weitere Beispiele zur Hinweisgestaltung

Dieses Beispiel zeigt weitere Beispiele, wie Sie Hinweistext mit Tags kennzeichnen und dann stylen können. Das gleiche Markup und die Stile können im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

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

Der erste von uns erstellte Hinweis wird für alle 6 Sekunden des Videos angezeigt und zeigt Text, der mit den Tags `b`, `u`, `i` und `c` gekennzeichnet ist.

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

Zuerst fügen wir eine Regel hinzu, um alle Hinweise um den Faktor 1,2 größer als normal zu machen.

```css
video::cue {
  font-size: 1.2rem;
}
```

Dann stylen wir jedes der oben genannten Tags in einer anderen Farbe.

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

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, mit Ausnahme des speziellen Falls von `c.myclass`, dem eine blaue Textfarbe zugewiesen wird.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling mithilfe von Attributen

Die nächsten beiden Hinweise werden nach zwei bzw. drei Sekunden angezeigt. Der erste zeigt Text an, der mit dem `lang`-Tag für drei Varianten des Englischen gekennzeichnet ist, während der zweite ein `<v>` (Stimme)-Tag mit dem Attribut "Bob" anzeigt.

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

Dann verwenden wir den `v`-Tag- und Attributselektor für `voice`, um den Text in "Bobs Stimme" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Hinweise mit Farbmarkierung zeigen, die den obigen Stilen entspricht (wenn der Text nicht gefärbt ist, dann wird `::cue` in Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/Reference/Selectors/::cue) Pseudoelemente
