---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: cbe41cc7d4fc4de3c6c89ae44d574740a18af6e2
---

{{CSSRef}}

Die **`display`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie z.B. [Flowlayout](/de/docs/Web/CSS/CSS_display/Flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal setzt die **`display`**-Eigenschaft die inneren und äußeren _Displaytypen_ eines Elements. Der äußere Typ legt die Teilnahme eines Elements am [Fluss-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout) fest; der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; zum Beispiel wird das Detail dessen, was passiert, wenn `display: flex` deklariert wird, in der Spezifikation des CSS Flexible Box Models definiert.

{{InteractiveExample("CSS Demo: display")}}

```css interactive-example-choice
display: block;
```

```css interactive-example-choice
display: inline-block;
```

```css interactive-example-choice
display: none;
```

```css interactive-example-choice
display: flex;
```

```css interactive-example-choice
display: grid;
```

```html interactive-example
<p>
  Apply different <code>display</code> values on the dashed orange-bordered
  <code>div</code>, which contains three child elements.
</p>
<section class="default-example" id="default-example">
  <div class="example-container">
    Some text A.
    <div id="example-element">
      <div class="child">Child 1</div>
      <div class="child">Child 2</div>
      <div class="child">Child 3</div>
    </div>
    Some text B.
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 100%;
  height: 100%;
}

code {
  background: #8888;
}

#example-element {
  border: 3px dashed orange;
}

.child {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #ccccff;
  border: 1px solid #ababab;
  color: black;
}
```

## Syntax

```css
/* precomposed values */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* Box suppression */
display: none;
display: contents;

/* multi-keyword syntax */
display: block flex;
display: block flow;
display: block flow-root;
display: block grid;
display: inline flex;
display: inline flow;
display: inline flow-root;
display: inline grid;

/* other values */
display: table;
display: table-row; /* all table elements have an equivalent CSS display value */
display: list-item;

/* Global values */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

Die CSS-Eigenschaft `display` wird unter Verwendung von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den äußeren Displaytyp des Elements, was im Wesentlichen seine Rolle im Fluss-Layout ist:
    - `block`
      - : Das Element generiert eine Blockbox, die sowohl vor als auch nach dem Element Zeilenumbrüche erzeugt, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die weder vor noch nach sich selbst Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Anzeigeeigenschaft antreffen, die nur einen **äußeren** Wert hat (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden, z.B. `display: inline flex` könnte den folgenden Fallback haben:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display) für weitere Informationen.

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter geben den inneren Displaytyp des Elements an, der den Typ des Formatierungskontexts definiert, in dem seine Inhalte layoutiert werden (vorausgesetzt, es handelt sich um ein nicht ersetztes Element):

    - `flow`

      - : Das Element layoutiert seine Inhalte unter Verwendung des Flusslayouts (Block-und-Inline-Layout).

        Wenn sein äußerer Displaytyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in seinen übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und bestimmt, wo die Formatierungsschicht liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}} Elemente. Es definiert eine Blockebenen-Box.
    - `flex`
      - : Das Element verhält sich wie ein Blockebenen-Element und layoutiert seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout).
    - `grid`
      - : Das Element verhält sich wie ein Blockebenen-Element und layoutiert seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Element und layoutiert seinen Inhalt gemäß dem Ruby-Formatierungsmodell. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}} Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Anzeigeeigenschaft antreffen, die nur einen **inneren** Wert hat (z.B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element generiert eine Block-Box für den Inhalt und eine separate Listenitems-Inline-Box.

Ein einzelner Wert von `list-item` verursacht, dass das Element sich wie ein Listenpunkt verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, auf `flow` zurückgesetzt.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe innere Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachfahren füllen können.
    Dieser Abschnitt definiert diese "internen" Anzeigewerte, die nur innerhalb dieses speziellen Layoutmodus Bedeutung haben.
    - `table-row-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tbody")}} HTML-Elemente.
    - `table-header-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("thead")}} HTML-Elemente.
    - `table-footer-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tfoot")}} HTML-Elemente.
    - `table-row`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tr")}} HTML-Elemente.
    - `table-cell`
      - : Diese Elemente verhalten sich wie {{HTMLElement("td")}} HTML-Elemente.
    - `table-column-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("colgroup")}} HTML-Elemente.
    - `table-column`
      - : Diese Elemente verhalten sich wie {{HTMLElement("col")}} HTML-Elemente.
    - `table-caption`
      - : Diese Elemente verhalten sich wie {{HTMLElement("caption")}} HTML-Elemente.
    - `ruby-base`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rb")}} HTML-Elemente.
    - `ruby-text`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rt")}} HTML-Elemente.
    - `ruby-base-container`
      - : Diese Elemente werden als anonyme Boxen generiert.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rtc")}} HTML-Elemente.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}

  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen generiert.

    - `contents`

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudobox und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie der `contents`-Wert sich auf "ungewöhnliche Elemente" auswirken sollte – Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie z.B. ersetzte Elemente. Weitere Details finden Sie in [Anhang B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keine Auswirkungen auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existieren würde). Alle Nachfahrelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne jedoch tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Ein-Schlüsselwort, vorgefertigte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für block- und inline-Ebenenvarianten desselben Layoutmodus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit dem umgebenden Inhalt so geflossen wird, als ob sie eine einzelne Inline-Box wäre (sich wie ein ersetztes Element verhalten würde).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`

      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}}-Element, jedoch als Inline-Box, anstatt einer Blockebenen-Box. Innerhalb der Table-Box befindet sich ein Block-Ebenen-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Element und layoutiert seinen Inhalt gemäß dem Flexbox-Modell.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Element und layoutiert seinen Inhalt gemäß dem Grid-Modell.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um explizit **äußere** und **innere** Displaywerte zu definieren.
