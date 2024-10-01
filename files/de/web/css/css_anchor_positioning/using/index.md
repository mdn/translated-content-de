---
title: Verwendung von CSS-Anker-Positionierung
slug: Web/CSS/CSS_anchor_positioning/Using
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Das Modul der **CSS-Anker-Positionierung** definiert Funktionen, die es Ihnen ermöglichen, Elemente miteinander zu verbinden. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Die ankerpositionierten Elemente können dann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, skaliert und positioniert werden.

Die CSS-Anker-Positionierung bietet auch mechanismen, um ausschließlich mit CSS mehrere alternative Positionen für ein ankerpositioniertes Element festzulegen. Wenn beispielsweise ein Tooltip an ein Formularfeld gebunden ist, aber ansonsten in seinen Standardeinstellungen außerhalb des sichtbaren Bereichs dargestellt würde, kann der Browser versuchen, es in einer anderen vorgeschlagenen Position anzuzeigen, damit es sichtbar bleibt, oder es anderweitig vollständig ausblenden, falls gewünscht.

Dieser Artikel erklärt die grundlegenden Konzepte der Anker-Positionierung und wie Sie die Zuordnungs-, Positionierungs- und Größeneigenschaften des Moduls auf einfache Weise verwenden können. Wir haben Links zu Referenzseiten mit zusätzlichen Beispielen und Details zur Syntax für jedes unten besprochene Konzept aufgenommen. Weitere Informationen zur Festlegung alternativer Positionen und zum Ausblenden von ankerpositionierten Elementen finden Sie unter [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es ist sehr gebräuchlich, ein Element an ein anderes binden oder anheften zu wollen. Zum Beispiel:

- Fehlermeldungen, die neben Formularsteuerungen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element aufpoppen, um mehr Informationen darüber zu liefern.
- Einstellungs- oder Optionsdialoge, die zugänglich sind, um UI-Elemente schnell zu konfigurieren.
- Dropdown- oder Popover-Menüs, die neben einer zugeordneten Navigationsleiste oder Schaltfläche erscheinen.

Moderne Schnittstellen erfordern häufig, dass Inhalte — oft wiederverwendbar und dynamisch erzeugt — relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle wären recht unkompliziert zu erstellen, wenn das Ankerelement (auch bekannt als **Ankerelement**) immer an derselben Stelle in der Benutzeroberfläche wäre und das angebundene Element (auch bekannt als **ankerpositioniertes Element** oder einfach **positioniertes Element**) könnte immer unmittelbar davor oder danach in der Quellreihenfolge platziert werden. Aber so einfach ist es selten.

Die Position der positionierten Elemente relativ zu ihrem Ankerelement muss beibehalten und angepasst werden, wenn das Ankerelement bewegt wird oder anderweitig seine Konfiguration ändert (z.B. durch Scrollen, Ändern der Größe des Ansichtsfensters, Drag & Drop usw.). Wenn beispielsweise ein Element wie ein Formularfeld nahe am Rand des Ansichtsfensters liegt, könnte sein Tooltip aus dem sichtbaren Bereich heraus enden. Im Allgemeinen möchten Sie den Tooltip an sein Formularsteuerelement binden und sicherstellen, dass der Tooltip auf dem Bildschirm sichtbar bleibt, solange das Formularfeld sichtbar ist, und den Tooltip bei Bedarf automatisch verschieben. Sie haben dies möglicherweise als Standardverhalten in Ihrem Betriebssystem bemerkt, wenn Sie Kontextmenüs auf Ihrem Desktop oder Laptop mit Rechtsklick (<kbd>Ctrl</kbd> + Klick) öffnen.

Historisch gesehen erforderte die Zuordnung eines Elements zu einem anderen Element und die dynamische Änderung des Standorts und der Größe eines positionierten Elements basierend auf der Position des Ankers JavaScript, was die Komplexität und Leistungsprobleme erhöhte. Es war auch nicht garantiert, dass es in allen Situationen funktioniert. Die im Modul [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) definierten Funktionen ermöglichen die Implementierung solcher Anwendungsfälle performant und deklarativ mit CSS (und HTML) statt JavaScript.

## Zuordnen von Anker- und positionierten Elementen

Um ein Element mit einem Anker zuzuordnen, müssen Sie zunächst deklarieren, welches Element der Anker ist, und dann angeben, welche positionierten Elemente mit diesem Anker verknüpft werden sollen. Dies kann über CSS oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) erfolgen.

