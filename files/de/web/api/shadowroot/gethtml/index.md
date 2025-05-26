---
title: "ShadowRoot: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 9ec0f8b51c464119792fbc36115b8f407939e2bb
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces wird verwendet, um das DOM eines Shadow-Roots in einen HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten ermöglicht, die selbst Shadow-Roots sind. Die Optionen können verwendet werden, um verschachtelte Shadow-Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) gesetzt wurden, und/oder ein angegebenes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Shadow-Roots sind, nicht serialisiert, und diese Methode verhält sich auf die gleiche Weise wie das Lesen des Wertes von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

Beachten Sie, dass einige Browser `<` und `>` in Attributen als `&lt;` und `&gt;` im zurückgegebenen HTML serialisieren (siehe [Browser-Kompatibilität](#browser-kompatibilität)). Dies verhindert bestimmte Exploits, bei denen Code ausführbar wird, wenn er serialisiert und dann in HTML deserialisiert wird.

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [serializable](/de/docs/Web/API/ShadowRoot/serializable) Shadow-Roots einbezogen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die serialisiert werden sollen.
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

- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
