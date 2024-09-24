---
title: "FileSystemDirectoryHandle: resolve()-Methode"
short-title: resolve()
slug: Web/API/FileSystemDirectoryHandle/resolve
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`resolve()`**-Methode der {{domxref("FileSystemDirectoryHandle")}}-Schnittstelle gibt ein {{jsxref('Array')}} von Verzeichnisnamen vom übergeordneten Handle bis zum angegebenen Kindeintrag zurück, wobei der Name des Kindeintrags das letzte Element des Arrays ist.

## Syntax

```js-nolint
resolve(possibleDescendant)
```

### Parameter

- `possibleDescendant`
  - : Der {{domxref('FileSystemHandle')}}, von dem der relative Pfad zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, der mit einem {{jsxref('Array')}} von Zeichenfolgen aufgelöst wird oder `null`, wenn `possibleDescendant` kein Nachkomme dieses {{domxref('FileSystemDirectoryHandle')}} ist.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer gewählten Datei relativ zu einem angegebenen Verzeichnis-Handle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Holen Sie sich ein Datei-Handle, indem Sie einen Dateiauswahldialog anzeigen:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // Der Benutzer hat abgebrochen oder es ist anderweitig fehlgeschlagen, eine Datei zu öffnen.
    return;
  }

  // Überprüfen Sie, ob handle innerhalb unseres Verzeichnis-Handles existiert
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // Nicht innerhalb des Verzeichnis-Handles
  } else {
    // relativePath ist ein Array von Namen, das den relativen Pfad angibt
    for (const name of relativePaths) {
      // Jede Eingabe protokollieren
      console.log(name);
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
