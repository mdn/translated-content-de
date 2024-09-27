---
title: "FileSystemHandle: remove() Methode"
short-title: remove()
slug: Web/API/FileSystemHandle/remove
l10n:
  sourceCommit: be3c45cd7a4d5c04139eceae10f7368251cdca64
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`remove()`**-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle fordert die Entfernung des durch den Handle repräsentierten Eintrags aus dem zugrunde liegenden Dateisystem an.

Die `remove()`-Methode erlaubt es Ihnen, eine Datei oder ein Verzeichnis direkt von ihrem Handle zu entfernen. Ohne diese Methode müssten Sie das Handle des übergeordneten Verzeichnisses abrufen und dann [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) auf diesem aufrufen, um es zu entfernen.

Sie können `remove()` auch im Stammverzeichnis des [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) aufrufen, um dessen Inhalt zu löschen, wonach ein neues leeres OPFS erstellt wird.

## Syntax

```js-nolint
remove()
remove(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Entfernung angibt. Mögliche Eigenschaften sind wie folgt:
    - `recursive` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn `true` gesetzt ist und der Eintrag ein Verzeichnis ist, werden dessen Inhalte rekursiv entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `recursive` auf `false` gesetzt ist und der zu entfernende Eintrag ein Verzeichnis mit Unterordnern ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine exklusive Sperre auf den Eintrag erhalten konnte.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) nicht `granted` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Eintrag nicht gefunden wird.

## Beispiele

Unser [`FileSystemHandle.remove()`-Demo](https://filesystemhandle-remove.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/filesystemhandle-remove)) ist eine Datei-Erstellungs-App. Sie können Text in das {{htmlelement("textarea")}} eingeben und die Schaltfläche "Datei speichern" {{htmlelement("button")}} drücken. Die App öffnet dann einen Dateiauswahldialog, mit dem Sie diesen Text in einer Datei Ihrer Wahl auf Ihrem lokalen Dateisystem speichern können. Sie können auch die erstellten Dateien löschen.

Es ist nicht möglich, den Inhalt der erstellten Dateien anzusehen, und es bleibt nicht synchron mit dem zugrunde liegenden Dateisystem bei Neuladen oder Schließen der Seite. Das bedeutet, dass Dateien, die von der App erstellt wurden, im Dateisystem weiterhin existieren, wenn Sie sie nicht vor dem Neuladen oder Schließen des Tabs löschen.

Der Dateiauswahldialog, der Dateihandle und die Datei selbst, wenn Sie eine neue Datei erstellen, werden mit [`window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) erstellt. Der Text wird über [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) in die Datei geschrieben.

Sobald eine Datei im Dateisystem erstellt ist, wird ein Eintrag in der App erstellt (siehe `processNewFile()` im Quellcode):

- Ein Verweis auf den Dateihandle wird in einem Array namens `savedFileRefs` gespeichert, damit er später leicht referenziert werden kann.
- Ein Listenelement wird unterhalb der Überschrift "Gespeicherte Dateien" in der Benutzeroberfläche hinzugefügt, wobei der Dateiname neben einer "Löschen"-Schaltfläche angezeigt wird.

Wenn die "Löschen"-Schaltfläche gedrückt wird, wird die Funktion `deleteFile()` ausgeführt, die so aussieht:

```js
async function deleteFile(e) {
  for (const handle of savedFileRefs) {
    if (handle.name === e.target.id + ".txt") {
      await handle.remove();
      savedFileRefs = savedFileRefs.filter(
        (handle) => handle.name !== e.target.id + ".txt",
      );
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }
}
```

Schrittweise Durchsicht:

1. Für jeden Dateihandle, der im Array `savedFileRefs` gespeichert ist, prüfen wir seinen Namen, um zu sehen, ob er mit dem `id`-Attribut der Schaltfläche übereinstimmt, die das Ereignis ausgelöst hat.
2. Wenn eine Übereinstimmung gefunden wird, führen wir `FileSystemHandle.remove()` auf diesem Handle aus, um die Datei aus dem zugrunde liegenden Dateisystem zu entfernen.
3. Wir entfernen auch den übereinstimmenden Handle aus dem Array `savedFileRefs`.
4. Schließlich entfernen wir das Listenelement in der Benutzeroberfläche, das sich auf diese Datei bezieht.

## Spezifikationen

Diese Funktion ist nicht Teil einer Spezifikation, könnte aber in der Zukunft zum Standard werden. Siehe [_whatwg/fs#9_](https://github.com/whatwg/fs/pull/9) für Details.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [FileSystemHandle.remove() Demo](https://filesystemhandle-remove.glitch.me/)
