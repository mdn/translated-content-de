---
title: "ViewTimeline: ViewTimeline() Konstruktor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

Der **`ViewTimeline()`** Konstruktor erstellt eine neue [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) Objektinstanz.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `subject`
      - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das das Subjektelement darstellt, dessen Sichtbarkeit innerhalb seines nächstgelegenen vorhaltbaren Elementes (Scroller) den Fortschritt der Zeitachse steuern wird.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse repräsentiert, die den Fortschritt der Zeitachse antreiben wird. Mögliche Werte sind:

        - `"block"`: Die Scrollleiste auf der Blockachse des Scrollcontainers, welche die Achse in der Richtung senkrecht zum Fluss von Text innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie etwa das Standardenglisch, ist dies dasselbe wie `"y"`, während es für vertikale Schreibrichtungen dasselbe wie `"x"` ist.
        - `"inline"`: Die Scrollleiste auf der Inline-Achse des Scrollcontainers, welche die Achse in der Richtung parallel zum Fluss von Text innerhalb einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `"x"`, während es für vertikale Schreibrichtungen dasselbe wie `"y"` ist.
        - `"y"`: Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

        Wird dieser weggelassen, wird `axis` standardmäßig auf `"block"` gesetzt.

    - `inset` {{optional_inline}}

      - : Ein Wert oder ein Array von Werten, die eine Anpassung der Position des Scrollports repräsentieren (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für mehr Details), in dem das Subjekt als sichtbar angesehen wird. Mögliche Werte sind:

        - `"auto"`: Die Standardpositionsbox wird verwendet.
        - Ein String: Wenn ein String angegeben ist, kann dieser aus einem oder zwei Werten bestehen, die `auto` oder einem CSS-{{cssxref("length-percentage")}}-Wert entsprechen. Anders ausgedrückt sollte der String ein gültiger {{cssxref("view-timeline-inset")}}-Wert sein.
        - Ein Array aus einem oder zwei Werten, die `"auto"` oder ein geeigneter [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein können, um einen Längen- oder Prozentsatzversatz darzustellen (beispielsweise `CSS.px()` oder `CSS.percent()`). Wenn ein Array bereitgestellt wird, repräsentiert der erste Wert den Startversatz (der den [`ViewTimeline.endOffset`](/de/docs/Web/API/ViewTimeline/endOffset)-Wert beeinflusst) und der zweite Wert repräsentiert den Endversatz (der den [`ViewTimeline.startOffset`](/de/docs/Web/API/ViewTimeline/startOffset)-Wert beeinflusst).

        Wenn das Array nur einen Wert hat, wird dieser dupliziert.

        Wird dieser weggelassen, wird `inset` standardmäßig auf `auto` gesetzt.

### Rückgabewert

Eine neue [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) Objektinstanz.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite [`ViewTimeline`](/de/docs/Web/API/ViewTimeline).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
