---
title: "Dokument: Methode createNSResolver()"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ ApiRef("DOM") }}

Die **`createNSResolver()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird verwendet, um ein benutzerdefiniertes `XPathNSResolver`-Objekt zu erstellen. Es gibt jetzt die Eingabe unverändert zurück und wird nur aus Kompatibilitätsgründen beibehalten.

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
- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
