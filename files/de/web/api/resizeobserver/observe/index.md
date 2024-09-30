---
title: "ResizeObserver: observe() Methode"
short-title: observe()
slug: Web/API/ResizeObserver/observe
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die **`observe()`**-Methode der [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Schnittstelle beginnt mit der Beobachtung des angegebenen [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

## Syntax

```js-nolint
observe(target)
observe(target, options)
```

### Parameter

- `target`
  - : Eine Referenz zu einem [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement), das beobachtet werden soll.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das es Ihnen ermöglicht, Optionen für die Beobachtung festzulegen. Derzeit gibt es nur eine mögliche Option, die festgelegt werden kann:

    - `box`

      - : Legt fest, welches Box-Modell der Beobachter beobachten wird. Mögliche Werte sind:

        - `content-box` (Standardwert)
          - : Größe des Inhaltsbereichs, wie im CSS definiert.
        - `border-box`
          - : Größe des Box-Randbereichs, wie im CSS definiert.
        - `device-pixel-content-box`
          - : Die Größe des Inhaltsbereichs, wie im CSS definiert, in Gerätepixeln, bevor CSS-Transformationen auf das Element oder dessen Vorfahren angewendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

Das folgende Snippet stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)
([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)):

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // Checking for chrome as using a non-standard array
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize[0].inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize[0].inlineSize / 600,
        )}rem`;
      } else {
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize.inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize.inlineSize / 600,
        )}rem`;
      }
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);
```

Ein `observe()`-Aufruf mit einem Optionsobjekt würde wie folgt aussehen:

```js
resizeObserver.observe(divElem, { box: "border-box" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
