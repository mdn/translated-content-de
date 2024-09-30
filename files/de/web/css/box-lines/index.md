---
title: box-lines
slug: Web/CSS/box-lines
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Sie wurde in der Spezifikation ersetzt. Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Zeilen (bei horizontal ausgerichteten Boxen) oder Spalten (bei vertikal ausgerichteten Boxen) haben kann.

Standardmäßig legt eine horizontale Box ihre Kinder in einer einzigen Zeile und eine vertikale Box in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines` Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wird jedoch ein Wert von `multiple` angegeben, darf die Box sich auf mehrere Zeilen (das heißt, mehrere Reihen oder Spalten) erweitern, um alle Kinder unterzubringen. Die Box muss versuchen, ihre Kinder auf so wenigen Zeilen wie möglich unterzubringen, indem alle Elemente gegebenenfalls auf ihre minimalen Breiten oder Höhen verkleinert werden.

Wenn die Kinder in einer horizontalen Box nach Verkleinerung auf ihre Mindestbreiten immer noch nicht in eine Zeile passen, werden die Kinder nacheinander in eine neue Zeile verschoben, bis die verbleibenden Elemente in die vorherige Zeile passen. Dieser Vorgang kann sich auf eine beliebige Anzahl von Zeilen wiederholen. Wenn eine Zeile nur ein einzelnes Element enthält, das nicht passt, sollte das Element in dieser Zeile bleiben und aus der Box herausfließen. Die späteren Zeilen werden in normalen Richtungsboxen unter den früheren Zeilen platziert und in umgekehrten Richtungsboxen darüber. Die Höhe einer Zeile ist die Höhe des größten Kindes in dieser Zeile. Es erscheint kein zusätzlicher Raum zwischen den Zeilen, abgesehen von den Rändern der größten Elemente in jeder Zeile. Bei der Berechnung der Höhe einer Zeile sollten Ränder mit einem berechneten Wert von `auto` als 0 behandelt werden.

Ein ähnlicher Vorgang tritt bei Kindern in einer vertikalen Box auf. Spätere Zeilen in normalen Richtungsboxen werden rechts von früheren Zeilen platziert und in umgekehrten Richtungsboxen links davon.

Sobald die Anzahl der Zeilen bestimmt ist, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` nach Bedarf aus, um den verbleibenden Raum in den Zeilen zu füllen. Jede Zeile berechnet Flex unabhängig, sodass nur die Elemente auf dieser Zeile bei der Auswertung von {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-groups")}} berücksichtigt werden. Das Packen von Elementen in einer Zeile, wie durch die {{CSSxRef("box-pack")}} Eigenschaft spezifiziert, wird ebenfalls unabhängig für jede Zeile berechnet.

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

Die `box-lines` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `single`
  - : Box-Elemente werden in einer einzelnen Zeile oder Spalte angelegt.
- `multiple`
  - : Box-Elemente werden in mehreren Zeilen oder Spalten angelegt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-lines =
  single | multiple
```

## Beispiele

### Einfaches Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines`, anzugeben, dass die Kinder Ihres Flex-Containers auf mehrere Zeilen verteilt werden sollen. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

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
