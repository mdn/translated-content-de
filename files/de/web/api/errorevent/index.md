---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`ErrorEvent`**-Schnittstelle repräsentiert Ereignisse, die Informationen im Zusammenhang mit Fehlern in Skripten oder Dateien bereitstellen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message) {{ReadOnlyInline}}
  - : Ein String, der eine für Menschen lesbare Fehlermeldung enthält, die das Problem beschreibt. Fehlendes [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut reduziert die Fehlerprotokollierung.
- [`ErrorEvent.filename`](/de/docs/Web/API/ErrorEvent/filename) {{ReadOnlyInline}}
  - : Ein String, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.lineno`](/de/docs/Web/API/ErrorEvent/lineno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.colno`](/de/docs/Web/API/ErrorEvent/colno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.error`](/de/docs/Web/API/ErrorEvent/error) {{ReadOnlyInline}}
  - : Ein JavaScript-`Object`, das von dem Ereignis betroffen ist.

## Konstruktor

- [`ErrorEvent()`](/de/docs/Web/API/ErrorEvent/ErrorEvent)
  - : Erstellt ein `ErrorEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers), am wahrscheinlichsten Objekte, die ein solches Ereignis auslösen
