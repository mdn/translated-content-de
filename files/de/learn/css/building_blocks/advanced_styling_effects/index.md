---
title: Erweiterte Styling-Effekte
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Dieser Artikel dient als Trickkiste und bietet eine Einführung in einige interessante erweiterte Styling-Funktionen wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Gefühl dafür zu bekommen, wie einige der fortgeschrittenen Styling-Effekte in modernen Browsern verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, einem Elementkasten einen oder mehrere Schlagschatten hinzuzufügen. Wie Textschatten werden Box-Schatten in Browsern recht gut unterstützt, einschließlich IE9+ und Edge. Nutzer älterer IE-Versionen müssen möglicherweise auf Schatten verzichten, testen Sie daher Ihre Designs, um sicherzustellen, dass Ihr Inhalt auch ohne Schatten lesbar ist.

Sie finden die Beispiele in diesem Abschnitt unter [box-shadow.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/box-shadow.html)).

### Ein einfacher Box-Schatten

Schauen wir uns ein einfaches Beispiel an, um loszulegen. Zuerst etwas HTML:

```html
<article class="simple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

Nun das CSS:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 25%)
  );
}

.simple {
  box-shadow: 5px 5px 5px rgb(0 0 0 / 70%);
}
```

Dies gibt uns das folgende Ergebnis:

{{ EmbedLiveSample('A_simple_box_shadow', '100%', 100) }}

Sie werden sehen, dass wir vier Elemente im Wert der `box-shadow` Eigenschaft haben:

1. Der erste Längenwert ist die **horizontale Verschiebung** — die Entfernung nach rechts, die der Schatten von der ursprünglichen Box versetzt wird (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist die **vertikale Verschiebung** — die Entfernung nach unten, die der Schatten von der ursprünglichen Box versetzt wird (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge der Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Basisfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die sinnvoll sind, um diese Werte zu definieren.

### Mehrfache Box-Schatten

Sie können auch mehrere Box-Schatten in einer einzigen `box-shadow` Deklaration angeben, indem Sie sie mit Kommas trennen:

```html hidden
<article class="multiple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

```css-nolint
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 25%)
  );
}

.multiple {
  box-shadow: 1px 1px 1px black,
              2px 2px 1px black,
              3px 3px 1px red,
              4px 4px 1px red,
              5px 5px 1px black,
              6px 6px 1px black;
}
```

Nun erhalten wir dieses Ergebnis:

{{ EmbedLiveSample('Multiple_box_shadows', '100%', 100) }}

Hier haben wir etwas Spaß gehabt, indem wir eine erhabene Box mit mehreren farbigen Schichten erstellt haben, aber Sie könnten sie auf jede Weise verwenden, die Sie möchten, zum Beispiel um ein realistischeres Aussehen mit Schatten zu schaffen, die auf mehreren Lichtquellen basieren.

### Andere Box-Schatten-Funktionen

Anders als {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset` Schlüsselwort zur Verfügung — wenn Sie dies an den Anfang einer Schattendeklaration setzen, wird es zu einem inneren Schatten statt einem äußeren Schatten. Schauen wir uns an, was wir damit meinen.

Zuerst verwenden wir für dieses Beispiel etwas anderes HTML:

```html
<button>Press me!</button>
```

```css
button {
  width: 150px;
  font-size: 1.1rem;
  line-height: 2;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #777, #ddd);
  box-shadow:
    1px 1px 1px black,
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}

button:focus,
button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow:
    inset 2px 2px 1px black,
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}
```

Dies gibt uns das folgende Ergebnis:

{{ EmbedLiveSample('Other_box_shadow_features', '100%', 70) }}

Hier haben wir ein paar Schaltflächenstile zusammen mit Fokus-/Hover-/Aktivzuständen eingerichtet. Die Schaltfläche hat standardmäßig einen einfachen schwarzen Box-Schatten und ein paar innere Schatten, einen hellen und einen dunklen, die an gegenüberliegenden Ecken der Schaltfläche platziert sind, um einen schönen Schattierungseffekt zu erzeugen.

Wenn die Schaltfläche gedrückt wird, verursacht der aktive Zustand, dass der erste Box-Schatten gegen einen sehr dunklen inneren Schatten ausgetauscht wird, was den Eindruck erweckt, dass die Schaltfläche gedrückt wird.

> [!NOTE]
> Es gibt ein weiteres Element, das im Wert der `box-shadow` Eigenschaft gesetzt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, der als **Ausbreitungsradius** bekannt ist. Wenn gesetzt, bewirkt dies, dass der Schatten größer als die ursprüngliche Box wird. Es wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Während Sie die Zusammensetzung eines Bildes nicht mit CSS ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr schöne Eigenschaft, die helfen kann, Interesse an Ihren Designs zu erzeugen, ist die {{cssxref("filter")}} Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — diese Funktion kann ein Wert übergeben werden, der angibt, wie stark das Bild verschwommen werden soll.

Der zweite ist `grayscale()`; indem wir einen Prozentsatz verwenden, bestimmen wir, wie viel Farbe entfernt werden soll.

{{EmbedGHLiveSample("css-examples/learn/images/filter.html", '100%', 900)}}

**Spielen Sie mit den Prozent- und Pixelparametern im Live-Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten auch einige andere Werte ausprobieren. Probieren Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel aus. Schauen Sie sich die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) an, um viele andere Optionen zu finden, die Sie ausprobieren könnten.**

