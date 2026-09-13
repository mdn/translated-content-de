---
title: "MediaRecorderErrorEvent: MediaRecorderErrorEvent()-Konstruktor"
short-title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("MediaStream Recording")}}{{Non-standard_Header}}

Der **`MediaRecorderErrorEvent()`**-Konstruktor erstellt ein neues [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Objekt, das einen Fehler repräsentiert, der während der Aufnahme von Medien durch die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgetreten ist.

> [!NOTE]
> Im Allgemeinen werden Sie diese nicht selbst erstellen; sie werden Ihrer Implementierung von [`onerror`](/de/docs/Web/API/MediaRecorder/error_event) geliefert, wenn während der Medienaufnahme Fehler auftreten.

## Syntax

```js-nolint
new MediaRecorderErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist case-sensitiv und Browser setzen ihn immer auf `error`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `error`
      - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der den aufgetretenen Fehler beschreibt. Die [`name`](/de/docs/Web/API/DOMException/name)-Eigenschaft dieses Objekts sollte den Namen des aufgetretenen Fehlers angeben. Die anderen Felder können vorhanden sein oder auch nicht.

> [!NOTE]
> Einige {{Glossary("user_agent", "User Agents")}} fügen dem `error`-Objekt andere Eigenschaften hinzu, die Informationen wie Stack-Dumps, den Namen der JavaScript-Datei und die Zeilennummer, wo der Fehler auftrat, und andere Debugging-Hilfen bereitstellen, aber Sie sollten sich in einer Produktionsumgebung nicht auf diese Informationen verlassen.

### Rückgabewert

Ein neues [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Objekt.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation und ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
