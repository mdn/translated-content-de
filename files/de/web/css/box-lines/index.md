---
title: box-lines
slug: Web/CSS/box-lines
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexible-Box-Layout-Modul-Entwurfs. Es wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-lines`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bestimmt, ob die Box eine einzelne oder mehrere Linien (Zeilen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen) haben kann.

Standardmäßig legt eine horizontale Box ihre Kinder in einer einzigen Zeile an, und eine vertikale Box legt ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines`-Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte platziert werden, und alle Elemente, die nicht passen, werden als Überlauf betrachtet.

Wenn jedoch ein Wert von `multiple` angegeben wird, darf die Box sich auf mehrere Linien (das heißt, mehrere Zeilen oder Spalten) ausdehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenige Linien wie möglich zu verteilen, indem sie alle Elemente bei Bedarf auf ihre minimalen Breiten oder Höhen verkleinert.

Wenn die Kinder in einer horizontalen Box nach der Verkleinerung auf ihre Mindestbreiten immer noch nicht in eine Zeile passen, werden Kinder eins nach dem anderen auf eine neue Zeile verschoben, bis die verbleibenden Elemente in der vorherigen Zeile passen. Dieser Vorgang kann bis zu einer beliebigen Anzahl von Linien wiederholt werden. Wenn eine Zeile nur ein Element enthält, das nicht passt, sollte das Element in dieser Zeile bleiben und über die Box hinausragen. Die späteren Zeilen werden in normalen Richtungsboxen unterhalb der früheren Zeilen platziert und in umgekehrten Richtungsboxen darüber. Die Höhe einer Zeile ist die Höhe des größten Kindes in dieser Zeile. Zwischen den Zeilen erscheinen keine zusätzlichen Abstände, abgesehen von den Rändern der größten Elemente in jeder Zeile. Für die Berechnung der Höhe einer Zeile sollten Ränder mit einem berechneten Wert von auto als Wert 0 behandelt werden.

Ein ähnlicher Prozess erfolgt für Kinder in einer vertikalen Box. Spätere Zeilen in normalen Richtungsboxen werden rechts von früheren Zeilen platziert und in umgekehrten Richtungsboxen links.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` bei Bedarf aus, um zu versuchen, den verbleibenden Platz auf den Linien zu füllen. Jede Linie berechnet Flex unabhängig, sodass nur Elemente auf dieser Linie betrachtet werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} bewertet werden. Die Anordnung der Elemente in einer Linie, wie sie durch die {{CSSxRef("box-pack")}}-Eigenschaft angegeben wird, wird ebenfalls unabhängig für jede Linie berechnet.

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

Die `box-lines`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `single`
  - : Boxelemente in einer einzelnen Zeile oder Spalte anordnen.
- `multiple`
  - : Boxelemente in mehreren Zeilen oder Spalten anordnen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines`, dass die Kinder Ihres Flex-Containers in mehreren Linien umgebrochen werden konnten. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne Flexbox-Äquivalent ist [`flex-wrap`](/de/docs/Web/CSS/flex-wrap).

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
