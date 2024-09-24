---
title: "ScrollTimeline: ScrollTimeline()-Konstruktor"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

Der **`ScrollTimeline()`**-Konstruktor erstellt eine neue Instanz des {{domxref("ScrollTimeline")}}-Objekts.

## Syntax

```js-nolint
new ScrollTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `source`
      - : Ein Verweis auf ein {{domxref("Element")}}, das das scrollbare Element (_scroller_) darstellt, dessen Scrollposition den Fortschritt der Timeline steuern wird.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse darstellt, die den Fortschritt der Timeline steuern wird. Mögliche Werte sind:

        - `"block"`: Der Scrollbalken auf der Blockachse des Scrollcontainers, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie beispielsweise standardmäßiges Englisch, ist dies dasselbe wie `"y"`, während es für vertikale Schreibrichtungen dasselbe wie `"x"` ist.
        - `"inline"`: Der Scrollbalken auf der Inline-Achse des Scrollcontainers, welche die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `"x"`, während es für vertikale Schreibrichtungen dasselbe wie `"y"` ist.
        - `"y"`: Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

        Wenn weggelassen, wird `axis` standardmäßig auf `"block"` gesetzt.

### Rückgabewert

Eine neue Instanz des {{domxref("ScrollTimeline")}}-Objekts.

## Beispiele

Sehen Sie sich die Hauptseite von {{domxref("ScrollTimeline")}} für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("ScrollTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