### Nur-CSS-Methode

Um ein Element mit CSS als Anker zu deklarieren, müssen Sie ihm über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen zuweisen. Der Ankernamen muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir auch die {{cssxref("width")}} des Ankers auf `fit-content`, um einen kleinen quadratischen Anker zu erhalten, der den Ankervorgang besser demonstriert.

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

Um ein Element in ein Anker-Positionierungselement zu konvertieren, sind zwei Schritte erforderlich: Es muss absolut oder fixiert [positioniert](/de/docs/Learn/CSS/CSS_layout/Positioning) werden, indem die {{cssxref("position")}}-Eigenschaft verwendet wird. Das positionierte Element hat dann seine {{cssxref("position-anchor")}}-Eigenschaft auf den Wert der `anchor-name`-Eigenschaft des Ankerelements gesetzt, um die beiden miteinander zu verknüpfen:

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

Wir werden obiges CSS auf den folgenden HTML-Anwendungsfall anwenden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample("Nur-CSS-Methode", "100%", "120") }}

Der Anker und die Infobox sind jetzt miteinander verknüpft, aber im Moment müssen Sie uns das glauben. Sie sind noch nicht aneinander angeheftet — wenn Sie den Anker positionieren und ihn woanders auf der Seite bewegen würden, würde er alleine bewegen und die Infobox an derselben Stelle lassen. Sie werden das tatsächliche Anheftung in Aktion sehen, wenn wir uns das [Positionieren von Elementen basierend auf der Ankerposition](#positionieren_von_elementen_relativ_zu_ihrem_anker) ansehen.

### HTML-Methode

Um ein positioniertes Element mit einem Anker in HTML zuzuordnen, können Sie das Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) verwenden. Sie müssen dem Ankerelement eine [`id`](/de/docs/Web/HTML/Global_attributes/id) geben. Das `anchor`-Attribut wird dann auf dem ankerpositionierten Element gesetzt, mit einem Wert, der der `id` des Ankerelements entspricht, mit dem Sie es verbinden möchten.

Wir haben dies im HTML unten getan:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

Elemente müssen absolut oder fixiert positioniert sein, um mit Ankern verbunden zu werden, also geben wir der Infobox den `position`-Wert `fixed`:

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

Dies gibt uns das gleiche Ergebnis, das wir zuvor mit CSS erreicht haben. Wir haben ein positioniertes Element mit einem Ankerelement verbunden, indem wir das `anchor`-Attribut auf das positionierte Element anstatt auf die `anchor-name`-Eigenschaft des Ankerelements und die `position-anchor`-Eigenschaft des positionierten Elements gesetzt haben.

{{ EmbedLiveSample("HTML-Methode", "100%", "120") }}

