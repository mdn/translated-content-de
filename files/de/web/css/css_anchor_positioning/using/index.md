---
title: Verwenden der CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: da659b5d4f75b66804d97c80ec7c89b8792d7389
---

{{CSSRef}}

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Die CSS-Ankerpositionierung bietet auch rein CSS-basierte Mechanismen zur Angabe mehrerer alternativer Positionen für ein ankerpositioniertes Element. Beispielsweise kann der Browser, wenn ein Tooltip an ein Formularfeld verankert ist, aber aufgrund der Standardeinstellungen der Positionierung vom Bildschirm verschwinden würde, versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, damit er auf dem Bildschirm platziert wird, oder ihn alternativ ganz ausblenden, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziierungs-, Positionierungs- und Größeneigenschaften des Moduls auf einfache Weise verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten besprochene Konzept eingefügt. Informationen zur Angabe alternativer Positionen und zum Ausblenden ankerpositionierter Elemente finden Sie unter [Umgang mit Überlauf: Optionen für Rückgriff und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr gebräuchlich, ein Element an ein anderes binden zu wollen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um mehr Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle wären recht einfach zu erstellen, wenn sich das Element, an das angebunden werden soll (auch bekannt als **Ankerelement**), immer an derselben Stelle in der Benutzeroberfläche befände und das angebundene Element (auch bekannt als **ankerpositioniertes Element**, oder kurz **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z. B. durch Scrollen, Ändern der Ansicht, Drag & Drop usw.). Wenn sich beispielsweise ein Element wie ein Formularfeld dem Rand des Ansichtsbereichs nähert, kann sein Tooltip vom Bildschirm verschwinden. Im Allgemeinen möchten Sie den Tooltip an sein Formularsteuerelement binden und sicherstellen, dass der Tooltip auf dem Bildschirm sichtbar bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Möglicherweise haben Sie dies als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit der rechten Maustaste (oder <kbd>Strg</kbd> + Klick) öffnen.

Historisch gesehen erforderte die Zuordnung eines Elements zu einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was zu Komplexität und Leistungsproblemen führte. Außerdem war es nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle leistungsfähig und deklarativ mit CSS (und HTML) statt JavaScript.

## Assoziierung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welches(n) positionierte Element(e) mit diesem Anker assoziiert werden soll(en). Dies kann über CSS oder über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) erfolgen.

### Nur-CSS-Methode

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie ihm einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Verankerungseffekt besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss mit der Eigenschaft {{cssxref("position")}} absolut oder fixiert [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden. Dann wird die {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verknüpfen:

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
  <p>This is an information box.</p>
</div>
```

Das wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun assoziiert, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht aneinander angebunden — wenn Sie den Anker positionieren und irgendwo anders auf der Seite bewegen würden, würde er sich alleine bewegen und die Infobox an derselben Stelle belassen. Sie werden das tatsächliche Anbinden im Einsatz sehen, wenn wir uns die [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### HTML-Methode

Um ein positioniertes Element mit einem Anker in HTML zu assoziieren, können Sie das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut verwenden. Sie müssen dem Ankerelement ein [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Das `anchor`-Attribut wird dann auf dem ankerpositionierten Element gesetzt, mit einem Wert, der der `id` des Ankerelements entspricht, mit dem Sie es assoziieren möchten.

Dies haben wir im untenstehenden HTML getan:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

Elemente müssen absolut oder fixiert positioniert werden, um mit Anker verbunden zu werden, daher geben wir der Infobox einen `position`-Wert von `fixed`:

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

Das gibt uns dasselbe Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein positioniertes Element mit einem Ankerelement verbunden, indem wir das `anchor`-Attribut auf dem positionierten Element anstelle der `anchor-name`-Eigenschaft des Ankerelements und der `position-anchor`-Eigenschaft des positionierten Elements verwendet haben.

{{ EmbedLiveSample("HTML method", "100%", "120") }}

> [!NOTE]
> Das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut hat derzeit weniger Unterstützung als das CSS-Äquivalent. Weitere Informationen finden Sie in der Kompatibilitätstabelle des [`anchor`-Attributs](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility).

Wir haben die beiden Elemente assoziiert, aber sie sind noch nicht angebunden. Um sie miteinander zu verbinden, muss das positionierte Element über CSS relativ zu seinem Anker positioniert werden.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, bringt die Assoziierung eines positionierten Elements mit einem Anker alleine nicht viel. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen eines [CSS-`anchor()`-Funktionswerts](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "inset-Eigenschaft")}}, [spezifizieren eines `position-area`](#setting_a_position-area) oder dem Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziierung und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel durch [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, unter [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Inset-Eigenschaften mit `anchor()` Funktionswerten

Konventionelle absolut und fest positionierte Elemente werden ausdrücklich durch das Festlegen von {{cssxref("length")}} oder {{cssxref("percentage")}} Werten auf {{Glossary("inset_properties", "inset-Eigenschaften")}} positioniert. Mit `position: absolute` ist dieser inset-Positionswert eine absolute Entfernung relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der inset-Positionswert eine absolute Entfernung relativ zum Ansichtsbereich.

CSS-Ankerpositionierung ändert dieses Paradigma, wodurch ankerpositionierte Elemente relativ zu den Rändern ihrer zugehörigen Anker positioniert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die einen gültigen Wert für jede der inset-Eigenschaften darstellt. Bei Verwendung setzt die Funktion den inset-Positionswert als absolute Entfernung relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Funktionskomponenten sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert des Ankerelements, zu dem das Seitenelement positioniert werden soll. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder mit dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut assoziiert ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Nur die `position-anchor`-Eigenschaft und `anchor` Attribute erstellen die Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte schließen das `center` des Ankers ein, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Anfang (`0%`) und dem Ende (`100%`) der Achse der inset-Eigenschaft, auf der `anchor()` festgelegt ist. Wird ein Wert verwendet, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der inset-Eigenschaft ist, auf der die `anchor()`-Funktion eingestellt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, das die Entfernung definiert, die als Fallback-Wert verwendet werden soll, falls das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der inset-Eigenschaft ist, auf der die `anchor()`-Funktion eingestellt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie direkt eine Länge oder einen Prozentsatz auf eine inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist dasselbe Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert nicht kompatibel mit der inset-Eigenschaft ist, auf der es eingestellt ist und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des initialen umschließenden Blocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Es wird auch oft entweder ein {{cssxref("margin")}} hinzugefügt, um Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwendet, um diesen Abstand hinzuzufügen.

Beispielsweise positioniert diese Regel den rechten Rand des positionierten Elements bündig mit dem linken Rand des Ankerelements und fügt dann etwas `margin-left` hinzu, um etwas Abstand zwischen den Rändern zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert den logischen Blockendrand des positionierten Elements `10px` vom logischen Blockstartrand des Ankerelements entfernt und fügt den Abstand mit der `calc()`-Funktion hinzu, sodass keine zusätzlichen Margen erforderlich sind:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel an, in dem `anchor()` im Einsatz ist. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, jedoch mit etwas Fülltext darüber und darunter, um den Inhalt zu zwingen, seinen Container zu überlaufen und zu scrollen. Wir geben auch dem Ankerelement denselben `anchor-name`-Wert wie in den vorherigen Beispielen:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
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

Die Infobox ist über den Ankernamen mit dem Anker assoziiert und wird mit einer festen Positionierung versehen. Durch das Hinzufügen der Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} (die in horizontalen von links nach rechts verlaufenden Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie an den Anker angebunden. Wir fügen der Infobox eine `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Deklarationen der Inset-Eigenschaften für die Positionsbestimmung genauer an:

- `inset-block-start: anchor(end)`: Dies setzt den Blockstartrand des positionierten Elements an den Blockendränder des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den linienstartenden Rand des positionierten Elements an den linienendenden Rand des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Das gibt uns das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zu dem Ankerelement in seiner Position — es ist am Ankerelement fixiert, nicht am Ansichtsbereich.

### Festlegen einer `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zur Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft arbeitet mit dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area Raster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen sind durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatentsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatentsprechungen wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [umschließenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während die Entfernung zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den umschließenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit den verfügbaren Spannungsoptionen zum Definieren des Bereichs des Rasters, in dem das Element positioniert werden soll.

Beispielsweise:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können einen Reihen- oder Spaltenwert sowie einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, indem es zunächst in der Mitte platziert wird, und der andere Wert gibt die Menge dieser Spalte an, die zu spannen ist. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert wird und sich über die Kacheln der Mitte und der linken Kacheln dieser Reihe erstreckt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und sich über die Kacheln der Mitte und x-end dieser Spalte erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Blockendreihe platziert wird und sich über die Kacheln inline-start, center und inline-end dieser Reihe erstreckt.

Wenn Sie nur einen Wert angeben, sind die Effekte wie folgt, je nachdem, welcher Wert eingestellt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder ein Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` ist. Zum Beispiel hat `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert auf denselben Wert gesetzt wäre; beispielsweise hat `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und die Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um den `position-area`-Wert des positionierten Elements ändern zu können.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
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

Die Infobox wird mit einer festen Positionierung versehen und in CSS mit dem Anker assoziiert. Beim Laden wird sie so eingestellt, dass sie mit `position-area: top;` am Anker angebunden ist, was bewirkt, dass sie oben im position-area-Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Setting an `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Dimensionen des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben bewusst auf die Größenangabe verzichtet, um das Verhalten zu beobachten, das dies verursacht.

Wenn ein positioniertes Element in `position-area`-Rasterzellen ohne explizite Größenangabe platziert wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich, als wäre die {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird entsprechend seiner [umschließenden Block]-Größe skaliert, was der Breite seines Inhalts entspricht. Diese Größe wurde durch die Festlegung von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich bei Bedarf so weit aus, dass der Textinhalt passt, während sie durch den Rand des Ansichtsbereichs eingeschränkt werden. In diesem Fall wird der Text umbrochen, wenn er auf der linken Seite des Rasters mit einem `left`- oder `inline-start`-wert platziert wird. Wenn die `max-content`-Größe des ankergesetzten Elements schmaler oder kürzer als der Anker ist, wachsen sie nicht, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, beispielsweise mit `position-area: bottom center`, richtet es sich an der angegebenen Rasterzelle aus, und die Breite entspricht der des Ankerelements. In diesem Fall ist seine Mindesthöhe die Größe des umschließenden Blocks des Ankerelements. Es wird nicht überlaufen, da `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` zum Verankern verwendet werden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern das einfache Ausrichten von Elementen in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, zum Beispiel entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit der Mitte seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und den gleichen Basis-CSS-Codes wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird am unteren Rand des Ankers angebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf der Mitte des Ankers zentriert ist:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
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

Dies zentriert das ankerpositionierte Element am unteren Rand seines Ankers:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zu seiner Ankergröße festlegen, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenwertes verwenden.

Größeneigenschaften, die einen `anchor-size()` Wert annehmen können, sind:

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

`anchor-size()`-Funktionen lösen sich zu {{cssxref("length")}}-Werten auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie das Element relativ dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements, welcher der Anker ist, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann mithilfe physischer (`width` oder `height`) oder logischer (`inline`, `block`, `self-inline` oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert zu verwenden ist, falls das Element nicht absolut oder fest positioniert ist, oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu ändern.

Beispielsweise bestimmt diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel bestimmt die Inlinengröße des positionierten Elements auf das Vierfache der Inlinengröße des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Werfen wir einen Blick auf ein Beispiel. Das HTML und das Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement mit einem [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut versehen wird, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird wie zuvor mit dem Anker assoziiert. Diesmal binden wir sie rechts am Anker mit einer `position-area` an und geben ihr eine Breite, die das Fünffache der Breite des Ankers beträgt:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements beim {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, sodass es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder verwenden Sie die Tabulatortaste, um es zu fokussieren — das positionierte Element wächst, während der Anker wächst und demonstriert, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die untenstehenden Abschnitte erkunden diese Verwendungen ausführlicher, bevor sie ein Anwendungsbeispiel zeigen.

### Einsetzen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "inset-Eigenschaft")}}-Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, beispielsweise:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft es tun (siehe [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor), oben); das Element wird seine Position nicht ändern, wenn sein Anker dies tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed)-Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement nur vertikal bewegt werden kann und immer in der Nähe des Randes seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts neben seinem Anker zu positionieren, auch wenn sich die Ankerbreite ändert.

### Einsetzen des Elementabstands basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb einer `margin-*`-Eigenschaft verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements zu setzen, beispielsweise:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie möchten, dass der Abstand eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements ist, auch wenn sich die Breite ändert.

### `anchor-size()` Positions- und Abstand-Beispiel

Schauen wir uns ein Beispiel an, bei dem wir den Abstand und die Position eines ankerpositionierten Elements relativ zur Größe des Ankerelements festlegen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, sodass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde der Kürze wegen ausgeblendet.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar.
</p>
```

```html
<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>Infobox.</p>
</div>
```

```html hidden
<p>Vulputate ut pharetra sit amet aliquam.</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

Im CSS deklarieren wir zuerst das Anker-`<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist mit dem Ankerelement über seine {{cssxref("position-anchor")}}-Eigenschaft assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker und der Infobox und fügen eine {{cssxref("transition")}} auf dem Anker hinzu, sodass Breitenänderungen fließend animiert werden, wenn sich der Zustand ändert:

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #ddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
  width: 100px;
  height: 100px;
  transition: 1s all;
}

.infobox {
  position-anchor: --myAnchor;
  position: absolute;
  height: 100px;
  width: 100px;
}
```

Jetzt zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn es schwebt oder fokussiert ist. Wir setzen dann in der Infobox:

- `top` Wert auf `anchor(top)`. Dadurch bleibt der obere Rand der Infobox immer in der Linie mit dem oberen Rand des Ankers.
- `left` Wert auf `anchor-size(width)`. Dadurch wird der linke Rand der Infobox um die angegebene Entfernung vom linken Rand ihres nächstgelegenen positionierten Vorfahren positioniert. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>` Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies bedeutet, dass die Infobox immer einen linken Abstand hat, der sie vom Anker trennt, gleich einem Viertel der Ankerbreite.

```css
.anchor:hover,
.anchor:focus {
  width: 300px;
}

.infobox {
  top: anchor(top);
  left: anchor-size(width);
  margin-left: calc(anchor-size(width) / 4);
}
```

Das gerenderte Ergebnis ist wie folgt:

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

Versuchen Sie, das Ankerelement zu fokussieren oder mit der Maus darüber zu fahren und beachten Sie, wie sich die Position und der linke Abstand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Umgang mit Überlauf: Optionen für Rückgriff und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Dimensionieren von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
