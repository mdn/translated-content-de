---
title: "Dokumentation: Methode createNSResolver()"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{ ApiRef("DOM") }}{{deprecated_header}}

Die **`createNSResolver()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wurde verwendet, um ein benutzerdefiniertes `XPathNSResolver`-Objekt zu erstellen. Sie gibt nun die Eingabe unverändert zurück und wird nur aus Kompatibilitätsgründen beibehalten.

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
- [Einführung in die Nutzung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
