---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`display`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt fest, ob ein Element als [Block- oder Inline-Box](/de/docs/Web/CSS/CSS_flow_layout) behandelt wird und welches Layout für seine Kinder verwendet wird, wie z.B. [Fluss-Layout](/de/docs/Web/CSS/CSS_flow_layout), [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout).

Formal legt die **`display`**-Eigenschaft die inneren und äußeren _Anzeigetypen_ eines Elements fest. Der äußere Typ bestimmt die Teilnahme eines Elements am [Fluss-Layout](/de/docs/Web/CSS/CSS_flow_layout); der innere Typ bestimmt das Layout der Kinder. Einige Werte von `display` sind vollständig in ihren eigenen individuellen Spezifikationen definiert; zum Beispiel ist das Detail dessen, was passiert, wenn `display: flex` deklariert wird, im CSS Flexible Box Model spezifiziert.

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

Die CSS `display`-Eigenschaft wird mit Schlüsselwortwerten angegeben.

## Gruppierte Werte

Die Schlüsselwortwerte können in sechs Wertkategorien gruppiert werden.

### Außen

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den äußeren Anzeigetyp des Elements, der im Wesentlichen seine Rolle im Fluss-Layout darstellt:

    - `block`
      - : Das Element erzeugt eine Block-Box, die sowohl vor als auch nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
    - `inline`
      - : Das Element erzeugt eine oder mehrere Inline-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Anzeige-Eigenschaft vorfinden, die nur einen **äußeren** Wert hat (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).

> [!NOTE]
> Um sicherzustellen, dass Layouts in älteren Browsern funktionieren, können Sie die Ein-Wert-Syntax verwenden, zum Beispiel könnte `display: inline flex` das folgende Fallback haben:
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Weitere Informationen finden Sie unter [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display).

### Innen

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Diese Schlüsselwörter spezifizieren den inneren Anzeigetyp des Elements, der den Formatierungskontext definiert, in dem sein Inhalt angeordnet ist (vorausgesetzt, es handelt sich um ein nicht ersetztes Element):

    - `flow`

      - : Das Element platziert seinen Inhalt unter Verwendung des Fluss-Layouts (Block- und Inline-Layout).

        Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

        Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt oder integriert seinen Inhalt in den übergeordneten Formatierungskontext.

    - `flow-root`
      - : Das Element erzeugt eine Block-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und definiert, wo die Formatierungswurzel liegt.
    - `table`
      - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
    - `flex`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
    - `grid`
      - : Das Element verhält sich wie ein Block-Level-Element und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
    - `ruby`
      - : Das Element verhält sich wie ein Inline-Level-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Wenn Browser, die die Mehrfach-Schlüsselwort-Syntax unterstützen, eine Anzeige-Eigenschaft vorfinden, die nur einen **inneren** Wert hat (z.B. `display: flex` oder `display: grid`), wird der äußere Wert auf `block` gesetzt (z.B. `display: block flex` und `display: block grid`).

### Listenelement

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Das Element erzeugt eine Block-Box für den Inhalt und eine separate Inline-Box für Listenpunkte.

Ein einzelner Wert von `list-item` bewirkt, dass das Element sich wie ein Listenelement verhält.
Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwort und den Schlüsselwörtern `flow` oder `flow-root` von {{CSSxRef("&lt;display-inside&gt;")}} kombiniert werden.

> [!NOTE]
> In Browsern, die die Mehrfach-Schlüsselwort-Syntax unterstützen, wird, wenn kein innerer Wert angegeben wird, standardmäßig `flow` verwendet.
> Wenn kein äußerer Wert angegeben wird, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

### Intern

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Einige Layoutmodelle wie `table` und `ruby` haben eine komplexe innere Struktur mit mehreren verschiedenen Rollen, die ihre Kinder und Nachkommen ausfüllen können.
    Dieser Abschnitt definiert jene "internen" Anzeige-Werte, die nur innerhalb dieses bestimmten Layoutmodus eine Bedeutung haben.

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

  - : Diese Werte definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.

    - `contents`

      - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der `contents`-Wert ungewöhnliche Elemente beeinflussen sollte – Elemente, die nicht rein durch CSS-Box-Konzepte wie ersetzte Elemente gerendert werden. Weitere Details finden Sie in [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    - `none`
      - : Schaltet die Anzeige eines Elements ab, sodass es keinen Einfluss auf das Layout hat (das Dokument wird rendert, als ob das Element nicht existieren würde). Alle Nachkommen-Elemente haben ebenfalls ihre Anzeige abgeschaltet.
        Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

### Vorgefertigt

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 verwendete eine Ein-Schlüsselwort, vorgefertigte Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level und Inline-Level Varianten desselben Layoutmodus erforderte.

    - `inline-block`

      - : Das Element erzeugt eine Block-Box, die mit umgebendem Inhalt geflossen wird, als wäre es eine einzelne Inline-Box (verhält sich ähnlich wie ein ersetztes Element).

        Es ist äquivalent zu `inline flow-root`.

    - `inline-table`

      - : Der `inline-table`-Wert hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box statt als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

        Es ist äquivalent zu `inline table`.

    - `inline-flex`

      - : Das Element verhält sich wie ein Inline-Level-Element und platziert seinen Inhalt gemäß dem Flexbox-Modell.

        Es ist äquivalent zu `inline flex`.

    - `inline-grid`

      - : Das Element verhält sich wie ein Inline-Level-Element und platziert seinen Inhalt gemäß dem Grid-Modell.

        Es ist äquivalent zu `inline grid`.

### Welche Syntax sollten Sie verwenden?

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) beschreibt eine Mehrfach-Schlüsselwort-Syntax für Werte, die Sie mit der `display`-Eigenschaft verwenden können, um **außen-** und **innen**-Ansicht explizit zu definieren.
Die Einzel-Schlüsselwort-Werte (vorgefertigte `<display-legacy>`-Werte) werden aus Gründen der Abwärtskompatibilität unterstützt.

