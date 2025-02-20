---
title: Verwendung von CSS-Anker-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Das **CSS-Anchor-Positionierung**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **anker-positionierte Elemente** definiert werden. Anker-positionierte Elemente können an Ankerelemente gebunden werden. Die anker-positionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, gesetzt werden.

Die CSS-Anchor-Positionierung bietet auch Mechanismen, die ausschließlich auf CSS basieren, um mehrere alternative Positionen für ein anker-positioniertes Element anzugeben. Wenn beispielsweise ein Tooltip an ein Formularfeld gebunden ist, der Tooltip jedoch in seinen Standardeinstellungen außerhalb des Bildschirms angezeigt würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position zu rendern, sodass er auf dem Bildschirm platziert wird, oder ihn alternativ ganz auszublenden, wenn gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Anker-Positionierung und wie man die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf einer grundlegenden Ebene verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten diskutierte Konzept hinzugefügt. Informationen zur Angabe von alternativen Positionen und zum Ausblenden von anker-positionierten Elementen finden Sie unter [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, dass man ein Element an ein anderes anbinden oder binden möchte. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um mehr Informationen darüber bereitzustellen.
- Einstellungen oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder einem Button erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte — oft wiederverwendbare und dynamisch generierte — relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle wären relativ einfach zu erstellen, wenn das Element, an das angebunden werden soll (auch bekannt als **Ankerelement**), immer an derselben Stelle in der Benutzeroberfläche wäre und das angebundene Element (auch bekannt als **anker-positioniertes Element** oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig die Konfiguration ändert (z.B. durch Scrollen, Ändern der Viewport-Größe, Drag & Drop usw.). Wenn beispielsweise ein Element wie ein Formularfeld in die Nähe des Viewportrandes kommt, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularelement binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Dies haben Sie vielleicht als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs mit der rechten Maustaste (<kbd>Strg</kbd> + Klick) auf Ihrem Desktop oder Laptop öffnen.

Historisch gesehen erforderte die Zuordnung eines Elements zu einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was die Komplexität und Leistungsprobleme erhöhte. Es war auch nicht garantiert, dass es in allen Situationen funktionierte. Die im [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstatt mit JavaScript.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zunächst angeben, welches Element der Anker ist, und dann festlegen, welches(n) positionierte(n) Element(e) mit diesem Anker verbunden werden sollen. Dies kann über CSS oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) erfolgen.

### Methode mit CSS

Um ein Element als Anker mit CSS zu deklarieren, müssen Sie diesem mit der {{cssxref("anchor-name")}} Eigenschaft einen Ankernamen geben. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Um ein Element in ein anker-positioniertes Element zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fixiert [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}} Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}} Eigenschaft auf den Wert der `anchor-name` Eigenschaft des Ankerelements gesetzt, um die beiden zu verknüpfen:

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun verbunden, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verzurrt — wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an der gleichen Stelle bleiben. Sie werden das eigentliche Verzurren in Aktion sehen, wenn wir uns das [Positionieren von Elementen basierend auf der Ankerposition](#elemente_relativ_zu_ihrem_anker_positionieren) ansehen.

### HTML-Methode

Um ein positioniertes Element in HTML mit einem Anker zu verknüpfen, können Sie das Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) verwenden. Sie müssen dem Ankerelement eine [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Das `anchor` Attribut wird dann am anker-positionierten Element gesetzt, mit einem Wert, der der `id` des Ankerelements entspricht, mit dem Sie es verknüpfen möchten.

Wir haben dies im folgenden HTML getan:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

Elemente müssen absolut oder fixiert positioniert sein, um mit Ankern verbunden zu werden, daher geben wir der Infobox einen `position` Wert von `fixed`:

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

Dies ergibt das gleiche Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein positioniertes Element mit einem Ankerelement verknüpft, indem wir das `anchor` Attribut am positionierten Element anstelle der `anchor-name` Eigenschaft des Ankerelements und der `position-anchor` Eigenschaft des positionierten Elements verwendet haben.

{{ EmbedLiveSample("HTML method", "100%", "120") }}

> [!NOTE]
> Das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut hat derzeit weniger Unterstützung als das CSS-Äquivalent. Lesen Sie die [`anchor` Attribut-Kompatibilitätstabelle](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility) für weitere Informationen.

Wir haben die beiden Elemente verknüpft, aber sie sind noch nicht gekoppelt. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS durchgeführt wird.

## Elemente relativ zu ihrem Anker positionieren

Wie wir oben gesehen haben, ist das Verknüpfen eines positionierten Elements mit einem Anker alleine nicht sehr nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch Setzen eines [CSS `anchor()` Funktion](#using_inset_properties_with_anchor_function_values) Wertes auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Festlegen einer `position-area`](#setting_a_position-area), oder indem das positionierte Element mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center) zentriert wird.

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Zuordnung und Positionierung funktioniert. Wenn es ausgeblendet ist (z.B. über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir diskutieren, wie man ein anker-positioniertes Element ausblendet, wenn sein Anker verschwindet, in [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()` Funktionswerten

Konventionell absolut und fixiert positionierte Elemente werden durch Setzen von {{cssxref("length")}} oder {{cssxref("percentage")}} Werten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} explizit positioniert. Bei `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Viewport.

Die CSS-Anchor-Positionierung ändert dieses Paradigma und ermöglicht es, anker-positionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert des Ankerelements, zu dem das Seitenelement positioniert werden soll. Dies ist ein `<dashed-ident>` Wert. Wenn ausgelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft verwiesen wird, oder der, der dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut zugeordnet wurde.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Nur die `position-anchor` Eigenschaft und `anchor` Attribute erstellen die Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()` Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen die `center` des Ankers, physische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder ein `<percentage>` zwischen dem Anfang (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, auf die `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, der die Entfernung definiert, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fixiert positioniert ist, der `<anchor-side>` Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()` Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf die Inset-Eigenschaft des anker-positionierten Elements setzen, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist dasselbe Verhalten, das beobachtet wird, wenn der `<anchor-side>` Wert inkompatibel mit der Inset-Eigenschaft ist, auf die er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahren des Elements (falls vorhanden) oder des initialen enthaltenen Blocks.

Die häufigsten `anchor()` Parameter, die Sie verwenden, beziehen sich auf eine Seite des Standardankers. Sie werden häufig auch einen {{cssxref("margin")}} hinzufügen, um Platz zwischen dem Rand des Ankers und des positionierten Elements zu schaffen, oder `anchor()` innerhalb einer `calc()` Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel den rechten Rand des positionierten Elements bündig mit dem linken Rand des Ankerelements und fügt dann einen `margin-left` hinzu, um Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()` Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}} Funktion verwenden können. Diese Regel positioniert den logischen Blockendrand des positionierten Elements `10px` vom logischen Blockbeginn des Ankerelements, wobei der Abstand mit der `calc()` Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Lassen Sie uns ein Beispiel für `anchor()` in Aktion betrachten. Wir haben das gleiche HTML wie in den vorherigen Beispielen verwendet, jedoch mit einigen Fülltexten darunter und darüber, um den Inhalt zum Überlaufen seines Containers zu bringen und ein Scrollen zu verursachen. Wir geben dem Ankerelement auch denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox wird über den Ankernamen mit dem Anker assoziiert und erhält eine fixe Positionierung. Durch Hinzufügen der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die in horizontalen von links nach rechts schreibenden Modi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie an den Anker angebunden. Wir fügen der Infobox einen `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Betrachten wir die Positionserklärungen der Inset-Eigenschaften genauer:

- `inset-block-start: anchor(end)`: Diese setzt den Blockbeginnrand des positionierten Elements an den Blockendrand des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Diese setzt den Inline-Beginnrand des positionierten Elements an den Inline-Endrand des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist am Ankerelement fixiert, nicht an den Viewport.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()` Funktion für die Positionierung von Elementen relativ zu Ankern. Die `position-area` Eigenschaft arbeitet mit dem Konzept eines 3x3 Gitters aus Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area` Eigenschaft kann verwendet werden, um das anker-positionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu erstrecken.

![Das position-area Gitter, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und der Außenkante des Gitters durch den enthaltenen Block des positionierten Elements definiert wird.

`position-area` Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit Erweiterungsoptionen, die den Bereich des Gitters definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrant zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element in der oberen linken Kachel.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der unteren mittleren Kachel.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert spezifiziert die Zeile oder Spalte, in die das positionierte Element platziert werden soll, und der andere gibt die Menge dieser Spalte an, die überragt werden soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in die obere Zeile platziert wird und sich über die mittlere und linke Kacheln dieser Zeile erstreckt.
- `y-end span-x-end` bewirkt, dass das positionierte Element in das Ende der y-Spalte platziert wird und sich über die mittlere und x-end Kacheln dieser Spalte erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in die Block-Endzeile platziert wird und sich über die inline-start, center und inline-end Kacheln dieser Zeile erstreckt.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich, je nachdem, welcher Wert festgelegt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start, `x-end`) wirkt, als ob der andere Wert `span-all`wäre. Zum Beispiel ergibt`top`den gleichen Effekt wie`top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt, als ob der andere Wert auf denselben Wert gesetzt ist; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die Referenzseite [`<position-area>`](/de/docs/Web/CSS/position-area_value) für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Werts mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet das gleiche HTML und die Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}} Element hinzugefügt haben, um den `position-area` Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine fixe Positionierung und wird über CSS mit dem Anker assoziiert. Beim Laden wird sie auf `position-area: top;` gesetzt, was dazu führt, dass sie am oberen Rand des position-area Gitters positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>` Menü auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um neue `position-area` Werte aus dem `<select>` Menü auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Wirkung auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Setting an `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element nicht explizit in irgendeine Dimension dimensioniert. Wir haben absichtlich die Größenangabe ausgelassen, um Ihnen die Möglichkeit zu geben, das Verhalten zu beobachten, das dies verursacht.

