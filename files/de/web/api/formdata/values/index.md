---
title: "FormData: values()-Methode"
short-title: values()
slug: Web/API/FormData/values
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`FormData.values()`**-Methode gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der alle in den {{domxref("FormData")}} enthaltenen Werte durchläuft. Die Werte sind Zeichenfolgen oder {{domxref("Blob")}}-Objekte.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Werte von {{domxref("FormData")}}.

## Beispiele

```js
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Anzeigen der Werte
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

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
