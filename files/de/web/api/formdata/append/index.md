---
title: "FormData: append()-Methode"
short-title: append()
slug: Web/API/FormData/append
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode des [`FormData`](/de/docs/Web/API/FormData)-Interfaces fügt einem vorhandenen Schlüssel in einem `FormData`-Objekt einen neuen Wert hinzu oder fügt den Schlüssel hinzu, wenn dieser noch nicht existiert.

Der Unterschied zwischen [`set()`](/de/docs/Web/API/FormData/set) und `append()` besteht darin, dass `set()` alle vorhandenen Werte durch den neuen ersetzt, wenn der angegebene Schlüssel bereits existiert, während `append()` den neuen Wert am Ende der bestehenden Wertemenge hinzufügt.

## Syntax

```js-nolint
append(name, value)
append(name, value, filename)
```

### Parameter

- `name`
  - : Der Name des Feldes, dessen Daten in `value` enthalten sind.
- `value`
  - : Der Wert des Feldes. Dies kann ein String oder ein [`Blob`](/de/docs/Web/API/Blob) sein (einschließlich Unterklassen wie [`File`](/de/docs/Web/API/File)). Wenn keiner dieser Werte angegeben ist, wird der Wert in einen String umgewandelt.
- `filename` {{optional_inline}}
  - : Der Dateiname, der an den Server gemeldet wird (ein String), wenn ein [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) als zweiter Parameter übergeben wird. Der Standarddateiname für [`Blob`](/de/docs/Web/API/Blob)-Objekte ist "blob". Der Standarddateiname für [`File`](/de/docs/Web/API/File)-Objekte ist der Dateiname der Datei.

> [!NOTE]
> Wenn Sie einen [`Blob`](/de/docs/Web/API/Blob) als Daten an das `FormData`-Objekt anhängen, variierte der Dateiname, der im "Content-Disposition"-Header an den Server gemeldet wird, von Browser zu Browser.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
formData.append("username", "Chris");
```

Wenn der Wert ein [`Blob`](/de/docs/Web/API/Blob) (oder eine [`File`](/de/docs/Web/API/File)) ist, können Sie seinen Namen mit dem `filename`-Parameter angeben:

```js
formData.append("user-pic", myFileInput.files[0], "chris.jpg");
```

Wie bei normalen Formulardaten können Sie mehrere Werte mit dem gleichen Namen anhängen:

```js
formData.append("user-pic", myFileInput.files[0], "chris1.jpg");
formData.append("user-pic", myFileInput.files[1], "chris2.jpg");
```

Wenn der Wert kein String oder `Blob` ist, wandelt `append()` ihn automatisch in einen String um:

```js
formData.append("name", true);
formData.append("name", 72);
formData.getAll("name"); // ["true", "72"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
