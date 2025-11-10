---
title: <shape>
slug: Web/CSS/Reference/Values/shape
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die spezifische Form eines Bereichs. Der Bereich repräsentiert den Teil eines Elements, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> [!NOTE]
> `<shape>` und `rect()` arbeiten in Verbindung mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} veraltet ist. Wann immer möglich, verwenden Sie `clip-path` und den {{cssxref("&lt;basic-shape&gt;")}} Datentyp.

## Syntax

Der `<shape>` Datentyp wird mit der `rect()` Funktion angegeben, die einen rechteckigen Bereich erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm, das oben, rechts, unten und links zeigt, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die Werte oben und links definiert. Die untere rechte Ecke wird durch die Werte unten und rechts definiert.](rect.png)

- _top_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Oberseite des Rechtecks relativ zur oberen Grenze des Elementrahmens darstellt.
- _right_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die rechte Seite des Rechtecks relativ zur linken Grenze des Elementrahmens darstellt.
- _bottom_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Unterseite des Rechtecks relativ zur oberen Grenze des Elementrahmens darstellt.
- _left_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die linke Seite des Rechtecks relativ zur linken Grenze des Elementrahmens darstellt.

## Interpolation

Wenn animiert, werden die Werte des `<shape>` Datentyps über ihre `top`, `right`, `bottom` und `left` Komponenten interpoliert, wobei jede als reale, Gleitkomma-Zahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiel

### Beispiel, das die korrekte Verwendung der rect() Funktion demonstriert

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