Die Einzel-Schlüsselwort-Werte (vorgefertigte `<display-legacy>` Werte) werden für die Abwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem veralteten Einzelwert spezifiziert werden:

```css
.container {
  display: inline-flex;
}
```

Für mehr Informationen über diese Änderungen siehe den [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)-Leitfaden.

## Beschreibung

Die einzelnen Seiten für die verschiedenen Werttypen, die auf `display` gesetzt werden können, enthalten mehrere Beispiele dieser Werte in Aktion — siehe den [Syntax](#syntax) Abschnitt. Außerdem finden Sie das folgende Material, das die verschiedenen Werte von Display ausführlich behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block and inline layout in normal flow](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flow layout and overflow](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flow layout and writing modes](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Introduction to formatting contexts](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [In flow and out of flow](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Basic concepts of flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Controlling ratios of flex items along the main axis](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Mastering wrapping of flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Relationship of flexbox to other layout methods](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typical use cases of flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Basic concepts of grid layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Relationship to other layout methods](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Line-based placement](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid template areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout using named grid lines](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Auto-placement in grid layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Aligning items in CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logical values and writing modes](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS grid layout and accessibility](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Realizing common layouts using grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animationen von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zwischen zwei Werten bei 50% umschaltet.

Es gibt eine Ausnahme, wenn zu oder von `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der animierte Inhalt für die gesamte Dauer der Animation angezeigt wird. Zum Beispiel:

- Bei der Animation von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er während der gesamten Animation sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er während der gesamten Animation sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausblendeffekte zu erstellen, bei denen Sie z.B. ein Container-Element mit `display: none` aus dem DOM entfernen möchten, aber es mit [opacity](/de/docs/Web/CSS/opacity) ausblenden, anstatt es sofort verschwinden zu lassen.

Wenn `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird, müssen Sie den Startwert `display` in einem expliziten Keyframe angeben (z.B. unter Verwendung von `0%` oder `from`). Siehe [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) stellt Startwerte für Eigenschaften bereit, von denen Sie beim ersten Anzeigen des animierten Elements ausgehend eine Übergangswirkung erzielen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stil-Update eines Elements oder wenn der `display`-Typ von `none` zu einem anderen Typ geändert wird, aktiviert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss auf der {{cssxref("transition-property")}}-Deklaration (oder im {{cssxref("transition")}}-Kurzschreibweise) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zum Übergang der `display`-Eigenschaft siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Accessibility-Tree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachfahrelemente nicht mehr durch Bildschirmlesetechnologien angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, aber trotzdem für unterstützende Technologien wie Bildschirmleser verfügbar zu machen.

Während `display: none` Inhalte aus dem Accessibility-Tree ausblendet, werden Elemente, die ausgeblendet sind, aber von sichtbaren Elementen mit den Attributen `aria-describedby` oder `aria-labelledby` referenziert werden, dennoch von unterstützenden Technologien erkannt.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Accessibility-Tree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` (aber Nachfahren bleiben bestehen). Dies führt dazu, dass das Element selbst nicht mehr von Bildschirmlesetechnologien angekündigt wird. Dies ist ein fehlerhaftes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird durch das Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` deren Darstellung im [Accessibility-Tree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) verändert. Dies führt dazu, dass die Tabelle nicht mehr richtig durch Bildschirmlesetechnologien angekündigt wird.

- [Kurze Notiz, was CSS-Anzeigewerte mit der Tabellensemantik machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckter Inhalt für bessere A11Y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis WCAG, Leitfaden 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%E2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der display-Werte

In diesem Beispiel haben wir zwei Blockcontainer-Elemente, jeweils mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen können, wie sich die verschiedenen Werte auf das Layout des Elements und das seiner Kinder auswirken.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern hinzugefügt, damit es einfacher ist, den Effekt der Display-Werte zu sehen.

#### HTML

```html
<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</article>

<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</article>

<div>
  <label for="display">Choose a display value:</label>
  <select id="display">
    <option selected>block</option>
    <option>block flow</option>
    <option>inline</option>
    <option>inline flow</option>
    <option>flow</option>
    <option>flow-root</option>
    <option>block flow-root</option>
    <option>table</option>
    <option>block table</option>
    <option>flex</option>
    <option>block flex</option>
    <option>grid</option>
    <option>block grid</option>
    <option>list-item</option>
    <option>block flow list-item</option>
    <option>inline flow list-item</option>
    <option>block flow-root list-item</option>
    <option>inline flow-root list-item</option>
    <option>contents</option>
    <option>none</option>
    <option>inline-block</option>
    <option>inline flow-root</option>
    <option>inline-table</option>
    <option>inline table</option>
    <option>inline-flex</option>
    <option>inline flex</option>
    <option>inline-grid</option>
    <option>inline grid</option>
  </select>
</div>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
  padding-top: 10px;
}

article {
  background-color: red;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article,
div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll(".container");
const select = document.querySelector("select");

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener("change", updateDisplay);

updateDisplay();
```

#### Ergebnis

{{EmbedLiveSample('display_value_comparison','100%', 440)}}

Beachten Sie, dass einige Mehrfach-Schlüsselwortwerte zur Illustration hinzugefügt wurden, die folgende Entsprechungen haben:

- `block` = `block flow`
- `inline` = `inline flow`
- `flow` = `block flow`
- `flow-root` = `block flow-root`
- `table` = `block table`
- `flex` = `block flex`
- `grid` = `block grid`
- `list-item` = `block flow list-item`
- `inline-block` = `inline flow-root`
- `inline-table` = `inline table`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`

Sie können weitere Beispiele auf den Seiten für jeden separaten Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte) finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- SVG {{SVGAttr("display")}} Attribut
- [Block and inline layout in normal flow](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Introduction to formatting contexts](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
