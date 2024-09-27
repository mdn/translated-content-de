---
title: "Document: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 3c386c36f6f1d177ae2ed400668f21ea2ada5db3
---

{{APIRef("DOM")}}

Die **`parseHTMLUnsafe()`**-statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts wird verwendet, um einen HTML-String zu parsen, der [deklarative Schattenwurzeln](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthalten kann, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

Der Suffix "Unsafe" im Methodennamen deutet darauf hin, dass, obwohl `<script>`-Elemente während des Parsings nicht ausgeführt werden, die Methode andere potenziell unsichere, XSS-relevante Eingaben nicht bereinigt.

Das resultierende `Document` hat einen [Inhaltstyp](/de/docs/Web/API/Document/contentType) von "text/html", eine [Zeichenkodierung](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank".

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
```

### Parameter

- `html`
  - : Ein HTML-String, der geparst werden soll.

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
