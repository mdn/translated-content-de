---
title: Einbinden von Vektorgrafiken in HTML
short-title: Vector graphics
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Vektorgrafiken sind in vielen Situationen sehr nützlich – sie haben kleine Dateigrößen und sind hoch skalierbar, sodass sie nicht verpixeln, wenn sie vergrößert oder auf eine große Größe aufgeblasen werden. In diesem Artikel zeigen wir Ihnen, wie Sie eine Vektorgrafik in Ihre Webseite einbinden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Grundlagen von HTML</a>
        kennen und wissen,
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >wie Sie ein Bild in Ihr Dokument einfügen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen Sie, wie Sie ein SVG (Vektorbild) in eine Webseite einbetten können.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieser Artikel hat nicht das Ziel, Ihnen SVG beizubringen; sondern nur, was es ist und wie man es in Webseiten einbindet.

## Was sind Vektorgrafiken?

Im Web arbeiten Sie mit zwei Arten von Bildern – **Rasterbildern** und **Vektorbildern**:

- **Rasterbilder** werden mit einem Raster aus Pixeln definiert – eine Rasterbilddatei enthält Informationen darüber, wo genau jeder Pixel platziert werden soll und welche Farbe er haben soll. Beliebte Rasterformate im Web sind Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) und GIF (`.gif`).
- **Vektorbilder** werden mit Algorithmen definiert – eine Vektorbilddatei enthält Form- und Pfaddefinitionen, die der Computer verwenden kann, um zu berechnen, wie das Bild dargestellt aussehen soll. Das {{Glossary("SVG", "SVG")}}-Format ermöglicht es uns, leistungsstarke Vektorgrafiken für die Nutzung im Web zu erstellen.

Um Ihnen einen Eindruck vom Unterschied zwischen den beiden zu geben, schauen wir uns ein Beispiel an. Sie finden dieses Beispiel live in unserem GitHub-Repo als [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) – es zeigt zwei scheinbar identische Bilder nebeneinander, einen roten Stern mit einem schwarzen Schlagschatten. Der Unterschied besteht darin, dass das linke Bild ein PNG und das rechte ein SVG-Bild ist.

Der Unterschied wird deutlich, wenn Sie die Seite heranzoomen – das PNG-Bild wird pixelig, weil es Informationen darüber enthält, wo jeder Pixel platziert werden soll (und welche Farbe er hat). Beim Zoomen wird jeder Pixel vergrößert, um mehrere Pixel auf dem Bildschirm zu füllen, sodass das Bild blockig aussieht. Das Vektorbild hingegen bleibt schön scharf, weil die Algorithmen unabhängig von der Größe verwendet werden, um die Formen im Bild zu berechnen, wobei die Werte skaliert werden, wenn es größer wird.

![Zwei Sternbilder](raster-vector-default-size.png)

![Zwei Sternbilder herangezoomt, eines scharf, das andere unscharf](raster-vector-zoomed.png)

> [!NOTE]
> Die obigen Bilder sind tatsächlich alle PNGs – der linke Stern in jedem Fall steht für ein Rasterbild, und der rechte Stern steht für ein Vektorbild. Gehen Sie erneut zur [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html)-Demo für ein echtes Beispiel!

Außerdem sind Vektorbilddateien viel leichter als ihre Rastergegenstücke, da sie nur eine Handvoll Algorithmen und nicht Informationen über jeden einzelnen Pixel im Bild enthalten müssen.

## Was ist SVG?

[SVG](/de/docs/Web/SVG) ist eine {{Glossary("XML", "XML")}}-basierte Sprache zur Beschreibung von Vektorbildern. Es ist im Grunde genommen eine Auszeichnungssprache wie HTML, außer dass Sie viele verschiedene Elemente zum Definieren der Formen haben, die Sie in Ihrem Bild erscheinen lassen möchten, und der Effekte, die Sie auf diese Formen anwenden möchten. SVG wird zum Markieren von Grafiken verwendet, nicht von Inhalten. SVG definiert Elemente zum Erstellen einfacher Formen wie {{svgelement("circle")}} und {{svgelement("rect")}} sowie Elemente zum Erstellen komplexerer Formen wie {{svgelement("path")}} und {{svgelement("polygon")}}. Zu den fortgeschrittenen SVG-Funktionen gehören {{svgelement("feColorMatrix")}} (Farben mit einer Transformationsmatrix umwandeln), {{svgelement("animate")}} (Teile Ihrer Vektorgrafik animieren) und {{svgelement("mask")}} (eine Maske über Ihr Bild legen).

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

