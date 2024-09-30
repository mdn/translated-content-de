---
title: "Document: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 3c386c36f6f1d177ae2ed400668f21ea2ada5db3
---

{{APIRef("DOM")}}

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document) Objekts wird verwendet, um eine HTML-Zeichenkette zu parsen, die möglicherweise [deklarative Schattenwurzeln](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthält, um eine neue [`Document`](/de/docs/Web/API/Document) Instanz zu erstellen.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass, obwohl `<script>`-Elemente beim Parsen nicht ausgewertet werden, die Methode andere potenziell unsichere, XSS-relevante Eingaben nicht säubert.

Das resultierende `Document` wird einen [Inhaltstyp](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
```

### Parameter

- `html`
  - : Eine HTML-Zeichenkette, die geparst werden soll.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString) zum Parsen von HTML oder XML in einen DOM-Baum
- [`Element.setHTMLUnsafe`](/de/docs/Web/API/Element/setHTMLUnsafe)
