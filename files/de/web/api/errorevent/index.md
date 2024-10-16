---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: c51a68c737afbd68787f4450f0c00da2dbdd5317
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`ErrorEvent`**-Schnittstelle repräsentiert Ereignisse, die Informationen zu Fehlern in Skripten oder in Dateien bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`ErrorEvent()`](/de/docs/Web/API/ErrorEvent/ErrorEvent)
  - : Erstellt ein `ErrorEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message) {{ReadOnlyInline}}
  - : Ein String, der eine für Menschen lesbare Fehlermeldung enthält, die das Problem beschreibt.
- [`ErrorEvent.filename`](/de/docs/Web/API/ErrorEvent/filename) {{ReadOnlyInline}}
  - : Ein String, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.lineno`](/de/docs/Web/API/ErrorEvent/lineno) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.colno`](/de/docs/Web/API/ErrorEvent/colno) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.error`](/de/docs/Web/API/ErrorEvent/error) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, wie ein {{jsxref("Error")}} oder [`DOMException`](/de/docs/Web/API/DOMException), der den mit diesem Ereignis verbundenen Fehler darstellt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers), höchstwahrscheinlich Objekte, die ein solches Ereignis auslösen.
- [`Window`](/de/docs/Web/API/Window): [`error`](/de/docs/Web/API/Window/error_event)-Ereignis
- [`Navigation`](/de/docs/Web/API/Navigation): [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis
