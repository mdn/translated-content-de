---
title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modul Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien (Zeilen für horizontal orientierte Boxen, Spalten für vertikal orientierte Boxen) haben darf.

Standardmäßig ordnet eine horizontale Box ihre Kinder in einer einzigen Reihe an, und eine vertikale Box ordnet ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines` Eigenschaft verändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Reihe oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wird jedoch ein Wert von `multiple` angegeben, ist es der Box erlaubt, sich auf mehrere Linien (das heißt, mehrere Zeilen oder Spalten) auszudehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenigen Linien wie möglich unterzubringen, indem sie, falls nötig, alle Elemente auf ihre minimalen Breiten oder Höhen verkleinert.

Wenn die Kinder in einer horizontalen Box auch nach der Reduzierung auf ihre minimalen Breiten nicht auf eine Linie passen, werden die Kinder nacheinander auf eine neue Linie verschoben, bis die verbleibenden Elemente auf der vorherigen Linie passen. Dieser Prozess kann sich auf eine beliebige Anzahl von Linien wiederholen. Wenn eine Linie nur ein einziges Element enthält, das nicht passt, sollte das Element auf dieser Linie verbleiben und aus der Box herausragen. Die späteren Linien werden in normal ausgerichteten Boxen unter die früheren Linien und in umgekehrt ausgerichteten Boxen darüber platziert. Die Höhe einer Linie entspricht der Höhe des größten Kindes in dieser Linie. Zwischen den Linien erscheint kein zusätzlicher Raum, abgesehen von den Rändern der größten Elemente in jeder Linie. Zur Berechnung der Höhe einer Linie sollten Margen mit einem berechneten Wert von auto als gleich 0 behandelt werden.

Ein ähnlicher Prozess erfolgt für Kinder in einer vertikalen Box. Spätere Linien in normal ausgerichteten Boxen werden rechts von den früheren Linien platziert und in umgekehrt ausgerichteten Boxen links.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` nach Bedarf, um den verbleibenden Raum auf den Linien auszufüllen. Jede Linie berechnet die Flexwerte unabhängig, sodass nur Elemente auf dieser Linie bei der Bewertung von {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} berücksichtigt werden. Die Anordnung der Elemente in einer Linie, wie durch die {{CSSxRef("box-pack")}} Eigenschaft angegeben, wird ebenfalls unabhängig für jede Linie berechnet.

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
  - : Box-Elemente werden in einer einzigen Zeile oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehreren Zeilen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Einfaches Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation ermöglichte `box-lines`, dass Sie festlegen konnten, dass die Kinder Ihres Flex-Containers auf mehrere Linien umbrochen werden sollten. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

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
