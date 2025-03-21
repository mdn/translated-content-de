---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{LearnSidebar}}

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht verpixeln, wenn sie vergrößert oder auf eine große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Grundlagen von HTML</a>
        und wie man
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images">ein Bild in Ihr Dokument einfügt</a>
        kennen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen Sie, wie Sie ein SVG (Vektorbild) in eine Webseite einbetten.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht beibringen, wie SVG funktioniert, sondern nur, was es ist und wie es zu Webseiten hinzugefügt wird.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** werden mithilfe eines Pixelrasters definiert — eine Rasterbilddatei enthält Informationen darüber, wo genau jeder Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mithilfe von Algorithmen definiert — eine Vektorgrafikdatei enthält Definitionen von Formen und Pfaden, die der Computer verwenden kann, um herauszufinden, wie das Bild auf dem Bildschirm gerendert werden soll. Das {{Glossary("SVG", "SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für die Verwendung im Web zu erstellen.

Um Ihnen den Unterschied zwischen beiden Arten von Bildern zu verdeutlichen, werfen wir einen Blick auf ein Beispiel. Sie finden dieses Beispiel live in unserem GitHub-Repo unter [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke ein PNG und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie in die Seite hineinzoomen — das PNG-Bild wird körnig, da es Informationen darüber enthält, wo sich jeder Pixel befinden soll (und welche Farbe er haben soll). Wenn es vergrößert wird, wird jeder Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, wodurch das Bild blockig aussieht. Das Vektorbild hingegen bleibt schön und scharf, da die Algorithmen unabhängig von der Größe verwendet werden, um die Formen im Bild zu ermitteln, wobei die Werte mit der Vergrößerung skaliert werden.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei zoomte Sternbilder, eines scharf und das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die oben gezeigten Bilder sind eigentlich alles PNGs — wobei der linke Stern in jedem Fall ein Rasterbild und der rechte Stern ein Vektorbild darstellt. Gehen Sie erneut zum [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html)-Demo für ein reales Beispiel!

Darüber hinaus sind Vektorgrafikdateien viel leichter als ihre Rasteräquivalente, da sie nur eine Handvoll Algorithmen enthalten müssen, anstatt Informationen zu jedem einzelnen Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine auf {{Glossary("XML", "XML")}} basierende Sprache zur Beschreibung von Vektorgrafiken. Es handelt sich im Wesentlichen um Markup, ähnlich wie HTML, außer dass Sie viele verschiedene Elemente zur Definition der Formen haben, die in Ihrem Bild erscheinen sollen, und der Effekte, die Sie auf diese Formen anwenden möchten. SVG dient dem Markieren von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung einfacher Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erzeugung komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Fortgeschrittene SVG-Funktionen Beinhalten {{svgelement("feColorMatrix")}} (Farben mithilfe einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Dadurch wird die folgende Ausgabe erzeugt:

{{ EmbedLiveSample('What_is_SVG', 300, 240, "", "") }}

Aus dem obigen Beispiel könnte man den Eindruck gewinnen, dass SVG leicht von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand kodieren, aber für ein komplexes Bild wird es schnell schwierig. Um SVG-Bilder zu erstellen, verwenden die meisten Leute einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, verschiedene Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Annäherungen an Fotos zu erstellen (zum Beispiel Inkscapes Trace Bitmap-Funktion).

SVG hat einige zusätzliche Vorteile gegenüber den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugute kommt).
- SVGs eignen sich gut für Styling/Scripting, da jede Komponente des Bildes ein Element ist, das über CSS gestylt oder über JavaScript gescriptet werden kann.

Warum sollte jemand Rastergrafiken über SVG verwenden? SVG hat einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was bedeutet, dass Dateigrößen wachsen können; komplexe SVGs können auch erhebliche Verarbeitungszeit im Browser erfordern.
- SVG kann schwerer zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind aus den oben beschriebenen Gründen vermutlich besser für komplizierte Präzisionsbilder wie Fotos geeignet.

> [!NOTE]
> In Inkscape speichern Sie Ihre Dateien am besten als Plain SVG, um Speicherplatz zu sparen. Bitte lesen Sie auch diesen [Artikel über die Vorbereitung von SVGs für das Web](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Hinzufügen von SVG zu Ihren Seiten

In diesem Abschnitt werden wir die verschiedenen Möglichkeiten durchgehen, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur wie erwartet im `src`-Attribut referenzieren. Sie benötigen ein `height`- oder ein `width`-Attribut (oder beide, wenn Ihr SVG kein innewohnendes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Falls Sie dies noch nicht getan haben, lesen Sie bitte [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit integriertem Textequivalent im `alt`-Attribut verfügbar.
- Sie können das Bild leicht in einen Hyperlink umwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einbetten.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in Zukunft lädt.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihren SVG-Code einfügen. (Externe Stylesheets, die von der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu gestalten.

### Fehlersuche und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie eine PNG oder JPG in Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut (das nur neuere Browser erkennen) verwenden, um das SVG zu referenzieren. In diesem Fall laden nur unterstützende Browser das SVG — ältere Browser laden stattdessen das PNG:

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

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mit CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann, und es unterliegt auch denselben CSS-Einschränkungen.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, liegt dies möglicherweise daran, dass Ihr Server nicht richtig konfiguriert ist. Wenn das das Problem ist, wird Sie dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihr HTML einfügt

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – dies wird manchmal als **SVG inline setzen** oder **SVG inline einfügen** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Codeausschnitt mit einem `<svg>`-Start-Tag beginnt und mit einem `</svg>`-End-Tag endet. Hier ist ein sehr einfaches Beispiel dafür, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihres SVGs inline spart einen HTTP-Request und kann somit Ihre Ladezeit etwas verkürzen.
- Sie können `class`es und `id`s SVG-Elementen zuweisen und sie mit CSS stylen, entweder innerhalb des SVGs oder wo immer Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Inline-SVG ist der einzige Ansatz, der es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihr SVG-Bild anzuwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink umwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einwickeln.

#### Nachteile

- Diese Methode ist nur geeignet, wenn Sie das SVG nur an einem Ort verwenden. Duplikation macht die Wartung ressourcenintensiv.
- Zusätzlicher SVG-Code vergrößert die Größe Ihrer HTML-Datei.
- Der Browser kann das inline SVG nicht zwischenspeichern, wie er reguläre Bildressourcen zwischenspeichern würde, sodass Seiten, die das Bild enthalten, nicht schneller laden, nachdem die erste Seite mit dem Bild geladen wurde.
- Sie können Fallback in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden trotzdem alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnt, nur um obsoleszenten Browsern Unterstützung zu bieten.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser genauso wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso wie wir es in [Von `<object>` zu `<iframe>` — allgemeine Einbettungstechniken](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) gelernt haben.

Hier ist eine kurze Wiederholung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode:

#### Nachteile

- `iframe`s haben zwar einen Mechanismus für Fallback, aber Browser zeigen das Fallback nur an, wenn sie `iframe`s überhaupt nicht unterstützen.
- Zudem können Sie JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren, es sei denn, das SVG und Ihre aktuelle Webseite haben denselben {{Glossary("origin", "Ursprung")}}.

## Aktives Lernen: Spielen mit SVG

In diesem aktiven Lernabschnitt möchten wir, dass Sie aus Spaß mit einigen SVGs spielen. Im _Input_-Abschnitt unten haben wir Ihnen bereits einige Beispiele zur Verfügung gestellt, um Ihnen den Einstieg zu erleichtern. Sie können auch zum [SVG-Elemente-Referenz](/de/docs/Web/SVG/Reference/Element) gehen, um mehr Details über andere Werkzeuge zu erfahren, die Sie in SVG verwenden können, und diese auch ausprobieren. Dieser Abschnitt konzentriert sich darauf, Ihre Recherchefähigkeiten zu üben und Spaß zu haben.

Wenn Sie feststecken und Ihren Code nicht zum Laufen bringen können, können Sie ihn jederzeit mit der _Reset_-Schaltfläche zurücksetzen.

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

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum sie nützlich sind und wie SVG in Ihre Webseiten eingebunden werden kann. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Erlernen von SVG zu sein, sondern ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie ihm auf Ihrer Reise durch das Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht wie ein SVG-Experte fühlen. Wir haben unten einige Links eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Barrierefreiheitsvorteile von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
