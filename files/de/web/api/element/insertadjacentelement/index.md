---
title: "Element: Methode insertAdjacentElement()"
short-title: insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die Methode **`insertAdjacentElement()`** des {{domxref("Element")}}-Interfaces fügt einen angegebenen Elementknoten an einer gegebenen Position relativ zu dem Element, auf dem sie aufgerufen wird, ein.

## Syntax

```js-nolint
insertAdjacentElement(position, element)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zum
    `targetElement` darstellt; muss (case-insensitiv) mit einem der folgenden
    Strings übereinstimmen:

    - `'beforebegin'`: Vor dem
      `targetElement` selbst.
    - `'afterbegin'`: Direkt innerhalb des
      `targetElement`, vor seinem ersten Kind.
    - `'beforeend'`: Direkt innerhalb des
      `targetElement`, nach seinem letzten Kind.
    - `'afterend'`: Nach dem
      `targetElement` selbst.

- `element`
  - : Das einzufügende Element in den Baum.

### Rückgabewert

Das eingefügte Element oder `null`, wenn das Einfügen fehlgeschlagen ist.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angegebene `position` kein erkannter Wert ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das angegebene `element` kein gültiges Element ist.

### Visualisierung der Positionsnamen

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> [!NOTE]
> Die Positionen `beforebegin` und `afterend` funktionieren nur, wenn der Knoten in einem Baum ist und ein Elementelternteil hat.

## Beispiele

```js
beforeBtn.addEventListener("click", () => {
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("beforebegin", tempDiv);
  }
  setListener(tempDiv);
});

afterBtn.addEventListener("click", () => {
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("afterend", tempDiv);
  }
  setListener(tempDiv);
});
```

Schauen Sie sich unser [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html) Demo auf GitHub an (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentElement.html) an.) Hier haben wir eine Reihe von {{htmlelement("div")}}-Elementen innerhalb eines Containers. Wenn eines angeklickt wird, wird es ausgewählt und Sie können dann die _Vorher einfügen_- und _Nachher einfügen_-Buttons drücken, um neue Divs vor oder nach dem ausgewählten Element unter Verwendung von `insertAdjacentElement()` einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}} (ähnlich wie `beforebegin`, mit
  unterschiedlichen Argumenten)
- {{domxref("Node.appendChild()")}} (gleiche Wirkung wie `beforeend`)
