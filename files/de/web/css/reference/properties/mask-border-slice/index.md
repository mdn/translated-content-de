---
title: mask-border-slice
slug: Web/CSS/Reference/Properties/mask-border-slice
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Regionen. Diese Regionen werden verwendet, um die Komponenten des [Maskierungsrahmens](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements zu bilden.

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

Die `mask-border-slice`-Eigenschaft kann mit einem bis vier `<number-percentage>`-Werten spezifiziert werden, um die Position jedes Bildschnittes darzustellen. Negative Werte sind ungültig; Werte, die über ihrer entsprechenden Dimension liegen, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, werden alle vier Schnitte im gleichen Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben werden, erstellt der erste Wert Schnitte, die vom **oberen und unteren** Rand gemessen werden, der zweite erstellt Schnitte, die vom **linken und rechten** Rand gemessen werden.
- Wenn **drei** Positionen angegeben werden, erstellt der erste Wert einen Schnitt, der vom **oberen** Rand gemessen wird, der zweite erstellt Schnitte, die vom **linken und rechten** Rand gemessen werden, der dritte erstellt einen Schnitt, der vom **unteren** Rand gemessen wird.
- Wenn **vier** Positionen angegeben werden, erstellen sie Schnitte, die im Uhrzeigersinn vom **oberen**, **rechten**, **unteren** und **linken** Rand gemessen werden.

Der optionale Wert `fill`, falls verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randabstand in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Für Vektorbilder ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randabstand als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt die mittlere Bildregion. Ihre Breite und Höhe werden so bemessen, dass sie den oberen und linken Bildregionen entsprechen.

## Beschreibung

Der Schneideprozess erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schnittlinien, die einen bestimmten Abstand von ihren jeweiligen Seiten haben, kontrollieren die Größe der Regionen.

![Die neun durch die Eigenschaften border-image oder border-image-slice definierten Regionen](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu bilden.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat), um im endgültigen Rahmenbild den Abmessungen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}} und {{cssxref("mask-border-outset")}} Eigenschaften bestimmen, wie diese Regionen verwendet werden, um den endgültigen Maskierungsrahmen zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-slice` dient dazu, die Größe der aus dem Quellbild genommenen Schnitte zu definieren und wird verwendet, um die Maskenrahmen zu erstellen.

```css
mask-border-slice: 30 fill;
```

Browser, die auf Chromium basieren, unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten maskierten Rahmen-Eigenschaften mit Präfix in Chromium), sodass Sie eine Vorstellung vom Effekt bekommen.

> [!NOTE]
> Das fill-Schlüsselwort muss eingefügt werden, wenn Sie den Inhalt des Elements sichtbar haben möchten.

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
- [Illustrierte Beschreibung der 1-bis-4-Wert-Syntax](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties#tricky_edge_cases)
