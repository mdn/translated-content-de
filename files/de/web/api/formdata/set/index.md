---
title: "FormData: set() Methode"
short-title: set()
slug: Web/API/FormData/set
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`set()`** Methode der [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle setzt einen neuen Wert für einen bestehenden Schlüssel in einem `FormData`-Objekt oder fügt den Schlüssel/Wert hinzu, wenn dieser noch nicht existiert.

Der Unterschied zwischen `set()` und [`append()`](/de/docs/Web/API/FormData/append) besteht darin, dass `set()` alle vorhandenen Werte durch den neuen Wert ersetzt, wenn der angegebene Schlüssel bereits existiert, während `append()` den neuen Wert an die bestehende Menge von Werten anhängt.

## Syntax

```js-nolint
set(name, value)
set(name, value, filename)
```

### Parameter

- `name`
  - : Der Name des Feldes, dessen Daten in `value` enthalten sind.
- `value`
  - : Der Wert des Feldes. Dies kann ein String oder ein [`Blob`](/de/docs/Web/API/Blob) (einschließlich Unterklassen wie [`File`](/de/docs/Web/API/File)) sein. Wenn keines davon angegeben ist, wird der Wert in einen String umgewandelt.
- `filename` {{optional_inline}}
  - : Der an den Server gemeldete Dateiname (ein String), wenn ein [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) als zweiter Parameter übergeben wird. Der Standarddateiname für [`Blob`](/de/docs/Web/API/Blob) Objekte ist "blob". Der Standarddateiname für [`File`](/de/docs/Web/API/File) Objekte ist der Dateiname der Datei.

> [!NOTE]
> Wenn Sie ein [`Blob`](/de/docs/Web/API/Blob) als die Daten angeben, die dem `FormData`-Objekt hinzugefügt werden sollen, variierte der Dateiname, der im Header "Content-Disposition" an den Server gemeldet wird, von Browser zu Browser.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
formData.set("username", "Chris");
```

Wenn der Wert ein [`Blob`](/de/docs/Web/API/Blob) (oder eine [`File`](/de/docs/Web/API/File)) ist, können Sie seinen Namen mit dem `filename`-Parameter angeben:

```js
formData.set("user-pic", myFileInput.files[0], "chris.jpg");
```

Wenn der Wert kein String oder `Blob` ist, wird `set()` ihn automatisch in einen String umwandeln:

```js
formData.set("name", 72);
formData.get("name"); // "72"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
