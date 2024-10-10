---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: 2cd89ba0e74308b8f9bcd5937b76fd1188006358
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`ErrorEvent`**-Schnittstelle repräsentiert Ereignisse, die Informationen im Zusammenhang mit Fehlern in Skripten oder Dateien bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`ErrorEvent()`](/de/docs/Web/API/ErrorEvent/ErrorEvent)
  - : Erstellt ein `ErrorEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message) {{ReadOnlyInline}}
  - : Ein String, der eine lesbare Fehlermeldung enthält, die das Problem beschreibt. Ein fehlendes [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Einstellung reduziert das Fehler-Logging.
- [`ErrorEvent.filename`](/de/docs/Web/API/ErrorEvent/filename) {{ReadOnlyInline}}
  - : Ein String, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.lineno`](/de/docs/Web/API/ErrorEvent/lineno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.colno`](/de/docs/Web/API/ErrorEvent/colno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.error`](/de/docs/Web/API/ErrorEvent/error) {{ReadOnlyInline}}
  - : Ein JavaScript-`Object`, das von dem Ereignis betroffen ist.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers), höchstwahrscheinlich Objekte, die ein solches Ereignis auslösen.
- [`Window`](/de/docs/Web/API/Window): [`error`](/de/docs/Web/API/Window/error_event)-Ereignis
- [`Navigation`](/de/docs/Web/API/Navigation): [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis
