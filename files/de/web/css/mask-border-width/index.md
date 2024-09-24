---
title: mask-border-width
slug: Web/CSS/mask-border-width
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Maskenrandes](/de/docs/Web/CSS/mask-border) eines Elements fest.

## Syntax

```css
/* Schlüsselwortwert */
mask-border-width: auto;

/* <length> Wert */
mask-border-width: 1rem;

/* <percentage> Wert */
mask-border-width: 25%;

/* <number> Wert */
mask-border-width: 3;

/* oben und unten | links und rechts */
mask-border-width: 2em 3em;

/* oben | links und rechts | unten */
mask-border-width: 5% 15% 10%;

/* oben | rechts | unten | links */
mask-border-width: 5% 2em 10% auto;

/* Globale Werte */
mask-border-width: inherit;
mask-border-width: initial;
mask-border-width: revert;
mask-border-width: revert-layer;
mask-border-width: unset;
```

Die Eigenschaft `mask-border-width` kann mit einem, zwei, drei oder vier Werten festgelegt werden, die aus der untenstehenden Werteliste gewählt werden.

- Wenn **ein** Wert angegeben wird, gilt dieselbe Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Breiten in der Reihenfolge **oben**, **rechts**, **unten**, und **links** (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrandes, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Randbereichs für horizontale Verschiebungen und die _Höhe_ des Randbereichs für vertikale Verschiebungen. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrandes, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrandes entspricht der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("mask-border-slice")}}. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Diese Eigenschaft scheint bisher noch nirgendwo unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu, die Breite der Maskeneinfassung zu definieren — eine abweichende Einstellung von [`mask-border-slice`](/de/docs/Web/CSS/mask-border-slice) führt dazu, dass die Abschnitte an die Maskeneinfassung angepasst werden.

```css
mask-border-width: 30 fill;
```

Browser auf Chromium-Basis unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-width` — mit einem Präfix:

```css
-webkit-mask-box-image-width: 20px;
```

> [!NOTE]
> Die Seite zu [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, mit Präfix versehenen Maskeneigenschaften, die in Chromium unterstützt werden), sodass Sie eine Vorstellung vom Effekt bekommen können.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
