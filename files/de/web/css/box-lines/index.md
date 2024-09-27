---
title: box-lines
slug: Web/CSS/box-lines
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modul-Entwurfs. Sie wurde in der Spezifikation ersetzt. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-lines`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bestimmt, ob die Box eine einzelne oder mehrere Zeilen haben kann (Zeilen für horizontal orientierte Boxen, Spalten für vertikal orientierte Boxen).

Standardmäßig ordnet eine horizontale Box ihre Kinder in einer einzigen Zeile an, und eine vertikale Box ordnet ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann durch die `box-lines`-Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzelnen Zeile oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wird jedoch der Wert `multiple` angegeben, darf die Box sich auf mehrere Zeilen (d.h. mehrere Zeilen oder Spalten) erweitern, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenigen Zeilen wie möglich unterzubringen, indem alle Elemente gegebenenfalls auf ihre minimalen Breiten oder Höhen reduziert werden.

Wenn die Kinder in einer horizontalen Box nach Reduzierung auf ihre minimalen Breiten immer noch nicht in eine Zeile passen, werden die Kinder nacheinander in eine neue Zeile verschoben, bis die verbleibenden Elemente in die vorherige Zeile passen. Dieser Vorgang kann sich auf eine beliebige Anzahl von Zeilen wiederholen. Wenn eine Zeile nur ein einzelnes Element enthält, das nicht passt, sollte das Element in dieser Zeile bleiben und über die Box hinausfließen. Die späteren Zeilen werden in Boxen mit normaler Richtung unterhalb der früheren Zeilen und in Boxen mit umgekehrter Richtung oberhalb platziert. Die Höhe einer Zeile ist die Höhe des größten Kindes in dieser Zeile. Es erscheint kein zusätzlicher Platz zwischen den Zeilen außer den Rändern der größten Elemente in jeder Zeile. Für die Berechnung der Höhe einer Zeile sollten Ränder mit einem berechneten Wert von auto als Wert von 0 behandelt werden.

Ein ähnlicher Prozess erfolgt für Kinder in einer vertikalen Box. Spätere Zeilen in Boxen mit normaler Richtung werden rechts von früheren Zeilen und links in Boxen mit umgekehrter Richtung platziert.

Sobald die Anzahl der Zeilen festgelegt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` bei Bedarf, um den verbleibenden Platz in den Zeilen zu füllen. Jede Zeile berechnet die Flexwerte unabhängig, sodass nur die Elemente in dieser Zeile bei der Auswertung von {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-groups")}} berücksichtigt werden. Die Anordnung der Elemente in einer Zeile, wie sie durch die Eigenschaft {{CSSxRef("box-pack")}} spezifiziert ist, wird ebenfalls unabhängig für jede Zeile berechnet.

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
  - : Box-Elemente werden in einer einzelnen Zeile oder Spalte angeordnet.
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

In der ursprünglichen Version der Spezifikation erlaubte `box-lines` es Ihnen anzugeben, dass die Kinder Ihres flexiblen Containers auf mehrere Zeilen umgeschaltet werden sollten. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne Flexbox-Äquivalent ist [`flex-wrap`](/de/docs/Web/CSS/flex-wrap).

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
