---
title: "FormData: set() Methode"
short-title: set()
slug: Web/API/FormData/set
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`set()`** Methode der {{domxref("FormData")}} Schnittstelle setzt einen neuen Wert für einen vorhandenen Schlüssel innerhalb eines `FormData` Objekts oder fügt den Schlüssel/Wert hinzu, falls dieser noch nicht existiert.

Der Unterschied zwischen `set()` und {{domxref("FormData.append", "append()")}} besteht darin, dass `set()`, wenn der angegebene Schlüssel bereits existiert, alle vorhandenen Werte durch den neuen überschreibt, während `append()` den neuen Wert am Ende der vorhandenen Wertemenge anhängt.

## Syntax

```js-nolint
set(name, value)
set(name, value, filename)
```

### Parameter

- `name`
  - : Der Name des Feldes, dessen Daten im `value` enthalten sind.
- `value`
  - : Der Wert des Feldes. Dies kann ein String oder ein {{domxref("Blob")}} (einschließlich Unterklassen wie {{domxref("File")}}) sein. Wenn keiner dieser Typen angegeben ist, wird der Wert in einen String konvertiert.
- `filename` {{optional_inline}}
  - : Der dem Server gemeldete Dateiname (ein String), wenn ein {{domxref("Blob")}} oder {{domxref("File")}} als zweiter Parameter übergeben wird. Der Standard-Dateiname für {{domxref("Blob")}} Objekte ist "blob". Der Standard-Dateiname für {{domxref("File")}} Objekte ist der Dateiname der Datei.

> [!NOTE]
> Wenn Sie ein {{domxref("Blob")}} als die Daten angeben, die dem `FormData` Objekt hinzugefügt werden sollen, variiert der in der "Content-Disposition" Kopfzeile an den Server gemeldete Dateiname je nach Browser.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
formData.set("username", "Chris");
```

Wenn der Wert ein {{domxref("Blob")}} (oder ein {{domxref("File")}}) ist, können Sie seinen Namen mit dem `filename` Parameter angeben:

```js
formData.set("userpic", myFileInput.files[0], "chris.jpg");
```

Wenn der Wert kein String oder `Blob` ist, konvertiert `set()` ihn automatisch in einen String:

```js
formData.set("name", 72);
formData.get("name"); // "72"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
