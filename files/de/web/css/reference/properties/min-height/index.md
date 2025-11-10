---
title: min-height
slug: Web/CSS/Reference/Properties/min-height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`min-height`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Mindesthöhe eines Elements. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der {{cssxref("height")}} Eigenschaft kleiner wird als der für `min-height` angegebene Wert.

{{InteractiveExample("CSS Demo: min-height")}}

```css interactive-example-choice
min-height: 150px;
```

```css interactive-example-choice
min-height: 7em;
```

```css interactive-example-choice
min-height: 75%;
```

```css interactive-example-choice
min-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum height. <br />If there is
    more content than the minimum the box will grow to the height needed by the
    content.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

Die Höhe des Elements wird auf den Wert von `min-height` gesetzt, wenn `min-height` größer ist als {{cssxref("max-height")}} oder {{cssxref("height")}}.

## Syntax

```css
/* <length> value */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--my-anchor block, 200px);

/* <percentage> value */
min-height: 10%;

/* Keyword values */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fit-content(20em);
min-height: stretch;

/* Global values */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: revert-layer;
min-height: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die `min-height` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `min-height` als Prozentsatz der Höhe des umgebenden Blocks.
- `auto`
  - : Der Browser berechnet und wählt eine `min-height` für das angegebene Element.
- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte `min-height`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `min-height`.
- {{cssxref("fit-content")}}
  - : Nutzt den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenz die Mindesthöhe der [Randbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es versucht, die Randbox so zu füllen, dass sie den verfügbaren Raum im umgebenden Block ausfüllt, was ähnlich wie `100%` funktioniert, aber die resultierende Größe auf die Randbox anwendet statt auf die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch`-Wert und dessen Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### min-height setzen

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("max-height")}}
- {{Cssxref("height")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("box-sizing")}}
- [Einführung in das CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
