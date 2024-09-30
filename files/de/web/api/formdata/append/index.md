---
title: "FormData: append() Methode"
short-title: append()
slug: Web/API/FormData/append
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode des [`FormData`](/de/docs/Web/API/FormData)-Interfaces fügt einen neuen Wert zu einem bestehenden Schlüssel innerhalb eines `FormData`-Objekts hinzu oder fügt den Schlüssel hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen [`set()`](/de/docs/Web/API/FormData/set) und `append()` besteht darin, dass `set()` alle vorhandenen Werte mit dem neuen ersetzt, wenn der angegebene Schlüssel bereits existiert, während `append()` den neuen Wert am Ende der bestehenden Wertemenge anhängt.

## Syntax

```js-nolint
append(name, value)
append(name, value, filename)
```

### Parameter

- `name`
  - : Der Name des Feldes, dessen Daten in `value` enthalten sind.
- `value`
  - : Der Wert des Feldes. Dies kann ein String oder ein [`Blob`](/de/docs/Web/API/Blob) (einschließlich Unterklassen wie [`File`](/de/docs/Web/API/File)) sein. Wenn keiner dieser Werte angegeben ist, wird der Wert in einen String konvertiert.
- `filename` {{optional_inline}}
  - : Der dem Server gemeldete Dateiname (ein String), wenn ein [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) als zweiter Parameter übergeben wird. Der Standard-Dateiname für [`Blob`](/de/docs/Web/API/Blob)-Objekte ist "blob". Der Standard-Dateiname für [`File`](/de/docs/Web/API/File)-Objekte ist der Dateiname der Datei.

> [!NOTE]
> Wenn Sie einen [`Blob`](/de/docs/Web/API/Blob) als Daten an das `FormData`-Objekt anhängen, variiert der dem Server im "Content-Disposition"-Header gemeldete Dateiname je nach Browser.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
formData.append("username", "Chris");
```

Wenn der Wert ein [`Blob`](/de/docs/Web/API/Blob) (oder eine [`File`](/de/docs/Web/API/File)) ist, können Sie seinen Namen mit dem Parameter `filename` angeben:

```js
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

Wie bei regulären Formulardaten können Sie mehrere Werte mit demselben Namen anhängen:

```js
formData.append("userpic", myFileInput.files[0], "chris1.jpg");
formData.append("userpic", myFileInput.files[1], "chris2.jpg");
```

Wenn der Wert weder ein String noch ein `Blob` ist, wird `append()` ihn automatisch in einen String konvertieren:

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
