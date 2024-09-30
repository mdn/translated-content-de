---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`display`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie zum Beispiel [Flusslayout](/de/docs/Web/CSS/CSS_flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal legt die **`display`** Eigenschaft die inneren und äußeren _Anzeigearten_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flusslayout](/de/docs/Web/CSS/CSS_flow_layout); der innere Typ bestimmt das Layout der Kinder. Einige Werte von `display` sind in ihren eigenen Spezifikationen detailliert definiert; zum Beispiel wird das Verhalten bei der Deklaration von `display: flex` in der CSS Flexible Box Model Spezifikation definiert.

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

Die CSS `display` Eigenschaft wird unter Verwendung von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeigetyp des Elements, im Wesentlichen seine Rolle im Flusslayout:

    - `block`
      - : Das Element erzeugt eine Block-Box, die vor und nach dem Element Zeilenumbrüche erzeugt, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn dort Platz ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Display-Eigenschaft mit nur einem **äußeren** Wert (z.B. `display: block` oder `display: inline`) treffen, wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die einwertige Syntax verwenden, zum Beispiel könnte `display: inline flex` das folgende Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, der den Typ des Formatierungskontextes definiert, in dem seine Inhalte ausgelegt werden (unter der Annahme, dass es sich um ein nicht ersetztes Element handelt):

    - `flow`

      - : Das Element legt seine Inhalte mithilfe von Flusslayout (Block-und Inline-Layout) aus.

        Wenn sein äußerer Anzeigetyp `inline` ist und es in einem Block- oder Inline-Formatierungskontext beteiligt ist, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und ob es selbst in einem Block- oder Inline-Formatierungskontext beteiligt ist, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den elterlichen Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert, der festlegt, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}} Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) aus.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) aus.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt entsprechend dem Ruby-Formatierungsmodell aus. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}} Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Display-Eigenschaft mit nur einem **inneren** Wert (z.B. `display: flex` oder `display: grid`) treffen, wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate listenelementInline-Box.

Ein einzelner Wert von `list-item` wird dazu führen, dass das Element sich wie ein Listenpunkt verhält. Dies kann mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, er standardmäßig auf `flow` gesetzt. Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe innere Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können. Dieser Abschnitt definiert diese "internen" Displaywerte, die nur innerhalb dieses bestimmten Layoutmodus Bedeutung haben.

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

  - : Diese Werte definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.

    - `contents`

      - : Diese Elemente produzieren selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation beschreibt, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte - Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden wie ersetzte Elemente. Siehe [Anhang B: Effekte von display: contents auf Ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für mehr Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, sodass es keinen Effekt auf das Layout hat (das Dokument wird so gerendert, als ob das Element nicht existiert). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, ohne etwas tatsächlich darzustellen, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

### Vorgefertigt

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine ein-Schlüsselwort, vorgefertigte Syntax für die `display` Eigenschaft, die separate Schlüsselwörter für Block-Level und Inline-Level Varianten des gleichen Layoutmodus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Blockbox, die mit umgebendem Inhalt geflossen wird, als wäre es eine einzelne Inline-Box (verhält sich ähnlich wie ein ersetztes Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`

      - : Der `inline-table` Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}}-Element, aber als Inline-Box und nicht als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt entsprechend dem Flexbox-Modell aus.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt entsprechend dem Grid-Modell aus.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display` Eigenschaft verwenden können, um **äußere** und **innere** Anzeige explizit zu definieren. Die ein-Schlüsselwort-Werte (vorgefertigte `<display-legacy>` Werte) werden zur Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mithilfe von zwei Werten einen inline Flex Container wie folgt angeben:

```css
.container {
  display: inline flex;
}
```

Dies kann auch unter Verwendung des alten Einzelwertes angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Für mehr Informationen über diese Änderungen siehe den [Leitfaden zur Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die mit `display` festgelegt werden können, enthalten mehrere Beispiele dieser Werte in Aktion — siehe den Abschnitt [Syntax](#syntax). Zusätzlich finden Sie folgendes Material, das die verschiedenen Werte von display ausführlich behandelt.

### Mehrfach-Schlüsselwertige Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS Flusslayout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Flusslayout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuerung der Verhältnisse von flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meisterung des Verpackens von flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Reihenfolge von flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundlegende Konzepte von Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS-Grid-Layout und progressive Verbesserung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Realisierung von gängigen Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animation von display

Unterstützende Browser ([Browser-Kompatibilität](#browser-kompatibilität)) animieren `display` mit [diskretem Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zwischen zwei Werten bei 50% umspringt.

Es gibt eine Ausnahme, wenn auf oder von `display: none` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er während der gesamten Zeit sichtbar ist.

Dieses Verhalten ist nützlich für die Erstellung von Ein- und Ausblendeanimationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, ihn aber mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden möchten, anstatt ihn sofort verschwinden zu lassen.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den Startdisplaywert in einem expliziten Keyframe bereitstellen (zum Beispiel mit `0%` oder `from`). Weitere Informationen finden Sie unter [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Startwerte für Eigenschaften, von denen Sie ausgehend animieren möchten, wenn das animierte Element zum ersten Mal angezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements ausgelöst oder wenn der `display`-Typ von `none` auf einen anderen Typ geändert wird.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss in der {{cssxref("transition-property")}} Deklaration (oder dem {{cssxref("transition")}} Shorthand) gesetzt werden, um `display`-Übergänge zu aktivieren.

Weitere Beispiele für das Überblenden der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Werts von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommen nicht mehr von Sprachausgabetechnologie angekündigt werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es aber immer noch assistierenden Technologien wie Screenreadern zur Verfügung zu stellen.

Während `display: none` Inhalt aus dem Barrierefreiheitsbaum ausblendet, werden Elemente, die verborgen sind, aber von sichtbaren Elementen über die Attribute `aria-describedby` oder `aria-labelledby` referenziert werden, assistierenden Technologien zugänglich gemacht.

### display: contents

Derzeitige Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) (aber Nachkommen bleiben). Dies führt dazu, dass das Element selbst nicht mehr von Sprachausgabetechnologie angekündigt wird. Dies ist ein falsches Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert die Änderung des `display`-Werts eines {{HTMLElement("table")}} Elements auf `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle nicht mehr ordnungsgemäß von Sprachausgabetechnologie angekündigt wird.

- [Kurze Notiz, was CSS-Display-Eigenschaften mit Tabellensemantik machen — Die Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Verborgener Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### display Wertvergleich

In diesem Beispiel haben wir zwei Block-Container-Elemente, jedes mit drei Inline-Kindern. Darunter befindet sich ein Auswahlmenü, mit dem Sie verschiedene `display`-Werte auf die Container anwenden können, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und das ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern eingefügt, damit es leichter zu sehen ist, welchen Effekt die display-Werte haben.

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

Beachten Sie, dass einige Mehrfach-Schlüsselwertwerte zur Veranschaulichung hinzugefügt wurden, die folgende Äquivalenzen haben:

- `inline-block` = `inline flow-root`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`
- `table` = `block table`

Weitere Beispiele finden Sie auf den Seiten zu jedem separaten Display-Datentyp unter [Gruppierte Werte](#gruppierte_werte)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
