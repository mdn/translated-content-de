---
title: "ResizeObserver: ResizeObserver() Konstruktor"
short-title: ResizeObserver()
slug: Web/API/ResizeObserver/ResizeObserver
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Der **`ResizeObserver`**-Konstruktor erstellt ein neues [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Objekt, das verwendet werden kann, um Änderungen am Inhalts- oder Rahmenbereich eines [`Element`](/de/docs/Web/API/Element) oder des Begrenzungsrahmens eines [`SVGElement`](/de/docs/Web/API/SVGElement) zu melden.

## Syntax

```js-nolint
new ResizeObserver(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die immer dann aufgerufen wird, wenn eine beobachtete Größenänderung auftritt. Die Funktion wird mit zwei Parametern aufgerufen:

    - `entries`
      - : Ein Array von [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Objekten, die verwendet werden können, um auf die neuen Abmessungen des Elements nach jeder Änderung zuzugreifen.
    - `observer`
      - : Eine Referenz auf den `ResizeObserver` selbst, sodass dieser innerhalb des Rückrufs definitiv zugänglich ist, falls Sie ihn benötigen. Dies könnte beispielsweise verwendet werden, um den Observer automatisch zu deaktivieren, wenn eine bestimmte Bedingung erreicht ist, aber Sie können dies weglassen, wenn Sie es nicht benötigen.

    Der Rückruf folgt im Allgemeinen einem Muster in der Art von:

    ```js
    function callback(entries, observer) {
      for (const entry of entries) {
        // Do something to each entry
        // and possibly something to the observer itself
      }
    }
    ```

## Beispiele

Das folgende Beispiel stammt aus [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)):

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
