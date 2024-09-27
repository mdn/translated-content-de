---
title: Verwenden von CSS-Anchor-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Das **CSS-Anchor-Positionierungs**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Anchorelemente** und **Anker-Positionierungselemente** definiert werden. Anker-Positionierungselemente können an Anchorelemente gebunden werden. Die Größe und Position der Anker-Positionierungselemente kann dann relativ zur Größe und Lage der gebundenen Anchorelemente festgelegt werden.

Die CSS-Anchor-Positionierung bietet außerdem CSS-eigene Mechanismen zur Angabe mehrerer alternativer Positionen für ein Anker-Positionierungselement. Wenn beispielsweise ein Tooltip an einem Formularfeld verankert ist, der Tooltip jedoch in seiner Standardposition außerhalb des Bildschirms gerendert würde, kann der Browser versuchen, ihn an einer anderen vorgeschlagenen Position zu rendern, damit er auf dem Bildschirm platziert wird, oder, alternativ, komplett verbergen, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Anchor-Positionierung und wie man die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten besprochenen Konzepte beigefügt. Informationen zu alternativen Positionen und zum Ausblenden von Anker-Positionierungselementen finden Sie unter [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr verbreitet, ein Element an ein anderes binden zu wollen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um mehr Informationen darüber zu bieten.
- Dialoge für Einstellungen oder Optionen, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder einem Button erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte — oft wiederverwendbar und dynamisch generiert — relativ zu einem Anchorelement platziert werden. Solche Anwendungsfälle wären recht einfach zu erstellen, wenn das Element, an das gebunden werden soll (auch bekannt als das **Anchorelement**), immer an derselben Stelle in der UI wäre und das gebundene Element (auch bekannt als das **Anker-Positionierungselement** oder einfach **Positionierungselement**) immer direkt vor oder nach ihm in der Quellordnung platziert werden könnte. So einfach ist es jedoch selten.

Die Lage der Positionierungselemente relativ zu ihrem Anchorelement muss beibehalten und angepasst werden, wenn sich das Anchorelement bewegt oder sich anderweitig konfiguriert (z.B. durch Scrollen, Änderung der Viewport-Größe, Drag & Drop, etc.). Beispielsweise, wenn sich ein Element wie ein Formularfeld der Kante des Viewports nähert, kann sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularsteuerelement binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, indem der Tooltip bei Bedarf automatisch verschoben wird. Dies haben Sie möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop per Rechtsklick (<kbd>Strg</kbd> + Klick) öffnen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen und das dynamische Ändern der Position und Größe eines Positionierungselements basierend auf der Position eines Ankers JavaScript, was Komplexität und Performance-Probleme verursachte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul definierten Funktionen ermöglichen solche Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript zu implementieren.

## Assoziation von Anker- und Positionierungselementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst angeben, welches Element der Anker ist, und dann festlegen, welches/welche Positionierungselement(e) mit diesem Anker assoziiert werden sollen. Dies kann über CSS oder über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) erfolgen.

### Nur-CSS-Methode

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie ihm über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die Breite des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Damit ein Element zu einem Anker-Positionierungselement wird, sind zwei Schritte erforderlich: Es muss absolut oder fest [positioniert](/de/docs/Learn/CSS/CSS_layout/Positioning) werden, indem die Eigenschaft {{cssxref("position")}} verwendet wird. Das Positionierungselement hat dann seine Eigenschaft {{cssxref("position-anchor")}} auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verbinden:

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

Wir werden das obige CSS auf das folgende HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind nun verbunden, aber im Moment müssen Sie uns in dieser Hinsicht vertrauen. Sie sind noch nicht aneinander gebunden - wenn Sie den Anker verschieben und ihn an eine andere Stelle auf der Seite bewegen, würde er sich alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden die tatsächliche Verankerung in Aktion sehen, wenn wir uns die [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### HTML-Methode

Um ein Positionierungselement in HTML mit einem Anker zu verbinden, können Sie das Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) verwenden. Sie müssen dem Ankerelement eine [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Danach wird das `anchor` Attribut auf dem Anker-Positionierungselement gesetzt, mit einem Wert, der der `id` des Ankerelements entspricht, mit dem Sie es verbinden möchten.

Dies haben wir im folgenden HTML getan:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

Elemente müssen absolut oder fest positioniert sein, um mit Ankern verbunden zu werden, daher geben wir der Infobox einen `position`-Wert von `fixed`:

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

Dies gibt uns dasselbe Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein Positionierungselement mit einem Ankerelement verbunden, indem wir das `anchor`-Attribut auf dem Positionierungselement anstelle der `anchor-name`-Eigenschaft des Ankerelements und der `position-anchor`-Eigenschaft des Positionierungselements verwendet haben.

{{ EmbedLiveSample("HTML-Methode", "100%", "120") }}

> [!NOTE]
> Das Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) hat derzeit weniger Unterstützung als das entsprechende CSS. Weitere Informationen finden Sie in der [`anchor`-Attributkompatibilitätstabelle](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility).

Wir haben die beiden Elemente verbunden, aber sie sind noch nicht verankert. Um sie zusammen zu verankern, muss das Positionierungselement relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Verbinden eines Positionierungselements mit einem Anker für sich genommen nicht wirklich sinnvoll. Unser Ziel ist es, das Positionierungselement relativ zu seinem verbundenen Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values)-Werts auf einer [Einfüge-Eigenschaft](/de/docs/Glossary/Inset_properties), [Angeben eines `position-area`](#setting_a_position-area) oder Zentrieren des Positionierungselements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Zuordnung und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das Positionierungselement relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie man ein Anker-Positionierungselement ausblendet, wenn sein Anker verschwindet in [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Einfüge-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf [Einfüge-Eigenschaften](/de/docs/Glossary/inset_properties) gesetzt werden. Bei `position: absolute` ist dieser Einsatztwert eine absolute Entfernung relativ zu den Kanten des nächsten positionierten Vorfahren. Bei `position: fixed` ist der Einsatztwert eine absolute Entfernung vom Viewport.

Die CSS-Anchor-Positionierung ändert dieses Paradigma und ermöglicht es, Anker-Positionierungselemente relativ zu den Kanten ihrer verbundenen Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Einfüge-Eigenschaften ist. Bei Verwendung setzt die Funktion den Einsatztwert als absolute Entfernung relativ zum Ankerelement, indem das Ankerelement definiert, die Seite des Ankerelements, zu der das Positionierungselement positioniert wird, sowie die Entfernung von dieser Seite.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-element> <anchor-side>, <fallback>)
```

- `<anchor-element>`

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements, zu dem die Seite des Elements positioniert werden soll. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder in HTML durch das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut assoziiert ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-element>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Nur die `position-anchor`-Eigenschaft und `anchor`-Attribute erstellen die Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem unterschiedliche `<anchor-element>`-Werte in verschiedene `anchor()`-Funktionen auf demselben Element angegeben werden, ist das Positionierungselement nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte beinhalten das `center` des Ankers, physikalische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Anfang (`0%`) und dem Ende (`100%`) der Achse der Einfüge-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfüge-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, der die Entfernung definiert, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist, der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Einfüge-Eigenschaft ist, auf der sie gesetzt ist oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf einer Einfüge-Eigenschaft eines Anker-Positionierungselements setzen, wird es positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert inkompatibel mit der Einfüge-Eigenschaft ist, auf der er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das Positionierungselement `50px` über der Unterseite des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des ursprünglichen Kontainenblocks platzieren.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden oft entweder eine {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem Positionierungselement zu erstellen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel den rechten Rand des Positionierungselements bündig mit dem linken Rand des Ankerelements und fügt dann etwas `margin-left` hinzu, um den Abstand zwischen den Rändern zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert den logischen Block-Endrand des Positionierungselements `10px` vom logischen Block-Start-Rand des Ankerelements, indem der Abstand mithilfe der `calc()`-Funktion hinzugefügt wird, sodass wir keine Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel für das `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, jedoch mit etwas Fülltext, der unten und oben platziert wird, um den Inhalt zu überlaufen und zu scrollen zu bringen. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker verbunden und hat eine feste Positionierung. Durch Einfügen der Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} (die äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} in horizontalen Links-nach-Rechts-Schreibmodi sind) haben wir es an den Anker gefesselt. Wir fügen der Infobox einen `margin` hinzu, um den Abstand zwischen dem Positionierungselement und seinem Anker zu vergrößern:

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

