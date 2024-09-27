---
title: "FormData: getAll()-Methode"
short-title: getAll()
slug: Web/API/FormData/getAll
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`getAll()`**-Methode des [`FormData`](/de/docs/Web/API/FormData)-Interfaces gibt alle Werte zurück, die mit einem bestimmten Schlüssel aus einem `FormData`-Objekt verknüpft sind.

## Syntax

```js-nolint
getAll(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Schlüssels darstellt, den Sie abrufen möchten.

### Rückgabewert

Ein Array von Werten, dessen Schlüssel mit dem angegebenen `name` übereinstimmt. Andernfalls eine leere Liste.

## Beispiele

Falls wir zwei `username`-Werte zu einer [`FormData`](/de/docs/Web/API/FormData) mit der Methode [`append()`](/de/docs/Web/API/FormData/append) hinzufügen:

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

Die folgende `getAll()`-Methode gibt beide `username`-Werte in einem Array zurück:

```js
formData.getAll("username"); // Returns ["Chris", "Bob"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
