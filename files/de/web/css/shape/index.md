---
title: <shape>
slug: Web/CSS/shape
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die spezifische Form (shape) einer Region. Die Region stellt den Teil eines Elements dar, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> [!NOTE] > `<shape>` und `rect()` funktionieren in Verbindung mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} veraltet ist. Verwenden Sie nach Möglichkeit `clip-path` und den {{cssxref("&lt;basic-shape&gt;")}}-Datentyp.

## Syntax

Der `<shape>`-Datentyp wird mit der Funktion `rect()` angegeben, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Eine Grafik zeigt oben, rechts, unten und links, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die Werte oben und links definiert. Die untere rechte Ecke wird durch die Werte unten und rechts definiert.](rect.png)

- _top_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Oberseite des Rechtecks relativ zur oberen Begrenzung des Box des Elements darstellt.
- _right_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die rechte Seite des Rechtecks relativ zur linken Begrenzung des Box des Elements darstellt.
- _bottom_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die Unterseite des Rechtecks relativ zur oberen Begrenzung des Box des Elements darstellt.
- _left_
  - : Ist eine {{cssxref("length")}}, die den Versatz für die linke Seite des Rechtecks relativ zur linken Begrenzung des Box des Elements darstellt.

## Interpolation

Wenn animiert, werden Werte des `<shape>`-Datentyps über ihre `top`-, `right`-, `bottom`- und `left`-Komponenten interpoliert, wobei jede als reale Gleitkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird von der mit der Animation verbundenen [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

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
