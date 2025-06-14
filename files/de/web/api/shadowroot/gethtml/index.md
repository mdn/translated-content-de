---
title: "ShadowRoot: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: aebeb771add7275369094687b4925e6dbd5bf7b5
---

{{APIRef("DOM")}}

Die **`getHTML()`**-Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces wird verwendet, um das DOM eines Shadow-Roots zu einem HTML-String zu serialisieren.

Die Methode bietet ein Optionsargument, das die Serialisierung von Kindknoten ermöglicht, die Shadow-Roots sind. Die Optionen können verwendet werden, um geschachtelte Shadow-Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt sind, und/oder ein bestimmtes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden Kindknoten, die Shadow-Roots sind, nicht serialisiert, und diese Methode verhält sich genauso wie das Lesen des Werts von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)). Dies dient zur Vermeidung eines potenziellen Sicherheitsrisikos ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)), bei dem ein Angreifer Eingaben erstellen kann, die eine [Sanitierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, was einen Cross-Site-Scripting-Angriff (XSS) ermöglicht.

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
        Diese werden unabhängig davon aufgenommen, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind.
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
