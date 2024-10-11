---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: ac29130f454fc961f04bc9133b449771dc2f079e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Das **`ErrorEvent`**-Interface repräsentiert Ereignisse, die Informationen zu Fehlern in Skripten oder Dateien bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`ErrorEvent()`](/de/docs/Web/API/ErrorEvent/ErrorEvent)
  - : Erstellt ein `ErrorEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message) {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt.
- [`ErrorEvent.filename`](/de/docs/Web/API/ErrorEvent/filename) {{ReadOnlyInline}}
  - : Ein String, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.lineno`](/de/docs/Web/API/ErrorEvent/lineno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.colno`](/de/docs/Web/API/ErrorEvent/colno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.error`](/de/docs/Web/API/ErrorEvent/error) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, wie ein {{jsxref("Error")}} oder [`DOMException`](/de/docs/Web/API/DOMException), der den mit diesem Ereignis verbundenen Fehler darstellt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers), sehr wahrscheinlich Objekte, die ein solches Ereignis auslösen.
- [`Window`](/de/docs/Web/API/Window): [`error`](/de/docs/Web/API/Window/error_event) Ereignis
- [`Navigation`](/de/docs/Web/API/Navigation): [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) Ereignis
