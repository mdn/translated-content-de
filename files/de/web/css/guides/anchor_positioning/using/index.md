---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: fa28e46ce15f17ba700156f93389a5ed26088cbd
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, mit denen Sie Elemente miteinander verknüpfen können. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, festgelegt werden.

CSS-Ankerpositionierung bietet auch CSS-basierte Mechanismen zur Festlegung mehrerer alternativer Positionen für ein ankerpositioniertes Element. Wenn zum Beispiel ein Tooltip an einem Formularfeld verankert ist, der Tooltip jedoch in seiner Standardposition außerhalb des Bildschirms angezeigt werden würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position darzustellen, damit er auf dem Bildschirm platziert wird, oder ihn alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwenden. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes Konzept hinzugefügt, das unten besprochen wird. Informationen zum Festlegen alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie im [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

## Grundlegende Konzepte

Es ist sehr gebräuchlich, ein Element an ein anderes zu binden, oder es daran zu befestigen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um weitere Informationen darüber zu geben.
- Einstellungen oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass bestimmter Inhalt — oft wiederverwendbar und dynamisch generiert — relativ zu einem Ankerelement platziert wird. Solche Anwendungsfälle wären relativ einfach zu erstellen, wenn das Element, an das gebunden werden soll (auch bekannt als **Ankerelement**), immer an derselben Stelle in der UI wäre und das gebundene Element (auch bekannt als **ankerpositioniertes Element**, oder einfach **positioniertes Element**) stets unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Lage der positionierten Elemente im Verhältnis zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn das Ankerelement sich bewegt oder anderweitig konfiguriert wird (z. B. durch Scrollen, Ändern der Viewportgröße, Drag-and-Drop usw.). Wenn beispielsweise ein Element wie ein Formularfeld in die Nähe des Rands des Viewports gelangt, kann sein Tooltip außerhalb des Bildschirms enden. Generell möchten Sie den Tooltip an sein Formularsteuerelement binden und sicherstellen, dass der Tooltip auf dem Bildschirm vollständig sichtbar bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Sie haben dieses Verhalten möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit einem Rechtsklick (<kbd>Strg</kbd> + Klick) öffnen.

Historisch gesehen erforderte die Verknüpfung eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Ankerelemente und positionierte Elemente verknüpfen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst erklären, welches Element der Anker ist, und dann angeben, welches positionierte Element/die positionierten Elemente mit diesem Anker verknüpft werden sollen. Dies erzeugt eine Ankerreferenz zwischen den beiden. Diese Verknüpfung kann explizit über CSS oder implizit hergestellt werden.

### Explizite CSS-Ankerverknüpfung

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie ihm einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft zuweisen. Der Ankernamen muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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
  anchor-name: --my-anchor;
  width: fit-content;
}
```

Ein Element in ein ankerpositioniertes Element zu konvertieren, erfordert zwei Schritte: Es muss absolut oder fixiert [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}} Eigenschaft verwendet wird. Dem positionierten Element wird dann seine {{cssxref("position-anchor")}} Eigenschaft auf den Wert der `anchor-name` Eigenschaft des Ankerelements gesetzt, um die beiden zu verknüpfen:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
}
```

