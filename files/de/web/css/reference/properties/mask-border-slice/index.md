---
title: mask-border-slice
slug: Web/CSS/Reference/Properties/mask-border-slice
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} definierte Bild in Regionen auf. Diese Regionen werden verwendet, um die Komponenten eines Elements [Maskenrand](/de/docs/Web/CSS/Reference/Properties/mask-border) zu bilden.

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

Die `mask-border-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildausschnitts darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, werden alle vier Ausschnitte in gleichem Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben werden, wird der erste Wert verwendet, um Ausschnitte gemessen vom **oberen und unteren** Rand zu erstellen, der zweite erstellt Ausschnitte vom **linken und rechten** Rand.
- Wenn **drei** Positionen angegeben werden, wird der erste Wert genutzt, um einen Ausschnitt vom **oberen** Rand zu messen, der zweite erstellt Ausschnitte vom **linken und rechten** Rand, der dritte erstellt einen Ausschnitt vom **unteren** Rand.
- Wenn **vier** Positionen angegeben werden, erstellen sie Ausschnitte gemessen vom **oberen**, **rechten**, **unteren** und **linken** Rand in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale Wert `fill`, falls verwendet, kann an jeder beliebigen Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Bei Vektorbildern bezieht sich die Zahl auf die Größe des Elements, nicht auf die Größe des Quellbilds, daher sind prozentuale Werte in diesen Fällen generell vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randversatz als Prozentsatz der Größe des Quellbilds dar: die Breite des Bildes für horizontale Versatzwerte, die Höhe für vertikale Versatzwerte.
- `fill`
  - : Bewahrt die mittlere Bildregion. Ihre Breite und Höhe werden so angepasst, dass sie den oberen und linken Bildregionen entsprechen.

## Beschreibung

Der Schneidevorgang erzeugt insgesamt neun Regionen: vier Ecken, vier Ränder und eine mittlere Region. Vier Schneidelinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Regionen.

![Die neun Regionen, die durch die border-image oder border-image-slice Eigenschaften definiert sind](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Randbildes zu bilden.
- Zonen 5-8 sind Randregionen. Diese werden im endgültigen Randbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat), um den Dimensionen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, kann aber als Hintergrundbild verwendet werden, falls das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}} und {{cssxref("mask-border-outset")}} bestimmen, wie diese Regionen verwendet werden, um den endgültigen Maskenrand zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-slice` dient dazu, die Größe der aus dem Quellbild entnommenen Ausschnitte zu definieren und wird verwendet, um die Randmaske zu erstellen.

```css
mask-border-slice: 30 fill;
```

Browser auf Chromium-Basis unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die {{cssxref("mask-border")}} Seite enthält ein funktionierendes Beispiel (das die veralteten vorfixierten Maskenrand-Eigenschaften verwendet, die in Chromium unterstützt werden), damit Sie eine Vorstellung von dem Effekt bekommen.

> [!NOTE]
> Das Schlüsselwort `fill` muss eingeschlossen werden, wenn der Inhalt des Elements sichtbar sein soll.

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
- [Illustrierte Beschreibung der 1-bis-4-Werte-Syntax](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties#tricky_edge_cases)
