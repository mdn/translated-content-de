---
title: Vektorgrafiken zum Web hinzufügen
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Vektorgrafiken sind in vielen Fällen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht verpixelt wirken, wenn man sie vergrößert oder auf eine große Größe ausdehnt. In diesem Artikel zeigen wir Ihnen, wie Sie eine auf Ihrer Webseite einfügen.

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
      <td>Lernen Sie, wie Sie ein SVG- (Vektor-) Bild auf einer Webseite einbetten.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht beibringen, wie Sie SVG erstellen, sondern lediglich was es ist und wie Sie es zu Webseiten hinzufügen können.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Bildtypen — **Rastergrafiken** und **Vektorgrafiken**:

- **Rastergrafiken** werden mithilfe eines Pixelrasters definiert — eine Rasterbilddatei enthält Informationen darüber, wo genau jedes Pixel platziert werden soll und welche Farbe es haben sollte. Beliebte Web-Rasterformate sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorgrafiken** werden mit Algorithmen definiert — eine Vektorgrafikdatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um zu bestimmen, wie das Bild beim Rendern auf dem Bildschirm aussehen soll. Das {{Glossary("SVG", "SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für den Einsatz im Web zu erstellen.

Um Ihnen einen Eindruck von dem Unterschied zwischen beiden zu geben, sehen wir uns ein Beispiel an. Sie finden dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke Bild eine PNG-Datei und das rechte eine SVG-Grafik ist.

Der Unterschied wird deutlich, wenn Sie in die Seite hineinzoomen — das PNG-Bild wird pixelig, weil es Informationen darüber enthält, wo jedes Pixel sein soll (und welche Farbe es hat). Wenn es vergrößert wird, wird jedes Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild blockartig erscheint. Das Vektorgrafikbild hingegen bleibt schön und klar, da unabhängig von der Größe die Algorithmen verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte skaliert werden, wenn es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder vergrößert, eines scharf und das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind tatsächlich alle PNGs — mit dem linken Stern in jedem Fall als Darstellung einer Rastergrafik und dem rechten Stern als Darstellung einer Vektorgrafik. Gehen Sie erneut zur [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein reales Beispiel!

Zudem sind Vektorgrafikdateien deutlich leichter als ihre Rasteräquivalente, da sie nur eine Handvoll Algorithmen enthalten müssen, anstatt Informationen über jedes Pixel im Bild einzeln.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde genommen Markup, ähnlich wie HTML, nur dass es viele verschiedene Elemente zur Definition der Formen gibt, die Sie in Ihrem Bild erscheinen lassen möchten, und der Effekte, die Sie auf diese Formen anwenden möchten. SVG ist für die Auszeichnung von Grafiken und nicht von Inhalten gedacht. SVG definiert Elemente zur Erstellung grundlegender Formen wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen wie {{svgelement("path")}} und {{svgelement("polygon")}}. Zu den fortgeschritteneren SVG-Funktionen gehören {{svgelement("feColorMatrix")}} (Farben mit einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG leicht von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand codieren, aber für ein komplexes Bild wird es sehr schnell schwierig. Zur Erstellung von SVG-Bildern verwenden die meisten Menschen einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Foto-Nachbildungen zu erstellen (z. B. die Trace Bitmap-Funktion von Inkscape).

SVG hat einige zusätzliche Vorteile zusätzlich zu den bisher beschriebenen:

- Text in Vektorgrafiken bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut zum Styling/Scripting, da jede Komponente des Bildes ein Element ist, das mittels CSS gestylt oder mittels JavaScript gescriptet werden kann.

Warum also sollte jemand Rastergrafiken gegenüber SVG verwenden wollen? Nun, SVG hat auch einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was bedeutet, dass die Dateigrößen zunehmen können; komplexe SVGs können auch erhebliche Verarbeitungszeiten im Browser benötigen.
- SVG kann schwerer zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind möglicherweise besser für komplexe Präzisionsbilder wie Fotos geeignet, aus den oben beschriebenen Gründen.

> [!NOTE]
> Speichern Sie Ihre Dateien in Inkscape als Plain SVG, um Speicherplatz zu sparen. Bitte beachten Sie auch diesen [Artikel, der beschreibt, wie man SVGs für das Web vorbereitet](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## SVG zu Ihren Seiten hinzufügen

In diesem Abschnitt erläutern wir die verschiedenen Möglichkeiten, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um eine SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur wie erwartet im src-Attribut referenzieren. Sie benötigen ein `height`- oder ein `width`-Attribut (oder beides, wenn Ihr SVG kein internes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Wenn Sie es noch nicht getan haben, lesen Sie bitte [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit integriertem Textequivalent im `alt`-Attribut.
- Sie können das Bild leicht in einen Hyperlink verwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einschließen.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für alle Seiten führt, die das Bild in Zukunft verwenden.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie Inline-CSS-Stile in Ihrem SVG-Code einfügen. (Externe Stylesheets, die aus der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) erneut gestalten.

### Fehlerbehebung und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG aus Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut verwenden (das nur von neueren Browsern anerkannt wird), um auf das SVG zu verweisen. In diesem Fall laden nur unterstützende Browser das SVG – ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im folgenden Code verwenden ältere Browser das ihnen bekannte PNG, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mithilfe von CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und den gleichen CSS-Einschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, wird Ihnen dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorial/Getting_Started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihr HTML einfügt

Sie können die SVG-Datei auch in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen – dies wird manchmal als **SVG inline setzen** oder **SVG einbetten** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Schnipsel mit einem `<svg>`-Starttag beginnt und mit einem `</svg>`-Endtag endet. Hier ist ein sehr einfaches Beispiel dafür, was Sie vielleicht in Ihr Dokument einfügen würden:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen von SVG in Ihr Dokument spart eine HTTP-Anfrage und kann daher Ihre Ladezeit etwas reduzieren.
- Sie können `class`- oder `id`-Attribute auf SVG-Elemente anwenden und diese mit CSS stylen, entweder innerhalb des SVGs oder wo auch immer Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Einbetten von SVG ist der einzige Ansatz, der es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihr SVG-Bild anzuwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink verwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einwickeln.

#### Nachteile

- Diese Methode eignet sich nur, wenn Sie das SVG an nur einer Stelle verwenden. Duplikation macht die Wartung ressourcenintensiv.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann eingebettete SVGs nicht wie reguläre Bildressourcen zwischenspeichern, sodass Seiten, die das Bild enthalten, nach dem Laden der ersten Seite mit dem Bild nicht schneller geladen werden.
- Sie können Fallback-Bilder in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden trotzdem alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnenswert ist, nur um obsoleszente Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder im Browser genauso öffnen wie Webseiten. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es in [Von `<object>` zu `<iframe>` — andere Einbetttechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) gelernt haben.

Hier ist eine schnelle Übersicht:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Das ist definitiv nicht die beste Methode zur Auswahl:

#### Nachteile

- `iframe`s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn ihnen die Unterstützung für `iframe`s insgesamt fehlt.
- Darüber hinaus können Sie, sofern das SVG und Ihre aktuelle Webseite nicht denselben {{Glossary("origin", "Ursprung")}} haben, nicht mit JavaScript auf Ihrer Hauptwebseite das SVG manipulieren.

## Aktives Lernen: Spielen mit SVG

In diesem aktiven Lernabschnitt möchten wir, dass Sie ein wenig mit SVG spielen, einfach aus Spaß. Im _Input_-Abschnitt unten sehen Sie, dass wir Ihnen bereits einige Beispiele zur Verfügung gestellt haben, um Sie zu starten. Sie können auch zum [SVG-Element-Referenz](/de/docs/Web/SVG/Element) gehen, mehr Details über andere Tools herausfinden, die Sie in SVG verwenden können, und diese auch ausprobieren. Dieser Abschnitt dreht sich darum, Ihre Recherchefähigkeiten zu üben und ein wenig Spaß zu haben.

Wenn Sie hängen bleiben und Ihren Code nicht zum Laufen bringen, können Sie ihn immer mit dem _Zurücksetzen_ Button zurücksetzen.

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

Dieser Artikel hat Ihnen einen kurzen Überblick gegeben über das, was Vektorgrafiken und SVG sind, warum sie nützlich sind und wie man SVG in Ihre Webseiten einfügt. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Erlernen von SVG zu sein, sondern nur ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie es auf Ihren Reisen durchs Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht wie ein SVG-Experte fühlen. Wir haben einige Links unten eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

Im letzten Artikel dieses Moduls werden wir uns detaillierter mit [reaktionsfähigen Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) beschäftigen und die Werkzeuge untersuchen, die HTML bietet, um Ihre Bilder besser über verschiedene Geräte hinweg arbeiten zu lassen.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorial/Getting_Started) auf MDN
- [Sara Soueidans Tutorial über responsive SVG-Bilder](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Barrierefreiheitsvorteile von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
