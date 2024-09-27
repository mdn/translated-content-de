---
title: "FormData: has()-Methode"
short-title: has()
slug: Web/API/FormData/has
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`has()`**-Methode des [`FormData`](/de/docs/Web/API/FormData)-Interfaces gibt an, ob ein `FormData`-Objekt einen bestimmten Schlüssel enthält.

## Syntax

```js-nolint
has(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Schlüssels darstellt, den Sie testen möchten.

### Rückgabewert

`true`, wenn ein Schlüssel von `FormData` mit dem angegebenen `name` übereinstimmt. Andernfalls `false`.

## Beispiele

Der folgende Ausschnitt zeigt die Ergebnisse des Tests auf das Vorhandensein von `username` in einem `FormData`-Objekt, bevor und nachdem ein `username`-Wert damit mittels [`append()`](/de/docs/Web/API/FormData/append) hinzugefügt wurde:

```js
formData.has("username"); // Returns false
formData.append("username", "Chris");
formData.has("username"); // Returns true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
