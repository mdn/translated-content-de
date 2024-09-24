---
title: <shape>
slug: Web/CSS/shape
l10n:
  sourceCommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{CSSRef}}{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert die spezifische Form (Gestalt) einer Region. Die Region repräsentiert den Teil eines Elements, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> **Note:** `<shape>` und `rect()` arbeiten in Verbindung mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} veraltet ist. Verwenden Sie nach Möglichkeit `clip-path` und den {{cssxref("&lt;basic-shape&gt;")}}-Datentyp.

## Syntax

Der `<shape>`-Datentyp wird mithilfe der `rect()`-Funktion angegeben, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm, das oben, rechts, unten und links zeigt, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die Werte oben und links definiert. Die untere rechte Ecke wird durch die Werte unten und rechts definiert.](rect.png)

- _top_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Oberseite des Rechtecks relativ zur oberen Grenze des Box-Randes des Elements darstellt.
- _right_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die rechte Seite des Rechtecks relativ zur linken Grenze des Box-Randes des Elements darstellt.
- _bottom_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Unterseite des Rechtecks relativ zur oberen Grenze des Box-Randes des Elements darstellt.
- _left_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die linke Seite des Rechtecks relativ zur linken Grenze des Box-Randes des Elements darstellt.

## Interpolation

Wenn animiert, werden die Werte des `<shape>`-Datentyps über ihre `top`, `right`, `bottom` und `left` Komponenten interpoliert, wobei jede als reale Gleitkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die mit der Animation assoziierte [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiel

### Beispiel, das die korrekte Verwendung der rect()-Funktion demonstriert

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
