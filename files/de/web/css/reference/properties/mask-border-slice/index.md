---
title: "`mask-border-slice` CSS property"
short-title: mask-border-slice
slug: Web/CSS/Reference/Properties/mask-border-slice
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft unterteilt das Bild, das durch {{cssxref("mask-border-source")}} festgelegt wurde, in Regionen. Diese Regionen werden verwendet, um die Komponenten eines Elements [Maskenrahmen](/de/docs/Web/CSS/Reference/Properties/mask-border) zu bilden.

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

Die `mask-border-slice` Eigenschaft kann mit einem bis zu vier `<number-percentage>`-Werten spezifiziert werden, um die Position jedes Bildausschnitts darzustellen. Negative Werte sind ungültig; Werte, die größer als die entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, werden alle vier Ausschnitte im gleichen Abstand zu ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben werden, wird mit dem ersten Wert die Messung der Ausschnitte oben und unten vorgenommen, mit dem zweiten die Messung links und rechts.
- Wenn **drei** Positionen angegeben werden, wird mit dem ersten Wert der Ausschnitt oben gemessen, mit dem zweiten die Messung der Ausschnitte links und rechts, mit dem dritten der Ausschnitt unten.
- Wenn **vier** Positionen angegeben werden, werden die Ausschnitte in der Reihenfolge **oben**, **rechts**, **unten** und **links** gemessen (im Uhrzeigersinn).

Der optionale `fill`-Wert, falls verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, sodass in diesen Fällen prozentuale Angaben allgemein bevorzugt werden.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Randversatz als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt die mittlere Bildregion. Ihre Breite und Höhe werden so bemessen, dass sie der oberen und linken Bildregion entsprechen.

## Beschreibung

Der Schneidvorgang erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schneidelinien, die in einem bestimmten Abstand zu ihren jeweiligen Seiten liegen, steuern die Größe der Regionen.

![Die neun Regionen definiert durch die border-image oder border-image-slice Eigenschaften](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zu den Bereichen 1-4 gehören die Eckregionen. Jede wird einmal verwendet, um die Ecken des finalen Rahmenbildes zu formen.
- Die Bereiche 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat), um im finalen Rahmenbild die Dimensionen des Elements anzupassen.
- Bereich 9 ist die mittlere Region. Standardmäßig wird sie verworfen, jedoch ähnlich einem Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}}, und {{cssxref("mask-border-outset")}} bestimmen, wie diese Regionen verwendet werden, um den finalen Maskenrahmen zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-slice` dient dazu, die Größe der aus dem Quellbild entnommenen Ausschnitte zu definieren, und wird verwendet, um die Maskenrahmen zu erstellen.

```css
mask-border-slice: 30 fill;
```

Browser basierend auf Chromium unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (bei dem die veralteten, in Chromium unterstützten Rahmeneigenschaften mit Präfix verwendet werden), damit Sie eine Vorstellung vom Effekt bekommen.

> [!NOTE]
> Das `fill`-Schlüsselwort muss enthalten sein, wenn Sie möchten, dass der Inhalt des Elements sichtbar ist.

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
- [Illustrierte Beschreibung der 1-zu-4-Wert-Syntax](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties#tricky_edge_cases)
