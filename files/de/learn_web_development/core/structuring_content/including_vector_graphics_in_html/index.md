---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht pixelig werden, wenn sie vergrößert oder auf eine große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine solche Grafik in Ihre Webseite einfügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Grundlagen von HTML</a>
        kennen und wissen, wie Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >ein Bild in Ihr Dokument einfügen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie, wie Sie ein SVG (Vektor-) Bild in eine Webseite einbetten.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel beabsichtigt nicht, Ihnen SVG beizubringen; nur was es ist und wie man es auf Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** werden mit einem Raster von Pixeln definiert — eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jedes Pixel platziert werden soll und welche Farbe es haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mit Algorithmen definiert — eine Vektorbilddatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um herauszufinden, wie das Bild bei der Anzeige auf dem Bildschirm aussehen soll. Das {{Glossary("SVG", "SVG")}} Format ermöglicht es uns, leistungsstarke Vektorgrafiken für das Web zu erstellen.

Um Ihnen eine Vorstellung von dem Unterschied zwischen den beiden zu geben, schauen wir uns ein Beispiel an. Sie können dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) finden – es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied ist, dass das linke ein PNG ist und das rechte ein SVG-Bild.

Der Unterschied wird deutlich, wenn Sie die Seite vergrößern – das PNG-Bild wird pixelig, wenn Sie hineinzoomen, weil es Informationen darüber enthält, wo jedes Pixel sein soll (und welche Farbe). Beim Vergrößern wird jedes Pixel in der Größe erhöht, um mehrere Pixel auf dem Bildschirm auszufüllen, sodass das Bild blockig aussieht. Das Vektorbild hingegen sieht weiterhin schön und klar aus, da, egal in welcher Größe es ist, die Algorithmen verwendet werden, um die Formen im Bild zu ermitteln, wobei die Werte skaliert werden, wenn es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder vergrößert, eines klar und das andere verschwommen](raster-vector-zoomed.png)

