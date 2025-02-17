---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`display`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_display/flow_layout) behandelt wird, sowie das Layout, das für seine Kinder verwendet wird, wie z. B. [Flow-Layout](/de/docs/Web/CSS/CSS_display/flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal setzt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_display/flow_layout); der innere Typ legt das Layout von Kinder-Elementen fest. Einige Werte von `display` sind vollständig in eigenen individuellen Spezifikationen definiert; zum Beispiel ist das Detail dessen, was passiert, wenn `display: flex` deklariert wird, in der Spezifikation des CSS Flexible Box Models beschrieben.

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

  - : Diese Schlüsselwörter legen den äußeren Display-Typ des Elements fest, das heißt im Wesentlichen seine Rolle im Flow-Layout:

    - `block`
      - : Das Element erzeugt eine Block-Box, die sowohl vor als auch nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, eine `display`-Eigenschaft mit nur einem **äußeren** Wert (z. B. `display: block` oder `display: inline`) vorfinden, wird der innere Wert auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden. Beispielsweise könnte `display: inline flex` mit einem Fallback wie dem folgenden verwendet werden:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Multi-Keyword-Syntax mit CSS-Display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter legen den inneren Display-Typ des Elements fest, der definiert, in welchem Formatierungskontext seine Inhalte ausgelegt werden (sofern es sich um ein nicht ersetzbares Element handelt):

    - `flow`

      - : Das Element legt seine Inhalte unter Verwendung des Flow-Layouts (Block- und Inline-Layout) an.

        Wenn sein äußerer Display-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, stellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte dar oder integriert seine Inhalte in seinen übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt, wodurch der Formatierungspunkt definiert wird.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, auf eine `display`-Eigenschaft treffen, die nur einen **inneren** Wert hat (z. B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z. B. `display: block flex` und `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Inline-Box für das Listenelement.

Ein einzelner Wert von `list-item` bewirkt, dass das Element sich wie ein Listenelement verhält. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und dem Schlüsselwort `flow` oder `flow-root` aus {{CSSxRef("&lt;display-inside&gt;")}} kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Keyword-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeige-Typ von `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur mit verschiedenen Rollen, die ihre Kinder und Nachfahren ausfüllen können.
    Dieser Abschnitt definiert diese "internen" Display-Werte, die nur innerhalb dieses bestimmten Layout-Modus Bedeutung haben.

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

### Box

- {{CSSxRef("&lt;display-box&gt;")}}

  - : Diese Werte definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.

    - `contents`

      - : Diese Elemente erzeugen keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Beachten Sie, dass die Spezifikation in CSS Display Level 3 beschreibt, wie sich der Wert `contents` auf "ungewöhnliche Elemente" auswirkt – Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Deaktiviert die Anzeige eines Elements, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existiert). Auch alle Nachfahren-Elemente haben ihre Anzeige deaktiviert.
        Um ein Element den Platz einnehmen zu lassen, den es normalerweise beanspruchen würde, ohne tatsächlich etwas darzustellen, verwenden Sie stattdessen die Eigenschaft {{CSSxRef("visibility")}}.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : In CSS 2 wurde eine Ein-Wort-, vorgefertigte Syntax für die `display`-Eigenschaft verwendet, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten des gleichen Layout-Modus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit umgebendem Inhalt als eine einzige Inline-Box geflossen wird (sich ähnlich wie ein ersetzbares Element verhaltend).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`

      - : Der Wert `inline-table` hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-Element vom Typ {{HTMLElement("table")}}, jedoch als Inline-Box statt als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Flexbox-Modell an.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Grid-Modell an.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Multi-Keyword-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **äußere** und **innere** Anzeige-Typen explizit zu definieren.
Die Ein-Wort-Werte (vorgefertigte `<display-legacy>`-Werte) werden zur Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt angeben:

```css
.container {
  display: inline flex;
}
```

Das kann auch mit dem alten einfachen Wert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie in der Anleitung [Verwendung der Multi-Keyword-Syntax mit CSS-Display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display).

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die für `display` festgelegt werden können, enthalten mehrere Beispiele für diese Werte in Aktion – siehe den Abschnitt [Syntax](#syntax). Siehe ergänzend die folgenden Materialien, die die verschiedenen Werte von `display` ausführlich behandeln.

### Multi-Keyword-Werte

- [Verwendung der Multi-Keyword-Syntax mit CSS-Display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Overflow](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle für Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Ausrichtung von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Umsetzung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animation der Anzeige

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten 50% der Animation hin- und herwechselt.

Es gibt eine Ausnahme, wenn die Animation zu oder von `display: none` erfolgt. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt während der gesamten Animation angezeigt wird. Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er während der gesamten Animation sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er während der gesamten Animation sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausblendeffekte zu erstellen, bei denen ein Container aus dem DOM mit `display: none` entfernt werden soll, jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) ausgeblendet wird, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den Start-`display`-Wert in einem expliziten Keyframe angeben (z. B. mithilfe von `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Startwerte für Eigenschaften, von denen Sie übergehen möchten, wenn das animierte Element zum ersten Mal angezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht beim ersten Stil-Update eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Kurzfassung) angegeben werden, um `display`-Übergänge zu aktivieren.

Beispiele für den Übergang der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachfahren nicht mehr von Screenreadern angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative die Verwendung [einer Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/), um es visuell vom Bildschirm zu entfernen, es aber dennoch assistiven Technologien wie Screenreadern zugänglich zu machen.

Obwohl `display: none` Inhalte aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die versteckt sind, jedoch von sichtbaren Elementen über `aria-describedby`- oder `aria-labelledby`-Attribute referenziert werden, assistiven Technologien zugänglich gemacht.

### display: contents

Bei aktuellen Implementierungen in einigen Browsern werden Elemente mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) entfernt (aber Nachfahren bleiben erhalten). Dies führt dazu, dass das Element selbst nicht mehr von Screenreadern angekündigt wird. Dieses Verhalten entspricht jedoch nicht der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert die Änderung des `display`-Wertes eines {{HTMLElement("table")}}-Elements auf `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle nicht mehr richtig von Screenreadern angekündigt wird.

- [Kurze Notiz zu den Auswirkungen von CSS-Display-Eigenschaften auf Tabellen-Semantik – The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der display-Werte

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, jedes mit drei Inline-Kindern. Darunter haben wir ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, um die Auswirkungen der verschiedenen Werte auf das Layout des Elements und seiner Kinder zu vergleichen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, um die Auswirkungen der Display-Werte leichter sichtbar zu machen.

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

Beachten Sie, dass einige Multi-Keyword-Werte zur Veranschaulichung hinzugefügt wurden, die folgende Entsprechungen haben:

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

Weitere Beispiele finden Sie auf den Seiten für jeden separaten Anzeige-Typ unter [Gruppierte Werte](#gruppierte_werte).

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