Sie können Filter auf jedes Element anwenden, nicht nur auf Bilder. Einige der verfügbaren Filteroptionen tun sehr ähnliche Dinge wie andere CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` auf sehr ähnliche Weise und gibt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb der Box wirken, nicht nur auf die Box selbst als einen großen Block, daher ist es wichtig, den Unterschied zu kennen.

In diesem nächsten Beispiel wenden wir unseren Filter auf eine Box an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der `drop-shadow` Filter der genauen Form des Textes und der Randstriche. Der Box-Schatten folgt nur dem Quadrat der Box.

{{EmbedGHLiveSample("css-examples/learn/images/filter-text.html", '100%', 700)}}

## Mischmodi

CSS-Mischmodi ermöglichen es uns, Mischmodi auf Elemente anzuwenden, die einen Mischungseffekt spezifizieren, wenn sich zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixelfarbe und der des darunterliegenden Pixels. Mischmodi sind ebenfalls sehr vertraut für Nutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, die mehrere Hintergrundbilder und -farben mischt, die auf einem einzelnen Element gesetzt sind.
- {{cssxref("mix-blend-mode")}}, die das Element, auf dem es gesetzt ist, mit den überlappenden Elementen — sowohl Hintergrund als auch Inhalt — mischt.

Sie finden viele weitere Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielsseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)), und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und werden etwas weniger gut unterstützt als Filter. Es gibt bisher keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodusoptionen.

### background-blend-mode

Lassen Sie uns wieder einige Beispiele ansehen, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der Mischungsversion vergleichen können:

```html
<div></div>
<div class="multiply"></div>
```

Nun etwas CSS — wir fügen dem `<div>` ein Hintergrundbild und eine grüne Hintergrundfarbe hinzu:

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

Das Ergebnis, das wir erhalten, ist folgendes — Sie sehen das Original links und den Multiply-Mischmodus rechts:

{{ EmbedLiveSample('background-blend-mode', '100%', 300) }}

### mix-blend-mode

Schauen wir uns nun {{cssxref("mix-blend-mode")}} an. Hier zeigen wir die gleichen zwei `<div>`s, aber jedes sitzt nun auf einem einfachen `<div>` mit einem violetten Hintergrund, um zu zeigen, wie die Elemente zusammen gemischt werden:

```html
<article>
  No mix blend mode
  <div></div>
  <div></div>
</article>

<article>
  Multiply mix
  <div class="multiply-mix"></div>
  <div></div>
</article>
```

Hier ist das CSS, mit dem wir dies gestalten:

```css
article {
  width: 280px;
  height: 180px;
  margin: 10px;
  position: relative;
  display: inline-block;
}

div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
}

article div:first-child {
  position: absolute;
  top: 10px;
  left: 0;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

article div:last-child {
  background-color: purple;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
}

.multiply-mix {
  mix-blend-mode: multiply;
}
```

Dies gibt uns die folgenden Ergebnisse:

{{ EmbedLiveSample('mix-blend-mode', '100%', 300) }}

Hier können Sie sehen, dass der Multiply-Mischmodus nicht nur die beiden Hintergrundbilder zusammen gemischt hat, sondern auch die Farbe des darunterliegenden `<div>`.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der Layout-Eigenschaften oben nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc. Wir werden diese ausführlich in unserem [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) Modul behandeln.

## CSS-Formen

Während es wahr ist, dass alles in CSS ein rechteckiger Kasten ist und Bilder ein physischer rechteckiger Kasten sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge herumfließen würde, indem wir [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Shapes-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Sie ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das etwas Leerraum hat, den Sie möglicherweise Text umfließen lassen möchten.

Im Bild unten haben wir einen angenehm runden Ballon. Die tatsächliche Datei ist rechteckig, aber durch das Schweben des Bildes (Formen gelten nur für schwebende Elemente) und mit der Verwendung der {{cssxref("shape-outside")}} Eigenschaft mit einem Wert von `circle(50%)` können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

{{EmbedGHLiveSample("css-examples/learn/images/shapes.html", '100%', 1000)}}

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt von der Mitte der Bilddatei, als hätten wir einen Zirkel in der Mitte der Datei platziert und einen Kreis gezeichnet, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()` Funktion ist nur eine von einigen wenigen grundlegenden Formen, die definiert sind, allerdings gibt es eine Reihe von verschiedenen Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode für CSS-Formen sehen Sie sich die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN an.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen möchten, ist der `text` Wert für {{cssxref("background-clip")}}. In Verbindung mit der proprietären `-webkit-text-fill-color: transparent;` Funktion ermöglicht es dies, Hintergrundbilder auf die Form des Textelements zuzuschneiden, was zu einigen schönen Effekten führt. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da es beliebt ist und relativ häufig von Entwicklern verwendet wird. Wenn es in diesem Kontext verwendet wird, benötigen beide Eigenschaften ein `-webkit-` Anbietervorsatz, auch für Nicht-Webkit/Chrome-basierte Browser:

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich für die Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es so aussah, als ob die anderen Browser defekt wären, während sie in Wirklichkeit den Standards folgten. Sie wurden also gezwungen, einige solche Funktionen zu implementieren. Dies zeigt die Gefahr der Verwendung von nicht standardisierten und/oder vorsortierten CSS-Funktionen in Ihrer Arbeit — sie verursachen nicht nur Browser-Kompatibilitätsprobleme, sondern sind auch Änderungen unterworfen, sodass Ihr Code jederzeit kaputtgehen kann. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit nutzen möchten, stellen Sie sicher, dass Sie gründlich über mehrere Browser hinweg testen und überprüfen, dass die Website, wo diese Funktionen nicht funktionieren, trotzdem verwendbar ist.

> [!NOTE]
> Für ein vollständiges `-webkit-background-clip: text` Codebeispiel siehe [background-clip-text.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/background-clip-text.html)).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Spaß gemacht hat — mit glänzenden Spielzeugen zu spielen, macht im Allgemeinen Spaß, und es ist immer interessant zu sehen, welche Arten von fortgeschrittenen Styling-Tools in modernen Browsern verfügbar werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
