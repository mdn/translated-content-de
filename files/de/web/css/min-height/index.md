---
title: min-height
slug: Web/CSS/min-height
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`min-height`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt die Mindesthöhe eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) der {{cssxref("height")}}-Eigenschaft kleiner wird als der für `min-height` angegebene Wert.

{{EmbedInteractiveExample("pages/css/min-height.html")}}

Die Höhe des Elements wird auf den Wert von `min-height` gesetzt, wenn `min-height` größer ist als {{cssxref("max-height")}} oder {{cssxref("height")}}.

## Syntax

```css
/* <length> value */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--myAnchor block, 200px);

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
  - : Definiert die `min-height` als Prozentsatz der Höhe des umschließenden Blocks.
- `auto`
  - : Der Browser berechnet und wählt eine `min-height` für das angegebene Element aus.
- `max-content`
  - : Die intrinsisch bevorzugte `min-height`.
- `min-content`
  - : Die intrinsische minimale `min-height`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die minimale Höhe der [Margenbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Margenbox so zu erweitern, dass sie den verfügbaren Platz im umschließenden Block ausfüllt, und verhält sich in gewisser Weise ähnlich wie `100%`, wobei die resultierende Größe jedoch auf die Margenbox und nicht auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box angewendet wird.

    > [!NOTE]
    > Informationen zu Aliassen, die von Browsern für den Wert `stretch` verwendet werden, und zu dessen Implementierungsstatus finden Sie im Abschnitt [Browser-Kompatibilität](#browser_kompatibilität).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### min-height festlegen

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
- [Einführung in das CSS-basierte Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Modul
