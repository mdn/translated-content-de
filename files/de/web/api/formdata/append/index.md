---
title: "FormData: append()-Methode"
short-title: append()
slug: Web/API/FormData/append
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode des {{domxref("FormData")}}-Interfaces fügt einen neuen Wert einem bestehenden Schlüssel innerhalb eines `FormData`-Objekts hinzu oder fügt den Schlüssel hinzu, wenn er noch nicht existiert.

Der Unterschied zwischen {{domxref("FormData.set", "set()")}} und `append()` besteht darin, dass `set()` alle bestehenden Werte mit dem neuen überschreibt, wenn der angegebene Schlüssel bereits existiert, während `append()` den neuen Wert an das Ende der bestehenden Werteliste anhängt.

## Syntax

```js-nolint
append(name, value)
append(name, value, filename)
```

### Parameter

- `name`
  - : Der Name des Feldes, dessen Daten in `value` enthalten sind.
- `value`
  - : Der Wert des Feldes. Dies kann ein String oder ein {{domxref("Blob")}} (einschließlich Unterklassen wie {{domxref("File")}}) sein. Wenn keiner dieser Typen angegeben ist, wird der Wert in einen String konvertiert.
- `filename` {{optional_inline}}
  - : Der Dateiname, der dem Server gemeldet wird (ein String), wenn ein {{domxref("Blob")}} oder {{domxref("File")}} als zweiter Parameter übergeben wird. Der Standarddateiname für {{domxref("Blob")}}-Objekte ist "blob". Der Standarddateiname für {{domxref("File")}}-Objekte ist der Dateiname der Datei.

> [!NOTE]
> Wenn Sie ein {{domxref("Blob")}} als die Daten angeben, die dem `FormData`-Objekt hinzugefügt werden sollen, kann der Dateiname, der dem Server im "Content-Disposition"-Header gemeldet wird, je nach Browser variieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
formData.append("username", "Chris");
```

Wenn der Wert ein {{domxref("Blob")}} (oder eine {{domxref("File")}}) ist, können Sie seinen Namen mit dem `filename`-Parameter angeben:

```js
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

Wie bei regulären Formulardaten können Sie mehrere Werte mit demselben Namen hinzufügen:

```js
formData.append("userpic", myFileInput.files[0], "chris1.jpg");
formData.append("userpic", myFileInput.files[1], "chris2.jpg");
```

Wenn der Wert kein String oder `Blob` ist, wird `append()` ihn automatisch in einen String konvertieren:

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
