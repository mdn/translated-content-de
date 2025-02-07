---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 37a204683c783e3d36d3e23848accfe0cb87a52a
---

{{CSSRef}}

Die **`display`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt fest, ob ein Element als [Block oder Inline-Box](/de/docs/Web/CSS/CSS_flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, z. B. [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal legt die **`display`**-Eigenschaft den inneren und äußeren _Display-Typ_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout); der innere Typ definiert das Layout der Kinder. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; beispielsweise wird im CSS Flexible Box Model-Spezifikation detailliert beschrieben, was geschieht, wenn `display: flex` deklariert wird.

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

Die CSS-Eigenschaft `display` wird mit Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter geben den äußeren Anzeige-Typ des Elements an, der im Wesentlichen seine Rolle im Flow-Layout beschreibt:

    - `block`
      - : Das Element erzeugt eine Block-Box, die sowohl vor als auch nach dem Element Zeilenumbrüche im regulären Fluss erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die keine Zeilenumbrüche vor oder nach sich selbst erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile angezeigt, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, eine `display`-Eigenschaft mit nur einem **außeren** Wert (z. B. `display: block` oder `display: inline`) begegnen, wird der innere Wert auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden, z. B. könnte `display: inline flex` den folgenden Fallback haben:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter geben den inneren Anzeige-Typ des Elements an, der den Typ des Formatierungskontexts bestimmt, in dem seine Inhalte angeordnet werden (sofern es sich um ein nicht ersetztes Element handelt):

    - `flow`

      - : Das Element ordnet seine Inhalte mithilfe eines Flow-Layouts (Block-und-Inline-Layout) an.

        Wenn der äußere Anzeige-Typ `inline` ist und das Element an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, bildet es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) bildet und definiert, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Sie definieren eine Block-Ebene-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Ebene-Element und ordnet seinen Inhalt entsprechend dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Block-Ebene-Element und ordnet seinen Inhalt entsprechend dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Ebene-Element und ordnet seinen Inhalt entsprechend dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, eine `display`-Eigenschaft mit nur einem **inneren** Wert (z. B. `display: flex` oder `display: grid`) begegnen, wird der äußere Wert auf `block` gesetzt (z. B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert von `list-item` bewirkt, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort sowie dem Schlüsselwort `flow` oder `flow-root` aus {{CSSxRef("&lt;display-inside&gt;")}} kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Keyword-Syntax unterstützen, wird standardmäßig `flow` verwendet, wenn kein innerer Wert angegeben wird. Wenn kein äußerer Wert angegeben ist, hat die Haupt-Box einen äußeren Anzeige-Typ von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren verschiedenen Rollen, die deren Kinder und Nachkommen erfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeige-Werte, die nur innerhalb des jeweiligen Layout-Modus Bedeutung haben.

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

  - : Diese Werte definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.

    - `contents`

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keine Auswirkungen auf das Layout hat (das Dokument wird so gerendert, als würde das Element nicht existieren). Alle Nachkommen-Elemente haben ebenfalls ihre Anzeige deaktiviert.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise beanspruchen würde, dabei aber nichts anzuzeigen, verwenden Sie stattdessen die Eigenschaft {{CSSxRef("visibility")}}.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine einheitliche Schlüsselwort-Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Ebene- und Inline-Ebene-Varianten desselben Layout-Modus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit umgebendem Inhalt so umgeht, als wäre sie eine einzelne Inline-Box (die sich wie ein ersetztes Element verhält).

        Dies entspricht `inline flow-root`.

    - `inline-table`

      - : Der Wert `inline-table` hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, aber als Inline-Box anstelle einer Block-Ebene-Box. Innerhalb der Table-Box befindet sich ein Block-Ebene-Kontext.

        Es entspricht `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Ebene-Element und ordnet seinen Inhalt entsprechend dem Flexbox-Modell an.

        Es entspricht `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Ebene-Element und ordnet seinen Inhalt entsprechend dem Grid-Modell an.

        Es entspricht `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Multi-Keyword-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeigen explizit zu definieren.
Die Einzel-Schlüsselwort-Werte (vorab komponierte `<display-legacy>`-Werte) werden aus Gründen der Abwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt angeben:

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

Weitere Informationen zu diesen Änderungen finden Sie im [Verwenden der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)-Leitfaden.

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die `display` haben kann, enthalten mehrere Beispiele für diese Werte — siehe den Abschnitt [Syntax](#syntax). Außerdem finden Sie folgendes Material, das die verschiedenen Werte von `display` ausführlich behandelt.

### Multi-Keyword-Werte

- [Verwenden der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS-Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [Flow-Layout und Schreibrichtungen](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Innerhalb und außerhalb des Flusses](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meistern des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verhältnis zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Umsetzung allgemeiner Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animation von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten in der Mitte der Animation umspringt.

Es gibt eine Ausnahme, wenn von oder zu `display: none` animiert wird. In diesem Fall springt der Browser zwischen den beiden Werten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, damit er die gesamte Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, damit er die gesamte Dauer sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Austrittsanimationen zu erstellen, bei denen Sie z. B. einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden, anstatt ihn sofort verschwinden zu lassen.

Bei der Animation von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den anfänglichen `display`-Wert in einem expliziten Keyframe (z. B. mit `0%` oder `from`) angeben. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) gibt Startwerte für Eigenschaften an, von denen Sie bei sichtbaren Übergängen übergehen möchten, wenn das animierte Element zum ersten Mal angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht ausgelöst, wenn das Element zum ersten Mal aktualisiert wird oder sich der Anzeigewert von `none` zu einem anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss auf der Deklaration der {{cssxref("transition-property")}}-Eigenschaft (oder der {{cssxref("transition")}}-Kurzform) gesetzt sein, um `display`-Übergänge zu ermöglichen.

Für Beispiele zum Übergang der `display`-Eigenschaft siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` für ein Element entfernt es aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommenelemente nicht mehr von Screenreader-Technologie angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es jedoch weiterhin für unterstützende Technologien wie Screenreader verfügbar zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheit-Baum ausblendet, werden Elemente, die ausgeblendet sind, aber in sichtbaren Elementen über `aria-describedby`- oder `aria-labelledby`-Attribute referenziert werden, assistiver Technologie zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` (aber nicht dessen Nachkommen) aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element selbst nicht mehr von Screenreader-Technologie angekündigt wird. Dieses Verhalten ist laut der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) nicht korrekt.

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert die Änderung des `display`-Werts eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` dessen Darstellung im [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle von Screenreader-Technologie nicht mehr korrekt angekündigt wird.

- [Kurze Notiz darüber, was die CSS-display-Eigenschaften für die Semantik von Tabellen tun — Die Paciello-Gruppe](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.3](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Block-Container-Elemente, jeweils mit drei Inline-Kindern. Darunter befindet sich ein Dropdown-Menü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, um zu vergleichen, wie sich die verschiedenen Werte auf das Layout des Elements und seiner Kinder auswirken.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit die Auswirkungen der display-Werte leichter sichtbar sind.

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

Beachten Sie, dass einige Multi-Keyword-Werte zur Veranschaulichung hinzugefügt wurden, die den folgenden Äquivalenten entsprechen:

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

Weitere Beispiele finden Sie auf den Seiten der einzelnen Anzeige-Typen unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- SVG {{SVGAttr("display")}}-Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
