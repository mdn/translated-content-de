---
title: box-lines
slug: Web/CSS/box-lines
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS-Flexbox-Layout-Moduls. Sie wurde im Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-lines`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob die Box eine einzelne oder mehrere Linien (Zeilen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen) haben darf.

Standardmäßig ordnet eine horizontale Box ihre Kinder in einer einzigen Zeile an, und eine vertikale Box ordnet ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines`-Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wenn jedoch der Wert `multiple` angegeben wird, darf sich die Box auf mehrere Linien (d. h. mehrere Zeilen oder Spalten) ausdehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenigen Linien wie möglich unterzubringen, indem sie alle Elemente bei Bedarf auf ihre Mindestbreiten oder -höhen verkleinert.

Wenn die Kinder in einer horizontalen Box nach der Reduzierung auf ihre Mindestbreiten immer noch nicht auf eine Linie passen, werden die Kinder nacheinander auf eine neue Linie verschoben, bis die verbleibenden Elemente in die vorherige Linie passen. Dieser Vorgang kann bis zu einer beliebigen Anzahl von Linien wiederholt werden. Wenn eine Linie nur ein Element enthält, das nicht passt, sollte das Element in dieser Linie bleiben und aus der Box herausragen. Die späteren Linien werden in normal ausgerichteten Boxen unter den früheren Linien und in umgekehrter Ausrichtung über ihnen platziert. Die Höhe einer Linie entspricht der Höhe des größten Kindes in dieser Linie. Es erscheint kein zusätzlicher Platz zwischen den Linien, abgesehen von den Rändern der größten Elemente in jeder Linie. Bei der Berechnung der Höhe einer Linie sollten Ränder mit einem berechneten Wert von auto als Wert 0 behandelt werden.

Ein ähnlicher Prozess erfolgt für Kinder in einer vertikalen Box. Später werden Linien in normal ausgerichteten Boxen rechts von den früheren Linien platziert und in umgekehrter Ausrichtung links von ihnen.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert ungleich `0` für {{CSSxRef("box-flex")}} bei Bedarf, um den verbleibenden Raum auf den Linien zu füllen. Jede Linie berechnet Flexes unabhängig, sodass nur die Elemente auf dieser Linie berücksichtigt werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-groups")}} evaluiert werden. Die Packung der Elemente in einer Linie, wie sie durch die {{CSSxRef("box-pack")}}-Eigenschaft spezifiziert wird, wird ebenfalls für jede Linie unabhängig berechnet.

## Syntax

```css
/* Schlüsselwort-Werte */
box-lines: single;
box-lines: multiple;

/* Globale Werte */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

Die `box-lines`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `single`
  - : Box-Elemente werden in einer einzigen Zeile oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehreren Zeilen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-lines =
  single | multiple
```

## Beispiele

### Einfaches Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines` es, anzugeben, dass die Kinder Ihres Flex-Containers über mehrere Linien umgebrochen werden sollten. Dies wurde nur in WebKit-basierten Browsern mit Präfix unterstützt.

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
