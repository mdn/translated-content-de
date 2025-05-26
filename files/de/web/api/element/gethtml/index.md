---
title: "Element: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 9ec0f8b51c464119792fbc36115b8f407939e2bb
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um das DOM eines Elements in einen HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Knoten ermöglicht, die Shadow Roots sind.
Die Optionen können verwendet werden, um verschachtelte Shadow Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt wurden, und/oder ein angegebenes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Knoten, die Shadow Roots sind, nicht serialisiert, und diese Methode verhält sich wie das Auslesen des Werts von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

Beachten Sie, dass einige Browser die `<` und `>` Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine potenzielle Sicherheitslücke ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und damit eine Cross-Site-Scripting (XSS)-Attacke ermöglichen.

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) Shadow Roots eingeschlossen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die serialisiert werden sollen.
        Diese werden unabhängig davon einbezogen, ob sie als `serializable` markiert oder ob sie offen oder geschlossen sind.
        Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein String, der die HTML-SERIALISIERUNG des Elements darstellt.

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
