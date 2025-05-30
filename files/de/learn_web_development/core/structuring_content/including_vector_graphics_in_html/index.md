---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

Vektorgrafiken sind in vielen Situationen nützlich – sie haben kleine Dateigrößen und sind sehr skalierbar, sodass sie beim Vergrößern oder Vergrößern nicht pixelig werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden.

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
      <td>Lernen Sie, wie man ein SVG (Vektorbild) in eine Webseite einbettet.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel beabsichtigt nicht, Ihnen SVG beizubringen; nur was es ist und wie man es zu Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern – **Rastergrafiken** und **Vektorbilder**:

- **Rastergrafiken** werden mit einem Pixelraster definiert – eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jeder Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Web-Rasterformate sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mit Algorithmen definiert – eine Vektorgrafikdatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um herauszufinden, wie das Bild auf dem Bildschirm aussehen soll, wenn es gerendert wird. Das {{Glossary("SVG", "SVG")}} Format ermöglicht es uns, leistungsstarke Vektorgrafiken für das Web zu erstellen.

Um Ihnen eine Vorstellung von dem Unterschied zwischen den beiden zu geben, schauen wir uns ein Beispiel an. Sie finden dieses Beispiel live in unserem GitHub-Repository als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) – es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke ein PNG ist und das rechte ein SVG-Bild.

