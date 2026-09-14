---
title: "FormData: values()-Methode"
short-title: values()
slug: Web/API/FormData/values
l10n:
  sourceCommit: b264328c7abee284014e09d5bfe1bab88898b27a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die Methode **`FormData.values()`** gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der alle in [`FormData`](/de/docs/Web/API/FormData) enthaltenen Werte durchläuft. Die Werte sind Strings oder [`Blob`](/de/docs/Web/API/Blob)-Objekte.

> [!NOTE]
> `FormData`-Schlüssel sind nicht unbedingt eindeutig. Ein Formular kann mehrere Elemente mit demselben Namen enthalten, daher wird beim Iterieren jeder Wert, der einen Schlüssel gemeinsam hat, angezeigt. Um alle einem einzelnen Schlüssel zugeordneten Werte abzurufen, verwenden Sie die Methode [`getAll()`](/de/docs/Web/API/FormData/getAll) (oder [`get()`](/de/docs/Web/API/FormData/get) nur für den ersten Wert).

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte von [`FormData`](/de/docs/Web/API/FormData).

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

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
