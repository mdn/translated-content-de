---
title: Verwendung von CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 273cfbaca18a909ee6a9b4c8bd83d94b5c859559
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, gesetzt werden.

CSS-Ankerpositionierung bietet auch CSS-Mechanismen zum Festlegen mehrerer alternativer Positionen für ein ankerpositioniertes Element. Zum Beispiel, wenn ein Tooltip an ein Formularfeld gebunden ist, aber der Tooltip in seiner Standardposition außerhalb des Bildschirms dargestellt werden würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position darzustellen, damit er auf dem Bildschirm angezeigt wird, oder ihn gegebenenfalls ganz ausblenden.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten besprochenen Konzepte hinzugefügt. Informationen zur Spezifizierung alternativer Positionen und zum Ausblenden ankerpositionierter Elemente finden Sie im [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Grundlegende Konzepte

Es ist sehr gebräuchlich, ein Element an ein anderes zu binden. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um mehr Informationen darüber zu geben.
- Einstellungs- oder Optionsdialoge, die zugänglich sind, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Oberflächen fordern häufig, dass Inhalte – oft wiederverwendbare und dynamisch generierte – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle wären recht einfach zu erstellen, wenn das zu bindende Element (auch als **Ankerelement** bekannt) immer an derselben Stelle im UI wäre und das verbundene Element (auch als **ankerpositioniertes Element** oder einfach als **positioniertes Element** bekannt) im Quellcode immer direkt davor oder danach platziert werden könnte. Die Realität ist jedoch selten so einfach.

Die Position von positionierten Elementen relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z.B. durch Scrollen, Änderungen der Viewport-Größe, Drag & Drop usw.). Wenn sich beispielsweise ein Element wie ein Formularfeld nahe am Rand des Viewports befindet, kann es passieren, dass sein Tooltip außerhalb des Bildschirms endet. Im Allgemeinen möchten Sie den Tooltip an das Formularelement binden und sicherstellen, dass der Tooltip vollständig sichtbar bleibt, solange das Formularfeld sichtbar ist, und ihn bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Rechtsklickmenüs (Rechtsklick bzw. <kbd>Strg</kbd> + Klick) auf Ihrem Desktop oder Laptop verwenden.

Historisch gesehen erforderte die Assoziierung eines Elements mit einem anderen und die dynamische Änderung des Standorts und der Größe eines positionierten Elements basierend auf der Position eines Ankerelements den Einsatz von JavaScript, was zu Komplexität und Leistungsproblemen führte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen eine performante und deklarative Implementierung solcher Anwendungsfälle mit CSS (und HTML) anstelle von JavaScript.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst deklarieren, welches Element der Anker ist und dann angeben, welches(n) positionierte(n) Element(e) Sie mit diesem Anker assoziieren möchten. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element mit CSS als Anker zu deklarieren, muss ein Ankername mithilfe der {{cssxref("anchor-name")}}-Eigenschaft gesetzt werden. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der die Ankereffekte besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu assoziieren:

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

