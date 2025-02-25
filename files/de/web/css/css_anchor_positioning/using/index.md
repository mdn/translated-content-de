---
title: Verwenden der CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{CSSRef}}

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente aneinander zu binden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der ankerpositionierten Elemente kann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

Die CSS-Ankerpositionierung bietet außerdem rein CSS-basierte Mechanismen zum Festlegen mehrerer alternativer Positionen für ein ankerpositioniertes Element. Wenn beispielsweise ein Tooltip an ein Formularfeld angebunden ist, der Tooltip aber in seiner Standardposition außerhalb des Bildschirms angezeigt würde, kann der Browser versuchen, ihn in einer anderen vorgeschlagenen Position anzuzeigen, sodass er auf dem Bildschirm bleibt oder ihn gegebenenfalls ganz auszublenden.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Assoziations-, Positionierungs- und Größenbestimmungsfunktionen des Moduls auf grundlegender Ebene verwenden. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten diskutierten Konzepte aufgenommen. Informationen zum Festlegen alternativer Positionen und dem Ausblenden ankerpositionierter Elemente finden Sie unter [Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes binden zu wollen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerungen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element erscheinen, um weitere Informationen bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass ein Inhalt — oft wiederverwendbar und dynamisch generiert — relativ zu einem Ankerelement positioniert wird. Solche Anwendungsfälle wären recht einfach zu implementieren, wenn das zu bindende Element (also das **Ankerelement**) immer an derselben Stelle in der Benutzeroberfläche wäre und das gebundene Element (also das **ankerpositionierte Element**, oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Der Standort der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig konfiguriert wird (z.B. durch Scrollen, Ändern der Ansichtsbereichsgröße, Drag & Drop usw.). Beispielsweise, wenn sich ein Element wie ein Formularfeld dem Rand des Ansichtsbereichs nähert, könnte sein Tooltip außerhalb des Bildschirms enden. Im Allgemeinen möchten Sie den Tooltip an seine Formularsteuerung binden und sicherstellen, dass der Tooltip sichtbar bleibt, solange das Formularfeld sichtbar ist. Dieser Tooltip wird bei Bedarf automatisch verschoben. Sie haben dieses Verhalten möglicherweise als Standardverhalten Ihres Betriebssystems bemerkt, wenn Sie mit der rechten Maustaste (oder <kbd>Strg</kbd> + Klick) Kontextmenüs auf Ihrem Desktop oder Laptop öffnen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was zu Komplexität und Leistungsproblemen führte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst deklarieren, welches Element der Anker ist, und dann angeben, welches positionierte Element oder welche positionierten Elemente mit diesem Anker verknüpft werden sollen. Dies schafft eine Ankerreferenz zwischen den beiden. Diese Verknüpfung kann explizit via CSS oder implizit erstellt werden.

### Explizite CSS-Ankerverknüpfung

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen darauf setzen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Um ein Element zu einem ankerpositionierten Element zu machen, sind zwei Schritte erforderlich: Es muss mithilfe der {{cssxref("position")}}-Eigenschaft absolut oder fest positioniert werden. Das positionierte Element hat dann die Eigenschaft {{cssxref("position-anchor")}} auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden zu verketten.

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

Wir werden das oben genannte CSS auf das folgende HTML anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Das wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt verknüpft, aber im Moment müssen Sie uns darauf vertrauen. Sie sind noch nicht miteinander verbunden — wenn Sie den Anker positionieren und ihn woanders auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden die tatsächliche Verbindung in Aktion sehen, wenn wir uns damit beschäftigen [Elemente basierend auf der Ankerposition zu positionieren](#positionierung_von_elementen_relativ_zu_ihrem_anker).

### Implizite Ankerverknüpfung

In einigen Fällen wird eine implizite Ankerreferenz zwischen zwei Elementen hergestellt, aufgrund der semantischen Natur ihrer Beziehung. Zum Beispiel, wenn die [Popover-API](/de/docs/Web/API/Popover_API) verwendet wird, um ein Popover mit einer Kontrolle zu verknüpfen, wird eine implizite Ankerreferenz zwischen den beiden hergestellt. Dies kann passieren, wenn:

- Ein Popover deklarativ mit einer Kontrolle unter Verwendung der [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)- und [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribute verknüpft wird.
- Eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmatisch mit einer Kontrolle verknüpft wird, indem die `source`-Option verwendet wird.

> [!NOTE]
> Die obigen Methoden verknüpfen einen Anker mit einem Element, aber sie sind noch nicht verbunden. Um sie zusammen zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Positionierung von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist es an sich nicht besonders nützlich, ein positioniertes Element mit einem Anker zu verknüpfen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch Setzen eines [CSS-`anchor()`-Funktion](#using_inset_properties_with_anchor_function_values)-Werts auf einer {{Glossary("Inset_properties", "Einfügeneigenheit")}}, [Festlegen eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Verknüpfung und Positionierung funktioniert. Wenn es ausgeblendet ist (zum Beispiel durch [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie man ein ankerpositioniertes Element ausblendet, wenn sein Anker im Abschnitt [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) verschwindet.

### Verwenden von Einfügeneigenschaften mit `anchor()`-Funktionswerten

Konventionell absolut und fest positionierte Elemente werden explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Einfügeneigenschaften")}} gesetzt werden. Mit `position: absolute` ist dieser Einfügepositionswert ein absoluter Abstand relativ zu den Kanten des nächsten positionierten Vorfahren. Mit `position: fixed` ist der Einfügepositionswert ein absoluter Abstand relativ zum Ansichtsfenster.

Die CSS-Ankerpositionierung ändert dieses Paradigma, indem ankerpositionierte Elemente relativ zu den Kanten ihrer zugeordneten Anker platziert werden können. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Einfügeneigenschaften ist. Bei Verwendung setzt die Funktion den Einfügepositionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Komponenten der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaftswert des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet. Dies ist der Anker, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft verwiesen wird, oder der mit dem Element über das nicht-standardmäßige [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut verknüpft ist.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementverknüpfung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [verschiedene `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen auf demselben Element angeben, ist das positionierte Element nur mit einem einzelnen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder ein `<percentage>` zwischen dem Anfang (`0%`) und dem Ende (`100%`) der Achse der Einfügeneigenheit, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfügeneigenheit ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, der den Abstand angibt, der als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht mit der Einfügeneigenheit kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie einen Längen- oder Prozentwert direkt auf eine Einfügeneigenschaft eines ankerpositionierten Elements setzen, wird es so positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist dasselbe Verhalten, das auftritt, wenn der `<anchor-side>`-Wert mit der Einfügeneigenschaft unvereinbar ist, auf der er gesetzt ist und der Fallback verwendet wird. Diese beiden Deklarationen sind äquivalent:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des ursprünglichen Containing Blocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich auf eine Seite des Standardankers. Sie werden auch häufig einen {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen, oder `anchor()` in einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Beispielsweise positioniert diese Regel den rechten Rand des positionierten Elements bündig mit dem linken Rand des Ankerelements und fügt dann etwas `margin-left` hinzu, um einen Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert den logischen Block-End-Rand des positionierten Elements `10px` vom logischen Block-Start-Rand des Ankerelements entfernt, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Schauen wir uns ein Beispiel für `anchor()` in Aktion an. Wir haben dasselbe HTML wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber, um den Inhalt zum Überlaufen seines Containers zu bringen und zu blättern. Wir werden dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen geben:

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

Die Infobox wird über den Ankernamen mit dem Anker verknüpft und erhält eine feste Positionierung. Indem die Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} angegeben werden (die in horizontalen Links-nach-Rechts-Schreibmodi {{cssxref("top")}} und {{cssxref("left")}} entsprechen), haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Positionierungserklärungen der Einfügeneigenschaften genauer an:

- `inset-block-start: anchor(end)`: Setzt die Block-Start-Kante des positionierten Elements auf die Block-End-Kante des Ankers, berechnet mit der Funktion `anchor(end)`.
- `inset-inline-start: anchor(self-end)`: Setzt die Inline-Start-Kante des positionierten Elements auf die Inline-End-Kante des Ankers, berechnet mit der Funktion `anchor(self-end)`.

Dies gibt uns folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element ist `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten blättern, bleibt das positionierte Element relativ zum Ankerelement. Es ist fixiert am Ankerelement, nicht am Ansichtsfenster.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}}-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zum Positionieren von Elementen relativ zu Ankern. Die `position-area`-Eigenschaft funktioniert auf dem Konzept eines 3x3-Rasters von Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in einer der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area-Gitter, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [Containment-Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den Containing Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus ein oder zwei Werten basierend auf den oben beschriebenen Zeilen- und Spaltenwerten, mit Spannungsoptionen, die den Bereich des Rasters definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rastern zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Quadrat.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Quadrat.

Du kannst einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, indem es zunächst in die Mitte platziert wird, und der andere gibt an, wie viel dieser Spalte beansprucht werden soll. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert und über die mittleren und linken Kacheln dieser Reihe gespannt wird.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert und über die mittleren und x-End-Kacheln dieser Spalte gespannt wird.
- `block-end span-all` bewirkt, dass das positionierte Element in der Blockendreihe platziert und über die inline-start, center und inline-end Kacheln dieser Reihe gespannt wird.

Wenn Sie nur einen Wert angeben, ist die Wirkung unterschiedlich, je nachdem, welcher Wert gesetzt ist:

- Ein physikalischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` ist. Zum Beispiel hat `top` die gleiche Wirkung wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als wäre der andere Wert auf denselben Wert gesetzt, zum Beispiel hat `start` die gleiche Wirkung wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wertreferenzseite für eine detaillierte Beschreibung aller verfügbaren Werte. Eine Mischung aus einem logischen Wert mit einem physischen Wert macht die Deklaration ungültig.

Lassen Sie uns einige dieser Werte demonstrieren; dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und wird mit CSS mit dem Anker verbunden. Wenn geladen, wird sie eingestellt, um mit `position-area: top;` an den Anker gebunden zu sein, was bewirkt, dass sie am oberen Rand des position-area-Rasters positioniert wird. Dies wird überschrieben, sobald Sie verschiedene Werte aus dem `<select>`-Menü auswählen.

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

Wir haben auch ein kurzes Skript eingebunden, um die neuen `position-area`-Werte aus dem `<select>`-Menü auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Festlegen einer `position-area`", "100%", "250") }}

### Breite des positionierten Elements

In dem obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit dimensioniert. Wir haben bewusst auf die Dimensionierung verzichtet, um das Verhalten zu beobachten, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Dimensionierung in `position-area`-Rasterzellen platziert wird, richtet es sich mit dem angegebenen Gitterbereich aus und verhält sich, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird gemäß seiner [container block](/de/docs/Web/CSS/CSS_display/Containing_block)-Größe dimensioniert, die die Breite seines Inhalts ist. Diese Größe wurde durch das Setzen von `position: fixed` auferlegt. Automatisch dimensionierte absolut und fest positionierte Elemente werden automatisch dimensioniert und dehnen sich so weit aus, wie es notwendig ist, um den Textinhalt anzupassen, während sie durch den Rand der Ansicht eingeschränkt werden. In diesem Fall, wenn auf der linken Seite des Rasters mit einem `left`- oder `inline-start`-Wert platziert, wird der Text umgebrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer ist als sein Anker, wachsen sie nicht, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, wie zum Beispiel mit `position-area: bottom center`, richtet es sich mit der angegebenen Rasterzelle aus und die Breite entspricht der des Ankerelements. In diesem Fall ist seine Mindesthöhe die `container block`-Größe des Ankerelements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit ist wie sein längstes Wort.

## Zentrieren auf den Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Einfügeneigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn Einfügeneigenschaften verwendet werden, anstelle von `position-area`, um es zu verbinden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands) existieren, um Entwicklern das einfache Ausrichten von Elementen in Inline- oder Blockrichtung in verschiedenen Layoutsystemen zu ermöglichen, beispielsweise entlang der Haupt- oder Querachse bei Flex-Kindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit der Mitte seines Standardankers ausrichtet.

In diesem Beispiel wird dasselbe HTML und dieselbe Basis-CSS wie im vorherigen Beispiel verwendet. Die Infobox wird fest positioniert und mit dem unteren Rand des Ankers verbunden. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass sie horizontal auf der Mitte des Ankers zentriert ist:

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

{{EmbedLiveSample("Zentrieren auf den Anker mit `anchor-center`", "100%", "250")}}

## Dimensionierung der Elemente basierend auf der Ankergröße

Zusätzlich zum Positionieren eines Elements relativ zur Position seines Ankers können Sie ein Element auch relativ zur Größe seines Ankers dimensionieren, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Dimensionseigenschaftswerts verwenden.

Dimensionseigenschaften, die einen `anchor-size()`-Wert akzeptieren können, sind:

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
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, zu dem Sie die Größe des Elements relativ festlegen möchten. Wenn weggelassen, wird der **Standardanker** des Elements, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft verwiesen wird, verwendet.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element dimensioniert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements auf die gleiche wie die Breite des Standardankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Lassen Sie uns ein Beispiel betrachten. Das HTML und die Basis-CSS sind dieselben wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox wird fest positioniert und mit dem Anker auf dieselbe Weise wie zuvor verbunden. Allerdings wird sie diesmal mit einer `position-area` an die rechte Seite des Ankers gebunden und auf die fünf fache Breite des Ankers dimensioniert:

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

Fahren Sie mit der Maus über das Ankerelement oder tabben Sie darauf – das positionierte Element wächst, während der Anker wächst, und zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{EmbedLiveSample("Elementdimensionierung basierend auf Ankergröße", "100%", "250")}}

## Weitere Verwendungen von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Einfüge- und Randeigenschaften verwenden. Die folgenden Abschnitte untersuchen diese Verwendungen ausführlicher, bevor sie ein Anwendungsbeispiel bieten.

### Einstellen der Elementposition basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines {{Glossary("Inset_properties", "Einsetzeigenschaftswerts")}} verwenden, um Elemente basierend auf der Größe ihres Ankerelements zu positionieren, zum Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);
```

Dies positioniert ein Element nicht relativ zur Position seines Ankers wie die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion oder die {{cssxref("position-area")}}-Eigenschaft (siehe [Positionierung von Elementen relativ zu ihrem Anker](#positionierung_von_elementen_relativ_zu_ihrem_anker) oben beschrieben); das Element ändert seine Position nicht, wenn sein Anker dies tut. Stattdessen wird das Element entsprechend den normalen Regeln der [`absolute`](/de/docs/Web/CSS/position#absolute) oder [`fixed`](/de/docs/Web/CSS/position#fixed) Positionierung positioniert.

Dies kann in einigen Situationen nützlich sein. Zum Beispiel, wenn Ihr Ankerelement nur vertikal verschoben werden kann und immer neben dem Rand seines nächsten positionierten Vorfahren horizontal bleibt, könnten Sie `left: anchor-size(width)` verwenden, um zu bewirken, dass das ankerpositionierte Element immer rechts von seinem Anker positioniert ist, auch wenn sich die Ankerbreite ändert.

### Einstellen des Elementrandes basierend auf der Ankergröße

Sie können die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines `margin-*`-Eigenschaftswerts verwenden, um Elementränder basierend auf der Größe ihres Ankerelements festzulegen, zum Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

Dies kann nützlich sein, wenn Sie möchten, dass der Rand eines ankerpositionierten Elements immer gleich ist wie derselbe Prozentsatz der Breite des Ankerelements, auch wenn sich die Breite ändert.

### `anchor-size()`-Positions- und Randbeispiel

Lassen Sie uns ein Beispiel betrachten, bei dem wir den Rand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, eines `anchor`-Element und eines `infobox`-Element, die wir relativ zum Anker positionieren werden. Wir geben dem Ankerelement ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Wir haben auch Fülltext eingefügt, um die Körperhöhe groß genug zu machen, um Scrollen zu erfordern, aber dieser wurde der Kürze halber ausgeblendet.

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

In dem CSS deklarieren wir zuerst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement verknüpft. Wir setzen zudem absolute {{cssxref("height")}} und {{cssxref("width")}}-Dimensionen auf dem Anker und der Infobox und fügen eine {{cssxref("transition")}} auf dem Anker ein, damit sich Breitenänderungen reibungslos animieren, wenn sich der Zustand ändert:

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

Kommen wir nun zum interessantesten Teil. Hier setzen wir die Ankerbreite auf `300px`, wenn es "hovered" (überfahren) oder fokussiert ist. Wir setzen dann die Infobox:

- `top`-Wert auf `anchor(top)`. Dadurch bleibt die Oberseite der Infobox immer an der Oberseite des Ankers ausgerichtet.
- `left`-Wert auf `anchor-size(width)`. Dadurch wird die linke Seite der Infobox im angegebenen Abstand vom linken Rand ihres nächstgelegenen positionierten Vorfahren positioniert. In diesem Fall entspricht der angegebene Abstand der Breite des Ankerelements und der nächste positionierte Vorfahre ist das `<body>`-Element, sodass die Infobox rechts vom Anker erscheint.
- `margin-left`-Wert auf `calc(anchor-size(width)/4)`. Dadurch bekommt die Infobox immer einen linken Rand Abstand zum Anker, der einem Viertel der Ankerbreite entspricht.

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

Versuchen Sie, den Anker zu fokussieren oder mit der Maus darüber zu fahren, und beachten Sie, wie sich die Position und der linke Rand der Infobox proportional zur Breite des Ankerelements vergrößern.

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)-Modul
- [Lernen: Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