> [!NOTE]
> Die oben gezeigten Bilder sind tatsächlich alle PNGs – mit dem linken Stern in jedem Fall, der ein Rasterbild repräsentiert, und dem rechten Stern, der ein Vektorbild repräsentiert. Gehen Sie noch einmal zu dem [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein echtes Beispiel!

Zudem sind Vektorbilddateien deutlich kleiner als ihre Rasteräquivalente, da sie nur eine Handvoll Algorithmen enthalten müssen, anstatt Informationen zu jedem Pixel im Bild individuell.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde Markup, wie HTML, außer dass Sie viele verschiedene Elemente haben, um die Formen zu definieren, die Sie in Ihrem Bild erscheinen lassen möchten, und die Effekte, die Sie auf diese Formen anwenden möchten. SVG dient zur Auszeichnung von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung von Grundformen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Fortgeschrittenere SVG-Funktionen umfassen {{svgelement("feColorMatrix")}} (Farben mit einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

Ein einfaches Beispiel: Der folgende Code erzeugt einen Kreis und ein Rechteck:

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

Vom obigen Beispiel her könnte man den Eindruck bekommen, dass SVG leicht von Hand zu kodieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand kodieren, aber für ein komplexes Bild wird dies schnell sehr schwierig. Zum Erstellen von SVG-Bildern verwenden die meisten Leute einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Annäherungen an Fotos zu erstellen (zum Beispiel die Funktion "Bitmap nachzeichnen" von Inkscape).

SVG hat einige zusätzliche Vorteile neben den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut zum Stylen/Skripting, da jeder Bestandteil des Bildes ein Element ist, das per CSS gestylt oder per JavaScript geskriptet werden kann.

Warum sollte jemand Rastergrafiken über SVG verwenden? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell komplex werden, was dazu führen kann, dass Dateigrößen steigen; komplexe SVGs können auch erhebliche Verarbeitungszeit im Browser erfordern.
- SVG kann schwerer zu erstellen sein als Rasterbilder, abhängig davon, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind vermutlich besser für komplexe Präzisionsbilder wie Fotos geeignet, aus den oben beschriebenen Gründen.

> [!NOTE]
> In Inkscape sollten Sie Ihre Dateien als Plain SVG speichern, um Platz zu sparen. Bitte sehen Sie sich auch diesen [Artikel an, der beschreibt, wie SVGs für das Web vorbereitet werden](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## SVG zu Ihren Seiten hinzufügen

In diesem Abschnitt durchgehen wir die verschiedenen Möglichkeiten, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img` Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur im `src`-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder `width`-Attribut (oder beides, wenn Ihr SVG kein inhärentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Falls Sie es noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textequivalent im `alt`-Attribut.
- Sie können das Bild leicht zu einem Hyperlink machen, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einbetten.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten führt für jede Seite, die das Bild in Zukunft nutzt.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihren SVG-Code einfügen. (Externe Stylesheets, die von der SVG-Datei her aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu stylen.

### Problemlösung und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), können Sie ein PNG oder JPG von Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut (das nur von neueren Browsern erkannt wird) verwenden, um das SVG zu referenzieren. In diesem Fall wird nur das SVG von unterstützenden Browsern geladen – ältere Browser laden das PNG stattdessen:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. In dem untenstehenden Code bleiben ältere Browser beim ihnen bekannten PNG, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der `<img>`-Methode oben beschrieben, bedeutet das Einfügen von SVGs mithilfe von CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und auch den gleichen CSS-Einschränkungen unterliegt.

Sollten Ihre SVGs gar nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, zeigt Sie dieser [Artikel in die richtige Richtung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Wie Sie SVG-Code in Ihr HTML einfügen

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – dies wird manchmal als **SVG inline einfügen** oder **Inlining SVG** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>`-Start-Tag beginnt und mit einem `</svg>`-End-Tag endet. Hier ist ein sehr einfaches Beispiel, das Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen von SVG inline spart eine HTTP-Anfrage und kann somit Ihre Ladezeit geringfügig verringern.
- Sie können `class`en und `id`s SVG-Elementen zuweisen und sie mit CSS stylen, entweder innerhalb des SVG oder wo immer Sie die CSS-Stilregeln für Ihr HTML-Dokument setzen. Tatsächlich können Sie jedes [SVG Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Inlining SVG ist der einzige Ansatz, der CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild ermöglicht (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink umwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einbetten.

#### Nachteile

- Diese Methode ist nur geeignet, wenn Sie das SVG an nur einer Stelle verwenden. Mehrfache Vervielfältigung führt zu wartungsintensiver Pflege.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann inline SVG nicht zwischenspeichern, wie er reguläre Bildassets zwischenspeichern würde, sodass Seiten, die das Bild enthalten, nicht nach dem ersten Laden der Seite mit dem Bild schneller geladen werden.
- Sie können Fallback in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnenswert ist, nur um veraltete Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser genauso wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genau so, wie wir es in [Von `<object>` zu `<iframe>` — Allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) studiert haben.

Hier ist eine kurze Wiederholung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode, die Sie wählen sollten:

#### Nachteile

- `iframe`s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn sie `iframe`s überhaupt nicht unterstützen.
- Zudem können Sie, es sei denn das SVG und Ihre aktuelle Webseite haben den gleichen {{Glossary("origin", "Ursprung")}}, JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Spielen mit SVG

In diesem aktiven Lernabschnitt möchten wir, dass Sie mit ein wenig SVG zum Spaß experimentieren. Im Abschnitt _Input_ unten sehen Sie, dass wir Ihnen bereits einige Beispiele zur Verfügung gestellt haben, um Ihnen den Einstieg zu erleichtern. Sie können auch auf die [SVG-Elementreferenz](/de/docs/Web/SVG/Reference/Element) gehen, mehr über andere Spielereien erfahren, die Sie in SVG verwenden können, und diese auch ausprobieren. Dieser Abschnitt ist hauptsächlich dafür da, Ihre Recherchefähigkeiten zu üben und Spaß zu haben.

Falls Sie nicht weiterkommen und Ihren Code nicht zum Laufen bringen, können Sie jederzeit den _Reset_-Button verwenden, um ihn zurückzusetzen.

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

Dieser Artikel hat Ihnen einen schnellen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum sie nützlich zu kennen sind, und wie man SVG in seine Webseiten integriert. Er war nie als umfassender Leitfaden zum Lernen von SVG gedacht, sondern als Hinweis, damit Sie wissen, was SVG ist, falls Sie ihm auf Ihren Reisen durchs Web begegnen. Machen Sie sich also keine Sorgen, falls Sie sich noch nicht wie ein SVG-Experte fühlen. Wir haben unten einige Links beigefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [SVG Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
