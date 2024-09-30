---
title: "Element: insertAdjacentElement()-Methode"
short-title: insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`insertAdjacentElement()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle fügt ein gegebenes Elementknoten an einer angegebenen Position relativ zu dem Element ein, auf dem sie aufgerufen wurde.

## Syntax

```js-nolint
insertAdjacentElement(position, element)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zum `targetElement` darstellt. Er muss (groß-/kleinschreibungsunabhängig) mit einem der folgenden Strings übereinstimmen:

    - `'beforebegin'`: Vor dem `targetElement` selbst.
    - `'afterbegin'`: Direkt innerhalb des `targetElement`, vor seinem ersten Kind.
    - `'beforeend'`: Direkt innerhalb des `targetElement`, nach seinem letzten Kind.
    - `'afterend'`: Nach dem `targetElement` selbst.

- `element`
  - : Das Element, das in den Baum eingefügt werden soll.

### Rückgabewert

Das Element, das eingefügt wurde, oder `null`, wenn das Einfügen fehlgeschlagen ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `position` keinen anerkannten Wert darstellt.
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
> Die Positionen `beforebegin` und `afterend` funktionieren nur, wenn der Knoten sich in einem Baum befindet und einen Elementelternteil hat.

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

Schauen Sie sich unser [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html)-Demo auf GitHub an (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentElement.html).) Hier haben wir eine Abfolge von {{htmlelement("div")}}-Elementen innerhalb eines Containers. Wenn eines angeklickt wird, wird es ausgewählt und Sie können dann die _Vorher einfügen_ und _Nachher einfügen_-Buttons drücken, um neue Divs vor oder nach dem ausgewählten Element mit `insertAdjacentElement()` einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) (ähnlich wie `beforebegin`, jedoch mit anderen Argumenten)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) (gleicher Effekt wie `beforeend`)
