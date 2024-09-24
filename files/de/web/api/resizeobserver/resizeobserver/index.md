---
title: "ResizeObserver: ResizeObserver() Konstruktor"
short-title: ResizeObserver()
slug: Web/API/ResizeObserver/ResizeObserver
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Der **`ResizeObserver`** Konstruktor erstellt ein neues {{domxref("ResizeObserver")}} Objekt, das verwendet werden kann, um Änderungen am Inhalt oder Randkasten eines {{domxref('Element')}} oder am Begrenzungsrahmen eines {{domxref('SVGElement')}} zu melden.

## Syntax

```js-nolint
new ResizeObserver(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die immer dann aufgerufen wird, wenn eine beobachtete Größenänderung auftritt. Die Funktion wird mit zwei Parametern aufgerufen:

    - `entries`
      - : Ein Array von {{domxref('ResizeObserverEntry')}} Objekten, das verwendet werden kann, um auf die neuen Dimensionen des Elements nach jeder Änderung zuzugreifen.
    - `observer`
      - : Eine Referenz auf den `ResizeObserver` selbst, sodass er definitiv aus dem Callback heraus zugänglich ist, falls Sie ihn benötigen. Dies könnte z.B. verwendet werden, um den Beobachter automatisch nicht mehr zu beobachten, wenn eine bestimmte Bedingung erreicht ist, aber Sie können es weglassen, wenn Sie es nicht benötigen.

    Der Callback folgt im Allgemeinen einem Muster wie:

    ```js
    function callback(entries, observer) {
      for (const entry of entries) {
        // Etwas mit jedem Eintrag tun
        // und möglicherweise auch etwas mit dem Beobachter selbst
      }
    }
    ```

## Beispiele

Das folgende Snippet stammt aus dem [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)
([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) Beispiel:

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
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
        // legacy path
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
