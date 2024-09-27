---
title: "XPathEvaluator: createNSResolver() Methode"
short-title: createNSResolver()
slug: Web/API/XPathEvaluator/createNSResolver
l10n:
  sourceCommit: 07dc324530b8b08cef7e5bb7b87612a0eb0d8a8c
---

{{APIRef("DOM XPath")}}{{deprecated_header}}

Die **`createNSResolver()`** Methode der [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) Schnittstelle wurde verwendet, um ein benutzerdefiniertes `XPathNSResolver`-Objekt zu erstellen. Sie gibt nun das Eingabeobjekt unverändert zurück und wird nur noch aus Kompatibilitätsgründen beibehalten.

## Syntax

```js-nolint
createNSResolver(nodeResolver)
```

### Parameter

- `nodeResolver`
  - : Ein [`Node`](/de/docs/Web/API/Node).

### Rückgabewert

Das `nodeResolver` selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createNSResolver()`](/de/docs/Web/API/Document/createNSResolver)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
