---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`display`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element als [Block oder Inline-Box](/de/docs/Web/CSS/CSS_display/flow_layout) behandelt wird und welches Layout für die Kinder verwendet wird, wie z.B. [Flow-Layout](/de/docs/Web/CSS/CSS_display/flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal setzt die **`display`** Eigenschaft die inneren und äußeren _Anzeige-Typen_ eines Elements. Der äußere Typ legt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_display/flow_layout) fest; der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind vollständig in ihren eigenen Spezifikationen definiert; zum Beispiel sind die Details, was bei der Deklaration von `display: flex` passiert, in der CSS Flexible Box Model Spezifikation definiert.

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

Die CSS `display` Eigenschaft wird mithilfe von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeige-Typ des Elements, der im Wesentlichen seine Rolle im Flow-Layout ist:

    - `block`
      - : Das Element erzeugt eine Blockbox, die Zeilenumbrüche sowohl vor als auch nach dem Element im normalen Fluss erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die keine Zeilenumbrüche vor oder nach sich erzeugen. Im normalen Fluss wird das nächste Element auf derselben Linie sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwortsyntax unterstützen, auf eine Display-Eigenschaft treffen, die nur einen **äußeren** Wert hat (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden. Zum Beispiel könnte `display: inline flex` das folgende Fallback haben:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrwortsyntax mit CSS Display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den inneren Anzeige-Typ des Elements, der den Typ des Formatierungskontextes definiert, in dem seine Inhalte angeordnet sind (vorausgesetzt, es handelt sich um ein nicht ersetztes Element):

    - `flow`

      - : Das Element legt seine Inhalte mit Flow-Layout (Block-und-Inline-Layout) fest.

        Wenn sein äußerer Anzeige-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Blockbox.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den Formatierungskontext des Elternteils.

    - `flow-root`
      - : Das Element erzeugt eine Blockbox, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) festlegt, der den Formatierungsursprung definiert.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}} Elemente. Es definiert eine Blockebenen-Box.
    - `flex`
      - : Das Element verhält sich wie ein Blockebenen-Element und ordnet seine Inhalte gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Blockebenen-Element und ordnet seine Inhalte gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inlineebenen-Element und ordnet seine Inhalte gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie das entsprechende HTML {{HTMLElement("ruby")}} Element.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwortsyntax unterstützen, auf eine Display-Eigenschaft treffen, die nur einen **inneren** Wert hat (z.B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Blockbox für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert `list-item` lässt das Element wie ein Listenelement verhalten.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwortsyntax unterstützen, wird standardmäßig `flow` als innerer Wert verwendet, wenn keiner angegeben ist.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachfahren ausfüllen können. Dieser Abschnitt definiert diese "internen" Display-Werte, die nur innerhalb dieses bestimmten Layoutmodus Bedeutung haben.

    - `table-row-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tbody")}} HTML Elemente.
    - `table-header-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("thead")}} HTML Elemente.
    - `table-footer-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tfoot")}} HTML Elemente.
    - `table-row`
      - : Diese Elemente verhalten sich wie {{HTMLElement("tr")}} HTML Elemente.
    - `table-cell`
      - : Diese Elemente verhalten sich wie {{HTMLElement("td")}} HTML Elemente.
    - `table-column-group`
      - : Diese Elemente verhalten sich wie {{HTMLElement("colgroup")}} HTML Elemente.
    - `table-column`
      - : Diese Elemente verhalten sich wie {{HTMLElement("col")}} HTML Elemente.
    - `table-caption`
      - : Diese Elemente verhalten sich wie {{HTMLElement("caption")}} HTML Elemente.
    - `ruby-base`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rb")}} HTML Elemente.
    - `ruby-text`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rt")}} HTML Elemente.
    - `ruby-base-container`
      - : Diese Elemente werden als anonyme Boxen erzeugt.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie {{HTMLElement("rtc")}} HTML Elemente.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}

  - : Diese Werte definieren, ob ein Element überhaupt Anzeigeboxen erzeugt.

    - `contents`

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudobox und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der `contents` Wert "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte dargestellt werden, wie ersetzte Elemente. Weitere Details finden Sie in [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Deaktiviert die Anzeige eines Elements, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existieren würde). Alle untergeordneten Elemente haben ebenfalls ihre Anzeige deaktiviert.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, jedoch ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Ein-Wort-Syntax für die `display` Eigenschaft, die separate Schlüsselwörter für Block- und Inlineebenen-Varianten desselben Layoutmodus erfordert.

    - `inline-block`

      - : Das Element erzeugt eine Blockbox, die mit umgebendem Inhalt geflossen wird, als wäre es eine einzelne Inline-Box (und verhält sich ähnlich wie ein ersetztes Element).

        Es ist gleichbedeutend mit `inline flow-root`.

    - `inline-table`

      - : Der `inline-table` Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}} Element, jedoch als Inline-Box, anstelle einer Blockebenen-Box. Innerhalb der Tabellenbox befindet sich ein Blockebenen-Kontext.

        Es ist gleichbedeutend mit `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inlineebenen-Element und ordnet seine Inhalte gemäß dem Flexbox-Modell an.

        Es ist gleichbedeutend mit `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inlineebenen-Element und ordnet seine Inhalte gemäß dem Grid-Modell an.

        Es ist gleichbedeutend mit `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrwortsyntax für Werte, die Sie mit der `display` Eigenschaft verwenden können, um den **äußeren** und **inneren** Anzeige-Typ explizit zu definieren.
