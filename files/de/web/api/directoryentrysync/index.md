---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Die `DirectoryEntrySync`-Schnittstelle repräsentiert ein Verzeichnis in einem Dateisystem. Sie enthält Methoden zum Erstellen, Lesen, Suchen und rekursiven Entfernen von Dateien in einem Verzeichnis.

> [!WARNING]
> Diese Schnittstelle ist veraltet und befindet sich nicht mehr auf dem Standardweg.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundlegende Konzepte

Wenn Sie Unterverzeichnisse erstellen möchten, müssen Sie jedes Unterverzeichnis nacheinander erstellen. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, der übergeordnete Verzeichnisse enthält, die noch nicht existieren, erhalten Sie einen Fehler. Erstellen Sie also die Hierarchie, indem Sie rekursiv einen neuen Pfad hinzufügen, nachdem Sie das übergeordnete Verzeichnis erstellt haben.

### Beispiel

Die Methode `getFile()` gibt ein `FileEntrySync` zurück, das eine Datei im Dateisystem darstellt. Folgendes erstellt eine leere Datei namens `logs.txt` im Stammverzeichnis.

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

Die Methode `getDirectory()` gibt ein `DirectoryEntrySync` zurück, das ein Verzeichnis im Dateisystem darstellt. Folgendes erstellt ein neues Verzeichnis namens `project_dir` im Stammverzeichnis.

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

Ein [`DirectoryReaderSync`](/de/docs/Web/API/DirectoryReaderSync)-Objekt, das ein Verzeichnis in einem Dateisystem darstellt.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme        | Beschreibung                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR` | Das Verzeichnis existiert nicht.                                                                         |
| `SECURITY_ERR`  | Der Browser hat festgestellt, dass es nicht sicher war, die Metadaten abzurufen. [todo: Erklären, warum] |

### getFile()

Abhängig davon, wie Sie den `options`-Parameter festgelegt haben, erstellt die Methode entweder eine Datei oder sucht eine vorhandene Datei.

#### Syntax

```js-nolint
getFile(path)
getFile(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur zu suchenden oder zu erstellenden Datei. Sie können keine Datei erstellen, deren unmittelbarer Elternknoten nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
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
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Pfad existiert nicht und es tritt kein anderer Fehler auf</td>
      <td>Eine Datei wird erstellt. Wenn bereits eine Datei existiert, tritt kein Fehler auf.</td>
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
      <td>Pfad existiert, ist jedoch ein Verzeichnis</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

Ein [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)-Objekt, das eine Datei in einem Dateisystem darstellt.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                       |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, bezieht sich jedoch auf eine Ressource, die nicht existiert.                          |
| `NO_MODIFICATION_ALLOWED_ERR` | Dies ist ein Berechtigungsproblem. Das Zielverzeichnis oder die Datei ist nicht beschreibbar.                           |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Es kann keine weitere mit dem gleichen Pfad erstellt werden.                               |
| `QUOTA_EXCEEDED_ERROR`        | Die Operation würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                               |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das durch den Pfad referenzierte Element zuzugreifen. [todo: Erklären, warum] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, aber es ist kein Verzeichnis.                                                            |

### getDirectory()

Erstellt oder sucht ein Verzeichnis. Die Methode ist ähnlich wie `getFile()`, wobei `DirectoryEntrySync` übergeben wird.

#### Syntax

```js-nolint
getDirectory(path)
getDirectory(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur zu suchenden oder zu erstellenden Datei. Sie können keine Datei erstellen, deren unmittelbarer Elternknoten nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
- `options`
  - : (optional) Ein Objektliteral, das das Verhalten der Methode beschreibt, wenn die Datei nicht existiert.

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
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Pfad existiert nicht und es tritt kein anderer Fehler auf</td>
      <td>
        Ein Verzeichnis wird erstellt. Wenn bereits eine Datei existiert, tritt kein Fehler auf.
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
      <td>Pfad existiert, ist jedoch ein Verzeichnis</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

Ein [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryReaderSync)-Objekt, das ein Verzeichnis in einem Dateisystem darstellt.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                       |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, bezieht sich jedoch auf eine Ressource, die nicht existiert.                          |
| `NO_MODIFICATION_ALLOWED_ERR` | Dies ist ein Berechtigungsproblem. Das Zielverzeichnis oder die Datei ist nicht beschreibbar.                           |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Es kann keine weitere mit dem gleichen Pfad erstellt werden.                               |
| `QUOTA_EXCEEDED_ERROR`        | Die Operation würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                               |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das durch den Pfad referenzierte Element zuzugreifen. [todo: Erklären, warum] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, aber es ist kein Verzeichnis.                                                            |

### removeRecursively()

Löscht ein Verzeichnis und dessen gesamten Inhalt. Sie können das Stammverzeichnis eines Dateisystems nicht löschen.

Wenn Sie ein Verzeichnis löschen, das eine Datei enthält, die nicht entfernt werden kann, oder wenn ein Fehler auftritt, während das Löschen im Gange ist, werden möglicherweise einige der Inhalte nicht gelöscht. Fangen Sie diese Fälle mit Fehler-Callbacks ab und versuchen Sie das Löschen erneut.

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
        Dieses Verzeichnis ist aus einem anderen als dem Grund des Gelöschtseins nicht mehr gültig.
        <p>[todo: Mehr erklären]</p>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        Eines der Folgenden ist nicht beschreibbar: das Verzeichnis, dessen übergeordnetes Verzeichnis und einige der Inhalte im Verzeichnis.
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
