---
title: Erweiterte Stil-Effekte
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Dieser Artikel funktioniert als eine Sammlung von Tricks und bietet eine Einführung in einige interessante erweiterte Stil-Features wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>) und ein Grundverständnis davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vorstellung davon zu bekommen, wie einige der in modernen Browsern verfügbaren erweiterten Stil-Effekte verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, einem Elementkasten einen oder mehrere Schlagschatten hinzuzufügen. Wie Textschatten werden Box-Schatten in den meisten Browsern gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer Versionen von IE müssen möglicherweise ohne Schatten auskommen. Testen Sie daher Ihre Designs, um sicherzustellen, dass Ihre Inhalte auch ohne diese lesbar sind.

Sie finden die Beispiele in diesem Abschnitt unter [box-shadow.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/box-shadow.html) an).

### Ein einfacher Box-Schatten

Lassen Sie uns ein einfaches Beispiel betrachten, um den Einstieg zu erleichtern. Zuerst etwas HTML:

```html
<article class="simple">
  <p>
    <strong>Warnung</strong>: Der Thermostat des kosmischen Transzendierers hat ein kritisches Niveau erreicht.
  </p>
</article>
```

Jetzt das CSS:

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

Sie werden sehen, dass wir vier Elemente im `box-shadow` Eigenschaftswert haben:

1. Der erste Längenwert ist die **horizontale Verschiebung** — der Abstand, um den der Schatten vom ursprünglichen Kasten nach rechts versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist die **vertikale Verschiebung** — der Abstand, um den der Schatten vom ursprünglichen Kasten nach unten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge an Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Basisfarbe** des Schattens.

Sie können jede Länge und Farbeinheiten verwenden, die zur Definition dieser Werte sinnvoll sind.

### Mehrfachbox-Schatten

Sie können auch mehrere Box-Schatten in einer einzelnen `box-shadow` Deklaration angeben, indem Sie sie mit Kommas trennen:

```html hidden
<article class="multiple">
  <p>
    <strong>Warnung</strong>: Der Thermostat des kosmischen Transzendierers hat ein kritisches Niveau erreicht.
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

Wir haben hier etwas Interessantes gemacht, indem wir eine hochgestellte Box mit mehreren farbigen Schichten geschaffen haben, aber Sie könnten es auf jede gewünschte Weise verwenden, zum Beispiel um eine realistischere Optik mit Schatten basierend auf mehreren Lichtquellen zu erzeugen.

### Andere Box-Schattenfunktionen

Im Gegensatz zu {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset` Schlüsselwort verfügbar — wenn Sie dies am Anfang einer Schatten-Deklaration platzieren, wird es zu einem inneren Schatten anstelle eines äußeren Schattens. Lassen Sie uns dies genauer betrachten.

Zuerst verwenden wir für dieses Beispiel etwas anderes HTML:

```html
<button>Drücken Sie mich!</button>
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

Hier haben wir einige Button-Stile zusammen mit Zuständen für Fokus/hover/aktiv eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Schatten sowie ein paar innere Schatten, einen hellen und einen dunklen, die an gegenüberliegenden Ecken des Buttons platziert sind, um ihm einen schönen Schattierungseffekt zu verleihen.

Wenn der Button gedrückt wird, führt der aktive Zustand dazu, dass der erste Box-Schatten gegen einen sehr dunklen inneren Schatten ausgetauscht wird, was den Eindruck vermittelt, dass der Button eingedrückt wird.

> [!NOTE]
> Es gibt einen weiteren Wert, der im `box-shadow` Wert festgelegt werden kann — ein weiterer Längenwert kann optional unmittelbar vor dem Farbwert festgelegt werden, der als **Verbreitungsradius** bezeichnet wird. Wenn dieser festgelegt ist, wird der Schatten größer als der ursprüngliche Kasten. Es wird nicht sehr häufig verwendet, aber es lohnt sich zu erwähnen.

## Filter

Obwohl Sie das Erscheinungsbild eines Bildes mit CSS nicht ändern können, gibt es einige kreative Dinge, die Sie machen können. Eine sehr schöne Eigenschaft, die helfen kann, Interesse an Ihren Designs zu wecken, ist die {{cssxref("filter")}} Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus dem CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für Filter verwendet. Der `erste` ist `blur()` — diese Funktion kann einen Wert erhalten, um anzugeben, wie stark das Bild unscharf gemacht werden soll.

Der zweite ist `grayscale()`; indem wir einen Prozentsatz verwenden, legen wir fest, wie viel Farbe entfernt werden soll.

{{EmbedGHLiveSample("css-examples/learn/images/filter.html", '100%', 900)}}

**Spielen Sie mit den Prozentsatz- und Pixelparametern im Live-Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten auch die Werte gegen andere austauschen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im oben stehenden Live-Beispiel. Werfen Sie einen Blick auf die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) für viele andere Optionen, die Sie ausprobieren könnten.**

Sie können Filter auf jedes Element anwenden, nicht nur auf Bilder. Einige der verfügbaren Filteroptionen machen Dinge, die anderen CSS-Funktionen sehr ähnlich sind, zum Beispiel funktioniert `drop-shadow()` auf sehr ähnliche Weise und gibt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb des Kastens wirken und nicht nur auf den Kasten selbst als ein großes Stück, es lohnt sich also, den Unterschied zu kennen.

In diesem nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der Drop-Schatten-Filter der genauen Form des Textes und der Rahmensprünge. Der Box-Schatten folgt nur dem Quadrat des Kastens.

{{EmbedGHLiveSample("css-examples/learn/images/filter-text.html", '100%', 700)}}

## Mischmodi

Mit CSS-Mischmodi können wir Mischmodi zu Elementen hinzufügen, die einen Mischmodus angeben, wenn sich zwei Elemente überlagern — die finale für jedes Pixel gezeigte Farbe wird das Ergebnis einer Kombination aus der ursprünglichen Pixelfarbe und der des Pixels in der darunter liegenden Ebene. Mischmodi sind sehr vertraut für Benutzer von Grafik-Anwendungsprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und -farben, die auf einem einzelnen Element gesetzt sind, vermischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf dem es gesetzt ist, mit den Elementen mischt, die es überlappt — sowohl Hintergrund als auch Inhalt.

Viel mehr Beispiele als hier verfügbar finden Sie auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html) an) und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Mischmodi sind auch sehr neu und etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodus-Optionen.

### background-blend-mode

Lassen Sie uns erneut einige Beispiele ansehen, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir zwei einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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

Das Ergebnis, das wir erhalten, sieht so aus — Sie können das Original links und den multiply Mischmodus rechts sehen:

{{ EmbedLiveSample('background-blend-mode', '100%', 300) }}

### mix-blend-mode

Nun lassen Sie uns {{cssxref("mix-blend-mode")}} betrachten. Hier präsentieren wir dieselben zwei `<div>`s, aber jedes sitzt jetzt auf einem einfachen `<div>` mit einem violetten Hintergrund, um zu zeigen, wie die Elemente zusammen gemischt werden:

```html
<article>
  Kein Mix-Mischmodus
  <div></div>
  <div></div>