Betrachten wir die Einfüge-Eigenschaftspositionierungs-Deklarationen detaillierter:

- `inset-block-start: anchor(end)`: Dies setzt den Blockstart-Rand des Positionierungselements zum Blockendrand des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Inlinestart-Rand des Positionierungselements zum Inlineendrand des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies gibt uns das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das Positionierungselement ist `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das Positionierungselement seine Position relativ zum Ankerelement bei - es ist an das Ankerelement gebunden, nicht an den Viewport.

### Einstellen eines `position-area`

Die Eigenschaft {{cssxref("position-area")}} bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft arbeitet am Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das Anker-Positionierungselement in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln hinweg zu spannen.

![Das position-area Raster, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Zeilen und Spalten aufgeteilt:

- Die drei Zeilen werden durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [Kontext-Container](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Kontext-Container des Positionierungselements definiert wird.

Die `position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit zusätzlichen Spannoptionen zur Definition des Bereichs des Rasters, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das Positionierungselement in einem bestimmten Rasterbereich zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das Positionierungselement im oberen linken Quadrat.
- `bottom center` (logisches Äquivalent `end center`) platziert das Positionierungselement im unteren mittleren Quadrat.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in der das Positionierungselement platziert werden soll, wobei es zunächst in der Mitte platziert wird, und der andere gibt an, wie viel dieser Spalte ausgeweitet werden soll. Zum Beispiel:

