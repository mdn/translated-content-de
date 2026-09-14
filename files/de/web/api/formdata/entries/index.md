---
title: "FormData: Methode entries()"
short-title: entries()
slug: Web/API/FormData/entries
l10n:
  sourceCommit: b264328c7abee284014e09d5bfe1bab88898b27a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die Methode **`FormData.entries()`** gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der alle Schlüssel/Wert-Paare durchläuft, die in [`FormData`](/de/docs/Web/API/FormData) enthalten sind. Der Schlüssel jedes Paars ist ein String, und der Wert ist entweder ein String oder ein [`Blob`](/de/docs/Web/API/Blob).

> [!NOTE]
> Anders als Einträge von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) sind `FormData`-Einträge nicht unbedingt pro Schlüssel eindeutig. Ein Formular kann mehrere Elemente mit demselben Namen enthalten, sodass derselbe Schlüssel beim Iterieren in mehr als einem Paar erscheinen kann. Nach dem ersten Eintrag kann sich der Wert vom Rückgabewert von [`get()`](/de/docs/Web/API/FormData/get) unterscheiden, das den ersten dem Schlüssel zugeordneten Wert zurückgibt.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel/Wert-Paare von [`FormData`](/de/docs/Web/API/FormData).

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
