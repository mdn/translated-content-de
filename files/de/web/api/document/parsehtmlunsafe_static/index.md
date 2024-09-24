---
title: "Document: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 3c386c36f6f1d177ae2ed400668f21ea2ada5db3
---

{{APIRef("DOM")}}

Die statische Methode **`parseHTMLUnsafe()`** des {{domxref("Document")}} Objekts wird verwendet, um einen HTML-String zu parsen, der [deklarative Schattenwurzeln](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthalten kann, um eine neue {{domxref("Document")}} Instanz zu erstellen.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass, obwohl `<script>`-Elemente beim Parsen nicht ausgewertet werden, die Methode andere potenziell unsichere XSS-relevante Eingaben nicht sanitisiert.

Das resultierende `Document` wird einen [Inhaltstyp](/de/docs/Web/API/Document/contentType) von "text/html", eine [Zeichenkodierung](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
```

### Parameter

- `html`
  - : Ein zu parsenden HTML-String.

### Rückgabewert

Ein {{domxref("Document")}}.

### Ausnahmen

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMParser.parseFromString()")}} zum Parsen von HTML oder XML in einen DOM-Baum
- {{domxref("Element.setHTMLUnsafe")}}
