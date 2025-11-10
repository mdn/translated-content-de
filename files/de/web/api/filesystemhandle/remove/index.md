---
title: "FileSystemHandle: remove() Methode"
short-title: remove()
slug: Web/API/FileSystemHandle/remove
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`remove()`**-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle fordert die Entfernung des durch den Handle dargestellten Eintrags aus dem zugrunde liegenden Dateisystem an.

Die `remove()`-Methode ermöglicht Ihnen, eine Datei oder ein Verzeichnis direkt über dessen Handle zu entfernen. Ohne diese Methode müssten Sie den Handle des übergeordneten Verzeichnisses erhalten und dann [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) darauf aufrufen, um sie zu entfernen.

Sie können `remove()` auch auf das Stammverzeichnis des [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) aufrufen, um dessen Inhalte zu löschen, wonach ein neues, leeres OPFS erstellt wird.

## Syntax

```js-nolint
remove()
remove(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Entfernung angibt. Mögliche Eigenschaften sind wie folgt:
    - `recursive` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt und der Eintrag ein Verzeichnis ist, werden seine Inhalte rekursiv entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `recursive` auf `false` gesetzt ist und der zu entfernende Eintrag ein Verzeichnis mit Untereinträgen ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keinen exklusiven Zugriff auf den Eintrag erhalten konnte.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) nicht `gewährt` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Eintrag nicht gefunden wird.

## Beispiele

Unser [`FileSystemHandle.remove()`-Demo](https://mdn.github.io/dom-examples/file-system-api/filesystemhandle-remove/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/file-system-api/filesystemhandle-remove)) ist eine Datei-Ersteller-App. Sie können Text in den {{htmlelement("textarea")}} eingeben und die "Datei speichern"-{{htmlelement("button")}} drücken. Die App öffnet dann einen Dateiwähler, mit dem Sie diesen Text in einer Textdatei Ihrer Wahl auf Ihrem lokalen Dateisystem speichern können. Sie können auch die erstellten Dateien löschen.

Es ist nicht möglich, den Inhalt der erstellten Dateien anzuzeigen, und die App synchronisiert sich nicht mit dem zugrunde liegenden Dateisystem bei Seitenneuladen- oder -schließen. Das bedeutet, dass von der App erstellte Dateien weiterhin im Dateisystem existieren, wenn Sie sie nicht vor dem Neuladen oder Schließen der Registerkarte löschen.

Der Dateiwähler, der Dateihandle und die Datei selbst, falls Sie eine neue Datei erstellen, werden mit [`window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) erstellt. Der Text wird über [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) in die Datei geschrieben.

Sobald eine Datei im Dateisystem erstellt wird, wird in der App ein Eintrag erstellt (siehe `processNewFile()` im Quellcode):

- Eine Referenz zum Dateihandle wird in einem Array namens `savedFileRefs` gespeichert, sodass sie später einfach referenziert werden kann.
- Ein Listeneintrag wird unter der Überschrift "Gespeicherte Dateien" in der Benutzeroberfläche hinzugefügt, wobei der Dateiname zusammen mit einem "Löschen"-Button angezeigt wird.

Wenn der "Löschen"-Button gedrückt wird, wird die `deleteFile()`-Funktion ausgeführt, die wie folgt aussieht:

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

Ein Durchlauf durch diese Schritte:

1. Für jeden in dem `savedFileRefs`-Array gespeicherten Dateihandle überprüfen wir dessen Namen, um zu sehen, ob er mit dem `id`-Attribut des Buttons übereinstimmt, der das Ereignis ausgelöst hat.
2. Wenn eine Übereinstimmung gefunden wird, führen wir `FileSystemHandle.remove()` auf diesem Handle aus, um die Datei aus dem zugrunde liegenden Dateisystem zu entfernen.
3. Wir entfernen auch den übereinstimmenden Handle aus dem `savedFileRefs`-Array.
4. Schließlich entfernen wir den zu dieser Datei gehörenden Listeneintrag in der Benutzeroberfläche.

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation, könnte aber in Zukunft standardisiert werden. Sehen Sie [_whatwg/fs#9_](https://github.com/whatwg/fs/pull/9) für Details.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dateisystem-API](/de/docs/Web/API/File_System_API)
