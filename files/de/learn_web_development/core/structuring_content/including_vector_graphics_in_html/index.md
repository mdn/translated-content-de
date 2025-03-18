---
title: Einbinden von Vektorgrafiken in HTML
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{LearnSidebar}}

Vektorgrafiken sind in vielen Situationen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie beim Heranzoomen oder Vergrößern nicht pixelig werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine in Ihre Webseite einbinden.

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
      <td>Erfahren Sie, wie Sie ein SVG (Vektorbild) in eine Webseite einbetten.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht SVG beibringen, sondern erklären, was es ist und wie man es zu Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web werden Sie mit zwei Arten von Bildern arbeiten – **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** sind mit einem Pixelraster definiert – eine Rasterbilddatei enthält Informationen darüber, wo jeder einzelne Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** sind mit Algorithmen definiert – eine Vektorgrafikdatei enthält Form- und Pfaddefinitionen, die der Computer nutzen kann, um das Bild bei der Darstellung auf dem Bildschirm zu berechnen. Das {{Glossary("SVG", "SVG")}}-Format erlaubt uns, leistungsstarke Vektorgrafiken für den Einsatz im Web zu erstellen.

Um Ihnen eine Vorstellung vom Unterschied zwischen den beiden Arten zu geben, schauen wir uns ein Beispiel an. Sie können dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) finden – es zeigt zwei scheinbar identische Bilder nebeneinander. Es handelt sich um einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied ist, dass das linke eine PNG-Datei und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie die Seite vergrößern – das PNG-Bild wird pixelig, wenn Sie es vergrößern, da es Informationen darüber enthält, wo jeder Pixel sein soll (und welche Farbe). Wenn es vergrößert wird, wird jeder Pixel vergrößert, um mehrere Bildschirmpixel auszufüllen, wodurch das Bild blockig aussieht. Das Vektorgrafikbild hingegen bleibt klar und scharf, weil die Algorithmen unabhängig von der Größe verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte skaliert werden, wenn es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder vergrößert, eins scharf und das andere verschwommen](raster-vector-zoomed.png)

> [!NOTE]
> Die Bilder oben sind eigentlich alle PNGs – wobei der linke Stern in jedem Fall ein Rasterbild und der rechte Stern ein Vektorgrafikbild darstellt. Besuchen Sie wieder das [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html)-Demo für ein echtes Beispiel!

Darüber hinaus sind Vektorgrafikdateien viel leichter als ihre Rasteräquivalente, da sie nur einige wenige Algorithmen benötigen und nicht Informationen über jeden Pixel im Bild einzeln enthalten.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde genommen ein Markup, ähnlich wie HTML, mit dem Unterschied, dass Sie viele verschiedene Elemente zum Definieren der gewünschten Formen und der Effekte, die auf diese Formen angewendet werden sollen, haben. SVG dient zur Markierung von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung grundlegender Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Zu den fortgeschritteneren SVG-Funktionen gehören {{svgelement("feColorMatrix")}} (Farben mithilfe einer Transformationsmatrix umwandeln), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG leicht von Hand kodiert werden kann. Ja, Sie können einfache SVGs in einem Texteditor von Hand kodieren, aber bei einem komplexeren Bild wird das schnell sehr schwierig. Zum Erstellen von SVG-Bildern verwenden die meisten Menschen einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://de.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, verschiedene Illustrationen mit verschiedenen Grafik-Tools zu erstellen und Annäherungen an Fotos zu machen (z. B. Inkscapes Trace-Bitmap-Funktion).

SVG hat einige zusätzliche Vorteile neben den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut zum Stylen/Skripten, da jede Komponente des Bildes ein Element ist, das über CSS gestylt oder über JavaScript geskriptet werden kann.

Warum würde also jemand Rastergrafiken gegenüber SVG bevorzugen? SVG hat einige Nachteile:

- SVG kann schnell kompliziert werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch viel Verarbeitungszeit im Browser in Anspruch nehmen.
- SVG kann schwieriger zu erstellen sein als Rastergrafiken, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind aus den oben beschriebenen Gründen wahrscheinlich besser für komplexe Präzisionsbilder wie Fotos geeignet.

