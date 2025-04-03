---
title: Verwendung von CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der ankerpositionierten Elemente kann dann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

CSS-Ankerpositionierung bietet auch reinen CSS-Mechanismen, um mehrere alternative Positionen für ein ankerpositioniertes Element anzugeben. Zum Beispiel, wenn ein Tooltip an ein Formularfeld angehängt ist, aber sonst außerhalb des Bildschirms in seinen Standardeinstellungen angezeigt werden würde, kann der Browser versuchen, ihn an einer anderen vorgeschlagenen Position zu rendern, damit er auf dem Bildschirm platziert wird, oder ihn alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf einer grundlegenden Ebene verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten diskutierte Konzept beigefügt. Informationen zur Angabe alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie unter [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr häufig, dass man ein Element an ein anderes binden möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um mehr Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die zum schnellen Konfigurieren von UI-Elementen aufgerufen werden können.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle wären relativ einfach zu erstellen, wenn das anzudockende Element (auch das **Ankerelement**) immer an derselben Stelle in der Benutzeroberfläche stehen und das angedockte Element (auch das **ankerpositionierte Element** oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Ordnungsfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Position von positionierten Elementen im Verhältnis zu ihrem Ankerelement muss beibehalten und angepasst werden, während sich das Ankerelement bewegt oder auf andere Weise die Konfiguration ändert (z. B. durch Scrollen, Ändern der Ansichtsgröße, Drag-and-Drop usw.). Zum Beispiel, wenn ein Element wie ein Formularfeld sich der Kante der Ansicht nähert, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie, dass der Tooltip mit seinem Formularsteuerelement verbunden ist und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Rechtsklickmenüs (<kbd>Strg</kbd> + Klick) auf Ihrem Desktop oder Laptop öffnen.

Historisch gesehen, erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was zu Komplexität und Leistungsproblemen führte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen das Implementieren solcher Anwendungsfälle leistungsfähig und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verbinden, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welches(n) positionierte Element(e) Sie mit diesem Anker assoziieren möchten. Dies erstellt eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mithilfe von CSS zu deklarieren, müssen Sie einen Ankernamen darauf festlegen, indem Sie die {{cssxref("anchor-name")}}-Eigenschaft verwenden. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element umzuwandeln, sind zwei Schritte erforderlich: Es muss absolut oder fixiert [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements festgelegt, um die beiden miteinander zu verbinden:

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

Wir werden das oben stehende CSS auf das folgende HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample("Nur CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind nun verbunden, aber für den Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verknüpft – wenn Sie den Anker positionieren und an eine andere Stelle auf der Seite verschieben würden, würde er sich allein bewegen und die Infobox an derselben Stelle belassen. Sie werden das eigentliche Verknüpfen in Aktion sehen, wenn wir [Elemente basierend auf der Ankerposition positionieren](#positionierung_von_elementen_relativ_zu_ihrem_anker).

### Implizite Ankerassoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen erstellt. Zum Beispiel wird bei der Verwendung der [Popover API](/de/docs/Web/API/Popover_API) zum Verbinden eines Popovers mit einer Steuerung eine implizite Ankerreferenz zwischen den beiden erstellt. Dies kann auftreten, wenn:

- Ein Popover deklarativ mit einer Steuerung verbunden wird, indem die Attribute [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) und [`id`](/de/docs/Web/HTML/Global_attributes/id) verwendet werden.
- Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmgesteuert mit einer Steuerung unter Verwendung der Option `source` verbunden wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker in die Funktionalität des [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den {{cssxref("appearance")}}-Eigenschaftswert `base-select` eingebunden wird. In diesem Fall wird eine implizite Popover-Initiator-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben beschriebenen Methoden verbinden einen Anker mit einem Element, aber sie sind noch nicht verknüpft. Um sie miteinander zu verknüpfen, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Verbinden eines positionierten Elements mit einem Anker alleine nicht wirklich nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem verbundenen Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen einer [CSS-`anchor()`-Funktion](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Einrückungseigenschaft")}}, [Angabe eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbares DOM-Element sein, damit die Assoziation und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir diskutieren, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, in [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Einrückungseigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fixiert positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Einrückungseigenschaften")}} gesetzt werden. Bei `position: absolute` ist dieser Einrückungswert eine absolute Entfernung relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Einrückungswert eine absolute Entfernung relativ zum Viewport.

CSS-Ankerpositionierung ändert dieses Paradigma, indem ankerpositionierte Elemente relativ zu den Kanten ihrer verbundenen Ankerelemente platziert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Einrückungseigenschaften ist. Wenn verwendet, setzt die Funktion den Einrückungswert als absolute Entfernung relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert wird.

Die Funktionskomponenten sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaftswert des Ankerelements, zu dessen Seite Sie das Element relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder der mit dem Element über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut verbunden ist.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Assoziation des Elements. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzelnen Anker verbunden.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Einrückungseigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einrückungseigenschaft auf der `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, das die Entfernung definiert, die als Fallback verwendet wird, wenn das Element nicht absolut oder fixiert positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Einrückungseigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf der Einrückungseigenschaft eines ankerpositionierten Elements setzen, wird es positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das auftritt, wenn der `<anchor-side>`-Wert inkompatibel mit der Einrückungseigenschaft ist, auf der er gesetzt ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Umschließungsblocks platzieren.

Die am häufigsten verwendeten `anchor()`-Parameter beziehen sich auf eine Seite des Standardankers. Sie werden auch oft entweder einen {{cssxref("margin")}} hinzufügen, um Abstand zwischen der Kante des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements und fügt dann einige `margin-left` hinzu, um einen Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, Sie können sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden. Diese Regel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockstartkante des Ankerelements entfernt und fügt den Abstand mit der `calc()`-Funktion hinzu, damit wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Sehen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, jedoch mit einigem Fülltext darunter und darüber, der den Inhalt über seinen Container hinausgehen und scrollen lässt. Wir geben auch dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker verbunden und erhält eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen Links-nach-rechts-Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) einschließen, haben wir es an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Werfen wir einen genaueren Blick auf die Positionierung der Einrückungseigenschaften:

- `inset-block-start: anchor(end)`: Dies setzt die Block-Startkante des positionierten Elements auf die Block-Endkante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Anker bei – es ist fest mit dem Ankerelement, nicht mit dem Viewport verbunden.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine alternative Möglichkeit zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft funktioniert nach dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in eine der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu verteilen.

![Das position-area-Raster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenentsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenentsprechungen wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [Umschließungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Umschließungsblock des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, wobei Spanning-Optionen verfügbar sind, um die Region des Rasters zu definieren, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Zum Beispiel:

- `top left` (logische Entsprechung `start start`) platziert das positionierte Element in der oberen linken Ecke.
- `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element in der unteren Mitte.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll und platziert es zunächst in der Mitte, und der andere spezifiziert die Menge dieser Spalte, die überspannt werden soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Zeile platziert wird und über die mittlere und linke Kachel dieser Zeile überspannt wird.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und über die mittlere und x-end Kacheln dieser Spalte überspannt wird.
- `block-end span-all` bewirkt, dass das positionierte Element in der Block-Endzeile platziert wird und über die inline-start, center und inline-end Kacheln dieser Zeile überspannt wird.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert gesetzt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left`, oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` ist. Zum Beispiel gibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel gibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` (also `center center`) gesetzt sind.

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Die Verwendung eines logischen Wertes zusammen mit einem physikalischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dieselben HTML- und Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und wird mit CSS mit dem Anker verbunden. Beim Laden wird sie auf `position-area: top;` eingestellt, was dazu führt, dass sie oben im position-area-Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Festlegen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Größe des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben die Größenangabe absichtlich weggelassen, um Ihnen das Verhalten zu zeigen, das dadurch entsteht.

Wenn ein positioniertes Element ohne explizite Größenangabe in `position-area`-Rasterzellen platziert wird, richtet es sich mit dem angegebenen Rasterbereich aus und verhält sich so, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird basierend auf der Größe seines [Umschließungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block), der Breite seines Inhalts, dimensioniert. Diese Größe wird durch das Setzen von `position: fixed` erzwungen. Autoskalierte absolute und fixierte positionierte Elemente werden automatisch skaliert und dehnen sich so weit aus, wie nötig, um den Textinhalt aufzunehmen, während sie durch die Kante des Viewports begrenzt werden. In diesem Fall, wenn sie auf der linken Seite des Rasters mit einem `left` oder `inline-start`-Wert platziert werden, wird der Text umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um der Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal zentriert ist, z. B. mit `position-area: bottom center`, wird es mit der angegebenen Rasterzelle ausgerichtet und die Breite wird die gleiche wie das Ankerelement sein. In diesem Fall ist seine minimale Höhe die Größe des Umschließungsblocks des Ankerelements. Es wird nicht überlaufen, da die `min-width` auf {{cssxref("min-content")}} festgelegt ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrierung auf dem Anker unter Verwendung von `anchor-center`

Obwohl Sie das ankerpositionierte Element mit den `center`-Werten der `position-area` zentrieren können, bieten Einrückungseigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Einrückungseigenschaften anstelle der `position-area` verwendet werden, um es zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern die einfache Ausrichtung von Elementen in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, zum Beispiel entlang der Haupt- oder Querachse im Fall von Flex-Elementen. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Mittelpunkt seines Standardankers ausrichtet.

Dieses Beispiel verwendet denselben HTML- und Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an der unteren Kante des Ankers festgemacht. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Mittelpunkt des Ankers zentriert ist:

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

Dies zentriert das ankerpositionierte Element am unteren Ende seines Ankers:

{{ EmbedLiveSample("Zentrierung auf dem Anker mit `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Ankergröße

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie auch dessen Größe relativ zur Größe seines Ankers mit der [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenwerts anpassen.

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

`anchor-size()`-Funktionen lösen sich zu {{cssxref("length")}}-Werten auf. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements festgelegt ist, auf dessen Größe Sie das Element relativ dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements, der Anker, auf den in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, auf dessen Größe das positionierte Element relativ dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fixiert positioniert ist oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()`-Funktionen beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewandte Größe zu ändern.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die inline-Größe des positionierten Elements auf das Vierfache der inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Lassen Sie uns ein Beispiel ansehen. Der HTML- und Basis-CSS sind gleich wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut erhalten hat, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird mit dem Anker in derselben Weise wie zuvor verbunden. Dieses Mal jedoch binden wir es an der rechten Seite des Ankers mit einer `position-area` und geben ihm eine Breite von fünfmal der Breite des Ankerbreiten:

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

Darüber hinaus erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, damit es animiert, wenn sich der Zustand ändert.

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

Bewegen Sie den Mauszeiger über das Ankerelement oder verwenden Sie die Tabulatortaste – das positionierte Element wächst, wenn der Anker wächst, wodurch gezeigt wird, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Größenanpassung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einrückungs- und Randeigenschaften verwenden. Die folgenden Abschnitte erforschen diese Verwendungen ausführlicher, bevor ein Anwendungsbeispiel geboten wird.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Werts einer {{Glossary("Inset_properties", "Einrückungseigenschaft")}} verwenden, um Elemente basierend auf der Größe des Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element ändert nicht seine Position, wenn sein Anker dies tut. Stattdessen wird das Element entsprechend den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Wenn beispielsweise Ihr Ankerelement sich nur vertikal bewegen kann und immer in der Nähe des Randes seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich die Breite des Ankers ändert.

### Festlegen des Rands eines Elements basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementränder basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie den Rand eines ankerpositionierten Elements immer gleich dem gleichen Prozentsatz der Breite des Ankerelements haben möchten, auch wenn sich die Breite ändert.

### `anchor-size()` Position- und Randbeispiel

Sehen wir uns ein Beispiel an, bei dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Größe des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} lange genug zu machen, um ein Scrollen zu erfordern, aber dies wurde der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zunächst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement verbunden. Wir setzen außerdem absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf den Anker und die Infobox und fügen eine {{cssxref("transition")}} auf den Anker ein, damit Breitenänderungen beim Zustandswechsel sanft animiert werden:

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

Jetzt zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn es überfahren oder fokussiert wird. Dann setzen wir die `top`-Wert der Infobox auf `anchor(top)`. Dies sorgt dafür, dass der obere Rand der Infobox immer in einer Linie mit dem oberen Rand des Ankers bleibt. Den `left`-Wert auf `anchor-size(width)`. Dies sorgt dafür, dass der linke Rand der Infobox, der angegebene Abstand vom linken Rand seines nächstgelegenen positionierten Vorfahren entfernt ist. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements und der nächstgelegene positionierte Vorläufer ist `<body>` Element, sodass die Infobox rechts vom Anker erscheint. Der `margin-left`-Wert wird auf `calc(anchor-size(width)/4)` gesetzt. Dies sorgt dafür, dass die Infobox immer einen linken Rand zwischen ihr und dem Anker hat, der gleich einem Viertel der Breite des Ankers ist.

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

{{EmbedLiveSample("Grundlegende `anchor-size()`-Verwendung", "100%", "240")}}

Versuchen Sie, den Anker zu fokussieren oder mit dem Mauszeiger darüber zu fahren und beachten Sie, wie sich die Position der Infobox und der linke Rand im Verhältnis zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
