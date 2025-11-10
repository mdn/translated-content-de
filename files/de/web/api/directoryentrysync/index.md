---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Das `DirectoryEntrySync`-Interface repräsentiert ein Verzeichnis in einem Dateisystem. Es umfasst Methoden zum Erstellen, Lesen, Suchen und rekursivem Entfernen von Dateien in einem Verzeichnis.

> [!WARNING]
> Dieses Interface ist veraltet und befindet sich nicht mehr auf dem Standardpfad.
> _Verwenden Sie es nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundlegende Konzepte

Wenn Sie Unterverzeichnisse erstellen möchten, müssen Sie jedes Unterverzeichnis nacheinander erstellen. Versuchen Sie, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, der noch nicht existierende übergeordnete Verzeichnisse enthält, erhalten Sie einen Fehler. Erstellen Sie die Hierarchie, indem Sie nach der Erstellung des übergeordneten Verzeichnisses rekursiv einen neuen Pfad hinzufügen.

### Beispiel

Die Methode `getFile()` gibt ein `FileEntrySync` zurück, das eine Datei im Dateisystem darstellt. Das folgende Beispiel erstellt eine leere Datei namens `logs.txt` im Stammverzeichnis.

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

Die Methode `getDirectory()` gibt ein `DirectoryEntrySync` zurück, das ein Verzeichnis im Dateisystem darstellt. Das folgende Beispiel erstellt ein neues Verzeichnis namens `project_dir` im Stammverzeichnis.

```js
const dirEntry = fs.root.getDirectory("project_dir", { create: true });
```

## Überblick über die Methoden

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

| Ausnahme        | Beschreibung                                                                                              |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR` | Das Verzeichnis existiert nicht.                                                                          |
| `SECURITY_ERR`  | Der Browser hat festgestellt, dass es nicht sicher ist, die Metadaten abzurufen. [ todo: Erklären warum ] |

### getFile()

Abhängig davon, wie Sie den Parameter `options` gesetzt haben, erstellt die Methode entweder eine Datei oder sucht nach einer vorhandenen Datei.

#### Syntax

```js-nolint
getFile(path)
getFile(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur zu suchenden oder zu erstellenden Datei. Sie können keine Datei erstellen, deren unmittelbares Elternverzeichnis nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
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
      <td>Pfad existiert nicht und kein anderer Fehler tritt auf</td>
      <td>Eine Datei wird erstellt. Wenn eine Datei bereits existiert, wird kein Fehler ausgelöst.</td>
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

- [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)
  - : Repräsentiert eine Datei in einem Dateisystem.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                        |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, bezieht sich jedoch auf eine Ressource, die nicht existiert.                           |
| `NO_MODIFICATION_ALLOWED_ERR` | Dies ist ein Berechtigungsproblem. Das Zielverzeichnis oder die Datei ist nicht beschreibbar.                            |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere mit dem gleichen Pfad erstellen.                                   |
| `QUOTA_EXCEEDED_ERROR`        | Der Vorgang würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                                  |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das durch den Pfad referenzierte Element zuzugreifen. [ todo: Erklären warum ] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, ist jedoch kein Verzeichnis.                                                              |

### getDirectory()

Erstellt oder sucht ein Verzeichnis. Die Methode ist ähnlich wie `getFile()`, wobei `DirectoryEntrySync` übergeben wird.

#### Syntax

```js-nolint
getDirectory(path)
getDirectory(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zur zu suchenden oder zu erstellenden Datei. Sie können keine Datei erstellen, deren unmittelbares Elternverzeichnis nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
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
      <td>Pfad existiert nicht und kein anderer Fehler tritt auf</td>
      <td>
        Ein Verzeichnis wird erstellt. Wenn eine Datei bereits existiert, wird kein Fehler ausgelöst.
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

- [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryReaderSync)
  - : Repräsentiert ein Verzeichnis in einem Dateisystem.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                        |
| `NOT_FOUND_ERR`               | Der Pfad war strukturell korrekt, bezieht sich jedoch auf eine Ressource, die nicht existiert.                           |
| `NO_MODIFICATION_ALLOWED_ERR` | Dies ist ein Berechtigungsproblem. Das Zielverzeichnis oder die Datei ist nicht beschreibbar.                            |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere mit dem gleichen Pfad erstellen.                                   |
| `QUOTA_EXCEEDED_ERROR`        | Der Vorgang würde dazu führen, dass die Anwendung ihr Speicherkontingent überschreitet.                                  |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das durch den Pfad referenzierte Element zuzugreifen. [ todo: Erklären warum ] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, ist jedoch kein Verzeichnis.                                                              |

### removeRecursively()

Löscht ein Verzeichnis und dessen gesamten Inhalt. Sie können das Stammverzeichnis eines Dateisystems nicht löschen.

Wenn Sie ein Verzeichnis löschen, das eine Datei enthält, die nicht entfernt werden kann, oder wenn ein Fehler während des Löschvorgangs auftritt, wird möglicherweise ein Teil des Inhalts nicht gelöscht. Fangen Sie diese Fälle mit Fehler-Callbacks ab und versuchen Sie die Löschung erneut.

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
        Dieses Verzeichnis ist aus einem anderen Grund nicht mehr gültig, als es gelöscht wurde.
        <p>[todo: Mehr erklären]</p>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        Eines der folgenden ist nicht beschreibbar: das Verzeichnis, sein übergeordnetes
        Verzeichnis und ein Teil des Inhalts im Verzeichnis.
      </td>
    </tr>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>
        Die Anwendung hat keine Berechtigung, auf das Zielverzeichnis,
        sein übergeordnetes Verzeichnis oder einige seiner Inhalte zuzugreifen.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.
Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
