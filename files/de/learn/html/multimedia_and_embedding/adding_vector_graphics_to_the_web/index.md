---
title: Hinzufügen von Vektorgrafiken zum Web
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind sehr skalierbar, so dass sie nicht verpixeln, wenn man sie hineinzoomt oder auf eine große Größe vergrößert. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Grundlagen von HTML</a>
        kennen und wissen, wie man
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >ein Bild in Ihr Dokument einfügt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen Sie, wie Sie ein SVG (Vektor-) Bild in eine Webseite einbetten.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht beibringen, SVGs zu erstellen; er zeigt lediglich, was SVGs sind und wie man sie zu Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern – **Rasterbildern** und **Vektorbildern**:

- **Rasterbilder** werden mit einem Raster von Pixeln definiert – eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jedes Pixel platziert werden soll und welche Farbe es haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mit Algorithmen definiert – eine Vektorbilderdatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um zu berechnen, wie das Bild aussehen soll, wenn es auf dem Bildschirm gerendert wird. Das [SVG](/de/docs/Glossary/SVG)-Format ermöglicht es uns, leistungsfähige Vektorgrafiken für den Einsatz im Web zu erstellen.

Um Ihnen eine Vorstellung vom Unterschied zwischen den beiden zu geben, sehen wir uns ein Beispiel an. Sie können dieses Beispiel live in unserem GitHub-Repo unter [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) finden – es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke ein PNG und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie in die Seite hineinzoomen – das PNG-Bild wird pixelig, wenn Sie hineinzoomen, da es Informationen darüber enthält, wo jedes Pixel sein soll (und welche Farbe es hat). Wenn es vergrößert wird, wird jedes Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild blockig aussieht. Das Vektorbild hingegen sieht weiterhin schön und scharf aus, da unabhängig von der Größe Algorithmen verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte entsprechend skaliert werden, während es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder vergrößert, eines scharf und das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die Bilder oben sind eigentlich alle PNGs – der Stern auf der linken Seite stellt in jedem Fall ein Rasterbild dar, und der Stern auf der rechten Seite ein Vektorbild. Sehen Sie sich die Demo [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) für ein echtes Beispiel an!

Zudem sind Vektorbilderdateien viel leichter als ihre Rastergegenstücke, da sie nur eine Handvoll Algorithmen enthalten müssen, statt Informationen über jedes einzelne Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine auf [XML](/de/docs/Glossary/XML) basierende Sprache zur Beschreibung von Vektorbildern. Es handelt sich im Grunde genommen um Markup wie HTML, nur dass es viele verschiedene Elemente gibt, um die Formen zu definieren, die in Ihrem Bild erscheinen sollen, und die Effekte, die Sie auf diese Formen anwenden möchten. SVG ist dazu da, Grafiken zu markieren, nicht Inhalt. SVG definiert Elemente zur Erstellung grundlegender Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Fortschrittlichere SVG-Funktionen umfassen {{svgelement("feColorMatrix")}} (Farben mithilfe einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Aus dem obigen Beispiel können Sie den Eindruck gewinnen, dass SVG leicht per Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor per Hand codieren, aber für ein komplexes Bild wird dies schnell sehr schwierig. Um SVG-Bilder zu erstellen, verwenden die meisten Leute einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwirkzeugen zu erstellen und Näherungen von Fotos zu erstellen (zum Beispiel die Trace-Bitmap-Funktion von Inkscape).

SVG bietet einige zusätzliche Vorteile neben den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem [SEO](/de/docs/Glossary/SEO) zugutekommt).
- SVGs eignen sich gut zum Stylen/Skripten, da jede Komponente des Bildes ein Element ist, das über CSS gestaltet oder mit JavaScript programmiert werden kann.

Warum sollte also jemand Rastergrafiken über SVG verwenden wollen? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch erhebliche Verarbeitungszeit im Browser erfordern.
- SVG kann schwieriger zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind möglicherweise besser für komplexe Präzisionsbilder wie Fotos geeignet, aus den oben genannten Gründen.

> [!NOTE]
> In Inkscape speichern Sie Ihre Dateien als Plain SVG, um Platz zu sparen. Bitte lesen Sie auch diesen [Artikel über das Vorbereiten von SVGs für das Web](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Hinzufügen von SVG zu Ihren Seiten

In diesem Abschnitt gehen wir die verschiedenen Möglichkeiten durch, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur wie erwartet im `src`-Attribut referenzieren. Sie benötigen ein `height`- oder `width`-Attribut (oder beide, wenn Ihr SVG kein inhärentes [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) hat). Wenn Sie dies noch nicht getan haben, lesen Sie bitte [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textäquivalent im `alt`-Attribut.
- Sie können das Bild einfach in einen Hyperlink verwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einfügen.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was schnellere Ladezeiten für jede zukünftige Seite ermöglicht, die das Bild verwendet.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie in Ihrem SVG-Code eingebettete CSS-Stile verwenden. (Externe Stylesheets, die von der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) umgestalten.

### Fehlerbehebung und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie von Ihrem `src`-Attribut aus auf ein PNG oder JPG verweisen und ein [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut verwenden (das nur von neueren Browsern erkannt wird), um auf das SVG zu verweisen. In diesem Fall wird nur in unterstützenden Browsern das SVG geladen – ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie im folgenden gezeigt wird. Im folgenden Code bleiben ältere Browser beim PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mithilfe von CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und den gleichen CSS-Einschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, wird Sie dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorial/Getting_Started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in HTML einfügt

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – das wird manchmal als **SVG inline setzen** oder **inlining SVG** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>`-Start-Tag beginnt und mit einem `</svg>`-End-Tag endet. Hier ein sehr einfaches Beispiel, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihrer SVG inline spart eine HTTP-Anfrage und kann daher Ihre Ladezeit ein wenig verkürzen.
- Sie können `class`es und `id`s zu SVG-Elementen zuweisen und sie mit CSS gestalten, entweder innerhalb der SVG oder wo immer Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. In der Tat können Sie jedes [SVG-Darstellungsattribut](/de/docs/Web/SVG/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Inlining von SVG ist der einzige Ansatz, der es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink verwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einbetten.

#### Nachteile

- Diese Methode eignet sich nur, wenn Sie das SVG nur an einer Stelle verwenden. Duplikation führt zu ressourcenintensiver Wartung.
- Zusätzlicher SVG-Code vergrößert die Größe Ihrer HTML-Datei.
- Der Browser kann inline-SVG nicht zwischenspeichern, wie er reguläre Bildressourcen zwischenspeichern würde, so dass Seiten, die das Bild enthalten, nicht schneller laden, nachdem die erste Seite mit dem Bild geladen wurde.
- Sie können Fallback in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden trotzdem alle Fallback-Bilder. Sie müssen abwägen, ob der zusätzliche Aufwand lohnt, nur um alte Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es in [Von \<object> bis \<iframe> – andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) gelernt haben.

Hier eine kurze Wiederholung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode, um SVG einzubetten:

#### Nachteile

- `iframe`s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen das Fallback nur dann an, wenn sie `iframe`s völlig nicht unterstützen.
- Darüber hinaus können Sie, es sei denn, das SVG und Ihre aktuelle Webseite haben den gleichen [Ursprung](/de/docs/Glossary/origin), JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Mit SVG spielen

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie ein wenig mit SVG spielen. In dem unten stehenden _Input_-Abschnitt haben wir bereits einige Beispiele bereitgestellt, um Sie anzufangen. Sie können auch zum [SVG-Element-Referenz](/de/docs/Web/SVG/Element) gehen, um mehr Details über andere Spielzeuge herauszufinden, die Sie in SVG verwenden können, und diese auch ausprobieren. In diesem Abschnitt geht es darum, Ihre Recherchefähigkeiten zu üben und Spaß zu haben.

Wenn Sie nicht weiterkommen und Ihren Code nicht zum Laufen bringen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen.

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

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVGs sind, warum es nützlich ist, sie zu kennen, und wie man SVG in seine Webseiten einfügt. Er war nie dazu gedacht, ein vollständiger Leitfaden zum Lernen von SVG zu sein, sondern ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie ihm im Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht wie ein SVG-Experte fühlen. Wir haben unten einige Links hinzugefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie SVG funktioniert.

Im letzten Artikel dieses Moduls werden wir [responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) im Detail erkunden und uns die Werkzeuge ansehen, die HTML bietet, um Ihre Bilder besser auf verschiedenen Geräten funktionieren zu lassen.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorial/Getting_Started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Zugänglichkeit von SVGs](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
