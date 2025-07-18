---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie beim Hineinzoomen oder Vergrößern nicht pixelig werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine solche Grafik in Ihre Webseite einbinden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Grundlagen von HTML</a>
        kennen und wissen, wie man
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >ein Bild in Ihr Dokument einfügt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man ein SVG (Vektor-) Bild in eine Webseite einbettet.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel beabsichtigt nicht, Ihnen SVG beizubringen; sondern was es ist und wie man es zu Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web wird mit zwei Arten von Bildern gearbeitet — **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** werden mithilfe eines Rasters von Pixeln definiert — eine Rasterbilddatei enthält Informationen darüber, wo jedes Pixel genau platziert werden soll und welche Farbe es haben soll. Beliebte Web-Rasterformate sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mithilfe von Algorithmen definiert — eine Vektorbilddatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um das auf dem Bildschirm gerenderte Bild darzustellen. Das {{Glossary("SVG", "SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für den Einsatz im Web zu erstellen.

Um den Unterschied zwischen den beiden zu verdeutlichen, schauen wir uns ein Beispiel an. Sie können dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) finden — es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied ist, dass das linke ein PNG und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie in die Seite hineinzoomen — das PNG-Bild wird beim Hineinzoomen pixelig, da es Informationen darüber enthält, wo jedes Pixel sein soll (und welche Farbe es hat). Beim Zoomen wird jedes Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, weshalb das Bild blockig zu wirken beginnt. Das Vektorbild hingegen bleibt schön und scharf, da unabhängig von der Größe die Algorithmen verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte beim Vergrößern skaliert werden.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder im Zoom, eines scharf und das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind tatsächlich alles PNGs — wobei der Stern auf der linken Seite in jedem Fall ein Rasterbild und der Stern auf der rechten Seite ein Vektorbild darstellt. Schauen Sie sich erneut das [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein echtes Beispiel an!

Darüber hinaus sind Vektorbilddateien viel leichter als ihre Rasteräquivalente, da sie nur eine Handvoll Algorithmen enthalten müssen, anstatt Informationen über jedes einzelne Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Im Grunde handelt es sich um Markup, ähnlich wie HTML, nur dass Sie viele verschiedene Elemente zur Definition der Formen haben, die in Ihrem Bild erscheinen sollen, sowie der Effekte, die auf diese Formen angewendet werden sollen. SVG dient der Markierung von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung grundlegender Formen wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen wie {{svgelement("path")}} und {{svgelement("polygon")}}. Zu den fortschrittlicheren SVG-Funktionen gehören {{svgelement("feColorMatrix")}} (Transformation von Farben mithilfe einer Transformationsmatrix), {{svgelement("animate")}} (Animation von Teilen Ihrer Vektorgrafik) und {{svgelement("mask")}} (Anwendung einer Maske über Ihrem Bild).

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

Dies erzeugt die folgende Ausgabe:

{{ EmbedLiveSample('What_is_SVG', 300, 240, "", "") }}

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG einfach von Hand zu codieren ist. Ja, Sie können einfache SVGs in einem Texteditor von Hand codieren, aber für ein komplexes Bild wird dies schnell sehr schwierig. Die meisten Menschen verwenden zum Erstellen von SVG-Bildern einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://de.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Annäherungen an Fotos zu erstellen (zum Beispiel über die Bitmap-Nachzeichnungsfunktion von Inkscape).

SVG bietet neben den bisher beschriebenen Vorteilen einige zusätzliche Vorteile:

- Text in Vektorbildern bleibt zugänglich (wovon auch Ihr {{Glossary("SEO", "SEO")}} profitiert).
- SVGs eignen sich gut für Styling/Scripting, da jede Komponente des Bildes ein Element ist, das über CSS gestylt oder über JavaScript geskriptet werden kann.

Warum sollte also jemand Rastergrafiken gegenüber SVG verwenden wollen? SVG hat einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was dazu führen kann, dass die Dateigröße wächst; komplexe SVGs können auch viel Verarbeitungszeit im Browser beanspruchen.
- SVG kann je nach Art des zu erstellenden Bildes schwieriger zu erstellen sein als Rasterbilder.

Rastergrafiken sind aus den oben genannten Gründen möglicherweise besser für komplexe Präzisionsbilder wie Fotos geeignet.

SVG-Grafiken, die aus Editoren wie Inkscape exportiert werden, bieten großes Potenzial für eine Größenoptimierung. Bevor Sie sie im Web bereitstellen, sollten Sie sie wahrscheinlich durch einen SVG-Optimierer wie [SVGO](https://www.npmjs.com/package/svgo) laufen lassen.

## Hinzufügen von SVG zu Ihren Seiten

In diesem Abschnitt gehen wir die verschiedenen Möglichkeiten durch, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur im `src`-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder ein `width`-Attribut (oder beides, wenn Ihr SVG kein inhärentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Wenn Sie dies noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textequivalent im `alt`-Attribut verfügbar.
- Sie können das Bild leicht in einen Hyperlink umwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einbetten.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten aller Seiten führt, die das Bild in Zukunft verwenden.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie im SVG-Code Inline-CSS-Stile einfügen. (Von der SVG-Datei aufgerufene externe Stylesheets haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) umgestalten.

### Fehlersuche und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (Internet Explorer 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG aus Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut verwenden (das nur neuere Browser erkennen), um das SVG zu referenzieren. In diesem Fall laden nur unterstützende Browser das SVG — ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im untenstehenden Code verwenden ältere Browser das PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mit CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und denselben CSS-Einschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, liegt es möglicherweise daran, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, wird Sie dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihrem HTML einbindet

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen — das wird manchmal als "SVG inline setzen" oder "SVG inlining" bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>`-Starttag beginnt und mit einem `</svg>`-Endtag endet. Hier ist ein sehr einfaches Beispiel dafür, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihres SVGs inline spart eine HTTP-Anfrage und kann daher Ihre Ladezeit ein wenig reduzieren.
- Sie können `class`es und `id`s SVG-Elementen zuweisen und sie mit CSS stylen, entweder innerhalb des SVGs oder dort, wo Sie die CSS-Stilregeln für Ihr HTML-Dokument festlegen. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Einbinden von SVG ist der einzige Ansatz, der es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink umwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einbetten.

#### Nachteile

- Diese Methode ist nur geeignet, wenn Sie das SVG nur an einer Stelle verwenden. Duplikate führen zu ressourcenintensiver Wartung.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann inline SVGs nicht wie reguläre Bildressourcen zwischenspeichern, sodass Seiten, die das Bild enthalten, nicht schneller geladen werden, nachdem die erste Seite mit dem Bild geladen wurde.
- Sie können ein Fallback in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich sinnvoll ist, nur um veraltete Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser genauso wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es in [Von `<object>` zu `<iframe>` — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) gelernt haben.

Hier eine kurze Wiederholung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode zur Auswahl:

#### Nachteile

- `iframe`s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn sie `iframe`s überhaupt nicht unterstützen.
- Darüber hinaus können Sie, es sei denn, das SVG und Ihre aktuelle Webseite haben denselben {{Glossary("origin", "Ursprung")}}, JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Experimentieren mit SVG

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie aus Spaß mit einigen SVGs experimentieren. Im _Eingabe_-Abschnitt unten sehen Sie, dass wir Ihnen bereits einige Beispiele bereitgestellt haben, um Ihnen den Einstieg zu erleichtern. Sie können auch zum [SVG-Element-Referenz](/de/docs/Web/SVG/Reference/Element) gehen, um mehr über andere Elemente zu erfahren, die Sie in SVG verwenden können, und diese ebenfalls ausprobieren. Dieser Abschnitt dreht sich darum, Ihre Recherchefähigkeiten zu üben und etwas Spaß zu haben.

Wenn Sie feststecken und Ihr Code nicht funktioniert, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste zurücksetzen.

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

const htmlSolution = "";
let solutionEntry = htmlSolution;

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

{{ EmbedLiveSample('Active_Learning_Playing_with_SVG', 700, 540) }}

## Zusammenfassung

Dieser Artikel hat Ihnen einen schnellen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum es nützlich sein kann, darüber Bescheid zu wissen, und wie man SVG in seine Webseiten einbindet. Es war nie als vollständiger Leitfaden zum Erlernen von SVG gedacht, sondern als Hinweis darauf, was SVG ist, wenn Sie ihm auf Ihren Reisen im Web begegnen. Also machen Sie sich keine Sorgen, wenn Sie sich noch nicht als SVG-Experte fühlten. Wir haben einige Links unten eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
