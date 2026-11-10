---
title: FileEntrySync
slug: Web/API/FileEntrySync
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("File and Directory Entries API")}} {{Non-standard_header}}

Die Schnittstelle `FileEntrySync` repräsentiert eine Datei in einem Dateisystem. Mit ihr können Sie Inhalte in eine Datei schreiben.

> [!WARNING]
> Diese Schnittstelle ist veraltet und wird nicht mehr als Standard weiterentwickelt.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Methodenübersicht

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code>FileWriterSync <a href="#createwriter">createWriter</a> ();</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>File <a href="#file">file</a> ();</code>
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

### createWriter()

Erstellt einen neuen `FileWriter`, der mit der Datei verknüpft ist, die der `FileEntry` repräsentiert.

```js-nolint
createWriter()
```

#### Parameter

Keine.

#### Rückgabewert

Ein `FileWriterSync`-Objekt.

#### Ausnahmen

Diese Methode kann eine [DOMException](/de/docs/Web/API/DOMException) mit einem der folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                |
| ------------------- | --------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | Die Datei existiert nicht.                                                  |
| `INVALID_STATE_ERR` | Die Datei ist aus einem anderen Grund als ihrer Löschung nicht mehr gültig. |

### file()

Gibt ein File zurück, das den aktuellen Zustand der Datei repräsentiert, die dieser `FileEntry` repräsentiert.

```js-nolint
file()
```

#### Parameter

Keine.

#### Rückgabewert

Ein `File`-Objekt.

#### Ausnahmen

Diese Methode kann eine [DOMException](/de/docs/Web/API/DOMException) mit einem der folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                |
| ------------------- | --------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | Die Datei existiert nicht.                                                  |
| `INVALID_STATE_ERR` | Die Datei ist aus einem anderen Grund als ihrer Löschung nicht mehr gültig. |

## Beschreibung

Um Inhalte in eine Datei zu schreiben, erstellen Sie durch Aufrufen von [`createWriter()`](#createwriter) ein FileWriter-Objekt.

## Spezifikationen

Dieses Feature ist nicht mehr Bestandteil einer Spezifikation. Es wird nicht mehr als Standard weiterentwickelt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
