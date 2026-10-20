---
title: CSS-Ankerpositionierung verwenden
short-title: Ankerpositionierung verwenden
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 93149226b6b94a770731d262508f5c4aa10bcbed
---

Das Modul **CSS-Ankerpositionierung** definiert Funktionen, mit denen Sie Elemente aneinander binden können. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können mit Ankerelementen verknüpft werden. Größe und Position der ankerpositionierten Elemente lassen sich dann relativ zur Größe und Position der Ankerelemente festlegen, mit denen sie verknüpft sind.

Die CSS-Ankerpositionierung bietet außerdem reine CSS-Mechanismen, um mehrere alternative Positionen für ein ankerpositioniertes Element anzugeben. Ist beispielsweise ein Tooltip an ein Formularfeld gebunden, würde aber an seiner Standardposition außerhalb des sichtbaren Bereichs angezeigt, kann der Browser versuchen, ihn an einer anderen vorgeschlagenen Position innerhalb des sichtbaren Bereichs darzustellen. Alternativ kann er ihn auf Wunsch vollständig ausblenden.

Dieser Artikel erläutert die grundlegenden Konzepte der Ankerpositionierung und zeigt, wie Sie die Funktionen des Moduls zum Verknüpfen, Positionieren und Festlegen der Größe verwenden. Zu jedem der folgenden Konzepte finden Sie Links zu Referenzseiten mit weiteren Beispielen und Syntaxdetails. Informationen zum Festlegen alternativer Positionen und zum Ausblenden ankerpositionierter Elemente finden Sie im Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Häufig soll ein Element an ein anderes gebunden werden. Beispiele dafür sind:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element eingeblendet werden, um zusätzliche Informationen dazu bereitzustellen.
- Einstellungs- oder Optionsdialoge, über die UI-Elemente schnell konfiguriert werden können.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern oft, dass Inhalte – häufig wiederverwendbare und dynamisch erzeugte Inhalte – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle wären recht einfach umzusetzen, wenn sich das Element, an das etwas gebunden werden soll (das **Ankerelement**), in der Benutzeroberfläche immer an derselben Stelle befände und das gebundene Element (das **ankerpositionierte Element** oder kurz **positionierte Element**) in der Quellreihenfolge immer unmittelbar davor oder danach stehen könnte. In der Praxis ist es jedoch selten so einfach.

Die Position eines positionierten Elements relativ zu seinem Ankerelement muss beibehalten und angepasst werden, wenn sich das Ankerelement bewegt oder seine Konfiguration anderweitig ändert – etwa durch Scrollen, eine Änderung der Größe des Viewports oder Drag-and-drop. Befindet sich beispielsweise ein Formularfeld nahe am Rand des Viewports, kann der zugehörige Tooltip außerhalb des sichtbaren Bereichs landen. In der Regel soll der Tooltip an das Formularsteuerelement gebunden und vollständig sichtbar bleiben, solange das Formularfeld sichtbar ist. Bei Bedarf muss er dafür automatisch verschoben werden. Möglicherweise kennen Sie dieses Standardverhalten von Kontextmenüs auf Ihrem Desktop- oder Laptop-Betriebssystem, die Sie mit einem Rechtsklick (<kbd>Ctrl</kbd> + Klick) öffnen.

Früher war JavaScript erforderlich, um ein Element mit einem anderen zu verknüpfen und Position und Größe des positionierten Elements dynamisch anhand der Position des Ankers zu ändern. Das erhöhte die Komplexität und konnte die Leistung beeinträchtigen. Zudem war nicht gewährleistet, dass es in jeder Situation funktionierte. Die im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen ermöglichen es, solche Anwendungsfälle stattdessen performant und deklarativ mit CSS (und HTML) umzusetzen.

## Anker und positionierte Elemente verknüpfen

