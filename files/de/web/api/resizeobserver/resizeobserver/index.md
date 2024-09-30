---
title: "ResizeObserver: ResizeObserver() Konstruktor"
short-title: ResizeObserver()
slug: Web/API/ResizeObserver/ResizeObserver
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Der **`ResizeObserver`** Konstruktor erstellt ein neues [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Objekt, das verwendet werden kann, um Änderungen am Inhalt oder Rahmenkasten eines [`Element`](/de/docs/Web/API/Element) oder des Begrenzungsrahmens eines [`SVGElement`](/de/docs/Web/API/SVGElement) zu melden.

## Syntax

```js-nolint
new ResizeObserver(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die immer dann aufgerufen wird, wenn eine beobachtete Größenänderung auftritt. Die Funktion wird mit zwei Parametern aufgerufen:

    - `entries`
      - : Ein Array von [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Objekten, das verwendet werden kann, um auf die neuen Dimensionen des Elements nach jeder Änderung zuzugreifen.
    - `observer`
      - : Ein Verweis auf den `ResizeObserver` selbst, sodass er definitiv von innerhalb des Callbacks erreichbar ist, falls Sie ihn benötigen. Dies könnte zum Beispiel verwendet werden, um den Observer automatisch zu deaktivieren, wenn eine bestimmte Bedingung erreicht wird, aber Sie können es weglassen, wenn Sie es nicht benötigen.

    Das Callback folgt im Allgemeinen einem Muster nach folgendem Schema:

    ```js
    function callback(entries, observer) {
      for (const entry of entries) {
        // Do something to each entry
        // and possibly something to the observer itself
      }
    }
    ```

## Beispiele

Das folgende Snippet stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)):

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
