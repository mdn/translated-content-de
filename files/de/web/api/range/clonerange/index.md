---
title: "Range: cloneRange()-Methode"
short-title: cloneRange()
slug: Web/API/Range/cloneRange
l10n:
  sourceCommit: f9a4c8569397cb1c4f74026b385f07ff365bf64d
---

{{ APIRef("DOM") }}

Die **`Range.cloneRange()`**-Methode gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, dessen Begrenzungspunkte mit dem geklonten [`Range`](/de/docs/Web/API/Range) identisch sind.

Der zurückgegebene Klon wird nicht als Referenz, sondern durch Wertkopie erstellt, sodass eine Änderung an einem der beiden [`Range`](/de/docs/Web/API/Range) das andere nicht beeinflusst.

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
const range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
const clone = range.cloneRange();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