> [!NOTE]
> Das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut hat derzeit weniger Unterstützung als das gleichwertige CSS. Weitere Informationen finden Sie in der [Kompatibilitätstabelle des `anchor`-Attributs](/de/docs/Web/HTML/Global_attributes/anchor#browser_compatibility).

Wir haben die beiden Elemente zugeordnet, aber sie sind noch nicht angeheftet. Um sie miteinander zu verankern, muss das positionierte Element relativ zu seinem Anker positioniert werden, was mit CSS geschieht.

## Positionieren von Elementen relativ zu ihrem Anker

Wie wir oben gesehen haben, ist das Verknüpfen eines positionierten Elements mit einem Anker allein nicht wirklich nützlich. Unser Ziel ist es, das positionierte Element relativ zu seinem zugeordneten Ankerelement zu platzieren. Dies geschieht entweder durch das Setzen eines Wertes der [CSS `anchor()`-Funktion](#using_inset_properties_with_anchor_function_values) auf eine [Einsatzgegeben]](/de/docs/Glossary/Inset_properties), ["Festlegen eines `position-area`"](##setting_a_position-area)) oder durch das Zentrieren des positionierten Elements mit dem [`anchor-center`-Platzierungswert](#positionieren-elements-relative-zum-anker).

> [!NOTE]
> Das Ankerelement muss ein sichtbarer DOM-Knoten sein, damit die Assoziation und Positionierung funktionieren. Wenn es versteckt ist (beispielsweise über [`display: none`](/de/docs/Web/CSS/display#none)), wird das positionierte Element relativ zu seinem nächstgelegenen positionierten Vorfahren positioniert. Wir besprechen, wie ein ankerpositioniertes Element ausgeblendet wird, wenn sein Anker verschwindet unter [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#get-conditional-hiding-anchor-positioned_elements).

### Verwendung von Einsatz-Eigenschaften mit `anchor()`-Funktionswerten

Konventionelle absolut und fest positionierte Elemente werden explizit positioniert, indem Längen- oder Prozentwerte auf {{Glossary("inset_properties", "Einsatz-Eigenschaften")}} gesetzt werden. Bei `position: absolute` ist dieser Einlagepositionierungswert ein absoluter Abstand relativ zu den Rändern des nächstgelegenen positionierten Vorfahren. Bei `position: fixed` ist der Einlagepositionierungswert ein absoluter Abstand relativ zum Ansichtsfenster.

CSS-Anker-Positionierung verändert dieses Paradigma, indem sie ankerpositionierten Elementen ermöglicht, relativ zu den Rändern ihrer zugeordneten Anker positioniert zu werden. Das Modul definiert die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion, die ein gültiger Wert für jede der Einsatz-Eigenschaften ist. Bei Verwendung setzt die Funktion den Einlagepositionierungswert als absoluten Abstand relativ zum Ankerelement, indem sie das Ankerelement, die Seite des Ankerelements, zu der das positionierte Element positioniert werden soll, und den Abstand von dieser Seite definiert.

Die Funktionskomponenten sehen folgendermaßen aus:

```plain
anchor(<anchor-element> <anchor-side>, <fallback>)
```

- `<anchor-element>`

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet. Dies ist der im [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenzierte Anker oder der über das HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-Attribut zugeordnete.
    > [!NOTE]
    > Das Angeben eines `<anker-element>` positioniert das Element relativ zu diesem Anker, bietet jedoch keine Elementassoziation. Nur die `position-anchor`-Eigenschaft und `anchor`-Attribute erstellen die Assoziation. Während Sie die Seiten eines Elements relativ zu mehreren Ankern positionieren können, indem Sie im selben Element verschiedene `<anker-element>`-Werte innerhalb verschiedener `anchor()`-Funktionen angeben, ist das positionierte Element nur mit einem einzigen Anker assoziiert.

- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)

  - : Gibt die Position relativ zu einer Seite oder Seiten des Ankers an. Gültige Werte sind `center` des Ankers, physische (`top`, `left` usw.) oder logische (`start`, `self-end` usw.) Seiten des Ankers oder ein `<percentage>` zwischen dem Anfang (`0%`) und dem Ende (`100%`) der Achse der Einsatz-Eigenschaft, auf der `anchor()` gesetzt ist. Wenn ein Wert verwendet wird, der nicht mit der Einsatz-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, wird der Fallback-Wert verwendet.

- `<fallback>`
  - : Eine {{cssxref("length-percentage")}}, die die Größe angibt, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist, der `<anker-seiten>`-Wert, der verwendet wird, nicht mit der Einsatz-Eigenschaft kompatibel ist, auf der die `anchor()`-Funktion gesetzt ist, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der `anchor()`-Funktion ist ein Längenwert, der basierend auf der Position des Ankers berechnet wird. Setzen Sie direkt eine Länge oder einen Prozentsatz auf die Einsatz-Eigenschaft des ankerpositionierten Elements, wird es positioniert, als ob es nicht an das Ankerelement gebunden wäre. Dies ist dasselbe Verhalten, das zu sehen ist, wenn der `<anker-seiten>`-Wert nicht mit der Einsatz-Eigenschaft kompatibel ist, auf der er gesetzt ist, und der Fallback verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide werden das positionierte Element `50px` über dem unteren Rand des nächsten positionierten Vorfahren des Elements (falls vorhanden) oder des initialen Umgebungsblocks platzieren.

Die häufigsten `anchor()`-Parameter, die Sie verwenden werden, beziehen sich meistens auf eine Seite des Standardankers. Sie werden auch oft eine {{cssxref("margin")}} hinzufügen, um einen Abstand zwischen dem Rand des Ankers und dem positionierten Element zu schaffen oder `anchor()` innerhalb einer `calc()`-Funktion zu verwenden, um diesen Abstand hinzuzufügen.

Dieses Regelbeispiel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann etwas `margin-left` hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Das bedeutet, dass Sie es innerhalb einer {{cssxref("calc()")}}-Funktion verwenden können. Diese Regel positioniert die Kante des positionierten Elements im logischen Block-Ende `10px` von der logischen Block-Startkante des Ankerelements entfernt und fügt den Abstand mithilfe der `calc()`-Funktion hinzu, damit wir keinen zusätzlichen Rand hinzufügen müssen:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### Beispiel zu `anchor()`

Schauen wir uns ein Beispiel von `anchor()` in Aktion an. Wir haben das gleiche HTML wie in den vorhergehenden Beispielen verwendet, aber mit etwas Fülltext darüber und darunter, der den Inhalt zwingt, seinen Container zu überlaufen und zu scrollen. Wir werden auch dem Ankerelement denselben `anker-name` wie in den vorhergehenden Beispielen geben:

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

Die Infobox wird unter Verwendung des Ankernamens mit dem Anker verbunden und mit fester Positionierung versehen. Durch Einfügen der Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} (die in horizontalen Links-nach-Rechts-Schreibmodi äquivalent zu {{cssxref("top")}} und {{cssxref("left")}} sind), wurden sie an den Anker verankert. Wir fügen der Infobox einen `margin` hinzu, um Platz zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Betrachten wir die Deklarationen der Einsatz-Eigenschaftspositionierung im Detail:

- `inset-block-start: anchor(end)`: Dies setzt den Blockanfang des positionierten Elements auf das Blockende des Ankers, berechnet mit der `anchor(end)`-Funktion.
- `inset-inline-start: anchor(self-end)`: Dies setzt den Inline-Anfang des positionierten Elements auf das Inline-Ende des Ankers, berechnet mit der `anchor(self-end)`-Funktion.

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("Beispiel zu `anchor()`", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie das Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerement bei—es ist an das Ankerelement gebunden, nicht an das Ansichtsfenster.

### Festlegen eines `position-area`

Die {{cssxref("position-area")}} Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. Die `position-area`-Eigenschaft arbeitet auf dem Konzept eines 3x3-Rasters von Feldern, wobei das Ankerelement das mittlere Feld bildet. Die `position-area`-Eigenschaft kann verwendet werden, um das ankerpositionierte Element in eines der neun Felder zu platzieren oder es über zwei oder drei Felder hinweg zu spannen.

![Das position-area Raster, wie unten beschrieben](position-area.png)

Die Rasterfelder sind in Zeilen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie koordinatenbasierte Entsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `start`, `center` und `end` sowie koordinatenbasierte Entsprechungen wie `x-start`, `center` und `x-end`.

Die Dimensionen des mittleren Blocks werden durch den [umschließenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während der Abstand zwischen dem mittleren Block und der Außenkante des Rasters durch den umgebenden Block des positionierten Elements bestimmt wird.

Die `position-area`-Eigenschaftswerte bestehen aus einem oder zwei Werten auf Basis der oben beschriebenen Zeilen- und Spaltenwerte mit Spannoptionen, um die Region des Rasters zu definieren, in der das Element positioniert werden soll.

Zum Beispiel:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren. Zum Beispiel:

- `top left` (logische Entsprechung `start start`) platziert das positionierte Element in der oberen linken Ecke.
- `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element im unteren mittleren Feld.

Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben. Der erste Wert spezifiziert die Zeile oder Spalte, in die das positionierte Element platziert wird, wobei es zunächst zentriert wird, und der andere gibt die Menge dieser Spalte oder Zeile an, die es umfassen soll. Zum Beispiel:

- `top span-left` positioniert das positionierte Element in der oberen Reihe und umfasst die mittleren und linken Felder dieser Reihe.
- `y-end span-x-end` positioniert das positionierte Element am Ende der y-Spalte und umfasst die mittleren und x-Enden-Felder dieser Spalte.
- `block-end span-all` positioniert das positionierte Element in der blockenden Zeile und umfasst die inline-Anfangs-, Zentrier- und Inline-Ende-Felder dieser Zeile.

Wenn Sie nur einen Wert angeben, ist der Effekt unterschiedlich je nachdem, welcher Wert gesetzt ist:

- Ein physischer Seitenwert (`top`, `bottom`, `left` oder `right`) oder koordinatenbasierter Wert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als ob der andere Wert `span-all` wäre. Zum Beispiel gibt `top` den gleichen Effekt wie `top span-all`.
- Ein logischer Seitenwert (`start` oder `end`) wirkt so, als wäre der andere Wert auf den gleichen Wert gesetzt; zum Beispiel gibt `start` den gleichen Effekt wie `start start`.
- Ein Wert `center` wirkt so, als wären beide Werte auf `center` gesetzt (also, `center center`).

> [!NOTE]
> Siehe die Referenzseite für den [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert für eine detaillierte Beschreibung aller verfügbaren Werte. Das Mischen eines logischen Wertes mit einem physischen Wert macht die Deklaration ungültig.

Demonstrieren wir einige dieser Werte; dieses Beispiel verwendet dasselbe HTML und die Basis-CSS-Stile wie das vorherige Beispiel, mit dem Unterschied, dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben, um den `position-area`-Wert des positionierten Elements zu ändern.

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

Die Infobox erhält eine feste Positionierung und wird mit dem Anker unter Verwendung von CSS verknüpft. Beim Laden wird sie so eingestellt, dass sie mit `position-area: top;` an den Anker gebunden ist, wodurch sie oben im position-area-Raster positioniert wird. Dies wird überschrieben, sobald Sie im `<select>`-Menü andere Werte auswählen.

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

Wir fügen auch ein kurzes Skript hinzu, um den `position-area`-Werten, die im `<select>`-Menü ausgewählt wurden, auf die Infobox anzuwenden:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Versuchen Sie verschiedene `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um den Effekt auf die Position der Infobox zu sehen:

{{ EmbedLiveSample("Festlegen eines `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir das positionierte Element in keiner Dimension explizit skaliert. Wir haben die Skalierung absichtlich weggelassen, um Ihnen zu ermöglichen, das Verhalten zu beobachten, das dies verursacht.

Wenn ein positioniertes Element ohne explizite Größenangabe in `position-area`-Rasterzellen eingesetzt wird, richtet es sich auf das spezifizierte Rasterfeld aus und verhält sich, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Es wird entsprechend seiner [umschließenden Block]-Größe skaliert, die der Breite seines Inhalts entspricht. Diese Größe wurde durch das Setzen von `position: fixed` erzwungen. Automatisch skalierte absolut und fest positionierte Elemente werden automatisch skaliert, indem sie sich so weit strecken, dass der Textinhalt passt, während sie durch die Kante des Ansichtsfensters begrenzt werden. In diesem Fall, wenn sie auf der linken Seite des Rasters mit einem beliebigen `left` oder `inline-start` Wert platziert werden, wickelt sich der Text. Wenn die `max-content`-Größe des angehefteten Elements schmaler oder kürzer als der Anker ist, vergrößern sie sich nicht, um die Größe des Ankers zu erreichen.

Wenn das positionierte Element vertikal zentriert ist, wie bei `position-area: bottom center`, wird es in das spezifizierte Rasterfeld ausgerichtet und die Breite wird die gleiche sein wie das Ankerelement. In diesem Fall ist seine minimale Höhe die Größe des umschließenden Blocks des Ankerelements. Es wird nicht überlaufen, da die `min-width` {{cssxref("min-content")}} ist, was bedeutet, dass es mindestens so breit wie sein längstes Wort sein wird.

## Zentrieren auf dem Anker mit `anchor-center`

Während Sie das ankerpositionierte Element mit `position-area``s `center`-Werten zentrieren können, bieten Einsatz-Eigenschaften in Kombination mit der `anchor()`-Funktion mehr Kontrolle über die exakte Position. CSS-Anker-Positionierung bietet eine Möglichkeit, ein ankerpositioniertes Element im Verhältnis zu seinem Anker zu zentrieren, wenn Einsatz-Eigenschaften statt `position-area` verwendet werden, um zu verankern.

Die Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("align-items")}} (und ihre {{cssxref("place-items")}} und {{cssxref("place-self")}} Shorthands) existieren, um Entwicklern die einfache Ausrichtung von Elementen in Inline- oder Blockrichtung in verschiedenen Layoutsystemen zu ermöglichen, z.B. entlang der Haupt- oder Querachse im Fall von Flex-Kindern. CSS-Anker-Positionierung bietet einen zusätzlichen Wert für diese Eigenschaften, `anchor-center`, der ein positioniertes Element mit dem Zentrum seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und die Basis-CSS wie das vorherige Beispiel. Die Infobox erhält eine feste Positionierung und wird an den unteren Rand des Ankers verankert. `justify-self: anchor-center` wird dann verwendet, um sicherzustellen, dass es horizontal am Zentrum des Ankers zentriert wird:

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

Dies zentriert das ankerpositionierte Element am unteren Ende seines Ankers:

{{ EmbedLiveSample("Zentrieren auf dem Anker mit `anchor-center`", "100%", "250") }}

## Größenanpassung von Elementen basierend auf der Ankergröße

Neben der Positionierung eines Elements im Verhältnis zur Position seines Ankers können Sie die Größe eines Elements auch im Verhältnis zur Größe seines Ankers anpassen, indem Sie die [`anchor-size()`](/de/docs/Web/CSS/anchor-size)-Funktion innerhalb eines Skalierungseigenschaftswertes verwenden.

Skalierungseigenschaften, die einen `anchor-size()`-Wert akzeptieren können, sind:

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

`anchor-size()`-Funktionen ergeben Werte in {{cssxref("length")}}. Ihre Syntax sieht folgendermaßen aus:

```plain
anchor-size(<anchor-element> <anchor-size>, <length-percentage>)
```

- `<anchor-element>`
  - : Der `<dashed-ident>` Name, der als Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft des Ankerelements gesetzt ist, relativ zu dem Sie die Größe des Elements festlegen möchten. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, welcher der im [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenzierte Anker ist.
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
  - : Gibt die Dimension des Ankerelements an, zu der das positionierte Element relativ skaliert wird. Dies kann mit physischen (`width` oder `height`) oder logischen (`inline`, `block`, `self-inline`, oder `self-block`) Werten dargestellt werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert.

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich wahrscheinlich nur auf eine Dimension des Standardankers. Sie können sie auch innerhalb {{cssxref("calc")}}-Funktionen verwenden, um die auf das positionierte Element angewendete Größe zu ändern.

Zum Beispiel, diese Regel skaliert die Breite des positionierten Elements gleich der Breite des Standard-Ankerelements:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel skaliert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer `calc()`-Funktion durchgeführt wird:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Schauen wir uns ein Beispiel an. Das HTML und das Basis-CSS sind die gleichen wie in den vorherigen Beispielen, außer dass das Ankerelement ein [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut erhält, um es fokussierbar zu machen. Die Infobox bekommt eine feste Positionierung und wird auf dieselbe Weise wie zuvor mit dem Anker verknüpft. In diesem Fall wird es rechts des Ankers mit einer `position-area` verankert und erhält eine Breite, die fünfmal so breit ist wie die Breite des Ankers:

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

Zusätzlich erhöhen wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}}, und geben ihm eine {{cssxref("transition")}}, sodass es animiert, wenn der Zustand sich ändert.

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

Fahren Sie mit der Maus über das Ankerelement oder tabben Sie zu ihm - das positionierte Element wächst genauso wie der Anker, was zeigt, dass die Größe des ankerpositionierten Elements relativ zu seinem Anker ist:

{{ EmbedLiveSample("Größenanpassung von Elementen basierend auf der Ankergröße", "100%", "250") }}

## Siehe auch

- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Größenanpassung von Items in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
