---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische, zeitlich abgestimmte Text-"Hinweise" mit anderen Medien wie Video- oder Audiospuren bereitstellen. Die **WebVTT API** bietet Funktionen zum Definieren und Bearbeiten dieser Textspuren. Die WebVTT API wird hauptsächlich zur Anzeige von Untertiteln oder Übertiteln, die mit Videoinhalten überlagert werden, verwendet, hat aber auch andere Anwendungen: Bereitstellung von Kapitelinformationen für eine einfachere Navigation und generische Metadaten, die zeitlich mit Audio- oder Videoinhalten abgestimmt werden müssen.

## Konzepte und Verwendung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel zu einer Video- oder Audiospur abgespielt werden können, um eine Übersetzung, Transkription oder Übersicht des Inhalts bereitzustellen. Ein Video- oder Audio-Medienelement kann Spuren in verschiedenen Arten oder Sprachen definieren, sodass Benutzer entsprechende Spuren basierend auf ihren Präferenzen oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die angegeben werden können, sind unten aufgeführt. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

- `subtitles` bieten eine schriftliche Übersetzung des gesprochenen Dialogs. Dies ist der Standardtyp der Textspur, und wenn verwendet, muss die Ausgangssprache angegeben werden.
- `captions` bieten eine Transkription des gesprochenen Textes und können Informationen über andere Audiosignale wie Musik oder Hintergrundgeräusche enthalten. Sie sind für hörgeschädigte Benutzer gedacht.
- `chapters` bieten Navigationsinformationen auf hoher Ebene, die es Benutzern ermöglichen, leichter zu relevantem Inhalt zu wechseln.
- `metadata` wird für alle anderen Arten von zeitlich abgestimmten Informationen verwendet.

Die einzelnen, zeitlich abgestimmten Einheiten von Textdaten innerhalb einer Spur werden als "Hinweise" bezeichnet. Jeder Hinweis hat eine Startzeit, eine Endzeit und eine Textnutzlast. Er kann auch "Hinweiseinstellungen" haben, die seine Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen. Schließlich kann ein Hinweis ein Label haben, das zur Auswahl für CSS-Styling verwendet werden kann.

Eine Textspur und Hinweise können in einer Datei unter Verwendung des [WebVTT Dateiformats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann einem bestimmten {{HTMLElement("video")}}-Element mit dem {{HTMLElement("track")}}-Element zugeordnet werden.

Alternativ können Sie eine [`TextTrack`](/de/docs/Web/API/TextTrack) zu einem Medienelement in JavaScript mit der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzufügen und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) zur Spur hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Hinweise für ein bestimmtes Element, für ein bestimmtes Tag innerhalb eines Hinweises, für eine VTT-Klasse oder für einen Hinweis mit einem bestimmten Label zu stylen. Das `::cue-region` Pseudo-Element ist zur Gestaltung von Hinweisen in einer bestimmten Region gedacht, wird jedoch in keinem Browser unterstützt.

Die wichtigsten WebVTT-Funktionen können entweder über das Dateiformat oder die Web-API aufgerufen werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Repräsentiert einen Hinweis, den Text, der in einem bestimmten Zeitabschnitt der mit einem Medienelement verknüpften Textspur angezeigt wird.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Repräsentiert einen Teil eines Video-Elements, auf den ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Repräsentiert eine Textspur, die die Liste der Hinweise enthält, die zusammen mit einem assoziierten Medienelement zu verschiedenen Zeitpunkten bei der Wiedergabe angezeigt werden.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Hinweisarten, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein Array-ähnliches Objekt, das eine sich dynamisch aktualisierende Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Hinweise im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Repräsentiert eine Liste der für ein Medienelement definierten Textspuren, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste dargestellt wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML-DOM-API, dies ist die Schnittstelle für die `addtrack` und `removetrack` Ereignisse, die ausgelöst werden, wenn eine Spur zu [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder daraus entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt/entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) werden verwendet, um Hinweise in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Matched Hinweise innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudo-Element, `::cue-region`, das jedoch von keinem Browser unterstützt wird.

## Beispiele

### Verwenden der WebVTT API zum Hinzufügen von Untertiteln

#### HTML

