---
title: Grundkonzepte des Multi-Column-Layouts
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Ein Multi-Column-Layout, üblicherweise als Multicol-Layout bezeichnet, ist eine Spezifikation zum Gestalten von Inhalten in einer Reihe von Spaltenboxen, ähnlich wie Spalten in einer Zeitung. Dieses Handbuch erklärt, wie die Spezifikation funktioniert, mit einigen gängigen Anwendungsbeispielen.

## Wichtige Eigenschaften

Das Multicol-Layout unterscheidet sich von allen anderen Layout-Methoden in CSS; es fragmentiert den Inhalt sowie alle darunterliegenden Elemente in Spalten. Dies geschieht auf die gleiche Weise, wie Inhalte in Seiten fragmentiert werden, wenn wir mit [CSS für Paged Media](/de/docs/Web/CSS/CSS_paged_media) arbeiten, indem wir ein Druck-Stylesheet erstellen.

In diesem und nachfolgenden Leitfäden werden wir die folgenden Eigenschaften des [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout) Moduls besprechen:

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}} Kurzform
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## Definieren von Spalten

Durch Hinzufügen der Eigenschaft `column-count` oder `column-width` zu einem Element, oder durch Verwendung der Kurzform `columns`, wird das Element zu einem _Multi-Column-Container_ oder kurz _Multicol-Container_. Die Spalten sind anonyme Boxen; sie werden in der Spezifikation als _Column Boxes_ beschrieben.

### Anzahl der Spalten festlegen

Die Eigenschaft `column-count` gibt die Anzahl der Spalten an, in denen der Inhalt angezeigt werden soll. Der Browser weist dann jeder Spaltenbox die entsprechende Menge an Platz zu, um die gewünschte Anzahl von Spalten zu erstellen.

Im folgenden Beispiel verwenden wir die Eigenschaft `column-count`, um drei Spalten auf dem Element `.container` zu erstellen. Der Inhalt, einschließlich der Kinder von `.container`, wird dann auf die drei Spalten verteilt.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

Im obigen Beispiel ist der Inhalt innerhalb der Absätze `<p>` mit der Standardformatierung eingeschlossen. Daher gibt es über jedem Absatz einen Rand. Sie können sehen, wie dieser Rand die erste Textzeile nach unten drückt. Dies liegt daran, dass ein Multicol-Container einen [Block Formatting Context (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erzeugt, wodurch die Ränder von Kindelementen nicht mit der Rand des Containers kollabieren.

### Breite der Spalten festlegen

Die Eigenschaft `column-width` wird verwendet, um die optimale Breite für jede Spaltenbox festzulegen. Wenn Sie eine Spaltenbreite festlegen, berechnet der Browser, wie viele Spalten dieser Breite in den Multicol-Container passen und verteilt den überschüssigen Raum gleichmäßig zwischen den Spalten. Daher sollte die Spaltenbreite als Mindestbreite betrachtet werden, da die Spaltenboxen aufgrund des zusätzlichen Raums wahrscheinlich breiter sind.

Im Fall einer einzelnen Spalte mit weniger verfügbarer Breite als der Wert von `column-width`, schrumpft die Spaltenbox auf eine kleinere Größe als die deklarierte Spaltenbreite.

Im Beispiel unten ist die Eigenschaft `column-width` auf `200px` gesetzt. Wir erhalten so viele 200-Pixel-Spalten wie im Container Platz haben, wobei der zusätzliche Raum gleichmäßig verteilt wird.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### Sowohl Anzahl als auch Breite der Spalten festlegen

Wenn Sie beide Eigenschaften auf einem Multicol-Container angeben, fungiert `column-count` als maximale Anzahl von Spalten. Daher wird das Verhalten wie für `column-width` beschrieben stattfinden, bis die in `column-count` angegebene Anzahl von Spalten erreicht ist. Ab diesem Punkt werden keine weiteren Spalten gezeichnet, und der zusätzliche Raum wird gleichmäßig zwischen den bestehenden Spalten verteilt, auch wenn genügend Platz für weitere Spalten der angegebenen `column-width` Größe vorhanden ist.

Wenn Sie beide Eigenschaften zusammen verwenden, kann es vorkommen, dass weniger Spalten angezeigt werden als im Wert für `column-count` angegeben.

Im nächsten Beispiel verwenden wir `column-width` von `200px` und `column-count` von `2`. Selbst wenn Platz für mehr als zwei Spalten vorhanden ist, erhalten wir zwei. Wenn nicht genug Platz für zwei Spalten mit jeweils mindestens 200 Pixeln vorhanden ist, erhalten wir eine.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### Kurzform für Spalteneigenschaften

Sie können die Kurzform `columns` verwenden, um die Werte für `column-count` und `column-width` festzulegen. Wenn Sie eine Längeneinheit angeben, wird der Wert für `column-width` verwendet, und wenn Sie eine ganze Zahl angeben, wird der Wert für `column-count` verwendet. Sie können beide Eigenschaften festlegen, indem Sie die beiden Werte mit einem Leerzeichen trennen.

Dieses CSS würde das gleiche Ergebnis liefern wie [Beispiel 1](#anzahl_der_spalten_festlegen), mit `column-count` auf `3` gesetzt.

```css
.container {
  columns: 3;
}
```

Dieses CSS würde das gleiche Ergebnis liefern wie [Beispiel 2](#breite_der_spalten_festlegen), mit einer `column-width` von `200px`.

```css
.container {
  columns: 200px;
}
```

Dieses CSS würde das gleiche Ergebnis liefern wie [Beispiel 3](#sowohl_anzahl_als_auch_breite_der_spalten_festlegen), mit sowohl `column-count` als auch `column-width` gesetzt.

```css
.container {
  columns: 2 200px;
}
```

## Nächste Schritte

In diesem Leitfaden haben wir die grundlegende Verwendung von Multi-Column-Layouts gelernt. Im nächsten Leitfaden werden wir uns ansehen, wie viel wir die [Spalten selbst stylen können](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns).
