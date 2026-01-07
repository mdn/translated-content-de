---
title: Verwenden der CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 8300697ca75ca1e77175912110d4fe9ef48cb0bb
---

Das **CSS-Ankerpositionierungs**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **Anker-positionierte Elemente** definiert werden. Anker-positionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der Anker-positionierten Elemente kann dann relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Die CSS-Ankerpositionierung bietet außerdem Mechanismen ausschließlich in CSS, um mehrere alternative Positionen für ein Anker-positioniertes Element anzugeben. Zum Beispiel, wenn ein Tooltip an ein Formularfeld gebunden ist, aber andernfalls in seiner Standardposition außerhalb des Bildschirms angezeigt würde, kann der Browser versuchen, es an einer anderen vorgeschlagenen Position zu rendern, damit es auf dem Bildschirm platziert wird, oder es alternativ ganz auszublenden, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Ankerpositionierungskonzepte und wie das Modul zur Assoziation, Positionierung und Größenanpassung auf grundlegender Ebene verwendet werden kann. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes diskutierte Konzept beigefügt. Informationen zum Angeben alternativer Positionen und Ausblenden von Anker-positionierten Elementen finden Sie im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes binden oder anheften zu wollen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen angezeigt werden.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um mehr Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder einem Button erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass ein Inhalt — oft wiederverwendbar und dynamisch generiert — relativ zu einem Ankerelement positioniert wird. Solche Anwendungsfälle zu erstellen wäre relativ einfach, wenn das zu befestigende Element (auch bekannt als das **Ankerelement**) immer an der gleichen Stelle in der Benutzeroberfläche ist und das befestigte Element (auch bekannt als **Anker-positioniertes Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings ist das selten so einfach.

Die Position von positionierten Elementen relativ zu ihrem Ankerelement muss erhalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig geändert wird (z. B. durch Scrollen, Ändern der Viewport-Größe, Drag-and-Drop, etc.). Wenn sich zum Beispiel ein Element wie ein Formularfeld nahe an den Rand des Viewports bewegt, könnte sein Tooltip außerhalb des Bildschirms enden. Generell möchte man, dass der Tooltip an sein Formularsteuerelement gebunden bleibt und sicherstellt, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, wobei der Tooltip bei Bedarf automatisch verschoben wird. Sie haben dies möglicherweise als das Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie mit der rechten Maustaste (<kbd>Strg</kbd> + Klick) Kontextmenüs auf Ihrem Desktop oder Laptop aufrufen.

Historisch bedeutete die Assoziation eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul definierten Eigenschaften ermöglichen die Implementierung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zunächst deklarieren, welches Element der Anker ist, und dann angeben, welche positionierten Elemente mit diesem Anker assoziiert werden sollen. Dadurch wird eine Ankerreferenz zwischen den beiden erstellt. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie ihm über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um ein kleines quadratisches Ankre zu erhalten, das den Ankereffekt besser demonstriert.

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

Um ein Element in ein Anker-positioniertes Element umzuwandeln, sind zwei Schritte erforderlich: Es muss absolut oder fixiert [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) mithilfe der {{cssxref("position")}}-Eigenschaft sein. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden zusammenzubringen:

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns bei diesem Punkt vertrauen. Sie sind noch nicht aneinander gebunden — wenn Sie den Anker positionieren und ihn woanders auf der Seite bewegen würden, würde er sich allein bewegen und die Infobox an derselben Stelle belassen. Sie werden das eigentliche Anbinden in Aktion sehen, wenn wir uns die [Positionierung von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) anschauen.

### Implizite Ankerassoziation

In einigen Fällen wird eine implizite Ankerreferenz zwischen zwei Elementen aufgrund ihrer semantischen Beziehung hergestellt:

- Bei der Verwendung der [Popover API](/de/docs/Web/API/Popover_API), um ein Popover mit einem Steuerelement zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann geschehen, wenn:
  - Ein Popover deklarativ mit einem Steuerelement verknüpft wird, das die Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` verwendet.
  - Ein Popover-Action wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmatisch mit einem Steuerelement assoziiert wird, das die `source`-Option verwendet.
- Ein {{htmlelement("select")}}-Element und dessen Dropdown-Auswahl sind in die Funktionalität des [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` eingebunden. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben werden.

> [!HINWEIS]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht miteinander verbunden. Um sie zusammenzubinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS gemacht wird.

### Entfernen einer Ankerassoziation

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerassoziation entfernen möchten, können Sie eines der folgenden Dinge tun:

1. Setzen Sie den `anchor-name`-Eigenschaftswert des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn Sie ein anderes Element mit ihm verankern möchten.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf `none` oder auf einen Ankernamen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`.

Im Falle von impliziten Ankerassoziationen müssen Sie die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies ist der Fall, weil die Assoziation intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Zum Beispiel, um das Auswahl-Element `<select>`-Picker davon abzuhalten, an das `<select>`-Element selbst verankert zu sein, könnten Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: none;
}
```

## Anker-Scope

Wenn mehreren Ankerelementen derselbe {{cssxref("anchor-name")}}-Wert gegeben wird und ein positioniertes Element diesen Namen als {{cssxref("position-anchor")}}-Eigenschaftswert hat, wird das positionierte Element mit dem _letzten_ Ankerelement in der Quellreihenfolge mit diesem `anchor-name`-Wert assoziiert.

Zum Beispiel, wenn ein Dokument mehrere wiederholte Komponenten enthält, von denen jede ein positioniertes Element hat, das an einen Anker gebunden ist, werden alle positionierten Elemente an den letzten Anker auf der Seite gebunden, es sei denn, jede Komponente verwendet einen anderen Ankernamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die {{cssxref("anchor-scope")}}-Eigenschaft kann dieses Problem beheben, indem sie die Sichtbarkeit oder den "Geltungsbereich" eines `anchor-name`-Werts auf einen bestimmten Teilbaum begrenzt. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Teilbaums der Elemente gebunden werden kann, der den Geltungsbereich auf sich gesetzt hat.

- `anchor-scope: all` setzt den Bereich so, dass _jede_ `anchor-name`-Werte, die im Teilbaum gesetzt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können.
- `anchor-scope: --my-anchor, --my-anchor2` setzt den Bereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum gesetzt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können.
- `anchor-scope: none` ist der Standardwert; er spezifiziert, dass kein Anker-Scope gesetzt ist.

Zum Beispiel, nehmen wir an, Sie haben mehrere Anker- und Anker-positionierte {{htmlelement("div")}}-Elemente innerhalb von {{htmlelement("section")}}-Containern:

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

Wir verwandeln jedes `anchor`-`<div>`-Element in ein Ankerelement, indem wir ihnen einen `anchor-name` von `--my-anchor` geben. Dann positionieren wir jedes `positioned`-`<div>`-Element relativ zu einem Element mit dem Ankernamen `--my-anchor`, indem wir ihnen eine absolute Positionierung, einen `position-anchor`-Wert von `--my-anchor` und einen {{cssxref("position-area")}}-Wert von `right` geben. Schließlich setzen wir den Anker-Scope für jeden `<section>`-Container mit `anchor-scope: --my-anchor`:

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
  background: #eee;
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

Jedes positionierte Element wird relativ zu dem Anker innerhalb desselben `<section>`-Elements positioniert. Dies ist, weil jedes `<section>`-Element ein `anchor-scope` von `--my-anchor` hat; positionierte Elemente innerhalb jedes festgelegten Containers können daher nur relativ zu den `my-anchor`-Ankern innerhalb desselben Containers positioniert werden.

Wenn wir nicht `anchor-scope: --my-anchor` auf den Containern gesetzt hätten, würden alle positionierten Elemente relativ zum letzten Anker auf der Seite positioniert werden.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir bereits gesehen haben, ist die Assoziation eines positionierten Elements mit einem Anker an sich nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies wird entweder durch das Setzen eines [CSS `anchor()`-Funktionswertes](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, durch das [Angeben eines `position-area`](#setting_a_position-area) oder durch Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center) erreicht.

> [!HINWEIS]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zum Spezifizieren von Fallback-Positionen, wenn die Standardposition des positionierten Elements dazu führt, dass es den Viewport überläuft. Siehe den [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) für Details.

> [!HINWEIS]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie ein Anker-positioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, in [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fixierte positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Bei `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, Anker-positionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Wenn sie verwendet wird, setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Komponenten der Funktion sehen wie folgt aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den in seiner {{cssxref("position-anchor")}}-Eigenschaft oder der über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut assoziiert wird.
    > [!HINWEIS]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen am selben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Spezifiziert die Position relativ zu einer Seite oder Seiten des Ankers. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Anfang (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist, verwendet wird, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}-Wert, der den zu verwendenden Abstand als Fallback-Wert definiert, wenn das Element nicht absolut oder fix positioniert ist, der verwendete `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist, kompatibel ist, oder das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie direkt einen Längen- oder Prozentsatzwert auf eine Anker-positionierte Inset-Eigenschaft setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist dasselbe Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft, auf der er gesetzt ist, kompatibel ist und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem Boden des am nächsten positionierten Vorfahren des Elements (wenn vorhanden) oder des anfänglichen enthaltenen Blocks.

Die am häufigsten verwendeten `anchor()`-Parameter beziehen sich auf eine Seite des Standardankers. Sie werden auch oft entweder einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen den Kanten des Ankers und des positionierten Elements zu erzeugen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um etwas Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Block-End-Kante des positionierten Elements `10px` von der logischen Block-Start-Kante des Ankerelements entfernt, indem der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel an, bei dem `anchor()` in Aktion ist. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext unterhalb und oberhalb davon, um den Inhalt zu zwingen, den Container zu überfließen und zu scrollen. Wir geben dem Ankerelement auch denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox wird mit dem Anker über den Ankernamen assoziiert und erhält fixierte Positionierung. Durch das Einbeziehen der {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibrichtungen äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Inset-Eigenschafts-Positionierungsdeklarationen genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die Blockanfangskante des positionierten Elements auf die Blockendkante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Anfangskante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist am Ankerelement fixiert und nicht am Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zur Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft funktioniert nach dem Konzept eines 3x3-Gitters aus Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das Anker-positionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu erstrecken.

![Das position-area-Gitter, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinaten-Äquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinaten-Äquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der Mittelkachel werden durch den [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der Mittelkachel und dem äußeren Rand des Gitters durch den enthaltenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit Spannoptionen, um die Region des Gitters zu definieren, in der das Element positioniert werden soll.

Beispielsweise:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Kasten im Gitter zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Kasten.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Kasten.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, indem es zunächst in der Mitte platziert wird, und der andere bestimmt die Menge, die diese Spalte überspannt. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Zeile platziert wird und sich über die Kacheln der Mitte und der linken Seite dieser Zeile erstreckt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und sich über die Kacheln der Mitte und x-end dieser Spalte erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Block-End-Zeile platziert wird und sich über die Tiles der Inline-Start-, Center- und Inline-End-Zeilen dieser Zeile erstreckt.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, abhängig davon, welcher Wert gesetzt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als wäre der andere Wert `span-all`. Zum Beispiel gibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als wäre der andere Wert auf denselben Wert gesetzt; zum Beispiel gibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als wären beide Werte auf `center` gesetzt (also, `center center`).

> [!HINWEIS]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wertreferenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und denselben grundlegenden CSS-Stil wie im vorherigen Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um das Ändern des `position-area`-Werts des positionierten Elements zu ermöglichen.

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

Der Infobox wird eine fixed Positionierung zugewiesen und mit CSS mit dem Anker verbunden. Beim Laden ist es so eingestellt, dass es mit `position-area: top;` an den Anker gebunden ist, was dazu führt, dass es oben im position-area-Gitter positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript ein, um neue `position-area`-Werte aus dem `<select>`-Menü auf die Infobox anzuwenden:

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

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben die Dimensionierung bewusst ausgelassen, um Ihnen das dadurch verursachte Verhalten zu demonstrieren.

Wenn ein positioniertes Element ohne explizite Dimensionierung in die `position-area`-Gitterszellen platziert wird, richtet es sich an der angegebenen Gitterfläche aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird basierend auf der Größe seines [enthältenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` erzwungen. Auto-dimensionierte absolut und fix positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie nötig, um den Textinhalt aufzunehmen, während sie durch den Rand des Viewports begrenzt werden. In diesem Fall, wenn es auf der linken Seite des Gitters mit einem beliebigen `left`- oder `inline-start`-Wert platziert wird, wird der Text umbrochen. Wenn die `max-content`-Größe des angedockten Elements schmaler oder kürzer als ihr Anker ist, werden sie nicht wachsen, um der Größe des Ankers zu entsprechen.

Wenn das positionierte Element vertikal zentriert ist, etwa mit `position-area: bottom center`, richtet es sich an der angegebenen Gitterzelle aus und die Breite entspricht der des Ankerelements. In diesem Fall beträgt die Mindesthöhe die enthaltene Blockgröße des Ankerelements. Es wird nicht überlaufen, da `min-width` auf {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit ist wie das längste Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das Anker-positionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften, kombiniert mit der `anchor()`-Funktion, mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein Anker-positioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` zum Verankern verwendet werden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern zu ermöglichen, Elemente im Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme leicht zu richten, zum Beispiel entlang der Haupt- oder Nebenachse im Fall von Flexkindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und die Basis-CSS wie das vorherige Beispiel. Der Infobox wird eine fixed Positionierung gegeben und mit der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal am Zentrum des Ankers ausgerichtet ist:

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

Dies zentriert das Anker-positionierte Element am unteren Ende seines Ankers:

{{ EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mithilfe der [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Größenwerts anpassen.

Größeneigenschaften, die einen `anchor-size()`-Wert annehmen können, sind:

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

`anchor-size()`-Funktionen lösen sich in {{cssxref("length")}}-Werte auf. Ihre Syntax sieht wie folgt aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der {{cssxref("anchor-name")}}-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie das Element relativ dimensionieren möchten. Wenn weggelassen, wird **Standardanker**, der Anker, auf den in der {{cssxref("position-anchor")}}-Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann mithilfe der physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fix positioniert ist, oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()`-Funktionen werden sich einfach auf eine Dimension des Standardankers beziehen. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardanker-Elements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion erfolgt:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und die Basis-CSS sind die gleichen wie in den vorherigen Beispielen, mit der Ausnahme, dass das Ankerelement einen [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Der Infobox wird eine fixierte Positionierung gegeben und wie zuvor mit dem Anker verbunden. Diesmal fixieren wir es jedoch rechts am Anker mithilfe einer `position-area` und geben ihm eine Breite, die das Fünffache der Breite des Ankers ist:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie über das Ankerelement oder tabben Sie darauf — das positionierte Element wächst, wenn der Anker wächst und zeigt, dass die Größe des Anker-positionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Größenanpassung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Weitere Anwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Rand-Eigenschaften verwenden. Die folgenden Abschnitte untersuchen diese Anwendungen detaillierter, bevor sie ein Anwendungsbeispiel bieten.

### Positionierung eines Elements basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaftswerts")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert kein Element relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft dies tun (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element wird seine Position nicht ändern, wenn sich sein Anker ändert. Stattdessen wird das Element gemäß den normalen Regeln von [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement sich nur vertikal bewegen kann und immer horizontal am Rand seines nächsten positionierten Vorfahren bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das Anker-positionierte Element immer rechts von seinem Anker zu positionieren, auch wenn sich die Breite des Ankers ändert.

### Festlegen eines Elementrandes basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementränder basierend auf der Größe ihres Ankerelements zu setzen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie den Rand eines Anker-positionierten Elements so einstellen möchten, dass er immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements ist, auch wenn sich die Breite ändert.

### `anchor-size()`-Positions- und Randbeispiel

Schauen wir uns ein Beispiel an, in dem wir den Rand und die Position eines Anker-positionierten Elements relativ zur Breite des Ankerelements einstellen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `Anker`-Element und ein `Infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, der das {{htmlelement("body")}} groß genug macht, um Scrollen zu erfordern, aber dies wurde zur Kürze versteckt.

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

Im CSS deklarieren wir zunächst das Ankerelement `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}}-Abmessungen auf den Anker und die Infobox und schließen eine {{cssxref("transition")}} auf dem Anker ein, damit sich Breitenänderungen bei Zustandsänderungen sanft animieren:

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

Kommen wir nun zum interessantesten Teil. Hier setzen wir die `width` des Ankers auf `300px`, wenn er gehoven oder fokussiert wird. Wir setzen dann:

- den `top`-Wert der Infobox auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Infobox immer in Linie mit der Oberseite des Ankers bleibt.
- den `left`-Wert der Infobox auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Infobox um den angegebenen Abstand von der linken Kante des nächsten positionierten Vorfahren entfernt positioniert wird. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist der `<body>`-Block, sodass die Infobox rechts vom Anker erscheint.
- den `margin-left`-Wert der Infobox auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Rand hat, der sie vom Anker trennt, gleich einem Viertel der Breite des Ankers.

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

Versuchen Sie, zum Anker zu tabben oder mit der Maus drüberzuschweben, und beachten Sie, wie sich die Position und der linke Rand der Infobox im Verhältnis zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größenänderung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
