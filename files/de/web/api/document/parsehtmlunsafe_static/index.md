---
title: "Dokument: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts wird verwendet, um eine HTML-Zeichenkette zu parsen, die [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten kann, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass, während `<script>`-Elemente beim Parsen nicht ausgewertet werden, die Methode andere potenziell unsichere XSS-relevante Eingaben nicht bereinigt.

Das resultierende `Document` hat einen [Inhaltstyp](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank".

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
