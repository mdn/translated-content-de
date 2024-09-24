---
title: WebVTT-API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) sind Textspuren, die spezifische textliche "Cues" bieten, die zeitlich mit anderen Medien wie Video- oder Audiospuren abgestimmt sind. Die **WebVTT-API** bietet Funktionalitäten zur Definition und Manipulation dieser Textspuren.
Die WebVTT-API wird hauptsächlich zur Anzeige von Untertiteln oder Bildunterschriften verwendet, die auf Video-Inhalte überlagern, aber sie hat auch andere Verwendungen: Sie bietet Kapitelinformationen für eine einfachere Navigation und generische Metadaten, die zeitlich mit Audio- oder Videoinhalten abgestimmt werden müssen.

## Konzepte und Nutzung

Eine Textspur ist ein Container für zeitlich abgestimmte Textdaten, die parallel zu einer Video- oder Audiospur abgespielt werden können, um eine Übersetzung, Transkription oder Übersicht des Inhalts bereitzustellen.
Ein Video- oder Audiomedium-Element kann Spuren unterschiedlicher Art oder in verschiedenen Sprachen definieren, sodass Benutzer geeignete Spuren basierend auf ihren Präferenzen oder Bedürfnissen anzeigen können.

Die verschiedenen Arten von Textdaten, die angegeben werden können, sind unten aufgeführt. Beachten Sie, dass Browser nicht unbedingt alle Arten von Textspuren unterstützen.

- `subtitles` bieten eine textuelle Übersetzung des gesprochenen Dialogs.
  Dies ist die Standardart der Textspur, und wenn sie verwendet wird, muss die Quellsprache angegeben werden.
- `captions` bieten eine Transkription des gesprochenen Textes und können Informationen über andere Audios wie Musik oder Hintergrundgeräusche enthalten.
  Sie sind für hörgeschädigte Benutzer gedacht.
- `chapters` bieten Informationen für eine höhere Navigationsebene, wodurch Benutzer leichter zu relevantem Inhalt wechseln können.
- `metadata` wird für jede andere Art von zeitlich abgestimmter Information verwendet.

Die einzelnen zeitlich abgestimmten Einheiten von Textdaten innerhalb einer Spur werden als "Cues" bezeichnet.
Jeder Cue hat eine Startzeit, eine Endzeit und einen textlichen Inhalt.
Er kann auch "Cue-Einstellungen" haben, die seine Anzeigeregion, Position, Ausrichtung und/oder Größe beeinflussen.
Schließlich kann ein Cue ein Label haben, das für die CSS-Stilwahl verwendet werden kann.

