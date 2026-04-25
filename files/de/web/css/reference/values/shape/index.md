---
title: "`<shape>` CSS-Typ"
short-title: <shape>
slug: Web/CSS/Reference/Values/shape
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

{{deprecated_header}}

Der **`<shape>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die spezifische Form (Gestalt) einer Region. Die Region stellt den Teil eines Elements dar, auf den die {{cssxref("clip")}}-Eigenschaft angewendet wird.

> [!NOTE]
> `<shape>` und `rect()` arbeiten in Verbindung mit {{cssxref("clip")}}, das zugunsten von {{cssxref("clip-path")}} als veraltet gilt. Wann immer möglich, sollten Sie `clip-path` und den {{cssxref("basic-shape")}}-Datentyp verwenden.

## Syntax

Der `<shape>`-Datentyp wird mithilfe der `rect()`-Funktion angegeben, die eine Region in Form eines Rechtecks erzeugt.

`rect()`

```css
rect(top, right, bottom, left)
```

### Werte

![Ein Diagramm zeigt oben, rechts, unten und links, wie unten beschrieben. Diese definieren die Form des Rechtecks. Die obere linke Ecke wird durch die oberen und linken Werte definiert. Die untere rechte Ecke wird durch die unteren und rechten Werte definiert.](rect.png)

- _top_
  - : Ist ein {{cssxref("length")}}, der den Versatz für die Oberseite des Rechtecks relativ zur oberen Grenze des Element-Box angibt.
- _right_
  - : Ist ein {{cssxref("length")}}, der den Versatz für die rechte Seite des Rechtecks relativ zur linken Grenze des Element-Box angibt.
- _bottom_
  - : Ist ein {{cssxref("length")}}, der den Versatz für die Unterseite des Rechtecks relativ zur oberen Grenze des Element-Box angibt.
- _left_
  - : Ist ein {{cssxref("length")}}, der den Versatz für die linke Seite des Rechtecks relativ zur linken Grenze des Element-Box angibt.

## Interpolation

Bei Animationen werden Werte des `<shape>`-Datentyps über ihre `top`, `right`, `bottom` und `left` Komponenten interpoliert, wobei jede als reale Gleitkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

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
