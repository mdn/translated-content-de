---
title: "Window: requestFileSystem() Methode"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}{{non-standard_header}}

Die nicht standardisierte Methode **`requestFileSystem()`** der [`Window`](/de/docs/Web/API/Window)-Klasse ist eine spezifische Methode von Google Chrome, die es einer Webseite oder App ermöglicht, auf ein abgeschottetes Dateisystem für eigene Zwecke zuzugreifen. Das zurückgegebene [`FileSystem`](/de/docs/Web/API/FileSystem) kann dann mit den anderen [Dateisystem-APIs](/de/docs/Web/API/File_and_Directory_Entries_API) verwendet werden.

> [!NOTE]
> Diese Methode ist in allen Browsern, die sie implementieren, mit dem Präfix `webkit` versehen.

## Syntax

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Parameter

- `type`
  - : Der Typ des angeforderten Speichers. Geben Sie `Window.TEMPORARY` an, wenn es akzeptabel ist, dass der Browser die Dateien nach eigenem Ermessen löscht, z. B. wenn der Speicherplatz knapp wird, oder `Window.PERSISTENT`, wenn die Dateien an Ort und Stelle bleiben müssen, es sei denn, der Benutzer oder die Webseite beziehungsweise App erlauben es ausdrücklich. Persistenter Speicher erfordert, dass der Benutzer der Seite Kontingent gewährt.
- `size`
  - : Die Menge an Speicherplatz, die für die Nutzung durch Ihre App zugewiesen werden soll.
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn das Dateisystem erfolgreich abgerufen wurde. Der Callback erhält ein einzelnes Argument: ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem darstellt, das die App verwenden darf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Parameter, der eine Funktion angibt, die aufgerufen wird, wenn beim Versuch, das Dateisystem zu erhalten, ein Fehler auftritt oder wenn der Benutzer die Erlaubnis zur Erstellung oder zum Zugriff auf das Dateisystem verweigert. Der Callback erhält ein einzelnes Argument: ein `DOMException`-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

Da diese Methode aus dem [Vorschlag der File and Directory Entries API](https://wicg.github.io/entries-api/) entfernt wurde, gibt es keine offizielle W3C- oder WHATWG-Spezifikation. Sie wird nicht mehr zu einem Standard weiterentwickelt.

## Browser-Kompatibilität

{{Compat}}
