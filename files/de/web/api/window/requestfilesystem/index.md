---
title: "Fenster: requestFileSystem()-Methode"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die nicht standardisierte Methode **`requestFileSystem()`** des {{domxref("Window")}} ist eine spezifische Methode für Google Chrome, die es einer Website oder App ermöglicht, auf ein geschütztes Dateisystem für den eigenen Gebrauch zuzugreifen. Das zurückgegebene {{domxref("FileSystem")}} kann dann mit den anderen [Dateisystem-APIs](/de/docs/Web/API/File_and_Directory_Entries_API) verwendet werden.

> [!NOTE]
> Diese Methode ist in allen Browsern, die sie implementieren, mit dem Präfix `webkit` versehen.

## Syntax

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Parameter

- `type`
  - : Der anzufordernde Speichertyp. Geben Sie `Window.TEMPORARY` an, wenn es akzeptabel ist, dass der Browser die Dateien nach eigenem Ermessen löscht, beispielsweise wenn der Speicherplatz knapp wird, oder `Window.PERSISTENT`, wenn Sie benötigen, dass die Dateien an Ort und Stelle bleiben, es sei denn, der Benutzer oder die Website oder App erlauben es explizit. Persistenter Speicher erfordert die Zustimmung des Benutzers zur Speicherplatzreservierung der Website.
- `size`
  - : Der Speicherplatz, den Sie für die Nutzung Ihrer App reservieren möchten.
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn das Dateisystem erfolgreich erstellt wurde. Der Rückruf erhält einen einzigen Parameter: ein {{domxref("FileSystem")}}-Objekt, das das Dateisystem darstellt, das die App verwenden darf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Parameter, der eine Funktion angibt, die aufgerufen wird, wenn ein Fehler beim Versuch, das Dateisystem zu erhalten, auftritt oder wenn der Benutzer die Erlaubnis zur Erstellung oder zum Zugriff auf das Dateisystem verweigert. Der Rückruf erhält als Eingabe einen einzigen Parameter: ein `FileError`-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

Da diese Methode aus dem Vorschlag der [File and Directory Entries API](https://wicg.github.io/entries-api/) entfernt wurde, gibt es keine offizielle W3C- oder WHATWG-Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Unterstützung der File and Directory Entries API in Firefox](/de/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
