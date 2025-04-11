---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht verpixeln, wenn man sie vergrößert oder auf eine große Größe zieht. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden können.

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
      <td>Lernen Sie, wie Sie ein SVG (Vektorbild) in eine Webseite einbetten.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht beibringen, SVG zu erstellen; er erklärt nur, was es ist und wie man es in Webseiten einfügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** werden mit einem Pixelraster definiert — eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jedes Pixel platziert werden soll und welche Farbe es haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mit Algorithmen definiert — eine Vektorbilddatei enthält Form- und Pfaddeffinitionen, die der Computer verwenden kann, um zu berechnen, wie das Bild beim Rendern auf dem Bildschirm aussehen soll. Das {{Glossary("SVG", "SVG")}}-Format erlaubt es uns, leistungsstarke Vektorgrafiken für die Nutzung im Web zu erstellen.

Um Ihnen einen Eindruck vom Unterschied zwischen den beiden zu geben, schauen wir uns ein Beispiel an. Sie können dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) finden — es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke Bild ein PNG und das rechte Bild ein SVG ist.

Der Unterschied wird deutlich, wenn Sie die Seite vergrößern — das PNG-Bild wird verpixelt, wenn Sie es vergrößern, weil es Informationen darüber enthält, wo jedes Pixel sein soll (und welche Farbe es hat). Wenn es vergrößert wird, wird jedes Pixel vergrößert, um mehrere Pixel auf dem Bildschirm auszufüllen, sodass das Bild blockig aussieht. Das Vektorbild hingegen bleibt scharf, weil unabhängig von der Größe, die Algorithmen verwendet werden, um die Formen im Bild zu berechnen, mit den Werten, die beim Vergrößern skaliert werden.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder herangezoomt, eines scharf und das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind tatsächlich alle PNGs — mit dem linken Stern, der in jedem Fall ein Rasterbild darstellt, und dem rechten Stern, der ein Vektorbild darstellt. Auch hier, gehen Sie zum [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein echtes Beispiel!

Darüber hinaus sind Vektorbilddateien viel leichter als ihre Rasteräquivalente, weil sie nur eine Handvoll Algorithmen enthalten müssen, anstatt Informationen zu jedem einzelnen Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine auf {{Glossary("XML", "XML")}} basierende Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde Markup, wie HTML, nur dass es viele verschiedene Elemente gibt, um die Formen zu definieren, die in Ihrem Bild erscheinen sollen, sowie die Effekte, die auf diese Formen angewendet werden sollen. SVG ist zum Markieren von Grafiken, nicht von Inhalten gedacht. SVG definiert Elemente zum Erstellen einfacher Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zum Erstellen komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Fortgeschrittenere SVG-Funktionen umfassen {{svgelement("feColorMatrix")}} (Farben mithilfe einer Transformationsmatrix verändern), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über das Bild legen).

Als einfaches Beispiel erzeugt der folgende Code einen Kreis und ein Rechteck:

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG einfach von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand codieren, aber für ein komplexes Bild wird das schnell sehr schwierig. Zum Erstellen von SVG-Bildern nutzen die meisten Leute einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme erlauben es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Annäherungen von Fotos zu machen (zum Beispiel Inkscapes Trace Bitmap-Funktion.)

SVG hat einige zusätzliche Vorteile neben denen, die bisher beschrieben wurden:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut für Styling/Scripting, weil jede Komponente des Bildes ein Element ist, das über CSS gestaltet oder über JavaScript geskriptet werden kann.

Warum sollte also jemand Rastergrafiken gegenüber SVG verwenden wollen? Nun, SVG hat auch einige Nachteile:

- SVG kann schnell sehr kompliziert werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch erhebliche Verarbeitungszeit im Browser beanspruchen.
- SVG kann schwerer zu erstellen sein als Rasterbilder, abhängig davon, welche Art von Bild Sie erstellen wollen.

Rastergrafiken sind für komplexe Präzisionsbilder wie Fotos möglicherweise besser geeignet, aus den oben beschriebenen Gründen.

