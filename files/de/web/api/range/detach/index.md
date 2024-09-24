---
title: "Range: detach()-Methode"
short-title: detach()
slug: Web/API/Range/detach
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.detach()`**-Methode tut nichts. Sie wurde früher verwendet, um das {{domxref("Range")}}-Objekt zu deaktivieren und dem Browser das Freigeben der zugehörigen Ressourcen zu ermöglichen. Die Methode wurde aus Kompatibilitätsgründen beibehalten.

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
