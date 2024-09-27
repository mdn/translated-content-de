---
title: "FormData: get()-Methode"
short-title: get()
slug: Web/API/FormData/get
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`get()`**-Methode der [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle gibt den ersten Wert zurück, der mit einem bestimmten Schlüssel in einem `FormData`-Objekt verknüpft ist. Wenn Sie mehrere Werte erwarten und alle erhalten möchten, verwenden Sie stattdessen die [`getAll()`](/de/docs/Web/API/FormData/getAll)-Methode.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Schlüssels darstellt, den Sie abrufen möchten.

### Rückgabewert

Ein Wert, dessen Schlüssel mit dem angegebenen `name` übereinstimmt. Andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

Wenn wir zwei `username`-Werte zu einem [`FormData`](/de/docs/Web/API/FormData) mithilfe von [`append()`](/de/docs/Web/API/FormData/append) hinzufügen:

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

Die folgende `get()`-Methode wird nur den ersten `username`-Wert zurückgeben:

```js
formData.get("username"); // Returns "Chris"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
