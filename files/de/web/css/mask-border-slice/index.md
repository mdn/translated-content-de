---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Regionen. Diese Regionen werden verwendet, um die Bestandteile des [Maskenrahmens](/de/docs/Web/CSS/mask-border) eines Elements zu bilden.

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

Die Eigenschaft `mask-border-slice` kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildschnitts darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben ist, werden alle vier Schnitte in gleicher Entfernung von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben sind, legt der erste Wert Schnitte fest, die von **oben und unten** gemessen werden, der zweite Wert erstellt Schnitte, die von **links und rechts** gemessen werden.
- Wenn **drei** Positionen angegeben sind, erstellt der erste Wert einen Schnitt von **oben**, der zweite Wert erstellt Schnitte von **links und rechts**, und der dritte Wert erstellt einen Schnitt von **unten**.
- Wenn **vier** Positionen angegeben sind, werden Schnitte in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn) erstellt.

Der optionale Wert `fill`, wenn verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenabstand in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Für Vektorbilder ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, daher sind Prozentwerte in diesen Fällen generell vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenabstand als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Abstände, die Höhe für vertikale Abstände.
- `fill`
  - : Bewahrt den mittleren Bildbereich. Seine Breite und Höhe werden so bemessen, dass sie den oberen und linken Bildbereichen entsprechen.

## Beschreibung

Der Schneideprozess erzeugt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten liegen, steuern die Größe der Bereiche.

![Die neun durch die Eigenschaften border-image oder border-image-slice definierten Regionen](border-image-slice.png)

Das obige Diagramm zeigt den Ort jeder Region.

- Zonen 1-4 sind Eckbereiche. Jede wird einmal verwendet, um die Ecken des abschließenden Rahmenbildes zu bilden.
- Zonen 5-8 sind Kantenbereiche. Diese werden im endgültigen Rahmenbild [wiederholt, skaliert oder anderweitig verändert](/de/docs/Web/CSS/mask-border-repeat), um die Abmessungen des Elements anzupassen.
- Zone 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, aber er wird wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}}, und {{cssxref("mask-border-outset")}} bestimmen, wie diese Bereiche verwendet werden, um den endgültigen Maskenrahmen zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgends unterstützt zu werden. Sobald sie schließlich unterstützt wird, dient sie dazu, die Größe der aus dem Quellbild entnommenen Schnitte zu definieren und den Maskenrahmen zu erstellen.

```css
mask-border-slice: 30 fill;
```

Chrom-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten Maskenrahmeneigenschaften mit Präfixen, die in Chromium unterstützt werden), sodass Sie eine Vorstellung von der Wirkung bekommen können.

> [!NOTE]
> Das Schlüsselwort fill muss eingeschlossen werden, wenn der Inhalt des Elements sichtbar sein soll.

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
