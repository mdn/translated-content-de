---
title: "ViewTimeline: ViewTimeline() Konstruktor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("History API")}}

Der **`ViewTimeline()`** Konstruktor erstellt eine neue [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) Objektinstanz.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `subject`
      - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das das Subjektelement repräsentiert, dessen Sichtbarkeit innerhalb seines nächstgelegenen scrollbaren Elternelements (Scroller) den Fortschritt der Zeitleiste bestimmt.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse repräsentiert, die den Fortschritt der Zeitleiste bestimmt. Mögliche Werte sind:

        - `"block"`: Die Scrollleiste auf der Blockachse des Scrollcontainers, welche die Achse in der Richtung ist, die senkrecht zum Fluss des Textes innerhalb einer Zeile verläuft. Bei horizontalen Schreibrichtungen, wie in standardmäßigem Englisch, ist dies gleichbedeutend mit `"y"`, während es bei vertikalen Schreibrichtungen gleichbedeutend mit `"x"` ist.
        - `"inline"`: Die Scrollleiste auf der Inline-Achse des Scrollcontainers, welche die Achse in der Richtung ist, die parallel zum Fluss des Textes in einer Zeile verläuft. Für horizontale Schreibrichtungen entspricht dies `"x"`, während es für vertikale Schreibrichtungen `"y"` entspricht.
        - `"y"`: Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

        Wenn weggelassen, ist der Standardwert für `axis` `"block"`.

    - `inset` {{optional_inline}}

      - : Ein Wert oder ein Array von Werten, die eine Anpassung an die Position des Scrollbereichs darstellen (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für weitere Details), in dem das Subjekt als sichtbar angesehen wird. Mögliche Werte sind:

        - `"auto"`: Die Standardposition der Box wird verwendet.
        - Eine Zeichenfolge: Wenn eine Zeichenfolge angegeben wird, kann sie aus einem oder zwei Werten bestehen, die `auto` oder einem CSS {{cssxref("length-percentage")}}-Wert entsprechen. Anders ausgedrückt, die Zeichenfolge sollte ein gültiger {{cssxref("view-timeline-inset")}}-Wert sein.
        - Ein Array mit einem oder zwei Werten, die `"auto"` oder einem geeigneten [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) entsprechen können, um eine Längen- oder Prozentverschiebung darzustellen (zum Beispiel `CSS.px()` oder `CSS.percent()`). Wenn ein Array angegeben wird, repräsentiert der erste Wert den Anfangsversatz (welcher den Wert von [`ViewTimeline.endOffset`](/de/docs/Web/API/ViewTimeline/endOffset) beeinflusst) und der zweite Wert repräsentiert den Endversatz (welcher den Wert von [`ViewTimeline.startOffset`](/de/docs/Web/API/ViewTimeline/startOffset) beeinflusst).

        Wenn das Array nur einen Wert hat, wird dieser dupliziert.

        Wenn weggelassen, ist der Standardwert für `inset` `auto`.

### Rückgabewert

Eine neue [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) Objektinstanz.

## Beispiele

Sehen Sie die Hauptseite von [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