- `top span-left` bewirkt, dass das Positionierungselement in der oberen Reihe platziert und über die mittlere und linke Kacheln dieser Reihe ausgeweitet wird.
- `y-end span-x-end` bewirkt, dass das Positionierungselement am Ende der y-Spalte platziert und über die mittlere und x-end Kacheln dieser Spalte ausgeweitet wird.
- `block-end span-all` bewirkt, dass das Positionierungselement in der Blockendreihe platziert und über die inline-start, Mitte und inline-end Kacheln dieser Reihe ausgeweitet wird.

Wenn Sie nur einen Wert angeben, unterscheidet sich die Wirkung je nachdem, welcher Wert gesetzt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als wäre der andere Wert `span-all`. Zum Beispiel ergibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als wäre der andere Wert auf denselben Wert gesetzt; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt, als wären beide Werte auf `center` gesetzt (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physikalischen Wert wird die Deklaration ungültig machen.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und die gleichen Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um die Änderung des `position-area`-Werts des Positionierungselements zu ermöglichen.

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

Die Infobox erhält eine feste Positionierung und ist mit dem Anker über CSS verbunden. Sie wird beim Laden auf `position-area: top;` gesetzt, wodurch sie oben im position-area Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

{{ EmbedLiveSample("Einstellung eines `position-area`", "100%", "250") }}

### Breite des Positionierungselements

Im obigen Beispiel haben wir das Positionierungselement in keiner Dimension explizit dimensioniert. Wir haben die Größenangabe absichtlich weggelassen, damit Sie das Verhalten beobachten können, das dies verursacht.

Wenn ein Positionierungselement ohne explizite Größenangabe in `position-area` Rasterzellen platziert wird, richtet es sich an dem beschriebenen Rasterbereich aus und verhält sich so, als ob die {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird entsprechend der Größe seines [Kontext-Containers](/de/docs/Web/CSS/Containing_block) dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie es nötig ist, um den Textinhalt zu passen, während sie durch die Ränder des Viewports eingeschränkt werden. In diesem Fall umbricht der Text, wenn das verankerte Element auf der linken Seite des Rasters mit einem `left` oder `inline-start` Wert platziert wird. Wenn die `max-content` Größe des verankerten Elements schmaler oder kürzer ist als sein Anker, vergrößern sie sich nicht, um die Größe des Ankers zu erreichen.

Wenn das Positionierungselement vertikal zentriert ist, wie bei `position-area: bottom center`, richtet es sich an der angegebenen Rasterzelle aus und seine Breite ist dieselbe wie die des Ankerelements. In diesem Fall ist seine Mindesthöhe die Blockgrößedes Ankerelements. Es wird nicht überlaufen, da die `min-width` auf {{cssxref("min-content")}} eingestellt ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das Anker-Positionierungselement mit `position-area`-Werten zentrieren können, bieten Einfüge-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Anchor-Positionierung bietet eine Möglichkeit, ein Anker-Positionierungselement relativ zu seinem Anker zu zentrieren, wenn Einfüge-Eigenschaften anstelle von `position-area` verwendet werden, um es zu binden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands) existieren, um Entwicklern zu ermöglichen, Elemente leicht entlang der Inline- oder Blockrichtung in verschiedenen Layoutsystemen zu arrangieren, zum Beispiel entlang der Haupt- oder Kreuzachse im Fall von Flex-Kindern. Die CSS-Anchor-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein Positionierungselement mit dem Mittelpunkt seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die gleichen Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an der Unterkante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf der Mitte des Ankers zentriert wird:

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

Dies zentriert das Anker-Positionierungselement an der Unterseite seines Ankers:

{{ EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Ankergröße

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie auch ein Element relativ zur Größe seines Ankers mit der [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenwerteigenschaftswerts dimensionieren.

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

`anchor-size()`-Funktionen lösen sich zu {{cssxref("length")}}-Werten auf. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-element> <anchor-size>, <length-percentage>)
```

- `<anchor-element>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt wurde, auf das sich die Größe des Elements beziehen soll. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert ist.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, auf die das Positionierungselement relativ dimensioniert wird. Dies kann durch physikalische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline` oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das Positionierungselement angewendete Größe zu ändern.

Zum Beispiel dimensioniert diese Regel die Breite des Positionierungselements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inlinegröße des Positionierungselements auf das 4-fache der Inlinegröße des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut zugewiesen wird, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird auf die gleiche Weise wie zuvor mit dem Anker verbunden. Diesmal fixieren wir es an der rechten Seite des Ankers mithilfe einer `position-area` und geben ihm eine Breite, die das Fünffache der Breite des Ankers beträgt:

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

Zusätzlich erhöhen wir die {{cssxref("breite")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder navigieren Sie mit der Tabulatortaste dorthin — das Positionierungselement wächst, während der Anker wächst, was zeigt, dass die Größe des Anker-Positionierungselements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Größenanpassung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Siehe auch

- [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Größenanpassung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
