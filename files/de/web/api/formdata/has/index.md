---
title: "FormData: has() Methode"
short-title: has()
slug: Web/API/FormData/has
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`has()`** Methode des {{domxref("FormData")}} Interfaces gibt zurück, ob ein `FormData` Objekt einen bestimmten Schlüssel enthält.

## Syntax

```js-nolint
has(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Schlüssels darstellt, den Sie prüfen möchten.

### Rückgabewert

`true`, wenn ein Schlüssel von `FormData` den angegebenen `name` entspricht. Andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt das Ergebnis der Überprüfung auf das Vorhandensein von `username` in einem `FormData` Objekt, vor und nach dem Hinzufügen eines `username` Wertes mit {{domxref("FormData.append", "append()")}}:

```js
formData.has("username"); // Gibt false zurück
formData.append("username", "Chris");
formData.has("username"); // Gibt true zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using FormData objects](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
