---
title: CSS-Ankerpositionierung verwenden
short-title: Ankerpositionierung verwenden
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Modul **CSS-Ankerpositionierung** definiert Funktionen, mit denen Sie Elemente aneinander binden können. Elemente können als **Ankerelemente** und **ankerpositionierte Elemente** definiert werden. Ankerpositionierte Elemente können an Ankerelemente gebunden werden. Ihre Größe und Position lassen sich dann relativ zur Größe und Position der Ankerelemente festlegen, an die sie gebunden sind.

Die CSS-Ankerpositionierung bietet außerdem reine CSS-Mechanismen, um mehrere alternative Positionen für ein ankerpositioniertes Element festzulegen. Wenn beispielsweise ein Tooltip an einem Formularfeld verankert ist, in seiner Standardposition aber außerhalb des sichtbaren Bereichs erscheinen würde, kann der Browser versuchen, ihn an einer anderen vorgeschlagenen Position innerhalb des sichtbaren Bereichs darzustellen. Alternativ kann er ihn bei Bedarf ganz ausblenden.

Dieser Artikel erläutert die grundlegenden Konzepte der Ankerpositionierung und zeigt, wie Sie die Funktionen des Moduls zum Zuordnen, Positionieren und Festlegen der Größe verwenden. Zu jedem der nachfolgend behandelten Konzepte finden Sie Links zu Referenzseiten mit weiteren Beispielen und Syntaxdetails. Informationen zum Festlegen alternativer Positionen und zum Ausblenden ankerpositionierter Elemente finden Sie im Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Grundlegende Konzepte

Es kommt häufig vor, dass ein Element an ein anderes gebunden werden soll. Beispiele dafür sind:

- Fehlermeldungen, die neben Formularsteuerelementen erscheinen.
- Tooltips oder Infoboxen, die neben einem UI-Element eingeblendet werden, um zusätzliche Informationen dazu bereitzustellen.
- Einstellungs- oder Optionsdialoge, mit denen UI-Elemente schnell konfiguriert werden können.
- Dropdown- oder Popover-Menüs, die neben einer zugehörigen Navigationsleiste oder Schaltfläche erscheinen.

Moderne Benutzeroberflächen erfordern häufig, dass Inhalte – oft wiederverwendbare und dynamisch erzeugte Inhalte – relativ zu einem Ankerelement platziert werden. Solche Anwendungsfälle wären recht einfach umzusetzen, wenn sich das Element, an das etwas gebunden werden soll (das **Ankerelement**), in der Benutzeroberfläche immer an derselben Stelle befände und das gebundene Element (das **ankerpositionierte Element** oder einfach **positionierte Element**) in der Quellreihenfolge immer unmittelbar davor oder danach stehen könnte. In der Praxis ist es jedoch selten so einfach.

Die Position eines positionierten Elements relativ zu seinem Ankerelement muss erhalten bleiben und angepasst werden, wenn sich das Ankerelement bewegt oder sich seine Anordnung anderweitig ändert, etwa durch Scrollen, eine Änderung der Viewport-Größe oder Drag-and-Drop. Wenn sich beispielsweise ein Formularfeld dem Rand des Viewports nähert, könnte sein Tooltip außerhalb des sichtbaren Bereichs landen. In der Regel möchten Sie den Tooltip an das Formularsteuerelement binden und sicherstellen, dass er vollständig sichtbar bleibt, solange das Formularfeld sichtbar ist. Falls nötig, soll der Tooltip dazu automatisch verschoben werden. Dieses Verhalten kennen Sie möglicherweise als Standardverhalten von Kontextmenüs auf Ihrem Desktop- oder Laptop-Computer, wenn Sie mit der rechten Maustaste klicken oder <kbd>Ctrl</kbd> + Klick verwenden.

Bisher waren JavaScript, zusätzliche Komplexität und mögliche Leistungseinbußen erforderlich, um ein Element einem anderen zuzuordnen und Position und Größe des positionierten Elements dynamisch anhand der Position eines Ankers zu ändern. Außerdem war nicht gewährleistet, dass dies in jeder Situation funktionierte. Mit den im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) definierten Funktionen können Sie solche Anwendungsfälle stattdessen performant und deklarativ mit CSS (und HTML) umsetzen.

## Anker und positionierte Elemente zuordnen

