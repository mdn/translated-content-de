---
title: "Element: insertAdjacentText()-Methode"
short-title: insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`insertAdjacentText()`**-Methode des {{domxref("Element")}}-Interfaces fügt an einer relativen Position und als Zeichenkette angegeben, einen neuen Textknoten an der angegebenen Position relativ zu dem Element, von dem sie aufgerufen wird, ein.

## Syntax

```js-nolint
insertAdjacentText(where, data)
```

### Parameter

- `where`

  - : Ein String, der die Position relativ zu dem Element, von dem die Methode aufgerufen wird, darstellt; muss einer der folgenden Strings sein:

    - `'beforebegin'`: Vor dem `element` selbst.
    - `'afterbegin'`: Direkt innerhalb des `element`, vor seinem ersten Kind.
    - `'beforeend'`: Direkt innerhalb des `element`, nach seinem letzten Kind.
    - `'afterend'`: Nach dem `element` selbst.

- `data`
  - : Eine Zeichenkette, aus der ein neuer Textknoten erstellt werden soll, der an der angegebenen Position `where` relativ zu dem Element eingefügt wird, von dem die Methode aufgerufen wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `where` kein anerkannter Wert ist.

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
> Die `beforebegin` und `afterend` Positionen funktionieren nur, wenn der Knoten sich in einem Baum befindet und ein Element-Elternteil hat.

## Beispiele

```js
beforeBtn.addEventListener("click", () => {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", () => {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Werfen Sie einen Blick auf unser [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) Demo auf GitHub (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentText.html)). Hier haben wir einen einfachen Absatz. Sie können etwas Text in das Formularelement eingeben und dann die _Insert before_ und _Insert after_ Schaltflächen drücken, um ihn vor oder nach dem bestehenden Absatztext mit `insertAdjacentText()` einzufügen. Beachten Sie, dass der bestehende Textknoten nicht erweitert wird — es werden zusätzliche Textknoten erstellt, die die neuen Ergänzungen enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
