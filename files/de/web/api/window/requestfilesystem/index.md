---
title: "Window: requestFileSystem()-Methode"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die nicht standardisierte Methode [`Window`](/de/docs/Web/API/Window)
**`requestFileSystem()`** ist eine Google Chrome-spezifische Methode, die es einer Website oder App ermöglicht, Zugriff auf ein geschütztes Dateisystem für den eigenen Gebrauch zu erhalten. Das zurückgegebene [`FileSystem`](/de/docs/Web/API/FileSystem) kann dann mit den anderen [Dateisystem-APIs](/de/docs/Web/API/File_and_Directory_Entries_API) genutzt werden.

> [!NOTE]
> Diese Methode ist mit `webkit` in allen Browsern, die sie implementieren, mit einem Präfix versehen.

## Syntax

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Parameter

- `type`
  - : Der Typ des angeforderten Speichers. Geben Sie `Window.TEMPORARY` an, wenn es akzeptabel ist, dass der Browser die Dateien nach eigenem Ermessen löscht, zum Beispiel wenn der Speicherplatz knapp wird, oder `Window.PERSISTENT`, wenn die Dateien erhalten bleiben sollen, es sei denn, der Benutzer oder die Website oder App erlaubt es ausdrücklich. Persistenter Speicher erfordert, dass der Nutzer dem Standort Kontingente gewährt.
- `size`
  - : Die Menge an Speicherplatz, die Sie für die Nutzung durch Ihre App zugewiesen haben möchten.
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn das Dateisystem erfolgreich erhalten wurde. Der Callback erhält einen einzigen Parameter: Ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem darstellt, das die App verwenden darf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Parameter, der eine Funktion angibt, die aufgerufen wird, wenn ein Fehler beim Versuch, das Dateisystem zu erhalten, auftritt oder wenn der Nutzer die Erlaubnis zur Erstellung oder zum Zugriff auf das Dateisystem verweigert. Der Callback erhält als Eingabe einen einzigen Parameter: ein `FileError`-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

Da diese Methode aus dem Vorschlag der [File and Directory Entries API](https://wicg.github.io/entries-api/) entfernt wurde, gibt es keine offizielle W3C- oder WHATWG-Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Unterstützung der File and Directory Entries API in Firefox](/de/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
