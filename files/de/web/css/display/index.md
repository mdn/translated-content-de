---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: ee38092c2ec26061808a7fc684464d9f097eb678
---

{{CSSRef}}

Die **`display`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_flow_layout) behandelt wird und welcher Layout-Typ für seine Kinder verwendet wird, wie z.B. [flow layout](/de/docs/Web/CSS/CSS_flow_layout), [grid](/de/docs/Web/CSS/CSS_grid_layout) oder [flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formell legt die **`display`**-Eigenschaft die inneren und äußeren _Display-Typen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Flow-Layout](/de/docs/Web/CSS/CSS_flow_layout); der innere Typ legt das Layout der Kinder fest. Einige Werte von `display` sind in ihren eigenen individuellen Spezifikationen vollständig definiert; zum Beispiel sind die Details dessen, was passiert, wenn `display: flex` erklärt wird, in der CSS-Flexible-Box-Modellspezifikation definiert.

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

Die CSS-Eigenschaft `display` wird unter Verwendung von Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den äußeren Display-Typ des Elements, der im Wesentlichen seine Rolle im Flow-Layout festlegt:

    - `block`
      - : Das Element erzeugt eine Blockbox, die sowohl vor als auch nach dem Element Zeilenumbrüche erzeugt, wenn es im normalen Fluss ist.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn es Platz gibt.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, auf eine Display-Eigenschaft stoßen, die nur einen **äußeren** Wert hat (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts auf älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden. Zum Beispiel könnte `display: inline flex` folgendes Fallback haben
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Siehe [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display) für weitere Informationen.

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den inneren Display-Typ des Elements, der den Typ des Formatierungskontextes definiert, in dem sein Inhalt ausgelegt ist (vorausgesetzt, es handelt sich um ein nicht ersetztes Element):

    - `flow`

      - : Das Element legt seinen Inhalt unter Verwendung des Flow-Layouts (Block-und-Inline-Layout) aus.

        Wenn sein äußerer Display-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, dann generiert es eine Inline-Box. Andernfalls generiert es eine Blockbox.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt oder integriert seinen Inhalt in den übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Blockbox, die einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und den Punkt definiert, an dem die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine blocklevel Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) aus.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und legt seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) aus.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Ruby-Formatierungsmodell aus. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Multi-Keyword-Syntax unterstützen, auf eine Display-Eigenschaft stoßen, die nur einen **inneren** Wert hat (z.B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Blockbox für den Inhalt und eine separate Listenelement-Inline-Box.

Ein einzelner Wert von `list-item` lässt das Element sich wie ein Listenelement verhalten. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und dem `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwort kombiniert werden.

> [!NOTE]
> In Browsern, die die Multi-Keyword-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, der Standardwert `flow` verwendet.
> Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Display-Typ von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe interne Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen spielen können. Dieser Abschnitt definiert diese "internen" Display-Werte, die nur innerhalb dieses bestimmten Layout-Modus eine Bedeutung haben.

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
      - : Diese Elemente werden als anonyme Boxen generiert.
    - `ruby-text-container`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("rtc")}}-Elemente.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}

  - : Diese Werte definieren, ob ein Element überhaupt Display-Boxen erzeugt.

    - `contents`

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der `contents`-Wert "ungewöhnliche Elemente" beeinflussen sollte – Elemente, die nicht rein durch CSS-Boxen-Konzepte wiedergegeben werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    - `none`
      - : Schaltet die Anzeige eines Elements aus, so dass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existiert). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet. Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, jedoch ohne tatsächlich etwas darzustellen, verwenden Sie stattdessen die Eigenschaft {{CSSxRef("visibility")}}.

### Vorab zusammengesetzt

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Einzelschlüsselwort-Syntax für die `display`-Eigenschaft, die getrennte Schlüsselwörter für Block- und Inline-Varianten desselben Layout-Modus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Blockbox, die als ein einzelnes Inline-Element mit dem umgebenden Inhalt geflossen wird (verhält sich ähnlich wie ein ersetztes Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`

      - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box und nicht als Block-Level-Box. Innerhalb der Tabellen-Box ist ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Flexbox-Modell aus.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Level-Element und legt seinen Inhalt gemäß dem Grid-Modell aus.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Multi-Keyword-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um den **äußeren** und **inneren** Display explizit zu definieren. Die ein Keyword-Werte (vorgefertigte `<display-legacy>`-Werte) werden aus Gründen der Rückwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt angeben:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem vorab zusammengesetzten Einzelwert angegeben werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Leitfaden zur Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die einzelnen Seiten für die verschiedenen Typen von Werten, die auf `display` gesetzt werden können, enthalten zahlreiche Beispiele dieser Werte in Aktion – siehe den [Syntaxabschnitt](#syntax). Darüber hinaus finden Sie folgende Materialien, die die verschiedenen Werte von Display ausführlich behandeln.

### Multi-Keyword-Werte

- [Verwendung der Multi-Keyword-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS-Flow-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Erklärung von Formatierungskontexten](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuern von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meistern des Umschlingens von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Sortieren von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Das Verhältnis von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Das Verhältnis zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mit benannten Gitterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS-Grid-Layout und progressive Verbesserung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Verwirklichung häufiger Layouts mit Gittern](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animieren von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft zwischen zwei Werten 50% beim Animieren zwischen den beiden flippen wird.

Es gibt eine Ausnahme, wenn zu oder von `display: none` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten flippen, so dass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer zu `block` flippen, so dass es während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none` flippen, so dass es während der gesamten Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Eintritts- und Austrittsanimationen zu erstellen, bei denen Sie z.B. einen Container aus dem DOM mit `display: none` entfernen möchten, aber möchten, dass er mit [`opacity`](/de/docs/Web/CSS/opacity) ausblendet, anstatt sofort zu verschwinden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den Anfangs-`display`-Wert in einem expliziten Keyframe angeben (z.B. mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) gibt Startwerte für Eigenschaften an, von denen Sie aus übertragen möchten, wenn das animierte Element erstmals angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss auf der Deklaration {{cssxref("transition-property")}} (oder der Verkürzung {{cssxref("transition")}}) gesetzt werden, um `display`-Übergänge zu aktivieren.

Für Beispiele zur Umsetzung der `display`-Eigenschaft siehe die Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dies wird dazu führen, dass das Element und alle seine Nachkommenelemente von Bildschirmlesetechnologie nicht mehr angesagt werden.

Wenn Sie das Element visuell verbergen möchten, ist eine barrierefreiere Alternative, [eine Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/) zu verwenden, um es visuell vom Bildschirm zu entfernen, es jedoch für unterstützende Technologien wie Bildschirmleser verfügbar zu machen.

Obwohl `display: none` den Inhalt aus dem Barrierefreiheitsbaum entfernt, werden Elemente, die versteckt, aber von sichtbaren Elementen in deren `aria-describedby` oder `aria-labelledby` Attributen referenziert werden, unterstützenden Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) (aber die Nachkommen bleiben erhalten). Dies führt dazu, dass das Element selbst nicht mehr von Bildschirmlesetechnologie angesagt wird. Dies ist ein inkorrektes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Mehr barrierefreies Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern verändert das Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` seine Darstellung im [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass die Tabelle von Bildschirmlesetechnologie nicht mehr ordnungsgemäß angesagt wird.

- [Kurze Notiz darüber, was die CSS-Display-Eigenschaften mit Tabellensemantik machen — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckter Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Leitlinien 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von display-Werten

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, von denen jedes drei Inline-Kinder hat. Darunter befindet sich ein Auswahlelement, das es Ihnen ermöglicht, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte das Layout des Elements und das ihrer Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf die Container und ihre Kinder angewendet, sodass es leichter ist, den Effekt der Display-Werte zu sehen.

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

Beachten Sie, dass einige Multi-Keyword-Werte zur Illustration hinzugefügt wurden, die folgende Entsprechungen haben:

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

Weitere Beispiele finden Sie auf den Seiten für jeden separaten Display-Typ unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
