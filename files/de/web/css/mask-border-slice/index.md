---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Bereiche. Diese Bereiche werden genutzt, um die Bestandteile des [Maskenrahmens](/de/docs/Web/CSS/mask-border) eines Elements zu bilden.

## Syntax

```css
/* Alle Seiten */
mask-border-slice: 30%;

/* oben und unten | links und rechts */
mask-border-slice: 10% 30%;

/* oben | links und rechts | unten */
mask-border-slice: 30 30% 45;

/* oben | rechts | unten | links */
mask-border-slice: 7 12 14 5;

/* Verwendung des `fill` Schlüsselwortes */
mask-border-slice: 10% fill 7 12;

/* Globale Werte */
mask-border-slice: inherit;
mask-border-slice: initial;
mask-border-slice: revert;
mask-border-slice: revert-layer;
mask-border-slice: unset;
```

Die `mask-border-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildausschnitts zu bestimmen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wird **eine** Position angegeben, erstellt sie alle vier Ausschnitte in gleichem Abstand zu ihren jeweiligen Seiten.
- Werden **zwei** Positionen angegeben, erstellt der erste Wert Ausschnitte, die vom **oben und unten** gemessen werden, der zweite erstellt Ausschnitte, die vom **links und rechts** gemessen werden.
- Werden **drei** Positionen angegeben, erstellt der erste Wert einen Ausschnitt, der vom **oben** gemessen wird, der zweite erstellt Ausschnitte, die vom **links und rechts** gemessen werden, der dritte erstellt einen Ausschnitt, der vom **unten** gemessen wird.
- Werden **vier** Positionen angegeben, erstellen sie Ausschnitte, die vom **oben**, **rechts**, **unten** und **links** gemessen werden, in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale `fill` Wert kann, falls verwendet, an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern bezieht sich die Zahl auf die Größe des Elements, nicht auf die Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Randversatz als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt die mittlere Bildregion. Ihre Breite und Höhe werden so dimensioniert, dass sie zu den oberen und linken Bildregionen passt.

## Beschreibung

Der Zerschneidungsprozess erstellt insgesamt neun Regionen: vier Ecken, vier Ränder und eine mittlere Region. Vier Schneidelinien, die in einem bestimmten Abstand zu ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Regionen.

![Die neun Regionen, die durch die Eigenschaften border-image oder border-image-slice definiert werden](border-image-slice.png)

Das obige Diagramm zeigt die Position jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu bilden.
- Zonen 5-8 sind Randregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/mask-border-repeat) im endgültigen Rahmenbild, um den Dimensionen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, wird aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}}, und {{cssxref("mask-border-outset")}} bestimmen, wie diese Regionen verwendet werden, um den endgültigen Maskenrahmen zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Diese Eigenschaft scheint bisher nirgends unterstützt zu werden. Sobald sie schließlich unterstützt wird, wird sie dazu dienen, die Größe der Ausschnitte zu definieren, die aus dem Quellbild genommen werden und den Rahmenmasken bilden.

```css
mask-border-slice: 30 fill;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (mithilfe der veralteten, in Chromium unterstützten Maskeneigenschaften mit Präfix), sodass Sie eine Vorstellung vom Effekt bekommen können.

> [!NOTE]
> Das Schlüsselwort fill muss enthalten sein, wenn Sie möchten, dass der Inhalt des Elements sichtbar ist.

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
- [Illustrierte Beschreibung der 1-bis-4-Wert-Syntax](/de/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
