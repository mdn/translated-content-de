---
title: "ScrollTimeline: ScrollTimeline() Konstruktor"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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
      - : Eine Referenz zu einem [`Element`](/de/docs/Web/API/Element), das das scrollbare Element (_Scroller_) darstellt, dessen Scrollposition den Fortschritt der Zeitleiste steuern wird.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse darstellt, die den Fortschritt der Zeitleiste steuern wird. Mögliche Werte sind:

        - `"block"`: Der Scrollbalken auf der Block-Achse des Scroll-Containers, was die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie Standard-Englisch, entspricht dies der Achse `"y"`, während es für vertikale Schreibrichtungen der Achse `"x"` entspricht.
        - `"inline"`: Der Scrollbalken auf der Inline-Achse des Scroll-Containers, was die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen entspricht dies der Achse `"x"`, während es für vertikale Schreibrichtungen der Achse `"y"` entspricht.
        - `"y"`: Der Scrollbalken auf der vertikalen Achse des Scroll-Containers.
        - `"x"`: Der Scrollbalken auf der horizontalen Achse des Scroll-Containers.

        Wenn weggelassen, wird `axis` standardmäßig als `"block"` gesetzt.

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
