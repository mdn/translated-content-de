---
title: "Element: Methode insertAdjacentElement()"
short-title: insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`insertAdjacentElement()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces fügt einen gegebenen Elementknoten an einer angegebenen Position relativ zu dem Element ein, auf das sie aufgerufen wird.

## Syntax

```js-nolint
insertAdjacentElement(position, element)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zum `targetElement` angibt; muss (unabhängig von der Groß-/Kleinschreibung) mit einem der folgenden Strings übereinstimmen:

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

Sehen Sie sich unsere [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html)-Demo auf GitHub an (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentElement.html)). Hier haben wir eine Sequenz von {{htmlelement("div")}}-Elementen in einem Container. Wenn eines angeklickt wird, wird es ausgewählt und Sie können dann die _Einfügen vor_ und _Einfügen nach_ Schaltflächen drücken, um neue Divs vor oder nach dem ausgewählten Element mit `insertAdjacentElement()` einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) (ähnlich wie `beforebegin`, mit unterschiedlichen Argumenten)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) (gleiche Wirkung wie `beforeend`)
