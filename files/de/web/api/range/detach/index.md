---
title: "Range: detach()-Methode"
short-title: detach()
slug: Web/API/Range/detach
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}

Die **`Range.detach()`**-Methode macht nichts. Sie diente früher dazu, das [`Range`](/de/docs/Web/API/Range)-Objekt zu deaktivieren und den Browser freizugeben, um damit verbundene Ressourcen freizusetzen. Die Methode wurde aus Kompatibilitätsgründen beibehalten.

## Syntax

```js-nolint
detach()
```

### Parameter

Keine.

### Rückgabewert

None ({{jsxref("undefined")}}).

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

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
