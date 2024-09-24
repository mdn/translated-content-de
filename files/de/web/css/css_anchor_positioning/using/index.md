---
title: Verwenden von CSS-Anker-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Das **CSS-Anker-Positionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in Größe und Position relativ zu den Ankerelementen, an die sie gebunden sind, eingestellt werden.

CSS-Anker-Positionierung bietet auch Mechanismen, die nur in CSS verfügbar sind, um mehrere alternative Positionen für ein ankerpositioniertes Element anzugeben. Zum Beispiel, wenn ein Tooltip an ein Formularfeld gebunden ist, aber der Tooltip in seiner Standardpositionierung außerhalb des Bildschirms angezeigt werden würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm platziert wird, oder alternativ ganz auszublenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie man die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten besprochene Konzept eingefügt. Für Informationen zur Angabe alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen siehe [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr verbreitet, ein Element an ein anderes zu binden. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um mehr Informationen darüber zu geben.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass ein Teil des Inhalts — oft wiederverwendbar und dynamisch erzeugt — relativ zu einem Ankerelement positioniert wird. Solche Anwendungsfälle wären ziemlich einfach zu erstellen, wenn das zu bindende Element (auch bekannt als **Ankerelement**) immer an derselben Stelle in der Benutzeroberfläche wäre und das gebundene Element (auch bekannt als **ankerpositioniertes Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings ist dies selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, während das Ankerelement sich bewegt oder anderweitig seine Konfiguration ändert (z. B. durch Scrollen, Ändern der Viewportgröße, Drag & Drop usw.). Zum Beispiel, wenn ein Element wie ein Formularfeld in die Nähe des Viewportrands gelangt, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularelement binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Dies haben Sie möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit der rechten Maustaste (oder <kbd>Strg</kbd> + Klick) öffnen.

Historisch gesehen erforderte die Assoziation eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was die Komplexität und Leistungsprobleme erhöhte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performanter und deklarativer mit CSS (und HTML) anstelle von JavaScript.

## Assoziieren von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst angeben, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) mit diesem Anker assoziiert werden soll(en). Dies kann über CSS oder über das HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut erfolgen.

### Nur-CSS-Methode

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie einen Ankernamen darauf über die {{cssxref("anchor-name")}}-Eigenschaft festlegen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Verankerungseffekt besser demonstriert.

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
  width: fit-content;
}
```

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fix [positioniert](/de/docs/Learn/CSS/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verbinden:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
}
```

Wir wenden das obige CSS auf das folgende HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Dies ist eine Informationsbox.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns dies nur glauben. Sie sind noch nicht miteinander verbunden — wenn Sie den Anker positionieren und an eine andere Stelle auf der Seite verschieben würden, würde er sich allein bewegen und die Infobox an derselben Stelle belassen. Sie sehen die tatsächliche Verbindung in Aktion, wenn wir uns [Positionierung der Elemente basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) anschauen.

### HTML-Methode

Um ein positioniertes Element mit einem Anker in HTML zu assoziieren, können Sie das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut verwenden. Sie müssen dem Ankerelement eine [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Das `anchor`-Attribut wird dann auf dem ankerpositionierten Element gesetzt, mit einem Wert, der der `id` des Ankerelements entspricht, mit dem Sie es assoziieren möchten.

Wir haben dies im folgenden HTML getan:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>Dies ist eine Informationsbox.</p>
</div>
```

Elemente müssen absolut oder fix positioniert sein, um mit Ankern assoziiert zu werden, daher geben wir der Infobox einen `position`-Wert von `fixed`:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
}
```

Dies ergibt dasselbe Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein positioniertes Element mit einem Ankerelement assoziiert, indem wir das `anchor`-Attribut am positionierten Element anstelle der `anchor-name`-Eigenschaft des Ankerelements und der `position-anchor`-Eigenschaft des positionierten Elements verwendet haben.

{{ EmbedLiveSample("HTML-Methode", "100%", "120") }}

> [!NOTE]
> Das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut hat derzeit weniger Unterstützung als das CSS-Äquivalent. Siehe die [`anchor` Attribut Kompatibilitätstabelle](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility) für weitere Informationen.

Wir haben die beiden Elemente assoziiert, aber sie sind noch nicht verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Assoziation eines positionierten Elements mit einem Anker an sich nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies geschieht entweder durch Setzen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values)-Wertes auf eine [Inset-Eigenschaft](/de/docs/Glossary/Inset_properties), durch [Festlegen eines `position-area`](#setting_a_position-area) oder durch Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktionieren. Wenn es versteckt ist (zum Beispiel durch [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir besprechen, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, in [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fix positionierte Elemente werden explizit durch das Setzen von {{cssxref("Länge")}} oder {{cssxref("Prozent")}}-Werten auf {{glossar("Inset-Eigenschaften")}} positioniert. Mit `position: absolute` ist dieser Inset-Positionswert eine absolute Entfernung relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert eine absolute Entfernung relativ zum Viewport.

CSS-Anker-Positionierung ändert dieses Paradigma und ermöglicht es, dass anker_positionierte Elemente relativ zu den Rändern ihrer assoziierten Anker positioniert werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absolute Entfernung relativ zum Ankerelement durch Definition des Ankerelements, der Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Entfernung von dieser Seite.

Die Funktionselemente sehen so aus:

```plain
anchor(<anchor-element> <anchor-side>, <fallback>)
```

- `<anchor-element>`

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert ist oder über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut mit dem Element verknüpft ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-element>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Nur die Eigenschaft `position-anchor` und die `anchor`-Attribute erstellen die Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-element>` Werte](/de/docs/Web/CSS/anchor#element_positioned_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, wird das positionierte Element nur mit einem einzelnen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder mehreren Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<Percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht mit der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist, [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("Längen-Prozentsatz")}}, der die Entfernung als Fallback-Wert festlegt, wenn das Element nicht absolut oder fix positioniert ist, wenn der `<anchor-side>`-Wert, der verwendet wird, nicht mit der Inset-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der auf der Position des Ankers basiert. Wenn Sie eine Länge oder einen Prozentsatz direkt auf einer Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das Sie sehen, wenn der `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der er gesetzt ist, nicht kompatibel ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem Boden des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des ursprünglichen umschließenden Blocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden oft entweder einen {{cssxref("margin")}} hinzufügen, um Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand zu addieren.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann `margin-left` hinzu, um Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Dies bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements, wobei der Abstand innerhalb der `calc()`-Funktion hinzugefügt wird, sodass wir kein zusätzliches Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel an, wie `anchor()` in Aktion funktioniert. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, jedoch mit Fülltext darunter und darüber, um den Inhalt außerhalb seines Containers zu verursachen und zu scrollen. Wir geben dem Ankerelement auch denselben `anchor-name` wie in den vorherigen Beispielen:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Dies ist eine Informationsbox.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

body {
  width: 50%;
  margin: 0 auto;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}
```

Die Infobox wird über den Ankernamen mit dem Anker verbunden und erhält eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften einschließen, die äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} in horizontalen links-nach-rechts Schreibmodi sind, haben wir sie an den Anker gebunden. Wir fügen der Infobox ein `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --myAnchor;
  position: fixed;
  inset-block-start: anchor(end);
  inset-inline-start: anchor(self-end);
  margin: 5px 0 0 5px;
}
```

Lassen Sie uns die Inset-Positionsdeklarationen genauer betrachten:

- `inset-block-start: anchor(end)`: Dies setzt die Block-Startkante des positionierten Elements auf die Block-Endkante des Ankerelements, berechnet unter Verwendung der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankerelements, berechnet unter Verwendung der `anchor(self-end)`-Funktion.

Dies gibt uns das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unter und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement positioniert — es ist fest mit dem Ankerelement, nicht dem Viewport verbunden.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft arbeitet auf dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area Raster, wie unten beschrieben](position-area.png)

Die Kachelleisten sind in Reihen und Spalten unterteilt:

- Die drei Reihen sind durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten sind durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen, wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umschließenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den umschließenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten auf Basis der oben beschriebenen Zeilen- und Spaltenwerte, mit verfügbaren Spannungsoptionen, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Zum Beispiel:

- `top left ` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Kachelecke.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der mittleren unteren Kachelecke.

Sie können einen Zeilen- oder Spaltenwert plus einem `span-*`-Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, und gibt an, dass es sich zunächst in der Mitte befindet, und der andere gibt die Breite dieser Spalte an, die er umfassen soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der obersten Zeile platziert und über die Mitte- und Linkszellen dieser Zeile hinweg gespannt wird.
- `y-endspan-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert und über die Mitte- und x-Endzellen dieser Spalte gespannt wird.
- `block-end span-all` bewirkt, dass das positionierte Element in der Blockendzeile platziert wird und sich über die Zellen Inline-Start, Mitte und Inline-Ende dieser Zeile erstreckt.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert festgesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left`, oder `right`) oder ein Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` ist. Zum Beispiel gibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert auf den gleichen Wert gesetzt ist; Zum Beispiel gibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und Basis-CSS-Stile wie das vorherige Beispiel, außer dass ein {{htmlelement("select")}}-Element hinzugefügt wurde, um das Ändern des `position-area`-Werts des positionierten Elements zu ermöglichen.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Dies ist eine Informationsbox.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <label for="position-area-select">Choose a position-area:</label>
  <select id="position-area-select" name="position-area-select">
    <option>top</option>
    <option>bottom</option>
    <option>left</option>
    <option>right</option>
    <option>start</option>
    <option>end</option>
    <option>top left</option>
    <option>top right</option>
    <option>bottom left</option>
    <option>bottom right</option>
    <option>top span-left</option>
    <option>bottom span-right</option>
    <option>start span-start</option>
    <option>end span-end</option>
    <option>center</option>
    <option>center span-all</option>
    <option>bottom center</option>
    <option>end span-all</option>
  </select>
</form>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
}

