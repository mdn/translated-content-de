---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die **`display`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_flow_layout) behandelt wird und welches Layout für dessen Kinder verwendet wird, wie z. B. [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal definiert die **`display`**-Eigenschaft den Innen- und Außen-Anzeigetyp (_display types_) eines Elements. Der Außentyp bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout); der Innentyp legt das Layout der Kinder fest. Einige `display`-Werte sind vollständig in ihren eigenen Spezifikationen definiert; z. B. werden die Details, die bei der Deklaration von `display: flex` auftreten, im CSS Flexible Box Model definiert.

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

### Outside (Außerhalb)

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter legen den äußeren Anzeigetyp eines Elements fest, der im Wesentlichen seine Rolle im Flow-Layout definiert:

    - `block`
      - : Das Element erzeugt eine Blockbox und erzeugt sowohl vor als auch nach dem Element Zeilenumbrüche, wenn es sich in normalem Fluss befindet.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element auf derselben Zeile platziert, sofern Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwortsyntax unterstützen, eine `display`-Eigenschaft mit nur einem **Außen**-Wert (z. B. `display: block` oder `display: inline`) vorfinden, wird der Innentyp auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts auf älteren Browsern funktionieren, können Sie die einwertige Syntax verwenden. Zum Beispiel könnte `display: inline flex` folgende Fallback-Definition enthalten:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Inside (Innerhalb)

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter bestimmen den inneren Anzeigetyp des Elements, der definiert, welchen Formatierungskontext seine Inhalte verwenden (vorausgesetzt, es handelt sich um kein ersetztes Element):

    - `flow`

      - : Das Element legt seine Inhalte mithilfe des Flow-Layouts (Block-und-Inline-Layout) aus.

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Blockbox.

        Abhängig von den Werten anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den Elternformatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Blockbox, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert, der die Wurzeln des Formats definiert.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) aus.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) aus.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Ruby-Formatierungsmodell aus. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwortsyntax unterstützen, eine `display`-Eigenschaft mit nur einem **Innen**-Wert (z. B. `display: flex` oder `display: grid`) vorfinden, wird der Außentyp auf `block` gesetzt (z. B. `display: block flex` und `display: block grid`).

### List Item (Listenelement)

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Blockbox für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert `list-item` bewirkt, dass das Element wie ein Listenelement behandelt wird. Dies kann in Kombination mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem `flow`- oder `flow-root`-{{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwortsyntax unterstützen, wird, wenn kein Innen-Wert angegeben ist, dieser standardmäßig auf `flow` gesetzt.
> Wenn kein Außen-Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Internal (Intern)

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachkommen übernehmen können. Dieser Abschnitt definiert diese "internen" Display-Werte, die nur innerhalb dieses bestimmten Layout-Modus eine Bedeutung haben.

    - `table-row-group`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("tbody")}}.
    - `table-header-group`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("thead")}}.
    - `table-footer-group`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("tfoot")}}.
    - `table-row`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("tr")}}.
    - `table-cell`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("td")}}.
    - `table-column-group`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("colgroup")}}.
    - `table-column`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("col")}}.
    - `table-caption`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("caption")}}.
    - `ruby-base`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("rb")}}.
    - `ruby-text`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("rt")}}.
    - `ruby-base-container`
      - : Diese Elemente werden als anonyme Boxen generiert.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("rtc")}}.

### Box (Box)

