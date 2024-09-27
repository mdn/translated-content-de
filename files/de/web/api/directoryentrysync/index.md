---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Die `DirectoryEntrySync`-Schnittstelle repräsentiert ein Verzeichnis in einem Dateisystem. Sie enthält Methoden zum Erstellen, Lesen, Suchen und rekursiven Entfernen von Dateien in einem Verzeichnis.

> [!WARNING]
> Diese Schnittstelle ist veraltet und befindet sich nicht mehr auf dem Standardpfad.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundkonzepte

Wenn Sie Unterverzeichnisse erstellen möchten, müssen Sie jedes untergeordnete Verzeichnis nacheinander erstellen. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, der übergeordnete Verzeichnisse umfasst, die noch nicht existieren, erhalten Sie einen Fehler. Erstellen Sie die Hierarchie, indem Sie rekursiv einen neuen Pfad hinzufügen, nachdem das übergeordnete Verzeichnis erstellt wurde.

### Beispiel

Die Methode `getFile()` gibt ein `FileEntrySync` zurück, das eine Datei im Dateisystem repräsentiert. Im Folgenden wird eine leere Datei namens `logs.txt` im Stammverzeichnis erstellt.

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

Die Methode `getDirectory()` gibt ein `DirectoryEntrySync` zurück, das ein Verzeichnis im Dateisystem repräsentiert. Im Folgenden wird ein neues Verzeichnis namens `project_dir` im Stammverzeichnis erstellt.

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

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme        | Beschreibung                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR` | Das Verzeichnis existiert nicht.                                                                      |
| `SECURITY_ERR`  | Der Browser hat festgestellt, dass es unsicher ist, die Metadaten abzurufen. [ todo: Erklären warum ] |

### getFile()

Abhängig davon, wie Sie den Parameter `options` festgelegt haben, erstellt die Methode entweder eine Datei oder sucht eine vorhandene Datei.

#### Syntax

```js-nolint
getFile(path)
getFile(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur Datei, die gesucht oder erstellt werden soll. Sie können keine Datei erstellen, deren unmittelbarer übergeordneter Ordner nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
- `options`
  - : (optional) Ein Objektliteral, das das Verhalten der Methode beschreibt. Wenn die Datei nicht existiert, wird sie erstellt.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Objektliteral</th>
      <th scope="col">Bedingung</th>
      <th scope="col">Ergebnis</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Pfad existiert bereits</td>
      <td>Ein Fehler wird geworfen.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Pfad existiert nicht und es tritt kein weiterer Fehler auf</td>
      <td>Eine Datei wird erstellt. Wenn eine Datei bereits existiert, wird kein Fehler geworfen.</td>
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
      <td>Ein Fehler wird geworfen.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert, ist jedoch ein Verzeichnis</td>
      <td>Ein Fehler wird geworfen.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

- [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)
  - : Repräsentiert eine Datei in einem Dateisystem.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                                  |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, bezieht sich jedoch auf eine Ressource, die nicht existiert.                                     |
| `NO_MODIFICATION_ALLOWED_ERR` | Dies ist eine Berechtigungsfrage. Das Zielverzeichnis oder die Datei ist nicht beschreibbar.                                       |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere mit demselben Pfad erstellen.                                                |
| `QUOTA_EXCEEDED_ERROR`        | Der Vorgang würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                                            |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das Element zuzugreifen, auf das durch den Pfad verwiesen wird. [ todo: Erklären warum ] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, ist jedoch kein Verzeichnis.                                                                        |

### getDirectory()

Erstellt oder sucht ein Verzeichnis. Die Methode ist ähnlich wie `getFile()` mit DirectoryEntrySync als Übergabeparameter.

#### Syntax

```js-nolint
getDirectory(path)
getDirectory(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur Datei, die gesucht oder erstellt werden soll. Sie können keine Datei erstellen, deren unmittelbarer übergeordneter Ordner nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
- `options`
  - : (optional) Ein Objektliteral, das das Verhalten der Methode beschreibt, falls die Datei nicht existiert.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Objektliteral</th>
      <th scope="col">Bedingung</th>
      <th scope="col">Ergebnis</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Pfad existiert bereits</td>
      <td>Ein Fehler wird geworfen.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Pfad existiert nicht und es tritt kein weiterer Fehler auf</td>
      <td>Ein Verzeichnis wird erstellt. Wenn eine Datei bereits existiert, wird kein Fehler geworfen.</td>
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
      <td>Ein Fehler wird geworfen.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Pfad existiert, ist jedoch ein Verzeichnis</td>
      <td>Ein Fehler wird geworfen.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

- [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryReaderSync)
  - : Repräsentiert ein Verzeichnis in einem Dateisystem.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                                  |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, bezieht sich jedoch auf eine Ressource, die nicht existiert.                                     |
| `NO_MODIFICATION_ALLOWED_ERR` | Dies ist eine Berechtigungsfrage. Das Zielverzeichnis oder die Datei ist nicht beschreibbar.                                       |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere mit demselben Pfad erstellen.                                                |
| `QUOTA_EXCEEDED_ERROR`        | Der Vorgang würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                                            |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das Element zuzugreifen, auf das durch den Pfad verwiesen wird. [ todo: Erklären warum ] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, ist jedoch kein Verzeichnis.                                                                        |

### removeRecursively()

Löscht ein Verzeichnis und dessen gesamten Inhalt. Sie können das Stammverzeichnis eines Dateisystems nicht löschen.

Wenn Sie ein Verzeichnis löschen, das eine Datei enthält, die nicht entfernt werden kann, oder wenn beim Löschen ein Fehler auftritt, werden möglicherweise einige Inhalte nicht gelöscht. Erfassen Sie diese Fälle mit Fehler-Callbacks und wiederholen Sie den Löschvorgang.

#### Syntax

```js-nolint
removeRecursively()
```

##### Parameter

Keine.

##### Rückgabewert

{{jsxref('undefined')}}

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

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
        Eines der folgenden ist nicht beschreibbar: das Verzeichnis, sein übergeordnetes Verzeichnis oder einige der Inhalte im Verzeichnis.
      </td>
    </tr>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>
        Die Anwendung hat keine Berechtigung, auf das Zielverzeichnis, sein übergeordnetes Verzeichnis oder einige seiner Inhalte zuzugreifen.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

Dieses Feature ist nicht Teil einer aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.
Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
