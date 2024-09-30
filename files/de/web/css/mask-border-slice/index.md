---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Regionen. Diese Regionen werden verwendet, um die Komponenten eines Elements [Maskenrahmen](/de/docs/Web/CSS/mask-border) zu bilden.

## Syntax

```css
/* All sides */
mask-border-slice: 30%;

/* top and bottom | left and right */
mask-border-slice: 10% 30%;

/* top | left and right | bottom */
mask-border-slice: 30 30% 45;

/* top | right | bottom | left */
mask-border-slice: 7 12 14 5;

/* Using the `fill` keyword */
mask-border-slice: 10% fill 7 12;

/* Global values */
mask-border-slice: inherit;
mask-border-slice: initial;
mask-border-slice: revert;
mask-border-slice: revert-layer;
mask-border-slice: unset;
```

Die `mask-border-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildslices darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben wird, werden alle vier Slices in gleichem Abstand von ihrer jeweiligen Seite erstellt.
- Wenn **zwei** Werte angegeben werden, erstellt der erste Wert Slices, die vom **oben und unten** gemessen werden, der zweite erstellt Slices, die vom **links und rechts** gemessen werden.
- Wenn **drei** Werte angegeben werden, erstellt der erste Wert ein Slice, das vom **oben** gemessen wird, der zweite erstellt Slices, die vom **links und rechts** gemessen werden, der dritte erstellt ein Slice, das vom **unten** gemessen wird.
- Wenn **vier** Werte angegeben werden, werden diese in dieser Reihenfolge (im Uhrzeigersinn) vom **oben**, **rechts**, **unten** und **links** gemessen.

Der optionale `fill` Wert, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenabstand in _Pixel_ für Rastergrafiken und _Koordinaten_ für Vektorgrafiken. Bei Vektorgrafiken ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze generell vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenabstand als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Abstände, die Höhe für vertikale Abstände.
- `fill`
  - : Bewahrt die mittlere Bildregion. Ihre Breite und Höhe sind so bemessen, dass sie zur oberen und linken Bildregion passen.

## Beschreibung

Der Schneidevorgang erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schnittlinien, die in einem bestimmten Abstand zu ihren jeweiligen Seiten festgelegt sind, bestimmen die Größe der Regionen.

![Die neun Regionen, die durch die Eigenschaften border-image oder border-image-slice definiert werden](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu bilden.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/mask-border-repeat) im endgültigen Rahmenbild, um den Dimensionen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, wird aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}}, und {{cssxref("mask-border-outset")}} Eigenschaften bestimmen, wie diese Regionen verwendet werden, um den endgültigen Maskenrahmen zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, dient sie dazu, die Größe der aus dem Quellbild genommenen Slices zu definieren und den Rahmenmaske zu erstellen.

```css
mask-border-slice: 30 fill;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) bietet ein funktionierendes Beispiel (unter Verwendung der in Chromium unterstützten veralteten maskierten Rahmen-Eigenschaften mit Präfix), damit Sie eine Vorstellung vom Effekt bekommen.

> [!NOTE]
> Das fill-Schlüsselwort muss eingeschlossen werden, wenn Sie möchten, dass der Inhalt des Elements sichtbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
- [Illustrierte Beschreibung der 1-bis-4-Werte-Syntax](/de/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
