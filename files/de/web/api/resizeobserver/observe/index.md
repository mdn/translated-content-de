---
title: "ResizeObserver: observe()-Methode"
short-title: observe()
slug: Web/API/ResizeObserver/observe
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die **`observe()`**-Methode des {{domxref("ResizeObserver")}}-Interfaces beginnt mit der Beobachtung eines angegebenen {{domxref('Element')}} oder {{domxref('SVGElement')}}.

## Syntax

```js-nolint
observe(target)
observe(target, options)
```

### Parameter

- `target`
  - : Eine Referenz zu einem {{domxref('Element')}} oder {{domxref('SVGElement')}}, das beobachtet werden soll.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Ihnen erlaubt, Einstellungen für die Beobachtung festzulegen. Derzeit gibt es nur eine mögliche Option, die festgelegt werden kann:

    - `box`

      - : Bestimmt, welches Boxmodell der Beobachter auf Änderungen überwacht. Mögliche Werte sind:

        - `content-box` (Standard)
          - : Größe des Inhaltsbereichs, wie in CSS definiert.
        - `border-box`
          - : Größe des Bereichs mit Rahmen, wie in CSS definiert.
        - `device-pixel-content-box`
          - : Die Größe des Inhaltsbereichs, wie in CSS definiert, in Gerätepixeln, bevor CSS-Transformationen auf das Element oder seine Vorfahren angewendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

Der folgende Ausschnitt stammt aus dem [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)
([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) Beispiel:

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // Überprüfung für Chrome, da ein nicht-standardmäßiges Array verwendet wird
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
  console.log("Größe geändert");
});

resizeObserver.observe(divElem);
```

Ein `observe()`-Aufruf mit einem Optionsobjekt würde folgendermaßen aussehen:

```js
resizeObserver.observe(divElem, { box: "border-box" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
