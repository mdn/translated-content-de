---
title: "Element: Methode insertAdjacentText()"
short-title: insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`insertAdjacentText()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces fügt, basierend auf einer relativen Position und einem String, einen neuen Textknoten an der angegebenen Position relativ zu dem Element, von dem aus sie aufgerufen wird, ein.

## Syntax

```js-nolint
insertAdjacentText(where, data)
```

### Parameter

- `where`

  - : Ein String, der die Position relativ zu dem Element angibt, von dem die Methode aufgerufen wird; muss einer der folgenden Strings sein:

    - `'beforebegin'`: Vor dem `element` selbst.
    - `'afterbegin'`: Direkt im `element`, vor seinem ersten Kind.
    - `'beforeend'`: Direkt im `element`, nach seinem letzten Kind.
    - `'afterend'`: Nach dem `element` selbst.

- `data`
  - : Ein String, aus dem ein neuer Textknoten erstellt werden soll, der an der angegebenen Position `where` relativ zu dem Element eingefügt wird, von dem die Methode aufgerufen wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
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
> Die Positionen `beforebegin` und `afterend` funktionieren nur, wenn der Knoten in einem Baum ist und ein Element-Parent hat.

## Beispiele

```js
beforeBtn.addEventListener("click", () => {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", () => {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Sehen Sie sich unser [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) Demo auf GitHub an (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentText.html) an). Hier haben wir einen einfachen Absatz. Sie können Text in das Formularelement eingeben und dann die Buttons _Vorher einfügen_ und _Nachher einfügen_ drücken, um ihn mit `insertAdjacentText()` vor oder nach dem vorhandenen Absatztext einzufügen. Beachten Sie, dass der vorhandene Textknoten nicht erweitert wird—weitere Textknoten werden erstellt, die die neuen Ergänzungen enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
