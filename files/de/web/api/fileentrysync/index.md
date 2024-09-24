---
title: FileEntrySync
slug: Web/API/FileEntrySync
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}} {{Non-standard_header}}{{Deprecated_Header}}

Das `FileEntrySync`-Interface repräsentiert eine Datei in einem Dateisystem. Es ermöglicht Ihnen, Inhalte in eine Datei zu schreiben.

> [!WARNING]
> Dieses Interface ist veraltet und gehört nicht mehr zum Standard.
> _Verwenden Sie es nicht mehr._ Nutzen Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundkonzepte

Um Inhalte in eine Datei zu schreiben, erstellen Sie ein FileWriter-Objekt, indem Sie [`createWriter()`](#createwriter) aufrufen.

## Methodenübersicht

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code>FileWriterSync
          <a href="#createreader" title="#createWriter">createWriter</a> ());
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>File <a href="#file">file</a> ());</code>
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

### createWriter()

Erzeugt einen neuen `FileWriter`, der mit der Datei assoziiert ist, die das `FileEntry` repräsentiert.

```js-nolint
createWriter()
```

#### Parameter

Keine.

#### Rückgabewert

Ein `FileWriterSync`-Objekt.

#### Ausnahmen

Diese Methode kann eine [DOMException](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                   |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | Die Datei existiert nicht.                                                     |
| `INVALID_STATE_ERR` | Die Datei ist aus einem anderen Grund als ihrer Löschung nicht mehr gültig.     |

### file()

Gibt eine Datei zurück, die den aktuellen Zustand der Datei repräsentiert, die dieses `FileEntry` repräsentiert.

```js-nolint
file()
```

#### Parameter

Keine.

#### Rückgabewert

Ein `File`-Objekt.

#### Ausnahmen

Diese Methode kann eine [DOMException](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                   |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | Die Datei existiert nicht.                                                     |
| `INVALID_STATE_ERR` | Die Datei ist aus einem anderen Grund als ihrer Löschung nicht mehr gültig.     |

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [Grundkonzepte der File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
