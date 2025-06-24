---
title: "Element: getHTML() Methode"
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`getHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um das DOM eines Elements in einen HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Knoten ermöglicht, die Schattenwurzeln sind.
Die Optionen können verwendet werden, um verschachtelte Schattenwurzeln einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt wurden, und/oder ein angegebenes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Knoten, die Schattenwurzeln sind, nicht serialisiert, und diese Methode verhält sich in der gleichen Weise wie das Auslesen des Wertes von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

Beachten Sie, dass einige Browser die `<` und `>` Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient der Vermeidung einer potenziellen Sicherheitslücke ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)), bei der ein Angreifer Eingaben gestalten kann, die eine [Sanisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und eine Cross-Site-Scripting- (XSS) Attacke ermöglichen.

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) Schattenwurzeln enthalten sein sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten, die serialisiert werden sollen.
        Diese werden unabhängig davon eingeschlossen, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind.
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
