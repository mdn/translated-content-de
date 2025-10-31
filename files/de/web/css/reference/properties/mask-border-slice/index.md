---
title: mask-border-slice
slug: Web/CSS/Reference/Properties/mask-border-slice
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Bereiche. Diese Bereiche werden verwendet, um die Komponenten des [Maskenrandes](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements zu bilden.

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

Die `mask-border-slice`-Eigenschaft kann mit ein bis vier `<number-percentage>`-Werten angegeben werden, um die Position jedes Bildausschnitts darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` beschränkt.

- Wenn **ein** Wert angegeben wird, werden alle vier Ausschnitte in gleichem Abstand zu ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Werte angegeben werden, erzeugt der erste Wert Ausschnitte, die vom **oberen und unteren** Rand gemessen werden, der zweite Wert erzeugt Ausschnitte, die vom **linken und rechten** Rand gemessen werden.
- Wenn **drei** Werte angegeben werden, erzeugt der erste Wert einen Ausschnitt, der vom **oberen** Rand gemessen wird, der zweite Wert erzeugt Ausschnitte, die vom **linken und rechten** Rand gemessen werden, der dritte Wert erzeugt einen Ausschnitt, der vom **unteren** Rand gemessen wird.
- Wenn **vier** Werte angegeben werden, werden Ausschnitte vom **oberen**, **rechten**, **unteren** und **linken** Rand in dieser Reihenfolge (im Uhrzeigersinn) gemessen.

Der optionale Wert `fill`, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Randabstand in _Pixel_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Für Vektorbilder ist die Zahl relativ zur Größe des Elements und nicht zur Größe des Quellbildes, daher sind Prozentsätze in diesen Fällen im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Randabstand als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Abstände, die Höhe für vertikale Abstände.
- `fill`
  - : Erhält den mittleren Bildbereich. Seine Breite und Höhe sind so bemessen, dass sie den oberen und linken Bildbereichen entsprechen.

## Beschreibung

Der Schneideprozess erzeugt insgesamt neun Bereiche: vier Ecken, vier Ränder und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten festgelegt sind, steuern die Größe der Bereiche.

![Die neun durch die border-image oder border-image-slice Eigenschaften definierten Bereiche](border-image-slice.png)

Das obige Diagramm zeigt die Lage jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jeder von ihnen wird jeweils einmal verwendet, um die Ecken des endgültigen Randbildes zu bilden.
- Zonen 5-8 sind Randbereiche. Diese werden im endgültigen Randbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat), um den Dimensionen des Elements zu entsprechen.
- Zone 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}} und {{cssxref("mask-border-outset")}} bestimmen, wie diese Bereiche verwendet werden, um den endgültigen Maskenrand zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-slice` dient dazu, die Größe der aus dem Quellbild entnommenen Ausschnitte zu definieren und wird verwendet, um den Randmasken zu erstellen.

```css
mask-border-slice: 30 fill;
```

Auf Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten präfixierten Border-Masken-Eigenschaften, die in Chromium unterstützt werden), so dass Sie einen Eindruck von dem Effekt bekommen.

> [!NOTE]
> Das Schlüsselwort `fill` muss enthalten sein, wenn Sie möchten, dass der Inhalt des Elements sichtbar ist.

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
- [Bildliche Beschreibung der 1-zu-4-Wert-Syntax](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties#tricky_edge_cases)
