---
title: <shape>
slug: Web/CSS/shape
l10n:
  sourceCommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{CSSRef}}{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert die spezifische Form (Gestalt) einer Region. Die Region stellt den Teil eines Elements dar, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> **Note:** `<shape>` und `rect()` arbeiten in Verbindung mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} als veraltet gilt. Verwenden Sie nach Möglichkeit `clip-path` und den {{cssxref("&lt;basic-shape&gt;")}}-Datentyp.

## Syntax

Der `<shape>`-Datentyp wird unter Verwendung der Funktion `rect()` spezifiziert, die eine Region in der Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm, das oben, rechts, unten und links zeigt, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die Werte oben und links definiert. Die untere rechte Ecke wird durch die Werte unten und rechts definiert.](rect.png)

- _top_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Oberseite des Rechtecks relativ zur oberen Grenze des Elements definiert.
- _right_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die rechte Seite des Rechtecks relativ zur linken Grenze des Elements definiert.
- _bottom_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Unterseite des Rechtecks relativ zur oberen Grenze des Elements definiert.
- _left_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die linke Seite des Rechtecks relativ zur linken Grenze des Elements definiert.

## Interpolation

Wenn animiert, werden Werte des `<shape>`-Datentyps über ihre `top`-, `right`-, `bottom`- und `left`-Komponenten interpoliert, wobei jede als reale Gleitkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiel

### Beispiel zur korrekten Verwendung der Funktion rect()

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
