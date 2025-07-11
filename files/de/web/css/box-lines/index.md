---
title: box-lines
slug: Web/CSS/box-lines
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS flexible Box layout Moduls. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-lines`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt, ob das Kästchen eine einzelne oder mehrere Zeilen (Reihen für horizontal orientierte Kästchen, Spalten für vertikal orientierte Kästchen) aufweisen kann.

Standardmäßig ordnet ein horizontales Kästchen seine Kinder in einer einzigen Reihe an, und ein vertikales Kästchen ordnet seine Kinder in einer einzigen Spalte an. Dieses Verhalten kann mit der `box-lines`-Eigenschaft geändert werden. Der Standardwert ist `single`, was bedeutet, dass alle Elemente in einer einzigen Reihe oder Spalte platziert werden und alle Elemente, die nicht passen, als Überlauf betrachtet werden.

Wenn jedoch ein Wert von `multiple` angegeben wird, darf das Kästchen sich auf mehrere Zeilen (d.h. mehrere Reihen oder Spalten) ausdehnen, um alle seine Kinder aufzunehmen. Das Kästchen muss versuchen, seine Kinder auf möglichst wenige Zeilen zu verteilen, indem alle Elemente bei Bedarf auf ihre Mindestbreiten oder -höhen reduziert werden.

Wenn die Kinder in einem horizontalen Kästchen nach der Reduzierung auf ihre Mindestbreiten immer noch nicht in eine Zeile passen, werden die Kinder nacheinander in eine neue Zeile verschoben, bis die verbleibenden Elemente in die vorherige Zeile passen. Dieser Vorgang kann sich auf eine beliebige Anzahl von Zeilen wiederholen. Wenn eine Zeile nur ein einzelnes Element enthält, das nicht passt, sollte das Element in dieser Zeile bleiben und aus dem Kasten herausragen. Die späteren Zeilen werden in Kästchen mit normaler Richtung unter den vorherigen Zeilen und in Kästchen mit umgekehrter Richtung über den vorherigen Zeilen platziert. Die Höhe einer Zeile entspricht der Höhe des größten Kindes in dieser Zeile. Abgesehen von den Rändern der größten Elemente in jeder Zeile erscheint kein zusätzlicher Raum zwischen den Zeilen. Zur Berechnung der Höhe einer Zeile sollten Ränder mit einem berechneten Wert von `auto` als Wert von 0 behandelt werden.

Ein ähnlicher Vorgang erfolgt für Kinder in einem vertikalen Kästchen. Spätere Zeilen in Kästchen mit normaler Richtung werden rechts von früheren Zeilen und in Kästchen mit umgekehrter Richtung links von früheren Zeilen platziert.

Sobald die Anzahl der Zeilen festgelegt ist, dehnen sich Elemente mit einem berechneten Wert für {{CSSxRef("box-flex")}} ungleich `0` bei Bedarf aus, um den verbleibenden Raum in den Zeilen zu füllen. Jede Zeile berechnet Flexibilitäten unabhängig, sodass nur Elemente in dieser Zeile berücksichtigt werden, wenn {{CSSxRef("box-flex")}} und {{CSSxRef("box-flex-group")}} bewertet werden. Die Anordnung der Elemente in einer Zeile, wie sie durch die {{CSSxRef("box-pack")}}-Eigenschaft spezifiziert wird, wird ebenfalls für jede Zeile unabhängig berechnet.

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
  - : Box-Elemente werden in einer einzigen Reihe oder Spalte angeordnet.
- `multiple`
  - : Box-Elemente werden in mehreren Reihen oder Spalten angeordnet.

## Offizielle Definition

{{cssinfo}}

## Offizielle Syntax

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Beispiele

### Grundlegendes Nutzungsbeispiel

In der ursprünglichen Version der Spezifikation erlaubte `box-lines`, dass die Kinder Ihres flex-Containers auf mehrere Zeilen umgebrochen werden konnten. Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

Das moderne flexbox-Äquivalent ist [`flex-wrap`](/de/docs/Web/CSS/flex-wrap).

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
