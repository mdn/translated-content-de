---
title: min-height
slug: Web/CSS/min-height
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`min-height`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Mindesthöhe eines Elements. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/used_value) der {{cssxref("height")}} Eigenschaft kleiner wird als der für `min-height` angegebene Wert.

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
  - : Definiert die `min-height` als Prozentsatz der Höhe des umgebenden Blocks.
- `auto`
  - : Der Browser berechnet und wählt eine `min-height` für das angegebene Element aus.
- `max-content`
  - : Die intrinsische bevorzugte `min-height`.
- `min-content`
  - : Die intrinsische minimale `min-height`.
- `fit-content`
  - : Nutzt den verfügbaren Raum, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content` Formel mit dem verfügbaren Raum ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die Mindesthöhe der [Margin Box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Höhe seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Sie versucht, die Margin Box den verfügbaren Raum im umgebenden Block ausfüllen zu lassen, und verhält sich in gewisser Weise ähnlich wie `100%`, wobei die resultierende Größe auf die Margin Box, nicht auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box angewendet wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch` Wert und dessen Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von min-height

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

- [Das Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}
