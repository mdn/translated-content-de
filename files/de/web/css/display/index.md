---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`display`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/Flow_layout) behandelt wird und welcher Layoutmodus für seine Kinder verwendet wird, wie zum Beispiel [Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal setzt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout); der innere Typ bestimmt das Layout der Kinder. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; zum Beispiel wird im CSS Flexiblen Boxenmodell festgelegt, was geschieht, wenn `display: flex` deklariert wird.

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

Die CSS `display`-Eigenschaft wird unter Verwendung von Schlüsselwortwerten spezifiziert.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter legen den äußeren Display-Typ des Elements fest, der im Wesentlichen seine Rolle im Flusslayout ist:
    - `block`
      - : Das Element erzeugt eine Blockbox und erzeugt sowohl vor als auch nach dem Element Zeilenumbrüche, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss befindet sich das nächste Element in derselben Zeile, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfachschlüsselwortsyntax unterstützen, eine Display-Eigenschaft antreffen, die nur einen **äußeren** Wert hat (z. B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Einwertsyntax verwenden, z. B. `display: inline flex` könnte das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrfachschlüsselwortsyntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter legen den inneren Display-Typ des Elements fest, der die Art des Formatierungskontextes definiert, in dem seine Inhalte angeordnet werden (vorausgesetzt, es ist ein nicht ersetztes Element):
    - `flow`
      - : Das Element legt seine Inhalte mithilfe des Flusslayouts (Block-und-Inline-Layout) an.

        Wenn sein äußerer Display-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Blockbox.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, legt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte fest oder integriert seine Inhalte in den übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Blockbox, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert, der den Ort der Formatierungswurzel definiert.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Blockniveau-Box.
    - `flex`
      - : Das Element verhält sich wie ein Blockniveau-Element und legt seine Inhalte gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Blockniveau-Element und legt seine Inhalte gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Niveau-Element und legt seine Inhalte gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfachschlüsselwortsyntax unterstützen, eine Display-Eigenschaft antreffen, die nur einen **inneren** Wert hat (z. B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z. B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Blockbox für den Inhalt und eine separate Listenelement-Inline-Box.

Ein Einzelwert von `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit einem beliebigen {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfachschlüsselwortsyntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet. Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Display-Typ von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachfahren übernehmen können. Dieser Abschnitt definiert diese "internen" Display-Werte, die nur innerhalb dieses speziellen Layoutmodus eine Bedeutung haben.
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
      - : Diese Elemente werden als anonyme Boxen erzeugt.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("rtc")}}-Elemente.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}
  - : Diese Werte legen fest, ob ein Element überhaupt Anzeige-Boxen erzeugt.
    - `contents`
      - : Diese Elemente erzeugen keine spezifische Box durch sich selbst. Sie werden durch ihre Pseudo-Box und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation beschreibt, wie der `contents`-Wert ungewöhnliche Elemente beeinflussen sollte — Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Effekt auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existieren würde). Alle Nachfahrelemente haben ebenfalls ihre Anzeige ausgeschaltet. Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, aber tatsächlich nichts zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorkomponiert

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Ein-Schlüsselwort-vorkomponierte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Blockniveau- und Inline-Niveau-Varianten desselben Layoutmodus erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Blockbox, die mit umgebendem Inhalt geflossen wird, als wäre sie eine einzige Inline-Box (die sich ähnlich verhält, wie es ein ersetztes Element tun würde).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box anstatt einer Blockniveau-Box. Innerhalb der Tabellen-Box befindet sich ein Blockniveau-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Niveau-Element und legt seine Inhalte gemäß dem Flexbox-Modell an.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Niveau-Element und legt seine Inhalte gemäß dem Grid-Modell an.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfachschlüsselwortsyntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußeres** und **inneres** Display explizit zu definieren. Die Einzel-Schlüsselwort-Werte (vorkomponierte `<display-legacy>`-Werte) werden zur Abwärtskompatibilität unterstützt.

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

Weitere Informationen zu diesen Änderungen finden Sie im [Leitfaden zur Verwendung der Mehrfachschlüsselwortsyntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

## Beschreibung

Die einzelnen Seiten für die verschiedenen Wertetypen, die `display` haben kann, enthalten mehrere Beispiele für diese Werte in Aktion — siehe den Abschnitt [Syntax](#syntax). Außerdem finden Sie das folgende Material, das die verschiedenen Werte von display ausführlich behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Verwendung der Mehrfachschlüsselwortsyntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flusslayout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flusslayout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundlegende Konzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichten von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Umsetzung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Anzeigen animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten umschaltet, 50% der Animation zwischen den beiden.

Es gibt eine Ausnahme, nämlich wenn `display: none` zu oder von einem anderen Wert animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausblendeffekte zu erstellen, bei denen Sie zum Beispiel einen Container mit `display: none` aus dem DOM entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den Anfangswert von `display` in einem expliziten Keyframe bereitstellen (zum Beispiel mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Anfangswerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements ausgehend animieren wollen. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stiländerung eines Elements ausgelöst oder wenn der `display`-Typ von `none` in einen anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder im {{cssxref("transition")}}-Shorthand) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zur Übertragung der `display`-Eigenschaft sehen Sie sich die Seiten zu [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples) an.

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachfahrenelemente von Screenreader-Technologien nicht mehr angesagt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative die Verwendung [einer Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/), um es visuell vom Bildschirm zu entfernen, aber dennoch für Hilfstechnologien wie Screenreader zugänglich zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die verborgen sind, aber von sichtbaren Elementen mittels `aria-describedby` oder `aria-labelledby`-Attributen referenziert werden, assistiven Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` (aber die Nachfahren bleiben bestehen). Dies führt dazu, dass das Element selbst nicht mehr von Screenreader-Technologien angesagt wird. Dies ist laut der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) falsches Verhalten.

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern führt die Änderung des `display`-Wertes eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` dazu, dass sich sein Verhalten im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) ändert. Dies wird dazu führen, dass die Tabelle von Screenreader-Technologien nicht mehr richtig angesagt wird.

- [Kurze Anmerkung zu den Auswirkungen von CSS-Display-Eigenschaften auf Tabellensemantik — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckter Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Leitfaden 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der display-Werte

In diesem Beispiel haben wir zwei Blockcontainer-Elemente, jedes mit drei Inline-Kindern. Darunter befindet sich ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die unterschiedlichen Werte das Layout der Elemente und deren Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher ist, den Effekt der Anzeigeeigenschaften zu sehen.

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

Beachten Sie, dass einige Mehrfachschlüsselwortwerte zur Veranschaulichung hinzugefügt wurden, die die folgenden Entsprechungen haben:

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

Weitere Beispiele finden Sie auf den Seiten für jeden separaten Display-Typ unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- SVG {{SVGAttr("display")}}-Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
