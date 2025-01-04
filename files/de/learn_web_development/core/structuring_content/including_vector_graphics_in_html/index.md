---
title: Einbinden von Vektorgrafiken in HTML
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, was bedeutet, dass sie beim Vergrößern oder Aufblasen auf eine große Größe nicht verpixeln. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden können.

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
      <td>Erfahren Sie, wie man ein SVG (Vektorbild) in eine Webseite einbettet.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel beabsichtigt nicht, SVG zu lehren; sondern nur, was es ist und wie man es zu Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** werden mithilfe eines Pixelgitters definiert – eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jeder Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Web-Rasterformate sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mithilfe von Algorithmen definiert – eine Vektorbilddatei enthält Form- und Pfaddefinitionen, die der Computer nutzen kann, um zu berechnen, wie das Bild auf dem Bildschirm angezeigt werden soll. Das {{Glossary("SVG", "SVG")}} Format ermöglicht es uns, leistungsstarke Vektorgrafiken für die Nutzung im Web zu erstellen.

Um Ihnen eine Vorstellung von dem Unterschied zwischen den beiden zu geben, sehen wir uns ein Beispiel an. Sie finden dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — es zeigt zwei scheinbar identische Bilder nebeneinander, von einem roten Stern mit einem schwarzen Schatten. Der Unterschied besteht darin, dass das linke ein PNG und das rechte ein SVG ist.