Wenn ein positioniertes Element in `position-area` Rasterfeldzellen ohne eine explizite Dimensionierung platziert wird, richtet es sich an dem angegebenen Gitterbereich aus und verhält sich, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird nach seiner [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) Größe dimensioniert, die die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fixiert positionierte Elemente werden automatisch dimensioniert und erstrecken sich so weit, wie benötigt, um den Textinhalt zu passen, während sie durch den Rand des Viewports begrenzt werden. In diesem Fall wird der Text umbrochen, wenn er auf der linken Seite des Rasters mit einem `left` oder `inline-start` Wert platziert wird. Wenn die `max-content` Größe des verankerten Elements schmaler oder kürzer ist als der Anker, werden sie nicht auf die Größe des Ankers gebracht.

Wenn das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, richtet es sich an der angegebenen Gitterzelle aus und die Breite ist die gleiche wie das Ankerelement. In diesem Fall ist seine Mindesthöhe die [enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block) Größe des Ankerelements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrieren auf dem Anker unter Verwendung von `anchor-center`

Obwohl Sie das anker-positionierte Element mit den `center` Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Kombination mit der `anchor()` Funktion mehr Kontrolle über die genaue Position. Die CSS-Anchor-Positionierung bietet eine Möglichkeit, ein anker-positioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands) existieren, um Entwicklern das einfache Ausrichten von Elementen in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu ermöglichen, beispielsweise entlang der Haupt- oder Querachse im Falle von Flex-Kindern. Die CSS-Anchor-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet das gleiche HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine fixe Positionierung und wird an der unteren Kante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Ankerzentrum zentriert ist:

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

