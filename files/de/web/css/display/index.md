---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 40099ec4cc9464e5bf6ce88be9eb34da2a77ef4e
---

Die **`display`**-[CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie z. B. [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal setzt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout); der innere Typ bestimmt das Layout der Kinder. Einige `display`-Werte sind in ihren eigenen individuellen Spezifikationen vollständig definiert; zum Beispiel ist das Detail dessen, was passiert, wenn `display: flex` deklariert wird, in der Spezifikation des CSS Flexible Box Models definiert.

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

Die CSS `display`-Eigenschaft wird unter Verwendung von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertekategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter geben den äußeren Display-Typ des Elements an, der im Wesentlichen seine Rolle im Flow-Layout ist:
    - `block`
      - : Das Element erzeugt eine Block-Box, die sowohl vor als auch nach dem Element im normalen Fluss Zeilenumbrüche erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, eine `display`-Eigenschaft vorfinden, die nur einen **outer**-Wert hat (z. B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Einzelwertsyntax verwenden, zum Beispiel könnte `display: inline flex` das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter geben den inneren Display-Typ des Elements an, der den Typ des Formatierungskontextes festlegt, in dem seine Inhalte ausgelegt sind (vorausgesetzt, es handelt sich um ein nicht-ersetztes Element). Wenn eines dieser Schlüsselwörter alleine als Einzelwert verwendet wird, wird der äußere Display-Typ des Elements auf `block` festgelegt (mit der Ausnahme von `ruby`, das auf `inline` voreingestellt ist).
    - `flow`
      - : Das Element legt seine Inhalte mit einem Flow-Layout (Block-und-Inline-Layout) aus.

        Wenn sein äußerer Displaytyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, kann es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte schaffen oder seine Inhalte in seinen übergeordneten Formatierungskontext integrieren.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und definiert, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seine Inhalte gemäß dem [Flexbox-Model](/de/docs/Web/CSS/CSS_flexible_box_layout) aus.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seine Inhalte gemäß dem [Grid-Model](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) aus.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seine Inhalte gemäß dem Ruby-Formatierungsmodell aus. Es verhält sich wie entsprechende HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, eine `display`-Eigenschaft vorfinden, die nur einen **inner**-Wert hat (z. B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z. B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Listen-Element-Inline-Box.

Ein Einzelwert von `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Keyword-Syntax unterstützen, wird der innere Wert, sofern er nicht angegeben ist, auf `flow` zurückgesetzt.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Display-Typ von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur, mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen füllen können.
    Dieser Abschnitt definiert die "internen" Anzeige-Werte, die nur innerhalb dieses bestimmten Layout-Modus Bedeutung haben.
    - `table-row-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tbody")}}-HTML-Elemente.
    - `table-header-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("thead")}}-HTML-Elemente.
    - `table-footer-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tfoot")}}-HTML-Elemente.
    - `table-row`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tr")}}-HTML-Elemente.
    - `table-cell`
      - : Diese Elemente verhalten sich wie {{HTMLElement("td")}}-HTML-Elemente.
    - `table-column-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("colgroup")}}-HTML-Elemente.
    - `table-column`
      - : Diese Elemente verhalten sich wie {{HTMLElement("col")}}-HTML-Elemente.
    - `table-caption`
      - : Diese Elemente verhalten sich wie {{HTMLElement("caption")}}-HTML-Elemente.
    - `ruby-base`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rb")}}-HTML-Elemente.
    - `ruby-text`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rt")}}-HTML-Elemente.
    - `ruby-base-container`
      - : Diese Elemente werden als anonyme Boxen generiert.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rtc")}}-HTML-Elemente.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}
  - : Diese Werte definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.
    - `contents`
      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation beschreibt, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte - Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existieren würde). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine einzelne Keyword-, vorkomponierte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layout-Modus erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Block-Box, die mit dem umliegenden Inhalt fließt, als ob es eine einzelne Inline-Box wäre (ähnlich wie ein ersetztes Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML{{HTMLElement("table")}}-Element, aber als Inline-Box und nicht als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seine Inhalte gemäß dem Flexbox-Model aus.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seine Inhalte gemäß dem Grid-Model aus.

        Es ist äquivalent zu `inline grid`.

### Welches Syntax sollten Sie verwenden?

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Multi-Keyword-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um explizit **äußere** und **innere** Anzeige zu definieren.
Die Einzel-Schlüsselwort-Werte (vorkomponierte `<display-legacy>`-Werte) werden für die Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem Legacy-Einzelwert spezifiziert werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display) Leitfaden.

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die bei `display` festgelegt werden können, enthalten mehrere Beispiele für diese Werte in Aktion — siehe den Abschnitt [Syntax](#syntax). Darüber hinaus sehen Sie das folgende Material, das die verschiedenen Anzeige-Werte ausführlich behandelt.

### Multi-Keyword-Werte

- [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuern der Verhältnisse von Flex-Artikeln entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschen des Umbruchs von Flex-Artikeln](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Ordnen von Flex-Artikeln](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Verhältnis von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verhältnis zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Zeilenbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Auto-Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Verwirklichung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Anzeige animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten 50 % durch die Animation zwischen den beiden umkippt.

Es gibt eine Ausnahme, wenn zu oder von `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer zu `block` wechseln, sodass er während der gesamten Dauer sichtbar bleibt.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none` wechseln, sodass er während der gesamten Dauer sichtbar bleibt.

Dieses Verhalten ist nützlich, um Ein-/Ausstiegsanimationen zu erstellen, bei denen Sie zum Beispiel einen Container mit `display: none` aus dem DOM entfernen möchten, aber es mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden lassen möchten, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den anfänglichen `display`-Wert in einem expliziten Keyframe bereitstellen (zum Beispiel mit `0%` oder `from`). Weitere Informationen finden Sie unter [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Startwerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements überblenden möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stil-Update oder beim Ändern des `display`-Typs von `none` auf einen anderen Typ ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder dem {{cssxref("transition")}}-Shorthand) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Beispiele für die Übergang der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies bewirkt, dass das Element und alle seine Nachkommenelemente nicht mehr von Bildschirmlesetechnologien angekündigt werden.

Wenn Sie das Element visuell verbergen möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell von der Anzeige zu entfernen, aber dennoch für unterstützende Technologien wie Bildschirmleser verfügbar zu machen.

Während `display: none` den Inhalt aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die verborgen sind, aber von sichtbaren Elementen `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, unterstützenden Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) alle Elemente mit einem `display`-Wert von `contents` (aber Nachkommen bleiben). Dies bewirkt, dass das Element selbst nicht mehr von Bildschirmlesetechnologien angekündigt wird. Dies ist laut der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) ein inkorrektes Verhalten.

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird durch Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements in `block`, `grid` oder `flex` die Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) geändert. Dies bewirkt, dass die Tabelle nicht mehr korrekt von Bildschirmlesetechnologien angekündigt wird.

- [Kurze Notiz darüber, was CSS-Anzeigeeigenschaften mit Tabellen-Semantik machen — Die Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckter Inhalt für bessere a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Guideline 1.3 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis der Erfolgs-Kriterium 1.3.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formalde Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### display-Wert Vergleich

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, von denen jedes drei Inline-Kinder hat. Darunter haben wir ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und das ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewandt, damit es einfacher ist, den Effekt der Anzeige-Werte zu sehen.

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

Beachten Sie, dass einige Multi-Keyword-Werte zur Illustration hinzugefügt wurden, die folgende Entsprechungen haben:

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

Weitere Beispiele finden Sie auf den Seiten für jeden separaten Displaytyp unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- SVG {{SVGAttr("display")}} Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
