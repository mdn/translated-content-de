---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische Text-"Cues" bereitstellen, die zeitlich mit anderen Medien wie Video- oder Audiospuren abgeglichen sind. Die **WebVTT-API** bietet Funktionen zur Definition und Manipulation dieser Textspuren. Die WebVTT-API wird hauptsächlich zum Anzeigen von Untertiteln oder Bildunterschriften verwendet, die mit Videoinhalten überlagert werden, hat jedoch auch andere Verwendungszwecke: Bereitstellung von Kapitelinformationen zur einfacheren Navigation und generische Metadaten, die zeitlich mit Audio- oder Videoinhalten abgeglichen werden müssen.

## Konzepte und Verwendung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel zu einem Video- oder Audiospur wiedergegeben werden können, um eine Übersetzung, Transkription oder Übersicht über den Inhalt bereitzustellen. Ein Video- oder Audiomedienelement kann Spuren verschiedener Art oder in verschiedenen Sprachen definieren, sodass Benutzer je nach ihren Vorlieben oder Bedürfnissen geeignete Spuren anzeigen können.

Die verschiedenen Arten von Textdaten, die spezifiziert werden können, sind unten aufgeführt. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

- `subtitles` bieten eine textliche Übersetzung des gesprochenen Dialogs. Dies ist der Standardtyp von Textspuren, und wenn er verwendet wird, muss die Quellsprache angegeben werden.
- `captions` bieten eine Transkription des gesprochenen Texts und können Informationen über andere Audioelemente wie Musik oder Hintergrundgeräusche enthalten. Sie richten sich an hörbehinderte Benutzer.
- `chapters` bieten Informationen zur hochrangigen Navigation, sodass Benutzer leichter zu relevantem Inhalt wechseln können.
- `metadata` wird für alle anderen Arten von zeitlich abgestimmten Informationen verwendet.

Die einzelnen zeitlich abgestimmten Einheiten von Textdaten innerhalb einer Spur werden als "Cues" bezeichnet. Jedes Cue hat eine Startzeit, eine Endzeit und eine Textlast. Es kann auch "Cue-Einstellungen" haben, die die Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen. Schließlich kann ein Cue ein Label haben, das zur Auswahl für CSS-Styling verwendet werden kann.

