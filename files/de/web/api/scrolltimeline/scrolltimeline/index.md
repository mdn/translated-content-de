---
title: "ScrollTimeline: ScrollTimeline() Konstruktor"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

Der **`ScrollTimeline()`** Konstruktor erstellt eine neue [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) Objektinstanz.

## Syntax

```js-nolint
new ScrollTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `source`
      - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das das scrollbare Element (_Scroller_) darstellt, dessen Scrollposition den Fortschritt der Timeline steuern wird.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse darstellt, die den Fortschritt der Timeline steuern wird. Mögliche Werte sind:

        - `"block"`: Der Scrollbalken auf der Blockachse des Scrollcontainers, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie standardmäßiges Englisch, ist dies dasselbe wie `"y"`, während es für vertikale Schreibrichtungen dasselbe wie `"x"` ist.
        - `"inline"`: Der Scrollbalken auf der Inlineachse des Scrollcontainers, welche die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `"x"`, während es für vertikale Schreibrichtungen dasselbe wie `"y"` ist.
        - `"y"`: Der Scrollbalken auf der Vertikalachse des Scrollcontainers.
        - `"x"`: Der Scrollbalken auf der Horizontalachse des Scrollcontainers.

        Wenn `axis` weggelassen wird, ist der Standardwert `"block"`.

### Rückgabewert

Eine neue [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) Objektinstanz.

## Beispiele

Für ein Beispiel siehe die Hauptseite von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Scroll-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