Wir wenden das obige CSS auf das folgende HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt verknüpft, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verbunden — wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle zurücklassen. Sie werden das tatsächliche Verknüpfen sehen, wenn wir [Elemente basierend auf der Ankerposition positionieren](#positionierung_von_elementen_relativ_zu_ihrem_anker).

### Implizite Ankerverknüpfung

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen hergestellt:

- Wenn die [Popover-API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einem Steuerelement zu verknüpfen, wird implizit eine Ankerreferenz zwischen den beiden hergestellt. Dies kann vorkommen, wenn:
  - Ein Popover deklarativ mit einem Steuerelement über die [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute oder die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` Attribute verknüpft wird.
  - Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmgesteuert mit einem Steuerelement über die `source` Option verknüpft wird.
- Ein {{htmlelement("select")}} Element und sein Dropdown-Auswahlfeld werden der [anpassbaren Auswahlleisten](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Funktionalität über das {{cssxref("appearance")}} Eigenschaft `base-select` Wert zugewiesen. In diesem Fall wird eine implizite Popover-Auslöser-Beziehung zwischen den beiden erstellt, was bedeutet, dass sie auch eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht miteinander verbunden. Um sie zusammen zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

### Entfernen einer Ankerverknüpfung

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerverknüpfung entfernen möchten, können Sie eine der folgenden Methoden anwenden:

1. Setzen Sie den Wert der `anchor-name` Eigenschaft des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element an es verankert wird.
2. Setzen Sie die `position-anchor` Eigenschaft des positionierten Elements auf `none` oder auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`.

Im Fall impliziter Ankerverknüpfungen müssen Sie die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies liegt daran, dass die Verknüpfung intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Zum Beispiel, um zu verhindern, dass ein anpassbares `<select>` Elementes Auswahlfeld an das `<select>` Element selbst verankert wird, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: none;
}
```

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Verknüpfung eines positionierten Elements mit einem Anker allein nicht wirklich nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem verknüpften Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Spezifizieren eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> CSS-Ankerpositionierung bietet auch Mechanismen zur Spezifizierung von Fallback-Positionen, falls die Standardposition eines positionierten Elements zum Überlauf des Viewports führt. Siehe den [Fallback-Optionen und bedingtes Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden für Details.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktionieren. Wenn es versteckt ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie ein ankerpositioniertes Element versteckt wird, wenn sein Anker verschwindet, im [Bedingten Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()` Werte

Konventionell absolut und fixiert positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Mit `position: absolute` ist dieser Inset-Positionswert eine absolute Entfernung relativ zu den Kanten des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert eine absolute Entfernung relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma, indem ankerpositionierte Elemente relativ zu den Kanten ihrer verknüpften Anker positioniert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion, die einen gültigen Wert für jede der Inset-Eigenschaften darstellt. Bei Verwendung legt die Funktion den Inset-Positionswert als absolute Entfernung relativ zum Ankerelement fest, indem das Ankerelement, die Seite des Ankerelements, relativ zu der das positionierte Element positioniert wird, festgelegt wird und die Entfernung von dieser Seite.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der {{cssxref("anchor-name")}} Eigenschaftswert des Ankerelements, zu dessen Seite Sie das Element positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wird dies weggelassen, wird der Standardanker des Elements verwendet. Dies ist der Anker, der in der {{cssxref("position-anchor")}} Eigenschaft referenziert ist oder über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element verknüpft ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Verknüpfung des Elements. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physikalische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf die `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht mit der Inset-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Eine {{cssxref("length-percentage")}}, die die Entfernung angibt, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fixiert positioniert ist, der `<anchor-side>` Wert nicht kompatibel ist oder das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf eine Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist das gleiche Verhalten, das auftritt, wenn der `<anchor-side>` Wert mit der Inset-Eigenschaft, auf die er gesetzt ist, unvereinbar ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Enthaltungsblocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden häufig entweder {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und des positionierten Elements zu schaffen oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements, fügt dann `margin-left` hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie es in einer {{cssxref("calc()")}} Funktion verwenden können. Diese Regel positioniert die logische Block-End-Kante des positionierten Elements `10px` von der logischen Block-Start-Kante des Ankerelements entfernt und fügt den Abstand mit der `calc()`-Funktion hinzu, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber, um den Inhalt über seinen Container hinaus überlaufen und scrollen zu lassen. Wir geben auch dem Ankerelement den gleichen `anchor-name` wir in den vorherigen Beispielen:

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
  anchor-name: --my-anchor;
}
```

Die Infobox ist über den Ankernamen mit dem Anker verbunden und erhält eine fixierte Positionierung. Durch Einfügen der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen von links nach rechts Schreibrichtungen {{cssxref("top")}} und {{cssxref("left")}} entsprechen) haben wir sie mit dem Anker verbunden. Wir fügen der Infobox einen `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  inset-block-start: anchor(end);
  inset-inline-start: anchor(self-end);
  margin: 5px 0 0 5px;
}
```

Schauen wir uns die Deklarationen zur Inset-Positionspositionierung genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die Blockstartkante des positionierten Elements auf die Blockendkante des Ankers, berechnet unter Verwendung der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet unter Verwendung der `anchor(self-end)` Funktion.

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist an das Ankerelement gebunden, nicht an den Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Ankern. Die `position-area` Eigenschaft basiert auf dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die zentrale Kachel ist. Die `position-area` Eigenschaft kann verwendet werden, um das anker-positionierte Element in einer der neun Kacheln zu positionieren oder über zwei oder drei Kacheln zu spannen.

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [Enthaltungsblock](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Enthaltungsblock des positionierten Elements definiert wird.

`position-area` Eigenschaftswerte bestehen aus einem oder zwei Werten, die auf den oben beschriebenen Zeilen- und Spaltenwerten basieren, mit Optionen zum Spannen, um das Raster zu definieren, wo das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Raster zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Ecke des Rasters.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der unteren mittleren Kachel des Rasters.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in die das positionierte Element platziert werden soll, wobei es zunächst in der Mitte platziert wird, und der andere gibt die Menge dieser Spalte an, die es spannen soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Zeile platziert und über die mittleren und linken Kacheln dieser Zeile gespannt wird.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert und über die mittleren und x-end Kacheln dieser Spalte gespannt wird.
- `block-end span-all` bewirkt, dass das positionierte Element in der block-end Zeile platziert und über die inline-start, center und inline-end Kacheln dieser Zeile gespannt wird.

Wenn Sie nur einen Wert angeben, unterscheidet sich die Wirkung je nachdem, welcher Wert eingestellt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt sich so aus, als ob der andere Wert `span-all` wäre. Zum Beispiel hat `top` die gleiche Wirkung wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt sich so aus, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel hat `start` die gleiche Wirkung wie `start start`.
- Ein Wert von `center` wirkt sich so aus, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Werte-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet das gleiche HTML und die gleichen Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}} Element einschließen, um den `position-area` Wert des positionierten Elements zu ändern.

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
  anchor-name: --my-anchor;
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

