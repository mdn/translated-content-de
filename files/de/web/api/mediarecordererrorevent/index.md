---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
l10n:
  sourceCommit: 8a48db345586ff90e3d5fd2fd59adac59981e9b0
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`MediaRecorderErrorEvent`**-Schnittstelle stellt Fehler dar, die von der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) zurückgegeben werden. Es ist ein [`Event`](/de/docs/Web/API/Event)-Objekt, das eine Referenz zu einem [`DOMException`](/de/docs/Web/API/DOMException) kapselt, das den aufgetretenen Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaStreamRecorderEvent()`](/de/docs/Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt und gibt ein neues `MediaRecorderErrorEvent`-Ereignisobjekt mit den angegebenen Parametern zurück.

## Instanz-Eigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event)_.

- [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), das Informationen über den aufgetretenen Fehler enthält.

## Instanz-Methoden

_Erbt Methoden von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

Dieses Merkmal ist nicht mehr Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
