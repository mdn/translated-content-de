---
title: "ScrollTimeline: ScrollTimeline() Konstruktor"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("History API")}}

Der **`ScrollTimeline()`** Konstruktor erstellt eine neue Instanz eines [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)-Objekts.

## Syntax

```js-nolint
new ScrollTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `source`
      - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das das scrollbare Element (_scroller_) darstellt, dessen Scrollposition den Fortschritt der Zeitleiste steuert.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse darstellt, die den Fortschritt der Zeitleiste steuert. Mögliche Werte sind:

        - `"block"`: Der Scrollbalken auf der Blockachse des Scroll-Containers, die Achse, die senkrecht zur Textflussrichtung innerhalb einer Zeile verläuft. Für horizontale Schreibweisen, wie im Standard-Englisch, entspricht dies `"y"`, während es für vertikale Schreibweisen `"x"` entspricht.
        - `"inline"`: Der Scrollbalken auf der Inline-Achse des Scroll-Containers, die Achse, die parallel zur Textflussrichtung einer Zeile verläuft. Für horizontale Schreibweisen entspricht dies `"x"`, während es für vertikale Schreibweisen `"y"` entspricht.
        - `"y"`: Der Scrollbalken auf der vertikalen Achse des Scroll-Containers.
        - `"x"`: Der Scrollbalken auf der horizontalen Achse des Scroll-Containers.

        Wenn weggelassen, ist der Standardwert für `axis` `"block"`.

### Rückgabewert

Eine neue Instanz eines [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)-Objekts.

## Beispiele

Siehe die Hauptseite von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
