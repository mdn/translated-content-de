---
title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexible-Box-Layout-Modul-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien (Zeilen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen) haben kann.

Standardmäßig ordnet eine horizontale Box ihre Kinder in einer einzigen Zeile an und eine vertikale Box ihre Kinder in einer einzigen Spalte. Dieses Verhalten kann mit der `box-lines`-Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte platziert werden, und alle nicht passenden Elemente als Überlauf betrachtet werden.

Wenn jedoch ein Wert von `multiple` angegeben wird, darf sich die Box erweitern, um mehrere Linien (d.h. mehrere Zeilen oder Spalten) aufzunehmen, um all ihre Kinder unterzubringen. Die Box muss versuchen, ihre Kinder auf so wenigen Linien wie möglich unterzubringen, indem sie alle Elemente bei Bedarf auf ihre minimalen Breiten oder Höhen reduziert.

Wenn die Kinder in einer horizontalen Box auch nach Reduzierung auf ihre minimalen Breiten nicht in eine Zeile passen, werden die Kinder einzeln auf eine neue Zeile verschoben, bis die verbleibenden Elemente auf der vorherigen Zeile passen. Dieser Prozess kann sich auf eine beliebige Anzahl von Zeilen wiederholen. Wenn eine Zeile nur ein einziges Element enthält, das nicht passt, sollte das Element auf dieser Zeile bleiben und aus der Box herausragen. Die späteren Zeilen werden in normalen Richtungskästchen unter den früheren Zeilen platziert und in umgekehrten Richtungskästchen darüber. Die Höhe einer Zeile entspricht der Höhe des größten Kindes in dieser Zeile. Zwischen den Zeilen erscheint kein zusätzlicher Raum außer den Rändern auf den größten Elementen jeder Zeile. Bei der Berechnung der Höhe einer Zeile sollten Ränder mit einem berechneten Wert von auto als Wert von 0 behandelt werden.

Ein ähnlicher Prozess findet für Kinder in einer vertikalen Box statt. Spätere Linien in normalen Richtungskästchen werden rechts von den früheren Linien platziert und links in umgekehrten Richtungskästchen.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` nach Bedarf aus, um den verbleibenden Raum auf den Linien zu füllen. Jede Zeile berechnet Flexe unabhängig, daher werden nur Elemente auf dieser Linie berücksichtigt, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} ausgewertet werden. Die Anordnung der Elemente in einer Linie, wie sie durch die {{CSSxRef("box-pack")}} Eigenschaft spezifiziert ist, wird ebenfalls unabhängig für jede Linie berechnet.

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
  - : Box-Elemente werden in einer einzigen Zeile oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehreren Zeilen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines`, dass die Kinder eines Flex-Containers auf mehrere Linien umbrochen werden. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

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