> [!NOTE]
> In Inkscape speichern Sie Ihre Dateien als Plain SVG, um Platz zu sparen. Bitte beachten Sie auch diesen [Artikel, der beschreibt, wie man SVGs für das Web vorbereitet](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Einfügen von SVGs in Ihre Seiten

In diesem Abschnitt besprechen wir die verschiedenen Möglichkeiten, wie Sie SVG-Vektorgrafiken in Ihre Webseiten einfügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur im `src`-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height` oder ein `width`-Attribut (oder beide, wenn Ihr SVG kein eigenes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Falls Sie es noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit integriertem Textersatz im `alt`-Attribut.
- Sie können das Bild leicht zu einem Hyperlink machen, indem Sie das `<img>` innerhalb eines {{htmlelement("a")}}-Elements verschachteln.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild zukünftig verwendet.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihren SVG-Code einfügen. (Externe Stylesheets, die in der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) umgestalten.

### Fehlerbehebung und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG aus Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut (das nur von neueren Browsern erkannt wird) verwenden, um auf die SVG zu verweisen. In diesem Fall werden nur unterstützende Browser die SVG laden – ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im folgenden Code bleiben ältere Browser beim PNG, das sie verstehen, während neuere Browser die SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Ähnlich wie bei der `<img>`-Methode oben beschrieben, führt das Einfügen von SVGs mit CSS-Hintergrundbildern dazu, dass das SVG nicht mit JavaScript manipuliert werden kann und es unterliegt denselben CSS-Beschränkungen.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig konfiguriert ist. Falls dies das Problem ist, wird Sie dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started_#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in HTML einfügt

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – dies wird manchmal als **SVG inline setzen** oder **SVG einbetten** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>`-Starttag beginnt und mit einem `</svg>`-Endtag endet. Hier ist ein sehr einfaches Beispiel, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen von SVG inline spart eine HTTP-Anfrage und kann daher die Ladezeit etwas verkürzen.
- Sie können `class`es und `id`s zu SVG-Elementen zuweisen und diese mit CSS stylen, entweder innerhalb des SVG oder überall dort, wo Sie die CSS-Stilregeln für Ihr HTML-Dokument festlegen. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Inline-SVG ist die einzige Möglichkeit, die es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (auch in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink verwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einfügen.

#### Nachteile

- Diese Methode eignet sich nur, wenn Sie das SVG nur an einer Stelle verwenden. Die Duplizierung erschwert die Wartung.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann Inline-SVG nicht zwischenspeichern, wie er es bei regulären Bildassets tun würde, sodass Seiten, die das Bild enthalten, nach dem ersten Laden der Bildseite nicht schneller geladen werden.
- Sie können Fallback in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnt, nur um obsolet gewordene Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser genauso wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es im [Von `<object>` zu `<iframe>` — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) untersucht haben.

Hier ein schneller Überblick:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode zur Auswahl:

#### Nachteile

- `iframe`s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen das Fallback nur an, wenn sie überhaupt keine `iframe`-Unterstützung haben.
- Darüber hinaus können Sie, es sei denn, die SVG-Datei und Ihre aktuelle Webseite haben denselben {{Glossary("origin", "Ursprung")}}, mit JavaScript auf Ihrer Hauptwebseite nicht auf die SVG zugreifen.

## Aktives Lernen: Mit SVG spielen

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie aus Spaß mit etwas SVG spielen. Im unteren _Input_-Abschnitt sehen Sie, dass wir Ihnen bereits einige Beispiele zur Verfügung gestellt haben, um Ihnen den Einstieg zu erleichtern. Sie können auch auf die [SVG-Element-Referenz](/de/docs/Web/SVG/Reference/Element) gehen, um mehr Details über andere Spielzeuge zu finden, die Sie in SVG verwenden können, und diese ebenfalls ausprobieren. In diesem Abschnitt geht es darum, Ihre Recherchefähigkeiten zu üben und ein wenig Spaß zu haben.

Wenn Sie nicht weiterkommen und Ihren Code nicht zum Laufen bringen können, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen.

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

Dieser Artikel hat Ihnen einen schnellen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum sie nützlich sind und wie man SVG in Ihre Webseiten einbettet. Er war nie als vollständiger Leitfaden zum Erlernen von SVG gedacht, sondern als Hinweis, damit Sie wissen, was SVG ist, wenn Sie es auf Ihren Reisen im Web treffen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht als SVG-Experte fühlen. Wir haben unten einige Links eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started_) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Barrierefreiheit von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie bei Rastergrafiken!)
