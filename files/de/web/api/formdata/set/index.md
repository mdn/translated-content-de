---
title: "FormData: set() Methode"
short-title: set()
slug: Web/API/FormData/set
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`set()`**-Methode der [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle setzt einen neuen Wert für einen vorhandenen Schlüssel in einem `FormData`-Objekt oder fügt das Schlüssel/Wert-Paar hinzu, wenn es noch nicht existiert.

Der Unterschied zwischen `set()` und [`append()`](/de/docs/Web/API/FormData/append) besteht darin, dass `set()` alle vorhandenen Werte mit dem neuen Wert überschreibt, wenn der angegebene Schlüssel bereits existiert, während `append()` den neuen Wert an das Ende der vorhandenen Wertemenge anhängt.

## Syntax

```js-nolint
set(name, value)
set(name, value, filename)
```

### Parameter

- `name`
  - : Der Name des Feldes, dessen Daten in `value` enthalten sind.
- `value`
  - : Der Wert des Feldes. Dies kann ein String oder [`Blob`](/de/docs/Web/API/Blob) sein (einschließlich Unterklassen wie [`File`](/de/docs/Web/API/File)). Wenn dies nicht spezifiziert ist, wird der Wert in einen String umgewandelt.
- `filename` {{optional_inline}}
  - : Der dem Server gemeldete Dateiname (ein String), wenn ein [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) als zweiter Parameter übergeben wird. Der Standarddateiname für [`Blob`](/de/docs/Web/API/Blob)-Objekte ist "blob". Der Standarddateiname für [`File`](/de/docs/Web/API/File)-Objekte ist der Dateiname der Datei.

> [!NOTE]
> Wenn Sie ein [`Blob`](/de/docs/Web/API/Blob) als die Daten angeben, die dem `FormData`-Objekt hinzugefügt werden sollen, kann der Dateiname, der dem Server im "Content-Disposition"-Header gemeldet wird, je nach Browser variieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
formData.set("username", "Chris");
```

Wenn der Wert ein [`Blob`](/de/docs/Web/API/Blob) (oder eine [`File`](/de/docs/Web/API/File)) ist, können Sie seinen Namen mit dem Parameter `filename` angeben:

```js
formData.set("userpic", myFileInput.files[0], "chris.jpg");
```

Wenn der Wert kein String oder `Blob` ist, wird `set()` ihn automatisch in einen String konvertieren:

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
