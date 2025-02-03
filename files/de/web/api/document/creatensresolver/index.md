---
title: "Dokumentation: Methode createNSResolver()"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

{{ ApiRef("DOM") }}{{deprecated_header}}

Die **`createNSResolver()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde verwendet, um ein benutzerdefiniertes `XPathNSResolver`-Objekt zu erstellen. Sie gibt nun den Eingabewert unverändert zurück und wird nur aus Kompatibilitätsgründen beibehalten.

## Syntax

```js-nolint
createNSResolver(nodeResolver)
```

### Parameter

- `nodeResolver`
  - : Ein [`Node`](/de/docs/Web/API/Node).

### Rückgabewert

Der `nodeResolver` selbst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
