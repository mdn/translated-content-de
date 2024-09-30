---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}

Das **`ClipboardEvent`**-Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert Ereignisse, die Informationen im Zusammenhang mit der Änderung der Zwischenablage bereitstellen, also Ereignisse wie [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event).

{{InheritanceDiagram}}

## Constructor

- [`ClipboardEvent()`](/de/docs/Web/API/ClipboardEvent/ClipboardEvent)
  - : Erstellt ein `ClipboardEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface [`Event`](/de/docs/Web/API/Event)_.

- [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) {{ReadOnlyInline}}
  - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das die von der vom Benutzer initiierten [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- oder [`paste`](/de/docs/Web/API/Element/paste_event)-Operation betroffenen Daten sowie deren MIME-Typ enthält.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Eltern-Interface [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopierbezogene Ereignisse: [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Artikel zur Unterstützung von Bildern in der asynchronen Zwischenablage](https://web.dev/articles/async-clipboard)