</article>

<article>
  Multiply-Mix
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

Das ergibt folgende Ergebnisse:

{{ EmbedLiveSample('mix-blend-mode', '100%', 300) }}

Hier sehen Sie, dass der Multiply-Mix-Mischmodus nicht nur die beiden Hintergrundbilder, sondern auch die Farbe des darunter liegenden `<div>` gemischt hat.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der oben genannten Layout-Eigenschaften, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}} usw. nicht verstehen. Wir werden diese detailliert in unserem [CSS Layout](/de/docs/Learn/CSS/CSS_layout) Modul behandeln.

## CSS-Formen

Obwohl es wahr ist, dass alles in CSS ein rechteckiger Kasten ist, und Bilder ein physischer rechteckiger Kasten sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge fließt, indem wir [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das einen weißen Raum enthält, um den Sie möglicherweise Text einfließen lassen möchten.

Im folgenden Bild haben wir einen erfreulich runden Ballon. Die tatsächliche Datei ist rechteckig, aber indem wir das Bild floaten (Formen gelten nur für gefloatete Elemente) und die {{cssxref("shape-outside")}} Eigenschaft mit einem Wert von `circle(50%)` verwenden, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

{{EmbedGHLiveSample("css-examples/learn/images/shapes.html", '100%', 1000)}}

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt aus der Mitte der Bilddatei, als hätten wir einen Zirkel in die Mitte der Datei gesetzt und einen Kreis gezeichnet, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()` Funktion ist nur eine von wenigen definierten Grundformen. Es gibt jedoch eine Reihe von verschiedenen Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen sehen Sie die [Guides zu CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen möchten, ist der `text` Wert für {{cssxref("background-clip")}}. Wenn es zusammen mit dem proprietären `-webkit-text-fill-color: transparent;` Feature verwendet wird, können Sie Hintergrundbilder auf die Form des Textelements zuschneiden und so einige nette Effekte erzielen. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da es populär und von Entwicklern ziemlich weit verbreitet verwendet wird. Wenn diese Eigenschaften in diesem Kontext verwendet werden, benötigen beide einen `-webkit-` Vendor-Präfix, auch für nicht auf Webkit/Chrome-basierte Browser:

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich wegen der Browserkompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es den Anschein hatte, als seien die anderen Browser defekt, obwohl sie tatsächlich den Standards folgten. So wurden sie gezwungen, einige dieser Funktionen zu implementieren. Dies verdeutlicht die Gefahr, nicht standardisierte und/oder präfixierte CSS-Features in Ihrer Arbeit zu verwenden. Sie verursachen nicht nur Kompatibilitätsprobleme mit Browsern, sondern sind auch Änderungen unterworfen, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Features in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie gründlich in verschiedenen Browsern testen und überprüfen Sie, dass die Seite auch dann noch benutzbar ist, wenn diese Features nicht funktionieren.

> [!NOTE]
> Für ein vollständiges `-webkit-background-clip: text` Code-Beispiel siehe [background-clip-text.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html) (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/background-clip-text.html)).

## Zusammenfassung

Wir hoffen, dieser Artikel war unterhaltsam — mit glänzenden Spielzeugen zu spielen, ist generell spaßig, und es ist immer interessant zu sehen, welche Art von erweiterten Styling-Tools in modernen Browsern verfügbar werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
