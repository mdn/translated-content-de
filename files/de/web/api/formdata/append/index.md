---
title: "FormData: append()-Methode"
short-title: append()
slug: Web/API/FormData/append
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode der [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle fügt einen neuen Wert zu einem vorhandenen Schlüssel in einem `FormData`-Objekt hinzu oder fügt den Schlüssel hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen [`set()`](/de/docs/Web/API/FormData/set) und `append()` besteht darin, dass, wenn der angegebene Schlüssel bereits existiert, `set()` alle vorhandenen Werte mit dem neuen überschreibt, während `append()` den neuen Wert am Ende der vorhandenen Wertemenge anhängt.

## Syntax

```js-nolint
append(name, value)
append(name, value, filename)
```

### Parameter

- `name`
  - : Der Name des Feldes, dessen Daten in `value` enthalten sind.
- `value`
  - : Der Wert des Feldes. Dies kann eine Zeichenkette oder ein [`Blob`](/de/docs/Web/API/Blob) sein (einschließlich Unterklassen wie [`File`](/de/docs/Web/API/File)). Wenn keines davon angegeben ist, wird der Wert in eine Zeichenkette konvertiert.
- `filename` {{optional_inline}}
  - : Der Dateiname, der an den Server gemeldet wird (eine Zeichenkette), wenn ein [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) als zweiter Parameter übergeben wird. Der standardmäßige Dateiname für [`Blob`](/de/docs/Web/API/Blob)-Objekte ist "blob". Der standardmäßige Dateiname für [`File`](/de/docs/Web/API/File)-Objekte ist der Dateiname der Datei.

> [!NOTE]
> Wenn Sie ein [`Blob`](/de/docs/Web/API/Blob) als die Daten angeben, die dem `FormData`-Objekt hinzugefügt werden sollen, variiert der Dateiname, der an den Server im "Content-Disposition"-Header gemeldet wird, von Browser zu Browser.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
formData.append("username", "Chris");
```

Wenn der Wert ein [`Blob`](/de/docs/Web/API/Blob) (oder eine [`File`](/de/docs/Web/API/File)) ist, können Sie dessen Namen mit dem `filename`-Parameter angeben:

```js
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

Wie bei regulären Formulardaten können Sie mehrere Werte mit demselben Namen anhängen:

```js
formData.append("userpic", myFileInput.files[0], "chris1.jpg");
formData.append("userpic", myFileInput.files[1], "chris2.jpg");
```

Wenn der Wert weder eine Zeichenkette noch ein `Blob` ist, wird `append()` ihn automatisch in eine Zeichenkette umwandeln:

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

- [Using FormData objects](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
