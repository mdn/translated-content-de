---
title: "Element: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird verwendet, um das DOM eines Elements in eine HTML-Zeichenkette zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten ermöglicht, die Shadow-Roots sind.
Die Optionen können verwendet werden, um verschachtelte Shadow-Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt worden sind, und/oder ein angegebenes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder open oder closed sein können.

Ohne Argumente werden Kindknoten, die Shadow-Roots sind, nicht serialisiert, und diese Methode verhält sich genauso wie das Auslesen des Wertes von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `serializableShadowRoots`
      - : Ein Boolescher Wert, der angibt, ob [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) Shadow-Roots einbezogen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die serialisiert werden sollen.
        Diese werden unabhängig davon einbezogen, ob sie als `serializable` markiert sind oder ob sie open oder closed sind.
        Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein String, der die HTML-Serialisierung des Elements darstellt.

### Ausnahmen

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
