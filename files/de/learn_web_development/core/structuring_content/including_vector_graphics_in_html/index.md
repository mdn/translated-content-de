---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht verpixeln, wenn man sie vergrößert. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Grundlagen von HTML</a>
        kennen und wissen, wie man
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images">ein Bild in Ihr Dokument einfügt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man ein SVG (Vektor-)Bild in eine Webseite einbettet.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht beibringen, wie SVG funktioniert, sondern nur, was es ist und wie man es auf Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern – **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** werden mittels eines Pixelrasters definiert – eine Rasterbilddatei enthält Informationen darüber, wo jeder Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mit Algorithmen definiert – eine Vektorbilderdatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um das Aussehen des Bildes bei der Bildschirmdarstellung zu bestimmen. Das {{Glossary("SVG", "SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für die Nutzung im Web zu erstellen.

Um Ihnen eine Vorstellung vom Unterschied zwischen beiden zu geben, schauen wir uns ein Beispiel an. Dieses Beispiel finden Sie live in unserem GitHub-Repo unter [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) – es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke ein PNG und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie die Seite vergrößern – das PNG-Bild wird pixelig, da es Informationen darüber enthält, wo jeder Pixel sein soll (und welche Farbe er haben soll). Beim Zoomen wird jeder Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild blockartig aussieht. Das Vektorbild hingegen bleibt schön und klar, da, egal wie groß es ist, die Algorithmen verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte skaliert werden, wenn es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder, herangezoomt, eines scharf und das andere verschwommen](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind tatsächlich alle PNGs – der linke Stern stellt in jedem Fall ein Rasterbild dar, der rechte Stern ein Vektorbild. Gehen Sie erneut zur [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein echtes Beispiel!

Außerdem sind Vektorbilderdateien viel leichter als ihre Rasteräquivalente, weil sie nur eine Handvoll von Algorithmen halten müssen, statt Informationen über jeden einzelnen Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine auf {{Glossary("XML", "XML")}} basierende Sprache zur Beschreibung von Vektorbildern. Es ist im Wesentlichen eine Markup-Sprache wie HTML, nur dass Sie viele verschiedene Elemente zum Definieren der Formen haben, die in Ihrem Bild erscheinen sollen, und der Effekte, die Sie auf diese Formen anwenden möchten. SVG dient zum Markieren von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung grundlegender Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie für komplexere Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Fortgeschrittene SVG-Funktionen umfassen {{svgelement("feColorMatrix")}} (Farben mittels einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über das Bild legen).

Ein einfaches Beispiel: Der folgende Code erstellt einen Kreis und ein Rechteck:

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

Dies erzeugt die folgende Ausgabe:

{{ EmbedLiveSample('What_is_SVG', 300, 240, "", "") }}

Aus dem obigen Beispiel können Sie vielleicht den Eindruck gewinnen, dass SVG einfach von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand kodieren, aber für ein komplexes Bild wird dies schnell sehr schwierig. Zur Erstellung von SVG-Bildern benutzen die meisten Menschen einen Vektorgrafikeditor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Annäherungen von Fotos zu erstellen (zum Beispiel Inkscapes Funktionen zur Bitmap-Nachzeichnung).

SVG hat einige zusätzliche Vorteile neben den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was sich auch positiv auf Ihr {{Glossary("SEO", "SEO")}} auswirkt).
- SVGs sind gut für die Gestaltung/Programmierung geeignet, weil jeder Bestandteil des Bildes ein Element ist, das über CSS gestylt und über JavaScript gescripted werden kann.

Warum sollte man Rastergrafiken gegenüber SVGs bevorzugen? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell kompliziert werden, wodurch die Dateigröße wachsen kann; komplexe SVGs können auch eine erhebliche Verarbeitungszeit im Browser erfordern.
- SVG ist je nach Art des Bildes, das Sie erstellen möchten, möglicherweise schwieriger zu erstellen als Rasterbilder.

Rastergrafiken sind aus den oben beschriebenen Gründen bei komplexen Präzisionsbildern wie Fotos womöglich besser.

> [!NOTE]
> Speichern Sie in Inkscape Ihre Dateien als Plain SVG, um Platz zu sparen. Lesen Sie auch diesen [Artikel darüber, wie man SVGs für das Web vorbereitet](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Hinzufügen von SVG zu Ihren Seiten

In diesem Abschnitt gehen wir die verschiedenen Methoden durch, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubinden, müssen Sie es nur im src-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder ein `width`-Attribut (oder beides, wenn Ihr SVG kein inhärentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Falls Sie dies noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textequivalent im `alt`-Attribut.
- Sie können das Bild einfach in einen Hyperlink verwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einbetten.
- Die SVG-Datei kann vom Browser gecacht werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in Zukunft lädt.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihren SVG-Code einfügen. (Von der SVG-Datei aufgerufene externe Stylesheets haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu gestalten.

### Fehlerbehebung und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), können Sie ein PNG oder JPG aus Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut verwenden (das nur von neueren Browsern erkannt wird), um das SVG zu referenzieren. In diesem Fall laden nur unterstützende Browser das SVG – ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im untenstehenden Code bleiben ältere Browser beim PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>`-Methode können SVGs, die als CSS-Hintergrundbilder eingefügt werden, nicht mit JavaScript manipuliert werden und unterliegen den gleichen CSS-Beschränkungen.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, liegt das möglicherweise daran, dass Ihr Server nicht richtig eingerichtet ist. Falls dies das Problem ist, wird Sie dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### So können Sie SVG-Code in Ihr HTML einfügen

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und ihn in Ihr HTML-Dokument einfügen – dies wird manchmal als **SVG inline stellen** oder **SVG inlinen** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>`-Starttag beginnt und mit einem `</svg>`-Endtag endet. Hier ist ein sehr einfaches Beispiel dessen, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Inline-Stellen von SVG spart eine HTTP-Anfrage und kann somit Ihre Ladezeit etwas reduzieren.
- Sie können `class`es und `id`s SVG-Elementen zuweisen und sie mit CSS stylen, entweder innerhalb des SVG oder wo auch immer Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Darstellungsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Inlinen von SVG ist der einzige Ansatz, der es erlaubt, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihr SVG-Bild anzuwenden (auch in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink umwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einwickeln.

#### Nachteile

- Diese Methode ist nur geeignet, wenn Sie das SVG nur an einer Stelle verwenden. Duplikation führt zu ressourcenintensiver Wartung.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann interne SVGs nicht so cachen, wie er reguläre Bildressourcen cachen würde, sodass Seiten, die das Bild enthalten, nicht schneller geladen werden, nachdem die erste Seite mit dem Bild geladen wurde.
- Sie können einen Fallback in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnenswert ist, nur um veraltete Browser zu unterstützen.

### So bettet man ein SVG mit einem `iframe` ein

Sie können SVG-Bilder in Ihrem Browser genauso öffnen wie Webseiten. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genau wie wir es in [Von `<object>` zu `<iframe>` – allgemeine Embedding-Technologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) behandelt haben.

Hier eine kurze Wiederholung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode:

#### Nachteile

- `iframe`s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur dann an, wenn sie `iframe`s überhaupt nicht unterstützen.
- Zudem können Sie, es sei denn das SVG und Ihre aktuelle Webseite haben denselben {{Glossary("origin", "Origin")}}, JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Spielen mit SVG

In diesem aktiven Lernabschnitt möchten wir, dass Sie ausprobieren, aus Spaß mit etwas SVG zu spielen. Im _Eingabe_-Bereich unten sehen Sie, dass wir Ihnen bereits einige Beispiele geliefert haben, um Ihnen den Einstieg zu erleichtern. Sie können auch das [SVG-Element-Referenz](/de/docs/Web/SVG/Reference/Element) besuchen, um weitere Details über andere Tools zu finden, die Sie in SVG verwenden können, und diese ebenfalls ausprobieren. Dieser Abschnitt dreht sich um die Verbesserung Ihrer Recherchefähigkeiten und um Spaß zu haben.

Wenn Sie stecken bleiben und Ihren Code nicht zum Laufen bekommen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Hello!
    </text>
  </svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" disabled />
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
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const htmlSolution = "";
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
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

{{ EmbedLiveSample('Active_Learning_Playing_with_SVG', 700, 540) }}

## Zusammenfassung

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum sie nützlich sind und wie man SVG in seine Webseiten einfügen kann. Er war nie als vollständiger Leitfaden zum Erlernen von SVG gedacht, sondern als Richtungsweiser, damit Sie wissen, was SVG ist, wenn Sie ihm auf Ihren Reisen im Web begegnen. Seien Sie also nicht besorgt, wenn Sie sich noch nicht als SVG-Experte fühlen. Wir haben einige Links unten eingefügt, die Ihnen weiterhelfen können, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial über responsive SVG-Bilder](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Zugänglichkeitsvorteile von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
