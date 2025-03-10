---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

Die **`display`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/Flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie zum Beispiel [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout); der innere Typ legt das Layout der Kinder fest. Einige `display`-Werte sind in ihren eigenen Spezifikationen vollständig definiert; zum Beispiel wird im CSS Flexible Box Model spezifiziert, was passiert, wenn `display: flex` erklärt wird.

{{EmbedInteractiveExample("pages/css/display.html")}}

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

/* box generation */
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

Die CSS-`display`-Eigenschaft wird mit Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeigetyp des Elements, der im Wesentlichen seine Rolle im Flow-Layout ist:

    - `block`
      - : Das Element erzeugt eine Block-Box und erzeugt sowohl vor als auch nach dem Element Zeilenumbrüche, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die weder vor noch nach sich selbst Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in der gleichen Zeile sein, wenn dafür Platz ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, auf eine Display-Eigenschaft stoßen, die nur einen **äußeren** Wert hat (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Einzelwert-Syntax verwenden, zum Beispiel könnte `display: inline flex` das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den innere Anzeigetyp des Elements, der den Typ des Formatierungskontexts definiert, in dem seine Inhalte layoutet werden (bei einem nicht-ersetzten Element):

    - `flow`

      - : Das Element layoutet seine Inhalte mit Flow-Layout (Block- und Inline-Layout).

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, stellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte bereit oder integriert seine Inhalte in den Formatierungskontext des Eltern.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und den Formatierungs-Root definiert.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Element und layoutet seine Inhalte entsprechend dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout).
    - `grid`
      - : Das Element verhält sich wie ein Block-Element und layoutet seine Inhalte entsprechend dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Element und layoutet seine Inhalte entsprechend dem Ruby-Formatierungsmodell. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, auf eine Display-Eigenschaft stoßen, die nur einen **inneren** Wert hat (z.B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Inline-Box für Listeneinträge.

Ein einzelner Wert von `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow`- oder `flow-root`-{{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, auf `flow` zurückgegriffen.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit verschiedenen Rollen, die ihre Kinder und Nachfahren einnehmen können.
    Dieser Abschnitt definiert diese "internen" Anzeigenwerte, die nur in diesem speziellen Layout-Modus eine Bedeutung haben.

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

  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen generiert.

    - `contents`

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudobox und ihre Kind-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen soll — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, so dass es keine Auswirkungen auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existierte). Alle Nachfahr-Elemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas darzustellen, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Einzel-Schlüsselwort, vorkomponierte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block- und Inline-Varianten des gleichen Layout-Modus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit dem umliegenden Inhalt geflossen wird, als wäre sie eine einzelne Inline-Box (verhält sich ähnlich wie ein ersetztes Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`

      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box anstelle einer Block-Box. Innerhalb der Tabellen-Box befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Element und layoutet seine Inhalte entsprechend dem Flexbox-Modell.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Element und layoutet seine Inhalte entsprechend dem Grid-Modell.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Einzel-Schlüsselwort-Werte (vorkomponierte `<display-legacy>`-Werte) werden zur Abwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch unter Verwendung des früheren Einzelwerts spezifiziert werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)-Leitfaden.

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die individuellen Seiten für die verschiedenen Werttypen, die `display` haben kann, enthalten mehrere Beispiele für diese Werte in Aktion — siehe den Abschnitt [Syntax](#syntax). Darüber hinaus finden Sie das folgende Material, das die verschiedenen Werte des Displays im Detail behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flusslayout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außer Fluss](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundlagen des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Verwaltung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschen des Umschlagens von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Ordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundlagen des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Gitternetzlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Zugänglichkeit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Verwirklichung üblicher Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Anzeige animieren

[Unterstützte Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Im Allgemeinen bedeutet dies, dass die Eigenschaft 50% der Animation zwischen den beiden Werten hin und her wechselt.

Es gibt eine Ausnahme, nämlich wenn `display: none` zu oder von `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, so dass der animierte Inhalt die gesamte Animationsdauer über angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er durchgehend sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er durchgehend sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Ausstiegsanimationen zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM entfernen möchten mit `display: none`, aber ihn mit [Opacity](/de/docs/Web/CSS/opacity) ausblenden lassen möchten, anstatt sofort zu verschwinden.

Wenn `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird, müssen Sie den Anfangswert `display` in einem expliziten Keyframe bereitstellen (zum Beispiel mit `0%` oder `from`). Siehe [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Wenn `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert wird, sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Anfangswerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements übergängen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stilupdate eines Elements ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Shorthand) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zur Übergang der `display`-Eigenschaft, siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Wenn Sie einen `display`-Wert von `none` auf ein Element anwenden, wird dieses aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) entfernt. Dies wird dazu führen, dass das Element und alle seine nachfolgenden Elemente nicht mehr von Bildschirmlese-Technologie angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative die [Verwendung einer Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/), um es visuell vom Bildschirm zu entfernen, es aber trotzdem Assistive Technology wie Bildschirmlesern zugänglich zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die ausgeblendet sind, aber von sichtbaren Elementen durch `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, Assistive Technologies zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern werden aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element entfernen mit einem `display`-Wert von `contents` (aber Nachfahren bleiben). Dies wird dazu führen, dass nur das Element selbst nicht mehr von Bildschirmlese-Technologie angekündigt wird. Dies ist ein inkorrektes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Zugänglicheres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern ändert das Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` die Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle nicht mehr richtig von Bildschirmlese-Technologie angekündigt wird.

- [Kurze Notiz zu den CSS-Display-Eigenschaften und den semantischen Auswirkungen auf Tabellen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Verborgene Inhalte für eine bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Block-Container-Elemente, die jeweils drei Inline-Kinder haben. Darunter haben wir ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden. Dadurch können Sie vergleichen und gegenüberstellen, wie die verschiedenen Werte das Layout des Elements und seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern eingeschlossen, so dass es einfacher ist, die Auswirkungen der Anzeige-Werte zu sehen.

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

Beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die folgende Äquivalenzen haben:

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

Sie können weitere Beispiele auf den Seiten für jeden einzelnen Display-Typ unter [Gruppierte Werte](#gruppierte_werte) finden.

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
