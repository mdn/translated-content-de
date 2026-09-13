---
title: "`display` CSS property"
short-title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: b02c4fe0f8c485fa3fd0af10005310aaecef64ca
---

Die **`display`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und das Layout, das für seine Kinder verwendet wird, wie z.B. [Flusslayout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements im [Flusslayout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; zum Beispiel, was passiert, wenn `display: flex` deklariert wird, ist in der CSS Flexible Box Model Spezifikation definiert.

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
display: grid-lanes;
display: inline-grid-lanes;
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

Die CSS `display`-Eigenschaft wird mit Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertekategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter legen den äußeren Display-Typ des Elements fest, im Wesentlichen seine Rolle im Flusslayout:
    - `block`
      - : Das Element generiert eine Block-Box, die sowohl vor als auch nach dem Element im normalen Flusszeilenumbrüche erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in der gleichen Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn eine Anzeigeeigenschaft nur mit einem **äußeren** Wert angegeben wird (z. B. `display: block` oder `display: inline`), ist der innere Wert standardmäßig `flow` (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Sie können die Syntax mit einem einzelnen Wert als Fallback für die Mehrwortsyntax verwenden, zum Beispiel könnte `display: inline flex` den folgenden Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrwortsyntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter geben den inneren Display-Typ des Elements an, der den Typ des Formatierungskontexts definiert, in dem seine Inhalte dargestellt werden (vorausgesetzt, es ist ein nicht ersetztes Element). Wenn eines dieser Schlüsselwörter als einzelner Wert verwendet wird, ist der äußere Display-Typ des Elements standardmäßig `block` (außer `ruby`, das standardmäßig `inline` ist).
    - `flow`
      - : Das Element legt seine Inhalte im Flusslayout (Block-und-Inline-Layout) an.

        Wenn sein äußerer Display-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, generiert es eine Inline-Box. Andernfalls generiert es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, stellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seine Inhalte her oder integriert seine Inhalte in seinen Eltern-Formatierungskontext.

    - `flow-root`
      - : Das Element generiert eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert und festlegt, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}} Elemente. Es definiert eine block-level Box.
    - `flex`
      - : Das Element verhält sich wie ein block-level Element und legt seine Inhalte gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein block-level Element und legt seine Inhalte gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) an.
    - `grid-lanes`
      - : Das Element verhält sich wie ein block-level Element und legt seine Inhalte im Grid-Lanes-Layout an. Spalten werden durch {{cssxref("grid-template-columns")}} definiert und verhalten sich wie ein strenges Grid, während Elemente in der Blockrichtung verpackt werden, um Lücken zwischen Elementen unterschiedlicher Größe zu füllen. Siehe [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) für Details.
    - `inline-grid-lanes`
      - : Das Element verhält sich wie ein inline-level Element und legt seine Inhalte im Grid-Lanes-Layout an. Reihen werden durch {{cssxref("grid-template-rows")}} definiert und verhalten sich wie ein strenges Grid, während Elemente in der Inline-Richtung verpackt werden, um Lücken zwischen Elementen unterschiedlicher Größe zu füllen. Siehe [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) für Details.
    - `ruby`
      - : Das Element verhält sich wie ein inline-level Element und legt seine Inhalte gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}} Elemente.

