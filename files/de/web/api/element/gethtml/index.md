---
title: "Element: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces wird verwendet, um das DOM eines Elements in einen HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten ermöglicht, die Schattenwurzeln sind. Die Optionen können verwendet werden, um verschachtelte Schattenwurzeln einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt wurden, und/oder ein bestimmtes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Schattenwurzeln sind, nicht serialisiert, und diese Methode verhält sich genauso wie das Lesen des Werts von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [`serializable`](/de/docs/Web/API/ShadowRoot/serializable)-Schattenwurzeln einbezogen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die serialisiert werden sollen.
        Diese werden unabhängig davon einbezogen, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind.
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
