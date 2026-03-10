---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die **`display`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie zum Beispiel [Flow-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal setzt die **`display`**-Eigenschaft die inneren und äußeren _Displaytypen_ eines Elements. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind in ihren eigenen individuellen Spezifikationen vollständig definiert; zum Beispiel wird das Detail, was passiert, wenn `display: flex` deklariert wird, in der CSS Flexible Box Model-Spezifikation definiert.

{{InteractiveExample("CSS Demo: display")}}

```css interactive-example-choice
display: block;
```

```css interactive-example-choice
display: inline flow-root;
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
/* short display */
display: none;
display: contents;
display: block;
display: flow-root;
display: inline;
display: inline-block;
display: list-item;
display: inline list-item;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: table;
display: inline-table;

/* full display */
display: block flow;
display: block flow-root;
display: inline flow;
display: inline flow-root;
display: block flow list-item;
display: inline flow list-item;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block table;
display: inline table;

/* global values */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

Die CSS-`display`-Eigenschaft wird unter Verwendung von Schlüsselwortwerten festgelegt.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den äußeren Displaytyp des Elements, was im Wesentlichen seine Rolle im Flow-Layout darstellt:
    - `block`
      - : Das Element erzeugt eine Block-Box und erzeugt sowohl vor als auch nach dem Element Zeilenumbrüche, wenn es im normalen Fluss steht.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss steht das nächste Element in derselben Zeile, wenn dort Platz ist.

> [!NOTE]
> Wenn eine Display-Eigenschaft nur mit einem **äußeren** Wert spezifiziert wird (z.B. `display: block` oder `display: inline`), ist der innere Wert standardmäßig `flow` (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Sie können die Ein-Wert-Syntax als Fallback für die Mehrfach-Schlüsselwort-Syntax verwenden, zum Beispiel könnte `display: inline flex` den folgenden Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den inneren Displaytyp des Elements, der definiert, in welcher Art von Formatierungskontext der Inhalt angeordnet wird (vorausgesetzt, es ist ein nicht-ersetzbares Element). Wenn eines dieser Schlüsselwörter alleine als Einzelwert verwendet wird, ist der äußere Displaytyp des Elements standardmäßig `block` (mit Ausnahme von `ruby`, der standardmäßig `inline` ist).
    - `flow`
      - : Das Element ordnet seine Inhalte unter Verwendung des Flow-Layouts (Block-und-Inline-Layout) an.

        Wenn der äußere Displaytyp `inline` ist und es in einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und ob es selbst in einem Block- oder Inline-Formatierungskontext teilnimmt, wird entweder ein neuer [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seine Inhalte erstellt oder seine Inhalte in den Formatierungskontext des Elternteils integriert.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt, der festlegt, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt entsprechend dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt entsprechend dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt entsprechend dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn eine Display-Eigenschaft nur mit einem **inneren** Wert spezifiziert wird (z.B. `display: flex` oder `display: grid`), ist der äußere Wert standardmäßig `block` (z.B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Listen-Item-Inline-Box.

Ein einzelner Wert von `list-item` wird dazu führen, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> Wenn kein innerer Wert angegeben ist, wird er standardmäßig auf `flow` gesetzt.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen erfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeigewerte, die nur innerhalb dieses bestimmten Layoutmodus eine Bedeutung haben.
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
  - : Diese Werte definieren, ob ein Element überhaupt Display-Boxen generiert.
    - `contents`
      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudoschachtel und ihre Kinderschachteln ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte - Elemente, die nicht rein über CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Weitere Einzelheiten finden Sie unter [Anhang B: Effekte von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Schaltet die Anzeige eines Elements ab, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existierte). Alle Nachkommenelemente haben ebenfalls ihre Anzeige deaktiviert.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise benötigen würde, allerdings ohne etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Ein-Schlüsselwort, vorkomponierte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layoutmodus erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Block-Box, die zusammen mit umgebendem Inhalt als eine einzelne Inline-Box geflossen wird (ähnlich wie ein ersetztes Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Abbildung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box anstatt als Block-Level-Box. Innerhalb der Tabellen-Box befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt entsprechend dem Flexbox-Modell an.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt entsprechend dem Grid-Modell an.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um explizit **äußere** und **innere** Darstellungen zu definieren.
Die Einzel-Schlüsselwort-Werte (vorkomponierte `<display-legacy>`-Werte) werden aus Gründen der Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt angeben:

```css
.container {
  display: inline flex;
}
```

Dies kann auch unter Verwendung des alten Einzelwertes angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Leitfaden zur Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

## Beschreibung

Die individuellen Seiten für die verschiedenen Typen von Werten, die mit `display` gesetzt werden können, enthalten mehrere Beispiele für diese Werte in Aktion — siehe den Abschnitt [Syntax](#syntax). Außerdem sehen Sie das folgende Material, das die verschiedenen Werte von display ausführlich behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS Flow Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Flow-Layout und Overflow](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Meistern des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Raster-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Rasterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Verwirklichung gängiger Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Animation von Display

Unterstützende Browser animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Das bedeutet im Allgemeinen, dass die Eigenschaft zu 50% während der Animation zwischen zwei Werten wechselt.

Eine Ausnahme bildet die Animation zu oder von `display: none`. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. Beispielsweise:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ausgangsanimationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit {{cssxref("opacity")}} ausblenden, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) müssen Sie den Start-`display`-Wert in einem expliziten Keyframe angeben (z.B. mithilfe von `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) sind zwei zusätzliche Funktionen erforderlich:

- {{cssxref("@starting-style")}} bietet Startwerte für Eigenschaften, von denen aus Sie übergehen möchten, wenn das animierte Element erstmals angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder dem {{cssxref("transition")}}-Shorthand) festgelegt werden, um `display`-Übergänge zu ermöglichen.

Beispiele für das Übergang der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies bewirkt, dass das Element und alle seine Nachkommenelemente nicht mehr von Screenreading-Technologien angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es aber weiterhin assistiven Technologien wie Screenreadern zur Verfügung zu stellen.

Während `display: none` Inhalt aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die ausgeblendet, aber von sichtbaren Elementen über `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, assistiven Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` (aber die Nachkommen bleiben) aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element selbst nicht mehr von Screenreading-Technologien angekündigt wird. Dies ist ein fehlerhaftes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Zugänglicheres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Ist Kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern führt das Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements in `block`, `grid` oder `flex` dazu, dass es im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) anders dargestellt wird. Dies bewirkt, dass die Tabelle nicht mehr richtig von Screenreading-Technologien angekündigt wird.

- [Versteckte Inhalte für bessere a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 1.3-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, von denen jedes drei Inline-Kinder hat. Darunter befindet sich ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und das ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher ist, die Auswirkungen der Display-Werte zu sehen.

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

Bitte beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die folgende Äquivalente haben:

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
- [CSS-Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
- SVG {{SVGAttr("display")}} Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
