---
title: Verwendung der CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: fe427ad725f3cf1add1299de3cadfbb2bb05ed14
---

{{CSSRef}}

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Elemente können als **Ankerelemente** und **Anker-positionierte Elemente** definiert werden. Anker-positionierte Elemente können an Ankerelemente gebunden werden. Die Größe und Position der Anker-positionierten Elemente kann dann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

Die CSS-Ankerpositionierung bietet außerdem rein CSS-basierte Mechanismen zur Angabe mehrerer alternativer Positionen für ein Anker-positioniertes Element. Zum Beispiel, wenn ein Tooltip an ein Formularfeld verankert ist, aber ansonsten außerhalb des Bildschirms in seiner Standardpositionseinstellung gerendert werden würde, kann der Browser versuchen, es in einer anderen vorgeschlagenen Position zu rendern, damit es auf dem Bildschirm platziert wird, oder alternativ, es ganz auszublenden, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Ankerpositionierung und wie Sie die Zuordnungs-, Positionierungs- und Größeneigenschaften des Moduls auf einer grundlegenden Ebene verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Syntaxdetails für jedes der unten diskutierten Konzepte enthalten. Für Informationen zur Angabe alternativer Positionen und zum Ausblenden von Anker-positionierten Elementen siehe [Umgang mit Überlauf: alternative Positionen und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr üblich, ein Element an ein anderes zu binden oder zu verknüpfen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerungen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element auftauchen, um weitere Informationen darüber bereitzustellen.
- Einstellungs- oder Optionsdialoge, die aufgerufen werden können, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass einige Inhalte – oft wiederverwendbar und dynamisch erstellt – relativ zu einem Ankerelement positioniert werden. Solche Anwendungsfälle zu erstellen, wäre relativ einfach, wenn das Element, an das gebunden werden soll (auch bekannt als **Ankerelement**), immer an derselben Stelle in der Benutzeroberfläche wäre und das gebundene Element (auch bekannt als **Anker-positioniertes Element** oder einfach **positioniertes Element**) immer direkt davor oder danach in der Quellreihenfolge platziert werden könnte. Allerdings sind die Dinge selten so einfach.

Die Position von positionierten Elementen relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder anderweitig seine Konfiguration ändert (z. B. durch Scrollen, Ändern der Ansichtsgröße, Ziehen und Ablegen usw.). Beispielweise, wenn sich ein Element wie ein Formularfeld dem Rand der Ansicht nähert, kann sein Tooltip außerhalb des Bildschirms landen. In der Regel möchten Sie den Tooltip an sein Formularfeld binden und sicherstellen, dass der Tooltip vollständig sichtbar auf dem Bildschirm bleibt, solange das Formularfeld sichtbar ist, und ihn bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit einem Rechtsklick (<kbd>Strg</kbd> + Klick) öffnen.

Historisch gesehen erforderte das Verknüpfen eines Elements mit einem anderen Element und das dynamische Ändern der Position und Größe eines positionierten Elements basierend auf der Position eines Ankers JavaScript, was Komplexität und Leistungsprobleme hinzufügte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) anstelle von JavaScript.

## Verknüpfung von Anker- und positionierten Elementen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zuerst angeben, welches Element der Anker ist, und dann festlegen, welches(n) positionierte(n) Element(e) mit diesem Anker verknüpft werden sollen. Dies kann über CSS oder über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) erfolgen.

### Nur-CSS-Methode

Um ein Element über CSS als Anker zu deklarieren, müssen Sie ihm über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen zuweisen. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankereffekt besser demonstriert.

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

