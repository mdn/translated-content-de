---
title: HTML Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text und war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit der Verwendung des {{htmlelement("img")}} Elements befassen, einschließlich der Grundlagen, der Beschriftung mit {{htmlelement("figure")}} und der detaillierten Beschreibung, wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textlevel-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Begriff "replaced element" — was bedeutet er?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise unangenehme ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild geladen wurde und angezeigt wird.</li>
          <li>Optimierung von Medienassets für das Web — Dateigrößen klein halten.</li>
          <li>Verstehen von Medienasset-Lizenzen — verschiedene Lizenztypen, wie man sie einhält und wie man nach entsprechend lizenzierten Mediendateien für Projekte sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}} Element. Dies ist ein {{Glossary("void_element", "void element")}} (das heißt, es kann keinen Kinderinhalt haben und kein End-Tag haben) und benötigt zwei Attribute, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild zeigt, das Sie in die Seite einbetten möchten. Ebenso wie das `href`-Attribut bei {{htmlelement("a")}}-Elementen kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt` Attribut wird weiter unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Ein kurzes Intro zu URLs und Pfaden](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis bezüglich relativer und absoluter URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaurier.jpg` genannt wird und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, können Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Befindet sich das Bild in einem `images`-Unterverzeichnis, das sich im selben Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und berücksichtigen sie für SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie verwenden möchten, auf Ihrer Website hosten, was in einfachen Setups bedeutet, die Bilder Ihrer Website auf demselben Server wie Ihr HTML zu halten. Außerdem ist es effizienter, relative URLs anstelle von absoluten URLs im Hinblick auf die Wartung zu verwenden (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder auszuliefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz, unter der sie veröffentlicht sind, zu verwenden (siehe [Medienassets und Lizenzierung](#medienassets_und_lizenzierung) unten für weitere Informationen).

> **Warnung:** _Niemals_ das `src`-Attribut auf ein Bild verweisen, das auf der Website eines anderen gehostet wird _ohne Erlaubnis_. Dies wird als "Hotlinking" bezeichnet. Es gilt als unethisch, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes bezahlt, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, wird uns das folgende Ergebnis liefern:

![Ein grundlegendes Bild eines Dinosauriers, eingebettet in einen Browser, mit "Images in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **replaced elements** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden, nicht durch den Inhalt des Elements selbst. Mehr darüber können Sie unter {{Glossary("replaced_elements", "replaced elements")}} lesen.

> [!NOTE]
> Sie finden das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, für den Einsatz in Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder eine lange Ladezeit hat, weil die Internetverbindung langsam ist. Beispielsweise könnte unser obiger Code wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Methode, um Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Beispiel: Wenn unser Bildname als `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den alt-Text anzeigen:

![Der Titel "Images in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt, und der alt-Text steht an seiner Stelle.](alt-text.png)

Warum sollten Sie jemals alt-Text sehen oder benötigen? Er kann aus verschiedenen Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://de.wikipedia.org/wiki/Screenreader), um sich das Web vorlesen zu lassen. Tatsächlich ist es nützlich, wenn Alt-Text zur Beschreibung von Bildern bereitgestellt wird.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch reinen Text-Browser, wie [Lynx](https://de.wikipedia.org/wiki/Lynx), der den alt-Text von Bildern anzeigt.
- Sie möchten möglicherweise Text für Suchmaschinen bereitstellen; zum Beispiel können Suchmaschinen Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen zu verringern und Ablenkungen zu vermeiden. Dies ist besonders bei Mobiltelefonen üblich und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was sollten Sie genau in Ihrem `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt dort ist. In anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit mit dem Vorlesen verschwenden.
- **Inhalt.** Wenn Ihr Bild bedeutende Informationen liefert, geben Sie dieselben Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben wären? Wenn das Bild im Haupttext angemessen beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}} Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie trotzdem [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie diesen entweder im selben `<a>` Element oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie _dies wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut angeben.

Im Wesentlichen ist der Schlüssel, ein nutzbares Erlebnis zu bieten, auch wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und zu sehen, wie alles aussieht. Sie werden bald erkennen, wie hilfreich Alt-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Sehen Sie sich unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu lernen, wie man ein `alt`-Attribut für Bilder in verschiedenen Situationen verwendet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weisen ermitteln. Auf einem Mac können Sie beispielsweise <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Kehren wir zu unserem Beispiel zurück, könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, wird es dem Benutzer angezeigt. Wenn die Bilder noch nicht abgerufen wurden (und das ist oft der Fall, da Bilddateien oft viel größer als HTML-Dateien sind), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Angenommen, wir haben etwas Text nach dem Bild:

```html
<h1>Images in HTML</h1>

<img
  src="dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  title="A T-Rex on display in the Manchester University Museum" />
<blockquote>
  <p>
    But down there it would be dark now, and not the lovely lighted aquarium she
    imagined it to be during the daylight hours, eddying with schools of tiny,
    delicate animals floating and dancing slowly to their own serene currents
    and creating the look of a living painting. That was wrong, in any case. The
    ocean was different from an aquarium, which was an artificial environment.
    The ocean was a world. And a world is not art. Dorothy thought about the
    living things that moved in that world: large, ruthless and hungry. Like us
    up here.
  </p>
  <footer>- Rachel Ingalls, <cite>Mrs. Caliban</cite></footer>
</blockquote>
```

Sobald der Browser das HTML heruntergeladen hat, wird er beginnen, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber einzupassen:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Verschieben des Textes auf diese Weise ist für Benutzer extrem ablenkend, insbesondere wenn sie bereits damit begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz dafür reserviert werden muss.

Dies bedeutet, dass der Browser beim Herunterladen des Bildes den umliegenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn die Größe des Bildes angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion, siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl, wie wir gesagt haben, es gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _vergrößern_ oder _verkleinern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie möglicherweise Bilder, die körnig, unscharf oder zu klein aussehen und Bandbreite verschwenden, indem ein Bild heruntergeladen wird, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch `title` Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip bei Mausüberfahrt, genau wie Linktitel:

![Das Dinosaurierbild mit einem Tooltip-Titel darüber, der lautet: Ein T-Rex im Manchester University Museum](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung durch Screenreader sehr unberechenbar ist und die meisten Browser es nicht zeigen, es sei denn, Sie verwenden eine Maus (also z. B. kein Zugang für Tastaturbenutzer). Wenn Sie mehr Informationen darüber wünschen, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen in den Hauptartikeltext aufzunehmen, anstatt sie dem Bild anzuhängen.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie an der Reihe! Dieser Abschnitt zum aktiven Lernen wird Sie mit einer Einbettungsübung in Betrieb nehmen. Ihnen wird ein einfaches {{htmlelement("img")}} Tag bereitgestellt; wir möchten, dass Sie das Bild einbetten, das sich unter folgender URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass Sie niemals auf Bilder auf anderen Servern verlinken sollten, aber das ist nur zu Lernzwecken, also lassen wir es bei diesem Mal durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie einen Alt-Text hinzu und überprüfen Sie, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Setzen Sie die korrekte `width` und `height` des Bildes (Hinweis: es ist 200px breit und 171px hoch), dann experimentieren Sie mit anderen Werten, um zu sehen, was der Effekt ist.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche rückgängig machen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_embedding_an_image', 700, 350) }}

## Medienassets und Lizenzierung

Bilder (und andere Arten von Medienassets), die Sie im Internet finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Seite verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Schauen wir uns einige gängige Kategorien von Lizenzen an, die Sie im Internet wahrscheinlich finden werden.

#### Alle Rechte vorbehalten

Ersteller originaler Arbeiten wie Songs, Bücher oder Software veröffentlichen ihre Werke oft unter geschlossenem Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusiven Rechte zur Nutzung (zum Beispiel zum Anzeigen oder Verteilen) ihrer Werke haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer Lizenz "alle Rechte vorbehalten" verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich die ausdrückliche, schriftliche Genehmigung des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr für die Nutzung. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("lizenzfrei") sein, oder sie kann "rechteverwaltet" sein, in welchem Fall Sie spezifische Gebühren pro Nutzung in bestimmten Zeitfenstern, geografischen Regionen, Branchen oder Medientypen usw. zahlen müssen.
- Beschränken Sie Ihre Nutzung auf diejenigen, die in Ihrer Rechtsprechung als [fair use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen würden.

Autoren müssen ihrer Arbeit keinen Urheberrechtshinweis oder Lizenzbedingungen beifügen. Urheberrecht besteht automatisch in einem Originalwerk, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also online ein Bild finden und keine Urheberrechtsvermerke oder Lizenzbedingungen vorliegen, ist der sicherste Weg, davon auszugehen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Permissiv

Wenn das Bild unter einer permissiven Lizenz veröffentlicht wird, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC)-Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder die Genehmigung zur Verwendung einholen. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen und die je nach Lizenz variieren.

Zum Beispiel könnte es erforderlich sein:

- Einen Link zur Originalquelle des Bildes zu teilen und den Urheber zu nennen.
- Anzugeben, ob Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Arbeiten, die das Bild verwenden, unter derselben Lizenz wie das Original freizugeben.
- Keine abgeleiteten Arbeiten überhaupt zu teilen.
- Das Bild in keiner kommerziellen Arbeit zu verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, beizufügen.

Sie sollten die geltende Lizenz konsultieren, um die spezifischen Bedingungen zu erfahren, die Sie befolgen müssen.

> [!NOTE]
> Sie könnten in Zusammenhang mit permissiven Lizenzen auf den Begriff "copyleft" stoßen. Copyleft-Lizenzen (wie beispielsweise die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons Lizenzen) besagen, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Software-Welt weit verbreitet. Die grundlegende Idee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts ebenfalls für andere zum Studium und zur Modifikation verfügbar gemacht wird. Beachten Sie, dass Lizenzen, die für Software verfasst wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für nicht-software-basierte Werke angesehen werden, da sie nicht mit Nicht-Software-Arbeiten im Sinn entworfen wurden.

Erkunden Sie die Links, die weiter oben in diesem Abschnitt bereitgestellt werden, um mehr über die verschiedenen Lizenztypen und die darin genannten Bedingungen zu erfahren.

#### Gemeinfrei/CC0

Als "gemeinfrei" veröffentlichtes Werk wird manchmal als "keine Rechte vorbehalten" bezeichnet - es unterliegt keinem Urheberrecht und kann ohne Genehmigung und ohne Erfüllung von Lizenzbedingungen verwendet werden. Ein Werk kann auf verschiedenen Wegen als gemeinfrei enden, wie zum Beispiel durch Ablauf des Urheberrechts oder durch spezifischen Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, ein Werk in die gemeinfreie Verwendung zu stellen, besteht darin, es unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer spezifischen Creative-Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Wenn Sie gemeinfreie Bilder verwenden, besorgen Sie sich einen Beweis dafür, dass das Bild gemeinfrei ist, und bewahren Sie den Beweis für Ihre Unterlagen auf. Beispielsweise können Sie einen Screenshot der Originalquelle mit dem eindeutig dargestellten Lizenzstatus machen und in Erwägung ziehen, eine Seite auf Ihrer Website mit einer Liste der erworbenen Bilder und deren Lizenzanforderungen hinzuzufügen.

### Nach Bildern mit permissiven Lizenzen suchen

Sie können über eine Bildsuchmaschine oder direkt über Bildrepositorien nach Bildern mit permissiven Lizenzen für Ihre Projekte suchen.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des gesuchten Bildes zusammen mit den relevanten Lizenzbedingungen verwenden. Beispiel: Bei der Suche nach "gelber Dinosaurier" fügen Sie "gemeinfreie Bilder", "gemeinfreie Bildbibliothek", "offen lizenzierte Bilder" oder ähnliche Begriffe in die Suchanfrage ein.

Einige Suchmaschinen haben Tools, die Ihnen helfen, Bilder mit permissiven Lizenzen zu finden. Beispiel: Bei der Verwendung von Google klicken Sie auf die Registerkarte "Bilder", um nach Bildern zu suchen. Anschließend klicken Sie auf "Tools". In der daraufhin angezeigten Symbolleiste gibt es ein Dropdown-Menü "Nutzungsrechte", in dem Sie spezifisch nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bildrepositorien wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, mit denen Sie speziell nach Bildern mit permissiven Lizenzen suchen können. Einige Seiten verteilen ausschließlich permissiv lizenzierte Bilder und Icons, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Das Einhalten der Lizenz, unter der das Bild veröffentlicht wurde, erfordert das Auffinden der Lizenzdetails, das Lesen der Lizenz- oder Anleitungsseite, die von der Quelle bereitgestellt wird, und dann das Befolgen dieser Anweisungen. Seriöse Bildrepositorien machen ihre Lizenzbedingungen klar und leicht auffindbar.

## Bilder annotieren mit Figuren und Bildunterschriften

Was Untertitel betrifft, gibt es verschiedene Möglichkeiten, wie Sie Ihrem Bild eine Bildunterschrift hinzufügen können. Zum Beispiel würde nichts dagegen sprechen, dies zu tun:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

Das ist in Ordnung. Es enthält die benötigten Inhalte und ist gut mit CSS stilisierbar. Aber es gibt ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Beschriftung verlinkt, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Beschriftungen haben, welche Beschriftung gehört zu welchem Bild?

Eine bessere Lösung ist die Verwendung der HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Diese sind genau zu diesem Zweck erstellt: um ein semantisches Behältnis für Figuren bereitzustellen und die Figur klar mit der Beschriftung zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    A T-Rex on display in the Manchester University Museum.
  </figcaption>
</figure>
```

Das Element {{htmlelement("figcaption")}} teilt Browsern und assistiven Technologien mit, dass die Beschriftung den anderen Inhalt des Elements {{htmlelement("figure")}} beschreibt.

> [!NOTE]
> Aus einer Barrierefreiheitsperspektive haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Element/img#alt) Texte unterschiedliche Rollen. Bildunterschriften nutzen sogar Menschen, die das Bild sehen können, hingegen bietet der [`alt`](/de/docs/Web/HTML/Element/img#alt) Text die gleiche Funktionalität wie ein fehlendes Bild. Daher sollten Bildunterschriften und `alt`-Text nicht einfach das Gleiche sagen, da sie beide erscheinen, wenn das Bild fehlt. Versuchen Sie, die Bilder in Ihrem Browser zu deaktivieren, und sehen Sie, wie es aussieht.

Eine Figur muss nicht unbedingt ein Bild sein. Sie ist eine unabhängige Einheit von Inhalten, die:

- Ihre Bedeutung auf kompakte, leicht verständliche Weise ausdrückt.
- An verschiedenen Stellen im linearen Ablauf der Seite erscheinen könnte.
- Wesentliche Informationen bietet, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, einen Codeausschnitt, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Eine Figur erstellen

In diesem aktiven Lernabschnitt möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und ihn in eine Figur umwandeln:

1. Verpacken Sie ihn in ein {{htmlelement("figure")}} Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und fügen Sie den Text in ein {{htmlelement("figcaption")}} Element unter dem Bild ein.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche rückgängig machen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_creating_a_figure', 700, 350) }}

## CSS-Hintergrundbilder

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*` Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das eingebettete Bild ist möglicherweise einfacher zu positionieren und zu steuern als HTML-Bilder. Warum also HTML-Bilder verwenden? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie lediglich etwas Schönes hinzufügen möchten, um Ihre Seite visuell zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keine Textäquivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend, wenn ein Bild eine Bedeutung im Sinne Ihrer Inhalte hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild reine Dekoration ist, sollten Sie CSS-Hintergrundbilder verwenden (diese werden wir später in den Kernmodulen detailliert besprechen).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen - siehe [Testen Sie Ihre Fähigkeiten: HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images).

## Zusammenfassung

Das war alles für jetzt. Wir haben Bilder und Beschriftungen im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns ansehen, wie HTML verwendet werden kann, um Video- und Audiomaterial in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