> [!NOTE]
> In Inkscape speichern Sie Ihre Dateien als Plain SVG, um Platz zu sparen. Außerdem lesen Sie bitte diesen [Artikel, der beschreibt, wie man SVGs fürs Web vorbereitet](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## SVG zu Ihren Seiten hinzufügen

In diesem Abschnitt gehen wir auf die verschiedenen Möglichkeiten ein, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur so im `src`-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder `width`-Attribut (oder beide, wenn Ihr SVG kein inhärentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Falls noch nicht geschehen, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textequivalent im `alt`-Attribut.
- Sie können das Bild leicht in einen Hyperlink verwandeln, indem Sie die `<img>` in ein {{htmlelement("a")}}-Element einfügen.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in der Zukunft verwendet.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt über CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihren SVG-Code einfügen. (Externe Stylesheets, die von der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) umgestalten.

### Fehlersuche und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG von Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut verwenden (das nur in neueren Browsern erkannt wird), um das SVG zu referenzieren. Dies ist der Fall, sodass nur unterstützende Browser das SVG laden – ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im unten stehenden Code bleiben ältere Browser beim PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie die im obigen beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs als CSS-Hintergrundbilder, dass das SVG nicht mit JavaScript manipuliert werden kann und auch denselben CSS-Beschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, dieser [Artikel wird Ihnen in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihr HTML einfügt

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – dies wird manchmal Inline-SVG oder Einfügen von SVG genannt. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>`-Start-Tag beginnt und mit einem `</svg>`-End-Tag endet. Hier ist ein sehr einfaches Beispiel dafür, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihrer SVG in das Dokument spart eine HTTP-Anfrage, was Ihre Ladezeit etwas verringern kann.
- Sie können `class`es und `id`s auf SVG-Elemente anwenden und sie mit CSS stylen, entweder innerhalb des SVG oder dort, wo Sie die CSS-Stilregeln für Ihr HTML-Dokument festlegen. Tatsächlich können Sie jede [SVG-Präsentationseigenschaft](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Die Einbettung von SVG ist der einzige Ansatz, der Ihnen erlaubt, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihr SVG-Bild anzuwenden (auch in Ihrem regulären Stylesheet.)
- Sie können SVG-Markup in einen Hyperlink verwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einwickeln.

#### Nachteile

- Diese Methode eignet sich nur, wenn Sie das SVG nur an einem Ort verwenden. Duplikation macht die Wartung ressourcenintensiv.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann Inline-SVG nicht so zwischenspeichern, wie er es mit regulären Bild-Assets könnte, sodass Seiten, die das Bild enthalten, beim erneuten Laden nach der ersten Seite nicht schneller laden.
- Sie können eine Fallback-Lösung in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden trotzdem alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Overhead wirklich lohnenswert ist, nur um veraltete Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser öffnen, genau wie Webseiten. Also ein SVG-Dokument mit einem `<iframe>` einzubetten, wird genau so gemacht, wie wir es im [Von `<object>` zu `<iframe>` — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) gelernt haben.

Hier ist eine schnelle Wiederholung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode zur Auswahl:

#### Nachteile

- `iframe`s haben einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn sie `iframe`s insgesamt nicht unterstützen.
- Außerdem, wenn das SVG und Ihre aktuelle Webseite nicht denselben {{Glossary("origin", "Ursprung")}} haben, können Sie JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Spielen mit SVG

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie ein wenig Spaß beim Spielen mit SVG haben. Im Abschnitt _Input_ unten sehen Sie, dass wir Ihnen bereits einige Beispiele zur Verfügung gestellt haben, um Ihnen den Einstieg zu erleichtern. Sie können auch zum [SVG-Element-Referenz](/de/docs/Web/SVG/Reference/Element) gehen, um weitere Details über andere "Spielzeuge" zu erfahren, die Sie in SVG verwenden können, und diese auch ausprobieren. In diesem Abschnitt geht es darum, Ihre Forschungsfähigkeiten zu üben und Spaß zu haben.

Wenn Sie steckenbleiben und Ihren Code nicht mehr zum Laufen bringen können, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste wiederherstellen.

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

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum es nützlich ist, darüber Bescheid zu wissen, und wie man SVG in seine Webseiten einbettet. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Lernen von SVG zu sein, sondern nur ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie es bei Ihren Reisen im Web antreffen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht als SVG-Experte fühlen. Wir haben einige Links unten beigefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Barrierefreiheit von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
