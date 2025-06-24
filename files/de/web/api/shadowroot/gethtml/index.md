---
title: "ShadowRoot: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle wird verwendet, um den DOM eines Shadow-Roots in einen HTML-String zu serialisieren.

Die Methode bietet ein Options-Argument, das die Serialisierung von Kindknoten ermöglicht, die Shadow-Roots sind. Die Optionen können verwendet werden, um verschachtelte Shadow-Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt wurden, und/oder ein angegebenes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Shadow-Roots sind, nicht serialisiert, und diese Methode verhält sich auf die gleiche Weise wie das Auslesen des Werts von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

Beachten Sie, dass einige Browser die `<` und `>` Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine potenzielle Sicherheitsanfälligkeit ([Mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, was einen Cross-Site-Scripting-(XSS)-Angriff ermöglicht.

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [serialisierbare](/de/docs/Web/API/ShadowRoot/serializable) Shadow-Roots eingeschlossen werden sollen. Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die serialisiert werden sollen. Diese werden unabhängig davon einbezogen, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind.
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
