---
title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Es wurde in der Spezifikation ersetzt. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien haben darf (Zeilen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen).

Standardmäßig legt eine horizontale Box ihre Kinder in einer einzigen Zeile an, und eine vertikale Box legt ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines` Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wenn jedoch ein Wert von `multiple` angegeben wird, darf sich die Box auf mehrere Linien (also mehrere Zeilen oder Spalten) ausdehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenigen Linien wie möglich unterzubringen, indem sie alle Elemente bei Bedarf auf ihre Minimalbreiten oder -höhen verkleinert.

Wenn die Kinder in einer horizontalen Box nach der Reduzierung auf ihre Minimalbreiten immer noch nicht auf eine Linie passen, werden Kinder einzeln auf eine neue Linie verschoben, bis die verbleibenden Elemente auf der vorherigen Linie passen. Dieser Vorgang kann für eine beliebige Anzahl von Linien wiederholt werden. Wenn eine Zeile nur ein einziges Element enthält, das nicht passt, sollte das Element in dieser Zeile verbleiben und aus der Box herausragen. Die späteren Linien werden in normalen Richtungsboxen unter den früheren Linien und in umgekehrten Richtungsboxen darüber platziert. Die Höhe einer Linie ist die Höhe des größten Kindes in dieser Linie. Zwischen den Linien erscheint kein zusätzlicher Raum außer den Rändern an den größten Elementen in jeder Linie. Bei der Berechnung der Höhe einer Linie sollten Ränder mit einem berechneten Wert von auto als Wert von 0 behandelt werden.

Ein ähnlicher Prozess erfolgt für Kinder in einer vertikalen Box. Spätere Linien in normalen Richtungsboxen werden rechts der früheren Linien platziert und links in umgekehrten Richtungsboxen.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` bei Bedarf, um den verbleibenden Raum auf den Linien zu füllen. Jede Linie berechnet die Flexes unabhängig, daher werden nur Elemente auf dieser Linie berücksichtigt, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} evaluiert werden. Die Anordnung der Elemente in einer Linie, wie durch die Eigenschaft {{CSSxRef("box-pack")}} angegeben, wird ebenfalls unabhängig für jede Linie berechnet.

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
  - : Box-Elemente werden in einer einzigen Zeile oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehrere Zeilen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Grundlegendes Nutzung Beispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines` die Spezifikation, dass die Kinder Ihres Flex-Containers auf mehrere Linien umgebrochen werden. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne Flexbox-Equivalent ist [`flex-wrap`](/de/docs/Web/CSS/Reference/Properties/flex-wrap).

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
