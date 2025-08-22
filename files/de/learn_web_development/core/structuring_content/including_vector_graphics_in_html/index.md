---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

Vektorgrafiken sind in vielen Fällen sehr nützlich — sie haben kleine Dateigrößen und sind hoch skalierbar, so dass sie nicht pixelig werden, wenn sie vergrößert oder auf eine große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden können.

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
      <td>Lernen, wie man ein SVG (Vektorgrafik) Bild in eine Webseite einbettet.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel soll Ihnen nicht beibringen, wie man SVG erstellt, sondern nur, was es ist und wie man es in Webseiten einbindet.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern — **Rasterbilder** und **Vektorbilder**:

- **Rasterbilder** werden mit einem Pixelraster definiert — eine Rasterbilddatei enthält Informationen, die genau zeigen, wo jeder Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mittels Algorithmen definiert — eine Vektordatei enthält Definitionen von Formen und Pfaden, die der Computer verwenden kann, um zu bestimmen, wie das Bild aussehen soll, wenn es auf dem Bildschirm dargestellt wird. Das {{Glossary("SVG", "SVG")}}-Format erlaubt es uns, leistungsstarke Vektorgrafiken für die Nutzung im Web zu erstellen.

Um Ihnen eine Vorstellung des Unterschieds zwischen den beiden zu geben, schauen wir uns ein Beispiel an. Sie finden dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — es zeigt zwei scheinbar identische Bilder nebeneinander von einem roten Stern mit einem schwarzen Schlagschatten. Der Unterschied ist, dass das linke ein PNG und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie auf die Seite zoomen — das PNG-Bild wird verpixelt, wenn Sie hineinzoomen, weil es Informationen enthält, wo jeder Pixel sein soll (und welche Farbe). Wenn es gezoomt wird, wird jeder Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, so dass das Bild blockartig zu erscheinen beginnt. Das Vektorgrafikbild bleibt jedoch schön und klar, denn unabhängig von seiner Größe werden die Algorithmen verwendet, um die Formen im Bild zu berechnen, wobei die Werte skaliert werden, während es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder herangezoomt, eines klar und das andere verschwommen](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind in Wirklichkeit alle PNGs — mit dem linken Stern in jedem Fall, der ein Rasterbild darstellt, und dem rechten Stern, der ein Vektorgrafikbild darstellt. Gehen Sie zur [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) Demo für ein echtes Beispiel!

Außerdem sind Vektorgrafikdateien wesentlich leichter als ihre Raster-Gegenstücke, da sie nur eine Handvoll von Algorithmen enthalten müssen, anstatt Informationen über jeden einzelnen Pixel im Bild.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine auf {{Glossary("XML", "XML")}} basierende Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde genommen eine Markup-Sprache, ähnlich wie HTML, außer dass Sie viele verschiedene Elemente zum Definieren der Formen haben, die in Ihrem Bild erscheinen sollen, und die Effekte, die Sie auf diese Formen anwenden wollen. SVG ist für die Markierung von Grafiken, nicht für Inhalte. SVG definiert Elemente zur Erstellung von Grundformen wie {{svgelement("circle")}} und {{svgelement("rect")}}, sowie Elemente zur Erstellung komplexerer Formen wie {{svgelement("path")}} und {{svgelement("polygon")}}. Einige fortgeschrittene SVG-Funktionen umfassen {{svgelement("feColorMatrix")}} (Farben mit einer Transformationsmatrix umwandeln), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG leicht von Hand kodiert werden kann. Ja, Sie können einfaches SVG in einem Texteditor von Hand kodieren, aber bei einem komplexen Bild wird dies schnell sehr schwierig. Um SVG-Bilder zu erstellen, verwenden die meisten Menschen einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Näherungen von Fotos zu erzeugen (zum Beispiel Inkscapes Trace Bitmap-Funktion).

SVG hat einige zusätzliche Vorteile neben denen, die bisher beschrieben wurden:

- Text in Vektorgrafiken bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut für Styling/Scripting, da jede Komponente des Bildes ein Element ist, das über CSS gestylt oder über JavaScript geskriptet werden kann.

Warum sollte jemand Rastergrafiken gegenüber SVG bevorzugen? Nun, SVG hat einige Nachteile:

- SVG kann sehr schnell komplex werden, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs benötigen zudem eine erhebliche Bearbeitungszeit im Browser.
- SVG kann schwieriger zu erstellen sein als Rasterbilder, je nachdem, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind aus den oben beschriebenen Gründen möglicherweise besser für präzise komplexe Bilder wie Fotos geeignet.

Aus Grafik-Editoren wie Inkscape exportierte SVG-Grafiken bieten großes Potenzial für Größenoptimierungen. Bevor Sie sie im Web bereitstellen, sollten Sie sie wahrscheinlich durch einen SVG-Optimierer wie [SVGO](https://www.npmjs.com/package/svgo) laufen lassen.

## SVG zu Ihrer Seite hinzufügen

In diesem Abschnitt werden wir die verschiedenen Möglichkeiten durchgehen, wie Sie SVG-Vektorgrafiken zu Ihren Webseiten hinzufügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es nur im src-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder `width`-Attribut (oder beides, wenn Ihr SVG kein inherentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Falls Sie dies noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit eingebautem Textequivalent im `alt`-Attribut.
- Sie können das Bild leicht in einen Hyperlink verwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einfügen.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in Zukunft verwendet.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie in Ihrem SVG-Code Inline-CSS-Stile einfügen. (Von der SVG-Datei aufgerufene externe Stylesheets wirken sich nicht aus.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) neu gestalten.

### Fehlerbehebung und plattformübergreifende Unterstützung

Für Browser, die SVG nicht unterstützen (IE 8 und niedriger, Android 2.3 und niedriger), könnten Sie von Ihrem `src`-Attribut auf ein PNG oder JPG verweisen und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut verwenden (das nur neuere Browser erkennen), um auf das SVG zu verweisen. In diesem Fall laden nur unterstützende Browser das SVG — ältere Browser laden stattdessen das PNG:

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

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mit CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und denselben CSS-Beschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, könnte es daran liegen, dass Ihr Server nicht richtig konfiguriert ist. Wenn das das Problem ist, wird Sie dieser [Artikel in die richtige Richtung weisen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### So fügen Sie SVG-Code in Ihr HTML ein

Sie können die SVG-Datei auch in einem Texteditor öffnen, den SVG-Code kopieren und in Ihr HTML-Dokument einfügen — das wird manchmal als Inlining Ihrer **SVG** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Code-Schnipsel mit einem `<svg>`-Start-Tag beginnt und mit einem `</svg>`-End-Tag endet. Hier ist ein sehr einfaches Beispiel dafür, was Sie in Ihr Dokument einfügen könnten:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihres SVG spart eine HTTP-Anfrage und kann daher Ihre Ladezeit etwas reduzieren.
- Sie können `class`- und `id`-Attribute SVG-Elementen zuweisen und diese mit CSS stylen, entweder innerhalb des SVG oder wo immer Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Inlining von SVG ist der einzige Ansatz, der es Ihnen ermöglicht, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (auch in Ihrem regulären Stylesheet).
- Sie können SVG-Markup in einen Hyperlink verwandeln, indem Sie es in ein {{htmlelement("a")}}-Element einfügen.

#### Nachteile

- Diese Methode eignet sich nur, wenn Sie SVG nur an einem Ort verwenden. Die Duplizierung macht die Wartung ressourcenintensiv.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann Inline-SVG nicht zwischenspeichern, wie es reguläre Bildressourcen tun würden, daher laden Seiten, die das Bild enthalten, nicht schneller nach dem ersten Laden der Seite, die das Bild enthält.
- Sie können Rückfalloptionen in einem {{svgelement("foreignObject")}}-Element einfügen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich sinnvoll ist, nur um veraltete Browser zu unterstützen.

### So betten Sie ein SVG mit einem `iframe` ein

Sie können SVG-Bilder in Ihrem Browser genauso wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso wie im [Von `<object>` zu `<iframe>` — allgemeine Einbetten-Technologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) Leitfaden beschrieben.

Hier ist eine kurze Übersicht:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Dies ist definitiv nicht die beste Methode zur Auswahl:

#### Nachteile

- `iframe`s haben zwar einen Fallback-Mechanismus, wie Sie sehen können, aber Browser zeigen den Fallback nur an, wenn sie überhaupt keine `iframe`s unterstützen.
- Außerdem können Sie, es sei denn, das SVG und Ihre aktuelle Webseite haben den gleichen {{Glossary("origin", "Ursprung")}}, kein JavaScript auf Ihrer Hauptwebseite verwenden, um das SVG zu manipulieren.

## Spielen mit SVG

In dieser Übung möchten wir, dass Sie ein wenig mit SVG spielen. Drücken Sie die **Play**-Taste, um das nächste Beispiel im MDN-Spielplatz zu öffnen und es dort zu bearbeiten.

Gehen Sie zur [SVG-Element-Referenz](/de/docs/Web/SVG/Reference/Element), um zu sehen, welche anderen Elemente Sie verwenden können, die viel eingebaute Funktionalität bieten.
Es gibt andere Formen, die Sie ausprobieren können, wie Ellipsen, oder Sie können mit [Mustern](/de/docs/Web/SVG/Reference/Element/pattern) oder sogar [Filtereffekten](/de/docs/Web/SVG/Reference/Element/filter) experimentieren.
Dieser Abschnitt dreht sich ganz um Ihre Recherchefähigkeiten, etwas Neues auszuprobieren und Spaß zu haben.

Wenn Sie stecken bleiben und Ihren Code nicht zum Laufen bringen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste im Spielplatz zurücksetzen.

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

Dieser Artikel hat Ihnen eine kurze Einführung in das Thema Vektorgrafiken und SVG gegeben, warum es nützlich ist, darüber Bescheid zu wissen, und wie man SVG in Ihre Webseiten einbindet. Es war nie beabsichtigt, ein vollständiger Leitfaden zum Lernen von SVG zu sein, sondern ein Hinweis, damit Sie wissen, was SVG ist, falls Sie ihm auf Ihren Reisen durch das Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht wie ein SVG-Experte fühlen. Wir haben einige Links unten eingefügt, die Ihnen helfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Anleitung zum Skalieren von SVGs](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
