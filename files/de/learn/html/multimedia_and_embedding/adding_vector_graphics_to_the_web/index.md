---
title: Vektorgrafiken zum Web hinzufügen
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Vektorgrafiken sind in vielen Fällen sehr nützlich — sie haben kleine Dateigrößen und sind stark skalierbar, sodass sie nicht pixeln, wenn sie vergrößert werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine solche in Ihre Webseite einbinden können.

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
      <td>Erlernen, wie man ein SVG (Vektorbild) in eine Webseite einbettet.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht beibringen, was SVG ist, sondern nur, wie Sie es in Webseiten einbinden können.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbildern** und **Vektorbildern**:

- **Rasterbilder** werden mithilfe eines Pixelrasters definiert — eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jeder Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mithilfe von Algorithmen definiert — eine Vektorbilddatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um zu bestimmen, wie das Bild beim Rendern auf dem Bildschirm aussehen soll. Das {{glossary("SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für das Web zu erstellen.

Um Ihnen eine Vorstellung vom Unterschied zwischen den beiden zu geben, betrachten wir ein Beispiel. Sie können dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) finden — es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied ist, dass das linke ein PNG und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie in die Seite hineinzoomen — das PNG-Bild wird beim Vergrößern gepixelt, da es Informationen darüber enthält, wo sich jeder Pixel befinden soll (und welche Farbe). Wenn es vergrößert wird, wird jeder Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild blockig aussieht. Das Vektorbild hingegen bleibt schön scharf, da die Algorithmen zur Berechnung der Formen im Bild verwendet werden, wobei die Werte skaliert werden, während es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder vergrößert, eins scharf und das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die oben gezeigten Bilder sind tatsächlich alles PNGs — mit dem sternförmigen linken Bild, das ein Rasterbild darstellt, und dem rechten Bild, das ein Vektorbild darstellt. Gehen Sie erneut zum [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein echtes Beispiel!

Darüber hinaus sind Vektordateien wesentlich leichter als ihre Rasteräquivalente, da sie nur eine Handvoll Algorithmen enthalten müssen, statt Informationen über jeden Pixel im Bild einzeln.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine auf {{glossary("XML")}} basierende Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde eine Markup-Sprache wie HTML, mit vielen verschiedenen Elementen zur Definition der Formen, die in Ihrem Bild erscheinen sollen, und der Effekte, die Sie auf diese Formen anwenden möchten. SVG ist zum Markieren von Grafiken, nicht von Inhalten. SVG definiert Elemente, um Grundformen wie {{svgelement("circle")}} und {{svgelement("rect")}} zu erstellen, sowie Elemente für komplexere Formen wie {{svgelement("path")}} und {{svgelement("polygon")}}. Zu den erweiterten SVG-Funktionen gehören {{svgelement("feColorMatrix")}} (Farben mithilfe einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

Ein einfaches Beispiel: Der folgende Code erstellt einen Kreis und ein Rechteck:

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG einfach von Hand zu codieren ist. Ja, Sie können einfachen SVG-Code in einem Texteditor per Hand codieren, aber für ein komplexes Bild wird dies schnell sehr schwierig. Um SVG-Bilder zu erstellen, verwenden die meisten Leute einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Pakete erlauben es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Fotos zu approximieren (zum Beispiel durch die Bitmap-Nachverfolgungsfunktion von Inkscape).

SVG hat noch einige zusätzliche Vorteile neben denen, die bereits beschrieben wurden:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{glossary("SEO")}} zugutekommt).
- SVGs eignen sich gut für Styling/Scripting, da jede Komponente des Bildes ein Element ist, das über CSS gestylt oder über JavaScript gescriptet werden kann.

Warum sollte jemand Rastergrafiken über SVG verwenden? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch beträchtliche Verarbeitungszeit im Browser erfordern.
- SVG kann schwerer zu erstellen sein als Rasterbilder, abhängig davon, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind aus den oben beschriebenen Gründen wohl besser für komplexe Präzisionsbilder wie Fotos geeignet.

> [!NOTE]
> In Inkscape, speichern Sie Ihre Dateien als Plain SVG, um Platz zu sparen. Bitte lesen Sie auch diesen [Artikel, der beschreibt, wie Sie SVGs für das Web vorbereiten](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## SVG zu Ihren Seiten hinzufügen

In diesem Abschnitt gehen wir die verschiedenen Möglichkeiten durch, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img` Element

Um ein SVG über ein {{htmlelement("img")}} Element einzubetten, müssen Sie es einfach im `src`-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height` oder `width` Attribut (oder beide, wenn Ihr SVG kein inhärentes {{glossary("aspect ratio")}} hat). Falls Sie das noch nicht getan haben, lesen Sie bitte [Images in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).

```html
<img
  src="equilateral.svg"
  alt="Dreieck mit allen drei Seiten gleich"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textequivalent im `alt`-Attribut verfügbar.
- Sie können das Bild leicht in einen Hyperlink umwandeln, indem Sie das `<img>` innerhalb eines {{htmlelement("a")}} Elements verschachteln.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was schnellere Ladezeiten für jede Seite zur Folge hat, die das Bild in der Zukunft verwendet.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS kontrollieren möchten, müssen Sie Inline-CSS-Stile in Ihrem SVG-Code einfügen. (Externe Stylesheets, die von der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu gestalten.

### Fehlersuche und plattformübergreifender Support

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG aus Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut verwenden (das nur neuere Browser erkennen), um die SVG zu referenzieren. In diesem Fall werden nur unterstützende Browser das SVG laden — ältere Browser werden das PNG stattdessen laden:

```html
<img
  src="equilateral.png"
  alt="Dreieck mit gleichlangen Seiten"
  srcset="equilateral.svg" />
```

Sie können auch SVGs als CSS-Hintergrundbilder verwenden, wie unten gezeigt. In dem unten stehenden Code bleiben ältere Browser bei dem PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie die `<img>` Methode, die oben beschrieben wurde, bedeutet auch das Einfügen von SVGs mithilfe von CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und denselben CSS-Einschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig eingerichtet ist. Falls das das Problem ist, wird dieser [Artikel Sie in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorial/Getting_Started#a_word_on_web_servers_for_.svgz_files).

### So fügen Sie SVG-Code in Ihr HTML ein

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen — dies wird manchmal als **SVG-Inline-Stellung** oder **SVG-Inlining** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>` Starttag beginnt und mit einem `</svg>` Endtag endet. Hier ist ein sehr einfaches Beispiel für das, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihres SVGs inline spart eine HTTP-Anfrage, was Ihre Ladezeit etwas reduzieren kann.
- Sie können `class` und `id`s SVG-Elementen zuweisen und sie mit CSS stylen, entweder innerhalb des SVGs oder dort, wo Sie die CSS-Stilregeln für Ihr HTML-Dokument ablegen. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Inlinen von SVG ist der einzige Ansatz, der Ihnen erlaubt, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink umwandeln, indem Sie es in ein {{htmlelement("a")}} Element hüllen.

#### Nachteile

- Diese Methode eignet sich nur, wenn Sie das SVG nur an einer Stelle verwenden. Duplizierung führt zu ressourcenintensiver Wartung.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann Inline-SVG nicht wie reguläre Bildressourcen zwischenspeichern, sodass Seiten, die das Bild enthalten, nicht schneller geladen werden, nachdem die erste Seite mit dem Bild geladen wurde.
- Sie können ein Fallback in einem {{svgelement("foreignObject")}} Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder herunter. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnenswert ist, nur um veraltete Browser zu unterstützen.

### So betten Sie ein SVG mit einem `iframe` ein

Sie können SVG-Bilder in Ihrem Browser öffnen, genau wie Webseiten. Daher wird das Einbetten eines SVG-Dokuments mit einem `<iframe>` genauso durchgeführt, wie wir es in [Von \<object> zu \<iframe> — andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) studiert haben.

Hier ist eine kurze Wiederholung:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Dreieck mit drei ungleichen Seiten" />
</iframe>
```

Dies ist definitiv nicht die beste Methode, die gewählt werden sollte:

#### Nachteile

- `iframe`s haben einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn sie keinen Support für `iframe`s insgesamt haben.
- Außerdem, es sei denn, das SVG und Ihre aktuelle Webseite haben den gleichen {{glossary('origin')}}, können Sie JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Aktives Lernen: Spielen mit SVG

In diesem Abschnitt des aktiven Lernens möchten wir, dass Sie ein wenig mit SVG zum Spaß experimentieren. Im _Input_-Abschnitt unten sehen Sie, dass wir Ihnen bereits einige Beispiele zur Verfügung gestellt haben, um Ihnen den Einstieg zu erleichtern. Sie können auch zum [SVG-Element-Referenz](/de/docs/Web/SVG/Element) gehen, um mehr Details über andere Werkzeuge zu finden, die Sie in SVG verwenden können, und diese auch ausprobieren. Dieser Abschnitt dreht sich darum, Ihre Recherchefähigkeiten zu üben und Spaß zu haben.

Wenn Sie stecken bleiben und Ihren Code nicht zum Laufen bringen, können Sie ihn immer mit dem _Reset_-Button zurücksetzen.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editierbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich wegzubewegen (Tab fügt ein Tabzeichen ein).
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
  <input id="solution" type="button" value="Lösung anzeigen" disabled />
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
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
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
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_Learning_Playing_with_SVG', 700, 540) }}

## Zusammenfassung

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum sie nützlich sind, und wie man SVGs in Ihre Webseiten einfügt. Es war niemals als vollständiger Leitfaden zum Erlernen von SVG gedacht, nur als Hinweis, damit Sie wissen, was SVG ist, wenn Sie ihm auf Ihrer Reise durchs Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie noch nicht das Gefühl haben, ein SVG-Experte zu sein. Wir haben einige Links unten eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

Im letzten Artikel dieses Moduls beschäftigen wir uns ausführlich mit [reaktiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) und untersuchen, welche Werkzeuge HTML hat, um Ihre Bilder auf verschiedenen Geräten besser funktionieren zu lassen.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorial/Getting_Started) auf MDN
- [Sara Soueidans Tutorial zu reaktionsfähigen SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Barrierefreiheitsvorteile von SVG](https://www.w3.org/TR/SVG-access/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
