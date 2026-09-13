---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

Vektorgrafiken sind in vielen Fällen sehr nützlich — sie haben kleine Dateigrößen und sind hochskalierbar, sodass sie nicht verpixeln, wenn man sie vergrößert oder in großer Größe darstellt. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden können.

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
> Dieser Artikel soll nicht SVG lehren, sondern lediglich was es ist und wie man es zu Webseiten hinzufügt.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** sind mit einem Raster von Pixeln definiert — eine Rasterbilddatei enthält Informationen darüber, wo genau jedes Pixel platziert werden soll und welche Farbe es haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** sind mit Algorithmen definiert — eine Vektorbilddatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um herauszufinden, wie das Bild aussehen soll, wenn es auf dem Bildschirm gerendert wird. Das {{Glossary("SVG", "SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für den Einsatz im Web zu erstellen.

Um Ihnen eine Idee des Unterschieds zwischen den beiden zu geben, schauen wir uns ein Beispiel an:

```html live-sample___raster-vector live-sample___raster-vector-zoomed
<img src="star.png" alt="A raster star" />
<img src="star.svg" role="img" alt="A vector star" />
```

Dies zeigt zwei scheinbar identische rote Sterne mit schwarzen Schlagschatten, nebeneinander. Der Unterschied ist, dass der linke ein Rasterbild (PNG) und der rechte ein Vektorbild (SVG) ist.

{{embedlivesample("raster-vector", "100%", 120)}}

Der Unterschied wird deutlich, wenn Sie in die Seite hineinzoomen oder die Bilder vergrößern. Das folgende zeigt, wie beide Sterne bei einer Breite von `300px` gerendert werden:

```css hidden live-sample___raster-vector-zoomed
img {
  width: 300px;
}
```

{{embedlivesample("raster-vector-zoomed", "100%", 350)}}

Das PNG-Bild wird pixelig, weil es Informationen darüber enthält, wo jedes Pixel sein soll (und welche Farbe). Beim Zoomen wird jedes Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild blockartig wirkt. Das SVG-Bild hingegen bleibt schön und scharf, da die Algorithmen unabhängig von der Größe verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte entsprechend skaliert werden, wenn es größer wird.

Darüber hinaus sind Vektorgrafikdateien viel leichter als ihre Rasteräquivalente, da sie nur eine Handvoll Algorithmen speichern müssen, anstatt Informationen über jedes Pixel im Bild einzeln.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde Markup, wie HTML, außer dass es viele verschiedene Elemente zum Definieren der Formen gibt, die Sie in Ihrem Bild zeigen wollen, und der Effekte, die Sie auf diese Formen anwenden wollen. SVG dient zur Markierung von Grafiken, nicht von Inhalten. SVG definiert Elemente zur Erstellung grundlegender Formen, wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen, wie {{svgelement("path")}} und {{svgelement("polygon")}}. Fortgeschrittene SVG-Funktionen sind zum Beispiel {{svgelement("feColorMatrix")}} (Farben mit einer Transformationsmatrix transformieren), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG leicht von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor von Hand codieren, aber bei einem komplexen Bild wird das schnell sehr schwierig. Zur Erstellung von SVG-Bildern verwenden die meisten Menschen einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme erlauben es Ihnen, mit verschiedenen Grafikwerkzeugen eine Vielzahl von Illustrationen zu erstellen und Annäherungen an Fotos zu schaffen (zum Beispiel mit der Trace Bitmap-Funktion von Inkscape).

SVG bietet einige zusätzliche Vorteile gegenüber den bisher beschriebenen:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut zum Stylen/Skripten, da jede Komponente des Bildes ein Element ist, das via CSS gestaltet oder via JavaScript geskriptet werden kann.

Warum sollte jemand Rastergrafiken über SVG verwenden wollen? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell kompliziert werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch signifikante Verarbeitungszeit im Browser in Anspruch nehmen.
- SVG kann schwieriger zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie zu erstellen versuchen.

Rastergrafiken sind aus den oben beschriebenen Gründen möglicherweise besser für komplexe Präzisionsbilder wie Fotos geeignet.

SVG-Grafiken, die aus Editoren wie Inkscape exportiert werden, bieten großes Optimierungspotenzial bezüglich der Dateigröße. Bevor Sie sie im Web bereitstellen, möchten Sie sie wahrscheinlich durch einen SVG-Optimierer wie [SVGO](https://www.npmjs.com/package/svgo) laufen lassen.

## Hinzufügen von SVG zu Ihren Seiten

In diesem Abschnitt zeigen wir Ihnen die verschiedenen Möglichkeiten, SVG-Vektorgrafiken in Ihre Webseiten einzubinden.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur im src-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height` oder ein `width` Attribut (oder beides, wenn Ihr SVG kein eigenes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Wenn Sie dies noch nicht getan haben, lesen Sie bitte [HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit integriertem Textäquivalent im `alt` Attribut.
- Sie können das Bild leicht zu einem Hyperlink machen, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einfügen.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in Zukunft verwendet.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern wollen, müssen Sie Inline-CSS-Stile in Ihrem SVG-Code einfügen. (Externe Stylesheets, die von der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu gestalten.

### Fehlerbehebung und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und niedriger, Android 2.3 und niedriger), könnten Sie ein PNG oder JPG von Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut (welches nur von neueren Browsern erkannt wird) verwenden, um auf das SVG zu verweisen. In diesem Fall laden nur unterstützende Browser das SVG — ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. In dem untenstehenden Code bleiben ältere Browser bei dem PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mit CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und denselben CSS-Beschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig konfiguriert ist. Wenn das das Problem ist, wird dieser [Artikel Ihnen helfen, in die richtige Richtung zu lenken](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihr HTML einfügt

Sie können die SVG-Datei auch in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen — dies wird manchmal als "SVG inline setzen" oder "SVG inline einfügen" bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Snippet mit einem `<svg>` Start-Tag beginnt und mit einem `</svg>` End-Tag endet. Hier ist ein sehr einfaches Beispiel dafür, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Inline-Setzen Ihres SVG spart eine HTTP-Anfrage und kann daher Ihre Ladezeit etwas verringern.
- Sie können `class`en und `id`s den SVG-Elementen zuweisen und sie mit CSS gestalten, entweder innerhalb des SVG oder überall dort, wo Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Einfügen von SVG ist die einzige Methode, die es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (sogar in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink umwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einfügen.

#### Nachteile

- Diese Methode eignet sich nur, wenn das SVG nur an einer Stelle verwendet wird. Duplikation macht die Wartung ressourcenintensiv.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann Inline-SVG nicht zwischenspeichern wie reguläre Bildressourcen, sodass Seiten, die das Bild enthalten, nicht schneller laden, nachdem die erste Seite mit dem Bild geladen wurde.
- Sie können ein Fallback in einem {{svgelement("foreignObject")}}-Element einschließen, aber Browser, die SVG unterstützen, laden trotzdem alle Fallback-Bilder. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich lohnt, nur um obsolet gewordene Browser zu unterstützen.

### Wie man ein SVG mit einem `iframe` einbettet

Sie können SVG-Bilder in Ihrem Browser öffnen, genau wie Webseiten. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es in [From \<object> to \<iframe> — general embedding technologies](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) gelernt haben.

Hier eine kurze Übersicht:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox></iframe>
```

Dies ist definitiv nicht die beste Methode zur Auswahl:

#### Nachteile

- `<iframe>`-Elemente können Fallback-Inhalte zwischen ihren Öffnungs- und Schlusstags enthalten, aber diese werden nur in Browsern angezeigt, die `<iframe>` nicht unterstützen, nicht wenn das Bild nicht geladen werden kann.
- Darüber hinaus können Sie, sofern das SVG und Ihre aktuelle Webseite nicht denselben {{Glossary("origin", "Ursprung")}} haben, JavaScript auf Ihrer Hauptwebseite nicht verwenden, um das SVG zu manipulieren.

## Spielen mit SVG

In dieser Übung möchten wir, dass Sie mit etwas SVG spielen. Drücken Sie die **Play**-Taste, um das nächste Beispiel im MDN Playground zu öffnen und dort zu bearbeiten.

Gehen Sie zur [SVG-Elementreferenz](/de/docs/Web/SVG/Reference/Element), um zu sehen, welche anderen Elemente Sie verwenden können, die viele integrierte Funktionen mitbringen. Es gibt andere Formen, die Sie ausprobieren können, wie Ellipsen, oder Sie können mit [Muster](/de/docs/Web/SVG/Reference/Element/pattern) experimentieren oder sogar [Filtereffekte](/de/docs/Web/SVG/Reference/Element/filter). Dieser Abschnitt dreht sich um Ihre Recherchefähigkeiten, etwas Neues auszuprobieren und Spaß zu haben.

Wenn Sie feststecken und Ihren Code nicht zum Laufen bringen können, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste im Playground zurücksetzen.

```html live-sample___playing-with-svg
<svg width="100%" height="100%">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
  <polygon points="120,0 240,225 0,225" fill="green" />
  <text
    x="50"
    y="100"
    font-family="Verdana"
    font-size="55"
    fill="white"
    stroke="black"
    stroke-width="2">
    Hello!
  </text>
</svg>
```

{{ EmbedLiveSample('playing-with-SVG', 700, 300) }}

## Zusammenfassung

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum sie nützlich zu wissen sind und wie man SVG in seine Webseiten einbindet. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Lernen von SVG zu sein, sondern nur ein Hinweis, damit Sie wissen, was SVG ist, wenn Sie ihm auf Ihren Reisen durch das Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie nicht das Gefühl haben, schon ein SVG-Experte zu sein. Wir haben unten einige Links eingefügt, die Ihnen helfen können, mehr darüber zu erfahren, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
