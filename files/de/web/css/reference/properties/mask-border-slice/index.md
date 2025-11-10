---
title: mask-border-slice
slug: Web/CSS/Reference/Properties/mask-border-slice
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Bereiche. Diese Bereiche werden verwendet, um die Komponenten des [Maskenrahmens](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements zu bilden.

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

Die `mask-border-slice` Eigenschaft kann angegeben werden, indem ein bis vier `<number-percentage>` Werte verwendet werden, um die Position jedes Bildausschnitts darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension übersteigen, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben wird, werden alle vier Ausschnitte in gleichem Abstand zu ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Werte angegeben werden, wird mit dem ersten Wert der Abstand vom **oberen und unteren** Rand gemessen, mit dem zweiten Wert der Abstand vom **linken und rechten** Rand.
- Wenn **drei** Werte angegeben werden, wird mit dem ersten Wert der Abstand vom **oberen** Rand gemessen, mit dem zweiten Wert der Abstand vom **linken und rechten** Rand, mit dem dritten Wert der Abstand vom **unteren** Rand.
- Wenn **vier** Werte angegeben werden, werden die Abstände in der Reihenfolge **oben**, **rechts**, **unten** und **links** im Uhrzeigersinn gemessen.

Der optionale Wert `fill`, falls verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randversatz in _Pixeln_ für Rastergrafiken und _Koordinaten_ für Vektorgrafiken dar. Für Vektorgrafiken ist die Nummer relativ zur Größe des Elements und nicht zur Größe des Quellbildes, daher sind in diesen Fällen in der Regel Prozentsätze vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randversatz als Prozentsatz der Quellbildgröße dar: die Breite des Bildes für horizontale, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt den mittleren Bildbereich. Seine Breite und Höhe sind so bemessen, dass sie dem oberen und linken Bildbereich entsprechen.

## Beschreibung

Der Schneideprozess erzeugt insgesamt neun Bereiche: vier Ecken, vier Ränder und einen mittleren Bereich. Vier Schneidelinien, die in einem bestimmten Abstand zu ihren jeweiligen Seiten gesetzt sind, bestimmen die Größe der Bereiche.

![Die neun durch die border-image oder border-image-slice Eigenschaften definierten Bereiche](border-image-slice.png)

Das obige Diagramm veranschaulicht die Position jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jeder wird ein einziges Mal verwendet, um die Ecken des endgültigen Randbildes zu formen.
- Zonen 5-8 sind Randbereiche. Diese werden im endgültigen Randbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat), um den Dimensionen des Elements zu entsprechen.
- Zone 9 ist der mittlere Bereich. Standardmäßig wird er verworfen, aber er wird wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}}, und {{cssxref("mask-border-outset")}} Eigenschaften bestimmen, wie diese Bereiche verwendet werden, um den endgültigen Maskenrand zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

`mask-border-slice` dient dazu, die Größe der Ausschnitte aus dem Quellbild zu definieren und wird verwendet, um die Maskenrahmen zu erstellen.

```css
mask-border-slice: 30 fill;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, mit Präfix versehenen Maskenrahmeneigenschaften, die in Chromium unterstützt werden), damit Sie eine Vorstellung von der Wirkung bekommen können.

> [!NOTE]
> Das Schlüsselwort fill muss eingeschlossen werden, wenn Sie möchten, dass der Inhalt des Elements sichtbar ist.

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