Dies zentriert das anker-positionierte Element am unteren Rand seines Ankers:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Dimensionierung von Elementen basierend auf der Ankergröße

Neben der Möglichkeit, ein Element relativ zur Position seines Ankers zu positionieren, können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mit der [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Größenwerte-Deklaration festlegen.

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

`anchor-size()` Funktionen lösen sich zu {{cssxref("length")}} Werten auf. Ihre Syntax sieht wie folgt aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft des Ankerelements gesetzt ist, zu dem Sie die Größe des Elements relativ festlegen möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, welcher der Anker ist, auf den in der [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft verwiesen wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, nach der das positionierte Element dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fixiert positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden, beziehen sich lediglich auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankers:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()` Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut hinzugefügt wird, um es fokussierbar zu machen. Die Infobox erhält eine fixe Positionierung und wird in gleicher Weise, wie zuvor mit dem Anker assoziiert. Diesmal verankern wir sie jedoch auf der rechten Seite des Ankers durch eine `position-area` und geben ihr eine Breite, die fünfmal so groß ist wie die des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements beim {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, damit es animiert wird, wenn sich der Zustand ändert.

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

Bewegen Sie den Mauszeiger über das Ankerelement oder tabben Sie darauf — das positionierte Element wächst mit dem Anker, was zeigt, dass die Größe des anker-positionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte erkunden diese Verwendungen im Detail, bevor ein Anwendungsbeispiel bereitgestellt wird.

### Einstellen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Inset-Eigenschaftswerts verwenden, um die Position von Elementen basierend auf der Größe ihres Ankerelements einzustellen, z.B.:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion oder die {{cssxref("position-area")}} Eigenschaft (siehe [Positionieren von Elementen relativ zu ihrem Anker](#elemente_relativ_zu_ihrem_anker_positionieren), oben); das Element wird seine Position nicht ändern, wenn sein Anker es tut. Stattdessen wird das Element gemäß den normalen Regeln für [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Beispielsweise, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das anker-positionierte Element immer rechts von seinem Anker zu positionieren, selbst wenn sich die Ankerbreite ändert.

### Einstellen des Elementabstands basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftswerts verwenden, um Elementabstände auf der Grundlage der Größe ihres Ankerelements einzustellen, z.B.:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie möchten, dass der Abstand eines anker-positionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements ist, auch wenn sich die Breite ändert.

### `anchor-size()` Positions- und Margenbeispiel

Schauen wir uns ein Beispiel an, bei dem wir den Abstand und die Position eines anker-positionierten Elements relativ zur Breite des Ankerelements einstellen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, ein `anchor` Element und eine `infobox`, die wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde aus Gründen der Übersichtlichkeit weggelassen.

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

Im CSS deklarieren wir zunächst das `anchor` `<div>` als ein Ankerelement, indem wir ihm ein {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}} Eigenschaft mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker und die Infobox und fügen eine {{cssxref("transition")}} auf dem Anker hinzu, damit Breitenänderungen beim Zustandwechsel reibungslos animiert werden:

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

Nun zum interessantesten Teil. Hier setzen wir die `width` des Ankers auf `300px`, wenn er schwebt oder fokussiert ist. Dann setzen wir die:

- `top` Wert der Infobox auf `anchor(top)`. Dies bewirkt, dass der obere Rand der Infobox immer mit dem oberen Rand des Ankers übereinstimmt.
- `left` Wert auf `anchor-size(width)`. Dies bewirkt, dass der linke Rand der Infobox um die angegebene Entfernung vom linken Rand ihres nächstgelegenen positionierten Vorfahren positioniert wird. In diesem Fall ist die angegebene Entfernung gleich der Breite des Ankerelements, und der nächstgelegene positionierte Vorfahre ist das `<body>` Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left` Wert auf `calc(anchor-size(width)/4)`. Dies bewirkt, dass die Infobox immer einen linken Rand hat, der sie und den Anker trennt, und dieser Abstand beträgt ein Viertel der Ankerbreite.

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

Versuchen Sie, zum Anker zu tabben oder mit dem Mauszeiger darüber zu schweben, und beachten Sie, wie sich die Position und der linke Abstand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