Die Infobox erhält eine fixierte Positionierung und ist mit dem Anker über CSS verbunden. Beim Laden wird es so eingestellt, dass es mit `position-area: top;` an den Anker gebunden ist, was bewirkt, dass es oben auf dem `position-area`-Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>` Menü auswählen.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
}
```

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area` Werte zu übernehmen, die aus dem `<select>` Menü für die Infobox ausgewählt wurden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Festlegen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben die Größenangaben absichtlich weggelassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangaben in `position-area` Rasterzellen platziert wird, wird es mit dem angegebenen Rasterbereich ausgerichtet und verhält sich so, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird gemäß seiner [Größen des Enthaltungsblocks](/de/docs/Web/CSS/Guides/Display/Containing_block) dimensioniert, das die Breite seines Inhalts ist. Diese Größe wurde durch Festlegen von `position: fixed` erzwungen. Automatisiert dimensionierte absolute und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus wie nötig, um den Textinhalt aufzunehmen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall, wenn auf der linken Seite des Rasters mit einem `left` oder `inline-start` Wert platziert, wird der Text umgebrochen. Wenn die `max-content` Größe des Ankerelements schmaler oder kürzer als sein Anker ist, werden sie nicht wachsen, um die Größe des Ankers gleich zu machen.

Wenn das positionierte Element vertikal zentriert ist, zum Beispiel mit `position-area: bottom center`, wird es mit der angegebenen Rasterzelle ausgerichtet und die Breite wird gleich der des Ankerelements. In diesem Fall ist seine Mindesthöhe die Größe des Enthaltungsblocks des Ankerelements. Es wird nicht überlaufen, da `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrierung auf dem Anker unter Verwendung von `anchor-center`