Eine Textspur und Cues können in einer Datei unter Verwendung des [WebVTT-Dateiformats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements verknüpft werden.

Alternativ können Sie in JavaScript einem Medienelement ein [`TextTrack`](/de/docs/Web/API/TextTrack) hinzufügen, indem Sie [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwenden und dann einzelne [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte mit [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) zur Spur hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Cues für ein bestimmtes Element, für ein bestimmtes Tag innerhalb eines Cues, für eine VTT-Klasse oder für ein Cue mit einem bestimmten Label zu stylen. Das `::cue-region` Pseudo-Element ist vorgesehen, um Cues in einer bestimmten Region zu stylen, wird jedoch in keinem Browser unterstützt.

Die wichtigsten WebVTT-Funktionen können entweder über das Dateiformat oder die Web-API zugegriffen werden.

## Schnittstellen

- [`VTTCue`](/de/docs/Web/API/VTTCue)
  - : Repräsentiert ein Cue, den Text, der in einem bestimmten Zeitabschnitt der dem Medienelement zugeordneten Textspur angezeigt wird.
- [`VTTRegion`](/de/docs/Web/API/VTTRegion)
  - : Repräsentiert einen Teil eines Videoelements, auf dem ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden kann.
- [`TextTrack`](/de/docs/Web/API/TextTrack)
  - : Repräsentiert eine Textspur, die die Liste der Cues hält, die zusammen mit einem zugeordneten Medienelement zu verschiedenen Zeitpunkten angezeigt werden, während es abgespielt wird.
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
  - : Eine abstrakte Basisklasse für verschiedene Cue-Typen, wie [`VTTCue`](/de/docs/Web/API/VTTCue).
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
  - : Ein array-ähnliches Objekt, das eine dynamisch aktualisierte Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekten darstellt. Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Cues im [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zu erhalten.
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
  - : Repräsentiert eine Liste der für ein Medienelement definierten Textspuren, wobei jede Spur durch eine separate [`TextTrack`](/de/docs/Web/API/TextTrack)-Instanz in der Liste dargestellt wird.

### Verwandte Schnittstellen

- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
  - : Teil der HTML DOM API, ist dies die Schnittstelle für die `addtrack` und `removetrack` Ereignisse, die ausgelöst werden, wenn eine Spur zu [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt oder davon entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt/entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) werden verwendet, um Cues in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Passt zu Cues innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudo-Element, `::cue-region`, aber dieses wird von keinem Browser unterstützt.

## Beispiele

### Verwenden der WebVTT-API zum Hinzufügen von Untertiteln

#### HTML

Das folgende Beispiel fügt dem Video ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Cues hinzu, indem die Methode [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) aufgerufen wird, wobei die konstruierten `VTTCue`-Objekte als Argumente übergeben werden.

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

### Anzeigen von VTT-Inhalten, die in einer Datei definiert sind

Dieses Beispiel demonstriert, wie man dem im oben beschriebenen Beispiel [Using the WebVTT API to add captions](#verwenden_der_webvtt-api_zum_hinzufügen_von_untertiteln) gezeigten Video den gleichen Satz von Untertiteln hinzufügt. Diesmal jedoch deklarativ unter Verwendung eines {{htmlelement("track")}}-Elements.

Zuerst definieren wir die Untertitel in einer Datei "captions.vtt":

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

Danach können wir dies zu einem {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements hinzufügen. Das folgende HTML würde in der gleichen Textspur resultieren wie das vorherige Beispiel:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen zu definieren, indem wir die Attribute `kind` und `srclang` verwenden. Beachten Sie, dass, wenn `kind` angegeben ist, auch `srclang` _gesetzt_ werden muss. Das `default`-Attribut kann nur einem `<track>` hinzugefügt werden: dies ist diejenige, die abgespielt wird, wenn Benutzereinstellungen keine bestimmte Sprache oder Art angeben.

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

Sie können WebVTT-Cues stylen, indem Sie Elemente mit dem {{cssxref("::cue")}}-Pseudo-Element auswählen. Dadurch können Sie das Aussehen des gesamten Cue-Texts oder nur spezifischer Elemente ändern. In diesem Beispiel fügen wir dem [ersten oben genannte Beispiel](#verwenden_der_webvtt-api_zum_hinzufügen_von_untertiteln) ein Styling hinzu.

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
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

#### CSS

Zuerst verwenden wir das {{cssxref("::cue")}}-Pseudo-Element, um alle Video-Text-Cues auszuwählen und ihnen größere rote Schrift und einen Farbverlauf als Hintergrund zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}}, um Text auszuwählen, der mit den `u` und `b`-Elementen ausgezeichnet wurde und sie grün bzw. gelb zu stylen.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist das gleiche wie im ersten Beispiel, außer dass wir einige der Cue-Texte mit `<b>` (fett) und `<u>` (unterstrichen) markiert haben. Standardmäßig würde der markierte Text fett oder unterstrichen angezeigt werden (je nach Tag), aber wir haben das {{cssxref("::cue")}} im vorigen Abschnitt verwendet, um den Text außerdem grün bzw. violett zu stylen.

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

{{EmbedLiveSample('Styling WebVTT in HTML or a stylesheet','400','330') }}

### Weitere Cue-Styling-Beispiele

Dieses Beispiel zeigt weitere Möglichkeiten, wie Sie Cue-Text mit Tags markieren und dann stylen können. Das gleiche Markup und die gleichen Styles können im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zur Anzeige des Videos selbst ist das gleiche wie im [ersten oben genannten Beispiel](#verwenden_der_webvtt-api_zum_hinzufügen_von_untertiteln), daher zeigen wir hier nur den spezifischen Code zum Markieren und Stylen des Texts.

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

Das erste Cue, das wir erstellen, wird für alle 6 Sekunden des Videos angezeigt und zeigt Text, der mit `b`, `u`, `i` und `c` Tags markiert ist.

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

Das zweite Cue wird direkt nach dem ersten angezeigt und enthält die gleichen Tags. Sie haben jedoch alle die Klasse `myclass` angewendet.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir stylen alle Elemente mit der `.myclass`-Klasse mit einer hellblauen Textfarbe, außer für den spezifischen Fall von `c.myclass`, welches eine blaue Textfarbe erhält.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Styling mit Attributen

Die nächsten beiden Cues werden nach jeweils zwei und dann drei Sekunden angezeigt. Das erste zeigt Text, der mit dem `lang` Tag für drei lokale Varianten des Englischen markiert ist, während das zweite ein `<v>` (voice) Tag mit dem Attribut "Bob" anzeigt.

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

Das Beispiel sollte die Cues mit Farbcodierung anzeigen, die dem obigen Styling entspricht (wenn der Text nicht gefärbt ist, wird `::cue` in Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudo-Elemente
