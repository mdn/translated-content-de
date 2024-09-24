---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}

Die **`ClipboardEvent`**-Schnittstelle der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert Ereignisse, die Informationen über die Änderung der Zwischenablage bereitstellen, das heißt die {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} und {{domxref("Element/paste_event", "paste")}} Ereignisse.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Erstellt ein `ClipboardEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DataTransfer")}}-Objekt, das die von der vom Benutzer initiierten {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} oder {{domxref("Element/paste_event", "paste")}}-Operation betroffenen Daten zusammen mit ihrem MIME-Typ enthält.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil {{domxref("Event")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopieren-bezogene Ereignisse: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Artikel über Bildunterstützung für Async Clipboard](https://web.dev/articles/async-clipboard)
