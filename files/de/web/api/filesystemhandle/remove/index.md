---
title: "FileSystemHandle: remove()-Methode"
short-title: remove()
slug: Web/API/FileSystemHandle/remove
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`remove()`**-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle fordert die Entfernung des Eintrags, der durch das Handle repräsentiert wird, aus dem zugrunde liegenden Dateisystem an.

Die `remove()`-Methode ermöglicht es Ihnen, eine Datei oder ein Verzeichnis direkt über dessen Handle zu entfernen. Ohne diese Methode müssten Sie das Handle des übergeordneten Verzeichnisses erhalten und dann [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) aufrufen, um es zu entfernen.

Sie können `remove()` auch auf das Stammverzeichnis des [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) aufrufen, um dessen Inhalt zu löschen; anschließend wird ein neues, leeres OPFS erstellt.

## Syntax

```js-nolint
remove()
remove(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Entfernung angibt. Mögliche Eigenschaften sind:
    - `recursive` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn er auf `true` gesetzt ist und der Eintrag ein Verzeichnis ist, wird dessen Inhalt rekursiv entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `recursive` auf `false` gesetzt ist und der zu entfernende Eintrag ein Verzeichnis mit untergeordneten Einträgen ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keinen exklusiven Zugriff auf den Eintrag erhalten konnte.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) nicht `granted` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Eintrag nicht gefunden wird.

## Beispiele

Unser [Demo zu `FileSystemHandle.remove()`](https://filesystemhandle-remove.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/filesystemhandle-remove)) ist eine Anwendung zur Dateierstellung. Sie können Text in die {{htmlelement("textarea")}} eingeben und die Schaltfläche "Datei speichern" {{htmlelement("button")}} drücken; die App öffnet dann einen Dateiauswahldialog, der es Ihnen erlaubt, diesen Text in einer Textdatei Ihrer Wahl auf Ihrem lokalen Dateisystem zu speichern. Sie können auch die von Ihnen erstellten Dateien löschen.

Sie können den Inhalt der erstellten Dateien nicht anzeigen, und die App bleibt beim Neuladen oder Schließen der Seite nicht mit dem zugrunde liegenden Dateisystem synchron. Das bedeutet, dass die von der App erstellten Dateien im Dateisystem weiterhin existieren, wenn Sie sich nicht dazu entscheiden, sie vor dem Neuladen oder Schließen des Tabs zu löschen.

Der Dateiauswahldialog, das Dateihandle und die Datei selbst, wenn Sie eine neue Datei erstellen, werden mit [`window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) erstellt. Der Text wird über [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) in die Datei geschrieben.

Sobald eine Datei im Dateisystem erstellt wird, wird ein Eintrag in der App erstellt (siehe `processNewFile()` im Quellcode):

- Eine Referenz auf das Dateihandle wird in einem Array namens `savedFileRefs` gespeichert, damit es später leicht referenziert werden kann.
- Ein Listenelement wird unter der Überschrift "Gespeicherte Dateien" in der Benutzeroberfläche hinzugefügt, wobei der Dateiname zusammen mit einer "Löschen"-Schaltfläche angezeigt wird.

Wenn die "Löschen"-Schaltfläche gedrückt wird, wird die `deleteFile()`-Funktion ausgeführt, die folgendermaßen aussieht:

```js
async function deleteFile(e) {
  for (const handle of savedFileRefs) {
    if (handle.name === `${e.target.id}.txt`) {
      await handle.remove();
      savedFileRefs = savedFileRefs.filter(
        (handle) => handle.name !== `${e.target.id}.txt`,
      );
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }
}
```

Im Ablauf bedeutet dies:

1. Für jedes in dem Array `savedFileRefs` gespeicherte Dateihandle überprüfen wir dessen Namen, um festzustellen, ob er mit dem `id`-Attribut der Schaltfläche übereinstimmt, die das Ereignis ausgelöst hat.
2. Wenn eine Übereinstimmung gefunden wird, führen wir `FileSystemHandle.remove()` auf diesem Handle aus, um die Datei aus dem zugrunde liegenden Dateisystem zu entfernen.
3. Wir entfernen auch das übereinstimmende Handle aus dem `savedFileRefs`-Array.
4. Schließlich entfernen wir das Listenelement, das zu dieser Datei in der Benutzeroberfläche gehört.

## Spezifikationen

Diese Funktion ist Teil keiner Spezifikation, könnte aber in Zukunft zum Standard werden. Details finden Sie unter [_whatwg/fs#9_](https://github.com/whatwg/fs/pull/9).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Demo zu FileSystemHandle.remove()](https://filesystemhandle-remove.glitch.me/)
