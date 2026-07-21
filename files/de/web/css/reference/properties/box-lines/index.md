---
title: "`box-lines` CSS property"
short-title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien haben kann (Zeilen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen).

Standardmäßig ordnet eine horizontale Box ihre Kinder in einer einzigen Zeile an, und eine vertikale Box ordnet ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines` Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wenn allerdings ein Wert von `multiple` angegeben wird, darf sich die Box auf mehrere Linien (das heißt, mehrere Zeilen oder Spalten) ausdehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenige Linien wie möglich zu verteilen, indem alle Elemente bei Bedarf auf ihre minimalen Breiten oder Höhen verkleinert werden.

Wenn die Kinder einer horizontalen Box nach der Reduzierung auf ihre minimalen Breiten immer noch nicht auf eine Linie passen, werden Kinder nacheinander auf eine neue Linie verschoben, bis die verbleibenden Elemente auf die vorherige Linie passen. Dieser Vorgang kann bis zu einer beliebigen Anzahl von Linien wiederholt werden. Wenn eine Linie nur ein einzelnes Element enthält, das nicht passt, sollte das Element auf dieser Linie bleiben und aus der Box überlaufen. Die späteren Linien werden in normal ausgerichteten Boxen unter den früheren Linien und in umgekehrter Richtung über ihnen platziert. Die Höhe einer Linie entspricht der Höhe des größten Kindes in dieser Linie. Es erscheint kein zusätzlicher Platz zwischen den Linien abgesehen von den Rändern der größten Elemente in jeder Linie. Für die Berechnung der Höhe einer Linie sollten Ränder mit einem berechneten Wert von auto als 0 behandelt werden.

Ein ähnliches Verfahren tritt bei Kindern in einer vertikalen Box auf. Spätere Linien in normal ausgerichteten Boxen werden rechts von früheren Linien und links in umgekehrter Richtung platziert.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` nach Bedarf, um den verbleibenden Platz auf den Linien zu füllen. Jede Linie berechnet Flexes unabhängig, sodass nur die Elemente auf dieser Linie berücksichtigt werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} bewertet werden. Die Anordnung der Elemente in einer Linie, wie sie durch die {{CSSxRef("box-pack")}} Eigenschaft angegeben ist, wird ebenfalls unabhängig für jede Linie berechnet.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwörter spezifiziert:

- `single`
  - : Box-Elemente werden in einer einzigen Zeile oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehreren Zeilen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines` die Angabe, dass die Kinder des Flex-Containers auf mehrere Linien umgebrochen werden sollten. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne Flexbox-Äquivalent ist {{cssxref("flex-wrap")}}.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