Um ein Element einem Anker zuzuordnen, legen Sie zunächst fest, welches Element der Anker ist. Anschließend geben Sie an, welche positionierten Elemente diesem Anker zugeordnet werden sollen. Dadurch entsteht eine Ankerreferenz zwischen den Elementen. Diese Zuordnung kann explizit über CSS oder implizit erfolgen.

### Explizite Ankerzuordnung mit CSS

Um ein Element mit CSS als Anker festzulegen, weisen Sie ihm über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen zu. Der Ankername muss ein {{cssxref("dashed-ident")}} sein. In diesem Beispiel setzen wir außerdem {{cssxref("width")}} des Ankers auf `fit-content`. So entsteht ein kleiner quadratischer Anker, an dem sich die Wirkung der Verankerung besser erkennen lässt.

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

Um ein Element in ein ankerpositioniertes Element umzuwandeln, sind zwei Schritte nötig: Zunächst muss es mithilfe der Eigenschaft {{cssxref("position")}} [absolut oder fixiert positioniert](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) werden. Anschließend wird die Eigenschaft {{cssxref("position-anchor")}} des positionierten Elements auf den Wert der Eigenschaft `anchor-name` des Ankerelements gesetzt, um beide einander zuzuordnen:

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

{{ EmbedLiveSample("explicit_css_anchor_association", "100%", "120") }}

