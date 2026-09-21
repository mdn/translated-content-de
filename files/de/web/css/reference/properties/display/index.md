---
title: "`display` CSS property"
short-title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 1017b716a13c17fb4afcc2aefc904692fa670460
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`display`** legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und welches Layout für seine Kindelemente verwendet wird, beispielsweise [Flow-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die Eigenschaft **`display`** die inneren und äußeren _display types_ eines Elements fest. Der äußere Typ bestimmt die Beteiligung eines Elements am [Flow-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ bestimmt das Layout der Kindelemente. Einige Werte von `display` sind vollständig in eigenen Spezifikationen definiert; beispielsweise ist in der CSS-Flexible-Box-Model-Spezifikation definiert, was geschieht, wenn `display: flex` deklariert wird.

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

```css interactive-example-choice
display: grid-lanes;
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
display: block grid-lanes;
display: inline grid-lanes;
display: block table;
display: inline table;

/* global values */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

Die CSS-Eigenschaft `display` wird mithilfe von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter geben den äußeren Anzeigetyp des Elements an, also im Wesentlichen seine Rolle im Flow-Layout:
    - `block`
      - : Das Element erzeugt eine Block-Box und erzeugt im normalen Fluss sowohl vor als auch nach dem Element Zeilenumbrüche.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die weder vor noch nach sich selbst Zeilenumbrüche erzeugen. Im normalen Fluss befindet sich das nächste Element in derselben Zeile, wenn genügend Platz vorhanden ist.

> [!NOTE]
> Wenn eine display-Eigenschaft nur mit einem **äußeren** Wert angegeben wird (z. B. `display: block` oder `display: inline`), ist der innere Wert standardmäßig `flow` (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Sie können die Einwert-Syntax als Fallback für die Mehrschlüsselwort-Syntax verwenden. Beispielsweise könnte `display: inline flex` den folgenden Fallback haben:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwenden der Mehrschlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter geben den inneren Anzeigetyp des Elements an, der die Art des Formatierungskontexts bestimmt, in dem sein Inhalt angeordnet wird (vorausgesetzt, es handelt sich um ein nicht ersetztes Element). Wenn eines dieser Schlüsselwörter allein als Einzelwert verwendet wird, ist der äußere Anzeigetyp des Elements standardmäßig `block` (mit Ausnahme von `ruby`, das standardmäßig `inline` verwendet).
    - `flow`
      - : Das Element ordnet seinen Inhalt mithilfe des Flow-Layouts an (Block- und Inline-Layout).

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext beteiligt ist, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext beteiligt ist, richtet es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seinen Inhalt ein oder integriert seinen Inhalt in den Formatierungskontext seines Elternelements.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) einrichtet und festlegt, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Box auf Blockebene.
    - `flex`
      - : Das Element verhält sich wie ein Element auf Blockebene und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Element auf Blockebene und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) an.
    - `grid-lanes`
      - : Das Element verhält sich wie ein Element auf Blockebene und ordnet seinen Inhalt mithilfe des Grid-Lanes-Layouts an. Spalten werden durch {{cssxref("grid-template-columns")}} definiert und verhalten sich wie ein striktes Grid, während Elemente in Blockrichtung gepackt werden, um Lücken zwischen Elementen unterschiedlicher Größe zu füllen. Einzelheiten finden Sie unter [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes).
    - `ruby`
      - : Das Element verhält sich wie ein Element auf Inline-Ebene und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn eine display-Eigenschaft nur mit einem **inneren** Wert angegeben wird (z. B. `display: flex` oder `display: grid`), ist der äußere Wert standardmäßig `block` (z. B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Inline-Box für das Listenelement.

Ein einzelner Wert `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält.
Dieser kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann außerdem mit jedem Schlüsselwort {{CSSxRef("&lt;display-outside&gt;")}} sowie den Schlüsselwörtern `flow` oder `flow-root` von {{CSSxRef("&lt;display-inside&gt;")}} kombiniert werden.

> [!NOTE]
> Wenn kein innerer Wert angegeben ist, lautet der Standardwert `flow`.
> Wenn kein äußerer Wert angegeben ist, hat die Haupt-Box den äußeren Anzeigetyp `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kindelemente und Nachfahren einnehmen können.
    Dieser Abschnitt definiert diese „internen“ display-Werte, die nur innerhalb dieses bestimmten Layout-Modus eine Bedeutung haben.
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
  - : Diese Werte bestimmen, ob ein Element überhaupt Anzeige-Boxen erzeugt.
    - `contents`
      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und die Boxen ihrer Kindelemente ersetzt. Beachten Sie, dass die CSS-Display-Level-3-Spezifikation definiert, wie sich der Wert `contents` auf „ungewöhnliche Elemente“ auswirken soll – Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden, wie etwa ersetzte Elemente. Weitere Details finden Sie in [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Deaktiviert die Anzeige eines Elements, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existierte). Die Anzeige aller Nachfahrenelemente wird ebenfalls deaktiviert.
        Verwenden Sie stattdessen die Eigenschaft {{CSSxRef("visibility")}}, damit ein Element den Platz einnimmt, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern.

### Vorkombiniert

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete für die Eigenschaft `display` eine vorkombinierte Syntax mit einem Schlüsselwort, die separate Schlüsselwörter für Varianten desselben Layout-Modus auf Block- und Inline-Ebene erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Block-Box, die mit dem umgebenden Inhalt fließt, als wäre sie eine einzelne Inline-Box (ähnlich dem Verhalten eines ersetzten Elements).

        Es entspricht `inline flow-root`.

    - `inline-table`
      - : Der Wert `inline-table` hat keine direkte Entsprechung in HTML. Er verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box und nicht als Box auf Blockebene. Innerhalb der Tabellen-Box befindet sich ein Kontext auf Blockebene.

        Es entspricht `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Element auf Inline-Ebene und ordnet seinen Inhalt gemäß dem Flexbox-Modell an.

        Es entspricht `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Element auf Inline-Ebene und ordnet seinen Inhalt gemäß dem Grid-Modell an.

        Es entspricht `inline grid`.

    - `inline-grid-lanes`
      - : Das Element verhält sich wie ein Element auf Inline-Ebene und ordnet seinen Inhalt mithilfe des Grid-Lanes-Layouts an. Zeilen werden durch {{cssxref("grid-template-rows")}} definiert und verhalten sich wie ein striktes Grid, während Elemente in Inline-Richtung gepackt werden, um Lücken zwischen Elementen unterschiedlicher Größe zu füllen. Einzelheiten finden Sie unter [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes).

        Es entspricht `inline grid-lanes`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine Mehrschlüsselwort-Syntax für Werte, die Sie mit der Eigenschaft `display` verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Einzelwert-Schlüsselwörter (vorkombinierte `<display-legacy>`-Werte) werden aus Gründen der Abwärtskompatibilität unterstützt.

Mit zwei Werten können Sie beispielsweise einen Inline-Flex-Container wie folgt angeben:

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

Weitere Informationen zu diesen Änderungen finden Sie im Leitfaden [Verwenden der Mehrschlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

## Beschreibung

Die einzelnen Seiten für die verschiedenen Werttypen, die für `display` festgelegt werden können, enthalten mehrere Beispiele für diese Werte in der Praxis – siehe den Abschnitt [Syntax](#syntax). Lesen Sie außerdem die folgenden Materialien, die die verschiedenen display-Werte ausführlich behandeln.

### Mehrschlüsselwortwerte

- [Verwenden der Mehrschlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS-Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibrichtungen](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Umbruch von Flex-Elementen meistern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Anordnen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Vorlagenbereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Umsetzen gängiger Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
- [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes)

### display animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Das bedeutet im Allgemeinen, dass die Eigenschaft bei 50 % der Animation zwischen zwei Werten wechselt.

Es gibt eine Ausnahme: beim Animieren zu oder von `display: none`. In diesem Fall wechselt der Browser zwischen den beiden Werten so, dass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er durchgehend sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er durchgehend sichtbar ist.

Dieses Verhalten ist nützlich, um Einblend- und Ausblendanimationen zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit {{cssxref("opacity")}} ausblenden lassen wollen, statt ihn sofort verschwinden zu lassen.

Wenn Sie `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animieren, müssen Sie den anfänglichen `display`-Wert in einem expliziten Keyframe angeben, beispielsweise mit `0%` oder `from`. Ein Beispiel finden Sie unter [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using).

Wenn Sie `display` mit [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions) animieren, sind zwei zusätzliche Funktionen erforderlich:

- {{cssxref("@starting-style")}} stellt Startwerte für Eigenschaften bereit, von denen Sie übergehen möchten, wenn das animierte Element erstmals angezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Transitions weder bei der ersten Stilaktualisierung eines Elements noch bei einer Änderung des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der Deklaration von {{cssxref("transition-property")}} (oder in der Kurzform {{cssxref("transition")}}) festgelegt werden, um `display`-Transitions zu aktivieren.

Beispiele für Transitions der Eigenschaft `display` finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` für ein Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dadurch werden das Element und alle seine Nachfahrenelemente nicht mehr von Screenreader-Technologien angekündigt.

Wenn Sie das Element visuell ausblenden möchten, ist es barrierefreier, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es jedoch weiterhin für unterstützende Technologien wie Screenreader verfügbar zu machen.

Während `display: none` Inhalt aus dem Barrierefreiheitsbaum ausblendet, werden ausgeblendete Elemente, auf die von den Attributen `aria-describedby` oder `aria-labelledby` sichtbarer Elemente verwiesen wird, unterstützenden Technologien bereitgestellt.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) (die Nachfahren bleiben jedoch erhalten). Dies führt dazu, dass das Element selbst nicht mehr von Screenreader-Technologien angekündigt wird. Dieses Verhalten ist gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) nicht korrekt.

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert das Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements in `block`, `grid` oder `flex` dessen Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle nicht mehr korrekt von Screenreader-Technologien angekündigt wird.

- [Ausgeblendete Inhalte für bessere a11y | Go Make Things](https://gomakethings.com/articles/hidden-content-for-better-a11y/)
- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 1.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.1 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Containerelemente auf Blockebene, jeweils mit drei Inline-Kindelementen. Darunter befindet sich ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können. Dadurch können Sie vergleichen, wie sich die verschiedenen Werte auf das Layout des Elements und seiner Kindelemente auswirken.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kindelemente angewendet, damit die Auswirkungen der display-Werte leichter erkennbar sind.

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
    <option>grid-lanes</option>
    <option>block grid-lanes</option>
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
    <option>inline-grid-lanes</option>
    <option>inline grid-lanes</option>
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

Beachten Sie, dass einige Mehrschlüsselwortwerte zur Veranschaulichung hinzugefügt wurden, die den folgenden Entsprechungen entsprechen:

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

Weitere Beispiele finden Sie auf den Seiten zu den einzelnen display-Typen unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- Modul [CSS-Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout)
- SVG-Attribut {{SVGAttr("display")}}
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes)
