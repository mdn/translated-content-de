---
title: Verwendung von CSS-Ankerpositionierung
short-title: Anwendung der Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Die CSS-Ankerpositionierung bietet auch mechanismen nur mit CSS, um mehrere alternative Positionen für ein ankerpositioniertes Element festzulegen. Zum Beispiel, wenn ein Tooltip an ein Formularfeld angeheftet ist, aber der Tooltip in seiner Standardpositionierungseinstellung außerhalb des Bildschirms angezeigt werden würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm angezeigt wird, oder ihn anderweitig ausblenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie die Assoziations-, Positionierungs- und Größeneigenschaften des Moduls auf grundlegender Ebene verwendet werden. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten besprochenen Konzepte beigefügt. Informationen zum Festlegen alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie im [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes anzubinden oder zu verknüpfen. Beispiele hierfür sind:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Informationsboxen, die neben einem UI-Element auftauchen, um weitere Informationen darüber bereitzustellen.
- Einstellungen oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugeordneten Navigationsleiste oder einem Button erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle zu erstellen, wäre ziemlich einfach, wenn das Ankerelement (auch **Ankerelement** genannt) immer an der gleichen Stelle in der UI wäre und das ankerpositionierte Element (auch **positioniertes Element** genannt) immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. Leider ist das selten der Fall.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder auf andere Weise geändert wird (z. B. durch Scrollen, Ändern der Viewport-Größe, Drag-and-Drop usw.). Zum Beispiel, wenn ein Element wie ein Formularfeld nahe an den Rand des Viewports kommt, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie, dass der Tooltip an sein Formularelement gebunden bleibt und sicherstellen, dass der Tooltip solange vollständig sichtbar auf dem Bildschirm bleibt, wie das Formularelement sichtbar ist, wobei der Tooltip bei Bedarf automatisch bewegt wird. Dies haben Sie wahrscheinlich als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Rechtsklick-Menüs (<kbd>Strg</kbd> + Klick) auf Ihrem Desktop oder Laptop verwenden.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performanter und deklarativer mit CSS (und HTML) anstelle von JavaScript.

## Assoziation von Anker und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst das Element als Anker deklarieren und dann angeben, welches positionierte Element oder welche positionierten Elemente mit diesem Anker verknüpft werden sollen. Dadurch wird eine Ankerreferenz zwischen den beiden hergestellt. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft festlegen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Ein Element in ein ankerpositioniertes Element umzuwandeln erfordert zwei Schritte: Es muss absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) über die {{cssxref("position")}} Eigenschaft sein. Das positionierte Element hat dann seine {{cssxref("position-anchor")}} Eigenschaft auf den Wert der `anchor-name` Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verknüpfen:

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

Wir wenden das oben genannte CSS auf das folgende HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Das wird folgendermaßen gerendert:

{{ EmbedLiveSample("Nur CSS Methode", "100%", "120") }}

Der Anker und die Informationsbox sind jetzt verknüpft, aber im Moment müssen Sie uns das einfach glauben. Sie sind noch nicht aneinander gebunden — wenn Sie den Anker positionieren und woanders auf der Seite verschieben würden, würde er sich alleine bewegen und die Informationsbox an derselben Stelle bleiben. Sie werden die tatsächliche Bindung sehen, wenn wir uns [Elemente basierend auf der Ankerposition zu positionieren](#elemente_relativ_zu_ihrem_anker_positionieren) anschauen.

### Implizite Ankerassoziation

In einigen Fällen wird automatisch eine implizite Ankerreferenz zwischen zwei Elementen hergestellt, aufgrund des semantischen Charakters ihrer Beziehung. Zum Beispiel, wenn die [Popover API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einer Steuerung zu assoziieren, wird automatisch eine Ankerreferenz zwischen den beiden hergestellt. Dies kann auftreten, wenn:

- Ein Popover deklarativ über die [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute mit einer Steuerung verknüpft wird.
- Ein Popover programmatisch über eine Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einer Steuerung unter Verwendung der `source` Option assoziiert wird.
- Ein {{htmlelement("select")}} Element und sein Dropdown-Picker in die Funktionalität des [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die Eigenschaft {{cssxref("appearance")}} und den `base-select` Wert eingeführt werden. In diesem Fall wird auch eine implizite Popover-Initiatoren-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht aneinander gebunden. Um sie zusammen zu binden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Elemente relativ zu ihrem Anker positionieren

Wie wir oben gesehen haben, bringt die Verbindung eines positionierten Elements mit einem Anker für sich genommen nicht viel. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch das Setzen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values) Werts auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Festlegen eines `position-area`](#setting_a_position-area), oder indem das positionierte Element mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center) zentriert wird.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es versteckt ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir diskutieren, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker verschwindet, im [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionell werden absolut und fest positionierte Elemente explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Paradigma, indem sie ermöglicht, dass ankerpositionierte Elemente relativ zu den Rändern ihrer zugehörigen Anker platziert werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die einen gültigen Wert für jede der Inset-Eigenschaften darstellt. Wenn verwendet, legt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement fest, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Funktionskomponenten sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert des Ankerelements, zu dem die Seite des Elements relativ positioniert werden soll. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird oder über das nicht standardisierte [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementverknüpfung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()` Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzelnen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder mehreren Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers, oder einen `<percentage>` zwischen dem Anfang (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, auf die `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf die die `anchor()` Funktion gesetzt ist, wird der Fallbackwert verwendet.

- `<fallback>`

  - : Eine {{cssxref("length-percentage")}} definiert den Abstand, der als Fallbackwert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>` Wert nicht mit der Inset-Eigenschaft kompatibel ist, auf die die `anchor()` Funktion festgesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie direkt eine Länge oder einen Prozentsatz auf der Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das zu sehen ist, wenn der `<anchor-side>` Wert mit der Inset-Eigenschaft, auf die er gesetzt ist, inkompatibel ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Containing Blocks.

Die am häufigsten verwendeten `anchor()` Parameter beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig entweder einen {{cssxref("margin")}} hinzufügen, um Platz zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()` Funktion verwenden, um diesen Platz hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann `margin-left` hinzu, um etwas Platz zwischen den Kanten zu machen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()` Funktion ist eine Länge. Dies bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}} Funktion verwenden können. Diese Regel positioniert die logische Blockenende-Kante des positionierten Elements `10px` von der logischen Blockanfang-Kante des Ankerelements entfernt, wobei der Abstand mit der `calc()` Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel von `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber, um den Inhalt seinen Container überlaufen und scrollen zu lassen. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Informationsbox ist mit dem Anker über den Ankernamen verbunden und wird fest positioniert. Durch Einbeziehen der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen Link-Rechts-Schreibrichtungen äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie mit dem Anker verknüpft. Wir fügen der Informationsbox einen `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Inset-Eigenschaftsschrifterklärungen genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die Blockanfang-Kante des positionierten Elements an die Blockend-Kante des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inlineanfang-Kante des positionierten Elements an die Inlineend-Kante des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Dies gibt uns folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` Beispiel", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts neben dem Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist am Ankerelement befestigt, nicht am Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area` Eigenschaft arbeitet mit dem Konzept eines 3x3 Gitters von Kacheln, wobei das Ankerelement die zentrale Kachel ist. Die `position-area` Eigenschaft kann verwendet werden, um das ankerpositionierte Element in eine der neun Kacheln zu positionieren, oder es über zwei oder drei Kacheln zu erstrecken.

![Das position-area Gitter, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der zentralen Kachel werden durch den [Enthältblock](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der zentralen Kachel und dem äußeren Rand des Gitters durch den Enthältblock des positionierten Elements definiert wird.

Die `position-area` Eigenschaftswerte werden aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten gebildet, mit Optionen für Spannen, um die Region des Gitters zu definieren, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Gittersquare zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) wird das positionierte Element in das obere linke Square platzieren.
- `bottom center` (logisches Äquivalent `end center`) wird das positionierte Element in das untere mittlere Square platzieren.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, indem es zunächst in der Mitte platziert wird, und der andere gibt die Menge dieser Spalte an, die es umspannt. Zum Beispiel:

- `top span-left` lässt das positionierte Element in der oberen Reihe platzieren und über die mittleren und linken Kacheln dieser Reihe spannen.
- `y-end span-x-end` lässt das positionierte Element am Ende der y-Spalte platzieren und über die mittleren und x-end Kacheln dieser Spalte spannen.
- `block-end span-all` lässt das positionierte Element in der Blockend-Reihe platzieren und über die inline-start, center und inline-end Kacheln dieser Reihe spannen.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich, je nachdem, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder ein Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als wäre der andere Wert `span-all`. Zum Beispiel gibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als wäre der andere Wert auf denselben Wert gesetzt; zum Beispiel gibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als wären beide Werte auf `center` gesetzt (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und dieselben Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}} Element hinzugefügt haben, um das Ändern des `position-area` Wertes des positionierten Elements zu ermöglichen.

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

Die Informationsbox wird fest positioniert und mit dem Anker über CSS verknüpft. Beim Laden wird sie auf `position-area: top;` eingestellt, wodurch sie oben im position-area Gitter positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>` Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area` Werte auszuwählen, die aus dem `<select>` Menü auf die Informationsbox angewendet werden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt auf die Position der Informationsbox zu sehen:

{{ EmbedLiveSample("Festlegen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

In dem obigen Beispiel haben wir die Größe des positionierten Elements in keiner Richtung explizit festgelegt. Wir haben die Größenangabe absichtlich weggelassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element in `position-area` Gitterzellen ohne explizite Größenangabe platziert wird, richtet es sich an dem angegebenen Gitterbereich aus und verhält sich, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird entsprechend seiner [Enthältblock](/de/docs/Web/CSS/CSS_display/Containing_block) Größe dimensioniert, was die Breite des Inhalts ist. Diese Größe wurde durch die Einstellung `position: fixed` auferlegt. Auto-groß absolut und fest positionierte Elemente werden automatisch dimensioniert, strecken sich so breit aus, wie nötig, um den Textinhalt zu passen, während sie durch den Rand des Viewports eingeschränkt werden. In diesem Fall, wenn es auf der linken Seite des Gitters mit einem `left` oder `inline-start` Wert platziert wird, bricht der Text um. Wenn die `max-content` Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um die Größe des Ankers anzupassen.

Wenn das positionierte Element vertikal zentriert ist, wie z. B. bei `position-area: bottom center`, wird es mit der angegebenen Gitterzelle ausgerichtet und die Breite ist dieselbe wie das Ankerelement. In diesem Fall ist seine minimale Höhe die Größe des Enthaltsblocks des Ankerelements. Es wird nicht überlaufen, da der `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrieren auf dem Anker mit `anchor-center`

Während es möglich ist, das ankerpositionierte Element mit den `center` Werten von `position-area` zu zentrieren, bieten Inset-Eigenschaften in Kombination mit der `anchor()` Funktion mehr Kontrolle über die exakte Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzformen) existieren, um Entwicklern zu ermöglichen, Elemente im Inline- oder Block-Richtung in verschiedenen Layout-Systemen leicht auszurichten, z. B. entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS-Ankerpositionierung bietet zusätzlich einen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und Basis-CSS wie das vorherige Beispiel. Die Informationsbox wird fest positioniert und an der unteren Kante des Ankers angebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal im Zentrum des Ankers zentriert ist:

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

{{ EmbedLiveSample("Zentrieren auf dem Anker mit `anchor-center`", "100%", "250") }}

## Elemente nach Ankergröße dimensionieren

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie ein Element auch relativ zur Größe seines Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Größeneigenschaftswerts verwenden.

Größeneigenschaften, die einen `anchor-size()` Wert annehmen können, umfassen:

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

`anchor-size()` Funktionen lösen sich zu {{cssxref("length")}} Werten auf. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft des Ankerelements festgelegt ist, auf das Sie das Element relativ dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann in physikalischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe als Fallback-Wert an, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()` Funktionen beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu ändern.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inlinegröße des positionierten Elements auf das Vierfache der Inlinegröße des Ankerelements, wobei die Multiplikation innerhalb einer `calc()` Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind mit den vorherigen Beispielen identisch, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut erhält, um es fokussierbar zu machen. Die Informationsbox wird fest positioniert und in derselben Weise wie zuvor mit dem Anker verknüpft. Diesmal verankern wir es jedoch auf der rechten Seite des Ankers mit einem `position-area` und geben ihm eine Breite, die fünfmal so groß wie die Breite des Ankers ist:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, damit es sich beim Statuswechsel animiert.

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

Bewegen Sie die Maus über das Ankerelement oder verwenden Sie die Tab-Taste — das positionierte Element wächst, wenn der Anker wächst und zeigt, dass die Größe des ankerpositionierten Elements relativ zum Anker ist:

{{ EmbedLiveSample("Dimensionieren von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Rand-Eigenschaften verwenden. Die nachfolgenden Abschnitte untersuchen diese Anwendungen detaillierter, bevor sie ein Anwendungsbeispiel liefern.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines {{Glossary("Inset_properties", "Inset property")}} Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion oder {{cssxref("position-area")}} Eigenschaft (siehe [Positioning elements relative to their anchor](#elemente_relativ_zu_ihrem_anker_positionieren), oben); das Element wird seine Position nicht ändern, wenn sich sein Anker ändert. Stattdessen wird das Element nach den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, auch wenn sich die Breite des Ankers ändert.

### Festlegen des Elementrandes basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftswerts verwenden, um Elementränder basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie möchten, dass der Rand eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements ist, auch wenn sich die Breite ändert.

### Beispiel für `anchor-size()` Position und Rand

Schauen wir uns ein Beispiel an, in dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines als `anchor` Element und eines als `infobox` Element, das wir relativ zum Anker positionieren. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde aus Gründen der Kürze weggelassen.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}} Eigenschaft mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker und die Informationsbox und enthalten eine {{cssxref("transition")}} auf dem Anker, sodass Größeänderungen bei Statusänderungen sanft animiert werden:

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

Jetzt zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er sich im Hover oder Fokus befindet. Dann setzen wir die `infobox`:

- `top` Wert auf `anchor(top)`. Dies bewirkt, dass die Oberseite der Informationsbox immer mit der Oberseite des Ankers übereinstimmt.
- `left` Wert auf `anchor-size(width)`. Dies bewirkt, dass die linke Seite der Informationsbox den angegebenen Abstand vom linken Rand ihres nächstgelegenen positionierten Vorfahren hat. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements und der nächstgelegene positionierte Vorfahr ist das `<body>` Element, sodass die Informationsbox rechts vom Anker angezeigt wird.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Informationsbox immer einen linken Rand hat, der sie vom Anker trennt, gleich einem Viertel der Breite des Ankers.

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

{{EmbedLiveSample("Grundlegende `anchor-size()` Verwendung", "100%", "240")}}

Versuchen Sie, das Ankerelement zu fokussieren oder mit der Maus darüber zu schweben, und bemerken Sie, wie die Position und der linke Rand der Informationsbox im Verhältnis zur Breite des Ankerelements wachsen.

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