Zum Beispiel können Sie mit zwei Werten einen Inline-Flex-Container wie folgt spezifizieren:

```css
.container {
  display: inline flex;
}
```

Dies kann auch mit dem alten Einzelwert spezifiziert werden:

```css
.container {
  display: inline-flex;
}
```

Weitere Informationen zu diesen Änderungen finden Sie im [Verwenden der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)-Leitfaden.

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Beschreibung

Die einzelnen Seiten für die verschiedenen Arten von Werten, die `display` haben kann, weisen mehrere Beispiele dieser Werte in Aktion auf — siehe den [Syntax](#syntax)-Abschnitt. Darüber hinaus sehen Sie das folgende Material, das die verschiedenen Werte von display eingehend behandelt.

### Mehrfach-Schlüsselwort-Werte

- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS-Fluss-Layout (display: block, display: inline)

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [Fluss-Layout und Schreibrichtungen](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Erläuterung der Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meistern der Umbruchregelungen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout mittels benannter Gitterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Gitter, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS-Grid-Layout und progressive Verbesserungen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Umsetzung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animieren von display

[Unterstützende Browser](#browser-kompatibilität) animieren `display` mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zwischen zwei Werten zu 50 % umschaltet.

Es gibt eine Ausnahme, wenn zu oder von `display: none` animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten so um, dass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er durchgehend sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er durchgehend sichtbar ist.

Dieses Verhalten ist nützlich für Ein-/Austrittsanimationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden, anstatt sofort unsichtbar zu werden.

Beim Animieren von `display` mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) müssen Sie den startenden `display`-Wert in einem expliziten Keyframe angeben (z.B. mit `0%` oder `from`). Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Beim Animieren von `display` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) sind zwei zusätzliche Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) bietet Ausgangswerte für Eigenschaften, von denen Sie beim ersten Anzeigen des animierten Elements einen Übergang starten möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge beim ersten Stil-Update eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ nicht ausgelöst.
- [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) muss auf der {{cssxref("transition-property")}}-Deklaration (oder der {{cssxref("transition")}}-Kurzform) gesetzt werden, um `display`-Übergänge zu ermöglichen.

Beispiele zum Umschalten der `display`-Eigenschaft finden Sie auf den Seiten [`@starting-style`](/de/docs/Web/CSS/@starting-style#examples) und [`transition-behavior`](/de/docs/Web/CSS/transition-behavior#examples).

## Barrierefreiheit

### display: none

Die Verwendung eines `display`-Wertes von `none` auf einem Element entfernt es aus dem [Barrierefreibaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommen nicht mehr durch Screenreader-Technologie bekanntgegeben werden.

Wenn Sie das Element visuell ausblenden möchten, ist eine barrierefreie Alternative die Verwendung [einer Kombination von Eigenschaften](https://webaim.org/techniques/css/invisiblecontent/), um es visuell vom Bildschirm zu entfernen, es aber dennoch assistiven Technologien wie Screenreadern zur Verfügung zu stellen.

Während `display: none` Inhalte aus dem Barrierefreibaum ausblendet, werden Elemente, die zwar versteckt, aber von sichtbaren Elementen von den Attributen `aria-describedby` oder `aria-labelledby` referenziert werden, assistiven Technologien zugänglich gemacht.

### display: contents

Aktuelle Implementierungen in einigen Browsern entfernen aus dem [Barrierefreibaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) jedes Element, dessen `display`-Wert `contents` ist (aber Nachkommen bleiben erhalten). Dies führt dazu, dass das Element selbst nicht mehr durch Screenreader-Technologie bekanntgegeben wird. Dies ist ein inkorrektes Verhalten gemäß der [CSS-Spezifikation](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabellen

In einigen Browsern wird das Ändern des `display`-Wertes eines {{HTMLElement("table")}}-Elements zu `block`, `grid` oder `flex` seine Darstellung im [Barrierefreibaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) ändern. Dies führt dazu, dass die Tabelle nicht mehr korrekt von der Screenreader-Technologie bekanntgegeben wird.

- [Kurze Notiz darüber, was CSS-Anzeigewerte mit Tabellensemantik machen — Die Paciello-Gruppe](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Versteckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Erklärungen zu Richtlinie 1.3](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C-Unterstützung zu WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Anzeige-Werten

In diesem Beispiel haben wir zwei Block-Level-Container-Elemente, von denen jedes drei Inline-Kinder hat. Darunter haben wir ein Auswahlmenü, das Ihnen erlaubt, verschiedene `display`-Werte auf die Container anzuwenden, sodass Sie vergleichen und kontrastieren können, wie die verschiedenen Werte die Layouts des Elements und seiner Kinder beeinflussen.

Wir haben {{cssxref("padding")}} und {{cssxref("background-color")}} auf den Containern und ihren Kindern hinzugefügt, um die Wirkung der Anzeigewerte leichter sichtbar zu machen.

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

Beachten Sie, dass einige Mehrfach-Schlüsselwort-Werte zur Veranschaulichung hinzugefügt wurden, die die folgenden Entsprechungen haben:

- `inline-block` = `inline flow-root`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`
- `table` = `block table`

Weitere Beispiele finden Sie auf den Seiten für jeden separaten Anzeigetyp unter [Gruppierte Werte](#gruppierte_werte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Einführung in die Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
