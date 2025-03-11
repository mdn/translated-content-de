---
title: box-lines
slug: Web/CSS/box-lines
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Module Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien (Reihen für horizontal orientierte Boxen, Spalten für vertikal orientierte Boxen) haben darf.

Standardmäßig wird eine horizontale Box ihre Kinder in einer einzigen Reihe anordnen, und eine vertikale Box wird ihre Kinder in einer einzigen Spalte anordnen. Dieses Verhalten kann mit der Eigenschaft `box-lines` geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Reihe oder Spalte platziert werden, und alle Elemente, die nicht passen, werden als Überlauf betrachtet.

Wenn jedoch ein Wert von `multiple` angegeben wird, darf die Box sich auf mehrere Linien (das heißt, mehrere Reihen oder Spalten) ausdehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenigen Linien wie möglich unterzubringen, indem alle Elemente, falls nötig, auf ihre minimalen Breiten oder Höhen verkleinert werden.

Falls die Kinder in einer horizontalen Box immer noch nicht auf eine Linie passen, nachdem sie auf ihre minimale Breite reduziert wurden, werden die Kinder einzeln auf eine neue Linie verschoben, bis die verbleibenden Elemente auf der vorherigen Linie passen. Dieser Vorgang kann sich auf eine beliebige Anzahl von Linien wiederholen. Wenn eine Linie nur ein einzelnes Element enthält, das nicht passt, sollte das Element in dieser Linie bleiben und über die Box hinausreichen. Die späteren Linien werden in normalen Richtungskästen unter die früheren Linien gesetzt und in umgekehrten Richtungskästen darüber. Die Höhe einer Linie entspricht der Höhe des größten Kindes in dieser Linie. Es erscheint kein zusätzlicher Raum zwischen den Linien, abgesehen von den Rändern der größten Elemente in jeder Linie. Für die Berechnung der Höhe einer Linie sollten Margen mit einem berechneten Wert von Auto als Wert 0 behandelt werden.

Ein ähnlicher Prozess findet für Kinder in einer vertikalen Box statt. Spätere Linien in normalen Richtungskästen werden rechts von früheren Linien platziert und links in umgekehrten Richtungskästen.

Sobald die Anzahl der Linien festgelegt ist, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` soweit nötig, um den verbleibenden Raum auf den Linien auszufüllen. Jede Linie berechnet Flexe unabhängig, sodass nur die Elemente auf dieser Linie bei der Bewertung von {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-groups")}} berücksichtigt werden. Die Anordnung der Elemente in einer Linie, wie durch die Eigenschaft {{CSSxRef("box-pack")}} angegeben, wird ebenfalls für jede Linie unabhängig berechnet.

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
  - : Box Elemente ordnen sich in einer einzigen Reihe oder Spalte an.
- `multiple`
  - : Box Elemente ordnen sich in mehreren Reihen oder Spalten an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-lines =
  single | multiple
```

## Beispiele

### Grundlegendes Verwendungbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines`, dass Sie angeben konnten, dass Sie wollten, dass die Kinder Ihres Flex-Containers auf mehrere Linien umgebrochen werden. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

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
