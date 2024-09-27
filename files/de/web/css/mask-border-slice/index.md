---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("mask-border-source")}} festgelegte Bild in Bereiche. Diese Bereiche werden verwendet, um die Komponenten eines Elements mit einem [Maskierungsrand](/de/docs/Web/CSS/mask-border) zu bilden.

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

Die `mask-border-slice` Eigenschaft kann mit einem bis zu vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildschnitts darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben ist, werden alle vier Schnitte in gleichem Abstand von ihren jeweiligen Seiten erzeugt.
- Wenn **zwei** Werte angegeben sind, erzeugt der erste Wert Schnitte, die vom **oberen und unteren** Rand gemessen werden, und der zweite Wert Schnitte, die vom **linken und rechten** Rand gemessen werden.
- Wenn **drei** Werte angegeben sind, erzeugt der erste Wert einen Schnitt, der vom **oberen** Rand gemessen wird, der zweite Wert Schnitte, die vom **linken und rechten** Rand gemessen werden, und der dritte Wert einen Schnitt, der vom **unteren** Rand gemessen wird.
- Wenn **vier** Werte angegeben sind, werden die Schnitte in dieser Reihenfolge (**oben**, **rechts**, **unten**, **links**) im Uhrzeigersinn gemessen.

Der optionale `fill`-Wert, falls verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Für Vektorbilder ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, sodass Prozentsätze in diesen Fällen im Allgemeinen vorzuziehen sind.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randversatz als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt den mittleren Bildbereich. Seine Breite und Höhe sind darauf ausgelegt, mit den oberen und linken Bildbereichen übereinzustimmen.

## Beschreibung

Der Schneideprozess erstellt insgesamt neun Bereiche: vier Ecken, vier Ränder und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten liegen, kontrollieren die Größe der Bereiche.

![Die neun Bereiche, die von den Eigenschaften border-image oder border-image-slice definiert werden](border-image-slice.png)

Das obige Diagramm zeigt die Lage jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jede wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu formen.
- Zonen 5-8 sind Randbereiche. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/mask-border-repeat), um in das endgültige Rahmenbild die Abmessungen des Elements anzupassen.
- Zone 9 ist der mittlere Bereich. Dieser wird standardmäßig verworfen, kann aber wie ein Hintergrundbild verwendet werden, wenn das Schlüsselwort `fill` festgelegt ist.

Die Eigenschaften {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}} und {{cssxref("mask-border-outset")}} bestimmen, wie diese Bereiche verwendet werden, um den endgültigen Maskierungsrand zu bilden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint momentan noch nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie dazu dienen, die Größe der aus dem Quellbild entnommenen Schnitte zu definieren und den Maskierungsrand zu erstellen.

```css
mask-border-slice: 30 fill;
```

Auf Chromium basierende Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-slice` — mit einem Präfix:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten border mask-Eigenschaften mit Präfix, die in Chromium unterstützt werden), sodass Sie eine Vorstellung von der Wirkung erhalten können.

> [!NOTE]
> Das Fill-Schlüsselwort muss eingeschlossen werden, wenn der Inhalt des Elements sichtbar sein soll.

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
