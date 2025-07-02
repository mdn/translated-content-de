---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{CSSRef}}

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} angegebene Bild in Regionen ein. Diese Regionen werden verwendet, um die Komponenten des [Maskenrands](/de/docs/Web/CSS/mask-border) eines Elements zu bilden.

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

Die `mask-border-slice` Eigenschaft kann mit ein bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildausschnitts darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, werden alle vier Schnitte auf demselben Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben werden, erstellt der erste Wert Schnitte, die von **oben und unten** gemessen werden, der zweite erstellt Schnitte, die von **links und rechts** gemessen werden.
- Wenn **drei** Positionen angegeben werden, erstellt der erste Wert einen Schnitt, der von **oben** gemessen wird, der zweite erstellt Schnitte, die von **links und rechts** gemessen werden, der dritte erstellt einen Schnitt, der von **unten** gemessen wird.
- Wenn **vier** Positionen angegeben werden, erstellen sie Schnitte, die der Reihe nach (im Uhrzeigersinn) von **oben**, **rechts**, **unten** und **links** gemessen werden.

Der optionale `fill` Wert, falls verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Für Vektorbilder ist die Zahl relativ zur Größe des Elements und nicht zur Größe des Quellbilds, daher sind in diesen Fällen Prozentsätze allgemein vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenversatz als Prozentsatz der Größe des Quellbilds: die Breite des Bildes für horizontale Versatz, die Höhe für vertikale Versatz.
- `fill`
  - : Erhält die mittlere Bildregion. Ihre Breite und Höhe werden so angepasst, dass sie zu den oberen und linken Bildregionen passen.

## Beschreibung

Der Schneidevorgang erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schnittlinien, die einen bestimmten Abstand von ihren jeweiligen Seiten haben, steuern die Größe der Regionen.

![Die neun Regionen, die durch die border-image oder border-image-slice Eigenschaften definiert werden](border-image-slice.png)

Das obige Diagramm zeigt die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Maskenrandbilds zu formen.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/mask-border-repeat), um den Abmessungen des Elements im endgültigen Maskenrandbild zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}}, und {{cssxref("mask-border-outset")}} Eigenschaften bestimmen, wie diese Regionen verwendet werden, um die endgültige Maskengrenze zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

`mask-border-slice` dient dazu, die Größe der aus dem Quellbild genommenen Schnitte zu definieren und wird verwendet, um den Maskenrand zu erstellen.

```css
mask-border-slice: 30 fill;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die [`mask-border`](/de/docs/Web/CSS/mask-border) Seite enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten Prefixed-Maskenrandeigenschaften), damit Sie eine Vorstellung von der Wirkung bekommen können.

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
- [Illustrierte Beschreibung der 1-bis-4-Werte-Syntax](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties#tricky_edge_cases)
