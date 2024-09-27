---
title: "MediaRecorderErrorEvent: MediaRecorderErrorEvent()-Konstruktor"
short-title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Der **`MediaRecorderErrorEvent()`**-Konstruktor erzeugt ein neues [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Objekt, das einen Fehler repräsentiert, der während der Aufnahme von Medien durch die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgetreten ist.

> [!NOTE]
> Im Allgemeinen werden Sie diese nicht selbst erzeugen; sie werden Ihrer Implementierung von [`onerror`](/de/docs/Web/API/MediaRecorder/error_event) zugestellt, wenn während der Medienaufnahme Fehler auftreten.

## Syntax

```js-nolint
new MediaRecorderErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist auf Groß- und Kleinschreibung empfindlich und Browser setzen ihn immer auf `error`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `error`
      - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der den aufgetretenen Fehler beschreibt. Die [`name`](/de/docs/Web/API/DOMException/name)-Eigenschaft dieses Objekts sollte den Namen des aufgetretenen Fehlers angeben. Die anderen Felder können vorhanden sein oder nicht.

> [!NOTE]
> Einige [User Agents](/de/docs/Glossary/user_agent) fügen dem `error`-Objekt weitere Eigenschaften hinzu, die Informationen wie Stapelspuren, den Namen der JavaScript-Datei und die Zeilennummer, in der der Fehler aufgetreten ist, sowie andere Debugging-Hilfen bereitstellen. Sie sollten sich jedoch in einer Produktionsumgebung nicht auf diese Informationen verlassen.

### Rückgabewert

Ein neues [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Objekt.

## Spezifikationen

Diese Funktion ist nicht länger Teil einer Spezifikation und wird nicht mehr zum Standard.

## Browser-Kompatibilität

{{Compat}}