Eine Textspur und Cues können in einer Datei mit dem [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) definiert und dann mit einem bestimmten {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements verknüpft werden.

Alternativ können Sie einem Medienelement in JavaScript ein {{domxref("TextTrack")}} hinzufügen, indem Sie [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwenden, und dann einzelne {{domxref("VTTCue")}}-Objekte mit {{domxref("TextTrack.addCue()")}} zur Spur hinzufügen.

Das {{cssxref("::cue")}} [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) kann sowohl in HTML als auch in einer WebVTT-Datei verwendet werden, um die Cues für ein bestimmtes Element, ein bestimmtes Tag innerhalb eines Cues, eine VTT-Klasse oder ein Cue mit einem bestimmten Label zu gestalten.
Das Pseudoelement `::cue-region` ist für das Stilisieren von Cues in einer bestimmten Region gedacht, wird jedoch von keinem Browser unterstützt.

Die wichtigsten WebVTT-Funktionen können entweder über das Dateiformat oder die Web-API genutzt werden.

## Schnittstellen

- {{domxref("VTTCue")}}
  - : Stellt einen Cue dar, den Text, der in einem bestimmten Zeitabschnitt der Textspur angezeigt wird, die einem Medienelement zugeordnet ist.
- {{domxref("VTTRegion")}}
  - : Stellt einen Abschnitt eines Video-Elements dar, auf den ein {{domxref("VTTCue")}} gerendert werden kann.
- {{domxref("TextTrack")}}
  - : Stellt eine Textspur dar, die die Liste der Cues enthält, die zusammen mit einem zugehörigen Medienelement zu verschiedenen Zeitpunkten während der Wiedergabe angezeigt werden.
- {{domxref("TextTrackCue")}}
  - : Eine abstrakte Basisklasse für verschiedene Cue-Typen, wie z. B. {{domxref("VTTCue")}}.
- {{domxref("TextTrackCueList")}}
  - : Ein array-ähnliches Objekt, das eine dynamisch aktualisierende Liste von {{domxref("TextTrackCue")}}-Objekten darstellt.
    Eine Instanz dieses Typs wird von {{domxref('TextTrack.cues')}} erhalten, um alle Cues im {{domxref("TextTrack")}}-Objekt zu erhalten.
- {{domxref("TextTrackList")}}
  - : Stellt eine Liste der Textspuren dar, die für ein Medienelement definiert sind, wobei jede Spur durch eine separate {{domxref("TextTrack")}}-Instanz in der Liste repräsentiert wird.

### Verwandte Schnittstellen

- {{domxref("TrackEvent")}}
  - : Teil der HTML DOM API, dies ist die Schnittstelle für die `addtrack`- und `removetrack`-Ereignisse, die ausgelöst werden, wenn eine Spur zu {{domxref("TextTrackList")}} hinzugefügt oder davon entfernt wird (oder allgemeiner, wenn eine Spur zu einem HTML-Medienelement hinzugefügt/entfernt wird).

### Verwandte CSS-Erweiterungen

Diese [CSS](/de/docs/Web/CSS) [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) werden verwendet, um Cues in Medien mit VTT-Spuren zu stylen.

- {{CSSxRef("::cue")}}
  - : Passt zu Cues innerhalb eines ausgewählten Elements in Medien mit VTT-Spuren.

> [!NOTE]
> Die Spezifikation definiert ein weiteres Pseudoelement, `::cue-region`, aber dieses wird von keinem Browser unterstützt.

## Beispiele

### Verwenden der WebVTT-API zum Hinzufügen von Bildunterschriften

#### HTML

Im folgenden Beispiel wird eine neue {{domxref("TextTrack")}} zur Video hinzugefügt, dann Cues mit Hilfe von {{domxref("TextTrack.addCue()")}}-Methodenaufrufen hinzugefügt, wobei konstruierte `VTTCue`-Objekte als Argumente übergeben werden.

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

### Anzeigen von in einer Datei definiertem VTT-Inhalt

Dieses Beispiel zeigt, wie Sie dasselbe Set von Bildunterschriften zu dem Video hinzufügen, das im obigen Beispiel [Verwenden der WebVTT-API zum Hinzufügen von Bildunterschriften](#verwenden_der_webvtt-api_zum_hinzufügen_von_bildunterschriften) zu sehen ist. Dieses Mal werden wir es jedoch deklarativ mit einem {{htmlelement("track")}}-Element tun.

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

Wir können dies dann mit dem {{HTMLElement("video")}}-Element unter Verwendung des {{HTMLElement("track")}}-Elements hinzufügen. Der folgende HTML-Code würde zu derselben Textspur wie im vorherigen Beispiel führen:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

Wir können mehrere {{HTMLElement("track")}}-Elemente hinzufügen, um verschiedene Arten von Spuren in mehreren Sprachen anzugeben, indem die Attribute `kind` und `srclang` verwendet werden. Beachten Sie, dass, wenn `kind` angegeben ist, `srclang` _muss_ ebenfalls gesetzt werden.
Das `default`-Attribut kann nur einem `<track>` hinzugefügt werden: Dies ist die Spur, die abgespielt wird, wenn die Benutzerpräferenzen keine spezifische Sprache oder Art angeben.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
  <track kind="chapters" src="chapters_de.vtt" srclang="de" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

### Stilgestaltung von WebVTT in HTML oder einem Stylesheet

Sie können WebVTT-Cues gestalten, indem Sie Elemente mit dem {{cssxref("::cue")}}-Pseudoelement auswählen.
Dies ermöglicht es Ihnen, das Erscheinungsbild aller Cue-Texte oder nur bestimmter Elemente zu ändern. In diesem Beispiel fügen wir dem [ersten Beispiel oben](#verwenden_der_webvtt-api_zum_hinzufügen_von_bildunterschriften) einige Stilgestaltungen hinzu.

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

Zuerst verwenden wir das {{cssxref("::cue")}}-Pseudoelement, um alle Video-Text-Cues auszuwählen und ihnen größere rote Schrift und einen Farbverlaufshintergrund zu geben.

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

Dann verwenden wir {{cssxref("::cue")}}, um Text auszuwählen, der mit den Elementen `u` und `b` markiert wurde, und gestalten ihn grün und gelb, bzw.

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

Das JavaScript ist dasselbe wie im ersten Beispiel, mit der Ausnahme, dass wir einige der Cue-Texte mit `<b>` (fett) und `<u>` (unterstrichen) markiert haben.
Standardmäßig würde der markierte Text fett oder unterstrichen (abhängig vom Tag) angezeigt werden, aber wir haben das {{cssxref("::cue")}} im vorherigen Abschnitt verwendet, um den Text auch grün und lila zu gestalten, jeweils.

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

### Weitere Beispiele für Cue-Stilgestaltung

Dieses Beispiel zeigt weitere Beispiele, wie Sie Cue-Text mit Tags markieren und dann stylen können.
Dieselben Markup- und Stilmethoden können im [WebVTT-Dateiformat](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) verwendet werden.

Das HTML und CSS zur Anzeige des Videos selbst ist dasselbe wie im [ersten Beispiel oben](#verwenden_der_webvtt-api_zum_hinzufügen_von_bildunterschriften), daher zeigen wir hier nur den spezifischen Code zum Markieren und Stylen des Textes.

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

#### Stilgestaltung nach Tag-Typ

Der erste Cue, den wir erstellen, wird für alle 6 Sekunden des Videos angezeigt und stellt Text dar, der mit den Tags `b`, `u`, `i` und `c` markiert ist.

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

Zuerst fügen wir eine Regel hinzu, um alle Cues 1,2 Mal größer als normal zu machen.

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

#### Stilgestaltung nach Klasse

Der zweite Cue wird direkt nach dem ersten angezeigt und enthält dieselben Tags. Sie haben jedoch alle die Klasse `myclass` angewendet.

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "Styles: Class markup: <b.myclass>bold</b> <u.myclass>underlined</u> <i.myclass>italic</i> <c.myclass>class</c>",
  ),
);
```

Wir stylen alle Elemente mit der Klasse `.myclass` mit einer hellblauen Textfarbe, außer im spezifischen Fall von `c.myclass`, dem eine blaue Textfarbe gegeben wird.

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### Stilgestaltung mit Attributen

Die nächsten beiden Cues werden nach zwei und dann drei Sekunden angezeigt.
Der erste zeigt Text, der mit dem `lang`-Tag für drei englische Sprachvarianten markiert ist, während der zweite ein `<v>` (Stimme) Tag mit dem Attribut "Bob" anzeigt.

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

Wir verwenden den Lang-Attribut-Selektor, um jeder Sprachvariante eine andere Textfarbe zu geben.

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

Dann verwenden wir den `v`-Tag und den Attribut-Selektor für `voice`, um den Text in "Bob's voice" orange zu färben.

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### Ergebnis

Das Beispiel sollte die Cues mit einer Farbcodierung entsprechend der obigen Stilgestaltung anzeigen (wenn der Text nicht gefärbt ist, dann wird `::cue` in Ihrem Browser nicht unterstützt).

{{EmbedLiveSample('More cue styling examples','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudoelemente
