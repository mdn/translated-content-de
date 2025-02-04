---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`display`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie zum Beispiel [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal legt die **`display`** Eigenschaft die inneren und äußeren _Anzeigetypen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; beispielsweise sind die Einzelheiten, was passiert, wenn `display: flex` deklariert wird, in der CSS Flexible Box Model Spezifikation definiert.

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

Die CSS-Eigenschaft `display` wird mithilfe von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeigetyp des Elements, der im Wesentlichen seine Rolle im Flow-Layout ist:

    - `block`
      - : Das Element generiert eine Block-Box und erzeugt Zeilenumbrüche sowohl vor als auch nach dem Element, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile erscheinen, wenn dort Platz ist.

> [!NOTE]
> Wenn Browser, die die Multi-Schlüsselwort-Syntax unterstützen, auf eine Display-Eigenschaft stoßen, die nur einen **äußeren** Wert hat (z. B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden, zum Beispiel könnte `display: inline flex` den folgenden Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, der den Typ des Formatierungskontextes definiert, in dem seine Inhalte angeordnet werden (vorausgesetzt, es ist ein nicht ersetzt Element):

    - `flow`

      - : Das Element ordnet seine Inhalte mit dem Flow-Layout (Block-und-Inline-Layout) an.

        Wenn sein äußerer Anzeigetyp `inline` ist und es in einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und definiert, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}} Elemente. Es definiert eine Block-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Element und ordnet seinen Inhalt entsprechend dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Block-Element und ordnet seinen Inhalt entsprechend dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt entsprechend dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}} Elemente.

> [!NOTE]
> Wenn Browser, die die Multi-Schlüsselwort-Syntax unterstützen, auf eine Display-Eigenschaft stoßen, die nur einen **inneren** Wert hat (z. B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z. B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element generiert eine Block-Box für den Inhalt und eine separate Listen-Item-Inline-Box.

Ein einzelner Wert von `list-item` führt dazu, dass das Element sich wie ein Listenpunkt verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Schlüsselwort-Syntax unterstützen, wird es standardmäßig auf `flow` gesetzt, wenn kein innerer Wert angegeben ist.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeige-Werte, die nur innerhalb dieses speziellen Layout-Modus Bedeutung haben.

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

      - : Diese Elemente erzeugen von sich aus keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation definiert, wie sich der `contents` Wert auf "ungewöhnliche Elemente" auswirken sollte - Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden, wie z. B. ersetzte Elemente. Weitere Einzelheiten finden Sie unter [Anhang B: Effekte von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existieren würde). Alle Nachkommenelemente haben ebenfalls ihre Anzeige abgeschaltet.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, aber nichts tatsächlich anzuzeigen, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Ein-Schlüsselwort, vorgefertigte Syntax für die `display` Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layout-Modus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit umgebenden Inhalten als wäre es eine einzelne Inline-Box geflossen wird (sich wie ein ersetztes Element verhält).

        Es ist gleichwertig mit `inline flow-root`.

    - `inline-table`

      - : Der `inline-table` Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}} Element, aber als Inline-Box und nicht als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist gleichwertig mit `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt entsprechend dem Flexbox-Modell an.

        Es ist gleichwertig mit `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt entsprechend dem Grid-Modell an.

        Es ist gleichwertig mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Multi-Schlüsselwort-Syntax für Werte, die Sie mit der `display` Eigenschaft verwenden können, um explizit **äußere** und **innere** Anzeige zu definieren.
Die Einzel-Schlüsselwort-Werte (vorgefertigte `<display-legacy>` Werte) werden für die Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt festlegen:

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

Für weitere Informationen zu diesen Änderungen siehe den [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display) Leitfaden.

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die individuellen Seiten für die verschiedenen Typen von Werten, die `display` auf sich haben kann, enthalten mehrere Beispiele dieser Werte in Aktion - siehe den [Syntax](#syntax) Abschnitt. Zusätzlich beachten Sie bitte das folgende Material, das die verschiedenen Werte von display ausführlich behandelt.

### Multi-Schlüsselwort-Werte

- [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block-und-Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [Grundlagen der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuern von Verhältnissen von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meistern der Flex-Items-Verpackung](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Anordnung von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundlagen des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS Grid-Layout und Progressive Enhancement](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Realisierung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animation von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zwischen zwei Werten um 50% wechselt.

Es gibt eine Ausnahme, die ist, wenn `display: none` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) animiert wird, ändert sich der Wert bei `0%` der Animationsdauer auf `block`, sodass er während der Animation sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` animiert wird, ändert sich der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der Animation sichtbar ist.

Dieses Verhalten ist nützlich für Erscheinen/Verschwinden-Animationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen, ihn jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den startenden `display` Wert in einem expliziten Keyframe angeben (zum Beispiel mit `0%` oder `from`). Weitere Informationen finden Sie unter [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Startwerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements wechseln möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stilupdate eines Elements ausgelöst oder wenn sich der `display` Typ von `none` in einen anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss für die Deklaration {{cssxref("transition-property")}} (oder die {{cssxref("transition")}} Kurzform) aktiviert werden, um `display` Übergänge zu ermöglichen.

Weitere Beispiele für die Übergangsanwendung der `display` Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display` Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dadurch wird das Element und alle seine Nachkommen-Elemente nicht mehr von Bildschirmlesetechnologie angekündigt.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative die Verwendung [einer Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/), um es visuell vom Bildschirm zu entfernen, es jedoch assistiven Technologien wie Bildschirmlesegeräten zur Verfügung zu stellen.

Während `display: none` Inhalte aus dem Barrierefreiheit-Baum ausblendet, werden Elemente, die versteckt sind, aber von sichtbaren Elementen durch `aria-describedby` oder `aria-labelledby` Attribute referenziert werden, assistiven Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display` Wert von `contents` (aber Nachkommen bleiben). Dies führt dazu, dass das Element selbst nicht mehr von Bildschirmlesegeräten angekündigt wird. Dies ist falsches Verhalten nach der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern ändert die Änderung des `display` Werts eines {{HTMLElement("table")}} Elements in `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle nicht mehr ordnungsgemäß von Bildschirmlesetechnologie angekündigt wird.

- [Kurze Notiz darüber, was CSS-Display-Eigenschaften mit Tabellensemantik machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Display-Wertvergleich

In diesem Beispiel haben wir zwei Block-Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das Ihnen erlaubt, verschiedene `display` Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern hinzugefügt, damit es leichter ist, den Effekt der Anzeigewerte zu sehen.

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

Beachten Sie, dass einige Multi-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die folgende Entsprechungen haben:

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
- SVG {{SVGAttr("display")}} Attribut
- [Block-und-Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
