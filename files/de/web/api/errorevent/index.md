---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`ErrorEvent`**-Schnittstelle stellt Ereignisse dar, die Informationen zu Fehlern in Skripten oder Dateien liefern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Übernimmt auch Eigenschaften von ihrem übergeordneten {{domxref("Event")}}_.

- {{domxref("ErrorEvent.message")}} {{ReadOnlyInline}}
  - : Ein String, der eine für Menschen lesbare Fehlermeldung enthält, die das Problem beschreibt. Das Fehlen einer [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Einstellung verringert die Fehlerprotokollierung.
- {{domxref("ErrorEvent.filename")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- {{domxref("ErrorEvent.lineno")}} {{ReadOnlyInline}}
  - : Ein `integer`, der die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- {{domxref("ErrorEvent.colno")}} {{ReadOnlyInline}}
  - : Ein `integer`, der die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- {{domxref("ErrorEvent.error")}} {{ReadOnlyInline}}
  - : Ein JavaScript-`Object`, das vom Ereignis betroffen ist.

## Konstruktor

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : Erstellt ein `ErrorEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Methoden

_Übernimmt Methoden von ihrem übergeordneten {{domxref("Event")}}_.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers), höchstwahrscheinlich Objekte, die ein solches Ereignis auslösen
