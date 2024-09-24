---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Die `DirectoryEntrySync`-Schnittstelle repräsentiert ein Verzeichnis in einem Dateisystem. Sie enthält Methoden zum Erstellen, Lesen, Nachschlagen und rekursiven Entfernen von Dateien in einem Verzeichnis.

> [!WARNING]
> Diese Schnittstelle ist veraltet und befindet sich nicht mehr auf dem Standardpfad.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundlegende Konzepte

Wenn Sie Unterverzeichnisse erstellen möchten, müssen Sie jedes untergeordnete Verzeichnis nacheinander erstellen. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, der übergeordnete Verzeichnisse enthält, die noch nicht existieren, erhalten Sie einen Fehler. Erstellen Sie die Hierarchie also, indem Sie rekursiv einen neuen Pfad hinzufügen, nachdem Sie das übergeordnete Verzeichnis erstellt haben.

### Beispiel

Die `getFile()`-Methode gibt ein `FileEntrySync` zurück, das eine Datei im Dateisystem repräsentiert. Das folgende Beispiel erstellt eine leere Datei namens `logs.txt` im Stammverzeichnis.

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

Die `getDirectory()`-Methode gibt ein `DirectoryEntrySync` zurück, das eine Datei im Dateisystem repräsentiert. Das folgende Beispiel erstellt ein neues Verzeichnis namens `project_dir` im Stammverzeichnis.

```js
const dirEntry = fs.root.getDirectory("project_dir", { create: true });
```

## Methodenübersicht

- <a href="#createreader">createReader()</a>
- <a href="#getfile">getFile()</a>
- <a href="#getdirectory">getDirectory()</a>
- <a href="#removerecursively">removeRecursively()</a>

## Instanzmethoden

### createReader()

Erstellt einen neuen `DirectoryReaderSync`, um Einträge aus diesem Verzeichnis zu lesen.

#### Syntax

```js-nolint
createReader()
```

##### Parameter

Keine.

##### Rückgabewert

- [`DirectoryReaderSync`](/de/docs/Web/API/DirectoryReaderSync)
  - : Repräsentiert ein Verzeichnis in einem Dateisystem.

##### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} mit den folgenden Codes auslösen:

| Ausnahme          | Beschreibung                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`   | Das Verzeichnis existiert nicht.                                                                |
| `SECURITY_ERR`    | Der Browser hat festgestellt, dass es nicht sicher war, die Metadaten abzurufen. [todo: Erklären, warum] |

### getFile()

Abhängig davon, wie Sie den `options`-Parameter gesetzt haben, erstellt die Methode entweder eine Datei oder ruft eine vorhandene Datei ab.

#### Syntax

```js-nolint
getFile(path)
getFile(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur Datei, die abgerufen oder erstellt werden soll. Sie können keine Datei erstellen, deren direkt übergeordnetes Verzeichnis nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
- `options`
  - : (optional) Ein Objekt, das das Verhalten der Methode beschreibt. Wenn die Datei nicht existiert, wird sie erstellt.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Objekt-Literal</th>
      <th scope="col">Bedingung</th>
      <th scope="col">Ergebnis</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Pfad existiert bereits</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Pfad existiert nicht und es tritt kein anderer Fehler auf</td>
      <td>Eine Datei wird erstellt. Falls eine Datei bereits existiert, wird kein Fehler ausgelöst.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert</td>
      <td>Die Datei wird zurückgegeben.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert nicht</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert, ist aber ein Verzeichnis</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

- [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)
  - : Repräsentiert eine Datei in einem Dateisystem.

##### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                           |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, verweist jedoch auf eine Ressource, die nicht existiert.                  |
| `NO_MODIFICATION_ALLOWED_ERR` | Es handelt sich um ein Berechtigungsproblem. Das Zielverzeichnis oder die Datei ist nicht schreibbar.       |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere mit demselben Pfad erstellen.                         |
| `QUOTA_EXCEEDED_ERROR`        | Der Vorgang würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                     |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das von path referenzierte Element zuzugreifen. [todo: Erklären, warum] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, ist jedoch kein Verzeichnis.                                                 |

### getDirectory()

Erstellt oder sucht ein Verzeichnis. Die Methode ähnelt `getFile()`, wobei DirectoryEntrySync übergeben wird.

#### Syntax

```js-nolint
getDirectory(path)
getDirectory(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur Datei, die abgerufen oder erstellt werden soll. Sie können keine Datei erstellen, deren direkt übergeordnetes Verzeichnis nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
- `options`
  - : (optional) Ein Objekt, das das Verhalten der Methode beschreibt, falls die Datei nicht existiert.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Objekt-Literal</th>
      <th scope="col">Bedingung</th>
      <th scope="col">Ergebnis</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Pfad existiert bereits</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Pfad existiert nicht und es tritt kein anderer Fehler auf</td>
      <td>
        Ein Verzeichnis wird erstellt. Falls eine Datei bereits existiert, wird kein Fehler ausgelöst.
      </td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert</td>
      <td>Das Verzeichnis wird zurückgegeben.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert nicht</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert, ist aber ein Verzeichnis</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

- [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryReaderSync)
  - : Repräsentiert ein Verzeichnis in einem Dateisystem.

##### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                           |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, verweist jedoch auf eine Ressource, die nicht existiert.                  |
| `NO_MODIFICATION_ALLOWED_ERR` | Es handelt sich um ein Berechtigungsproblem. Das Zielverzeichnis oder die Datei ist nicht schreibbar.       |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere mit demselben Pfad erstellen.                         |
| `QUOTA_EXCEEDED_ERROR`        | Der Vorgang würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                     |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das von path referenzierte Element zuzugreifen. [todo: Erklären, warum] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, ist jedoch kein Verzeichnis.                                                 |

### removeRecursively()

Löscht ein Verzeichnis und dessen gesamten Inhalt. Sie können das Stammverzeichnis eines Dateisystems nicht löschen.

Wenn Sie ein Verzeichnis löschen, das eine Datei enthält, die nicht entfernt werden kann, oder wenn ein Fehler während des Löschens auftritt, kann es sein, dass einige Inhalte nicht gelöscht werden. Erfassen Sie diese Fälle mit Fehler-Callbacks und versuchen Sie das Löschen erneut.

#### Syntax

```js-nolint
removeRecursively()
```

##### Parameter

Keine.

##### Rückgabewert

{{jsxref('undefined')}}

##### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} mit den folgenden Codes auslösen:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ausnahme</th>
      <th scope="col">Beschreibung</th>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>Das Zielverzeichnis existiert nicht.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_STATE_ERR</code></td>
      <td>
        Dieses Verzeichnis ist aus einem anderen Grund als dem Löschen nicht mehr gültig.
        <p>[todo: Mehr erklären]</p>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        Eines der folgenden ist nicht beschreibbar: das Verzeichnis, sein übergeordnetes Verzeichnis und einige der Inhalte im Verzeichnis.
      </td>
    </tr>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>
        Die Anwendung hat keine Berechtigung, auf das Zielverzeichnis, dessen übergeordnetes Verzeichnis oder einige seiner Inhalte zuzugreifen.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.
Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
