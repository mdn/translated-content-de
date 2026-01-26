---
title: Verwendung der CSS-Ankerpositionierung
short-title: Verwendung der Ankerpositionierung
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der ankerpositionierten Elemente kann dann relativ zur Größe und Position der Ankerelemente eingestellt werden, an die sie gebunden sind.

Die CSS-Ankerpositionierung bietet auch Mechanismen, um mehrere alternative Positionen für ein ankerpositioniertes Element festzulegen, die nur in CSS verwendet werden. Wenn ein Tooltip beispielsweise an ein Formularfeld gebunden ist, aber in den Standardpositionseinstellungen außerhalb des Bildschirms angezeigt würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, damit er auf dem Bildschirm platziert wird, oder alternativ ganz ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie man die Assoziations-, Positionierungs- und Größenänderungsfunktionen des Moduls auf einer grundlegenden Ebene nutzt. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten diskutierte Konzept beigefügt. Informationen zum Festlegen alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie im [Leitfaden zu Rückfalleinstellungen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes zu binden. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um weitere Informationen bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte — oft wiederverwendbar und dynamisch generiert — relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle zu erstellen, wäre ziemlich einfach, wenn das zu bindende Element (auch bekannt als **Ankerelement**) immer an derselben Stelle in der Benutzeroberfläche wäre und das gebundene Element (auch bekannt als **ankerpositioniertes Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. In der Praxis sind die Dinge jedoch selten so einfach.

Der Standort von positionierten Elementen relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z. B. durch Scrollen, Ändern der Viewportgröße, Ziehen und Ablegen usw.). Wenn sich beispielsweise ein Element wie ein Formularfeld in der Nähe des Randes des Viewports befindet, kann sein Tooltip außerhalb des Bildschirms enden. In der Regel möchten Sie den Tooltip an sein Formularsteuerelement binden und sicherstellen, dass der Tooltip so lange vollständig sichtbar auf dem Bildschirm bleibt, wie das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Möglicherweise haben Sie dies als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs mit der rechten Maustaste (<kbd>Strg</kbd> + Klicken) auf Ihrem Desktop oder Laptop verwenden.

Historisch gesehen erforderte die Assoziierung eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme verursachte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen es, solche Anwendungsfälle performanter und deklarativer mit CSS (und HTML) anstelle von JavaScript zu implementieren.

## Assoziierung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welches(n) positionierte Element(e) mit diesem Anker assoziiert werden soll(en). Dies schafft eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie ihm einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft zuweisen. Der Ankname muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir die Breite des Ankers auch auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, was den Ankereffekt besser demonstriert.

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

Um ein Element in ein ankerpositioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fix [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) mit der {{cssxref("position")}}-Eigenschaft sein. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt:

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

Wir werden das obige CSS auf folgendes HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun assoziiert, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht aneinander gebunden — wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden das tatsächliche Verbinden in Aktion sehen, wenn wir uns [Elemente basierend auf der Ankerposition positionieren](#elemente_relativ_zu_ihrem_anker_positionieren) ansehen.

### Implizite Ankerassoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen erstellt:

- Wenn Sie die [Popover-API](/de/docs/Web/API/Popover_API) verwenden, um ein Popover mit einem Steuerelement zu assoziieren, wird eine implizite Ankerreferenz zwischen den beiden erstellt. Dies kann geschehen, wenn:
  - Ein Popover mit einem Steuerelement unter Verwendung der Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` deklarativ assoziiert wird.
  - Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmatisch mit einem Steuerelement unter Verwendung der `source`-Option assoziiert wird.
- Ein {{htmlelement("select")}}-Element und seine Dropdown-Auswahl sind über die {{cssxref("appearance")}}-Eigenschaft mit dem `base-select`-Wert in die [anpassbare Auswahl](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Funktionalität aufgenommen. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, sind jedoch noch nicht miteinander verbunden. Um sie zusammenzubinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

### Entfernen einer Ankerassoziation

Wenn Sie eine zuvor zwischen einem Ankerelement und einem positionierten Element hergestellte explizite Ankerassoziation entfernen möchten, können Sie eines der folgenden tun:

1. Setzen Sie den Wert der `anchor-name`-Eigenschaft des Ankers auf `none` oder auf ein anderes `<dashed-ident>`, wenn Sie möchten, dass ein anderes Element an ihn gebunden wird.
2. Setzen Sie die `position-anchor`-Eigenschaft des positionierten Elements auf `none` oder auf einen nicht existierenden Ankernamen im aktuellen Dokument, wie beispielsweise `--not-an-anchor-name`.

Im Falle von impliziten Ankerassoziationen müssen Sie die zweite Methode verwenden — die erste Methode funktioniert nicht. Dies liegt daran, dass die Assoziation intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Um beispielsweise zu verhindern, dass ein anpassbares `<select>`-Element an das `<select>`-Element selbst gebunden wird, könnten Sie folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: none;
}
```

## Anker-Skopierung

Wenn mehreren Ankerelementen derselbe {{cssxref("anchor-name")}}-Wert zugewiesen wird und ein positioniertes Element diesen Namen als seinen {{cssxref("position-anchor")}}-Eigenschaftswert hat, wird das positionierte Element mit dem _letzten_ Ankerelement in der Quellreihenfolge mit diesem `anchor-name`-Wert assoziiert.

Wenn ein Dokument beispielsweise mehrere wiederholte Komponenten enthält, die jeweils ein positioniertes Element mit einem Anker verbunden haben, werden alle positionierten Elemente an den letzten Anker auf der Seite gebunden, es sei denn, jede Komponente verwendet einen anderen Ankernamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die {{cssxref("anchor-scope")}}-Eigenschaft kann dieses Problem lösen, indem die Sichtbarkeit oder der "Geltungsbereich" eines `anchor-name`-Wertes auf einen bestimmten Teilbaum beschränkt wird. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Teilbaums des Elements, das den Geltungsbereich auf ihm gesetzt hat, gebunden werden kann.

- `anchor-scope: all` setzt den Geltungsbereich so, dass _jede_ `anchor-name`-Werte, die im Teilbaum gesetzt sind, nur von positionierten Elementen innerhalb desselben Teilbaums gebunden werden können.
- `anchor-scope: --my-anchor, --my-anchor2` setzt den Geltungsbereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum gesetzt sind, nur von positionierten Elementen in demselben Teilbaum gebunden werden können.
- `anchor-scope: none` ist der Standardwert; er gibt an, dass kein Anker-Skopierung gesetzt ist.

Angenommen, Sie haben mehrere Anker und ankerpositionierte {{htmlelement("div")}}-Elemente innerhalb von {{htmlelement("section")}}-Containern:

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

Wir wandeln jedes `anchor`-`<div>` in ein Ankerelement um, indem wir ihnen einen `anchor-name`-Wert von `--my-anchor` geben. Dann positionieren wir jedes `positioned`-`<div>` relativ zu einem Element mit dem `--my-anchor`-Ankernamen, indem wir ihnen absolute Positionierung, einen `position-anchor`-Wert von `--my-anchor` und einen {{cssxref("position-area")}}-Wert von `right` geben. Schließlich setzen wir den Ankergeltungsbereich jedes `<section>`-Containers mit `anchor-scope: --my-anchor`:

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

Jedes positionierte Element wird relativ zum Anker innerhalb desselben `<section>`-Elements positioniert. Das liegt daran, dass jedes `<section>`-Element einen `anchor-scope` von `--my-anchor` gesetzt hat; positionierte Elemente innerhalb jedes skopierten Containers können daher nur relativ zu `my-anchor`-Ankern innerhalb desselben Containers positioniert werden.

Wenn wir nicht `anchor-scope: --my-anchor` auf die Container setzen würden, würden alle positionierten Elemente relativ zum letzten Anker auf der Seite positioniert.

## Elemente relativ zu ihrem Anker positionieren

Wie wir bereits gesehen haben, bringt es nicht viel, ein positioniertes Element mit einem Anker zu assoziieren, ohne es weiter zu bearbeiten. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies geschieht entweder durch das Festlegen eines [CSS-`anchor()`-Funktionen](#using_inset_properties_with_anchor_function_values) auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [das Festlegen eines `position-area`](#setting_a_position-area) oder indem das positionierte Element mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center) zentriert wird.

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zur Angabe von Rückfallpositionen, wenn die Standardposition des positionierten Elements dazu führt, dass es aus dem Viewport ragt. Weitere Informationen finden Sie im [Leitfaden zu Rückfalleinstellungen und bedingtem Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Node sein, damit die Assoziation und die Positionierung funktionieren. Wenn es ausgeblendet ist (z. B. über [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir erläutern, wie ein ankerpositioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, im [Bedingten Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fix positionierte Elemente werden explizit durch das Setzen von {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} positioniert. Bei `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma, indem es ankerpositionierten Elementen ermöglicht wird, relativ zu den Kanten ihrer zugehörigen Anker platziert zu werden. Das Modul definiert die [`anchor()`-Funktion](/de/docs/Web/CSS/Reference/Values/anchor), die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ platziert wird, und der Abstand von dieser Seite definiert werden.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der {{cssxref("anchor-name")}}-Eigenschaftswert des Ankerelements, relativ zu dem die Seite des Elements positioniert werden soll. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner {{cssxref("position-anchor")}}-Eigenschaft oder durch das nicht-standardisierte [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut referenziert wird.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb unterschiedlicher `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, usw.) oder logische (`start`, `self-end`, usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Rückfallwert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}, der den Abstand angibt, der als Rückfallwert verwendet werden soll, wenn das Element nicht absolut oder fix positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf der Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist das gleiche Verhalten, das auftritt, wenn der `<anchor-side>`-Wert mit der Inset-Eigenschaft, auf der es gesetzt ist, unvereinbar ist und der Rückfall verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des initialen enthaltenden Blocks.

Die am häufigsten verwendeten `anchor()`-Parameter beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig entweder eine {{cssxref("margin")}} hinzufügen, um Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Beispielsweise positioniert diese Regel den linken Rand des positionierten Elements bündig mit dem rechten Rand des Ankerelements und fügt dann etwas `margin-left` hinzu, um etwas Abstand zwischen den Rändern zu schaffen:

```css
.positionedElement {
  left: anchor(right);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Dies bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert den logischen Block-Endrand des positionierten Elements `10px` vom logischen Block-Startrand des Ankerelements entfernt, wobei der Abstand innerhalb der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Werfen wir einen Blick auf ein `anchor()`-Beispiel in Aktion. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit einigen Fülltexten, die darunter und darüber platziert sind, um den Inhalt seines Containers überlaufen zu lassen und zu scrollen. Wir geben dem Ankerelement denselben Ankernamen wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker assoziiert und wurde mit fixierter Positionierung versehen. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften einschließen (die äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} in horizontalen Links-nach-Rechts Schreibrichtungen sind), haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Lassen Sie uns die Inset-Eigenschafts-Positionierungsdeklarationen genauer betrachten:

- `inset-block-start: anchor(end)`: Dies setzt den Blockstart-Rand des positionierten Elements auf den Blockend-Rand des Ankers und berechnet ihn mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Blockstart-Rand des positionierten Elements auf den Blockend-Rand des Ankers und berechnet ihn mit der `anchor(self-end)`-Funktion.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist an das Ankerelement und nicht an den Viewport fixiert.

### Festlegung eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft arbeitet mit dem Konzept eines 3x3-Gitters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu erstrecken.

![Das position-area-Gitter, wie im Folgenden beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln werden in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden vom [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters vom enthaltenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten, basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Optionen zum Erstrecken, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einer bestimmten Gitterschnelle zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Kachel.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der unteren mittleren Kachel.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, und die andere gibt die Menge dieser Spalte an, die es erstrecken soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der obersten Reihe platziert wird und sich über die mittlere und linke Kachel dieser Reihe erstreckt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und sich über die mittlere und x-end-Kachel dieser Spalte erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in der block-end-Reihe platziert wird und sich über die inline-start-, center- und inline-end-Kacheln dieser Reihe erstreckt.

Wenn Sie nur einen Wert angeben, ist die Wirkung je nach gesetztem Wert unterschiedlich:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt, als ob der andere Wert `span-all` ist. Zum Beispiel ergibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf den gleichen Wert gesetzt ist; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt sind (d.h. `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige Beispiel, mit Ausnahme, dass wir ein {{htmlelement("select")}}-Element eingeschlossen haben, um das Ändern des `position-area`-Werts des positionierten Elements zu ermöglichen.

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

Die Infobox wird mit fixierter Positionierung versehen und mit dem Anker über CSS assoziiert. Bei dem Ladevorgang ist sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden ist, was dazu führt, dass sie oben im position-area-Gitter positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü auswählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um zu sehen, welchen Effekt sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Setting a `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben bewusst auf Größenangaben verzichtet, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größe in position-area-Gitterzellen platziert wird, richtet es sich mit dem angegebenen Rasterbereich aus und verhält sich so, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird entsprechend seinem [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block)-Größe dimensioniert, die die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fix positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie es nötig ist, um den Textinhalt zu passen, während sie durch den Rand des Viewports begrenzt werden. In diesem Fall, wenn es auf der linken Seite des Gitters mit jedem `left`- oder `inline-start`-Wert platziert wird, wird der Text umgebrochen. Wenn die `max-content`-Größe des angedockten Elements schmaler oder kürzer als ihr Anker ist, werden sie nicht wachsen, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, beispielsweise mit `position-area: bottom center`, wird es mit der angegebenen Gitterzelle ausgerichtet und die Breite wird gleich der des Ankerelements sein. In diesem Fall ist seine minimale Höhe die Größe des enthaltenden Blocks des Ankerelements. Es wird nicht überlaufen, da das `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort ist.

## Zentrierung auf dem Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften statt `position-area` verwendet werden, um es zu binden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands) existieren, um Entwicklern zu ermöglichen, Elemente einfach in der Inline- oder Block-Richtung innerhalb verschiedener Layout-Systeme zu auszurichten, beispielsweise entlang der Haupt- oder Querachse im Falle von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige Beispiel. Die Infobox hat eine feste Positionierung und ist an der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Zentrum des Ankers zentriert ist:

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

Dies zentriert das ankerpositionierte Element am unteren Rand des Ankers:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers, können Sie auch ein Element relativ zur Größe seines Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines Dimensionierungseigenschaftswerts verwenden.

Die Eigenschaften, die einen `anchor-size()`-Wert annehmen können, sind unter anderem:

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

`anchor-size()`-Funktionen werden zu {{cssxref("length")}}-Werten aufgelöst. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name wird als Wert der {{cssxref("anchor-name")}}-Eigenschaft des Ankerelements gesetzt, relativ zum dem Sie die Dimensionierung des Elements möchten. Wenn ausgelassen, wird der **Standardanker** des Elements verwendet, welches der Anker ist, der in der {{cssxref("position-anchor")}}-Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann durch physikalische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline` oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Rückfallwert verwendet werden soll, wenn das Element nicht absolut oder fix positioniert ist oder wenn das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die angewandte Größe auf das positionierte Element zu ändern.

Beispielsweise dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements. Die Multiplikation erfolgt innerhalb einer `calc()`-Funktion:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Lassen Sie uns einen Blick auf ein Beispiel werfen. Das HTML und die grundlegenden CSS sind die gleichen wie in den vorherigen Beispielen, mit der Ausnahme, dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hat, um es fokussierbar zu machen. Die Infobox hat eine feste Positionierung und ist auf die gleiche Weise wie zuvor mit dem Anker verbunden. Diesmal verankern wir es jedoch auf der rechten Seite des Ankers mit einer `position-area` und geben ihm eine Breite, die fünfmal die Breite des Ankers beträgt:

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

Zusätzlich erhöhen wir die {{cssxref("width")}}-Eigenschaft des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm eine {{cssxref("transition")}}, sodass sie bei einem Zustandswechsel animiert wird.

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

Fahren Sie mit der Maus über oder fokussieren Sie auf das Ankerelement mit der Tabulatortaste – das positionierte Element wächst, während der Anker wächst und demonstriert, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitten erläutern diese Verwendungen detaillierter, bevor ein Anwendungsbeispiel angeboten wird.

### Setzen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaft")}}-Wertes verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionieren von Elementen relativ zu ihrem Anker](#elemente_relativ_zu_ihrem_anker_positionieren), oben); das Element wird seine Position nicht ändern, wenn sich sein Anker ändert. Stattdessen wird das Element gemäß den normalen Regeln des [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement sich nur vertikal bewegen kann und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, können Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts neben seinem Anker zu positionieren, selbst wenn sich die Ankerbreite ändert.

### Setzen der Elementmarge basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)-Funktion innerhalb einer `margin-*`-Eigenschaft verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements zu setzen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie die Marge eines ankerpositionierten Elements immer auf denselben Prozentsatz der Breite des Ankerelements setzen möchten, selbst wenn sich die Breite ändert.

### `anchor-size()`-Position und Margin-Beispiel

Lassen Sie uns ein Beispiel betrachten, in dem wir die Marge und Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements setzen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, sodass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde aus Gründen der Kürze versteckt.

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

Im CSS deklarieren wir zuerst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf den Anker und die Infobox sowie eine {{cssxref("transition")}} auf den Anker, sodass Dimensionierungsänderungen bei einem Zustandswechsel glatt animiert werden:

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

Jetzt kommen wir zum interessantesten Teil. Hier setzen wir das Anker-`width` auf `300px`, wenn es gehoben oder fokussiert wird. Wir setzen dann den:

- `top`-Wert der Infobox auf `anchor(top)`. Dies bewirkt, dass der obere Rand der Infobox immer mit dem oberen Rand des Ankers eine Linie bildet.
- `left`-Wert der Infobox auf `anchor-size(width)`. Dies bewirkt, dass der linke Rand der Infobox in dem angegebenen Abstand vom linken Rand des nächstgelegenen positionierten Vorfahren positioniert wird. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements und der nächstgelegene positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts neben dem Anker erscheint.
- `margin-left`-Wert, um `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Abstand hat, der sie vom Anker trennt und gleich einem Viertel der Breite des Ankers ist.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

Versuchen Sie, zum Anker zu wechseln oder mit dem Mauszeiger darüber zu schweben, und beachten Sie, wie sich die Position und der linke Abstand der Infoboxin in Proportion zur Breite des Ankerelements vergrößert.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Rückfalleinstellungen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
