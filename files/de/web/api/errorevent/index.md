---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: bcb3ff5a0fd5080c2ce109d0eb17831b6ef57a2d
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Das **`ErrorEvent`**-Interface stellt Ereignisse dar, die Informationen über Fehler in Skripten oder Dateien bieten.

{{InheritanceDiagram}}

## Konstruktor

- [`ErrorEvent()`](/de/docs/Web/API/ErrorEvent/ErrorEvent)
  - : Erstellt ein `ErrorEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message) {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt. Das Fehlen einer [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Einstellung verringert die Fehlerprotokollierung.
- [`ErrorEvent.filename`](/de/docs/Web/API/ErrorEvent/filename) {{ReadOnlyInline}}
  - : Ein String, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.lineno`](/de/docs/Web/API/ErrorEvent/lineno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.colno`](/de/docs/Web/API/ErrorEvent/colno) {{ReadOnlyInline}}
  - : Ein `integer`, der die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- [`ErrorEvent.error`](/de/docs/Web/API/ErrorEvent/error) {{ReadOnlyInline}}
  - : Ein JavaScript-`Object`, das von dem Ereignis betroffen ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers), höchstwahrscheinlich Objekte, die ein solches Ereignis auslösen
