---
title: "Range: cloneRange()-Methode"
short-title: cloneRange()
slug: Web/API/Range/cloneRange
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

Die **`Range.cloneRange()`**-Methode gibt ein
[`Range`](/de/docs/Web/API/Range)-Objekt mit identischen Grenzpunkten zu dem geklonten
[`Range`](/de/docs/Web/API/Range) zurück.

Der zurückgegebene Klon wird als Wertkopie und nicht als Referenzkopie erstellt, sodass eine Änderung in einem der beiden
[`Range`](/de/docs/Web/API/Range)-Objekte das andere nicht beeinflusst.

## Syntax

```js-nolint
cloneRange()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Range`](/de/docs/Web/API/Range)-Objekt.

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
clone = range.cloneRange();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
