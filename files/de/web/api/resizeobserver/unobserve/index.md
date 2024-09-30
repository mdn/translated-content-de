---
title: "ResizeObserver: unobserve() Methode"
short-title: unobserve()
slug: Web/API/ResizeObserver/unobserve
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die **`unobserve()`** Methode des [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Interfaces beendet das Beobachten eines angegebenen [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

## Syntax

```js-nolint
unobserve(target)
```

### Parameter

- `target`
  - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement), das nicht mehr beobachtet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

Der folgende Codeausschnitt stammt aus dem [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)
([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) Beispiel:

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

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