Anker und Infobox sind nun einander zugeordnet. Vorerst müssen Sie uns das allerdings glauben: Sie sind noch nicht aneinander gebunden. Würden Sie den Anker positionieren und an eine andere Stelle der Seite verschieben, würde er sich allein bewegen, während die Infobox an ihrem Platz bliebe. Wie die Bindung tatsächlich funktioniert, sehen Sie im Abschnitt [Elemente relativ zu ihrem Anker positionieren](#elemente_relativ_zu_ihrem_anker_positionieren).

### Implizite Ankerzuordnung

In manchen Fällen entsteht aufgrund der semantischen Beziehung zwischen zwei Elementen eine implizite Ankerreferenz:

- Wenn Sie die [Popover API](/de/docs/Web/API/Popover_API) verwenden, um ein Popover einem Steuerelement zuzuordnen, entsteht zwischen beiden eine implizite Ankerreferenz. Das kann auf folgende Weise geschehen:
  - Durch die deklarative Zuordnung eines Popovers zu einem Steuerelement mithilfe der Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder der Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und `id`.
  - Durch die programmatische Zuordnung einer Popover-Aktion wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zu einem Steuerelement mithilfe der Option `source`.
- Für ein {{htmlelement("select")}}-Element und seinen Dropdown-Picker wird die Funktionalität [anpassbarer select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den Wert `base-select` der Eigenschaft {{cssxref("appearance")}} aktiviert. In diesem Fall entsteht zwischen beiden eine implizite Beziehung zwischen Popover und auslösendem Element. Damit besteht auch eine implizite Ankerreferenz.

> [!NOTE]
> Weitere Informationen zum Positionieren von Elementen relativ zu ihren impliziten Ankern finden Sie unter [Ankerpositionierung von Popovers](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

> [!NOTE]
> Die oben beschriebenen Methoden ordnen einen Anker einem Element zu, binden die Elemente aber noch nicht aneinander. Dazu muss das positionierte Element mithilfe von CSS relativ zu seinem Anker positioniert werden.

### Eine Ankerzuordnung entfernen

Um eine zuvor eingerichtete explizite Zuordnung zwischen einem Ankerelement und einem positionierten Element zu entfernen, können Sie eine der folgenden Möglichkeiten verwenden:

1. Setzen Sie den Wert von `anchor-name` des Ankers auf `none` oder auf einen anderen `<dashed-ident>`, wenn ein anderes Element an ihn gebunden werden soll.
2. Setzen Sie die Eigenschaft `position-anchor` des positionierten Elements auf `none` oder auf einen Ankernamen, der im aktuellen Dokument nicht existiert, beispielsweise `--not-an-anchor-name`.

Bei impliziten Ankerzuordnungen müssen Sie die zweite Methode verwenden – die erste funktioniert hier nicht. Der Grund ist, dass die Zuordnung intern gesteuert wird und Sie `anchor-name` nicht über CSS entfernen können.

Um beispielsweise zu verhindern, dass der Picker eines anpassbaren `<select>`-Elements am `<select>`-Element selbst verankert wird, können Sie die folgende Regel verwenden:

```css
::picker(select) {
  position-anchor: none;
}
```

## Gültigkeitsbereich von Ankern

Wenn mehrere Ankerelemente denselben Wert für {{cssxref("anchor-name")}} haben und ein positioniertes Element diesen Namen als Wert seiner Eigenschaft {{cssxref("position-anchor")}} verwendet, wird das positionierte Element dem _letzten_ Ankerelement mit diesem `anchor-name`-Wert in der Quellreihenfolge zugeordnet.

Enthält ein Dokument beispielsweise mehrere wiederholte Komponenten, in denen jeweils ein positioniertes Element an einen Anker gebunden ist, werden ohne unterschiedliche Ankernamen für die einzelnen Komponenten alle positionierten Elemente am letzten Anker der Seite verankert. Das ist wahrscheinlich nicht das gewünschte Verhalten.

Mit der Eigenschaft {{cssxref("anchor-scope")}} lässt sich dieses Problem lösen: Sie begrenzt die Sichtbarkeit beziehungsweise den „Gültigkeitsbereich“ eines `anchor-name`-Werts auf einen bestimmten Teilbaum. Dadurch kann jedes positionierte Element nur an einem Element innerhalb desselben Teilbaums verankert werden, für den der Gültigkeitsbereich festgelegt wurde.

- `anchor-scope: all` legt fest, dass _alle_ im Teilbaum definierten `anchor-name`-Werte nur von positionierten Elementen im selben Teilbaum verwendet werden können.
- `anchor-scope: --my-anchor, --my-anchor2` legt fest, dass die angegebenen `anchor-name`-Werte, sofern sie im Teilbaum definiert sind, nur von positionierten Elementen im selben Teilbaum verwendet werden können.
- `anchor-scope: none` ist der Standardwert und bedeutet, dass kein Gültigkeitsbereich für Anker festgelegt ist.

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

Wir machen jedes `anchor`-`<div>` zu einem Ankerelement, indem wir ihm den `anchor-name` `--my-anchor` zuweisen. Anschließend positionieren wir jedes `positioned`-`<div>` relativ zu einem Element mit dem Ankernamen `--my-anchor`. Dazu geben wir ihm eine absolute Positionierung, den `position-anchor`-Wert `--my-anchor` und den {{cssxref("position-area")}}-Wert `right`. Schließlich legen wir mit `anchor-scope: --my-anchor` den Gültigkeitsbereich für jeden `<section>`-Container fest:

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

Jedes positionierte Element wird relativ zum Anker innerhalb desselben `<section>`-Elements positioniert. Das liegt daran, dass für jedes `<section>`-Element `anchor-scope: --my-anchor` festgelegt ist. Positionierte Elemente innerhalb eines solchen Containers können daher nur relativ zu `my-anchor`-Ankern im selben Container positioniert werden.

Ohne `anchor-scope: --my-anchor` für die Container würden alle positionierten Elemente relativ zum letzten Anker der Seite positioniert.

## Elemente relativ zu ihrem Anker positionieren

Wie bereits gezeigt, ist es für sich genommen wenig nützlich, ein positioniertes Element einem Anker zuzuordnen. Ziel ist es, das positionierte Element relativ zu seinem zugeordneten Ankerelement zu platzieren. Dazu können Sie einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}} einen Wert mit der [CSS-Funktion `anchor()`](#using_inset_properties_with_anchor_function_values) zuweisen, [eine `position-area` festlegen](#setting_a_position-area) oder das positionierte Element mit dem [Ausrichtungswert `anchor-center`](#centering_on_the_anchor_using_anchor-center) zentrieren.

> [!NOTE]
> Die CSS-Ankerpositionierung bietet auch Mechanismen zum Festlegen von Ausweichpositionen, falls die Standardposition eines positionierten Elements dazu führt, dass es über den Viewport hinausragt. Einzelheiten finden Sie im Leitfaden [Ausweichoptionen und bedingtes Ausblenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Damit Zuordnung und Positionierung funktionieren, muss das Ankerelement ein sichtbarer DOM-Knoten sein. Ist es ausgeblendet, beispielsweise durch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display#none), wird das positionierte Element relativ zu seinem nächsten positionierten Vorfahren positioniert. Wie Sie ein ankerpositioniertes Element ausblenden, wenn sein Anker verschwindet, erläutert [Bedingtes Ausblenden mit `position-visibility`](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

### Inset-Eigenschaften mit Werten der Funktion `anchor()` verwenden

Herkömmliche absolut oder fixiert positionierte Elemente werden explizit positioniert, indem für {{Glossary("inset_properties", "Inset-Eigenschaften")}} Werte vom Typ {{cssxref("length")}} oder {{cssxref("percentage")}} festgelegt werden. Bei `position: absolute` bezeichnet dieser Inset-Wert einen absoluten Abstand zu den Rändern des nächsten positionierten Vorfahren. Bei `position: fixed` bezeichnet er einen absoluten Abstand zum Viewport.

Die CSS-Ankerpositionierung ändert dieses Prinzip: Ankerpositionierte Elemente können relativ zu den Rändern ihrer zugeordneten Anker platziert werden. Das Modul definiert die Funktion [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor), die als Wert für jede Inset-Eigenschaft zulässig ist. Die Funktion legt den Inset-Wert als absoluten Abstand relativ zum Ankerelement fest. Dazu werden das Ankerelement, die Seite des Ankerelements, auf die sich die Positionierung bezieht, und der Abstand zu dieser Seite angegeben.

Die Bestandteile der Funktion sehen so aus:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : Der Wert der Eigenschaft {{cssxref("anchor-name")}} des Ankerelements, relativ zu dem Sie die Seite des Elements positionieren möchten. Es handelt sich um einen `<dashed-ident>`-Wert. Wird er weggelassen, wird der **Standardanker** des Elements verwendet. Das ist der Anker, auf den seine Eigenschaft {{cssxref("position-anchor")}} verweist oder der dem Element über das nicht standardisierte HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) zugeordnet ist.
    > [!NOTE]
    > Durch die Angabe eines `<anchor-name>` wird das Element relativ zu diesem Anker positioniert, aber keine Elementzuordnung hergestellt. Sie können die Seiten eines Elements zwar relativ zu mehreren Ankern positionieren, indem Sie in verschiedenen `anchor()`-Funktionen desselben Elements [unterschiedliche `<anchor-name>`-Werte](/de/docs/Web/CSS/Reference/Values/anchor#positioning_an_element_relative_to_multiple_anchors) angeben. Das positionierte Element ist jedoch nur einem einzigen Anker zugeordnet.

- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Gibt die Position relativ zu einer oder mehreren Seiten des Ankers an. Zulässige Werte sind unter anderem die Mitte (`center`) des Ankers, physische Seiten (`top`, `left` usw.), logische Seiten (`start`, `self-end` usw.) oder ein `<percentage>`-Wert zwischen dem Anfang (`0%`) und dem Ende (`100%`) der Achse der Inset-Eigenschaft, für die `anchor()` verwendet wird. Ist der Wert nicht mit der Inset-Eigenschaft [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values), wird der Ausweichwert verwendet.

- `<fallback>`
  - : Ein {{cssxref("length-percentage")}}-Wert, der als Ausweichwert für den Abstand verwendet wird, wenn das Element weder absolut noch fixiert positioniert ist, der verwendete `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist, für die `anchor()` festgelegt wurde, oder das Ankerelement nicht existiert.

Der Rückgabewert der Funktion `anchor()` ist ein Längenwert, der anhand der Position des Ankers berechnet wird. Wenn Sie für eine Inset-Eigenschaft eines ankerpositionierten Elements direkt einen Längen- oder Prozentwert festlegen, wird es so positioniert, als wäre es nicht an das Ankerelement gebunden. Dasselbe Verhalten tritt auf, wenn der `<anchor-side>`-Wert nicht mit der Inset-Eigenschaft kompatibel ist und stattdessen der Ausweichwert verwendet wird. Diese beiden Deklarationen sind gleichwertig:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Beide platzieren das positionierte Element `50px` oberhalb der Unterkante des nächsten positionierten Vorfahren (falls vorhanden) oder des initialen umschließenden Blocks.

Die am häufigsten verwendeten `anchor()`-Parameter beziehen sich auf eine Seite des Standardankers. Häufig fügen Sie außerdem einen {{cssxref("margin")}} hinzu, um Abstand zwischen Anker und positioniertem Element zu schaffen, oder verwenden `anchor()` innerhalb einer `calc()`-Funktion, um diesen Abstand hinzuzufügen.

Die folgende Regel positioniert beispielsweise die linke Kante des positionierten Elements bündig mit der rechten Kante des Ankerelements. Anschließend schafft `margin-left` etwas Abstand zwischen den Kanten:

```css
.positionedElement {
  left: anchor(right);
  margin-left: 10px;
}
```

Der Rückgabewert einer `anchor()`-Funktion ist ein Längenwert. Sie können ihn daher innerhalb einer {{cssxref("calc()")}}-Funktion verwenden. Die folgende Regel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Anfangskante des Ankerelements entfernt. Da der Abstand mit `calc()` hinzugefügt wird, ist kein zusätzlicher Margin nötig:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### Beispiel für `anchor()`

Sehen wir uns `anchor()` in einem Beispiel an. Wir verwenden dasselbe HTML wie in den vorherigen Beispielen, fügen aber oberhalb und unterhalb Fülltext ein. Dadurch läuft der Inhalt über seinen Container hinaus und kann gescrollt werden. Das Ankerelement erhält denselben `anchor-name` wie in den vorherigen Beispielen:

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

Die Infobox wird über den Ankernamen dem Anker zugeordnet und fixiert positioniert. Mit den Eigenschaften {{cssxref("inset-block-start")}} und {{cssxref("inset-inline-start")}} – die bei horizontalen Schreibrichtungen von links nach rechts {{cssxref("top")}} und {{cssxref("left")}} entsprechen – binden wir sie an den Anker. Ein `margin` an der Infobox schafft Abstand zwischen dem positionierten Element und seinem Anker:

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

Sehen wir uns die Deklarationen der Inset-Eigenschaften genauer an:

- `inset-block-start: anchor(end)`: Setzt die Block-Anfangskante des positionierten Elements auf die Block-Endkante des Ankers, berechnet mit der Funktion `anchor(end)`.
- `inset-inline-start: anchor(self-end)`: Setzt die Inline-Anfangskante des positionierten Elements auf die Inline-Endkante des Ankers, berechnet mit der Funktion `anchor(self-end)`.

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

Das positionierte Element befindet sich `5px` unterhalb und `5px` rechts vom Ankerelement. Wenn Sie im Dokument nach oben und unten scrollen, behält das positionierte Element seine Position relativ zum Ankerelement bei: Es ist am Ankerelement fixiert, nicht am Viewport.

> [!NOTE]
> Wenn Sie Elemente mit `anchor()` relativ zu [impliziten Ankern](#implizite_ankerzuordnung) positionieren, sind einige zusätzliche Schritte erforderlich. Dazu gehören das Zurücksetzen der Standardwerte von Popover-Eigenschaften und das Festlegen von `position-anchor: auto`, um die implizite Zuordnung zu aktivieren. Weitere Informationen finden Sie unter [Ankerpositionierung von Popovers](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Eine `position-area` festlegen

Die Eigenschaft {{cssxref("position-area")}} bietet eine Alternative zur Funktion `anchor()`, um Elemente relativ zu Ankern zu positionieren. Sie basiert auf einem Raster aus 3 × 3 Feldern, in dem das Ankerelement das mittlere Feld einnimmt. Mit `position-area` kann das ankerpositionierte Element in einem der neun Felder platziert werden oder sich über zwei oder drei Felder erstrecken.

![Das nachfolgend beschriebene position-area-Raster](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterfelder sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Dazu gibt es logische Entsprechungen wie `start`, `center` und `end` sowie koordinatenbezogene Entsprechungen wie `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Dazu gibt es logische Entsprechungen wie `start`, `center` und `end` sowie koordinatenbezogene Entsprechungen wie `x-start`, `center` und `x-end`.

Die Abmessungen des mittleren Feldes werden durch den [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements bestimmt. Der Abstand zwischen dem mittleren Feld und dem äußeren Rand des Rasters wird durch den umschließenden Block des positionierten Elements bestimmt.

Werte für `position-area` bestehen aus einem oder zwei der oben beschriebenen Zeilen- und Spaltenwerte. Mit Optionen zum Überspannen mehrerer Felder können Sie den Bereich des Rasters festlegen, in dem das Element positioniert werden soll.

Beispiele:

Sie können zwei Werte angeben, um das positionierte Element in einem bestimmten Rasterfeld zu platzieren:

- `top left` (logische Entsprechung: `start start`) platziert das positionierte Element im Feld oben links.
- `bottom center` (logische Entsprechung: `end center`) platziert es im unteren mittleren Feld.

Sie können einen Zeilen- oder Spaltenwert zusammen mit einem `span-*`-Wert angeben. Der erste Wert bestimmt die Zeile oder Spalte, in der das positionierte Element zunächst im mittleren Feld platziert wird. Der andere Wert bestimmt, wie weit es sich in dieser Zeile oder Spalte erstreckt. Beispiele:

- `top span-left` platziert das positionierte Element in der oberen Zeile, wo es sich über das mittlere und das linke Feld erstreckt.
- `y-end span-x-end` platziert das positionierte Element am Ende der y-Achse, wo es sich über das mittlere und das x-Endfeld erstreckt.
- `block-end span-all` platziert das positionierte Element in der Block-Endzeile, wo es sich über deren Inline-Anfangsfeld, mittleres Feld und Inline-Endfeld erstreckt.

Wenn Sie nur einen Wert angeben, hängt die Wirkung vom jeweiligen Wert ab:

- Ein Wert für eine physische Seite (`top`, `bottom`, `left` oder `right`) oder ein Koordinatenwert (`y-start`, `y-end`, `x-start`, `x-end`) wirkt so, als wäre der andere Wert `span-all`. Beispielsweise hat `top` dieselbe Wirkung wie `top span-all`.
- Ein Wert für eine logische Seite (`start` oder `end`) wirkt so, als wäre auch der andere Wert darauf gesetzt. Beispielsweise hat `start` dieselbe Wirkung wie `start start`.
- `center` wirkt so, als wären beide Werte auf `center` gesetzt (also `center center`).

> [!NOTE]
> Eine ausführliche Beschreibung aller verfügbaren Werte finden Sie auf der Referenzseite zum Wert [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value). Wenn Sie einen logischen mit einem physischen Wert kombinieren, wird die Deklaration ungültig.

Sehen wir uns einige dieser Werte an. Dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige, enthält aber zusätzlich ein {{htmlelement("select")}}-Element, mit dem Sie den `position-area`-Wert des positionierten Elements ändern können.

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

Die Infobox wird fixiert positioniert und über CSS dem Anker zugeordnet. Beim Laden wird sie mit `position-area: top;` an den Anker gebunden und dadurch oben im position-area-Raster platziert. Sobald Sie im `<select>`-Menü einen anderen Wert auswählen, wird diese Einstellung überschrieben.

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

Ein kurzes Skript übernimmt die im `<select>`-Menü gewählten neuen `position-area`-Werte für die Infobox:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Set the position-area to the value chosen in the select box
  infobox.style.positionArea = area;
});
```

Wählen Sie im `<select>`-Menü verschiedene `position-area`-Werte aus und beobachten Sie, wie sich die Position der Infobox ändert:

{{ EmbedLiveSample("Setting a `position-area`", "100%", "250") }}

### Breite des positionierten Elements

Im obigen Beispiel haben wir die Größe des positionierten Elements in keiner der beiden Dimensionen ausdrücklich festgelegt. So können Sie beobachten, welches Verhalten sich daraus ergibt.

Wird ein positioniertes Element ohne explizite Größenangabe in Feldern des `position-area`-Rasters platziert, richtet es sich nach dem angegebenen Rasterbereich aus und verhält sich so, als wäre {{cssxref("width")}} auf {{cssxref("max-content")}} gesetzt. Seine Größe richtet sich nach der Größe seines [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block), also nach der Breite seines Inhalts. Diese Größenbestimmung ergibt sich aus `position: fixed`. Absolut und fixiert positionierte Elemente mit automatischer Größenbestimmung werden so breit wie nötig, um ihren Textinhalt aufzunehmen, sind dabei aber durch den Rand des Viewports begrenzt. Wird das Element in diesem Fall mit einem `left`- oder `inline-start`-Wert auf der linken Seite des Rasters platziert, bricht der Text um. Ist die `max-content`-Größe des verankerten Elements schmaler oder niedriger als die seines Ankers, wächst es nicht auf die Größe des Ankers an.

Wenn das positionierte Element vertikal zentriert ist, etwa mit `position-area: bottom center`, richtet es sich nach dem angegebenen Rasterfeld aus und hat dieselbe Breite wie das Ankerelement. In diesem Fall entspricht seine Mindesthöhe der Größe des umschließenden Blocks des Ankerelements. Es läuft nicht über, da `min-width` den Wert {{cssxref("min-content")}} hat: Es ist also mindestens so breit wie sein längstes Wort.

## Mit `anchor-center` am Anker zentrieren

Sie können ein ankerpositioniertes Element zwar mit den `center`-Werten von `position-area` zentrieren, doch Inset-Eigenschaften in Kombination mit der Funktion `anchor()` bieten mehr Kontrolle über die genaue Position. Die CSS-Ankerpositionierung bietet eine Möglichkeit, ein ankerpositioniertes Element relativ zu seinem Anker zu zentrieren, wenn für die Bindung Inset-Eigenschaften statt `position-area` verwendet werden.

Mit den Eigenschaften {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("align-items")}} sowie ihren Kurzschreibweisen {{cssxref("place-items")}} und {{cssxref("place-self")}} können Sie Elemente in verschiedenen Layoutsystemen einfach in Inline- oder Blockrichtung ausrichten, etwa Flex-Kindelemente entlang der Haupt- oder Querachse. Die CSS-Ankerpositionierung ergänzt diese Eigenschaften um den Wert `anchor-center`, der ein positioniertes Element an der Mitte seines Standardankers ausrichtet.

Dieses Beispiel verwendet dasselbe HTML und dieselben grundlegenden CSS-Stile wie das vorherige. Die Infobox wird fixiert positioniert und an die Unterkante des Ankers gebunden. Mit `justify-self: anchor-center` wird sie anschließend horizontal an der Mitte des Ankers zentriert:

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

## Elementgröße anhand der Ankergröße festlegen

Sie können ein Element nicht nur relativ zur Position seines Ankers platzieren, sondern seine Größe mithilfe der Funktion [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb des Werts einer Größeneigenschaft auch relativ zur Größe des Ankers festlegen.

Die folgenden Größeneigenschaften akzeptieren einen `anchor-size()`-Wert:

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

`anchor-size()`-Funktionen ergeben Werte vom Typ {{cssxref("length")}}. Ihre Syntax sieht so aus:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Der `<dashed-ident>`-Name, der als Wert der Eigenschaft {{cssxref("anchor-name")}} des Ankerelements festgelegt ist, an dessen Größe Sie die Größe des Elements ausrichten möchten. Wird er weggelassen, wird der **Standardanker** des Elements verwendet, auf den die Eigenschaft {{cssxref("position-anchor")}} verweist.
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Gibt die Abmessung des Ankerelements an, an der sich die Größe des positionierten Elements orientiert. Dafür können physische Werte (`width` oder `height`) oder logische Werte (`inline`, `block`, `self-inline` oder `self-block`) verwendet werden.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe an, die als Ausweichwert verwendet wird, wenn das Element weder absolut noch fixiert positioniert ist oder das Ankerelement nicht existiert.

Die am häufigsten verwendeten `anchor-size()`-Funktionen beziehen sich lediglich auf eine Abmessung des Standardankers. Sie können sie auch innerhalb von {{cssxref("calc")}}-Funktionen verwenden, um die Größe des positionierten Elements anzupassen.

Die folgende Regel legt beispielsweise die Breite des positionierten Elements auf die Breite des Standardankers fest:

```css
.elem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements. Die Multiplikation erfolgt innerhalb einer `calc()`-Funktion:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Sehen wir uns ein Beispiel an. HTML und grundlegendes CSS sind dieselben wie in den vorherigen Beispielen. Das Ankerelement erhält jedoch ein Attribut [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es den Fokus erhalten kann. Die Infobox wird wie zuvor fixiert positioniert und dem Anker zugeordnet. Diesmal binden wir sie jedoch mit `position-area` rechts an den Anker und geben ihr eine Breite, die fünfmal so groß ist wie die Breite des Ankers:

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

Zusätzlich vergrößern wir {{cssxref("width")}} des Ankerelements bei {{cssxref(":hover")}} und {{cssxref(":focus")}} und fügen eine {{cssxref("transition")}} hinzu, damit die Größenänderung beim Zustandswechsel animiert wird.

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

Bewegen Sie den Mauszeiger über das Ankerelement oder navigieren Sie mit der Tabulatortaste dorthin. Das positionierte Element wächst mit dem Anker. So wird deutlich, dass die Größe des ankerpositionierten Elements von seinem Anker abhängt:

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## Weitere Verwendungsmöglichkeiten von `anchor-size()`

Sie können `anchor-size()` auch in physischen und logischen Inset- und Margin-Eigenschaften verwenden. Die folgenden Abschnitte erläutern diese Möglichkeiten und zeigen anschließend ein Anwendungsbeispiel.

### Elementposition anhand der Ankergröße festlegen

Sie können die Funktion [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb des Werts einer {{Glossary("Inset_properties", "Inset-Eigenschaft")}} verwenden, um Elemente anhand der Größe ihres Ankerelements zu positionieren, beispielsweise so:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Anders als die Funktion [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) oder die Eigenschaft {{cssxref("position-area")}} positioniert dies ein Element nicht relativ zur _Position_ seines Ankers (siehe oben [Elemente relativ zu ihrem Anker positionieren](#elemente_relativ_zu_ihrem_anker_positionieren)). Wenn sich der Anker bewegt, ändert sich die Position des Elements daher nicht. Stattdessen wird das Element nach den üblichen Regeln für die Positionierung mit [`absolute`](/de/docs/Web/CSS/Reference/Properties/position#absolute) oder [`fixed`](/de/docs/Web/CSS/Reference/Properties/position#fixed) platziert.

Das kann in manchen Situationen nützlich sein. Wenn sich Ihr Ankerelement beispielsweise nur vertikal bewegen kann und horizontal stets am Rand seines nächsten positionierten Vorfahren bleibt, können Sie mit `left: anchor-size(width)` erreichen, dass das ankerpositionierte Element auch bei einer Änderung der Ankerbreite stets rechts vom Anker positioniert wird.

### Elementabstand anhand der Ankergröße festlegen

Sie können die Funktion [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size) innerhalb des Werts einer `margin-*`-Eigenschaft verwenden, um Außenabstände anhand der Größe des Ankerelements festzulegen, beispielsweise so:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Das kann hilfreich sein, wenn der Außenabstand eines ankerpositionierten Elements auch bei einer Änderung der Ankerbreite stets demselben Anteil dieser Breite entsprechen soll.

### Beispiel für Position und Außenabstand mit `anchor-size()`

Sehen wir uns ein Beispiel an, in dem wir den Außenabstand und die Position eines ankerpositionierten Elements relativ zur Breite des Ankerelements festlegen.

Im HTML definieren wir zwei {{htmlelement("div")}}-Elemente: ein `anchor`-Element und ein `infobox`-Element, das relativ zum Anker positioniert wird. Das Ankerelement erhält ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut, damit es über die Tastatur den Fokus erhalten kann. Außerdem fügen wir Fülltext hinzu, damit {{htmlelement("body")}} hoch genug ist, um Scrollen erforderlich zu machen. Der Kürze halber wird dieser Text hier jedoch nicht gezeigt.

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

Im CSS deklarieren wir zunächst das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Die Eigenschaft {{cssxref("position")}} des positionierten Elements wird auf `absolute` gesetzt; über seine Eigenschaft {{cssxref("position-anchor")}} wird es dem Ankerelement zugeordnet. Außerdem legen wir für Anker und Infobox feste Werte für {{cssxref("height")}} und {{cssxref("width")}} fest. Eine {{cssxref("transition")}} am Anker sorgt dafür, dass Änderungen seiner Breite beim Zustandswechsel fließend animiert werden:

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

Kommen wir zum wichtigsten Teil. Wenn der Mauszeiger über dem Anker liegt oder er den Fokus hat, setzen wir seine `width` auf `300px`. Für die Infobox legen wir dann Folgendes fest:

- Den `top`-Wert auf `anchor(top)`. Dadurch bleibt die Oberkante der Infobox stets auf gleicher Höhe mit der Oberkante des Ankers.
- Den `left`-Wert auf `anchor-size(width)`. Dadurch wird die linke Kante der Infobox im angegebenen Abstand von der linken Kante ihres nächsten positionierten Vorfahren platziert. Hier entspricht dieser Abstand der Breite des Ankerelements, und der nächste positionierte Vorfahr ist das `<body>`-Element. Die Infobox erscheint daher rechts vom Anker.
- Den `margin-left`-Wert auf `calc(anchor-size(width)/4)`. Dadurch bleibt zwischen Infobox und Anker stets ein linker Außenabstand, der einem Viertel der Ankerbreite entspricht.

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

{{EmbedLiveSample("anchor-size_position_and_margin_example", "100%", "240")}}

Navigieren Sie mit der Tabulatortaste zum Anker oder bewegen Sie den Mauszeiger darüber. Beachten Sie, wie die Position und der linke Außenabstand der Infobox proportional zur Breite des Ankerelements wachsen.

## Siehe auch

- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- Modul [Logische CSS-Eigenschaften und -Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Lernen: Größen von Elementen in CSS festlegen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
