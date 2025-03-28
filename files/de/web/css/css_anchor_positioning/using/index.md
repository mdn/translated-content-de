---
title: Verwenden von CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{CSSRef}}

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **anker-positionierte Elemente** definiert werden. Anker-positionierte Elemente können an Ankerelemente gebunden werden. Die anker-positionierten Elemente können dann ihre Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, einstellen lassen.

CSS-Ankerpositionierung bietet auch Mechanismen nur mit CSS, um mehrere alternative Positionen für ein anker-positioniertes Element festzulegen. Beispielweise kann, wenn ein Tooltip an ein Formularfeld verankert ist, aber der Tooltip ansonsten außerhalb des Bildschirms in seinen Standardpositionseinstellungen gerendert würde, der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm erscheint, oder ihn alternativ ganz ausblenden.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Verband-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwenden. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes hier besprochene Konzept eingefügt. Informationen zur Spezifizierung alternativer Positionen und zum Ausblenden von anker-positionierten Elementen finden Sie unter [Überlauf behandeln: Fallbacks versuchen und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr verbreitet, ein Element mit einem anderen zu verbinden oder zu binden. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um weitere Informationen darüber zu liefern.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte — oftmals wiederverwendbar und dynamisch erzeugt — relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle zu erstellen, wäre ziemlich einfach, wenn das zu verankernde Element (auch als **Ankerelement** bekannt) immer an derselben Stelle in der Benutzeroberfläche wäre und das verankerte Element (auch als **anker-positioniertes Element**, oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. In der Realität ist dies jedoch selten der Fall.

Der Standort von positionierten Elementen relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, falls sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z.B. durch Scrollen, Ändern der Ansichtsfenstergröße, Drag & Drop, etc.). Zum Beispiel kann ein Tooltip eines Formularfelds, das sich nahe am Rand des Ansichtsfensters befindet, außerhalb des Bildschirms enden. In der Regel möchten Sie den Tooltip an sein Formularfeld binden und sicherstellen, dass der Tooltip sichtbar bleibt, solange das Formularfeld sichtbar ist, und den Tooltip automatisch bewegen, falls nötig. Vielleicht haben Sie dieses Verhalten als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie mit der rechten Maustaste (oder <kbd>Strg</kbd> + Klick) Kontextmenüs auf Ihrem Desktop oder Laptop aufrufen.

Historisch gesehen erforderte die Assoziation eines Elements mit einem anderen und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Performanceprobleme hinzufügte. Dies war auch nicht in allen Situationen funktionsfähig. Die in dem [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen, solche Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript zu implementieren.

## Assoziieren von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu assoziieren, müssen Sie zuerst erklären, welches Element der Anker ist, und dann angeben, welches(n) positionierte(n) Element(e) Sie mit diesem Anker assoziieren möchten. Dies schafft eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS-Ankerassoziation

Um ein Element als Anker mit CSS zu erklären, müssen Sie ihm einen Ankernamen mittels der {{cssxref("anchor-name")}}-Eigenschaft zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir zudem die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Um ein Element in ein anker-positioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fixiert [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden zu assoziieren:

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

Dies wird folgendermaßen dargestellt:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verbunden — wenn Sie den Anker positionieren und an eine andere Stelle auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle belassen. Sie werden die eigentliche Verbindung in Aktion sehen, wenn wir [Elemente basierend auf der Ankerposition positionieren](#positionieren_von_elementen_relativ_zu_ihrem_anker).

### Implizite Ankerassoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen hergestellt. Zum Beispiel wird, wenn die [Popover API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einem Steuerungselement zu assoziieren, eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann geschehen, wenn:

- Deklarativ ein Popover mit einem Steuerungselement mithilfe der [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)- und [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribute assoziiert wird.
- Programmatisch eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einem Steuerungselement unter Verwendung der `source`-Option assoziiert wird.
- Ein {{htmlelement("select")}}-Element und sein Dropdown-Picker in die Funktionalität für [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den {{cssxref("appearance")}}-Eigenschaftswert `base-select` integriert sind. In diesem Fall wird eine implizite Popover-Aufrufer-Beziehung zwischen den beiden erstellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden assoziieren einen Anker mit einem Element, aber sie sind noch nicht verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Positionieren von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Assoziieren eines positionierten Elements mit einem Anker an sich nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem assoziierten Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values)-Wertes auf einer {{Glossary("Inset_properties", "Einfügensigenschaft")}}, durch [Festlegen eines `position-area`](#setting_a_position-area) oder durch das Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziierung und Positionierung funktionieren. Wenn es ausgeblendet ist (z.B. über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir besprechen, wie ein anker-positioniertes Element ausgeblendet wird, wenn sein Anker verschwindet, in [Bedingtes Ausblenden unter Verwendung von `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Einfügensigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fixiert positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Einfügensigenschaften")}} festgelegt werden. Mit `position: absolute` ist dieser Einfügenswert ein absoluter Abstand relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Einfügenswert ein absoluter Abstand relativ zum Ansichtsfenster.

Die CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es positionierten Elementen, relativ zu den Kanten ihrer zugehörigen Anker platziert zu werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Einfügensigenschaften ist. Wird sie genutzt, setzt die Funktion den Einfügenswert als einen absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element relativ positioniert wird, und der Abstand von dieser Seite definiert wird.

Die Funktionskomponenten sehen folgendermaßen aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wird er weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder mit dem Element über das nicht standardisierte [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut assoziiert ist.
    > [!NOTE]
    > Die Angabe eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, usw.) oder logische (`start`, `self-end`, usw.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Einfügensigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfügensigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, das den Abstand als Fallback-Wert angibt, wenn das Element nicht absolut oder fixiert positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Einfügensigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf eine Einfügensigenschaft eines anker-positionierten Elements setzen, wird es positioniert, als ob es nicht an das Ankerelement gebunden ist. Dies ist dasselbe Verhalten, das auftritt, wenn der `<anchor-side>`-Wert nicht kompatibel mit der Einfügensigenschaft ist, auf der er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Inhaltsblocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch oft entweder eine {{cssxref("margin")}} hinzufügen, um Abstand zwischen der Kante des Ankers und dem positionierten Element zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Beispielsweise positioniert diese Regel die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements und fügt dann eine `margin-left` hinzu, um etwas Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockstartkante des Ankerelements entfernt, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keine zusätzliche Margin hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Lassen Sie uns ein Beispiel von `anchor()` in Aktion betrachten. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit einigen Fülltexten darunter und darüber, um den Inhalt seinen Container überlaufen und scrollen zu lassen. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist mit dem Anker über den Ankernamen assoziiert und erhält eine feste Positionierung. Indem wir die {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften einschließen (die in horizontalen links-nach-rechts-Schreibrichtungen äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind), haben wir es an den Anker gebunden. Wir fügen der Infobox eine `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Lassen Sie uns die Einfügenspositionsdeklationen im Detail betrachten:

- `inset-block-start: anchor(end)`: Dies setzt die Blockstartkante des positionierten Elements an die Blockendkante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inlinestartkante des positionierten Elements an die Inlineendkante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element ist `5px` unter und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist am Ankerelement befestigt, nicht am Ansichtsfenster.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft arbeitet nach dem Konzept eines 3x3 Gitters von Kacheln, wobei das Ankerelement die Zentralkachel ist. Mit der `position-area`-Eigenschaft kann das anker-positionierte Element in einer der neun Kacheln positioniert werden oder es über zwei oder drei Kacheln hinweg spannen.

![Das position-area-Gitter, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Reihen und Spalten aufgeteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, sowie Koordinaten-Äquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end`, sowie Koordinaten-Äquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der Zentralkachel werden durch den [Enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der Zentralkachel und dem äußeren Rand des Gitters durch den Enthaltenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Spannungsoptionen, die die Region des Gitters definieren, in der sich das Element positionieren sollte.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Gitterfeld zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) wird das positionierte Element in der oberen linken Zelle platzieren.
- `bottom center` (logisches Äquivalent `end center`) wird das positionierte Element in der unteren Mittelfeldzelle positionieren.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, es zunächst in der Mitte positionieren, und der andere gibt die Anzahl der Spalten an, die überdeckt werden sollen. Zum Beispiel:

- `top span-left` verursacht, dass das positionierte Element in der oberen Reihe platziert wird und über die zentrale und linke Kacheln dieser Reihe spannt.
- `y-end span-x-end` verursacht, dass das positionierte Element am Ende der y-Spalte platziert wird und über die zentrale und x-End-Kacheln dieser Spalte spannt.
- `block-end span-all` verursacht, dass das positionierte Element in die Block-End-Reihe platziert wird und über die inline-start, Mittelpunkt- und inline-end-Kacheln dieser Reihe spannt.

Wenn Sie nur einen Wert angeben, ist der Effekt je nachdem, welcher Wert gesetzt wird, unterschiedlich:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` wäre. Zum Beispiel ergibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert auf denselben Wert gesetzt wäre; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [Referenzseite der `<position-area>`](/de/docs/Web/CSS/position-area_value) für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und dieselben Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um einen Wert für das `position-area`-Eigenschaft des positionierten Elements auszuwählen.

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

Die Infobox erhält eine feste Positionierung und wird mit dem Anker über das CSS assoziiert. Beim Laden ist sie so eingestellt, dass sie an den Anker mit `position-area: top;` gebunden wird, was sie veranlasst, oben im position-area-Gitter positioniert zu werden. Dies wird überschrieben, sobald Sie andere Werte im `<select>`-Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area`-Werte auszuwerten, die aus dem `<select>`-Menü für die Infobox ausgewählt wurden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um zu sehen, welche Auswirkungen sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Setting an `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im vorherigen Beispiel haben wir die Größe des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben auf die Größendefinition bewusst verzichtet, um Ihnen das Verhalten, das dies verursacht, zu zeigen.

Wenn ein positioniertes Element in unbelegten `position-area`-Gitters ohne explizite Größenangabe platziert wird, wird es an die angegebene Gitterbereichsgröße angepasst und verhält sich so, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird entsprechend seiner [Enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block)-Größe dimensioniert, welche die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fixiert positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie nötig, um den Textinhalt zu passen, während sie durch den Rand des Ansichtsfensters eingeschränkt werden. In diesem Fall wickelt sich der Text, wenn er auf der linken Seite des Gitters mit einem beliebigen `left` oder `inline-start`-Wert platziert wird. Wenn die max-content-Größe des verankerten Elements schmaler oder kürzer als sein Anker ist, wachsen sie nicht, um die Größe des Ankers anzupassen.

Wenn das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, wird es mit der angegebenen Gitterzelle ausgerichtet und die Breite wird dieselbe wie das Ankerelement sein. In diesem Fall ist seine Mindesthöhe die Größe des Enthaltenden Blocks des Ankerelements. Es wird nicht überfließen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrieren auf den Anker unter Verwendung von `anchor-center`

Während Sie das anker-positionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Einfügensigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. CSS-Ankerpositionierung bietet eine Möglichkeit, ein anker-positioniertes Element relativ zu seinem Anker zu zentrieren, wenn Einfügensigenschaften anstelle von `position-area` verwendet werden, um es zu binden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}}- und {{cssxref("place-self")}}-Kurzformen) existieren, um Entwicklern das einfache Ausrichten von Elementen in der Inline- oder Blockrichtung innerhalb verschiedener Layout-Systeme zu ermöglichen, zum Beispiel entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Mittelpunkt seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die Basis-CSS wie im vorherigen Beispiel. Die Infobox erhält eine feste Positionierung und wird mit der Unterkante des Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf den Mittelpunkt des Ankers zentriert ist:

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

Dies zentriert das anker-positionierte Element am unteren Ende seines Ankers:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Elemente in Bezug auf die Ankergröße skalieren

Neben dem Positionieren eines Elements relativ zur Position seines Ankers können Sie auch ein Element relativ zur Größe seines Ankers mit der [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenbeschreibungwertes dimensionieren.

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

`anchor-size()`-Funktionen lösen sich in {{cssxref("length")}}-Werte auf. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie die Größe des Elements skalieren möchten. Wird weggelassen, wird der **Standardanker** des Elements, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu dem das positionierte Element dimensioniert wird. Dies kann durch physische (`width` oder `height`) oder logische (`inline`, `block`, `self-inline`, oder `self-block`) Werte ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe als Fallback-Wert an, falls das Element nicht absolut oder fixiert positioniert ist, oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel skaliert diese Regel die Breite des positionierten Elements so, dass sie der Breite des Standardankerelements entspricht:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel skaliert die Inlinesize des positionierten Elements auf das Vierfache der Inlinegröße des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Sehen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird mit dem Anker auf dieselbe Weise assoziiert wie zuvor. Diesmal binden wir es jedoch mit einer `position-area` auf die rechte Seite des Ankers und geben ihm eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Darüber hinaus erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, sodass es animiert wird, wenn sich der Zustand ändert.

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

Fahren Sie mit dem Mauszeiger über das Ankerelement oder wechseln Sie zu ihm — das positionierte Element wächst mit dem Anker und zeigt, dass die Größe des anker-positionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einfügen- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte erkunden diese Verwendungen genauer, bevor sie ein Anwendungsbeispiel bereitstellen.

### Position eines Elements basierend auf Ankergröße festlegen

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Einfügen-Eigenschaft")}}-Wertes verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionieren von Elementen relativ zu ihrem Anker](#positionieren_von_elementen_relativ_zu_ihrem_anker) weiter oben); das Element wird seine Position nicht ändern, wenn sein Anker es tut. Stattdessen wird das Element entsprechend den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute)- oder [`fixed`](/de/docs/Web/CSS/position#fixed)-Positionierung positioniert.

Das kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement sich nur vertikal bewegen kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das anker-位置ierte Element immer rechts von seinem Anker zu positionieren, auch wenn sich die Ankerbreite ändert.

### Rand eines Elements basierend auf Ankergröße festlegen

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb einer `margin-*`-Eigenschaft verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie den Abstand des anker-positionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements festlegen möchten, selbst wenn sich die Breite ändert.

### `anchor-size()` Position und Margin-Beispiel

Lassen Sie uns ein Beispiel betrachten, bei dem wir den Abstand und die Position eines anker-positionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussierbar ist. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zunächst das `anchor`-`<div>` als Ankerelement, indem wir ihm {{cssxref("anchor-name")}} zuweisen. Das positionierte Element hat seine {{cssxref("position")}} auf `absolute` gesetzt und wird über die {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}}-Dimensionen auf den Anker und die Infobox und fügen einen {{cssxref("transition")}} auf den Anker, so dass Breitenänderungen sanft animiert werden, wenn sich der Zustand ändert:

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

Nun zum interessantesten Teil. Hier setzen wir die `width` des Anchors auf `300px`, wenn es fokussiert oder überfahren wird. Dann setzen wir die:

- `top` Wert der Infobox auf `anchor(top)`. Dies sorgt dafür, dass die Oberkante der Infobox immer in Einklang mit der Oberkante des Ankers bleibt.
- `left` Wert auf `anchor-size(width)`. Dies positioniert die linke Seite der Infobox den angegebenen Abstand von der linken Kante ihres nächsten positionierten Vorfahren. In diesem Fall ist der angegebene Abstand gleich der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies stellt sicher, dass die Infobox immer einen linken Abstand hat, der sie und den Anker trennt, gleich einem Viertel der Breite des Ankers.

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

Versuchen Sie, zum Anker zu wechseln oder darüber zu schweben und beachten Sie, wie die Infobox in Größe und links Margin proportional zur Breite des Ankerelements wächst.

## Siehe auch

- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Überlauf handhaben: Fallbacks versuchen und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
