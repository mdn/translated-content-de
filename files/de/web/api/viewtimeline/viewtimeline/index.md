---
title: "ViewTimeline: ViewTimeline() Konstruktor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("History API")}}

Der **`ViewTimeline()`** Konstruktor erstellt eine neue Instanz des [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)-Objekts.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `subject`
      - : Eine Referenz zu einem [`Element`](/de/docs/Web/API/Element), das das Subjektelement repräsentiert, dessen Sichtbarkeit innerhalb seines nächsten vorangehenden scrollbaren Elements (Scroller) den Fortschritt der Timeline steuern wird.
    - `axis` {{optional_inline}}

      - : Ein Wert aus einer Aufzählung, der die Scrollachse repräsentiert, die den Fortschritt der Timeline steuern wird. Mögliche Werte sind:

        - `"block"`: Die Scrollbar auf der Blockachse des Scrollcontainers, die senkrecht zur Textflussrichtung in einer Zeile verläuft. Für horizontale Schreibrichtungen, wie standardmäßiges Englisch, entspricht dies `"y"`, während es bei vertikalen Schreibrichtungen `"x"` entspricht.
        - `"inline"`: Die Scrollbar auf der Inline-Achse des Scrollcontainers, die parallel zur Textflussrichtung in einer Zeile verläuft. Für horizontale Schreibrichtungen entspricht dies `"x"`, während es bei vertikalen Schreibrichtungen `"y"` entspricht.
        - `"y"`: Die Scrollbar auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Die Scrollbar auf der horizontalen Achse des Scrollcontainers.

        Falls weggelassen, ist `axis` standardmäßig `"block"`.

    - `inset` {{optional_inline}}

      - : Ein Wert oder ein Array von Werten, die eine Anpassung der Position des Sichtbereichs (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für mehr Details) darstellen, in dem das Subjekt als sichtbar angesehen wird. Mögliche Werte sind:

        - `"auto"`: Die Standardposition des Kastens wird verwendet.
        - Ein String: Wenn ein String angegeben ist, kann er aus einem oder zwei Werten bestehen, die `auto` oder ein CSS {{cssxref("length-percentage")}}-Wert sind. Anders ausgedrückt, der String sollte ein gültiger {{cssxref("view-timeline-inset")}}-Wert sein.
        - Ein Array von einem oder zwei Werten, die `"auto"` oder ein geeigneter [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein können, um einen Längen- oder Prozentversatz zu repräsentieren (zum Beispiel `CSS.px()` oder `CSS.percent()`). Wenn ein Array bereitgestellt wird, repräsentiert der erste Wert den Start-Inset (der den Wert [`ViewTimeline.endOffset`](/de/docs/Web/API/ViewTimeline/endOffset) beeinflusst), und der zweite Wert repräsentiert den End-Inset (der den Wert [`ViewTimeline.startOffset`](/de/docs/Web/API/ViewTimeline/startOffset) beeinflusst).

        Wenn das Array nur einen Wert enthält, wird dieser dupliziert.

        Falls weggelassen, ist `inset` standardmäßig `auto`.

### Rückgabewert

Eine neue Instanz des [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)-Objekts.

## Beispiele

Sehen Sie sich die Hauptseite [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) für ein Beispiel an.

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
