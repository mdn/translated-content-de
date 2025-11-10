---
title: FileEntrySync
slug: Web/API/FileEntrySync
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{APIRef("File and Directory Entries API")}} {{Non-standard_header}}{{Deprecated_Header}}

Das `FileEntrySync`-Interface repräsentiert eine Datei in einem Dateisystem. Es ermöglicht Ihnen, Inhalte in eine Datei zu schreiben.

> [!WARNING]
> Dieses Interface ist veraltet und nicht mehr auf dem Standardpfad.
> _Verwenden Sie es nicht mehr._ Nutzen Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundkonzepte

Um Inhalte in eine Datei zu schreiben, erstellen Sie ein `FileWriter`-Objekt, indem Sie [`createWriter()`](#createwriter) aufrufen.

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

Erstellt einen neuen `FileWriter`, der mit der Datei verbunden ist, die das `FileEntry` repräsentiert.

```js-nolint
createWriter()
```

#### Parameter

Keine.

#### Rückgabewert

Ein `FileWriterSync`-Objekt.

#### Ausnahmen

Diese Methode kann einen [DOMException](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                   |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | Die Datei existiert nicht.                                                     |
| `INVALID_STATE_ERR` | Die Datei ist aus irgendeinem anderen Grund als dem Löschen nicht mehr gültig. |

### file()

Gibt eine Datei zurück, die den aktuellen Zustand der Datei repräsentiert, die dieses `FileEntry` darstellt.

```js-nolint
file()
```

#### Parameter

Keine.

#### Rückgabewert

Ein `File`-Objekt.

#### Ausnahmen

Diese Methode kann einen [DOMException](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                   |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | Die Datei existiert nicht.                                                     |
| `INVALID_STATE_ERR` | Die Datei ist aus irgendeinem anderen Grund als dem Löschen nicht mehr gültig. |

## Spezifikationen

Dieses Feature ist nicht mehr Teil irgendeiner Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