- {{CSSxRef("&lt;display-box&gt;")}}

  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen generiert.

    - `contents`

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Beachten Sie bitte, dass in der CSS Display Level 3-Spezifikation beschrieben wird, wie der Wert `contents` "ungewöhnliche Elemente" — Elemente, die nicht ausschließlich durch CSS-Box-Konzepte dargestellt werden, wie ersetzte Elemente — beeinflussen sollte. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keine Auswirkungen auf das Layout hat (das Dokument wird so gerendert, als existiere das Element nicht). Alle untergeordneten Elemente haben ebenfalls ihre Anzeige deaktiviert.
        Wenn ein Element den Platz einnehmen soll, den es normalerweise einnähme, ohne dass tatsächlich etwas angezeigt wird, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorzusammengesetzt

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Ein-Schlüsselwort-vorzusammengesetzte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layout-Modells erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Blockbox, die innerhalb des umgebenden Inhalts als einzelne Inline-Box dargestellt wird (ähnlich wie bei einem ersetzten Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`

      - : Der Wert `inline-table` hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-Element vom Typ {{HTMLElement("table")}}, jedoch als Inline-Box anstelle einer Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Flexbox-Modell aus.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Grid-Modell aus.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwortsyntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um den **äußeren** und **inneren** Anzeigetyp explizit zu definieren.
Die Einzel-Schlüsselwortwerte (vorgebundene `<display-legacy>`-Werte) werden aus Gründen der Abwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt angeben:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem vorgebundenen Einzelwert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)-Leitfaden.

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die individuellen Seiten für die verschiedenen Werte, die `display`-Eigenschaften annehmen können, beinhalten mehrere Beispiele dieser Werte in Aktion — siehe den Abschnitt [Syntax](#syntax). Darüber hinaus finden Sie die folgenden Materialien, in denen die verschiedenen Werte von display ausführlich behandelt werden.

### Mehrfach-Schlüsselwert

- [Using the multi-keyword syntax with CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Verhältnissteuerung von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschung des Umbruchs bei Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Anordnung von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Verhältnis von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verhältnis zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Zeilenbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Verwirklichung allgemeiner Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Anzeige animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zu 50 % zwischen zwei Werten umschaltet.

Eine Ausnahme tritt auf, wenn zu oder von `display: none` animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Beispielsweise:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, ändert sich der Wert zu `block` bei `0 %` der Animationsdauer, damit er die gesamte Zeit sichtbar bleibt.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, schaltet der Wert zu `none` bei `100 %` der Animationsdauer, damit er die gesamte Zeit sichtbar bleibt.

Dieses Verhalten ist nützlich, um Ein- und Ausstiegsanimationen zu erstellen, bei denen beispielsweise ein Container mit `display: none` aus dem DOM entfernt werden soll, jedoch mit [„opacity“](/de/docs/Web/CSS/opacity) ausgeblendet werden soll, anstatt sofort zu verschwinden.

Wenn `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird, müssen Sie den Anfangswert von `display` explizit in einem Schlüsselbild (z. B. mit `0 %` oder `from`) angeben. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Wird `display` mit [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) animiert, werden zwei zusätzliche Features benötigt:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Anfangswerte für Eigenschaften, von denen Sie die Transition auslösen möchten, wenn das animierte Element zuerst angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Transitions nicht durch die erste Stilaktualisierung eines Elements oder wenn der `display`-Typ von `none` zu einem anderen Typ wechselt, ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss auf der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Shortcut-Definition) gesetzt werden, um `display`-Transitions zu aktivieren.

Beispiele für die Transition der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Wenn ein `display`-Wert von `none` auf ein Element angewendet wird, wird dieses aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) entfernt. Dadurch wird das Element und alle seine Nachfahren nicht mehr von Technologien zur Bildschirmlesung angesagt.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, jedoch weiterhin für unterstützende Technologien wie Bildschirmlesegeräte verfügbar zu machen.

Während `display: none` Inhalt aus dem Barrierefreiheitsbaum ausblendet, bleiben Elemente, die ausgeblendet, aber von sichtbaren Elementen über `aria-describedby` oder `aria-labelledby`-Attribute referenziert werden, für unterstützende Technologien zugänglich.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) (aber Nachfahren bleiben erhalten). Dadurch wird das Element selbst nicht mehr von Technologien zur Bildschirmlesung angesagt. Dieses Verhalten ist laut der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents) inkorrekt.

- [Mehr barrierefreies Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern führt eine Änderung des `display`-Werts eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` zu einer Veränderung seiner Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dadurch wird die Tabelle nicht mehr korrekt von Technologien zur Bildschirmlesung angesagt.

- [Kurzer Hinweis, was CSS-Display-Eigenschaften mit Tabellensemantik machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Verborgener Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, von denen jedes drei Inline-Kinder enthält. Darunter befindet sich ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, um die Auswirkungen der unterschiedlichen Werte auf das Layout des Elements und seiner Kinder zu vergleichen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, um die Auswirkungen der `display`-Werte besser zu veranschaulichen.

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

Beachten Sie, dass einige Mehrfach-Schlüsselwertäquivalente der Illustration hinzugefügt wurden:

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

Weitere Beispiele finden Sie auf den Seiten für jeden separaten Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte).

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
