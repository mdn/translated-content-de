---
title: "ScrollTimeline: ScrollTimeline() Konstruktor"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("History API")}}

Der **`ScrollTimeline()`** Konstruktor erstellt eine neue [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) Objektinstanz.

## Syntax

```js-nolint
new ScrollTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `source`
      - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das das scrollbare Element (_Scroller_) repräsentiert, dessen Scrollposition den Fortschritt der Zeitleiste steuert.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse repräsentiert, die den Fortschritt der Zeitleiste steuern wird. Mögliche Werte sind:

        - `"block"`: Die Scrollleiste auf der Blockachse des Scrollcontainers, die die Achse in der Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie im Standardenglisch, ist dies dasselbe wie `"y"`, während es bei vertikalen Schreibrichtungen dasselbe wie `"x"` ist.
        - `"inline"`: Die Scrollleiste auf der Inline-Achse des Scrollcontainers, die die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `"x"`, während es bei vertikalen Schreibrichtungen dasselbe wie `"y"` ist.
        - `"y"`: Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

        Wenn nicht angegeben, ist der Standardwert für `axis` `"block"`.

### Rückgabewert

Eine neue [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) Objektinstanz.

## Beispiele

Siehe die Hauptseite von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
