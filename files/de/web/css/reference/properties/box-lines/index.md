---
title: "`box-lines` CSS property"
short-title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modulentwurfs. Sie wurde in der Spezifikation ersetzt. Weitere Informationen über den aktuellen Standard finden Sie im [Flexbox-Leitfaden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-lines`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt, ob die Box eine einzelne oder mehrere Linien haben kann (Zeilen für horizontal ausgerichtete Boxen, Spalten für vertikal ausgerichtete Boxen).

Standardmäßig ordnet eine horizontale Box ihre Kinder in einer einzigen Zeile an, und eine vertikale Box ordnet ihre Kinder in einer einzigen Spalte an. Dieses Verhalten kann durch die Verwendung der `box-lines`-Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Zeile oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wird jedoch ein Wert von `multiple` angegeben, darf sich die Box auf mehrere Linien (d.h. mehrere Zeilen oder Spalten) ausdehnen, um alle ihre Kinder aufzunehmen. Die Box muss versuchen, ihre Kinder auf so wenigen Linien wie möglich unterzubringen, indem alle Elemente bei Bedarf auf ihre minimalen Breiten oder Höhen reduziert werden.

Wenn die Kinder in einer horizontalen Box nach der Reduzierung auf ihre minimalen Breiten immer noch nicht in eine Zeile passen, werden die Kinder nacheinander auf eine neue Zeile verschoben, bis die verbleibenden Elemente in die vorherige Zeile passen. Dieser Vorgang kann sich auf eine beliebige Anzahl von Zeilen wiederholen. Wenn eine Zeile nur ein einzelnes Element enthält, das nicht passt, sollte das Element in dieser Zeile verbleiben und aus der Box herausragen. Die späteren Zeilen werden in normalen Richtungsboxen unter den früheren Zeilen und in umgekehrten Richtungsboxen darüber platziert. Die Höhe einer Zeile ist die Höhe des größten Kindes in dieser Zeile. Es erscheint kein zusätzlicher Platz zwischen den Zeilen, abgesehen von den Rändern der größten Elemente in jeder Zeile. Bei der Berechnung der Höhe einer Zeile sollten Ränder mit einem berechneten Wert von auto als 0 behandelt werden.

Ein ähnlicher Vorgang erfolgt für Kinder in einer vertikalen Box. Spätere Linien in normalen Richtungsboxen werden rechts von früheren Linien und in umgekehrten Richtungsboxen links platziert.

Sobald die Anzahl der Zeilen bestimmt wurde, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` bei Bedarf aus, um den verbleibenden Platz auf den Zeilen zu füllen. Jede Zeile berechnet die Flex-Werte unabhängig, sodass nur die Elemente in dieser Zeile berücksichtigt werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} bewertet werden. Die Verpackung der Elemente in einer Zeile, wie sie durch die {{CSSxRef("box-pack")}}-Eigenschaft spezifiziert wird, wird ebenfalls unabhängig für jede Zeile berechnet.

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

### Einfaches Anwendungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines` Ihnen, anzugeben, dass Sie möchten, dass die Kinder Ihres Flex-Containers auf mehrere Linien umgebrochen werden. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne Flexbox-Äquivalent ist {{cssxref("flex-wrap")}}.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