select {
  display: block;
  margin-top: 5px;
}

form {
  position: fixed;
  top: 0;
  right: 2px;
}
```

Die Infobox wird mit fester Positionierung versehen und mithilfe von CSS mit dem Anker verbunden. Wenn sie geladen wird, wird sie so eingestellt, dass sie an den Anker mit `position-area: top;` gebunden ist, wodurch sie an der Spitze des `position-area`-Rasters positioniert wird. Dies wird überschrieben, sobald Sie verschiedene Werte aus dem `<select>` Menü auswählen.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top;
}
```

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte, die aus dem `<select>`-Menü ausgewählt werden, auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt, den sie auf die Position der Infobox haben, zu sehen:

{{ EmbedLiveSample("Festlegen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element nicht explizit in einer Richtung dimensioniert. Wir haben die Größenplanung absichtlich weggelassen, damit Sie das Verhalten beobachten können, das dies verursacht.

Wenn ein positioniertes Element in `position-area`-Rasterzellen ohne explizite Größenangaben platziert wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich so, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird gemäß der Größe seines [umschließenden Blocks](/de/docs/Web/CSS/Containing_block), der Breite seines Contents, dimensioniert. Diese Größe wurde festgelegt, indem `position: fixed` gesetzt wurde. Selbstdimensionierte absolut und fix positionierte Elemente werden automatisch dimensioniert und erstrecken sich so breit, wie nötig, um den Textinhalt zu passen, während sie durch den Rand des Viewports beschränkt werden. In diesem Fall, wenn auf der linken Seite des Rasters mit einem beliebigen `left` oder `inline-start`-Wert platziert, wickelt sich der Text. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wird es nicht anwachsen, um die Größe des Ankers zu passen.

Wenn das positionierte Element vertikal zentriert ist, wie z.B. mit `position-area: bottom center`, wird es an der angegebenen Rasterzelle ausgerichtet und die Breite entspricht der des Ankerelements. In diesem Fall ist seine Mindesthöhe die Größe des umschließenden Blocks des Ankerelements. Es überläuft nicht, da das `min-width` auf {{cssxref("min-content")}} eingestellt ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften kombiniert mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Anker-Positionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente leicht in inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme auszurichten, zum Beispiel entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS-Anker-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit der Mitte seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox wird mit einer festen Positionierung versehen und an die Unterkante des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf die Mitte des Ankers zentriert ist:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Dies ist eine Informationsbox.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
}
```

Dies zentriert das ankerpositionierte Element unten auf seinem Anker:

{{ EmbedLiveSample("Zentrieren auf den Anker mithilfe von `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mithilfe der [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenwertes einstellen.

Größeneigenschaften, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

- {{cssxref("width")}}
- {{cssxref("height")}}
- {{cssxref("min-width")}}
- {{cssxref("min-height")}}
- {{cssxref("max-width")}}
- {{cssxref("max-height")}}
- {{cssxref("block-size")}}
- {{cssxref("inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}

`anchor-size()`-Funktionen lösen sich in {{cssxref("length")}}-Werte auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-element> <anchor-size>, <length-percentage>)
```

- `<anchor-element>`
  - : Der `<dashed-ident>`-Name, der als Wert des [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements festgelegt ist, relativ zu dem Sie das Element dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der der Anker ist, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, die für die Größe des positionierten Elements verwendet werden soll. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fix positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die angewandte Größe des positionierten Elements zu modifizieren.

Zum Beispiel gibt diese Regel der Breite des positionierten Elements die gleiche Breite wie dem Standard-Ankerelement:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel macht die Inline-Größe des positionierten Elements gleich der vierfachen Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Lassen Sie uns ein Beispiel betrachten. Das HTML und die Basis-CSS sind die gleichen wie in den vorherigen Beispielen, mit der Ausnahme, dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox wird mit fester Positionierung versehen und in gleicher Weise wie zuvor mit dem Anker verbunden. Diesmal spannen wir sie jedoch nach rechts vom Anker mithilfe einer `position-area` und geben ihr eine Breite, die fünfmal so breit ist wie die des Ankers:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>Dies ist eine Informationsbox.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: right;
  margin-left: 5px;
  width: calc(anchor-size(width) * 5);
}
```

Zusätzlich vergrößern wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihr eine {{cssxref("transition")}}, sodass sie animiert, wenn sich der Zustand ändert.

```css
.anchor {
  text-align: center;
  width: 30px;
  transition: 1s width;
}

.anchor:hover,
.anchor:focus {
  width: 50px;
}
```

Fahren Sie mit der Maus über das Ankerelement oder tabulieren Sie darauf — das positionierte Element wächst, während der Anker wächst und zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Dimensionierung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Siehe auch

- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [Logische CSS-Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Dimensionierung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
