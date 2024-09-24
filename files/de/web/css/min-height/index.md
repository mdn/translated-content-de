---
title: min-height
slug: Web/CSS/min-height
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`min-height`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Mindesthöhe eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/used_value) der {{cssxref("height")}}-Eigenschaft kleiner wird als der für `min-height` angegebene Wert.

{{EmbedInteractiveExample("pages/css/min-height.html")}}

Die Höhe des Elements wird auf den Wert von `min-height` gesetzt, wann immer `min-height` größer ist als {{cssxref("max-height")}} oder {{cssxref("height")}}.

## Syntax

```css
/* <length> Wert */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--myAnchor block, 200px);

/* <percentage> Wert */
min-height: 10%;

/* Schlüsselwortwerte */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fit-content(20em);
min-height: stretch;

/* Globale Werte */
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
- `max-content`
  - : Die intrinsisch bevorzugte `min-height`.
- `min-content`
  - : Die intrinsische minimale `min-height`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), also `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, ersetzt durch das angegebene Argument, also `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die Mindesthöhe des [Margin-Box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Höhe seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es wird versucht, die Margin-Box so an den verfügbaren Platz im umgebenden Block anzupassen, dass sie gewissermaßen wie `100%` wirkt, jedoch die resultierende Größe auf die Margin-Box und nicht auf die Box anwendet, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um die von Browsern für den `stretch`-Wert verwendeten Aliasnamen und deren Implementierungsstatus zu überprüfen, sehen Sie sich den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der min-height

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

- [Das Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}
