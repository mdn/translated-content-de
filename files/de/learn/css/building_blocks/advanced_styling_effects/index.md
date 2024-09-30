---
title: Erweiterte Styling-Effekte
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Dieser Artikel dient als Trickkiste und bietet eine Einführung in einige interessante, erweiterte Styling-Funktionen wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vorstellung davon bekommen, wie Sie einige der in modernen Browsern verfügbaren erweiterten Styling-Effekte verwenden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, einem Elementkasten einen oder mehrere Schatten zuzuweisen. Wie bei Textschatten werden Box-Schatten in den meisten Browsern gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, testen Sie daher Ihre Designs, um sicherzustellen, dass Ihre Inhalte auch ohne Schatten leserlich sind.

Sie finden die Beispiele in diesem Abschnitt unter [box-shadow.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/box-shadow.html)).

### Ein einfacher Box-Schatten

Lassen Sie uns mit einem einfachen Beispiel beginnen. Zunächst etwas HTML:

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

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample('A_simple_box_shadow', '100%', 100) }}

Sie werden sehen, dass wir vier Elemente im `box-shadow`-Eigenschaftswert haben:

1. Der erste Längenwert ist der **horizontale Versatz** — der Abstand nach rechts, den der Schatten vom Originalkasten versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — der Abstand nach unten, den der Schatten vom Originalkasten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — der Grad der Unschärfe, der auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können jede Länge und Farbeinheit verwenden, die sinnvoll wäre, um diese Werte zu definieren.

### Mehrere Box-Schatten

Sie können auch mehrere Box-Schatten in einer einzigen `box-shadow`-Deklaration angeben, indem Sie sie mit Kommas trennen:

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

Jetzt erhalten wir dieses Ergebnis:

{{ EmbedLiveSample('Multiple_box_shadows', '100%', 100) }}

Wir haben hier etwas Spaßeshalber gemacht, indem wir einen erhabenen Kasten mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es auf jede beliebige Weise verwenden, um beispielsweise ein realistischeres Aussehen mit Schatten basierend auf mehreren Lichtquellen zu erzeugen.

### Andere Box-Schatten-Merkmale

Im Gegensatz zu {{cssxref("text-shadow")}} verfügt {{cssxref("box-shadow")}} über das `inset`-Schlüsselwort — wenn Sie dies am Anfang einer Schatten-Deklaration platzieren, wird es zu einem inneren Schatten anstelle eines äußeren Schattens. Lassen Sie uns das einmal ansehen.

Zuerst verwenden wir etwas anderes HTML für dieses Beispiel:

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

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample('Other_box_shadow_features', '100%', 70) }}

Hier haben wir einige Button-Stilierungen sowie Fokus-, Hover- und aktive Zustände eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Schatten, plus ein paar eingesetzte Schatten, einen hellen und einen dunklen, die auf entgegengesetzten Ecken des Buttons platziert sind, um einen schönen Schattierungseffekt zu erzielen.

Wenn der Button gedrückt wird, ersetzt der aktive Zustand den ersten Box-Schatten durch einen sehr dunklen eingesetzten Schatten, was den Eindruck erweckt, dass der Button eingedrückt wird.

> [!NOTE]
> Es gibt noch ein weiteres Element, das im `box-shadow`-Wert gesetzt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, welcher der **Ausbreitungsradius** ist. Wenn gesetzt, wird der Schatten größer als der Originalkasten. Es wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Während Sie mit CSS die Zusammensetzung eines Bildes nicht ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr nette Eigenschaft, die Ihnen helfen kann, Interesse an Ihren Designs zu wecken, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — diese Funktion kann mit einem Wert übergeben werden, um anzugeben, wie stark das Bild verschwommen sein soll.

Der zweite ist `grayscale()`; durch die Verwendung eines Prozentsatzes legen wir fest, wie viel Farbe entfernt werden soll.

{{EmbedGHLiveSample("css-examples/learn/images/filter.html", '100%', 900)}}

**Spielen Sie mit den Prozent- und Pixelparametern im Live-Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten die Werte auch gegen andere austauschen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Schauen Sie sich die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) an, um viele weitere Optionen zu sehen, die Sie ausprobieren könnten.**

Sie können Filter auf jedes Element anwenden und nicht nur auf Bilder. Einige der verfügbaren Filteroptionen machen sehr ähnliche Dinge wie andere CSS-Funktionen, zum Beispiel arbeitet `drop-shadow()` auf eine sehr ähnliche Weise und erzeugt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die exakten Formen des Inhalts innerhalb des Kastens wirken, nicht nur auf den Kasten selbst als ein großes Stück, sodass es sich lohnt, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der Drop-Shadow-Filter exakt der Form des Textes und der Randstriche. Der Box-Schatten folgt lediglich dem Quadrat des Kastens.

