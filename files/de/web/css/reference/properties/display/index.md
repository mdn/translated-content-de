---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`display`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/Flow_layout) behandelt wird und das Layout, das für seine Kinder verwendet wird, wie z.B. [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Anzeigetypen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout); der innere Typ bestimmt das Layout der Kinder. Einige Werte von `display` sind in ihren eigenen individuellen Spezifikationen vollständig definiert; beispielsweise ist im CSS Flexible Box Model spezifiziert, was passiert, wenn `display: flex` deklariert wird.

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
  background: #88888888;
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

Die CSS `display`-Eigenschaft wird durch Schlüsselwortwerte spezifiziert.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Kategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeigetyp des Elements, der im Wesentlichen seine Rolle im Flow-Layout darstellt:
    - `block`
      - : Das Element erzeugt eine Blockbox und erzeugt Zeilenumbrüche sowohl vor als auch nach dem Element, wenn es sich im normalen Fluss befindet.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die keine Zeilenumbrüche vor oder nach sich selbst erzeugen. Im normalen Fluss wird das nächste Element auf derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Display-Eigenschaft nur mit einem **äußeren** Wert (z.B. `display: block` oder `display: inline`) antreffen, wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden, beispielsweise könnte `display: inline flex` das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwenden der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, der den Typ des Formatierungskontextes definiert, in dem seine Inhalte angeordnet sind (vorausgesetzt, es handelt sich um ein nicht ersetztes Element). Wenn eines dieser Schlüsselwörter alleine als einzelner Wert verwendet wird, wird der äußere Anzeigetyp des Elements auf `block` gesetzt (mit Ausnahme von `ruby`, das auf `inline` gesetzt wird).
    - `flow`
      - : Das Element ordnet seine Inhalte mithilfe des Flow-Layouts (Block-und-Inline-Layout) an.

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, wird entweder ein neuer [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte erstellt oder seine Inhalte werden in den übergeordneten Formatierungskontext integriert.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt, der den Ort definiert, an dem die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich ähnlich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Display-Eigenschaft mit nur einem **inneren** Wert (z.B. `display: flex` oder `display: grid`) antreffen, wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert von `list-item` bewirkt, dass sich das Element wie ein Listenelement verhält.
Dies kann gemeinsam mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und den Schlüsselwörtern `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen erfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeigewerte, die nur innerhalb dieses bestimmten Layoutmodus Bedeutung haben.
    - `table-row-group`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("tbody")}}-Elemente.
    - `table-header-group`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("thead")}}-Elemente.
    - `table-footer-group`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("tfoot")}}-Elemente.
    - `table-row`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("tr")}}-Elemente.
    - `table-cell`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("td")}}-Elemente.
    - `table-column-group`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("colgroup")}}-Elemente.
    - `table-column`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("col")}}-Elemente.
    - `table-caption`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("caption")}}-Elemente.
    - `ruby-base`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("rb")}}-Elemente.
    - `ruby-text`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("rt")}}-Elemente.
    - `ruby-base-container`
      - : Diese Elemente werden als anonyme Boxen generiert.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("rtc")}}-Elemente.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}
  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen erzeugt.
    - `contents`
      - : Diese Elemente erzeugen keine eigene spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation beschreibt, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte – Elemente, die nicht rein durch CSS-Box-Konzepte wie ersetzte Elemente dargestellt werden. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für mehr Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, so dass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existieren würde). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element dazu zu bringen, den Platz einzunehmen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas darzustellen, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorab zusammengestellt

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine ein-Schlüsselwort, vorab zusammengestellte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block- und Inline-Level-Varianten desselben Layoutmodus erfordert.
    - `inline-block`
      - : Das Element erzeugt eine Block-Box, die mit dem umgebenden Inhalt geflossen wird, als ob es eine einzelne Inline-Box wäre (sich ähnlich wie ein ersetztes Element verhält).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box, anstatt einer Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt gemäß dem Flexbox-Modell an.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt gemäß dem Grid-Modell an.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für die Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Ein-Schlüsselwort-Werte (vorgefertigte `<display-legacy>`-Werte) werden zur Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem alten Einzelwert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Leitfaden zur Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

## Beschreibung

Die einzelnen Seiten zu den verschiedenen Typen von Werten, die `display` annehmen kann, enthalten mehrere Beispiele dieser Werte in Aktion — siehe den [Syntax](#syntax)-Abschnitt. Zusätzlich finden Sie folgende Materialien, die die verschiedenen Werte von display eingehend behandeln.

### Mehrfach-Schlüsselwort-Werte

- [Verwenden der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Verhältnis der Flex-Elemente entlang der Hauptachse steuern](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meistern des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Elemente im CSS-Grid-Layout ausrichten](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Häufig verwendete Layouts mit Grids umsetzen](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Anzeige animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Das bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten bei 50% der Animation umschaltet.

Es gibt eine Ausnahme, wenn von oder zu `display: none` animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert), schaltet der Wert bei `0%` der Animationsdauer auf `block`, damit er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, schaltet der Wert bei `100%` der Animationsdauer auf `none`, sodass er die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausblende-Animationen zu erstellen, bei denen Sie beispielsweise ein Container-Element mit `display: none` aus dem DOM entfernen möchten, aber es mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausblenden, anstatt es sofort zu entfernen.

Wenn Sie `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animieren, müssen Sie den Startwert der `display`-Eigenschaft in einem expliziten Keyframe bereitstellen (zum Beispiel mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Wenn Sie `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animieren, sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Anfangswerte für Eigenschaften, von denen aus Sie beim ersten Zeigen des animierten Elements den Übergang starten möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stil-Update eines Elements oder wenn sich der `display`-Typ von `none` in einen anderen Typ ändert, ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Kurzform) gesetzt werden, um `display`-Übergänge zu aktivieren.

Für Beispiele zur Übergangsanimation der `display`-Eigenschaft siehe die Seiten zu [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommen von Bildschirmlesetechnologien nicht mehr angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist es eine barrierefreudigere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, aber trotzdem Hilfstechnologien wie Bildschirmleser verfügbar zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheit-Baum ausblendet, werden Elemente, die zwar ausgeblendet, aber von sichtbaren Elementen über ihre `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, Hilfstechnologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` (aber Nachkommen bleiben erhalten). Dies führt dazu, dass das Element selbst von Bildschirmlesetechnologien nicht mehr angekündigt wird. Dies ist ein inkompatibles Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Mehr Zugang zu Inhalten mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Ist Kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern ändert das Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements in `block`, `grid` oder `flex` dessen Darstellung im [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle von Bildschirmlesetechnologien nicht mehr korrekt angekündigt wird.

- [Kurze Notiz, was CSS-Display-Eigenschaften mit Tabellen-Semantik machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckte Inhalte für bessere Zugänglichkeit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verstehen von WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verstehen des Erfolgskriteriums 1.3.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der display-Werte

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das es Ihnen erlaubt, unterschiedliche `display`-Werte auf die Container anzuwenden, damit Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher ist, den Effekt der Anzeige-Werte zu sehen.

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
  font-family: "Helvetica", "Arial", sans-serif;
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

Beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die die folgenden Äquivalente haben:

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

Weitere Beispiele finden Sie auf den Seiten für jeden einzelnen Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- SVG-{{SVGAttr("display")}}-Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
