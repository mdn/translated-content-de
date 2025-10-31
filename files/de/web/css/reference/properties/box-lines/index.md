---
title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Moduls-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien (Zeilen für horizontal orientierte Boxen, Spalten für vertikal orientierte Boxen) haben darf.

Standardmäßig legt eine horizontale Box ihre Kinder in einer einzigen Zeile aus, und eine vertikale Box legt ihre Kinder in einer einzigen Spalte aus. Dieses Verhalten kann mit der `box-lines` Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte angeordnet werden, und alle Elemente, die nicht passen, gelten als Überlauf.

Wenn jedoch ein Wert von `multiple` angegeben wird, darf die Box sich auf mehrere Linien (das heißt, mehrere Zeilen oder Spalten) ausdehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenige Linien wie möglich zu verteilen, indem alle Elemente falls nötig auf ihre minimalen Breiten oder Höhen reduziert werden.

Wenn die Kinder in einer horizontalen Box immer noch nicht in eine Zeile passen, nachdem sie auf ihre minimalen Breiten reduziert wurden, werden Kinder einzeln in eine neue Zeile verschoben, bis die verbleibenden Elemente in der vorherigen Zeile passen. Dieser Prozess kann sich auf eine beliebige Anzahl von Zeilen wiederholen. Wenn eine Zeile nur ein einziges Element enthält, das nicht passt, sollte das Element in dieser Zeile bleiben und aus der Box herausragen. Die späteren Zeilen werden in Boxen mit normaler Richtung unter den früheren Zeilen platziert und in Boxen mit umgekehrter Richtung darüber. Die Höhe einer Zeile ist die Höhe des größten Kind-Elements in dieser Zeile. Kein zusätzlicher Raum erscheint zwischen den Zeilen abgesehen von den Rändern der größten Elemente in jeder Zeile. Bei der Berechnung der Höhe einer Zeile sollten Ränder mit einem berechneten Wert von auto als Wert 0 behandelt werden.

Ein ähnlicher Prozess erfolgt für Kinder in einer vertikalen Box. Spätere Zeilen in Boxen mit normaler Richtung werden rechts von früheren Zeilen platziert und in Boxen mit umgekehrter Richtung links.

Sobald die Anzahl der Zeilen bestimmt wurde, strecken sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` nach Bedarf, um den verbleibenden Raum auf den Linien zu füllen. Jede Zeile berechnet Flexe unabhängig, so dass nur Elemente in dieser Zeile berücksichtigt werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} ausgewertet werden. Die Anordnung der Elemente in einer Zeile, wie durch die Eigenschaft {{CSSxRef("box-pack")}} spezifiziert, wird ebenfalls für jede Zeile unabhängig berechnet.

## Syntax

```css
/* Keyword values */
box-lines: single;
box-lines: multiple;

/* Global values */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

Die `box-lines` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `single`
  - : Box-Elemente werden in einer einzelnen Zeile oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehreren Zeilen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines` Ihnen, anzugeben, dass Sie möchten, dass die Kinder Ihres Flex-Containers auf mehrere Linien umschlagen. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne Flexbox-Äquivalent ist [`flex-wrap`](/de/docs/Web/CSS/Reference/Properties/flex-wrap).

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