{{EmbedGHLiveSample("css-examples/learn/images/filter-text.html", '100%', 700)}}

## Mischmodi

CSS-Mischmodi ermöglichen es uns, Mischmodi zu Elementen hinzuzufügen, die einen Mischeffekt angeben, wenn sich zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixelfarbe und der des Pixels in der darunterliegenden Ebene. Mischmodi sind Nutzern von Grafik-Anwendungen wie Photoshop sehr vertraut.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, welcher mehrere Hintergrundbilder und Farben auf einem einzigen Element mischt.
- {{cssxref("mix-blend-mode")}}, welcher das Element, auf dem es eingestellt ist, mit überlappenden Elementen mischt — sowohl Hintergrund als auch Inhalt.

Sie finden viel mehr Beispiele als hier verfügbar auf unserer Beispielseite [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)), und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodus-Optionen.

### background-blend-mode

Lassen Sie uns noch einmal einige Beispiele betrachten, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, sodass Sie das Original mit der gemischten Version vergleichen können:

```html
<div></div>
<div class="multiply"></div>
```

Jetzt etwas CSS — wir fügen dem `<div>` ein Hintergrundbild und eine grüne Hintergrundfarbe hinzu:

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

Das Ergebnis, das wir erhalten, ist dieses — Sie sehen das Original links und den Multiply-Mischmodus rechts:

{{ EmbedLiveSample('background-blend-mode', '100%', 300) }}

### mix-blend-mode

Schauen wir uns jetzt {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir die gleichen zwei `<div>`s, aber jedes von ihnen sitzt jetzt auf einem einfachen `<div>` mit einem lila Hintergrund, um zu zeigen, wie die Elemente zusammen gemischt werden:

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

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample('mix-blend-mode', '100%', 300) }}

Hier können Sie sehen, dass der Multiply-Mixblend nicht nur die beiden Hintergrundbilder, sondern auch die Farbe des darunterliegenden `<div>`s gemischt hat.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der Layout-Eigenschaften oben, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc., nicht verstehen. Wir werden diese ausführlich in unserem [CSS Layout](/de/docs/Learn/CSS/CSS_layout)-Modul behandeln.

## CSS-Formen

Es stimmt zwar, dass in CSS alles rechteckige Kästen sind und Bilder physisch rechteckige Kästen sind, aber wir können es so aussehen lassen, als ob unsere Inhalte um nicht-rechteckige Dinge herumfließen, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Es ist besonders nützlich, wenn man mit einem Bild arbeitet, das einen leeren Raum hat, um den Sie Text herumfließen lassen möchten.

Im Bild unten haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber indem wir das Bild schweben lassen (Formen gelten nur für schwebende Elemente) und die {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)` verwenden, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

{{EmbedGHLiveSample("css-examples/learn/images/shapes.html", '100%', 1000)}}

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt von der Mitte der Bilddatei, als ob wir einen Zirkel in die Mitte der Datei gesteckt und einen Kreis gezeichnet hätten, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie das DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()` Funktion ist nur eine von wenigen einfachen Formen, die definiert sind, jedoch gibt es eine Anzahl unterschiedlicher Möglichkeiten, Formen zu erstellen. Für mehr Informationen und Beispielcode für CSS-Formen siehe die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen möchten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn es zusammen mit dem proprietären `-webkit-text-fill-color: transparent;` Feature verwendet wird, ermöglicht es Ihnen, Hintergrundbilder auf die Form des Textelements zu clippen, wodurch einige hübsche Effekte entstehen. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da es beliebt ist und von Entwicklern häufig verwendet wird. Wenn es in diesem Kontext verwendet wird, würden beide Eigenschaften ein `-webkit-` Vendor-Präfix erfordern, selbst für Nicht-Webkit-/Chrome-basierte Browser:

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich für die Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es so aussah, als wären die anderen Browser defekt, obwohl sie in Wirklichkeit die Standards befolgten. Daher waren sie gezwungen, einige solcher Features zu implementieren. Dies zeigt die Gefahr auf, nicht-standardisierte und/oder mit Präfixen versehene CSS-Features in Ihrer Arbeit zu verwenden — nicht nur verursachen sie Probleme mit der Browser-Kompatibilität, sondern sie können sich auch ändern, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Features in Ihrer Produktivarbeit verwenden möchten, stellen Sie sicher, dass Sie gründlich über die Browser hinweg testen und prüfen, ob, wo diese Features nicht funktionieren, die Seite dennoch benutzbar ist.

> [!NOTE]
> Für ein vollständiges `-webkit-background-clip: text` Code-Beispiel siehe [background-clip-text.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/background-clip-text.html)).

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen Spaß gemacht – mit glänzenden Spielsachen zu spielen ist allgemein lustig, und es ist immer interessant zu sehen, welche Arten von erweiterten Styling-Werkzeugen in modernen Browsern verfügbar werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
