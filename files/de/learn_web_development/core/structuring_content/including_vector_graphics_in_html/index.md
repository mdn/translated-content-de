---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

Vektorgrafiken sind in vielen Situationen sehr nützlich — sie haben kleine Dateigrößen und sind hochgradig skalierbar, sodass sie nicht verpixeln, wenn sie vergrößert oder auf eine große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden.

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
      <td>Lernen Sie, wie man ein SVG (Vektor-) Bild in eine Webseite einbettet.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel beabsichtigt nicht, Ihnen SVG beizubringen, sondern zu zeigen, was es ist und wie man es zu Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbildern** und **Vektorbildern**:

- **Rasterbilder** werden über ein Raster aus Pixeln definiert — eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jedes Pixel zu platzieren ist und welche Farbe es haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden über Algorithmen definiert — eine Vektorbilderdatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um herauszufinden, wie das Bild auf dem Bildschirm aussehen soll. Das {{Glossary("SVG", "SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für die Verwendung im Web zu erstellen.

Um Ihnen eine Vorstellung des Unterschieds zwischen den beiden zu geben, betrachten wir ein Beispiel. Sie finden dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — es zeigt zwei scheinbar identische Bilder nebeneinander, von einem roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke Bild ein PNG ist und das rechte ein SVG-Bild.

Der Unterschied wird deutlich, wenn Sie die Seite vergrößern — das PNG-Bild wird verpixelt, wenn Sie hineinzoomen, weil es Informationen darüber enthält, wo jedes Pixel sein soll (und welche Farbe). Wenn es vergrößert wird, wird jedes Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild klobig wirkt. Das Vektorbild hingegen bleibt schön und klar, denn egal in welcher Größe, die Algorithmen werden verwendet, um die Formen im Bild zu berechnen, wobei die Werte skaliert werden, je größer es wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder herangezoomt, eines klar und das andere verschwommen](raster-vector-zoomed.png)

> [!NOTE]
> Die Bilder oben sind eigentlich alle PNGs — der Stern auf der linken Seite in jedem Fall repräsentiert ein Rasterbild, und der Stern auf der rechten Seite repräsentiert ein Vektorbilderbild. Gehen Sie zur [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html)-Demo für ein echtes Beispiel!

Außerdem sind Vektorbilderdateien viel leichter als ihre Rasteräquivalente, weil sie nur eine Handvoll Algorithmen enthalten müssen und nicht Informationen zu jedem einzelnen Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde Markup, wie HTML, außer dass Sie viele verschiedene Elemente haben, um die Formen zu definieren, die Sie in Ihrem Bild erscheinen lassen möchten, und die Effekte, die Sie auf diese Formen anwenden möchten. SVG ist zum Markieren von Grafiken, nicht von Inhalten. SVG definiert Elemente zum Erstellen einfacher Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zum Erstellen komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Fortgeschrittene SVG-Funktionen umfassen {{svgelement("feColorMatrix")}} (Farben mit einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über das Bild legen).

Als einfaches Beispiel erstellt der folgende Code einen Kreis und ein Rechteck:

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

Das erzeugt die folgende Ausgabe:

{{ EmbedLiveSample('What_is_SVG', 300, 240, "", "") }}

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG leicht von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand codieren, aber für ein komplexes Bild wird das schnell sehr schwierig. Für das Erstellen von SVG-Bildern verwenden die meisten Leute einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://de.wikipedia.org/wiki/Adobe_Illustrator). Diese Software ermöglicht es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Näherungen von Fotos zu erstellen (zum Beispiel die Trace Bitmap-Funktion von Inkscape).

SVG hat einige zusätzliche Vorteile neben den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut zum Stylen/Skripten, da jede Komponente des Bildes ein Element ist, das mit CSS gestylt oder mit JavaScript geskriptet werden kann.

Warum würde also jemand Rastergrafiken über SVG verwenden? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch erhebliche Verarbeitungszeiten im Browser in Anspruch nehmen.
- SVG kann schwieriger zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind vermutlich besser für komplexe Präzisionsbilder wie Fotos geeignet, aus den oben beschriebenen Gründen.

> [!NOTE]
> In Inkscape speichern Sie Ihre Dateien als Plain SVG, um Speicherplatz zu sparen. Beachten Sie auch diesen [Artikel, der beschreibt, wie Sie SVGs für das Web vorbereiten](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## SVG in Ihre Seiten einfügen

In diesem Abschnitt gehen wir die verschiedenen Möglichkeiten durch, wie Sie SVG-Vektorgrafiken in Ihre Webseiten einfügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur im src-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height` oder ein `width` Attribut (oder beide, wenn Ihr SVG kein inhärentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Falls Sie es noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textequivalent im `alt`-Attribut.
- Sie können das Bild leicht in einen Hyperlink umwandeln, indem Sie das `<img>`-Tag in ein {{htmlelement("a")}}-Element einfügen.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in Zukunft verwendet.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihrem SVG-Code einfügen. (Externe Stylesheets, die von der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) umgestalten.

### Fehlerbehebung und plattformübergreifender Support

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG vom `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut verwenden (das nur neuere Browser erkennen), um das SVG zu referenzieren. In diesem Fall laden nur unterstützende Browser das SVG — ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können auch SVGs als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im folgenden Code bleiben ältere Browser beim PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der `<img>`-Methode, die oben beschrieben wurde, bedeutet das Einfügen von SVGs mithilfe von CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und denselben CSS-Einschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, wird dieser [Artikel Ihnen auf die richtige Spur verhelfen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started_#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihr HTML einfügt

Sie können die SVG-Datei auch in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen — dies wird manchmal als Intasklusion von **SVG inline** oder **Inlining SVG** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Schnipsel mit einem `<svg>`-Starttag beginnt und mit einem `</svg>`-End-Tag endet. Hier ist ein sehr einfaches Beispiel dafür, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Inlining von SVG spart eine HTTP-Anfrage und kann daher Ihre Ladezeit etwas verkürzen.
- Sie können `class`- und `id`-Werte zu SVG-Elementen zuweisen und sie mit CSS stylen, entweder innerhalb der SVG oder wo auch immer Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Inline-Verwenden von SVG ist der einzige Ansatz, der Ihnen erlaubt, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (auch in Ihrem regulären Stylesheet.)
- Sie können SVG-Markup in einen Hyperlink umwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einwickeln.

#### Nachteile

- Diese Methode ist nur geeignet, wenn Sie das SVG nur an einer Stelle verwenden. Duplikate führen zu ressourcenintensiver Wartung.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann Inline SVG nicht zwischenspeichern, wie er reguläre Bildressourcen zwischenspeichern würde, sodass Seiten, die das Bild einschließen, nach dem Laden der ersten Seite mit dem Bild nicht schneller geladen werden.
- Sie können einen Fallback in einem {{svgelement("foreignObject")}}-Element einschließen, aber Browser, die SVG unterstützen, laden trotzdem alle Fallback-Bilder herunter. Sie müssen sich überlegen, ob der zusätzliche Aufwand wirklich lohnenswert ist, nur um veraltete Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser genauso öffnen wie Webseiten. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genau wie wir es in [Von `<object>` zu `<iframe>` — allgemeine Einbettungstechniken](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) studiert haben.

Hier ist eine kurze Übersicht:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode:

#### Nachteile

- `iframe`s haben einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn sie gar keine Unterstützung für `iframe`s haben.
- Darüber hinaus können Sie, es sei denn das SVG und Ihre aktuelle Webseite haben denselben {{Glossary("origin", "Ursprung")}}, JavaScript nicht auf Ihrer Hauptwebseite verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Mit SVG spielen

In diesem Abschnitt für aktives Lernen möchten wir, dass Sie etwas SVG zum Spaß ausprobieren. Im Abschnitt _Input_ unten sehen Sie, dass wir Ihnen bereits einige Beispiele zur Verfügung gestellt haben, um Ihnen den Start zu erleichtern. Sie können auch zum [SVG-Element-Referenz](/de/docs/Web/SVG/Reference/Element) gehen, um mehr Details über andere Spielzeuge, die Sie mit SVG verwenden können, herauszufinden und diese ebenfalls auszuprobieren. Dieser Abschnitt ist ganz darauf ausgelegt, Ihre Recherchefähigkeiten zu üben und Spaß zu haben.

Wenn Sie stecken bleiben und Ihren Code nicht zum Laufen bekommen, können Sie ihn immer mit der _Reset_-Taste zurücksetzen.

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

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum es nützlich ist, darüber Bescheid zu wissen, und wie Sie SVG in Ihre Webseiten einbinden können. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Erlernen von SVG zu sein, sondern ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie ihm auf Ihren Reisen im Web begegnen. Also machen Sie sich keine Sorgen, wenn Sie sich noch nicht als SVG-Experte fühlen. Wir haben einige Links unten eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started_) auf MDN
- [Sara Soueidans Tutorial über responsive SVG-Bilder](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Zugänglichkeitsvorteile von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
