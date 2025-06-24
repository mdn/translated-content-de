---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS Anchor Positioning** Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, eingestellt werden.

CSS Anchor Positioning bietet auch Mechanismen nur mit CSS, um mehrere alternative Positionen für ein ankerpositioniertes Element zu spezifizieren. Wenn z.B. ein Tooltip an ein Formularfeld verankert ist, der Tooltip aber in seinen Standardpositionseinstellungen außerhalb des Bildschirms gerendert würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, damit er auf dem Bildschirm platziert wird, oder alternativ, ihn ganz auszublenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenmerkmale des Moduls auf einer grundlegenden Ebene nutzen können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten diskutierten Konzepte hinzugefügt. Informationen zur Angabe alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes zu binden oder zu verknüpfen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen angezeigt werden.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um mehr Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte — oft wiederverwendbar und dynamisch erzeugt — relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle wären ziemlich einfach zu erstellen, wenn das zu verankernde Element (auch bekannt als **Ankerelement**) immer an derselben Stelle in der UI wäre und das verankerte Element (auch bekannt als **ankerpositioniertes Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Jedoch sind die Dinge selten so einfach.

Der Standort der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn das Ankerelement bewegt wird oder sich anderweitig konfiguriert verändert (z.B. durch Scrollen, Ändern der Viewport-Größe, Drag-and-Drop usw.). Beispielsweise, wenn ein Element wie ein Formularfeld sich der Kante des Viewports nähert, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an das Formularsteuerelement binden und sicherstellen, dass der Tooltip so lange vollständig sichtbar auf dem Bildschirm bleibt, wie das Formularfeld sichtbar ist, indem der Tooltip bei Bedarf automatisch verschoben wird. Sie könnten dieses Verhalten als Standardverhalten Ihres Betriebssystems bemerkt haben, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop durch Rechtsklick (<kbd>Strg</kbd> + Klick) aufrufen.

Historisch gesehen erforderte die Zuordnung eines Elements zu einem anderen Element und die dynamische Änderung der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, das Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definierten Funktionen ermöglichen es, solche Anwendungsfälle performanter und deklarativ mit CSS (und HTML) statt mit JavaScript zu implementieren.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welches/welche positionierte(n) Element(e) mit diesem Anker verknüpft werden sollen. Dies schafft einen Ankerbezug zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft darauf setzen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Ein Element in ein ankerpositioniertes Element umzuwandeln, erfordert zwei Schritte: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}} Eigenschaft verwendet wird. Dann hat das positionierte Element seine {{cssxref("position-anchor")}} Eigenschaft auf den Wert der `anchor-name` Eigenschaft des Ankerelements gesetzt, um die beiden zu verknüpfen:

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

Wir wenden das obige CSS auf folgendes HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun verbunden, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht aneinander gebunden — wenn Sie den Anker positionieren und ihn woanders auf der Seite bewegen würden, würde er sich alleine bewegen und die Infobox am selben Ort lassen. Sie werden das eigentliche Verbinden in Aktion sehen, wenn wir uns die [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) anschauen.

### Implizite Ankerassoziation

