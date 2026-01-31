---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{APIRef("Clipboard API")}}

Das **`ClipboardEvent`**-Interface der [Clipboard-API](/de/docs/Web/API/Clipboard_API) repräsentiert Ereignisse, die Informationen im Zusammenhang mit der Änderung der Zwischenablage bereitstellen, also [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) Ereignisse.

{{InheritanceDiagram}}

## Konstruktor

- [`ClipboardEvent()`](/de/docs/Web/API/ClipboardEvent/ClipboardEvent)
  - : Erstellt ein `ClipboardEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) {{ReadOnlyInline}}
  - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das die von der vom Benutzer initiierten [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) oder [`paste`](/de/docs/Web/API/Element/paste_event) Operation betroffenen Daten zusammen mit deren MIME-Typ enthält.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopierbezogene Ereignisse: [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Clipboard-API](/de/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
