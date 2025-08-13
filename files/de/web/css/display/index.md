---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`display`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie z.B. [Fluss-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout), [Gitter](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal setzt die **`display`**-Eigenschaft die inneren und äußeren _Anzeigearten_ eines Elements. Der äußere Typ bestimmt die Teilnahme eines Elements am [Fluss-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout); der innere Typ bestimmt das Layout der Kinder. Einige Werte von `display` sind vollständig in ihren eigenen individuellen Spezifikationen definiert; beispielsweise wird das Detail dessen, was passiert, wenn `display: flex` deklariert wird, in der CSS Flexible Box Model-Spezifikation definiert.

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

Die CSS-`display`-Eigenschaft wird mit Schlüsselwortwerten spezifiziert.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Diese Schlüsselwörter legen den äußeren Anzeigetyp des Elements fest, was im Wesentlichen seine Rolle im Fluss-Layout ist:
    - `block`
      - : Das Element erzeugt eine Block-Box, die sowohl vor als auch nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element auf derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, auf eine `display`-Eigenschaft stoßen, die nur einen **äußeren** Wert hat (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden, z.B. könnte `display: inline flex` das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display) für weitere Informationen.

### Innerhalb

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, der die Art des Formatierungskontexts definiert, in dem seine Inhalte layoutet werden (vorausgesetzt, es ist ein nicht-ersetztes Element):
    - `flow`
      - : Das Element layoutet seine Inhalte mit Fluss-Layout (Block-und-Inline-Layout).

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, stellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte her oder integriert seine Inhalte in den Eltern-Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) herstellt und definiert, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Element und layoutet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout).
    - `grid`
      - : Das Element verhält sich wie ein Block-Element und layoutet seinen Inhalt gemäß dem [Gitter-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Element und layoutet seinen Inhalt gemäß dem Ruby-Formatierungsmodell. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser auf eine `display`-Eigenschaft stoßen, die nur einen **inneren** Wert hat (z.B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Inline-Box für das Listenelement.

Ein einzelner Wert von `list-item` wird dazu führen, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwort-Syntax unterstützen, wird, falls kein innerer Wert angegeben ist, standardmäßig `flow` verwendet.
> Wenn kein äußerer Wert angegeben ist, wird der Hauptkasten einen äußeren Anzeigetyp von `block` haben.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachkommen erfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeigewerte, die nur innerhalb dieses bestimmten Layout-Modus eine Bedeutung haben.
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
  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen erzeugt.
    - `contents`
      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existiert). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorgefertigt

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 verwendete eine Einzelschlüsselwort-vorgefertigte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block- und Inline-Varianten desselben Layoutmodus erforderte.
    - `inline-block`
      - : Das Element erzeugt eine Block-Box, die zusammen mit umgebenden Inhalten geflossen wird, als ob es eine einzige Inline-Box wäre (verhält sich ähnlich wie ein ersetztes Element).

        Es entspricht `inline flow-root`.

    - `inline-table`
      - : Der `inline-table`-Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box statt als Block-Level-Box. Innerhalb der Tabellen-Box befindet sich ein Block-Level-Kontext.

        Es entspricht `inline table`.

    - `inline-flex`
      - : Das Element verhält sich wie ein Inline-Element und layoutet seinen Inhalt gemäß dem Flexbox-Modell.

        Es entspricht `inline flex`.

    - `inline-grid`
      - : Das Element verhält sich wie ein Inline-Element und layoutet seinen Inhalt gemäß dem Gittermodell.

        Es entspricht `inline grid`.

### Welche Syntax sollte man verwenden?

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige ausdrücklich zu definieren.
Die Einzel-Schlüsselwort-Werte (vorgefertigte `<display-legacy>`-Werte) werden aus Gründen der Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch unter Verwendung des alten Einzelwerts spezifiziert werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)-Leitfaden.

## Beschreibung

Die individuellen Seiten für die unterschiedlichen Arten von Werten, die `display` gesetzt werden können, enthalten mehrere Beispiele für diese Werte in Aktion — siehe den [Syntax](#syntax)-Abschnitt. Zusätzlich finden Sie das folgende Material, das die verschiedenen Werte von `display` im Detail behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS-Fluss-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundlagen des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Reihenfolge der Flex-Elemente](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundlagen des Gitter-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Gittervorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Gitterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichtung von Elementen in einem CSS-Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Gitterlayout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Umsetzen gängiger Layouts mit Gittern](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Anzeige animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Das bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten bei 50% der Animation zwischen den beiden wechselt.

Es gibt eine Ausnahme, nämlich wenn von oder zu `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` wechseln, sodass er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` wechseln, sodass er die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Ausstieganimationen zu erstellen, bei denen Sie zum Beispiel einen Container mit `display: none` aus dem DOM entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Wenn Sie `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animieren, müssen Sie den Anfangswert von `display` in einem expliziten Keyframe angeben (zum Beispiel mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Wenn Sie `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animieren, sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) stellt Anfangswerte für Eigenschaften bereit, von denen Sie ausgehend animieren möchten, wenn das animierte Element erstmals angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht ausgelöst, wenn das Element zum ersten Mal aktualisiert wird oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder dem {{cssxref("transition")}}-Kurzschlüssel) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele, wie die `display`-Eigenschaft übergeht, siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element wird es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) entfernen. Dies wird dazu führen, dass das Element und alle seine Nachkommen nicht mehr von Bildschirmlesetechnologien angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es jedoch dennoch für unterstützende Technologien wie Bildschirmleser verfügbar zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die ausgeblendet sind, aber von sichtbaren Elementen mit `aria-describedby` oder `aria-labelledby`-Attributen referenziert werden, unterstützenden Technologien weiterhin zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern werden aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` entfernen (aber Nachkommen bleiben erhalten). Dies wird dazu führen, dass das Element selbst nicht mehr von Bildschirmlesegeräten angekündigt wird. Dies ist jedoch laut der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) nicht richtiges Verhalten.

- [Barrierefreies Markup mit display: contents verbessern | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird das Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) verändern. Dies führt dazu, dass die Tabelle nicht mehr korrekt von Bildschirmlesetechnologien angekündigt wird.

- [Kurze Anmerkung zu den Auswirkungen von CSS-Anzeigeeigenschaften auf Tabellensemantik — Die Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckter Inhalt für bessere Zugänglichkeit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN-Verständnis-WCAG, Leitlinien 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgsprinzips 1.3.1 | W3C-Verständnis-WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern hinzugefügt, damit es einfacher ist zu sehen, welchen Effekt die Anzeigewerte haben.

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

Beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt werden, die die folgenden Entsprechungen haben:

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

Weitere Beispiele finden Sie auf den Seiten für jeden einzelnen Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte).

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
