---
title: "ScrollTimeline: Konstruktor ScrollTimeline()"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

Der **`ScrollTimeline()`** Konstruktor erstellt eine neue Instanz des [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) Objekts.

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

        - `"block"`: Der Scrollbalken auf der Blockachse des Scrollcontainers, die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibmodi, wie z. B. standardmäßiges Englisch, entspricht dies `"y"`, während es für vertikale Schreibmodi `"x"` entspricht.
        - `"inline"`: Der Scrollbalken auf der Inline-Achse des Scrollcontainers, die Achse in Richtung parallel zum Textfluss in einer Zeile. Für horizontale Schreibmodi entspricht dies `"x"`, während es für vertikale Schreibmodi `"y"` entspricht.
        - `"y"`: Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

        Wenn weggelassen, ist der Standardwert für `axis` `"block"`.

### Rückgabewert

Eine neue Instanz des [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) Objekts.

## Beispiele

Siehe die Hauptseite von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