Das Konvertieren eines Elements in ein Anker-positioniertes Element erfordert zwei Schritte: Es muss absolut oder fest [positioniert](/de/docs/Learn/CSS/CSS_layout/Positioning) werden, indem die Eigenschaft {{cssxref("position")}} verwendet wird. Das positionierte Element hat dann seine Eigenschaft {{cssxref("position-anchor")}} auf den Wert der Eigenschaft `anchor-name` des Ankerelements gesetzt, um die beiden miteinander zu verknüpfen:

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt verknüpft, aber im Moment müssen Sie uns dabei vertrauen. Sie sind noch nicht miteinander verbunden – wenn Sie den Anker positionieren und an eine andere Stelle auf der Seite verschieben würden, würde er sich alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden die eigentliche Verbindung in Aktion sehen, wenn wir uns [die Positionierung von Elementen basierend auf der Ankerposition](#platzieren_von_elementen_relativ_zu_ihrem_anker) ansehen.

### HTML-Methode

Um ein positioniertes Element in HTML mit einem Anker zu verknüpfen, können Sie das Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) verwenden. Sie müssen dem Ankerelement eine [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Das `anchor`-Attribut wird dann auf dem Anker-positionierten Element gesetzt, wobei ein Wert gleich der `id` des Ankerelements, mit dem Sie es verknüpfen möchten, verwendet wird.

Wir haben dies im unten stehenden HTML gemacht:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

Elemente müssen absolut oder fest positioniert werden, um mit Ankern in Verbindung gebracht zu werden, daher geben wir der Infobox einen `position`-Wert von `fixed`:

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

Dies gibt uns das gleiche Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein positioniertes Element mit einem Ankerelement verknüpft, indem wir das `anchor`-Attribut auf dem positionierten Element anstelle der `anchor-name`-Eigenschaft des Ankerelements und der `position-anchor`-Eigenschaft des positionierten Elements verwendet haben.

{{ EmbedLiveSample("HTML-Methode", "100%", "120") }}

> [!NOTE]
> Das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut hat derzeit geringere Unterstützung als das CSS-Äquivalent. Siehe die [`anchor`-Attribut-Kompatibilitätstabelle](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility) für weitere Informationen.

Wir haben die beiden Elemente verknüpft, aber sie sind noch nicht verbunden. Um sie miteinander zu verbinden, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS erfolgt.

## Platzieren von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist es nicht wirklich nützlich, ein positioniertes Element nur mit einem Anker zu verknüpfen. Unser Ziel ist es, das positionierte Element relativ zu seinem zugehörigen Ankerelement zu platzieren. Dies geschieht entweder durch Festlegen eines [CSS-`anchor()`-Funktionswerts](#using_inset_properties_with_anchor_function_values) auf eine {{Glossary("Inset_properties", "Einfügeigenschaft")}}, [Spezifizieren eines `position-area`](#setting_a_position-area) oder Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#centering_on_the_anchor_using_anchor-center).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Zuordnung und Positionierung funktioniert. Wenn es ausgeblendet ist (z. B. über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wir besprechen, wie man ein Anker-positioniertes Element ausblendet, wenn sein Anker verschwindet, in [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Verwenden von Einfügeeigenschaften mit `anchor()`-Funktionswerten

Konventionell werden absolut und fest positionierte Elemente explizit positioniert, indem {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte auf {{Glossary("inset_properties", "Einfügeeigenschaften")}} gesetzt werden. Bei `position: absolute` ist dieser Einfügepositionswert ein absoluter Abstand relativ zu den Kanten des nächsten positionierten Vorfahren. Bei `position: fixed` ist der Einfügepositionswert ein absoluter Abstand relativ zur Ansicht.

Die CSS-Ankerpositionierung ändert dieses Paradigma und ermöglicht es, dass Anker-positionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker platziert werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion, die ein gültiger Wert für jede der Einfügeeigenschaften ist. Wenn verwendet, setzt die Funktion den Einfügepositionswert als absoluten Abstand relativ zum Ankerelement, indem das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert wird, und der Abstand von dieser Seite definiert werden.

Die Funktionskomponenten sehen wie folgt aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements, relativ zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, also der Anker, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert oder über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) zugeordnet wird.
    > [!NOTE]
    > Das Angeben eines `<anchor-name>` positioniert das Element relativ zu diesem Anker, stellt jedoch keine Elementzuordnung bereit. Nur die `position-anchor`-Eigenschaft und `anchor`-Attribute erstellen die Zuordnung. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/anchor#positioning_an_element_relative_to_multiple_anchors) innerhalb verschiedener `anchor()`-Funktionen für dasselbe Element angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte umfassen das `center` des Ankers, physische (`top`, `left`, etc.) oder logische (`start`, `self-end`, etc.) Seiten des Ankers oder einen `<percentage>` zwischen dem Start (`0%`) und dem Ende (`100%`) der Achse der Einfügeeigenschaft, auf der `anchor()` gesetzt ist. Wenn ein nicht [kompatibler](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) Wert mit der Einfügeeigenschaft angegeben wird, auf der die `anchor()`-Funktion gesetzt ist, wird der Rückfallwert verwendet.

- `<fallback>`

  - : Ein {{cssxref("length-percentage")}}, das den Abstand angibt, der als Rückfallwert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist, oder der `<anchor-side>`-Wert, der verwendet wird, nicht mit der Einfügeeigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Wenn Sie direkt eine Länge oder einen Prozentsatz auf eine Einfügeeigenschaft eines Anker-positionierten Elements setzen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dies ist dasselbe Verhalten, das Sie sehen, wenn der `<anchor-side>`-Wert mit der Einfügeeigenschaft, auf der er gesetzt ist, inkompatibel ist und der Rückfall verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren (falls vorhanden) oder des initialen enthaltenen Blocks.

Die häufigsten `anchor()`-Parameter, die Sie verwenden, beziehen sich auf eine Seite des Standardankers. Sie werden auch oft einen {{cssxref("margin")}} hinzufügen, um Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen oder `anchor()` innerhalb einer `calc()`-Funktion verwenden, um diesen Abstand hinzuzufügen.

Zum Beispiel, diese Regel positioniert den rechten Rand des positionierten Elements direkt am linken Rand des Ankerelements und fügt dann etwas `margin-left` hinzu, um den Abstand zwischen den Rändern herzustellen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Da der Rückgabewert einer `anchor()`-Funktion eine Länge ist, können Sie die Funktion innerhalb einer {{cssxref("calc()")}}-Funktion verwenden. Diese Regel positioniert den logischen Block-Endrand des positionierten Elements `10px` vom logischen Block-Startrand des Ankerelements, wobei der Abstand mit der `calc()`-Funktion hinzugefügt wird, sodass wir keinen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()`-Beispiel

Lassen Sie uns ein Beispiel von `anchor()` in Aktion ansehen. Wir haben dieselbe HTML-Struktur wie in den vorherigen Beispielen verwendet, aber mit etwas Fülltext darunter und darüber, um den Inhalt über seinen Container hinaus scrollen zu lassen. Wir geben dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox ist über den Ankernamen mit dem Anker verbunden und wird fest positioniert. Indem wir die Einfügeeigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} einbinden (die Äquivalente zu {{cssxref("top")}} und {{cssxref("left")}} in horizontalen, links-nach-rechts gesetzten Schreibmodi sind), haben wir sie an den Anker gebunden. Wir fügen der Infobox einen `margin` hinzu, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Schauen wir uns die Deklarationen der Einfügeeigenschaften genauer an:

- `inset-block-start: anchor(end)`: Dies setzt den Block-Startrand des positionierten Elements an den Block-Endrand des Ankers, berechnet mit der Funktion `anchor(end)`.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Inline-Startrand des positionierten Elements an den Inline-Endrand des Ankers, berechnet mit der Funktion `anchor(self-end)`.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()`-Beispiel", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, bleibt das positionierte Element relativ zum Ankerelement in seiner Position — es ist am Ankerelement und nicht an der Ansicht fixiert.

### Festlegen eines `position-area`

Die Eigenschaft {{cssxref("position-area")}} bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft arbeitet mit dem Konzept eines 3x3 Rasters aus Kacheln, wobei das Ankerelement die mittlere Kachel ist. Die `position-area`-Eigenschaft kann verwendet werden, um das Anker-positionierte Element in jeder der neun Kacheln zu positionieren oder es über zwei oder drei Kacheln zu spannen.

![Das position-area-Raster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie Koordinatenäquivalente wie `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthältenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während der Abstand zwischen der mittleren Kachel und dem äußeren Rand des Rasters durch den enthältenden Block des positionierten Elements definiert wird.

`position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten basierend auf den oben beschriebenen Reihen- und Spaltenwerten, mit Spannungsoptionen, um den Bereich des Rasters zu definieren, in dem das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Zum Beispiel:

- `top left` (logisches Äquivalent `start start`) platziert das positionierte Element im oberen linken Feld.
- `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im unteren mittleren Feld.

Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben. Der erste Wert gibt die Reihe oder Spalte an, in die das positionierte Element platziert werden soll, beginnend in der Mitte, und der andere gibt die Menge dieser Spalte zum Spannen an. Zum Beispiel:

- `top span-left` bewirkt, dass das positionierte Element in der oberen Reihe platziert wird und über die mittlere und linke Kachel dieser Reihe spannt.
- `y-end span-x-end` bewirkt, dass das positionierte Element am Ende der y-Spalte platziert wird und über die mittlere und die x-end-Kacheln dieser Spalte spannt.
- `block-end span-all` bewirkt, dass das positionierte Element in der Block-Endreihe platziert wird und über die inline-start, center und inline-end-Kacheln dieser Reihe spannt.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich, abhängig davon, welcher Wert angegeben ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` ist. Zum Beispiel gibt `top` denselben Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als wäre der andere Wert auf denselben Wert gesetzt; zum Beispiel gibt `start` denselben Effekt wie `start start`.
- Ein Wert von `center` wirkt so, als ob beide Werte auf `center` gesetzt sind (also, `center center`).

> [!NOTE]
> Siehe die Referenzseite für den [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert für eine detaillierte Beschreibung aller verfügbaren Werte. Die Mischung eines logischen Werts mit einem physischen Wert wird die Deklaration ungültig machen.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dieselbe HTML- und Basis-CSS-Stile wie das vorherige Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um die Änderung des `position-area`-Wertes des positionierten Elements zu ermöglichen.

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

Die Infobox erhält eine feste Positionierung und ist über CSS mit dem Anker verbunden. Beim Laden wird sie mit `position-area: top;` an den Anker gebunden, was dazu führt, dass sie am oberen Rand des position-area-Rasters positioniert wird. Dies wird überschrieben, sobald Sie andere Werte aus dem `<select>`-Menü wählen.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü zu wählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben:

{{ EmbedLiveSample("Festlegen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Größe des positionierten Elements in keiner Dimension explizit festgelegt. Wir haben das Größenverhalten absichtlich weggelassen, damit Sie das Verhalten, das dies verursacht, beobachten können.

Wenn ein positioniertes Element in position-area-Rasterzellen ohne explizite Größe platziert wird, richtet es sich an dem angegebenen Rasterbereich aus und verhält sich, als ob {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt wäre. Es wird basierend auf der Größe seines [enthältenden Blocks](/de/docs/Web/CSS/Containing_block) bemessen, die die Breite seines Inhalts ist. Diese Größe wurde durch die Einstellung `position: fixed` auferlegt. Automatisch größenangepasste absolut und fest positionierte Elemente werden automatisch bemessen, strecken sich so weit wie nötig, um den Textinhalt zu passen, während sie durch die Kante der Ansicht eingeschränkt werden. In diesem Fall, wenn es auf der linken Seite des Rasters mit einem `left`- oder `inline-start`-Wert platziert wird, wird der Text umbrochen. Wenn die `max-content`-Größe des verankerten Elements schmaler oder kürzer als ihr Anker ist, werden sie nicht wachsen, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, wie mit `position-area: bottom center`, wird es an der angegebenen Rasterzelle ausgerichtet und die Breite wird dieselbe wie die des Ankerelements sein. In diesem Fall ist seine Mindesthöhe die Blockgröße des enthältenden Blocks des Ankerelements. Es wird nicht überlaufen, da die `min-width`-Eigenschaft {{cssxref("min-content")}} ist, was bedeutet, dass sie mindestens so breit wie ihr längstes Wort ist.

## Zentrieren auf dem Anker mit `anchor-center`

Während Sie das Anker-positionierte Element mit den `center`-Werten von `position-area` zentrieren können, bieten Einfügeeigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein Anker-positioniertes Element relativ zu seinem Anker zu zentrieren, wenn anstelle von `position-area` Einfügeeigenschaften zum Verbinden verwendet werden.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} (und ihre Kurzformversionen {{cssxref("place-items")}} und {{cssxref("place-self")}}) existieren, um Entwicklern zu ermöglichen, Elemente leicht in der inline- oder Blockrichtung innerhalb verschiedener Layoutsysteme auszurichten, zum Beispiel entlang der Haupt- oder Querachse im Falle von Flexkindern. Die CSS-Ankerpositionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Mittelpunkt seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und ist an der unteren Kante des Ankers fixiert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal auf dem Mittelpunkt des Ankers zentriert ist:

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

Dadurch wird das Anker-positionierte Element am unteren Rand seines Ankers zentriert:

{{ EmbedLiveSample("Zentrieren auf dem Anker mit `anchor-center`", "100%", "250") }}

## Größe von Elementen basierend auf der Ankergröße

Zusätzlich zur Positionierung eines Elements relativ zur Position seines Ankers können Sie auch die Größe eines Elements relativ zur Größe seines Ankers mit der [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Größeneigenschaftswerts festlegen.

Eigenschaften zur Größenanpassung, die einen `anchor-size()`-Wert akzeptieren können, umfassen:

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

`anchor-size()`-Funktionen werden zu {{cssxref("length")}}-Werten aufgelöst. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, relativ zu dem Sie die Größe des Elements bestimmen möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in der [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert wird.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element bemessen wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline` oder `self-block`) Werten ausgedrückt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Rückfallwert verwendet werden soll, falls das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu ändern.

Zum Beispiel, diese Regel ändert die Breite des positionierten Elements, um der Breite des Standard-Ankerelements zu entsprechen:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel ändert die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind dasselbe wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox wird fest positioniert und mit dem Anker so verbunden wie zuvor. Dieses Mal binden wir sie jedoch an die rechte Seite des Ankers, indem wir ein `position-area` festlegen, und geben ihr eine Breite, die das Fünffache der Breite des Ankers entspricht:

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

Fahren Sie mit der Maus über das Ankerelement oder tabben Sie darauf zu — das positionierte Element wächst, während der Anker wächst, was zeigt, dass die Größe des Anker-positionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Größenanpassung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Siehe auch

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Umgang mit Überlauf: alternative Positionen und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Größenanpassung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
