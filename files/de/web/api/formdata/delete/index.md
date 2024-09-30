---
title: "FormData: delete()-Methode"
short-title: delete()
slug: Web/API/FormData/delete
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode des [`FormData`](/de/docs/Web/API/FormData)-Interfaces löscht einen Schlüssel und dessen Wert(e) aus einem `FormData`-Objekt.

## Syntax

```js-nolint
delete(name)
```

### Parameter

- `name`
  - : Der Name des Schlüssels, den Sie löschen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sie können einen Schlüssel und dessen Werte mit `delete()` löschen:

```js
formData.delete("username");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
