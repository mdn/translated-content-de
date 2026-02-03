---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 3b50e6c3275317dc0025a604d4fb96de6fbf3aa7
---

Die **`display`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und das Layout, das für seine Kinder verwendet wird, wie z.B. der [flussbasierte Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [flussbasierten Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige `display`-Werte sind vollständig in ihren eigenen einzelnen Spezifikationen definiert; zum Beispiel wird das Verhalten bei der Deklaration von `display: flex` in der CSS-Flexible-Box-Model-Spezifikation definiert.

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

Die CSS-Eigenschaft `display` wird mit Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den äußeren Display-Typ des Elements, der im Wesentlichen seine Rolle im flussbasierten Layout ist:
    - `block`
      - : Das Element generiert eine Block-Box und erzeugt sowohl vor als auch nach dem Element Zeilenumbrüche, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element generiert eine oder mehrere Inline-Boxen, die vor und nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn eine Display-Eigenschaft mit nur einem **äußeren** Wert (z.B. `display: block` oder `display: inline`) angegeben wird, lautet der innere Wert standardmäßig `flow` (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Sie können die Ein-Wert-Syntax als Fallback für Mehrfach-Schlüsselwort-Syntax verwenden, zum Beispiel könnte `display: inline flex` den folgenden Fallback haben
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
  - : Diese Schlüsselwörter spezifizieren den inneren Display-Typ des Elements, der den Typ des Formatierungskontextes definiert, in dem sein Inhalt ausgelegt wird (vorausgesetzt, es handelt sich um ein nicht-ersetztes Element). Wenn eines dieser Schlüsselwörter allein als einzelner Wert verwendet wird, lautet der äußere Display-Typ des Elements standardmäßig `block` (mit Ausnahme von `ruby`, das standardmäßig `inline` ist).
    - `flow`
      - : Das Element legt seinen Inhalt im Flusslayout (Block-und-Inline-Layout) dar.

        Wenn sein äußerer Display-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, generiert es eine Inline-Box. Andernfalls generiert es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, stellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seinen Inhalt her oder integriert seinen Inhalt in den Formatierungskontext seines Elternteils.

    - `flow-root`
      - : Das Element generiert eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert und definiert, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Ebenen-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Ebenen-Element und legt seinen Inhalt nach dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) aus.
    - `grid`
      - : Das Element verhält sich wie ein Block-Ebenen-Element und legt seinen Inhalt nach dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) aus.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Ebenen-Element und legt seinen Inhalt nach dem Ruby-Formatierungsmodell aus. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn eine Display-Eigenschaft mit nur einem **inneren** Wert (z.B. `display: flex` oder `display: grid`) angegeben wird, lautet der äußere Wert standardmäßig `block` (z.B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element generiert eine Block-Box für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert von `list-item` lässt das Element sich wie ein Listenelement verhalten. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow`- oder `flow-root`-{{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> Wenn kein innerer Wert angegeben wird, lautet er standardmäßig `flow`.
> Wenn kein äußerer Wert angegeben wird, hat die Hauptbox einen äußeren Display-Typ von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Diese Sektion definiert diese "internen" Display-Werte, die nur innerhalb dieses bestimmten Layout-Modus Bedeutung haben.
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
  - : Diese Werte definieren, ob ein Element überhaupt Darstellungsboxen generiert.
    - `contents`
      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudobox und ihre Kinderboxen ersetzt. Beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte – Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Effekt auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existierte). Alle Nachfahrenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne jedoch tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorbeschriftet

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Ein-Schlüsselwort-, vorbeschriftete Syntax für die `display`-Eigenschaft und erforderte separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layout-Modells.
    - `inline-block`
      - : Das Element generiert eine Block-Box, die mit dem Umgebungstext geflossen wird, als wäre es eine einzelne Inline-Box (verhält sich ähnlich wie ein ersetztes Element).

        Es entspricht `inline flow-root`.

    - `inline-table`
      - : Der Wert `inline-table` hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, aber als Inline-Box statt als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es entspricht `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt nach dem Flexbox-Modell aus.

        Es entspricht `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt nach dem Grid-Modell aus.

        Es entspricht `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeigen explizit zu definieren.
Die Ein-Schlüsselwort-Werte (vorgefasst `<display-legacy>`-Werte) werden aus Gründen der Abwärtskompatibilität unterstützt.

Zum Beispiel können Sie, indem Sie zwei Werte verwenden, einen Inline-Flex-Container wie folgt angeben:

```css
.container {
  display: inline flex;
}
```

Dies kann auch durch die ältere Ein-Wert-Spezifikation angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax) Leitfaden.

## Beschreibung

Die einzelnen Seiten für die verschiedenen Arten von Werten, die auf `display` gesetzt werden können, enthalten mehrere Beispiele für diese Werte in Aktion — siehe den Abschnitt [Syntax](#syntax). Zusätzlich sehen Sie folgendes Material, das die verschiedenen Werte von display ausführlich behandelt.

### Mehrfach-Schlüsselwert-Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS-Flusslayout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Flusslayout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Flusslayout und Schriftarten](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundlagenkonzepte des Flexbox-Modells](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung des Flexbox-Modells zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle des Flexbox-Modells](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundlagenkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Gitternetzen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichtung von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Grids, logische Werte und Schriftmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Umsetzung üblicher Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Animation von `display`

Unterstützende Browser animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zwischen zwei Werten zu 50 % wechselt.

Es gibt eine Ausnahme, wenn `display: none` zu oder von `display: none` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` auf `block` (oder einen anderen sichtbaren Display-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren Display-Wert) auf `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausgangsanimationen zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit {{cssxref("opacity")}} ausblenden möchten, anstatt sofort zu verschwinden.

Wenn `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird, müssen Sie den Anfangswert von `display` in einem expliziten Keyframe angeben (zum Beispiel mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Beim Animieren `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) werden zwei zusätzliche Funktionen benötigt:

- {{cssxref("@starting-style")}} bietet Anfangswerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements eine Übergangsstart erwarten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden bei CSS-Übergängen keine Übergänge beim ersten Stilaktualisierung eines Elements oder wenn sich der `display`-Typ von `none` in einen anderen Typ ändert, ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder dem {{cssxref("transition")}}-Shorthand) gesetzt werden, um `display`-Übergänge zu aktivieren.

Beispiele für das Übergehen der `display`-Eigenschaft finden Sie auf den Seiten zu [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommen nicht mehr von Bildschirmlesegeräten angesagt werden.

Wenn Sie das Element optisch ausblenden möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell von der Anzeige zu entfernen, es jedoch weiterhin für assistive Technologien wie Bildschirmlesegeräte verfügbar zu machen.

Obwohl `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die verborgen sind, aber von sichtbaren Elementen durch `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, für unterstützende Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) (aber die Nachkommen bleiben erhalten). Dies führt dazu, dass das Element selbst nicht mehr von Bildschirmlesetechnologien angesagt wird. Dieses Verhalten ist laut der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) fehlerhaft.

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert das Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements auf `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle von Bildschirmlesetechnologien nicht mehr richtig angesagt wird.

- [Kurznotiz darüber, was CSS-Display-Eigenschaften mit Tabelle-Semantiken tun – The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Verborgene Inhalte für bessere Zugänglichkeit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN-Verständnis WCAG, Leitfaden 1.3-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Container-Elemente auf Block-Ebene, jeweils mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder hinzugefügt, damit es einfacher ist, die Wirkung der Display-Werte zu sehen.

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

Beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die die folgenden Entsprechungen haben:

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
