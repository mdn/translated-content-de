---
title: "FormData: getAll() Methode"
short-title: getAll()
slug: Web/API/FormData/getAll
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`getAll()`** Methode der {{domxref("FormData")}} Schnittstelle gibt alle Werte zurück, die mit einem bestimmten Schlüssel innerhalb eines `FormData`-Objekts verknüpft sind.

## Syntax

```js-nolint
getAll(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Schlüssels darstellt, den Sie abrufen möchten.

### Rückgabewert

Ein Array von Werten, dessen Schlüssel dem angegebenen `name` entspricht. Andernfalls eine leere Liste.

## Beispiele

Wenn wir zwei `username`-Werte zu einer {{domxref("FormData")}} mittels {{domxref("FormData.append", "append()")}} hinzufügen:

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

Wird die folgende `getAll()` Methode beide `username`-Werte in einem Array zurückgeben:

```js
formData.getAll("username"); // Gibt ["Chris", "Bob"] zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
