---
title: "Element: insertAdjacentText()-Methode"
short-title: insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`insertAdjacentText()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces fügt an einer angegebenen relativen Position und basierend auf einem übergebenen String einen neuen Textknoten relativ zu dem Element ein, von dem sie aufgerufen wird.

## Syntax

```js-nolint
insertAdjacentText(where, data)
```

### Parameter

- `where`

  - : Ein String, der die Position relativ zu dem Element darstellt, von dem die Methode aufgerufen wird. Er muss einer der folgenden Strings sein:
    - `'beforebegin'`: Vor dem `element` selbst.
    - `'afterbegin'`: Direkt innerhalb des `element`, vor dessen erstem Kind.
    - `'beforeend'`: Direkt innerhalb des `element`, nach dessen letztem Kind.
    - `'afterend'`: Nach dem `element` selbst.

- `data`
  - : Ein String, aus dem ein neuer Textknoten erstellt wird, der an der angegebenen Position `where` relativ zu dem Element eingefügt wird, von dem die Methode aufgerufen wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `where` keinen anerkannten Wert hat.

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
> Die Positionen `beforebegin` und `afterend` funktionieren nur, wenn der Knoten sich in einem Baum befindet und ein Element-Elternteil hat.

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
Demo auf GitHub (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentText.html)). Hier haben wir einen einfachen Absatz. Sie können etwas Text in das Formularelement eingeben und dann die Schaltflächen _Insert before_ und _Insert after_ drücken, um ihn vor oder nach dem bestehenden Absatztext mit `insertAdjacentText()` einzufügen. Beachten Sie, dass der vorhandene Textknoten nicht ergänzt wird – es werden weitere Textknoten erstellt, die die neuen Ergänzungen enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
