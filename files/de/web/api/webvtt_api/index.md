---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische Text-"Hinweise" bieten, die zeitlich mit anderen Medien wie Video- oder Audiospuren abgestimmt sind. Die **WebVTT API** bietet Funktionen zum Definieren und Manipulieren dieser Textspuren. Die WebVTT API wird hauptsächlich zur Anzeige von Untertiteln oder Bildunterschriften verwendet, die sich über Video-Inhalte legen, hat aber auch andere Anwendungsbereiche: Bereitstellung von Kapitelinformationen für eine einfachere Navigation und generische Metadaten, die zeitlich mit Audio- oder Videoinhalten abgestimmt werden müssen.

## Konzepte und Nutzung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel zu einer Video- oder Audiospur abgespielt werden können, um eine Übersetzung, Transkription oder Übersicht des Inhalts bereitzustellen. Ein Video- oder Audiomedien-Element kann Spuren verschiedener Art oder in verschiedenen Sprachen definieren, sodass Nutzer geeignete Spuren basierend auf ihren Vorlieben oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die angegeben werden können, sind unten aufgeführt. Beachten Sie, dass Browser möglicherweise nicht alle Arten von Textspuren unterstützen.

- `subtitles` bieten eine textuelle Übersetzung des gesprochenen Dialogs. Dies ist der Standardtyp einer Textspur, und wenn sie verwendet wird, muss die Ausgangssprache angegeben werden.
- `captions` bieten eine Transkription des gesprochenen Textes und können Informationen über andere Audios wie Musik oder Hintergrundgeräusche enthalten. Sie sind für hörgeschädigte Nutzer gedacht.
- `chapters` bieten hochgradige Navigationsinformationen, sodass Nutzer leichter zu relevantem Inhalt wechseln können.
- `metadata` wird für alle anderen Arten von zeitlich abgestimmten Informationen verwendet.

Die einzelnen zeitlich abgestimmten Einheiten von Textdaten innerhalb einer Spur werden als "Hinweise" bezeichnet. Jeder Hinweis hat eine Startzeit, eine Endzeit und eine Textnutzlast. Er kann auch "Hinweiseinstellungen" haben, die die Anzeigeregion, Position, Ausrichtung und/oder Größe betreffen. Schließlich kann ein Hinweis ein Label haben, das zur CSS-Stil-Auswahl verwendet werden kann.

