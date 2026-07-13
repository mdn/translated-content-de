---
title: Verwendung der CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: a0b748b391f3ed7e6ef38e8eda3ecaa9efced926
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, mit denen Sie Elemente miteinander verbinden können. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der ankerpositionierten Elemente kann dann relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, festgelegt werden.

Die CSS-Ankerpositionierung bietet auch Mechanismen, die es erlauben, für ein ankerpositioniertes Element mehrere alternative Positionen anzugeben. Zum Beispiel kann ein Tooltip an ein Formularelement angehängt sein, aber in seiner Standardpositionierung außerhalb des Bildschirms dargestellt werden. Der Browser kann dann versuchen, es in einer anderen vorgeschlagenen Position zu rendern, damit es auf dem Bildschirm angezeigt wird, oder es alternativ ganz ausblenden.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Funktionen des Moduls zur Assoziation, Positionierung und Größenbestimmung auf einem grundlegenden Niveau nutzen können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten behandelte Konzept eingefügt. Weitere Informationen zum Angeben alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr häufig, dass man ein Element an ein anderes binden möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um weitere Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder einem Button erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte — oft wiederverwendbar und dynamisch generiert — relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle wären ziemlich einfach zu realisieren, wenn das Element, an das gebunden werden soll (das sogenannte **Ankerelement**), immer an der gleichen Stelle in der UI wäre und das gebundene Element (das sogenannte **ankerpositionierte Element**, oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Quelldatei platziert werden könnte. Aber so einfach ist es selten.

Die Position von positionierten Elementen relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder auf andere Weise konfiguriert wird (z. B. durch Scrollen, Ändern der Viewport-Größe, Drag & Drop usw.). Zum Beispiel, wenn ein Element wie ein Formularelement nah an den Rand des Viewports kommt, könnte sein Tooltip außerhalb des Bildschirms landen. Generell möchte man den Tooltip an das zugehörige Formularelement binden und sicherstellen, dass der Tooltip so lange vollständig sichtbar auf dem Bildschirm bleibt, wie das Formularelement sichtbar ist, indem der Tooltip bei Bedarf automatisch verschoben wird. Vielleicht haben Sie dieses Verhalten als Standard in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs per Rechtsklick (<kbd>Strg</kbd> + Klick) auf Ihrem Desktop oder Laptop öffnen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript. Das führte zu Komplexität und Leistungsproblemen und funktionierte nicht in allen Situationen zuverlässig. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen die Umsetzung solcher Anwendungsfälle effizient und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Assoziierung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst das Element als Anker deklarieren und dann angeben, welche positionierten Elemente mit diesem Anker verknüpft werden sollen. Dies schafft eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit geschaffen werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie ihm einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erstellen, der den Verankerungseffekt besser demonstriert.

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

Ein Element in ein ankerpositioniertes Element umzuwandeln erfordert zwei Schritte: Es muss absolut oder fixiert [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden zu verbinden:

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

Das wird wie folgt dargestellt:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verbunden — wenn Sie den Anker positionieren und an eine andere Stelle der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an der gleichen Stelle lassen. Sie werden das tatsächliche Tethering in Aktion sehen, wenn wir uns [Elemente basierend auf der Ankerposition positionieren](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### Implizite Ankerassoziation

In einigen Fällen wird eine implizite Ankerreferenz zwischen zwei Elementen hergestellt, aufgrund der semantischen Natur ihrer Beziehung:

- Wenn das [Popover API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einem Steuerelement zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann auftreten, wenn:
  - Ein Popover mit einem Steuerelement deklariert wird, indem die [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute oder die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` Attribute verwendet werden.
  - Programmgesteuert eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einem Steuerelement unter Verwendung der `source`-Option verknüpft wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker werden in die Funktionalität des [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft `base-select` aufgenommen. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS gemacht wird.

### Entfernen einer Ankerassoziation

Wenn Sie eine zuvor hergestellte explizite Ankerassoziation zwischen einem Ankerelement und einem positionierten Element entfernen möchten, können Sie eines der folgenden tun:

1. Setzen Sie den Wert der `anchor-name`-Eigenschaft des Ankers auf `none`, oder auf ein anderes `<dashed-ident>`, wenn Sie ein anderes Element daran binden möchten.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf `none`, oder auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`.

Im Falle impliziter Ankerassoziationen müssen Sie die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies liegt daran, dass die Assoziation intern gesteuert wird und Sie den `anchor-name` über CSS nicht entfernen können.

Zum Beispiel könnten Sie mit der folgenden Regel verhindern, dass der Picker eines anpassbaren `<select>`-Elements an das `<select>`-Element selbst gebunden wird:

```css
::picker(select) {
  position-anchor: none;
}
```

## Ankerbereich

Wenn mehreren Ankerelementen derselbe {{cssxref("anchor-name")}}-Wert zugewiesen wird und ein positioniertes Element diesen Namen als Wert seiner {{cssxref("position-anchor")}}-Eigenschaft hat, wird das positionierte Element mit dem _letzten_ Ankerelement in der Reihenfolge der Quelle mit diesem `anchor-name`-Wert assoziiert.

Zum Beispiel, wenn ein Dokument mehrere wiederholte Komponenten enthält, von denen jede ein positioniertes Element hat, das an einem Anker befestigt ist, werden alle positionierten Elemente an den letzten Anker auf der Seite gebunden, es sei denn, jede Komponente verwendet einen anderen Ankernamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die {{cssxref("anchor-scope")}}-Eigenschaft kann dieses Problem beheben, indem die Sichtbarkeit, oder der "Bereich", eines `anchor-name`-Wertes auf einen bestimmten Teilbaum beschränkt wird. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Teilbaums gebunden werden kann, in dessen Element der Bereich gesetzt ist.

- `anchor-scope: all` setzt den Bereich so, dass _alle_ `anchor-name`-Werte, die im Teilbaum gesetzt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können.
- `anchor-scope: --my-anchor, --my-anchor2` setzt den Bereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum gesetzt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können.
- `anchor-scope: none` ist der Standardwert; er gibt an, dass kein Ankerbereich gesetzt ist.

Zum Beispiel, stellen Sie sich vor, Sie haben mehrere Anker und ankerpositionierte {{htmlelement("div")}}-Elemente innerhalb von {{htmlelement("section")}} Containern:

```html live-sample___anchor-scope
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 2</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 3</div>
</section>
```

Wir verwandeln jedes `anchor`-`<div>` in ein Ankerelement, indem wir ihnen einen `anchor-name` von `--my-anchor` geben. Wir positionieren dann jedes `positioned` `<div>` relativ zu einem Element mit dem `--my-anchor`-Ankernamen, indem wir ihnen eine absolute Positionierung geben, einen `position-anchor`-Wert von `--my-anchor` und einen {{cssxref("position-area")}}-Wert von `right`. Schließlich setzen wir den Ankerbereich jedes `<section>`-Containers mit `anchor-scope: --my-anchor`:

```css hidden live-sample___anchor-scope
html {
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.scoped {
  padding: 20px;
  background: #eeeeee;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___anchor-scope
.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}

.scoped {
  anchor-scope: --my-anchor;
}
```

Dies führt zu folgendem Positionierungsverhalten:

{{ EmbedLiveSample("anchor-scope", "100%", "150") }}

Jedes positionierte Element wird relativ zum Anker innerhalb desselben `<section>`-Elements positioniert. Dies liegt daran, dass jedes `<section>`-Element einen `anchor-scope` von `--my-anchor` auf sich gesetzt hat; positionierte Elemente innerhalb jedes beschränkten Containers können daher nur relativ zu `my-anchor` Ankern innerhalb desselben Containers positioniert werden.

Wenn wir `anchor-scope: --my-anchor` nicht auf den Containern gesetzt hätten, würden alle positionierten Elemente relativ zum letzten Anker auf der Seite positioniert werden.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir bereits gesehen haben, ist die Assoziation eines positionierten Elements mit einem Anker alleine nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies wird entweder durch Festlegen eines [CSS `anchor()`-Functions](#using_inset_properties_with_anchor_function_values)-Wertes auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, durch [Festlegung eines `position-area`](#setting_a_position-area) oder durch Zentrierung des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center) erreicht.

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zum Spezifizieren von Fallback-Positionen, wenn die Standardposition des positionierten Elements dazu führt, dass es über den Bildschirmrand hinausgeht. Siehe den [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) für Details.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir diskutieren, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet im [Bedingten Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fixiert positionierte Elemente werden durch Festlegen von {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} explizit positioniert. Mit `position: absolute` ist dieser Inset-Positionswert eine absolute Entfernung relativ zu den Kanten des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert eine absolute Entfernung relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer zugehörigen Ankerpositionieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Wenn sie verwendet wird, setzt die Funktion den Inset-Positionswert als absolute Entfernung relativ zum Ankerelement, indem sie das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und die Entfernung von dieser Seite definiert.

Die Komponenten der Funktion sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner {{cssxref("position-anchor")}}-Eigenschaft referenziert wird oder mit dem Element über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut verknüpft ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Obwohl Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf dasselbe Element spezifizieren, ist das positionierte Element nur mit einem einzelnen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder mehreren Seiten des Ankers an. Gültige Werte sind das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers, oder ein `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse, auf der die Inset-Eigenschaft `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) zu der Inset-Eigenschaft ist, auf der die Funktion `anchor()` gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Eine {{cssxref("length-percentage")}}, die die Entfernung angibt, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fixiert positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist, kompatibel ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie direkt auf eine Inset-Eigenschaft eines ankerpositionierten Elements eine Länge oder einen Prozentsatz setzen, wird es positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das beobachtet wird, wenn der `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der er gesetzt ist, nicht kompatibel ist und der Fallback-Wert verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des anfänglichen umgebenden Blocks.

Der häufigste `anchor()`-Parameter, den Sie verwenden werden, bezieht sich auf eine Seite des Standardankers. Sie werden auch häufig entweder eine {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Beispielsweise positioniert diese Regel die linke Kante des positionierten Elements bündig zur rechten Kante des Ankerelements, und fügt dann etwas `margin-left` hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  left: anchor(right);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt, indem der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keine Marge hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben die gleichen HTML-Strukturen wie in den vorherigen Beispielen verwendet, aber mit Fülltext darunter und darüber, um den Inhalt über den Container hinaus überlaufen zu lassen und zu scrollen. Wir geben auch dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox wird über den Ankernamen mit dem Anker verbunden und fixiert positioniert. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften hinzufügen (die äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} in horizontalen Links-nach-Rechts-Schreibmodi sind), haben wir sie an den Anker gefesselt. Wir fügen der Infobox eine `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Deklarationen zur Positionierung von Inset-Eigenschaften genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die Block-Startkante des positionierten Elements an die Blocks-Endkante des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements an die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement in Position — es ist fest am Ankerelement verankert, nicht am Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft arbeitet nach dem Konzept eines 3x3 Rasters mit Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenentsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenentsprechungen wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den umgebenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Spannungsoptionen, um den Bereich des Rasters, in dem das Element positioniert werden soll, zu definieren.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrat zu platzieren. Zum Beispiel:

- `top left` (logische Entsprechung `start start`) platziert das positionierte Element in der oberen linken Ecke.
- `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element in der unteren mittleren Ecke.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, wobei es initial in der Mitte platziert wird, und der andere gibt die Spanne dieser Spalte an. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert wird und sich über die mittlere und linke Kachel dieser Reihe spannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und sich über die mittlere und x-end-Kacheln dieser Spalte erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in der block-Endreihe platziert wird und sich über die inline-start, center und inline-end Kacheln dieser Reihe erstreckt.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert festgelegt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` wäre. Zum Beispiel hat `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt wäre; zum Beispiel hat `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet die gleichen HTML- und Basis-CSS-Styles wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um die Veränderung des `position-area`-Wertes des positionierten Elements zu ermöglichen.

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

Die Infobox erhält eine fixe Positionierung und wird über CSS mit dem Anker assoziiert. Beim Laden wird sie mit `position-area: top;` auf den Anker verankert, was dazu führt, dass sie oben im position-area-Raster positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um die Wirkung zu sehen, die sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Festlegen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben die Anpassung absichtlich weggelassen, um Ihnen das Verhalten zu demonstrieren, das dadurch verursacht wird.

Wenn ein positioniertes Element in `position-area`-Rasterzellen ohne explizite Dimensionierung platziert wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird gemäß der Größe seines [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fixiert positionierte Elemente werden automatisch dimensioniert und strecken sich so weit, wie nötig, um den Textinhalt zu passen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall wird, wenn das Element auf der linken Seite des Rasters mit einem `left` oder `inline-start`-Wert platziert wird, der Text umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer ist als sein Anker, wachsen sie nicht, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, z. B. mit `position-area: bottom center`, wird es mit der angegebenen Rasterzelle ausgerichtet und die Breite wird die gleiche wie die des Ankerelements sein. In diesem Fall ist seine Mindesthöhe die Größe des umgebenden Blocks des Ankerelements. Es wird nicht überlaufen, da die Mindestbreite {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie das längste Wort ist.

## Zentrierung am Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften kombiniert mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern das einfache Ausrichten von Elementen in der Inline- oder Block-Richtung in verschiedenen Layout-Systemen zu ermöglichen, zum Beispiel entlang der Haupt- oder Querachse im Fall von flexiblen Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Mittelpunkt seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und die gleiche Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine fixe Positionierung und wird an die Unterkante des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf den Mittelpunkt des Ankers zentriert ist:

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

Dies zentriert das ankerpositionierte Element am unteren Rand seines Ankers:

{{ EmbedLiveSample("Zentrierung am Anker mit `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mit der [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Dimensionswerts verändern.

Dimensions-Eigenschaften, die einen `anchor-size()`-Wert akzeptieren, umfassen:

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

`anchor-size()`-Funktionen lösen sich in {{cssxref("length")}}-Werte auf. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der {{cssxref("anchor-name")}}-Eigenschaft des Ankerelements gesetzt ist, das Sie zur Dimensionierung des Elements relativ verwenden möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der Anker, der in der {{cssxref("position-anchor")}}-Eigenschaft referenziert ist.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die zu verwendende Größe als Fallback-Wert an, wenn das Element nicht absolut oder fixiert positioniert ist, oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewandte Größe zu modifizieren.

Zum Beispiel, diese Regel dimensioniert die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Dimension des positionierten Elements auf das Vierfache der Inline-Dimension des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Lassen Sie uns ein Beispiel betrachten. Das HTML und die Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut erhält, um es fokussierbar zu machen. Die Infobox erhält fixe Positionierung und wird in der gleichen Weise mit dem Anker verbunden wie zuvor. Allerdings verankern wir sie diesmal an der rechten Seite des Ankers mit einer `position-area` und geben ihr eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder tabben Sie darauf — das positionierte Element wächst, wenn der Anker wächst, was zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Dimensionierung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte untersuchen diese Verwendungen im Detail, bevor ein Anwendungsbeispiel bereitgestellt wird.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Inset-Eigenschaftswertes verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft dies tun (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element ändert seine Position nicht, wenn sein Anker es tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement sich nur vertikal bewegen kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer direkt rechts von seinem Anker zu positionieren, selbst wenn sich die Breite des Ankers ändert.

### Festlegen der Elementmarge basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines `margin-*` Eigenschaftswertes verwenden, um Elementränder basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie möchten, dass der Rand eines ankerpositionierten Elements immer gleich dem gleichen Prozentsatz der Breite des Ankerelements ist, auch wenn sich die Breite ändert.

### `anchor-size()`-Position und -Margenbeispiel

Lassen Sie uns ein Beispiel betrachten, in dem wir die Ränder und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, so dass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde um der Übersichtlichkeit willen ausgeblendet.

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

Im CSS deklarieren wir zunächst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen für den Anker und die Infobox und fügen dem Anker eine {{cssxref("transition")}} hinzu, damit Größenänderungen bei einem Zustandswechsel sanft animiert werden:

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

Nun zum interessantesten Teil. Hier setzen wir die `width` des Ankers auf `300px`, wenn er gehovt oder fokussiert wird. Dann setzen wir die:

- `top`-Wert der Infobox auf `anchor(top)`. Dadurch bleibt die Oberkante der Infobox immer in Übereinstimmung mit der Oberkante des Ankers.
- `left`-Wert der Infobox auf `anchor-size(width)`. Dadurch wird die linke Seite der Infobox in der angegebenen Entfernung vom linken Rand ihres nächsten positionierten Vorfahren positioniert. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left`-Wert der Infobox auf `calc(anchor-size(width)/4)`. Dadurch hat die Infobox immer einen linken Rand, der sie und den Anker trennt, gleich einem Viertel der Breite des Ankers.

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

Das renderte Ergebnis ist wie folgt:

{{EmbedLiveSample("Grundlegende `anchor-size()`-Verwendung", "100%", "240")}}

Versuchen Sie, den Anker zu tabben oder mit dem Mauspfeil darüber zu fahren und beachten Sie, wie sich die Position und der linke Rand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logisch basierte Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
