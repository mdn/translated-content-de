---
title: "XPathEvaluator: createNSResolver() Methode"
short-title: createNSResolver()
slug: Web/API/XPathEvaluator/createNSResolver
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{deprecated_header}}

Die Methode **`createNSResolver()`** des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)-Interfaces wurde verwendet, um ein benutzerdefiniertes `XPathNSResolver`-Objekt zu erstellen. Sie gibt nun den Input unverändert zurück und wird nur aus Kompatibilitätsgründen beibehalten.

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

- [`Document.createNSResolver()`](/de/docs/Web/API/Document/createNSResolver)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
