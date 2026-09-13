---
title: "`box-lines` CSS property"
short-title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Module-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien (Reihen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen) haben darf.

Standardmäßig legt eine horizontale Box ihre Kinder in einer einzigen Reihe und eine vertikale Box ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines`-Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Reihe oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wenn jedoch ein Wert von `multiple` angegeben wird, darf sich die Box auf mehrere Linien (d.h. mehrere Reihen oder Spalten) ausdehnen, um all ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenige Linien wie möglich zu verteilen, indem alle Elemente bei Bedarf auf ihre minimalen Breiten oder Höhen reduziert werden.

Wenn die Kinder in einer horizontalen Box nach der Reduzierung auf ihre minimalen Breiten immer noch nicht auf eine Linie passen, werden die Kinder nacheinander auf eine neue Linie verschoben, bis die verbleibenden Elemente auf der vorherigen Linie passen. Dieser Vorgang kann auf eine beliebige Anzahl von Linien wiederholt werden. Wenn eine Linie nur ein einziges Element enthält, das nicht passt, sollte das Element auf dieser Linie bleiben und aus der Box herausragen. Die späteren Linien werden in normalen Richtungsboxen unter den früheren Linien platziert und darüber in umgekehrten Richtungsboxen. Die Höhe einer Linie ist die Höhe des größten Kindes in dieser Linie. Kein zusätzlicher Raum erscheint zwischen den Linien außer den Rändern der größten Elemente in jeder Linie. Für die Berechnung der Höhe einer Linie sollten Ränder mit einem berechneten Wert von auto als Wert 0 behandelt werden.

Ein ähnlicher Prozess tritt für Kinder in einer vertikalen Box auf. Spätere Linien in normalen Richtungsboxen werden rechts von früheren Linien platziert und links in umgekehrten Richtungsboxen.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` nach Bedarf aus, um den verbleibenden Raum auf den Linien zu füllen. Jede Linie berechnet Flexes unabhängig, sodass nur die Elemente auf dieser Linie berücksichtigt werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} ausgewertet werden. Das Packen der Elemente in einer Linie, wie es durch die {{CSSxRef("box-pack")}}-Eigenschaft angegeben wird, wird ebenfalls unabhängig für jede Linie berechnet.

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

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `single`
  - : Box-Elemente werden in einer einzigen Reihe oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehreren Reihen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines` Ihnen, anzugeben, dass die Kinder Ihres Flex-Containers auf mehrere Linien umbrechen sollten. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne Flexbox-Äquivalent ist {{cssxref("flex-wrap")}}.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
