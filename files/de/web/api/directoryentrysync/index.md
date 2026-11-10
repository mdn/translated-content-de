---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Die Schnittstelle `DirectoryEntrySync` repräsentiert ein Verzeichnis in einem Dateisystem. Sie bietet Methoden zum Erstellen, Lesen, Nachschlagen und rekursiven Entfernen von Dateien in einem Verzeichnis.

> [!WARNING]
> Diese Schnittstelle ist veraltet und wird nicht mehr als Standard weiterentwickelt.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

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

Ein [`DirectoryReaderSync`](/de/docs/Web/API/DirectoryReaderSync)-Objekt, das ein Verzeichnis in einem Dateisystem repräsentiert.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem der folgenden Codes auslösen:

| Ausnahme        | Beschreibung                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR` | Das Verzeichnis existiert nicht.                                                                              |
| `SECURITY_ERR`  | Der Browser hat festgestellt, dass das Nachschlagen der Metadaten nicht sicher ist. [ todo: Grund erläutern ] |

### getFile()

Je nachdem, wie Sie den Parameter `options` festgelegt haben, erstellt die Methode entweder eine Datei oder sucht nach einer vorhandenen Datei.

#### Syntax

```js-nolint
getFile(path)
getFile(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zu der Datei, die gesucht oder erstellt werden soll. Sie können keine Datei erstellen, deren direkt übergeordnetes Verzeichnis nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
- `options`
  - : (Optional) Ein Objektliteral, das das Verhalten der Methode beschreibt. Wenn die Datei nicht existiert, wird sie erstellt.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Objektliteral</th>
      <th scope="col">Bedingung</th>
      <th scope="col">Ergebnis</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Der Pfad existiert bereits</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Der Pfad existiert nicht und es tritt kein anderer Fehler auf</td>
      <td>Eine Datei wird erstellt. Wenn bereits eine Datei existiert, wird kein Fehler ausgelöst.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Der Pfad existiert</td>
      <td>Die Datei wird zurückgegeben.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Der Pfad existiert nicht</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Der Pfad existiert, bezeichnet aber ein Verzeichnis</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

Ein [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)-Objekt, das eine Datei in einem Dateisystem repräsentiert.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem der folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                       |
| `NOT_FOUND_ERR`               | Der Pfad ist strukturell korrekt, verweist aber auf eine Ressource, die nicht existiert.                                |
| `NO_MODIFICATION_ALLOWED_ERR` | Es liegt ein Berechtigungsproblem vor. Das Zielverzeichnis oder die Zieldatei ist nicht beschreibbar.                   |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere Datei mit demselben Pfad erstellen.                               |
| `QUOTA_EXCEEDED_ERROR`        | Durch den Vorgang würde die Anwendung ihr Speicherkontingent überschreiten.                                             |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das durch den Pfad bezeichnete Element zuzugreifen. [ todo: Grund erläutern ] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, bezeichnet aber kein Verzeichnis.                                                        |

### getDirectory()

Erstellt ein Verzeichnis oder sucht nach einem vorhandenen Verzeichnis. Die Methode ähnelt `getFile()`, wobei ein `DirectoryEntrySync` zurückgegeben wird.

#### Syntax

```js-nolint
getDirectory(path)
getDirectory(path, options)
```

##### Parameter

- `path`
  - : Entweder ein absoluter Pfad oder ein relativer Pfad vom Verzeichnis zu der Datei, die gesucht oder erstellt werden soll. Sie können keine Datei erstellen, deren direkt übergeordnetes Verzeichnis nicht existiert. Erstellen Sie zuerst das übergeordnete Verzeichnis.
- `options`
  - : (Optional) Ein Objektliteral, das das Verhalten der Methode beschreibt, falls die Datei nicht existiert.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Objektliteral</th>
      <th scope="col">Bedingung</th>
      <th scope="col">Ergebnis</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Der Pfad existiert bereits</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Der Pfad existiert nicht und es tritt kein anderer Fehler auf</td>
      <td>
        Ein Verzeichnis wird erstellt. Wenn bereits eine Datei existiert, wird kein Fehler ausgelöst.
      </td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Der Pfad existiert</td>
      <td>Das Verzeichnis wird zurückgegeben.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Der Pfad existiert nicht</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> wird ignoriert)
      </td>
      <td>Der Pfad existiert, bezeichnet aber ein Verzeichnis</td>
      <td>Ein Fehler wird ausgelöst.</td>
    </tr>
  </tbody>
