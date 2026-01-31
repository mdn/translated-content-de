---
title: "Range: detach() Methode"
short-title: detach()
slug: Web/API/Range/detach
l10n:
  sourceCommit: 8ed804166714873a3c7ae11d9d95cfc8f9c379ab
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`Range.detach()`**-Methode tut nichts. Früher wurde sie verwendet, um das [`Range`](/de/docs/Web/API/Range)-Objekt zu deaktivieren und dem Browser das Freigeben der zugehörigen Ressourcen zu ermöglichen. Die Methode wurde aus Kompatibilitätsgründen beibehalten.

## Syntax

```js-nolint
detach()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
range.detach();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
