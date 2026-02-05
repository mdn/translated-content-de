---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 038bda33048810c222cc32b71f52f14d53495a1d
---

Die **`display`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block oder Inline-Box](/de/docs/Web/CSS/Guides/Display/Flow_layout) behandelt wird und das Layout, das für seine Kinder verwendet wird, wie z.B. [Fließlayout](/de/docs/Web/CSS/Guides/Display/Flow_layout), [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout).

Formal legt die **`display`**-Eigenschaft den inneren und äußeren _Anzeigetyp_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Fließlayout](/de/docs/Web/CSS/Guides/Display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind in ihren eigenen individuellen Spezifikationen vollständig definiert; zum Beispiel ist im CSS Flexible Box Model festgelegt, was passiert, wenn `display: flex` deklariert wird.

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

Die CSS-`display`-Eigenschaft wird mit Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter legen den äußeren Anzeigetyp des Elements fest, also im Wesentlichen seine Rolle im Fließlayout:
    - `block`
      - : Das Element erzeugt eine Blockbox, die vor und nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn eine Display-Eigenschaft nur mit einem **äußeren** Wert angegeben wird (z.B. `display: block` oder `display: inline`), ist der innere Wert standardmäßig auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Sie können die Ein-Wert-Syntax als Fallback für die Mehrwort-Syntax verwenden. Zum Beispiel könnte `display: inline flex` den folgenden Fallback haben:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Verwendung der Mehrwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax) für weitere Informationen.

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter legen den inneren Anzeigetyp des Elements fest, der definiert, in welchem Formatierungskontext seine Inhalte angelegt werden (vorausgesetzt, es ist ein nicht ersetztés Element). Wenn eines dieser Schlüsselwörter allein als Einzelwert verwendet wird, ist der äußere Anzeigetyp des Elements standardmäßig `block` (mit Ausnahme von `ruby`, das standardmäßig `inline` ist).
    - `flow`
      - : Das Element legt seine Inhalte im Fließlayout (Block-und-Inline-Layout) an.

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Blockbox.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, erstellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Blockbox, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) festlegt, der die Wurzel des Formats bestimmt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Blockebene-Box.
    - `flex`
      - : Das Element verhält sich wie ein Blockebene-Element und legt seinen Inhalt entsprechend dem [flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Blockebene-Element und legt seinen Inhalt entsprechend dem [grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Ebene-Element und legt seinen Inhalt nach dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn eine Display-Eigenschaft nur mit einem **inneren** Wert angegeben wird (z.B. `display: flex` oder `display: grid`), ist der äußere Wert standardmäßig auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Blockbox für den Inhalt und eine separate Listenelement-Inline-Box.

Ein Einzelwert von `list-item` bewirkt, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> Wenn kein innerer Wert angegeben ist, wird `flow` als Standardwert angenommen.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Diese Sektion definiert jene "internen" Anzeigewerte, die nur innerhalb dieses speziellen Layout-Modus Bedeutung haben.
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
  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen erzeugt.
    - `contents`
      - : Diese Elemente produzieren selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kindboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie der `contents` Wert "ungewöhnliche Elemente" beeinflussen soll — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) für mehr Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keine Wirkung auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existiert). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgestellt.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorgefertigt

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Ein-Schlüsselwort, vorkomponierte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Blockebene- und Inlineebene-Varianten desselben Layout-Modus erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Blockbox, die mit umgebendem Inhalt geflossen wird, als wäre es eine einzelne Inline-Box (verhält sich ähnlich wie ein ersetztes Element).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box, statt als Blockebene-Box. Innerhalb der Tabellenbox befindet sich ein Blockebene-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Ebene-Element und legt seinen Inhalt entsprechend dem Flexbox-Modell an.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Ebene-Element und legt seinen Inhalt entsprechend dem Grid-Modell an.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) beschreibt eine Mehrwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Einzel-Schlüsselwort-Werte (vorkomponierte `<display-legacy>`-Werte) werden aus Gründen der Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container folgendermaßen angeben:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem alten Einzelwert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Verwendung der Mehrwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax) Leitfaden.

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die durch `display` gesetzt werden können, enthalten mehrere Beispiele dieser Werte in Aktion — siehe den [Syntax](#syntax) Abschnitt. Darüber hinaus sehen Sie das folgende Material, das die verschiedenen Werte für `display` im Detail behandelt.

### Mehrwort-Werte

- [Verwendung der Mehrwort-Syntax mit CSS display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### CSS Fließlayout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Fließlayout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Fließlayout und Schreibrichtungen](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschen von Umbrüchen bei Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Sortieren von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Typische Anwendungsfälle für Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid Template Areas](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Layout mithilfe benannter Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Häufige Layouts mit Grids umsetzen](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Animieren von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Das bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten um 50 % der Animation zwischen den beiden umschaltet.

Es gibt eine Ausnahme, und zwar, wenn von oder zu `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert zu `block` bei `0%` der Animationsdauer wechseln, sodass es die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert zu `none` bei `100%` der Animationsdauer wechseln, sodass es die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Eintritts-/Austritts-Animationen zu erstellen, bei denen Sie zum Beispiel einen Container mit `display: none` aus dem DOM entfernen möchten, aber ihn mit {{cssxref("opacity")}} ausblenden möchten, anstatt sofort zu verschwinden.

Wenn Sie `display` mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animieren, müssen Sie den Startwert `display` in einem expliziten Keyframe bereitstellen (zum Beispiel mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Wenn Sie `display` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animieren, sind zwei zusätzliche Funktionen erforderlich:

- {{cssxref("@starting-style")}} liefert Startwerte für Eigenschaften, von denen Sie bei der ersten Anzeige des animierten Elements aus transponieren möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements oder beim Wechsel von `display` von `none` zu einem anderen Typ ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Kurzschreibweise) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zum Übergang der Eigenschaft `display` siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies wird dazu führen, dass das Element und alle seine Nachkommenelemente nicht mehr von Bildschirmlesern angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es aber dennoch für unterstützende Technologien wie Bildschirmleser verfügbar zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die ausgeblendet sind, aber von sichtbaren Elementen `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, unterstützenden Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen alle Elemente mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) (aber Nachkommen bleiben). Dies wird dazu führen, dass das Element selbst nicht mehr von Bildschirmlesern angekündigt wird. Dies ist ein inkorrektes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Zugänglicheres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird durch Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements auf `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) verändert. Dies führt dazu, dass die Tabelle nicht mehr richtig von Bildschirmlesern angekündigt wird.

- [Kurze Anmerkung darüber, was CSS-Display-Eigenschaften mit Tabellensemantik machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckte Inhalte für bessere Zugänglichkeit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verstehen von Erfolgskriterium 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der display-Werte

In diesem Beispiel haben wir zwei Blockebene-Containerelemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, um zu vergleichen und kontrastieren, wie die verschiedenen Werte das Layout des Elements und das ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern eingefügt, damit es einfacher ist, die Wirkung der Anzeige-Werte zu sehen.

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

Beachten Sie, dass einige Mehrwort-Werte zur Veranschaulichung hinzugefügt wurden, die die folgenden Entsprechungen haben:

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

Weitere Beispiele finden Sie in den Seiten für jeden separaten Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte).

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
