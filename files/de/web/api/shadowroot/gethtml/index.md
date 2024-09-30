---
title: "ShadowRoot: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces wird verwendet, um den DOM eines Shadow-Roots als HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten ermöglicht, die Shadow-Roots sind. Die Optionen können verwendet werden, um verschachtelte Shadow-Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt wurden, und/oder ein angegebenes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Shadow-Roots sind, nicht serialisiert, und diese Methode verhält sich genauso wie das Auslesen des Wertes von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

## Syntax

```js-nolint
const html = shadowRoot.getHTML(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [serialisierbare](/de/docs/Web/API/ShadowRoot/serializable) Shadow-Roots eingeschlossen werden sollen. Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die zu serialisieren sind. Diese werden unabhängig davon eingeschlossen, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind. Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein String, der die HTML-Serialisierung des Shadow-Roots darstellt.

### Ausnahmen

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
