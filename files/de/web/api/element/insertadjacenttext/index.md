---
title: "Element: insertAdjacentText() Methode"
short-title: insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`insertAdjacentText()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle fügt einen neuen Textknoten an einer angegebenen relativen Position im Verhältnis zu dem Element, von dem sie aufgerufen wird, ein.

## Syntax

```js-nolint
insertAdjacentText(where, data)
```

### Parameter

- `where`

  - : Ein String, der die Position im Verhältnis zu dem Element, von dem die Methode aufgerufen wird, angibt; muss einer der folgenden Strings sein:

    - `'beforebegin'`: Vor dem `element` selbst.
    - `'afterbegin'`: Direkt innerhalb des `element`, vor seinem ersten Kind.
    - `'beforeend'`: Direkt innerhalb des `element`, nach seinem letzten Kind.
    - `'afterend'`: Nach dem `element` selbst.

- `data`
  - : Ein String, aus dem ein neuer Textknoten erstellt wird, der an der angegebenen Position `where` relativ zu dem Element, von dem die Methode aufgerufen wird, eingefügt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `where` keinen anerkannten Wert darstellt.

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
> Die Positionen `beforebegin` und
> `afterend` funktionieren nur, wenn der Knoten in einem Baum ist und ein
> Elternelement hat.

## Beispiele

```js
beforeBtn.addEventListener("click", () => {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", () => {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Werfen Sie einen Blick auf unser [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html)
Demo auf GitHub (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentText.html) an.) Hier haben wir einen einfachen Absatz. Sie können etwas Text in das Formularelement eingeben und dann die Schaltflächen _Insert before_ und _Insert after_ drücken, um
den Text vor oder nach dem vorhandenen Absatztext mit
`insertAdjacentText()` einzufügen. Beachten Sie, dass der vorhandene Textknoten nicht hinzugefügt wird — es werden weitere Textknoten mit den neuen Ergänzungen erstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
