---
title: <shape>
slug: Web/CSS/shape
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die spezifische Form (Shape) einer Region. Die Region repräsentiert den Teil eines Elements, auf den die Eigenschaft {{cssxref("clip")}} angewendet wird.

> [!NOTE]
> `<shape>` und `rect()` arbeiten in Verbindung mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} veraltet ist. Verwenden Sie, wenn möglich, `clip-path` und den Datentyp {{cssxref("&lt;basic-shape&gt;")}}.

## Syntax

Der `<shape>` Datentyp wird durch die `rect()` Funktion spezifiziert, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm, das oben, rechts, unten und links zeigt, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die oberen und linken Werte definiert. Die untere rechte Ecke wird durch die unteren und rechten Werte definiert.](rect.png)

- _top_
  - : Ist ein {{cssxref("length")}}, das den Versatz für den oberen Teil des Rechtecks relativ zur oberen Grenze des Elements beschreibt.
- _right_
  - : Ist ein {{cssxref("length")}}, das den Versatz für die rechte Seite des Rechtecks relativ zur linken Grenze des Elements beschreibt.
- _bottom_
  - : Ist ein {{cssxref("length")}}, das den Versatz für den unteren Teil des Rechtecks relativ zur oberen Grenze des Elements beschreibt.
- _left_
  - : Ist ein {{cssxref("length")}}, das den Versatz für die linke Seite des Rechtecks relativ zur linken Grenze des Elements beschreibt.

## Interpolation

Wenn animiert, werden die Werte des `<shape>` Datentyps über ihre `top`, `right`, `bottom` und `left` Komponenten interpoliert, die jeweils als reale, gleitkommazahlige Nummern behandelt werden. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiel

### Beispiel, das den korrekten Einsatz der rect() Funktion demonstriert

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
