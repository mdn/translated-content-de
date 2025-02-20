---
title: "Window: requestFileSystem() Methode"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die nicht standardisierte Methode **`requestFileSystem()`** des [`Window`](/de/docs/Web/API/Window) ist eine spezifische Methode für Google Chrome, die es einer Website oder einer App ermöglicht, Zugriff auf ein isoliertes Dateisystem für den eigenen Gebrauch zu erhalten. Das zurückgegebene [`FileSystem`](/de/docs/Web/API/FileSystem) kann dann mit den anderen [Dateisystem-APIs](/de/docs/Web/API/File_and_Directory_Entries_API) verwendet werden.

> [!NOTE]
> Diese Methode ist in allen Browsern, die sie implementieren, mit `webkit` vorangestellt.

## Syntax

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Parameter

- `type`
  - : Der Typ des Speichers, der angefordert werden soll. Geben Sie `Window.TEMPORARY` an, wenn es akzeptabel ist, dass der Browser die Dateien nach eigenem Ermessen löscht, zum Beispiel wenn der Speicherplatz knapp wird, oder `Window.PERSISTENT`, wenn die Dateien an Ort und Stelle bleiben sollen, es sei denn, der Benutzer oder die Website/App erlaubt es ausdrücklich. Dauerhafter Speicher erfordert, dass der Benutzer dem Website-Quota zustimmt.
- `size`
  - : Der zugewiesene Speicherplatz, den Sie für Ihre App beanspruchen möchten.
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn das Dateisystem erfolgreich erhalten wurde. Der Callback erhält ein einziges Argument: ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem darstellt, das die App verwenden darf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Parameter, der eine Funktion angibt, die aufgerufen wird, wenn ein Fehler beim Versuch auftritt, das Dateisystem zu erhalten, oder wenn der Benutzer die Erlaubnis zum Erstellen oder Zugriff auf das Dateisystem verweigert. Der Callback erhält als Eingabe ein einziges Argument: ein `FileError`-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

Da diese Methode aus dem Vorschlag der [File and Directory Entries API](https://wicg.github.io/entries-api/) entfernt wurde, gibt es keine offizielle W3C- oder WHATWG-Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
