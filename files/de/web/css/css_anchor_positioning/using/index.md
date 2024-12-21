---
title: Verwendung von CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 8a080078e909142e25573bd24cd5c5c3a9f05a04
---

{{CSSRef}}

Das **CSS Ankerpositionierungs**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der ankerpositionierten Elemente kann dann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

Die CSS-Ankerpositionierung bietet auch Mechanismen, um mehrere alternative Positionen für ein ankerpositioniertes Element nur mit CSS anzugeben. Zum Beispiel, wenn ein Tooltip an ein Formularfeld gebunden ist, aber ansonsten in seiner voreingestellten Position außerhalb des Bildschirms gerendert würde, kann der Browser versuchen, es in einer anderen vorgeschlagenen Position zu rendern, damit es auf dem Bildschirm angezeigt wird, oder es alternativ ganz zu verbergen, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie die Assoziations-, Positionierungs- und Größenmerkmale des Moduls auf grundlegender Ebene verwendet werden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten besprochene Konzept eingefügt. Für Informationen zur Angabe alternativer Positionen und zum Verbergen von ankerpositionierten Elementen siehe [Umgang mit Überlauf: Fallbacks und bedingtes Verbergen ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr verbreitet, ein Element an ein anderes anzubinden. Zum Beispiel:

- Fehlermeldungen, die neben Formularelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um mehr Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugeordneten Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen verlangen häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch generiert – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle zu erstellen, wäre relativ einfach, wenn das Element, an das angebunden werden soll (das sogenannte **Ankerelement**), stets an derselben Stelle in der UI wäre und das angebundene Element (das sogenannte **ankerpositionierte Element** oder einfach **positioniertes Element**) immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Lage von positionierten Elementen relativ zu ihrem Ankerelement muss aufrechterhalten und angepasst werden, wenn sich das Ankerelement bewegt oder ansonsten seine Konfiguration ändert (z. B. durch Scrollen, Änderung der Fenstergröße, Drag & Drop usw.). Zum Beispiel, wenn ein Element wie ein Formularfeld nahe an den Rand des Fensters kommt, könnte sein Tooltip außerhalb des Bildschirms enden. Generell möchten Sie den Tooltip an sein Formularelement binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit der rechten Maustaste (oder <kbd>Strg</kbd> + Klick) aufrufen.

Historisch gesehen erforderte die Zuordnung eines Elements zu einem anderen Element und die dynamische Änderung des Standorts und der Größe eines positionierten Elements auf Basis der Position eines Ankers JavaScript, was zu Komplexität und Performance-Problemen führte. Es war auch nicht in allen Situationen garantiert, dass es funktionierte. Die Funktionen, die im [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Moduls definiert sind, ermöglichen es, solche Anwendungsfälle performant und deklarativ mit CSS (und HTML) zu implementieren, anstatt mit JavaScript.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, muss zuerst festgelegt werden, welches Element der Anker ist, und dann angegeben werden, welche positionierten Element(e) mit diesem Anker verknüpft werden sollen. Dies kann über CSS oder über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) erfolgen.

### CSS-Only-Methode

Um ein Element mit CSS als Anker zu deklarieren, muss ihm über die {{cssxref("anchor-name")}}-Eigenschaft ein Ankername zugewiesen werden. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die Breite des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Verankerungseffekt besser demonstriert.

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

Ein Element in ein ankerpositioniertes Element umzuwandeln, erfordert zwei Schritte: Es muss absolut oder fix [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name` Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verknüpfen:

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

Wir wenden das obige CSS auf folgendes HTML an:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind nun verknüpft, aber im Moment müssen Sie uns dies glauben. Sie sind noch nicht aneinander gebunden — wenn Sie den Anker positionieren und irgendwo anders auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle belassen. Sie werden die eigentliche Verankerung in Aktion sehen, wenn wir uns das [Positionieren von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) ansehen.

### HTML-Methode

Um ein positioniertes Element in HTML mit einem Anker zu verknüpfen, können Sie das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut verwenden. Sie müssen dem Ankerelement eine [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Das `anchor`-Attribut wird dann auf dem ankerpositionierten Element gesetzt, mit einem Wert, der gleich der `id` des Ankerelements ist, mit dem Sie es verknüpfen möchten.

Wir haben dies im nachfolgenden HTML getan:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

Die Elemente müssen absolut oder fix positioniert sein, um mit Ankern verknüpft werden zu können, daher geben wir der Infobox einen `position` Wert von `fixed`:

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

Dies gibt uns das gleiche Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein positioniertes Element mit einem Ankerelement assoziiert, indem wir das `anchor` Attribut auf dem positionierten Element anstelle der `anchor-name` Eigenschaft des Ankerelements und der `position-anchor` Eigenschaft des positionierten Elements verwendet haben.

{{ EmbedLiveSample("HTML method", "100%", "120") }}

> [!NOTE]
> Das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut hat derzeit weniger Unterstützung als das CSS-Äquivalent. Siehe die [`anchor`-Attribut-Kompatibilitätstabelle](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility) für weitere Informationen.

Wir haben die beiden Elemente verknüpft, aber sie sind noch nicht verankert. Um sie miteinander zu verankern, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist die Assoziierung eines positionierten Elements mit einem Anker alleine nicht sehr sinnvoll. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch Setzen eines Werts der [CSS `anchor()` Funktion](#using_inset_properties_with_anchor_function_values) auf eine {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Angabe eines `position-area`](#setting_a_position-area), oder Zentrieren des positionierten Elements mit dem [`anchor-center` Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir diskutieren, wie ein ankerpositioniertes Element ausgeblendet wird, wenn sein Anker verschwindet in [Bedingtes Verbergen mithilfe von `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()` Funktionswerten

Konventionelle absolut oder fix positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}} oder {{cssxref("percentage")}} Werte auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt werden. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Kanten des nächstgelegenen positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Ansichtsfenster.

Die CSS Ankerpositionierung ändert dieses Paradigma und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer zugeordneten Anker zu platzieren. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die ein gültiger Wert für jede der Inset-Eigenschaften ist. Wenn sie verwendet wird, setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement, indem sie das Ankerelement definiert, die Seite des Ankerelements, relativ zu der das positionierte Element positioniert wird, und den Abstand von dieser Seite.

Die Funktionskomponenten sehen wie folgt aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der im [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft angegebene Anker oder der im HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) referenzierte.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet aber keine Element-Assoziation. Nur die `position-anchor` Eigenschaft und `anker` Attribute erstellen die Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>` Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()` Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen die `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Eine {{cssxref("length-percentage")}} zur Angabe des Abstands, der als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fix positioniert ist, wenn der verwendete `<anchor-side>` Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()` Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()` Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie einen Längen- oder Prozentwert direkt auf einer Inset-Eigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist das gleiche Verhalten, das zu sehen ist, wenn der `<anchor-side>` Wert mit der Inset-Eigenschaft, auf der er gesetzt ist, unkompatibel ist und das Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des nächstgelegenen positionierten Vorfahrens (falls vorhanden) oder des anfänglichen Containment-Blocks platzieren.

Die häufigsten `anchor()` Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden oft entweder eine {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen den Kanten des Ankers und dem positionierten Element zu schaffen oder `anchor()` innerhalb einer `calc()` Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einen `margin-left` hinzu, um etwas Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()` Funktion ist eine Länge. Das bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}} Funktion verwenden können. Diese Regel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockstartkante des Ankerelements entfernt und fügt den Abstand mit der `calc()` Funktion hinzu, sodass kein Rand hinzugefügt werden muss:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` Beispiel

Werfen wir einen Blick auf ein Beispiel von `anchor()` in Aktion. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, jedoch mit etwas Fülltext, der darunter und darüber platziert ist, um den Inhalt über seinen Container zu überlaufen und zu scrollen. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen an:

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

Die Infobox ist mit dem Anker über den Ankernamen assoziiert und erhält eine fixierte Positionierung. Durch das Hinzufügen der {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} Eigenschaften (die im horizontalen Links-nach-Rechts-Schreibmodus äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind), haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Werfen wir einen detaillierteren Blick auf die Inset-Positionierungserklärungen:

- `inset-block-start: anchor(end)`: Dies setzt die Blockstartkante des positionierten Elements zur Blockendkante des Ankers, berechnet mit der `anchor(end)` Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die Inline-Startkante des positionierten Elements zur Inline-Endkante des Ankers, berechnet mit der `anchor(self-end)` Funktion.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts von dem Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement, also fixiert es sich auf das Ankerelement, nicht auf die Ansicht.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area` Eigenschaft arbeitet mit dem Konzept eines 3x3 Gitters von Kacheln, wobei das Ankerelement die zentrale Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu platzieren, oder es über zwei oder drei Kacheln zu spannen.

![Das position-area Gitter, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Zeilen und Spalten aufgeteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end`, und Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end`, und Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Abmessungen der Zentralkachel werden durch den [containment block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während der Abstand zwischen der Zentralkachel und dem äußeren Rand des Gitters durch des positionierte Element's environment scope definiert wird.

Die Werte der `position-area`-Eigenschaft sind aus einem oder zwei Werten zusammengesetzt, die auf den oben beschriebenen Reihen- und Spaltenwerten basieren, mit Spannungsoptionen, um die Region des Gitters zu definieren, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Gitterquadrat zu platzieren. Ein Beispiel:

- `top left` (logische Entsprechung `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Sie können auch einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert bestimmt die Zeile oder Spalte, in der das positionierte Element initial platziert wird, in der Mitte, und der andere bestimmt die Menge, um die diese Spalte bzw. Zeile gespannt wird. Beispiele:

- `top span-left` platziert das positionierte Element in der oberen Zeile und spannt über die mittleren und linken Kacheln dieser Zeile.
- `y-end span-x-end` platziert das positionierte Element am Ende der Y-Spalte und spannt über die mittleren und X-End-Kacheln dieser Spalte.
- `block-end span-all` platziert das positionierte Element in der Block-End-Reihe und spannt über die Inline-Start-, Center- und Inline-End-Kacheln dieser Reihe.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left`, oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` wäre. Zum Beispiel ergibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als ob der andere Wert denselben Wert hat; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value) Werte-Referenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Ein Mischen eines logischen Werts mit einem physischen Wert wird die Erklärung ungültig machen.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet denselben HTML- und Basis-CSS-Stil wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um den `position-area` Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und wird über CSS mit dem Anker assoziiert. Beim Laden wird sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden ist, was das positionierte Element in der obersten Position der `position-area` platzieren wird. Diese Einstellung wird überschrieben, sobald Sie verschiedene Werte aus dem `<select>`-Menü auswählen.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um zu sehen, welchen Effekt sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Setting an `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben die Größenangaben bewusst weggelassen, damit Sie das Verhalten, das dadurch verursacht wird, beobachten können.

Wenn ein positioniertes Element ohne explizite Größenzuweisung in `position-area` Rasterzellen platziert wird, richtet es sich an dem angegebenen Bereich des Rasters aus und verhält sich so, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird entsprechend seiner [containment block](/de/docs/Web/CSS/Containing_block) Größe dimensioniert, welches die Breite seines Inhalts ist. Diese Größe wurde durch das Einstellen von `position: fixed` erzwungen. Automatisch dimensionierte absolut und fix positionierte Elemente sind automatisch dimensioniert, dehnen sich so weit aus, wie erforderlich, um den Textinhalt aufzunehmen, während sie durch den Rand der Ansicht begrenzt werden. In diesem Fall wickelt sich der Text, wenn er auf der linken Seite des Rasters mit einem `left` oder `inline-start` Wert platziert wird. Wenn die `max-content` Größe des verankerten Elements schmaler oder kürzer als die ihres Ankers ist, wächst es nicht, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, wie z.B. mit `position-area: bottom center`, richtet es sich an der angegebenen Gitterzelle aus und die Breite entspricht derjenigen des Ankerelements. In diesem Fall ist seine Mindesthöhe die Größe des enthaltenen Blocks des Ankerelements. Es wird nicht überlaufen, da das `min-width` als {{cssxref("min-content")}} betrachtet wird, was bedeutet, dass es mindestens so breit sein wird wie sein längstes Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center` Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Verbindung mit der `anchor()` Funktion mehr Kontrolle über die genaue Position. Die CSS Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften, anstelle von `position-area`, verwendet werden, um es zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und deren Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern zu ermöglichen, Elemente leicht in der Inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme zu alignieren, zum Beispiel entlang der Haupt- oder Querachse im Fall von Flexkindern. Die CSS Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers aligniert.

Dieses Beispiel verwendet denselben HTML- und Basis-CSS-Stil wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an der Unterkante des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf das Zentrum des Ankers zentriert ist:

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

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie auch ein Element relativ zur Größe seines Ankers mithilfe der [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines Größenattributwerts dimensionieren.

Größeneigenschaften, die einen `anchor-size()` Wert akzeptieren können, sind:

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

`anchor-size()` Funktionen lösen sich zu {{cssxref("length")}}-Werten auf. Ihre Syntax sieht wie folgt aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft des Ankerelements gesetzt ist, zu dem Sie das Element dimensionieren möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der Anker, auf den in der [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft Bezug genommen wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, zu dem das positionierte Element relativ dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fix positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}} Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des standardmäßigen Ankerelements:

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

Schauen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind das gleiche wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut erhält, um es fokusierbar zu machen. Die Infobox erhält eine fixe Positionierung und wird wie zuvor mit dem Anker assoziiert. Dieses Mal verankern wir es jedoch auf der rechten Seite des Ankers mit einer `position-area` und geben ihm eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und geben ihm einen {{cssxref("transition")}}, sodass es animiert, wenn sich der Zustand ändert.

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

Bewegen Sie den Mauszeiger über das Ankerelement oder navigieren Sie mit der Tabulatortaste — das positionierte Element wächst, wenn der Anker wächst, was demonstriert, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungen von `anchor-size()`

Sie können auch `anchor-size()` in physischen und logischen Inset- und Rand-Eigenschaften verwenden. Die folgenden Abschnitte erkunden diese Verwendungen genauer, bevor sie ein Anwendungsbeispiel bieten.

### Einstellen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaft")}} Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion oder {{cssxref("position-area")}} Eigenschaft dies tun (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker), oben); das Element ändert seine Position nicht, wenn sich sein Anker bewegt. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in bestimmten Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement sich nur vertikal bewegen kann und immer neben dem Rand seines nächstgelegenen positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das ankerpositionierte Element immer rechts von seinem Anker zu positionieren, auch wenn sich die Ankerbreite ändert.

### Einstellung der Elementmaritensolventgröße auf Basis der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size) Funktion innerhalb eines `margin-*` Eigenschaftswerts verwenden, um Elementabstände basierend auf der Größe ihres Ankerelements festzulegen, beispielsweise:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie den Abstand eines ankerpositionierten Elements immer gleich einem bestimmten Prozentsatz der Breite des Ankerelements setzen möchten, auch wenn die Breite sich ändert.

### `anchor-size()` Position und Randbeispiel

Lassen Sie uns ein Beispiel ansehen, in dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements einstellen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut, damit es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um das Scrollen zu erfordern, aber dieser wurde der Übersicht halber ausgeblendet.

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

Im CSS deklarieren wir zunächst das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Das positionierte Element hat seine {{cssxref("position")}} Eigenschaft auf `absolute` gesetzt und wird über seine {{cssxref("position-anchor")}} Eigenschaft mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker und der Infobox und fügen eine {{cssxref("transition")}} auf den Anker hinzu, sodass Breitenänderungen sanft animiert werden, wenn sich der Zustand ändert:

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

Nun zum interessantesten Teil. Hier setzen wir die `width` des Ankers auf `300px`, wenn es fokussiert oder überfahren wird. Wir setzen dann die `top`-Werte der Infobox zu `anchor(top)`. Dadurch bleibt die Oberseite der Infobox immer auf der Höhe des Ankers. Die `left` Werte der Infobox werden auf `anchor-size(width)` gesetzt, was bedeutet, dass die linke Seite der Infobox den angegeben Abstand von der linken Kante des nächstgelegenen positionierten Vorfahren positioniert wird. In diesem Fall entspricht der angegebene Abstand der Breite des Ankerelements und der nächstgelegene positionierte Vorfahre ist `<body>` Element, sodass die Infobox rechts vom Anker erscheint. Der `margin-left` Wert der Infobox ist auf `calc(anchor-size(width)/4)` gesetzt, wodurch die Infobox immer einen linken Abstand von einem Viertel der Breite des Ankers hat:

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

Versuchen Sie, zum Anker zu tabben oder darüber zu schweben, und beachten Sie, wie die Position der Infobox und linker Abstand proportinal zur Breite des Ankerelements wächst.

## Siehe auch

- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Umgang mit Überlauf: Fallbacks und bedingtes Verbergen ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