Eine Textspur und Hinweise können in einer Datei unter Verwendung des [WebVTT-Dateiformats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element mittels des {{HTMLElement("track")}}-Elements verknüpft werden.

Alternativ können Sie mit Hilfe von JavaScript einem Medienelement ein [`TextTrack`](/de/docs/Web/API/TextTrack) hinzufügen, indem Sie [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwenden und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte zu der Spur mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Hinweise für ein bestimmtes Element, für ein bestimmtes Tag innerhalb eines Hinweises, für eine VTT-Klasse oder für einen Hinweis mit einem bestimmten Label zu gestalten. Das `::cue-region`-Pseudoelement ist für die Gestaltung von Hinweisen in einer bestimmten Region gedacht, wird jedoch von keinem Browser unterstützt.

Die meisten wichtigen WebVTT-Funktionen können entweder über das Dateiformat oder die Web-API aufgerufen werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Stellt einen Hinweis dar, den Text, der in einem bestimmten Zeitabschnitt der Textspur angezeigt wird, die mit einem Medienelement verbunden ist.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Stellt einen Bereich eines Videoelements dar, auf den ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Stellt eine Textspur dar, die die Liste der anzuzeigenden Hinweise zusammen mit einem zugeordneten Medienelement zu verschiedenen Zeitpunkten, während es abgespielt wird, hält.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Hinweistypen, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein array-ähnliches Objekt, das eine dynamisch aktualisierte Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) erhalten, um alle Hinweise im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu bekommen.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Stellt eine Liste der für ein Medienelement definierten Textspuren dar, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste dargestellt wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML DOM API, ist diese Schnittstelle für die `addtrack`- und `removetrack`-Ereignisse zuständig, die ausgelöst werden, wenn eine Spur zur [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder daraus entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt oder entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) werden verwendet, um Hinweise in Medien mit VTT-Spuren zu gestalten.

- {{CSSxRef("::cue")}}
  - : Entspricht Hinweisen innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudoelement, `::cue-region`, das jedoch von keinem Browser unterstützt wird.

## Beispiele

### Verwendung der WebVTT API zum Hinzufügen von Untertiteln

#### HTML

Das folgende Beispiel fügt dem Video eine neue [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Hinweise durch Aufrufe der Methode [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzu, mit konstruierten `VTTCue`-Objekten als Argumente.

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

Dieses Beispiel zeigt, wie man denselben Satz von Untertiteln zu dem Video im obigen Beispiel [Verwendung der WebVTT-API zum Hinzufügen von Untertiteln](#verwendung_der_webvtt_api_zum_hinzufügen_von_untertiteln) hinzufügt. Diesmal werden wir es jedoch deklarativ mit einem {{htmlelement("track")}}-Element tun.

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

Wir können dies dann mit Hilfe des {{HTMLElement("track")}}-Elements zu einem {{HTMLElement("video")}}-Element hinzufügen. Das folgende HTML würde zur gleichen Textspur wie im vorherigen Beispiel führen:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen anzugeben, indem wir die Attribute `kind` und `srclang` verwenden. Beachten Sie, dass, wenn `kind` angegeben wird, `srclang` auch festgelegt werden _muss_. Das `default`-Attribut kann nur einem `<track>` hinzugefügt werden: Dieses wird abgespielt, wenn die Nutzereinstellungen keine bestimmte Sprache oder Art angeben.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
  <track kind="chapters" src="chapters_de.vtt" srclang="de" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

### Gestaltung von WebVTT in HTML oder einem Stylesheet

Sie können WebVTT-Hinweise gestalten, indem Sie Elemente mit dem {{cssxref("::cue")}} Pseudoelement auswählen. Dadurch können Sie das Erscheinungsbild des gesamten Hinweistextes oder nur bestimmter Elemente ändern. In diesem Beispiel werden wir dem [ersten obigen Beispiel](#verwendung_der_webvtt_api_zum_hinzufügen_von_untertiteln) einige Stilgebungen hinzufügen.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist dasselbe wie bereits zuvor:

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

Zuerst verwenden wir das {{cssxref("::cue")}}-Pseudoelement, um alle Videotext-Hinweise auszuwählen, ihnen größere rote und einen Farbverlauf-Hintergrund zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}}, um Text auszuwählen, der mit den Elementen `u` und `b` ausgezeichnet wurde und diese grün bzw. gelb zu gestalten.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, außer dass wir etwas des Hinweistextes mit `<b>` (fett) und `<u>` (unterstrichen) Tags ausgezeichnet haben. Normalerweise würde der markierte Text fett oder unterstrichen angezeigt (abhängig vom Tag), aber wir haben das {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text auch grün bzw. lila zu gestalten.

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

### Mehr Beispiele zur Gestaltung von Hinweisen

Dieses Beispiel zeigt weitere Beispiele, wie Sie Hinweistext mit Tags versehen und dann gestalten können. Dieselben Markierungen und Stile können im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zur Anzeige des Videos selbst ist dasselbe wie im [ersten obigen Beispiel](#verwendung_der_webvtt_api_zum_hinzufügen_von_untertiteln), daher zeigen wir hier nur den spezifischen Code zum Auszeichnen und Gestalten des Textes.

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

#### Gestaltung nach Tag-Typ

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

Zuerst fügen wir eine Regel hinzu, um alle Hinweise 1,2 Mal größer als normal zu machen.

```css
video::cue {
  font-size: 1.2rem;
}
```

Dann gestalten wir die oben genannten Tags in verschiedenen Farben.

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

#### Gestaltung nach Klasse

Der zweite Hinweis wird gleich nach dem ersten angezeigt und enthält dieselben Tags. Allerdings haben sie alle eine Klasse `myclass` zugewiesen bekommen.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir gestalten alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer für den spezifischen Fall von `c.myclass`, welches eine blaue Textfarbe erhält.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Gestaltung mittels Attributen

Die nächsten beiden Hinweise werden nach zwei und drei Sekunden angezeigt. Der erste zeigt Text, der mit dem `lang` Tag für drei englische Sprachvarianten ausgezeichnet ist, während der zweite ein `<v>` (Stimme) Tag mit dem Attribut "Bob" darstellt.

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

Wir verwenden den Attributs-Selektor `lang`, um jeder Sprachvariante eine andere Textfarbe zu geben.

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

Dann verwenden wir den Tag `v` und den Attributs-Selektor für `voice`, um den Text in "Bob's Stimme" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Hinweise mit der oben beschriebenen Farbkennzeichnung zeigen (wenn der Text nicht gefärbt angezeigt wird, dann wird `::cue` in Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudoelemente
