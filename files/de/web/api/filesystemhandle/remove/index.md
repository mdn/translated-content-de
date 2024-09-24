---
title: "FileSystemHandle: remove() Methode"
short-title: remove()
slug: Web/API/FileSystemHandle/remove
l10n:
  sourceCommit: be3c45cd7a4d5c04139eceae10f7368251cdca64
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`remove()`** Methode der {{domxref("FileSystemHandle")}} Schnittstelle fordert die Entfernung des durch das Handle dargestellten Eintrags aus dem zugrunde liegenden Dateisystem an.

Die `remove()` Methode erlaubt es Ihnen, eine Datei oder ein Verzeichnis direkt über dessen Handle zu entfernen. Ohne diese Methode müssten Sie das Handle des übergeordneten Verzeichnisses abrufen und dann {{domxref("FileSystemDirectoryHandle.removeEntry()")}} darauf aufrufen, um es zu entfernen.

Sie können auch `remove()` im Stammverzeichnis des [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) aufrufen, um dessen Inhalt zu löschen; danach wird ein neues, leeres OPFS erstellt.

## Syntax

```js-nolint
remove()
remove(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Entfernung angibt. Mögliche Eigenschaften sind wie folgt:
    - `recursive` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn `true` gesetzt ist und der Eintrag ein Verzeichnis ist, werden dessen Inhalte rekursiv entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

### Ausnahmen

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `recursive` auf `false` gesetzt ist und der zu entfernende Eintrag ein Verzeichnis mit Inhalten ist.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es dem Browser nicht möglich war, eine exklusive Sperre auf den Eintrag zu erlangen.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref('PermissionStatus')}} nicht `granted` ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Eintrag nicht gefunden wird.

## Beispiele

Unser [`FileSystemHandle.remove()` Demo](https://filesystemhandle-remove.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/filesystemhandle-remove)) ist eine Dateierstellungs-App. Sie können Text in das {{htmlelement("textarea")}} eingeben und die "Datei speichern" {{htmlelement("button")}} drücken. Die App öffnet daraufhin einen Dateiauswahldialog, der es Ihnen ermöglicht, den Text auf Ihrem lokalen Dateisystem in einer von Ihnen gewählten Textdatei zu speichern. Sie können auch Dateien, die Sie erstellen, löschen.

Die App erlaubt es nicht, den Inhalt der erstellten Dateien anzusehen und bleibt beim Neuladen/Schließen der Seite nicht mit dem zugrunde liegenden Dateisystem synchron. Dies bedeutet, dass die von der App erstellten Dateien weiterhin im Dateisystem vorhanden sind, wenn Sie diese nicht vor dem Neuladen oder Schließen des Tabs löschen.

Der Dateiauswahldialog, das Dateihandle und die Datei selbst, wenn Sie eine neue Datei erstellen, werden mit {{domxref("window.showSaveFilePicker()")}} erstellt. Der Text wird via {{domxref("FileSystemFileHandle.createWritable()")}} in die Datei geschrieben.

Sobald eine Datei im Dateisystem erstellt wurde, wird ein Eintrag in der App erstellt (siehe `processNewFile()` im Quellcode):

- Ein Verweis auf das Dateihandle wird in einem Array namens `savedFileRefs` gespeichert, sodass später leicht darauf zugegriffen werden kann.
- Ein Listeneintrag wird unter der Überschrift "Gespeicherte Dateien" in der Benutzeroberfläche hinzugefügt, wobei der Dateiname neben einem "Löschen" Button angezeigt wird.

Wenn der "Löschen" Button gedrückt wird, wird die `deleteFile()` Funktion ausgeführt, die folgendermaßen aussieht:

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

Durchlauf dieser:

1. Für jedes Dateihandle, das im Array `savedFileRefs` gespeichert ist, überprüfen wir seinen Namen, um festzustellen, ob er mit der `id`-Eigenschaft des Buttons übereinstimmt, der das Ereignis ausgelöst hat.
2. Wenn eine Übereinstimmung gefunden wird, führen wir `FileSystemHandle.remove()` auf diesem Handle aus, um die Datei aus dem zugrunde liegenden Dateisystem zu entfernen.
3. Wir entfernen auch das übereinstimmende Handle aus dem `savedFileRefs` Array.
4. Schließlich entfernen wir das Listenelement, das sich auf diese Datei in der Benutzeroberfläche bezieht.

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation, könnte aber zukünftig standardisiert werden. Siehe [_whatwg/fs#9_](https://github.com/whatwg/fs/pull/9) für Details.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Dateisystem-API](/de/docs/Web/API/File_System_API)
- [FileSystemHandle.remove() Demo](https://filesystemhandle-remove.glitch.me/)
