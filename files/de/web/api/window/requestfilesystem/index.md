---
title: "Window: requestFileSystem() Methode"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die nicht-standardisierte Methode **`requestFileSystem()`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle ist eine spezifische Methode von Google Chrome, die es einer Website oder App ermöglicht, Zugriff auf ein isoliertes Dateisystem für den eigenen Gebrauch zu erhalten. Das zurückgegebene [`FileSystem`](/de/docs/Web/API/FileSystem) kann dann mit den anderen [Dateisystem-APIs](/de/docs/Web/API/File_and_Directory_Entries_API) verwendet werden.

> [!NOTE]
> Diese Methode ist in allen Browsern, die sie implementieren, mit dem Präfix `webkit` versehen.

## Syntax

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Parameter

- `type`
  - : Der Typ des angeforderten Speichers. Geben Sie `Window.TEMPORARY` an, wenn es akzeptabel ist, dass der Browser die Dateien nach eigenem Ermessen löscht, zum Beispiel wenn der Speicherplatz knapp wird. Verwenden Sie `Window.PERSISTENT`, wenn Sie die Dateien benötigen, um an Ort und Stelle zu bleiben, es sei denn, der Benutzer oder die Website/App erlaubt es ausdrücklich. Persistenter Speicher erfordert, dass der Benutzer dem Standort ein Kontingent gewährt.
- `size`
  - : Die Menge des Speicherplatzes, die Sie für die Verwendung Ihrer App zugewiesen haben möchten.
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn das Dateisystem erfolgreich erhalten wurde. Der Callback erhält einen einzigen Parameter: ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem repräsentiert, das die App verwenden darf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Parameter, der eine Funktion angibt, die aufgerufen wird, wenn ein Fehler beim Versuch auftritt, das Dateisystem zu beziehen, oder wenn der Benutzer die Erlaubnis zur Erstellung oder zum Zugriff auf das Dateisystem verweigert. Der Callback erhält als Eingabe einen einzigen Parameter: ein `DOMError`-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

Da diese Methode aus dem [File and Directory Entries API](https://wicg.github.io/entries-api/) Vorschlag entfernt wurde, hat sie keine offizielle W3C- oder WHATWG-Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
