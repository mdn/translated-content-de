---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Regionen. Diese Regionen werden verwendet, um die Komponenten eines [Maskenrandes](/de/docs/Web/CSS/mask-border) eines Elements zu bilden.

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

Die `mask-border-slice`-Eigenschaft kann mit ein bis vier `<number-percentage>`-Werten angegeben werden, um die Position jedes Bildschnitts darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, werden alle vier Schnitte in gleichem Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben werden, erzeugt der erste Wert Schnitte, die von **oben und unten** gemessen werden, und der zweite Wert Schnitte, die von **links und rechts** gemessen werden.
- Wenn **drei** Positionen angegeben werden, erzeugt der erste Wert einen Schnitt, der von **oben** gemessen wird, der zweite Wert erzeugt Schnitte, die von **links und rechts** gemessen werden, und der dritte Wert erzeugt einen Schnitt, der von **unten** gemessen wird.
- Wenn **vier** Positionen angegeben werden, erzeugen sie Schnitte, die in dieser Reihenfolge (im Uhrzeigersinn) von **oben**, **rechts**, **unten** und **links** gemessen werden.

Der optionale Wert `fill`, falls verwendet, kann an jeder Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Für Vektorbilder ist die Zahl relativ zur Größe des Elements und nicht zur Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenversatz als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Erhält die mittlere Bildregion. Ihre Breite und Höhe werden an die oberen und linken Bildregionen angepasst.

## Beschreibung

Der Schneideprozess erzeugt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schneidelinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, kontrollieren die Größe der Regionen.

![Die neun durch die Eigenschaften border-image oder border-image-slice definierten Regionen](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmalig verwendet, um die Ecken des endgültigen Randbilds zu formen.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/mask-border-repeat) im endgültigen Randbild, um den Abmessungen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, aber als Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}} und {{cssxref("mask-border-outset")}} bestimmen, wie diese Regionen verwendet werden, um den endgültigen Maskenrand zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-slice` dient dazu, die Größe der aus dem Quellbild entnommenen Schnitte zu definieren und wird verwendet, um die Randmaske zu erstellen.

```css
mask-border-slice: 30 fill;
```

Auf Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten maskierten Rand-Eigenschaften, die in Chromium unterstützt werden), um Ihnen eine Vorstellung von der Wirkung zu geben.

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
- [Illustrierte Beschreibung der Syntax mit 1 bis 4 Werten](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties#tricky_edge_cases)
