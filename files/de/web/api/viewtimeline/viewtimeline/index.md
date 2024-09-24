---
title: "ViewTimeline: ViewTimeline() Konstruktor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

Der **`ViewTimeline()`** Konstruktor erstellt eine neue Instanz eines {{domxref("ViewTimeline")}} Objekts.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `subject`
      - : Eine Referenz zu einem {{domxref("Element")}}, das das Subjektelement repräsentiert, dessen Sichtbarkeit innerhalb seines nächsten scrollbaren Ahnen (Scroller) den Fortschritt der Zeitleiste steuern wird.
    - `axis` {{optional_inline}}

      - : Ein aufgezählter Wert, der die Scroll-Achse repräsentiert, die den Fortschritt der Zeitleiste steuert. Mögliche Werte sind:

        - `"block"`: Die Scrollleiste auf der Block-Achse des Scroll-Containers, welcher die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie zum Beispiel Standard-Englisch, ist dies gleichbedeutend mit `"y"`, während es für vertikale Schreibrichtungen mit `"x"` gleichbedeutend ist.
        - `"inline"`: Die Scrollleiste auf der Inline-Achse des Scroll-Containers, welcher die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen ist dies gleichbedeutend mit `"x"`, während es für vertikale Schreibrichtungen mit `"y"` gleichbedeutend ist.
        - `"y"`: Die Scrollleiste auf der vertikalen Achse des Scroll-Containers.
        - `"x"`: Die Scrollleiste auf der horizontalen Achse des Scroll-Containers.

        Wenn ausgelassen, ist der Standardwert für `axis` `"block"`.

    - `inset` {{optional_inline}}

      - : Ein Wert oder ein Array von Werten, die eine Anpassung der Position des Scrollports (siehe {{glossary("Scroll container")}} für weitere Details), in dem das Subjekt als sichtbar gilt, darstellen. Mögliche Werte sind:

        - `"auto"`: Die standardmäßige Box-Position wird verwendet.
        - Ein String: Wenn ein String angegeben wird, kann er aus einem oder zwei Werten bestehen, die gleich `auto` oder einem CSS {{cssxref("length-percentage")}} Wert sind. Anders ausgedrückt, sollte der String ein gültiger {{cssxref("view-timeline-inset")}} Wert sein.
        - Ein Array von einem oder zwei Werten, die entweder `"auto"` oder ein geeigneter {{domxref("CSSNumericValue")}} sein können, um eine Längen- oder Prozentverschiebung darzustellen (zum Beispiel `CSS.px()` oder `CSS.percent()`). Wenn ein Array bereitgestellt wird, repräsentiert der erste Wert das Start-Inset (welches den Wert von {{domxref("ViewTimeline.endOffset")}} beeinflusst) und der zweite Wert das End-Inset (welches den Wert von {{domxref("ViewTimeline.startOffset")}} beeinflusst).

        Wenn das Array nur einen Wert hat, wird dieser dupliziert.

        Wenn ausgelassen, ist der Standardwert für `inset` `auto`.

### Rückgabewert

Eine neue Instanz eines {{domxref("ViewTimeline")}} Objekts.

## Beispiele

Siehe die Hauptseite von {{domxref("ViewTimeline")}} für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("ViewTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
