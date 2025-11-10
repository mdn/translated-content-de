---
title: "Window: requestFileSystem() Methode"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die nicht standardisierte [`Window`](/de/docs/Web/API/Window) Methode **`requestFileSystem()`** ist eine spezifische Methode von Google Chrome, die es einer Webseite oder App ermöglicht, Zugriff auf ein eigenes, Sandkasten-Dateisystem zu erhalten. Das zurückgegebene [`FileSystem`](/de/docs/Web/API/FileSystem) kann dann mit den anderen [Dateisystem-APIs](/de/docs/Web/API/File_and_Directory_Entries_API) genutzt werden.

> [!NOTE]
> Diese Methode ist in allen Browsern, die sie implementieren, mit `webkit` vorangestellt.

## Syntax

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Parameter

- `type`
  - : Der Typ des anzufordernden Speichers. Geben Sie `Window.TEMPORARY` an, wenn es akzeptabel ist, dass der Browser die Dateien nach eigenem Ermessen löscht, zum Beispiel wenn der Speicherplatz knapp wird, oder `Window.PERSISTENT`, wenn die Dateien an ihrem Platz bleiben sollen, es sei denn, der Benutzer oder die Website/App erlaubt ausdrücklich das Löschen. Persistenter Speicher erfordert, dass der Benutzer der Seite ein Kontingent zuweist.
- `size`
  - : Die Menge an Speicherplatz, die Sie für die Nutzung Ihrer App bereitgestellt haben möchten.
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn das Dateisystem erfolgreich erlangt wurde. Der Callback erhält ein einzelnes Parameter: ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem darstellt, das die App nutzen darf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Parameter, der eine Funktion angibt, die aufgerufen wird, wenn ein Fehler beim Versuch, das Dateisystem zu erhalten, auftritt oder wenn der Benutzer die Erlaubnis zum Erstellen oder Zugreifen auf das Dateisystem verweigert. Der Callback erhält ein einzelnes Parameter: ein `DOMException`-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

Da diese Methode aus dem [File and Directory Entries API](https://wicg.github.io/entries-api/)-Vorschlag entfernt wurde, gibt es keine offizielle W3C- oder WHATWG-Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
