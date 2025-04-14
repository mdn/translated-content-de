---
title: box-lines
slug: Web/CSS/box-lines
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexiblen Box Layout Modulentwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien haben darf (Reihen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen).

Standardmäßig legt eine horizontale Box ihre Kinder in einer einzigen Reihe an, und eine vertikale Box legt ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines` Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Reihe oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wird jedoch ein Wert von `multiple` angegeben, darf die Box auf mehrere Linien (d.h. mehrere Reihen oder Spalten) erweitert werden, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenige Linien wie möglich unterzubringen, indem sie alle Elemente bei Bedarf auf ihre minimalen Breiten oder Höhen reduziert.

Wenn die Kinder in einer horizontalen Box nach der Reduzierung auf ihre minimalen Breiten immer noch nicht auf eine Linie passen, werden die Kinder einzeln auf eine neue Linie verschoben, bis die verbleibenden Elemente auf die vorherige Linie passen. Dieser Vorgang kann sich auf eine beliebige Anzahl von Linien wiederholen. Wenn eine Linie nur ein Element enthält, das nicht passt, sollte das Element auf dieser Linie bleiben und über die Box hinausragen. Die späteren Linien werden in Normalrichtungsboxen unterhalb der früheren Linien und in umgekehrter Richtung darüber platziert. Die Höhe einer Linie entspricht der Höhe des größten Kindes in dieser Linie. Zwischen den Linien erscheint kein zusätzlicher Platz abgesehen von den Rändern der größten Elemente in jeder Linie. Zur Berechnung der Höhe einer Linie sollten Ränder mit einem berechneten Wert von auto als Wert von 0 behandelt werden.

Ein ähnlicher Prozess erfolgt für Kinder in einer vertikalen Box. Spätere Linien in Normalrichtungsboxen werden rechts von früheren Linien und in umgekehrter Richtung links platziert.

Sobald die Anzahl der Linien bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` nach Bedarf aus, um den verbleibenden Platz auf den Linien zu füllen. Jede Linie berechnet Flexes unabhängig, sodass nur Elemente auf dieser Linie berücksichtigt werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-groups")}} ausgewertet werden. Die Packung der Elemente in einer Linie, wie sie durch die {{CSSxRef("box-pack")}} Eigenschaft spezifiziert wird, wird auch unabhängig für jede Linie berechnet.

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
  - : Boxelemente werden in einer einzigen Reihe oder Spalte angeordnet.
- `multiple`
  - : Boxelemente werden in mehreren Reihen oder Spalten angeordnet.

## Formale Definition

{{cssinfo}}

## Formales Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Einfache Verwendungsbeispiel

Im ursprünglichen Entwurf der Spezifikation erlaubte es `box-lines`, anzugeben, dass die Kinder ihres Flexcontainers auf mehrere Linien umbrechen sollten. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

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