Das folgende Beispiel fügt dem Video eine neue [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Hinweise mit den Methodenaufrufen [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzu, wobei konstruierte `VTTCue`-Objekte als Argumente verwendet werden.

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

### Anzeigen von VTT-Inhalt, der in einer Datei definiert ist

Dieses Beispiel zeigt, wie die gleiche Untertitelmenge wie im obigen [Verwenden der WebVTT API zum Hinzufügen von Untertiteln](#verwenden_der_webvtt_api_zum_hinzufügen_von_untertiteln)-Beispiel dem Video hinzugefügt wird. Diese Zeit machen wir es jedoch deklarativ mit einem {{htmlelement("track")}}-Element.

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

Dann können wir dies zu einem {{HTMLElement("video")}}-Element mit dem {{HTMLElement("track")}}-Element hinzufügen. Das folgende HTML würde zur gleichen Textspur wie im vorherigen Beispiel führen:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Spurarten in mehreren Sprachen anzugeben, indem wir die Attribute `kind` und `srclang` verwenden. Beachten Sie, dass, wenn `kind` angegeben ist, `srclang` _auch_ festgelegt werden muss. Das `default`-Attribut kann nur einem `<track>` hinzugefügt werden: Dies ist dasjenige, das abgespielt wird, wenn Benutzervorlieben keine bestimmte Sprache oder Art vorgeben.

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

Sie können WebVTT-Hinweise stylen, indem Sie Elemente mit dem {{cssxref("::cue")}} Pseudo-Element auswählen. Dies ermöglicht es Ihnen, das Aussehen aller Hinweistexte oder nur bestimmter Elemente zu ändern. In diesem Beispiel fügen wir dem [ersten Beispiel oben](#verwenden_der_webvtt_api_zum_hinzufügen_von_untertiteln) etwas Styling hinzu.

> [!NOTE]
> Es ist auch möglich, Stile im [WebVTT Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) zu definieren.

#### HTML

Das HTML für das Video selbst ist dasselbe wie zuvor gesehen:

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

Zuerst verwenden wir das {{cssxref("::cue")}} Pseudo-Element, um alle Video-Text-Hinweise auszuwählen, und geben ihnen größere rote und einen Verlaufshintergrund.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}}, um Text auszuwählen, der mit den `u` und `b` Elementen markiert wurde, und stylen sie grün bzw. gelb.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, außer dass wir einige der Hinweise mit `<b>` (fett) und `<u>` (unterstrichen) Tags markiert haben. Standardmäßig würde der markierte Text fett oder unterstrichen angezeigt werden (abhängig vom Tag), aber wir haben das {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text grün und lila zu stylen.

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

Dieses Beispiel zeigt weitere Beispiele, wie Sie Hinweistext mit Tags markieren und dann stylen können. Die gleiche Markierung und Stile können im [WebVTT Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zur Anzeige des Videos selbst sind dieselben wie im [ersten Beispiel oben](#verwenden_der_webvtt_api_zum_hinzufügen_von_untertiteln), sodass wir hier nur den spezifischen Code zur Markierung und Gestaltung des Textes zeigen.

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

Der erste Hinweis, den wir erstellen, wird für alle 6 Sekunden des Videos angezeigt und zeigt Text, der mit `b`, `u`, `i` und `c` Tags markiert ist.

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

Zuerst fügen wir eine Regel hinzu, um alle Hinweise 1,2-mal größer als gewöhnlich zu machen.

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
  color: lightpurple;
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

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer für den spezifischen Fall von `c.myclass`, der eine blaue Textfarbe erhält.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling mit Attributen

Die nächsten zwei Hinweise werden nach zwei und dann drei Sekunden angezeigt. Der erste zeigt Text, der mit dem `lang` Tag für drei lokale Varianten von Englisch markiert ist, während der zweite eine `<v>` (voice) Tag mit dem Attribut "Bob" anzeigt.

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

Dann verwenden wir den `v` Tag und Attribut-Selektor für `voice`, um Text in "Bobs Stimme" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Hinweise mit Farbkennzeichnung zeigen, die dem oben beschriebenen Styling entspricht (wenn der Text nicht gefärbt ist, wird `::cue` in Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS-Pseudo-Elemente [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue)