Die Einzel-Schlüsselwortwerte (vorkomponierte `<display-legacy>` Werte) werden aus Gründen der Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt angeben:

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

Weitere Informationen zu diesen Änderungen finden Sie im [Leitfaden zur Verwendung der Mehrwortsyntax mit CSS Display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die mit `display` gesetzt werden können, bieten mehrere Beispiele, wie diese Werte in Aktion auftreten – siehe den [Syntax](#syntax) Abschnitt. Zusätzlich siehe das folgende Material, das die verschiedenen Display-Werte eingehend behandelt.

### Mehrwortwerte

- [Verwendung der Mehrwortsyntax mit CSS Display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschen der Umbruchfunktion von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasiertes Layout](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Rasterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichten von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Umsetzung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Display animieren

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Das bedeutet allgemein, dass die Eigenschaft beim Animieren zwischen zwei Werten während 50% der Animation umschaltet.

Es gibt eine Ausnahme, nämlich beim Animieren zu oder von `display: none`. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Ein Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) animiert wird, schaltet der Wert bei `0%` der Animationsdauer auf `block`, sodass es die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` animiert wird, schaltet der Wert bei `100%` der Animationsdauer auf `none`, sodass es die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich für Ein- und Ausstiegsanimationen, bei denen Sie z.B. einen Container mit `display: none` aus dem DOM entfernen möchten, jedoch möchten, dass er mit [`opacity`](/de/docs/Web/CSS/opacity) ausgeblendet wird, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den startenden `display` Wert in einem expliziten Keyframe angeben (z.B. mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) liefert Startwerte für Eigenschaften, von denen Sie aus beim ersten Anzeigen des animierten Elements überblenden möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stil-Update eines Elements oder beim Wechsel des `display` Typs von `none` zu einem anderen Typ ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}} Deklaration (oder der {{cssxref("transition")}} Kurzschreibweise) gesetzt werden, um `display` Übergänge zu ermöglichen.

Für Beispiele zur Überblendung der `display` Eigenschaft siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display` Werts von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachfahren von Technologien für das Lesen von Bildschirmen nicht mehr angesagt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine zugänglichere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es aber dennoch für unterstützende Technologien wie Bildschirmlesegeräte verfügbar zu machen.

Während `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die verborgen sind, aber von sichtbaren Elementen durch `aria-describedby` oder `aria-labelledby` Attribute referenziert werden, für unterstützende Technologien sichtbar gemacht.

### display: contents

Gegenwärtige Implementierungen in einigen Browsern entfernen jedes Element mit einem `display` Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) (aber die Nachfahren bleiben). Dies führt dazu, dass das Element selbst von Technologien für das Lesen von Bildschirmen nicht mehr angesagt wird. Dies ist falsches Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Zugänglicheres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern führt das Ändern des `display` Werts eines {{HTMLElement("table")}} Elements in `block`, `grid` oder `flex` dazu, dass seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) verändert wird. Dies führt dazu, dass die Tabelle von Technologien zur Bildschirmlesung nicht mehr ordnungsgemäß angesagt wird.

- [Kurze Notiz darüber, was CSS anzeigen Eigenschaften mit Tabellen-Semantiken machen — Die Paciello-Gruppe](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Verborgener Inhalt für bessere A11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN-Erklärung zu WCAG, Leitfaden 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Erklärung zum Erfolgskriterium 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Display-Werten

In diesem Beispiel haben wir zwei Blockebenen-Container-Elemente, von denen jedes drei Inline-Kinder hat. Darunter haben wir ein Auswahlmenü, mit dem Sie unterschiedliche `display` Werte auf die Container anwenden können, damit Sie vergleichen und gegenüberstellen können, wie die verschiedenen Werte das Layout des Elements und das seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern hinzugefügt, damit es einfacher ist, den Effekt der Anzeigewerte zu sehen.

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

Beachten Sie, dass einige Mehrwortwerte zur Illustration hinzugefügt wurden, die folgenden Äquivalenzen haben:

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
- SVG {{SVGAttr("display")}} Attribut
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
