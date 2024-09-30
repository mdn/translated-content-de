---
title: "FileSystemHandle: remove()-Methode"
short-title: remove()
slug: Web/API/FileSystemHandle/remove
l10n:
  sourceCommit: be3c45cd7a4d5c04139eceae10f7368251cdca64
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`remove()`**-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle fordert die Entfernung des vom Handle repräsentierten Eintrags aus dem zugrundeliegenden Dateisystem an.

Die `remove()`-Methode ermöglicht es Ihnen, eine Datei oder ein Verzeichnis direkt von seinem Handle zu entfernen. Ohne diese Methode müssten Sie das Handle des übergeordneten Verzeichnisses abrufen und dann [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) darauf aufrufen, um es zu entfernen.

Sie können `remove()` auch auf dem Stammverzeichnis des [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) aufrufen, um dessen Inhalte zu löschen, woraufhin ein neues leeres OPFS erstellt wird.

## Syntax

```js-nolint
remove()
remove(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Entfernung angibt. Mögliche Eigenschaften sind wie folgt:
    - `recursive` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn er auf `true` gesetzt ist und der Eintrag ein Verzeichnis ist, werden dessen Inhalte rekursiv entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `recursive` auf `false` gesetzt ist und der zu entfernende Eintrag ein Verzeichnis mit Untereinträgen ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine exklusive Sperre auf den Eintrag setzen kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) nicht `granted` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Eintrag nicht gefunden wird.

## Beispiele

Unser [Demo für `FileSystemHandle.remove()`](https://filesystemhandle-remove.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/filesystemhandle-remove)) ist eine Dateierstellungs-App. Sie können Text in das {{htmlelement("textarea")}} eingeben und die "Datei speichern"-{{htmlelement("button")}}-Taste drücken. Die App wird dann einen Dateiauswahldialog öffnen, der es Ihnen ermöglicht, den Text auf Ihrem lokalen Dateisystem in einer Textdatei Ihrer Wahl zu speichern. Sie können auch die von Ihnen erstellten Dateien löschen.

Es ist nicht möglich, den Inhalt der erstellten Dateien anzuzeigen, und es bleibt nicht mit dem zugrundeliegenden Dateisystem synchronisiert, wenn die Seite neu geladen oder geschlossen wird. Das bedeutet, dass Dateien, die von der App erstellt wurden, weiterhin im Dateisystem vorhanden sind, wenn Sie sich nicht dafür entscheiden, sie vor dem Neuladen oder Schließen des Tabs zu löschen.

Der Dateiauswahldialog, das Dateihandle und die Datei selbst (wenn Sie eine neue Datei erstellen) werden mit [`window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) erstellt. Der Text wird über [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) in die Datei geschrieben.

Sobald eine Datei im Dateisystem erstellt wurde, wird ein Eintrag in der App erstellt (siehe `processNewFile()` im Quellcode):

- Eine Referenz auf das Dateihandle wird in einem Array namens `savedFileRefs` gespeichert, sodass es später leicht zugänglich ist.
- Ein Listeneintrag wird unter der Überschrift "Gespeicherte Dateien" in der Benutzeroberfläche hinzugefügt, wobei der Dateiname zusammen mit einer "Löschen"-Taste angezeigt wird.

Wenn die "Löschen"-Taste gedrückt wird, wird die Funktion `deleteFile()` ausgeführt, die folgendermaßen aussieht:

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

Durchlaufen wir dies Schritt für Schritt:

1. Für jedes in `savedFileRefs` gespeicherte Dateihandle überprüfen wir den Namen, um zu sehen, ob er mit dem `id`-Attribut der Taste übereinstimmt, die das Ereignis ausgelöst hat.
2. Wenn eine Übereinstimmung gefunden wird, führen wir `FileSystemHandle.remove()` auf diesem Handle aus, um die Datei aus dem zugrundeliegenden Dateisystem zu entfernen.
3. Wir entfernen das übereinstimmende Handle auch aus dem `savedFileRefs`-Array.
4. Schließlich entfernen wir den den betreffenden Listeneintrag in der Benutzeroberfläche.

## Spezifikationen

Diese Funktion ist Teil keiner Spezifikation, könnte aber in Zukunft standardisiert werden. Siehe [_whatwg/fs#9_](https://github.com/whatwg/fs/pull/9) für Details.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Demo von FileSystemHandle.remove()](https://filesystemhandle-remove.glitch.me/)
