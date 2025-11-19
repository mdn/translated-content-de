---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`display`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie z.B. [Flow Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; zum Beispiel sind die Details, was passiert, wenn `display: flex` erklärt wird, in der CSS Flexible Box Model-Spezifikation definiert.

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

Die CSS-Eigenschaft `display` wird unter Verwendung von Schlüsselwortwerten spezifiziert.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter geben den äußeren Display-Typ des Elements an, der im Wesentlichen seine Rolle im Flow Layout festlegt:
    - `block`
      - : Das Element generiert eine Block-Box, die Zeilenumbrüche sowohl vor als auch nach dem Element im normalen Fluss generiert.
    - `inline`
      - : Das Element generiert eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche generieren. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Syntax mit mehreren Schlüsselwörtern unterstützen, eine Display-Eigenschaft mit nur einem **äußeren** Wert (z.B. `display: block` oder `display: inline`) antreffen, wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Einzelschlüsselwort-Syntax verwenden. Zum Beispiel könnte `display: inline flex` das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Multi-Keywort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter geben den inneren Display-Typ des Elements an, der den Typ des Formatierungskontextes definiert, in dem seine Inhalte ausgelegt werden (vorausgesetzt, es handelt sich um ein nicht-ersetztes Element). Wenn eines dieser Schlüsselwörter allein als Einzelwert verwendet wird, wird der äußere Display-Typ des Elements auf `block` gesetzt (mit Ausnahme von `ruby`, das auf `inline` gesetzt wird).
    - `flow`
      - : Das Element legt seine Inhalte im Flow Layout (Block-und-Inline-Layout) aus.

        Wenn sein äußerer Display-Typ `inline` ist und es in einem Block- oder Inline-Formatierungskontext teilnimmt, dann generiert es eine Inline-Box. Andernfalls generiert es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst in einem Block- oder Inline-Formatierungskontext teilnimmt, erstellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den Formatierungskontext seines Elternteils.

    - `flow-root`
      - : Das Element generiert eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt und bestimmt, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level Element und legt seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) aus.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level Element und legt seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) aus.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level Element und legt seinen Inhalt gemäß dem Ruby-Formatierungsmodell aus. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Syntax mit mehreren Schlüsselwörtern unterstützen, eine Display-Eigenschaft mit nur einem **inneren** Wert (z.B. `display: flex` oder `display: grid`) antreffen, wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element generiert eine Block-Box für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert von `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit einem beliebigen {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow`- oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Keywort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, er standardmäßig auf `flow` gesetzt.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Display-Typ von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeige-Werte, die nur innerhalb dieses bestimmten Layout-Modus Bedeutung haben.
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
  - : Diese Werte definieren, ob ein Element überhaupt Anzeige-Boxen generiert.
    - `contents`
      - : Diese Elemente produzieren selbst keine spezifische Box. Sie werden durch ihre Pseudobox und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation festlegt, wie sich der Wert `contents` auf "ungewöhnliche Elemente" auswirken sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existieren würde). Alle Nachkommenelemente haben ebenfalls ihre Anzeige deaktiviert.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Einzelschlüsselwort-, vorkomponierte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level und Inline-Level Varianten des gleichen Layout-Modells erforderte.
    - `inline-block`
      - : Das Element generiert eine Block-Box, die mit dem umgebenden Inhalt als ob es eine einzelne Inline-Box wäre, geflossen wird (ähnlich wie ein ersetztes Element).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}}-Element, aber als Inline-Box, nicht als Block-Level-Box. Innerhalb der Tabell-Box befindet sich ein Block-Level-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level Element und legt seinen Inhalt gemäß dem Flexbox-Modell aus.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level Element und legt seinen Inhalt gemäß dem Grid-Modell aus.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine Multi-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeigen explizit zu definieren.
Die Einzel-Schlüsselwort-Werte (vorkomponierte `<display-legacy>` Werte) werden aus Gründen der Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch unter Verwendung des voreingestellten Einzelwerts angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Leitfaden zur Verwendung der Multi-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die `display` haben kann, bieten mehrere Beispiele für diese Werte in Aktion — siehe die [Syntax](#syntax)-Sektion. Darüber hinaus finden Sie das folgende Material, das die verschiedenen Werte von Display eingehend behandelt.

### Multi-keyword values

- [Verwendung der Multi-Keywort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS Flow Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Flow Layout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Flow Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschung der Umbrüche von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Zeilenbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichten von Elementen im CSS-Gitter-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Zugänglichkeit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Realisierung allgemeiner Layouts mit Gitter](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Display animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Das bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten 50% während des Animationsvorgangs wechselt.

Es gibt eine Ausnahme beim Animieren zu oder von `display: none`. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. Ein Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Ausstiegsanimationen zu erstellen, bei denen Sie beispielsweise ein Container-Element mit `display: none` aus dem DOM entfernen, aber mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausblenden möchten, anstatt es sofort verschwinden zu lassen.

Wenn `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird, müssen Sie den Startwert von `display` in einem expliziten Keyframe angeben (zum Beispiel unter Verwendung von `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Wenn `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animiert wird, sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) liefert Startwerte für Eigenschaften, von denen Sie ausgehen möchten, wenn das animierte Element erstmals angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements oder wenn sich der `display`-Typ von `none` auf einen anderen Typ ändert, ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder in der {{cssxref("transition")}}-Kurzform) eingestellt werden, um `display`-Übergänge zu ermöglichen.

Beispiele für die Übergänge der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommenelemente nicht mehr von Bildschirmauslesetechnologien angesagt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es jedoch für unterstützende Technologien wie Bildschirmleser zugänglich zu machen.

Obwohl `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die verborgen sind, aber von den Attributen `aria-describedby` oder `aria-labelledby` sichtbarer Elemente referenziert werden, unterstützenden Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` (aber die Nachkommen bleiben). Dies führt dazu, dass das Element selbst nicht mehr von der Bildschirmauslesetechnologie angesagt wird. Dies ist ein inkorrektes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert das Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle nicht mehr korrekt von der Bildschirmauslesetechnologie angesagt wird.

- [Kurze Notiz darüber, was CSS-Display-Eigenschaften mit Tabellensemantiken machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Verborgene Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis der Erfolgsidee 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Display-Werten

In diesem Beispiel haben wir zwei Block-Level Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Select-Menü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und gegenüberstellen können, wie die verschiedenen Werte das Layout des Elements und ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher zu erkennen ist, welchen Effekt die Display-Werte haben.

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

Beachten Sie, dass einige Multi-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die die folgenden Entsprechungen haben:

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
- SVG {{SVGAttr("display")}} Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
