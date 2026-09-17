---
title: "ShadowRoot: getHTML()-Methode"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{APIRef("DOM")}}

Die Methode **`getHTML()`** der Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wird verwendet, um das DOM eines Shadow Root in einen HTML-String zu serialisieren.

Die Methode stellt ein Optionsargument bereit, das die Serialisierung von untergeordneten Knoten ermöglicht, die Shadow Roots sind.
Die Optionen können verwendet werden, um verschachtelte Shadow Roots einzuschließen, die als [`serializable`](/de/docs/Web/API/ShadowRoot/serializable) festgelegt wurden, und/oder ein angegebenes Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die entweder offen oder geschlossen sein können.

Ohne Argumente werden untergeordnete Knoten, die Shadow Roots sind, nicht serialisiert, und diese Methode verhält sich genauso wie das Auslesen des Werts von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML).

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([Mutation XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitization-Funktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und dadurch einen Cross-Site-Scripting-Angriff (XSS) ermöglichen.

## Syntax

```js-nolint
getHTML(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `serializableShadowRoots`
      - : Ein boolescher Wert, der angibt, ob [serialisierbare](/de/docs/Web/API/ShadowRoot/serializable) Shadow Roots eingeschlossen werden sollen.
        Der Standardwert ist `false`.
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten, die serialisiert werden sollen.
        Diese werden eingeschlossen, unabhängig davon, ob sie als `serializable` markiert sind oder ob sie offen oder geschlossen sind.
        Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein String, der die HTML-Serialisierung des Shadow Root darstellt.

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
