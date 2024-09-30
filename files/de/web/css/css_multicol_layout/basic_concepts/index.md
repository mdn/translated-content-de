---
title: Grundkonzepte des Multi-Column-Layouts
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Das Multi-Column-Layout, oft als Multicol-Layout bezeichnet, ist eine Spezifikation zur Anordnung von Inhalten in einer Reihe von Spaltenboxen, ähnlich wie Spalten in einer Zeitung. Dieser Leitfaden erklärt, wie die Spezifikation funktioniert, mit einigen Beispielen für häufige Anwendungsfälle.

## Wichtige Eigenschaften

Das Multicol-Layout unterscheidet sich von anderen CSS-Layout-Methoden; es fragmentiert den Inhalt, einschließlich aller abgeleiteten Elemente, in Spalten. Dies geschieht auf die gleiche Weise, wie Inhalte in Seiten fragmentiert werden, wenn wir mit [CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) arbeiten, indem wir ein Druckstileblatt erstellen.

In diesem und nachfolgenden Leitfäden werden wir die folgenden Eigenschaften diskutieren, die im [CSS-Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert sind:

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}} shorthand
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## Spalten definieren

Indem Sie dem Element die Eigenschaft `column-count` oder `column-width` hinzufügen oder die Kurzform `columns` verwenden, wird das Element zu einem _Multi-Column-Container_ oder kurz _Multicol-Container_. Die Spalten sind anonyme Boxen und werden in der Spezifikation als _Spaltenboxen_ beschrieben.

### Festlegen der Anzahl der Spalten

Die Eigenschaft `column-count` legt die Anzahl der Spalten fest, in denen der Inhalt angezeigt werden soll. Der Browser weist dann jeder Spaltenbox den entsprechenden Platz zu, um die angegebene Anzahl von Spalten zu erstellen.

Im folgenden Beispiel verwenden wir die Eigenschaft `column-count`, um drei Spalten auf dem `.container`-Element zu erstellen. Der Inhalt, einschließlich der Kinder von `.container`, wird dann zwischen den drei Spalten aufgeteilt.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

Im obigen Beispiel ist der Inhalt innerhalb der Absatz-`<p>`-Tags mit der Standardstilierung eingeschlossen. Daher befindet sich über jedem Absatz ein Rand. Sie können sehen, wie dieser Rand die erste Textzeile nach unten drückt. Dies liegt daran, dass ein Multicol-Container einen [Block-Formatierungskontext (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erzeugt, weshalb Ränder von Kindelementen nicht mit einem Rand auf dem Container kollabieren.

### Festlegen der Breite von Spalten

Die Eigenschaft `column-width` wird verwendet, um die optimale Breite für jede Spaltenbox festzulegen. Wenn Sie eine Spaltenbreite deklarieren, ermittelt der Browser, wie viele Spalten dieser Breite in den Multicol-Container passen, und verteilt den zusätzlichen Platz gleichmäßig zwischen den Spalten. Daher sollte die Spaltenbreite als Mindestbreite angesehen werden, da die Spaltenboxen aufgrund des zusätzlichen Platzes wahrscheinlich breiter werden.

Bei einer einzelnen Spalte mit weniger verfügbarer Breite als dem Wert von `column-width` schrumpft die Spaltenbox auf eine kleinere Größe als die deklarierte Spaltenbreite.

Im folgenden Beispiel ist die Eigenschaft `column-width` auf `200px` festgelegt. Wir erhalten so viele 200-Pixel-Spalten, wie in den Container passen, wobei der zusätzliche Raum gleichmäßig verteilt wird.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### Festlegen von Anzahl und Breite der Spalten

Wenn Sie beide Eigenschaften auf einem Multicol-Container angeben, fungiert `column-count` als maximale Anzahl von Spalten. Daher tritt das für `column-width` beschriebene Verhalten ein, bis die Anzahl der in `column-count` angegebenen Spalten erreicht ist. Danach werden keine weiteren Spalten gezogen, und der zusätzliche Raum wird gleichmäßig zwischen den vorhandenen Spalten verteilt, selbst wenn genügend Platz für mehr Spalten der angegebenen `column-width`-Größe vorhanden ist.

Wenn Sie beide Eigenschaften zusammen verwenden, können es weniger Spalten sein, als in dem Wert für `column-count` angegeben.

Im nächsten Beispiel verwenden wir `column-width` von `200px` und `column-count` von `2`. Selbst wenn es Platz für mehr als zwei Spalten gibt, erhalten wir zwei. Wenn nicht genug Platz für zwei Spalten von mindestens 200 Pixeln vorhanden ist, erhalten wir eine.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### Kurzform für Spalteneigenschaften

Sie können die Kurzform `columns` verwenden, um die Werte für `column-count` und `column-width` festzulegen. Wenn Sie eine Längeneinheit angeben, wird der Wert für `column-width` verwendet, und wenn Sie eine Ganzzahl angeben, wird der Wert für `column-count` verwendet. Sie können beide Eigenschaften festlegen, indem Sie die beiden Werte mit einem Leerzeichen trennen.

Dieses CSS würde das gleiche Ergebnis wie [Beispiel 1](#festlegen_der_anzahl_der_spalten) liefern, mit `column-count` auf `3` gesetzt.

```css
.container {
  columns: 3;
}
```

Dieses CSS würde das gleiche Ergebnis wie [Beispiel 2](#festlegen_der_breite_von_spalten) liefern, mit `column-width` von `200px`.

```css
.container {
  columns: 200px;
}
```

Dieses CSS würde das gleiche Ergebnis wie [Beispiel 3](#festlegen_von_anzahl_und_breite_der_spalten) liefern, mit sowohl `column-count` als auch `column-width` festgelegt.

```css
.container {
  columns: 2 200px;
}
```

## Nächste Schritte

In diesem Leitfaden haben wir die grundlegende Verwendung des Multi-Column-Layouts kennengelernt. Im nächsten Leitfaden werden wir uns ansehen, wie viel wir die [Spalten selbst gestalten können](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns).
