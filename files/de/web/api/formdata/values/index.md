---
title: "FormData: values() Methode"
short-title: values()
slug: Web/API/FormData/values
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`FormData.values()`**-Methode gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle Werte iteriert, die in der [`FormData`](/de/docs/Web/API/FormData) enthalten sind. Die Werte sind Strings oder [`Blob`](/de/docs/Web/API/Blob)-Objekte.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Werte von [`FormData`](/de/docs/Web/API/FormData).

## Beispiele

```js
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the values
for (const value of formData.values()) {
  console.log(value);
}
```

Das Ergebnis ist:

```plain
value1
value2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
