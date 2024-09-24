---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`display`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, z. B. [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren Anzeigetypen eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements an der [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind vollständig in ihren individuellen Spezifikationen definiert; zum Beispiel ist die Detailbeschreibung, was passiert, wenn `display: flex` erklärt wird, in der CSS Flexible Box Model-Spezifikation definiert.

{{EmbedInteractiveExample("pages/css/display.html")}}

## Syntax

```css
/* Vorgefertigte Werte */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* Box-Erzeugung */
display: none;
display: contents;

/* Mehrfach-Schlüsselwort-Syntax */
display: block flex;
display: block flow;
display: block flow-root;
display: block grid;
display: inline flex;
display: inline flow;
display: inline flow-root;
display: inline grid;

/* Andere Werte */
display: table;
display: table-row; /* Alle Tabelelemente haben einen entsprechenden CSS-Display-Wert */
display: list-item;

/* Globale Werte */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

Die CSS-`display`-Eigenschaft wird mittels Schlüsselwortwerten spezifiziert.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter legen den äußeren Anzeigetyp des Elements fest, der im Wesentlichen seine Rolle im Flow-Layout ist:

    - `block`
      - : Das Element erzeugt eine Blockbox, die sowohl vor als auch nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
    - `inline`
      - : Das Element generiert eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, auf eine Display-Eigenschaft treffen, die nur einen **äußeren** Wert hat (z. B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, könnten Sie die Ein-Wert-Syntax verwenden, zum Beispiel könnte `display: inline flex` das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display) für weitere Informationen.

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, welcher den Formatierungskontext festlegt, in dem seine Inhalte angeordnet werden (angenommen, es ist kein ersetztes Element):

    - `flow`

      - : Das Element ordnet seine Inhalte mit dem Flow-Layout (Block-und-Inline-Layout) an.

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den Formatierungskontext seines Elternteils.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und den Ort des Formatierungsursprungs definiert.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine block-level Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Element und ordnet seine Inhalte gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Block-Element und ordnet seine Inhalte gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Element und ordnet seine Inhalte entsprechend dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, auf eine Display-Eigenschaft treffen, die nur einen **inneren** Wert hat (z. B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z. B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Listen-Item-Inline-Box.

Ein einzelner Wert von `list-item` wird bewirken, dass sich das Element wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und den `flow`- oder `flow-root`-{{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet.
> Wenn kein äußerer Wert angegeben ist, wird die Hauptbox einen äußeren Anzeigetyp von `block` haben.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur, mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Dieser Abschnitt definiert diese "internen" Anzeigewerte, die nur in diesem bestimmten Layout-Modus Bedeutung haben.

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

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spec definiert, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte - Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf Ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Deaktiviert die Anzeige eines Elements, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existieren würde). Alle nachgeordneten Elemente haben ebenfalls ihre Anzeige deaktiviert.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, jedoch ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Einzelschlüsselwort, vorgefertigte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layout-Modus erfordert.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit umgebendem Inhalt wie eine einzelne Inline-Box fließt (verhält sich ähnlich wie ein ersetztes Element).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`

      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box anstelle einer Block-Level-Box. Innerhalb der Table-Box befindet sich ein Block-Level-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Element und ordnet seine Inhalte gemäß dem Flexbox-Modell an.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Element und ordnet seine Inhalte gemäß dem Grid-Modell an.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren.
Die Einzelschlüsselwortwerte (vorgefertigte `<display-legacy>`-Werte) werden zur Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem veralteten Einzelwert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im Leitfaden [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Global

```css
/* Globale Werte */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die einzelnen Seiten für die verschiedenen Arten von Werten, die `display` angenommen kann, bieten mehrere Beispiele dieser Werte in Aktion - siehe den [Syntax](#syntax)-Abschnitt. Zusätzlich dazu finden Sie das folgende Material, das die verschiedenen Werte von `display` ausführlich behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuern der Verhältnis von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meistern der Umbruchsteuerung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Auto-Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS Grid-Layout und progressive Verbesserung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Gemeinsame Layouts mit Grids umsetzen](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animieren von Display

Unterstützende Browser [animieren](/de/docs/Web/CSS/CSS_animated_properties#discrete) `display` mit einem diskreten Animationstyp. Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten um 50 % der Animation wechselt.

Es gibt eine Ausnahme, wenn zu oder von `display: none` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert auf `block` bei `0%` der Animationsdauer umgeschaltet, damit er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert auf `none` bei `100%` der Animationsdauer umgeschaltet, damit er während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich für das Erstellen von Eingangs-/Ausgangsanimationen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, ihn aber mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden lassen möchten, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den Start-`display`-Wert in einem expliziten Schlüsselbild angeben (zum Beispiel mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Startwerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements ausgehend eine Übergangswerte wollen. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stil-Update eines Elements ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder in der {{cssxref("transition")}}-Abkürzung) festgelegt werden, um `display`-Übergänge zu ermöglichen.

Für Beispiele zum Übergang der `display`-Eigenschaft siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` auf einem Element entfernt es aus dem [Zugänglichkeitstree](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dadurch werden das Element und alle seine Nachkommen von Bildschirmlesetechnologien nicht mehr angekündigt.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, aber dennoch für unterstützende Technologien wie Bildschirmleser verfügbar zu machen.

Obwohl `display: none` Inhalte aus dem Zugänglichkeitstree ausblendet, werden Elemente, die verborgen sind, aber von sichtbaren Elementen mittels `aria-describedby` oder `aria-labelledby`-Attributen referenziert werden, unterstützenden Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Zugänglichkeitstree](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) (aber Nachkommen bleiben). Dies führt dazu, dass das Element selbst von Bildschirmlesetechnologien nicht mehr angekündigt wird. Dies ist inkorrektes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Mehr barrierefreies Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird durch das Ändern des `display`-Werts eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` dessen Darstellung im [Zugänglichkeitstree](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) verändert. Dadurch wird die Tabelle nicht mehr ordnungsgemäß von Bildschirmlesetechnologien angekündigt.

- [Kurzer Hinweis darauf, was CSS-Display-Eigenschaften mit Tabellensemantik machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN-Verständnis von WCAG, Leitlinie 1.3-Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis Erfolgskriterium 1.3.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Display-Werten

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und das ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, damit es einfacher ist, die Wirkung der Display-Werte zu sehen.

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
    <option>inline</option>
    <option>inline-block</option>
    <option>inline flow-root</option>
    <option>none</option>
    <option>flex</option>
    <option>inline-flex</option>
    <option>inline flex</option>
    <option>grid</option>
    <option>inline-grid</option>
    <option>inline grid</option>
    <option>table</option>
    <option>block table</option>
    <option>list-item</option>
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

Beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die folgende Entsprechungen haben:

- `inline-block` = `inline flow-root`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`
- `table` = `block table`

Sie finden weitere Beispiele in den Seiten für jeden separaten Display-Datentyp unter [Gruppierte Werte](#gruppierte_werte)

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
