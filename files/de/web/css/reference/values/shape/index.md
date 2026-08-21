---
title: "`<shape>` CSS-Typ"
short-title: <shape>
slug: Web/CSS/Reference/Values/shape
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die spezifische Form (Shape) einer Region. Die Region stellt den Teil eines Elements dar, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> [!NOTE]
> `<shape>` und `rect()` funktionieren in Verbindung mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} als veraltet gilt. Wenn möglich, verwenden Sie `clip-path` und den {{cssxref("basic-shape")}}-Datentyp stattdessen.

## Syntax

Der `<shape>`-Datentyp wird mit der `rect()`-Funktion spezifiziert, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm zeigt oben, rechts, unten und links, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die Werte oben und links definiert. Die untere rechte Ecke wird durch die Werte unten und rechts definiert.](rect.png)

- _top_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Oberseite des Rechtecks relativ zur oberen Grenze des Elementrahmens darstellt.
- _right_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die rechte Seite des Rechtecks relativ zur linken Grenze des Elementrahmens darstellt.
- _bottom_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Unterseite des Rechtecks relativ zur oberen Grenze des Elementrahmens darstellt.
- _left_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die linke Seite des Rechtecks relativ zur linken Grenze des Elementrahmens darstellt.

## Interpolation

Bei Animationen werden die Werte des `<shape>`-Datentyps über ihre `top`-, `right`-, `bottom`- und `left`-Komponenten interpoliert, wobei jede als reelle, Gleitkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Beschleunigungsfunktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

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
