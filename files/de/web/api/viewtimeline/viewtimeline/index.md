---
title: "ViewTimeline: ViewTimeline() Konstruktor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("History API")}}

Der **`ViewTimeline()`** Konstruktor erstellt eine neue Instanz eines [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) Objekts.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `subject`
      - : Eine Referenz zu einem [`Element`](/de/docs/Web/API/Element), das das Subjektelement darstellt, dessen Sichtbarkeit innerhalb seines nächsten vorfahrenden scrollbaren Elements (Scroller) den Fortschritt der Zeitleiste steuern wird.
    - `axis` {{optional_inline}}

      - : Ein enumerierter Wert, der die Scrollachse darstellt, die den Fortschritt der Zeitleiste steuern wird. Mögliche Werte sind:

        - `"block"`: Die Scrollleiste auf der Block-Achse des Scrollcontainers, welche die Achse in der Richtung ist, die senkrecht zum Fluss des Textes innerhalb einer Zeile steht. Für horizontale Schreibrichtungen, wie Standard-Englisch, ist dies dasselbe wie `"y"`, während es für vertikale Schreibrichtungen dasselbe wie `"x"` ist.
        - `"inline"`: Die Scrollleiste auf der Inline-Achse des Scrollcontainers, welche die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `"x"`, während es für vertikale Schreibrichtungen dasselbe wie `"y"` ist.
        - `"y"`: Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

        Wird `axis` weggelassen, ist der Standard `"block"`.

    - `inset` {{optional_inline}}

      - : Ein Wert oder ein Array von Werten, die eine Anpassung der Position des Scrollports darstellen, in dem das Subjekt als sichtbar gilt (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für weitere Details). Mögliche Werte sind:

        - `"auto"`: Die Standardboxposition wird verwendet.
        - Ein String: Wenn ein String angegeben wird, kann er aus einem oder zwei Werten bestehen, die gleich `auto` oder einem CSS {{cssxref("length-percentage")}}-Wert sind. Anders ausgedrückt, sollte der String ein gültiger {{cssxref("view-timeline-inset")}}-Wert sein.
        - Ein Array von ein oder zwei Werten, die `"auto"` oder einen geeigneten [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) darstellen können, um einen Längen- oder Prozentsatzausgleich darzustellen (zum Beispiel `CSS.px()` oder `CSS.percent()`. Wenn ein Array bereitgestellt wird, repräsentiert der erste Wert den Beginneinzug (dies beeinflusst den [`ViewTimeline.endOffset`](/de/docs/Web/API/ViewTimeline/endOffset) Wert) und der zweite Wert den Endeinzug (dies beeinflusst den [`ViewTimeline.startOffset`](/de/docs/Web/API/ViewTimeline/startOffset) Wert).

        Wenn das Array nur einen Wert hat, wird er dupliziert.

        Wird `inset` weggelassen, ist der Standard `auto`.

### Rückgabewert

Eine neue Instanz eines [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) Objekts.

## Beispiele

Sehen Sie die Hauptseite [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