> [!NOTE]
> Wenn eine Anzeigeeigenschaft nur mit einem **inneren** Wert angegeben wird (z. B. `display: flex` oder `display: grid`), ist der äußere Wert standardmäßig `block` (z. B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element generiert eine Block-Box für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert von `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwort kombiniert werden.

> [!NOTE]
> Wenn kein innerer Wert angegeben ist, wird er standardmäßig auf `flow` gesetzt.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Display-Typ von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachkommen erfüllen können.
    Dieser Abschnitt definiert diese "internen" Display-Werte, die nur innerhalb dieses speziellen Layout-Modus Bedeutung haben.
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
  - : Diese Werte definieren, ob ein Element Anzeigeboxen generiert oder nicht.
    - `contents`
      - : Diese Elemente erzeugen keine spezifische Box für sich. Sie werden durch ihre Pseudo-Box und ihre Kind-Boxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Effekte von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existieren würde). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas darzustellen, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Ein-Schlüsselwort, vorkomponierte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Blocklevel- und Inlinelevel-Varianten des gleichen Layout-Modus erforderte.
    - `inline-block`
      - : Das Element generiert eine Block-Box, die zusammen mit dem umgebenden Inhalt geflossen wird, als ob sie eine einzelne Inline-Box wäre (verhält sich ähnlich wie ein ersetztes Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}}-Element, jedoch als Inline-Box statt als Blocklevel-Box. Innerhalb der Tabellenbox besteht ein Blocklevel-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein inline-level Element und legt seine Inhalte gemäß dem Flexbox-Modell an.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein inline-level Element und legt seine Inhalte gemäß dem Grid-Modell an.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display Module](/de/docs/Web/CSS/Guides/Display) beschreibt eine Mehrwortsyntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um den **äußeren** und **inneren** Display explizit zu definieren.
Die Einzelwertsyntax (vorkomponierte `<display-legacy>`-Werte) wird zur Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem vorkomponierten Einzelwert spezifiziert werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Leitfaden zur Verwendung der Mehrwortsyntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

## Beschreibung

Die einzelnen Seiten für die verschiedenen Werttypen, die `display` gesetzt haben kann, enthalten mehrere Beispiele dieser Werte in Aktion — siehe den [Syntax](#syntax)-Abschnitt. Darüber hinaus sehen Sie das folgende Material, das die verschiedenen Werte von Display eingehend behandelt.

### Mehrwortwerte

- [Verwendung der Mehrwortsyntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS-Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Flusslayout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Vorlagenbereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Verwirklichung von gängigen Layouts mit Gitter](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
- [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes)

### Animation von display

Unterstützende Browser animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten umschaltet, wenn sie 50 % der Animation zwischen den beiden erreicht.

Es gibt eine Ausnahme, wenn `display: none` hin zu oder von `block` animiert wird. In diesem Fall wird der Wert so umgeschaltet, dass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` auf `block` (oder einen anderen sichtbaren `display`-Wert) animiert wird, schaltet der Wert bei `0%` der Animationsdauer auf `block`, damit er während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) auf `none` animiert wird, schaltet der Wert bei `100%` der Animationsdauer auf `none`, damit er während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich zum Erstellen von Ein- / Ausstiegsanimationen, bei denen Sie z.B. einen Container aus dem DOM mit `display: none` entfernen möchten, aber mit {{cssxref("opacity")}} ausblenden, anstatt sofort zu verschwinden.

Wenn Sie `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animieren, müssen Sie den startenden `display`-Wert in einem expliziten Keyframe angeben (zum Beispiel mit `0%` oder `from`). Ein Beispiel finden Sie unter [Verwenden von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using).

Wenn Sie `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animieren, sind zwei zusätzliche Funktionen erforderlich:

- {{cssxref("@starting-style")}} bietet Startwerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements aus übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge beim ersten Stil-Update eines Elements oder beim Ändern des `display`-Typs von `none` zu einem anderen Typ nicht ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss bei der {{cssxref("transition-property")}} Deklaration (oder beim {{cssxref("transition")}} Shorthand) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Beispiele für das Übergehen der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` bei einem Element entfernt es aus dem [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dadurch wird das Element und alle seine Nachkommen von Screen-Reader-Technologie nicht mehr angekündigt.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, aber für unterstützende Technologien wie Screen-Reader verfügbar zu machen.

Während `display: none` Inhalte aus dem Zugänglichkeitsbaum ausblendet, werden Elemente, die versteckt sind, aber von sichtbaren Elementen über `aria-describedby` oder `aria-labelledby` Attribute referenziert werden, unterstützenden Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display` Wert von `contents` (aber Nachkommen bleiben erhalten). Dies führt dazu, dass das Element selbst von Screen-Reader-Technologie nicht mehr angekündigt wird. Dies ist ein inkorrektes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird das Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements auf `block`, `grid`, oder `flex` seine Darstellung im [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) ändern. Dies führt dazu, dass die Tabelle nicht mehr richtig von Screen-Reader-Technologie angekündigt wird.

- [Versteckte Inhalte für bessere Zugänglichkeit | Go Make Things](https://gomakethings.com/articles/hidden-content-for-better-a11y/)
- [MDN Verständnis der WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Block-Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, damit Sie vergleichen und einen Eindruck bekommen, wie die verschiedenen Werte das Layout des Elements beeinflussen und das ihrer Kinder.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher zu sehen ist, welchen Effekt die `display`-Werte haben.

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

Beachten Sie, dass einige Mehrwortwerte zur Veranschaulichung hinzugefügt sind, die folgende Äquivalente haben:

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
- [CSS Ruby Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
- SVG {{SVGAttr("display")}} Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes)
