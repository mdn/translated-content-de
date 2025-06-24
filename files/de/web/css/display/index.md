---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`display`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie zum Beispiel [Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal gesehen legt die **`display`** Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements fest. Der äußerliche Typ bestimmt die Teilnahme eines Elements am [Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout); der innerliche Typ setzt das Layout der Kinder. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; zum Beispiel ist das Verhalten, wenn `display: flex` deklariert wird, in der CSS Flexible Box Model Spezifikation definiert.

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

/* box generation */
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

Die CSS `display` Eigenschaft wird mit Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außenseite

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeigetyp des Elements, was im Wesentlichen seine Rolle im Flusslayout ist:
    - `block`
      - : Das Element erzeugt eine Block-Box und erzeugt sowohl vor als auch nach dem Element Zeilenumbrüche, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in der gleichen Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Multi-Schlüsselwort-Syntax unterstützen, auf eine `display`-Eigenschaft stoßen, die nur einen **äußeren** Wert hat (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Einzelsyntax verwenden, zum Beispiel könnte `display: inline flex` folgendes Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Verwendung der Multi-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display) für weitere Informationen.

### Innenseite

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, der den Typ des Formatierungskontexts definiert, in dem sein Inhalt angeordnet wird (vorausgesetzt, es ist ein nicht-ersetztes Element):

    - `flow`

      - : Das Element ordnet seinen Inhalt unter Verwendung des Flusslayouts (Block-und-Inline-Layout).

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst in einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt oder integriert seinen Inhalt in den Formatierungskontext des Elternteils.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und definiert, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}} Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout).
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}} Elemente.

> [!NOTE]
> Wenn Browser, die die Multi-Schlüsselwort-Syntax unterstützen, auf eine `display`-Eigenschaft stoßen, die nur einen **inneren** Wert hat (z.B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Listen-Element-Inline-Box.

Ein einzelner Wert von `list-item` wird das Element wie ein Listenelement verhalten lassen.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Schlüsselwort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Dieser Abschnitt definiert jene "internen" Anzeigewerte, die nur innerhalb dieses bestimmten Layoutmodus sinnvoll sind.
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

      - : Diese Elemente produzieren selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie der `contents` Wert ungewöhnliche Elemente beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Weitere Details finden Sie in [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existieren würde). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas darzustellen, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

### Vorgefertigt

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Einzel-Schlüsselwort-vorgefertigte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layoutmodus erfordert.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit dem umgebenden Inhalt geflossen wird, als ob es eine einzelne Inline-Box wäre (verhält sich ähnlich wie ein ersetztes Element).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`

      - : Der `inline-table` Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}} Element, aber als Inline-Box, anstatt einer Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Level-Element und layoutet seinen Inhalt gemäß dem Flexbox-Modell.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Level-Element und layoutet seinen Inhalt gemäß dem Grid-Modell.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Multi-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Einzel-Schlüsselwort-Werte (vorgefertigte `<display-legacy>` Werte) werden für die Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem älteren Einzelwert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Für weitere Informationen zu diesen Änderungen siehe den [Leitfaden zur Verwendung der Multi-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die `display` haben kann, enthalten mehrere Beispiele dieser Werte in Aktion — siehe den [Syntax](#syntax) Abschnitt. Darüber hinaus sehen Sie das folgende Material, das die verschiedenen Werte von display im Detail behandelt.

### Multi-Schlüsselwort-Werte

- [Verwendung der Multi-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flusslayout (display: block, display: inline)

- [Block- und Inlinelayout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flusslayout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flusslayout und Schreibrichtungen](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meisterung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Verhältnis von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle für Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatisierte Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Realisierung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animieren von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten 50% der Zeit des Animation übergeht.

Es gibt eine Ausnahme, wenn `display: none` zu oder von einem anderen Wert animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert zu `block` bei `0%` der Animationsdauer wechseln, damit er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert zu `none` bei `100%` der Animationsdauer wechseln, sodass er während der gesamten Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Ausblendeffekte zu erstellen, bei denen Sie ein Container-Element aus dem DOM mit `display: none` entfernen möchten, es jedoch mit [opacity](/de/docs/Web/CSS/opacity) ausgeblendet wird, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den Startwert von `display` in einem expliziten Keyframe (zum Beispiel mit `0%` oder `from`) angeben. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) liefert Ausgangswerte für Eigenschaften, von denen Sie beim Einstieg in das animierte Element ausgehend übergehen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig lösen CSS-Übergänge bei der ersten Stilaktualisierung eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ keine Übergänge aus.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss auf der {{cssxref("transition-property")}} Deklaration (oder der {{cssxref("transition")}} Kurzschrift) eingestellt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zum Überblenden der `display`-Eigenschaft siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommenelemente nicht mehr von Screen-Reader-Technologie angesagt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, aber es immer noch für unterstützende Techniken wie Screen-Reader zugänglich zu machen.

Obwohl `display: none` den Inhalt aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die versteckt, aber von sichtbaren Elementen mit `aria-describedby` oder `aria-labelledby` Attributen referenziert werden, dennoch von unterstützenden Technologien erkannt.

### display: contents

Gegenwärtige Implementierungen in einigen Browsern werden aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` entfernen (die Nachkommen bleiben jedoch). Dies wird dazu führen, dass das Element selbst nicht mehr von Screen-Reader-Technologie angesagt wird. Dies ist nach der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) ein falsches Verhalten.

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern führt die Änderung des `display`-Wertes eines {{HTMLElement("table")}} Elements zu `block`, `grid` oder `flex` die Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zu verändern. Dies wird dazu führen, dass die Tabelle nicht mehr richtig von Screen-Reader-Technologie angesagt wird.

- [Kurze Notiz darüber, was die CSS-Display-Eigenschaften mit Tabellensemantik machen — Die Paciello Gruppe](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckter Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Anzeige-Werte

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das es ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, um zu vergleichen und zu kontrastieren, wie die verschiedenen Werte das Layout des Elements und dessen Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und deren Kinder angewendet, damit es einfacher ist, die Effekt der Anzeigewerte zu sehen.

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

Beachten Sie, dass einige Multi-Schlüsselwort-Werte zur Illustration hinzugefügt wurden, die folgende Entsprechungen haben:

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

Sie finden mehr Beispiele auf den Seiten für jeden einzelnen Display-Typ unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- SVG {{SVGAttr("display")}} Attribut
- [Block- und Inlinelayout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