In einigen Fällen wird ein implizierter Ankerbezug zwischen zwei Elementen hergestellt, aufgrund der semantischen Natur ihrer Beziehung. Beispielsweise, wenn die [Popover API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einem Steuerelement zu verknüpfen, wird ein impliziter Ankerbezug zwischen den beiden hergestellt. Dies kann auftreten, wenn:

- Ein Popover mit einem Steuerelement deklarativ über die [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute verknüpft wird.
- Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einem Steuerelement programmgesteuert unter Verwendung der `source` Option verknüpft wird.
- Ein {{htmlelement("select")}} Element und sein Dropdown-Picker in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Funktionalität über die {{cssxref("appearance")}} Eigenschaft `base-select` Wert integriert werden. In diesem Fall wird eine implizite Popover-Aufrufer-Beziehung zwischen den beiden erstellt, was bedeutet, dass sie auch einen impliziten Ankerbezug haben werden.

> [!NOTE]
> Die oben genannten Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht aneinander gebunden. Um sie miteinander zu verknüpfen, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist eine Verknüpfung eines positionierten Elements mit einem Anker alleine nicht wirklich nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem verknüpften Ankerelement zu platzieren. Dies geschieht entweder durch das Setzen einer [CSS `anchor()` Funktion](#using_inset_properties_with_anchor_function_values) Wert auf einer {{Glossary("Inset_properties", "inset property")}}, [Festlegen eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center` Plazierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorgänger positioniert. Wir diskutieren, wie ein ankerpositioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, im [Bedingten Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()` Funktion Werten

Konventionelle absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Kanten des nächstgelegenen positionierten Vorgängers. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

CSS Anchor Positioning ändert dieses Paradigma und ermöglicht ankerpositionierte Elemente, die relativ zu den Kanten ihrer verknüpften Anker platziert werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die einen gültigen Wert für jede der Inset-Eigenschaften darstellt. Bei Verwendung legt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement fest, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert des Ankerelements, relativ zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird oder über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element verknüpft ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementverknüpfung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()` Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte schließen das `center` des Ankers, physikalische (`top`, `left`, usw.) oder logische (`start`, `self-end`, usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Anfang (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, die `anchor()` gesetzt ist, ein. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}} definiert den Abstand, der als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>` Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()` Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf einer Inset-Eigenschaft eines ankerpositionierten Elements festlegen, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist dasselbe Verhalten, das zu sehen ist, wenn der `<anchor-side>` Wert inkompatibel mit der Inset-Eigenschaft ist, auf der es gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des am nächsten positionierten Vorgängers (falls vorhanden) oder des initialen enthaltenden Blocks platzieren.

Die häufigsten `anchor()` Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch oft entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen der Kante des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()` Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel den rechten Rand des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um einen Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()` Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}} Funktion verwenden können. Diese Regel positioniert den logischen Block-Endrand des positionierten Elements `10px` vom logischen Block-Start der Ankerelement-Kante und fügt den Abstand mit der `calc()` Funktion hinzu, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber platziert, um den Inhalt seines Containers überlaufen und scrollen zu lassen. Wir werden dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen geben:

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

Die Infobox ist über den Ankernamen mit dem Anker verknüpft und erhält eine feste Positionierung. Durch das Einfügen der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Betrachten wir die Inset-Property-Positionierungsangaben genauer:

- `inset-block-start: anchor(end)`: Dies setzt den Block-Start-Rand des positionierten Elements auf den Block-End-Rand des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Inline-Start-Rand des positionierten Elements auf den Inline-End-Rand des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Das ergibt das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts des Ankerelements. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement positioniert - es ist fest an das Ankerelement gebunden, nicht an den Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()` Funktion für die Positionierung von Elementen relativ zu Ankern. Die `position-area` Eigenschaft arbeitet auf dem Konzept eines 3x3 Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel darstellt. Die `position-area` Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es zu veranlassen, sich über zwei oder drei Kacheln zu erstrecken.

![Das position-area Raster, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physikalischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthältichen Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und der äußeren Kante des Gitters durch den enthältichen Block des positionierten Elements definiert wird.

`position-area` Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit verfügbaren Spannungsoptionen zur Definition der Region des Gitters, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Gitterquadrat zu platzieren. Zum Beispiel:

- `top left` (logische Entsprechung `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll und anfangs zentriert, und der andere gibt die Menge an, die diese Spalte überspannen soll. Zum Beispiel:

- `top span-left` verursacht, dass das positionierte Element in der oberen Reihe platziert wird und über die Mitte und die linken Kacheln dieser Reihe spannt.
- `y-end span-x-end` verursacht, dass das positionierte Element am Ende der y-Spalte platziert wird und über die Mitte und die x-end Kacheln dieser Spalte spannt.
- `block-end span-all` verursacht, dass das positionierte Element in der Block-End-Reihe platziert wird und über die Inline-Start-, Mitte- und Inline-End-Kacheln dieser Reihe spannt.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich je nachdem, welcher Wert gesetzt wird:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` ist. Zum Beispiel gibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel gibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physikalischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und die Basis-CSS-Stile wie das vorherige Beispiel, mit Ausnahme, dass wir ein {{htmlelement("select")}} Element hinzugefügt haben, um den `position-area` Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und ist mit dem Anker durch CSS verknüpft. Beim Laden wird sie auf die Verankerung an den Anker mit `position-area: top;` gesetzt, was bewirkt, dass sie in der oberen Positionierungsbereich-Kachel des Rasters positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>` Menü wählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area` Werte, die aus dem `<select>` Menü gewählt werden, auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Setting a `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Größe des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben das absichtlich unterlassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangaben in `position-area` Kacheln platziert wird, wird es mit dem angegebenen Rasterbereich ausgerichtet und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird entsprechend seiner [enthältichen Block](/de/docs/Web/CSS/CSS_display/Containing_block) Größe dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fest positionierten Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie nötig, um den Textinhalt aufzunehmen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall, wenn es auf der linken Seite des Rasters mit einem `left` oder `inline-start` Wert positioniert ist, wird der Text umbrochen. Wenn die `max-content` Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um der Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, wird es mit der angegebenen Gitterzelle ausgerichtet und die Breite wird dieselbe wie das Ankerelement sein. In diesem Fall ist seine Minimalhöhe die enthaltige Blockgröße des Ankerelements. Es wird nicht überlaufen, da das `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort ist.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center` Werten der `position-area` zentrieren können, bieten Inset-Eigenschaften, kombiniert mit der `anchor()` Funktion, mehr Kontrolle über die exakte Position. CSS Anchor Positioning bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften, anstatt `position-area`, verwendet werden, um es zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente leicht in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme auszurichten, beispielsweise entlang der Haupt- oder Querachse im Fall von Flex-Kindern. CSS Anchor Positioning bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit der Mitte seines Standardankers ausrichtet.

Das Beispiel verwendet dasselbe HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf der Mitte des Ankers zentriert ist:

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

Dies zentriert das ankerpositionierte Element an der Unterseite seines Ankers:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers, können Sie auch ein Element relativ zu seiner Ankergröße dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Größeigenschaftswerts verwenden.

Größeigenschaften, die einen `anchor-size()` Wert akzeptieren können, umfassen:

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

`anchor-size()` Funktionen lösen sich in {{cssxref("length")}} Werten auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft des Ankerelements, zu dem Sie die Elementgröße relativieren möchten, gesetzt ist. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, zu der das positionierte Element relativ dimensioniert wird. Dies kann mit physikalischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Rückfallwert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die meisten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu ändern.

Zum Beispiel, diese Regel dimensioniert die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()` Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Sehen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut erhält, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird mit dem Anker auf die gleiche Weise wie zuvor verknüpft. Dieses Mal verankern wir es jedoch rechts vom Anker, indem wir eine `position-area` verwenden, und geben ihm eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements beim {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm einen {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder navigieren Sie mit der Tabulatortaste dorthin — das positionierte Element wächst, während der Anker wächst, und zeigt damit, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Rand-Eigenschaften verwenden. Die untenstehenden Abschnitte erkunden diese Verwendungen ausführlicher, bevor sie ein Anwendungsbeispiel geben.

### Positionierung des Element basierend auf der Ankergröße einstellen

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Property")}} Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers, wie die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion oder die {{cssxref("position-area")}} Eigenschaft dies tun (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sein Anker dies tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in manchen Situationen nützlich sein. Wenn Ihr Ankerelement sich zum Beispiel nur vertikal bewegen kann und immer an der Kante seines nächstgelegenen positionierten Vorgängers horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich die Ankerbreite ändert.

### Einstellung des Rands des Elements basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftenwerts verwenden, um Elementränder basierend auf der Größe ihres Ankerelements einzustellen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie möchten, dass der Rand eines ankerpositionierten Elements immer gleich einem festen Prozentsatz der Ankerbreite ist, auch wenn sich die Breite ändert.

### `anchor-size()` Position und Rand Beispiel

Lassen Sie uns ein Beispiel betrachten, bei dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Ankergröße einstellen.

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, ein `anchor` Element und ein `infobox` Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} groß genug zu machen, um ein Scrollen zu erfordern, aber dies wurde aus Gründen der Kürze verborgen.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}} Eigenschaft mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker und der Infobox und fügen eine {{cssxref("transition")}} auf dem Anker hinzu, damit Breitenänderungen sanft animiert werden, wenn sich sein Zustand ändert:

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

Jetzt kommen wir zum interessantesten Teil. Hier setzen wir die `width` des Ankers auf `300px`, wenn er gehovt oder fokussiert wird. Wir setzen dann die:

- `top` Wert der Infobox auf `anchor(top)`. Das bewirkt, dass die Oberseite der Infobox immer mit der Oberseite des Ankers übereinstimmt.
- `left` Wert der Infobox auf `anchor-size(width)`. Das bewirkt, dass die linke Seite der Infobox den angegebenen Abstand vom linken Rand ihres nächstgelegenen positionierten Vorgängers entfernt positioniert wird. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements, und der nächstgelegene positionierte Vorgänger ist das `<body>` Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert der Infobox auf `calc(anchor-size(width)/4)`. Das bewirkt, dass die Infobox immer einen linken Rand hat, der sie vom Anker trennt und gleich einem Viertel der Breite des Ankers ist.

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

Versuchen Sie, zum Anker zu tabben oder ihn mit der Maus zu überfahren, und beachten Sie, wie sich die Position und der linke Rand der Infobox proportional zur Ankerbreite vergrößern.

## Siehe auch

- [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
