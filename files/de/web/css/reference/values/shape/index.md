---
title: <shape>
slug: Web/CSS/Reference/Values/shape
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die spezifische Form (Gestalt) einer Region. Die Region repräsentiert den Teil eines Elements, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> [!NOTE]
> `<shape>` und `rect()` arbeiten zusammen mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} als veraltet gilt. Verwenden Sie, wenn möglich, `clip-path` und den {{cssxref("basic-shape")}}-Datentyp.

## Syntax

Der `<shape>`-Datentyp wird mit der `rect()`-Funktion angegeben, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm, das oben, rechts, unten und links zeigt, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die oberen und linken Werte definiert. Die untere rechte Ecke wird durch die unteren und rechten Werte definiert.](rect.png)

- _top_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Oberkante des Rechtecks relativ zur oberen Grenze des Elementrahmens darstellt.
- _right_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die rechte Kante des Rechtecks relativ zur linken Grenze des Elementrahmens darstellt.
- _bottom_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Unterkante des Rechtecks relativ zur oberen Grenze des Elementrahmens darstellt.
- _left_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die linke Kante des Rechtecks relativ zur linken Grenze des Elementrahmens darstellt.

## Interpolation

Bei Animationen werden die Werte des `<shape>`-Datentyps über ihre `top`, `right`, `bottom` und `left` Komponenten interpoliert, wobei jede als reale, Gleitkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiel

### Beispiel zur korrekten Verwendung der rect()-Funktion

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
