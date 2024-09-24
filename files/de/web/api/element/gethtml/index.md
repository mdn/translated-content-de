---
title: "Element: Methode getHTML()"
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("DOM")}}

Die **`getHTML()`** Methode des {{domxref("Element")}} Interfaces wird verwendet, um das DOM eines Elements in einen HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten, die Schattenwurzeln sind, ermöglicht. Die Optionen können verwendet werden, um verschachtelte Schattenwurzeln einzuschließen, die als {{domxref("ShadowRoot/serializable","serializable")}} gesetzt sind, und/oder ein bestimmtes Array von {{domxref("ShadowRoot")}} Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Schattenwurzeln sind, nicht serialisiert, und diese Methode verhält sich genauso wie das Lesen des Wertes von {{domxref("Element.innerHTML")}}.

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob {{domxref("ShadowRoot/serializable","serializable")}} Schattenwurzeln einbezogen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von {{domxref("ShadowRoot")}} Objekten zur Serialisierung.
        Diese werden unabhängig davon einbezogen, ob sie als `serializable` markiert sind oder offen oder geschlossen sind.
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

- {{domxref("ShadowRoot.getHTML()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
