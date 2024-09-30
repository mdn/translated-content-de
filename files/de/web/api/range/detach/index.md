---
title: "Range: detach() Methode"
short-title: detach()
slug: Web/API/Range/detach
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.detach()`** Methode bewirkt nichts. Sie wurde früher verwendet, um das [`Range`](/de/docs/Web/API/Range)-Objekt zu deaktivieren und dem Browser zu ermöglichen, die zugehörigen Ressourcen freizugeben. Die Methode wurde aus Gründen der Kompatibilität beibehalten.

## Syntax

```js-nolint
detach()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
