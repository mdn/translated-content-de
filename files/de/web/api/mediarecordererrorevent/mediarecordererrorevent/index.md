---
title: "MediaRecorderErrorEvent: MediaRecorderErrorEvent() Konstruktor"
short-title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Der **`MediaRecorderErrorEvent()`** Konstruktor erstellt ein neues [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) Objekt, das einen Fehler darstellt, der während der Aufzeichnung von Medien durch die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgetreten ist.

> [!NOTE]
> Im Allgemeinen werden Sie diese nicht selbst erstellen; sie werden an Ihre Implementierung von [`onerror`](/de/docs/Web/API/MediaRecorder/error_event) geliefert, wenn während der Medienaufzeichnung Fehler auftreten.

## Syntax

```js-nolint
new MediaRecorderErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und wird von Browsern immer auf `error` gesetzt.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `error`
      - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der den aufgetretenen Fehler beschreibt. Die [`name`](/de/docs/Web/API/DOMException/name) Eigenschaft dieses Objekts sollte den Namen des aufgetretenen Fehlers angeben. Die anderen Felder können vorhanden sein oder auch nicht.

> [!NOTE]
> Einige [User Agents](/de/docs/Glossary/user_agent) fügen dem `error` Objekt andere Eigenschaften hinzu, die Informationen wie Stack Dumps, den Namen der JavaScript-Datei und die Zeilennummer, an der der Fehler aufgetreten ist, sowie andere Debugging-Hilfen bereitstellen. Sie sollten sich jedoch in einer Produktionsumgebung nicht auf diese Informationen verlassen.

### Rückgabewert

Ein neues [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) Objekt.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation und nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
