---
title: <shape>
slug: Web/CSS/shape
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die spezifische Form (Shape) einer Region. Die Region stellt den Teil eines Elements dar, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> **Note:** `<shape>` und `rect()` funktionieren in Kombination mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} veraltet ist. Verwenden Sie, wenn möglich, `clip-path` und den Datentyp {{cssxref("&lt;basic-shape&gt;")}}.

## Syntax

Der `<shape>`-Datentyp wird mithilfe der `rect()`-Funktion definiert, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm, das oben, rechts, unten und links zeigt, wie unten beschrieben. Diese Werte definieren die Form des Rechtecks. Die obere linke Ecke wird durch die Werte oben und links definiert. Die untere rechte Ecke wird durch die Werte unten und rechts definiert.](rect.png)

- _top_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Oberseite des Rechtecks relativ zur oberen Begrenzung des Elementrahmens darstellt.
- _right_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die rechte Seite des Rechtecks relativ zur linken Begrenzung des Elementrahmens darstellt.
- _bottom_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Unterseite des Rechtecks relativ zur oberen Begrenzung des Elementrahmens darstellt.
- _left_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die linke Seite des Rechtecks relativ zur linken Begrenzung des Elementrahmens darstellt.

## Interpolation

Wenn animiert, werden die Werte des `<shape>`-Datentyps über ihre `top`-, `right`-, `bottom`- und `left`-Komponenten interpoliert, wobei jede als reale, gleitende Kommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiel

### Beispiel, das die korrekte Verwendung der rect()-Funktion zeigt

```css
img.clip04 {
  clip: rect(10px, 20px, 20px, 10px);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaft: {{ cssxref("clip") }}
