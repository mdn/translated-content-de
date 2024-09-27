---
title: Grundkonzepte des Multi-Column-Layouts
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Ein Multi-Column-Layout, häufig als Multicol-Layout bezeichnet, ist eine Spezifikation zum Anordnen von Inhalten in einer Reihe von Spaltenboxen, ähnlich den Spalten in einer Zeitung. Dieser Leitfaden erklärt, wie die Spezifikation funktioniert, mit einigen häufigen Anwendungsbeispielen.

## Wichtige Eigenschaften

Das Multicol-Layout unterscheidet sich von anderen Layout-Methoden in CSS; es fragmentiert den Inhalt, einschließlich aller untergeordneten Elemente, in Spalten. Dies geschieht auf die gleiche Weise wie die Fragmentierung von Inhalten auf Seiten, wenn wir mit [CSS paged media](/de/docs/Web/CSS/CSS_paged_media) arbeiten, indem wir ein Druck-Stylesheet erstellen.

In diesem und den folgenden Leitfäden werden wir die folgenden Eigenschaften besprechen, die im [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert sind:

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}} Kurzschreibweise
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}} Kurzschreibweise
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## Spalten definieren

Indem Sie die Eigenschaft `column-count` oder `column-width` zu einem Element hinzufügen oder die Kurzschreibweise `columns` verwenden, wird das Element zu einem _Multi-Column-Container_ oder kurz _Multicol-Container_. Die Spalten sind anonyme Boxen; sie werden in der Spezifikation als _Spaltenboxen_ beschrieben.

### Die Anzahl der Spalten angeben

Die Eigenschaft `column-count` gibt die Anzahl der Spalten an, in denen der Inhalt angezeigt werden soll. Der Browser weist dann jeder Spaltenbox den richtigen Anteil an Platz zu, um die gewünschte Anzahl von Spalten zu erstellen.

Im folgenden Beispiel verwenden wir die Eigenschaft `column-count`, um drei Spalten auf dem `.container`-Element zu erstellen. Der Inhalt, einschließlich der Kinder von `.container`, wird dann auf die drei Spalten verteilt.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

Im obigen Beispiel ist der Inhalt innerhalb der Absatz-`<p>`-Tags mit der Standardformatierung eingeschlossen. Daher gibt es einen Rand über jedem Absatz. Sie können sehen, wie dieser Rand dazu führt, dass die erste Zeile des Textes nach unten gedrückt wird. Dies liegt daran, dass ein Multicol-Container einen [block formatting context (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erzeugt, wodurch Margen auf Kindelementen nicht mit einem Rand am Container zusammenfallen.

### Die Breite von Spalten angeben

Die Eigenschaft `column-width` wird verwendet, um die optimale Breite für jede Spaltenbox festzulegen. Wenn Sie eine Spaltenbreite angeben, berechnet der Browser, wie viele Spalten dieser Breite in den Multicol-Container passen, und verteilt den zusätzlichen Platz gleichmäßig zwischen den Spalten. Daher sollte die Spaltenbreite als Mindestbreite gesehen werden, da die Spaltenboxen aufgrund des zusätzlichen Platzes wahrscheinlich breiter sind.

Im Fall einer einzigen Spalte mit weniger verfügbarem Raum als der Wert von `column-width`, wird die Spaltenbox kleiner als die angegebene Spaltenbreite schrumpfen.

Im folgenden Beispiel ist die Eigenschaft `column-width` auf `200px` gesetzt. Wir bekommen so viele 200-Pixel-Spalten, wie in den Container passen, wobei der zusätzliche Platz gleichmäßig aufgeteilt wird.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### Sowohl Anzahl als auch Breite von Spalten angeben

Wenn Sie beide Eigenschaften in einem Multicol-Container angeben, wird `column-count` als maximale Anzahl von Spalten fungieren. Daher tritt das Verhalten auf, das für `column-width` beschrieben wurde, bis die in `column-count` angegebene Anzahl von Spalten erreicht ist. Ab diesem Punkt werden keine weiteren Spalten gezogen, und der zusätzliche Raum wird gleichmäßig zwischen den vorhandenen Spalten verteilt, auch wenn ausreichend Platz für weitere Spalten der angegebenen `column-width` Größe vorhanden ist.

Wenn beide Eigenschaften zusammen verwendet werden, kann es sein, dass Sie weniger Spalten erhalten als im Wert von `column-count` angegeben.

Im nächsten Beispiel verwenden wir `column-width` von `200px` und `column-count` von `2`. Selbst wenn Platz für mehr als zwei Spalten vorhanden ist, erhalten wir zwei. Wenn nicht genug Platz für zwei Spalten von mindestens je 200 Pixel vorhanden ist, erhalten wir eine.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### Kurzschreibweise für Spalteneigenschaften

Sie können die Kurzschreibweise `columns` verwenden, um die Werte für `column-count` und `column-width` festzulegen. Wenn Sie eine Längeneinheit angeben, wird der Wert für `column-width` verwendet, und wenn Sie eine ganze Zahl angeben, wird der Wert für `column-count` verwendet. Sie können beide Eigenschaften festlegen, indem Sie die beiden Werte mit einem Leerzeichen trennen.

Dieses CSS würde das gleiche Ergebnis geben wie [Beispiel 1](#die_anzahl_der_spalten_angeben), mit `column-count` auf `3` gesetzt.

```css
.container {
  columns: 3;
}
```

Dieses CSS würde das gleiche Ergebnis geben wie [Beispiel 2](#die_breite_von_spalten_angeben), mit `column-width` von `200px`.

```css
.container {
  columns: 200px;
}
```

Dieses CSS würde das gleiche Ergebnis geben wie [Beispiel 3](#sowohl_anzahl_als_auch_breite_von_spalten_angeben), mit sowohl `column-count` als auch `column-width` gesetzt.

```css
.container {
  columns: 2 200px;
}
```

## Nächste Schritte

In diesem Leitfaden haben wir die grundlegende Verwendung des Multi-Column-Layouts kennengelernt. Im nächsten Leitfaden werden wir untersuchen, wie viel wir die [Spalten selbst gestalten können](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns).