Während Sie das ankerpositionierte Element mit den `center` Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Kombination mit der `anchor()` Funktion mehr Kontrolle über die exakte Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften statt `position-area` verwendet werden, um zu binden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und deren Abkürzungen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern das Ausrichten von Elementen in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, beispielsweise entlang der Haupt- oder Querachse bei Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine fixierte Positionierung und ist an der unteren Kante des Ankers angebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Zentrum des Ankers zentriert ist:

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
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
}
```

Dies zentriert das anker-positionierte Element am Boden seines Ankers:

{{ EmbedLiveSample("Zentrierung auf dem Anker unter Verwendung von `anchor-center`", "100%", "250") }}

## Größenangaben von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch ein Element relativ zur Größe seines Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) Funktion innerhalb eines Größenwerts verwenden.

Größeneigenschaften, die einen `anchor-size()` Wert akzeptieren können, umfassen:

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

`anchor-size()`-Funktionen lösen sich zu {{cssxref("length")}} Werten auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der {{cssxref("anchor-name")}} Eigenschaft des Ankerelements festgelegt ist, zu dem Sie die Größe des Elements relativ festlegen möchten. Wird dies weggelassen, wird die **Standardanker** des Elements verwendet, welcher der Anker ist, der in der {{cssxref("position-anchor")}} Eigenschaft referenziert ist.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fixiert positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die Größe zu modifizieren, die auf das positionierte Element angewendet wird.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standard-Ankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inlinesize des positionierten Elements auf das Vierfache der Inlinesize des Ankerelements, wobei die Multiplikation innerhalb einer `calc()` Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass das Ankerelement mit einem [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut versehen wird, um es fokussierbar zu machen. Die Infobox ist fest positioniert und in gleicher Weise mit dem Anker verbunden wie zuvor. Diesmal jedoch wird es mit einer `position-area` an der rechten Seite des Ankers angebunden und erhält eine Breite, die das Fünffache der Breite des Ankerbreite beträgt:

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
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: right;
  margin-left: 5px;
  width: calc(anchor-size(width) * 5);
}
```

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, sodass es animiert, wenn sich der Zustand ändert.

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

Bewegen Sie den Mauszeiger über das Ankerelement oder tippen Sie es an — das positionierte Element wächst, wenn der Anker wächst, und zeigt, dass die Größe des ankerpositierten Elements relativ zum Anker ist:

{{ EmbedLiveSample("Größenangaben von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Rand-Eigenschaften verwenden. Die folgenden Abschnitte untersuchen diese Verwendungen genauer, bevor ein Anwendungsbeispiel gegeben wird.

### Einstellen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaft")}} Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion oder {{cssxref("position-area")}} Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sein Anker sich ändert. Stattdessen wird das Element nach den normalen Regeln der [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) Positionierung positioniert.

Dies kann in bestimmten Situationen nützlich sein. Wenn Ihr Ankerelement sich beispielsweise nur vertikal bewegen kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich die Breite des Ankers ändert.

### Einstellen des Elementrandes basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftswerts verwenden, um Elementränder basierend auf der Größe ihres Ankerelements zu setzen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie den Rand eines ankerpositionierten Elements gleich einem bestimmten Prozentsatz der Breite des Ankerelements halten möchten, auch wenn sich die Breite ändert.

### `anchor-size()` Positions- und Randbeispiel

Schauen wir uns ein Beispiel an, in dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements setzen.

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, ein `anchor` Element und ein `infobox` Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, sodass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} hoch genug zu machen, um das Scrollen zu erfordern, aber dies wurde der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zunächst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und wird über seine {{cssxref("position-anchor")}} Eigenschaft mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker und die Infobox und fügen dem Anker eine {{cssxref("transition")}} hinzu, damit Breitenänderungen beim Ändern seines Zustands sanft animiert werden:

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
  outline: 1px solid #dddddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: 100px;
  height: 100px;
  transition: 1s all;
}

.infobox {
  position-anchor: --my-anchor;
  position: absolute;
  height: 100px;
  width: 100px;
}
```

Nun zum interessantesten Teil. Hier setzen wir die `width` des Ankers auf `300px` wenn er schwebt oder fokussiert wird. Dann setzen wir die Infobox:

- `top` Wert auf `anchor(top)`. Dies bewirkt, dass die Oberkante der Infobox immer mit der Oberkante des Ankers übereinstimmt.
- `left` Wert auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Infobox um den angegebenen Abstand von der linken Kante ihres nächsten positionierten Vorfahren positioniert wird. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements und der nächste positionierte Vorfahr ist das `<body>` Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Rand hat, der sie vom Anker trennt, gleich einem Viertel der Breite des Ankers.

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

{{EmbedLiveSample("Grundlegende Verwendung von `anchor-size()`", "100%", "240")}}

Versuchen Sie tabbing zum Ankerelement oder bewegen Sie den Mauszeiger darüber und beachten Sie, wie sich die Position und der linke Rand der Infobox im Verhältnis zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [Positionierung lernen](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Gegenstände in CSS dimensionieren lernen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
