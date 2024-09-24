---
title: box-direction
slug: Web/CSS/box-direction
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modul-Entwurfs und wurde durch einen neueren Standard ersetzt. Das `-moz-box-direction` wird nur für XUL verwendet, während der vorherige Standard `box-direction` durch `flex-direction` ersetzt wurde. Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, ob ein Kasten seine Inhalte normal (von der oberen oder linken Kante) oder umgekehrt (von der unteren oder rechten Kante) anordnet.

## Syntax

```css
/* Schlüsselwortwerte */
box-direction: normal;
box-direction: reverse;

/* Globale Werte */
box-direction: inherit;
box-direction: initial;
box-direction: revert;
box-direction: revert-layer;
box-direction: unset;
```

Die `box-direction` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte spezifiziert.

### Werte

- `normal`
  - : Der Kasten ordnet seine Inhalte vom Anfang (der linken oder oberen Kante) an.
- `reverse`
  - : Der Kasten ordnet seine Inhalte vom Ende (der rechten oder unteren Kante) an.

## Hinweise

Der Rand des Kastens, der für Layoutzwecke als _Anfang_ festgelegt wird, hängt von der Orientierung des Kastens ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

Der gegenüberliegende Rand des Anfangs wird als _Ende_ bezeichnet.

Wenn die Richtung mit dem `dir` Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-direction =
  normal | reverse | inherit
```

## Beispiele

### Einstellung der Box-Richtung

```css
.example {
  /* Layout von unten nach oben */
  -moz-box-direction: reverse; /* Mozilla */
  -webkit-box-direction: reverse; /* WebKit */
  box-direction: reverse; /* Wie angegeben */
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
