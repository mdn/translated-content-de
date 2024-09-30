---
title: "Document: createNSResolver()-Methode"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: 07dc324530b8b08cef7e5bb7b87612a0eb0d8a8c
---

{{ ApiRef("DOM") }}{{deprecated_header}}

Die **`createNSResolver()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wurde verwendet, um ein benutzerdefiniertes `XPathNSResolver`-Objekt zu erstellen. Jetzt gibt sie den Eingabewert unverändert zurück und wird nur aus Kompatibilitätsgründen beibehalten.

## Syntax

```js-nolint
createNSResolver(nodeResolver)
```

### Parameter

- `nodeResolver`
  - : Ein [`Node`](/de/docs/Web/API/Node).

### Rückgabewert

`nodeResolver` selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
