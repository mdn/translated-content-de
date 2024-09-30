---
title: "FormData: keys() Methode"
short-title: keys()
slug: Web/API/FormData/keys
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`FormData.keys()`**-Methode gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der über alle im [`FormData`](/de/docs/Web/API/FormData) enthaltenen Schlüssel iteriert. Die Schlüssel sind Strings.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Schlüssel von [`FormData`](/de/docs/Web/API/FormData).

## Beispiele

```js
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the keys
for (const key of formData.keys()) {
  console.log(key);
}
```

Das Ergebnis ist:

```plain
key1
key2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