Wir wenden das oben beschriebene CSS auf das folgende HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns dafür vertrauen. Sie sind noch nicht miteinander verknüpft — wenn Sie den Anker positionieren und irgendwo anders auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden das tatsächliche Verknüpfen in Aktion sehen, wenn wir uns [die Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerassoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen hergestellt. Beispielsweise, wenn die [Popover-API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einer Steuerung zu assoziieren, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann auftreten, wenn:

- Deklaratives Assoziieren eines Popovers mit einer Steuerung unter Verwendung der Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).
- Programmatisches Assoziieren einer Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einer Steuerung unter Verwendung der `source`-Option.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Auswähler sind in die Funktionalität eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft `base-select` eingebunden. In diesem Fall wird eine implizite Popover-Auslöser-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht miteinander verknüpft. Um sie zu verknüpfen, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Assoziieren eines positionierten Elements mit einem Anker allein nicht wirklich von Nutzen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugeordneten Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen eines [CSS `anchor()`-Funktionswerts](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "inset property")}}, [Festlegen eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> CSS-Ankerpositionierung bietet auch Mechanismen zum Festlegen von Fallback-Positionen, falls die Standardposition des positionierten Elements dazu führt, dass es aus dem Viewport überlaufen würde. Siehe den [Fallback-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden für Details.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel durch [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie Sie ein ankerpositioniertes Element ausblenden können, wenn sein Anker verschwindet, im Abschnitt [Conditional hiding using `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit durch Festlegen von {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} positioniert. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Rändern ihrer zugeordneten Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Insets-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Funktionskomponenten sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder mit dem Element über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut assoziiert ist.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzelnen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physikalische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder ein `<percentage>` zwischen dem Start (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, auf der die Funktion `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die Funktion `anchor()` gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der den Abstand als Fallback-Wert definiert, falls das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die Funktion `anchor()` gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie direkt eine Länge oder Prozentsatz auf eine Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist dasselbe Verhalten, das gesehen wird, wenn der Wert `<anchor-side>` nicht kompatibel mit der Inset-Eigenschaft ist, auf der er gesetzt ist und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des anfänglichen Containerblocks.

Die am häufigsten verwendeten `anchor()`-Parameter beziehen sich auf eine Seite des Standardankers. Sie werden häufig entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` in einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann einen `margin-left` hinzu, um einen Abstand zwischen den Kanten zu erzeugen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie in einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt und fügt den Abstand mithilfe der `calc()`-Funktion hinzu, sodass wir keine Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, mit einigem Fülltext, der darunter und darüber platziert ist, um den Inhalt zum Überlaufen seines Containers zu bringen und Scrollen zu verursachen. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker verbunden und erhält eine feste Positionierung. Durch Einfügen der Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} (die in horizontalen LTR-Schreibmodi den {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften entsprechen) haben wir sie an den Anker gebunden. Wir fügen der Infobox `margin` hinzu, um einen Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Deklarationen für die Inset-Eigenschaften genauer an:

- `inset-block-start: anchor(end)`: Setzt die Block-Startkante des positionierten Elements auf die Block-Endkante des Ankers, berechnet mit der Funktion `anchor(end)`.
- `inset-inline-start: anchor(self-end)`: Setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der Funktion `anchor(self-end)`.

Das ergibt das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts des Ankerelements. Wenn Sie das Dokument hoch- und runter scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei – es ist an das Ankerelement gebunden, nicht an den Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft arbeitet auf dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln oder über zwei oder drei Kacheln zu positionieren.

![Das position-area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen sind durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten sind durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Containing Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit Spannenoptionen, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Beispielsweise:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrat zu platzieren. Beispielsweise:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, indem es initial in der Mitte platziert wird, und der andere gibt die Menge dieser Spalte an, die es überspannen soll. Beispielsweise:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Zeile platziert wird und über die mittleren und linken Kacheln dieser Zeile hinwegspannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und über die mittleren und x-end-Kacheln dieser Spalte hinwegspannt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Blockendzeile platziert wird und über die inline-start-, mittleren und inline-end-Kacheln dieser Zeile hinwegspannt.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert gesetzt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` wäre. Zum Beispiel ist `top` gleichbedeutend mit `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel ist `start` gleichbedeutend mit `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Werteseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physikalischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und die grundlegenden CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um das Ändern des `position-area`-Werts des positionierten Elements zu ermöglichen.

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

Die Infobox erhält eine feste Positionierung und wird mit dem Anker über CSS assoziiert. Beim Laden wird sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden ist, was bewirkt, dass sie am oberen Rand des `position-area`-Rasters positioniert wird. Dies wird überschrieben, sobald Sie unterschiedliche Werte aus dem `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte, die aus dem `<select>`-Menü ausgewählt wurden, auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um die Auswirkungen auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Setting an `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir bewusst keine explizite Größe in beiden Dimensionen für das positionierte Element festgelegt. Wir haben die Größenangabe weggelassen, um Ihnen zu zeigen, welches Verhalten dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangaben in die `position-area`-Rasterzellen eingesetzt wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich so, als wäre die {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird basierend auf der Größe seines [Containing Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) dimensioniert, was der Breite seines Inhalts entspricht. Diese Größe wurde durch das Setzen von `position: fixed` erzwungen. Auto-angepasst absolute und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie es benötigt wird, um den Textinhalt aufzunehmen, wobei sie durch den Rand des Viewports begrenzt sind. In diesem Fall, wenn es auf der linken Seite des Rasters mit einem `left`- oder `inline-start`-Wert platziert wird, wird der Text umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer ist als sein Anker, wachsen sie nicht, um der Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal zentriert ist, z.B. mit `position-area: bottom center`, wird es mit der angegebenen Rasterzelle ausgerichtet, und die Breite entspricht der des Ankerelements. In diesem Fall entspricht seine minimale Höhe der Containing Block-Größe des Ankerelements. Es wird nicht überlaufen, da die `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrieren am Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die exakte Position. CSS Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften verwendet werden, um es zu binden statt `position-area`.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente in Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme leicht auszurichten, z.B. entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an die untere Kante des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf dem Zentrum des Ankers zentriert ist:

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

Dies zentriert das ankerpositionierte Element an der Unterseite seines Ankers:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch ein Element relativ zur Größe seines Ankers über die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenwerte anpassen.

Größeneigenschaften, die einen `anchor-size()`-Wert akzeptieren können, sind:

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

`anchor-size()`-Funktionen ergeben {{cssxref("length")}}-Werte. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, auf den Sie das Element relativ dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements, der Anker, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert ist, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann mit physikalischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, falls das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()`-Funktionen beziehen sich wahrscheinlich nur auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Lassen Sie uns ein Beispiel betrachten. Das HTML und das Basis-CSS sind dasselbe wie in den vorherigen Beispielen, außer dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut gegeben wird, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird mit dem Anker in der gleichen Weise wie zuvor verbunden. Diesmal binden wir sie jedoch mithilfe eines `position-area` an die rechte Seite des Ankers und geben ihr eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Außerdem erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm ein {{cssxref("transition")}}, sodass es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie mit dem Mauszeiger über das Ankerelement oder fokussieren Sie es mit der Tabulatortaste — das positionierte Element wächst, wenn das Ankerelement wächst, was zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte befassen sich mit diesen Verwendungen im Detail, bevor ein Anwendungsbeispiel gegeben wird.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Werts")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positioning elements relative to their anchor](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sich sein Anker ändert. Stattdessen wird das Element gemäß den normalen Regeln von [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) positioniert.

Dies kann in einigen Situationen nützlich sein. Wenn Ihr Ankerelement zum Beispiel nur vertikal bewegt werden kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, damit das ankerpositionierte Element immer relativ zu seinem Anker positioniert wird, auch wenn sich die Breite des Ankers ändert.

### Festlegen des Elementabstands basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb einer `margin-*`-Eigenschaft verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie den Abstand eines ankerpositionierten Elements so einstellen möchten, dass er immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements ist, selbst wenn sich die Breite ändert.

### `anchor-size()` Position und Abstand Beispiel

Lassen Sie uns ein Beispiel betrachten, bei dem wir den Abstand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements einstellen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussierbar ist. Wir fügen auch Fülltext ein, um den {{htmlelement("body")}} so hoch zu machen, dass ein Scrollen erforderlich ist, aber dies wurde zur Übersichtlichkeit versteckt.

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

Im CSS deklarieren wir zuerst das `anchor`-<div> als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf den Anker und die Infobox und fügen eine {{cssxref("transition")}} auf dem Anker hinzu, damit Breitenänderungen bei Zustandsänderungen reibungslos animiert werden:

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er gehovt oder fokussiert wird. Wir setzen dann die `top`-Werte der Infobox auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Infobox immer auf Höhe der Oberseite des Ankers bleibt. Die `left`-Werte auf `anchor-size(width)`. Dies sorgt dafür, dass die linke Seite der Infobox um den festgelegten Abstand von der linken Kante ihres nächsten positionierten Vorfahren entfernt ist. In diesem Fall entspricht der festgelegte Abstand der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint. Den `margin-left`-Wert setzen wir auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Abstand zu dem Anker hat, der gleich einem Viertel der Breite des Ankers ist.

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

Versuchen Sie, zum Anker zu springen oder ihn mit dem Mauszeiger zu überfahren und beachten Sie, wie sich die Position und der linke Abstand der Infobox im Verhältnis zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größe von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
