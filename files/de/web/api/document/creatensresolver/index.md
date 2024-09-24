---
title: "Dokument: createNSResolver()-Methode"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: 07dc324530b8b08cef7e5bb7b87612a0eb0d8a8c
---

{{ ApiRef("DOM") }}{{deprecated_header}}

Die **`createNSResolver()`**-Methode des {{domxref("Document")}}-Interfaces wurde genutzt, um ein benutzerdefiniertes `XPathNSResolver`-Objekt zu erstellen. Sie gibt nun die Eingabe unverändert zurück und wird nur aus Kompatibilitätsgründen beibehalten.

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

- {{domxref("Document.evaluate()")}}
- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
