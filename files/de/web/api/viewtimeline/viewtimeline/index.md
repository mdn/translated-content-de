---
title: "ViewTimeline: ViewTimeline() constructor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 8f9f9d4c85353ac7490051f4ef1486ded7e9ab47
---

{{APIRef("History API")}}

Der **`ViewTimeline()`**-Konstruktor erstellt eine neue [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)-Objektinstanz.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `subject`
      - : Eine Referenz auf ein [`Element`](/de/docs/Web/API/Element), das das Subjektelement darstellt, dessen Sichtbarkeit innerhalb seines nächstgelegenen scrollbaren Vorgängerelements (Scroller) den Fortschritt der Timeline steuert.
    - `axis` {{optional_inline}}
      - : Ein Aufzählungswert, der die Scrollachse darstellt, welche den Fortschritt der Timeline steuert. Mögliche Werte sind:
        - `"block"`: Die Bildlaufleiste auf der Blockachse des Scrollcontainers. Dies ist die Achse, die senkrecht zur Fließrichtung von Text innerhalb einer Zeile verläuft. Bei horizontalen Schreibrichtungen, wie etwa Standardenglisch, entspricht dies `"y"`, während es bei vertikalen Schreibrichtungen `"x"` entspricht.
        - `"inline"`: Die Bildlaufleiste auf der Inlineachse des Scrollcontainers. Dies ist die Achse, die parallel zur Fließrichtung von Text innerhalb einer Zeile verläuft. Bei horizontalen Schreibrichtungen entspricht dies `"x"`, während es bei vertikalen Schreibrichtungen `"y"` entspricht.
        - `"y"`: Die Bildlaufleiste auf der vertikalen Achse des Scrollcontainers.
        - `"x"`: Die Bildlaufleiste auf der horizontalen Achse des Scrollcontainers.

        Wenn nicht angegeben, ist der Standardwert für `axis` `"block"`.

    - `inset` {{optional_inline}}
      - : Ein Wert oder ein Array von Werten, die eine Anpassung der Position des Scrollports darstellen (weitere Informationen finden Sie unter {{Glossary("Scroll_container", "Scrollcontainer")}}), innerhalb dessen das Subjekt als sichtbar gilt. Mögliche Werte sind:
        - `"auto"`: Die Standardposition der Box wird verwendet.
        - Eine Zeichenfolge: Wenn eine Zeichenfolge angegeben wird, kann sie aus einem oder zwei Werten bestehen, die `auto` oder einem CSS-{{cssxref("length-percentage")}}-Wert entsprechen. Anders ausgedrückt sollte die Zeichenfolge ein gültiger {{cssxref("view-timeline-inset")}}-Wert sein.
        - Ein Array mit einem oder zwei Werten, die `"auto"` oder ein geeigneter [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein können, der eine absolute Längen- oder Prozentangabe darstellt.
          Beispielsweise sind `CSS.px(20)` oder `CSS.percent(10)` zulässig, aber numerische Werte wie `CSS.em(2)`, die relative Einheiten definieren, sind nicht erlaubt.

          Wenn ein Array angegeben wird, stellt der erste Wert den Start-Inset dar (der den Wert von [`ViewTimeline.endOffset`](/de/docs/Web/API/ViewTimeline/endOffset) beeinflusst) und der zweite Wert den End-Inset (der den Wert von [`ViewTimeline.startOffset`](/de/docs/Web/API/ViewTimeline/startOffset) beeinflusst).
          Wenn das Array nur einen Wert enthält, wird dieser dupliziert.

        Der Standardwert ist `auto`.

### Rückgabewert

Eine neue [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)-Objektinstanz.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `inset` ein Array mit null oder mehr als zwei Werten ist, wenn ein Arraywert ein Schlüsselwort außer `"auto"` ist oder wenn ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Arraywert nicht zu einer absoluten Länge oder Prozentangabe aufgelöst werden kann, etwa wenn eine relative Einheit wie `em` oder `vh` verwendet wird.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite zu [`ViewTimeline`](/de/docs/Web/API/ViewTimeline).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