Der Unterschied wird deutlich, wenn Sie die Seite vergrößern – das PNG-Bild wird pixelig, wenn Sie hereinzoomen, da es Informationen darüber enthält, wo jeder Pixel sich befinden soll (und welche Farbe er hat). Beim Zoomen wird jeder Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild blockig erscheint. Das Vektorbild hingegen sieht weiterhin schön und scharf aus, da unabhängig von seiner Größe die Algorithmen verwendet werden, um die Formen im Bild zu ermitteln, wobei die Werte skaliert werden, während es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder herangezoomt, eines scharf und das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind tatsächlich alle PNGs – mit dem linken Stern repräsentiert in jedem Fall ein Rasterbild, und der rechte Stern ein Vektorgrafik. Gehen Sie erneut zu der [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein echtes Beispiel!

Darüber hinaus sind Vektorgrafikdateien viel leichter als ihre Rasteräquivalente, da sie nur eine Handvoll Algorithmen benötigen, anstatt Informationen über jeden einzelnen Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine auf {{Glossary("XML", "XML")}} basierende Sprache zur Beschreibung von Vektorgrafiken. Es ist im Wesentlichen ein Markup, ähnlich wie HTML, außer dass Sie viele verschiedene Elemente haben, um die Formen zu definieren, die in Ihrem Bild erscheinen sollen, und die Effekte, die Sie auf diese Formen anwenden möchten. SVG ist zum Markieren von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung grundlegender Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Zu den fortgeschritteneren SVG-Funktionen gehören {{svgelement("feColorMatrix")}} (Farben mit einer Transformationsmatrix transformieren), {{svgelement("animate")}} (teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Aus dem obigen Beispiel können Sie den Eindruck gewinnen, dass SVG einfach von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand codieren, aber für ein komplexes Bild wird dies schnell sehr schwierig. Zum Erstellen von SVG-Bildern verwenden die meisten Menschen einen Vektorgrafikeditor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, verschiedene Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Annäherungen von Fotos zu erstellen (zum Beispiel Inkscapes Trace Bitmap-Funktion.)

SVG hat einige zusätzliche Vorteile, außer den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut zum Stylen/Skripten, da jede Komponente des Bildes ein Element ist, das über CSS gestaltet oder über JavaScript geskriptet werden kann.

Warum also sollte jemand Rastergrafiken gegenüber SVGs verwenden möchten? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell komplex werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch erhebliche Verarbeitungszeit im Browser benötigen.
- SVG kann schwerer zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind wahrscheinlich besser für komplexe, präzise Bilder wie Fotos, aus den oben beschriebenen Gründen.

> [!NOTE]
> Speichern Sie in Inkscape Ihre Dateien als Plain SVG, um Speicherplatz zu sparen. Bitte beachten Sie auch diesen [Artikel, der beschreibt, wie man SVGs für das Web vorbereitet](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Hinzufügen von SVG zu Ihren Seiten

In diesem Abschnitt gehen wir die verschiedenen Möglichkeiten durch, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG mittels eines {{htmlelement("img")}}-Elements einzubetten, müssen Sie es nur im `src`-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder `width`-Attribut (oder beide, wenn Ihr SVG kein inhärentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Wenn Sie dies noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textäquivalent im `alt`-Attribut verfügbar.
- Sie können das Bild einfach in einen Hyperlink verwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einbetten.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in der Zukunft lädt.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihren SVG-Code einfügen. (Externe Stylesheets, die aus der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu gestalten.

### Fehlersuche und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und älter, Android 2.3 und älter), könnten Sie ein PNG oder JPG aus Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut verwenden (das nur neuere Browser erkennen), um das SVG zu referenzieren. In diesem Fall laden nur unterstützte Browser das SVG – ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im folgenden Code bleiben ältere Browser bei dem PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>` Methode bedeutet das Einfügen von SVGs mit CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann, und ist auch denselben CSS-Einschränkungen unterworfen.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig konfiguriert ist. Wenn das das Problem ist, wird Sie dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihrem HTML einschließt

Sie können die SVG-Datei auch in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – dies wird manchmal als **SVG inline setzen** oder **SVG inlinieren** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>`-Start-Tag beginnt und mit einem `</svg>`-End-Tag endet. Hier ist ein sehr einfaches Beispiel, was Sie möglicherweise in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Platzieren Ihres SVG inline spart eine HTTP-Anfrage und kann daher Ihre Ladezeit etwas reduzieren.
- Sie können `class`es und `id`s an SVG-Elemente vergeben und sie mit CSS stilisieren, entweder innerhalb des SVG oder wo auch immer Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Inlinieren von SVG ist der einzige Ansatz, der es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink verwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einbetten.

#### Nachteile

- Diese Methode ist nur geeignet, wenn Sie das SVG nur an einer Stelle verwenden. Duplikation führt zu ressourcenintensiver Wartung.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann Inline-SVG nicht zwischenspeichern, wie er es bei regulären Bild-Assets tut, sodass Seiten, die das Bild enthalten, nach dem Laden der ersten Seite mit dem Bild nicht schneller geladen werden.
- Sie können Fallbacks in ein {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnenswert ist, nur um veraltete Browser zu unterstützen.

### Wie man eine SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser öffnen, genau wie Webseiten. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es in [Von `<object>` zu `<iframe>` — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) gelernt haben.

Hier ist eine kurze Überprüfung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode:

#### Nachteile

- `iframe`s haben zwar einen Rückfallmechanismus, wie Sie sehen können, aber Browser zeigen den Rückfall nur an, wenn sie die Unterstützung für `iframe`s ganz fehlen.
- Außerdem können Sie, es sei denn, SVG und Ihre aktuelle Webseite haben denselben {{Glossary("origin", "Ursprung")}}, JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Mit SVG spielen

In diesem aktiven Lernabschnitt möchten wir, dass Sie Spaß daran haben, mit SVG zu spielen. Im Abschnitt _Input_ unten sehen Sie, dass wir Ihnen einige Beispiele zur Verfügung gestellt haben, um den Einstieg zu erleichtern. Sie können auch auf das [SVG-Element-Referenz](/de/docs/Web/SVG/Reference/Element) gehen, um mehr Details über andere Spielzeuge zu erfahren, die Sie in SVG verwenden können, und diese auch ausprobieren. Dieser Abschnitt dreht sich darum, Ihre Recherchefähigkeiten zu üben und ein wenig Spaß zu haben.

Wenn Sie hängen bleiben und Ihren Code nicht zum Laufen bringen können, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen.

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

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum es nützlich ist, sie zu kennen, und wie man SVG in Ihre Webseiten einbindet. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Erlernen von SVG zu sein, nur ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie ihm auf Ihren Reisen im Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht wie ein SVG-Experte fühlen. Wir haben einige Links unten eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsive SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Barrierefreiheitsvorteile von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