Um ein Element mit einem Anker zu verknüpfen, müssen Sie zunächst festlegen, welches Element der Anker ist. Anschließend geben Sie an, welche positionierten Elemente mit diesem Anker verknüpft werden sollen. Dadurch entsteht eine Ankerreferenz zwischen den Elementen. Diese Verknüpfung kann explizit über CSS oder implizit hergestellt werden.

### Explizite Ankerverknüpfung mit CSS

Um ein Element mithilfe von CSS als Anker zu definieren, weisen Sie ihm über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen zu. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir außerdem {{cssxref("width")}} für den Anker auf `fit-content`, damit ein kleines quadratisches Ankerelement entsteht, an dem sich die Ankerbindung besser veranschaulichen lässt.

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

Um ein Element in ein ankerpositioniertes Element umzuwandeln, sind zwei Schritte erforderlich: Es muss mithilfe der Eigenschaft {{cssxref("position")}} [absolut oder fixiert positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden. Anschließend setzen Sie die Eigenschaft {{cssxref("position-anchor")}} des positionierten Elements auf den Wert der Eigenschaft `anchor-name` des Ankerelements, um beide zu verknüpfen:

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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

Anker und Infobox sind nun verknüpft, auch wenn Sie uns das vorerst glauben müssen. Sie sind noch nicht aneinander gebunden: Wenn Sie den Anker positionieren und an eine andere Stelle auf der Seite verschieben, bewegt er sich allein, während die Infobox an ihrem Platz bleibt. Wie die Bindung tatsächlich funktioniert, sehen Sie im Abschnitt zum [Positionieren von Elementen anhand der Ankerposition](#elemente_relativ_zu_ihrem_anker_positionieren).

### Implizite Ankerverknüpfung

In manchen Fällen entsteht aufgrund der semantischen Beziehung zweier Elemente eine implizite Ankerreferenz:

- Wenn Sie die [Popover API](/de/docs/Web/API/Popover_API) verwenden, um ein Popover mit einem Steuerelement zu verknüpfen, entsteht zwischen beiden eine implizite Ankerreferenz. Dies kann geschehen, wenn Sie:
  - ein Popover deklarativ über die Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder über [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id` mit einem Steuerelement verknüpfen;
  - eine Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) programmatisch über die Option `source` mit einem Steuerelement verknüpfen.
- Für ein {{htmlelement("select")}}-Element und seinen Dropdown-Picker wird die Funktion für [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) aktiviert, indem die Eigenschaft {{cssxref("appearance")}} auf `base-select` gesetzt wird. In diesem Fall entsteht zwischen beiden eine implizite Popover-Invoker-Beziehung und damit auch eine implizite Ankerreferenz.

> [!NOTE]
> Weitere Informationen zum Positionieren von Elementen relativ zu ihren impliziten Ankern finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

> [!NOTE]
> Die oben beschriebenen Methoden verknüpfen einen Anker mit einem Element, binden die beiden aber noch nicht aneinander. Dazu muss das positionierte Element mithilfe von CSS relativ zu seinem Anker positioniert werden.

### Eine Ankerverknüpfung entfernen

Wenn Sie eine zuvor hergestellte explizite Verknüpfung zwischen einem Ankerelement und einem positionierten Element entfernen möchten, haben Sie folgende Möglichkeiten:

1. Setzen Sie die Eigenschaft `anchor-name` des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn ein anderes Element daran gebunden werden soll.
2. Setzen Sie die Eigenschaft `position-anchor` des positionierten Elements auf `none` oder auf einen Ankernamen, der im aktuellen Dokument nicht vorkommt, beispielsweise `--not-an-anchor-name`.

Bei impliziten Ankerverknüpfungen müssen Sie die zweite Methode verwenden – die erste funktioniert hier nicht. Der Grund ist, dass die Verknüpfung intern gesteuert wird und Sie den `anchor-name` nicht über CSS entfernen können.

Um beispielsweise zu verhindern, dass der Picker eines anpassbaren `<select>`-Elements am `<select>`-Element selbst verankert wird, können Sie folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: none;
}
```

## Gültigkeitsbereich von Ankern

Wenn mehrere Ankerelemente denselben Wert für {{cssxref("anchor-name")}} haben und ein positioniertes Element diesen Namen als Wert seiner Eigenschaft {{cssxref("position-anchor")}} verwendet, wird das positionierte Element mit dem in der Quellreihenfolge _letzten_ Ankerelement mit diesem `anchor-name` verknüpft.

Enthält ein Dokument beispielsweise mehrere wiederholte Komponenten, die jeweils ein an einen Anker gebundenes positioniertes Element enthalten, werden alle positionierten Elemente am letzten Anker der Seite verankert, sofern nicht jede Komponente einen anderen Ankernamen verwendet. Das ist wahrscheinlich nicht das gewünschte Verhalten.

Die Eigenschaft {{cssxref("anchor-scope")}} kann dieses Problem lösen, indem sie die Sichtbarkeit – also den „Gültigkeitsbereich“ – eines `anchor-name`-Werts auf einen bestimmten Teilbaum beschränkt. Dadurch kann jedes positionierte Element nur an einem Element innerhalb desselben Teilbaums verankert werden wie das Element, für das der Gültigkeitsbereich festgelegt wurde.

- `anchor-scope: all` legt fest, dass _alle_ im Teilbaum vergebenen `anchor-name`-Werte nur von positionierten Elementen im selben Teilbaum referenziert werden können.
- `anchor-scope: --my-anchor, --my-anchor2` legt fest, dass die angegebenen `anchor-name`-Werte, sofern sie im Teilbaum vergeben werden, nur von positionierten Elementen im selben Teilbaum referenziert werden können.
- `anchor-scope: none` ist der Standardwert; es wird kein Gültigkeitsbereich für Anker festgelegt.

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

Wir machen jedes `anchor`-`<div>` zu einem Ankerelement, indem wir ihm den `anchor-name` `--my-anchor` zuweisen. Anschließend positionieren wir jedes `positioned`-`<div>` relativ zu einem Element mit dem Ankernamen `--my-anchor`: Dazu verwenden wir absolute Positionierung, setzen `position-anchor` auf `--my-anchor` und {{cssxref("position-area")}} auf `right`. Schließlich legen wir mit `anchor-scope: --my-anchor` den Gültigkeitsbereich des Ankers für jeden `<section>`-Container fest:

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

Daraus ergibt sich folgendes Positionierungsverhalten:

{{ EmbedLiveSample("anchor-scope", "100%", "150") }}

Jedes positionierte Element wird relativ zum Anker innerhalb desselben `<section>`-Elements positioniert. Das liegt daran, dass für jedes `<section>`-Element `anchor-scope` auf `--my-anchor` gesetzt ist. Positionierte Elemente innerhalb eines solchen Containers können daher nur relativ zu `my-anchor`-Ankern im selben Container positioniert werden.

Würden wir für die Container nicht `anchor-scope: --my-anchor` festlegen, würden alle positionierten Elemente relativ zum letzten Anker auf der Seite positioniert.

## Elemente relativ zu ihrem Anker positionieren

Wie bereits erwähnt, ist die Verknüpfung eines positionierten Elements mit einem Anker allein noch nicht besonders nützlich. Ziel ist es, das positionierte Element relativ zum zugehörigen Ankerelement zu platzieren. Dazu können Sie einen Wert der [CSS-Funktion `anchor()`](#using_inset_properties_with_anchor_function_values) für eine {{Glossary("Inset_properties", "Inset-Eigenschaft")}} festlegen, eine [`position-area` angeben](#setting_a_position-area) oder das positionierte Element mit dem [Platzierungswert `anchor-center`](#centering_on_the_anchor_using_anchor-center) zentrieren.

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zum Festlegen von Ausweichpositionen, falls das positionierte Element an seiner Standardposition über den Viewport hinausragt. Weitere Informationen finden Sie im Leitfaden [Ausweichoptionen und bedingtes Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Damit Verknüpfung und Positionierung funktionieren, muss das Ankerelement ein sichtbarer DOM-Knoten sein. Ist es ausgeblendet, beispielsweise durch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wie Sie ein ankerpositioniertes Element ausblenden, wenn sein Anker verschwindet, erläutern wir unter [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Inset-Eigenschaften mit Werten der Funktion `anchor()` verwenden

Herkömmliche absolut und fixiert positionierte Elemente werden explizit positioniert, indem für {{Glossary("inset_properties", "Inset-Eigenschaften")}} Werte vom Typ {{cssxref("length")}} oder {{cssxref("percentage")}} festgelegt werden. Bei `position: absolute` beschreibt der Inset-Wert einen absoluten Abstand zu den Kanten des nächsten positionierten Vorfahren. Bei `position: fixed` beschreibt er einen absoluten Abstand relativ zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Prinzip und ermöglicht es, ankerpositionierte Elemente relativ zu den Kanten ihrer zugehörigen Anker zu platzieren. Das Modul definiert die Funktion [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor), die für jede Inset-Eigenschaft ein gültiger Wert ist. Mit ihr wird der Inset-Wert als absoluter Abstand relativ zum Ankerelement festgelegt. Dazu geben Sie das Ankerelement, die Seite des Ankerelements, auf die sich die Positionierung bezieht, und den Abstand zu dieser Seite an.

Die Bestandteile der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der Wert der Eigenschaft {{cssxref("anchor-name")}} des Ankerelements, relativ zu dem Sie eine Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wird er weggelassen, wird der **Standardanker** des Elements verwendet. Das ist der Anker, auf den seine Eigenschaft {{cssxref("position-anchor")}} verweist oder der über das nicht standardisierte HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) mit dem Element verknüpft ist.
    > [!NOTE]
    > Durch die Angabe eines `<anchor-name>` wird das Element relativ zu diesem Anker positioniert, aber keine Elementverknüpfung hergestellt. Sie können zwar die Seiten eines Elements relativ zu mehreren Ankern positionieren, indem Sie [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) in verschiedenen `anchor()`-Funktionen desselben Elements angeben; das positionierte Element ist jedoch nur mit einem einzigen Anker verknüpft.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer oder mehreren Seiten des Ankers an. Gültige Werte sind unter anderem die Mitte (`center`) des Ankers, seine physischen Seiten (`top`, `left` usw.), seine logischen Seiten (`start`, `self-end` usw.) oder ein `<percentage>`-Wert zwischen Anfang (`0%`) und Ende (`100%`) der Achse der Inset-Eigenschaft, für die `anchor()` verwendet wird. Ist ein Wert nicht mit der Inset-Eigenschaft [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values), wird der Ausweichwert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}-Wert, der als Ausweichwert für den Abstand dient, wenn das Element weder absolut noch fixiert positioniert ist, wenn der verwendete `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist, für die `anchor()` verwendet wird, oder wenn das Ankerelement nicht existiert.

Der Rückgabewert der Funktion `anchor()` ist ein anhand der Ankerposition berechneter Längenwert. Wenn Sie für die Inset-Eigenschaft eines ankerpositionierten Elements direkt eine Länge oder einen Prozentwert festlegen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dasselbe geschieht, wenn der `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist und der Ausweichwert verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` oberhalb der Unterkante seines nächsten positionierten Vorfahren (falls vorhanden) oder des initialen Containing Blocks.

Die `anchor()`-Parameter, die Sie am häufigsten verwenden werden, beziehen sich auf eine Seite des Standardankers. Häufig fügen Sie außerdem einen {{cssxref("margin")}} hinzu, um Abstand zwischen der Kante des Ankers und dem positionierten Element zu schaffen, oder verwenden `anchor()` innerhalb einer `calc()`-Funktion, um diesen Abstand hinzuzufügen.

Die folgende Regel beispielsweise richtet die linke Kante des positionierten Elements an der rechten Kante des Ankerelements aus und fügt anschließend mit `margin-left` Abstand zwischen den Kanten hinzu:

```css
.positionedElement {
  left: anchor(right);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist eine Länge. Sie können ihn daher innerhalb einer {{cssxref("calc()")}}-Funktion verwenden. Die folgende Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Anfangskante des Ankerelements entfernt. Der Abstand wird mit der Funktion `calc()` hinzugefügt, sodass kein margin erforderlich ist:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### Beispiel für `anchor()`

Sehen wir uns `anchor()` in einem Beispiel an. Wir verwenden dasselbe HTML wie in den vorherigen Beispielen, fügen aber darüber und darunter Fülltext ein. Dadurch ragt der Inhalt über seinen Container hinaus und lässt sich scrollen. Außerdem geben wir dem Ankerelement denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox wird über den Ankernamen mit dem Anker verknüpft und fixiert positioniert. Mit den Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} – die bei horizontalen Schreibrichtungen von links nach rechts {{cssxref("top")}} und {{cssxref("left")}} entsprechen – binden wir sie an den Anker. Zusätzlich erhält die Infobox einen `margin`, um Abstand zwischen dem positionierten Element und seinem Anker zu schaffen:

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

Sehen wir uns die Inset-Deklarationen zur Positionierung genauer an:

- `inset-block-start: anchor(end)`: Setzt die Block-Anfangskante des positionierten Elements auf die Block-Endkante des Ankers, berechnet mit der Funktion `anchor(end)`.
- `inset-inline-start: anchor(self-end)`: Setzt die Inline-Anfangskante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der Funktion `anchor(self-end)`.

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie im Dokument nach oben oder unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei – es ist am Ankerelement fixiert, nicht am Viewport.

> [!NOTE]
> Wenn Sie Elemente mithilfe von `anchor()` relativ zu [impliziten Ankern](#implizite_ankerverknüpfung) positionieren, sind einige zusätzliche Schritte erforderlich. Dazu gehören das Zurücksetzen von Standardwerten für Popover-Eigenschaften und das Festlegen von `position-anchor: auto`, um die implizite Verknüpfung zu nutzen. Weitere Informationen finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Eine `position-area` festlegen

Die Eigenschaft {{cssxref("position-area")}} bietet eine Alternative zur Funktion `anchor()`, um Elemente relativ zu Ankern zu positionieren. Sie basiert auf einem 3×3-Raster, dessen mittlere Zelle das Ankerelement enthält. Mit `position-area` lässt sich das ankerpositionierte Element in einer der neun Zellen platzieren oder über zwei beziehungsweise drei Zellen erstrecken.

![Das nachfolgend beschriebene position-area-Raster](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterzellen sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` beschrieben. Es gibt außerdem logische Entsprechungen wie `start`, `center` und `end` sowie koordinatenbezogene Entsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` beschrieben. Auch hierfür gibt es logische Entsprechungen wie `start`, `center` und `end` sowie koordinatenbezogene Entsprechungen wie `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Zelle werden durch den [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements bestimmt. Der Abstand zwischen der mittleren Zelle und dem äußeren Rand des Rasters wird durch den Containing Block des positionierten Elements bestimmt.

Werte der Eigenschaft `position-area` bestehen aus einem oder zwei der oben beschriebenen Zeilen- und Spaltenwerte. Mit zusätzlichen Optionen lässt sich festlegen, über welchen Bereich des Rasters sich das Element erstrecken soll.

Beispiele:

Sie können zwei Werte angeben, um das positionierte Element in einer bestimmten Rasterzelle zu platzieren:

- `top left` (logische Entsprechung: `start start`) platziert das positionierte Element in der Zelle oben links.
- `bottom center` (logische Entsprechung: `end center`) platziert das positionierte Element in der mittleren Zelle der unteren Zeile.

Sie können auch einen Zeilen- oder Spaltenwert mit einem `span-*`-Wert kombinieren. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element zunächst mittig platziert wird. Der zweite Wert gibt an, über welchen Bereich dieser Zeile oder Spalte es sich erstreckt. Beispiele:

- `top span-left` platziert das positionierte Element in der oberen Zeile und erstreckt es über die mittlere und die linke Zelle dieser Zeile.
- `y-end span-x-end` platziert das positionierte Element am Ende der y-Achse und erstreckt es über die mittlere und die x-Endzelle dieser Zeile.
- `block-end span-all` platziert das positionierte Element in der Block-Endzeile und erstreckt es über die Inline-Anfangs-, die mittlere und die Inline-Endzelle dieser Zeile.

Wenn Sie nur einen Wert angeben, hängt die Wirkung vom jeweiligen Wert ab:

- Ein Wert für eine physische Seite (`top`, `bottom`, `left` oder `right`) oder ein Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als wäre der andere Wert `span-all`. Beispielsweise hat `top` dieselbe Wirkung wie `top span-all`.
- Ein Wert für eine logische Seite (`start` oder `end`) wirkt so, als hätte der andere Wert denselben Wert. Beispielsweise hat `start` dieselbe Wirkung wie `start start`.
- `center` wirkt so, als wären beide Werte auf `center` gesetzt (also `center center`).

> [!NOTE]
> Eine ausführliche Beschreibung aller verfügbaren Werte finden Sie auf der Referenzseite zum Wert [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value). Werden ein logischer und ein physischer Wert kombiniert, ist die Deklaration ungültig.

Sehen wir uns einige dieser Werte in einem Beispiel an. Es verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige Beispiel, enthält aber zusätzlich ein {{htmlelement("select")}}-Element, mit dem sich der `position-area`-Wert des positionierten Elements ändern lässt.

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

Die Infobox wird fixiert positioniert und über CSS mit dem Anker verknüpft. Beim Laden wird sie mit `position-area: top;` an den Anker gebunden und dadurch im oberen Bereich des position-area-Rasters platziert. Sobald Sie im `<select>`-Menü einen anderen Wert auswählen, wird diese Einstellung überschrieben.

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

Ein kurzes Skript wendet außerdem die im `<select>`-Menü ausgewählten neuen `position-area`-Werte auf die Infobox an:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Wählen Sie im `<select>`-Menü verschiedene `position-area`-Werte aus und beobachten Sie, wie sich die Position der Infobox verändert:

{{ EmbedLiveSample("Setting a `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir für keine der beiden Dimensionen des positionierten Elements ausdrücklich eine Größe festgelegt. So können Sie beobachten, welches Verhalten sich daraus ergibt.

Wird ein positioniertes Element ohne explizite Größenangabe in Zellen des `position-area`-Rasters platziert, richtet es sich am angegebenen Rasterbereich aus und verhält sich so, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Seine Größe richtet sich nach der Größe seines [Containing Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block), also nach der Breite seines Inhalts. Diese Größe ergab sich durch `position: fixed`. Absolut und fixiert positionierte Elemente mit automatischer Größenbestimmung werden automatisch so breit wie für ihren Textinhalt nötig, bleiben dabei jedoch durch den Rand des Viewports begrenzt. Wird das Element in diesem Fall mit einem `left`- oder `inline-start`-Wert auf der linken Seite des Rasters platziert, wird der Text umgebrochen. Ist die `max-content`-Größe des verankerten Elements schmaler oder niedriger als die seines Ankers, wächst es nicht auf dessen Größe an.

Wird das positionierte Element vertikal zentriert, etwa mit `position-area: bottom center`, richtet es sich an der angegebenen Rasterzelle aus und erhält dieselbe Breite wie das Ankerelement. In diesem Fall entspricht seine Mindesthöhe der Größe des Containing Blocks des Ankerelements. Es ragt nicht darüber hinaus, da `min-width` den Wert {{cssxref("min-content")}} hat. Das bedeutet, dass es mindestens so breit wie sein längstes Wort ist.

## Mit `anchor-center` am Anker zentrieren

Sie können ein ankerpositioniertes Element zwar mit den `center`-Werten von `position-area` zentrieren, Inset-Eigenschaften in Kombination mit der Funktion `anchor()` bieten jedoch mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn für die Bindung Inset-Eigenschaften statt `position-area` verwendet werden.

Mit den Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} sowie ihren Kurzformen {{cssxref("place-items")}} und {{cssxref("place-self")}} können Entwickler Elemente innerhalb verschiedener Layoutsysteme einfach in Inline- oder Blockrichtung ausrichten – bei Flex-Elementen beispielsweise entlang der Haupt- oder Querachse. Die CSS-Ankerpositionierung ergänzt diese Eigenschaften um den Wert `anchor-center`, der ein positioniertes Element an der Mitte seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige Beispiel. Die Infobox wird fixiert positioniert und an die Unterkante des Ankers gebunden. Mit `justify-self: anchor-center` wird sie anschließend horizontal an der Mitte des Ankers zentriert:

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

Dadurch wird das ankerpositionierte Element unterhalb seines Ankers zentriert:

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## Elemente anhand der Ankergröße dimensionieren

Neben der Positionierung eines Elements relativ zur Position seines Ankers können Sie mithilfe der Funktion [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb einer Größeneigenschaft auch seine Größe relativ zur Größe des Ankers festlegen.

Zu den Größeneigenschaften, die einen `anchor-size()`-Wert akzeptieren, gehören:

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
  - : Der `<dashed-ident>`-Name, der als Wert der Eigenschaft {{cssxref("anchor-name")}} des Ankerelements festgelegt wurde, an dessen Größe Sie die Größe des Elements ausrichten möchten. Wird er weggelassen, wird der **Standardanker** des Elements verwendet, auf den die Eigenschaft {{cssxref("position-anchor")}} verweist.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Abmessung des Ankerelements an, auf deren Grundlage die Größe des positionierten Elements festgelegt wird. Sie können dafür physische Werte (`width` oder `height`) oder logische Werte (`inline`, `block`, `self-inline` oder `self-block`) verwenden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Ausweichwert verwendet wird, wenn das Element weder absolut noch fixiert positioniert ist oder wenn das Ankerelement nicht existiert.

Meist werden Sie mit `anchor-size()` lediglich auf eine Abmessung des Standardankers verweisen. Sie können die Funktion auch innerhalb von {{cssxref("calc")}} verwenden, um die auf das positionierte Element angewendete Größe anzupassen.

Die folgende Regel setzt beispielsweise die Breite des positionierten Elements auf die Breite des Standardankers:

```css
.elem {
  width: anchor-size(width);
}
```

Die folgende Regel setzt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements. Die Multiplikation erfolgt innerhalb einer `calc()`-Funktion:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Sehen wir uns ein Beispiel an. HTML und grundlegendes CSS entsprechen den vorherigen Beispielen. Das Ankerelement erhält jedoch zusätzlich das Attribut [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es fokussiert werden kann. Die Infobox wird wie zuvor fixiert positioniert und mit dem Anker verknüpft. Diesmal binden wir sie jedoch mithilfe von `position-area` rechts an den Anker und geben ihr eine Breite, die das Fünffache der Ankerbreite beträgt:

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

Außerdem vergrößern wir die {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und fügen eine {{cssxref("transition")}} hinzu, damit die Änderung des Zustands animiert wird.

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

Bewegen Sie den Mauszeiger über das Ankerelement oder fokussieren Sie es mit der Tabulatortaste. Das positionierte Element wächst zusammen mit dem Anker. So wird sichtbar, dass die Größe des ankerpositionierten Elements von seinem Anker abhängt:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungsmöglichkeiten von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und margin-Eigenschaften verwenden. Die folgenden Abschnitte gehen auf diese Möglichkeiten genauer ein und zeigen anschließend ein Anwendungsbeispiel.

### Elementposition anhand der Ankergröße festlegen

Sie können die Funktion [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb des Werts einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}} verwenden, um Elemente anhand der Größe ihres Ankerelements zu positionieren. Beispiel:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Anders als die Funktion [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) oder die Eigenschaft {{cssxref("position-area")}} positioniert dies ein Element nicht relativ zur Position seines Ankers (siehe oben unter [Elemente relativ zu ihrem Anker positionieren](#elemente_relativ_zu_ihrem_anker_positionieren)). Das Element ändert seine Position daher nicht, wenn sich sein Anker bewegt. Stattdessen wird es nach den üblichen Regeln für die Positionierung mit [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) platziert.

Das kann in manchen Situationen nützlich sein. Wenn sich Ihr Ankerelement beispielsweise nur vertikal bewegen kann und horizontal stets am Rand seines nächsten positionierten Vorfahren bleibt, können Sie mit `left: anchor-size(width)` erreichen, dass das ankerpositionierte Element immer rechts von seinem Anker platziert wird – selbst wenn sich die Breite des Ankers ändert.

### Elementabstand anhand der Ankergröße festlegen

Sie können die Funktion [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb des Werts einer `margin-*`-Eigenschaft verwenden, um Außenabstände anhand der Größe des Ankerelements festzulegen. Beispiel:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Das ist nützlich, wenn der Außenabstand eines ankerpositionierten Elements stets einem bestimmten Prozentsatz der Breite des Ankerelements entsprechen soll – auch dann, wenn sich dessen Breite ändert.

### Beispiel für Position und Außenabstand mit `anchor-size()`

Sehen wir uns ein Beispiel an, in dem wir den Außenabstand und die Position eines ankerpositionierten Elements anhand der Breite des Ankerelements festlegen.

Im HTML definieren wir zwei {{htmlelement("div")}}-Elemente: ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren. Das Ankerelement erhält ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur fokussiert werden kann. Außerdem fügen wir Fülltext hinzu, damit das {{htmlelement("body")}} hoch genug zum Scrollen wird. Der Fülltext ist hier der Kürze halber nicht dargestellt.

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

Im CSS definieren wir zunächst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Beim positionierten Element setzen wir die Eigenschaft {{cssxref("position")}} auf `absolute` und verknüpfen es über seine Eigenschaft {{cssxref("position-anchor")}} mit dem Ankerelement. Außerdem legen wir für Anker und Infobox feste Werte für {{cssxref("height")}} und {{cssxref("width")}} fest und fügen dem Anker eine {{cssxref("transition")}} hinzu. So werden Breitenänderungen bei einem Zustandswechsel fließend animiert:

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

Nun zum interessantesten Teil: Wir setzen die `width` des Ankers auf `300px`, wenn sich der Mauszeiger darüber befindet oder er fokussiert ist. Für die Infobox legen wir anschließend Folgendes fest:

- `top` auf `anchor(top)`. Dadurch bleibt die Oberkante der Infobox stets auf Höhe der Oberkante des Ankers.
- `left` auf `anchor-size(width)`. Dadurch wird die linke Kante der Infobox im angegebenen Abstand zur linken Kante ihres nächsten positionierten Vorfahren platziert. Hier entspricht dieser Abstand der Breite des Ankerelements, und der nächste positionierte Vorfahre ist das `<body>`-Element. Daher erscheint die Infobox rechts vom Anker.
- `margin-left` auf `calc(anchor-size(width)/4)`. Dadurch behält die Infobox stets einen linken Außenabstand zum Anker, der einem Viertel der Ankerbreite entspricht.

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

Das dargestellte Ergebnis sieht so aus:

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

Fokussieren Sie den Anker mit der Tabulatortaste oder bewegen Sie den Mauszeiger darüber. Beachten Sie, wie die Position und der linke Außenabstand der Infobox proportional zur Breite des Ankerelements wachsen.

## Siehe auch

- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- Modul [Logische CSS-Eigenschaften und -Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Lernen: Größe von Elementen in CSS festlegen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
