---
title: "Range: setStartBefore()-Methode"
short-title: setStartBefore()
slug: Web/API/Range/setStartBefore
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setStartBefore()`**-Methode setzt die Startposition
eines {{domxref("Range")}} relativ zu einem anderen {{domxref("Node")}}. Der übergeordnete
{{domxref("Node")}} des Beginns des {{domxref("Range")}} wird derselbe sein wie der
des `referenceNode`.

## Syntax

```js-nolint
setStartBefore(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der {{domxref("Node")}}, vor dem der {{domxref("Range")}} beginnen soll.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartBefore(referenceNode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
