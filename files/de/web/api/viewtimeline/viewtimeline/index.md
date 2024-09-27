---
title: "ViewTimeline: ViewTimeline()-Konstruktor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

Der **`ViewTimeline()`**-Konstruktor erstellt eine neue Instanz des [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)-Objekts.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `subject`
      - : Eine Referenz zu einem [`Element`](/de/docs/Web/API/Element), das das Subjektelement darstellt, dessen Sichtbarkeit innerhalb seines nächstgelegenen scrollbaren Vorfahrenelements (Scroller) den Fortschritt der Zeitleiste steuert.
    - `axis` {{optional_inline}}

      - : Ein Enumerationswert, der die Scrollachse darstellt, die den Fortschritt der Zeitleiste steuert. Mögliche Werte sind:

        - `"block"`: Der Scrollbalken auf der Blockachse des Scrollcontainers, die Achse in Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibrichtungen wie Standard-Englisch entspricht dies `"y"`, während es für vertikale Schreibrichtungen `"x"` entspricht.
        - `"inline"`: Der Scrollbalken auf der Inline-Achse des Scrollcontainers, die Achse in Richtung parallel zum Textfluss in einer Zeile. Für horizontale Schreibrichtungen entspricht dies `"x"`, während es für vertikale Schreibrichtungen `"y"` entspricht.
        - `"y"`: Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

        Wenn weggelassen, ist der Standardwert für `axis` `"block"`.

    - `inset` {{optional_inline}}

      - : Ein Wert oder ein Array von Werten, die eine Anpassung der Position des Scrollports darstellen (siehe [Scrollcontainer](/de/docs/Glossary/Scroll_container) für mehr Details), in dem das Subjekt als sichtbar gilt. Mögliche Werte sind:

        - `"auto"`: Die Standardboxposition wird verwendet.
        - Ein String: Wenn ein String angegeben ist, kann er aus einem oder zwei Werten bestehen, die `auto` oder ein CSS-{{cssxref("length-percentage")}}-Wert sind. Anders gesagt, der String sollte ein gültiger {{cssxref("view-timeline-inset")}}-Wert sein.
        - Ein Array aus einem oder zwei Werten, die `"auto"` oder ein geeigneter [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein können, um eine Längen- oder Prozentsatzverschiebung darzustellen (zum Beispiel `CSS.px()` oder `CSS.percent()`). Wenn ein Array bereitgestellt wird, repräsentiert der erste Wert die Startversetzung (die den [`ViewTimeline.endOffset`](/de/docs/Web/API/ViewTimeline/endOffset)-Wert beeinflusst) und der zweite Wert die Endversetzung (die den [`ViewTimeline.startOffset`](/de/docs/Web/API/ViewTimeline/startOffset)-Wert beeinflusst).

        Wenn das Array nur einen Wert hat, wird dieser dupliziert.

        Wenn weggelassen, ist der Standardwert für `inset` `auto`.

### Rückgabewert

Eine neue Instanz des [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)-Objekts.

## Beispiele

Siehe die Hauptseite [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
