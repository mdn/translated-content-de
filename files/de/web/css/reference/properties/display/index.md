---
title: "`display` CSS property"
short-title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`display`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie z.B. [Flow-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Fluss-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind in ihren eigenen Spezifikationen vollständig definiert; zum Beispiel ist das, was passiert, wenn `display: flex` deklariert wird, in der Spezifikation des CSS-Flexbox-Modells definiert.

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

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeigetyp des Elements, der im Wesentlichen seine Rolle im Flusslayout darstellt:
    - `block`
      - : Das Element erzeugt eine Blockbox, die sowohl vor als auch nach dem Element in normalem Fluss Zeilenumbrüche erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss befindet sich das nächste Element auf derselben Zeile, wenn Platz ist.

> [!NOTE]
> Wenn eine Anzeigeeigenschaft nur mit einem **äußeren** Wert angegeben wird (z.B. `display: block` oder `display: inline`), ist der innere Wert standardmäßig `flow` (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Sie können die Ein-Wert-Syntax als Fallback für die Mehrfach-Schlüsselwort-Syntax verwenden, z.B. `display: inline flex` könnte folgendes Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, der den Typ des Formatierungskontexts definiert, in dem seine Inhalte ausgelegt sind (sofern es sich um ein nicht ersetztes Element handelt). Wenn eines dieser Schlüsselwörter allein als Einzelwert verwendet wird, ist der äußere Anzeigetyp des Elements standardmäßig `block` (mit Ausnahme von `ruby`, das standardmäßig `inline` ist).
    - `flow`
      - : Das Element gestaltet seine Inhalte mithilfe des Fluss-Layouts (Block-und-Inline-Layout).

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Blockbox.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den Formatierungskontext seines Elternteils.

    - `flow-root`
      - : Das Element erzeugt eine Blockbox, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert, der bestimmt, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und gestaltet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout).
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und gestaltet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts).
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und gestaltet seinen Inhalt gemäß dem Ruby-Formatierungsmodell. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn eine Anzeigeeigenschaft nur mit einem **inneren** Wert angegeben wird (z.B. `display: flex` oder `display: grid`), ist der äußere Wert standardmäßig `block` (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Blockbox für den Inhalt und eine separate Listenelement-Inline-Box.

Ein Einzelwert von `list-item` bewirkt, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> Wenn kein innerer Wert angegeben ist, ist der Standard `flow`.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur, mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeigewerte, die innerhalb dieses speziellen Layout-Modus nur Bedeutung haben.
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
      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Weitere Details finden Sie in [Anhang B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existierte). Alle nachfolgenden Elemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich irgendetwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorab komponiert

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Einzel-Schlüsselwort-Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für die Block-Level- und Inline-Level-Varianten des gleichen Layout-Modus erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Blockbox, die mit umgebendem Inhalt geflossen wird, als ob es eine einzelne Inline-Box wäre (sich wie ein ersetztes Element verhaltend).

        Es entspricht `inline flow-root`.

    - `inline-table`
      - : Der Wert `inline-table` hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, aber als Inline-Box statt als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es entspricht `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level-Element und gestaltet seinen Inhalt gemäß dem Flexbox-Modell.

        Es entspricht `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level-Element und gestaltet seinen Inhalt gemäß dem Grid-Modell.

        Es entspricht `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um explizit **äußere** und **innere** Anzeigen zu definieren.
Die Einzel-Schlüsselwort-Werte (vorkomponierte `<display-legacy>`-Werte) werden für die Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mithilfe des früheren Einzelwerts angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)-Leitfaden.

## Beschreibung

Die einzelnen Seiten für die verschiedenen Werttypen, die `display` haben kann, enthalten mehrere Beispiele dieser Werte in Aktion — siehe den [Syntax](#syntax)-Abschnitt. Zusätzlich siehe das folgende Material, das die verschiedenen Werte von display ausführlich behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS-Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle für Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Verwirklichen von gängigen Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Animation von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet allgemein, dass die Eigenschaft mitten in der Animation zwischen zwei Werten umschaltet.

Es gibt eine Ausnahme, wenn von oder zu `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, sodass der animierte Inhalt für die gesamte Dauer der Animation gezeigt wird. Ein Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer zu `block` wechseln, sodass es durchgehend sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass es durchgehend sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausstiegsanimationen zu erstellen, bei denen Sie z.B. einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit {{cssxref("opacity")}} ausblenden lassen möchten, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) müssen Sie den Startwert von `display` in einem expliziten Keyframe angeben (z.B. mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) sind zwei zusätzliche Funktionen erforderlich:

- {{cssxref("@starting-style")}} bietet Anfangswerte für Eigenschaften, von denen Sie ausgehen möchten, wenn das animierte Element erstmals angezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements oder wenn der `display`-Typ von `none` zu einem anderen Typ wechselt, ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Kurzform) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele, wie die Eigenschaft `display` übergangen wird, siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine nachfolgenden Elemente von Technologien zur Sprachwiedergabe nicht mehr angekündigt werden.

Wenn Sie das Element optisch verstecken möchten, ist eine zugänglichere Alternative die [Verwendung einer Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/), um es visuell vom Bildschirm zu entfernen, es jedoch für unterstützende Technologien wie Bildschirmleser verfügbar zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheit-Baum verbirgt, werden Elemente, die verborgen sind, aber von sichtbaren Elementen über die Attribute `aria-describedby` oder `aria-labelledby` referenziert werden, weiterhin von unterstützenden Technologien erkannt.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` (aber Nachkommen bleiben erhalten) aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element selbst nicht mehr von Technologien zur Sprachwiedergabe angekündigt wird. Dies ist gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) ein inkorrektes Verhalten.

- [Zugänglichere Auszeichnungen mit Display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert das Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle nicht mehr korrekt von Technologien zur Sprachwiedergabe angekündigt wird.

- [Verdeckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/articles/hidden-content-for-better-a11y/)
- [MDN Erkenntnisse zu WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Display-Werten

In diesem Beispiel haben wir zwei Block-Container-Elemente, jedes mit drei Inline-Kindern. Darunter befindet sich ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, um zu vergleichen und zu kontrastieren, wie die verschiedenen Werte das Layout des Elements und das ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und deren Kinder angewendet, damit es einfacher ist, die Wirkung der Display-Werte zu sehen.

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

Beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die folgende Entsprechungen haben:

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

Mehr Beispiele finden Sie auf den Seiten für jeden separaten Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- [CSS Ruby Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
- SVG-{{SVGAttr("display")}}-Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
