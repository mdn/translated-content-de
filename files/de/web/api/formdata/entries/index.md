---
title: "FormData: Methode entries()"
short-title: entries()
slug: Web/API/FormData/entries
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`FormData.entries()`**-Methode gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle Schlüssel/Wert-Paare im [`FormData`](/de/docs/Web/API/FormData) iteriert. Der Schlüssel jedes Paares ist ein String, und der Wert ist entweder ein String oder ein [`Blob`](/de/docs/Web/API/Blob).

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Schlüssel/Wert-Paare von [`FormData`](/de/docs/Web/API/FormData).

## Beispiele

```js
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the key/value pairs
for (const pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}
```

Das Ergebnis ist:

```plain
key1 value1
key2 value2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
