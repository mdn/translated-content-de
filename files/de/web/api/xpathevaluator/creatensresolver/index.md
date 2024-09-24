---
title: "XPathEvaluator: Methode createNSResolver()"
short-title: createNSResolver()
slug: Web/API/XPathEvaluator/createNSResolver
l10n:
  sourceCommit: 07dc324530b8b08cef7e5bb7b87612a0eb0d8a8c
---

{{APIRef("DOM XPath")}}{{deprecated_header}}

Die **`createNSResolver()`**-Methode des {{domxref("XPathEvaluator")}} Interfaces diente der Erstellung eines benutzerdefinierten `XPathNSResolver` Objekts. Sie gibt nun den Eingabewert unverändert zurück und wird nur aus Kompatibilitätsgründen beibehalten.

## Syntax

```js-nolint
createNSResolver(nodeResolver)
```

### Parameter

- `nodeResolver`
  - : Ein {{domxref("Node")}}.

### Rückgabewert

`nodeResolver` selbst.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{DOMxRef("Document.createNSResolver()")}}
- {{DOMxRef("XPathExpression")}}