Aus dem obigen Beispiel könnten Sie den Eindruck gewinnen, dass SVG leicht von Hand zu codieren ist. Ja, Sie können einfaches SVG in einem Texteditor manuell codieren, aber bei einem komplexen Bild wird dies schnell sehr schwierig. Zum Erstellen von SVG-Bildern verwenden die meisten Leute einen Vektorgrafik-Editor wie [Inkscape](https://inkscape.org/) oder [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Diese Programme ermöglichen es Ihnen, eine Vielzahl von Illustrationen mit verschiedenen Grafikwerkzeugen zu erstellen und Fotos zu approximieren (zum Beispiel mit der Funktion 'Trace Bitmap' von Inkscape).

SVG bietet einige zusätzliche Vorteile über diejenigen, die bislang beschrieben wurden:

- Text in Vektorbildern bleibt zugänglich (was auch Ihrem {{Glossary("SEO", "SEO")}} zugutekommt).
- SVGs eignen sich gut für Styling/Scripting, da jede Komponente des Bildes ein Element ist, das über CSS gestaltet oder über JavaScript geskriptet werden kann.

Warum sollte also jemand Rastergrafiken über SVG verwenden wollen? Nun, SVG hat einige Nachteile:

- SVG kann sich sehr schnell verkomplizieren, was bedeutet, dass die Dateigrößen wachsen können; komplexe SVGs können auch erhebliche Verarbeitungszeit im Browser erfordern.
- SVG kann schwerer zu erstellen sein als Rasterbilder, abhängig davon, welche Art von Bild Sie erstellen möchten.

Rastergrafiken sind nach Meinung vieler besser für komplexe Präzisionsbilder wie Fotos geeignet, aus den oben beschriebenen Gründen.

SVG-Grafiken, die aus Editoren wie Inkscape exportiert wurden, haben großes Potenzial für die Größenoptimierung. Bevor Sie sie im Web einsetzen, möchten Sie sie wahrscheinlich durch einen SVG-Optimierer wie [SVGO](https://www.npmjs.com/package/svgo) laufen lassen.

## SVG zu Ihren Seiten hinzufügen

In diesem Abschnitt gehen wir auf die verschiedenen Möglichkeiten ein, wie Sie SVG-Vektorgrafiken in Ihre Webseiten einfügen können.

### Der schnelle Weg: `img`-Element

Um ein SVG über ein {{htmlelement("img")}}-Element einzubetten, müssen Sie es lediglich im `src`-Attribut referenzieren, wie Sie es erwarten würden. Sie benötigen ein `height`- oder ein `width`-Attribut (oder beide, wenn Ihr SVG kein inhärentes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat). Wenn Sie dies noch nicht getan haben, lesen Sie bitte [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Vorteile

- Schnelle, vertraute Bildsyntax mit integriertem Textequivalent, das im `alt`-Attribut verfügbar ist.
- Sie können das Bild problemlos in einen Hyperlink verwandeln, indem Sie das `<img>` in ein {{htmlelement("a")}}-Element einfügen.
- Die SVG-Datei kann vom Browser zwischengespeichert werden, was zu schnelleren Ladezeiten für jede Seite führt, die das Bild in Zukunft lädt.

#### Nachteile

- Sie können das Bild nicht mit JavaScript manipulieren.
- Wenn Sie den SVG-Inhalt mit CSS steuern möchten, müssen Sie inline CSS-Stile in Ihren SVG-Code einfügen. (Externe Stylesheets, die von der SVG-Datei aufgerufen werden, haben keine Wirkung.)
- Sie können das Bild nicht mit CSS-Pseudoklassen (wie `:focus`) umgestalten.

### Fehlersuche und plattformübergreifender Support

Für Browser, die SVG nicht unterstützen (IE 8 und darunter, Android 2.3 und darunter), könnten Sie ein PNG oder JPG von Ihrem `src`-Attribut referenzieren und ein [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut verwenden (das nur von den neuesten Browsern erkannt wird), um das SVG zu referenzieren. In diesem Fall laden nur unterstützende Browser das SVG – ältere Browser laden stattdessen das PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Sie können SVGs auch als CSS-Hintergrundbilder verwenden, wie unten gezeigt. Im unten stehenden Code bleiben ältere Browser bei dem PNG, das sie verstehen, während neuere Browser das SVG laden:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Wie bei der oben beschriebenen `<img>`-Methode bedeutet das Einfügen von SVGs mit CSS-Hintergrundbildern, dass das SVG nicht mit JavaScript manipuliert werden kann und auch denselben CSS-Beschränkungen unterliegt.

Wenn Ihre SVGs überhaupt nicht angezeigt werden, liegt das möglicherweise daran, dass Ihr Server nicht richtig eingerichtet ist. Wenn das das Problem ist, wird Ihnen [dieser Artikel in die richtige Richtung zeigen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Wie man SVG-Code in Ihr HTML einfügt

Sie können auch die SVG-Datei in einem Texteditor öffnen, den SVG-Code kopieren und ihn in Ihr HTML-Dokument einfügen – dies wird manchmal auch als Einfügen Ihrer **SVG inline** oder **Inline-SVG** bezeichnet. Stellen Sie sicher, dass Ihr SVG-Codeabschnitt mit einem `<svg>`-Start-Tag beginnt und mit einem `</svg>`-End-Tag abschließt. Hier ist ein sehr einfaches Beispiel, was Sie möglicherweise in Ihr Dokument einfügen:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Vorteile

- Das Einfügen Ihrer SVG spart eine HTTP-Anfrage und kann daher Ihre Ladezeit etwas verkürzen.
- Sie können `class`es und `id`s zu SVG-Elementen zuweisen und sie mit CSS gestalten, entweder innerhalb des SVG oder dort, wo Sie die CSS-Stilregeln für Ihr HTML-Dokument platzieren. Tatsächlich können Sie jedes [SVG-Präsentationsattribut](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) als CSS-Eigenschaft verwenden.
- Das Einfügen von SVG ist die einzige Methode, die es Ihnen erlaubt, CSS-Interaktionen (wie `:focus`) und CSS-Animationen auf Ihrem SVG-Bild zu verwenden (auch in Ihrem regulären Stylesheet).
- Sie können den SVG-Code in einen Hyperlink umwandeln, indem Sie ihn in ein {{htmlelement("a")}}-Element einwickeln.

#### Nachteile

- Diese Methode eignet sich nur, wenn Sie das SVG nur an einer Stelle verwenden. Doppeln macht die Wartung ressourcenintensiv.
- Zusätzlicher SVG-Code erhöht die Größe Ihrer HTML-Datei.
- Der Browser kann eingebettete SVGs nicht so zwischenspeichern, wie er es mit regulären Bildressourcen tut, sodass Seiten, die das Bild enthalten, nicht schneller laden, nachdem die erste Seite mit dem Bild geladen wurde.
- Sie können ein Fallback in einem {{svgelement("foreignObject")}}-Element einschließen, aber Browser, die SVG unterstützen, laden dennoch alle Fallback-Bilder. Sie müssen abwägen, ob der zusätzliche Aufwand wirklich sinnvoll ist, nur um veraltete Browser zu unterstützen.

### Ein SVG mit einem `iframe` einbetten

Sie können SVG-Bilder in Ihrem Browser wie Webseiten öffnen. Das Einbetten eines SVG-Dokuments mit einem `<iframe>` erfolgt genauso, wie wir es in [Von `<object>` zu `<iframe>` — allgemeine Einbettungstechnologien](/de/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) erlernt haben.

Hier ist eine kurze Übersicht:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox></iframe>
```

Dies ist definitiv nicht die beste Methode:

#### Nachteile

- `<iframe>`-Elemente können Fallback-Inhalte zwischen ihren Öffnungs- und Schlusstags enthalten, aber diese werden nur in Browsern angezeigt, die `<iframe>`s nicht unterstützen, nicht wenn das Bild nicht geladen werden kann.
- Außerdem können Sie, solange das SVG und Ihre aktuelle Webseite nicht denselben {{Glossary("origin", "Ursprung")}} haben, kein JavaScript auf Ihrer Hauptwebseite verwenden, um das SVG zu manipulieren.

## Mit SVG spielen

In dieser Übung möchten wir, dass Sie mit etwas SVG herumspielen. Drücken Sie die **Play**-Taste, um das nächste Beispiel im MDN Playground zu öffnen und dort zu bearbeiten.

Gehen Sie zur [SVG-Elementreferenz](/de/docs/Web/SVG/Reference/Element), um zu sehen, welche anderen Elemente Sie verwenden können, die eine Menge eingebauter Funktionalität bieten.
Es gibt andere Formen, die Sie ausprobieren können, wie Ellipsen, oder Sie experimentieren mit [Muster](/de/docs/Web/SVG/Reference/Element/pattern) oder sogar [Filtereffekten](/de/docs/Web/SVG/Reference/Element/filter).
Dieser Abschnitt handelt von Ihren Recherchefähigkeiten, etwas Neuem auszuprobieren und Spaß zu haben.

Wenn Sie stecken bleiben und Ihr Code nicht funktioniert, können Sie ihn immer mit dem _Reset_-Button im Playground zurücksetzen.

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

Dieser Artikel hat Ihnen einen kurzen Überblick darüber gegeben, was Vektorgrafiken und SVG sind, warum sie nützlich zu wissen sind und wie Sie SVG in Ihre Webseiten einfügen können. Es war niemals als vollständiger Leitfaden zum Erlernen von SVG gedacht, sondern lediglich als Hinweis, damit Sie wissen, was SVG ist, falls Sie ihm auf Ihren Reisen im Web begegnen. Machen Sie sich also keine Sorgen, wenn Sie sich noch nicht als SVG-Experte fühlen. Wir haben einige Links unten eingefügt, die Ihnen weiterhelfen könnten, wenn Sie mehr darüber erfahren möchten, wie es funktioniert.

## Siehe auch

- [SVG-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) auf MDN
- [Sara Soueidans Tutorial zu responsiven SVG-Bildern](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [SVG-Eigenschaften und CSS](https://css-tricks.com/svg-properties-and-css/)
- [Wie man SVGs skaliert](https://css-tricks.com/scale-svg/) (es ist nicht so einfach wie Rastergrafiken!)