Der Unterschied wird deutlich, wenn Sie die Seite vergrößern — das PNG-Bild wird verpixelt, weil es Informationen darüber enthält, wo jeder Pixel sein soll (und welche Farbe). Wenn es vergrößert wird, wird jeder Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, wodurch das Bild blockig aussieht. Das Vektorbild hingegen bleibt klar und scharf, weil die Algorithmen verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte beim Größerwerden skaliert werden.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder vergrößert, eines scharf und das andere verschwommen](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind tatsächlich alle PNGs — mit dem linken Stern in jedem Fall als Darstellung eines Rasterbildes und dem rechten Stern als Darstellung eines Vektorbildes. Gehen Sie erneut zur [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo, um ein echtes Beispiel zu sehen!

Darüber hinaus sind Vektorbilderdateien viel leichter als ihre Rasteräquivalente, da sie nur ein paar Algorithmen enthalten müssen, anstatt Informationen über jeden Pixel im Bild einzeln.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde Markup, wie HTML, außer dass es viele verschiedene Elemente zur Definition der Formen gibt, die Sie in Ihrem Bild anzeigen möchten, sowie die Effekte, die Sie auf diese Formen anwenden möchten. SVG dient zum Markieren von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung grundlegender Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Zu den fortgeschritteneren SVG-Funktionen gehören {{svgelement("feColorMatrix")}} (Farben mithilfe einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihrem Bild anwenden).

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG einfach von Hand zu kodieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand kodieren, aber für ein komplexes Bild wird dies schnell sehr schwierig. Für die Erstellung von SVG-Bildern verwenden die meisten Menschen einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mithilfe verschiedener Grafikwerkzeuge zu erstellen und Annäherungen von Fotos zu erstellen (beispielsweise Inkscapes Trace Bitmap-Funktion).

SVG bietet neben den bisher beschriebenen zusätzliche Vorteile:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs lassen sich gut stilisieren/scriptieren, da jede Komponente des Bildes ein Element ist, das über CSS gestylt oder per JavaScript gescriptetet werden kann.

Warum sollte also jemand Rastergrafiken gegenüber SVG bevorzugen? Nun, SVG hat auch einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch eine erhebliche Verarbeitungszeit im Browser in Anspruch nehmen.
- SVG kann schwieriger zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken eignen sich aus den oben beschriebenen Gründen möglicherweise besser für komplexe präzise Bilder wie Fotos.

> [!NOTE]
> Speichern Sie in Inkscape Ihre Dateien als Plain SVG, um Platz zu sparen. Bitte beachten Sie auch diesen [Artikel, der beschreibt, wie man SVGs für das Web vorbereitet](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Hinzufügen von SVG zu Ihren Seiten

In diesem Abschnitt gehen wir die verschiedenen Möglichkeiten durch, wie Sie SVG-Vektorgrafiken in Ihre Webseiten einfügen können.

### Der schnelle Weg: `img` Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur im src-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder ein `width`-Attribut (oder beides, wenn Ihr SVG kein inherent {{Glossary("aspect_ratio", " Seitenverhältnis ")}} hat). Wenn Sie dies noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit einem im `alt`-Attribut verfügbaren Textequivalent.
- Sie können das Bild leicht in einen Hyperlink verwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einbetten.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für zukünftige Seiten führt, die das Bild verwenden.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie die SVG-Inhalte mit CSS steuern wollen, müssen Sie Inline-CSS-Stile in Ihren SVG-Code einfügen. (Externe Stylesheets, die aus der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu gestalten.

### Fehlerbehebung und Cross-Browser-Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG aus Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut verwenden (das nur von neueren Browsern erkannt wird), um das SVG zu referenzieren. In diesem Fall laden nur unterstützende Browser das SVG — ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im folgenden Code bleiben ältere Browser beim PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mithilfe von CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und auch den gleichen CSS-Einschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, wird Sie [dieser Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorial/Getting_Started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihr HTML einfügt

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – dies wird manchmal als Einfügen Ihres **SVG inline** oder **Einbettung von SVG** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>` Start-Tag beginnt und mit einem `</svg>` End-Tag endet. Hier ist ein sehr einfaches Beispiel, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihres SVG inline spart eine HTTP-Anfrage und kann daher die Ladezeit ein wenig reduzieren.
- Sie können `class`es und `id`s SVG-Elementen zuweisen und sie mit CSS stylen, entweder innerhalb des SVG oder wo auch immer Sie die CSS-Stilregeln für Ihr HTML-Dokument einfügen. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Inline-SVG ist der einzige Ansatz, der es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink verwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einbetten.

#### Nachteile

- Diese Methode ist nur geeignet, wenn Sie das SVG an nur einer Stelle verwenden. Duplizierung macht die Wartung ressourcenintensiv.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann inline SVG nicht wie reguläre Bildressourcen zwischenspeichern, sodass Seiten, die das Bild enthalten, nach dem ersten Laden der Seite, die das Bild enthält, nicht schneller geladen werden.
- Sie können Fallback in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnenswert ist, nur um obsoleszenten Browsern Unterstützung zu bieten.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es in [Von `<object>` zu `<iframe>` — Allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) studiert haben.

Hier ist eine kurze Überprüfung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode zur Auswahl:

#### Nachteile

- `iframe` s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn sie `iframe` s insgesamt nicht unterstützen.
- Außerdem können Sie JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren, es sei denn, das SVG und Ihre aktuelle Webseite haben denselben {{Glossary("origin", "Ursprung")}}.

## Aktives Lernen: Spielen mit SVG

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie ein wenig mit einigen SVGs für Spaß experimentieren. Im Abschnitt _Input_ unten sehen Sie, dass wir Ihnen bereits einige Beispiele zur Verfügung gestellt haben, um Ihnen den Einstieg zu erleichtern. Sie können auch die [SVG-Elementreferenz](/de/docs/Web/SVG/Element) besuchen, um mehr Details über andere Spielzeuge zu erfahren, die Sie in SVG verwenden können, und diese ebenfalls ausprobieren. Dieser Abschnitt dreht sich darum, Ihre Recherchefähigkeiten zu üben und etwas Spaß zu haben.

Wenn Sie feststecken und Ihren Code nicht zum Laufen bekommen, können Sie ihn jederzeit mit der _Reset_-Taste zurücksetzen.

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

Dieser Artikel hat Ihnen einen schnellen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum es nützlich ist, darüber Bescheid zu wissen, und wie man SVG in Ihre Webseiten einfügt. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Erlernen von SVG zu sein, sondern nur ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie es auf Ihren Reisen im Web treffen. Also machen Sie sich keine Sorgen, wenn Sie sich noch nicht als SVG-Experte fühlen. Wir haben unten einige Links eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorial/Getting_Started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Barrierefreiheitsvorteile von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
