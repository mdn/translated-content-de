---
title: "ShadowRoot: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle wird verwendet, um das DOM einer Shadow-Root in einen HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten ermöglicht, die Shadow-Roots sind. Die Optionen können verwendet werden, um verschachtelte Shadow-Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt wurden, und/oder ein bestimmtes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Shadow-Roots sind, nicht serialisiert, und diese Methode verhält sich in gleicher Weise wie das Lesen des Wertes von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

Beachten Sie, dass einige Browser die `<`- und `>`-Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)). Dies soll eine potenzielle Sicherheitslücke verhindern ([mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)), bei der ein Angreifer Eingaben erstellen kann, die eine [Sanisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und so einen Cross-Site Scripting (XSS)-Angriff ermöglichen.

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [serialisierbare](/de/docs/Web/API/ShadowRoot/serializable) Shadow-Roots eingeschlossen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die serialisiert werden sollen.
        Diese werden unabhängig davon eingeschlossen, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind.
        Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein String, der die HTML-Serialisierung der Shadow-Root darstellt.

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
