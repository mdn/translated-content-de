---
title: "`display` CSS property"
short-title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`display`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, z. B. [Flow-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Anzeigearten_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ bestimmt das Layout der Kinder. Einige Werte von `display` sind vollständig in ihren eigenen individuellen Spezifikationen definiert; zum Beispiel wird das, was passiert, wenn `display: flex` deklariert wird, in der Spezifikation des CSS Flexible Box Models definiert.

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

Die CSS `display`-Eigenschaft wird mithilfe von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter geben den äußeren Anzeigetyp des Elements an, im Wesentlichen seine Rolle im Flow-Layout:
    - `block`
      - : Das Element erzeugt eine Block-Box, die sowohl vor als auch nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element auf derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn eine Display-Eigenschaft mit nur einem **äußeren** Wert spezifiziert wird (z. B. `display: block` oder `display: inline`), wird der innere Wert standardmäßig auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Sie können die Single-Value-Syntax als Fallback für multi-keyword Syntax verwenden, zum Beispiel könnte `display: inline flex` den folgenden Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax) für weitere Informationen.

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter geben den inneren Anzeigetyp des Elements an, der den Formatierungskontext definiert, in dem seine Inhalte layoutet werden (angenommen, es handelt sich um ein nicht ersetztes Element). Wenn eines dieser Schlüsselwörter alleine als einzelner Wert verwendet wird, ist der äußere Anzeigetyp des Elements standardmäßig `block` (mit Ausnahme von `ruby`, das standardmäßig `inline` ist).
    - `flow`
      - : Das Element layoutet seine Inhalte mithilfe des Flow-Layouts (Block-und-Inline-Layout).

        Wenn der äußere Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, generiert es eine Inline-Box. Andernfalls generiert es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert, der festlegt, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Element auf Block-Level und layoutet seine Inhalte gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout).
    - `grid`
      - : Das Element verhält sich wie ein Element auf Block-Level und layoutet seine Inhalte gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts).
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und layoutet seine Inhalte gemäß dem Ruby-Formatierungsmodell. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn eine Display-Eigenschaft mit nur einem **inneren** Wert spezifiziert wird (z. B. `display: flex` oder `display: grid`), ist der äußere Wert standardmäßig `block` (z. B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert von `list-item` bewirkt, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> Wenn kein innerer Wert angegeben ist, wird er standardmäßig auf `flow` gesetzt.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachkommen einnehmen können.
    Dieser Abschnitt definiert die sogenannten "internen" Anzeige-Werte, die nur innerhalb dieses besonderen Layoutmodus Sinn ergeben.
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
  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen generiert.
    - `contents`
      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudobox und ihre Kindboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation beschreibt, wie sich der `contents`-Wert auf "ungewöhnliche Elemente" auswirken soll — Elemente, die nicht rein durch CSS-Boxen-Konzepte wie ersetzte Elemente gerendert werden. Siehe [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keine Auswirkung auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existierte). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas darzustellen, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorgefertigt

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : In CSS 2 wurde eine einheitliche Schlüsselwortsyntax für die `display`-Eigenschaft verwendet, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten des gleichen Layoutmodells erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Block-Box, die zusammen mit dem umgebenden Inhalt wie eine einzige Inline-Box behandelt wird (verhält sich ähnlich wie ein ersetztes Element würde).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box und nicht als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level-Element und layoutet seine Inhalte gemäß dem Flexbox-Modell.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level-Element und layoutet seine Inhalte gemäß dem Grid-Modell.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine multi-keyword Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Einzelwert-Schlüsselwörter (vorgefertigte `<display-legacy>`-Werte) werden für die Rückwärtskompatibilität unterstützt.

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

Für weitere Informationen zu diesen Änderungen siehe den [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax) Leitfaden.

## Beschreibung

Die einzelnen Seiten für die unterschiedlichen Werttypen, die die `display`-Eigenschaft haben kann, zeigen mehrere Beispiele dieser Werte in Aktion – siehe den [Syntax](#syntax) Abschnitt. Zusätzlich sehen Sie das folgende Material, das die verschiedenen Werte von Display ausführlich behandelt.

### Multi-Schlüsselwort-Werte

- [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS Flow Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Flow-Layout und Overflow](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Meistern der Umbrüche von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Sortieren von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Auto-Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Realisieren von häufigen Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Animieren der Anzeige

Unterstützende Browser [animieren `display`](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) mit einem diskreten Animationstyp. Dies bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zwischen zwei Werten um 50 % durch die Animation wechseln wird.

Es gibt eine Ausnahme, wenn zu oder von `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, sodass der animierte Inhalt über die gesamte Animationsdauer angezeigt wird. Beispielsweise:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0 %` der Animationsdauer zu `block`, sodass er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100 %` der Animationsdauer zu `none`, sodass er während der gesamten Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Eintritts-/Austrittsanimationen zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber mit {{cssxref("opacity")}} ausblenden, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), müssen Sie den startenden `display`-Wert in einem expliziten Keyframe bereitstellen (z. B. mit `0 %` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions), sind zwei zusätzliche Features erforderlich:

- {{cssxref("@starting-style")}} bietet Startwerte für Eigenschaften, von denen Sie während des ersten Stylings des animierten Elements wechseln möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht ausgelöst, wenn ein Element das erste Mal seinen Stil ändert oder wenn der `display`-Typ von `none` in einen anderen Typ wechselt.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Verkürzung) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zum Übergang der `display`-Eigenschaft siehe die Seiten zu [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies hat zur Folge, dass das Element und alle seine Nachkommenelemente nicht mehr von Technologien zur Vorlesung von Bildschirmen angekündigt werden.

Wenn Sie das Element visuell verstecken möchten, ist eine zugänglichere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es jedoch weiterhin zugänglich für unterstützende Technologie wie Bildschirmvorleser zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheitsbaum entfernt, werden Elemente, die verborgen sind, aber von sichtbaren Elementen über `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, zu unterstützenden Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) (aber Nachkommen bleiben bestehen). Dies führt dazu, dass das Element selbst nicht mehr von Technologien zur Vorlesung von Bildschirmen angekündigt wird. Dies ist ein inkorrektes Verhalten laut der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird durch das Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` dessen Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) geändert. Dies hat zur Folge, dass die Tabelle nicht mehr richtig von Technologien zur Vorlesung von Bildschirmen angekündigt wird.

- [Verborgene Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethnings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verstehen des Erfolgskriteriums 1.3.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei block-level Container-Elemente, jedes mit drei Inline-Kindern. Darunter befindet sich ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, um zu vergleichen und zu kontrastieren, wie sich die verschiedenen Werte auf das Layout des Elements und der Kinder auswirken.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher ist, den Einfluss der Display-Werte zu sehen.

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

Beachten Sie, dass einige Multi-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die folgende Äquivalente haben:

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

Weitere Beispiele finden Sie auf den Seiten für jeden separaten Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte).

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