</table>

##### Rückgabewert

Ein [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryReaderSync)-Objekt, das ein Verzeichnis in einem Dateisystem repräsentiert.

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem der folgenden Codes auslösen:

| Ausnahme                      | Beschreibung                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | Der angegebene Pfad ist ungültig.                                                                                       |
| `NOT_FOUND_ERR`               | Der Pfad ist strukturell korrekt, verweist aber auf eine Ressource, die nicht existiert.                                |
| `NO_MODIFICATION_ALLOWED_ERR` | Es liegt ein Berechtigungsproblem vor. Das Zielverzeichnis oder die Zieldatei ist nicht beschreibbar.                   |
| `PATH_EXISTS_ERR`             | Die Datei existiert bereits. Sie können keine weitere Datei mit demselben Pfad erstellen.                               |
| `QUOTA_EXCEEDED_ERROR`        | Durch den Vorgang würde die Anwendung ihr Speicherkontingent überschreiten.                                             |
| `SECURITY_ERR`                | Die Anwendung hat keine Berechtigung, auf das durch den Pfad bezeichnete Element zuzugreifen. [ todo: Grund erläutern ] |
| `TYPE_MISMATCH_ERR`           | Der angegebene Pfad existiert, bezeichnet aber kein Verzeichnis.                                                        |

### removeRecursively()

Löscht ein Verzeichnis und seinen gesamten Inhalt. Sie können das Stammverzeichnis eines Dateisystems nicht löschen.

Wenn Sie ein Verzeichnis löschen, das eine nicht entfernbare Datei enthält, oder während des Löschvorgangs ein Fehler auftritt, wird möglicherweise ein Teil des Inhalts nicht gelöscht. Fangen Sie solche Fälle mit Fehler-Callbacks ab und versuchen Sie erneut, das Verzeichnis zu löschen.

#### Syntax

```js-nolint
removeRecursively()
```

##### Parameter

Keine.

##### Rückgabewert

{{jsxref('undefined')}}

##### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem der folgenden Codes auslösen:

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
        Dieses Verzeichnis ist aus einem anderen Grund als seiner Löschung nicht mehr gültig.
        <p>[todo: Näher erläutern ]</p>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        Mindestens eines der folgenden Elemente ist nicht beschreibbar: das Verzeichnis,
        sein übergeordnetes Verzeichnis oder ein Teil des Inhalts des Verzeichnisses.
      </td>
    </tr>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>
        Die Anwendung hat keine Berechtigung, auf das Zielverzeichnis, sein übergeordnetes
        Verzeichnis oder einen Teil seines Inhalts zuzugreifen.
      </td>
    </tr>
  </tbody>
</table>

## Beschreibung

Wenn Sie Unterverzeichnisse erstellen möchten, müssen Sie jedes Unterverzeichnis nacheinander erstellen. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, dessen übergeordnete Verzeichnisse noch nicht existieren, erhalten Sie einen Fehler. Erstellen Sie die Hierarchie daher, indem Sie nach dem Erstellen des jeweils übergeordneten Verzeichnisses rekursiv einen neuen Pfad hinzufügen.

## Beispiele

Die Methode `getFile()` gibt ein `FileEntrySync` zurück, das eine Datei im Dateisystem repräsentiert. Das folgende Beispiel erstellt im Stammverzeichnis eine leere Datei namens `logs.txt`.

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

Die Methode `getDirectory()` gibt ein `DirectoryEntrySync` zurück, das eine Datei im Dateisystem repräsentiert. Das folgende Beispiel erstellt im Stammverzeichnis ein neues Verzeichnis namens `project_dir`.

```js
const dirEntry = fs.root.getDirectory("project_dir", { create: true });
```

## Spezifikationen

Dieses Feature ist nicht Teil einer aktuellen Spezifikation. Es wird nicht mehr als Standard weiterentwickelt.
Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
