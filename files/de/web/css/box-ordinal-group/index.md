---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS-Flexbox-Modul. Sie wurde in der Spezifikation ersetzt. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kindelemente des Flexbox zu einer Ordinalgruppe zu.

Ordinalgruppen können in Verbindung mit der {{CSSxRef("box-direction")}} Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Containers erscheinen. Wenn die berechnete `box-direction` normal ist, zeigt ein Container seine Elemente beginnend mit der niedrigsten nummerierten Ordinalgruppe an und stellt sicher, dass diese Elemente links (für horizontale Boxen) oder oben (für vertikale Boxen) im Container erscheinen. Elemente mit derselben Ordinalgruppe werden in der Reihenfolge dargestellt, in der sie im Quelldokumentbaum erscheinen. In der umgekehrten Richtung werden die Ordinalgruppen in derselben Reihenfolge überprüft, allerdings erscheinen die Elemente umgekehrt.

## Syntax

```css
/* <integer> Werte */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* Globale Werte */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

Die `box-ordinal-group` Eigenschaft wird als jede positive {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
box-ordinal-group =
  <integer>
```

## Beispiele

### Grundlegendes Anwendungsbeispiel

In einer älteren Version der Spezifikation wurde `box-ordinal-group` eingeführt, um die Anzeigeordnung der Flex-Kinder in einem Flex-Container zu ändern:

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  box-ordinal-group: 2;
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1;
  -moz-box-ordinal-group: 1;
  box-ordinal-group: 1;
}
```

Das moderne Flexbox-Äquivalent ist {{cssxref("order")}}.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
