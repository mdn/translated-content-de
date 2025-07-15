---
title: Verwendung von CSS Anker-Positionierung
short-title: Verwendung der Anker-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS Anker-Positionierungs**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **anker-positionierte Elemente** definiert werden. Anker-positionierte Elemente können an Ankerelemente gebunden werden. Die anker-positionierten Elemente können dann in Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

Die CSS Anker-Positionierung bietet auch CSS-exklusive Mechanismen zur Angabe mehrerer alternativer Positionen für ein anker-positioniertes Element. Zum Beispiel, wenn ein Tooltip an ein Formularfeld verankert ist, der Tooltip jedoch ansonsten außerhalb des Bildschirms in seinen Standardeinstellungen angezeigt würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position anzuzeigen, damit er auf dem Bildschirm platziert wird oder, alternativ, ihn ganz auszublenden, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Anker-Positionierung und wie man die Assoziations-, Positionierungs- und Größenfunktionen des Moduls auf grundlegender Ebene verwendet. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes unten diskutierte Konzept aufgenommen. Informationen zur Angabe alternativer Positionen und zum Ausblenden von anker-positionierten Elementen finden Sie im [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr verbreitet, ein Element an ein anderes zu binden oder zu verknüpfen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element angezeigt werden, um weitere Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass einige Inhalte — oft wiederverwendbare und dynamisch generierte — relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle zu erstellen, wäre relativ einfach, wenn das zu bindende Element (auch bekannt als **Ankerelement**) immer an der gleichen Stelle in der Benutzeroberfläche wäre und das gebundene Element (auch bekannt als **anker-positioniertes Element** oder nur **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Doch ist dies selten so einfach.

Die Position von positionierten Elementen relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z.B. durch Scrollen, Ändern der Ansicht, Drag & Drop etc.). Wenn ein Element, wie etwa ein Formularfeld, nahe an den Rand der Ansicht gelangt, könnte sein Tooltip möglicherweise außerhalb des Bildschirms enden. Generell möchten Sie den Tooltip an sein Formularsteuerelement binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Rechtsklicks (<kbd>Strg</kbd> + Klick) Kontextmenüs auf Ihrem Desktop oder Laptop ausführen.

Historisch gesehen erforderte die Verknüpfung eines Elements mit einem anderen und die dynamische Änderung des Standorts und der Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen, solche Anwendungsfälle performativ und deklarativ mit CSS (und HTML) anstelle von JavaScript zu implementieren.

## Assoziation von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welche positionierten Elemente mit diesem Anker assoziiert werden sollen. Dadurch entsteht eine Ankerreferenz zwischen den beiden. Diese Assoziation kann explizit über CSS oder implizit erstellt werden.

### Explizite CSS Anker-Assoziation

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie ihm über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen geben. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankerefekt besser demonstriert.

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

Das Umwandeln eines Elements in ein anker-positioniertes Element erfordert zwei Schritte: Es muss durch die {{cssxref("position")}}-Eigenschaft absolut oder fest [positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verknüpfen:

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

Wir werden das obige CSS auf folgendes HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Der Anker und die Infobox sind jetzt assoziiert, aber im Moment müssen Sie uns dabei vertrauen. Sie sind noch nicht miteinander verbunden — wenn Sie den Anker positionieren und ihn an eine andere Stelle auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle belassen. Sie werden das eigentliche Verbinden in Aktion sehen, wenn wir uns mit dem [Positionieren von Elementen basierend auf der Ankerposition](#positionierung_von_elementen_relativ_zu_ihrem_anker) befassen.

### Implizite Anker-Assoziation

In einigen Fällen wird aufgrund der semantischen Natur ihrer Beziehung eine implizite Ankerreferenz zwischen zwei Elementen hergestellt. Zum Beispiel wird, wenn das [Popover-API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einem Steuerelement zu verknüpfen, eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann auftreten, wenn:

- Deklaratives Verknüpfen eines Popovers mit einem Steuerelement durch Verwendung der Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).
- Programmatisches Verknüpfen einer Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) mit einem Steuerelement unter Verwendung der `source`-Option.
- Ein {{htmlelement("select")}}-Element und dessen Dropdown-Auswahl sind in die [anpassbare Auswahlfunktionalität](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft einbezogen. In diesem Fall wird eine implizite Popover-Invokator-Beziehung zwischen den beiden hergestellt, was auch bedeutet, dass sie eine implizite Ankerreferenz haben.

> [!NOTE]
> Die oben genannten Methoden verknüpfen zwar einen Anker mit einem Element, sind jedoch noch nicht verbunden. Um sie zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Verknüpfen eines positionierten Elements mit einem Anker für sich alleine nicht von großem Nutzen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies erfolgt entweder durch Setzen eines [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values)-Wertes auf einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}}, [Angabe eines `position-area`](#setting_a_position-area) oder das Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel durch [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir erörtern, wie man ein anker-positioniertes Element ausblendet, wenn sein Anker verschwindet, im [Bedingten Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf Inset-Eigenschaften gesetzt werden. Mit `position: absolute` ist dieser Inset-Positionswert ein absoluter Abstand relativ zu den Rändern des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Inset-Positionswert ein absoluter Abstand relativ zum Sichtfenster.

Die CSS Anker-Positionierung ändert dieses Paradigma, indem sie es ermöglicht, anker-positionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker(s) zu platzieren. Das Modul definiert die Funktion [`anchor()`](/de/docs/Web/CSS/anchor), die ein gültiger Wert für jede der Inset-Eigenschaften ist. Bei Verwendung setzt die Funktion den Inset-Positionswert als absoluten Abstand relativ zum Ankerelement durch die Angabe des Ankerelements, der Seite des Ankerelements, zu der das positionierte Element positioniert wird, und dem Abstand von dieser Seite.

Die Funktionskomponenten sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn ausgelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird oder über das nicht standardmäßige [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Element-Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf dasselbe Element verwenden, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
  - : Gibt die Position relativ zu einer Seite oder mehreren Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physikalische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Eine {{cssxref("length-percentage")}}, die die Entfernung angibt, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht kompatibel mit der Inset-Eigenschaft ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie eine Länge oder einen Prozentsatz direkt auf eine anker-positionierte Inset-Eigenschaft eines Elements setzen, wird es positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist dasselbe Verhalten, das zu sehen ist, wenn der `<anchor-side>`-Wert inkompatibel mit der Inset-Eigenschaft ist, auf der er gesetzt ist und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des ursprünglichen umschließenden Blocks platzieren.

Die am häufigsten verwendeten `anchor()`-Parameter beziehen sich auf eine Seite des Standardankers. Sie werden auch oft entweder {{cssxref("margin")}} hinzufügen, um Abstand zwischen dem Rand des Ankers und des positionierten Elements zu schaffen, oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel positioniert diese Regel den rechten Rand des positionierten Elements flächenbündig zur linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie sie innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert den logischen Block-Endsrand des positionierten Elements `10px` vom logischen Blockstartrand des Ankerelements entfernt, wobei der Abstand in der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel an, in dem `anchor()` in Aktion gezeigt wird. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, jedoch mit etwas Fülltext darüber und darunter, um den Inhalt über seinen Container hinaus zu vergrößern und zu scrollen. Wir geben auch dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist mit dem Anker über den Ankernamen verknüpft und erhält eine feste Positionierung. Durch Einschließen der {{cssxref("inset-block-start")}}- und {{cssxref("inset-inline-start")}}-Eigenschaften (die in horizontalen Links-nach-Rechts-Schreibweisen äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind) haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Inset-Eigenschafts-Positionierungsdeklarationen genauer an:

- `inset-block-start: anchor(end)`: Dies setzt die block-start-Kante des positionierten Elements an die block-end-Kante des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt die inline-start-Kante des positionierten Elements an die inline-end-Kante des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts des Ankerelements. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei — es ist fest an das Ankerelement und nicht an das Sichtfenster gebunden.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zur Positionierung von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft arbeitet mit dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das anker-positionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area-Raster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [einschließenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der Mitte der Kachel und dem äußeren Rand des Rasters durch den eingeschlossenen Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten mit Spannoptionen, die das Rastergebiet definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterquadrat zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) wird das positionierte Element in das obere linke Quadrat platzieren.
- `bottom center` (logisches Äquivalent `end center`) wird das positionierte Element in das untere mittlere Quadrat platzieren.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in die das positionierte Element platziert werden soll, indem es zunächst in der Mitte platziert wird, und der andere gibt die Menge dieser Spalte zum Spannen an. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert wird und sich über die mittlere und linke Kachel dieser Reihe erstreckt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Säule platziert wird und sich über die mittlere und x-end-Kacheln dieser Säule erstreckt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Block-End-Reihe platziert wird und sich über die inline-start, center und inline-end-Kacheln dieser Reihe erstreckt.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich, je nachdem, welcher Wert festgelegt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als wäre der andere Wert `span-all`. Zum Beispiel ergibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als wäre der andere Wert auf denselben Wert gesetzt; zum Beispiel ergibt `start` den gleichen Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als wären beide Werte auf `center` gesetzt (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert-Referenzseite für eine ausführliche Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physikalischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und die Basisschriftarten wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element eingefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und ist mit dem Anker über CSS verknüpft. Beim Laden ist sie so eingestellt, dass sie an den Anker mit `position-area: top;` gebunden ist, was dazu führt, dass sie am oberen Rand des position-area-Rasters positioniert wird. Dies wird überschrieben, sobald Sie verschiedene Werte aus dem `<select>`-Menü auswählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt zu sehen, den diese auf die Position der Infobox haben:

{{ EmbedLiveSample("Setting an `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Größe des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben absichtlich das Größenänderung weggelassen, um Ihnen das Verhalten zu zeigen, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenänderung in `position-area`-Rasterzellen platziert wird, richtet es sich nach dem angegebenen Rasterbereich aus und verhält sich als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird basierend auf seiner [einschließender Block](/de/docs/Web/CSS/CSS_display/Containing_block)-Größe dimensioniert, was die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` erzwungen. Auto-size auf absolut und fest positionierten Elementen sind automatisch dimensioniert und erstrecken sich so weit, wie nötig ist, um den Textinhalt anzupassen, während sie durch den Rand des Sichtfensters eingeschränkt werden. In diesem Fall, wenn sie auf der linken Seite des Rasters mit einem `left`- oder `inline-start`-Wert platziert sind, wird der Text umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als ihr Anker ist, werden sie nicht wachsen, um die Größe des Ankers anzupassen.

Wenn das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, wird es mit der bestimmten Gitterzelle ausgerichtet und die Breite wird dieselbe wie die des Ankerelements sein. In diesem Fall ist seine minimale Höhe die "`einschließendes Block`-Größe des Ankerelements. Es wird nicht überlaufen, da `min-width` auf {{cssxref("min-content")}} gesetzt ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrieren auf dem Anker mit `anchor-center`

Während Sie das anker-positionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Inset-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS Anker-Positionierung bietet eine Möglichkeit, ein anker-positioniertes Element relativ zu seinem Anker zu zentrieren, wenn Inset-Eigenschaften anstelle von `position-area` verwendet werden, um es zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}}- und {{cssxref("place-self")}}-Abkürzungen) existieren, um Entwicklern das einfache Ausrichten von Elementen in der Inline- oder Blockrichtung in verschiedenen Layoutsystemen zu ermöglichen, beispielsweise entlang der Haupt- oder Querachse im Fall von Flex-Kindern. Die CSS Anker-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und ist an die untere Kante ihres Ankers gebunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf dem Zentrum des Ankers zentriert ist:

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

## Größenänderung von Elementen basierend auf der Ankergröße

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie ein Element auch relativ zur Größe seines Ankers vergrößern, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größenänderungs-Eigenschaftswertes verwenden.

Größenänderungs-Eigenschaften, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

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
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt wird, auf das Sie die Größe des zu positionierenden Elements beziehen möchten. Wenn weggelassen, wird der **Standardanker** des Elements, der Anker, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, zu der das positionierte Element relativ dimensioniert wird. Dies kann mit physikalischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()`-Funktionen beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die angewendete Größe des positionierten Elements zu modifizieren.

Zum Beispiel wird diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements dimensionieren:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und das grundlegende CSS sind dieselben wie in den vorhergehenden Beispielen, mit der Ausnahme, dass dem Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzugefügt wird, um es fokussierbar zu machen. Die Infobox erhält eine feste Positionierung und wird mit dem Anker wie zuvor verknüpft. Dieses Mal binden wir sie jedoch an die rechte Seite des Ankers unter Verwendung einer `position-area` und geben ihr eine Breite, die das Fünffache der Breite des Ankers beträgt:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} mit einer {{cssxref("transition")}}, damit sie beim Zustandsänderung animiert wird.

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

Fahren Sie mit der Maus über oder wechseln Sie zur Ankerelement — das positionierte Element wächst, sobald der Anker wächst, und zeigt, dass die Größe des anker-positionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Andere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die unten stehenden Abschnitte erkunden diese Anwendungen im Detail, bevor sie ein Anwendungsbeispiel bieten.

### Festlegen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Inset-Eigenschaften")}}-Werts verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert kein Element relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker) oben); das Element ändert seine Position nicht, wenn sein Anker es tut. Stattdessen wird das Element gemäß den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn sich Ihr Ankerelement nur vertikal bewegen kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um das anker-positionierte Element bei Änderungen der Ankerbreite immer rechts von seinem Anker zu platzieren.

### Festlegen von Element-Margen basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswertes verwenden, um die Margen von Elementen basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann in Fällen nützlich sein, in denen Sie die Margen eines anker-positionierten Elements immer auf denselben Prozentsatz der Breite des Ankerelements festlegen möchten, selbst wenn sich die Breite ändert.

### `anchor-size()`-Positions- und Margenbeispiel

Schauen wir uns ein Beispiel an, bei dem wir die Margen und die Position eines anker-positionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, sodass es über die Tastatur fokussiert werden kann. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} groß genug zu machen, um ein Scrollen erforderlich zu machen, aber dies wurde zur Übersichtlichkeit ausgeblendet.

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

Im CSS deklarieren wir zuerst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist mit dem Ankerelement über seine {{cssxref("position-anchor")}}-Eigenschaft verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}}-Dimensionen auf den Anker und die Infobox und fügen dem Anker eine {{cssxref("transition")}} hinzu, damit Breitenänderungen bei Zustandsänderungen sanft animiert werden:

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

Nun zum interessantesten Teil. Hier setzen wir die Breite des Ankers auf `300px`, wenn er fokussiert oder über ihn gefahren wird. Wir setzen dann die:

- `top`-Wert der Infobox auf `anchor(top)`. Das bewirkt, dass sich die obere Kante der Infobox immer in Linie mit der oberen Kante des Ankers befindet.
- `left`-Wert auf `anchor-size(width)`. Das bewirkt, dass sich die linke Kante der Infobox in der angegebenen Entfernung von der linken Kante ihres nächsten positionierten Vorfahren befindet. In diesem Fall entspricht die angegebene Entfernung der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left`-Wert auf `calc(anchor-size(width)/4)`. Das bewirkt, dass die Infobox immer einen linken Rand hat, der sie vom Anker trennt und einem Viertel der Ankerbreite entspricht.

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

Das gerenderte Ergebnis ist folgendes:

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

Versuchen Sie, zum Anker zu wechseln oder mit dem Mauszeiger darüber zu fahren und beachten Sie, wie die Position der Infobox und der linke Rand proportional zur Breite des Ankerelements wachsen.

## Siehe auch

- [CSS Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größenänderung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
