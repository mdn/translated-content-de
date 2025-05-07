---
title: "Element: insertAdjacentElement()-Methode"
short-title: insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
l10n:
  sourceCommit: ad50355a009c5dfb4661c33a689a58512f7ea972
---

{{APIRef("DOM")}}

Die **`insertAdjacentElement()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle fügt einen gegebenen Elementknoten an einer spezifizierten Position relativ zu dem Element, auf dem sie aufgerufen wird, ein.

## Syntax

```js-nolint
insertAdjacentElement(position, element)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zu dem `targetElement` angibt; muss (unabhängig von Groß- und Kleinschreibung) einem der folgenden Strings entsprechen:

    - `'beforebegin'`: Vor dem `targetElement` selbst.
    - `'afterbegin'`: Direkt innerhalb des `targetElement`, vor seinem ersten Kind.
    - `'beforeend'`: Direkt innerhalb des `targetElement`, nach seinem letzten Kind.
    - `'afterend'`: Nach dem `targetElement` selbst.

- `element`
  - : Das Element, das in den Baum eingefügt werden soll.

### Rückgabewert

Das eingefügte Element oder `null`, falls das Einfügen fehlgeschlagen ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
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
> Die `beforebegin`- und `afterend`-Positionen funktionieren nur, wenn der Knoten sich in einem Baum befindet und ein Element-Elternteil hat.

## Beispiele

```js
beforeBtn.addEventListener("click", () => {
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("beforebegin", tempDiv);
  }
  setListener(tempDiv); // Definition in the linked GitHub demo
});

afterBtn.addEventListener("click", () => {
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("afterend", tempDiv);
  }
  setListener(tempDiv); // Definition in the linked GitHub demo
});
```

Werfen Sie einen Blick auf unser [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html)-Demo auf GitHub (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentElement.html) an). Hier haben wir eine Abfolge von {{htmlelement("div")}}-Elementen innerhalb eines Containers. Wenn eines angeklickt wird, wird es ausgewählt und Sie können dann die _Einfügen vor_ und _Einfügen nach_ Schaltflächen drücken, um neue divs vor oder nach dem ausgewählten Element mit `insertAdjacentElement()` einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) (ähnlich wie `beforebegin`, mit unterschiedlichen Argumenten)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) (gleiche Wirkung wie `beforeend`)
