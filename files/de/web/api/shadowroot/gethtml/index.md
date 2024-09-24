---
title: "ShadowRoot: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode der {{domxref("ShadowRoot")}}-Schnittstelle wird verwendet, um das DOM eines Shadow-Root in einen HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten, die Shadow-Roots sind, ermöglicht.
Die Optionen können verwendet werden, um verschachtelte Shadow-Roots einzubeziehen, die als {{domxref("ShadowRoot/serializable","serialisierbar")}} gesetzt wurden, und/oder ein angegebenes Array von {{domxref("ShadowRoot")}}-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Shadow-Roots sind, nicht serialisiert, und diese Methode verhält sich genauso wie das Auslesen des Wertes von {{domxref("Element.innerHTML")}}.

## Syntax

```js-nolint
const html = shadowRoot.getHTML(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [serialisierbare](/de/docs/Web/API/ShadowRoot/serializable) Shadow-Roots eingeschlossen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von {{domxref("ShadowRoot")}}-Objekten, die serialisiert werden sollen.
        Diese werden unabhängig davon einbezogen, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind.
        Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein String, der die HTML-Serialisierung des Shadow-Roots darstellt.

### Ausnahmen

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.getHTML()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.setHTMLUnsafe()")}}
