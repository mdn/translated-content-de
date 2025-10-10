---
title: <shape>
slug: Web/CSS/shape
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) definiert die spezifische Form (Gestalt) einer Region. Die Region repräsentiert den Teil eines Elements, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> [!NOTE]
> `<shape>` und `rect()` funktionieren zusammen mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} als veraltet gilt. Wann immer möglich, sollten Sie `clip-path` und den {{cssxref("&lt;basic-shape&gt;")}}-Datentyp verwenden.

## Syntax

Der `<shape>`-Datentyp wird mit der `rect()`-Funktion angegeben, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm, das oben, rechts, unten und links zeigt, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die oberen und linken Werte definiert. Die untere rechte Ecke wird durch die unteren und rechten Werte definiert.](rect.png)

- _top_
  - : Ist ein {{cssxref("length")}}, das die Verschiebung für die Oberseite des Rechtecks relativ zur oberen Begrenzung des Elementrahmens darstellt.
- _right_
  - : Ist ein {{cssxref("length")}}, das die Verschiebung für die rechte Seite des Rechtecks relativ zur linken Begrenzung des Elementrahmens darstellt.
- _bottom_
  - : Ist ein {{cssxref("length")}}, das die Verschiebung für die Unterseite des Rechtecks relativ zur oberen Begrenzung des Elementrahmens darstellt.
- _left_
  - : Ist ein {{cssxref("length")}}, das die Verschiebung für die linke Seite des Rechtecks relativ zur linken Begrenzung des Elementrahmens darstellt.

## Interpolation

Bei Animationen werden die Werte des `<shape>`-Datentyps über ihre `top`, `right`, `bottom` und `left` Komponenten interpoliert, wobei jede als reale, Gleitkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation assoziiert ist.

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
