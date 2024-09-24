---
title: "MediaRecorderErrorEvent: MediaRecorderErrorEvent() Konstruktor"
short-title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Der **`MediaRecorderErrorEvent()`** Konstruktor erstellt ein neues {{domxref("MediaRecorderErrorEvent")}} Objekt, das einen Fehler darstellt, der während der Aufzeichnung von Medien mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgetreten ist.

> [!NOTE]
> Im Allgemeinen werden Sie diese nicht selbst erstellen; sie werden an Ihre Implementierung von {{domxref("MediaRecorder.error_event", "onerror")}} übermittelt, wenn während der Medienaufzeichnung Fehler auftreten.

## Syntax

```js-nolint
new MediaRecorderErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `error`.
- `options`
  - : Ein Objekt, das zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `error`
      - : Ein {{domxref("DOMException")}}, der den aufgetretenen Fehler beschreibt. Die {{domxref("DOMException.name", "name")}} Eigenschaft dieses Objekts sollte den Namen des aufgetretenen Fehlers angeben. Die anderen Felder können vorhanden sein oder nicht.

> [!NOTE]
> Einige {{Glossary("user agent", "Benutzeragenten")}} fügen dem `error` Objekt weitere Eigenschaften hinzu, die Informationen wie Stack-Dumps, den Namen der JavaScript-Datei und die Zeilennummer, an der der Fehler aufgetreten ist, sowie andere Debugging-Hilfen bereitstellen. Sie sollten sich in einer Produktionsumgebung jedoch nicht auf diese Informationen verlassen.

### Rückgabewert

Ein neues {{domxref("MediaRecorderErrorEvent")}} Objekt.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation und nicht mehr auf dem Weg, zum Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
