---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`display`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element als [Block oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie z.B. [Fluss-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die **`display`** Eigenschaft die inneren und äußeren _Anzeigearten_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Fluss-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind in ihren eigenen Spezifikationen vollständig definiert; zum Beispiel ist das Detail, was passiert, wenn `display: flex` deklariert wird, im CSS-Flexible-Box-Modell spezifiziert.

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

Die CSS `display`-Eigenschaft wird durch Schlüsselwortwerte angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter legen den äußeren Anzeigetyp des Elements fest, was im Wesentlichen seine Rolle im Fluss-Layout ist:
    - `block`
      - : Das Element erzeugt eine Blockbox und erzeugt Zeilenumbrüche sowohl vor als auch nach dem Element im normalen Fluss.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in der gleichen Zeile platziert, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, eine display-Eigenschaft mit nur einem **äußeren** Wert (z.B. `display: block` oder `display: inline`) vorfinden, wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden. Zum Beispiel könnte `display: inline flex` den folgenden Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax) für weitere Informationen.

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter legen den inneren Anzeigetyp des Elements fest, der den Typ des Formatierungskontexts definiert, in dem seine Inhalte ausgelegt sind (vorausgesetzt, es handelt sich um ein nicht ersetzbares Element). Wenn eines dieser Schlüsselwörter alleine als einzelner Wert verwendet wird, ist der äußere Anzeigetyp des Elements standardmäßig `block` (mit Ausnahme von `ruby`, das standardmäßig `inline` ist).
    - `flow`
      - : Das Element legt seinen Inhalt mittels Fluss-Layout (Block-und-Inline-Layout) an.

        Wenn der äußere Anzeigetyp `inline` ist und es in einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Blockbox.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext beteiligt ist, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seinen Inhalt oder integriert seinen Inhalt in den Formatierungskontext seines Elternteils.

    - `flow-root`
      - : Das Element erzeugt eine Blockbox, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert und definiert, wo sich der Formatierungsursprung befindet.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) aus.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) aus.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Ruby-Formatierungsmodell aus. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, auf eine display-Eigenschaft mit nur einem **inneren** Wert (z.B. `display: flex` oder `display: grid`) stoßen, wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Blockbox für den Inhalt und eine separate Listenelement-Inline-Box.

Ein Einzelwert von `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Keyword-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, der Standardwert `flow` sein.
> Wenn kein äußerer Wert angegeben ist, wird die Hauptbox einen äußeren Anzeigetyp von `block` haben.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Dieser Abschnitt definiert jene "internen" Anzeigewerte, die nur innerhalb dieses bestimmten Layout-Modus Bedeutung haben.
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
      - : Diese Elemente werden als anonyme Boxen erzeugt.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rtc")}}-HTML-Elemente.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}
  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen erzeugt.
    - `contents`
      - : Diese Elemente erzeugen keine spezifische Box für sich. Sie werden durch ihre Pseudobox und ihre Kindboxen ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation beschreibt, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte – Elemente, die nicht vollständig durch CSS-Box-Konzepte wie ersetzbare Elemente gerendert werden. Siehe [Anhang B: Effekte von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird dargestellt, als ob das Element nicht existiert). Alle Nachkommenelemente werden ebenfalls nicht angezeigt. Um den Platz, den ein Element normalerweise einnehmen würde, ohne tatsächlich etwas darzustellen, zu belegen, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorgefertigt

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Ein-Wort-, vorgefertigte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für block-level und inline-level Varianten desselben Layoutmodus erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Blockbox, die mit dem umgebenden Inhalt geflossen wird, als wäre sie eine einzelne Inline-Box (verhält sich ähnlich wie ein ersetzbares Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box statt als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Flexbox-Modell aus.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Grid-Modell aus.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine Multi-Keyword-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Ein-Wort-Werte (vorgefertigte `<display-legacy>`-Werte) werden aus Kompatibilitätsgründen unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem vorgefertigten Einzelwert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Für weitere Informationen zu diesen Änderungen siehe den [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)-Leitfaden.

## Beschreibung

Die individuellen Seiten für die verschiedenen Arten von Werten, die `display` gesetzt haben kann, enthalten mehrere Beispiele dieser Werte in Aktion – siehe den [Syntax](#syntax)-Abschnitt. Außerdem siehe das folgende Material, das die verschiedenen Werte von `display` ausführlich behandelt.

### Multi-Keyword-Werte

- [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS-Fluss-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Verhältnis von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mit benannten Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichtung von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS-Grid-Layout und Zugänglichkeit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Umsetzung gängiger Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Animationen für Display

Unterstützende Browser animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten 50% der Animationszeit wechselt.

Es gibt eine Ausnahme, nämlich wenn die Animation zu oder von `display: none` wechselt. In diesem Fall wechselt der Browser zwischen den zwei Werten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausblendeanimationen zu erstellen, bei denen Sie z. B. einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit {{cssxref("opacity")}} ausblenden, anstatt sofort zu verschwinden.

Wenn `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird, müssen Sie den Start-`display`-Wert in einem expliziten Keyframe angeben (z.B. mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Wenn `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animiert wird, sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) bietet Startwerte für Eigenschaften, von denen Sie beim erstmaligen Anzeigen des animierten Elements einen Übergang wünschen. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements oder wenn sich der `display`-Typ von `none` in einen anderen Typ ändert, ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Kurzform) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zum Übergang der `display`-Eigenschaft sehen Sie sich die Seiten zu [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples) an.

## Zugänglichkeit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies wird dazu führen, dass das Element und alle seine Nachkommenelemente nicht mehr von Bildschirmlesetechnologie angesagt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, aber dennoch für Hilfstechnologie wie Bildschirmleser verfügbar zu machen.

Während `display: none` Inhalte aus dem Zugänglichkeitsbaum entfernt, werden Elemente, die verborgen sind, aber von sichtbaren Elementen in ihren `aria-describedby` oder `aria-labelledby`-Attributen referenziert werden, Hilfstechnologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` (aber Nachkommen bleiben erhalten). Dies wird dazu führen, dass das Element selbst nicht mehr von Bildschirmlesetechnologie angekündigt wird. Dies ist ein fehlerhaftes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Barrierefreies Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents is not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern ändert sich die Darstellung im [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) eines {{HTMLElement("table")}}-Elements, wenn der `display`-Wert auf `block`, `grid` oder `flex` geändert wird. Dies führt dazu, dass die Tabelle nicht mehr korrekt von Bildschirmlesetechnologie angekündigt wird.

- [Kurze Notiz darüber, was CSS-Anzeigeeigenschaften mit Tabellensemantik tun — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Verborgener Inhalt für bessere A11Y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Leitfaden 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis von Erfolgskriterium 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### display-Wertvergleich

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, jedes mit drei Inline-Kindern. Darunter befindet sich ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen können, wie die verschiedenen Werte das Layout des Elements und das seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher ist, den Effekt der Anzeige-Werte zu erkennen.

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

Beachten Sie, dass einige Multi-Keyword-Werte zu Illustrationszwecken hinzugefügt wurden, die folgende Äquivalente haben:

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

Weitere Beispiele finden Sie auf den Seiten zu den einzelnen Anzeigetypen unter [Gruppierte Werte](#gruppierte_werte).

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
