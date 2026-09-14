---
title: "FormData: Methode keys()"
short-title: keys()
slug: Web/API/FormData/keys
l10n:
  sourceCommit: b264328c7abee284014e09d5bfe1bab88898b27a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die Methode **`FormData.keys()`** gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der alle im [`FormData`](/de/docs/Web/API/FormData) enthaltenen Schlüssel durchläuft. Die Schlüssel sind Zeichenketten.

> [!NOTE]
> Anders als Schlüssel von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) sind `FormData`-Schlüssel nicht unbedingt eindeutig. Ein Formular kann mehrere Elemente mit demselben Namen enthalten, sodass derselbe Schlüssel während der Iteration mehr als einmal vorkommen kann. Um alle mit einem einzelnen Schlüssel verknüpften Werte abzurufen, verwenden Sie die Methode [`getAll()`](/de/docs/Web/API/FormData/getAll) (oder [`get()`](/de/docs/Web/API/FormData/get) nur für den ersten Wert).

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Schlüssel von [`FormData`](/de/docs/Web/API/FormData).

## Beispiele

```js
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the keys
for (const key of formData.keys()) {
  console.log(key);
}
```

Das Ergebnis ist:

```plain
key1
key2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
